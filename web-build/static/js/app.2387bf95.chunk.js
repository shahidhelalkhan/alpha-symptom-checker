(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{486:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));n(500);var a=n(2),o=(n(846),n(1)),r=n.n(o),c=n(858),i=n(22),l=n.n(i),s=n(4),u=n(29),m=n(63),f=n(38),g=n(62);var h=function(){return r.a.createElement(s.a,{style:{flex:1,justifyContent:"center",alignItems:"center"}},r.a.createElement(g.a,{size:"large",color:"#84CAE7"}))},d=n(529),p="https://sandbox-authservice.priaid.ch",E=function(e){var t=e.token,n=e.navigation,a=Object(o.useState)(!1),c=l()(a,2),i=c[0],h=(c[1],Object(o.useState)(0)),d=l()(h,2),p=d[0],E=d[1];return r.a.createElement(s.a,{style:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#fff"}},r.a.createElement(u.a,{style:{padding:10,fontSize:20}},"Alpha Symptom Checker"),r.a.createElement(m.a,{placeholder:"Age",style:{padding:10,borderBottomWidth:1,borderBottomColor:"red"},onChangeText:function(e){return E(e)}}),r.a.createElement(f.a,{onPress:function(){localStorage.setItem("age",p),n.navigate("symptoms",{token:t})},style:{padding:15,backgroundColor:"#84CAE7",marginTop:10}},i?r.a.createElement(g.a,{size:"small",color:"white"}):r.a.createElement(u.a,{style:{color:"white"}},"Continue")))};var v=function(e){var t=Object(o.useState)(!0),n=l()(t,2),a=n[0],c=n[1],i=Object(o.useState)(null),s=l()(i,2),u=s[0],m=s[1];return Object(o.useEffect)((function(){(function(){var e=d.HmacMD5(p+"/login","f3C8Lnp5K7ZaHz49T").toString(d.enc.Base64);return fetch(p+"/login",{method:"POST",headers:{Authorization:"Bearer shahidhelalkhan@gmail.com:"+e}}).then((function(e){return e.json()}))})().then((function(e){m(e.Token),c(!1)})).catch((function(e){return console.log(e)}))}),[]),a?r.a.createElement(h,null):r.a.createElement(E,{token:u,navigation:e.navigation})},y=n(27),b=n.n(y),j=n(107),S=n(206),k=n(45),C={getSymptoms:function(e){return fetch("https://sandbox-healthservice.priaid.ch/symptoms?language=en-gb&format=json&token="+e,{method:"GET"}).then((function(e){return e.json()}))},getDiagnosis:function(e,t){var n=t.symptoms,a=t.year;return fetch("https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=["+n.map((function(e){return e.ID})).join(",")+"]&language=en-gb&format=json&token="+e+"&gender=male&year_of_birth="+a,{method:"GET"}).then((function(e){return e.json()}))}},O=n(290),x=n(485),I=function(){var e=Object(o.useState)(""),t=l()(e,2),n=t[0],a=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{lightTheme:!0,round:!0,placeholder:"Start typing symptoms",onChangeText:function(e){return a(e)},value:n}))};var T=a.a.create({container:{flex:1,marginTop:k.a.currentHeight||0},item:{backgroundColor:"purple",padding:20,marginVertical:8,marginHorizontal:16},title:{fontSize:16,color:"#fff"}}),w=function(e){var t=Object(o.useState)(!0),n=l()(t,2),a=n[0],c=n[1],i=Object(o.useState)(!1),s=l()(i,2),m=s[0],g=(s[1],Object(o.useState)(e.route.params.token)),d=l()(g,2),p=d[0],E=(d[1],Object(o.useState)(null)),v=l()(E,2),y=v[0],k=v[1];Object(o.useEffect)((function(){C.getSymptoms(p).then((function(e){k(e),c(!1)}))}),[]);var x=function(e,t){var n=b()(y);n[e].selected=!t,k(n)};return a?r.a.createElement(h,null):r.a.createElement(S.a,{style:T.container},r.a.createElement(j.a,{style:{height:450},data:y,renderItem:function(e){var t=e.item,n=e.index;return t.selected?r.a.createElement(O.Chip,{icon:"checkbox-marked",onClose:function(){return x(n,t.selected)}},t.Name):r.a.createElement(O.Chip,{icon:"information",onPress:function(){return x(n,t.selected)}},t.Name)},keyExtractor:function(e){return e.Name},ListHeaderComponent:I}),r.a.createElement(f.a,{style:{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#84CAE7"},onPress:function(){return function(){var t=[];y.map((function(e){e.selected&&t.push(e)})),e.navigation.navigate("diagnosis",{symptoms:t,token:p})}()}},m?r.a.createElement(ActivityIndicator,{size:"small",color:"white"}):r.a.createElement(u.a,{style:{color:"white"}},"Continue")))};var A=function(e){var t=Object(o.useState)(e.route.params.symptoms),n=l()(t,2),a=n[0],c=(n[1],Object(o.useState)(e.route.params.token)),i=l()(c,2),m=i[0],f=(i[1],Object(o.useState)([])),g=l()(f,2),d=g[0],p=g[1],E=Object(o.useState)(!0),v=l()(E,2),y=v[0],b=v[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("age");console.log(e),C.getDiagnosis(m,{symptoms:a,year:"1992"}).then((function(e){b(!1),console.log(e),p(e)})).catch((function(e){return console.log(e)}))}),[]),y?r.a.createElement(h,null):r.a.createElement(s.a,{style:{flex:1,alignItems:"center"}},r.a.createElement(j.a,{style:{height:450},data:d,renderItem:function(e){return r.a.createElement(u.a,null,e.item.Issue.Name)},keyExtractor:function(e){return e.Name}}))};var z=function(){var e=Object(c.a)();return r.a.createElement(e.Navigator,{initialRouteName:"home"},r.a.createElement(e.Screen,{name:"home",component:v,options:{title:"Home",headerTitleAlign:"center"}}),r.a.createElement(e.Screen,{name:"symptoms",component:w,options:{title:"Select Symptoms",headerTitleAlign:"center"}}),r.a.createElement(e.Screen,{name:"diagnosis",component:A,options:{title:"Diagnosis"}}))},N=n(426);function H(){return o.createElement(N.a,null,o.createElement(z,null))}a.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},498:function(e,t,n){n(499),e.exports=n(847)},499:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))},535:function(e,t){},537:function(e,t){},547:function(e,t){},549:function(e,t){},574:function(e,t){},576:function(e,t){},577:function(e,t){},582:function(e,t){},584:function(e,t){},591:function(e,t){},593:function(e,t){},611:function(e,t){},614:function(e,t){},630:function(e,t){},633:function(e,t){}},[[498,1,2]]]);
//# sourceMappingURL=app.2387bf95.chunk.js.map