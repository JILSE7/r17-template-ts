"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t}).apply(this,arguments)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MyLabel=void 0;var jsx_runtime_1=require("react/jsx-runtime");require("./mylabel.css");var MyLabel=function(_a){var _b=_a.label,label=void 0===_b?"no label":_b,_c=_a.size,size=void 0===_c?"normal":_c,_d=_a.allCaps,allCaps=void 0!==_d&&_d,_e=_a.color,color=void 0===_e?"primary":_e,fontColor=_a.fontColor,_f=_a.backgroundColor,backgroundColor=void 0===_f?"transparent":_f;return(0,jsx_runtime_1.jsx)("span",__assign({className:"".concat(size," ").concat(allCaps&&"upper"," text-").concat(color," label"),style:{color:fontColor,backgroundColor:backgroundColor}},{children:label}))};exports.MyLabel=MyLabel;