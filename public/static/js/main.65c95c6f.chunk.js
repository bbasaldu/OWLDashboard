(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,a){e.exports={main:"Collapsible_main__3oz8V",content:"Collapsible_content__27Al2",header:"Collapsible_header__17fwi",left:"Collapsible_left__4hxbY",checkDown:"Collapsible_checkDown__3VATO",checkUp:"Collapsible_checkUp__3Wz0f"}},190:function(e,t,a){},192:function(e,t,a){},20:function(e,t,a){e.exports={Container:"Container_Container__3ZEv_",SubContainer:"Container_SubContainer__2EeP3",rowContainer:"Container_rowContainer__1iZ2B",rowItem:"Container_rowItem__1VLl0"}},202:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(36),o=a.n(c),i=(a(190),a(14)),s=a.n(i),l=a(37),d=a(6),h=(a(192),a(15)),u=a(25),p=a.n(u),b=a(0),j=function(){return Object(b.jsx)("header",{className:p.a.header,children:Object(b.jsx)("nav",{className:p.a.nav,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/about",activeClassName:p.a.active,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(h.b,{to:"/players",activeClassName:p.a.active,children:"Players"})})]})})})},f=a(70),m=a.n(f),x=function(e){return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)("main",{className:m.a.Layout,children:e.children})]})},y=a(19),O=Object(y.b)({name:"player",initialState:{players:[],currentPlayer:null,playerChartData:[],commonStats:[]},reducers:{setPlayer:function(e,t){e.currentPlayer=t.payload},setPlayers:function(e,t){e.players=t.payload},setPlayerChartData:function(e,t){var a=t.payload,n=e.playerChartData.findIndex((function(e){return e.type===a.type}));-1===n?e.playerChartData.push(a):e.playerChartData[n]=a},setCommonStats:function(e,t){e.commonStats=t.payload},clearPlayerChartData:function(e){e.playerChartData=[]}}}),g=O.actions,v=O.reducer,_=a(4),w=a(13),C=a(20),k=a.n(C),N=a(40),P=a.n(N),S=a(3),A=function(e,t,a,n,r,c){var o=[{hero:"Ana",color:"#718ab3"},{hero:"Ashe",color:"rgb(104,104,106)"},{hero:"Baptiste",color:"rgb(91,176,202)"},{hero:"Bastion",color:"#7c8f7b"},{hero:"Brigitte",color:"#be736e"},{hero:"D.Va",color:"#ed92c7"},{hero:"Doomfist",color:"#815049"},{hero:"Echo",color:"rgb(157,203,244)"},{hero:"Genji",color:"#97ef43"},{hero:"Hanzo",color:"#b9b48a"},{hero:"Junkrat",color:"#ecbd53"},{hero:"L\xfacio",color:"#85c952"},{hero:"McCree",color:"#ae595c"},{hero:"Mei",color:"#6faced"},{hero:"Mercy",color:"#ebe8bb"},{hero:"Moira",color:"#803c51"},{hero:"Orisa",color:"#468c43"},{hero:"Pharah",color:"#3e7dca"},{hero:"Reaper",color:"#7d3e51"},{hero:"Reinhardt",color:"#929da3"},{hero:"Roadhog",color:"#b68c52"},{hero:"Sigma",color:"rgb(148, 159, 164)"},{hero:"Soldier: 76",color:"#697794"},{hero:"Sombra",color:"#7359ba"},{hero:"Symmetra",color:"#8ebccc"},{hero:"Torbj\xf6rn",color:"#c0726e"},{hero:"Tracer",color:"#d79342"},{hero:"Widowmaker",color:"#9e6aa8"},{hero:"Winston",color:"#a2a6bf"},{hero:"Wrecking Ball",color:"rgb(216, 144, 75)"},{hero:"Zarya",color:"#e77eb6"},{hero:"Zenyatta",color:"#ede582"}],i="",s=t.stats.byHero.map((function(e,t){var n=e.name,r=e.stats.find((function(e){return e.name===a}));return n.length>i.length&&(i=n),{label:n,value:r?r.value:0}}));s=s.filter((function(e){return 0!==e.value}));var l=S.n("#".concat(e)),d=parseFloat(l.style("width")),h=parseFloat(l.style("height")),u=l.append("svg").attr("id","".concat(e,"Svg")).attr("width",d).attr("height",h),p="2vmax",b=function(e,t){var a=e.append("text").attr("font-size",p).text(t),n=a.node().getBoundingClientRect();return a.remove(),n}(u,i),j=.025*d,f=b.height,m=b.width+j+f+j,x=Math.min(d-m,h)/2,y=u.append("g").attr("transform","translate(".concat((d-m)/2,", ").concat(h/2,")")),O=S.j().value((function(e){return e.value}))(s),g={inner:.6*x,outer:.95*x},v=2*g.inner/Math.sqrt(2);S.p(c).then((function(e){var t=e.documentElement.cloneNode(!0),a=y.node().appendChild(t),r=S.n(a).attr("id","svgLogo").attr("y",-v/2).attr("x",-v/2).attr("height",v).attr("width",v);n&&r.style("opacity",0).transition().duration(1500).style("opacity",1)}));var _=S.a().innerRadius(g.inner).outerRadius(g.outer);n?y.selectAll("path").data(O).enter().append("path").attr("fill",(function(e,t){return o.find((function(t){return t.hero===e.data.label})).color})).transition().ease(S.d.amplitude(1).period(.99)).duration(1500).attrTween("d",(function(e){var t=S.g({startAngle:0,endAngle:0},e);return function(e){return _(t(e))}})):y.selectAll("path").data(O).enter().append("path").attr("fill",(function(e,t){return o.find((function(t){return t.hero===e.data.label})).color})).attr("d",_);var w=S.k().domain(s.map((function(e){return e.label}))).range([h/2-.9*x,h/2+.9*x]).padding(.5);u.selectAll("legendSymbol").data(s).enter().append("rect").attr("y",(function(e){return w(e.label)})).attr("x",(d-m)/2+.95*x+j).attr("width",f).attr("height",Math.min(w.bandwidth(),f)).attr("fill",(function(e,t){return o.find((function(t){return t.hero===e.label})).color})).attr("stroke","#000"),u.selectAll("legendLabels").data(s).enter().append("text").attr("y",(function(e){return w(e.label)+Math.min(w.bandwidth(),f)})).attr("x",(d-m)/2+.95*x+f+2*j).attr("font-size",p).attr("fill",r.tertiary).text((function(e){return e.label}))},L=function(e,t,a,n,r,c){S.n("#".concat(e)).selectAll("svg").remove(),A(e,t,a,n,r,c)},I=a(72),T=a.n(I),D=function(){return Object(b.jsxs)("div",{className:T.a.card,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})},F=function(e){var t=Object(_.c)((function(e){return e.ui.theme})),a=Object(_.b)(),r=Object(_.c)((function(e){return e.player.currentPlayer})),c=Object(_.c)((function(e){return e.ui.loading})),o=Object(_.c)((function(e){return e.player.commonStats}));function i(n){var c=n.target.options,o=c[c.selectedIndex].innerText,i="".concat("https://overwatch-league-dashboard-447f86325626.herokuapp.com/","assets/owl_logos/").concat(r.teamName.split(" ").join("_"),".svg");L(e.id,r,o,!0,t,i),a(g.setPlayerChartData({id:e.id,data:r,selection:o,type:"pie",xmlPath:i}))}return Object(n.useEffect)((function(){if(!c){var n="".concat("https://overwatch-league-dashboard-447f86325626.herokuapp.com/","assets/owl_logos/").concat(r.teamName.split(" ").join("_"),".svg");A(e.id,r,r.stats.all[0].name,!0,t,n),window.matchMedia("(max-width: 600px)").matches?S.n("#pieChart").node().scrollIntoView({behavior:"smooth"}):S.n("#lineChart").node().scrollIntoView({behavior:"smooth"}),a(g.setPlayerChartData({id:e.id,data:r,selection:r.stats.all[0].name,type:"pie",xmlPath:n}))}}),[a,e.id,r,t,c]),Object(b.jsxs)("div",{className:P.a.PieChart,style:{backgroundColor:t.primary},children:[c&&Object(b.jsx)(D,{}),!c&&Object(b.jsxs)("div",{className:P.a.filter,style:{color:t.tertiary},children:[Object(b.jsx)("span",{children:"General Stats By Hero (All Matches)"}),Object(b.jsx)("select",{onChange:i,children:o.map((function(e,t){return Object(b.jsx)("option",{children:e},"pieChartOption".concat(t))}))})]}),!c&&Object(b.jsx)("div",{className:P.a.fill,id:e.id})]})},R=a(41),E=a.n(R),B=function(e,t,a,n,r){var c=window.matchMedia("(max-width: 850px)"),o="",i=t.map((function(e){var t,n=e.startTime.split(" ")[0].split("-");t="".concat(n[1],"/").concat(n[2],"/").concat(n[0]),c.matches&&(t="".concat(parseInt(n[1]),"/").concat(parseInt(n[2]),"/").concat(n[0].slice(2,4)));var r=parseInt(e.stats.all.find((function(e){return e.name===a})).value,10);return r.toString().length>o.length&&(o=r.toString()),{date:t,statValue:r}})),s=1e3,l=S.e,d=S.n("#".concat(e)),h=parseFloat(d.style("width")),u=parseFloat(d.style("height")),p=d.append("svg").attr("id","".concat(e,"Svg")).attr("width",h).attr("height",u),b=S.i(i,(function(e){return e.statValue})),j="1.5vmin",f=function(e,t){var a=e.append("text").attr("font-size",j).text(t),n=a.node().getBoundingClientRect();return a.remove(),n},m=f(p,i[0].date),x={left:1.5*f(p,o).width+6,right:.01*h+m.width/2,top:m.height,bottom:1.5*m.height+6},y=S.m().domain(i.map((function(e){return e.date}))).range([x.left,h-x.right]),O=S.l().domain([0,b]).range([u-x.bottom,x.top]).nice(),g=S.h().x((function(e,t){return y(e.date)})).y((function(e,t){return O(e.statValue)})),v=p.append("g").attr("id","xAxis").attr("transform","translate(".concat(0,", ",u-x.bottom,")")).call(S.b(y));v.selectAll("path").attr("stroke",r.tertiary),v.selectAll("line").attr("stroke",r.tertiary),v.selectAll("text").attr("color",r.tertiary);var _=p.append("g").attr("id","yAxis").attr("transform","translate(".concat(x.left,", ",0,")")).call(S.c(O));_.selectAll("path").attr("stroke",r.tertiary),_.selectAll("line").attr("stroke",r.tertiary),_.selectAll("text").attr("color",r.tertiary);var w=p.append("path").attr("id","path").datum(i).attr("fill","none").attr("stroke",r.secondary).attr("stroke-width","1").attr("d",g),C=w.node().getTotalLength();n&&(v.attr("opacity",0).transition().duration(s).attr("opacity",1),_.attr("opacity",0).transition().duration(s).attr("opacity",1),w.attr("stroke-dasharray",C+" "+C).attr("stroke-dashoffset",C).transition().duration(s).ease(l).attr("stroke-dashoffset",0)),p.selectAll("text").attr("font-size",j)},M=function(e,t,a,n,r){S.n("#".concat(e)).selectAll("svg").remove(),B(e,t,a,n,r)},U=function(e){var t=Object(_.b)(),a=Object(_.c)((function(e){return e.player.currentPlayer})),r=Object(_.c)((function(e){return e.ui.theme})),c=Object(n.useState)([]),o=Object(w.a)(c,2),i=o[0],s=o[1],l=Object(_.c)((function(e){return e.ui.loading}));function d(n){var c=n.target.options,o=c[c.selectedIndex].innerText;M(e.id,a.matches,o,!0,r),t(g.setPlayerChartData({id:e.id,data:a.matches,selection:o,type:"line"}))}return Object(n.useEffect)((function(){if(!l){var n=[],c=a.matches.findIndex((function(e){return e.stats.all.length===S.i(a.matches,(function(e){return e.stats.all.length}))}));a.matches[c].stats.all.forEach((function(e){for(var t=e.name,r=!0,o=0;o<a.matches.length;o++){if(o!==c)if(!a.matches[o].stats.all.find((function(e){return e.name===t}))){r=!1;break}}r&&n.push(t)})),B(e.id,a.matches,n[0],!0,r),s(n),t(g.setPlayerChartData({id:e.id,data:a.matches,selection:n[0],type:"line"}))}}),[e.id,t,a,l,r]),Object(b.jsxs)("div",{className:E.a.RectChart,style:{backgroundColor:r.primary},children:[l&&Object(b.jsx)(D,{}),!l&&Object(b.jsxs)("div",{className:E.a.filter,style:{color:r.tertiary},children:[Object(b.jsx)("span",{children:"General Stats - By Match "}),Object(b.jsx)("select",{onChange:d,children:i.map((function(e,t){return Object(b.jsx)("option",{children:e},"lineChartOption".concat(t))}))})]}),!l&&Object(b.jsx)("div",{className:E.a.fill,id:e.id})]})},z=function(e,t,a){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=S.n("#".concat(e)),c=parseFloat(r.style("width")),o=parseFloat(r.style("height")),i=r.append("svg").attr("id","".concat(e,"Svg")).attr("width",c).attr("height",o),s=.015*c,l={left:.05*c,right:.05*c,top:s,bottom:100},d=S.l().domain([0,100]).range([l.left,c-l.right]),h=i.append("g").attr("id","xAxisPercentile").attr("transform","translate(".concat(0,", ",l.top,")")).call(S.b(d).tickValues([0,25,50,75,100]).tickFormat((function(e){return"".concat(e,"%")}))),u=i.append("circle").attr("id","percentilePoint").attr("cx",d(100*t)).attr("cy",l.top).attr("r",s).attr("fill",a.secondary);n&&(u.attr("cx",0).transition().duration(1e3).attr("cx",d(100*t)),h.attr("opacity",0).transition().duration(1e3).attr("opacity",1));var p=c>o?"2vh":"2vw";i.selectAll("text").attr("font-size",p)},V=a(26),H=a.n(V),G=function(e){var t=Object(_.c)((function(e){return e.player.currentPlayer})),a=Object(_.c)((function(e){return e.ui.theme})),r=Object(n.useState)(!0),c=Object(w.a)(r,2),o=c[0],i=c[1],s=Object(n.useState)(0),l=Object(w.a)(s,2),d=l[0],h=l[1],u=Object(_.b)(),p=Object(_.c)((function(e){return e.ui.loading})),j=function(e){var t="".concat(100*e).split(".")[0],a=parseInt(t[t.length-1]);return 1===a&&"11"!==t?t+"st":2===a?t+"nd":3===a?t+"rd":t+"th"};function f(a){var n=a.target.options;h(t.stats.all[n.selectedIndex]),function(e,t){var a=parseFloat(S.n("#".concat(e,"Svg")).style("width")),n={left:.05*a,right:.05*a,top:.015*a,bottom:100},r=S.l().domain([0,100]).range([n.left,a-n.right]);S.n("#percentilePoint").transition().duration(1e3).attr("cx",r(100*t))}(e.id,t.stats.all[n.selectedIndex].percentile),u(g.setPlayerChartData({id:e.id,data:t.stats.all[n.selectedIndex].percentile,type:"percentile"}))}return Object(n.useEffect)((function(){p||(h(t.stats.all[0]),z(e.id,t.stats.all[0].percentile,a),u(g.setPlayerChartData({id:e.id,data:t.stats.all[0].percentile,type:"percentile"})),i(!1))}),[e.id,t,u,p,a]),Object(b.jsxs)("div",{className:H.a.container,children:[p&&Object(b.jsx)(D,{}),!p&&Object(b.jsxs)("div",{className:H.a.filter,style:{color:a.tertiary,backgroundColor:a.primary},children:[Object(b.jsx)("span",{children:"General Stats By Hero (All Matches)"}),Object(b.jsx)("select",{onChange:f,children:t.stats.all.map((function(e,t){return Object(b.jsx)("option",{children:e.name},"statInfoOption".concat(t))}))})]}),!p&&Object(b.jsxs)("div",{className:H.a.fill,style:{color:a.tertiary,backgroundColor:a.primary},children:[!o&&Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("div",{className:H.a.statAmount,children:S.f(",")(d.value.toFixed(0))}),Object(b.jsxs)("div",{children:["Rank: ",d.ranking]}),Object(b.jsxs)("div",{children:[j(d.percentile)," percentile"]})]}),Object(b.jsx)("div",{id:e.id})]})]})},W=function(e){var t=Object(_.c)((function(e){return e.ui.theme}));return Object(b.jsxs)("div",{className:k.a.Container,style:{backgroundColor:t.secondary},children:[Object(b.jsxs)("div",{className:k.a.rowContainer,children:[Object(b.jsx)("div",{className:k.a.rowItem,children:Object(b.jsx)(F,{id:"pieChart"})}),Object(b.jsx)("div",{className:k.a.rowItem,children:Object(b.jsx)(G,{id:"pLine"})})]}),Object(b.jsx)("div",{className:k.a.SubContainer,children:Object(b.jsx)(U,{id:"lineChart"})})]})},q=a(54),J=a.n(q),Y=Object(y.b)({name:"ui",initialState:{searchFilter:"",order:"byPlayer",pageFound:!0,loading:!0,theme:{primary:null,secondary:null,tertiary:null},logoPath:null},reducers:{setTheme:function(e,t){var a=t.payload.colors;e.theme={primary:a.Primary,secondary:a.Secondary,tertiary:a.Tertiary}},setThemeDefault:function(e,t){e.theme={primary:"#fff",secondary:"rgba(230, 230, 230, 0.8)",tertiary:"#000"}},setLoading:function(e,t){e.loading=t.payload},setLogoPath:function(e,t){e.logoPath=t.payload},setPageFound:function(e,t){e.pageFound=t.payload},setSearchFilter:function(e,t){e.searchFilter=t.payload},setOrder:function(e,t){e.order=t.payload}}}),Z=Y.actions,X=Y.reducer,Q=function(e){var t=Object(_.c)((function(e){return e.ui.theme})),a=Object(_.b)();return Object(n.useEffect)((function(){S.o("svg").remove(),a(Z.setThemeDefault())}),[a]),Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("div",{className:J.a.headerContainer,style:{backgroundColor:t.secondary},children:Object(b.jsx)("div",{className:J.a.playerHeader,children:e.name})}),Object(b.jsx)(W,{})]})},K=a(73),$=a.n(K),ee=function(){return Object(b.jsx)("div",{className:$.a.error,children:"Page Not Found"})},te=function(e){var t=Object(d.useParams)(),a=Object(_.b)(),r=Object(n.useState)(!0),c=Object(w.a)(r,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var n,r,c,o,l,d,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(Z.setLoading(!0)),e.next=3,fetch("".concat("https://overwatch-league-dashboard-447f86325626.herokuapp.com/","api/v1/players/").concat(t.name));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,404===n.status){e.next=25;break}return i(!0),c=r.foundPlayer.teamName.split(" "),e.next=12,fetch("".concat("https://overwatch-league-dashboard-447f86325626.herokuapp.com/","api/v1/teams/colors/").concat(c[c.length-1]));case 12:return o=e.sent,e.next=15,o.json();case 15:l=e.sent,a(Z.setTheme(l)),a(g.setPlayer(r.foundPlayer)),d=r.foundPlayer,h=[],d.stats.all.forEach((function(e){var t=!0;d.stats.byHero.forEach((function(a){"undefined"==typeof a.stats.find((function(t){return t.name===e.name}))&&(t=!1)})),t&&"NULL"!==e.name&&"Weapon Accuracy"!==e.name&&h.push(e.name)})),a(g.setCommonStats(h)),a(Z.setLoading(!1)),e.next=26;break;case 25:i(!1);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t.name]),Object(b.jsxs)("div",{children:[!o&&Object(b.jsx)(ee,{}),o&&Object(b.jsx)(Q,{name:t.name})]})},ae=a(7),ne=function(e,t){var a,n=Object(ae.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;S.n("#".concat(r.id)).selectAll("svg").remove(),"line"===r.type&&B(r.id,r.data,r.selection,!1,t),"pie"===r.type&&A(r.id,r.data,r.selection,!1,t,r.xmlPath),"percentile"===r.type&&z(r.id,r.data,t,!1)}}catch(c){n.e(c)}finally{n.f()}},re=a(55),ce=a.n(re),oe=a(74),ie=function(e){return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)("span",{"data-tip":!0,"data-for":e.id,className:ce.a.content,children:e.text}),Object(b.jsx)(oe.a,{className:ce.a.tooltip,backgroundColor:"white",textColor:"black",border:!0,borderColor:"black",id:e.id,place:"top",effect:"float",children:e.tipText})]})},se=a(27),le=a.n(se),de=a(16),he=a.n(de),ue=function(e){var t=Object(n.useState)(!1),a=Object(w.a)(t,2),r=a[0],c=a[1],o=Object(n.useRef)();return Object(n.useEffect)((function(){r&&o.current.scrollIntoView({behavior:"smooth"})}),[r]),Object(b.jsxs)("div",{className:he.a.main,children:[Object(b.jsxs)("div",{className:he.a.header,onClick:function(){c((function(e){return!e}))},children:[Object(b.jsx)("div",{className:he.a.left,children:e.header}),Object(b.jsx)("div",{className:r?he.a.checkUp:he.a.checkDown})]}),r&&Object(b.jsx)("div",{ref:o,className:he.a.content,children:e.children})]})},pe=function(){var e="Overwatch",t="\n    Overwatch is a team-based first-person shooter video game.\n    ",a="esports",n="\n      Electronic sports, video games played competitively by professional gamers for spectators.\n      ";return Object(b.jsx)(r.a.Fragment,{children:Object(b.jsxs)("div",{className:le.a.about,children:[Object(b.jsx)("div",{className:le.a.paragraphs,children:"\u2003 Hello, my name is Brian Basaldua and this is my first full stack web app that I have produced to demonstrate my web development capabilites. Before I list what went into making this project, let me start off by describing what my idea was for this project and why."}),Object(b.jsxs)("div",{className:le.a.paragraphs,children:["\u2003 I wanted to make something that was fun for me but that I could also use to demonstrate and incorporate commonly sought out technologies/skills for web development. I am a big fan of \xa0",Object(b.jsx)(ie,{text:e,tipText:t,id:"ow"}),", and it's \xa0",Object(b.jsx)(ie,{text:a,tipText:n,id:"esports"})," ","scene called the Overwatch League. On their official website, they have a list of all of the players. When you click on their profile it takes you to a very minimal player info page. I thought this was odd as they have very in-depth stats on each of the players. Instead they opted to make a seperate stats page using tableu, which attempts to show this data in a very convoluted way that includes all players and teams in one dashboard. And most of the 'visualization' is just basic tables. I thought it would be nice to come up with a simple concept for a player page with a much nicer and 'visual' dashboard. This is an ongoing personal project that I will update over time as there are things i want to fix and A LOT of things i want to add."]}),Object(b.jsx)("div",{className:le.a.paragraphs,children:"Technologies/Skills Summary:"}),Object(b.jsxs)(ue,{header:"MERN Stack",children:[Object(b.jsx)(ue,{header:"MongoDB",children:Object(b.jsxs)("p",{children:["Used as my database.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Used alongside Mongoose.js to easily connect to specific collections in my database. Also created basic models and schemas for my documents."]})}),Object(b.jsx)(ue,{header:"Express.js",children:Object(b.jsxs)("p",{children:["Main web app framework to create server",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Handling various routes including REST API routes and serving frontend code",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Overwatch does not have an offical API, so i created a very basic REST API that only supports a few endpoints. These endpoints only support GET requests and are used to retrieve different types of data.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Also created controllers in conjunction with mongoose to handle get requests and pull from database",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Added approriate middleware for development and production"]})}),Object(b.jsx)(ue,{header:"React",children:Object(b.jsxs)("p",{children:["Frontend framework for layout and UI",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Used function based components and a variety of hooks",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Demonstrates my knowledge of html, css, and javascript in the form of jsx.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Web app is responsive",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Used react-redux for state management and even more managable state slices. Slice examples include, changing global player data state, so that it can trigger changes in chart components.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Used react-router to handle routes for multi-page SPA",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Other best useful best practice's assoiciated with react such as using CSS modules and environment variables."]})}),Object(b.jsx)(ue,{header:"Node.js",children:Object(b.jsxs)("p",{children:["Using a variety of node packages to acheieve additonal functionality.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"As stated above, the overwatch league website does not have an offical API, instead they upload and update zipped CSV files of the stats. Manually downloading the files is tedious, so i used a few packages to automate this process. Namely, Puppeteer, Axios and Adm-zip. I use Puppeteer to scrape the website for the dynamic download link, then i make a request to the link url using Axios, and stream the data to Adm-zip which can unzip a file in a buffer. I then use my schemas to create structured player profile documents after parsing the CSV file. This data is then pushed to my player collection in my database, which i can then retrieve from my API."]})})]}),Object(b.jsx)(ue,{header:"D3.js",children:Object(b.jsxs)("p",{children:["Data visualization library for javascript",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Used various react functionality to imbed D3 code into react components such as useEffect() to render svg graphics after react component render. Also used useState, to change data shown in charts when the selection, from the select tag, is changed."]})})]})})},be=function(){return Object(b.jsx)(pe,{})},je=function(){return Object(b.jsx)(ee,{})},fe=a(39),me=a(8),xe=a.n(me),ye=function(e){var t,a=Object(_.b)(),r=Object(_.c)((function(e){return e.player.players})),c=Object(_.c)((function(e){return e.ui.order})),o=Object(_.c)((function(e){return e.ui.searchFilter})),i=function(e,t,a){return e[a]<t[a]?-1:e[a]<t[a]?1:0};"byPlayer"===c?(t=Array.from(r)).sort((function(e,t){return i(e,t,"name")})):"byTeam"===c&&(t=Array.from(r)).sort((function(e,t){return i(e,t,"teamName")}));var s=t.filter((function(e){return e.name.toUpperCase().startsWith(o.toUpperCase())})),l=Object(d.useHistory)(),h=Math.round(s.length/e.elemLimit),u=""===o?+e.pageNum:1;var p=function(e){l.push("/player/".concat(e))},j=function(e){c!==e&&a(Z.setOrder(e))};return Object(b.jsxs)("div",{className:xe.a.PlayerListLayout,children:[Object(b.jsxs)("div",{className:xe.a.Legend,children:[Object(b.jsxs)("span",{className:xe.a.LegendSpanItem,children:[Object(b.jsx)("span",{children:"Player Name"}),Object(b.jsx)("div",{className:xe.a.checkContainer,onClick:function(){j("byPlayer")},children:Object(b.jsx)("div",{className:"byPlayer"===c?xe.a.checkDown:xe.a.checkUp})})]}),Object(b.jsxs)("span",{className:xe.a.LegendSpanItem,children:[Object(b.jsx)("span",{children:"Team Name"}),Object(b.jsx)("div",{className:xe.a.checkContainer,onClick:function(){j("byTeam")},children:Object(b.jsx)("div",{className:"byTeam"===c?xe.a.checkDown:xe.a.checkUp})})]})]}),Object(b.jsx)("ul",{className:xe.a.PlayerList,children:function(t){var a=u*e.elemLimit-e.elemLimit,r=u*e.elemLimit,c=s.slice(a,r);return Object(b.jsx)(n.Fragment,{children:c.map((function(e,t){return Object(b.jsxs)("li",{onClick:function(){p(e.name)},children:[Object(b.jsx)("span",{style:{cursor:"pointer"},children:e.name}),Object(b.jsx)("span",{children:e.teamName})]},e._id)}))})}()}),Object(b.jsxs)("div",{className:xe.a.pages,children:[Object(b.jsx)("button",{onClick:function(){1!==u&&l.push("/players/".concat(u-1))},children:"prev"}),function(e){var t=new Array(e).fill().map((function(e,t){return t+1}));return Object(b.jsx)(n.Fragment,{children:t.map((function(e){return Object(b.jsx)("div",{onClick:function(){!function(e){u!==e&&l.push("/players/".concat(e))}(e)},className:e===u?xe.a.selected:xe.a.notSelected,children:e},"page".concat(e))}))})}(h),Object(b.jsx)("button",{onClick:function(){u!==h&&l.push("/players/".concat(u+1))},children:"next"})]})]})},Oe=a(42),ge=a.n(Oe),ve=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.ui.searchFilter}));return Object(b.jsx)("div",{className:ge.a.container,children:Object(b.jsx)("div",{className:ge.a.fit,children:Object(b.jsx)("input",{type:"text",placeholder:"Search Player",className:ge.a.search,onChange:function(t){e(Z.setSearchFilter(t.target.value))},value:t})})})},_e=function(){var e=Object(fe.useParams)();return Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(ve,{}),Object(b.jsx)(ye,{elemLimit:10,pageNum:e.page})]})};var we=function(){var e=Object(_.b)(),t=Object(_.c)((function(e){return e.player.playerChartData})),a=Object(fe.useLocation)(),r=Object(_.c)((function(e){return e.ui.theme}));return Object(n.useEffect)((function(){window.onresize=function(){a.pathname.includes("/player/")&&ne(t,r)}}),[t,a,r]),Object(n.useEffect)((function(){(function(){var t=Object(l.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://overwatch-league-dashboard-447f86325626.herokuapp.com/","api/v1/players/all"));case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e(g.setPlayers(n.players));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(b.jsx)(x,{children:Object(b.jsxs)(d.Switch,{children:[Object(b.jsx)(d.Route,{path:"/",exact:!0,children:Object(b.jsx)(d.Redirect,{to:"players/1"})}),Object(b.jsx)(d.Route,{path:"/players/:page",children:Object(b.jsx)(_e,{})}),Object(b.jsx)(d.Route,{path:"/players",children:Object(b.jsx)(d.Redirect,{to:"players/1"})}),Object(b.jsx)(d.Route,{path:"/player/:name",children:Object(b.jsx)(te,{})}),Object(b.jsx)(d.Route,{path:"/about",children:Object(b.jsx)(be,{})}),Object(b.jsx)(d.Route,{path:"*",children:Object(b.jsx)(je,{})})]})})},Ce=Object(y.a)({reducer:{player:v,ui:X}});o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(_.a,{store:Ce,children:Object(b.jsx)(h.a,{children:Object(b.jsx)(we,{})})})}),document.getElementById("root"))},25:function(e,t,a){e.exports={header:"MainNav_header__2251v",nav:"MainNav_nav__1ovUG",active:"MainNav_active__3zBFd"}},26:function(e,t,a){e.exports={container:"StatInfo_container__3PTip",fill:"StatInfo_fill__2ABpX",statAmount:"StatInfo_statAmount__1qqv5",filter:"StatInfo_filter__1vFWr",frag:"StatInfo_frag__7Ecxk",pLine:"StatInfo_pLine__2Ai4T"}},27:function(e,t,a){e.exports={about:"AboutConent_about__248L1",paragraphs:"AboutConent_paragraphs__2gULn",triggersd:"AboutConent_triggersd__16Y8p",header:"AboutConent_header__3ombs",left:"AboutConent_left__34wTf",check:"AboutConent_check__16Aor"}},40:function(e,t,a){e.exports={PieChart:"PieChart_PieChart__1uywb",image:"PieChart_image__3vvRi",fill:"PieChart_fill__2EOnJ",fill2:"PieChart_fill2__3ZJ4-",filter:"PieChart_filter__3C0Rd"}},41:function(e,t,a){e.exports={RectChart:"LineChart_RectChart__2rAhs",fill:"LineChart_fill__GCINh",filter:"LineChart_filter__9BMcQ"}},42:function(e,t,a){e.exports={container:"SearchBar_container__2iS1m",fit:"SearchBar_fit__8pYHG",search:"SearchBar_search__2390V"}},54:function(e,t,a){e.exports={headerContainer:"DashBoard_headerContainer__1zadd",playerHeader:"DashBoard_playerHeader__ikJBa"}},55:function(e,t,a){e.exports={tooltip:"TextToolTip_tooltip__1bDbN",content:"TextToolTip_content__43o1A"}},70:function(e,t,a){e.exports={Layout:"Layout_Layout__1cR-P"}},72:function(e,t,a){e.exports={card:"LoadingCard_card__3_G_r",loading:"LoadingCard_loading__1e2lU"}},73:function(e,t,a){e.exports={error:"NotFoundError_error__2l1o2"}},8:function(e,t,a){e.exports={PlayerListLayout:"List_PlayerListLayout__YNHC3",Legend:"List_Legend__2An3h",LegendSpanItem:"List_LegendSpanItem__2rYJT",checkContainer:"List_checkContainer__sC6UX",checkDown:"List_checkDown__quz2G",checkUp:"List_checkUp__2aSqx",PlayerList:"List_PlayerList__33A6B",pages:"List_pages__1WjNl",selected:"List_selected__29dsj",notSelected:"List_notSelected__1C2R-"}}},[[202,1,2]]]);