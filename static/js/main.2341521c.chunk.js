(this.webpackJsonpattack=this.webpackJsonpattack||[]).push([[0],{126:function(t,e,n){},127:function(t,e,n){},128:function(t,e,n){},130:function(t,e,n){},208:function(t,e,n){},269:function(t,e,n){},270:function(t,e,n){},271:function(t,e,n){"use strict";n.r(e);for(var a=n(0),c=n.n(a),r=n(38),i=n.n(r),d=(n(126),n(127),n(128),n(1)),s=function(){return Object(d.jsx)("div",{className:"Footer",children:Object(d.jsx)("h1",{children:"DESCRIPTION"})})},o=(n(130),function(t){return Object(d.jsx)("div",{className:"Header",children:Object(d.jsx)("h1",{children:"CONNECTION STATUS"})})}),u=n(2),x=n(14),j="UPDATE_DATA",h="UPDATE_SECOND_DATA",l="CHART_TICK",b="SECOND_CHART_TICK",f=[],O=100,I=0;I<1e4;I++)(O+=50-100*Math.random())<0&&(O=0),f.push({x:I,y:O});for(var S=[],g=100,m=0;m<1e4;m++)(g+=5-10*Math.random())<0&&(g=0),S.push({x:m,y:g});var D=function(t,e,n,a){return t.length<a+1?e:t.slice(n,a+1)},p={data:f,secondData:S,currentData:[],currentSecondData:[],startIndex:0,startSecondIndex:0,finishIndex:0,finishSecondIndex:0},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(u.a)(Object(u.a)({},t),{},{data:[t.data,e.data]});case h:return Object(u.a)(Object(u.a)({},t),{},{secondData:[t.secondData,e.data]});case l:return Object(u.a)(Object(u.a)({},t),{},{currentData:D(t.data,t.currentData,t.startIndex,t.finishIndex),finishIndex:D(t.data,t.currentData,t.startIndex,t.finishIndex)===t.currentData?t.finishIndex:t.finishIndex+1,startIndex:t.finishIndex-t.startIndex>150?t.startIndex+50:t.startIndex});case b:return Object(u.a)(Object(u.a)({},t),{},{currentSecondData:D(t.secondData,t.currentSecondData,t.startSecondIndex,t.finishSecondIndex),finishSecondIndex:D(t.secondData,t.currentSecondData,t.startSecondIndex,t.finishSecondIndex)===t.currentSecondData?t.finishSecondIndex:t.finishSecondIndex+1,startSecondIndex:t.finishSecondIndex-t.startSecondIndex>150?t.startSecondIndex+50:t.startSecondIndex});default:return t}},C=n(39),T=(n(208),function(t){Object(a.useEffect)((function(){setTimeout((function(){return t.dataTick()}),50)}));return Object(d.jsxs)("div",{className:"LineChart",children:[Object(d.jsx)("h2",{className:"LineChart__title",children:"Line Chart"}),Object(d.jsx)("div",{className:"LineChart__chart",children:Object(d.jsx)(C.a,{data:{datasets:[{label:"Frequency",data:t.data,fill:!0,borderWidth:1,radius:0,borderColor:"black"}]},options:{animation:!1,parsing:!1,interaction:{intersect:!1},plugins:{legend:!1,decimation:{enabled:!1,algorithm:"min-max"}},scales:{x:{type:"linear",suggestedMax:t.startIndex+400,source:"auto",maxRotation:0,autoSkip:!0},y:{type:"linear",suggestedMax:600,suggestedMin:0,source:"auto",maxRotation:0,autoSkip:!0}}}})})]})}),v=Object(x.b)((function(t){return{data:t.mainPage.currentData,startIndex:t.mainPage.startIndex}}),{updateData:function(t){return{type:j,data:t}},dataTick:function(){return{type:l}}})((function(t){return Object(d.jsx)("div",{children:Object(d.jsx)(T,Object(u.a)({},t))})})),N=(n(120),n(269),n(270),function(t){Object(a.useEffect)((function(){setTimeout((function(){return t.secondDataTick()}),50)}));return Object(d.jsxs)("div",{className:"SecondChart",children:[Object(d.jsx)("h2",{className:"SecondChart__title",children:"Second Chart"}),Object(d.jsx)("div",{className:"SecondChart__chart",children:Object(d.jsx)(C.a,{data:{datasets:[{label:"Frequency",data:t.data,fill:!0,borderWidth:1,radius:0,borderColor:"black"}]},options:{animation:!1,parsing:!1,interaction:{intersect:!1},plugins:{legend:!1,decimation:{enabled:!1,algorithm:"min-max"}},scales:{x:{type:"linear",suggestedMax:t.startIndex+400,source:"auto",maxRotation:0,autoSkip:!0},y:{type:"linear",suggestedMax:600,suggestedMin:0,source:"auto",maxRotation:0,autoSkip:!0}}}})})]})}),y=Object(x.b)((function(t){return{data:t.mainPage.currentSecondData,startIndex:t.mainPage.startSecondIndex}}),{updateSecondData:function(t){return{type:h,data:t}},secondDataTick:function(){return{type:b}}})((function(t){return Object(d.jsx)("div",{children:Object(d.jsx)(N,Object(u.a)({},t))})})),k=function(t){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o,{}),Object(d.jsx)(v,{data:t.data}),Object(d.jsx)(y,{data:t.data}),Object(d.jsx)(s,{})]})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,272)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))},P=n(22),A=n(121),M=Object(P.b)({mainPage:_}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.c,w=Object(P.d)(M,R(Object(P.a)(A.a)));window.__store__=w;var F=w;i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x.a,{store:F,children:Object(d.jsx)(k,{})})}),document.getElementById("root")),E()}},[[271,1,2]]]);
//# sourceMappingURL=main.2341521c.chunk.js.map