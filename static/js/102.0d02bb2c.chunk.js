(this.webpackJsonpsnapit=this.webpackJsonpsnapit||[]).push([[102],{109:function(e,t,r){!function(e){"use strict";e.defineMode("tcl",(function(){function e(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}var t=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),r=e("if elseif else and not or eq ne in ni for foreach while switch"),n=/[+\-*&%=<>!?^\/\|]/;function a(e,t,r){return t.tokenize=r,r(e,t)}function o(e,s){var f=s.beforeParams;s.beforeParams=!1;var c,u=e.next();if('"'!=u&&"'"!=u||!s.inParams){if(/[\[\]{}\(\),;\.]/.test(u))return"("==u&&f?s.inParams=!0:")"==u&&(s.inParams=!1),null;if(/\d/.test(u))return e.eatWhile(/[\w\.]/),"number";if("#"==u)return e.eat("*")?a(e,s,i):"#"==u&&e.match(/ *\[ *\[/)?a(e,s,l):(e.skipToEnd(),"comment");if('"'==u)return e.skipTo(/"/),"comment";if("$"==u)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),s.beforeParams=!0,"builtin";if(n.test(u))return e.eatWhile(n),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var p=e.current().toLowerCase();return t&&t.propertyIsEnumerable(p)?"keyword":r&&r.propertyIsEnumerable(p)?(s.beforeParams=!0,"keyword"):null}return a(e,s,(c=u,function(e,t){for(var r,n=!1,a=!1;null!=(r=e.next());){if(r==c&&!n){a=!0;break}n=!n&&"\\"==r}return a&&(t.tokenize=o),"string"}))}function i(e,t){for(var r,n=!1;r=e.next();){if("#"==r&&n){t.tokenize=o;break}n="*"==r}return"comment"}function l(e,t){for(var r,n=0;r=e.next();){if("#"==r&&2==n){t.tokenize=o;break}"]"==r?n++:" "!=r&&(n=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},lineComment:"#"}})),e.defineMIME("text/x-tcl","tcl")}(r(9))}}]);
//# sourceMappingURL=102.0d02bb2c.chunk.js.map