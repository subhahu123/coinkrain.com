
          window.__NEXT_REGISTER_PAGE('/blog', function() {
            var comp = module.exports=webpackJsonp([41],{26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){function u(){var e,t=[],n=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(u,s,o){t.push(s=s.toLowerCase()),n.push([s,o]),e=r[s],r[s]=e?e+","+o:o}),{ok:1==(s.status/200|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}var s=new XMLHttpRequest;s.open(t.method||"get",e);for(var o in t.headers)s.setRequestHeader(o,t.headers[o]);s.withCredentials="include"==t.credentials,s.onload=function(){n(u())},s.onerror=r,s.send(t.body)})};t.default=r},308:function(e,t,n){e.exports=n(309)},309:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(47),s=r(u),o=n(50),a=r(o),i=n(0),l=r(i),c=n(1),f=r(c),d=n(2),p=r(d),m=n(37),h=r(m),v=function(e){var t=e.items;return l.default.createElement(p.default,null,l.default.createElement("h1",null,"Verge Currency Blog"),l.default.createElement("ul",null,t.map(function(e){return l.default.createElement("li",{key:e.title},l.default.createElement(f.default,{as:""+e.link,href:""+e.title},l.default.createElement("a",{href:""+e.link},e.title)))})))};v.getInitialProps=(0,a.default)(s.default.mark(function e(){var t,n,r,u;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.default)("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fverge-currency-xvg");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,r=[],u=function(e){for(var t=0;t<e.length;t++){var n=e[t].guid.substr(e[t].guid.lastIndexOf("/")+1);r.push(n)}},u(n.items),e.abrupt("return",{items:n.items,guid:r});case 10:case"end":return e.stop()}},e,this)})),t.default=v},37:function(e,t,n){e.exports=window.fetch||(window.fetch=n(26).default||n(26))}},[308]);
            return { page: comp.default }
          })
        