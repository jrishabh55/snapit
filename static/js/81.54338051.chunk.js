(this.webpackJsonpsnapit=this.webpackJsonpsnapit||[]).push([[81],{102:function(t,e,i){!function(t){"use strict";t.defineMode("properties",(function(){return{token:function(t,e){var i=t.sol()||e.afterSection,n=t.eol();if(e.afterSection=!1,i&&(e.nextMultiline?(e.inMultiline=!0,e.nextMultiline=!1):e.position="def"),n&&!e.nextMultiline&&(e.inMultiline=!1,e.position="def"),i)for(;t.eatSpace(););var o=t.next();return!i||"#"!==o&&"!"!==o&&";"!==o?i&&"["===o?(e.afterSection=!0,t.skipTo("]"),t.eat("]"),"header"):"="===o||":"===o?(e.position="quote",null):("\\"===o&&"quote"===e.position&&t.eol()&&(e.nextMultiline=!0),e.position):(e.position="comment",t.skipToEnd(),"comment")},startState:function(){return{position:"def",nextMultiline:!1,inMultiline:!1,afterSection:!1}}}})),t.defineMIME("text/x-properties","properties"),t.defineMIME("text/x-ini","properties")}(i(23))}}]);
//# sourceMappingURL=81.54338051.chunk.js.map