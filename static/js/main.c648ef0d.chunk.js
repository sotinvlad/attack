(this.webpackJsonpattack=this.webpackJsonpattack||[]).push([[0],{126:function(t,e,a){},127:function(t,e,a){},128:function(t,e,a){},130:function(t,e,a){},208:function(t,e,a){},269:function(t,e,a){},270:function(t,e,a){"use strict";a.r(e);for(var n=a(0),c=a.n(n),r=a(37),i=a.n(r),o=(a(126),a(127),a(128),a(1)),d=function(){return Object(o.jsx)("div",{className:"Footer",children:Object(o.jsx)("h1",{children:"DESCRIPTION"})})},s=(a(130),function(t){return Object(o.jsx)("div",{className:"Header",children:Object(o.jsx)("h1",{children:"CONNECTION STATUS"})})}),u=a(7),l=a(38),j="UPDATE_DATA",b="CHART_TICK",h=[],O=100,x=0;x<1e4;x++)(O+=5-10*Math.random())<0&&(O=0),h.push({x:x,y:O});var f=function(t,e,a){return t.length<a+101?e:t.slice(a+1,a+101)},p={data:h,currentData:[],currentDataIndex:0},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(u.a)(Object(u.a)({},t),{},{data:[t.data,e.data]});case b:return Object(u.a)(Object(u.a)({},t),{},{currentData:f(t.data,t.currentData,t.currentDataIndex),currentDataIndex:f(t.data,t.currentData,t.currentDataIndex)===t.currentData?t.currentDataIndex:t.currentDataIndex+1});default:return t}},m=a(121),D=(a(208),function(t){return Object(n.useEffect)((function(){setTimeout((function(){return t.dataTick()}),100)})),Object(o.jsxs)("div",{className:"LineChart",children:[Object(o.jsx)("h2",{className:"LineChart__title",children:"Line Chart"}),Object(o.jsx)("div",{className:"LineChart__chart",children:Object(o.jsx)(m.a,{data:{datasets:[{label:"Frequency",data:t.data,fill:!0,borderWidth:1,radius:0,borderColor:"black"}]},options:{animation:{duration:0},interaction:{intersect:!1},plugins:{legend:!1},scales:{x:{type:"linear",suggestedMax:200},y:{type:"linear",suggestedMax:400}}}})}),Object(o.jsx)("button",{onClick:function(){for(var e=[],a=100,n=0;n<1e4;n++)(a+=5-10*Math.random())<0&&(a=0),e.push({x:n,y:a});t.updateData(e)},children:"Update Data"})]})}),_=Object(l.b)((function(t){return{data:t.mainPage.currentData}}),{updateData:function(t){return{type:j,data:t}},dataTick:function(){return{type:b}}})((function(t){return Object(o.jsx)("div",{children:Object(o.jsx)(D,Object(u.a)({},t))})})),N=a(119),C=a.n(N),v=(a(269),function(){return Object(o.jsxs)("div",{className:"NetworkChart",children:[Object(o.jsx)("h2",{className:"NetworkChart__title",children:"Network Chart"}),Object(o.jsx)("div",{className:"NetworkChart__chart",children:Object(o.jsx)(C.a,{graph:{nodes:[{id:1,label:"192.168.0.1",title:"node 1 tootip text"},{id:2,label:"192.168.0.2",title:"node 2 tootip text"},{id:3,label:"192.168.0.3",title:"node 3 tootip text"},{id:4,label:"192.168.0.4",title:"node 4 tootip text"},{id:5,label:"192.168.0.5",title:"node 5 tootip text"}],edges:[{from:2,to:1},{from:3,to:1},{from:4,to:1},{from:5,to:1}]},options:{layout:{hierarchical:!0},edges:{color:"#000000"},height:"400px"},events:{select:function(t){t.nodes,t.edges}},getNetwork:function(t){}})})]})}),T=function(t){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(s,{}),Object(o.jsx)(_,{data:t.data}),Object(o.jsx)(v,{}),Object(o.jsx)(d,{})]})},k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,271)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),n(t),c(t),r(t),i(t)}))},I=a(21),w=a(120),y=Object(I.b)({mainPage:g}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.c,S=Object(I.d)(y,E(Object(I.a)(w.a)));window.__store__=S;var L=S;i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(l.a,{store:L,children:Object(o.jsx)(T,{})})}),document.getElementById("root")),k()}},[[270,1,2]]]);
//# sourceMappingURL=main.c648ef0d.chunk.js.map