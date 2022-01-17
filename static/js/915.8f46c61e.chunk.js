"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[915],{9518:function(t,n,e){e.d(n,{A:function(){return a}});var r=e(3433),i=e(1875),a=function(t,n){var e=new Map,i=t,a=function(t,n){Array.isArray(t)?(0,r.Z)(t).forEach((function(t){n[t]=i[t]})):n[t]=Object.assign({},i)},o=function(t,n){return e.has(t)||(e.set(t,n),a(n,t)),function(){e.has(t)&&e.delete(t)}};return{Provider:function(t,n){var r=t.state;return i=r,e.forEach(a),n},Consumer:function(t,e){return n(o,e[0])},injectProps:function(t,n){var r=t.prototype,i=r.connectedCallback,a=r.disconnectedCallback;r.connectedCallback=function(){if(o(this,n),i)return i.call(this)},r.disconnectedCallback=function(){e.delete(this),a&&a.call(this)}}}}({historyType:"browser",location:{pathname:"",query:{},key:""},titleSuffix:"",root:"/",routeViewsUpdated:function(){}},(function(t,n){return(0,i.h)("context-consumer",{subscribe:t,renderer:n})}))},8620:function(t,n,e){e.d(n,{a:function(){return u},b:function(){return l},c:function(){return v},d:function(){return a},e:function(){return s},f:function(){return c},h:function(){return i},l:function(){return d},s:function(){return o},v:function(){return p}});var r=e(9439),i=function(t,n){return new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t)},a=function(t,n){return i(t,n)?t.substr(n.length):t},o=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},u=function(t){return"/"===t.charAt(0)?t:"/"+t},c=function(t){return"/"===t.charAt(0)?t.substr(1):t},s=function(t){var n=t.pathname,e=t.search,r=t.hash,i=n||"/";return e&&"?"!==e&&(i+="?"===e.charAt(0)?e:"?".concat(e)),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#".concat(r)),i},h=function(t){return"/"===t.charAt(0)},l=function(t){return Math.random().toString(36).substr(2,t)},f=function(t,n){for(var e=n,r=e+1,i=t.length;r<i;e+=1,r+=1)t[e]=t[r];t.pop()},p=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));var r=typeof n;if(r!==typeof e)return!1;if("object"===r){var i=n.valueOf(),a=e.valueOf();if(i!==n||a!==e)return t(i,a);var o=Object.keys(n),u=Object.keys(e);return o.length===u.length&&o.every((function(r){return t(n[r],e[r])}))}return!1},d=function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&p(t.state,n.state)},v=function(t,n,e,i){var a,o;"string"===typeof t?(a=function(t){var n=t||"/",e="",r="",i=n.indexOf("#");-1!==i&&(r=n.substr(i),n=n.substr(0,i));var a=n.indexOf("?");return-1!==a&&(e=n.substr(a),n=n.substr(0,a)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r,query:{},key:""}}(t),void 0!==n&&(a.state=n)):((a=Object.assign({pathname:""},t)).search&&"?"!==a.search.charAt(0)&&(a.search="?"+a.search),a.hash&&"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash),void 0!==n&&void 0===a.state&&(a.state=n));try{a.pathname=decodeURI(a.pathname)}catch(u){throw u instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):u}return a.key=e,i?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=function(t){var n,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=e&&e.split("/")||[],i=0,a=t&&t.split("/")||[],o=t&&h(t),u=e&&h(e),c=o||u;if(t&&h(t)?r=a:a.length&&(r.pop(),r=r.concat(a)),!r.length)return"/";if(r.length){var s=r[r.length-1];n="."===s||".."===s||""===s}else n=!1;for(var l=r.length;l>=0;l--){var p=r[l];"."===p?f(r,l):".."===p?(f(r,l),i++):i&&(f(r,l),i--)}if(!c)for(;i--;i)r.unshift("..");!c||""===r[0]||r[0]&&h(r[0])||r.unshift("");var d=r.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d}(a.pathname,i.pathname)):a.pathname=i.pathname:a.pathname||(a.pathname="/"),a.query=(o=a.search||"")?(/^[?#]/.test(o)?o.slice(1):o).split("&").reduce((function(t,n){var e=n.split("="),i=(0,r.Z)(e,2),a=i[0],o=i[1];return t[a]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t}),{}):{},a}},8792:function(t,n,e){e.d(n,{a:function(){return x},m:function(){return k}});var r=e(3878),i=e(9199),a=e(181),o=e(5267);function u(t){return(0,r.Z)(t)||(0,i.Z)(t)||(0,a.Z)(t)||(0,o.Z)()}var c=e(8620),s=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g"),h=function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")},l=function(t){return t.replace(/([=!:$/()])/g,"\\$1")},f=function(t){return t&&t.sensitive?"":"i"},p=function(t,n,e){for(var r=[],i=0;i<t.length;i++)r.push(m(t[i],n,e).source);return new RegExp("(?:"+r.join("|")+")",f(e))},d=function(t,n,e){return v(function(t,n){for(var e,r=[],i=0,a=0,o="",u=n&&n.delimiter||"/",c=n&&n.delimiters||"./",f=!1;null!==(e=s.exec(t));){var p=e[0],d=e[1],v=e.index;if(o+=t.slice(a,v),a=v+p.length,d)o+=d[1],f=!0;else{var m="",y=t[a],g=e[2],b=e[3],k=e[4],x=e[5];if(!f&&o.length){var w=o.length-1;c.indexOf(o[w])>-1&&(m=o[w],o=o.slice(0,w))}o&&(r.push(o),o="",f=!1);var A=""!==m&&void 0!==y&&y!==m,O="+"===x||"*"===x,j="?"===x||"*"===x,C=m||u,E=b||k;r.push({name:g||i++,prefix:m,delimiter:C,optional:j,repeat:O,partial:A,pattern:E?l(E):"[^"+h(C)+"]+?"})}}return(o||a<t.length)&&r.push(o+t.substr(a)),r}(t,e),n,e)},v=function(t,n,e){for(var r=(e=e||{}).strict,i=!1!==e.end,a=h(e.delimiter||"/"),o=e.delimiters||"./",u=[].concat(e.endsWith||[]).map(h).concat("$").join("|"),c="",s=!1,l=0;l<t.length;l++){var p=t[l];if("string"===typeof p)c+=h(p),s=l===t.length-1&&o.indexOf(p[p.length-1])>-1;else{var d=h(p.prefix||""),v=p.repeat?"(?:"+p.pattern+")(?:"+d+"(?:"+p.pattern+"))*":p.pattern;n&&n.push(p),p.optional?p.partial?c+=d+"("+v+")?":c+="(?:"+d+"("+v+"))?":c+=d+"("+v+")"}}return i?(r||(c+="(?:"+a+")?"),c+="$"===u?"$":"(?="+u+")"):(r||(c+="(?:"+a+"(?="+u+"))?"),s||(c+="(?="+a+"|"+u+")")),new RegExp("^"+c,f(e))},m=function(t,n,e){return t instanceof RegExp?function(t,n){if(!n)return t;var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return t}(t,n):Array.isArray(t)?p(t,n,e):d(t,n,e)},y=0,g={},b=function(t,n){var e="".concat(n.end).concat(n.strict),r=g[e]||(g[e]={}),i=JSON.stringify(t);if(r[i])return r[i];var a=[],o={re:m(t,a,n),keys:a};return y<1e4&&(r[i]=o,y+=1),o},k=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"===typeof n&&(n={path:n});var e=n,r=e.path,i=void 0===r?"/":r,a=e.exact,o=void 0!==a&&a,c=e.strict,s=void 0!==c&&c,h=b(i,{end:o,strict:s}),l=h.re,f=h.keys,p=l.exec(t);if(!p)return null;var d=u(p),v=d[0],m=d.slice(1),y=t===v;return o&&!y?null:{path:i,url:"/"===i&&""===v?"/":v,isExact:y,params:f.reduce((function(t,n,e){return t[n.name]=m[e],t}),{})}},x=function(t,n){return null==t&&null==n||null!=n&&(t&&n&&t.path===n.path&&t.url===n.url&&(0,c.v)(t.params,n.params))}},7915:function(t,n,e){e.r(n),e.d(n,{stencil_route:function(){return l}});var r=e(5861),i=e(5671),a=e(3144),o=e(7757),u=e.n(o),c=e(1875),s=e(8792),h=e(9518),l=function(){function t(n){(0,i.Z)(this,t),(0,c.r)(this,n),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}return(0,a.Z)(t,[{key:"computeMatch",value:function(t){var n=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!n)return this.previousMatch=this.match,this.match=(0,s.m)(t.pathname,{path:this.url,exact:this.exact,strict:!0})}},{key:"loadCompleted",value:function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={},this.history&&this.history.location.hash?n={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(n={scrollTopOffset:this.scrollTopOffset}),"function"===typeof this.componentUpdated?this.componentUpdated(n):this.match&&!(0,s.a)(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(n);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadCompleted();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){var t=(0,r.Z)(u().mark((function t(){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadCompleted();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.match||!this.history)return null;var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender)return this.routeRender(Object.assign({},t,{component:this.component}));if(this.component){var n=this.component;return(0,c.h)(n,Object.assign({},t))}}},{key:"el",get:function(){return(0,c.g)(this)}}],[{key:"watchers",get:function(){return{location:["computeMatch"]}}}]),t}();h.A.injectProps(l,["location","history","historyType","routeViewsUpdated"]),l.style="stencil-route.inactive{display:none}"}}]);
//# sourceMappingURL=915.8f46c61e.chunk.js.map