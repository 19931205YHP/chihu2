webpackJsonp([35],{270:function(l,n,t){"use strict";function u(l){return a._29(0,[(l()(),a._27(null,["\n"])),(l()(),a._6(0,null,null,19,"ion-header",[["no-border",""]],[[2,"idark",null]],null,null,null,null)),a._4(16384,null,0,E.a,[x.a,a.k,a.E,[2,O.a]],null,null),(l()(),a._27(null,["\n\n    "])),(l()(),a._6(0,null,null,15,"ion-navbar",[["class","toolbar"],["color","mblue"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,w.b,w.a)),a._4(49152,null,0,I.a,[P.a,[2,O.a],[2,S.a],x.a,a.k,a.E],{color:[0,"color"]},null),(l()(),a._27(3,["\n        "])),(l()(),a._6(0,null,3,2,"ion-title",[],null,null,null,U.b,U.a)),a._4(49152,null,0,D.a,[x.a,a.k,a.E,[2,F.a],[2,I.a]],null,null),(l()(),a._27(0,["我要回答"])),(l()(),a._27(3,["\n        "])),(l()(),a._6(0,null,2,7,"ion-buttons",[["end",""]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.send()&&u),u},null,null)),a._4(16384,null,1,T.a,[x.a,a.k,a.E,[2,F.a],[2,I.a]],null,null),a._25(603979776,1,{_buttons:1}),(l()(),a._27(null,["\n            "])),(l()(),a._6(0,null,null,2,"ion-title",[],null,null,null,U.b,U.a)),a._4(49152,null,0,D.a,[x.a,a.k,a.E,[2,F.a],[2,I.a]],null,null),(l()(),a._27(0,["发布"])),(l()(),a._27(null,["\n        "])),(l()(),a._27(3,["\n    "])),(l()(),a._27(null,["\n\n"])),(l()(),a._27(null,["\n\n\n"])),(l()(),a._6(0,null,null,4,"ion-content",[["padding",""]],[[2,"idark_content",null],[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,z.b,z.a)),a._4(4374528,null,0,A.a,[x.a,B.a,L.a,a.k,a.E,P.a,M.a,a.y,[2,O.a],[2,S.a]],null,null),(l()(),a._27(1,["\n    "])),(l()(),a._6(0,null,1,0,"textarea",[["id","summernote"],["placeholder","Comments"]],null,null,null,null,null)),(l()(),a._27(1,["\n"]))],function(l,n){l(n,5,0,"mblue")},function(l,n){var t=n.component;l(n,1,0,t.isIdark),l(n,4,0,a._20(n,5)._hidden,a._20(n,5)._sbPadding),l(n,22,0,t.isIdark,a._20(n,23).statusbarPadding,a._20(n,23)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),e=t(4),o=t(72),s=t(52),i=t(38),r=function(){function l(l,n,t,u){this.http=l,this.UserService=n,this.navCtrl=t,this.navParams=u,this.isIdark=this.UserService.isIdark,this._id=this.navParams.get("id"),this.title=this.navParams.get("title")}return l.prototype.ngOnInit=function(){var l=this;this.summernote=$("#summernote"),this.summernote.summernote({height:380,placeholder:"文章内容...",callbacks:{onImageUpload:function(n){l.upFile(n[0])}},toolbar:[["style",["bold","italic"]],["fontsize",["fontsize"]],["color",["color"]],["para",["ul","ol","paragraph"]],["Insert",["picture"]]]})},l.prototype.upFile=function(l){this.UserService.presentLoadingDefault();var n=new FormData,t=this;n.append("file",l),$.ajax({data:n,dataType:"text",type:"POST",url:"https://www.devonhello.com/cfdkAdmin/uploadimg",cache:!1,contentType:!1,processData:!1,success:function(l){t.summernote.summernote("insertImage","https://7xp2ia.com1.z0.glb.clouddn.com/"+l,"image name"),t.UserService.presentLoadingDismiss()}})},l.prototype.send=function(){alert("后台正在开发，暂时停止发布功能")},l}();r=Object(e.__decorate)([Object(a.i)({selector:"page-send-answer",templateUrl:"send-answer.html"}),Object(e.__metadata)("design:paramtypes",["function"==typeof(c=void 0!==i.e&&i.e)&&c||Object,"function"==typeof(_=void 0!==s.a&&s.a)&&_||Object,"function"==typeof(d=void 0!==o.j&&o.j)&&d||Object,"function"==typeof(b=void 0!==o.l&&o.l)&&b||Object])],r);var c,_,d,b,k=function(){return function(){}}();k=Object(e.__decorate)([Object(a.v)({declarations:[r],imports:[o.h.forChild(r)],exports:[r]})],k);var p=t(191),m=t(192),f=t(193),h=t(194),g=t(195),v=t(196),C=t(197),y=t(198),j=t(199),E=t(119),x=t(1),O=t(5),w=t(281),I=t(39),P=t(8),S=t(20),U=t(282),D=t(117),F=t(53),T=t(125),z=t(280),A=t(21),B=t(3),L=t(9),M=t(33),J=t(10),N=a._3({encapsulation:2,styles:[],data:{}}),R=a._1("page-send-answer",r,function(l){return a._29(0,[(l()(),a._6(0,null,null,1,"page-send-answer",[],null,null,null,u,N)),a._4(114688,null,0,r,[i.e,s.a,S.a,J.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Y=t(16),q=t(17),G=t(118),H=t(34);t.d(n,"SendAnswerPageModuleNgFactory",function(){return K});var K=a._2(k,[],function(l){return a._17([a._18(512,a.j,a.Y,[[8,[p.a,m.a,f.a,h.a,g.a,v.a,C.a,y.a,j.a,R]],[3,a.j],a.w]),a._18(4608,Y.l,Y.k,[a.u]),a._18(4608,q.k,q.k,[]),a._18(4608,q.c,q.c,[]),a._18(512,Y.b,Y.b,[]),a._18(512,q.j,q.j,[]),a._18(512,q.d,q.d,[]),a._18(512,q.i,q.i,[]),a._18(512,G.a,G.a,[]),a._18(512,G.b,G.b,[]),a._18(512,k,k,[]),a._18(256,H.a,r,[])])})},280:function(l,n,t){"use strict";function u(l){return a._29(2,[a._25(402653184,1,{_fixedContent:0}),a._25(402653184,2,{_scrollContent:0}),(l()(),a._6(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),a._19(null,0),(l()(),a._6(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),a._19(null,1),a._19(null,2)],null,null)}t.d(n,"a",function(){return e}),n.b=u;var a=t(0),e=(t(21),t(1),t(3),t(9),t(8),t(33),t(5),t(20),a._3({encapsulation:2,styles:[],data:{}}))},281:function(l,n,t){"use strict";function u(l){return a._29(0,[(l()(),a._6(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),a._4(278528,null,0,e.h,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._6(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.backButtonClick(t)&&u),u},o.b,o.a)),a._4(278528,null,0,e.h,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._4(1097728,null,0,s.a,[[8,"bar-button"],i.a,a.k,a.E],null,null),(l()(),a._6(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),a._4(278528,null,0,e.h,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._4(147456,null,0,r.a,[i.a,a.k,a.E],{name:[0,"name"]},null),(l()(),a._6(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),a._4(278528,null,0,e.h,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),a._27(null,["",""])),a._19(null,0),a._19(null,1),a._19(null,2),(l()(),a._6(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),a._4(278528,null,0,e.h,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._19(null,3)],function(l,n){var t=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+t._mode);l(n,3,0,"back-button","back-button-"+t._mode);l(n,6,0,"back-button-icon","back-button-icon-"+t._mode),l(n,7,0,t._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+t._mode);l(n,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(l,n){var t=n.component;l(n,2,0,t._hideBb),l(n,5,0,a._20(n,7)._hidden),l(n,10,0,t._backText)})}t.d(n,"a",function(){return c}),n.b=u;var a=t(0),e=t(16),o=(t(39),t(40)),s=t(19),i=t(1),r=t(41),c=(t(8),t(5),t(20),a._3({encapsulation:2,styles:[],data:{}}))},282:function(l,n,t){"use strict";function u(l){return a._29(2,[(l()(),a._6(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),a._4(278528,null,0,e.h,[a.s,a.t,a.k,a.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),a._19(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}t.d(n,"a",function(){return o}),n.b=u;var a=t(0),e=t(16),o=(t(117),t(1),t(53),t(39),a._3({encapsulation:2,styles:[],data:{}}))}});