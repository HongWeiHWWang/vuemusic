webpackJsonp([2],{"/wAz":function(t,s){},"6gEp":function(t,s){},"B6/h":function(t,s){},Bt6O:function(t,s){},"Bvn/":function(t,s){},C7bu:function(t,s){},EdWA:function(t,s){},KSkP:function(t,s){},LWlg:function(t,s,i){t.exports=i.p+"static/img/b2.62f5f7f.jpg"},Mf5C:function(t,s){},"N+zL":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},e,!1,null,null,null);s.default=n.exports},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("WXQ9")},null,null).exports,r=i("/ocq"),o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"index"},[i("ul",[i("li",[i("router-link",{attrs:{to:"/home"}},[t._v("\n        首页\n        ")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/artists"}},[t._v("\n        歌手\n      ")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/listcate"}},[t._v("\n        榜单\n      ")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/ucenter"}},[t._v("\n        我的\n      ")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/search"}},[t._v("\n        搜索\n      ")])],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")({data:function(){return{msg:"初始代模板"}}},o,!1,function(t){i("Mf5C")},"data-v-dc60eaac",null).exports,c={name:"todayRecommend",data:function(){return{todayRecommend:[]}},props:{title:{type:String,default:"今日榜单"},type:{type:String,default:"1"}},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.type+"&size=6&offset=0";this.$axios.get(s).then(function(s){t.todayRecommend=s.data.song_list}).catch(function(t){console.log(t)})}},u={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mod-albums"},[i("div",{staticClass:"hd log url"},[i("h2",[t._v(t._s(t.title))]),t._v(" "),i("router-link",{attrs:{to:{name:"MoreList",params:{musictype:this.type,title:this.title}},tag:"div"}},[t._v("\n      更多\n    ")])],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"gallery"},[i("div",{staticClass:"scroller"},t._l(t.todayRecommend,function(s,e){return i("router-link",{key:e,staticClass:"card url",attrs:{tag:"div",to:{name:"musicplay",params:{songid:s.song_id}}}},[i("div",{staticClass:"album"},[i("img",{attrs:{src:s.pic_big,alt:s.title}}),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(s.title))])])])}),1)])])])},staticRenderFns:[]};var d=i("VU/8")(c,u,!1,function(t){i("kM5I")},"data-v-7863765e",null).exports,v={name:"newsMusic",data:function(){return{newsMusic:[]}},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3&offset=0";this.$axios.get(s).then(function(s){t.newsMusic=s.data.song_list}).catch(function(t){console.log(t)})}},p={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mod-albums"},[t._m(0),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"gallery"},[i("div",{staticClass:"scroller"},t._l(t.newsMusic,function(s,e){return i("router-link",{key:e,staticClass:"card url",attrs:{tag:"div",to:{name:"musicplay",params:{songid:s.song_id}}}},[i("div",{staticClass:"album"},[i("img",{attrs:{src:s.pic_big,alt:s.title}}),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"author"},[t._v(t._s(s.artist_name))])])])}),1)])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"hd log url"},[s("h2",[this._v("新歌速递")]),this._v(" "),s("div",[this._v("\n      更多\n    ")])])}]};var f=i("VU/8")(v,p,!1,function(t){i("v2Q+")},"data-v-406fe637",null).exports,h=(i("v2ns"),i("F3EI")),m={data:function(){return{swiperOption:{pagination:{el:".swiper-pagination"},autoplay:3e3}}},components:{swiper:h.swiper,swiperSlide:h.swiperSlide}},_={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("swiper",{attrs:{options:this.swiperOption}},[s("swiper-slide",[s("img",{attrs:{src:i("kxpQ"),alt:""}})]),this._v(" "),s("swiper-slide",[s("img",{attrs:{src:i("LWlg"),alt:""}})]),this._v(" "),s("swiper-slide",[s("img",{attrs:{src:i("WRrl"),alt:""}})]),this._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1)},staticRenderFns:[]};var g={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"music-nav"},[t._m(0),t._v(" "),i("ul",[i("li",[i("router-link",{attrs:{to:"/home/hot"}},[t._v("热歌榜")]),t._v(" "),i("span",{staticClass:"gap-line"})],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/home/news"}},[t._v("新歌榜")]),t._v(" "),i("span",{staticClass:"gap-line"})],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/home/king"}},[t._v("King榜")]),t._v(" "),i("span",{staticClass:"gap-line"})],1)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"log url hd"},[s("h2",[this._v("音乐榜单")]),this._v(" "),s("div",[this._v("更多")])])}]};var C={name:"home",components:{TodayRecommend:d,NewsMusic:f,SwiperBanner:i("VU/8")(m,_,!1,function(t){i("U3ng")},"data-v-502bef1e",null).exports,MusicListNav:i("VU/8")({data:function(){return{msg:"初始代模板"}}},g,!1,function(t){i("qPNW")},"data-v-4847d9b1",null).exports}},b={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{},[s("TodayRecommend",{attrs:{title:"今日榜单",type:"1"}}),this._v(" "),s("NewsMusic"),this._v(" "),s("SwiperBanner"),this._v(" "),s("MusicListNav"),this._v(" "),s("keep-alive",[s("router-view")],1),this._v(" "),s("TodayRecommend",{attrs:{title:"热门歌单",type:"24"}})],1)},staticRenderFns:[]};var y=i("VU/8")(C,b,!1,function(t){i("6gEp")},null,null).exports,w={name:"artists",data:function(){return{artistsArr:["2517","7994","1091","45561","2507","245815","1077","1204","1117","82366"],artistsData:[]}},mounted:function(){for(var t=this,s=0;s<this.artistsArr.length;s++){var i=this.HOST+"/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+this.artistsArr[s];this.$axios.get(i).then(function(s){t.artistsData.push({avatar_s500:s.data.avatar_s500,name:s.data.name,ting_uid:s.data.ting_uid})}).catch(function(t){console.log(t)})}}},$={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"artists"},[i("ul",{staticClass:"list"},t._l(t.artistsData,function(s,e){return i("router-link",{key:e,staticClass:"artist",attrs:{tag:"li",to:{name:"ArtistsDetails",params:{avatar:s.avatar_s500,name:s.name,ting_uid:s.ting_uid}}}},[i("div",{staticClass:"pic"},[i("img",{attrs:{alt:s.name,src:s.avatar_s500}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",[t._v(t._s(s.name))])])])}),1)])},staticRenderFns:[]};var x=i("VU/8")(w,$,!1,function(t){i("shqJ")},"data-v-0ca4dda1",null).exports,k=i("utWB"),L=i.n(k),T={name:"listcatelist",data:function(){return{listCateData:{song_list:[],billboard:{}}}},props:{musicType:{type:[String,Number],default:1}},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.musicType+"&size=3&offset=0";this.$axios.get(s).then(function(s){t.listCateData=s.data}).catch(function(t){console.log(t)})}},E={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"listcate"},[i("div",{staticClass:"cate-item",attrs:{tag:"div"}},[i("router-link",{staticClass:"item-content",attrs:{tag:"div",to:{name:"LicateDetails",params:{musictype:t.musicType}}}},[i("div",{staticClass:"cate-post"},[i("img",{attrs:{src:t.listCateData.billboard.pic_s192,alt:t.listCateData.billboard.name}})]),t._v(" "),i("ul",{staticClass:"cate-hot"},t._l(t.listCateData.song_list,function(s,e){return i("li",[i("span",{staticClass:"col-rank",attrs:{title:s.rank}},[t._v(t._s(s.rank))]),t._v(" "),i("span",{staticClass:"col-title"},[t._v(t._s(s.title)+" - "+t._s(s.author))])])}))])],1)])},staticRenderFns:[]};var R={data:function(){return{musicTypeJSON:[]}},components:{ListCate_List:i("VU/8")(T,E,!1,function(t){i("xsZj")},null,null).exports},created:function(){this.musicTypeJSON=L.a.currentType}},S={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",this._l(this.musicTypeJSON,function(t){return s("ListCate_List",{attrs:{musicType:t}})}),1)},staticRenderFns:[]};var U=i("VU/8")(R,S,!1,function(t){i("Bvn/")},null,null).exports,D={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  我的页面\n")])},staticRenderFns:[]};var V=i("VU/8")({data:function(){return{msg:"初始代模板"}}},D,!1,function(t){i("UNI7")},null,null).exports,F={name:"search",data:function(){return{searchContent:"",songlist:[]}},methods:{searchHandler:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.search.catalogSug&query="+this.searchContent;this.$axios.get(s).then(function(s){22001!=s.data.error_code?t.songlist=s.data.song:alert("搜索数据不存在")}).catch(function(t){console.log(t)})}}},O={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"search"},[i("div",{staticClass:"search-title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.searchContent,expression:"searchContent"}],attrs:{type:"text",name:"",placeholder:"输入搜索内容"},domProps:{value:t.searchContent},on:{input:function(s){s.target.composing||(t.searchContent=s.target.value)}}}),t._v(" "),i("button",{attrs:{type:"button",name:"button"},on:{click:t.searchHandler}},[t._v("搜索")])]),t._v(" "),i("ul",{staticClass:"list searchlist"},t._l(t.songlist,function(s,e){return i("router-link",{key:e,staticClass:"song",attrs:{tag:"li",to:{name:"musicplay",params:{songid:s.songid}}}},[i("div",{staticClass:"left"},[i("div",{staticClass:"info  single-line "},[i("div",[i("span",[t._v(t._s(s.songname))])]),t._v(" "),i("span",{staticClass:"txt"},[t._v(t._s(s.artistname))])])])])}),1)])},staticRenderFns:[]};var M=i("VU/8")(F,O,!1,function(t){i("lXWK")},"data-v-3de6e154",null).exports,N={data:function(){return{currentData:[]}},props:{url:{type:String,default:""}},mounted:function(){var t=this,s=this.HOST+this.url;this.$axios.get(s).then(function(s){t.currentData=s.data.song_list}).catch(function(t){console.log(t)})}},W={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"board panels"},[i("div",{staticClass:"panel hotsongs on"},[i("ul",{staticClass:"list"},t._l(t.currentData,function(s,e){return i("router-link",{key:e,attrs:{to:{name:"musicplay",params:{songid:s.song_id}},tag:"li"}},[i("div",{staticClass:"poster"},[i("img",{attrs:{src:s.pic_big,alt:s.title}})]),t._v(" "),i("div",{staticClass:"info"},[i("div",{staticClass:"name"},[t._v("\n            "+t._s(s.title)+"\n          ")]),t._v(" "),i("div",{staticClass:"author"},[t._v(t._s(s.artist_name))])])])}),1),t._v(" "),i("div",{staticClass:"more-songs url"},[t._v("\n      查看该榜单>\n    ")])])])},staticRenderFns:[]};var H=i("VU/8")(N,W,!1,function(t){i("Bt6O")},"data-v-4d0abc20",null).exports,z={data:function(){return{url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"}},components:{MusicList:H}},A={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("MusicList",{attrs:{url:this.url}})],1)},staticRenderFns:[]};var B=i("VU/8")(z,A,!1,function(t){i("WJDK")},null,null).exports,P={data:function(){return{url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=5&offset=0"}},components:{MusicList:H}},j={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("MusicList",{attrs:{url:this.url}})],1)},staticRenderFns:[]};var q=i("VU/8")(P,j,!1,function(t){i("VLs7")},null,null).exports,J={data:function(){return{url:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"}},components:{MusicList:H}},I={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("MusicList",{attrs:{url:this.url}})],1)},staticRenderFns:[]};var K=i("VU/8")(J,I,!1,function(t){i("KSkP")},"data-v-6475ac1d",null).exports,Q=i("//Fk"),X=i.n(Q),Z=i("z9mE"),Y={name:"morelist",data:function(){return{moreListData:[],offset:0}},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype+"&size=12&offset=0";this.$axios.get(s).then(function(s){t.moreListData=s.data.song_list,t.offset=t.offset+12}).catch(function(t){console.log(t)})},components:{VuePullRefresh:i.n(Z).a},methods:{onRefresh:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype+"&size=12&offset="+this.offset;return new X.a(function(i,e){setTimeout(function(){t.$axios.get(s).then(function(s){t.offset>=s.data.billboard.billboard_songnum-12?console.log("没数据了"):t.offset+=12,t.moreListData=s.data.song_list,i()}).catch(function(t){console.log(t)})})})}}},G={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"more-list"},[i("div",{staticClass:"wrapper"},[i("h3",[t._v(t._s(this.$route.params.title))]),t._v(" "),i("VuePullRefresh",{attrs:{"on-refresh":t.onRefresh}},t._l(t.moreListData,function(s,e){return i("router-link",{key:e,staticClass:"info url log",attrs:{tag:"div",to:{name:"musicplay",params:{songid:s.song_id}}}},[i("div",{staticClass:"poster"},[i("img",{attrs:{src:s.pic_big,alt:s.title}})]),t._v(" "),i("div",{staticClass:"text-wrap"},[i("div",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),i("div",{staticClass:"author"},[t._v(t._s(s.artist_name))])])])}),1)],1)])},staticRenderFns:[]};var tt=i("VU/8")(Y,G,!1,function(t){i("C7bu")},"data-v-136281b0",null).exports,st=(i("/wAz"),{name:"musicplay",data:function(){return{currentUrl:{songinfo:{title:"",author:""},bitrate:{show_link:""}},currentTime:0,durationTime:0}},components:{LRC:e.a.component("lrc",function(t){return i.e(0).then(function(){var s=[i("WTvi")];t.apply(null,s)}.bind(this)).catch(i.oe)})},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.song.play&songid="+this.$route.params.songid;this.$axios.get(s).then(function(s){t.currentUrl=s.data}).catch(function(t){console.log(t)}),this.addEventListeners()},beforeDestroyed:function(){this.removeEventListeners()},methods:{addEventListeners:function(){this.$refs.player.addEventListener("timeupdate",this._currentTime),this.$refs.player.addEventListener("canplay",this._durationTime)},removeEventListeners:function(){this.$refs.player.removeEventListener("timeupdate",this._currentTime),this.$refs.player.removeEventListener("canplay",this._durationTime)},_currentTime:function(){this.currentTime=this.$refs.player.currentTime},_durationTime:function(){this.durationTime=this.$refs.player.duration}}}),it={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"play"},[i("div",{staticClass:"header"},[i("div",{staticClass:"title"},[i("router-link",{attrs:{to:"/"}},[i("i",{staticClass:"iconfont icon-shouye left"})]),t._v(" "),i("div",{staticClass:"music-info"},[i("p",[t._v(t._s(t.currentUrl.songinfo.title))]),t._v(" "),i("p",{staticClass:"author"},[t._v(t._s(t.currentUrl.songinfo.author))])]),t._v(" "),i("router-link",{attrs:{to:"/search"}},[i("i",{staticClass:"iconfont icon-sousuo right"})])],1)]),t._v(" "),i("div",{staticClass:"song-info"},[i("div",{staticClass:"song-info-img"},[i("img",{attrs:{src:t.currentUrl.songinfo.pic_big}}),t._v(" "),i("LRC",{attrs:{durationTime:t.durationTime,currentTime:t.currentTime,songid:this.$route.params.songid}})],1),t._v(" "),t._m(0)]),t._v(" "),i("div",{staticClass:"song"},[i("audio",{ref:"player",attrs:{src:t.currentUrl.bitrate.show_link,controls:"",autoplay:""}})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"iconbox"},[s("i",{staticClass:"iconfont icon-shoucang2 left"}),this._v(" "),s("i",{staticClass:"box"}),this._v(" "),s("i",{staticClass:"iconfont icon-xiazai right"})])}]};var et=i("VU/8")(st,it,!1,function(t){i("lZdB")},"data-v-301b8dcb",null).exports,nt={name:"arttitle",data:function(){return{arttitle:{}}},props:{name:{type:String,defualt:""},avatar:{type:String,default:""}}},at={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"art-title"},[s("div",{staticClass:"artist-header"},[s("div",{staticClass:"header-bg",style:{background:"url(http://qukufile2.qianqian.com/data2/pic/ce52b58848ff456cd4d48765f2f3dd1e/267770218/267770218.jpg@s_0,w_240)"}}),this._v(" "),s("div",{staticClass:"header-mask"}),this._v(" "),s("div",{staticClass:"artist-header-content"},[s("div",{staticClass:"pic"},[s("img",{attrs:{src:this.avatar}})]),this._v(" "),s("h2",[this._v(this._s(this.name))])])])])},staticRenderFns:[]};var rt=i("VU/8")(nt,at,!1,function(t){i("nohL")},"data-v-14fc57c6",null).exports,ot={name:"artlist",data:function(){return{listArr:[]}},props:{ting_uid:{type:String,default:"0"}},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid="+this.ting_uid+"&limits=10&use_cluster=1&order=2";this.$axios.get(s).then(function(s){t.listArr=s.data.songlist}).catch(function(t){console.log(t)})}},lt={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"art-list"},[i("ul",{staticClass:"list"},t._l(t.listArr,function(s,e){return i("router-link",{key:e,staticClass:"song",attrs:{tag:"li",to:{name:"musicplay",params:{songid:s.song_id}}}},[i("div",{staticClass:"left"},[t._v("\n        "+t._s(s.title)+"\n      ")])])}),1)])},staticRenderFns:[]};var ct={name:"details",data:function(){return{msg:"初始代模板"}},components:{Title:rt,List:i("VU/8")(ot,lt,!1,function(t){i("On2D")},"data-v-41660348",null).exports}},ut={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("Title",{attrs:{name:this.$route.params.name,avatar:this.$route.params.avatar}}),this._v(" "),s("List",{attrs:{ting_uid:this.$route.params.ting_uid}})],1)},staticRenderFns:[]};var dt=i("VU/8")(ct,ut,!1,function(t){i("B6/h")},null,null).exports,vt={name:"licatedetails",data:function(){return{listCateData:{song_list:[],billboard:{}}}},mounted:function(){var t=this,s=this.HOST+"/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.musictype+"&size=10&offset=0";this.$axios.get(s).then(function(s){t.listCateData=s.data}).catch(function(t){console.log(t)})}},pt={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"listdetails"},[i("div",{staticClass:"banner-img"},[i("img",{attrs:{src:t.listCateData.billboard.pic_s444,alt:""}})]),t._v(" "),i("ul",{staticClass:"list"},t._l(t.listCateData.song_list,function(s,e){return i("router-link",{key:e,attrs:{tag:"li",to:{name:"musicplay",params:{songid:s.song_id}}}},[i("p",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),i("p",{staticClass:"author"},[t._v(t._s(s.author))])])}),1)])},staticRenderFns:[]};var ft=i("VU/8")(vt,pt,!1,function(t){i("EdWA")},"data-v-61e2b5e8",null).exports;e.a.use(r.a);var ht=new r.a({routes:[{path:"/",name:"Index",redirect:"/home",component:l,children:[{path:"home",component:y,redirect:"/home/hot",children:[{path:"hot",component:B},{path:"king",component:q},{path:"news",component:K}]},{path:"artists",component:x},{path:"listcate",component:U},{path:"ucenter",component:V},{path:"search",component:M},{path:"more",name:"MoreList",component:tt},{path:"artistsdetails",name:"ArtistsDetails",component:dt},{path:"licatedetails",name:"LicateDetails",component:ft}]},{path:"/musicplay",name:"musicplay",component:et}]}),mt=i("mtWM"),_t=i.n(mt);e.a.prototype.$axios=_t.a,e.a.prototype.HOST="/baidu_music_api",e.a.config.productionTip=!1,new e.a({el:"#app",router:ht,components:{App:a},template:"<App/>"})},On2D:function(t,s){},U3ng:function(t,s){},UNI7:function(t,s){},VLs7:function(t,s){},WJDK:function(t,s){},WRrl:function(t,s,i){t.exports=i.p+"static/img/b3.ecfe70f.jpg"},WXQ9:function(t,s){},kM5I:function(t,s){},kxpQ:function(t,s,i){t.exports=i.p+"static/img/b1.9ab3bf3.jpg"},lXWK:function(t,s){},lZdB:function(t,s){},nohL:function(t,s){},pYmz:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e="undefined"!=typeof window;e&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&e&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,s=function(){if(!t.swiper&&e){delete t.options.notNextTick;var s=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(s=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};s?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?s():this.$nextTick(s)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);s.default=r.exports},qPNW:function(t,s){},shqJ:function(t,s){},utWB:function(t,s){t.exports={currentType:[1,2,11,21,22,23,24,25]}},"v2Q+":function(t,s){},v2ns:function(t,s){},xsZj:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.9f8308b902c0aefba3dd.js.map