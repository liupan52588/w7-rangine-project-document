(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68db0da0"],{"02f4":function(e,t,r){var a=r("4588"),n=r("be13");e.exports=function(e){return function(t,r){var o,i,c=String(n(t)),s=a(r),l=c.length;return s<0||s>=l?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===l||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):o:e?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var a=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"214f":function(e,t,r){"use strict";r("b0c5");var a=r("2aba"),n=r("32e9"),o=r("79e5"),i=r("be13"),c=r("2b4c"),s=r("520a"),l=c("species"),u=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),_=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var d=c(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f?!o((function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[l]=function(){return r}),r[d](""),!t})):void 0;if(!f||!p||"replace"===e&&!u||"split"===e&&!_){var g=/./[d],v=r(i,d,""[e],(function(e,t,r,a,n){return t.exec===s?f&&!n?{done:!0,value:g.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}})),h=v[0],b=v[1];a(String.prototype,e,h),n(RegExp.prototype,d,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}}},"28a5":function(e,t,r){"use strict";var a=r("aae3"),n=r("cb7c"),o=r("ebd6"),i=r("0390"),c=r("9def"),s=r("5f1b"),l=r("520a"),u=r("79e5"),_=Math.min,d=[].push,f="split",p="length",g="lastIndex",v=4294967295,h=!u((function(){RegExp(v,"y")}));r("214f")("split",2,(function(e,t,r,u){var b;return b="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[p]||2!="ab"[f](/(?:ab)*/)[p]||4!="."[f](/(.?)(.?)/)[p]||"."[f](/()()/)[p]>1||""[f](/.?/)[p]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(n,e,t);var o,i,c,s=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),_=0,f=void 0===t?v:t>>>0,h=new RegExp(e.source,u+"g");while(o=l.call(h,n)){if(i=h[g],i>_&&(s.push(n.slice(_,o.index)),o[p]>1&&o.index<n[p]&&d.apply(s,o.slice(1)),c=o[0][p],_=i,s[p]>=f))break;h[g]===o.index&&h[g]++}return _===n[p]?!c&&h.test("")||s.push(""):s.push(n.slice(_)),s[p]>f?s.slice(0,f):s}:"0"[f](void 0,0)[p]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var n=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,n,a):b.call(String(n),r,a)},function(e,t){var a=u(b,e,this,t,b!==r);if(a.done)return a.value;var l=n(e),d=String(this),f=o(l,RegExp),p=l.unicode,g=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(h?"y":"g"),m=new f(h?l:"^(?:"+l.source+")",g),x=void 0===t?v:t>>>0;if(0===x)return[];if(0===d.length)return null===s(m,d)?[d]:[];var w=0,D=0,E=[];while(D<d.length){m.lastIndex=h?D:0;var k,P=s(m,h?d:d.slice(D));if(null===P||(k=_(c(m.lastIndex+(h?0:D)),d.length))===w)D=i(d,D,p);else{if(E.push(d.slice(w,D)),E.length===x)return E;for(var C=1;C<=P.length-1;C++)if(E.push(P[C]),E.length===x)return E;D=w=k}}return E.push(d.slice(w)),E}]}))},"3ad4":function(e,t,r){},"3b2b":function(e,t,r){var a=r("7726"),n=r("5dbc"),o=r("86cc").f,i=r("9093").f,c=r("aae3"),s=r("0bfb"),l=a.RegExp,u=l,_=l.prototype,d=/a/g,f=/a/g,p=new l(d)!==d;if(r("9e1e")&&(!p||r("79e5")((function(){return f[r("2b4c")("match")]=!1,l(d)!=d||l(f)==f||"/a/i"!=l(d,"i")})))){l=function(e,t){var r=this instanceof l,a=c(e),o=void 0===t;return!r&&a&&e.constructor===l&&o?e:n(p?new u(a&&!o?e.source:e,t):u((a=e instanceof l)?e.source:e,a&&o?s.call(e):t),r?this:_,l)};for(var g=function(e){e in l||o(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},v=i(u),h=0;v.length>h;)g(v[h++]);_.constructor=l,l.prototype=_,r("2aba")(a,"RegExp",l)}r("7a56")("RegExp")},4917:function(e,t,r){"use strict";var a=r("cb7c"),n=r("9def"),o=r("0390"),i=r("5f1b");r("214f")("match",1,(function(e,t,r,c){return[function(r){var a=e(this),n=void 0==r?void 0:r[t];return void 0!==n?n.call(r,a):new RegExp(r)[t](String(a))},function(e){var t=c(r,e,this);if(t.done)return t.value;var s=a(e),l=String(this);if(!s.global)return i(s,l);var u=s.unicode;s.lastIndex=0;var _,d=[],f=0;while(null!==(_=i(s,l))){var p=String(_[0]);d[f]=p,""===p&&(s.lastIndex=o(l,n(s.lastIndex),u)),f++}return 0===f?null:d}]}))},"520a":function(e,t,r){"use strict";var a=r("0bfb"),n=RegExp.prototype.exec,o=String.prototype.replace,i=n,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[c]||0!==t[c]}(),l=void 0!==/()??/.exec("")[1],u=s||l;u&&(i=function(e){var t,r,i,u,_=this;return l&&(r=new RegExp("^"+_.source+"$(?!\\s)",a.call(_))),s&&(t=_[c]),i=n.call(_,e),s&&i&&(_[c]=_.global?i.index+i[0].length:t),l&&i&&i.length>1&&o.call(i[0],r,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i}),e.exports=i},"5f1b":function(e,t,r){"use strict";var a=r("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},9836:function(e,t,r){"use strict";var a=r("3ad4"),n=r.n(a);n.a},a481:function(e,t,r){"use strict";var a=r("cb7c"),n=r("4bf8"),o=r("9def"),i=r("4588"),c=r("0390"),s=r("5f1b"),l=Math.max,u=Math.min,_=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};r("214f")("replace",2,(function(e,t,r,g){return[function(a,n){var o=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,o,n):r.call(String(o),a,n)},function(e,t){var n=g(r,e,this,t);if(n.done)return n.value;var _=a(e),d=String(this),f="function"===typeof t;f||(t=String(t));var h=_.global;if(h){var b=_.unicode;_.lastIndex=0}var m=[];while(1){var x=s(_,d);if(null===x)break;if(m.push(x),!h)break;var w=String(x[0]);""===w&&(_.lastIndex=c(d,o(_.lastIndex),b))}for(var D="",E=0,k=0;k<m.length;k++){x=m[k];for(var P=String(x[0]),C=l(u(i(x.index),d.length),0),O=[],y=1;y<x.length;y++)O.push(p(x[y]));var j=x.groups;if(f){var I=[P].concat(O,C,d);void 0!==j&&I.push(j);var M=String(t.apply(void 0,I))}else M=v(P,d,C,O,j,t);C>=E&&(D+=d.slice(E,C)+M,E=C+P.length)}return D+d.slice(E)}];function v(e,t,a,o,i,c){var s=a+e.length,l=o.length,u=f;return void 0!==i&&(i=n(i),u=d),r.call(c,u,(function(r,n){var c;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,a);case"'":return t.slice(s);case"<":c=i[n.slice(1,-1)];break;default:var u=+n;if(0===u)return r;if(u>l){var d=_(u/10);return 0===d?r:d<=l?void 0===o[d-1]?n.charAt(1):o[d-1]+n.charAt(1):r}c=o[u-1]}return void 0===c?"":c}))}}))},aae3:function(e,t,r){var a=r("d3f4"),n=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==n(e))}},b0c5:function(e,t,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},b56e:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"page-head"},[e._v("我的文档管理")]),r("div",{staticClass:"container-box"},[r("div",{staticClass:"search-box"},[r("div",{staticClass:"search-box-input"},[r("el-input",{staticClass:"demo-input-suffix",attrs:{placeholder:"请输入文档名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getAllProject(t)}},model:{value:e.searchData.keyword,callback:function(t){e.$set(e.searchData,"keyword",t)},expression:"searchData.keyword"}},[r("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.getAllProject},slot:"suffix"})]),r("el-select",{on:{change:e.getAllProject},model:{value:e.searchData.is_public,callback:function(t){e.$set(e.searchData,"is_public",t)},expression:"searchData.is_public"}},[r("el-option",{attrs:{label:"全部",value:""}}),r("el-option",{attrs:{label:"公有",value:"1"}}),r("el-option",{attrs:{label:"私有",value:"2"}})],1),r("el-select",{on:{change:e.getAllProject},model:{value:e.searchData.role,callback:function(t){e.$set(e.searchData,"role",t)},expression:"searchData.role"}},[r("el-option",{attrs:{label:"全部",value:""}}),r("el-option",{attrs:{label:"我创建的",value:"1"}}),r("el-option",{attrs:{label:"我操作的",value:"2"}})],1)],1)]),r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"card-box"},[r("div",{staticClass:"card-warpper"},[e._l(e.docList,(function(t,a){return r("div",{key:a,staticClass:"w7-card",class:{"has-cover":t.cover},style:{backgroundImage:"url("+t.cover+")"},on:{click:function(r){return e.goChapter(t)}}},[r("div",{staticClass:"w7-card-title"},[e._v("\n            "+e._s(t.name)+"\n            "),t.is_public?e._e():r("i",{staticClass:"wi wi-lock"})]),r("div",{staticClass:"w7-card-time"},[e._v(e._s(e.format(t.operator.time))+" "+e._s(t.operator.name))]),r("div",{staticClass:"icon-box"},[t.acl.has_manage?r("el-tooltip",{attrs:{effect:"dark",content:"转让项目",placement:"bottom"}},[r("i",{staticClass:"wi wi-transfer",on:{click:function(r){return r.stopPropagation(),e.transferDoc(t.id)}}})]):e._e(),r("el-tooltip",{attrs:{effect:"dark",content:"预览",placement:"bottom"}},[r("i",{staticClass:"wi wi-view",on:{click:function(r){return r.stopPropagation(),e.readDoc(t)}}})]),t.acl.has_manage?r("el-tooltip",{attrs:{effect:"dark",content:"进入管理",placement:"bottom"}},[r("i",{staticClass:"wi wi-guanli",on:{click:function(r){return r.stopPropagation(),e.settingDoc(t.id)}}})]):e._e()],1)])})),r("div",{staticClass:"w7-card add-btn",on:{click:e.dialogDocShow}},[r("div",{staticClass:"add-text"},[e._v("新建项目")]),e._m(0)])],2)]),r("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next, total","prev-text":"上一页","next-text":"下一页","page-size":e.page_size,"current-page":e.currentPage,"page-count":e.pageCount,"hide-on-single-page":!1},on:{"current-change":e.getAllProject,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}),r("el-dialog",{staticClass:"w7-dialog",attrs:{title:"创建项目",visible:e.dialogDocInfoVisible,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogDocInfoVisible=t}}},[r("el-form",{attrs:{"label-width":"105px","label-position":"left"}},[r("el-form-item",{attrs:{label:"项目名称"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("el-radio-group",{staticClass:"ownership",model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[r("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("公开项目")]),r("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("私有项目")])],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.createDoc}},[e._v("确 定")]),r("el-button",{on:{click:function(t){e.dialogDocInfoVisible=!1}}},[e._v("取 消")])],1)],1),r("el-dialog",{staticClass:"w7-dialog",attrs:{title:"管理员转让",visible:e.dialogTransferDoc,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogTransferDoc=t}}},[r("div",{staticClass:"transfer-tip"},[r("i",{staticClass:"el-icon-warning"}),e._v("转让管理员权限后您将成为操作员，不再是管理员，请谨慎操作。\n      ")]),r("el-form",{attrs:{"label-width":"115px","label-position":"left"}},[r("el-form-item",{attrs:{label:"选择新的管理员"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.transferUsername,callback:function(t){e.transferUsername=t},expression:"transferUsername"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.transfer}},[e._v("确 定")]),r("el-button",{on:{click:function(t){e.dialogTransferDoc=!1}}},[e._v("取 消")])],1)],1)],1),r("el-dialog",{staticClass:"we7-dialog dialog-setting",attrs:{title:"项目设置",width:"1000px",visible:e.showSetting,"close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.showSetting=t}}},[r("setting",{attrs:{id:e.settingDocId}})],1)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"add-box"},[r("i",{staticClass:"el-icon-circle-plus"})])}],o=(r("8e6e"),r("456d"),r("ac6a"),r("7f7f"),r("bd86")),i=r("fa7d"),c=r("4ec3"),s=r("49f7");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"docIndex",components:{setting:s["a"]},data:function(){return{radio:"1",loading:!1,searchData:{keyword:"",role:"",is_public:""},docList:[],currentPage:0,page_size:19,pageCount:0,total:0,name:"",dialogDocInfoVisible:!1,actClass:"actClass",dialogTransferDoc:!1,transferUsername:"",selectDocId:"",showSetting:!1,settingDocId:""}},created:function(){this.getAllProject()},methods:{dialogDocShow:function(){this.dialogDocInfoVisible=!0,this.name=""},getAllProject:function(){var e=this;this.loading=!0,Object(c["d"])(u({page:this.currentPage,page_size:this.page_size},this.searchData)).then((function(t){200==t.code&&(e.docList=t.data.data,e.pageCount=t.page_count,e.total=t.total,e.loading=!1)}))},createDoc:function(){var e=this;Object(c["b"])({name:this.name,is_public:this.radio}).then((function(t){e.$message("创建成功！"),e.dialogDocInfoVisible=!1,e.getAllProject()}))},removeDoc:function(e){var t=this;this.$confirm("确定删除该文档吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$post("/admin/document/delete",{id:e}).then((function(){t.getAllProject(),t.$message("删除成功！")}))}))},updateDoc:function(e,t){var r=this;this.$post("/admin/document/update",{id:e,is_show:1==t?2:1}).then((function(){r.docList.forEach((function(r){r.id!=e||(r.is_show=1==t?2:1)}))}))},readDoc:function(e){var t=this.$router.resolve({path:"/chapter/"+e.id});localStorage.projectName=e.name,window.open(t.href,"_blank")},settingDoc:function(e){this.settingDocId=e,this.showSetting=!0},transferDoc:function(e){this.selectDocId=e,this.transferUsername="",this.dialogTransferDoc=!0},transfer:function(){var e=this;this.$post("/admin/document/change-founder",{document_id:this.selectDocId,username:this.transferUsername}).then((function(){e.getAllProject(),e.$message("转让成功！"),e.dialogTransferDoc=!1}))},goChapter:function(e,t){var r={name:"chapter",params:{id:e.id}};t&&(r["query"]={type:"add",documentType:1}),localStorage.projectName=e.name,this.$router.push(r)},format:function(e){if(e){var t=Object(i["a"])(e);return t.length>8?Object(i["a"])(e).slice(5):Object(i["a"])(e)}},handleClose:function(){this.getAllProject(),this.showSetting=!1}}},d=_,f=(r("9836"),r("2877")),p=Object(f["a"])(d,a,n,!1,null,"e6fb3106",null);t["default"]=p.exports},fa7d:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return timestampFormat}));var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__);function getUrlParam(e,t){var r=new RegExp("(^|&)"+t+"=([^&]*)(&|$)");if(e&&e.split("?")[1]){var a=e.split("?")[1].match(r);return null!=a?unescape(a[2]):null}}function replaceParamVal(url,paramName,replaceVal){var oUrl=url.toString(),re=eval("/("+paramName+"=)([^&]*)/gi"),nUrl=oUrl.replace(re,paramName+"="+replaceVal);return nUrl}function timestampFormat(e){var t=Date.parse(e)/1e3;function r(e){return(1==String(e).length?"0":"")+e}var a=parseInt((new Date).getTime()/1e3),n=a-t,o=new Date(1e3*a),i=new Date(1e3*t),c=i.getFullYear(),s=i.getMonth()+1,l=i.getDate(),u=i.getHours(),_=i.getMinutes();if(n<60)return"刚刚";if(n<3600)return Math.floor(n/60)+"分钟前";if(o.getFullYear()==c&&o.getMonth()+1==s&&o.getDate()==l)return"今天"+r(u)+":"+r(_);var d=new Date(1e3*(a-86400));return d.getFullYear()==c&&d.getMonth()+1==s&&d.getDate()==l?"昨天"+r(u)+":"+r(_):c+"年"+r(s)+"月"+r(l)+"日 "+r(u)+":"+r(_)}}}]);