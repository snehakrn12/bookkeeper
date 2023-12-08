"use strict";(self.webpackChunksite_3=self.webpackChunksite_3||[]).push([[3049],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},l),{},{components:n})):o.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38530:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var o=n(83117),a=(n(67294),n(3905));const r={},i="BP-36: Stats documentation annotation",s={type:"mdx",permalink:"/bps/BP-36-stats-documentation-annotation",source:"@site/src/pages/bps/BP-36-stats-documentation-annotation.md",title:"BP-36: Stats documentation annotation",description:"Motivation",frontMatter:{}},p=[{value:"Motivation",id:"motivation",level:3},{value:"Public Interfaces",id:"public-interfaces",level:3},{value:"Proposed Changes",id:"proposed-changes",level:3},{value:"Compatibility, Deprecation, and Migration Plan",id:"compatibility-deprecation-and-migration-plan",level:3},{value:"Test Plan",id:"test-plan",level:3},{value:"Rejected Alternatives",id:"rejected-alternatives",level:3}],c={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bp-36-stats-documentation-annotation"},"BP-36: Stats documentation annotation"),(0,a.kt)("h3",{id:"motivation"},"Motivation"),(0,a.kt)("p",null,"A common ask from people using bookkeeper is how they can monitor bookies and bookkeeper clients, what kind of metrics that bookkeeper exposes\nand what are the important metrics. Currently bookkeeper doesn't provide any metrics page for guiding people on monitoring bookkeeper services."),(0,a.kt)("p",null,"In order to help people on this, we need to provide a few documentation pages about metrics. However if we just write such pages, those pages\ncan quickly get out-of-dated when code is changed. The proposal here is to seek a programming way for generating metrics related pages."),(0,a.kt)("h3",{id:"public-interfaces"},"Public Interfaces"),(0,a.kt)("p",null,"Introduced a ",(0,a.kt)("inlineCode",{parentName:"p"},"StatsDoc")," annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'/**\n * Documenting the stats.\n */\n@Retention(RetentionPolicy.RUNTIME)\n@Documented\npublic @interface StatsDoc {\n\n    /**\n     * The name of the category to group stats together.\n     *\n     * @return name of the stats category.\n     */\n    String category() default "";\n\n    /**\n     * The scope of this stats.\n     *\n     * @return scope of this stats\n     */\n    String scope() default "";\n\n    /**\n     * The name of this stats\n     *\n     * @return name of this stats\n     */\n    String name();\n\n    /**\n     * The help message of this stats\n     *\n     * @return help message of this stats\n     */\n    String help();\n\n    /**\n     * The parent metric name.\n     *\n     * <p>It can used for analyzing the relationships\n     * between the metrics, especially for the latency metrics.\n     *\n     * @return the parent metric name\n     */\n    default String parent() { return ""; }\n\n    /**\n     * The metric name of an operation that happens\n     * after the operation of this metric.\n     *\n     * <p>similar as {@link #parent()}, it can be used for analyzing\n     * the dependencies between metrics.\n     *\n     * @return the metric name of an operation that happens after the operation of this metric.\n     */\n    default String happensAfter() { return ""; }\n\n\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"StatsDoc")," annotation provides a way to annotate metrics we added to bookkeeper."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"category: which category that the metric belongs to. e.g. server, or client."),(0,a.kt)("li",{parentName:"ul"},"scope: the scope of the metric. e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"bookie")," scope."),(0,a.kt)("li",{parentName:"ul"},"name: the name of the metric."),(0,a.kt)("li",{parentName:"ul"},"help: the description of the metric.")),(0,a.kt)("h3",{id:"proposed-changes"},"Proposed Changes"),(0,a.kt)("p",null,"In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"StatsDoc")," annotation, bookkeeper should provide a tool for generating the metrics yaml file\nfor documenting all annotated metrics."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bin/stats-doc-gen\n")),(0,a.kt)("p",null,"Example output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"server":\n  "bookie_BOOKIE_READ_ENTRY_BYTES":\n    "description": |-\n      bytes stats of ReadEntry on a bookie\n    "type": |-\n      OPSTATS\n  "bookie_WRITE_BYTES":\n    "description": |-\n      total bytes written to a bookie\n    "type": |-\n      COUNTER\n  "bookie_BOOKIE_ADD_ENTRY":\n    "description": |-\n      operations stats of AddEntry on a bookie\n    "type": |-\n      OPSTATS\n  "bookie_BOOKIE_RECOVERY_ADD_ENTRY":\n    "description": |-\n      operation stats of RecoveryAddEntry on a bookie\n    "type": |-\n      OPSTATS\n  "bookie_BOOKIE_ADD_ENTRY_BYTES":\n    "description": |-\n      bytes stats of AddEntry on a bookie\n    "type": |-\n      OPSTATS\n  "bookie_BOOKIE_FORCE_LEDGER":\n    "description": |-\n      total force operations occurred on a bookie\n    "type": |-\n      COUNTER\n  "bookie_READ_BYTES":\n    "description": |-\n      total bytes read from a bookie\n    "type": |-\n      COUNTER\n  "bookie_BOOKIE_READ_ENTRY":\n    "description": |-\n      operation stats of ReadEntry on a bookie\n    "type": |-\n      OPSTATS\n')),(0,a.kt)("h3",{id:"compatibility-deprecation-and-migration-plan"},"Compatibility, Deprecation, and Migration Plan"),(0,a.kt)("p",null,"It is a new feature, which doesn't have any compatibility impacts."),(0,a.kt)("p",null,"There is nothing deprecated."),(0,a.kt)("p",null,"There is nothing to migrate."),(0,a.kt)("h3",{id:"test-plan"},"Test Plan"),(0,a.kt)("p",null,"Existing testing is good enough to cover code changes. No new tests are needed."),(0,a.kt)("h3",{id:"rejected-alternatives"},"Rejected Alternatives"),(0,a.kt)("p",null,"Alternatively, we have to manually maintain the metrics page and update each time when a new metric is added."))}u.isMDXComponent=!0}}]);