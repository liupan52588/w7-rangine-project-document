<?php

/**
 * WeEngine Document System
 *
 * (c) We7Team 2019 <https://www.w7.cc>
 *
 * This is not a free software
 * Using it under the license terms
 * visited https://www.w7.cc for more details
 */

namespace W7\App\Controller\Document;

use W7\App\Controller\BaseController;
use W7\App\Exception\ErrorHttpException;
use W7\App\Model\Entity\Document\ChapterContent;
use W7\App\Model\Entity\Setting;
use W7\App\Model\Entity\Star;
use W7\App\Model\Entity\UserOperateLog;
use W7\App\Model\Logic\ChapterLogic;
use W7\App\Model\Logic\Document\ChapterApi\ChapterRecordLogic;
use W7\App\Model\Logic\Document\ChapterApi\ChapterRuleLogic;
use W7\App\Model\Logic\DocumentLogic;
use W7\App\Model\Logic\UserLogic;
use W7\App\Model\Logic\UserOperateLogic;
use W7\App\Model\Logic\UserShareLogic;
use W7\Http\Message\Server\Request;

class ChapterController extends BaseController
{
	/**
	 * @api {post} /document/chapter/ruleDemo 文档-mock规则数据
	 * @apiName rule
	 * @apiGroup Chapter
	 *
	 * @apiParam {Number} chapter_id 章节ID
	 * @apiParam {Number} location_type 请求类型1请求2响应
	 * @apiParam {Number} reponse_id 响应ID
	 */
	public function ruleDemo(Request $request)
	{
		$params = $this->validate($request, [
			'chapter_id' => 'required|integer|min:1',
			'location_type' => 'required|in:1,2',
			'reponse_id' => 'integer'
		], [
			'chapter_id.required' => '文档id必填',
			'location_type.integer' => '请求类型',
			'reponse_id' => '响应ID',
		]);
		$reponseId = $params['reponse_id'] ? $params['reponse_id'] : 0;
		//获取rule参数样例
		$chapterDemoLogic = new ChapterRuleLogic($params['chapter_id']);
		$query = $chapterDemoLogic->getChapterRule($params['location_type'], $reponseId);
		return $query;
	}

	/**
	 * 某一个文档的目录
	 * @param Request $request
	 * @return array
	 */
	public function catalog(Request $request)
	{
		$params = $this->validate($request, [
			'document_id' => 'required|integer|min:1',
		], [
			'document_id.required' => '文档id必填',
			'document_id.integer' => '文档id非法'
		]);

		try {
			$result = ChapterLogic::instance()->getCatalog($params['document_id']);

			$user = $request->getAttribute('user');
			if (empty($user->isReader)) {
				throw new ErrorHttpException('当前账户无权限阅读该文档', Setting::ERROR_NO_POWER);
			}
			if ($user && !empty($user->id)) {
				UserOperateLog::query()->create([
					'user_id' => $user->id,
					'document_id' => $params['document_id'],
					'chapter_id' => 0,
					'operate' => UserOperateLog::PREVIEW,
					'remark' => $user->username . '阅读文档'
				]);
			}
			return $this->data($result);
		} catch (\Exception $e) {
			throw new ErrorHttpException($e->getMessage());
		}
	}

	public function detail(Request $request)
	{
		$params = $this->validate($request, [
			'document_id' => 'required|integer|min:1',
			'chapter_id' => 'required|integer|min:1'
		], [
			'document_id.required' => '文档id必填',
			'document_id.integer' => '文档id非法',
			'chapter_id.required' => '章节id必填',
			'chapter_id.integer' => '章节id非法'
		]);
		$shareKey = $request->post('share_key');

		try {
			$shareInfo = [];
			if ($shareKey) {
				$shareInfo = UserShareLogic::instance()->getUidAndChapterByShareKey($shareKey);
			}
			$chapter = ChapterLogic::instance()->getById($params['chapter_id'], $params['document_id']);

			$user = $request->getAttribute('user');
			if (empty($user->isReader)) {
				throw new ErrorHttpException('当前账户无权限阅读该文档', [], Setting::ERROR_NO_POWER);
			}
			if (!empty($user->id)) {
				UserOperateLog::query()->create([
					'user_id' => $user->id,
					'document_id' => $params['document_id'],
					'chapter_id' => $params['chapter_id'],
					'operate' => UserOperateLog::PREVIEW,
					'remark' => $user->username . '浏览章节' . $chapter->name
				]);
				//如果当前用户不是分享者并且是当前章节时，添加分享记录
				if ($shareInfo && $shareInfo[0] != $user->id && $shareInfo[1] == $params['chapter_id']) {
					if (!UserOperateLog::query()->where('user_id', '=', $shareInfo[0])->where('target_user_id', '=', $user->id)->where('chapter_id', '=', $params['chapter_id'])->exists()) {
						$sharerUser = UserLogic::instance()->getByUid($shareInfo[0]);
						UserOperateLog::query()->create([
							'user_id' => $shareInfo[0],
							'document_id' => $params['document_id'],
							'chapter_id' => $params['chapter_id'],
							'target_user_id' => $user->id,
							'operate' => UserOperateLog::SHARE,
							'remark' => $sharerUser->username . '分享链接' . UserShareLogic::instance()->getShareUrl($shareInfo[0], $params['document_id'], $params['chapter_id']) . '给' . $user->username
						]);
					}
				}
			}
		} catch (\Exception $e) {
			throw new ErrorHttpException($e->getMessage());
		}

		if (!$chapter) {
			throw new ErrorHttpException('该章节不存在！', [], Setting::ERROR_NO_FIND);
		}

		$document = DocumentLogic::instance()->getById($params['document_id']);
		$creator = UserOperateLogic::instance()->getByChapterAndOperate($chapter->id, UserOperateLog::CREATE);
		if ($creator) {
			$author = $creator->user;
		} else {
			$author = $document->user;
		}

		if (!empty($user->id)) {
			$star = Star::query()->where('user_id', '=', $user->id)->where('chapter_id', '=', $chapter->id)->first();
		}
		if (!$chapter->content->content) {
			if ($chapter->content->layout == ChapterContent::LAYOUT_HTTP) {
				$markdownText = '#';
				//如果是导入的，没有生成文档的数据，进行生成文档并标记
				$chapterRecordLogic = new ChapterRecordLogic($chapter->id);
				$record = $chapterRecordLogic->showRecord();
				if ($record) {
					$chapterRecordLogic = new ChapterRecordLogic($chapter->id);
					$markdownTextReplay = $chapterRecordLogic->recordToMarkdown($record, 1);
					if ($markdownTextReplay) {
						$markdownText = $markdownTextReplay;
					}
				}
				$chapter->content->content = $markdownText;
				$chapter->content->save();
			}
		}

		$result = [
			'id' => $chapter->id,
			'parent_id' => $chapter->parent_id,
			'name' => $chapter->name,
			'document_id' => $chapter->document_id,
			'created_at' => $chapter->created_at->toDateTimeString(),
			'updated_at' => $chapter->updated_at->toDateTimeString(),
			'content' => $chapter->content->content,
			'star_id' => !empty($star) ? $star->id : '',
			'prev_item' => [
				'id' => $chapter->prevItem->id ?? '',
				'name' => $chapter->prevItem->name ?? '',
			],
			'next_item' => [
				'id' => $chapter->nextItem->id ?? '',
				'name' => $chapter->nextItem->name ?? '',
			],
			'author' => [
				'uid' => $author->id,
				'username' => $author->username,
			],
			'document' => $document
		];

		return $this->data($result);
	}

	public function search(Request $request)
	{
		$this->validate($request, [
			'keywords' => 'required',
		], [
			'keywords.required' => '关键字必填',
		]);

		$keyword = $request->input('keywords');
		$documentId = intval($request->input('document_id'));
	}
}
