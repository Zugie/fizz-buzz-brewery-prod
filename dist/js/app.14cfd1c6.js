(function(e){function t(t){for(var a,i,o=t[0],c=t[1],l=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var c=r[o];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("71ec"),n=r.n(a);n.a},"2d1b":function(e,t,r){"use strict";var a=r("db0a"),n=r.n(a);n.a},"39c7":function(e,t,r){"use strict";var a=r("efc9"),n=r.n(a);n.a},"4e09":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary"}},[r("v-icon",{attrs:{color:"info"},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}},[e._v("mdi-menu")]),r("v-toolbar-title",[r("router-link",{attrs:{id:"nav-bar-title",to:{name:"home"}}},[r("v-icon",{staticClass:"pa-2 ma-2",attrs:{color:"info"}},[e._v("mdi-glass-mug-variant")]),e._v("Brewery Friend Finder\n      ")],1)],1),r("v-spacer"),e.getUser()?r("v-toolbar-title",{attrs:{id:"nav-bar-name"}},[e._v(e._s(e.getUser().sub)+"\n    ")]):e._e()],1),r("v-navigation-drawer",{attrs:{temporary:"",app:"",color:"primary"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",[e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{color:"info",dark:"",link:"",to:t.route,beerList:e.favoriteBeersList}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),e.getUser()?e._e():r("v-list-item",{attrs:{color:"info",dark:"",link:"",to:"/login",beerList:e.favoriteBeersList}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-login")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Login")])],1)],1),e.getUser()?e._e():r("v-list-item",{attrs:{color:"info",dark:"",link:"",to:"/register",beerList:e.favoriteBeersList}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-account-plus")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Register")])],1)],1),e.getUser()?r("v-list-item",{attrs:{color:"info",dark:"",link:"",to:"/logout",beerList:e.favoriteBeersList}},[r("v-list-item-icon",[r("v-icon",[e._v("mdi-logout")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Logout")])],1)],1):e._e()],2)],1),r("router-view",{on:{"toggle-favorite":e.toggleFavoriteBeer}}),r("v-footer",{staticStyle:{color:"#e9c46a"},attrs:{dark:"",color:"primary"}},[e._v("© "+e._s(e.year)+" Allen Deckert, Joe Zugelter, Kris Lane, Travis Hyde"),r("v-spacer"),r("a",{staticStyle:{color:"#264653"}},[e._v("Meet the Authors")])],1)],1)},s=[],i=(r("d25f"),r("6762"),r("2fdb"),r("a481"),r("28a5"),{getToken:function(){try{return localStorage.getItem("Authorization")}catch(e){return null}},saveToken:function(e){localStorage.setItem("Authorization",e)},destroyToken:function(){localStorage.removeItem("Authorization")},getUser:function(){var e=localStorage.getItem("Authorization"),t=null;if(e){var r=e.split(".")[1],a=r.replace(/-/g,"+").replace(/_/g,"/"),n=new Date/1e3,s=JSON.parse(window.atob(a));n>s.exp?this.destroyToken():t=s}return t},logout:function(){localStorage.removeItem("Authorization")}}),o={data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home",route:"/"},{title:"Beers",icon:"mdi-glass-mug-variant",route:"/beers"},{title:"Breweries",icon:"mdi-glass-mug",route:"/breweries"},{title:"About Us",icon:"mdi-iframe-braces",route:"/about"}],user:this.getUser(),favoriteBeersList:[],userId:0,year:Date}},methods:{getUser:function(){return i.getUser()},toggleFavoriteBeer:function(e){var t=this;this.favoriteBeersList.includes(e)||(this.favoriteBeersList=this.favoriteBeersList.filter((function(t){return t!=e})),fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/addfavbeer"),{method:"POST",headers:new Headers({Authorization:"Bearer "+i.getToken(),"Content-Type":"application/json"}),credentials:"same-origin",body:e}).then((function(r){r.ok&&t.favoriteBeersList.push(e)})).catch((function(e){return console.error(e)})))}},created:function(){this.user=i.getUser(),this.loggedIn=this.user,this.year=(new Date).getFullYear()}},c=o,l=(r("034f"),r("2877")),u=r("6544"),d=r.n(u),m=r("7496"),v=r("40dc"),p=r("553a"),h=r("132d"),f=r("8860"),b=r("da13"),g=r("5d23"),w=r("34c3"),y=r("f774"),_=r("2fa4"),C=r("2a7f"),V=Object(l["a"])(c,n,s,!1,null,null,null),x=V.exports;d()(V,{VApp:m["a"],VAppBar:v["a"],VFooter:p["a"],VIcon:h["a"],VList:f["a"],VListItem:b["a"],VListItemContent:g["a"],VListItemIcon:w["a"],VListItemTitle:g["b"],VNavigationDrawer:y["a"],VSpacer:_["a"],VToolbarTitle:C["a"]});r("759f");var k=r("8c4f"),B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"breweries secondary"},[r("search-brewery",{on:{filter:e.handleFilter}}),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},e._l(e.filteredBreweries,(function(t){return r("brewery",{key:t.id,staticClass:"brewery ma-5",attrs:{brewery:t,search:e.search}})})),1)],1)],1)},j=[],T=(r("7f7f"),r("4917"),r("386d"),r("3b2b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isSingleBrewery?r("v-row",{staticClass:"pa-10"},[r("v-col",{attrs:{xs:"8",md:"8"}},[r("v-card",{staticClass:"primary",attrs:{dark:"",hover:""}},[r("v-img",{staticClass:"align-end",attrs:{height:"500px","lazy-src":e.brewery.imageLocation,src:e.brewery.imageLocation,alt:e.brewery.name},on:{click:function(t){e.isHidden=!e.isHidden}}}),r("v-card-title",{staticClass:"headline",on:{click:function(t){e.isHidden=!e.isHidden}}},[e._v("\n        "+e._s(e.brewery.name)+"\n        "),r("v-spacer"),r("v-card-actions",[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v(e._s(e.isHidden?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1),r("v-expand-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.isHidden,expression:"isHidden"}]},[r("v-divider"),r("br"),e._v("\n          "+e._s(e.brewery.type)+"\n          "),r("strong",[e._v("|")]),e._v("\n          "+e._s(e.brewery.address_1)+" "+e._s(e.brewery.address_2)+" "+e._s(e.brewery.city)+", "+e._s(e.brewery.district)+" "+e._s(e.brewery.zipCode)+"\n          "),r("br"),e.brewery.established?r("p",[e._v("Established: "+e._s(e.brewery.established))]):e._e(),r("br"),e._v("\n          "+e._s(e.brewery.backgroundInfo)+"\n          "),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{text:""},on:{click:function(t){e.isHiddenBeer=!e.isHiddenBeer}}},[e._v("View Beers")]),e.isSingleBrewery?e._e():r("v-btn",{attrs:{to:{name:"singleBrewery",params:{id:e.brewery.id}}}},[e._v("View More Details")])],1),r("v-expand-transition",[r("v-row",e._l(e.beers,(function(t){return r("beer",{directives:[{name:"show",rawName:"v-show",value:e.isHiddenBeer,expression:"isHiddenBeer"}],key:t.id,attrs:{beer:t}})})),1)],1)],1)],1)],1)],1),r("v-col",{attrs:{cols:"4"}},[r("v-card",{attrs:{hover:"",id:"map"}},[r("iframe",{attrs:{width:"100%",height:"100%",id:"gmap_canvas",src:e.setMapSource,frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}})])],1)],1):r("v-col",{attrs:{xs:"12",sm:"9",md:"4",lg:"3"}},[r("v-card",{staticClass:"mx-auto primary",attrs:{dark:"",hover:""}},[r("v-img",{staticClass:"align-end",attrs:{height:"500px",width:"750px","lazy-src":e.brewery.imageLocation,src:e.brewery.imageLocation,alt:e.brewery.name},on:{click:function(t){e.isHidden=!e.isHidden}}}),r("v-card-title",{staticClass:"headline",on:{click:function(t){e.isHidden=!e.isHidden}}},[e._v("\n      "+e._s(e.brewery.name)+"\n      "),r("v-spacer"),r("v-card-actions",[r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v(e._s(e.isHidden?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1)],1),r("v-expand-transition",[r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.isHidden,expression:"isHidden"}]},[r("v-divider"),r("br"),e._v("\n        "+e._s(e.brewery.type)+"\n        "),r("strong",[e._v("|")]),e._v("\n        "+e._s(e.brewery.address_1)+" "+e._s(e.brewery.address_2)+" "+e._s(e.brewery.city)+", "+e._s(e.brewery.district)+" "+e._s(e.brewery.zipCode)+"\n        "),r("br"),e.brewery.established?r("p",[e._v("Established: "+e._s(e.brewery.established))]):e._e(),r("br"),e._v("\n        "+e._s(e.brewery.backgroundInfo)+"\n        "),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{text:""},on:{click:function(t){e.isHiddenBeer=!e.isHiddenBeer}}},[e._v("View Beers")]),e.isSingleBrewery?e._e():r("v-btn",{attrs:{to:{name:"singleBrewery",params:{id:e.brewery.id}}}},[e._v("View More Details")])],1),r("v-expand-transition",[r("v-row",e._l(e.beers,(function(t){return r("beer",{directives:[{name:"show",rawName:"v-show",value:e.isHiddenBeer,expression:"isHiddenBeer"}],key:t.id,attrs:{beer:t}})})),1)],1)],1)],1)],1)],1)}),A=[],S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{attrs:{align:"center"}},[r("v-card",{staticClass:"accent",attrs:{hover:"",dark:""}},[r("v-card-text",{staticClass:"title font-weight-bold"},[e._v(e._s(e.beer.name))]),r("v-container",[r("v-card-text",{staticStyle:{overflow:"hidden","text-overflow":"ellipsis",whitespace:"nowrap",height:"100px"}},[e._v(e._s(e.beer.description))]),r("v-img",{staticClass:"beer_image",attrs:{src:e.beer.imageLocation,alt:e.beer.beer_name,width:"250px",height:"250px",contain:""}}),r("fav-toggle-button",{attrs:{beerList:e.beerList,beerId:e.beer.id},on:{"toggle-favorite":e.toggleFavorite}}),r("v-card-text",{staticClass:"text"},[e._v(" "+e._s(e.beer.abv)+" | IBU: "+e._s(e.beer.ibu)+" | "+e._s(e.beer.type)+" ")])],1),0==e.isSingleBeer?r("v-btn",{attrs:{text:"",to:{name:"singleBeer",params:{id:e.beer.id}}}},[e._v("View beer info")]):e._e()],1)],1)},E=[],L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-btn",{attrs:{icon:""},on:{click:e.toggleFavorite}},[e.isFav?r("v-icon",{attrs:{color:"info"}},[e._v("mdi-glass-mug-variant")]):e._e(),e.isFav?e._e():r("v-icon",[e._v("mdi-glass-mug-variant")])],1)},F=[],I=(r("c5f6"),{name:"FavToggleButton",data:function(){return{isFav:!1}},props:{beerId:Number,beerList:[]},methods:{toggleFavorite:function(){this.isFav=!this.isFav,this.$emit("toggle-favorite",this.beerId)}},created:function(){this.isFav=this.beerList.includes(this.beerId)}}),O=I,$=r("8336"),H=Object(l["a"])(O,L,F,!1,null,null,null),R=H.exports;d()(H,{VBtn:$["a"],VIcon:h["a"]});var P={components:{FavToggleButton:R},name:"beer",props:{beer:Object,isSingleBeer:Boolean,beerList:[]},data:function(){return{singleBeer:{}}},methods:{toggleFavorite:function(e){this.$emit("toggle-favorite",e)}}},M=P,z=(r("39c7"),r("b0af")),q=r("99d9"),U=r("62ad"),D=r("a523"),N=r("adda"),G=Object(l["a"])(M,S,E,!1,null,"4185b801",null),J=G.exports;d()(G,{VBtn:$["a"],VCard:z["a"],VCardText:q["b"],VCol:U["a"],VContainer:D["a"],VImg:N["a"]});var Q={name:"brewery",data:function(){return{isHidden:!1,beers:[],isHiddenBeer:!1,colSizes:{},mapSource:""}},components:{Beer:J},props:{brewery:Object,isSingleBrewery:Boolean},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/beers/").concat(this.brewery.id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.beers=t})).catch((function(e){return console.error(e)})),this.setMapSource()},computed:{setMapSource:function(){return"https://maps.google.com/maps?q=".concat(this.brewery.name,"&t=&z=13&ie=UTF8&iwloc=&output=embed")}}},K=Q,Z=(r("2d1b"),r("ce7e6")),Y=r("0789"),W=r("0fd9"),X=Object(l["a"])(K,T,A,!1,null,"48ef41cd",null),ee=X.exports;d()(X,{VBtn:$["a"],VCard:z["a"],VCardActions:q["a"],VCardText:q["b"],VCardTitle:q["c"],VCol:U["a"],VDivider:Z["a"],VExpandTransition:Y["a"],VIcon:h["a"],VImg:N["a"],VRow:W["a"],VSpacer:_["a"]});var te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},[r("v-col",{attrs:{sm:"12",md:"9",lg:"9",justify:"center"}},[r("v-text-field",{attrs:{id:"search",name:"search",label:"Filter Breweries",color:"primary",dark:""},on:{keyup:e.filter}})],1)],1)],1)},re=[],ae={data:function(){return{apiURL:""}},methods:{filter:function(){var e=document.getElementById("search").value;this.$emit("filter",e)}}},ne=ae,se=r("8654"),ie=Object(l["a"])(ne,te,re,!1,null,null,null),oe=ie.exports;d()(ie,{VCol:U["a"],VContainer:D["a"],VRow:W["a"],VTextField:se["a"]});var ce={components:{Brewery:ee,SearchBrewery:oe},name:"home",data:function(){return{breweries:[],search:""}},methods:{handleFilter:function(e){this.search=e}},computed:{filteredBreweries:function(){var e=new RegExp(this.search,"i");return this.breweries.filter((function(t){return t.name.match(e)}))}},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/breweries"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.breweries=t})).catch((function(e){return console.error(e)}))}},le=ce,ue=r("a75b"),de=Object(l["a"])(le,B,j,!1,null,null,null),me=de.exports;d()(de,{VContainer:D["a"],VContent:ue["a"],VRow:W["a"]});var ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{staticClass:"fill-height secondary",attrs:{fluid:""}},[r("v-card-text",{attrs:{id:"login"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12 accent"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Please Sign In")])],1),r("v-card-text",[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[e.invalidCredentials?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Invalid username and password!")]):e._e(),this.$route.query.registration?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v("Thank you for registering, please sign in.")]):e._e(),r("v-text-field",{attrs:{id:"username",label:"Username",name:"username","prepend-icon":"mdi-glass-mug-variant",type:"text",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),r("v-text-field",{staticClass:"form-control",attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-textbox-password",type:"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("v-card-actions",[r("router-link",{attrs:{to:{name:"register"}}},[e._v("Need an account?")]),r("v-spacer"),r("v-btn",{staticClass:"primary",attrs:{type:"submit"}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},pe=[],he={name:"login",components:{},data:function(){return{user:{username:"",password:""},invalidCredentials:!1}},methods:{login:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/Account/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.user)}).then((function(t){if(t.ok)return t.text();e.invalidCredentials=!0})).then((function(t){void 0!=t&&(t.includes('"')&&(t=t.replace(/"/g,"")),i.saveToken(t),e.$router.push("/"))})).catch((function(e){return console.error(e)}))}}},fe=he,be=r("4bd4"),ge=r("71d9"),we=Object(l["a"])(fe,ve,pe,!1,null,null,null),ye=we.exports;d()(we,{VBtn:$["a"],VCard:z["a"],VCardActions:q["a"],VCardText:q["b"],VCol:U["a"],VContainer:D["a"],VContent:ue["a"],VForm:be["a"],VRow:W["a"],VSpacer:_["a"],VTextField:se["a"],VToolbar:ge["a"],VToolbarTitle:C["a"]});var _e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",[r("v-container",{staticClass:"fill-height secondary",attrs:{fluid:""}},[r("v-card-text",{attrs:{id:"register"}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[r("v-card",{staticClass:"elevation-12 accent"},[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Create Account")])],1),r("v-card-text",[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[e.registrationErrors?r("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\r\n                  There were problems registering this user.\r\n                ")]):e._e(),r("v-text-field",{attrs:{id:"username",label:"Username",name:"username","prepend-icon":"mdi-glass-mug-variant",type:"text",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),r("v-text-field",{staticClass:"form-control",attrs:{id:"password",label:"Password",name:"password","prepend-icon":"mdi-textbox-password",type:"password",required:""},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),r("v-text-field",{staticClass:"form-control",attrs:{id:"confirm-password",label:"Confirm Password",name:"Confirm Password","prepend-icon":"mdi-textbox-password",type:"password",required:""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}}),r("v-card-actions",[r("router-link",{attrs:{to:{name:"login"}}},[e._v("\r\n        Have an account?\r\n      ")]),r("v-spacer"),r("v-btn",{staticClass:"primary",attrs:{type:"submit"}},[e._v("Create Account")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},Ce=[],Ve={name:"register",data:function(){return{user:{username:"",password:"",confirmPassword:"",role:"user"},registrationErrors:!1}},methods:{register:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/Account/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.user)}).then((function(t){t.ok?e.$router.push({path:"/login",query:{registration:"success"}}):e.registrationErrors=!0})).then((function(e){return console.error(e)}))}}},xe=Ve,ke=Object(l["a"])(xe,_e,Ce,!1,null,null,null),Be=ke.exports;d()(ke,{VBtn:$["a"],VCard:z["a"],VCardActions:q["a"],VCardText:q["b"],VCol:U["a"],VContainer:D["a"],VContent:ue["a"],VForm:be["a"],VRow:W["a"],VSpacer:_["a"],VTextField:se["a"],VToolbar:ge["a"],VToolbarTitle:C["a"]});var je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isSuccessful?r("div",{staticClass:"text-center",attrs:{id:"logout"}}):e._e()},Te=[],Ae={name:"logout",components:{},data:function(){return{isSuccessful:!1}},methods:{changeStatus:function(){this.isSuccessful=!0,this.$router.push({name:"home"})}},created:function(){i.logout(),this.changeStatus()}},Se=Ae,Ee=Object(l["a"])(Se,je,Te,!1,null,null,null),Le=Ee.exports,Fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"secondary",attrs:{light:"",flat:""}},[r("v-container",{staticClass:"secondary fill-height",attrs:{fluid:""}},[r("beer",{attrs:{beer:e.singleBeer,beerList:e.beerList,isSingleBeer:!0},on:{"toggle-favorite":e.toggleFavorite}})],1)],1)},Ie=[],Oe={components:{Beer:J},name:"singleBeer",props:{singleBeer:{},beerList:[]},methods:{toggleFavorite:function(e){this.$emit("toggle-favorite",e)}},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/beer/").concat(this.$route.params.id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.singleBeer=t})).catch((function(e){return console.error(e)}))}},$e=Oe,He=Object(l["a"])($e,Fe,Ie,!1,null,null,null),Re=He.exports;d()(He,{VContainer:D["a"],VContent:ue["a"]});var Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"secondary"},[0==e.beers.length?r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("v-card",{staticClass:"primary",attrs:{dark:""}},[r("v-card-text",[e._v("No beers matched your search :(")]),r("v-btn",{staticClass:"ma-3 pa-1",attrs:{to:"/beers",color:"accent"}},[e._v("See All Beers")])],1)],1)],1)],1):e._e(),r("beer-filter",{on:{filter:e.handleFilter}}),r("v-content",[r("v-row",{staticClass:"ma-auto",attrs:{justify:"center"}},e._l(e.filteredBeers,(function(t){return r("beer",{key:t.id,attrs:{beer:t,beerList:e.beerList},on:{"toggle-favorite":e.toggleFavorite}})})),1)],1)],1)},Me=[],ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},[r("v-col",{attrs:{sm:"12",md:"9",lg:"9",justify:"center"}},[r("v-text-field",{attrs:{id:"search",name:"search",label:"Filter Beers",color:"primary",dark:""},on:{keyup:e.filter}})],1)],1)],1)},qe=[],Ue={data:function(){return{apiURL:""}},methods:{filter:function(){var e=document.getElementById("search").value;this.$emit("filter",e)}}},De=Ue,Ne=Object(l["a"])(De,ze,qe,!1,null,null,null),Ge=Ne.exports;d()(Ne,{VCol:U["a"],VContainer:D["a"],VRow:W["a"],VTextField:se["a"]});var Je={components:{Beer:J,BeerFilter:Ge},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/beers/searchresults/").concat(this.$route.params.search),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.json().then((function(t){e.beers=t}))}))},data:function(){return{beers:[],search:""}},props:{beerList:[]},methods:{handleFilter:function(e){this.search=e},toggleFavorite:function(e){this.$emit("toggle-favorite",e)}},computed:{filteredBeers:function(){var e=new RegExp(this.search,"i");return this.beers.filter((function(t){return t.name.match(e)}))}}},Qe=Je,Ke=Object(l["a"])(Qe,Pe,Me,!1,null,null,null),Ze=Ke.exports;d()(Ke,{VBtn:$["a"],VCard:z["a"],VCardText:q["b"],VCol:U["a"],VContainer:D["a"],VContent:ue["a"],VRow:W["a"]});var Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"secondary",attrs:{light:"",flat:""}},[r("v-row",{attrs:{justify:"center"}},[r("brewery",{attrs:{brewery:e.brewery,isSingleBrewery:!0}})],1)],1)},We=[],Xe={components:{Brewery:ee},name:"singleBrewery",data:function(){return{brewery:{id:this.$route.params.id}}},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/breweries/").concat(this.$route.params.id),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.brewery=t})).catch((function(e){return console.error(e)}))}},et=Xe,tt=Object(l["a"])(et,Ye,We,!1,null,"cc4af182",null),rt=tt.exports;d()(tt,{VContent:ue["a"],VRow:W["a"]});var at=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"altlanding secondary",attrs:{align:"center"}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{md:"4",cols:"12",sm:"4"}},[r("v-card",{staticClass:"accent",attrs:{dark:""}},[r("brewery-search-card")],1)],1),r("v-col",{attrs:{md:"4",cols:"12",sm:"4"}},[r("v-container",[r("v-card",[r("v-carousel",{attrs:{height:"140px",continuous:"",cycle:"",dark:"",interval:"4000","show-arrows":"","show-arrows-on-hover":"",touch:""}},e._l(e.images,(function(e,t){return r("v-carousel-item",{key:t},[r("v-img",{attrs:{src:e,position:"center"}})],1)})),1)],1)],1)],1),r("v-col",{attrs:{md:"4",cols:"12",sm:"4"}},[r("v-card",{staticClass:"accent",attrs:{dark:""}},[r("search-beers")],1)],1)],1)],1)},nt=[],st=(r("ac6a"),r("f3e2"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},[r("v-col",{attrs:{sm:"12",md:"9",lg:"9",justify:"center"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.filterBeers(t)}}},[r("v-text-field",{attrs:{"v-model":e.searchBeer,type:"text",id:"searchbeer",name:"searchbeer",label:"Search For A Beer",color:"primary"}}),r("v-btn",{staticClass:"primary",attrs:{type:"submit"}},[e._v("Search")])],1)],1)],1)],1)}),it=[],ot={data:function(){return{apiURL:"",searchBeer:"",beers:[]}},methods:{filterBeers:function(){this.$router.push({name:"searchresults",params:{search:document.getElementById("searchbeer").value}})}}},ct=ot,lt=Object(l["a"])(ct,st,it,!1,null,null,null),ut=lt.exports;d()(lt,{VBtn:$["a"],VCol:U["a"],VContainer:D["a"],VForm:be["a"],VRow:W["a"],VTextField:se["a"]});var dt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},[r("v-col",{attrs:{sm:"12",md:"9",lg:"9",justify:"center"}},[r("v-form",{on:{submit:function(t){return t.preventDefault(),e.filterBreweries(t)}}},[r("v-text-field",{attrs:{"v-model":e.searchBrewery,type:"text",id:"searchbrewery",name:"searchbrewery",label:"Search For A Brewery",color:"primary"}}),r("v-btn",{staticClass:"primary",attrs:{type:"submit"}},[e._v("Search")])],1)],1)],1)],1)},mt=[],vt={data:function(){return{apiURL:"",searchBrewery:"",breweries:[]}},methods:{filterBreweries:function(){this.$router.push({name:"brewerysearchresults",params:{search:document.getElementById("searchbrewery").value}})}}},pt=vt,ht=Object(l["a"])(pt,dt,mt,!1,null,null,null),ft=ht.exports;d()(ht,{VBtn:$["a"],VCol:U["a"],VContainer:D["a"],VForm:be["a"],VRow:W["a"],VTextField:se["a"]});var bt={name:"altlanding",data:function(){return{breweries:[],images:[]}},components:{SearchBeers:ut,BrewerySearchCard:ft},methods:{setImages:function(){var e=this;this.breweries.forEach((function(t){e.images.push(t.imageLocation)}))}},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/breweries"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.breweries=t,e.setImages()})).catch((function(e){return console.error(e)}))}},gt=bt,wt=r("5e66"),yt=r("3e35"),_t=Object(l["a"])(gt,at,nt,!1,null,null,null),Ct=_t.exports;d()(_t,{VCard:z["a"],VCarousel:wt["a"],VCarouselItem:yt["a"],VCol:U["a"],VContainer:D["a"],VContent:ue["a"],VImg:N["a"],VRow:W["a"]});var Vt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"secondary"},[0==e.breweries.length?r("v-container",[r("v-row",[r("v-col",{attrs:{align:"center"}},[r("v-card",{staticClass:"primary",attrs:{dark:""}},[r("v-card-text",[e._v("No breweries matched your search :(")]),r("v-btn",{staticClass:"ma-3 pa-1",attrs:{to:"/breweries",color:"accent"}},[e._v("See All Breweries")])],1)],1)],1)],1):e._e(),r("search-brewery",{on:{filter:e.handleFilter}}),r("v-content",[r("v-row",{attrs:{dense:"",justify:"center"}},e._l(e.filteredBreweries,(function(e){return r("brewery",{key:e.id,attrs:{brewery:e}})})),1)],1)],1)},xt=[],kt={components:{Brewery:ee,SearchBrewery:oe},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/breweries/brewerysearchresults/").concat(this.$route.params.search),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(t){t.json().then((function(t){e.breweries=t}))}))},computed:{filteredBreweries:function(){var e=new RegExp(this.search,"i");return this.breweries.filter((function(t){return t.name.match(e)}))}},data:function(){return{breweries:[],search:""}},methods:{handleFilter:function(e){this.search=e}}},Bt=kt,jt=Object(l["a"])(Bt,Vt,xt,!1,null,null,null),Tt=jt.exports;d()(jt,{VBtn:$["a"],VCard:z["a"],VCardText:q["b"],VCol:U["a"],VContainer:D["a"],VContent:ue["a"],VRow:W["a"]});var At=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"secondary"},[r("v-row",[r("v-col",[r("v-carousel",{attrs:{continuous:"",cycle:"",dark:"",interval:"4000","show-arrows":"","show-arrows-on-hover":""}},e._l(e.images,(function(e,t){return r("v-carousel-item",{key:t},[r("v-img",{attrs:{src:e,height:"500px",position:"center"}})],1)})),1)],1)],1),r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10",md:"4",xs:"10"}},[r("v-card",{staticClass:"accent",attrs:{dark:""}},[r("brewery-search-card")],1)],1),r("v-col",{attrs:{cols:"10",md:"4",xs:"10"}},[r("v-card",{staticClass:"accent",attrs:{dark:""}},[r("search-beers")],1)],1)],1)],1)},St=[],Et=(r("57e7"),{name:"altlandingtwo",data:function(){return{breweries:[],images:[]}},components:{SearchBeers:ut,BrewerySearchCard:ft},methods:{setImages:function(){for(var e=0;e<6;e++){var t=Math.floor(Math.random()*this.breweries.length),r=this.breweries[t].imageLocation;this.images.includes(r)&&(this.images.splice(this.images.indexOf(r),1),e--),this.images.push(this.breweries[t].imageLocation)}}},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/breweries"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.breweries=t,e.setImages()})).catch((function(e){return console.error(e)}))}}),Lt=Et,Ft=Object(l["a"])(Lt,At,St,!1,null,null,null),It=Ft.exports;d()(Ft,{VCard:z["a"],VCarousel:wt["a"],VCarouselItem:yt["a"],VCol:U["a"],VContent:ue["a"],VImg:N["a"],VRow:W["a"]});var Ot=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"beers secondary",attrs:{beerList:e.beerList}},[r("beer-filter",{on:{filter:e.handleFilter}}),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:"",justify:"center"}},e._l(e.filteredBeers,(function(t){return r("beer",{key:t.id,staticClass:"beer ma-5",attrs:{beerList:e.beerList,beer:t,search:e.search},on:{"toggle-favorite":e.toggleFavorite}})})),1)],1)],1)},$t=[],Ht={components:{Beer:J,BeerFilter:Ge},props:{beerList:[]},name:"beers",data:function(){return{beers:[],search:""}},methods:{handleFilter:function(e){this.search=e},toggleFavorite:function(e){this.$emit("toggle-favorite",e)}},computed:{filteredBeers:function(){var e=new RegExp(this.search,"i");return this.beers.filter((function(t){return t.name.match(e)}))}},created:function(){var e=this;fetch("".concat("https://sampleapi20200504200857.azurewebsites.net/api","/beers"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.beers=t})).catch((function(e){return console.error(e)}))}},Rt=Ht,Pt=Object(l["a"])(Rt,Ot,$t,!1,null,null,null),Mt=Pt.exports;d()(Pt,{VContainer:D["a"],VContent:ue["a"],VRow:W["a"]});var zt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-content",{staticClass:"about secondary"},[r("v-container",{attrs:{fluid:""}},[r("v-row",e._l(e.authors,(function(e){return r("author",{key:e.id,attrs:{author:e}})})),1)],1)],1)},qt=[],Ut=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-card",{staticClass:"primary",attrs:{dark:"",hover:""}},[r("v-row",{attrs:{dense:"",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-img",{staticClass:"ma-3",attrs:{src:e.author.src,"max-width":"200px"}})],1),r("v-col",{attrs:{cols:"6"}},[r("v-card-text",{staticClass:"headline"},[e._v(e._s(e.author.name))]),r("div",[e.readMoreActivated?e._e():r("span",[e._v(e._s(e.author.about.slice(0,150))+"...")]),e.readMoreActivated?e._e():r("a",{staticStyle:{color:"#264653"},attrs:{href:"#"},on:{click:e.activateReadMore}},[r("br"),e._v("\n              Read more...\n              ")]),e.readMoreActivated?r("span",{domProps:{innerHTML:e._s(e.author.about)}}):e._e()])],1)],1),r("v-row",{attrs:{align:"center",justify:"end"}},[r("v-btn",{staticClass:"mr-5 mb-2 secondary linkedin",attrs:{href:e.author.link}},[r("v-icon",[e._v("mdi-linkedin")])],1)],1)],1)],1)},Dt=[],Nt={name:"author",props:{author:{}},data:function(){return{readMoreActivated:!1}},methods:{activateReadMore:function(){this.readMoreActivated=!0}}},Gt=Nt,Jt=(r("5f5a"),Object(l["a"])(Gt,Ut,Dt,!1,null,null,null)),Qt=Jt.exports;d()(Jt,{VBtn:$["a"],VCard:z["a"],VCardText:q["b"],VCol:U["a"],VIcon:h["a"],VImg:N["a"],VRow:W["a"]});var Kt={components:{Author:Qt},data:function(){return{authors:[{id:1,name:"Allen Deckert",src:"https://media-exp1.licdn.com/dms/image/C4E03AQEdgkrK0yz0cw/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=TmDE6OAF1AnRsPaM8MLDQsvoQ25q8udm-el3y2V1UDU",link:"https://www.linkedin.com/in/allendeckert/",about:"I am someone who constantly is learning new things. I love to find interesting solutions to problems. My experience in a manufacturing setting allowed me to show my analytical and problem solving skills by catching problems and solving them before they began. In my transportation experience I saw a need for software solutions to common problems and decided to pursue education in software development, which led me to Tech Elevator. Having completed Tech Elevator, I am looking for a junior developer role where I can be a part of a team whose results have a positive impact on others."},{id:2,name:"Joe Zugelter",src:"https://media-exp1.licdn.com/dms/image/C4D03AQE_cPuk0esWSA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=82OTKBoqSFReTPood8-PpTrlqTlN1a50JBLyCbNd0Hw",link:"https://www.linkedin.com/in/joe-zugelter/",about:"I recently graduated from Tech Elevator, a full stack developer boot camp. I have a Master's degree in Electrical and Computer Engineering from the University of Texas. I started my own pedicab business, and recently I've been doing work in IT. I am currently enrolled in Tech Elevator, a full stack C#/.Net boot camp. I am looking for new opportunities as a software developer or engineer."},{id:3,name:"Kris Lane",src:"https://media-exp1.licdn.com/dms/image/C4E03AQH-5HfpNE5PeA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=EgwvkLH91gsy_RaVZqgSzogKRewbST7fmQ3ULVxh1aI",link:"https://www.linkedin.com/in/kristofer-kris-lane-211548141/",about:"Comes from a Print Press Operations background with a voracious appetite for learning new things. Detail-oriented, analytical, great communicator and, of course, always a team player! Recently graduated Tech Elevator .NET C# coding boot camp. Learned to use Test Driven Development, ASP.NET MVC architecture, MySQL Server as well as Vuejs, HTML, CSS and Javascript."},{id:4,name:"Travis Hyde",src:"https://media-exp1.licdn.com/dms/image/C4E03AQGMPmo4bO_rcA/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=L3pCUKMK8p4Dky2x5n6z8Yp6ul3gbObA3P3xdX_kPws",link:"https://www.linkedin.com/in/travishyde/",about:"Seeking junior software developer, business analyst, or SQL development position upon graduation from Tech Elevator. Open to other opportunities in related fields. Skilled technical writer (two courses at the University of North Texas). Strong communications and team leadership skills"}]}}},Zt=Kt,Yt=Object(l["a"])(Zt,zt,qt,!1,null,null,null),Wt=Yt.exports;d()(Yt,{VContainer:D["a"],VContent:ue["a"],VRow:W["a"]}),a["a"].use(k["a"]);var Xt=new k["a"]({mode:"history",base:"/",routes:[{path:"/breweries",name:"breweries",component:me,meta:{requiresAuth:!1}},{path:"/",name:"home",component:It,meta:{requiresAuth:!1}},{path:"/login",name:"login",component:ye,meta:{requiresAuth:!1}},{path:"/register",name:"register",component:Be,meta:{requiresAuth:!1}},{path:"/logout",name:"logout",component:Le,meta:{requiresAuth:!0}},{path:"/beer/:id",name:"singleBeer",component:Re,meta:{requiresAuth:!1}},{path:"/brewery/:id",name:"singleBrewery",component:rt,meta:{requiresAuth:!1}},{path:"/searchresults/:search",name:"searchresults",component:Ze,meta:{requiresAuth:!1}},{path:"/altlanding",name:"altlanding",component:Ct,meta:{requiresAuth:!1}},{path:"/brewerysearchresults/:search",name:"brewerysearchresults",component:Tt,meta:{requiresAuth:!1}},{path:"/altlandingtwo",name:"altlandingtwo",component:It,meta:{requiresAuth:!1}},{path:"/beers",name:"beers",component:Mt,meta:{requiresAuth:!1}},{path:"/about",name:"about",component:Wt,meta:{requiresAuth:!1}}]});Xt.beforeEach((function(e,t,r){var a=e.matched.some((function(e){return e.meta.requiresAuth})),n=i.getUser();a&&!n?r("/login"):r()}));var er=Xt,tr=r("f309");a["a"].use(tr["a"]);var rr=new tr["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#2A9D8F",error:"#ff8888",success:"#45a5ae",info:"#E9C46A",secondary:"#264653",accent:"#F4A261"},dark:{primary:"#2A9D8F",error:"#ff8888",success:"#45a5ae",info:"#E9C46A",secondary:"#264653",accent:"#F4A261"}}}});a["a"].config.productionTip=!1,new a["a"]({router:er,vuetify:rr,render:function(e){return e(x)}}).$mount("#app")},"5f5a":function(e,t,r){"use strict";var a=r("4e09"),n=r.n(a);n.a},"71ec":function(e,t,r){},db0a:function(e,t,r){},efc9:function(e,t,r){}});
//# sourceMappingURL=app.14cfd1c6.js.map