(this.webpackJsonpgcal=this.webpackJsonpgcal||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Acer_Desktop_MERN_dev_React_apps_gcal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_logo_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_Acer_Desktop_MERN_dev_React_apps_gcal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setexpression=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState4=Object(C_Users_Acer_Desktop_MERN_dev_React_apps_gcal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),oldexpression=_useState4[0],setoldexpression=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("ANS"),_useState6=Object(C_Users_Acer_Desktop_MERN_dev_React_apps_gcal_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),prev=_useState6[0],setprev=_useState6[1],numerics=new Set("0123456789."),operators=new Set("+-*/%"),Button=["(",")","%","C","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"],evaluateExpression=function evaluateExpression(){var evaluation=eval(expression);setexpression(evaluation),setoldexpression(expression),setprev("ANS")},putNumerics=function(e){setexpression("ANS"==prev?e:expression+e),setprev("NUM")},putDelete=function(){"ANS"===prev?setexpression(""):(setexpression(expression.slice(0,-1)),setprev("DEL"))},putOperators=function(e){"OP"!=prev?setexpression(expression+e):"OP"===prev&&setexpression(expression.slice(0,-1)+e),setprev("OP")},HandleKeyUp=function(e){console.log(e.key),"Backspace"===e.key?putDelete():numerics.has(e.key)?putNumerics(e.key):operators.has(e.key)?putOperators(e.key):"Enter"===e.key&&evaluateExpression()};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"App",tabIndex:0,onKeyUp:HandleKeyUp,style:{width:"100%",background:"#FADBD8 ",height:"1000px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1",{children:"Calculator In React"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{width:"320px",background:"#ff6347",height:"100px",display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"center",padding:"20px",borderRadius:"10px"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4",{children:oldexpression}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1",{children:expression})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{width:"320px",margin:"20px",background:"#ff6347",height:"420px",display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"center",padding:"20px",borderRadius:"10px",flexWrap:"wrap"},children:[Button.map((function(e,_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{className:"btn",onClick:function(){"="===e?evaluateExpression():"C"===e?putDelete():numerics.has(e)?putNumerics(e):operators.has(e)&&putOperators(e)},style:{background:"#000000",color:"#ffffff",border:"none",width:"18.5%",padding:"25px",textalign:"center",textdecoration:"none",margin:"10px",borderRadius:"5px"},children:e})})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3",{children:"@Develop By igDfuse"})]})]})}__webpack_exports__.a=App},,,,,function(e,_,t){},function(e,_,t){"use strict";t.p},function(e,_,t){},,function(e,_,t){"use strict";t.r(_);var s=t(1),r=t.n(s),n=t(4),a=t.n(n),i=(t(10),t(5)),c=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(_){var t=_.getCLS,s=_.getFID,r=_.getFCP,n=_.getLCP,a=_.getTTFB;t(e),s(e),r(e),n(e),a(e)}))},p=t(0);a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(i.a,{})}),document.getElementById("root")),c()}],[[14,1,2]]]);
//# sourceMappingURL=main.fef9cc37.chunk.js.map