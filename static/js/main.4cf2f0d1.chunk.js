(this.webpackJsonpattack=this.webpackJsonpattack||[]).push([[0],{126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},130:function(e,t,n){},208:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);for(var a=n(0),c=n.n(a),i=n(38),r=n.n(i),s=(n(126),n(127),n(128),n(1)),d=function(){return Object(s.jsx)("div",{className:"Footer",children:Object(s.jsx)("h3",{children:"Developing by KUSOK"})})},o=(n(130),function(e){return Object(s.jsx)("div",{className:"Header",children:Object(s.jsx)("h1",{children:"CONNECTION STATUS"})})}),u=n(2),j=n(14),l="UPDATE_DATA",x="UPDATE_SECOND_DATA",h="CHART_TICK",b="SECOND_CHART_TICK",O=[],f=100,S=0;S<1e4;S++)(f+=50-100*Math.random())<0&&(f=0),O.push({x:S,y:f});for(var m=[],I=100,_=0;_<1e4;_++)(I+=5-10*Math.random())<0&&(I=0),m.push({x:_,y:I});var g=function(e,t,n,a){return e.length<a+1?t:e.slice(n,a+1)},p={data:O,secondData:m,currentData:[],currentSecondData:[],startIndex:0,startSecondIndex:0,finishIndex:0,finishSecondIndex:0},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),{},{data:[e.data,t.data]});case x:return Object(u.a)(Object(u.a)({},e),{},{secondData:[e.secondData,t.data]});case h:return Object(u.a)(Object(u.a)({},e),{},{currentData:g(e.data,e.currentData,e.startIndex,e.finishIndex),finishIndex:g(e.data,e.currentData,e.startIndex,e.finishIndex)===e.currentData?e.finishIndex:e.finishIndex+1,startIndex:e.finishIndex-e.startIndex>150?e.startIndex+50:e.startIndex});case b:return Object(u.a)(Object(u.a)({},e),{},{currentSecondData:g(e.secondData,e.currentSecondData,e.startSecondIndex,e.finishSecondIndex),finishSecondIndex:g(e.secondData,e.currentSecondData,e.startSecondIndex,e.finishSecondIndex)===e.currentSecondData?e.finishSecondIndex:e.finishSecondIndex+1,startSecondIndex:e.finishSecondIndex-e.startSecondIndex>150?e.startSecondIndex+50:e.startSecondIndex});default:return e}},v=n(39),N=(n(208),function(e){Object(a.useEffect)((function(){setTimeout((function(){return e.dataTick()}),50)}));return Object(s.jsxs)("div",{className:"LineChart",children:[Object(s.jsx)("h2",{className:"LineChart__title",children:"Line Chart"}),Object(s.jsx)("div",{className:"LineChart__chart",children:Object(s.jsx)(v.a,{data:{datasets:[{label:"Frequency",data:e.data,fill:!0,borderWidth:1,radius:0,borderColor:"black"}]},options:{animation:!1,parsing:!1,interaction:{intersect:!1},plugins:{legend:!1,decimation:{enabled:!1,algorithm:"min-max"}},scales:{x:{type:"linear",suggestedMax:e.startIndex+150,source:"auto",maxRotation:0,autoSkip:!0},y:{type:"linear",suggestedMax:600,suggestedMin:0,source:"auto",maxRotation:0,autoSkip:!0}}}})})]})}),T=Object(j.b)((function(e){return{data:e.mainPage.currentData,startIndex:e.mainPage.startIndex}}),{updateData:function(e){return{type:l,data:e}},dataTick:function(){return{type:h}}})((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(N,Object(u.a)({},e))})})),C=(n(120),n(269),n(270),function(e){Object(a.useEffect)((function(){setTimeout((function(){return e.secondDataTick()}),100)}));return Object(s.jsxs)("div",{className:"SecondChart",children:[Object(s.jsx)("h2",{className:"SecondChart__title",children:"Second Chart"}),Object(s.jsx)("div",{className:"SecondChart__chart",children:Object(s.jsx)(v.a,{data:{datasets:[{label:"Frequency",data:e.data,fill:!0,borderWidth:1,radius:0,borderColor:"black"}]},options:{animation:!1,parsing:!1,interaction:{intersect:!1},plugins:{legend:!1,decimation:{enabled:!1,algorithm:"min-max"}},scales:{x:{type:"linear",suggestedMax:e.startIndex+150,source:"auto",maxRotation:0,autoSkip:!0},y:{type:"linear",suggestedMax:600,suggestedMin:0,source:"auto",maxRotation:0,autoSkip:!0}}}})})]})}),k=Object(j.b)((function(e){return{data:e.mainPage.currentSecondData,startIndex:e.mainPage.startSecondIndex}}),{updateSecondData:function(e){return{type:x,data:e}},secondDataTick:function(){return{type:b}}})((function(e){return Object(s.jsx)("div",{children:Object(s.jsx)(C,Object(u.a)({},e))})})),y=(n(271),function(){return Object(s.jsxs)("div",{className:"Solutions",children:[Object(s.jsx)("div",{className:"Solutions__header",children:"Solutions"}),Object(s.jsx)("div",{className:"Solutions__break",children:"Break the connection 192.168.32.1"}),Object(s.jsx)("div",{className:"Solutions__break",children:"Break the connection 192.168.32.1"}),Object(s.jsx)("div",{className:"Solutions__break",children:"Break the connection 192.168.32.1"}),Object(s.jsx)("div",{className:"Solutions__freeze",children:"Enable additional fans"})]})}),E=(n(272),function(){return Object(s.jsxs)("div",{className:"Threats",children:[Object(s.jsx)("div",{className:"Threats__header",children:"Threats Terminal"}),Object(s.jsx)("div",{children:"> WARNING: 3 unsafe connections"}),Object(s.jsx)("div",{children:"> WARNING: server is overheated"})]})}),A=function(e){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsx)(T,{data:e.data}),Object(s.jsx)(k,{data:e.data}),Object(s.jsx)(E,{}),Object(s.jsx)(y,{}),Object(s.jsx)(d,{})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,274)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},P=n(22),R=n(121),w=Object(P.b)({mainPage:D}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.c,L=Object(P.d)(w,F(Object(P.a)(R.a)));window.__store__=L;var B=L;r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(j.a,{store:B,children:Object(s.jsx)(A,{})})}),document.getElementById("root")),M()}},[[273,1,2]]]);
//# sourceMappingURL=main.4cf2f0d1.chunk.js.map