(this.webpackJsonpsnapit=this.webpackJsonpsnapit||[]).push([[26,120],{130:function(t,n,e){!function(t){var n;n=e(9),e(23),n.defineMode("yaml-frontmatter",(function(t,e){var i=n.getMode(t,"yaml"),r=n.getMode(t,e&&e.base||"gfm");function a(t){return 2==t.state?r:i}return{startState:function(){return{state:0,inner:n.startState(i)}},copyState:function(t){return{state:t.state,inner:n.copyState(a(t),t.inner)}},token:function(t,e){if(0==e.state)return t.match(/---/,!1)?(e.state=1,i.token(t,e.inner)):(e.state=2,e.inner=n.startState(r),r.token(t,e.inner));if(1==e.state){var a=t.sol()&&t.match(/(---|\.\.\.)/,!1),s=i.token(t,e.inner);return a&&(e.state=2,e.inner=n.startState(r)),s}return r.token(t,e.inner)},innerMode:function(t){return{mode:a(t),state:t.inner}},blankLine:function(t){var n=a(t);if(n.blankLine)return n.blankLine(t.inner)}}}))}()},23:function(t,n,e){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(n,e){var i=n.peek(),r=e.escaped;if(e.escaped=!1,"#"==i&&(0==n.pos||/\s/.test(n.string.charAt(n.pos-1))))return n.skipToEnd(),"comment";if(n.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(e.literal&&n.indentation()>e.keyCol)return n.skipToEnd(),"string";if(e.literal&&(e.literal=!1),n.sol()){if(e.keyCol=0,e.pair=!1,e.pairStart=!1,n.match(/---/))return"def";if(n.match(/\.\.\./))return"def";if(n.match(/\s*-\s+/))return"meta"}if(n.match(/^(\{|\}|\[|\])/))return"{"==i?e.inlinePairs++:"}"==i?e.inlinePairs--:"["==i?e.inlineList++:e.inlineList--,"meta";if(e.inlineList>0&&!r&&","==i)return n.next(),"meta";if(e.inlinePairs>0&&!r&&","==i)return e.keyCol=0,e.pair=!1,e.pairStart=!1,n.next(),"meta";if(e.pairStart){if(n.match(/^\s*(\||\>)\s*/))return e.literal=!0,"meta";if(n.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==e.inlinePairs&&n.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(e.inlinePairs>0&&n.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(n.match(t))return"keyword"}return!e.pair&&n.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(e.pair=!0,e.keyCol=n.indentation(),"atom"):e.pair&&n.match(/^:\s*/)?(e.pairStart=!0,"meta"):(e.pairStart=!1,e.escaped="\\"==i,n.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(e(9))}}]);
//# sourceMappingURL=26.88782a79.chunk.js.map