/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!k.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c}catch(e){}O.set(a,b,c);
}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return this;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b];
},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){return n.trim(a.value)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var hb=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!hb.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,hb.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var ib=a.location,jb=n.now(),kb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return(!c||c.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+b),c};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb={},sb={},tb="*/".concat("*"),ub=d.createElement("a");ub.href=ib.href;function vb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function wb(a,b,c,d){var e={},f=a===sb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function xb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function yb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function zb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ib.href,type:"GET",isLocal:ob.test(ib.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":tb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?xb(xb(a,n.ajaxSettings),b):xb(n.ajaxSettings,a)},ajaxPrefilter:vb(rb),ajaxTransport:vb(sb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=nb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||ib.href)+"").replace(lb,"").replace(qb,ib.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=ub.protocol+"//"+ub.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),wb(rb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!pb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(kb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=mb.test(f)?f.replace(mb,"$1_="+jb++):f+(kb.test(f)?"&":"?")+"_="+jb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+tb+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=wb(sb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=yb(m,x,d)),u=zb(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Ab=/%20/g,Bb=/\[\]$/,Cb=/\r?\n/g,Db=/^(?:submit|button|image|reset|file)$/i,Eb=/^(?:input|select|textarea|keygen)/i;function Fb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Bb.test(a)?d(a,e):Fb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Fb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Fb(c,a[c],b,e);return d.join("&").replace(Ab,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Eb.test(this.nodeName)&&!Db.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Cb,"\r\n")}}):{name:b.name,value:c.replace(Cb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Gb={0:200,1223:204},Hb=n.ajaxSettings.xhr();l.cors=!!Hb&&"withCredentials"in Hb,l.ajax=Hb=!!Hb,n.ajaxTransport(function(b){var c,d;return l.cors||Hb&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Gb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Ib=[],Jb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Ib.pop()||n.expando+"_"+jb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Jb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Jb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Ib.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Kb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Kb)return Kb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Lb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Lb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),d.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Lb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Mb=a.jQuery,Nb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Nb),b&&a.jQuery===n&&(a.jQuery=Mb),n},b||(a.jQuery=a.$=n),n});

/*!
	Autosize 3.0.15
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);p=t.overflowY,"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),c="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(c)&&(c=0),i()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,p=t,f&&(e.style.overflowY=t),o()}function o(){var t=window.pageYOffset,n=document.body.scrollTop,o=e.style.height;e.style.height="auto";var i=e.scrollHeight+c;return 0===e.scrollHeight?void(e.style.height=o):(e.style.height=i+"px",v=e.clientWidth,document.documentElement.scrollTop=t,void(document.body.scrollTop=n))}function i(){var t=e.style.height;o();var i=window.getComputedStyle(e,null);if(i.height!==e.style.height?"visible"!==p&&n("visible"):"hidden"!==p&&n("hidden"),t!==e.style.height){var r=d("autosize:resized");e.dispatchEvent(r)}}var s=void 0===arguments[1]?{}:arguments[1],a=s.setOverflowX,l=void 0===a?!0:a,u=s.setOverflowY,f=void 0===u?!0:u;if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!r.has(e)){var c=null,p=null,v=e.clientWidth,h=function(){e.clientWidth!==v&&i()},y=function(t){window.removeEventListener("resize",h,!1),e.removeEventListener("input",i,!1),e.removeEventListener("keyup",i,!1),e.removeEventListener("autosize:destroy",y,!1),e.removeEventListener("autosize:update",i,!1),r["delete"](e),Object.keys(t).forEach(function(n){e.style[n]=t[n]})}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",y,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",i,!1),window.addEventListener("resize",h,!1),e.addEventListener("input",i,!1),e.addEventListener("autosize:update",i,!1),r.add(e),l&&(e.style.overflowX="hidden",e.style.wordWrap="break-word"),t()}}function o(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:destroy");e.dispatchEvent(t)}}function i(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName){var t=d("autosize:update");e.dispatchEvent(t)}}var r="function"==typeof Set?new Set:function(){var e=[];return{has:function(t){return Boolean(e.indexOf(t)>-1)},add:function(t){e.push(t)},"delete":function(t){e.splice(e.indexOf(t),1)}}}(),d=function(e){return new Event(e)};try{new Event("test")}catch(s){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var a=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(a=function(e){return e},a.destroy=function(e){return e},a.update=function(e){return e}):(a=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},a.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},a.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=a});
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

var dateFormat = function () {
  var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};


/*!
 * Datepicker for Bootstrap v1.5.1 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a,b){function c(){return new Date(Date.UTC.apply(Date,arguments))}function d(){var a=new Date;return c(a.getFullYear(),a.getMonth(),a.getDate())}function e(a,b){return a.getUTCFullYear()===b.getUTCFullYear()&&a.getUTCMonth()===b.getUTCMonth()&&a.getUTCDate()===b.getUTCDate()}function f(a){return function(){return this[a].apply(this,arguments)}}function g(a){return a&&!isNaN(a.getTime())}function h(b,c){function d(a,b){return b.toLowerCase()}var e,f=a(b).data(),g={},h=new RegExp("^"+c.toLowerCase()+"([A-Z])");c=new RegExp("^"+c.toLowerCase());for(var i in f)c.test(i)&&(e=i.replace(h,d),g[e]=f[i]);return g}function i(b){var c={};if(q[b]||(b=b.split("-")[0],q[b])){var d=q[b];return a.each(p,function(a,b){b in d&&(c[b]=d[b])}),c}}var j=function(){var b={get:function(a){return this.slice(a)[0]},contains:function(a){for(var b=a&&a.valueOf(),c=0,d=this.length;d>c;c++)if(this[c].valueOf()===b)return c;return-1},remove:function(a){this.splice(a,1)},replace:function(b){b&&(a.isArray(b)||(b=[b]),this.clear(),this.push.apply(this,b))},clear:function(){this.length=0},copy:function(){var a=new j;return a.replace(this),a}};return function(){var c=[];return c.push.apply(c,arguments),a.extend(c,b),c}}(),k=function(b,c){a(b).data("datepicker",this),this._process_options(c),this.dates=new j,this.viewDate=this.o.defaultViewDate,this.focusDate=null,this.element=a(b),this.isInline=!1,this.isInput=this.element.is("input"),this.component=this.element.hasClass("date")?this.element.find(".add-on, .input-group-addon, .btn"):!1,this.hasInput=this.component&&this.element.find("input").length,this.component&&0===this.component.length&&(this.component=!1),this.picker=a(r.template),this._buildEvents(),this._attachEvents(),this.isInline?this.picker.addClass("datepicker-inline").appendTo(this.element):this.picker.addClass("datepicker-dropdown dropdown-menu"),this.o.rtl&&this.picker.addClass("datepicker-rtl"),this.viewMode=this.o.startView,this.o.calendarWeeks&&this.picker.find("thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan",function(a,b){return parseInt(b)+1}),this._allow_update=!1,this.setStartDate(this._o.startDate),this.setEndDate(this._o.endDate),this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled),this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted),this.setDatesDisabled(this.o.datesDisabled),this.fillDow(),this.fillMonths(),this._allow_update=!0,this.update(),this.showMode(),this.isInline&&this.show()};k.prototype={constructor:k,_process_options:function(b){this._o=a.extend({},this._o,b);var e=this.o=a.extend({},this._o),f=e.language;switch(q[f]||(f=f.split("-")[0],q[f]||(f=o.language)),e.language=f,e.startView){case 2:case"decade":e.startView=2;break;case 1:case"year":e.startView=1;break;default:e.startView=0}switch(e.minViewMode){case 1:case"months":e.minViewMode=1;break;case 2:case"years":e.minViewMode=2;break;default:e.minViewMode=0}switch(e.maxViewMode){case 0:case"days":e.maxViewMode=0;break;case 1:case"months":e.maxViewMode=1;break;default:e.maxViewMode=2}e.startView=Math.min(e.startView,e.maxViewMode),e.startView=Math.max(e.startView,e.minViewMode),e.multidate!==!0&&(e.multidate=Number(e.multidate)||!1,e.multidate!==!1&&(e.multidate=Math.max(0,e.multidate))),e.multidateSeparator=String(e.multidateSeparator),e.weekStart%=7,e.weekEnd=(e.weekStart+6)%7;var g=r.parseFormat(e.format);if(e.startDate!==-(1/0)&&(e.startDate?e.startDate instanceof Date?e.startDate=this._local_to_utc(this._zero_time(e.startDate)):e.startDate=r.parseDate(e.startDate,g,e.language):e.startDate=-(1/0)),e.endDate!==1/0&&(e.endDate?e.endDate instanceof Date?e.endDate=this._local_to_utc(this._zero_time(e.endDate)):e.endDate=r.parseDate(e.endDate,g,e.language):e.endDate=1/0),e.daysOfWeekDisabled=e.daysOfWeekDisabled||[],a.isArray(e.daysOfWeekDisabled)||(e.daysOfWeekDisabled=e.daysOfWeekDisabled.split(/[,\s]*/)),e.daysOfWeekDisabled=a.map(e.daysOfWeekDisabled,function(a){return parseInt(a,10)}),e.daysOfWeekHighlighted=e.daysOfWeekHighlighted||[],a.isArray(e.daysOfWeekHighlighted)||(e.daysOfWeekHighlighted=e.daysOfWeekHighlighted.split(/[,\s]*/)),e.daysOfWeekHighlighted=a.map(e.daysOfWeekHighlighted,function(a){return parseInt(a,10)}),e.datesDisabled=e.datesDisabled||[],!a.isArray(e.datesDisabled)){var h=[];h.push(r.parseDate(e.datesDisabled,g,e.language)),e.datesDisabled=h}e.datesDisabled=a.map(e.datesDisabled,function(a){return r.parseDate(a,g,e.language)});var i=String(e.orientation).toLowerCase().split(/\s+/g),j=e.orientation.toLowerCase();if(i=a.grep(i,function(a){return/^auto|left|right|top|bottom$/.test(a)}),e.orientation={x:"auto",y:"auto"},j&&"auto"!==j)if(1===i.length)switch(i[0]){case"top":case"bottom":e.orientation.y=i[0];break;case"left":case"right":e.orientation.x=i[0]}else j=a.grep(i,function(a){return/^left|right$/.test(a)}),e.orientation.x=j[0]||"auto",j=a.grep(i,function(a){return/^top|bottom$/.test(a)}),e.orientation.y=j[0]||"auto";else;if(e.defaultViewDate){var k=e.defaultViewDate.year||(new Date).getFullYear(),l=e.defaultViewDate.month||0,m=e.defaultViewDate.day||1;e.defaultViewDate=c(k,l,m)}else e.defaultViewDate=d()},_events:[],_secondaryEvents:[],_applyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(d=b,e=a[f][1]):3===a[f].length&&(d=a[f][1],e=a[f][2]),c.on(e,d)},_unapplyEvents:function(a){for(var c,d,e,f=0;f<a.length;f++)c=a[f][0],2===a[f].length?(e=b,d=a[f][1]):3===a[f].length&&(e=a[f][1],d=a[f][2]),c.off(d,e)},_buildEvents:function(){var b={keyup:a.proxy(function(b){-1===a.inArray(b.keyCode,[27,37,39,38,40,32,13,9])&&this.update()},this),keydown:a.proxy(this.keydown,this),paste:a.proxy(this.paste,this)};this.o.showOnFocus===!0&&(b.focus=a.proxy(this.show,this)),this.isInput?this._events=[[this.element,b]]:this.component&&this.hasInput?this._events=[[this.element.find("input"),b],[this.component,{click:a.proxy(this.show,this)}]]:this.element.is("div")?this.isInline=!0:this._events=[[this.element,{click:a.proxy(this.show,this)}]],this._events.push([this.element,"*",{blur:a.proxy(function(a){this._focused_from=a.target},this)}],[this.element,{blur:a.proxy(function(a){this._focused_from=a.target},this)}]),this.o.immediateUpdates&&this._events.push([this.element,{"changeYear changeMonth":a.proxy(function(a){this.update(a.date)},this)}]),this._secondaryEvents=[[this.picker,{click:a.proxy(this.click,this)}],[a(window),{resize:a.proxy(this.place,this)}],[a(document),{mousedown:a.proxy(function(a){this.element.is(a.target)||this.element.find(a.target).length||this.picker.is(a.target)||this.picker.find(a.target).length||this.picker.hasClass("datepicker-inline")||this.hide()},this)}]]},_attachEvents:function(){this._detachEvents(),this._applyEvents(this._events)},_detachEvents:function(){this._unapplyEvents(this._events)},_attachSecondaryEvents:function(){this._detachSecondaryEvents(),this._applyEvents(this._secondaryEvents)},_detachSecondaryEvents:function(){this._unapplyEvents(this._secondaryEvents)},_trigger:function(b,c){var d=c||this.dates.get(-1),e=this._utc_to_local(d);this.element.trigger({type:b,date:e,dates:a.map(this.dates,this._utc_to_local),format:a.proxy(function(a,b){0===arguments.length?(a=this.dates.length-1,b=this.o.format):"string"==typeof a&&(b=a,a=this.dates.length-1),b=b||this.o.format;var c=this.dates.get(a);return r.formatDate(c,b,this.o.language)},this)})},show:function(){var b=this.component?this.element.find("input"):this.element;if(!b.attr("readonly")||this.o.enableOnReadonly!==!1)return this.isInline||this.picker.appendTo(this.o.container),this.place(),this.picker.show(),this._attachSecondaryEvents(),this._trigger("show"),(window.navigator.msMaxTouchPoints||"ontouchstart"in document)&&this.o.disableTouchKeyboard&&a(this.element).blur(),this},hide:function(){return this.isInline?this:this.picker.is(":visible")?(this.focusDate=null,this.picker.hide().detach(),this._detachSecondaryEvents(),this.viewMode=this.o.startView,this.showMode(),this.o.forceParse&&(this.isInput&&this.element.val()||this.hasInput&&this.element.find("input").val())&&this.setValue(),this._trigger("hide"),this):this},remove:function(){return this.hide(),this._detachEvents(),this._detachSecondaryEvents(),this.picker.remove(),delete this.element.data().datepicker,this.isInput||delete this.element.data().date,this},paste:function(b){var c;if(b.originalEvent.clipboardData&&b.originalEvent.clipboardData.types&&-1!==a.inArray("text/plain",b.originalEvent.clipboardData.types))c=b.originalEvent.clipboardData.getData("text/plain");else{if(!window.clipboardData)return;c=window.clipboardData.getData("Text")}this.setDate(c),this.update(),b.preventDefault()},_utc_to_local:function(a){return a&&new Date(a.getTime()+6e4*a.getTimezoneOffset())},_local_to_utc:function(a){return a&&new Date(a.getTime()-6e4*a.getTimezoneOffset())},_zero_time:function(a){return a&&new Date(a.getFullYear(),a.getMonth(),a.getDate())},_zero_utc_time:function(a){return a&&new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()))},getDates:function(){return a.map(this.dates,this._utc_to_local)},getUTCDates:function(){return a.map(this.dates,function(a){return new Date(a)})},getDate:function(){return this._utc_to_local(this.getUTCDate())},getUTCDate:function(){var a=this.dates.get(-1);return"undefined"!=typeof a?new Date(a):null},clearDates:function(){var a;this.isInput?a=this.element:this.component&&(a=this.element.find("input")),a&&a.val(""),this.update(),this._trigger("changeDate"),this.o.autoclose&&this.hide()},setDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,b),this._trigger("changeDate"),this.setValue(),this},setUTCDates:function(){var b=a.isArray(arguments[0])?arguments[0]:arguments;return this.update.apply(this,a.map(b,this._utc_to_local)),this._trigger("changeDate"),this.setValue(),this},setDate:f("setDates"),setUTCDate:f("setUTCDates"),setValue:function(){var a=this.getFormattedDate();return this.isInput?this.element.val(a):this.component&&this.element.find("input").val(a),this},getFormattedDate:function(c){c===b&&(c=this.o.format);var d=this.o.language;return a.map(this.dates,function(a){return r.formatDate(a,c,d)}).join(this.o.multidateSeparator)},setStartDate:function(a){return this._process_options({startDate:a}),this.update(),this.updateNavArrows(),this},setEndDate:function(a){return this._process_options({endDate:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekDisabled:function(a){return this._process_options({daysOfWeekDisabled:a}),this.update(),this.updateNavArrows(),this},setDaysOfWeekHighlighted:function(a){return this._process_options({daysOfWeekHighlighted:a}),this.update(),this},setDatesDisabled:function(a){this._process_options({datesDisabled:a}),this.update(),this.updateNavArrows()},place:function(){if(this.isInline)return this;var b=this.picker.outerWidth(),c=this.picker.outerHeight(),d=10,e=a(this.o.container),f=e.width(),g="body"===this.o.container?a(document).scrollTop():e.scrollTop(),h=e.offset(),i=[];this.element.parents().each(function(){var b=a(this).css("z-index");"auto"!==b&&0!==b&&i.push(parseInt(b))});var j=Math.max.apply(Math,i)+this.o.zIndexOffset,k=this.component?this.component.parent().offset():this.element.offset(),l=this.component?this.component.outerHeight(!0):this.element.outerHeight(!1),m=this.component?this.component.outerWidth(!0):this.element.outerWidth(!1),n=k.left-h.left,o=k.top-h.top;"body"!==this.o.container&&(o+=g),this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"),"auto"!==this.o.orientation.x?(this.picker.addClass("datepicker-orient-"+this.o.orientation.x),"right"===this.o.orientation.x&&(n-=b-m)):k.left<0?(this.picker.addClass("datepicker-orient-left"),n-=k.left-d):n+b>f?(this.picker.addClass("datepicker-orient-right"),n+=m-b):this.picker.addClass("datepicker-orient-left");var p,q=this.o.orientation.y;if("auto"===q&&(p=-g+o-c,q=0>p?"bottom":"top"),this.picker.addClass("datepicker-orient-"+q),"top"===q?o-=c+parseInt(this.picker.css("padding-top")):o+=l,this.o.rtl){var r=f-(n+m);this.picker.css({top:o,right:r,zIndex:j})}else this.picker.css({top:o,left:n,zIndex:j});return this},_allow_update:!0,update:function(){if(!this._allow_update)return this;var b=this.dates.copy(),c=[],d=!1;return arguments.length?(a.each(arguments,a.proxy(function(a,b){b instanceof Date&&(b=this._local_to_utc(b)),c.push(b)},this)),d=!0):(c=this.isInput?this.element.val():this.element.data("date")||this.element.find("input").val(),c=c&&this.o.multidate?c.split(this.o.multidateSeparator):[c],delete this.element.data().date),c=a.map(c,a.proxy(function(a){return r.parseDate(a,this.o.format,this.o.language)},this)),c=a.grep(c,a.proxy(function(a){return!this.dateWithinRange(a)||!a},this),!0),this.dates.replace(c),this.dates.length?this.viewDate=new Date(this.dates.get(-1)):this.viewDate<this.o.startDate?this.viewDate=new Date(this.o.startDate):this.viewDate>this.o.endDate?this.viewDate=new Date(this.o.endDate):this.viewDate=this.o.defaultViewDate,d?this.setValue():c.length&&String(b)!==String(this.dates)&&this._trigger("changeDate"),!this.dates.length&&b.length&&this._trigger("clearDate"),this.fill(),this.element.change(),this},fillDow:function(){var a=this.o.weekStart,b="<tr>";for(this.o.calendarWeeks&&(this.picker.find(".datepicker-days .datepicker-switch").attr("colspan",function(a,b){return parseInt(b)+1}),b+='<th class="cw">&#160;</th>');a<this.o.weekStart+7;)b+='<th class="dow">'+q[this.o.language].daysMin[a++%7]+"</th>";b+="</tr>",this.picker.find(".datepicker-days thead").append(b)},fillMonths:function(){for(var a="",b=0;12>b;)a+='<span class="month">'+q[this.o.language].monthsShort[b++]+"</span>";this.picker.find(".datepicker-months td").html(a)},setRange:function(b){b&&b.length?this.range=a.map(b,function(a){return a.valueOf()}):delete this.range,this.fill()},getClassNames:function(b){var c=[],d=this.viewDate.getUTCFullYear(),e=this.viewDate.getUTCMonth(),f=new Date;return b.getUTCFullYear()<d||b.getUTCFullYear()===d&&b.getUTCMonth()<e?c.push("old"):(b.getUTCFullYear()>d||b.getUTCFullYear()===d&&b.getUTCMonth()>e)&&c.push("new"),this.focusDate&&b.valueOf()===this.focusDate.valueOf()&&c.push("focused"),this.o.todayHighlight&&b.getUTCFullYear()===f.getFullYear()&&b.getUTCMonth()===f.getMonth()&&b.getUTCDate()===f.getDate()&&c.push("today"),-1!==this.dates.contains(b)&&c.push("active"),(!this.dateWithinRange(b)||this.dateIsDisabled(b))&&c.push("disabled"),-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekHighlighted)&&c.push("highlighted"),this.range&&(b>this.range[0]&&b<this.range[this.range.length-1]&&c.push("range"),-1!==a.inArray(b.valueOf(),this.range)&&c.push("selected"),b.valueOf()===this.range[0]&&c.push("range-start"),b.valueOf()===this.range[this.range.length-1]&&c.push("range-end")),c},fill:function(){var d,e=new Date(this.viewDate),f=e.getUTCFullYear(),g=e.getUTCMonth(),h=this.o.startDate!==-(1/0)?this.o.startDate.getUTCFullYear():-(1/0),i=this.o.startDate!==-(1/0)?this.o.startDate.getUTCMonth():-(1/0),j=this.o.endDate!==1/0?this.o.endDate.getUTCFullYear():1/0,k=this.o.endDate!==1/0?this.o.endDate.getUTCMonth():1/0,l=q[this.o.language].today||q.en.today||"",m=q[this.o.language].clear||q.en.clear||"",n=q[this.o.language].titleFormat||q.en.titleFormat;if(!isNaN(f)&&!isNaN(g)){this.picker.find(".datepicker-days thead .datepicker-switch").text(r.formatDate(new c(f,g),n,this.o.language)),this.picker.find("tfoot .today").text(l).toggle(this.o.todayBtn!==!1),this.picker.find("tfoot .clear").text(m).toggle(this.o.clearBtn!==!1),this.picker.find("thead .datepicker-title").text(this.o.title).toggle(""!==this.o.title),this.updateNavArrows(),this.fillMonths();var o=c(f,g-1,28),p=r.getDaysInMonth(o.getUTCFullYear(),o.getUTCMonth());o.setUTCDate(p),o.setUTCDate(p-(o.getUTCDay()-this.o.weekStart+7)%7);var s=new Date(o);o.getUTCFullYear()<100&&s.setUTCFullYear(o.getUTCFullYear()),s.setUTCDate(s.getUTCDate()+42),s=s.valueOf();for(var t,u=[];o.valueOf()<s;){if(o.getUTCDay()===this.o.weekStart&&(u.push("<tr>"),this.o.calendarWeeks)){var v=new Date(+o+(this.o.weekStart-o.getUTCDay()-7)%7*864e5),w=new Date(Number(v)+(11-v.getUTCDay())%7*864e5),x=new Date(Number(x=c(w.getUTCFullYear(),0,1))+(11-x.getUTCDay())%7*864e5),y=(w-x)/864e5/7+1;u.push('<td class="cw">'+y+"</td>")}if(t=this.getClassNames(o),t.push("day"),this.o.beforeShowDay!==a.noop){var z=this.o.beforeShowDay(this._utc_to_local(o));z===b?z={}:"boolean"==typeof z?z={enabled:z}:"string"==typeof z&&(z={classes:z}),z.enabled===!1&&t.push("disabled"),z.classes&&(t=t.concat(z.classes.split(/\s+/))),z.tooltip&&(d=z.tooltip)}t=a.unique(t),u.push('<td class="'+t.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+o.getUTCDate()+"</td>"),d=null,o.getUTCDay()===this.o.weekEnd&&u.push("</tr>"),o.setUTCDate(o.getUTCDate()+1)}this.picker.find(".datepicker-days tbody").empty().append(u.join(""));var A=q[this.o.language].monthsTitle||q.en.monthsTitle||"Months",B=this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode<2?A:f).end().find("span").removeClass("active");if(a.each(this.dates,function(a,b){b.getUTCFullYear()===f&&B.eq(b.getUTCMonth()).addClass("active")}),(h>f||f>j)&&B.addClass("disabled"),f===h&&B.slice(0,i).addClass("disabled"),f===j&&B.slice(k+1).addClass("disabled"),this.o.beforeShowMonth!==a.noop){var C=this;a.each(B,function(b,c){if(!a(c).hasClass("disabled")){var d=new Date(f,b,1),e=C.o.beforeShowMonth(d);e===!1&&a(c).addClass("disabled")}})}u="",f=10*parseInt(f/10,10);var D=this.picker.find(".datepicker-years").find(".datepicker-switch").text(f+"-"+(f+9)).end().find("td");f-=1;for(var E,F=a.map(this.dates,function(a){return a.getUTCFullYear()}),G=-1;11>G;G++){if(E=["year"],d=null,-1===G?E.push("old"):10===G&&E.push("new"),-1!==a.inArray(f,F)&&E.push("active"),(h>f||f>j)&&E.push("disabled"),this.o.beforeShowYear!==a.noop){var H=this.o.beforeShowYear(new Date(f,0,1));H===b?H={}:"boolean"==typeof H?H={enabled:H}:"string"==typeof H&&(H={classes:H}),H.enabled===!1&&E.push("disabled"),H.classes&&(E=E.concat(H.classes.split(/\s+/))),H.tooltip&&(d=H.tooltip)}u+='<span class="'+E.join(" ")+'"'+(d?' title="'+d+'"':"")+">"+f+"</span>",f+=1}D.html(u)}},updateNavArrows:function(){if(this._allow_update){var a=new Date(this.viewDate),b=a.getUTCFullYear(),c=a.getUTCMonth();switch(this.viewMode){case 0:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()&&c<=this.o.startDate.getUTCMonth()?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()&&c>=this.o.endDate.getUTCMonth()?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"});break;case 1:case 2:this.o.startDate!==-(1/0)&&b<=this.o.startDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".prev").css({visibility:"hidden"}):this.picker.find(".prev").css({visibility:"visible"}),this.o.endDate!==1/0&&b>=this.o.endDate.getUTCFullYear()||this.o.maxViewMode<2?this.picker.find(".next").css({visibility:"hidden"}):this.picker.find(".next").css({visibility:"visible"})}}},click:function(b){b.preventDefault(),b.stopPropagation();var e,f,g,h=a(b.target).closest("span, td, th");if(1===h.length)switch(h[0].nodeName.toLowerCase()){case"th":switch(h[0].className){case"datepicker-switch":this.showMode(1);break;case"prev":case"next":var i=r.modes[this.viewMode].navStep*("prev"===h[0].className?-1:1);switch(this.viewMode){case 0:this.viewDate=this.moveMonth(this.viewDate,i),this._trigger("changeMonth",this.viewDate);break;case 1:case 2:this.viewDate=this.moveYear(this.viewDate,i),1===this.viewMode&&this._trigger("changeYear",this.viewDate)}this.fill();break;case"today":this.showMode(-2);var j="linked"===this.o.todayBtn?null:"view";this._setDate(d(),j);break;case"clear":this.clearDates()}break;case"span":h.hasClass("disabled")||(this.viewDate.setUTCDate(1),h.hasClass("month")?(g=1,f=h.parent().find("span").index(h),e=this.viewDate.getUTCFullYear(),this.viewDate.setUTCMonth(f),this._trigger("changeMonth",this.viewDate),1===this.o.minViewMode?(this._setDate(c(e,f,g)),this.showMode()):this.showMode(-1)):(g=1,f=0,e=parseInt(h.text(),10)||0,this.viewDate.setUTCFullYear(e),this._trigger("changeYear",this.viewDate),2===this.o.minViewMode&&this._setDate(c(e,f,g)),this.showMode(-1)),this.fill());break;case"td":h.hasClass("day")&&!h.hasClass("disabled")&&(g=parseInt(h.text(),10)||1,e=this.viewDate.getUTCFullYear(),f=this.viewDate.getUTCMonth(),h.hasClass("old")?0===f?(f=11,e-=1):f-=1:h.hasClass("new")&&(11===f?(f=0,e+=1):f+=1),this._setDate(c(e,f,g)))}this.picker.is(":visible")&&this._focused_from&&a(this._focused_from).focus(),delete this._focused_from},_toggle_multidate:function(a){var b=this.dates.contains(a);if(a||this.dates.clear(),-1!==b?(this.o.multidate===!0||this.o.multidate>1||this.o.toggleActive)&&this.dates.remove(b):this.o.multidate===!1?(this.dates.clear(),this.dates.push(a)):this.dates.push(a),"number"==typeof this.o.multidate)for(;this.dates.length>this.o.multidate;)this.dates.remove(0)},_setDate:function(a,b){b&&"date"!==b||this._toggle_multidate(a&&new Date(a)),b&&"view"!==b||(this.viewDate=a&&new Date(a)),this.fill(),this.setValue(),b&&"view"===b||this._trigger("changeDate");var c;this.isInput?c=this.element:this.component&&(c=this.element.find("input")),c&&c.change(),!this.o.autoclose||b&&"date"!==b||this.hide()},moveDay:function(a,b){var c=new Date(a);return c.setUTCDate(a.getUTCDate()+b),c},moveWeek:function(a,b){return this.moveDay(a,7*b)},moveMonth:function(a,b){if(!g(a))return this.o.defaultViewDate;if(!b)return a;var c,d,e=new Date(a.valueOf()),f=e.getUTCDate(),h=e.getUTCMonth(),i=Math.abs(b);if(b=b>0?1:-1,1===i)d=-1===b?function(){return e.getUTCMonth()===h}:function(){return e.getUTCMonth()!==c},c=h+b,e.setUTCMonth(c),(0>c||c>11)&&(c=(c+12)%12);else{for(var j=0;i>j;j++)e=this.moveMonth(e,b);c=e.getUTCMonth(),e.setUTCDate(f),d=function(){return c!==e.getUTCMonth()}}for(;d();)e.setUTCDate(--f),e.setUTCMonth(c);return e},moveYear:function(a,b){return this.moveMonth(a,12*b)},moveAvailableDate:function(a,b,c){do{if(a=this[c](a,b),!this.dateWithinRange(a))return!1;c="moveDay"}while(this.dateIsDisabled(a));return a},weekOfDateIsDisabled:function(b){return-1!==a.inArray(b.getUTCDay(),this.o.daysOfWeekDisabled)},dateIsDisabled:function(b){return this.weekOfDateIsDisabled(b)||a.grep(this.o.datesDisabled,function(a){return e(b,a)}).length>0},dateWithinRange:function(a){return a>=this.o.startDate&&a<=this.o.endDate},keydown:function(a){if(!this.picker.is(":visible"))return void((40===a.keyCode||27===a.keyCode)&&(this.show(),a.stopPropagation()));var b,c,d=!1,e=this.focusDate||this.viewDate;switch(a.keyCode){case 27:this.focusDate?(this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill()):this.hide(),a.preventDefault(),a.stopPropagation();break;case 37:case 38:case 39:case 40:if(!this.o.keyboardNavigation||7===this.o.daysOfWeekDisabled.length)break;b=37===a.keyCode||38===a.keyCode?-1:1,a.ctrlKey?(c=this.moveAvailableDate(e,b,"moveYear"),c&&this._trigger("changeYear",this.viewDate)):a.shiftKey?(c=this.moveAvailableDate(e,b,"moveMonth"),c&&this._trigger("changeMonth",this.viewDate)):37===a.keyCode||39===a.keyCode?c=this.moveAvailableDate(e,b,"moveDay"):this.weekOfDateIsDisabled(e)||(c=this.moveAvailableDate(e,b,"moveWeek")),c&&(this.focusDate=this.viewDate=c,this.setValue(),this.fill(),a.preventDefault());break;case 13:if(!this.o.forceParse)break;e=this.focusDate||this.dates.get(-1)||this.viewDate,this.o.keyboardNavigation&&(this._toggle_multidate(e),d=!0),this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.setValue(),this.fill(),this.picker.is(":visible")&&(a.preventDefault(),a.stopPropagation(),this.o.autoclose&&this.hide());break;case 9:this.focusDate=null,this.viewDate=this.dates.get(-1)||this.viewDate,this.fill(),this.hide()}if(d){this.dates.length?this._trigger("changeDate"):this._trigger("clearDate");var f;this.isInput?f=this.element:this.component&&(f=this.element.find("input")),f&&f.change()}},showMode:function(a){a&&(this.viewMode=Math.max(this.o.minViewMode,Math.min(this.o.maxViewMode,this.viewMode+a))),this.picker.children("div").hide().filter(".datepicker-"+r.modes[this.viewMode].clsName).show(),this.updateNavArrows()}};var l=function(b,c){a(b).data("datepicker",this),this.element=a(b),this.inputs=a.map(c.inputs,function(a){return a.jquery?a[0]:a}),delete c.inputs,n.call(a(this.inputs),c).on("changeDate",a.proxy(this.dateUpdated,this)),this.pickers=a.map(this.inputs,function(b){return a(b).data("datepicker")}),this.updateDates()};l.prototype={updateDates:function(){this.dates=a.map(this.pickers,function(a){return a.getUTCDate()}),this.updateRanges()},updateRanges:function(){var b=a.map(this.dates,function(a){return a.valueOf()});a.each(this.pickers,function(a,c){c.setRange(b)})},dateUpdated:function(b){if(!this.updating){this.updating=!0;var c=a(b.target).data("datepicker");if("undefined"!=typeof c){var d=c.getUTCDate(),e=a.inArray(b.target,this.inputs),f=e-1,g=e+1,h=this.inputs.length;if(-1!==e){if(a.each(this.pickers,function(a,b){b.getUTCDate()||b.setUTCDate(d)}),d<this.dates[f])for(;f>=0&&d<this.dates[f];)this.pickers[f--].setUTCDate(d);else if(d>this.dates[g])for(;h>g&&d>this.dates[g];)this.pickers[g++].setUTCDate(d);this.updateDates(),delete this.updating}}}},remove:function(){a.map(this.pickers,function(a){a.remove()}),delete this.element.data().datepicker}};var m=a.fn.datepicker,n=function(c){var d=Array.apply(null,arguments);d.shift();var e;if(this.each(function(){var b=a(this),f=b.data("datepicker"),g="object"==typeof c&&c;if(!f){var j=h(this,"date"),m=a.extend({},o,j,g),n=i(m.language),p=a.extend({},o,n,j,g);b.hasClass("input-daterange")||p.inputs?(a.extend(p,{inputs:p.inputs||b.find("input").toArray()}),f=new l(this,p)):f=new k(this,p),b.data("datepicker",f)}"string"==typeof c&&"function"==typeof f[c]&&(e=f[c].apply(f,d))}),e===b||e instanceof k||e instanceof l)return this;if(this.length>1)throw new Error("Using only allowed for the collection of a single element ("+c+" function)");return e};a.fn.datepicker=n;var o=a.fn.datepicker.defaults={autoclose:!1,beforeShowDay:a.noop,beforeShowMonth:a.noop,beforeShowYear:a.noop,calendarWeeks:!1,clearBtn:!1,toggleActive:!1,daysOfWeekDisabled:[],daysOfWeekHighlighted:[],datesDisabled:[],endDate:1/0,forceParse:!0,format:"mm/dd/yyyy",keyboardNavigation:!0,language:"en",minViewMode:0,maxViewMode:2,multidate:!1,multidateSeparator:",",orientation:"auto",rtl:!1,startDate:-(1/0),startView:0,todayBtn:!1,todayHighlight:!1,weekStart:0,disableTouchKeyboard:!1,enableOnReadonly:!0,showOnFocus:!0,zIndexOffset:10,container:"body",immediateUpdates:!1,title:""},p=a.fn.datepicker.locale_opts=["format","rtl","weekStart"];a.fn.datepicker.Constructor=k;var q=a.fn.datepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],today:"Today",clear:"Clear",titleFormat:"MM yyyy"}},r={modes:[{clsName:"days",navFnc:"Month",navStep:1},{clsName:"months",navFnc:"FullYear",navStep:1},{clsName:"years",navFnc:"FullYear",navStep:10}],isLeapYear:function(a){return a%4===0&&a%100!==0||a%400===0},getDaysInMonth:function(a,b){return[31,r.isLeapYear(a)?29:28,31,30,31,30,31,31,30,31,30,31][b]},validParts:/dd?|DD?|mm?|MM?|yy(?:yy)?/g,nonpunctuation:/[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,parseFormat:function(a){if("function"==typeof a.toValue&&"function"==typeof a.toDisplay)return a;var b=a.replace(this.validParts,"\x00").split("\x00"),c=a.match(this.validParts);if(!b||!b.length||!c||0===c.length)throw new Error("Invalid date format.");return{separators:b,parts:c}},parseDate:function(e,f,g){function h(){var a=this.slice(0,o[l].length),b=o[l].slice(0,a.length);return a.toLowerCase()===b.toLowerCase()}if(!e)return b;if(e instanceof Date)return e;if("string"==typeof f&&(f=r.parseFormat(f)),f.toValue)return f.toValue(e,f,g);var i,j,l,m,n=/([\-+]\d+)([dmwy])/,o=e.match(/([\-+]\d+)([dmwy])/g),p={d:"moveDay",m:"moveMonth",w:"moveWeek",y:"moveYear"};if(/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(e)){for(e=new Date,l=0;l<o.length;l++)i=n.exec(o[l]),j=parseInt(i[1]),m=p[i[2]],e=k.prototype[m](e,j);return c(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())}o=e&&e.match(this.nonpunctuation)||[],e=new Date;var s,t,u={},v=["yyyy","yy","M","MM","m","mm","d","dd"],w={yyyy:function(a,b){return a.setUTCFullYear(b)},yy:function(a,b){return a.setUTCFullYear(2e3+b)},m:function(a,b){if(isNaN(a))return a;for(b-=1;0>b;)b+=12;for(b%=12,a.setUTCMonth(b);a.getUTCMonth()!==b;)a.setUTCDate(a.getUTCDate()-1);return a},d:function(a,b){return a.setUTCDate(b)}};w.M=w.MM=w.mm=w.m,w.dd=w.d,e=d();var x=f.parts.slice();if(o.length!==x.length&&(x=a(x).filter(function(b,c){return-1!==a.inArray(c,v)}).toArray()),o.length===x.length){var y;for(l=0,y=x.length;y>l;l++){if(s=parseInt(o[l],10),i=x[l],isNaN(s))switch(i){case"MM":t=a(q[g].months).filter(h),s=a.inArray(t[0],q[g].months)+1;break;case"M":t=a(q[g].monthsShort).filter(h),s=a.inArray(t[0],q[g].monthsShort)+1}u[i]=s}var z,A;for(l=0;l<v.length;l++)A=v[l],A in u&&!isNaN(u[A])&&(z=new Date(e),w[A](z,u[A]),isNaN(z)||(e=z))}return e},formatDate:function(b,c,d){if(!b)return"";if("string"==typeof c&&(c=r.parseFormat(c)),c.toDisplay)return c.toDisplay(b,c,d);var e={d:b.getUTCDate(),D:q[d].daysShort[b.getUTCDay()],DD:q[d].days[b.getUTCDay()],m:b.getUTCMonth()+1,M:q[d].monthsShort[b.getUTCMonth()],MM:q[d].months[b.getUTCMonth()],yy:b.getUTCFullYear().toString().substring(2),yyyy:b.getUTCFullYear()};e.dd=(e.d<10?"0":"")+e.d,e.mm=(e.m<10?"0":"")+e.m,b=[];for(var f=a.extend([],c.separators),g=0,h=c.parts.length;h>=g;g++)f.length&&b.push(f.shift()),b.push(e[c.parts[g]]);return b.join("")},headTemplate:'<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&#171;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&#187;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>',footTemplate:'<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'};r.template='<div class="datepicker"><div class="datepicker-days"><table class=" table-condensed">'+r.headTemplate+"<tbody></tbody>"+r.footTemplate+'</table></div><div class="datepicker-months"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+'</table></div><div class="datepicker-years"><table class="table-condensed">'+r.headTemplate+r.contTemplate+r.footTemplate+"</table></div></div>",a.fn.datepicker.DPGlobal=r,a.fn.datepicker.noConflict=function(){return a.fn.datepicker=m,this},a.fn.datepicker.version="1.5.1",a(document).on("focus.datepicker.data-api click.datepicker.data-api",'[data-provide="datepicker"]',function(b){var c=a(this);c.data("datepicker")||(b.preventDefault(),n.call(c,"show"))}),a(function(){n.call(a('[data-provide="datepicker-inline"]'))})});
/*!
 * Select2 4.0.1
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // Node/CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =
(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
        var superMethod = superMethods[m];

        DecoratedClass.prototype[superMethod] =
          SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;

    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results__options" role="tree"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="treeitem" aria-live="assertive"' +
      ' class="select2-results__option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results__message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results__message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results__option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = $.data(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

      var $selected = $options.filter('[aria-selected=true]');

      // Check if there are any selected options
      if ($selected.length > 0) {
        // If there are selected options, highlight the first
        $selected.first().trigger('mouseenter');
      } else {
        // If there are no selected options, highlight the first option
        // in the dropdown
        $options.first().trigger('mouseenter');
      }
    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results__option';

    var attrs = {
      'role': 'treeitem',
      'aria-selected': 'false'
    };

    if (data.disabled) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results__group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results__options select2-results__options--nested'
      });

      $childrenContainer.append($children);

      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    $.data(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = $highlighted.data('data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at te top, don't move further
      if (currentIndex === 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results__option--highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = (
          self.$results.get(0).scrollHeight -
          self.$results.scrollTop() +
          e.deltaY
        );

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = $this.data('data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
      function (evt) {
      var data = $(this).data('data');

      self.getHighlightedResults()
          .removeClass('select2-results__option--highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results__option--highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select2-selection" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (this.$element.data('old-tabindex') != null) {
      this._tabindex = this.$element.data('old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-container';
    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.focus();

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {
    var self = this;

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select2-container--open');

      $all.each(function () {
        var $this = $(this);

        if (this == $select[0]) {
          return;
        }

        var $element = $this.data('element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--single');

    $selection.html(
      '<span class="select2-selection__rendered"></span>' +
      '<span class="select2-selection__arrow" role="presentation">' +
        '<b role="presentation"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-container';

    this.$selection.find('.select2-selection__rendered').attr('id', id);
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });
  };

  SingleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select2-selection__rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);
    $rendered.prop('title', selection.title || selection.text);
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select2-selection--multiple');

    $selection.html(
      '<ul class="select2-selection__rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select2-selection__choice__remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.options.get('disabled')) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = $selection.data('data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    this.$selection.find('.select2-selection__rendered').empty();
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select2-selection__choice">' +
        '<span class="select2-selection__choice__remove" role="presentation">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);
      $selection.prop('title', selection.title || selection.text);

      $selection.data('data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select2-selection__rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select2-selection__placeholder')
                .removeClass('select2-selection__choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select2-selection__rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys'
], function ($, KEYS) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select2-selection__clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.options.get('disabled')) {
      return;
    }

    var $clear = this.$selection.find('.select2-selection__clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = $clear.data('data');

    for (var d = 0; d < data.length; d++) {
      var unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        return;
      }
    }

    this.$element.val(this.placeholder.id).trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var $remove = $(
      '<span class="select2-selection__clear">' +
        '&times;' +
      '</span>'
    );
    $remove.data('data', data);

    this.$selection.find('.select2-selection__rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search--inline">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      self.$search.attr('aria-activedescendant', params.id);
    });

    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select2-selection__choice');

        if ($previousChoice.length > 0) {
          var item = $previousChoice.data('data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search--inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select2-selection__rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.focus();
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select2-selection__rendered').innerWidth();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width = (minimumWidth * 0.75) + 'em';
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting'
    ];

    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      $.removeData(this, 'data');
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    $.data(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = $.data($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    $.data($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (!$.isPlainObject(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    var data = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);

    this.addOptions(this.convertToOptions(data));
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, existingData, item);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // TODO: Handle AJAX errors
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term !== '') {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var checkText = option.text === params.term;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select2-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var tag = this._lastTag;

    var $options = this.$element.find('option[data-select2-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search__field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, select);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.focus();
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }
        decorated.call(self, params, callback);
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implmented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search--dropdown">' +
        '<input class="select2-search__field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
        ' spellcheck="false" role="textbox" />' +
      '</span>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);

      self.$search.focus();

      window.setTimeout(function () {
        self.$search.focus();
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);

      self.$search.val('');
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search--hide');
        } else {
          self.$searchContainer.addClass('select2-search--hide');
        }
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', function () {
      var isLoadMoreVisible = $.contains(
        document.documentElement,
        self.$loadingMore[0]
      );

      if (self.loading || !isLoadMoreVisible) {
        return;
      }

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var loadingMoreOffset = self.$loadingMore.offset().top +
        self.$loadingMore.outerHeight(false);

      if (currentOffset + 50 >= loadingMoreOffset) {
        self.loadMore();
      }
    });
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results__option select2-results__option--load-more"' +
      'role="treeitem" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var setupResultsEvents = false;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      if (!setupResultsEvents) {
        setupResultsEvents = true;

        container.on('results:all', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });

        container.on('results:append', function () {
          self._positionDropdown();
          self._resizeDropdown();
        });
      }
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select2-container--open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      $(this).data('select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = $(this).data('select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

    var newDirection = null;

    var position = this.$container.position();
    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Fix positioning with static parents
    if (this.$dropdownParent[0].style.position !== 'static') {
      var parentOffset = this.$dropdownParent.offset();

      css.top -= parentOffset.top;
      css.left -= parentOffset.left;
    }

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown--below select2-dropdown--above')
        .addClass('select2-dropdown--' + newDirection);
      this.$container
        .removeClass('select2-container--below select2-container--above')
        .addClass('select2-container--' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[

], function () {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function () {
      self._handleSelectOnClose();
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function () {
    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = $highlightedResults.data('data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && originalEvent.ctrlKey) {
      return;
    }

    this.trigger('close', {});
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return 'The results could not be loaded.';
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = 'Please delete ' + overChars + ' character';

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = 'Please enter ' + remainingChars + ' or more characters';

      return message;
    },
    loadingMore: function () {
      return 'Loading more results…';
    },
    maximumSelected: function (args) {
      var message = 'You can only select ' + args.maximum + ' item';

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return 'No results found';
    },
    searching: function () {
      return 'Searching…';
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend({}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    if (typeof options.language === 'string') {
      // Check if the language is specified with a region
      if (options.language.indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = options.language.split('-');
        var baseLanguage = languageParts[0];

        options.language = [options.language, baseLanguage];
      } else {
        options.language = [options.language];
      }
    }

    if ($.isArray(options.language)) {
      var languages = new Translation();
      options.language.push('en');

      var languageNames = options.language;

      for (var l = 0; l < languageNames.length; l++) {
        var name = languageNames[l];
        var language = {};

        try {
          // Try to load it with the original name
          language = Translation.loadPath(name);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            name = this.defaults.amdLanguageBase + name;
            language = Translation.loadPath(name);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files.
            if (options.debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + name + '" could not be ' +
                'automatically loaded. A fallback will be used instead.'
              );
            }

            continue;
          }
        }

        languages.extend(language);
      }

      options.translations = languages;
    } else {
      var baseTranslation = Translation.loadPath(
        this.defaults.amdLanguageBase + 'en'
      );
      var customTranslation = new Translation(options.language);

      customTranslation.extend(baseTranslation);

      options.translations = customTranslation;
    }

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: EnglishTranslation,
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: 0,
      selectOnClose: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'default',
      width: 'resolve'
    };
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.language == null) {
      if ($e.prop('lang')) {
        this.options.language = $e.prop('lang').toLowerCase();
      } else if ($e.closest('[lang]').prop('lang')) {
        this.options.language = $e.closest('[lang]').prop('lang');
      }
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if ($e.data('select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select2-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      $e.data('data', $e.data('select2Tags'));
      $e.data('tags', true);
    }

    if ($e.data('ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax--url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax--url', $e.data('ajaxUrl'));
      $e.data('ajax--url', $e.data('ajaxUrl'));
    }

    var dataset = {};

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());
    } else {
      dataset = $e.data();
    }

    var data = $.extend(true, {}, dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if ($element.data('select2') != null) {
      $element.data('select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    $element.data('old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this._sync = Utils.bind(this._syncAttributes, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._sync);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        $.each(mutations, self._sync);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener('DOMAttrModified', self._sync, false);
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select2-container--open');
    });

    this.on('close', function () {
      self.$container.removeClass('select2-container--open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select2-container--disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select2-container--disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select2-container--focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close();

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.options.get('disabled')) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.options.get('disabled')) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function () {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', {});
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select2-container--open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select2-container--focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select2-container--focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._sync);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._sync, false);
    }

    this._sync = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select2-container">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select2-container--' + this.options.get('theme'));

    $container.data('element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('jquery-mousewheel',[
  'jquery'
], function ($) {
  // Used to shim jQuery.mousewheel for non-full builds.
  return $;
});

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults'
], function ($, _, Select2, Defaults) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;

        this.each(function () {
          var instance = $(this).data('select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          var args = Array.prototype.slice.call(arguments, 1);

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));


;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("component~emitter@1.1.2", function (exports, module) {

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

});

require.register("dropzone", function (exports, module) {


/**
 * Exposing dropzone
 */
module.exports = require("dropzone/lib/dropzone.js");

});

require.register("dropzone/lib/dropzone.js", function (exports, module) {

/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

(function() {
  var Dropzone, Em, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Em = typeof Emitter !== "undefined" && Emitter !== null ? Emitter : require("component~emitter@1.1.2");

  noop = function() {};

  Dropzone = (function(_super) {
    var extend;

    __extends(Dropzone, _super);


    /*
    This is a list of all available events you can register on a dropzone object.

    You can register an event handler like this:

        dropzone.on("dragEnter", function() { });
     */

    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached"];

    Dropzone.prototype.defaultOptions = {
      url: null,
      method: "post",
      withCredentials: false,
      parallelUploads: 2,
      uploadMultiple: false,
      maxFilesize: 256,
      paramName: "file",
      createImageThumbnails: true,
      maxThumbnailFilesize: 10,
      thumbnailWidth: 100,
      thumbnailHeight: 100,
      maxFiles: null,
      params: {},
      clickable: true,
      ignoreHiddenFiles: true,
      acceptedFiles: null,
      acceptedMimeTypes: null,
      autoProcessQueue: true,
      autoQueue: true,
      addRemoveLinks: false,
      previewsContainer: null,
      dictDefaultMessage: "Drop files here to upload",
      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
      dictInvalidFileType: "You can't upload files of this type.",
      dictResponseError: "Server responded with {{statusCode}} code.",
      dictCancelUpload: "Cancel upload",
      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
      dictRemoveFile: "Remove file",
      dictRemoveFileConfirmation: null,
      dictMaxFilesExceeded: "You can not upload any more files.",
      accept: function(file, done) {
        return done();
      },
      init: function() {
        return noop;
      },
      forceFallback: false,
      fallback: function() {
        var child, messageElement, span, _i, _len, _ref;
        this.element.className = "" + this.element.className + " dz-browser-not-supported";
        _ref = this.element.getElementsByTagName("div");
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          child = _ref[_i];
          if (/(^| )dz-message($| )/.test(child.className)) {
            messageElement = child;
            child.className = "dz-message";
            continue;
          }
        }
        if (!messageElement) {
          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
          this.element.appendChild(messageElement);
        }
        span = messageElement.getElementsByTagName("span")[0];
        if (span) {
          span.textContent = this.options.dictFallbackMessage;
        }
        return this.element.appendChild(this.getFallbackForm());
      },
      resize: function(file) {
        var info, srcRatio, trgRatio;
        info = {
          srcX: 0,
          srcY: 0,
          srcWidth: file.width,
          srcHeight: file.height
        };
        srcRatio = file.width / file.height;
        info.optWidth = this.options.thumbnailWidth;
        info.optHeight = this.options.thumbnailHeight;
        if (!((info.optWidth != null) && (info.optHeigh != null))) {
          if ((info.optWidth == null) && (info.optHeight == null)) {
            info.optWidth = info.srcWidth;
            info.optHeight = info.srcHeight;
          } else if (info.optWidth == null) {
            info.optWidth = srcRatio * info.optHeight;
          } else if (info.optHeight == null) {
            info.optHeight = (1 / srcRatio) * info.optWidth;
          }
        }
        trgRatio = info.optWidth / info.optHeight;
        if (file.height < info.optHeight || file.width < info.optWidth) {
          info.trgHeight = info.srcHeight;
          info.trgWidth = info.srcWidth;
        } else {
          if (srcRatio > trgRatio) {
            info.srcHeight = file.height;
            info.srcWidth = info.srcHeight * trgRatio;
          } else {
            info.srcWidth = file.width;
            info.srcHeight = info.srcWidth / trgRatio;
          }
        }
        info.srcX = (file.width - info.srcWidth) / 2;
        info.srcY = (file.height - info.srcHeight) / 2;
        return info;
      },

      /*
      Those functions register themselves to the events on init and handle all
      the user interface specific stuff. Overwriting them won't break the upload
      but can break the way it's displayed.
      You can overwrite them if you don't like the default behavior. If you just
      want to add an additional event handler, register it on the dropzone object
      and don't overwrite those options.
       */
      drop: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragstart: noop,
      dragend: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      dragenter: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragover: function(e) {
        return this.element.classList.add("dz-drag-hover");
      },
      dragleave: function(e) {
        return this.element.classList.remove("dz-drag-hover");
      },
      paste: noop,
      reset: function() {
        return this.element.classList.remove("dz-started");
      },
      addedfile: function(file) {
        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
        if (this.element === this.previewsContainer) {
          this.element.classList.add("dz-started");
        }
        if (this.previewsContainer) {
          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
          file.previewTemplate = file.previewElement;
          this.previewsContainer.appendChild(file.previewElement);
          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            node.textContent = file.name;
          }
          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            node = _ref1[_j];
            node.innerHTML = this.filesize(file.size);
          }
          if (this.options.addRemoveLinks) {
            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
            file.previewElement.appendChild(file._removeLink);
          }
          removeFileEvent = (function(_this) {
            return function(e) {
              e.preventDefault();
              e.stopPropagation();
              if (file.status === Dropzone.UPLOADING) {
                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
                  return _this.removeFile(file);
                });
              } else {
                if (_this.options.dictRemoveFileConfirmation) {
                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
                    return _this.removeFile(file);
                  });
                } else {
                  return _this.removeFile(file);
                }
              }
            };
          })(this);
          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
          _results = [];
          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
            removeLink = _ref2[_k];
            _results.push(removeLink.addEventListener("click", removeFileEvent));
          }
          return _results;
        }
      },
      removedfile: function(file) {
        var _ref;
        if (file.previewElement) {
          if ((_ref = file.previewElement) != null) {
            _ref.parentNode.removeChild(file.previewElement);
          }
        }
        return this._updateMaxFilesReachedClass();
      },
      thumbnail: function(file, dataUrl) {
        var thumbnailElement, _i, _len, _ref, _results;
        if (file.previewElement) {
          file.previewElement.classList.remove("dz-file-preview");
          file.previewElement.classList.add("dz-image-preview");
          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            thumbnailElement = _ref[_i];
            thumbnailElement.alt = file.name;
            _results.push(thumbnailElement.src = dataUrl);
          }
          return _results;
        }
      },
      error: function(file, message) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          file.previewElement.classList.add("dz-error");
          if (typeof message !== "String" && message.error) {
            message = message.error;
          }
          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            _results.push(node.textContent = message);
          }
          return _results;
        }
      },
      errormultiple: noop,
      processing: function(file) {
        if (file.previewElement) {
          file.previewElement.classList.add("dz-processing");
          if (file._removeLink) {
            return file._removeLink.textContent = this.options.dictCancelUpload;
          }
        }
      },
      processingmultiple: noop,
      uploadprogress: function(file, progress, bytesSent) {
        var node, _i, _len, _ref, _results;
        if (file.previewElement) {
          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            node = _ref[_i];
            _results.push(node.style.width = "" + progress + "%");
          }
          return _results;
        }
      },
      totaluploadprogress: noop,
      sending: noop,
      sendingmultiple: noop,
      success: function(file) {
        if (file.previewElement) {
          return file.previewElement.classList.add("dz-success");
        }
      },
      successmultiple: noop,
      canceled: function(file) {
        return this.emit("error", file, "Upload canceled.");
      },
      canceledmultiple: noop,
      complete: function(file) {
        if (file._removeLink) {
          return file._removeLink.textContent = this.options.dictRemoveFile;
        }
      },
      completemultiple: noop,
      maxfilesexceeded: noop,
      maxfilesreached: noop,
      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-details\">\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n    <div class=\"dz-size\" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-success-mark\"><span>✔</span></div>\n  <div class=\"dz-error-mark\"><span>✘</span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n</div>"
    };

    extend = function() {
      var key, object, objects, target, val, _i, _len;
      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      for (_i = 0, _len = objects.length; _i < _len; _i++) {
        object = objects[_i];
        for (key in object) {
          val = object[key];
          target[key] = val;
        }
      }
      return target;
    };

    function Dropzone(element, options) {
      var elementOptions, fallback, _ref;
      this.element = element;
      this.version = Dropzone.version;
      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
      this.clickableElements = [];
      this.listeners = [];
      this.files = [];
      if (typeof this.element === "string") {
        this.element = document.querySelector(this.element);
      }
      if (!(this.element && (this.element.nodeType != null))) {
        throw new Error("Invalid dropzone element.");
      }
      if (this.element.dropzone) {
        throw new Error("Dropzone already attached.");
      }
      Dropzone.instances.push(this);
      this.element.dropzone = this;
      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
        return this.options.fallback.call(this);
      }
      if (this.options.url == null) {
        this.options.url = this.element.getAttribute("action");
      }
      if (!this.options.url) {
        throw new Error("No URL provided.");
      }
      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
      }
      if (this.options.acceptedMimeTypes) {
        this.options.acceptedFiles = this.options.acceptedMimeTypes;
        delete this.options.acceptedMimeTypes;
      }
      this.options.method = this.options.method.toUpperCase();
      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
        fallback.parentNode.removeChild(fallback);
      }
      if (this.options.previewsContainer !== false) {
        if (this.options.previewsContainer) {
          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
        } else {
          this.previewsContainer = this.element;
        }
      }
      if (this.options.clickable) {
        if (this.options.clickable === true) {
          this.clickableElements = [this.element];
        } else {
          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
        }
      }
      this.init();
    }

    Dropzone.prototype.getAcceptedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getRejectedFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (!file.accepted) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getFilesWithStatus = function(status) {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === status) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.getQueuedFiles = function() {
      return this.getFilesWithStatus(Dropzone.QUEUED);
    };

    Dropzone.prototype.getUploadingFiles = function() {
      return this.getFilesWithStatus(Dropzone.UPLOADING);
    };

    Dropzone.prototype.getActiveFiles = function() {
      var file, _i, _len, _ref, _results;
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
          _results.push(file);
        }
      }
      return _results;
    };

    Dropzone.prototype.init = function() {
      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
      if (this.element.tagName === "form") {
        this.element.setAttribute("enctype", "multipart/form-data");
      }
      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
      }
      if (this.clickableElements.length) {
        setupHiddenFileInput = (function(_this) {
          return function() {
            if (_this.hiddenFileInput) {
              document.body.removeChild(_this.hiddenFileInput);
            }
            _this.hiddenFileInput = document.createElement("input");
            _this.hiddenFileInput.setAttribute("type", "file");
            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
              _this.hiddenFileInput.setAttribute("multiple", "multiple");
            }
            _this.hiddenFileInput.className = "dz-hidden-input";
            if (_this.options.acceptedFiles != null) {
              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
            }
            _this.hiddenFileInput.style.visibility = "hidden";
            _this.hiddenFileInput.style.position = "absolute";
            _this.hiddenFileInput.style.top = "0";
            _this.hiddenFileInput.style.left = "0";
            _this.hiddenFileInput.style.height = "0";
            _this.hiddenFileInput.style.width = "0";
            document.body.appendChild(_this.hiddenFileInput);
            return _this.hiddenFileInput.addEventListener("change", function() {
              var file, files, _i, _len;
              files = _this.hiddenFileInput.files;
              if (files.length) {
                for (_i = 0, _len = files.length; _i < _len; _i++) {
                  file = files[_i];
                  _this.addFile(file);
                }
              }
              return setupHiddenFileInput();
            });
          };
        })(this);
        setupHiddenFileInput();
      }
      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
      _ref1 = this.events;
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        eventName = _ref1[_i];
        this.on(eventName, this.options[eventName]);
      }
      this.on("uploadprogress", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("removedfile", (function(_this) {
        return function() {
          return _this.updateTotalUploadProgress();
        };
      })(this));
      this.on("canceled", (function(_this) {
        return function(file) {
          return _this.emit("complete", file);
        };
      })(this));
      this.on("complete", (function(_this) {
        return function(file) {
          if (_this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
            return setTimeout((function() {
              return _this.emit("queuecomplete");
            }), 0);
          }
        };
      })(this));
      noPropagation = function(e) {
        e.stopPropagation();
        if (e.preventDefault) {
          return e.preventDefault();
        } else {
          return e.returnValue = false;
        }
      };
      this.listeners = [
        {
          element: this.element,
          events: {
            "dragstart": (function(_this) {
              return function(e) {
                return _this.emit("dragstart", e);
              };
            })(this),
            "dragenter": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.emit("dragenter", e);
              };
            })(this),
            "dragover": (function(_this) {
              return function(e) {
                var efct;
                try {
                  efct = e.dataTransfer.effectAllowed;
                } catch (_error) {}
                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
                noPropagation(e);
                return _this.emit("dragover", e);
              };
            })(this),
            "dragleave": (function(_this) {
              return function(e) {
                return _this.emit("dragleave", e);
              };
            })(this),
            "drop": (function(_this) {
              return function(e) {
                noPropagation(e);
                return _this.drop(e);
              };
            })(this),
            "dragend": (function(_this) {
              return function(e) {
                return _this.emit("dragend", e);
              };
            })(this)
          }
        }
      ];
      this.clickableElements.forEach((function(_this) {
        return function(clickableElement) {
          return _this.listeners.push({
            element: clickableElement,
            events: {
              "click": function(evt) {
                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
                  return _this.hiddenFileInput.click();
                }
              }
            }
          });
        };
      })(this));
      this.enable();
      return this.options.init.call(this);
    };

    Dropzone.prototype.destroy = function() {
      var _ref;
      this.disable();
      this.removeAllFiles(true);
      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
        this.hiddenFileInput = null;
      }
      delete this.element.dropzone;
      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
    };

    Dropzone.prototype.updateTotalUploadProgress = function() {
      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
      totalBytesSent = 0;
      totalBytes = 0;
      activeFiles = this.getActiveFiles();
      if (activeFiles.length) {
        _ref = this.getActiveFiles();
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          totalBytesSent += file.upload.bytesSent;
          totalBytes += file.upload.total;
        }
        totalUploadProgress = 100 * totalBytesSent / totalBytes;
      } else {
        totalUploadProgress = 100;
      }
      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
    };

    Dropzone.prototype._getParamName = function(n) {
      if (typeof this.options.paramName === "function") {
        return this.options.paramName(n);
      } else {
        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
      }
    };

    Dropzone.prototype.getFallbackForm = function() {
      var existingFallback, fields, fieldsString, form;
      if (existingFallback = this.getExistingFallback()) {
        return existingFallback;
      }
      fieldsString = "<div class=\"dz-fallback\">";
      if (this.options.dictFallbackText) {
        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
      }
      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
      fields = Dropzone.createElement(fieldsString);
      if (this.element.tagName !== "FORM") {
        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
        form.appendChild(fields);
      } else {
        this.element.setAttribute("enctype", "multipart/form-data");
        this.element.setAttribute("method", this.options.method);
      }
      return form != null ? form : fields;
    };

    Dropzone.prototype.getExistingFallback = function() {
      var fallback, getFallback, tagName, _i, _len, _ref;
      getFallback = function(elements) {
        var el, _i, _len;
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )fallback($| )/.test(el.className)) {
            return el;
          }
        }
      };
      _ref = ["div", "form"];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        tagName = _ref[_i];
        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
          return fallback;
        }
      }
    };

    Dropzone.prototype.setupEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.addEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.removeEventListeners = function() {
      var elementListeners, event, listener, _i, _len, _ref, _results;
      _ref = this.listeners;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        elementListeners = _ref[_i];
        _results.push((function() {
          var _ref1, _results1;
          _ref1 = elementListeners.events;
          _results1 = [];
          for (event in _ref1) {
            listener = _ref1[event];
            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
          }
          return _results1;
        })());
      }
      return _results;
    };

    Dropzone.prototype.disable = function() {
      var file, _i, _len, _ref, _results;
      this.clickableElements.forEach(function(element) {
        return element.classList.remove("dz-clickable");
      });
      this.removeEventListeners();
      _ref = this.files;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        _results.push(this.cancelUpload(file));
      }
      return _results;
    };

    Dropzone.prototype.enable = function() {
      this.clickableElements.forEach(function(element) {
        return element.classList.add("dz-clickable");
      });
      return this.setupEventListeners();
    };

    Dropzone.prototype.filesize = function(size) {
      var string;
      if (size >= 1024 * 1024 * 1024 * 1024 / 10) {
        size = size / (1024 * 1024 * 1024 * 1024 / 10);
        string = "TiB";
      } else if (size >= 1024 * 1024 * 1024 / 10) {
        size = size / (1024 * 1024 * 1024 / 10);
        string = "GiB";
      } else if (size >= 1024 * 1024 / 10) {
        size = size / (1024 * 1024 / 10);
        string = "MiB";
      } else if (size >= 1024 / 10) {
        size = size / (1024 / 10);
        string = "KiB";
      } else {
        size = size * 10;
        string = "b";
      }
      return "<strong>" + (Math.round(size) / 10) + "</strong> " + string;
    };

    Dropzone.prototype._updateMaxFilesReachedClass = function() {
      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        if (this.getAcceptedFiles().length === this.options.maxFiles) {
          this.emit('maxfilesreached', this.files);
        }
        return this.element.classList.add("dz-max-files-reached");
      } else {
        return this.element.classList.remove("dz-max-files-reached");
      }
    };

    Dropzone.prototype.drop = function(e) {
      var files, items;
      if (!e.dataTransfer) {
        return;
      }
      this.emit("drop", e);
      files = e.dataTransfer.files;
      if (files.length) {
        items = e.dataTransfer.items;
        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
          this._addFilesFromItems(items);
        } else {
          this.handleFiles(files);
        }
      }
    };

    Dropzone.prototype.paste = function(e) {
      var items, _ref;
      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
        return;
      }
      this.emit("paste", e);
      items = e.clipboardData.items;
      if (items.length) {
        return this._addFilesFromItems(items);
      }
    };

    Dropzone.prototype.handleFiles = function(files) {
      var file, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        _results.push(this.addFile(file));
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromItems = function(items) {
      var entry, item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = items.length; _i < _len; _i++) {
        item = items[_i];
        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
          if (entry.isFile) {
            _results.push(this.addFile(item.getAsFile()));
          } else if (entry.isDirectory) {
            _results.push(this._addFilesFromDirectory(entry, entry.name));
          } else {
            _results.push(void 0);
          }
        } else if (item.getAsFile != null) {
          if ((item.kind == null) || item.kind === "file") {
            _results.push(this.addFile(item.getAsFile()));
          } else {
            _results.push(void 0);
          }
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
      var dirReader, entriesReader;
      dirReader = directory.createReader();
      entriesReader = (function(_this) {
        return function(entries) {
          var entry, _i, _len;
          for (_i = 0, _len = entries.length; _i < _len; _i++) {
            entry = entries[_i];
            if (entry.isFile) {
              entry.file(function(file) {
                if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
                  return;
                }
                file.fullPath = "" + path + "/" + file.name;
                return _this.addFile(file);
              });
            } else if (entry.isDirectory) {
              _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
            }
          }
        };
      })(this);
      return dirReader.readEntries(entriesReader, function(error) {
        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
      });
    };

    Dropzone.prototype.accept = function(file, done) {
      if (file.size > this.options.maxFilesize * 1024 * 1024) {
        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
        return done(this.options.dictInvalidFileType);
      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
        return this.emit("maxfilesexceeded", file);
      } else {
        return this.options.accept.call(this, file, done);
      }
    };

    Dropzone.prototype.addFile = function(file) {
      file.upload = {
        progress: 0,
        total: file.size,
        bytesSent: 0
      };
      this.files.push(file);
      file.status = Dropzone.ADDED;
      this.emit("addedfile", file);
      this._enqueueThumbnail(file);
      return this.accept(file, (function(_this) {
        return function(error) {
          if (error) {
            file.accepted = false;
            _this._errorProcessing([file], error);
          } else {
            file.accepted = true;
            if (_this.options.autoQueue) {
              _this.enqueueFile(file);
            }
          }
          return _this._updateMaxFilesReachedClass();
        };
      })(this));
    };

    Dropzone.prototype.enqueueFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        this.enqueueFile(file);
      }
      return null;
    };

    Dropzone.prototype.enqueueFile = function(file) {
      if (file.status === Dropzone.ADDED && file.accepted === true) {
        file.status = Dropzone.QUEUED;
        if (this.options.autoProcessQueue) {
          return setTimeout(((function(_this) {
            return function() {
              return _this.processQueue();
            };
          })(this)), 0);
        }
      } else {
        throw new Error("This file can't be queued because it has already been processed or was rejected.");
      }
    };

    Dropzone.prototype._thumbnailQueue = [];

    Dropzone.prototype._processingThumbnail = false;

    Dropzone.prototype._enqueueThumbnail = function(file) {
      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
        this._thumbnailQueue.push(file);
        return setTimeout(((function(_this) {
          return function() {
            return _this._processThumbnailQueue();
          };
        })(this)), 0);
      }
    };

    Dropzone.prototype._processThumbnailQueue = function() {
      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
        return;
      }
      this._processingThumbnail = true;
      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
        return function() {
          _this._processingThumbnail = false;
          return _this._processThumbnailQueue();
        };
      })(this));
    };

    Dropzone.prototype.removeFile = function(file) {
      if (file.status === Dropzone.UPLOADING) {
        this.cancelUpload(file);
      }
      this.files = without(this.files, file);
      this.emit("removedfile", file);
      if (this.files.length === 0) {
        return this.emit("reset");
      }
    };

    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
      var file, _i, _len, _ref;
      if (cancelIfNecessary == null) {
        cancelIfNecessary = false;
      }
      _ref = this.files.slice();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        file = _ref[_i];
        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
          this.removeFile(file);
        }
      }
      return null;
    };

    Dropzone.prototype.createThumbnail = function(file, callback) {
      var fileReader;
      fileReader = new FileReader;
      fileReader.onload = (function(_this) {
        return function() {
          var img;
          img = document.createElement("img");
          img.onload = function() {
            var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
            file.width = img.width;
            file.height = img.height;
            resizeInfo = _this.options.resize.call(_this, file);
            if (resizeInfo.trgWidth == null) {
              resizeInfo.trgWidth = resizeInfo.optWidth;
            }
            if (resizeInfo.trgHeight == null) {
              resizeInfo.trgHeight = resizeInfo.optHeight;
            }
            canvas = document.createElement("canvas");
            ctx = canvas.getContext("2d");
            canvas.width = resizeInfo.trgWidth;
            canvas.height = resizeInfo.trgHeight;
            drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
            thumbnail = canvas.toDataURL("image/png");
            _this.emit("thumbnail", file, thumbnail);
            if (callback != null) {
              return callback();
            }
          };
          return img.src = fileReader.result;
        };
      })(this);
      return fileReader.readAsDataURL(file);
    };

    Dropzone.prototype.processQueue = function() {
      var i, parallelUploads, processingLength, queuedFiles;
      parallelUploads = this.options.parallelUploads;
      processingLength = this.getUploadingFiles().length;
      i = processingLength;
      if (processingLength >= parallelUploads) {
        return;
      }
      queuedFiles = this.getQueuedFiles();
      if (!(queuedFiles.length > 0)) {
        return;
      }
      if (this.options.uploadMultiple) {
        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
      } else {
        while (i < parallelUploads) {
          if (!queuedFiles.length) {
            return;
          }
          this.processFile(queuedFiles.shift());
          i++;
        }
      }
    };

    Dropzone.prototype.processFile = function(file) {
      return this.processFiles([file]);
    };

    Dropzone.prototype.processFiles = function(files) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.processing = true;
        file.status = Dropzone.UPLOADING;
        this.emit("processing", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("processingmultiple", files);
      }
      return this.uploadFiles(files);
    };

    Dropzone.prototype._getFilesWithXhr = function(xhr) {
      var file, files;
      return files = (function() {
        var _i, _len, _ref, _results;
        _ref = this.files;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          file = _ref[_i];
          if (file.xhr === xhr) {
            _results.push(file);
          }
        }
        return _results;
      }).call(this);
    };

    Dropzone.prototype.cancelUpload = function(file) {
      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
      if (file.status === Dropzone.UPLOADING) {
        groupedFiles = this._getFilesWithXhr(file.xhr);
        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
          groupedFile = groupedFiles[_i];
          groupedFile.status = Dropzone.CANCELED;
        }
        file.xhr.abort();
        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
          groupedFile = groupedFiles[_j];
          this.emit("canceled", groupedFile);
        }
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", groupedFiles);
        }
      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
        file.status = Dropzone.CANCELED;
        this.emit("canceled", file);
        if (this.options.uploadMultiple) {
          this.emit("canceledmultiple", [file]);
        }
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype.uploadFile = function(file) {
      return this.uploadFiles([file]);
    };

    Dropzone.prototype.uploadFiles = function(files) {
      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, option, progressObj, response, updateProgress, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
      xhr = new XMLHttpRequest();
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.xhr = xhr;
      }
      xhr.open(this.options.method, this.options.url, true);
      xhr.withCredentials = !!this.options.withCredentials;
      response = null;
      handleError = (function(_this) {
        return function() {
          var _j, _len1, _results;
          _results = [];
          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
            file = files[_j];
            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
          }
          return _results;
        };
      })(this);
      updateProgress = (function(_this) {
        return function(e) {
          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
          if (e != null) {
            progress = 100 * e.loaded / e.total;
            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
              file = files[_j];
              file.upload = {
                progress: progress,
                total: e.total,
                bytesSent: e.loaded
              };
            }
          } else {
            allFilesFinished = true;
            progress = 100;
            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
              file = files[_k];
              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
                allFilesFinished = false;
              }
              file.upload.progress = progress;
              file.upload.bytesSent = file.upload.total;
            }
            if (allFilesFinished) {
              return;
            }
          }
          _results = [];
          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
            file = files[_l];
            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
          }
          return _results;
        };
      })(this);
      xhr.onload = (function(_this) {
        return function(e) {
          var _ref;
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          if (xhr.readyState !== 4) {
            return;
          }
          response = xhr.responseText;
          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
            try {
              response = JSON.parse(response);
            } catch (_error) {
              e = _error;
              response = "Invalid JSON response from server.";
            }
          }
          updateProgress();
          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
            return handleError();
          } else {
            return _this._finished(files, response, e);
          }
        };
      })(this);
      xhr.onerror = (function(_this) {
        return function() {
          if (files[0].status === Dropzone.CANCELED) {
            return;
          }
          return handleError();
        };
      })(this);
      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
      progressObj.onprogress = updateProgress;
      headers = {
        "Accept": "application/json",
        "Cache-Control": "no-cache",
        "X-Requested-With": "XMLHttpRequest"
      };
      if (this.options.headers) {
        extend(headers, this.options.headers);
      }
      for (headerName in headers) {
        headerValue = headers[headerName];
        xhr.setRequestHeader(headerName, headerValue);
      }
      formData = new FormData();
      if (this.options.params) {
        _ref1 = this.options.params;
        for (key in _ref1) {
          value = _ref1[key];
          formData.append(key, value);
        }
      }
      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
        file = files[_j];
        this.emit("sending", file, xhr, formData);
      }
      if (this.options.uploadMultiple) {
        this.emit("sendingmultiple", files, xhr, formData);
      }
      if (this.element.tagName === "FORM") {
        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          input = _ref2[_k];
          inputName = input.getAttribute("name");
          inputType = input.getAttribute("type");
          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
            _ref3 = input.options;
            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
              option = _ref3[_l];
              if (option.selected) {
                formData.append(inputName, option.value);
              }
            }
          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
            formData.append(inputName, input.value);
          }
        }
      }
      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
        formData.append(this._getParamName(i), files[i], files[i].name);
      }
      return xhr.send(formData);
    };

    Dropzone.prototype._finished = function(files, responseText, e) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.SUCCESS;
        this.emit("success", file, responseText, e);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("successmultiple", files, responseText, e);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
      var file, _i, _len;
      for (_i = 0, _len = files.length; _i < _len; _i++) {
        file = files[_i];
        file.status = Dropzone.ERROR;
        this.emit("error", file, message, xhr);
        this.emit("complete", file);
      }
      if (this.options.uploadMultiple) {
        this.emit("errormultiple", files, message, xhr);
        this.emit("completemultiple", files);
      }
      if (this.options.autoProcessQueue) {
        return this.processQueue();
      }
    };

    return Dropzone;

  })(Em);

  Dropzone.version = "3.10.0";

  Dropzone.options = {};

  Dropzone.optionsForElement = function(element) {
    if (element.getAttribute("id")) {
      return Dropzone.options[camelize(element.getAttribute("id"))];
    } else {
      return void 0;
    }
  };

  Dropzone.instances = [];

  Dropzone.forElement = function(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    if ((element != null ? element.dropzone : void 0) == null) {
      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
    }
    return element.dropzone;
  };

  Dropzone.autoDiscover = true;

  Dropzone.discover = function() {
    var checkElements, dropzone, dropzones, _i, _len, _results;
    if (document.querySelectorAll) {
      dropzones = document.querySelectorAll(".dropzone");
    } else {
      dropzones = [];
      checkElements = function(elements) {
        var el, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = elements.length; _i < _len; _i++) {
          el = elements[_i];
          if (/(^| )dropzone($| )/.test(el.className)) {
            _results.push(dropzones.push(el));
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      };
      checkElements(document.getElementsByTagName("div"));
      checkElements(document.getElementsByTagName("form"));
    }
    _results = [];
    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
      dropzone = dropzones[_i];
      if (Dropzone.optionsForElement(dropzone) !== false) {
        _results.push(new Dropzone(dropzone));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

  Dropzone.isBrowserSupported = function() {
    var capableBrowser, regex, _i, _len, _ref;
    capableBrowser = true;
    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
      if (!("classList" in document.createElement("a"))) {
        capableBrowser = false;
      } else {
        _ref = Dropzone.blacklistedBrowsers;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          regex = _ref[_i];
          if (regex.test(navigator.userAgent)) {
            capableBrowser = false;
            continue;
          }
        }
      }
    } else {
      capableBrowser = false;
    }
    return capableBrowser;
  };

  without = function(list, rejectedItem) {
    var item, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      item = list[_i];
      if (item !== rejectedItem) {
        _results.push(item);
      }
    }
    return _results;
  };

  camelize = function(str) {
    return str.replace(/[\-_](\w)/g, function(match) {
      return match.charAt(1).toUpperCase();
    });
  };

  Dropzone.createElement = function(string) {
    var div;
    div = document.createElement("div");
    div.innerHTML = string;
    return div.childNodes[0];
  };

  Dropzone.elementInside = function(element, container) {
    if (element === container) {
      return true;
    }
    while (element = element.parentNode) {
      if (element === container) {
        return true;
      }
    }
    return false;
  };

  Dropzone.getElement = function(el, name) {
    var element;
    if (typeof el === "string") {
      element = document.querySelector(el);
    } else if (el.nodeType != null) {
      element = el;
    }
    if (element == null) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
    }
    return element;
  };

  Dropzone.getElements = function(els, name) {
    var e, el, elements, _i, _j, _len, _len1, _ref;
    if (els instanceof Array) {
      elements = [];
      try {
        for (_i = 0, _len = els.length; _i < _len; _i++) {
          el = els[_i];
          elements.push(this.getElement(el, name));
        }
      } catch (_error) {
        e = _error;
        elements = null;
      }
    } else if (typeof els === "string") {
      elements = [];
      _ref = document.querySelectorAll(els);
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        el = _ref[_j];
        elements.push(el);
      }
    } else if (els.nodeType != null) {
      elements = [els];
    }
    if (!((elements != null) && elements.length)) {
      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
    }
    return elements;
  };

  Dropzone.confirm = function(question, accepted, rejected) {
    if (window.confirm(question)) {
      return accepted();
    } else if (rejected != null) {
      return rejected();
    }
  };

  Dropzone.isValidFile = function(file, acceptedFiles) {
    var baseMimeType, mimeType, validType, _i, _len;
    if (!acceptedFiles) {
      return true;
    }
    acceptedFiles = acceptedFiles.split(",");
    mimeType = file.type;
    baseMimeType = mimeType.replace(/\/.*$/, "");
    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
      validType = acceptedFiles[_i];
      validType = validType.trim();
      if (validType.charAt(0) === ".") {
        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
          return true;
        }
      } else if (/\/\*$/.test(validType)) {
        if (baseMimeType === validType.replace(/\/.*$/, "")) {
          return true;
        }
      } else {
        if (mimeType === validType) {
          return true;
        }
      }
    }
    return false;
  };

  if (typeof jQuery !== "undefined" && jQuery !== null) {
    jQuery.fn.dropzone = function(options) {
      return this.each(function() {
        return new Dropzone(this, options);
      });
    };
  }

  if (typeof module !== "undefined" && module !== null) {
    module.exports = Dropzone;
  } else {
    window.Dropzone = Dropzone;
  }

  Dropzone.ADDED = "added";

  Dropzone.QUEUED = "queued";

  Dropzone.ACCEPTED = Dropzone.QUEUED;

  Dropzone.UPLOADING = "uploading";

  Dropzone.PROCESSING = Dropzone.UPLOADING;

  Dropzone.CANCELED = "canceled";

  Dropzone.ERROR = "error";

  Dropzone.SUCCESS = "success";


  /*

  Bugfix for iOS 6 and 7
  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
  based on the work of https://github.com/stomita/ios-imagefile-megapixel
   */

  detectVerticalSquash = function(img) {
    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
    iw = img.naturalWidth;
    ih = img.naturalHeight;
    canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = ih;
    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(0, 0, 1, ih).data;
    sy = 0;
    ey = ih;
    py = ih;
    while (py > sy) {
      alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    ratio = py / ih;
    if (ratio === 0) {
      return 1;
    } else {
      return ratio;
    }
  };

  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
    var vertSquashRatio;
    vertSquashRatio = detectVerticalSquash(img);
    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
  };


  /*
   * contentloaded.js
   *
   * Author: Diego Perini (diego.perini at gmail.com)
   * Summary: cross-browser wrapper for DOMContentLoaded
   * Updated: 20101020
   * License: MIT
   * Version: 1.2
   *
   * URL:
   * http://javascript.nwbox.com/ContentLoaded/
   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
   */

  contentLoaded = function(win, fn) {
    var add, doc, done, init, poll, pre, rem, root, top;
    done = false;
    top = true;
    doc = win.document;
    root = doc.documentElement;
    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
    pre = (doc.addEventListener ? "" : "on");
    init = function(e) {
      if (e.type === "readystatechange" && doc.readyState !== "complete") {
        return;
      }
      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
      if (!done && (done = true)) {
        return fn.call(win, e.type || e);
      }
    };
    poll = function() {
      var e;
      try {
        root.doScroll("left");
      } catch (_error) {
        e = _error;
        setTimeout(poll, 50);
        return;
      }
      return init("poll");
    };
    if (doc.readyState !== "complete") {
      if (doc.createEventObject && root.doScroll) {
        try {
          top = !win.frameElement;
        } catch (_error) {}
        if (top) {
          poll();
        }
      }
      doc[add](pre + "DOMContentLoaded", init, false);
      doc[add](pre + "readystatechange", init, false);
      return win[add](pre + "load", init, false);
    }
  };

  Dropzone._autoDiscoverFunction = function() {
    if (Dropzone.autoDiscover) {
      return Dropzone.discover();
    }
  };

  contentLoaded(window, Dropzone._autoDiscoverFunction);

}).call(this);

});

if (typeof exports == "object") {
  module.exports = require("dropzone");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("dropzone"); });
} else {
  this["Dropzone"] = require("dropzone");
}
})()

// CodeMirror version 3.15
//
// CodeMirror is the only global var we claim
window.CodeMirror = (function() {
	"use strict";

	// BROWSER SNIFFING

	// Crude, but necessary to handle a number of hard-to-feature-detect
	// bugs and behavior differences.
	var gecko = /gecko\/\d/i.test(navigator.userAgent);
	var ie = /MSIE \d/.test(navigator.userAgent);
	var ie_lt8 = ie && (document.documentMode == null || document.documentMode < 8);
	var ie_lt9 = ie && (document.documentMode == null || document.documentMode < 9);
	var webkit = /WebKit\//.test(navigator.userAgent);
	var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(navigator.userAgent);
	var chrome = /Chrome\//.test(navigator.userAgent);
	var opera = /Opera\//.test(navigator.userAgent);
	var safari = /Apple Computer/.test(navigator.vendor);
	var khtml = /KHTML\//.test(navigator.userAgent);
	var mac_geLion = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent);
	var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent);
	var phantom = /PhantomJS/.test(navigator.userAgent);

	var ios = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent);
	// This is woefully incomplete. Suggestions for alternative methods welcome.
	var mobile = ios || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent);
	var mac = ios || /Mac/.test(navigator.platform);
	var windows = /windows/i.test(navigator.platform);

	var opera_version = opera && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
	if (opera_version) opera_version = Number(opera_version[1]);
	if (opera_version && opera_version >= 15) {
		opera = false;
		webkit = true;
	}
	// Some browsers use the wrong event properties to signal cmd/ctrl on OS X
	var flipCtrlCmd = mac && (qtwebkit || opera && (opera_version == null || opera_version < 12.11));
	var captureMiddleClick = gecko || (ie && !ie_lt9);

	// Optimize some code when these features are not used
	var sawReadOnlySpans = false,
		sawCollapsedSpans = false;

	// CONSTRUCTOR

	function CodeMirror(place, options) {
		if (!(this instanceof CodeMirror)) return new CodeMirror(place, options);

		this.options = options = options || {};
		// Determine effective options based on given values and defaults.
		for (var opt in defaults)
			if (!options.hasOwnProperty(opt) && defaults.hasOwnProperty(opt))
				options[opt] = defaults[opt];
		setGuttersForLineNumbers(options);

		var docStart = typeof options.value == "string" ? 0 : options.value.first;
		var display = this.display = makeDisplay(place, docStart);
		display.wrapper.CodeMirror = this;
		updateGutters(this);
		if (options.autofocus && !mobile) focusInput(this);

		this.state = {
			keyMaps: [],
			overlays: [],
			modeGen: 0,
			overwrite: false,
			focused: false,
			suppressEdits: false,
			pasteIncoming: false,
			draggingText: false,
			highlight: new Delayed()
		};

		themeChanged(this);
		if (options.lineWrapping)
			this.display.wrapper.className += " CodeMirror-wrap";

		var doc = options.value;
		if (typeof doc == "string") doc = new Doc(options.value, options.mode);
		operation(this, attachDoc)(this, doc);

		// Override magic textarea content restore that IE sometimes does
		// on our hidden textarea on reload
		if (ie) setTimeout(bind(resetInput, this, true), 20);

		registerEventHandlers(this);
		// IE throws unspecified error in certain cases, when
		// trying to access activeElement before onload
		var hasFocus;
		try {
			hasFocus = (document.activeElement == display.input);
		} catch (e) {}
		if (hasFocus || (options.autofocus && !mobile)) setTimeout(bind(onFocus, this), 20);
		else onBlur(this);

		operation(this, function() {
			for (var opt in optionHandlers)
				if (optionHandlers.propertyIsEnumerable(opt))
					optionHandlers[opt](this, options[opt], Init);
			for (var i = 0; i < initHooks.length; ++i) initHooks[i](this);
		})();
	}

	// DISPLAY CONSTRUCTOR

	function makeDisplay(place, docStart) {
		var d = {};

		var input = d.input = elt("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;");
		if (webkit) input.style.width = "1000px";
		else input.setAttribute("wrap", "off");
		// if border: 0; -- iOS fails to open keyboard (issue #1287)
		if (ios) input.style.border = "1px solid black";
		input.setAttribute("autocorrect", "off");
		input.setAttribute("autocapitalize", "off");
		input.setAttribute("spellcheck", "false");

		// Wraps and hides input textarea
		d.inputDiv = elt("div", [input], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
		// The actual fake scrollbars.
		d.scrollbarH = elt("div", [elt("div", null, null, "height: 1px")], "CodeMirror-hscrollbar");
		d.scrollbarV = elt("div", [elt("div", null, null, "width: 1px")], "CodeMirror-vscrollbar");
		d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
		d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
		// DIVs containing the selection and the actual code
		d.lineDiv = elt("div", null, "CodeMirror-code");
		d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
		// Blinky cursor, and element used to ensure cursor fits at the end of a line
		d.cursor = elt("div", "\u00a0", "CodeMirror-cursor");
		// Secondary cursor, shown when on a 'jump' in bi-directional text
		d.otherCursor = elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor");
		// Used to measure text size
		d.measure = elt("div", null, "CodeMirror-measure");
		// Wraps everything that needs to exist inside the vertically-padded coordinate system
		d.lineSpace = elt("div", [d.measure, d.selectionDiv, d.lineDiv, d.cursor, d.otherCursor],
			null, "position: relative; outline: none");
		// Moved around its parent to cover visible view
		d.mover = elt("div", [elt("div", [d.lineSpace], "CodeMirror-lines")], null, "position: relative");
		// Set to the height of the text, causes scrolling
		d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
		// D is needed because behavior of elts with overflow: auto and padding is inconsistent across browsers
		d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerCutOff + "px; width: 1px;");
		// Will contain the gutters, if any
		d.gutters = elt("div", null, "CodeMirror-gutters");
		d.lineGutter = null;
		// Provides scrolling
		d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
		d.scroller.setAttribute("tabIndex", "-1");
		// The element in which the editor lives.
		d.wrapper = elt("div", [d.inputDiv, d.scrollbarH, d.scrollbarV,
			d.scrollbarFiller, d.gutterFiller, d.scroller
		], "CodeMirror");
		// Work around IE7 z-index bug
		if (ie_lt8) {
			d.gutters.style.zIndex = -1;
			d.scroller.style.paddingRight = 0;
		}
		if (place.appendChild) place.appendChild(d.wrapper);
		else place(d.wrapper);

		// Needed to hide big blue blinking cursor on Mobile Safari
		if (ios) input.style.width = "0px";
		if (!webkit) d.scroller.draggable = true;
		// Needed to handle Tab key in KHTML
		if (khtml) {
			d.inputDiv.style.height = "1px";
			d.inputDiv.style.position = "absolute";
		}
		// Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
		else if (ie_lt8) d.scrollbarH.style.minWidth = d.scrollbarV.style.minWidth = "18px";

		// Current visible range (may be bigger than the view window).
		d.viewOffset = d.lastSizeC = 0;
		d.showingFrom = d.showingTo = docStart;

		// Used to only resize the line number gutter when necessary (when
		// the amount of lines crosses a boundary that makes its width change)
		d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
		// See readInput and resetInput
		d.prevInput = "";
		// Set to true when a non-horizontal-scrolling widget is added. As
		// an optimization, widget aligning is skipped when d is false.
		d.alignWidgets = false;
		// Flag that indicates whether we currently expect input to appear
		// (after some event like 'keypress' or 'input') and are polling
		// intensively.
		d.pollingFast = false;
		// Self-resetting timeout for the poller
		d.poll = new Delayed();

		d.cachedCharWidth = d.cachedTextHeight = null;
		d.measureLineCache = [];
		d.measureLineCachePos = 0;

		// Tracks when resetInput has punted to just putting a short
		// string instead of the (large) selection.
		d.inaccurateSelection = false;

		// Tracks the maximum line length so that the horizontal scrollbar
		// can be kept static when scrolling.
		d.maxLine = null;
		d.maxLineLength = 0;
		d.maxLineChanged = false;

		// Used for measuring wheel scrolling granularity
		d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

		return d;
	}

	// STATE UPDATES

	// Used to get the editor into a consistent state again when options change.

	function loadMode(cm) {
		cm.doc.mode = CodeMirror.getMode(cm.options, cm.doc.modeOption);
		cm.doc.iter(function(line) {
			if (line.stateAfter) line.stateAfter = null;
			if (line.styles) line.styles = null;
		});
		cm.doc.frontier = cm.doc.first;
		startWorker(cm, 100);
		cm.state.modeGen++;
		if (cm.curOp) regChange(cm);
	}

	function wrappingChanged(cm) {
		if (cm.options.lineWrapping) {
			cm.display.wrapper.className += " CodeMirror-wrap";
			cm.display.sizer.style.minWidth = "";
		} else {
			cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-wrap", "");
			computeMaxLength(cm);
		}
		estimateLineHeights(cm);
		regChange(cm);
		clearCaches(cm);
		setTimeout(function() {
			updateScrollbars(cm);
		}, 100);
	}

	function estimateHeight(cm) {
		var th = textHeight(cm.display),
			wrapping = cm.options.lineWrapping;
		var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
		return function(line) {
			if (lineIsHidden(cm.doc, line))
				return 0;
			else if (wrapping)
				return (Math.ceil(line.text.length / perLine) || 1) * th;
			else
				return th;
		};
	}

	function estimateLineHeights(cm) {
		var doc = cm.doc,
			est = estimateHeight(cm);
		doc.iter(function(line) {
			var estHeight = est(line);
			if (estHeight != line.height) updateLineHeight(line, estHeight);
		});
	}

	function keyMapChanged(cm) {
		var map = keyMap[cm.options.keyMap],
			style = map.style;
		cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") +
			(style ? " cm-keymap-" + style : "");
		cm.state.disableInput = map.disableInput;
	}

	function themeChanged(cm) {
		cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
			cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
		clearCaches(cm);
	}

	function guttersChanged(cm) {
		updateGutters(cm);
		regChange(cm);
		setTimeout(function() {
			alignHorizontally(cm);
		}, 20);
	}

	function updateGutters(cm) {
		var gutters = cm.display.gutters,
			specs = cm.options.gutters;
		removeChildren(gutters);
		for (var i = 0; i < specs.length; ++i) {
			var gutterClass = specs[i];
			var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + gutterClass));
			if (gutterClass == "CodeMirror-linenumbers") {
				cm.display.lineGutter = gElt;
				gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
			}
		}
		gutters.style.display = i ? "" : "none";
	}

	function lineLength(doc, line) {
		if (line.height == 0) return 0;
		var len = line.text.length,
			merged, cur = line;
		while (merged = collapsedSpanAtStart(cur)) {
			var found = merged.find();
			cur = getLine(doc, found.from.line);
			len += found.from.ch - found.to.ch;
		}
		cur = line;
		while (merged = collapsedSpanAtEnd(cur)) {
			var found = merged.find();
			len -= cur.text.length - found.from.ch;
			cur = getLine(doc, found.to.line);
			len += cur.text.length - found.to.ch;
		}
		return len;
	}

	function computeMaxLength(cm) {
		var d = cm.display,
			doc = cm.doc;
		d.maxLine = getLine(doc, doc.first);
		d.maxLineLength = lineLength(doc, d.maxLine);
		d.maxLineChanged = true;
		doc.iter(function(line) {
			var len = lineLength(doc, line);
			if (len > d.maxLineLength) {
				d.maxLineLength = len;
				d.maxLine = line;
			}
		});
	}

	// Make sure the gutters options contains the element
	// "CodeMirror-linenumbers" when the lineNumbers option is true.
	function setGuttersForLineNumbers(options) {
		var found = false;
		for (var i = 0; i < options.gutters.length; ++i) {
			if (options.gutters[i] == "CodeMirror-linenumbers") {
				if (options.lineNumbers) found = true;
				else options.gutters.splice(i--, 1);
			}
		}
		if (!found && options.lineNumbers)
			options.gutters.push("CodeMirror-linenumbers");
	}

	// SCROLLBARS

	// Re-synchronize the fake scrollbars with the actual size of the
	// content. Optionally force a scrollTop.
	function updateScrollbars(cm) {
		var d = cm.display,
			docHeight = cm.doc.height;
		var totalHeight = docHeight + paddingVert(d);
		d.sizer.style.minHeight = d.heightForcer.style.top = totalHeight + "px";
		d.gutters.style.height = Math.max(totalHeight, d.scroller.clientHeight - scrollerCutOff) + "px";
		var scrollHeight = Math.max(totalHeight, d.scroller.scrollHeight);
		var needsH = d.scroller.scrollWidth > (d.scroller.clientWidth + 1);
		var needsV = scrollHeight > (d.scroller.clientHeight + 1);
		if (needsV) {
			d.scrollbarV.style.display = "block";
			d.scrollbarV.style.bottom = needsH ? scrollbarWidth(d.measure) + "px" : "0";
			d.scrollbarV.firstChild.style.height =
				(scrollHeight - d.scroller.clientHeight + d.scrollbarV.clientHeight) + "px";
		} else d.scrollbarV.style.display = "";
		if (needsH) {
			d.scrollbarH.style.display = "block";
			d.scrollbarH.style.right = needsV ? scrollbarWidth(d.measure) + "px" : "0";
			d.scrollbarH.firstChild.style.width =
				(d.scroller.scrollWidth - d.scroller.clientWidth + d.scrollbarH.clientWidth) + "px";
		} else d.scrollbarH.style.display = "";
		if (needsH && needsV) {
			d.scrollbarFiller.style.display = "block";
			d.scrollbarFiller.style.height = d.scrollbarFiller.style.width = scrollbarWidth(d.measure) + "px";
		} else d.scrollbarFiller.style.display = "";
		if (needsH && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
			d.gutterFiller.style.display = "block";
			d.gutterFiller.style.height = scrollbarWidth(d.measure) + "px";
			d.gutterFiller.style.width = d.gutters.offsetWidth + "px";
		} else d.gutterFiller.style.display = "";

		if (mac_geLion && scrollbarWidth(d.measure) === 0)
			d.scrollbarV.style.minWidth = d.scrollbarH.style.minHeight = mac_geMountainLion ? "18px" : "12px";
	}

	function visibleLines(display, doc, viewPort) {
		var top = display.scroller.scrollTop,
			height = display.wrapper.clientHeight;
		if (typeof viewPort == "number") top = viewPort;
		else if (viewPort) {
			top = viewPort.top;
			height = viewPort.bottom - viewPort.top;
		}
		top = Math.floor(top - paddingTop(display));
		var bottom = Math.ceil(top + height);
		return {
			from: lineAtHeight(doc, top),
			to: lineAtHeight(doc, bottom)
		};
	}

	// LINE NUMBERS

	function alignHorizontally(cm) {
		var display = cm.display;
		if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) return;
		var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
		var gutterW = display.gutters.offsetWidth,
			l = comp + "px";
		for (var n = display.lineDiv.firstChild; n; n = n.nextSibling)
			if (n.alignable) {
				for (var i = 0, a = n.alignable; i < a.length; ++i) a[i].style.left = l;
			}
		if (cm.options.fixedGutter)
			display.gutters.style.left = (comp + gutterW) + "px";
	}

	function maybeUpdateLineNumberWidth(cm) {
		if (!cm.options.lineNumbers) return false;
		var doc = cm.doc,
			last = lineNumberFor(cm.options, doc.first + doc.size - 1),
			display = cm.display;
		if (last.length != display.lineNumChars) {
			var test = display.measure.appendChild(elt("div", [elt("div", last)],
				"CodeMirror-linenumber CodeMirror-gutter-elt"));
			var innerW = test.firstChild.offsetWidth,
				padding = test.offsetWidth - innerW;
			display.lineGutter.style.width = "";
			display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding);
			display.lineNumWidth = display.lineNumInnerWidth + padding;
			display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
			display.lineGutter.style.width = display.lineNumWidth + "px";
			return true;
		}
		return false;
	}

	function lineNumberFor(options, i) {
		return String(options.lineNumberFormatter(i + options.firstLineNumber));
	}

	function compensateForHScroll(display) {
		return getRect(display.scroller).left - getRect(display.sizer).left;
	}

	// DISPLAY DRAWING

	function updateDisplay(cm, changes, viewPort, forced) {
		var oldFrom = cm.display.showingFrom,
			oldTo = cm.display.showingTo,
			updated;
		var visible = visibleLines(cm.display, cm.doc, viewPort);
		for (;;) {
			if (!updateDisplayInner(cm, changes, visible, forced)) break;
			forced = false;
			updated = true;
			updateSelection(cm);
			updateScrollbars(cm);

			// Clip forced viewport to actual scrollable area
			if (viewPort)
				viewPort = Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight,
					typeof viewPort == "number" ? viewPort : viewPort.top);
			visible = visibleLines(cm.display, cm.doc, viewPort);
			if (visible.from >= cm.display.showingFrom && visible.to <= cm.display.showingTo)
				break;
			changes = [];
		}

		if (updated) {
			signalLater(cm, "update", cm);
			if (cm.display.showingFrom != oldFrom || cm.display.showingTo != oldTo)
				signalLater(cm, "viewportChange", cm, cm.display.showingFrom, cm.display.showingTo);
		}
		return updated;
	}

	// Uses a set of changes plus the current scroll position to
	// determine which DOM updates have to be made, and makes the
	// updates.
	function updateDisplayInner(cm, changes, visible, forced) {
		var display = cm.display,
			doc = cm.doc;
		if (!display.wrapper.clientWidth) {
			display.showingFrom = display.showingTo = doc.first;
			display.viewOffset = 0;
			return;
		}

		// Bail out if the visible area is already rendered and nothing changed.
		if (!forced && changes.length == 0 &&
			visible.from > display.showingFrom && visible.to < display.showingTo)
			return;

		if (maybeUpdateLineNumberWidth(cm))
			changes = [{
				from: doc.first,
				to: doc.first + doc.size
			}];
		var gutterW = display.sizer.style.marginLeft = display.gutters.offsetWidth + "px";
		display.scrollbarH.style.left = cm.options.fixedGutter ? gutterW : "0";

		// Used to determine which lines need their line numbers updated
		var positionsChangedFrom = Infinity;
		if (cm.options.lineNumbers)
			for (var i = 0; i < changes.length; ++i)
				if (changes[i].diff) {
					positionsChangedFrom = changes[i].from;
					break;
				}

		var end = doc.first + doc.size;
		var from = Math.max(visible.from - cm.options.viewportMargin, doc.first);
		var to = Math.min(end, visible.to + cm.options.viewportMargin);
		if (display.showingFrom < from && from - display.showingFrom < 20) from = Math.max(doc.first, display.showingFrom);
		if (display.showingTo > to && display.showingTo - to < 20) to = Math.min(end, display.showingTo);
		if (sawCollapsedSpans) {
			from = lineNo(visualLine(doc, getLine(doc, from)));
			while (to < end && lineIsHidden(doc, getLine(doc, to)))++to;
		}

		// Create a range of theoretically intact lines, and punch holes
		// in that using the change info.
		var intact = [{
			from: Math.max(display.showingFrom, doc.first),
			to: Math.min(display.showingTo, end)
		}];
		if (intact[0].from >= intact[0].to) intact = [];
		else intact = computeIntact(intact, changes);
		// When merged lines are present, we might have to reduce the
		// intact ranges because changes in continued fragments of the
		// intact lines do require the lines to be redrawn.
		if (sawCollapsedSpans)
			for (var i = 0; i < intact.length; ++i) {
				var range = intact[i],
					merged;
				while (merged = collapsedSpanAtEnd(getLine(doc, range.to - 1))) {
					var newTo = merged.find().from.line;
					if (newTo > range.from) range.to = newTo;
					else {
						intact.splice(i--, 1);
						break;
					}
				}
			}

		// Clip off the parts that won't be visible
		var intactLines = 0;
		for (var i = 0; i < intact.length; ++i) {
			var range = intact[i];
			if (range.from < from) range.from = from;
			if (range.to > to) range.to = to;
			if (range.from >= range.to) intact.splice(i--, 1);
			else intactLines += range.to - range.from;
		}
		if (!forced && intactLines == to - from && from == display.showingFrom && to == display.showingTo) {
			updateViewOffset(cm);
			return;
		}
		intact.sort(function(a, b) {
			return a.from - b.from;
		});

		// Avoid crashing on IE's "unspecified error" when in iframes
		try {
			var focused = document.activeElement;
		} catch (e) {}
		if (intactLines < (to - from) * .7) display.lineDiv.style.display = "none";
		patchDisplay(cm, from, to, intact, positionsChangedFrom);
		display.lineDiv.style.display = "";
		if (focused && document.activeElement != focused && focused.offsetHeight) focused.focus();

		var different = from != display.showingFrom || to != display.showingTo ||
			display.lastSizeC != display.wrapper.clientHeight;
		// This is just a bogus formula that detects when the editor is
		// resized or the font size changes.
		if (different) {
			display.lastSizeC = display.wrapper.clientHeight;
			startWorker(cm, 400);
		}
		display.showingFrom = from;
		display.showingTo = to;

		updateHeightsInViewport(cm);
		updateViewOffset(cm);

		return true;
	}

	function updateHeightsInViewport(cm) {
		var display = cm.display;
		var prevBottom = display.lineDiv.offsetTop;
		for (var node = display.lineDiv.firstChild, height; node; node = node.nextSibling)
			if (node.lineObj) {
				if (ie_lt8) {
					var bot = node.offsetTop + node.offsetHeight;
					height = bot - prevBottom;
					prevBottom = bot;
				} else {
					var box = getRect(node);
					height = box.bottom - box.top;
				}
				var diff = node.lineObj.height - height;
				if (height < 2) height = textHeight(display);
				if (diff > .001 || diff < -.001) {
					updateLineHeight(node.lineObj, height);
					var widgets = node.lineObj.widgets;
					if (widgets)
						for (var i = 0; i < widgets.length; ++i)
							widgets[i].height = widgets[i].node.offsetHeight;
				}
			}
	}

	function updateViewOffset(cm) {
		var off = cm.display.viewOffset = heightAtLine(cm, getLine(cm.doc, cm.display.showingFrom));
		// Position the mover div to align with the current virtual scroll position
		cm.display.mover.style.top = off + "px";
	}

	function computeIntact(intact, changes) {
		for (var i = 0, l = changes.length || 0; i < l; ++i) {
			var change = changes[i],
				intact2 = [],
				diff = change.diff || 0;
			for (var j = 0, l2 = intact.length; j < l2; ++j) {
				var range = intact[j];
				if (change.to <= range.from && change.diff) {
					intact2.push({
						from: range.from + diff,
						to: range.to + diff
					});
				} else if (change.to <= range.from || change.from >= range.to) {
					intact2.push(range);
				} else {
					if (change.from > range.from)
						intact2.push({
							from: range.from,
							to: change.from
						});
					if (change.to < range.to)
						intact2.push({
							from: change.to + diff,
							to: range.to + diff
						});
				}
			}
			intact = intact2;
		}
		return intact;
	}

	function getDimensions(cm) {
		var d = cm.display,
			left = {},
			width = {};
		for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
			left[cm.options.gutters[i]] = n.offsetLeft;
			width[cm.options.gutters[i]] = n.offsetWidth;
		}
		return {
			fixedPos: compensateForHScroll(d),
			gutterTotalWidth: d.gutters.offsetWidth,
			gutterLeft: left,
			gutterWidth: width,
			wrapperWidth: d.wrapper.clientWidth
		};
	}

	function patchDisplay(cm, from, to, intact, updateNumbersFrom) {
		var dims = getDimensions(cm);
		var display = cm.display,
			lineNumbers = cm.options.lineNumbers;
		if (!intact.length && (!webkit || !cm.display.currentWheelTarget))
			removeChildren(display.lineDiv);
		var container = display.lineDiv,
			cur = container.firstChild;

		function rm(node) {
			var next = node.nextSibling;
			if (webkit && mac && cm.display.currentWheelTarget == node) {
				node.style.display = "none";
				node.lineObj = null;
			} else {
				node.parentNode.removeChild(node);
			}
			return next;
		}

		var nextIntact = intact.shift(),
			lineN = from;
		cm.doc.iter(from, to, function(line) {
			if (nextIntact && nextIntact.to == lineN) nextIntact = intact.shift();
			if (lineIsHidden(cm.doc, line)) {
				if (line.height != 0) updateLineHeight(line, 0);
				if (line.widgets && cur.previousSibling)
					for (var i = 0; i < line.widgets.length; ++i) {
						var w = line.widgets[i];
						if (w.showIfHidden) {
							var prev = cur.previousSibling;
							if (/pre/i.test(prev.nodeName)) {
								var wrap = elt("div", null, null, "position: relative");
								prev.parentNode.replaceChild(wrap, prev);
								wrap.appendChild(prev);
								prev = wrap;
							}
							var wnode = prev.appendChild(elt("div", [w.node], "CodeMirror-linewidget"));
							if (!w.handleMouseEvents) wnode.ignoreEvents = true;
							positionLineWidget(w, wnode, prev, dims);
						}
					}
			} else if (nextIntact && nextIntact.from <= lineN && nextIntact.to > lineN) {
				// This line is intact. Skip to the actual node. Update its
				// line number if needed.
				while (cur.lineObj != line) cur = rm(cur);
				if (lineNumbers && updateNumbersFrom <= lineN && cur.lineNumber)
					setTextContent(cur.lineNumber, lineNumberFor(cm.options, lineN));
				cur = cur.nextSibling;
			} else {
				// For lines with widgets, make an attempt to find and reuse
				// the existing element, so that widgets aren't needlessly
				// removed and re-inserted into the dom
				if (line.widgets)
					for (var j = 0, search = cur, reuse; search && j < 20; ++j, search = search.nextSibling)
						if (search.lineObj == line && /div/i.test(search.nodeName)) {
							reuse = search;
							break;
						}
						// This line needs to be generated.
				var lineNode = buildLineElement(cm, line, lineN, dims, reuse);
				if (lineNode != reuse) {
					container.insertBefore(lineNode, cur);
				} else {
					while (cur != reuse) cur = rm(cur);
					cur = cur.nextSibling;
				}

				lineNode.lineObj = line;
			}
			++lineN;
		});
		while (cur) cur = rm(cur);
	}

	function buildLineElement(cm, line, lineNo, dims, reuse) {
		var lineElement = lineContent(cm, line);
		var markers = line.gutterMarkers,
			display = cm.display,
			wrap;

		if (!cm.options.lineNumbers && !markers && !line.bgClass && !line.wrapClass && !line.widgets)
			return lineElement;

		// Lines with gutter elements, widgets or a background class need
		// to be wrapped again, and have the extra elements added to the
		// wrapper div

		if (reuse) {
			reuse.alignable = null;
			var isOk = true,
				widgetsSeen = 0,
				insertBefore = null;
			for (var n = reuse.firstChild, next; n; n = next) {
				next = n.nextSibling;
				if (!/\bCodeMirror-linewidget\b/.test(n.className)) {
					reuse.removeChild(n);
				} else {
					for (var i = 0; i < line.widgets.length; ++i) {
						var widget = line.widgets[i];
						if (widget.node == n.firstChild) {
							if (!widget.above && !insertBefore) insertBefore = n;
							positionLineWidget(widget, n, reuse, dims);
							++widgetsSeen;
							break;
						}
					}
					if (i == line.widgets.length) {
						isOk = false;
						break;
					}
				}
			}
			reuse.insertBefore(lineElement, insertBefore);
			if (isOk && widgetsSeen == line.widgets.length) {
				wrap = reuse;
				reuse.className = line.wrapClass || "";
			}
		}
		if (!wrap) {
			wrap = elt("div", null, line.wrapClass, "position: relative");
			wrap.appendChild(lineElement);
		}
		// Kludge to make sure the styled element lies behind the selection (by z-index)
		if (line.bgClass)
			wrap.insertBefore(elt("div", null, line.bgClass + " CodeMirror-linebackground"), wrap.firstChild);
		if (cm.options.lineNumbers || markers) {
			var gutterWrap = wrap.insertBefore(elt("div", null, null, "position: absolute; left: " +
					(cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"),
				wrap.firstChild);
			if (cm.options.fixedGutter)(wrap.alignable || (wrap.alignable = [])).push(gutterWrap);
			if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
				wrap.lineNumber = gutterWrap.appendChild(
					elt("div", lineNumberFor(cm.options, lineNo),
						"CodeMirror-linenumber CodeMirror-gutter-elt",
						"left: " + dims.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + display.lineNumInnerWidth + "px"));
			if (markers)
				for (var k = 0; k < cm.options.gutters.length; ++k) {
					var id = cm.options.gutters[k],
						found = markers.hasOwnProperty(id) && markers[id];
					if (found)
						gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt", "left: " +
							dims.gutterLeft[id] + "px; width: " + dims.gutterWidth[id] + "px"));
				}
		}
		if (ie_lt8) wrap.style.zIndex = 2;
		if (line.widgets && wrap != reuse)
			for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
				var widget = ws[i],
					node = elt("div", [widget.node], "CodeMirror-linewidget");
				if (!widget.handleMouseEvents) node.ignoreEvents = true;
				positionLineWidget(widget, node, wrap, dims);
				if (widget.above)
					wrap.insertBefore(node, cm.options.lineNumbers && line.height != 0 ? gutterWrap : lineElement);
				else
					wrap.appendChild(node);
				signalLater(widget, "redraw");
			}
		return wrap;
	}

	function positionLineWidget(widget, node, wrap, dims) {
		if (widget.noHScroll) {
			(wrap.alignable || (wrap.alignable = [])).push(node);
			var width = dims.wrapperWidth;
			node.style.left = dims.fixedPos + "px";
			if (!widget.coverGutter) {
				width -= dims.gutterTotalWidth;
				node.style.paddingLeft = dims.gutterTotalWidth + "px";
			}
			node.style.width = width + "px";
		}
		if (widget.coverGutter) {
			node.style.zIndex = 5;
			node.style.position = "relative";
			if (!widget.noHScroll) node.style.marginLeft = -dims.gutterTotalWidth + "px";
		}
	}

	// SELECTION / CURSOR

	function updateSelection(cm) {
		var display = cm.display;
		var collapsed = posEq(cm.doc.sel.from, cm.doc.sel.to);
		if (collapsed || cm.options.showCursorWhenSelecting)
			updateSelectionCursor(cm);
		else
			display.cursor.style.display = display.otherCursor.style.display = "none";
		if (!collapsed)
			updateSelectionRange(cm);
		else
			display.selectionDiv.style.display = "none";

		// Move the hidden textarea near the cursor to prevent scrolling artifacts
		if (cm.options.moveInputWithCursor) {
			var headPos = cursorCoords(cm, cm.doc.sel.head, "div");
			var wrapOff = getRect(display.wrapper),
				lineOff = getRect(display.lineDiv);
			display.inputDiv.style.top = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
				headPos.top + lineOff.top - wrapOff.top)) + "px";
			display.inputDiv.style.left = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
				headPos.left + lineOff.left - wrapOff.left)) + "px";
		}
	}

	// No selection, plain cursor
	function updateSelectionCursor(cm) {
		var display = cm.display,
			pos = cursorCoords(cm, cm.doc.sel.head, "div");
		display.cursor.style.left = pos.left + "px";
		display.cursor.style.top = pos.top + "px";
		display.cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";
		display.cursor.style.display = "";

		if (pos.other) {
			display.otherCursor.style.display = "";
			display.otherCursor.style.left = pos.other.left + "px";
			display.otherCursor.style.top = pos.other.top + "px";
			display.otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
		} else {
			display.otherCursor.style.display = "none";
		}
	}

	// Highlight selection
	function updateSelectionRange(cm) {
		var display = cm.display,
			doc = cm.doc,
			sel = cm.doc.sel;
		var fragment = document.createDocumentFragment();
		var clientWidth = display.lineSpace.offsetWidth,
			pl = paddingLeft(cm.display);

		function add(left, top, width, bottom) {
			if (top < 0) top = 0;
			fragment.appendChild(elt("div", null, "CodeMirror-selected", "position: absolute; left: " + left +
				"px; top: " + top + "px; width: " + (width == null ? clientWidth - left : width) +
				"px; height: " + (bottom - top) + "px"));
		}

		function drawForLine(line, fromArg, toArg) {
			var lineObj = getLine(doc, line);
			var lineLen = lineObj.text.length;
			var start, end;

			function coords(ch, bias) {
				return charCoords(cm, Pos(line, ch), "div", lineObj, bias);
			}

			iterateBidiSections(getOrder(lineObj), fromArg || 0, toArg == null ? lineLen : toArg, function(from, to, dir) {
				var leftPos = coords(from, "left"),
					rightPos, left, right;
				if (from == to) {
					rightPos = leftPos;
					left = right = leftPos.left;
				} else {
					rightPos = coords(to - 1, "right");
					if (dir == "rtl") {
						var tmp = leftPos;
						leftPos = rightPos;
						rightPos = tmp;
					}
					left = leftPos.left;
					right = rightPos.right;
				}
				if (fromArg == null && from == 0) left = pl;
				if (rightPos.top - leftPos.top > 3) { // Different lines, draw top part
					add(left, leftPos.top, null, leftPos.bottom);
					left = pl;
					if (leftPos.bottom < rightPos.top) add(left, leftPos.bottom, null, rightPos.top);
				}
				if (toArg == null && to == lineLen) right = clientWidth;
				if (!start || leftPos.top < start.top || leftPos.top == start.top && leftPos.left < start.left)
					start = leftPos;
				if (!end || rightPos.bottom > end.bottom || rightPos.bottom == end.bottom && rightPos.right > end.right)
					end = rightPos;
				if (left < pl + 1) left = pl;
				add(left, rightPos.top, right - left, rightPos.bottom);
			});
			return {
				start: start,
				end: end
			};
		}

		if (sel.from.line == sel.to.line) {
			drawForLine(sel.from.line, sel.from.ch, sel.to.ch);
		} else {
			var fromLine = getLine(doc, sel.from.line),
				toLine = getLine(doc, sel.to.line);
			var singleVLine = visualLine(doc, fromLine) == visualLine(doc, toLine);
			var leftEnd = drawForLine(sel.from.line, sel.from.ch, singleVLine ? fromLine.text.length : null).end;
			var rightStart = drawForLine(sel.to.line, singleVLine ? 0 : null, sel.to.ch).start;
			if (singleVLine) {
				if (leftEnd.top < rightStart.top - 2) {
					add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
					add(pl, rightStart.top, rightStart.left, rightStart.bottom);
				} else {
					add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
				}
			}
			if (leftEnd.bottom < rightStart.top)
				add(pl, leftEnd.bottom, null, rightStart.top);
		}

		removeChildrenAndAdd(display.selectionDiv, fragment);
		display.selectionDiv.style.display = "";
	}

	// Cursor-blinking
	function restartBlink(cm) {
		if (!cm.state.focused) return;
		var display = cm.display;
		clearInterval(display.blinker);
		var on = true;
		display.cursor.style.visibility = display.otherCursor.style.visibility = "";
		display.blinker = setInterval(function() {
			display.cursor.style.visibility = display.otherCursor.style.visibility = (on = !on) ? "" : "hidden";
		}, cm.options.cursorBlinkRate);
	}

	// HIGHLIGHT WORKER

	function startWorker(cm, time) {
		if (cm.doc.mode.startState && cm.doc.frontier < cm.display.showingTo)
			cm.state.highlight.set(time, bind(highlightWorker, cm));
	}

	function highlightWorker(cm) {
		var doc = cm.doc;
		if (doc.frontier < doc.first) doc.frontier = doc.first;
		if (doc.frontier >= cm.display.showingTo) return;
		var end = +new Date + cm.options.workTime;
		var state = copyState(doc.mode, getStateBefore(cm, doc.frontier));
		var changed = [],
			prevChange;
		doc.iter(doc.frontier, Math.min(doc.first + doc.size, cm.display.showingTo + 500), function(line) {
			if (doc.frontier >= cm.display.showingFrom) { // Visible
				var oldStyles = line.styles;
				line.styles = highlightLine(cm, line, state);
				var ischange = !oldStyles || oldStyles.length != line.styles.length;
				for (var i = 0; !ischange && i < oldStyles.length; ++i) ischange = oldStyles[i] != line.styles[i];
				if (ischange) {
					if (prevChange && prevChange.end == doc.frontier) prevChange.end++;
					else changed.push(prevChange = {
						start: doc.frontier,
						end: doc.frontier + 1
					});
				}
				line.stateAfter = copyState(doc.mode, state);
			} else {
				processLine(cm, line, state);
				line.stateAfter = doc.frontier % 5 == 0 ? copyState(doc.mode, state) : null;
			}
			++doc.frontier;
			if (+new Date > end) {
				startWorker(cm, cm.options.workDelay);
				return true;
			}
		});
		if (changed.length)
			operation(cm, function() {
				for (var i = 0; i < changed.length; ++i)
					regChange(this, changed[i].start, changed[i].end);
			})();
	}

	// Finds the line to start with when starting a parse. Tries to
	// find a line with a stateAfter, so that it can start with a
	// valid state. If that fails, it returns the line with the
	// smallest indentation, which tends to need the least context to
	// parse correctly.
	function findStartLine(cm, n, precise) {
		var minindent, minline, doc = cm.doc;
		for (var search = n, lim = n - 100; search > lim; --search) {
			if (search <= doc.first) return doc.first;
			var line = getLine(doc, search - 1);
			if (line.stateAfter && (!precise || search <= doc.frontier)) return search;
			var indented = countColumn(line.text, null, cm.options.tabSize);
			if (minline == null || minindent > indented) {
				minline = search - 1;
				minindent = indented;
			}
		}
		return minline;
	}

	function getStateBefore(cm, n, precise) {
		var doc = cm.doc,
			display = cm.display;
		if (!doc.mode.startState) return true;
		var pos = findStartLine(cm, n, precise),
			state = pos > doc.first && getLine(doc, pos - 1).stateAfter;
		if (!state) state = startState(doc.mode);
		else state = copyState(doc.mode, state);
		doc.iter(pos, n, function(line) {
			processLine(cm, line, state);
			var save = pos == n - 1 || pos % 5 == 0 || pos >= display.showingFrom && pos < display.showingTo;
			line.stateAfter = save ? copyState(doc.mode, state) : null;
			++pos;
		});
		return state;
	}

	// POSITION MEASUREMENT

	function paddingTop(display) {
		return display.lineSpace.offsetTop;
	}

	function paddingVert(display) {
		return display.mover.offsetHeight - display.lineSpace.offsetHeight;
	}

	function paddingLeft(display) {
		var e = removeChildrenAndAdd(display.measure, elt("pre", null, null, "text-align: left")).appendChild(elt("span", "x"));
		return e.offsetLeft;
	}

	function measureChar(cm, line, ch, data, bias) {
		var dir = -1;
		data = data || measureLine(cm, line);

		for (var pos = ch;; pos += dir) {
			var r = data[pos];
			if (r) break;
			if (dir < 0 && pos == 0) dir = 1;
		}
		bias = pos > ch ? "left" : pos < ch ? "right" : bias;
		if (bias == "left" && r.leftSide) r = r.leftSide;
		else if (bias == "right" && r.rightSide) r = r.rightSide;
		return {
			left: pos < ch ? r.right : r.left,
			right: pos > ch ? r.left : r.right,
			top: r.top,
			bottom: r.bottom
		};
	}

	function findCachedMeasurement(cm, line) {
		var cache = cm.display.measureLineCache;
		for (var i = 0; i < cache.length; ++i) {
			var memo = cache[i];
			if (memo.text == line.text && memo.markedSpans == line.markedSpans &&
				cm.display.scroller.clientWidth == memo.width &&
				memo.classes == line.textClass + "|" + line.bgClass + "|" + line.wrapClass)
				return memo;
		}
	}

	function clearCachedMeasurement(cm, line) {
		var exists = findCachedMeasurement(cm, line);
		if (exists) exists.text = exists.measure = exists.markedSpans = null;
	}

	function measureLine(cm, line) {
		// First look in the cache
		var cached = findCachedMeasurement(cm, line);
		if (cached) return cached.measure;

		// Failing that, recompute and store result in cache
		var measure = measureLineInner(cm, line);
		var cache = cm.display.measureLineCache;
		var memo = {
			text: line.text,
			width: cm.display.scroller.clientWidth,
			markedSpans: line.markedSpans,
			measure: measure,
			classes: line.textClass + "|" + line.bgClass + "|" + line.wrapClass
		};
		if (cache.length == 16) cache[++cm.display.measureLineCachePos % 16] = memo;
		else cache.push(memo);
		return measure;
	}

	function measureLineInner(cm, line) {
		var display = cm.display,
			measure = emptyArray(line.text.length);
		var pre = lineContent(cm, line, measure, true);

		// IE does not cache element positions of inline elements between
		// calls to getBoundingClientRect. This makes the loop below,
		// which gathers the positions of all the characters on the line,
		// do an amount of layout work quadratic to the number of
		// characters. When line wrapping is off, we try to improve things
		// by first subdividing the line into a bunch of inline blocks, so
		// that IE can reuse most of the layout information from caches
		// for those blocks. This does interfere with line wrapping, so it
		// doesn't work when wrapping is on, but in that case the
		// situation is slightly better, since IE does cache line-wrapping
		// information and only recomputes per-line.
		if (ie && !ie_lt8 && !cm.options.lineWrapping && pre.childNodes.length > 100) {
			var fragment = document.createDocumentFragment();
			var chunk = 10,
				n = pre.childNodes.length;
			for (var i = 0, chunks = Math.ceil(n / chunk); i < chunks; ++i) {
				var wrap = elt("div", null, null, "display: inline-block");
				for (var j = 0; j < chunk && n; ++j) {
					wrap.appendChild(pre.firstChild);
					--n;
				}
				fragment.appendChild(wrap);
			}
			pre.appendChild(fragment);
		}

		removeChildrenAndAdd(display.measure, pre);

		var outer = getRect(display.lineDiv);
		var vranges = [],
			data = emptyArray(line.text.length),
			maxBot = pre.offsetHeight;
		// Work around an IE7/8 bug where it will sometimes have randomly
		// replaced our pre with a clone at this point.
		if (ie_lt9 && display.measure.first != pre)
			removeChildrenAndAdd(display.measure, pre);

		function measureRect(rect) {
			var top = rect.top - outer.top,
				bot = rect.bottom - outer.top;
			if (bot > maxBot) bot = maxBot;
			if (top < 0) top = 0;
			for (var i = vranges.length - 2; i >= 0; i -= 2) {
				var rtop = vranges[i],
					rbot = vranges[i + 1];
				if (rtop > bot || rbot < top) continue;
				if (rtop <= top && rbot >= bot ||
					top <= rtop && bot >= rbot ||
					Math.min(bot, rbot) - Math.max(top, rtop) >= (bot - top) >> 1) {
					vranges[i] = Math.min(top, rtop);
					vranges[i + 1] = Math.max(bot, rbot);
					break;
				}
			}
			if (i < 0) {
				i = vranges.length;
				vranges.push(top, bot);
			}
			return {
				left: rect.left - outer.left,
				right: rect.right - outer.left,
				top: i,
				bottom: null
			};
		}

		function finishRect(rect) {
			rect.bottom = vranges[rect.top + 1];
			rect.top = vranges[rect.top];
		}

		for (var i = 0, cur; i < measure.length; ++i)
			if (cur = measure[i]) {
				var node = cur,
					rect = null;
				// A widget might wrap, needs special care
				if (/\bCodeMirror-widget\b/.test(cur.className) && cur.getClientRects) {
					if (cur.firstChild.nodeType == 1) node = cur.firstChild;
					var rects = node.getClientRects();
					if (rects.length > 1) {
						rect = data[i] = measureRect(rects[0]);
						rect.rightSide = measureRect(rects[rects.length - 1]);
					}
				}
				if (!rect) rect = data[i] = measureRect(getRect(node));
				if (cur.measureRight) rect.right = getRect(cur.measureRight).left;
				if (cur.leftSide) rect.leftSide = measureRect(getRect(cur.leftSide));
			}
		for (var i = 0, cur; i < data.length; ++i)
			if (cur = data[i]) {
				finishRect(cur);
				if (cur.leftSide) finishRect(cur.leftSide);
				if (cur.rightSide) finishRect(cur.rightSide);
			}
		return data;
	}

	function measureLineWidth(cm, line) {
		var hasBadSpan = false;
		if (line.markedSpans)
			for (var i = 0; i < line.markedSpans; ++i) {
				var sp = line.markedSpans[i];
				if (sp.collapsed && (sp.to == null || sp.to == line.text.length)) hasBadSpan = true;
			}
		var cached = !hasBadSpan && findCachedMeasurement(cm, line);
		if (cached) return measureChar(cm, line, line.text.length, cached.measure, "right").right;

		var pre = lineContent(cm, line, null, true);
		var end = pre.appendChild(zeroWidthElement(cm.display.measure));
		removeChildrenAndAdd(cm.display.measure, pre);
		return getRect(end).right - getRect(cm.display.lineDiv).left;
	}

	function clearCaches(cm) {
		cm.display.measureLineCache.length = cm.display.measureLineCachePos = 0;
		cm.display.cachedCharWidth = cm.display.cachedTextHeight = null;
		if (!cm.options.lineWrapping) cm.display.maxLineChanged = true;
		cm.display.lineNumChars = null;
	}

	function pageScrollX() {
		return window.pageXOffset || (document.documentElement || document.body).scrollLeft;
	}

	function pageScrollY() {
		return window.pageYOffset || (document.documentElement || document.body).scrollTop;
	}

	// Context is one of "line", "div" (display.lineDiv), "local"/null (editor), or "page"
	function intoCoordSystem(cm, lineObj, rect, context) {
		if (lineObj.widgets)
			for (var i = 0; i < lineObj.widgets.length; ++i)
				if (lineObj.widgets[i].above) {
					var size = widgetHeight(lineObj.widgets[i]);
					rect.top += size;
					rect.bottom += size;
				}
		if (context == "line") return rect;
		if (!context) context = "local";
		var yOff = heightAtLine(cm, lineObj);
		if (context == "local") yOff += paddingTop(cm.display);
		else yOff -= cm.display.viewOffset;
		if (context == "page" || context == "window") {
			var lOff = getRect(cm.display.lineSpace);
			yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
			var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
			rect.left += xOff;
			rect.right += xOff;
		}
		rect.top += yOff;
		rect.bottom += yOff;
		return rect;
	}

	// Context may be "window", "page", "div", or "local"/null
	// Result is in "div" coords
	function fromCoordSystem(cm, coords, context) {
		if (context == "div") return coords;
		var left = coords.left,
			top = coords.top;
		// First move into "page" coordinate system
		if (context == "page") {
			left -= pageScrollX();
			top -= pageScrollY();
		} else if (context == "local" || !context) {
			var localBox = getRect(cm.display.sizer);
			left += localBox.left;
			top += localBox.top;
		}

		var lineSpaceBox = getRect(cm.display.lineSpace);
		return {
			left: left - lineSpaceBox.left,
			top: top - lineSpaceBox.top
		};
	}

	function charCoords(cm, pos, context, lineObj, bias) {
		if (!lineObj) lineObj = getLine(cm.doc, pos.line);
		return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, null, bias), context);
	}

	function cursorCoords(cm, pos, context, lineObj, measurement) {
		lineObj = lineObj || getLine(cm.doc, pos.line);
		if (!measurement) measurement = measureLine(cm, lineObj);

		function get(ch, right) {
			var m = measureChar(cm, lineObj, ch, measurement, right ? "right" : "left");
			if (right) m.left = m.right;
			else m.right = m.left;
			return intoCoordSystem(cm, lineObj, m, context);
		}

		function getBidi(ch, partPos) {
			var part = order[partPos],
				right = part.level % 2;
			if (ch == bidiLeft(part) && partPos && part.level < order[partPos - 1].level) {
				part = order[--partPos];
				ch = bidiRight(part) - (part.level % 2 ? 0 : 1);
				right = true;
			} else if (ch == bidiRight(part) && partPos < order.length - 1 && part.level < order[partPos + 1].level) {
				part = order[++partPos];
				ch = bidiLeft(part) - part.level % 2;
				right = false;
			}
			if (right && ch == part.to && ch > part.from) return get(ch - 1);
			return get(ch, right);
		}
		var order = getOrder(lineObj),
			ch = pos.ch;
		if (!order) return get(ch);
		var partPos = getBidiPartAt(order, ch);
		var val = getBidi(ch, partPos);
		if (bidiOther != null) val.other = getBidi(ch, bidiOther);
		return val;
	}

	function PosWithInfo(line, ch, outside, xRel) {
		var pos = new Pos(line, ch);
		pos.xRel = xRel;
		if (outside) pos.outside = true;
		return pos;
	}

	// Coords must be lineSpace-local
	function coordsChar(cm, x, y) {
		var doc = cm.doc;
		y += cm.display.viewOffset;
		if (y < 0) return PosWithInfo(doc.first, 0, true, -1);
		var lineNo = lineAtHeight(doc, y),
			last = doc.first + doc.size - 1;
		if (lineNo > last)
			return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, true, 1);
		if (x < 0) x = 0;

		for (;;) {
			var lineObj = getLine(doc, lineNo);
			var found = coordsCharInner(cm, lineObj, lineNo, x, y);
			var merged = collapsedSpanAtEnd(lineObj);
			var mergedPos = merged && merged.find();
			if (merged && (found.ch > mergedPos.from.ch || found.ch == mergedPos.from.ch && found.xRel > 0))
				lineNo = mergedPos.to.line;
			else
				return found;
		}
	}

	function coordsCharInner(cm, lineObj, lineNo, x, y) {
		var innerOff = y - heightAtLine(cm, lineObj);
		var wrongLine = false,
			adjust = 2 * cm.display.wrapper.clientWidth;
		var measurement = measureLine(cm, lineObj);

		function getX(ch) {
			var sp = cursorCoords(cm, Pos(lineNo, ch), "line",
				lineObj, measurement);
			wrongLine = true;
			if (innerOff > sp.bottom) return sp.left - adjust;
			else if (innerOff < sp.top) return sp.left + adjust;
			else wrongLine = false;
			return sp.left;
		}

		var bidi = getOrder(lineObj),
			dist = lineObj.text.length;
		var from = lineLeft(lineObj),
			to = lineRight(lineObj);
		var fromX = getX(from),
			fromOutside = wrongLine,
			toX = getX(to),
			toOutside = wrongLine;

		if (x > toX) return PosWithInfo(lineNo, to, toOutside, 1);
		// Do a binary search between these bounds.
		for (;;) {
			if (bidi ? to == from || to == moveVisually(lineObj, from, 1) : to - from <= 1) {
				var ch = x < fromX || x - fromX <= toX - x ? from : to;
				var xDiff = x - (ch == from ? fromX : toX);
				while (isExtendingChar.test(lineObj.text.charAt(ch)))++ch;
				var pos = PosWithInfo(lineNo, ch, ch == from ? fromOutside : toOutside,
					xDiff < 0 ? -1 : xDiff ? 1 : 0);
				return pos;
			}
			var step = Math.ceil(dist / 2),
				middle = from + step;
			if (bidi) {
				middle = from;
				for (var i = 0; i < step; ++i) middle = moveVisually(lineObj, middle, 1);
			}
			var middleX = getX(middle);
			if (middleX > x) {
				to = middle;
				toX = middleX;
				if (toOutside = wrongLine) toX += 1000;
				dist = step;
			} else {
				from = middle;
				fromX = middleX;
				fromOutside = wrongLine;
				dist -= step;
			}
		}
	}

	var measureText;

	function textHeight(display) {
		if (display.cachedTextHeight != null) return display.cachedTextHeight;
		if (measureText == null) {
			measureText = elt("pre");
			// Measure a bunch of lines, for browsers that compute
			// fractional heights.
			for (var i = 0; i < 49; ++i) {
				measureText.appendChild(document.createTextNode("x"));
				measureText.appendChild(elt("br"));
			}
			measureText.appendChild(document.createTextNode("x"));
		}
		removeChildrenAndAdd(display.measure, measureText);
		var height = measureText.offsetHeight / 50;
		if (height > 3) display.cachedTextHeight = height;
		removeChildren(display.measure);
		return height || 1;
	}

	function charWidth(display) {
		if (display.cachedCharWidth != null) return display.cachedCharWidth;
		var anchor = elt("span", "x");
		var pre = elt("pre", [anchor]);
		removeChildrenAndAdd(display.measure, pre);
		var width = anchor.offsetWidth;
		if (width > 2) display.cachedCharWidth = width;
		return width || 10;
	}

	// OPERATIONS

	// Operations are used to wrap changes in such a way that each
	// change won't have to update the cursor and display (which would
	// be awkward, slow, and error-prone), but instead updates are
	// batched and then all combined and executed at once.

	var nextOpId = 0;

	function startOperation(cm) {
		cm.curOp = {
			// An array of ranges of lines that have to be updated. See
			// updateDisplay.
			changes: [],
			forceUpdate: false,
			updateInput: null,
			userSelChange: null,
			textChanged: null,
			selectionChanged: false,
			cursorActivity: false,
			updateMaxLine: false,
			updateScrollPos: false,
			id: ++nextOpId
		};
		if (!delayedCallbackDepth++) delayedCallbacks = [];
	}

	function endOperation(cm) {
		var op = cm.curOp,
			doc = cm.doc,
			display = cm.display;
		cm.curOp = null;

		if (op.updateMaxLine) computeMaxLength(cm);
		if (display.maxLineChanged && !cm.options.lineWrapping && display.maxLine) {
			var width = measureLineWidth(cm, display.maxLine);
			display.sizer.style.minWidth = Math.max(0, width + 3 + scrollerCutOff) + "px";
			display.maxLineChanged = false;
			var maxScrollLeft = Math.max(0, display.sizer.offsetLeft + display.sizer.offsetWidth - display.scroller.clientWidth);
			if (maxScrollLeft < doc.scrollLeft && !op.updateScrollPos)
				setScrollLeft(cm, Math.min(display.scroller.scrollLeft, maxScrollLeft), true);
		}
		var newScrollPos, updated;
		if (op.updateScrollPos) {
			newScrollPos = op.updateScrollPos;
		} else if (op.selectionChanged && display.scroller.clientHeight) { // don't rescroll if not visible
			var coords = cursorCoords(cm, doc.sel.head);
			newScrollPos = calculateScrollPos(cm, coords.left, coords.top, coords.left, coords.bottom);
		}
		if (op.changes.length || op.forceUpdate || newScrollPos && newScrollPos.scrollTop != null) {
			updated = updateDisplay(cm, op.changes, newScrollPos && newScrollPos.scrollTop, op.forceUpdate);
			if (cm.display.scroller.offsetHeight) cm.doc.scrollTop = cm.display.scroller.scrollTop;
		}
		if (!updated && op.selectionChanged) updateSelection(cm);
		if (op.updateScrollPos) {
			display.scroller.scrollTop = display.scrollbarV.scrollTop = doc.scrollTop = newScrollPos.scrollTop;
			display.scroller.scrollLeft = display.scrollbarH.scrollLeft = doc.scrollLeft = newScrollPos.scrollLeft;
			alignHorizontally(cm);
			if (op.scrollToPos)
				scrollPosIntoView(cm, clipPos(cm.doc, op.scrollToPos), op.scrollToPosMargin);
		} else if (newScrollPos) {
			scrollCursorIntoView(cm);
		}
		if (op.selectionChanged) restartBlink(cm);

		if (cm.state.focused && op.updateInput)
			resetInput(cm, op.userSelChange);

		var hidden = op.maybeHiddenMarkers,
			unhidden = op.maybeUnhiddenMarkers;
		if (hidden)
			for (var i = 0; i < hidden.length; ++i)
				if (!hidden[i].lines.length) signal(hidden[i], "hide");
		if (unhidden)
			for (var i = 0; i < unhidden.length; ++i)
				if (unhidden[i].lines.length) signal(unhidden[i], "unhide");

		var delayed;
		if (!--delayedCallbackDepth) {
			delayed = delayedCallbacks;
			delayedCallbacks = null;
		}
		if (op.textChanged)
			signal(cm, "change", cm, op.textChanged);
		if (op.cursorActivity) signal(cm, "cursorActivity", cm);
		if (delayed)
			for (var i = 0; i < delayed.length; ++i) delayed[i]();
	}

	// Wraps a function in an operation. Returns the wrapped function.
	function operation(cm1, f) {
		return function() {
			var cm = cm1 || this,
				withOp = !cm.curOp;
			if (withOp) startOperation(cm);
			try {
				var result = f.apply(cm, arguments);
			} finally {
				if (withOp) endOperation(cm);
			}
			return result;
		};
	}

	function docOperation(f) {
		return function() {
			var withOp = this.cm && !this.cm.curOp,
				result;
			if (withOp) startOperation(this.cm);
			try {
				result = f.apply(this, arguments);
			} finally {
				if (withOp) endOperation(this.cm);
			}
			return result;
		};
	}

	function runInOp(cm, f) {
		var withOp = !cm.curOp,
			result;
		if (withOp) startOperation(cm);
		try {
			result = f();
		} finally {
			if (withOp) endOperation(cm);
		}
		return result;
	}

	function regChange(cm, from, to, lendiff) {
		if (from == null) from = cm.doc.first;
		if (to == null) to = cm.doc.first + cm.doc.size;
		cm.curOp.changes.push({
			from: from,
			to: to,
			diff: lendiff
		});
	}

	// INPUT HANDLING

	function slowPoll(cm) {
		if (cm.display.pollingFast) return;
		cm.display.poll.set(cm.options.pollInterval, function() {
			readInput(cm);
			if (cm.state.focused) slowPoll(cm);
		});
	}

	function fastPoll(cm) {
		var missed = false;
		cm.display.pollingFast = true;

		function p() {
			var changed = readInput(cm);
			if (!changed && !missed) {
				missed = true;
				cm.display.poll.set(60, p);
			} else {
				cm.display.pollingFast = false;
				slowPoll(cm);
			}
		}
		cm.display.poll.set(20, p);
	}

	// prevInput is a hack to work with IME. If we reset the textarea
	// on every change, that breaks IME. So we look for changes
	// compared to the previous content instead. (Modern browsers have
	// events that indicate IME taking place, but these are not widely
	// supported or compatible enough yet to rely on.)
	function readInput(cm) {
		var input = cm.display.input,
			prevInput = cm.display.prevInput,
			doc = cm.doc,
			sel = doc.sel;
		if (!cm.state.focused || hasSelection(input) || isReadOnly(cm) || cm.state.disableInput) return false;
		var text = input.value;
		if (text == prevInput && posEq(sel.from, sel.to)) return false;
		if (ie && !ie_lt9 && cm.display.inputHasSelection === text) {
			resetInput(cm, true);
			return false;
		}

		var withOp = !cm.curOp;
		if (withOp) startOperation(cm);
		sel.shift = false;
		var same = 0,
			l = Math.min(prevInput.length, text.length);
		while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same))++same;
		var from = sel.from,
			to = sel.to;
		if (same < prevInput.length)
			from = Pos(from.line, from.ch - (prevInput.length - same));
		else if (cm.state.overwrite && posEq(from, to) && !cm.state.pasteIncoming)
			to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + (text.length - same)));

		var updateInput = cm.curOp.updateInput;
		var changeEvent = {
			from: from,
			to: to,
			text: splitLines(text.slice(same)),
			origin: cm.state.pasteIncoming ? "paste" : "+input"
		};
		makeChange(cm.doc, changeEvent, "end");
		cm.curOp.updateInput = updateInput;
		signalLater(cm, "inputRead", cm, changeEvent);

		if (text.length > 1000 || text.indexOf("\n") > -1) input.value = cm.display.prevInput = "";
		else cm.display.prevInput = text;
		if (withOp) endOperation(cm);
		cm.state.pasteIncoming = false;
		return true;
	}

	function resetInput(cm, user) {
		var minimal, selected, doc = cm.doc;
		if (!posEq(doc.sel.from, doc.sel.to)) {
			cm.display.prevInput = "";
			minimal = hasCopyEvent &&
				(doc.sel.to.line - doc.sel.from.line > 100 || (selected = cm.getSelection()).length > 1000);
			var content = minimal ? "-" : selected || cm.getSelection();
			cm.display.input.value = content;
			if (cm.state.focused) selectInput(cm.display.input);
			if (ie && !ie_lt9) cm.display.inputHasSelection = content;
		} else if (user) {
			cm.display.prevInput = cm.display.input.value = "";
			if (ie && !ie_lt9) cm.display.inputHasSelection = null;
		}
		cm.display.inaccurateSelection = minimal;
	}

	function focusInput(cm) {
		if (cm.options.readOnly != "nocursor" && (!mobile || document.activeElement != cm.display.input))
			cm.display.input.focus();
	}

	function isReadOnly(cm) {
		return cm.options.readOnly || cm.doc.cantEdit;
	}

	// EVENT HANDLERS

	function registerEventHandlers(cm) {
		var d = cm.display;
		on(d.scroller, "mousedown", operation(cm, onMouseDown));
		if (ie)
			on(d.scroller, "dblclick", operation(cm, function(e) {
				if (signalDOMEvent(cm, e)) return;
				var pos = posFromMouse(cm, e);
				if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) return;
				e_preventDefault(e);
				var word = findWordAt(getLine(cm.doc, pos.line).text, pos);
				extendSelection(cm.doc, word.from, word.to);
			}));
		else
			on(d.scroller, "dblclick", function(e) {
				signalDOMEvent(cm, e) || e_preventDefault(e);
			});
		on(d.lineSpace, "selectstart", function(e) {
			if (!eventInWidget(d, e)) e_preventDefault(e);
		});
		// Gecko browsers fire contextmenu *after* opening the menu, at
		// which point we can't mess with it anymore. Context menu is
		// handled in onMouseDown for Gecko.
		if (!captureMiddleClick) on(d.scroller, "contextmenu", function(e) {
			onContextMenu(cm, e);
		});

		on(d.scroller, "scroll", function() {
			if (d.scroller.clientHeight) {
				setScrollTop(cm, d.scroller.scrollTop);
				setScrollLeft(cm, d.scroller.scrollLeft, true);
				signal(cm, "scroll", cm);
			}
		});
		on(d.scrollbarV, "scroll", function() {
			if (d.scroller.clientHeight) setScrollTop(cm, d.scrollbarV.scrollTop);
		});
		on(d.scrollbarH, "scroll", function() {
			if (d.scroller.clientHeight) setScrollLeft(cm, d.scrollbarH.scrollLeft);
		});

		on(d.scroller, "mousewheel", function(e) {
			onScrollWheel(cm, e);
		});
		on(d.scroller, "DOMMouseScroll", function(e) {
			onScrollWheel(cm, e);
		});

		function reFocus() {
			if (cm.state.focused) setTimeout(bind(focusInput, cm), 0);
		}
		on(d.scrollbarH, "mousedown", reFocus);
		on(d.scrollbarV, "mousedown", reFocus);
		// Prevent wrapper from ever scrolling
		on(d.wrapper, "scroll", function() {
			d.wrapper.scrollTop = d.wrapper.scrollLeft = 0;
		});

		var resizeTimer;

		function onResize() {
			if (resizeTimer == null) resizeTimer = setTimeout(function() {
				resizeTimer = null;
				// Might be a text scaling operation, clear size caches.
				d.cachedCharWidth = d.cachedTextHeight = knownScrollbarWidth = null;
				clearCaches(cm);
				runInOp(cm, bind(regChange, cm));
			}, 100);
		}
		on(window, "resize", onResize);
		// Above handler holds on to the editor and its data structures.
		// Here we poll to unregister it when the editor is no longer in
		// the document, so that it can be garbage-collected.
		function unregister() {
			for (var p = d.wrapper.parentNode; p && p != document.body; p = p.parentNode) {}
			if (p) setTimeout(unregister, 5000);
			else off(window, "resize", onResize);
		}
		setTimeout(unregister, 5000);

		on(d.input, "keyup", operation(cm, function(e) {
			if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
			if (e.keyCode == 16) cm.doc.sel.shift = false;
		}));
		on(d.input, "input", bind(fastPoll, cm));
		on(d.input, "keydown", operation(cm, onKeyDown));
		on(d.input, "keypress", operation(cm, onKeyPress));
		on(d.input, "focus", bind(onFocus, cm));
		on(d.input, "blur", bind(onBlur, cm));

		function drag_(e) {
			if (signalDOMEvent(cm, e) || cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))) return;
			e_stop(e);
		}
		if (cm.options.dragDrop) {
			on(d.scroller, "dragstart", function(e) {
				onDragStart(cm, e);
			});
			on(d.scroller, "dragenter", drag_);
			on(d.scroller, "dragover", drag_);
			on(d.scroller, "drop", operation(cm, onDrop));
		}
		on(d.scroller, "paste", function(e) {
			if (eventInWidget(d, e)) return;
			focusInput(cm);
			fastPoll(cm);
		});
		on(d.input, "paste", function() {
			cm.state.pasteIncoming = true;
			fastPoll(cm);
		});

		function prepareCopy() {
			if (d.inaccurateSelection) {
				d.prevInput = "";
				d.inaccurateSelection = false;
				d.input.value = cm.getSelection();
				selectInput(d.input);
			}
		}
		on(d.input, "cut", prepareCopy);
		on(d.input, "copy", prepareCopy);

		// Needed to handle Tab key in KHTML
		if (khtml) on(d.sizer, "mouseup", function() {
			if (document.activeElement == d.input) d.input.blur();
			focusInput(cm);
		});
	}

	function eventInWidget(display, e) {
		for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
			if (!n || n.ignoreEvents || n.parentNode == display.sizer && n != display.mover) return true;
		}
	}

	function posFromMouse(cm, e, liberal) {
		var display = cm.display;
		if (!liberal) {
			var target = e_target(e);
			if (target == display.scrollbarH || target == display.scrollbarH.firstChild ||
				target == display.scrollbarV || target == display.scrollbarV.firstChild ||
				target == display.scrollbarFiller || target == display.gutterFiller) return null;
		}
		var x, y, space = getRect(display.lineSpace);
		// Fails unpredictably on IE[67] when mouse is dragged around quickly.
		try {
			x = e.clientX;
			y = e.clientY;
		} catch (e) {
			return null;
		}
		return coordsChar(cm, x - space.left, y - space.top);
	}

	var lastClick, lastDoubleClick;

	function onMouseDown(e) {
		if (signalDOMEvent(this, e)) return;
		var cm = this,
			display = cm.display,
			doc = cm.doc,
			sel = doc.sel;
		sel.shift = e.shiftKey;

		if (eventInWidget(display, e)) {
			if (!webkit) {
				display.scroller.draggable = false;
				setTimeout(function() {
					display.scroller.draggable = true;
				}, 100);
			}
			return;
		}
		if (clickInGutter(cm, e)) return;
		var start = posFromMouse(cm, e);

		switch (e_button(e)) {
			case 3:
				if (captureMiddleClick) onContextMenu.call(cm, cm, e);
				return;
			case 2:
				if (start) extendSelection(cm.doc, start);
				setTimeout(bind(focusInput, cm), 20);
				e_preventDefault(e);
				return;
		}
		// For button 1, if it was clicked inside the editor
		// (posFromMouse returning non-null), we have to adjust the
		// selection.
		if (!start) {
			if (e_target(e) == display.scroller) e_preventDefault(e);
			return;
		}

		if (!cm.state.focused) onFocus(cm);

		var now = +new Date,
			type = "single";
		if (lastDoubleClick && lastDoubleClick.time > now - 400 && posEq(lastDoubleClick.pos, start)) {
			type = "triple";
			e_preventDefault(e);
			setTimeout(bind(focusInput, cm), 20);
			selectLine(cm, start.line);
		} else if (lastClick && lastClick.time > now - 400 && posEq(lastClick.pos, start)) {
			type = "double";
			lastDoubleClick = {
				time: now,
				pos: start
			};
			e_preventDefault(e);
			var word = findWordAt(getLine(doc, start.line).text, start);
			extendSelection(cm.doc, word.from, word.to);
		} else {
			lastClick = {
				time: now,
				pos: start
			};
		}

		var last = start;
		if (cm.options.dragDrop && dragAndDrop && !isReadOnly(cm) && !posEq(sel.from, sel.to) &&
			!posLess(start, sel.from) && !posLess(sel.to, start) && type == "single") {
			var dragEnd = operation(cm, function(e2) {
				if (webkit) display.scroller.draggable = false;
				cm.state.draggingText = false;
				off(document, "mouseup", dragEnd);
				off(display.scroller, "drop", dragEnd);
				if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
					e_preventDefault(e2);
					extendSelection(cm.doc, start);
					focusInput(cm);
				}
			});
			// Let the drag handler handle this.
			if (webkit) display.scroller.draggable = true;
			cm.state.draggingText = dragEnd;
			// IE's approach to draggable
			if (display.scroller.dragDrop) display.scroller.dragDrop();
			on(document, "mouseup", dragEnd);
			on(display.scroller, "drop", dragEnd);
			return;
		}
		e_preventDefault(e);
		if (type == "single") extendSelection(cm.doc, clipPos(doc, start));

		var startstart = sel.from,
			startend = sel.to,
			lastPos = start;

		function doSelect(cur) {
			if (posEq(lastPos, cur)) return;
			lastPos = cur;

			if (type == "single") {
				extendSelection(cm.doc, clipPos(doc, start), cur);
				return;
			}

			startstart = clipPos(doc, startstart);
			startend = clipPos(doc, startend);
			if (type == "double") {
				var word = findWordAt(getLine(doc, cur.line).text, cur);
				if (posLess(cur, startstart)) extendSelection(cm.doc, word.from, startend);
				else extendSelection(cm.doc, startstart, word.to);
			} else if (type == "triple") {
				if (posLess(cur, startstart)) extendSelection(cm.doc, startend, clipPos(doc, Pos(cur.line, 0)));
				else extendSelection(cm.doc, startstart, clipPos(doc, Pos(cur.line + 1, 0)));
			}
		}

		var editorSize = getRect(display.wrapper);
		// Used to ensure timeout re-tries don't fire when another extend
		// happened in the meantime (clearTimeout isn't reliable -- at
		// least on Chrome, the timeouts still happen even when cleared,
		// if the clear happens after their scheduled firing time).
		var counter = 0;

		function extend(e) {
			var curCount = ++counter;
			var cur = posFromMouse(cm, e, true);
			if (!cur) return;
			if (!posEq(cur, last)) {
				if (!cm.state.focused) onFocus(cm);
				last = cur;
				doSelect(cur);
				var visible = visibleLines(display, doc);
				if (cur.line >= visible.to || cur.line < visible.from)
					setTimeout(operation(cm, function() {
						if (counter == curCount) extend(e);
					}), 150);
			} else {
				var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
				if (outside) setTimeout(operation(cm, function() {
					if (counter != curCount) return;
					display.scroller.scrollTop += outside;
					extend(e);
				}), 50);
			}
		}

		function done(e) {
			counter = Infinity;
			e_preventDefault(e);
			focusInput(cm);
			off(document, "mousemove", move);
			off(document, "mouseup", up);
		}

		var move = operation(cm, function(e) {
			if (!ie && !e_button(e)) done(e);
			else extend(e);
		});
		var up = operation(cm, done);
		on(document, "mousemove", move);
		on(document, "mouseup", up);
	}

	function clickInGutter(cm, e) {
		var display = cm.display;
		try {
			var mX = e.clientX,
				mY = e.clientY;
		} catch (e) {
			return false;
		}

		if (mX >= Math.floor(getRect(display.gutters).right)) return false;
		e_preventDefault(e);
		if (!hasHandler(cm, "gutterClick")) return true;

		var lineBox = getRect(display.lineDiv);
		if (mY > lineBox.bottom) return true;
		mY -= lineBox.top - display.viewOffset;

		for (var i = 0; i < cm.options.gutters.length; ++i) {
			var g = display.gutters.childNodes[i];
			if (g && getRect(g).right >= mX) {
				var line = lineAtHeight(cm.doc, mY);
				var gutter = cm.options.gutters[i];
				signalLater(cm, "gutterClick", cm, line, gutter, e);
				break;
			}
		}
		return true;
	}

	// Kludge to work around strange IE behavior where it'll sometimes
	// re-fire a series of drag-related events right after the drop (#1551)
	var lastDrop = 0;

	function onDrop(e) {
		var cm = this;
		if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e) || (cm.options.onDragEvent && cm.options.onDragEvent(cm, addStop(e))))
			return;
		e_preventDefault(e);
		if (ie) lastDrop = +new Date;
		var pos = posFromMouse(cm, e, true),
			files = e.dataTransfer.files;
		if (!pos || isReadOnly(cm)) return;
		if (files && files.length && window.FileReader && window.File) {
			var n = files.length,
				text = Array(n),
				read = 0;
			var loadFile = function(file, i) {
				var reader = new FileReader;
				reader.onload = function() {
					text[i] = reader.result;
					if (++read == n) {
						pos = clipPos(cm.doc, pos);
						makeChange(cm.doc, {
							from: pos,
							to: pos,
							text: splitLines(text.join("\n")),
							origin: "paste"
						}, "around");
					}
				};
				reader.readAsText(file);
			};
			for (var i = 0; i < n; ++i) loadFile(files[i], i);
		} else {
			// Don't do a replace if the drop happened inside of the selected text.
			if (cm.state.draggingText && !(posLess(pos, cm.doc.sel.from) || posLess(cm.doc.sel.to, pos))) {
				cm.state.draggingText(e);
				// Ensure the editor is re-focused
				setTimeout(bind(focusInput, cm), 20);
				return;
			}
			try {
				var text = e.dataTransfer.getData("Text");
				if (text) {
					var curFrom = cm.doc.sel.from,
						curTo = cm.doc.sel.to;
					setSelection(cm.doc, pos, pos);
					if (cm.state.draggingText) replaceRange(cm.doc, "", curFrom, curTo, "paste");
					cm.replaceSelection(text, null, "paste");
					focusInput(cm);
					onFocus(cm);
				}
			} catch (e) {}
		}
	}

	function onDragStart(cm, e) {
		if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) {
			e_stop(e);
			return;
		}
		if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) return;

		var txt = cm.getSelection();
		e.dataTransfer.setData("Text", txt);

		// Use dummy image instead of default browsers image.
		// Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
		if (e.dataTransfer.setDragImage && !safari) {
			var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
			if (opera) {
				img.width = img.height = 1;
				cm.display.wrapper.appendChild(img);
				// Force a relayout, or Opera won't use our image for some obscure reason
				img._top = img.offsetTop;
			}
			e.dataTransfer.setDragImage(img, 0, 0);
			if (opera) img.parentNode.removeChild(img);
		}
	}

	function setScrollTop(cm, val) {
		if (Math.abs(cm.doc.scrollTop - val) < 2) return;
		cm.doc.scrollTop = val;
		if (!gecko) updateDisplay(cm, [], val);
		if (cm.display.scroller.scrollTop != val) cm.display.scroller.scrollTop = val;
		if (cm.display.scrollbarV.scrollTop != val) cm.display.scrollbarV.scrollTop = val;
		if (gecko) updateDisplay(cm, []);
		startWorker(cm, 100);
	}

	function setScrollLeft(cm, val, isScroller) {
		if (isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) return;
		val = Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth);
		cm.doc.scrollLeft = val;
		alignHorizontally(cm);
		if (cm.display.scroller.scrollLeft != val) cm.display.scroller.scrollLeft = val;
		if (cm.display.scrollbarH.scrollLeft != val) cm.display.scrollbarH.scrollLeft = val;
	}

	// Since the delta values reported on mouse wheel events are
	// unstandardized between browsers and even browser versions, and
	// generally horribly unpredictable, this code starts by measuring
	// the scroll effect that the first few mouse wheel events have,
	// and, from that, detects the way it can convert deltas to pixel
	// offsets afterwards.
	//
	// The reason we want to know the amount a wheel event will scroll
	// is that it gives us a chance to update the display before the
	// actual scrolling happens, reducing flickering.

	var wheelSamples = 0,
		wheelPixelsPerUnit = null;
	// Fill in a browser-detected starting value on browsers where we
	// know one. These don't have to be accurate -- the result of them
	// being wrong would just be a slight flicker on the first wheel
	// scroll (if it is large enough).
	if (ie) wheelPixelsPerUnit = -.53;
	else if (gecko) wheelPixelsPerUnit = 15;
	else if (chrome) wheelPixelsPerUnit = -.7;
	else if (safari) wheelPixelsPerUnit = -1 / 3;

	function onScrollWheel(cm, e) {
		var dx = e.wheelDeltaX,
			dy = e.wheelDeltaY;
		if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) dx = e.detail;
		if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) dy = e.detail;
		else if (dy == null) dy = e.wheelDelta;

		var display = cm.display,
			scroll = display.scroller;
		// Quit if there's nothing to scroll here
		if (!(dx && scroll.scrollWidth > scroll.clientWidth ||
			dy && scroll.scrollHeight > scroll.clientHeight)) return;

		// Webkit browsers on OS X abort momentum scrolls when the target
		// of the scroll event is removed from the scrollable element.
		// This hack (see related code in patchDisplay) makes sure the
		// element is kept around.
		if (dy && mac && webkit) {
			for (var cur = e.target; cur != scroll; cur = cur.parentNode) {
				if (cur.lineObj) {
					cm.display.currentWheelTarget = cur;
					break;
				}
			}
		}

		// On some browsers, horizontal scrolling will cause redraws to
		// happen before the gutter has been realigned, causing it to
		// wriggle around in a most unseemly way. When we have an
		// estimated pixels/delta value, we just handle horizontal
		// scrolling entirely here. It'll be slightly off from native, but
		// better than glitching out.
		if (dx && !gecko && !opera && wheelPixelsPerUnit != null) {
			if (dy)
				setScrollTop(cm, Math.max(0, Math.min(scroll.scrollTop + dy * wheelPixelsPerUnit, scroll.scrollHeight - scroll.clientHeight)));
			setScrollLeft(cm, Math.max(0, Math.min(scroll.scrollLeft + dx * wheelPixelsPerUnit, scroll.scrollWidth - scroll.clientWidth)));
			e_preventDefault(e);
			display.wheelStartX = null; // Abort measurement, if in progress
			return;
		}

		if (dy && wheelPixelsPerUnit != null) {
			var pixels = dy * wheelPixelsPerUnit;
			var top = cm.doc.scrollTop,
				bot = top + display.wrapper.clientHeight;
			if (pixels < 0) top = Math.max(0, top + pixels - 50);
			else bot = Math.min(cm.doc.height, bot + pixels + 50);
			updateDisplay(cm, [], {
				top: top,
				bottom: bot
			});
		}

		if (wheelSamples < 20) {
			if (display.wheelStartX == null) {
				display.wheelStartX = scroll.scrollLeft;
				display.wheelStartY = scroll.scrollTop;
				display.wheelDX = dx;
				display.wheelDY = dy;
				setTimeout(function() {
					if (display.wheelStartX == null) return;
					var movedX = scroll.scrollLeft - display.wheelStartX;
					var movedY = scroll.scrollTop - display.wheelStartY;
					var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
						(movedX && display.wheelDX && movedX / display.wheelDX);
					display.wheelStartX = display.wheelStartY = null;
					if (!sample) return;
					wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
					++wheelSamples;
				}, 200);
			} else {
				display.wheelDX += dx;
				display.wheelDY += dy;
			}
		}
	}

	function doHandleBinding(cm, bound, dropShift) {
		if (typeof bound == "string") {
			bound = commands[bound];
			if (!bound) return false;
		}
		// Ensure previous input has been read, so that the handler sees a
		// consistent view of the document
		if (cm.display.pollingFast && readInput(cm)) cm.display.pollingFast = false;
		var doc = cm.doc,
			prevShift = doc.sel.shift,
			done = false;
		try {
			if (isReadOnly(cm)) cm.state.suppressEdits = true;
			if (dropShift) doc.sel.shift = false;
			done = bound(cm) != Pass;
		} finally {
			doc.sel.shift = prevShift;
			cm.state.suppressEdits = false;
		}
		return done;
	}

	function allKeyMaps(cm) {
		var maps = cm.state.keyMaps.slice(0);
		if (cm.options.extraKeys) maps.push(cm.options.extraKeys);
		maps.push(cm.options.keyMap);
		return maps;
	}

	var maybeTransition;

	function handleKeyBinding(cm, e) {
		// Handle auto keymap transitions
		var startMap = getKeyMap(cm.options.keyMap),
			next = startMap.auto;
		clearTimeout(maybeTransition);
		if (next && !isModifierKey(e)) maybeTransition = setTimeout(function() {
			if (getKeyMap(cm.options.keyMap) == startMap) {
				cm.options.keyMap = (next.call ? next.call(null, cm) : next);
				keyMapChanged(cm);
			}
		}, 50);

		var name = keyName(e, true),
			handled = false;
		if (!name) return false;
		var keymaps = allKeyMaps(cm);

		if (e.shiftKey) {
			// First try to resolve full name (including 'Shift-'). Failing
			// that, see if there is a cursor-motion command (starting with
			// 'go') bound to the keyname without 'Shift-'.
			handled = lookupKey("Shift-" + name, keymaps, function(b) {
				return doHandleBinding(cm, b, true);
			}) || lookupKey(name, keymaps, function(b) {
				if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
					return doHandleBinding(cm, b);
			});
		} else {
			handled = lookupKey(name, keymaps, function(b) {
				return doHandleBinding(cm, b);
			});
		}

		if (handled) {
			e_preventDefault(e);
			restartBlink(cm);
			if (ie_lt9) {
				e.oldKeyCode = e.keyCode;
				e.keyCode = 0;
			}
			signalLater(cm, "keyHandled", cm, name, e);
		}
		return handled;
	}

	function handleCharBinding(cm, e, ch) {
		var handled = lookupKey("'" + ch + "'", allKeyMaps(cm),
			function(b) {
				return doHandleBinding(cm, b, true);
			});
		if (handled) {
			e_preventDefault(e);
			restartBlink(cm);
			signalLater(cm, "keyHandled", cm, "'" + ch + "'", e);
		}
		return handled;
	}

	var lastStoppedKey = null;

	function onKeyDown(e) {
		var cm = this;
		if (!cm.state.focused) onFocus(cm);
		if (ie && e.keyCode == 27) {
			e.returnValue = false;
		}
		if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
		var code = e.keyCode;
		// IE does strange things with escape.
		cm.doc.sel.shift = code == 16 || e.shiftKey;
		// First give onKeyEvent option a chance to handle this.
		var handled = handleKeyBinding(cm, e);
		if (opera) {
			lastStoppedKey = handled ? code : null;
			// Opera has no cut event... we try to at least catch the key combo
			if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
				cm.replaceSelection("");
		}
	}

	function onKeyPress(e) {
		var cm = this;
		if (signalDOMEvent(cm, e) || cm.options.onKeyEvent && cm.options.onKeyEvent(cm, addStop(e))) return;
		var keyCode = e.keyCode,
			charCode = e.charCode;
		if (opera && keyCode == lastStoppedKey) {
			lastStoppedKey = null;
			e_preventDefault(e);
			return;
		}
		if (((opera && (!e.which || e.which < 10)) || khtml) && handleKeyBinding(cm, e)) return;
		var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
		if (this.options.electricChars && this.doc.mode.electricChars &&
			this.options.smartIndent && !isReadOnly(this) &&
			this.doc.mode.electricChars.indexOf(ch) > -1)
			setTimeout(operation(cm, function() {
				indentLine(cm, cm.doc.sel.to.line, "smart");
			}), 75);
		if (handleCharBinding(cm, e, ch)) return;
		if (ie && !ie_lt9) cm.display.inputHasSelection = null;
		fastPoll(cm);
	}

	function onFocus(cm) {
		if (cm.options.readOnly == "nocursor") return;
		if (!cm.state.focused) {
			signal(cm, "focus", cm);
			cm.state.focused = true;
			if (cm.display.wrapper.className.search(/\bCodeMirror-focused\b/) == -1)
				cm.display.wrapper.className += " CodeMirror-focused";
			resetInput(cm, true);
		}
		slowPoll(cm);
		restartBlink(cm);
	}

	function onBlur(cm) {
		if (cm.state.focused) {
			signal(cm, "blur", cm);
			cm.state.focused = false;
			cm.display.wrapper.className = cm.display.wrapper.className.replace(" CodeMirror-focused", "");
		}
		clearInterval(cm.display.blinker);
		setTimeout(function() {
			if (!cm.state.focused) cm.doc.sel.shift = false;
		}, 150);
	}

	var detectingSelectAll;

	function onContextMenu(cm, e) {
		if (signalDOMEvent(cm, e, "contextmenu")) return;
		var display = cm.display,
			sel = cm.doc.sel;
		if (eventInWidget(display, e)) return;

		var pos = posFromMouse(cm, e),
			scrollPos = display.scroller.scrollTop;
		if (!pos || opera) return; // Opera is difficult.
		if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to))
			operation(cm, setSelection)(cm.doc, pos, pos);

		var oldCSS = display.input.style.cssText;
		display.inputDiv.style.position = "absolute";
		display.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
			"px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; outline: none;" +
			"border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);";
		focusInput(cm);
		resetInput(cm, true);
		// Adds "Select all" to context menu in FF
		if (posEq(sel.from, sel.to)) display.input.value = display.prevInput = " ";

		function prepareSelectAllHack() {
			if (display.input.selectionStart != null) {
				var extval = display.input.value = " " + (posEq(sel.from, sel.to) ? "" : display.input.value);
				display.prevInput = " ";
				display.input.selectionStart = 1;
				display.input.selectionEnd = extval.length;
			}
		}

		function rehide() {
			display.inputDiv.style.position = "relative";
			display.input.style.cssText = oldCSS;
			if (ie_lt9) display.scrollbarV.scrollTop = display.scroller.scrollTop = scrollPos;
			slowPoll(cm);

			// Try to detect the user choosing select-all
			if (display.input.selectionStart != null) {
				if (!ie || ie_lt9) prepareSelectAllHack();
				clearTimeout(detectingSelectAll);
				var i = 0,
					poll = function() {
						if (display.prevInput == " " && display.input.selectionStart == 0)
							operation(cm, commands.selectAll)(cm);
						else if (i++ < 10) detectingSelectAll = setTimeout(poll, 500);
						else resetInput(cm);
					};
				detectingSelectAll = setTimeout(poll, 200);
			}
		}

		if (ie && !ie_lt9) prepareSelectAllHack();
		if (captureMiddleClick) {
			e_stop(e);
			var mouseup = function() {
				off(window, "mouseup", mouseup);
				setTimeout(rehide, 20);
			};
			on(window, "mouseup", mouseup);
		} else {
			setTimeout(rehide, 50);
		}
	}

	// UPDATING

	var changeEnd = CodeMirror.changeEnd = function(change) {
		if (!change.text) return change.to;
		return Pos(change.from.line + change.text.length - 1,
			lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0));
	};

	// Make sure a position will be valid after the given change.
	function clipPostChange(doc, change, pos) {
		if (!posLess(change.from, pos)) return clipPos(doc, pos);
		var diff = (change.text.length - 1) - (change.to.line - change.from.line);
		if (pos.line > change.to.line + diff) {
			var preLine = pos.line - diff,
				lastLine = doc.first + doc.size - 1;
			if (preLine > lastLine) return Pos(lastLine, getLine(doc, lastLine).text.length);
			return clipToLen(pos, getLine(doc, preLine).text.length);
		}
		if (pos.line == change.to.line + diff)
			return clipToLen(pos, lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0) +
				getLine(doc, change.to.line).text.length - change.to.ch);
		var inside = pos.line - change.from.line;
		return clipToLen(pos, change.text[inside].length + (inside ? 0 : change.from.ch));
	}

	// Hint can be null|"end"|"start"|"around"|{anchor,head}
	function computeSelAfterChange(doc, change, hint) {
		if (hint && typeof hint == "object") // Assumed to be {anchor, head} object
			return {
			anchor: clipPostChange(doc, change, hint.anchor),
			head: clipPostChange(doc, change, hint.head)
		};

		if (hint == "start") return {
			anchor: change.from,
			head: change.from
		};

		var end = changeEnd(change);
		if (hint == "around") return {
			anchor: change.from,
			head: end
		};
		if (hint == "end") return {
			anchor: end,
			head: end
		};

		// hint is null, leave the selection alone as much as possible
		var adjustPos = function(pos) {
			if (posLess(pos, change.from)) return pos;
			if (!posLess(change.to, pos)) return end;

			var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1,
				ch = pos.ch;
			if (pos.line == change.to.line) ch += end.ch - change.to.ch;
			return Pos(line, ch);
		};
		return {
			anchor: adjustPos(doc.sel.anchor),
			head: adjustPos(doc.sel.head)
		};
	}

	function filterChange(doc, change, update) {
		var obj = {
			canceled: false,
			from: change.from,
			to: change.to,
			text: change.text,
			origin: change.origin,
			cancel: function() {
				this.canceled = true;
			}
		};
		if (update) obj.update = function(from, to, text, origin) {
			if (from) this.from = clipPos(doc, from);
			if (to) this.to = clipPos(doc, to);
			if (text) this.text = text;
			if (origin !== undefined) this.origin = origin;
		};
		signal(doc, "beforeChange", doc, obj);
		if (doc.cm) signal(doc.cm, "beforeChange", doc.cm, obj);

		if (obj.canceled) return null;
		return {
			from: obj.from,
			to: obj.to,
			text: obj.text,
			origin: obj.origin
		};
	}

	// Replace the range from from to to by the strings in replacement.
	// change is a {from, to, text [, origin]} object
	function makeChange(doc, change, selUpdate, ignoreReadOnly) {
		if (doc.cm) {
			if (!doc.cm.curOp) return operation(doc.cm, makeChange)(doc, change, selUpdate, ignoreReadOnly);
			if (doc.cm.state.suppressEdits) return;
		}

		if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
			change = filterChange(doc, change, true);
			if (!change) return;
		}

		// Possibly split or suppress the update based on the presence
		// of read-only spans in its range.
		var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
		if (split) {
			for (var i = split.length - 1; i >= 1; --i)
				makeChangeNoReadonly(doc, {
					from: split[i].from,
					to: split[i].to,
					text: [""]
				});
			if (split.length)
				makeChangeNoReadonly(doc, {
					from: split[0].from,
					to: split[0].to,
					text: change.text
				}, selUpdate);
		} else {
			makeChangeNoReadonly(doc, change, selUpdate);
		}
	}

	function makeChangeNoReadonly(doc, change, selUpdate) {
		var selAfter = computeSelAfterChange(doc, change, selUpdate);
		addToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

		makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
		var rebased = [];

		linkedDocs(doc, function(doc, sharedHist) {
			if (!sharedHist && indexOf(rebased, doc.history) == -1) {
				rebaseHist(doc.history, change);
				rebased.push(doc.history);
			}
			makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
		});
	}

	function makeChangeFromHistory(doc, type) {
		if (doc.cm && doc.cm.state.suppressEdits) return;

		var hist = doc.history;
		var event = (type == "undo" ? hist.done : hist.undone).pop();
		if (!event) return;

		var anti = {
			changes: [],
			anchorBefore: event.anchorAfter,
			headBefore: event.headAfter,
			anchorAfter: event.anchorBefore,
			headAfter: event.headBefore,
			generation: hist.generation
		};
		(type == "undo" ? hist.undone : hist.done).push(anti);
		hist.generation = event.generation || ++hist.maxGeneration;

		var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

		for (var i = event.changes.length - 1; i >= 0; --i) {
			var change = event.changes[i];
			change.origin = type;
			if (filter && !filterChange(doc, change, false)) {
				(type == "undo" ? hist.done : hist.undone).length = 0;
				return;
			}

			anti.changes.push(historyChangeFromChange(doc, change));

			var after = i ? computeSelAfterChange(doc, change, null) : {
				anchor: event.anchorBefore,
				head: event.headBefore
			};
			makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
			var rebased = [];

			linkedDocs(doc, function(doc, sharedHist) {
				if (!sharedHist && indexOf(rebased, doc.history) == -1) {
					rebaseHist(doc.history, change);
					rebased.push(doc.history);
				}
				makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
			});
		}
	}

	function shiftDoc(doc, distance) {
		function shiftPos(pos) {
			return Pos(pos.line + distance, pos.ch);
		}
		doc.first += distance;
		if (doc.cm) regChange(doc.cm, doc.first, doc.first, distance);
		doc.sel.head = shiftPos(doc.sel.head);
		doc.sel.anchor = shiftPos(doc.sel.anchor);
		doc.sel.from = shiftPos(doc.sel.from);
		doc.sel.to = shiftPos(doc.sel.to);
	}

	function makeChangeSingleDoc(doc, change, selAfter, spans) {
		if (doc.cm && !doc.cm.curOp)
			return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans);

		if (change.to.line < doc.first) {
			shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
			return;
		}
		if (change.from.line > doc.lastLine()) return;

		// Clip the change to the size of this doc
		if (change.from.line < doc.first) {
			var shift = change.text.length - 1 - (doc.first - change.from.line);
			shiftDoc(doc, shift);
			change = {
				from: Pos(doc.first, 0),
				to: Pos(change.to.line + shift, change.to.ch),
				text: [lst(change.text)],
				origin: change.origin
			};
		}
		var last = doc.lastLine();
		if (change.to.line > last) {
			change = {
				from: change.from,
				to: Pos(last, getLine(doc, last).text.length),
				text: [change.text[0]],
				origin: change.origin
			};
		}

		change.removed = getBetween(doc, change.from, change.to);

		if (!selAfter) selAfter = computeSelAfterChange(doc, change, null);
		if (doc.cm) makeChangeSingleDocInEditor(doc.cm, change, spans, selAfter);
		else updateDoc(doc, change, spans, selAfter);
	}

	function makeChangeSingleDocInEditor(cm, change, spans, selAfter) {
		var doc = cm.doc,
			display = cm.display,
			from = change.from,
			to = change.to;

		var recomputeMaxLength = false,
			checkWidthStart = from.line;
		if (!cm.options.lineWrapping) {
			checkWidthStart = lineNo(visualLine(doc, getLine(doc, from.line)));
			doc.iter(checkWidthStart, to.line + 1, function(line) {
				if (line == display.maxLine) {
					recomputeMaxLength = true;
					return true;
				}
			});
		}

		if (!posLess(doc.sel.head, change.from) && !posLess(change.to, doc.sel.head))
			cm.curOp.cursorActivity = true;

		updateDoc(doc, change, spans, selAfter, estimateHeight(cm));

		if (!cm.options.lineWrapping) {
			doc.iter(checkWidthStart, from.line + change.text.length, function(line) {
				var len = lineLength(doc, line);
				if (len > display.maxLineLength) {
					display.maxLine = line;
					display.maxLineLength = len;
					display.maxLineChanged = true;
					recomputeMaxLength = false;
				}
			});
			if (recomputeMaxLength) cm.curOp.updateMaxLine = true;
		}

		// Adjust frontier, schedule worker
		doc.frontier = Math.min(doc.frontier, from.line);
		startWorker(cm, 400);

		var lendiff = change.text.length - (to.line - from.line) - 1;
		// Remember that these lines changed, for updating the display
		regChange(cm, from.line, to.line + 1, lendiff);

		if (hasHandler(cm, "change")) {
			var changeObj = {
				from: from,
				to: to,
				text: change.text,
				removed: change.removed,
				origin: change.origin
			};
			if (cm.curOp.textChanged) {
				for (var cur = cm.curOp.textChanged; cur.next; cur = cur.next) {}
				cur.next = changeObj;
			} else cm.curOp.textChanged = changeObj;
		}
	}

	function replaceRange(doc, code, from, to, origin) {
		if (!to) to = from;
		if (posLess(to, from)) {
			var tmp = to;
			to = from;
			from = tmp;
		}
		if (typeof code == "string") code = splitLines(code);
		makeChange(doc, {
			from: from,
			to: to,
			text: code,
			origin: origin
		}, null);
	}

	// POSITION OBJECT

	function Pos(line, ch) {
		if (!(this instanceof Pos)) return new Pos(line, ch);
		this.line = line;
		this.ch = ch;
	}
	CodeMirror.Pos = Pos;

	function posEq(a, b) {
		return a.line == b.line && a.ch == b.ch;
	}

	function posLess(a, b) {
		return a.line < b.line || (a.line == b.line && a.ch < b.ch);
	}

	function copyPos(x) {
		return Pos(x.line, x.ch);
	}

	// SELECTION

	function clipLine(doc, n) {
		return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1));
	}

	function clipPos(doc, pos) {
		if (pos.line < doc.first) return Pos(doc.first, 0);
		var last = doc.first + doc.size - 1;
		if (pos.line > last) return Pos(last, getLine(doc, last).text.length);
		return clipToLen(pos, getLine(doc, pos.line).text.length);
	}

	function clipToLen(pos, linelen) {
		var ch = pos.ch;
		if (ch == null || ch > linelen) return Pos(pos.line, linelen);
		else if (ch < 0) return Pos(pos.line, 0);
		else return pos;
	}

	function isLine(doc, l) {
		return l >= doc.first && l < doc.first + doc.size;
	}

	// If shift is held, this will move the selection anchor. Otherwise,
	// it'll set the whole selection.
	function extendSelection(doc, pos, other, bias) {
		if (doc.sel.shift || doc.sel.extend) {
			var anchor = doc.sel.anchor;
			if (other) {
				var posBefore = posLess(pos, anchor);
				if (posBefore != posLess(other, anchor)) {
					anchor = pos;
					pos = other;
				} else if (posBefore != posLess(pos, other)) {
					pos = other;
				}
			}
			setSelection(doc, anchor, pos, bias);
		} else {
			setSelection(doc, pos, other || pos, bias);
		}
		if (doc.cm) doc.cm.curOp.userSelChange = true;
	}

	function filterSelectionChange(doc, anchor, head) {
		var obj = {
			anchor: anchor,
			head: head
		};
		signal(doc, "beforeSelectionChange", doc, obj);
		if (doc.cm) signal(doc.cm, "beforeSelectionChange", doc.cm, obj);
		obj.anchor = clipPos(doc, obj.anchor);
		obj.head = clipPos(doc, obj.head);
		return obj;
	}

	// Update the selection. Last two args are only used by
	// updateDoc, since they have to be expressed in the line
	// numbers before the update.
	function setSelection(doc, anchor, head, bias, checkAtomic) {
		if (!checkAtomic && hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange")) {
			var filtered = filterSelectionChange(doc, anchor, head);
			head = filtered.head;
			anchor = filtered.anchor;
		}

		var sel = doc.sel;
		sel.goalColumn = null;
		// Skip over atomic spans.
		if (checkAtomic || !posEq(anchor, sel.anchor))
			anchor = skipAtomic(doc, anchor, bias, checkAtomic != "push");
		if (checkAtomic || !posEq(head, sel.head))
			head = skipAtomic(doc, head, bias, checkAtomic != "push");

		if (posEq(sel.anchor, anchor) && posEq(sel.head, head)) return;

		sel.anchor = anchor;
		sel.head = head;
		var inv = posLess(head, anchor);
		sel.from = inv ? head : anchor;
		sel.to = inv ? anchor : head;

		if (doc.cm)
			doc.cm.curOp.updateInput = doc.cm.curOp.selectionChanged =
			doc.cm.curOp.cursorActivity = true;

		signalLater(doc, "cursorActivity", doc);
	}

	function reCheckSelection(cm) {
		setSelection(cm.doc, cm.doc.sel.from, cm.doc.sel.to, null, "push");
	}

	function skipAtomic(doc, pos, bias, mayClear) {
		var flipped = false,
			curPos = pos;
		var dir = bias || 1;
		doc.cantEdit = false;
		search: for (;;) {
			var line = getLine(doc, curPos.line);
			if (line.markedSpans) {
				for (var i = 0; i < line.markedSpans.length; ++i) {
					var sp = line.markedSpans[i],
						m = sp.marker;
					if ((sp.from == null || (m.inclusiveLeft ? sp.from <= curPos.ch : sp.from < curPos.ch)) &&
						(sp.to == null || (m.inclusiveRight ? sp.to >= curPos.ch : sp.to > curPos.ch))) {
						if (mayClear) {
							signal(m, "beforeCursorEnter");
							if (m.explicitlyCleared) {
								if (!line.markedSpans) break;
								else {
									--i;
									continue;
								}
							}
						}
						if (!m.atomic) continue;
						var newPos = m.find()[dir < 0 ? "from" : "to"];
						if (posEq(newPos, curPos)) {
							newPos.ch += dir;
							if (newPos.ch < 0) {
								if (newPos.line > doc.first) newPos = clipPos(doc, Pos(newPos.line - 1));
								else newPos = null;
							} else if (newPos.ch > line.text.length) {
								if (newPos.line < doc.first + doc.size - 1) newPos = Pos(newPos.line + 1, 0);
								else newPos = null;
							}
							if (!newPos) {
								if (flipped) {
									// Driven in a corner -- no valid cursor position found at all
									// -- try again *with* clearing, if we didn't already
									if (!mayClear) return skipAtomic(doc, pos, bias, true);
									// Otherwise, turn off editing until further notice, and return the start of the doc
									doc.cantEdit = true;
									return Pos(doc.first, 0);
								}
								flipped = true;
								newPos = pos;
								dir = -dir;
							}
						}
						curPos = newPos;
						continue search;
					}
				}
			}
			return curPos;
		}
	}

	// SCROLLING

	function scrollCursorIntoView(cm) {
		var coords = scrollPosIntoView(cm, cm.doc.sel.head, cm.options.cursorScrollMargin);
		if (!cm.state.focused) return;
		var display = cm.display,
			box = getRect(display.sizer),
			doScroll = null;
		if (coords.top + box.top < 0) doScroll = true;
		else if (coords.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) doScroll = false;
		if (doScroll != null && !phantom) {
			var hidden = display.cursor.style.display == "none";
			if (hidden) {
				display.cursor.style.display = "";
				display.cursor.style.left = coords.left + "px";
				display.cursor.style.top = (coords.top - display.viewOffset) + "px";
			}
			display.cursor.scrollIntoView(doScroll);
			if (hidden) display.cursor.style.display = "none";
		}
	}

	function scrollPosIntoView(cm, pos, margin) {
		if (margin == null) margin = 0;
		for (;;) {
			var changed = false,
				coords = cursorCoords(cm, pos);
			var scrollPos = calculateScrollPos(cm, coords.left, coords.top - margin, coords.left, coords.bottom + margin);
			var startTop = cm.doc.scrollTop,
				startLeft = cm.doc.scrollLeft;
			if (scrollPos.scrollTop != null) {
				setScrollTop(cm, scrollPos.scrollTop);
				if (Math.abs(cm.doc.scrollTop - startTop) > 1) changed = true;
			}
			if (scrollPos.scrollLeft != null) {
				setScrollLeft(cm, scrollPos.scrollLeft);
				if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) changed = true;
			}
			if (!changed) return coords;
		}
	}

	function scrollIntoView(cm, x1, y1, x2, y2) {
		var scrollPos = calculateScrollPos(cm, x1, y1, x2, y2);
		if (scrollPos.scrollTop != null) setScrollTop(cm, scrollPos.scrollTop);
		if (scrollPos.scrollLeft != null) setScrollLeft(cm, scrollPos.scrollLeft);
	}

	function calculateScrollPos(cm, x1, y1, x2, y2) {
		var display = cm.display,
			snapMargin = textHeight(cm.display);
		if (y1 < 0) y1 = 0;
		var screen = display.scroller.clientHeight - scrollerCutOff,
			screentop = display.scroller.scrollTop,
			result = {};
		var docBottom = cm.doc.height + paddingVert(display);
		var atTop = y1 < snapMargin,
			atBottom = y2 > docBottom - snapMargin;
		if (y1 < screentop) {
			result.scrollTop = atTop ? 0 : y1;
		} else if (y2 > screentop + screen) {
			var newTop = Math.min(y1, (atBottom ? docBottom : y2) - screen);
			if (newTop != screentop) result.scrollTop = newTop;
		}

		var screenw = display.scroller.clientWidth - scrollerCutOff,
			screenleft = display.scroller.scrollLeft;
		x1 += display.gutters.offsetWidth;
		x2 += display.gutters.offsetWidth;
		var gutterw = display.gutters.offsetWidth;
		var atLeft = x1 < gutterw + 10;
		if (x1 < screenleft + gutterw || atLeft) {
			if (atLeft) x1 = 0;
			result.scrollLeft = Math.max(0, x1 - 10 - gutterw);
		} else if (x2 > screenw + screenleft - 3) {
			result.scrollLeft = x2 + 10 - screenw;
		}
		return result;
	}

	function updateScrollPos(cm, left, top) {
		cm.curOp.updateScrollPos = {
			scrollLeft: left == null ? cm.doc.scrollLeft : left,
			scrollTop: top == null ? cm.doc.scrollTop : top
		};
	}

	function addToScrollPos(cm, left, top) {
		var pos = cm.curOp.updateScrollPos || (cm.curOp.updateScrollPos = {
			scrollLeft: cm.doc.scrollLeft,
			scrollTop: cm.doc.scrollTop
		});
		var scroll = cm.display.scroller;
		pos.scrollTop = Math.max(0, Math.min(scroll.scrollHeight - scroll.clientHeight, pos.scrollTop + top));
		pos.scrollLeft = Math.max(0, Math.min(scroll.scrollWidth - scroll.clientWidth, pos.scrollLeft + left));
	}

	// API UTILITIES

	function indentLine(cm, n, how, aggressive) {
		var doc = cm.doc;
		if (how == null) how = "add";
		if (how == "smart") {
			if (!cm.doc.mode.indent) how = "prev";
			else var state = getStateBefore(cm, n);
		}

		var tabSize = cm.options.tabSize;
		var line = getLine(doc, n),
			curSpace = countColumn(line.text, null, tabSize);
		var curSpaceString = line.text.match(/^\s*/)[0],
			indentation;
		if (how == "smart") {
			indentation = cm.doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
			if (indentation == Pass) {
				if (!aggressive) return;
				how = "prev";
			}
		}
		if (how == "prev") {
			if (n > doc.first) indentation = countColumn(getLine(doc, n - 1).text, null, tabSize);
			else indentation = 0;
		} else if (how == "add") {
			indentation = curSpace + cm.options.indentUnit;
		} else if (how == "subtract") {
			indentation = curSpace - cm.options.indentUnit;
		} else if (typeof how == "number") {
			indentation = curSpace + how;
		}
		indentation = Math.max(0, indentation);

		var indentString = "",
			pos = 0;
		if (cm.options.indentWithTabs)
			for (var i = Math.floor(indentation / tabSize); i; --i) {
				pos += tabSize;
				indentString += "\t";
			}
		if (pos < indentation) indentString += spaceStr(indentation - pos);

		if (indentString != curSpaceString)
			replaceRange(cm.doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
		line.stateAfter = null;
	}

	function changeLine(cm, handle, op) {
		var no = handle,
			line = handle,
			doc = cm.doc;
		if (typeof handle == "number") line = getLine(doc, clipLine(doc, handle));
		else no = lineNo(handle);
		if (no == null) return null;
		if (op(line, no)) regChange(cm, no, no + 1);
		else return null;
		return line;
	}

	function findPosH(doc, pos, dir, unit, visually) {
		var line = pos.line,
			ch = pos.ch,
			origDir = dir;
		var lineObj = getLine(doc, line);
		var possible = true;

		function findNextLine() {
			var l = line + dir;
			if (l < doc.first || l >= doc.first + doc.size) return (possible = false);
			line = l;
			return lineObj = getLine(doc, l);
		}

		function moveOnce(boundToLine) {
			var next = (visually ? moveVisually : moveLogically)(lineObj, ch, dir, true);
			if (next == null) {
				if (!boundToLine && findNextLine()) {
					if (visually) ch = (dir < 0 ? lineRight : lineLeft)(lineObj);
					else ch = dir < 0 ? lineObj.text.length : 0;
				} else return (possible = false);
			} else ch = next;
			return true;
		}

		if (unit == "char") moveOnce();
		else if (unit == "column") moveOnce(true);
		else if (unit == "word" || unit == "group") {
			var sawType = null,
				group = unit == "group";
			for (var first = true;; first = false) {
				if (dir < 0 && !moveOnce(!first)) break;
				var cur = lineObj.text.charAt(ch) || "\n";
				var type = isWordChar(cur) ? "w" : !group ? null : /\s/.test(cur) ? null : "p";
				if (sawType && sawType != type) {
					if (dir < 0) {
						dir = 1;
						moveOnce();
					}
					break;
				}
				if (type) sawType = type;
				if (dir > 0 && !moveOnce(!first)) break;
			}
		}
		var result = skipAtomic(doc, Pos(line, ch), origDir, true);
		if (!possible) result.hitSide = true;
		return result;
	}

	function findPosV(cm, pos, dir, unit) {
		var doc = cm.doc,
			x = pos.left,
			y;
		if (unit == "page") {
			var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
			y = pos.top + dir * (pageSize - (dir < 0 ? 1.5 : .5) * textHeight(cm.display));
		} else if (unit == "line") {
			y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
		}
		for (;;) {
			var target = coordsChar(cm, x, y);
			if (!target.outside) break;
			if (dir < 0 ? y <= 0 : y >= doc.height) {
				target.hitSide = true;
				break;
			}
			y += dir * 5;
		}
		return target;
	}

	function findWordAt(line, pos) {
		var start = pos.ch,
			end = pos.ch;
		if (line) {
			if ((pos.xRel < 0 || end == line.length) && start)--start;
			else ++end;
			var startChar = line.charAt(start);
			var check = isWordChar(startChar) ? isWordChar : /\s/.test(startChar) ? function(ch) {
				return /\s/.test(ch);
			} : function(ch) {
				return !/\s/.test(ch) && !isWordChar(ch);
			};
			while (start > 0 && check(line.charAt(start - 1)))--start;
			while (end < line.length && check(line.charAt(end)))++end;
		}
		return {
			from: Pos(pos.line, start),
			to: Pos(pos.line, end)
		};
	}

	function selectLine(cm, line) {
		extendSelection(cm.doc, Pos(line, 0), clipPos(cm.doc, Pos(line + 1, 0)));
	}

	// PROTOTYPE

	// The publicly visible API. Note that operation(null, f) means
	// 'wrap f in an operation, performed on its `this` parameter'

	CodeMirror.prototype = {
		constructor: CodeMirror,
		focus: function() {
			window.focus();
			focusInput(this);
			onFocus(this);
			fastPoll(this);
		},

		setOption: function(option, value) {
			var options = this.options,
				old = options[option];
			if (options[option] == value && option != "mode") return;
			options[option] = value;
			if (optionHandlers.hasOwnProperty(option))
				operation(this, optionHandlers[option])(this, value, old);
		},

		getOption: function(option) {
			return this.options[option];
		},
		getDoc: function() {
			return this.doc;
		},

		addKeyMap: function(map, bottom) {
			this.state.keyMaps[bottom ? "push" : "unshift"](map);
		},
		removeKeyMap: function(map) {
			var maps = this.state.keyMaps;
			for (var i = 0; i < maps.length; ++i)
				if (maps[i] == map || (typeof maps[i] != "string" && maps[i].name == map)) {
					maps.splice(i, 1);
					return true;
				}
		},

		addOverlay: operation(null, function(spec, options) {
			var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
			if (mode.startState) throw new Error("Overlays may not be stateful.");
			this.state.overlays.push({
				mode: mode,
				modeSpec: spec,
				opaque: options && options.opaque
			});
			this.state.modeGen++;
			regChange(this);
		}),
		removeOverlay: operation(null, function(spec) {
			var overlays = this.state.overlays;
			for (var i = 0; i < overlays.length; ++i) {
				var cur = overlays[i].modeSpec;
				if (cur == spec || typeof spec == "string" && cur.name == spec) {
					overlays.splice(i, 1);
					this.state.modeGen++;
					regChange(this);
					return;
				}
			}
		}),

		indentLine: operation(null, function(n, dir, aggressive) {
			if (typeof dir != "string" && typeof dir != "number") {
				if (dir == null) dir = this.options.smartIndent ? "smart" : "prev";
				else dir = dir ? "add" : "subtract";
			}
			if (isLine(this.doc, n)) indentLine(this, n, dir, aggressive);
		}),
		indentSelection: operation(null, function(how) {
			var sel = this.doc.sel;
			if (posEq(sel.from, sel.to)) return indentLine(this, sel.from.line, how);
			var e = sel.to.line - (sel.to.ch ? 0 : 1);
			for (var i = sel.from.line; i <= e; ++i) indentLine(this, i, how);
		}),

		// Fetch the parser token for a given character. Useful for hacks
		// that want to inspect the mode state (say, for completion).
		getTokenAt: function(pos, precise) {
			var doc = this.doc;
			pos = clipPos(doc, pos);
			var state = getStateBefore(this, pos.line, precise),
				mode = this.doc.mode;
			var line = getLine(doc, pos.line);
			var stream = new StringStream(line.text, this.options.tabSize);
			while (stream.pos < pos.ch && !stream.eol()) {
				stream.start = stream.pos;
				var style = mode.token(stream, state);
			}
			return {
				start: stream.start,
				end: stream.pos,
				string: stream.current(),
				className: style || null, // Deprecated, use 'type' instead
				type: style || null,
				state: state
			};
		},

		getTokenTypeAt: function(pos) {
			pos = clipPos(this.doc, pos);
			var styles = getLineStyles(this, getLine(this.doc, pos.line));
			var before = 0,
				after = (styles.length - 1) / 2,
				ch = pos.ch;
			if (ch == 0) return styles[2];
			for (;;) {
				var mid = (before + after) >> 1;
				if ((mid ? styles[mid * 2 - 1] : 0) >= ch) after = mid;
				else if (styles[mid * 2 + 1] < ch) before = mid + 1;
				else return styles[mid * 2 + 2];
			}
		},

		getModeAt: function(pos) {
			var mode = this.doc.mode;
			if (!mode.innerMode) return mode;
			return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode;
		},

		getHelper: function(pos, type) {
			if (!helpers.hasOwnProperty(type)) return;
			var help = helpers[type],
				mode = this.getModeAt(pos);
			return mode[type] && help[mode[type]] ||
				mode.helperType && help[mode.helperType] ||
				help[mode.name];
		},

		getStateAfter: function(line, precise) {
			var doc = this.doc;
			line = clipLine(doc, line == null ? doc.first + doc.size - 1 : line);
			return getStateBefore(this, line + 1, precise);
		},

		cursorCoords: function(start, mode) {
			var pos, sel = this.doc.sel;
			if (start == null) pos = sel.head;
			else if (typeof start == "object") pos = clipPos(this.doc, start);
			else pos = start ? sel.from : sel.to;
			return cursorCoords(this, pos, mode || "page");
		},

		charCoords: function(pos, mode) {
			return charCoords(this, clipPos(this.doc, pos), mode || "page");
		},

		coordsChar: function(coords, mode) {
			coords = fromCoordSystem(this, coords, mode || "page");
			return coordsChar(this, coords.left, coords.top);
		},

		lineAtHeight: function(height, mode) {
			height = fromCoordSystem(this, {
				top: height,
				left: 0
			}, mode || "page").top;
			return lineAtHeight(this.doc, height + this.display.viewOffset);
		},
		heightAtLine: function(line, mode) {
			var end = false,
				last = this.doc.first + this.doc.size - 1;
			if (line < this.doc.first) line = this.doc.first;
			else if (line > last) {
				line = last;
				end = true;
			}
			var lineObj = getLine(this.doc, line);
			return intoCoordSystem(this, getLine(this.doc, line), {
					top: 0,
					left: 0
				}, mode || "page").top +
				(end ? lineObj.height : 0);
		},

		defaultTextHeight: function() {
			return textHeight(this.display);
		},
		defaultCharWidth: function() {
			return charWidth(this.display);
		},

		setGutterMarker: operation(null, function(line, gutterID, value) {
			return changeLine(this, line, function(line) {
				var markers = line.gutterMarkers || (line.gutterMarkers = {});
				markers[gutterID] = value;
				if (!value && isEmpty(markers)) line.gutterMarkers = null;
				return true;
			});
		}),

		clearGutter: operation(null, function(gutterID) {
			var cm = this,
				doc = cm.doc,
				i = doc.first;
			doc.iter(function(line) {
				if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
					line.gutterMarkers[gutterID] = null;
					regChange(cm, i, i + 1);
					if (isEmpty(line.gutterMarkers)) line.gutterMarkers = null;
				}
				++i;
			});
		}),

		addLineClass: operation(null, function(handle, where, cls) {
			return changeLine(this, handle, function(line) {
				var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
				if (!line[prop]) line[prop] = cls;
				else if (new RegExp("(?:^|\\s)" + cls + "(?:$|\\s)").test(line[prop])) return false;
				else line[prop] += " " + cls;
				return true;
			});
		}),

		removeLineClass: operation(null, function(handle, where, cls) {
			return changeLine(this, handle, function(line) {
				var prop = where == "text" ? "textClass" : where == "background" ? "bgClass" : "wrapClass";
				var cur = line[prop];
				if (!cur) return false;
				else if (cls == null) line[prop] = null;
				else {
					var found = cur.match(new RegExp("(?:^|\\s+)" + cls + "(?:$|\\s+)"));
					if (!found) return false;
					var end = found.index + found[0].length;
					line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
				}
				return true;
			});
		}),

		addLineWidget: operation(null, function(handle, node, options) {
			return addLineWidget(this, handle, node, options);
		}),

		removeLineWidget: function(widget) {
			widget.clear();
		},

		lineInfo: function(line) {
			if (typeof line == "number") {
				if (!isLine(this.doc, line)) return null;
				var n = line;
				line = getLine(this.doc, line);
				if (!line) return null;
			} else {
				var n = lineNo(line);
				if (n == null) return null;
			}
			return {
				line: n,
				handle: line,
				text: line.text,
				gutterMarkers: line.gutterMarkers,
				textClass: line.textClass,
				bgClass: line.bgClass,
				wrapClass: line.wrapClass,
				widgets: line.widgets
			};
		},

		getViewport: function() {
			return {
				from: this.display.showingFrom,
				to: this.display.showingTo
			};
		},

		addWidget: function(pos, node, scroll, vert, horiz) {
			var display = this.display;
			pos = cursorCoords(this, clipPos(this.doc, pos));
			var top = pos.bottom,
				left = pos.left;
			node.style.position = "absolute";
			display.sizer.appendChild(node);
			if (vert == "over") {
				top = pos.top;
			} else if (vert == "above" || vert == "near") {
				var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
					hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
				// Default to positioning above (if specified and possible); otherwise default to positioning below
				if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
					top = pos.top - node.offsetHeight;
				else if (pos.bottom + node.offsetHeight <= vspace)
					top = pos.bottom;
				if (left + node.offsetWidth > hspace)
					left = hspace - node.offsetWidth;
			}
			node.style.top = top + "px";
			node.style.left = node.style.right = "";
			if (horiz == "right") {
				left = display.sizer.clientWidth - node.offsetWidth;
				node.style.right = "0px";
			} else {
				if (horiz == "left") left = 0;
				else if (horiz == "middle") left = (display.sizer.clientWidth - node.offsetWidth) / 2;
				node.style.left = left + "px";
			}
			if (scroll)
				scrollIntoView(this, left, top, left + node.offsetWidth, top + node.offsetHeight);
		},

		triggerOnKeyDown: operation(null, onKeyDown),

		execCommand: function(cmd) {
			return commands[cmd](this);
		},

		findPosH: function(from, amount, unit, visually) {
			var dir = 1;
			if (amount < 0) {
				dir = -1;
				amount = -amount;
			}
			for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
				cur = findPosH(this.doc, cur, dir, unit, visually);
				if (cur.hitSide) break;
			}
			return cur;
		},

		moveH: operation(null, function(dir, unit) {
			var sel = this.doc.sel,
				pos;
			if (sel.shift || sel.extend || posEq(sel.from, sel.to))
				pos = findPosH(this.doc, sel.head, dir, unit, this.options.rtlMoveVisually);
			else
				pos = dir < 0 ? sel.from : sel.to;
			extendSelection(this.doc, pos, pos, dir);
		}),

		deleteH: operation(null, function(dir, unit) {
			var sel = this.doc.sel;
			if (!posEq(sel.from, sel.to)) replaceRange(this.doc, "", sel.from, sel.to, "+delete");
			else replaceRange(this.doc, "", sel.from, findPosH(this.doc, sel.head, dir, unit, false), "+delete");
			this.curOp.userSelChange = true;
		}),

		findPosV: function(from, amount, unit, goalColumn) {
			var dir = 1,
				x = goalColumn;
			if (amount < 0) {
				dir = -1;
				amount = -amount;
			}
			for (var i = 0, cur = clipPos(this.doc, from); i < amount; ++i) {
				var coords = cursorCoords(this, cur, "div");
				if (x == null) x = coords.left;
				else coords.left = x;
				cur = findPosV(this, coords, dir, unit);
				if (cur.hitSide) break;
			}
			return cur;
		},

		moveV: operation(null, function(dir, unit) {
			var sel = this.doc.sel;
			var pos = cursorCoords(this, sel.head, "div");
			if (sel.goalColumn != null) pos.left = sel.goalColumn;
			var target = findPosV(this, pos, dir, unit);

			if (unit == "page") addToScrollPos(this, 0, charCoords(this, target, "div").top - pos.top);
			extendSelection(this.doc, target, target, dir);
			sel.goalColumn = pos.left;
		}),

		toggleOverwrite: function(value) {
			if (value != null && value == this.state.overwrite) return;
			if (this.state.overwrite = !this.state.overwrite)
				this.display.cursor.className += " CodeMirror-overwrite";
			else
				this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "");
		},
		hasFocus: function() {
			return this.state.focused;
		},

		scrollTo: operation(null, function(x, y) {
			updateScrollPos(this, x, y);
		}),
		getScrollInfo: function() {
			var scroller = this.display.scroller,
				co = scrollerCutOff;
			return {
				left: scroller.scrollLeft,
				top: scroller.scrollTop,
				height: scroller.scrollHeight - co,
				width: scroller.scrollWidth - co,
				clientHeight: scroller.clientHeight - co,
				clientWidth: scroller.clientWidth - co
			};
		},

		scrollIntoView: operation(null, function(pos, margin) {
			if (typeof pos == "number") pos = Pos(pos, 0);
			if (!margin) margin = 0;
			var coords = pos;

			if (!pos || pos.line != null) {
				this.curOp.scrollToPos = pos ? clipPos(this.doc, pos) : this.doc.sel.head;
				this.curOp.scrollToPosMargin = margin;
				coords = cursorCoords(this, this.curOp.scrollToPos);
			}
			var sPos = calculateScrollPos(this, coords.left, coords.top - margin, coords.right, coords.bottom + margin);
			updateScrollPos(this, sPos.scrollLeft, sPos.scrollTop);
		}),

		setSize: operation(null, function(width, height) {
			function interpret(val) {
				return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val;
			}
			if (width != null) this.display.wrapper.style.width = interpret(width);
			if (height != null) this.display.wrapper.style.height = interpret(height);
			if (this.options.lineWrapping)
				this.display.measureLineCache.length = this.display.measureLineCachePos = 0;
			this.curOp.forceUpdate = true;
		}),

		operation: function(f) {
			return runInOp(this, f);
		},

		refresh: operation(null, function() {
			clearCaches(this);
			updateScrollPos(this, this.doc.scrollLeft, this.doc.scrollTop);
			regChange(this);
		}),

		swapDoc: operation(null, function(doc) {
			var old = this.doc;
			old.cm = null;
			attachDoc(this, doc);
			clearCaches(this);
			resetInput(this, true);
			updateScrollPos(this, doc.scrollLeft, doc.scrollTop);
			return old;
		}),

		getInputField: function() {
			return this.display.input;
		},
		getWrapperElement: function() {
			return this.display.wrapper;
		},
		getScrollerElement: function() {
			return this.display.scroller;
		},
		getGutterElement: function() {
			return this.display.gutters;
		}
	};
	eventMixin(CodeMirror);

	// OPTION DEFAULTS

	var optionHandlers = CodeMirror.optionHandlers = {};

	// The default configuration options.
	var defaults = CodeMirror.defaults = {};

	function option(name, deflt, handle, notOnInit) {
		CodeMirror.defaults[name] = deflt;
		if (handle) optionHandlers[name] =
			notOnInit ? function(cm, val, old) {
				if (old != Init) handle(cm, val, old);
			} : handle;
	}

	var Init = CodeMirror.Init = {
		toString: function() {
			return "CodeMirror.Init";
		}
	};

	// These two are, on init, called from the constructor because they
	// have to be initialized before the editor can start at all.
	option("value", "", function(cm, val) {
		cm.setValue(val);
	}, true);
	option("mode", null, function(cm, val) {
		cm.doc.modeOption = val;
		loadMode(cm);
	}, true);

	option("indentUnit", 2, loadMode, true);
	option("indentWithTabs", false);
	option("smartIndent", true);
	option("tabSize", 4, function(cm) {
		loadMode(cm);
		clearCaches(cm);
		regChange(cm);
	}, true);
	option("electricChars", true);
	option("rtlMoveVisually", !windows);

	option("theme", "default", function(cm) {
		themeChanged(cm);
		guttersChanged(cm);
	}, true);
	option("keyMap", "default", keyMapChanged);
	option("extraKeys", null);

	option("onKeyEvent", null);
	option("onDragEvent", null);

	option("lineWrapping", false, wrappingChanged, true);
	option("gutters", [], function(cm) {
		setGuttersForLineNumbers(cm.options);
		guttersChanged(cm);
	}, true);
	option("fixedGutter", true, function(cm, val) {
		cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
		cm.refresh();
	}, true);
	option("coverGutterNextToScrollbar", false, updateScrollbars, true);
	option("lineNumbers", false, function(cm) {
		setGuttersForLineNumbers(cm.options);
		guttersChanged(cm);
	}, true);
	option("firstLineNumber", 1, guttersChanged, true);
	option("lineNumberFormatter", function(integer) {
		return integer;
	}, guttersChanged, true);
	option("showCursorWhenSelecting", false, updateSelection, true);

	option("readOnly", false, function(cm, val) {
		if (val == "nocursor") {
			onBlur(cm);
			cm.display.input.blur();
		} else if (!val) resetInput(cm, true);
	});
	option("dragDrop", true);

	option("cursorBlinkRate", 530);
	option("cursorScrollMargin", 0);
	option("cursorHeight", 1);
	option("workTime", 100);
	option("workDelay", 100);
	option("flattenSpans", true);
	option("pollInterval", 100);
	option("undoDepth", 40, function(cm, val) {
		cm.doc.history.undoDepth = val;
	});
	option("historyEventDelay", 500);
	option("viewportMargin", 10, function(cm) {
		cm.refresh();
	}, true);
	option("maxHighlightLength", 10000, function(cm) {
		loadMode(cm);
		cm.refresh();
	}, true);
	option("moveInputWithCursor", true, function(cm, val) {
		if (!val) cm.display.inputDiv.style.top = cm.display.inputDiv.style.left = 0;
	});

	option("tabindex", null, function(cm, val) {
		cm.display.input.tabIndex = val || "";
	});
	option("autofocus", null);

	// MODE DEFINITION AND QUERYING

	// Known modes, by name and by MIME
	var modes = CodeMirror.modes = {},
		mimeModes = CodeMirror.mimeModes = {};

	CodeMirror.defineMode = function(name, mode) {
		if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
		if (arguments.length > 2) {
			mode.dependencies = [];
			for (var i = 2; i < arguments.length; ++i) mode.dependencies.push(arguments[i]);
		}
		modes[name] = mode;
	};

	CodeMirror.defineMIME = function(mime, spec) {
		mimeModes[mime] = spec;
	};

	CodeMirror.resolveMode = function(spec) {
		if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
			spec = mimeModes[spec];
		} else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
			var found = mimeModes[spec.name];
			spec = createObj(found, spec);
			spec.name = found.name;
		} else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
			return CodeMirror.resolveMode("application/xml");
		}
		if (typeof spec == "string") return {
			name: spec
		};
		else return spec || {
			name: "null"
		};
	};

	CodeMirror.getMode = function(options, spec) {
		var spec = CodeMirror.resolveMode(spec);
		var mfactory = modes[spec.name];
		if (!mfactory) return CodeMirror.getMode(options, "text/plain");
		var modeObj = mfactory(options, spec);
		if (modeExtensions.hasOwnProperty(spec.name)) {
			var exts = modeExtensions[spec.name];
			for (var prop in exts) {
				if (!exts.hasOwnProperty(prop)) continue;
				if (modeObj.hasOwnProperty(prop)) modeObj["_" + prop] = modeObj[prop];
				modeObj[prop] = exts[prop];
			}
		}
		modeObj.name = spec.name;

		return modeObj;
	};

	CodeMirror.defineMode("null", function() {
		return {
			token: function(stream) {
				stream.skipToEnd();
			}
		};
	});
	CodeMirror.defineMIME("text/plain", "null");

	var modeExtensions = CodeMirror.modeExtensions = {};
	CodeMirror.extendMode = function(mode, properties) {
		var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
		copyObj(properties, exts);
	};

	// EXTENSIONS

	CodeMirror.defineExtension = function(name, func) {
		CodeMirror.prototype[name] = func;
	};
	CodeMirror.defineDocExtension = function(name, func) {
		Doc.prototype[name] = func;
	};
	CodeMirror.defineOption = option;

	var initHooks = [];
	CodeMirror.defineInitHook = function(f) {
		initHooks.push(f);
	};

	var helpers = CodeMirror.helpers = {};
	CodeMirror.registerHelper = function(type, name, value) {
		if (!helpers.hasOwnProperty(type)) helpers[type] = CodeMirror[type] = {};
		helpers[type][name] = value;
	};

	// UTILITIES

	CodeMirror.isWordChar = isWordChar;

	// MODE STATE HANDLING

	// Utility functions for working with state. Exported because modes
	// sometimes need to do this.
	function copyState(mode, state) {
		if (state === true) return state;
		if (mode.copyState) return mode.copyState(state);
		var nstate = {};
		for (var n in state) {
			var val = state[n];
			if (val instanceof Array) val = val.concat([]);
			nstate[n] = val;
		}
		return nstate;
	}
	CodeMirror.copyState = copyState;

	function startState(mode, a1, a2) {
		return mode.startState ? mode.startState(a1, a2) : true;
	}
	CodeMirror.startState = startState;

	CodeMirror.innerMode = function(mode, state) {
		while (mode.innerMode) {
			var info = mode.innerMode(state);
			if (!info || info.mode == mode) break;
			state = info.state;
			mode = info.mode;
		}
		return info || {
			mode: mode,
			state: state
		};
	};

	// STANDARD COMMANDS

	var commands = CodeMirror.commands = {
		selectAll: function(cm) {
			cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()));
		},
		killLine: function(cm) {
			var from = cm.getCursor(true),
				to = cm.getCursor(false),
				sel = !posEq(from, to);
			if (!sel && cm.getLine(from.line).length == from.ch)
				cm.replaceRange("", from, Pos(from.line + 1, 0), "+delete");
			else cm.replaceRange("", from, sel ? to : Pos(from.line), "+delete");
		},
		deleteLine: function(cm) {
			var l = cm.getCursor().line;
			cm.replaceRange("", Pos(l, 0), Pos(l), "+delete");
		},
		delLineLeft: function(cm) {
			var cur = cm.getCursor();
			cm.replaceRange("", Pos(cur.line, 0), cur, "+delete");
		},
		undo: function(cm) {
			cm.undo();
		},
		redo: function(cm) {
			cm.redo();
		},
		goDocStart: function(cm) {
			cm.extendSelection(Pos(cm.firstLine(), 0));
		},
		goDocEnd: function(cm) {
			cm.extendSelection(Pos(cm.lastLine()));
		},
		goLineStart: function(cm) {
			cm.extendSelection(lineStart(cm, cm.getCursor().line));
		},
		goLineStartSmart: function(cm) {
			var cur = cm.getCursor(),
				start = lineStart(cm, cur.line);
			var line = cm.getLineHandle(start.line);
			var order = getOrder(line);
			if (!order || order[0].level == 0) {
				var firstNonWS = Math.max(0, line.text.search(/\S/));
				var inWS = cur.line == start.line && cur.ch <= firstNonWS && cur.ch;
				cm.extendSelection(Pos(start.line, inWS ? 0 : firstNonWS));
			} else cm.extendSelection(start);
		},
		goLineEnd: function(cm) {
			cm.extendSelection(lineEnd(cm, cm.getCursor().line));
		},
		goLineRight: function(cm) {
			var top = cm.charCoords(cm.getCursor(), "div").top + 5;
			cm.extendSelection(cm.coordsChar({
				left: cm.display.lineDiv.offsetWidth + 100,
				top: top
			}, "div"));
		},
		goLineLeft: function(cm) {
			var top = cm.charCoords(cm.getCursor(), "div").top + 5;
			cm.extendSelection(cm.coordsChar({
				left: 0,
				top: top
			}, "div"));
		},
		goLineUp: function(cm) {
			cm.moveV(-1, "line");
		},
		goLineDown: function(cm) {
			cm.moveV(1, "line");
		},
		goPageUp: function(cm) {
			cm.moveV(-1, "page");
		},
		goPageDown: function(cm) {
			cm.moveV(1, "page");
		},
		goCharLeft: function(cm) {
			cm.moveH(-1, "char");
		},
		goCharRight: function(cm) {
			cm.moveH(1, "char");
		},
		goColumnLeft: function(cm) {
			cm.moveH(-1, "column");
		},
		goColumnRight: function(cm) {
			cm.moveH(1, "column");
		},
		goWordLeft: function(cm) {
			cm.moveH(-1, "word");
		},
		goGroupRight: function(cm) {
			cm.moveH(1, "group");
		},
		goGroupLeft: function(cm) {
			cm.moveH(-1, "group");
		},
		goWordRight: function(cm) {
			cm.moveH(1, "word");
		},
		delCharBefore: function(cm) {
			cm.deleteH(-1, "char");
		},
		delCharAfter: function(cm) {
			cm.deleteH(1, "char");
		},
		delWordBefore: function(cm) {
			cm.deleteH(-1, "word");
		},
		delWordAfter: function(cm) {
			cm.deleteH(1, "word");
		},
		delGroupBefore: function(cm) {
			cm.deleteH(-1, "group");
		},
		delGroupAfter: function(cm) {
			cm.deleteH(1, "group");
		},
		indentAuto: function(cm) {
			cm.indentSelection("smart");
		},
		indentMore: function(cm) {
			cm.indentSelection("add");
		},
		indentLess: function(cm) {
			cm.indentSelection("subtract");
		},
		insertTab: function(cm) {
			cm.replaceSelection("\t", "end", "+input");
		},
		defaultTab: function(cm) {
			if (cm.somethingSelected()) cm.indentSelection("add");
			else cm.replaceSelection("\t", "end", "+input");
		},
		transposeChars: function(cm) {
			var cur = cm.getCursor(),
				line = cm.getLine(cur.line);
			if (cur.ch > 0 && cur.ch < line.length - 1)
				cm.replaceRange(line.charAt(cur.ch) + line.charAt(cur.ch - 1),
					Pos(cur.line, cur.ch - 1), Pos(cur.line, cur.ch + 1));
		},
		newlineAndIndent: function(cm) {
			operation(cm, function() {
				cm.replaceSelection("\n", "end", "+input");
				cm.indentLine(cm.getCursor().line, null, true);
			})();
		},
		toggleOverwrite: function(cm) {
			cm.toggleOverwrite();
		}
	};

	// STANDARD KEYMAPS

	var keyMap = CodeMirror.keyMap = {};
	keyMap.basic = {
		"Left": "goCharLeft",
		"Right": "goCharRight",
		"Up": "goLineUp",
		"Down": "goLineDown",
		"End": "goLineEnd",
		"Home": "goLineStartSmart",
		"PageUp": "goPageUp",
		"PageDown": "goPageDown",
		"Delete": "delCharAfter",
		"Backspace": "delCharBefore",
		"Tab": "defaultTab",
		"Shift-Tab": "indentAuto",
		"Enter": "newlineAndIndent",
		"Insert": "toggleOverwrite"
	};
	// Note that the save and find-related commands aren't defined by
	// default. Unknown commands are simply ignored.
	keyMap.pcDefault = {
		"Ctrl-A": "selectAll",
		"Ctrl-D": "deleteLine",
		"Ctrl-Z": "undo",
		"Shift-Ctrl-Z": "redo",
		"Ctrl-Y": "redo",
		"Ctrl-Home": "goDocStart",
		"Alt-Up": "goDocStart",
		"Ctrl-End": "goDocEnd",
		"Ctrl-Down": "goDocEnd",
		"Ctrl-Left": "goGroupLeft",
		"Ctrl-Right": "goGroupRight",
		"Alt-Left": "goLineStart",
		"Alt-Right": "goLineEnd",
		"Ctrl-Backspace": "delGroupBefore",
		"Ctrl-Delete": "delGroupAfter",
		"Ctrl-S": "save",
		"Ctrl-F": "find",
		"Ctrl-G": "findNext",
		"Shift-Ctrl-G": "findPrev",
		"Shift-Ctrl-F": "replace",
		"Shift-Ctrl-R": "replaceAll",
		"Ctrl-[": "indentLess",
		"Ctrl-]": "indentMore",
		fallthrough: "basic"
	};
	keyMap.macDefault = {
		"Cmd-A": "selectAll",
		"Cmd-D": "deleteLine",
		"Cmd-Z": "undo",
		"Shift-Cmd-Z": "redo",
		"Cmd-Y": "redo",
		"Cmd-Up": "goDocStart",
		"Cmd-End": "goDocEnd",
		"Cmd-Down": "goDocEnd",
		"Alt-Left": "goGroupLeft",
		"Alt-Right": "goGroupRight",
		"Cmd-Left": "goLineStart",
		"Cmd-Right": "goLineEnd",
		"Alt-Backspace": "delGroupBefore",
		"Ctrl-Alt-Backspace": "delGroupAfter",
		"Alt-Delete": "delGroupAfter",
		"Cmd-S": "save",
		"Cmd-F": "find",
		"Cmd-G": "findNext",
		"Shift-Cmd-G": "findPrev",
		"Cmd-Alt-F": "replace",
		"Shift-Cmd-Alt-F": "replaceAll",
		"Cmd-[": "indentLess",
		"Cmd-]": "indentMore",
		"Cmd-Backspace": "delLineLeft",
		fallthrough: ["basic", "emacsy"]
	};
	keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;
	keyMap.emacsy = {
		"Ctrl-F": "goCharRight",
		"Ctrl-B": "goCharLeft",
		"Ctrl-P": "goLineUp",
		"Ctrl-N": "goLineDown",
		"Alt-F": "goWordRight",
		"Alt-B": "goWordLeft",
		"Ctrl-A": "goLineStart",
		"Ctrl-E": "goLineEnd",
		"Ctrl-V": "goPageDown",
		"Shift-Ctrl-V": "goPageUp",
		"Ctrl-D": "delCharAfter",
		"Ctrl-H": "delCharBefore",
		"Alt-D": "delWordAfter",
		"Alt-Backspace": "delWordBefore",
		"Ctrl-K": "killLine",
		"Ctrl-T": "transposeChars"
	};

	// KEYMAP DISPATCH

	function getKeyMap(val) {
		if (typeof val == "string") return keyMap[val];
		else return val;
	}

	function lookupKey(name, maps, handle) {
		function lookup(map) {
			map = getKeyMap(map);
			var found = map[name];
			if (found === false) return "stop";
			if (found != null && handle(found)) return true;
			if (map.nofallthrough) return "stop";

			var fallthrough = map.fallthrough;
			if (fallthrough == null) return false;
			if (Object.prototype.toString.call(fallthrough) != "[object Array]")
				return lookup(fallthrough);
			for (var i = 0, e = fallthrough.length; i < e; ++i) {
				var done = lookup(fallthrough[i]);
				if (done) return done;
			}
			return false;
		}

		for (var i = 0; i < maps.length; ++i) {
			var done = lookup(maps[i]);
			if (done) return done != "stop";
		}
	}

	function isModifierKey(event) {
		var name = keyNames[event.keyCode];
		return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod";
	}

	function keyName(event, noShift) {
		if (opera && event.keyCode == 34 && event["char"]) return false;
		var name = keyNames[event.keyCode];
		if (name == null || event.altGraphKey) return false;
		if (event.altKey) name = "Alt-" + name;
		if (flipCtrlCmd ? event.metaKey : event.ctrlKey) name = "Ctrl-" + name;
		if (flipCtrlCmd ? event.ctrlKey : event.metaKey) name = "Cmd-" + name;
		if (!noShift && event.shiftKey) name = "Shift-" + name;
		return name;
	}
	CodeMirror.lookupKey = lookupKey;
	CodeMirror.isModifierKey = isModifierKey;
	CodeMirror.keyName = keyName;

	// FROMTEXTAREA

	CodeMirror.fromTextArea = function(textarea, options) {
		if (!options) options = {};
		options.value = textarea.value;
		if (!options.tabindex && textarea.tabindex)
			options.tabindex = textarea.tabindex;
		if (!options.placeholder && textarea.placeholder)
			options.placeholder = textarea.placeholder;
		// Set autofocus to true if this textarea is focused, or if it has
		// autofocus and no other element is focused.
		if (options.autofocus == null) {
			var hasFocus = document.body;
			// doc.activeElement occasionally throws on IE
			try {
				hasFocus = document.activeElement;
			} catch (e) {}
			options.autofocus = hasFocus == textarea ||
				textarea.getAttribute("autofocus") != null && hasFocus == document.body;
		}

		function save() {
			textarea.value = cm.getValue();
		}
		if (textarea.form) {
			on(textarea.form, "submit", save);
			// Deplorable hack to make the submit method do the right thing.
			if (!options.leaveSubmitMethodAlone) {
				var form = textarea.form,
					realSubmit = form.submit;
				try {
					var wrappedSubmit = form.submit = function() {
						save();
						form.submit = realSubmit;
						form.submit();
						form.submit = wrappedSubmit;
					};
				} catch (e) {}
			}
		}

		textarea.style.display = "none";
		var cm = CodeMirror(function(node) {
			textarea.parentNode.insertBefore(node, textarea.nextSibling);
		}, options);
		cm.save = save;
		cm.getTextArea = function() {
			return textarea;
		};
		cm.toTextArea = function() {
			save();
			textarea.parentNode.removeChild(cm.getWrapperElement());
			textarea.style.display = "";
			if (textarea.form) {
				off(textarea.form, "submit", save);
				if (typeof textarea.form.submit == "function")
					textarea.form.submit = realSubmit;
			}
		};
		return cm;
	};

	// STRING STREAM

	// Fed to the mode parsers, provides helper functions to make
	// parsers more succinct.

	// The character stream used by a mode's parser.
	function StringStream(string, tabSize) {
		this.pos = this.start = 0;
		this.string = string;
		this.tabSize = tabSize || 8;
		this.lastColumnPos = this.lastColumnValue = 0;
	}

	StringStream.prototype = {
		eol: function() {
			return this.pos >= this.string.length;
		},
		sol: function() {
			return this.pos == 0;
		},
		peek: function() {
			return this.string.charAt(this.pos) || undefined;
		},
		next: function() {
			if (this.pos < this.string.length)
				return this.string.charAt(this.pos++);
		},
		eat: function(match) {
			var ch = this.string.charAt(this.pos);
			if (typeof match == "string") var ok = ch == match;
			else var ok = ch && (match.test ? match.test(ch) : match(ch));
			if (ok) {
				++this.pos;
				return ch;
			}
		},
		eatWhile: function(match) {
			var start = this.pos;
			while (this.eat(match)) {}
			return this.pos > start;
		},
		eatSpace: function() {
			var start = this.pos;
			while (/[\s\u00a0]/.test(this.string.charAt(this.pos)))++this.pos;
			return this.pos > start;
		},
		skipToEnd: function() {
			this.pos = this.string.length;
		},
		skipTo: function(ch) {
			var found = this.string.indexOf(ch, this.pos);
			if (found > -1) {
				this.pos = found;
				return true;
			}
		},
		backUp: function(n) {
			this.pos -= n;
		},
		column: function() {
			if (this.lastColumnPos < this.start) {
				this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
				this.lastColumnPos = this.start;
			}
			return this.lastColumnValue;
		},
		indentation: function() {
			return countColumn(this.string, null, this.tabSize);
		},
		match: function(pattern, consume, caseInsensitive) {
			if (typeof pattern == "string") {
				var cased = function(str) {
					return caseInsensitive ? str.toLowerCase() : str;
				};
				var substr = this.string.substr(this.pos, pattern.length);
				if (cased(substr) == cased(pattern)) {
					if (consume !== false) this.pos += pattern.length;
					return true;
				}
			} else {
				var match = this.string.slice(this.pos).match(pattern);
				if (match && match.index > 0) return null;
				if (match && consume !== false) this.pos += match[0].length;
				return match;
			}
		},
		current: function() {
			return this.string.slice(this.start, this.pos);
		}
	};
	CodeMirror.StringStream = StringStream;

	// TEXTMARKERS

	function TextMarker(doc, type) {
		this.lines = [];
		this.type = type;
		this.doc = doc;
	}
	CodeMirror.TextMarker = TextMarker;
	eventMixin(TextMarker);

	TextMarker.prototype.clear = function() {
		if (this.explicitlyCleared) return;
		var cm = this.doc.cm,
			withOp = cm && !cm.curOp;
		if (withOp) startOperation(cm);
		if (hasHandler(this, "clear")) {
			var found = this.find();
			if (found) signalLater(this, "clear", found.from, found.to);
		}
		var min = null,
			max = null;
		for (var i = 0; i < this.lines.length; ++i) {
			var line = this.lines[i];
			var span = getMarkedSpanFor(line.markedSpans, this);
			if (span.to != null) max = lineNo(line);
			line.markedSpans = removeMarkedSpan(line.markedSpans, span);
			if (span.from != null)
				min = lineNo(line);
			else if (this.collapsed && !lineIsHidden(this.doc, line) && cm)
				updateLineHeight(line, textHeight(cm.display));
		}
		if (cm && this.collapsed && !cm.options.lineWrapping)
			for (var i = 0; i < this.lines.length; ++i) {
				var visual = visualLine(cm.doc, this.lines[i]),
					len = lineLength(cm.doc, visual);
				if (len > cm.display.maxLineLength) {
					cm.display.maxLine = visual;
					cm.display.maxLineLength = len;
					cm.display.maxLineChanged = true;
				}
			}

		if (min != null && cm) regChange(cm, min, max + 1);
		this.lines.length = 0;
		this.explicitlyCleared = true;
		if (this.atomic && this.doc.cantEdit) {
			this.doc.cantEdit = false;
			if (cm) reCheckSelection(cm);
		}
		if (withOp) endOperation(cm);
	};

	TextMarker.prototype.find = function() {
		var from, to;
		for (var i = 0; i < this.lines.length; ++i) {
			var line = this.lines[i];
			var span = getMarkedSpanFor(line.markedSpans, this);
			if (span.from != null || span.to != null) {
				var found = lineNo(line);
				if (span.from != null) from = Pos(found, span.from);
				if (span.to != null) to = Pos(found, span.to);
			}
		}
		if (this.type == "bookmark") return from;
		return from && {
			from: from,
			to: to
		};
	};

	TextMarker.prototype.changed = function() {
		var pos = this.find(),
			cm = this.doc.cm;
		if (!pos || !cm) return;
		var line = getLine(this.doc, pos.from.line);
		clearCachedMeasurement(cm, line);
		if (pos.from.line >= cm.display.showingFrom && pos.from.line < cm.display.showingTo) {
			for (var node = cm.display.lineDiv.firstChild; node; node = node.nextSibling)
				if (node.lineObj == line) {
					if (node.offsetHeight != line.height) updateLineHeight(line, node.offsetHeight);
					break;
				}
			runInOp(cm, function() {
				cm.curOp.selectionChanged = cm.curOp.forceUpdate = cm.curOp.updateMaxLine = true;
			});
		}
	};

	TextMarker.prototype.attachLine = function(line) {
		if (!this.lines.length && this.doc.cm) {
			var op = this.doc.cm.curOp;
			if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
				(op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this);
		}
		this.lines.push(line);
	};
	TextMarker.prototype.detachLine = function(line) {
		this.lines.splice(indexOf(this.lines, line), 1);
		if (!this.lines.length && this.doc.cm) {
			var op = this.doc.cm.curOp;
			(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
		}
	};

	function markText(doc, from, to, options, type) {
		if (options && options.shared) return markTextShared(doc, from, to, options, type);
		if (doc.cm && !doc.cm.curOp) return operation(doc.cm, markText)(doc, from, to, options, type);

		var marker = new TextMarker(doc, type);
		if (type == "range" && !posLess(from, to)) return marker;
		if (options) copyObj(options, marker);
		if (marker.replacedWith) {
			marker.collapsed = true;
			marker.replacedWith = elt("span", [marker.replacedWith], "CodeMirror-widget");
			if (!options.handleMouseEvents) marker.replacedWith.ignoreEvents = true;
		}
		if (marker.collapsed) sawCollapsedSpans = true;

		if (marker.addToHistory)
			addToHistory(doc, {
				from: from,
				to: to,
				origin: "markText"
			}, {
				head: doc.sel.head,
				anchor: doc.sel.anchor
			}, NaN);

		var curLine = from.line,
			size = 0,
			collapsedAtStart, collapsedAtEnd, cm = doc.cm,
			updateMaxLine;
		doc.iter(curLine, to.line + 1, function(line) {
			if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(doc, line) == cm.display.maxLine)
				updateMaxLine = true;
			var span = {
				from: null,
				to: null,
				marker: marker
			};
			size += line.text.length;
			if (curLine == from.line) {
				span.from = from.ch;
				size -= from.ch;
			}
			if (curLine == to.line) {
				span.to = to.ch;
				size -= line.text.length - to.ch;
			}
			if (marker.collapsed) {
				if (curLine == to.line) collapsedAtEnd = collapsedSpanAt(line, to.ch);
				if (curLine == from.line) collapsedAtStart = collapsedSpanAt(line, from.ch);
				else updateLineHeight(line, 0);
			}
			addMarkedSpan(line, span);
			++curLine;
		});
		if (marker.collapsed) doc.iter(from.line, to.line + 1, function(line) {
			if (lineIsHidden(doc, line)) updateLineHeight(line, 0);
		});

		if (marker.clearOnEnter) on(marker, "beforeCursorEnter", function() {
			marker.clear();
		});

		if (marker.readOnly) {
			sawReadOnlySpans = true;
			if (doc.history.done.length || doc.history.undone.length)
				doc.clearHistory();
		}
		if (marker.collapsed) {
			if (collapsedAtStart != collapsedAtEnd)
				throw new Error("Inserting collapsed marker overlapping an existing one");
			marker.size = size;
			marker.atomic = true;
		}
		if (cm) {
			if (updateMaxLine) cm.curOp.updateMaxLine = true;
			if (marker.className || marker.title || marker.startStyle || marker.endStyle || marker.collapsed)
				regChange(cm, from.line, to.line + 1);
			if (marker.atomic) reCheckSelection(cm);
		}
		return marker;
	}

	// SHARED TEXTMARKERS

	function SharedTextMarker(markers, primary) {
		this.markers = markers;
		this.primary = primary;
		for (var i = 0, me = this; i < markers.length; ++i) {
			markers[i].parent = this;
			on(markers[i], "clear", function() {
				me.clear();
			});
		}
	}
	CodeMirror.SharedTextMarker = SharedTextMarker;
	eventMixin(SharedTextMarker);

	SharedTextMarker.prototype.clear = function() {
		if (this.explicitlyCleared) return;
		this.explicitlyCleared = true;
		for (var i = 0; i < this.markers.length; ++i)
			this.markers[i].clear();
		signalLater(this, "clear");
	};
	SharedTextMarker.prototype.find = function() {
		return this.primary.find();
	};

	function markTextShared(doc, from, to, options, type) {
		options = copyObj(options);
		options.shared = false;
		var markers = [markText(doc, from, to, options, type)],
			primary = markers[0];
		var widget = options.replacedWith;
		linkedDocs(doc, function(doc) {
			if (widget) options.replacedWith = widget.cloneNode(true);
			markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
			for (var i = 0; i < doc.linked.length; ++i)
				if (doc.linked[i].isParent) return;
			primary = lst(markers);
		});
		return new SharedTextMarker(markers, primary);
	}

	// TEXTMARKER SPANS

	function getMarkedSpanFor(spans, marker) {
		if (spans)
			for (var i = 0; i < spans.length; ++i) {
				var span = spans[i];
				if (span.marker == marker) return span;
			}
	}

	function removeMarkedSpan(spans, span) {
		for (var r, i = 0; i < spans.length; ++i)
			if (spans[i] != span)(r || (r = [])).push(spans[i]);
		return r;
	}

	function addMarkedSpan(line, span) {
		line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
		span.marker.attachLine(line);
	}

	function markedSpansBefore(old, startCh, isInsert) {
		if (old)
			for (var i = 0, nw; i < old.length; ++i) {
				var span = old[i],
					marker = span.marker;
				var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
				if (startsBefore || marker.type == "bookmark" && span.from == startCh && (!isInsert || !span.marker.insertLeft)) {
					var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh);
					(nw || (nw = [])).push({
						from: span.from,
						to: endsAfter ? null : span.to,
						marker: marker
					});
				}
			}
		return nw;
	}

	function markedSpansAfter(old, endCh, isInsert) {
		if (old)
			for (var i = 0, nw; i < old.length; ++i) {
				var span = old[i],
					marker = span.marker;
				var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
				if (endsAfter || marker.type == "bookmark" && span.from == endCh && (!isInsert || span.marker.insertLeft)) {
					var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh);
					(nw || (nw = [])).push({
						from: startsBefore ? null : span.from - endCh,
						to: span.to == null ? null : span.to - endCh,
						marker: marker
					});
				}
			}
		return nw;
	}

	function stretchSpansOverChange(doc, change) {
		var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
		var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
		if (!oldFirst && !oldLast) return null;

		var startCh = change.from.ch,
			endCh = change.to.ch,
			isInsert = posEq(change.from, change.to);
		// Get the spans that 'stick out' on both sides
		var first = markedSpansBefore(oldFirst, startCh, isInsert);
		var last = markedSpansAfter(oldLast, endCh, isInsert);

		// Next, merge those two ends
		var sameLine = change.text.length == 1,
			offset = lst(change.text).length + (sameLine ? startCh : 0);
		if (first) {
			// Fix up .to properties of first
			for (var i = 0; i < first.length; ++i) {
				var span = first[i];
				if (span.to == null) {
					var found = getMarkedSpanFor(last, span.marker);
					if (!found) span.to = startCh;
					else if (sameLine) span.to = found.to == null ? null : found.to + offset;
				}
			}
		}
		if (last) {
			// Fix up .from in last (or move them into first in case of sameLine)
			for (var i = 0; i < last.length; ++i) {
				var span = last[i];
				if (span.to != null) span.to += offset;
				if (span.from == null) {
					var found = getMarkedSpanFor(first, span.marker);
					if (!found) {
						span.from = offset;
						if (sameLine)(first || (first = [])).push(span);
					}
				} else {
					span.from += offset;
					if (sameLine)(first || (first = [])).push(span);
				}
			}
		}
		if (sameLine && first) {
			// Make sure we didn't create any zero-length spans
			for (var i = 0; i < first.length; ++i)
				if (first[i].from != null && first[i].from == first[i].to && first[i].marker.type != "bookmark")
					first.splice(i--, 1);
			if (!first.length) first = null;
		}

		var newMarkers = [first];
		if (!sameLine) {
			// Fill gap with whole-line-spans
			var gap = change.text.length - 2,
				gapMarkers;
			if (gap > 0 && first)
				for (var i = 0; i < first.length; ++i)
					if (first[i].to == null)
						(gapMarkers || (gapMarkers = [])).push({
							from: null,
							to: null,
							marker: first[i].marker
						});
			for (var i = 0; i < gap; ++i)
				newMarkers.push(gapMarkers);
			newMarkers.push(last);
		}
		return newMarkers;
	}

	function mergeOldSpans(doc, change) {
		var old = getOldSpans(doc, change);
		var stretched = stretchSpansOverChange(doc, change);
		if (!old) return stretched;
		if (!stretched) return old;

		for (var i = 0; i < old.length; ++i) {
			var oldCur = old[i],
				stretchCur = stretched[i];
			if (oldCur && stretchCur) {
				spans: for (var j = 0; j < stretchCur.length; ++j) {
					var span = stretchCur[j];
					for (var k = 0; k < oldCur.length; ++k)
						if (oldCur[k].marker == span.marker) continue spans;
					oldCur.push(span);
				}
			} else if (stretchCur) {
				old[i] = stretchCur;
			}
		}
		return old;
	}

	function removeReadOnlyRanges(doc, from, to) {
		var markers = null;
		doc.iter(from.line, to.line + 1, function(line) {
			if (line.markedSpans)
				for (var i = 0; i < line.markedSpans.length; ++i) {
					var mark = line.markedSpans[i].marker;
					if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
						(markers || (markers = [])).push(mark);
				}
		});
		if (!markers) return null;
		var parts = [{
			from: from,
			to: to
		}];
		for (var i = 0; i < markers.length; ++i) {
			var mk = markers[i],
				m = mk.find();
			for (var j = 0; j < parts.length; ++j) {
				var p = parts[j];
				if (posLess(p.to, m.from) || posLess(m.to, p.from)) continue;
				var newParts = [j, 1];
				if (posLess(p.from, m.from) || !mk.inclusiveLeft && posEq(p.from, m.from))
					newParts.push({
						from: p.from,
						to: m.from
					});
				if (posLess(m.to, p.to) || !mk.inclusiveRight && posEq(p.to, m.to))
					newParts.push({
						from: m.to,
						to: p.to
					});
				parts.splice.apply(parts, newParts);
				j += newParts.length - 1;
			}
		}
		return parts;
	}

	function collapsedSpanAt(line, ch) {
		var sps = sawCollapsedSpans && line.markedSpans,
			found;
		if (sps)
			for (var sp, i = 0; i < sps.length; ++i) {
				sp = sps[i];
				if (!sp.marker.collapsed) continue;
				if ((sp.from == null || sp.from < ch) &&
					(sp.to == null || sp.to > ch) &&
					(!found || found.width < sp.marker.width))
					found = sp.marker;
			}
		return found;
	}

	function collapsedSpanAtStart(line) {
		return collapsedSpanAt(line, -1);
	}

	function collapsedSpanAtEnd(line) {
		return collapsedSpanAt(line, line.text.length + 1);
	}

	function visualLine(doc, line) {
		var merged;
		while (merged = collapsedSpanAtStart(line))
			line = getLine(doc, merged.find().from.line);
		return line;
	}

	function lineIsHidden(doc, line) {
		var sps = sawCollapsedSpans && line.markedSpans;
		if (sps)
			for (var sp, i = 0; i < sps.length; ++i) {
				sp = sps[i];
				if (!sp.marker.collapsed) continue;
				if (sp.from == null) return true;
				if (sp.marker.replacedWith) continue;
				if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
					return true;
			}
	}

	function lineIsHiddenInner(doc, line, span) {
		if (span.to == null) {
			var end = span.marker.find().to,
				endLine = getLine(doc, end.line);
			return lineIsHiddenInner(doc, endLine, getMarkedSpanFor(endLine.markedSpans, span.marker));
		}
		if (span.marker.inclusiveRight && span.to == line.text.length)
			return true;
		for (var sp, i = 0; i < line.markedSpans.length; ++i) {
			sp = line.markedSpans[i];
			if (sp.marker.collapsed && !sp.marker.replacedWith && sp.from == span.to &&
				(sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
				lineIsHiddenInner(doc, line, sp)) return true;
		}
	}

	function detachMarkedSpans(line) {
		var spans = line.markedSpans;
		if (!spans) return;
		for (var i = 0; i < spans.length; ++i)
			spans[i].marker.detachLine(line);
		line.markedSpans = null;
	}

	function attachMarkedSpans(line, spans) {
		if (!spans) return;
		for (var i = 0; i < spans.length; ++i)
			spans[i].marker.attachLine(line);
		line.markedSpans = spans;
	}

	// LINE WIDGETS

	var LineWidget = CodeMirror.LineWidget = function(cm, node, options) {
		if (options)
			for (var opt in options)
				if (options.hasOwnProperty(opt))
					this[opt] = options[opt];
		this.cm = cm;
		this.node = node;
	};
	eventMixin(LineWidget);

	function widgetOperation(f) {
		return function() {
			var withOp = !this.cm.curOp;
			if (withOp) startOperation(this.cm);
			try {
				var result = f.apply(this, arguments);
			} finally {
				if (withOp) endOperation(this.cm);
			}
			return result;
		};
	}
	LineWidget.prototype.clear = widgetOperation(function() {
		var ws = this.line.widgets,
			no = lineNo(this.line);
		if (no == null || !ws) return;
		for (var i = 0; i < ws.length; ++i)
			if (ws[i] == this) ws.splice(i--, 1);
		if (!ws.length) this.line.widgets = null;
		var aboveVisible = heightAtLine(this.cm, this.line) < this.cm.doc.scrollTop;
		updateLineHeight(this.line, Math.max(0, this.line.height - widgetHeight(this)));
		if (aboveVisible) addToScrollPos(this.cm, 0, -this.height);
		regChange(this.cm, no, no + 1);
	});
	LineWidget.prototype.changed = widgetOperation(function() {
		var oldH = this.height;
		this.height = null;
		var diff = widgetHeight(this) - oldH;
		if (!diff) return;
		updateLineHeight(this.line, this.line.height + diff);
		var no = lineNo(this.line);
		regChange(this.cm, no, no + 1);
	});

	function widgetHeight(widget) {
		if (widget.height != null) return widget.height;
		if (!widget.node.parentNode || widget.node.parentNode.nodeType != 1)
			removeChildrenAndAdd(widget.cm.display.measure, elt("div", [widget.node], null, "position: relative"));
		return widget.height = widget.node.offsetHeight;
	}

	function addLineWidget(cm, handle, node, options) {
		var widget = new LineWidget(cm, node, options);
		if (widget.noHScroll) cm.display.alignWidgets = true;
		changeLine(cm, handle, function(line) {
			var widgets = line.widgets || (line.widgets = []);
			if (widget.insertAt == null) widgets.push(widget);
			else widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget);
			widget.line = line;
			if (!lineIsHidden(cm.doc, line) || widget.showIfHidden) {
				var aboveVisible = heightAtLine(cm, line) < cm.doc.scrollTop;
				updateLineHeight(line, line.height + widgetHeight(widget));
				if (aboveVisible) addToScrollPos(cm, 0, widget.height);
			}
			return true;
		});
		return widget;
	}

	// LINE DATA STRUCTURE

	// Line objects. These hold state related to a line, including
	// highlighting info (the styles array).
	var Line = CodeMirror.Line = function(text, markedSpans, estimateHeight) {
		this.text = text;
		attachMarkedSpans(this, markedSpans);
		this.height = estimateHeight ? estimateHeight(this) : 1;
	};
	eventMixin(Line);

	function updateLine(line, text, markedSpans, estimateHeight) {
		line.text = text;
		if (line.stateAfter) line.stateAfter = null;
		if (line.styles) line.styles = null;
		if (line.order != null) line.order = null;
		detachMarkedSpans(line);
		attachMarkedSpans(line, markedSpans);
		var estHeight = estimateHeight ? estimateHeight(line) : 1;
		if (estHeight != line.height) updateLineHeight(line, estHeight);
	}

	function cleanUpLine(line) {
		line.parent = null;
		detachMarkedSpans(line);
	}

	// Run the given mode's parser over a line, update the styles
	// array, which contains alternating fragments of text and CSS
	// classes.
	function runMode(cm, text, mode, state, f) {
		var flattenSpans = mode.flattenSpans;
		if (flattenSpans == null) flattenSpans = cm.options.flattenSpans;
		var curStart = 0,
			curStyle = null;
		var stream = new StringStream(text, cm.options.tabSize),
			style;
		if (text == "" && mode.blankLine) mode.blankLine(state);
		while (!stream.eol()) {
			if (stream.pos > cm.options.maxHighlightLength) {
				flattenSpans = false;
				// Webkit seems to refuse to render text nodes longer than 57444 characters
				stream.pos = Math.min(text.length, stream.start + 50000);
				style = null;
			} else {
				style = mode.token(stream, state);
			}
			if (!flattenSpans || curStyle != style) {
				if (curStart < stream.start) f(stream.start, curStyle);
				curStart = stream.start;
				curStyle = style;
			}
			stream.start = stream.pos;
		}
		if (curStart < stream.pos) f(stream.pos, curStyle);
	}

	function highlightLine(cm, line, state) {
		// A styles array always starts with a number identifying the
		// mode/overlays that it is based on (for easy invalidation).
		var st = [cm.state.modeGen];
		// Compute the base array of styles
		runMode(cm, line.text, cm.doc.mode, state, function(end, style) {
			st.push(end, style);
		});

		// Run overlays, adjust style array.
		for (var o = 0; o < cm.state.overlays.length; ++o) {
			var overlay = cm.state.overlays[o],
				i = 1,
				at = 0;
			runMode(cm, line.text, overlay.mode, true, function(end, style) {
				var start = i;
				// Ensure there's a token end at the current position, and that i points at it
				while (at < end) {
					var i_end = st[i];
					if (i_end > end)
						st.splice(i, 1, end, st[i + 1], i_end);
					i += 2;
					at = Math.min(end, i_end);
				}
				if (!style) return;
				if (overlay.opaque) {
					st.splice(start, i - start, end, style);
					i = start + 2;
				} else {
					for (; start < i; start += 2) {
						var cur = st[start + 1];
						st[start + 1] = cur ? cur + " " + style : style;
					}
				}
			});
		}

		return st;
	}

	function getLineStyles(cm, line) {
		if (!line.styles || line.styles[0] != cm.state.modeGen)
			line.styles = highlightLine(cm, line, line.stateAfter = getStateBefore(cm, lineNo(line)));
		return line.styles;
	}

	// Lightweight form of highlight -- proceed over this line and
	// update state, but don't save a style array.
	function processLine(cm, line, state) {
		var mode = cm.doc.mode;
		var stream = new StringStream(line.text, cm.options.tabSize);
		if (line.text == "" && mode.blankLine) mode.blankLine(state);
		while (!stream.eol() && stream.pos <= cm.options.maxHighlightLength) {
			mode.token(stream, state);
			stream.start = stream.pos;
		}
	}

	var styleToClassCache = {};

	function styleToClass(style) {
		if (!style) return null;
		return styleToClassCache[style] ||
			(styleToClassCache[style] = "cm-" + style.replace(/ +/g, " cm-"));
	}

	function lineContent(cm, realLine, measure, copyWidgets) {
		var merged, line = realLine,
			empty = true;
		while (merged = collapsedSpanAtStart(line))
			line = getLine(cm.doc, merged.find().from.line);

		var builder = {
			pre: elt("pre"),
			col: 0,
			pos: 0,
			measure: null,
			measuredSomething: false,
			cm: cm,
			copyWidgets: copyWidgets
		};
		if (line.textClass) builder.pre.className = line.textClass;

		do {
			if (line.text) empty = false;
			builder.measure = line == realLine && measure;
			builder.pos = 0;
			builder.addToken = builder.measure ? buildTokenMeasure : buildToken;
			if ((ie || webkit) && cm.getOption("lineWrapping"))
				builder.addToken = buildTokenSplitSpaces(builder.addToken);
			var next = insertLineContent(line, builder, getLineStyles(cm, line));
			if (measure && line == realLine && !builder.measuredSomething) {
				measure[0] = builder.pre.appendChild(zeroWidthElement(cm.display.measure));
				builder.measuredSomething = true;
			}
			if (next) line = getLine(cm.doc, next.to.line);
		} while (next);

		if (measure && !builder.measuredSomething && !measure[0])
			measure[0] = builder.pre.appendChild(empty ? elt("span", "\u00a0") : zeroWidthElement(cm.display.measure));
		if (!builder.pre.firstChild && !lineIsHidden(cm.doc, realLine))
			builder.pre.appendChild(document.createTextNode("\u00a0"));

		var order;
		// Work around problem with the reported dimensions of single-char
		// direction spans on IE (issue #1129). See also the comment in
		// cursorCoords.
		if (measure && ie && (order = getOrder(line))) {
			var l = order.length - 1;
			if (order[l].from == order[l].to)--l;
			var last = order[l],
				prev = order[l - 1];
			if (last.from + 1 == last.to && prev && last.level < prev.level) {
				var span = measure[builder.pos - 1];
				if (span) span.parentNode.insertBefore(span.measureRight = zeroWidthElement(cm.display.measure),
					span.nextSibling);
			}
		}

		signal(cm, "renderLine", cm, realLine, builder.pre);
		return builder.pre;
	}

	var tokenSpecialChars = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;

	function buildToken(builder, text, style, startStyle, endStyle, title) {
		if (!text) return;
		if (!tokenSpecialChars.test(text)) {
			builder.col += text.length;
			var content = document.createTextNode(text);
		} else {
			var content = document.createDocumentFragment(),
				pos = 0;
			while (true) {
				tokenSpecialChars.lastIndex = pos;
				var m = tokenSpecialChars.exec(text);
				var skipped = m ? m.index - pos : text.length - pos;
				if (skipped) {
					content.appendChild(document.createTextNode(text.slice(pos, pos + skipped)));
					builder.col += skipped;
				}
				if (!m) break;
				pos += skipped + 1;
				if (m[0] == "\t") {
					var tabSize = builder.cm.options.tabSize,
						tabWidth = tabSize - builder.col % tabSize;
					content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
					builder.col += tabWidth;
				} else {
					var token = elt("span", "\u2022", "cm-invalidchar");
					token.title = "\\u" + m[0].charCodeAt(0).toString(16);
					content.appendChild(token);
					builder.col += 1;
				}
			}
		}
		if (style || startStyle || endStyle || builder.measure) {
			var fullStyle = style || "";
			if (startStyle) fullStyle += startStyle;
			if (endStyle) fullStyle += endStyle;
			var token = elt("span", [content], fullStyle);
			if (title) token.title = title;
			return builder.pre.appendChild(token);
		}
		builder.pre.appendChild(content);
	}

	function buildTokenMeasure(builder, text, style, startStyle, endStyle) {
		var wrapping = builder.cm.options.lineWrapping;
		for (var i = 0; i < text.length; ++i) {
			var ch = text.charAt(i),
				start = i == 0;
			if (ch >= "\ud800" && ch < "\udbff" && i < text.length - 1) {
				ch = text.slice(i, i + 2);
				++i;
			} else if (i && wrapping && spanAffectsWrapping(text, i)) {
				builder.pre.appendChild(elt("wbr"));
			}
			var old = builder.measure[builder.pos];
			var span = builder.measure[builder.pos] =
				buildToken(builder, ch, style,
					start && startStyle, i == text.length - 1 && endStyle);
			if (old) span.leftSide = old.leftSide || old;
			// In IE single-space nodes wrap differently than spaces
			// embedded in larger text nodes, except when set to
			// white-space: normal (issue #1268).
			if (ie && wrapping && ch == " " && i && !/\s/.test(text.charAt(i - 1)) &&
				i < text.length - 1 && !/\s/.test(text.charAt(i + 1)))
				span.style.whiteSpace = "normal";
			builder.pos += ch.length;
		}
		if (text.length) builder.measuredSomething = true;
	}

	function buildTokenSplitSpaces(inner) {
		function split(old) {
			var out = " ";
			for (var i = 0; i < old.length - 2; ++i) out += i % 2 ? " " : "\u00a0";
			out += " ";
			return out;
		}
		return function(builder, text, style, startStyle, endStyle, title) {
			return inner(builder, text.replace(/ {3,}/, split), style, startStyle, endStyle, title);
		};
	}

	function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
		var widget = !ignoreWidget && marker.replacedWith;
		if (widget) {
			if (builder.copyWidgets) widget = widget.cloneNode(true);
			builder.pre.appendChild(widget);
			if (builder.measure) {
				if (size) {
					builder.measure[builder.pos] = widget;
				} else {
					var elt = builder.measure[builder.pos] = zeroWidthElement(builder.cm.display.measure);
					if (marker.type != "bookmark" || marker.insertLeft)
						builder.pre.insertBefore(elt, widget);
					else
						builder.pre.appendChild(elt);
				}
				builder.measuredSomething = true;
			}
		}
		builder.pos += size;
	}

	// Outputs a number of spans to make up a line, taking highlighting
	// and marked text into account.
	function insertLineContent(line, builder, styles) {
		var spans = line.markedSpans,
			allText = line.text,
			at = 0;
		if (!spans) {
			for (var i = 1; i < styles.length; i += 2)
				builder.addToken(builder, allText.slice(at, at = styles[i]), styleToClass(styles[i + 1]));
			return;
		}

		var len = allText.length,
			pos = 0,
			i = 1,
			text = "",
			style;
		var nextChange = 0,
			spanStyle, spanEndStyle, spanStartStyle, title, collapsed;
		for (;;) {
			if (nextChange == pos) { // Update current marker set
				spanStyle = spanEndStyle = spanStartStyle = title = "";
				collapsed = null;
				nextChange = Infinity;
				var foundBookmark = null;
				for (var j = 0; j < spans.length; ++j) {
					var sp = spans[j],
						m = sp.marker;
					if (sp.from <= pos && (sp.to == null || sp.to > pos)) {
						if (sp.to != null && nextChange > sp.to) {
							nextChange = sp.to;
							spanEndStyle = "";
						}
						if (m.className) spanStyle += " " + m.className;
						if (m.startStyle && sp.from == pos) spanStartStyle += " " + m.startStyle;
						if (m.endStyle && sp.to == nextChange) spanEndStyle += " " + m.endStyle;
						if (m.title && !title) title = m.title;
						if (m.collapsed && (!collapsed || collapsed.marker.size < m.size))
							collapsed = sp;
					} else if (sp.from > pos && nextChange > sp.from) {
						nextChange = sp.from;
					}
					if (m.type == "bookmark" && sp.from == pos && m.replacedWith) foundBookmark = m;
				}
				if (collapsed && (collapsed.from || 0) == pos) {
					buildCollapsedSpan(builder, (collapsed.to == null ? len : collapsed.to) - pos,
						collapsed.marker, collapsed.from == null);
					if (collapsed.to == null) return collapsed.marker.find();
				}
				if (foundBookmark && !collapsed) buildCollapsedSpan(builder, 0, foundBookmark);
			}
			if (pos >= len) break;

			var upto = Math.min(len, nextChange);
			while (true) {
				if (text) {
					var end = pos + text.length;
					if (!collapsed) {
						var tokenText = end > upto ? text.slice(0, upto - pos) : text;
						builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
							spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", title);
					}
					if (end >= upto) {
						text = text.slice(upto - pos);
						pos = upto;
						break;
					}
					pos = end;
					spanStartStyle = "";
				}
				text = allText.slice(at, at = styles[i++]);
				style = styleToClass(styles[i++]);
			}
		}
	}

	// DOCUMENT DATA STRUCTURE

	function updateDoc(doc, change, markedSpans, selAfter, estimateHeight) {
		function spansFor(n) {
			return markedSpans ? markedSpans[n] : null;
		}

		function update(line, text, spans) {
			updateLine(line, text, spans, estimateHeight);
			signalLater(line, "change", line, change);
		}

		var from = change.from,
			to = change.to,
			text = change.text;
		var firstLine = getLine(doc, from.line),
			lastLine = getLine(doc, to.line);
		var lastText = lst(text),
			lastSpans = spansFor(text.length - 1),
			nlines = to.line - from.line;

		// First adjust the line structure
		if (from.ch == 0 && to.ch == 0 && lastText == "") {
			// This is a whole-line replace. Treated specially to make
			// sure line objects move the way they are supposed to.
			for (var i = 0, e = text.length - 1, added = []; i < e; ++i)
				added.push(new Line(text[i], spansFor(i), estimateHeight));
			update(lastLine, lastLine.text, lastSpans);
			if (nlines) doc.remove(from.line, nlines);
			if (added.length) doc.insert(from.line, added);
		} else if (firstLine == lastLine) {
			if (text.length == 1) {
				update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
			} else {
				for (var added = [], i = 1, e = text.length - 1; i < e; ++i)
					added.push(new Line(text[i], spansFor(i), estimateHeight));
				added.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
				update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
				doc.insert(from.line + 1, added);
			}
		} else if (text.length == 1) {
			update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
			doc.remove(from.line + 1, nlines);
		} else {
			update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
			update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
			for (var i = 1, e = text.length - 1, added = []; i < e; ++i)
				added.push(new Line(text[i], spansFor(i), estimateHeight));
			if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
			doc.insert(from.line + 1, added);
		}

		signalLater(doc, "change", doc, change);
		setSelection(doc, selAfter.anchor, selAfter.head, null, true);
	}

	function LeafChunk(lines) {
		this.lines = lines;
		this.parent = null;
		for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
			lines[i].parent = this;
			height += lines[i].height;
		}
		this.height = height;
	}

	LeafChunk.prototype = {
		chunkSize: function() {
			return this.lines.length;
		},
		removeInner: function(at, n) {
			for (var i = at, e = at + n; i < e; ++i) {
				var line = this.lines[i];
				this.height -= line.height;
				cleanUpLine(line);
				signalLater(line, "delete");
			}
			this.lines.splice(at, n);
		},
		collapse: function(lines) {
			lines.splice.apply(lines, [lines.length, 0].concat(this.lines));
		},
		insertInner: function(at, lines, height) {
			this.height += height;
			this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
			for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
		},
		iterN: function(at, n, op) {
			for (var e = at + n; at < e; ++at)
				if (op(this.lines[at])) return true;
		}
	};

	function BranchChunk(children) {
		this.children = children;
		var size = 0,
			height = 0;
		for (var i = 0, e = children.length; i < e; ++i) {
			var ch = children[i];
			size += ch.chunkSize();
			height += ch.height;
			ch.parent = this;
		}
		this.size = size;
		this.height = height;
		this.parent = null;
	}

	BranchChunk.prototype = {
		chunkSize: function() {
			return this.size;
		},
		removeInner: function(at, n) {
			this.size -= n;
			for (var i = 0; i < this.children.length; ++i) {
				var child = this.children[i],
					sz = child.chunkSize();
				if (at < sz) {
					var rm = Math.min(n, sz - at),
						oldHeight = child.height;
					child.removeInner(at, rm);
					this.height -= oldHeight - child.height;
					if (sz == rm) {
						this.children.splice(i--, 1);
						child.parent = null;
					}
					if ((n -= rm) == 0) break;
					at = 0;
				} else at -= sz;
			}
			if (this.size - n < 25) {
				var lines = [];
				this.collapse(lines);
				this.children = [new LeafChunk(lines)];
				this.children[0].parent = this;
			}
		},
		collapse: function(lines) {
			for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
		},
		insertInner: function(at, lines, height) {
			this.size += lines.length;
			this.height += height;
			for (var i = 0, e = this.children.length; i < e; ++i) {
				var child = this.children[i],
					sz = child.chunkSize();
				if (at <= sz) {
					child.insertInner(at, lines, height);
					if (child.lines && child.lines.length > 50) {
						while (child.lines.length > 50) {
							var spilled = child.lines.splice(child.lines.length - 25, 25);
							var newleaf = new LeafChunk(spilled);
							child.height -= newleaf.height;
							this.children.splice(i + 1, 0, newleaf);
							newleaf.parent = this;
						}
						this.maybeSpill();
					}
					break;
				}
				at -= sz;
			}
		},
		maybeSpill: function() {
			if (this.children.length <= 10) return;
			var me = this;
			do {
				var spilled = me.children.splice(me.children.length - 5, 5);
				var sibling = new BranchChunk(spilled);
				if (!me.parent) { // Become the parent node
					var copy = new BranchChunk(me.children);
					copy.parent = me;
					me.children = [copy, sibling];
					me = copy;
				} else {
					me.size -= sibling.size;
					me.height -= sibling.height;
					var myIndex = indexOf(me.parent.children, me);
					me.parent.children.splice(myIndex + 1, 0, sibling);
				}
				sibling.parent = me.parent;
			} while (me.children.length > 10);
			me.parent.maybeSpill();
		},
		iterN: function(at, n, op) {
			for (var i = 0, e = this.children.length; i < e; ++i) {
				var child = this.children[i],
					sz = child.chunkSize();
				if (at < sz) {
					var used = Math.min(n, sz - at);
					if (child.iterN(at, used, op)) return true;
					if ((n -= used) == 0) break;
					at = 0;
				} else at -= sz;
			}
		}
	};

	var nextDocId = 0;
	var Doc = CodeMirror.Doc = function(text, mode, firstLine) {
		if (!(this instanceof Doc)) return new Doc(text, mode, firstLine);
		if (firstLine == null) firstLine = 0;

		BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
		this.first = firstLine;
		this.scrollTop = this.scrollLeft = 0;
		this.cantEdit = false;
		this.history = makeHistory();
		this.cleanGeneration = 1;
		this.frontier = firstLine;
		var start = Pos(firstLine, 0);
		this.sel = {
			from: start,
			to: start,
			head: start,
			anchor: start,
			shift: false,
			extend: false,
			goalColumn: null
		};
		this.id = ++nextDocId;
		this.modeOption = mode;

		if (typeof text == "string") text = splitLines(text);
		updateDoc(this, {
			from: start,
			to: start,
			text: text
		}, null, {
			head: start,
			anchor: start
		});
	};

	Doc.prototype = createObj(BranchChunk.prototype, {
		constructor: Doc,
		iter: function(from, to, op) {
			if (op) this.iterN(from - this.first, to - from, op);
			else this.iterN(this.first, this.first + this.size, from);
		},

		insert: function(at, lines) {
			var height = 0;
			for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
			this.insertInner(at - this.first, lines, height);
		},
		remove: function(at, n) {
			this.removeInner(at - this.first, n);
		},

		getValue: function(lineSep) {
			var lines = getLines(this, this.first, this.first + this.size);
			if (lineSep === false) return lines;
			return lines.join(lineSep || "\n");
		},
		setValue: function(code) {
			var top = Pos(this.first, 0),
				last = this.first + this.size - 1;
			makeChange(this, {
				from: top,
				to: Pos(last, getLine(this, last).text.length),
				text: splitLines(code),
				origin: "setValue"
			}, {
				head: top,
				anchor: top
			}, true);
		},
		replaceRange: function(code, from, to, origin) {
			from = clipPos(this, from);
			to = to ? clipPos(this, to) : from;
			replaceRange(this, code, from, to, origin);
		},
		getRange: function(from, to, lineSep) {
			var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
			if (lineSep === false) return lines;
			return lines.join(lineSep || "\n");
		},

		getLine: function(line) {
			var l = this.getLineHandle(line);
			return l && l.text;
		},
		setLine: function(line, text) {
			if (isLine(this, line))
				replaceRange(this, text, Pos(line, 0), clipPos(this, Pos(line)));
		},
		removeLine: function(line) {
			if (line) replaceRange(this, "", clipPos(this, Pos(line - 1)), clipPos(this, Pos(line)));
			else replaceRange(this, "", Pos(0, 0), clipPos(this, Pos(1, 0)));
		},

		getLineHandle: function(line) {
			if (isLine(this, line)) return getLine(this, line);
		},
		getLineNumber: function(line) {
			return lineNo(line);
		},

		getLineHandleVisualStart: function(line) {
			if (typeof line == "number") line = getLine(this, line);
			return visualLine(this, line);
		},

		lineCount: function() {
			return this.size;
		},
		firstLine: function() {
			return this.first;
		},
		lastLine: function() {
			return this.first + this.size - 1;
		},

		clipPos: function(pos) {
			return clipPos(this, pos);
		},

		getCursor: function(start) {
			var sel = this.sel,
				pos;
			if (start == null || start == "head") pos = sel.head;
			else if (start == "anchor") pos = sel.anchor;
			else if (start == "end" || start === false) pos = sel.to;
			else pos = sel.from;
			return copyPos(pos);
		},
		somethingSelected: function() {
			return !posEq(this.sel.head, this.sel.anchor);
		},

		setCursor: docOperation(function(line, ch, extend) {
			var pos = clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line);
			if (extend) extendSelection(this, pos);
			else setSelection(this, pos, pos);
		}),
		setSelection: docOperation(function(anchor, head) {
			setSelection(this, clipPos(this, anchor), clipPos(this, head || anchor));
		}),
		extendSelection: docOperation(function(from, to) {
			extendSelection(this, clipPos(this, from), to && clipPos(this, to));
		}),

		getSelection: function(lineSep) {
			return this.getRange(this.sel.from, this.sel.to, lineSep);
		},
		replaceSelection: function(code, collapse, origin) {
			makeChange(this, {
				from: this.sel.from,
				to: this.sel.to,
				text: splitLines(code),
				origin: origin
			}, collapse || "around");
		},
		undo: docOperation(function() {
			makeChangeFromHistory(this, "undo");
		}),
		redo: docOperation(function() {
			makeChangeFromHistory(this, "redo");
		}),

		setExtending: function(val) {
			this.sel.extend = val;
		},

		historySize: function() {
			var hist = this.history;
			return {
				undo: hist.done.length,
				redo: hist.undone.length
			};
		},
		clearHistory: function() {
			this.history = makeHistory(this.history.maxGeneration);
		},

		markClean: function() {
			this.cleanGeneration = this.changeGeneration();
		},
		changeGeneration: function() {
			this.history.lastOp = this.history.lastOrigin = null;
			return this.history.generation;
		},
		isClean: function(gen) {
			return this.history.generation == (gen || this.cleanGeneration);
		},

		getHistory: function() {
			return {
				done: copyHistoryArray(this.history.done),
				undone: copyHistoryArray(this.history.undone)
			};
		},
		setHistory: function(histData) {
			var hist = this.history = makeHistory(this.history.maxGeneration);
			hist.done = histData.done.slice(0);
			hist.undone = histData.undone.slice(0);
		},

		markText: function(from, to, options) {
			return markText(this, clipPos(this, from), clipPos(this, to), options, "range");
		},
		setBookmark: function(pos, options) {
			var realOpts = {
				replacedWith: options && (options.nodeType == null ? options.widget : options),
				insertLeft: options && options.insertLeft
			};
			pos = clipPos(this, pos);
			return markText(this, pos, pos, realOpts, "bookmark");
		},
		findMarksAt: function(pos) {
			pos = clipPos(this, pos);
			var markers = [],
				spans = getLine(this, pos.line).markedSpans;
			if (spans)
				for (var i = 0; i < spans.length; ++i) {
					var span = spans[i];
					if ((span.from == null || span.from <= pos.ch) &&
						(span.to == null || span.to >= pos.ch))
						markers.push(span.marker.parent || span.marker);
				}
			return markers;
		},
		getAllMarks: function() {
			var markers = [];
			this.iter(function(line) {
				var sps = line.markedSpans;
				if (sps)
					for (var i = 0; i < sps.length; ++i)
						if (sps[i].from != null) markers.push(sps[i].marker);
			});
			return markers;
		},

		posFromIndex: function(off) {
			var ch, lineNo = this.first;
			this.iter(function(line) {
				var sz = line.text.length + 1;
				if (sz > off) {
					ch = off;
					return true;
				}
				off -= sz;
				++lineNo;
			});
			return clipPos(this, Pos(lineNo, ch));
		},
		indexFromPos: function(coords) {
			coords = clipPos(this, coords);
			var index = coords.ch;
			if (coords.line < this.first || coords.ch < 0) return 0;
			this.iter(this.first, coords.line, function(line) {
				index += line.text.length + 1;
			});
			return index;
		},

		copy: function(copyHistory) {
			var doc = new Doc(getLines(this, this.first, this.first + this.size), this.modeOption, this.first);
			doc.scrollTop = this.scrollTop;
			doc.scrollLeft = this.scrollLeft;
			doc.sel = {
				from: this.sel.from,
				to: this.sel.to,
				head: this.sel.head,
				anchor: this.sel.anchor,
				shift: this.sel.shift,
				extend: false,
				goalColumn: this.sel.goalColumn
			};
			if (copyHistory) {
				doc.history.undoDepth = this.history.undoDepth;
				doc.setHistory(this.getHistory());
			}
			return doc;
		},

		linkedDoc: function(options) {
			if (!options) options = {};
			var from = this.first,
				to = this.first + this.size;
			if (options.from != null && options.from > from) from = options.from;
			if (options.to != null && options.to < to) to = options.to;
			var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from);
			if (options.sharedHist) copy.history = this.history;
			(this.linked || (this.linked = [])).push({
				doc: copy,
				sharedHist: options.sharedHist
			});
			copy.linked = [{
				doc: this,
				isParent: true,
				sharedHist: options.sharedHist
			}];
			return copy;
		},
		unlinkDoc: function(other) {
			if (other instanceof CodeMirror) other = other.doc;
			if (this.linked)
				for (var i = 0; i < this.linked.length; ++i) {
					var link = this.linked[i];
					if (link.doc != other) continue;
					this.linked.splice(i, 1);
					other.unlinkDoc(this);
					break;
				}
				// If the histories were shared, split them again
			if (other.history == this.history) {
				var splitIds = [other.id];
				linkedDocs(other, function(doc) {
					splitIds.push(doc.id);
				}, true);
				other.history = makeHistory();
				other.history.done = copyHistoryArray(this.history.done, splitIds);
				other.history.undone = copyHistoryArray(this.history.undone, splitIds);
			}
		},
		iterLinkedDocs: function(f) {
			linkedDocs(this, f);
		},

		getMode: function() {
			return this.mode;
		},
		getEditor: function() {
			return this.cm;
		}
	});

	Doc.prototype.eachLine = Doc.prototype.iter;

	// The Doc methods that should be available on CodeMirror instances
	var dontDelegate = "iter insert remove copy getEditor".split(" ");
	for (var prop in Doc.prototype)
		if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
			CodeMirror.prototype[prop] = (function(method) {
				return function() {
					return method.apply(this.doc, arguments);
				};
			})(Doc.prototype[prop]);

	eventMixin(Doc);

	function linkedDocs(doc, f, sharedHistOnly) {
		function propagate(doc, skip, sharedHist) {
			if (doc.linked)
				for (var i = 0; i < doc.linked.length; ++i) {
					var rel = doc.linked[i];
					if (rel.doc == skip) continue;
					var shared = sharedHist && rel.sharedHist;
					if (sharedHistOnly && !shared) continue;
					f(rel.doc, shared);
					propagate(rel.doc, doc, shared);
				}
		}
		propagate(doc, null, true);
	}

	function attachDoc(cm, doc) {
		if (doc.cm) throw new Error("This document is already in use.");
		cm.doc = doc;
		doc.cm = cm;
		estimateLineHeights(cm);
		loadMode(cm);
		if (!cm.options.lineWrapping) computeMaxLength(cm);
		cm.options.mode = doc.modeOption;
		regChange(cm);
	}

	// LINE UTILITIES

	function getLine(chunk, n) {
		n -= chunk.first;
		while (!chunk.lines) {
			for (var i = 0;; ++i) {
				var child = chunk.children[i],
					sz = child.chunkSize();
				if (n < sz) {
					chunk = child;
					break;
				}
				n -= sz;
			}
		}
		return chunk.lines[n];
	}

	function getBetween(doc, start, end) {
		var out = [],
			n = start.line;
		doc.iter(start.line, end.line + 1, function(line) {
			var text = line.text;
			if (n == end.line) text = text.slice(0, end.ch);
			if (n == start.line) text = text.slice(start.ch);
			out.push(text);
			++n;
		});
		return out;
	}

	function getLines(doc, from, to) {
		var out = [];
		doc.iter(from, to, function(line) {
			out.push(line.text);
		});
		return out;
	}

	function updateLineHeight(line, height) {
		var diff = height - line.height;
		for (var n = line; n; n = n.parent) n.height += diff;
	}

	function lineNo(line) {
		if (line.parent == null) return null;
		var cur = line.parent,
			no = indexOf(cur.lines, line);
		for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
			for (var i = 0;; ++i) {
				if (chunk.children[i] == cur) break;
				no += chunk.children[i].chunkSize();
			}
		}
		return no + cur.first;
	}

	function lineAtHeight(chunk, h) {
		var n = chunk.first;
		outer: do {
			for (var i = 0, e = chunk.children.length; i < e; ++i) {
				var child = chunk.children[i],
					ch = child.height;
				if (h < ch) {
					chunk = child;
					continue outer;
				}
				h -= ch;
				n += child.chunkSize();
			}
			return n;
		} while (!chunk.lines);
		for (var i = 0, e = chunk.lines.length; i < e; ++i) {
			var line = chunk.lines[i],
				lh = line.height;
			if (h < lh) break;
			h -= lh;
		}
		return n + i;
	}

	function heightAtLine(cm, lineObj) {
		lineObj = visualLine(cm.doc, lineObj);

		var h = 0,
			chunk = lineObj.parent;
		for (var i = 0; i < chunk.lines.length; ++i) {
			var line = chunk.lines[i];
			if (line == lineObj) break;
			else h += line.height;
		}
		for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
			for (var i = 0; i < p.children.length; ++i) {
				var cur = p.children[i];
				if (cur == chunk) break;
				else h += cur.height;
			}
		}
		return h;
	}

	function getOrder(line) {
		var order = line.order;
		if (order == null) order = line.order = bidiOrdering(line.text);
		return order;
	}

	// HISTORY

	function makeHistory(startGen) {
		return {
			// Arrays of history events. Doing something adds an event to
			// done and clears undo. Undoing moves events from done to
			// undone, redoing moves them in the other direction.
			done: [],
			undone: [],
			undoDepth: Infinity,
			// Used to track when changes can be merged into a single undo
			// event
			lastTime: 0,
			lastOp: null,
			lastOrigin: null,
			// Used by the isClean() method
			generation: startGen || 1,
			maxGeneration: startGen || 1
		};
	}

	function attachLocalSpans(doc, change, from, to) {
		var existing = change["spans_" + doc.id],
			n = 0;
		doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function(line) {
			if (line.markedSpans)
				(existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans;
			++n;
		});
	}

	function historyChangeFromChange(doc, change) {
		var from = {
			line: change.from.line,
			ch: change.from.ch
		};
		var histChange = {
			from: from,
			to: changeEnd(change),
			text: getBetween(doc, change.from, change.to)
		};
		attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
		linkedDocs(doc, function(doc) {
			attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
		}, true);
		return histChange;
	}

	function addToHistory(doc, change, selAfter, opId) {
		var hist = doc.history;
		hist.undone.length = 0;
		var time = +new Date,
			cur = lst(hist.done);

		if (cur &&
			(hist.lastOp == opId ||
				hist.lastOrigin == change.origin && change.origin &&
				((change.origin.charAt(0) == "+" && doc.cm && hist.lastTime > time - doc.cm.options.historyEventDelay) ||
					change.origin.charAt(0) == "*"))) {
			// Merge this change into the last event
			var last = lst(cur.changes);
			if (posEq(change.from, change.to) && posEq(change.from, last.to)) {
				// Optimized case for simple insertion -- don't want to add
				// new changesets for every character typed
				last.to = changeEnd(change);
			} else {
				// Add new sub-event
				cur.changes.push(historyChangeFromChange(doc, change));
			}
			cur.anchorAfter = selAfter.anchor;
			cur.headAfter = selAfter.head;
		} else {
			// Can not be merged, start a new event.
			cur = {
				changes: [historyChangeFromChange(doc, change)],
				generation: hist.generation,
				anchorBefore: doc.sel.anchor,
				headBefore: doc.sel.head,
				anchorAfter: selAfter.anchor,
				headAfter: selAfter.head
			};
			hist.done.push(cur);
			hist.generation = ++hist.maxGeneration;
			while (hist.done.length > hist.undoDepth)
				hist.done.shift();
		}
		hist.lastTime = time;
		hist.lastOp = opId;
		hist.lastOrigin = change.origin;
	}

	function removeClearedSpans(spans) {
		if (!spans) return null;
		for (var i = 0, out; i < spans.length; ++i) {
			if (spans[i].marker.explicitlyCleared) {
				if (!out) out = spans.slice(0, i);
			} else if (out) out.push(spans[i]);
		}
		return !out ? spans : out.length ? out : null;
	}

	function getOldSpans(doc, change) {
		var found = change["spans_" + doc.id];
		if (!found) return null;
		for (var i = 0, nw = []; i < change.text.length; ++i)
			nw.push(removeClearedSpans(found[i]));
		return nw;
	}

	// Used both to provide a JSON-safe object in .getHistory, and, when
	// detaching a document, to split the history in two
	function copyHistoryArray(events, newGroup) {
		for (var i = 0, copy = []; i < events.length; ++i) {
			var event = events[i],
				changes = event.changes,
				newChanges = [];
			copy.push({
				changes: newChanges,
				anchorBefore: event.anchorBefore,
				headBefore: event.headBefore,
				anchorAfter: event.anchorAfter,
				headAfter: event.headAfter
			});
			for (var j = 0; j < changes.length; ++j) {
				var change = changes[j],
					m;
				newChanges.push({
					from: change.from,
					to: change.to,
					text: change.text
				});
				if (newGroup)
					for (var prop in change)
						if (m = prop.match(/^spans_(\d+)$/)) {
							if (indexOf(newGroup, Number(m[1])) > -1) {
								lst(newChanges)[prop] = change[prop];
								delete change[prop];
							}
						}
			}
		}
		return copy;
	}

	// Rebasing/resetting history to deal with externally-sourced changes

	function rebaseHistSel(pos, from, to, diff) {
		if (to < pos.line) {
			pos.line += diff;
		} else if (from < pos.line) {
			pos.line = from;
			pos.ch = 0;
		}
	}

	// Tries to rebase an array of history events given a change in the
	// document. If the change touches the same lines as the event, the
	// event, and everything 'behind' it, is discarded. If the change is
	// before the event, the event's positions are updated. Uses a
	// copy-on-write scheme for the positions, to avoid having to
	// reallocate them all on every rebase, but also avoid problems with
	// shared position objects being unsafely updated.
	function rebaseHistArray(array, from, to, diff) {
		for (var i = 0; i < array.length; ++i) {
			var sub = array[i],
				ok = true;
			for (var j = 0; j < sub.changes.length; ++j) {
				var cur = sub.changes[j];
				if (!sub.copied) {
					cur.from = copyPos(cur.from);
					cur.to = copyPos(cur.to);
				}
				if (to < cur.from.line) {
					cur.from.line += diff;
					cur.to.line += diff;
				} else if (from <= cur.to.line) {
					ok = false;
					break;
				}
			}
			if (!sub.copied) {
				sub.anchorBefore = copyPos(sub.anchorBefore);
				sub.headBefore = copyPos(sub.headBefore);
				sub.anchorAfter = copyPos(sub.anchorAfter);
				sub.readAfter = copyPos(sub.headAfter);
				sub.copied = true;
			}
			if (!ok) {
				array.splice(0, i + 1);
				i = 0;
			} else {
				rebaseHistSel(sub.anchorBefore);
				rebaseHistSel(sub.headBefore);
				rebaseHistSel(sub.anchorAfter);
				rebaseHistSel(sub.headAfter);
			}
		}
	}

	function rebaseHist(hist, change) {
		var from = change.from.line,
			to = change.to.line,
			diff = change.text.length - (to - from) - 1;
		rebaseHistArray(hist.done, from, to, diff);
		rebaseHistArray(hist.undone, from, to, diff);
	}

	// EVENT OPERATORS

	function stopMethod() {
		e_stop(this);
	}
	// Ensure an event has a stop method.
	function addStop(event) {
		if (!event.stop) event.stop = stopMethod;
		return event;
	}

	function e_preventDefault(e) {
		if (e.preventDefault) e.preventDefault();
		else e.returnValue = false;
	}

	function e_stopPropagation(e) {
		if (e.stopPropagation) e.stopPropagation();
		else e.cancelBubble = true;
	}

	function e_defaultPrevented(e) {
		return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false;
	}

	function e_stop(e) {
		e_preventDefault(e);
		e_stopPropagation(e);
	}
	CodeMirror.e_stop = e_stop;
	CodeMirror.e_preventDefault = e_preventDefault;
	CodeMirror.e_stopPropagation = e_stopPropagation;

	function e_target(e) {
		return e.target || e.srcElement;
	}

	function e_button(e) {
		var b = e.which;
		if (b == null) {
			if (e.button & 1) b = 1;
			else if (e.button & 2) b = 3;
			else if (e.button & 4) b = 2;
		}
		if (mac && e.ctrlKey && b == 1) b = 3;
		return b;
	}

	// EVENT HANDLING

	function on(emitter, type, f) {
		if (emitter.addEventListener)
			emitter.addEventListener(type, f, false);
		else if (emitter.attachEvent)
			emitter.attachEvent("on" + type, f);
		else {
			var map = emitter._handlers || (emitter._handlers = {});
			var arr = map[type] || (map[type] = []);
			arr.push(f);
		}
	}

	function off(emitter, type, f) {
		if (emitter.removeEventListener)
			emitter.removeEventListener(type, f, false);
		else if (emitter.detachEvent)
			emitter.detachEvent("on" + type, f);
		else {
			var arr = emitter._handlers && emitter._handlers[type];
			if (!arr) return;
			for (var i = 0; i < arr.length; ++i)
				if (arr[i] == f) {
					arr.splice(i, 1);
					break;
				}
		}
	}

	function signal(emitter, type /*, values...*/ ) {
		var arr = emitter._handlers && emitter._handlers[type];
		if (!arr) return;
		var args = Array.prototype.slice.call(arguments, 2);
		for (var i = 0; i < arr.length; ++i) arr[i].apply(null, args);
	}

	var delayedCallbacks, delayedCallbackDepth = 0;

	function signalLater(emitter, type /*, values...*/ ) {
		var arr = emitter._handlers && emitter._handlers[type];
		if (!arr) return;
		var args = Array.prototype.slice.call(arguments, 2);
		if (!delayedCallbacks) {
			++delayedCallbackDepth;
			delayedCallbacks = [];
			setTimeout(fireDelayed, 0);
		}

		function bnd(f) {
			return function() {
				f.apply(null, args);
			};
		};
		for (var i = 0; i < arr.length; ++i)
			delayedCallbacks.push(bnd(arr[i]));
	}

	function signalDOMEvent(cm, e, override) {
		signal(cm, override || e.type, cm, e);
		return e_defaultPrevented(e) || e.codemirrorIgnore;
	}

	function fireDelayed() {
		--delayedCallbackDepth;
		var delayed = delayedCallbacks;
		delayedCallbacks = null;
		for (var i = 0; i < delayed.length; ++i) delayed[i]();
	}

	function hasHandler(emitter, type) {
		var arr = emitter._handlers && emitter._handlers[type];
		return arr && arr.length > 0;
	}

	CodeMirror.on = on;
	CodeMirror.off = off;
	CodeMirror.signal = signal;

	function eventMixin(ctor) {
		ctor.prototype.on = function(type, f) {
			on(this, type, f);
		};
		ctor.prototype.off = function(type, f) {
			off(this, type, f);
		};
	}

	// MISC UTILITIES

	// Number of pixels added to scroller and sizer to hide scrollbar
	var scrollerCutOff = 30;

	// Returned or thrown by various protocols to signal 'I'm not
	// handling this'.
	var Pass = CodeMirror.Pass = {
		toString: function() {
			return "CodeMirror.Pass";
		}
	};

	function Delayed() {
		this.id = null;
	}
	Delayed.prototype = {
		set: function(ms, f) {
			clearTimeout(this.id);
			this.id = setTimeout(f, ms);
		}
	};

	// Counts the column offset in a string, taking tabs into account.
	// Used mostly to find indentation.
	function countColumn(string, end, tabSize, startIndex, startValue) {
		if (end == null) {
			end = string.search(/[^\s\u00a0]/);
			if (end == -1) end = string.length;
		}
		for (var i = startIndex || 0, n = startValue || 0; i < end; ++i) {
			if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
			else ++n;
		}
		return n;
	}
	CodeMirror.countColumn = countColumn;

	var spaceStrs = [""];

	function spaceStr(n) {
		while (spaceStrs.length <= n)
			spaceStrs.push(lst(spaceStrs) + " ");
		return spaceStrs[n];
	}

	function lst(arr) {
		return arr[arr.length - 1];
	}

	function selectInput(node) {
		if (ios) { // Mobile Safari apparently has a bug where select() is broken.
			node.selectionStart = 0;
			node.selectionEnd = node.value.length;
		} else {
			// Suppress mysterious IE10 errors
			try {
				node.select();
			} catch (_e) {}
		}
	}

	function indexOf(collection, elt) {
		if (collection.indexOf) return collection.indexOf(elt);
		for (var i = 0, e = collection.length; i < e; ++i)
			if (collection[i] == elt) return i;
		return -1;
	}

	function createObj(base, props) {
		function Obj() {}
		Obj.prototype = base;
		var inst = new Obj();
		if (props) copyObj(props, inst);
		return inst;
	}

	function copyObj(obj, target) {
		if (!target) target = {};
		for (var prop in obj)
			if (obj.hasOwnProperty(prop)) target[prop] = obj[prop];
		return target;
	}

	function emptyArray(size) {
		for (var a = [], i = 0; i < size; ++i) a.push(undefined);
		return a;
	}

	function bind(f) {
		var args = Array.prototype.slice.call(arguments, 1);
		return function() {
			return f.apply(null, args);
		};
	}

	var nonASCIISingleCaseWordChar = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

	function isWordChar(ch) {
		return /\w/.test(ch) || ch > "\x80" &&
			(ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch));
	}

	function isEmpty(obj) {
		for (var n in obj)
			if (obj.hasOwnProperty(n) && obj[n]) return false;
		return true;
	}

	var isExtendingChar = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;

	// DOM UTILITIES

	function elt(tag, content, className, style) {
		var e = document.createElement(tag);
		if (className) e.className = className;
		if (style) e.style.cssText = style;
		if (typeof content == "string") setTextContent(e, content);
		else if (content)
			for (var i = 0; i < content.length; ++i) e.appendChild(content[i]);
		return e;
	}

	function removeChildren(e) {
		for (var count = e.childNodes.length; count > 0; --count)
			e.removeChild(e.firstChild);
		return e;
	}

	function removeChildrenAndAdd(parent, e) {
		return removeChildren(parent).appendChild(e);
	}

	function setTextContent(e, str) {
		if (ie_lt9) {
			e.innerHTML = "";
			e.appendChild(document.createTextNode(str));
		} else e.textContent = str;
	}

	function getRect(node) {
		return node.getBoundingClientRect();
	}
	CodeMirror.replaceGetRect = function(f) {
		getRect = f;
	};

	// FEATURE DETECTION

	// Detect drag-and-drop
	var dragAndDrop = function() {
		// There is *some* kind of drag-and-drop support in IE6-8, but I
		// couldn't get it to work yet.
		if (ie_lt9) return false;
		var div = elt('div');
		return "draggable" in div || "dragDrop" in div;
	}();

	// For a reason I have yet to figure out, some browsers disallow
	// word wrapping between certain characters *only* if a new inline
	// element is started between them. This makes it hard to reliably
	// measure the position of things, since that requires inserting an
	// extra span. This terribly fragile set of tests matches the
	// character combinations that suffer from this phenomenon on the
	// various browsers.
	function spanAffectsWrapping() {
		return false;
	}
	if (gecko) // Only for "$'"
		spanAffectsWrapping = function(str, i) {
		return str.charCodeAt(i - 1) == 36 && str.charCodeAt(i) == 39;
	};
	else if (safari && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent))
		spanAffectsWrapping = function(str, i) {
			return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(str.slice(i - 1, i + 1));
		};
	else if (webkit && !/Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent))
		spanAffectsWrapping = function(str, i) {
			if (i > 1 && str.charCodeAt(i - 1) == 45) {
				if (/\w/.test(str.charAt(i - 2)) && /[^\-?\.]/.test(str.charAt(i))) return true;
				if (i > 2 && /[\d\.,]/.test(str.charAt(i - 2)) && /[\d\.,]/.test(str.charAt(i))) return false;
			}
			return /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|…[\w~`@#$%\^&*(_=+{[><]/.test(str.slice(i - 1, i + 1));
		};

	var knownScrollbarWidth;

	function scrollbarWidth(measure) {
		if (knownScrollbarWidth != null) return knownScrollbarWidth;
		var test = elt("div", null, null, "width: 50px; height: 50px; overflow-x: scroll");
		removeChildrenAndAdd(measure, test);
		if (test.offsetWidth)
			knownScrollbarWidth = test.offsetHeight - test.clientHeight;
		return knownScrollbarWidth || 0;
	}

	var zwspSupported;

	function zeroWidthElement(measure) {
		if (zwspSupported == null) {
			var test = elt("span", "\u200b");
			removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
			if (measure.firstChild.offsetHeight != 0)
				zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !ie_lt8;
		}
		if (zwspSupported) return elt("span", "\u200b");
		else return elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
	}

	// See if "".split is the broken IE version, if so, provide an
	// alternative way to split lines.
	var splitLines = "\n\nb".split(/\n/).length != 3 ? function(string) {
		var pos = 0,
			result = [],
			l = string.length;
		while (pos <= l) {
			var nl = string.indexOf("\n", pos);
			if (nl == -1) nl = string.length;
			var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
			var rt = line.indexOf("\r");
			if (rt != -1) {
				result.push(line.slice(0, rt));
				pos += rt + 1;
			} else {
				result.push(line);
				pos = nl + 1;
			}
		}
		return result;
	} : function(string) {
		return string.split(/\r\n?|\n/);
	};
	CodeMirror.splitLines = splitLines;

	var hasSelection = window.getSelection ? function(te) {
		try {
			return te.selectionStart != te.selectionEnd;
		} catch (e) {
			return false;
		}
	} : function(te) {
		try {
			var range = te.ownerDocument.selection.createRange();
		} catch (e) {}
		if (!range || range.parentElement() != te) return false;
		return range.compareEndPoints("StartToEnd", range) != 0;
	};

	var hasCopyEvent = (function() {
		var e = elt("div");
		if ("oncopy" in e) return true;
		e.setAttribute("oncopy", "return;");
		return typeof e.oncopy == 'function';
	})();

	// KEY NAMING

	var keyNames = {
		3: "Enter",
		8: "Backspace",
		9: "Tab",
		13: "Enter",
		16: "Shift",
		17: "Ctrl",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Esc",
		32: "Space",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "Left",
		38: "Up",
		39: "Right",
		40: "Down",
		44: "PrintScrn",
		45: "Insert",
		46: "Delete",
		59: ";",
		91: "Mod",
		92: "Mod",
		93: "Mod",
		109: "-",
		107: "=",
		127: "Delete",
		186: ";",
		187: "=",
		188: ",",
		189: "-",
		190: ".",
		191: "/",
		192: "`",
		219: "[",
		220: "\\",
		221: "]",
		222: "'",
		63276: "PageUp",
		63277: "PageDown",
		63275: "End",
		63273: "Home",
		63234: "Left",
		63232: "Up",
		63235: "Right",
		63233: "Down",
		63302: "Insert",
		63272: "Delete"
	};
	CodeMirror.keyNames = keyNames;
	(function() {
		// Number keys
		for (var i = 0; i < 10; i++) keyNames[i + 48] = String(i);
		// Alphabetic keys
		for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i);
		// Function keys
		for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i;
	})();

	// BIDI HELPERS

	function iterateBidiSections(order, from, to, f) {
		if (!order) return f(from, to, "ltr");
		var found = false;
		for (var i = 0; i < order.length; ++i) {
			var part = order[i];
			if (part.from < to && part.to > from || from == to && part.to == from) {
				f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr");
				found = true;
			}
		}
		if (!found) f(from, to, "ltr");
	}

	function bidiLeft(part) {
		return part.level % 2 ? part.to : part.from;
	}

	function bidiRight(part) {
		return part.level % 2 ? part.from : part.to;
	}

	function lineLeft(line) {
		var order = getOrder(line);
		return order ? bidiLeft(order[0]) : 0;
	}

	function lineRight(line) {
		var order = getOrder(line);
		if (!order) return line.text.length;
		return bidiRight(lst(order));
	}

	function lineStart(cm, lineN) {
		var line = getLine(cm.doc, lineN);
		var visual = visualLine(cm.doc, line);
		if (visual != line) lineN = lineNo(visual);
		var order = getOrder(visual);
		var ch = !order ? 0 : order[0].level % 2 ? lineRight(visual) : lineLeft(visual);
		return Pos(lineN, ch);
	}

	function lineEnd(cm, lineN) {
		var merged, line;
		while (merged = collapsedSpanAtEnd(line = getLine(cm.doc, lineN)))
			lineN = merged.find().to.line;
		var order = getOrder(line);
		var ch = !order ? line.text.length : order[0].level % 2 ? lineLeft(line) : lineRight(line);
		return Pos(lineN, ch);
	}

	function compareBidiLevel(order, a, b) {
		var linedir = order[0].level;
		if (a == linedir) return true;
		if (b == linedir) return false;
		return a < b;
	}
	var bidiOther;

	function getBidiPartAt(order, pos) {
		for (var i = 0, found; i < order.length; ++i) {
			var cur = order[i];
			if (cur.from < pos && cur.to > pos) {
				bidiOther = null;
				return i;
			}
			if (cur.from == pos || cur.to == pos) {
				if (found == null) {
					found = i;
				} else if (compareBidiLevel(order, cur.level, order[found].level)) {
					bidiOther = found;
					return i;
				} else {
					bidiOther = i;
					return found;
				}
			}
		}
		bidiOther = null;
		return found;
	}

	function moveInLine(line, pos, dir, byUnit) {
		if (!byUnit) return pos + dir;
		do pos += dir;
		while (pos > 0 && isExtendingChar.test(line.text.charAt(pos)));
		return pos;
	}

	// This is somewhat involved. It is needed in order to move
	// 'visually' through bi-directional text -- i.e., pressing left
	// should make the cursor go left, even when in RTL text. The
	// tricky part is the 'jumps', where RTL and LTR text touch each
	// other. This often requires the cursor offset to move more than
	// one unit, in order to visually move one unit.
	function moveVisually(line, start, dir, byUnit) {
		var bidi = getOrder(line);
		if (!bidi) return moveLogically(line, start, dir, byUnit);
		var pos = getBidiPartAt(bidi, start),
			part = bidi[pos];
		var target = moveInLine(line, start, part.level % 2 ? -dir : dir, byUnit);

		for (;;) {
			if (target > part.from && target < part.to) return target;
			if (target == part.from || target == part.to) {
				if (getBidiPartAt(bidi, target) == pos) return target;
				part = bidi[pos += dir];
				return (dir > 0) == part.level % 2 ? part.to : part.from;
			} else {
				part = bidi[pos += dir];
				if (!part) return null;
				if ((dir > 0) == part.level % 2)
					target = moveInLine(line, part.to, -1, byUnit);
				else
					target = moveInLine(line, part.from, 1, byUnit);
			}
		}
	}

	function moveLogically(line, start, dir, byUnit) {
		var target = start + dir;
		if (byUnit)
			while (target > 0 && isExtendingChar.test(line.text.charAt(target))) target += dir;
		return target < 0 || target > line.text.length ? null : target;
	}

	// Bidirectional ordering algorithm
	// See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
	// that this (partially) implements.

	// One-char codes used for character types:
	// L (L):   Left-to-Right
	// R (R):   Right-to-Left
	// r (AL):  Right-to-Left Arabic
	// 1 (EN):  European Number
	// + (ES):  European Number Separator
	// % (ET):  European Number Terminator
	// n (AN):  Arabic Number
	// , (CS):  Common Number Separator
	// m (NSM): Non-Spacing Mark
	// b (BN):  Boundary Neutral
	// s (B):   Paragraph Separator
	// t (S):   Segment Separator
	// w (WS):  Whitespace
	// N (ON):  Other Neutrals

	// Returns null if characters are ordered as they appear
	// (left-to-right), or an array of sections ({from, to, level}
	// objects) in the order in which they occur visually.
	var bidiOrdering = (function() {
		// Character types for codepoints 0 to 0xff
		var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL";
		// Character types for codepoints 0x600 to 0x6ff
		var arabicTypes = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr";

		function charType(code) {
			if (code <= 0xff) return lowTypes.charAt(code);
			else if (0x590 <= code && code <= 0x5f4) return "R";
			else if (0x600 <= code && code <= 0x6ff) return arabicTypes.charAt(code - 0x600);
			else if (0x700 <= code && code <= 0x8ac) return "r";
			else return "L";
		}

		var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
		var isNeutral = /[stwN]/,
			isStrong = /[LRr]/,
			countsAsLeft = /[Lb1n]/,
			countsAsNum = /[1n]/;
		// Browsers seem to always treat the boundaries of block elements as being L.
		var outerType = "L";

		return function(str) {
			if (!bidiRE.test(str)) return false;
			var len = str.length,
				types = [];
			for (var i = 0, type; i < len; ++i)
				types.push(type = charType(str.charCodeAt(i)));

			// W1. Examine each non-spacing mark (NSM) in the level run, and
			// change the type of the NSM to the type of the previous
			// character. If the NSM is at the start of the level run, it will
			// get the type of sor.
			for (var i = 0, prev = outerType; i < len; ++i) {
				var type = types[i];
				if (type == "m") types[i] = prev;
				else prev = type;
			}

			// W2. Search backwards from each instance of a European number
			// until the first strong type (R, L, AL, or sor) is found. If an
			// AL is found, change the type of the European number to Arabic
			// number.
			// W3. Change all ALs to R.
			for (var i = 0, cur = outerType; i < len; ++i) {
				var type = types[i];
				if (type == "1" && cur == "r") types[i] = "n";
				else if (isStrong.test(type)) {
					cur = type;
					if (type == "r") types[i] = "R";
				}
			}

			// W4. A single European separator between two European numbers
			// changes to a European number. A single common separator between
			// two numbers of the same type changes to that type.
			for (var i = 1, prev = types[0]; i < len - 1; ++i) {
				var type = types[i];
				if (type == "+" && prev == "1" && types[i + 1] == "1") types[i] = "1";
				else if (type == "," && prev == types[i + 1] &&
					(prev == "1" || prev == "n")) types[i] = prev;
				prev = type;
			}

			// W5. A sequence of European terminators adjacent to European
			// numbers changes to all European numbers.
			// W6. Otherwise, separators and terminators change to Other
			// Neutral.
			for (var i = 0; i < len; ++i) {
				var type = types[i];
				if (type == ",") types[i] = "N";
				else if (type == "%") {
					for (var end = i + 1; end < len && types[end] == "%"; ++end) {}
					var replace = (i && types[i - 1] == "!") || (end < len - 1 && types[end] == "1") ? "1" : "N";
					for (var j = i; j < end; ++j) types[j] = replace;
					i = end - 1;
				}
			}

			// W7. Search backwards from each instance of a European number
			// until the first strong type (R, L, or sor) is found. If an L is
			// found, then change the type of the European number to L.
			for (var i = 0, cur = outerType; i < len; ++i) {
				var type = types[i];
				if (cur == "L" && type == "1") types[i] = "L";
				else if (isStrong.test(type)) cur = type;
			}

			// N1. A sequence of neutrals takes the direction of the
			// surrounding strong text if the text on both sides has the same
			// direction. European and Arabic numbers act as if they were R in
			// terms of their influence on neutrals. Start-of-level-run (sor)
			// and end-of-level-run (eor) are used at level run boundaries.
			// N2. Any remaining neutrals take the embedding direction.
			for (var i = 0; i < len; ++i) {
				if (isNeutral.test(types[i])) {
					for (var end = i + 1; end < len && isNeutral.test(types[end]); ++end) {}
					var before = (i ? types[i - 1] : outerType) == "L";
					var after = (end < len - 1 ? types[end] : outerType) == "L";
					var replace = before || after ? "L" : "R";
					for (var j = i; j < end; ++j) types[j] = replace;
					i = end - 1;
				}
			}

			// Here we depart from the documented algorithm, in order to avoid
			// building up an actual levels array. Since there are only three
			// levels (0, 1, 2) in an implementation that doesn't take
			// explicit embedding into account, we can build up the order on
			// the fly, without following the level-based algorithm.
			var order = [],
				m;
			for (var i = 0; i < len;) {
				if (countsAsLeft.test(types[i])) {
					var start = i;
					for (++i; i < len && countsAsLeft.test(types[i]); ++i) {}
					order.push({
						from: start,
						to: i,
						level: 0
					});
				} else {
					var pos = i,
						at = order.length;
					for (++i; i < len && types[i] != "L"; ++i) {}
					for (var j = pos; j < i;) {
						if (countsAsNum.test(types[j])) {
							if (pos < j) order.splice(at, 0, {
								from: pos,
								to: j,
								level: 1
							});
							var nstart = j;
							for (++j; j < i && countsAsNum.test(types[j]); ++j) {}
							order.splice(at, 0, {
								from: nstart,
								to: j,
								level: 2
							});
							pos = j;
						} else ++j;
					}
					if (pos < i) order.splice(at, 0, {
						from: pos,
						to: i,
						level: 1
					});
				}
			}
			if (order[0].level == 1 && (m = str.match(/^\s+/))) {
				order[0].from = m[0].length;
				order.unshift({
					from: 0,
					to: m[0].length,
					level: 0
				});
			}
			if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
				lst(order).to -= m[0].length;
				order.push({
					from: len - m[0].length,
					to: len,
					level: 0
				});
			}
			if (order[0].level != lst(order).level)
				order.push({
					from: len,
					to: len,
					level: order[0].level
				});

			return order;
		};
	})();

	// THE END

	CodeMirror.version = "3.15.0";

	return CodeMirror;
})();

CodeMirror.defineMode("markdown", function(cmCfg, modeCfg) {

	var htmlFound = CodeMirror.mimeModes.hasOwnProperty("text/html");
	var htmlMode = CodeMirror.getMode(cmCfg, htmlFound ? "text/html" : "text/plain");
	var aliases = {
		html: "htmlmixed",
		js: "javascript",
		json: "application/json",
		c: "text/x-csrc",
		"c++": "text/x-c++src",
		java: "text/x-java",
		csharp: "text/x-csharp",
		"c#": "text/x-csharp",
		scala: "text/x-scala"
	};

	var getMode = (function() {
		var i, modes = {},
			mimes = {},
			mime;

		var list = [];
		for (var m in CodeMirror.modes)
			if (CodeMirror.modes.propertyIsEnumerable(m)) list.push(m);
		for (i = 0; i < list.length; i++) {
			modes[list[i]] = list[i];
		}
		var mimesList = [];
		for (var m in CodeMirror.mimeModes)
			if (CodeMirror.mimeModes.propertyIsEnumerable(m))
				mimesList.push({
					mime: m,
					mode: CodeMirror.mimeModes[m]
				});
		for (i = 0; i < mimesList.length; i++) {
			mime = mimesList[i].mime;
			mimes[mime] = mimesList[i].mime;
		}

		for (var a in aliases) {
			if (aliases[a] in modes || aliases[a] in mimes)
				modes[a] = aliases[a];
		}

		return function(lang) {
			return modes[lang] ? CodeMirror.getMode(cmCfg, modes[lang]) : null;
		};
	}());

	// Should underscores in words open/close em/strong?
	if (modeCfg.underscoresBreakWords === undefined)
		modeCfg.underscoresBreakWords = true;

	// Turn on fenced code blocks? ("```" to start/end)
	if (modeCfg.fencedCodeBlocks === undefined) modeCfg.fencedCodeBlocks = false;

	var codeDepth = 0;
	var prevLineHasContent = false,
		thisLineHasContent = false;

	var header = 'header',
		code = 'comment',
		quote = 'quote',
		list = 'string',
		hr = 'hr',
		image = 'tag',
		linkinline = 'link',
		linkemail = 'link',
		linktext = 'link',
		linkhref = 'string',
		em = 'em',
		strong = 'strong',
		emstrong = 'emstrong';

	var hrRE = /^([*\-=_])(?:\s*\1){2,}\s*$/,
		ulRE = /^[*\-+]\s+/,
		olRE = /^[0-9]+\.\s+/,
		headerRE = /^(?:\={1,}|-{1,})$/,
		textRE = /^[^!\[\]*_\\<>` "'(]+/;

	function switchInline(stream, state, f) {
		state.f = state.inline = f;
		return f(stream, state);
	}

	function switchBlock(stream, state, f) {
		state.f = state.block = f;
		return f(stream, state);
	}


	// Blocks

	function blankLine(state) {
		// Reset linkTitle state
		state.linkTitle = false;
		// Reset EM state
		state.em = false;
		// Reset STRONG state
		state.strong = false;
		// Reset state.quote
		state.quote = false;
		if (!htmlFound && state.f == htmlBlock) {
			state.f = inlineNormal;
			state.block = blockNormal;
		}
		return null;
	}

	function blockNormal(stream, state) {

		if (state.list !== false && state.indentationDiff >= 0) { // Continued list
			if (state.indentationDiff < 4) { // Only adjust indentation if *not* a code block
				state.indentation -= state.indentationDiff;
			}
			state.list = null;
		} else { // No longer a list
			state.list = false;
		}

		if (state.indentationDiff >= 4) {
			state.indentation -= 4;
			stream.skipToEnd();
			return code;
		} else if (stream.eatSpace()) {
			return null;
		} else if (stream.peek() === '#' || (prevLineHasContent && stream.match(headerRE))) {
			state.header = true;
		} else if (stream.eat('>')) {
			state.indentation++;
			state.quote = true;
		} else if (stream.peek() === '[') {
			return switchInline(stream, state, footnoteLink);
		} else if (stream.match(hrRE, true)) {
			return hr;
		} else if (stream.match(ulRE, true) || stream.match(olRE, true)) {
			state.indentation += 4;
			state.list = true;
		} else if (modeCfg.fencedCodeBlocks && stream.match(/^```([\w+#]*)/, true)) {
			// try switching mode
			state.localMode = getMode(RegExp.$1);
			if (state.localMode) state.localState = state.localMode.startState();
			switchBlock(stream, state, local);
			return code;
		}

		return switchInline(stream, state, state.inline);
	}

	function htmlBlock(stream, state) {
		var style = htmlMode.token(stream, state.htmlState);
		if (htmlFound && style === 'tag' && state.htmlState.type !== 'openTag' && !state.htmlState.context) {
			state.f = inlineNormal;
			state.block = blockNormal;
		}
		if (state.md_inside && stream.current().indexOf(">") != -1) {
			state.f = inlineNormal;
			state.block = blockNormal;
			state.htmlState.context = undefined;
		}
		return style;
	}

	function local(stream, state) {
		if (stream.sol() && stream.match(/^```/, true)) {
			state.localMode = state.localState = null;
			state.f = inlineNormal;
			state.block = blockNormal;
			return code;
		} else if (state.localMode) {
			return state.localMode.token(stream, state.localState);
		} else {
			stream.skipToEnd();
			return code;
		}
	}

	// Inline
	function getType(state) {
		var styles = [];

		if (state.strong) {
			styles.push(state.em ? emstrong : strong);
		} else if (state.em) {
			styles.push(em);
		}

		if (state.linkText) {
			styles.push(linktext);
		}

		if (state.code) {
			styles.push(code);
		}

		if (state.header) {
			styles.push(header);
		}
		if (state.quote) {
			styles.push(quote);
		}
		if (state.list !== false) {
			styles.push(list);
		}

		return styles.length ? styles.join(' ') : null;
	}

	function handleText(stream, state) {
		if (stream.match(textRE, true)) {
			return getType(state);
		}
		return undefined;
	}

	function inlineNormal(stream, state) {
		var style = state.text(stream, state);
		if (typeof style !== 'undefined')
			return style;

		if (state.list) { // List marker (*, +, -, 1., etc)
			state.list = null;
			return list;
		}

		var ch = stream.next();

		if (ch === '\\') {
			stream.next();
			return getType(state);
		}

		// Matches link titles present on next line
		if (state.linkTitle) {
			state.linkTitle = false;
			var matchCh = ch;
			if (ch === '(') {
				matchCh = ')';
			}
			matchCh = (matchCh + '').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
			var regex = '^\\s*(?:[^' + matchCh + '\\\\]+|\\\\\\\\|\\\\.)' + matchCh;
			if (stream.match(new RegExp(regex), true)) {
				return linkhref;
			}
		}

		// If this block is changed, it may need to be updated in GFM mode
		if (ch === '`') {
			var t = getType(state);
			var before = stream.pos;
			stream.eatWhile('`');
			var difference = 1 + stream.pos - before;
			if (!state.code) {
				codeDepth = difference;
				state.code = true;
				return getType(state);
			} else {
				if (difference === codeDepth) { // Must be exact
					state.code = false;
					return t;
				}
				return getType(state);
			}
		} else if (state.code) {
			return getType(state);
		}

		if (ch === '!' && stream.match(/\[[^\]]*\] ?(?:\(|\[)/, false)) {
			stream.match(/\[[^\]]*\]/);
			state.inline = state.f = linkHref;
			return image;
		}

		if (ch === '[' && stream.match(/.*\](\(| ?\[)/, false)) {
			state.linkText = true;
			return getType(state);
		}

		if (ch === ']' && state.linkText) {
			var type = getType(state);
			state.linkText = false;
			state.inline = state.f = linkHref;
			return type;
		}

		if (ch === '<' && stream.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, true)) {
			return switchInline(stream, state, inlineElement(linkinline, '>'));
		}

		if (ch === '<' && stream.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, true)) {
			return switchInline(stream, state, inlineElement(linkemail, '>'));
		}

		if (ch === '<' && stream.match(/^\w/, false)) {
			if (stream.string.indexOf(">") != -1) {
				var atts = stream.string.substring(1, stream.string.indexOf(">"));
				if (/markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(atts)) {
					state.md_inside = true;
				}
			}
			stream.backUp(1);
			return switchBlock(stream, state, htmlBlock);
		}

		if (ch === '<' && stream.match(/^\/\w*?>/)) {
			state.md_inside = false;
			return "tag";
		}

		var ignoreUnderscore = false;
		if (!modeCfg.underscoresBreakWords) {
			if (ch === '_' && stream.peek() !== '_' && stream.match(/(\w)/, false)) {
				var prevPos = stream.pos - 2;
				if (prevPos >= 0) {
					var prevCh = stream.string.charAt(prevPos);
					if (prevCh !== '_' && prevCh.match(/(\w)/, false)) {
						ignoreUnderscore = true;
					}
				}
			}
		}
		var t = getType(state);
		if (ch === '*' || (ch === '_' && !ignoreUnderscore)) {
			if (state.strong === ch && stream.eat(ch)) { // Remove STRONG
				state.strong = false;
				return t;
			} else if (!state.strong && stream.eat(ch)) { // Add STRONG
				state.strong = ch;
				return getType(state);
			} else if (state.em === ch) { // Remove EM
				state.em = false;
				return t;
			} else if (!state.em) { // Add EM
				state.em = ch;
				return getType(state);
			}
		} else if (ch === ' ') {
			if (stream.eat('*') || stream.eat('_')) { // Probably surrounded by spaces
				if (stream.peek() === ' ') { // Surrounded by spaces, ignore
					return getType(state);
				} else { // Not surrounded by spaces, back up pointer
					stream.backUp(1);
				}
			}
		}

		return getType(state);
	}

	function linkHref(stream, state) {
		// Check if space, and return NULL if so (to avoid marking the space)
		if (stream.eatSpace()) {
			return null;
		}
		var ch = stream.next();
		if (ch === '(' || ch === '[') {
			return switchInline(stream, state, inlineElement(linkhref, ch === '(' ? ')' : ']'));
		}
		return 'error';
	}

	function footnoteLink(stream, state) {
		if (stream.match(/^[^\]]*\]:/, true)) {
			state.f = footnoteUrl;
			return linktext;
		}
		return switchInline(stream, state, inlineNormal);
	}

	function footnoteUrl(stream, state) {
		// Check if space, and return NULL if so (to avoid marking the space)
		if (stream.eatSpace()) {
			return null;
		}
		// Match URL
		stream.match(/^[^\s]+/, true);
		// Check for link title
		if (stream.peek() === undefined) { // End of line, set flag to check next line
			state.linkTitle = true;
		} else { // More content on line, check if link title
			stream.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, true);
		}
		state.f = state.inline = inlineNormal;
		return linkhref;
	}

	var savedInlineRE = [];

	function inlineRE(endChar) {
		if (!savedInlineRE[endChar]) {
			// Escape endChar for RegExp (taken from http://stackoverflow.com/a/494122/526741)
			endChar = (endChar + '').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
			// Match any non-endChar, escaped character, as well as the closing
			// endChar.
			savedInlineRE[endChar] = new RegExp('^(?:[^\\\\]|\\\\.)*?(' + endChar + ')');
		}
		return savedInlineRE[endChar];
	}

	function inlineElement(type, endChar, next) {
		next = next || inlineNormal;
		return function(stream, state) {
			stream.match(inlineRE(endChar));
			state.inline = state.f = next;
			return type;
		};
	}

	return {
		startState: function() {
			prevLineHasContent = false;
			thisLineHasContent = false;
			return {
				f: blockNormal,

				block: blockNormal,
				htmlState: CodeMirror.startState(htmlMode),
				indentation: 0,

				inline: inlineNormal,
				text: handleText,

				linkText: false,
				linkTitle: false,
				em: false,
				strong: false,
				header: false,
				list: false,
				quote: false
			};
		},

		copyState: function(s) {
			return {
				f: s.f,

				block: s.block,
				htmlState: CodeMirror.copyState(htmlMode, s.htmlState),
				indentation: s.indentation,

				localMode: s.localMode,
				localState: s.localMode ? CodeMirror.copyState(s.localMode, s.localState) : null,

				inline: s.inline,
				text: s.text,
				linkTitle: s.linkTitle,
				em: s.em,
				strong: s.strong,
				header: s.header,
				list: s.list,
				quote: s.quote,
				md_inside: s.md_inside
			};
		},

		token: function(stream, state) {
			if (stream.sol()) {
				if (stream.match(/^\s*$/, true)) {
					prevLineHasContent = false;
					return blankLine(state);
				} else {
					if (thisLineHasContent) {
						prevLineHasContent = true;
						thisLineHasContent = false;
					}
					thisLineHasContent = true;
				}

				// Reset state.header
				state.header = false;

				// Reset state.code
				state.code = false;

				state.f = state.block;
				var indentation = stream.match(/^\s*/, true)[0].replace(/\t/g, '    ').length;
				var difference = Math.floor((indentation - state.indentation) / 4) * 4;
				if (difference > 4) difference = 4;
				var adjustedIndentation = state.indentation + difference;
				state.indentationDiff = adjustedIndentation - state.indentation;
				state.indentation = adjustedIndentation;
				if (indentation > 0) return null;
			}
			return state.f(stream, state);
		},

		blankLine: blankLine,

		getType: getType
	};

}, "xml");

CodeMirror.defineMIME("text/x-markdown", "markdown");
//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//				A A L
//				T C A
//				T K B
//
//   <http://www.attacklab.net/>
//
//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//
//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//
//
// Showdown namespace
//
var Showdown = {
		extensions: {}
	},
	forEach = Showdown.forEach = function(a, b) {
		if (typeof a.forEach == "function") a.forEach(b);
		else {
			var c, d = a.length;
			for (c = 0; c < d; c++) b(a[c], c, a)
		}
	},
	stdExtName = function(a) {
		return a.replace(/[_-]||\s/g, "").toLowerCase()
	};
Showdown.converter = function(a) {
	var b, c, d, e = 0,
		f = [],
		g = [];
	if (typeof module != "undefind" && typeof exports != "undefined" && typeof require != "undefind") {
		var h = require("fs");
		if (h) {
			var i = h.readdirSync((__dirname || ".") + "/extensions").filter(function(a) {
				return~ a.indexOf(".js")
			}).map(function(a) {
				return a.replace(/\.js$/, "")
			});
			Showdown.forEach(i, function(a) {
				var b = stdExtName(a);
				Showdown.extensions[b] = require("./extensions/" + a)
			})
		}
	}
	this.makeHtml = function(a) {
		return b = {}, c = {}, d = [], a = a.replace(/~/g, "~T"), a = a.replace(/\$/g, "~D"), a = a.replace(/\r\n/g, "\n"), a = a.replace(/\r/g, "\n"), a = "\n\n" + a + "\n\n", a = M(a), a = a.replace(/^[ \t]+$/mg, ""), Showdown.forEach(f, function(b) {
			a = k(b, a)
		}), a = z(a), a = m(a), a = l(a), a = o(a), a = K(a), a = a.replace(/~D/g, "$$"), a = a.replace(/~T/g, "~"), Showdown.forEach(g, function(b) {
			a = k(b, a)
		}), a
	};
	if (a && a.extensions) {
		var j = this;
		Showdown.forEach(a.extensions, function(a) {
			typeof a == "string" && (a = Showdown.extensions[stdExtName(a)]);
			if (typeof a != "function") throw "Extension '" + a + "' could not be loaded.  It was either not found or is not a valid extension.";
			Showdown.forEach(a(j), function(a) {
				a.type ? a.type === "language" || a.type === "lang" ? f.push(a) : (a.type === "output" || a.type === "html") && g.push(a) : g.push(a)
			})
		})
	}
	var k = function(a, b) {
			if (a.regex) {
				var c = new RegExp(a.regex, "g");
				return b.replace(c, a.replace)
			}
			if (a.filter) return a.filter(b)
		},
		l = function(a) {
			return a += "~0", a = a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm, function(a, d, e, f, g) {
				return d = d.toLowerCase(), b[d] = G(e), f ? f + g : (g && (c[d] = g.replace(/"/g, "&quot;")), "")
			}), a = a.replace(/~0/, ""), a
		},
		m = function(a) {
			a = a.replace(/\n/g, "\n\n");
			var b = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside",
				c = "p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";
			return a = a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm, n), a = a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm, n), a = a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g, n), a = a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g, n), a = a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g, n), a = a.replace(/\n\n/g, "\n"), a
		},
		n = function(a, b) {
			var c = b;
			return c = c.replace(/\n\n/g, "\n"), c = c.replace(/^\n/, ""), c = c.replace(/\n+$/g, ""), c = "\n\n~K" + (d.push(c) - 1) + "K\n\n", c
		},
		o = function(a) {
			a = v(a);
			var b = A("<hr />");
			return a = a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm, b), a = a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm, b), a = a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm, b), a = x(a), a = y(a), a = E(a), a = m(a), a = F(a), a
		},
		p = function(a) {
			return a = B(a), a = q(a), a = H(a), a = t(a), a = r(a), a = I(a), a = G(a), a = D(a), a = a.replace(/  +\n/g, " <br />\n"), a
		},
		q = function(a) {
			var b = /(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;
			return a = a.replace(b, function(a) {
				var b = a.replace(/(.)<\/?code>(?=.)/g, "$1`");
				return b = N(b, "\\`*_"), b
			}), a
		},
		r = function(a) {
			return a = a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, s), a = a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, s), a = a.replace(/(\[([^\[\]]+)\])()()()()()/g, s), a
		},
		s = function(a, d, e, f, g, h, i, j) {
			j == undefined && (j = "");
			var k = d,
				l = e,
				m = f.toLowerCase(),
				n = g,
				o = j;
			if (n == "") {
				m == "" && (m = l.toLowerCase().replace(/ ?\n/g, " ")), n = "#" + m;
				if (b[m] != undefined) n = b[m], c[m] != undefined && (o = c[m]);
				else {
					if (!(k.search(/\(\s*\)$/m) > -1)) return k;
					n = ""
				}
			}
			n = N(n, "*_");
			var p = '<a href="' + n + '"';
			return o != "" && (o = o.replace(/"/g, "&quot;"), o = N(o, "*_"), p += ' title="' + o + '"'), p += " target='_blank'>" + l + "</a>", p
		},
		t = function(a) {
			return a = a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g, u), a = a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g, u), a
		},
		u = function(a, d, e, f, g, h, i, j) {
			var k = d,
				l = e,
				m = f.toLowerCase(),
				n = g,
				o = j;
			o || (o = "");
			if (n == "") {
				m == "" && (m = l.toLowerCase().replace(/ ?\n/g, " ")), n = "#" + m;
				if (b[m] == undefined) return k;
				n = b[m], c[m] != undefined && (o = c[m])
			}
			l = l.replace(/"/g, "&quot;"), n = N(n, "*_");
			var p = '<img class="img" src="' + n + '" alt="' + l + '"';
			return o = o.replace(/"/g, "&quot;"), o = N(o, "*_"), p += ' title="' + o + '"', p += " />", p
		},
		v = function(a) {
			function b(a) {
				return a.replace(/[^\w]/g, "").toLowerCase()
			}
			return a = a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm, function(a, c) {
				return A('<h1 id="' + b(c) + '">' + p(c) + "</h1>")
			}), a = a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm, function(a, c) {
				return A('<h2 id="' + b(c) + '">' + p(c) + "</h2>")
			}), a = a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm, function(a, c, d) {
				var e = c.length;
				return A("<h" + e + ' id="' + b(d) + '">' + p(d) + "</h" + e + ">")
			}), a
		},
		w, x = function(a) {
			a += "~0";
			var b = /^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;
			return e ? a = a.replace(b, function(a, b, c) {
				var d = b,
					e = c.search(/[*+-]/g) > -1 ? "ul" : "ol";
				d = d.replace(/\n{2,}/g, "\n\n\n");
				var f = w(d);
				return f = f.replace(/\s+$/, ""), f = "<" + e + ">" + f + "</" + e + ">\n", f
			}) : (b = /(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g, a = a.replace(b, function(a, b, c, d) {
				var e = b,
					f = c,
					g = d.search(/[*+-]/g) > -1 ? "ul" : "ol",
					f = f.replace(/\n{2,}/g, "\n\n\n"),
					h = w(f);
				return h = e + "<" + g + ">\n" + h + "</" + g + ">\n", h
			})), a = a.replace(/~0/, ""), a
		};
	w = function(a) {
		return e++, a = a.replace(/\n{2,}$/, "\n"), a += "~0", a = a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm, function(a, b, c, d, e) {
			var f = e,
				g = b,
				h = c;
			return g || f.search(/\n{2,}/) > -1 ? f = o(L(f)) : (f = x(L(f)), f = f.replace(/\n$/, ""), f = p(f)), "<li>" + f + "</li>\n"
		}), a = a.replace(/~0/g, ""), e--, a
	};
	var y = function(a) {
			return a += "~0", a = a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g, function(a, b, c) {
				var d = b,
					e = c;
				return d = C(L(d)), d = M(d), d = d.replace(/^\n+/g, ""), d = d.replace(/\n+$/g, ""), d = "<pre><code>" + d + "\n</code></pre>", A(d) + e
			}), a = a.replace(/~0/, ""), a
		},
		z = function(a) {
			return a += "~0", a = a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g, function(a, b, c) {
				var d = b,
					e = c;
				return e = C(e), e = M(e), e = e.replace(/^\n+/g, ""), e = e.replace(/\n+$/g, ""), e = "<pre><code" + (d ? ' class="' + d + '"' : "") + ">" + e + "\n</code></pre>", A(e)
			}), a = a.replace(/~0/, ""), a
		},
		A = function(a) {
			return a = a.replace(/(^\n+|\n+$)/g, ""), "\n\n~K" + (d.push(a) - 1) + "K\n\n"
		},
		B = function(a) {
			return a = a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm, function(a, b, c, d, e) {
				var f = d;
				return f = f.replace(/^([ \t]*)/g, ""), f = f.replace(/[ \t]*$/g, ""), f = C(f), b + "<code>" + f + "</code>"
			}), a
		},
		C = function(a) {
			return a = a.replace(/&/g, "&amp;"), a = a.replace(/</g, "&lt;"), a = a.replace(/>/g, "&gt;"), a = N(a, "*_{}[]\\", !1), a
		},
		D = function(a) {
			return a = a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, "<strong>$2</strong>"), a = a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, "<em>$2</em>"), a
		},
		E = function(a) {
			return a = a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm, function(a, b) {
				var c = b;
				return c = c.replace(/^[ \t]*>[ \t]?/gm, "~0"), c = c.replace(/~0/g, ""), c = c.replace(/^[ \t]+$/gm, ""), c = o(c), c = c.replace(/(^|\n)/g, "$1  "), c = c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(a, b) {
					var c = b;
					return c = c.replace(/^  /mg, "~0"), c = c.replace(/~0/g, ""), c
				}), A("<blockquote>\n" + c + "\n</blockquote>")
			}), a
		},
		F = function(a) {
			a = a.replace(/^\n+/g, ""), a = a.replace(/\n+$/g, "");
			var b = a.split(/\n{2,}/g),
				c = [],
				e = b.length;
			for (var f = 0; f < e; f++) {
				var g = b[f];
				g.search(/~K(\d+)K/g) >= 0 ? c.push(g) : g.search(/\S/) >= 0 && (g = p(g), g = g.replace(/^([ \t]*)/g, "<p>"), g += "</p>", c.push(g))
			}
			e = c.length;
			for (var f = 0; f < e; f++)
				while (c[f].search(/~K(\d+)K/) >= 0) {
					var h = d[RegExp.$1];
					h = h.replace(/\$/g, "$$$$"), c[f] = c[f].replace(/~K\d+K/, h)
				}
			return c.join("\n\n")
		},
		G = function(a) {
			return a = a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), a = a.replace(/<(?![a-z\/?\$!])/gi, "&lt;"), a
		},
		H = function(a) {
			return a = a.replace(/\\(\\)/g, O), a = a.replace(/\\([`*_{}\[\]()>#+-.!])/g, O), a
		},
		I = function(a) {
			return a = a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi, '<a href="$1">$1</a>'), a = a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, function(a, b) {
				return J(K(b))
			}), a
		},
		J = function(a) {
			var b = [

				function(a) {
					return "&#" + a.charCodeAt(0) + ";"
				},
				function(a) {
					return "&#x" + a.charCodeAt(0).toString(16) + ";"
				},
				function(a) {
					return a
				}
			];
			return a = "mailto:" + a, a = a.replace(/./g, function(a) {
				if (a == "@") a = b[Math.floor(Math.random() * 2)](a);
				else if (a != ":") {
					var c = Math.random();
					a = c > .9 ? b[2](a) : c > .45 ? b[1](a) : b[0](a)
				}
				return a
			}), a = '<a href="' + a + '">' + a + "</a>", a = a.replace(/">.+:/g, '">'), a
		},
		K = function(a) {
			return a = a.replace(/~E(\d+)E/g, function(a, b) {
				var c = parseInt(b);
				return String.fromCharCode(c)
			}), a
		},
		L = function(a) {
			return a = a.replace(/^(\t|[ ]{1,4})/gm, "~0"), a = a.replace(/~0/g, ""), a
		},
		M = function(a) {
			return a = a.replace(/\t(?=\t)/g, "    "), a = a.replace(/\t/g, "~A~B"), a = a.replace(/~B(.+?)~A/g, function(a, b, c) {
				var d = b,
					e = 4 - d.length % 4;
				for (var f = 0; f < e; f++) d += " ";
				return d
			}), a = a.replace(/~A/g, "    "), a = a.replace(/~B/g, ""), a
		},
		N = function(a, b, c) {
			var d = "([" + b.replace(/([\[\]\\])/g, "\\$1") + "])";
			c && (d = "\\\\" + d);
			var e = new RegExp(d, "g");
			return a = a.replace(e, O), a
		},
		O = function(a, b) {
			var c = b.charCodeAt(0);
			return "~E" + c + "E"
		}
}, typeof module != "undefined" && (module.exports = Showdown), typeof define == "function" && define.amd && define("showdown", function() {
	return Showdown
});

(function($, ShowDown, CodeMirror) {
	"use strict";

	$(function() {

		if (!document.getElementById('entry-markdown'))
			return;

		//var delay;
		var converter = new ShowDown.converter(),
			editor = CodeMirror.fromTextArea(document.getElementById('entry-markdown'), {
				mode: 'markdown',
				tabMode: 'indent',
				lineWrapping: true
			});

		// Really not the best way to do things as it includes Markdown formatting along with words
		function updateWordCount() {
			var wordCount = document.getElementsByClassName('entry-word-count')[0],
				editorValue = editor.getValue();

			if (editorValue.length) {
				wordCount.innerHTML = editorValue.match(/\S+/g).length + ' palabras';
			}
		}

		function updateImagePlaceholders(content) {
			var imgPlaceholders = $(document.getElementsByClassName('rendered-markdown')[0]).find('p').filter(function() {
				return (/^(?:\{<(.*?)>\})?!(?:\[([^\n\]]*)\])(?:\(([^\n\]]*)\))?$/gim).test($(this).text());
			});

			$(imgPlaceholders).each(function( index ) {

				var elemindex = index,
					self = $(this),
					altText = self.text();

				(function(){

                    var csrf_token = $('input[name="_token"]').val();
                    self.dropzone({
                        headers: {
                            'X-CSRF-Token': csrf_token
                        },
						url: "http://" + window.location.hostname + "/admin/editorUpload",
						success: function( file, response ){
							var holderP = $(file.previewElement).closest("p"),

								// Update the image path in markdown
								imgHolderMardown = $(".CodeMirror-code").find('pre').filter(function() {
							    	return (/^(?:\{<(.*?)>\})?!(?:\[([^\n\]]*)\])(?:\(([^\n\]]*)\))?$/gim).test(self.text()) && (self.find("span").length === 0);
								}),

								// Get markdown
								editorOrigVal = editor.getValue(),
								nth = 0,
								newMarkdown = editorOrigVal.replace(/^(?:\{<(.*?)>\})?!(?:\[([^\n\]]*)\])(:\(([^\n\]]*)\))?$/gim, function (match, i, original){
									nth++;
									return (nth === (elemindex+1)) ? (match + "(" + response.path +")") : match;
								});
								editor.setValue( newMarkdown );

							// Set image instead of placeholder
							holderP.removeClass("dropzone").html('<img class="img" src="'+ response.path +'"/>');
						}
					}).addClass("dropzone");
				}());
			})
		}

		function updatePreview() {
			var preview = document.getElementsByClassName('rendered-markdown')[0];
			preview.innerHTML = converter.makeHtml(editor.getValue());

			updateImagePlaceholders(preview.innerHTML);
			updateWordCount();
		}

		$(document).ready(function() {
			$('.entry-markdown header, .entry-preview header').click(function(e) {
				$('.entry-markdown, .entry-preview').removeClass('active');
				$(e.target).closest('section').addClass('active');
			});

			editor.on("change", function() {
				updatePreview();
			});

			updatePreview();

			// Sync scrolling
			function syncScroll(e) {
				// vars
				var $codeViewport = $(e.target),
					$previewViewport = $('.entry-preview-content'),
					$codeContent = $('.CodeMirror-sizer'),
					$previewContent = $('.rendered-markdown'),

					// calc position
					codeHeight = $codeContent.height() - $codeViewport.height(),
					previewHeight = $previewContent.height() - $previewViewport.height(),
					ratio = previewHeight / codeHeight,
					previewPostition = $codeViewport.scrollTop() * ratio;

				// apply new scroll
				$previewViewport.scrollTop(previewPostition);
			}

			// TODO: Debounce
			$('.CodeMirror-scroll').on('scroll', syncScroll);

			// Shadow on Markdown if scrolled
			$('.CodeMirror-scroll').scroll(function() {
				if ($('.CodeMirror-scroll').scrollTop() > 10) {
					$('.entry-markdown').addClass('scrolling');
				} else {
					$('.entry-markdown').removeClass('scrolling');
				}
			});
			// Shadow on Preview if scrolled
			$('.entry-preview-content').scroll(function() {
				if ($('.entry-preview-content').scrollTop() > 10) {
					$('.entry-preview').addClass('scrolling');
				} else {
					$('.entry-preview').removeClass('scrolling');
				}
			});

		});
	});
}(jQuery, Showdown, CodeMirror));

$(function(){

    var $body = $('body');

    /* Autosize */
    var sizeable = $('.autosize');
    if(sizeable.length){
        autosize(sizeable);
    }

    /* Medium Editor */
    var editable = $('.editable');
    if(editable.length){
        var editor = new MediumEditor('.editable', {
            toolbar: {
                buttons: ['bold', 'italic', 'underline', 'orderedlist', 'unorderedlist', 'anchor', 'h1', 'h2', 'quote', 'code']
            },
            buttonLabels: 'fontawesome',
            targetBlank: true,
            placeholder: {
                text: 'Empieza a escribir algo genial...'
            },
            extensions: {
                'code':  new MediumButton({label:'<i class="fa fa-code fa-lg"></i>', start:'<pre><code>', end:'</code></pre>'})
            }
        });

        var csrf_token = $('input[name="_token"]').val();
        editable.mediumInsert({
            editor: editor,
            addons: {
                images: {
                    label: '<span class="typcn typcn-camera"></span>',
                    captionPlaceholder: 'Escribe un pie de foto (opcional)',
                    fileUploadOptions: { // (object) File upload configuration. See https://github.com/blueimp/jQuery-File-Upload/wiki/Options
                        headers: {
                            'X-CSRF-Token': csrf_token
                        },
                        url: 'http://' + window.location.hostname + '/admin/editorUpload', // (string) A relative path to an upload script
                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i, // (regexp) Regexp of accepted file types
                        dataType: 'json'
                        // done: function (e, data) {
                        //
                        // }
                    },
                    deleteScript: 'http://' + window.location.hostname + '/admin/editorDelete',
                    deleteMethod: 'POST',
                    fileDeleteOptions: {
                        headers: {
                            'X-CSRF-TOKEN': csrf_token
                        }
                        // deleteScript: 'http://' + window.location.hostname + '/admin/editorDelete'
                    }
                },
                embeds: {
                    label: '<span class="typcn typcn-social-youtube"></span>',
                    placeholder: 'Pega un link de Youtube, Vimeo, Facebook, Twitter o Instagram y presiona Enter',
                    captionPlaceholder: 'Escribe una leyenda (opcional)'
                }
            }
        });
    }

    /* Tabs */
    var tabs = $('.tabs');
    if(tabs.length){
        var tabs = tabs.find('.tab').find('.link'),
            tabbed = $('.tabbed');

        if(tabbed.length){
            tabs.click(function(e){
                e.preventDefault();
                var $this = $(this),
                    tab_id = $this.data('tab');
                tabs.removeClass('active');
                $this.addClass('active');
                tabbed.removeClass('active');
                tabbed.filter('#' + tab_id).addClass('active');
            });
        }
    }

    /* File preview */
    var file_img = $('.file').filter('.img');
    if(file_img.length){

        function getImgPreview(input) {
            var $preview = $('<div>', {
                    class: 'preview'
                }),
                style = 'background: url(%data%) no-repeat center center; background-size: cover;';
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    var background = style.replace('%data%', e.target.result);
                    $preview.attr('style', background);
                }

                reader.readAsDataURL(input.files[0]);

                return $preview;
            }
        }

        file_img.change(function(){
            var $this = $(this),
                preview = getImgPreview(this),
                existent = $this.next('.preview');
            if(existent.length){
                existent.remove();
            }
            $this.after(preview);
        });
    }

    /* Select Dropdowns */
    var select = $('.select');
    if(select.length){
        var select_wrap = $('<div>', {
                class: 'select-styled'
            });

        select.wrap(select_wrap).before($('<span>', {
            class: 'typcn typcn-arrow-sorted-down'
        }));
    }

    /* Checkbox Switch */
    var onoffswitch = $('.onoffswitch');
    if(onoffswitch.length){
        $.each(onoffswitch, function(){
            var $this = $(this);
            var onoffswitch_wrap = $('<div>', {
                    class: 'onoffswitch-styled'
                });
            $this.wrap(onoffswitch_wrap).after($('<label>', {
                class: 'onoffswitch-label',
                for: $this.attr('id')
            }));
        });
        // var onoffswitch_wrap = $('<div>', {
        //         class: 'onoffswitch-styled'
        //     });
        // onoffswitch.wrap(onoffswitch_wrap).after($('<label>', {
        //     class: 'onoffswitch-label',
        //     for: onoffswitch.attr('id')
        // }));
    }

    // Datepicker

    // Language
    $.fn.datepicker.dates['es'] = {
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy",
        clear: "Borrar",
        // format: "mm/dd/yyyy",
        titleFormat: "MM yyyy",
        weekStart: 0
    };
    // Datepicker init
    $('.datepicker').datepicker({
        format: "yyyy-mm-dd",
        startDate: new Date().format('yyyy-mm-dd'),
        todayBtn: "linked",
        language: "es",
        autoclose: true,
        todayHighlight: true
    });

    /* Select2 */
    var selects2 = $('.select2');
    if(selects2.length){
        selects2.select2({
            width: '100%',
            tags: true,
            tokenSeparators: [","],
            "language": {
                "noResults": function(){
                    return "Aún no hay etiquetas, escribe una...";
                }
            },
            escapeMarkup: function (markup) {
                return markup;
            }
        });
    }

    /* Drop */
    var drop_trigger = $('.drop-trigger');
    if(drop_trigger.length){
        var drops = $('.drop');
        $('.drop-trigger').on('click', function(e){
            e.preventDefault();
            var $this = $(this),
                drop_id = $this.data('drop');
            drops.filter('#' + drop_id).toggleClass('visible');
        });

        $(document).on('click', function(e){
            var $target = $(e.target);
            if(!$target.hasClass('drop-trigger') && !$target.closest('.drop').length && !$target.hasClass('select2-selection__choice__remove') && !$target.closest('.select2-container').length)
            {
                drops.removeClass('visible');
            }
        });

        $(document).on('keyup', function(e){
            if (e.which == 27){
                drops.removeClass('visible');
            }
        });
    }

    /* Notifications */
    var notifications = $('.notification');
    if(notifications.length){
        setTimeout(function(){
            $.each(notifications, function(i, e){
                var delay_time = 5000 * i,
                    $this = $(this);
                setTimeout(function(){
                    $this.addClass('go-away').delay(800).slideUp(300);
                }, delay_time);
            });
        }, 5800);
    }

});
