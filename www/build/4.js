webpackJsonp([4],{266:function(l,n,t){"use strict";function u(l){return a._29(0,[(l()(),a._6(0,null,null,1,"question",[],null,null,null,U.b,U.a)),a._4(49152,null,0,S.a,[s.a,x.a],{data:[0,"data"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function e(l){return a._29(0,[(l()(),a._27(null,["\n"])),(l()(),a._6(0,null,null,10,"ion-header",[["no-border",""]],[[2,"idark",null]],null,null,null,null)),a._4(16384,null,0,E.a,[P.a,a.k,a.E,[2,q.a]],null,null),(l()(),a._27(null,["\n\n    "])),(l()(),a._6(0,null,null,6,"ion-navbar",[["class","toolbar"],["color","mblue"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,I.b,I.a)),a._4(49152,null,0,L.a,[T.a,[2,q.a],[2,x.a],P.a,a.k,a.E],{color:[0,"color"]},null),(l()(),a._27(3,["\n        "])),(l()(),a._6(0,null,3,2,"ion-title",[],null,null,null,D.b,D.a)),a._4(49152,null,0,V.a,[P.a,a.k,a.E,[2,Q.a],[2,L.a]],null,null),(l()(),a._27(0,["问题列表"])),(l()(),a._27(3,["\n    "])),(l()(),a._27(null,["\n\n"])),(l()(),a._27(null,["\n\n\n"])),(l()(),a._6(0,null,null,5,"ion-content",[],[[2,"idark_content",null],[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,F.b,F.a)),a._4(4374528,null,0,B.a,[P.a,M.a,J.a,a.k,a.E,T.a,K.a,a.y,[2,q.a],[2,x.a]],null,null),(l()(),a._27(1,["\n    "])),(l()(),a._0(16777216,null,1,1,null,u)),a._4(802816,null,0,N.i,[a.O,a.K,a.s],{ngForOf:[0,"ngForOf"]},null),(l()(),a._27(1,["\n"]))],function(l,n){var t=n.component;l(n,5,0,"mblue"),l(n,17,0,t.data)},function(l,n){var t=n.component;l(n,1,0,t.isIdark),l(n,4,0,a._20(n,5)._hidden,a._20(n,5)._sbPadding),l(n,13,0,t.isIdark,a._20(n,14).statusbarPadding,a._20(n,14)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=t(4),o=t(72),r=t(38),s=t(52),c=function(){function l(l,n,t,u){this.UserService=l,this.http=n,this.navCtrl=t,this.navParams=u,this.data=[],this.isIdark=this.UserService.isIdark,this.getdata()}return l.prototype.getdata=function(){var l=this;this.UserService.presentLoadingDefault();var n=new r.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihu2/queslist","len="+this.data.length,{headers:n}).subscribe(function(n){l.UserService.presentLoadingDismiss(),l.data=l.data.concat(n.json())})},l}();c=Object(i.__decorate)([Object(a.i)({selector:"page-question-list",templateUrl:"question-list.html"}),Object(i.__metadata)("design:paramtypes",["function"==typeof(_=void 0!==s.a&&s.a)&&_||Object,"function"==typeof(d=void 0!==r.e&&r.e)&&d||Object,"function"==typeof(f=void 0!==o.j&&o.j)&&f||Object,"function"==typeof(h=void 0!==o.l&&o.l)&&h||Object])],c);var _,d,f,h,p=t(326),b=function(){return function(){}}();b=Object(i.__decorate)([Object(a.v)({declarations:[c],imports:[p.a,o.h.forChild(c)],exports:[c]})],b);var v=t(191),k=t(192),m=t(193),g=t(194),j=t(195),y=t(196),O=t(197),w=t(198),C=t(199),U=t(333),S=t(323),x=t(20),E=t(119),P=t(1),q=t(5),I=t(281),L=t(39),T=t(8),D=t(282),V=t(117),Q=t(53),F=t(280),B=t(21),M=t(3),J=t(9),K=t(33),N=t(16),R=t(10),Y=a._3({encapsulation:2,styles:[],data:{}}),$=a._1("page-question-list",c,function(l){return a._29(0,[(l()(),a._6(0,null,null,1,"page-question-list",[],null,null,null,e,Y)),a._4(49152,null,0,c,[s.a,r.e,x.a,R.a],null,null)],null,null)},{},{},[]),z=t(17),A=t(118),G=t(307),H=t(308),W=t(34);t.d(n,"QuestionListPageModuleNgFactory",function(){return X});var X=a._2(b,[],function(l){return a._17([a._18(512,a.j,a.Y,[[8,[v.a,k.a,m.a,g.a,j.a,y.a,O.a,w.a,C.a,$]],[3,a.j],a.w]),a._18(4608,N.l,N.k,[a.u]),a._18(4608,z.k,z.k,[]),a._18(4608,z.c,z.c,[]),a._18(512,N.b,N.b,[]),a._18(512,z.j,z.j,[]),a._18(512,z.d,z.d,[]),a._18(512,z.i,z.i,[]),a._18(512,A.a,A.a,[]),a._18(512,G.a,G.a,[]),a._18(512,H.a,H.a,[]),a._18(512,p.a,p.a,[]),a._18(512,A.b,A.b,[]),a._18(512,b,b,[]),a._18(256,W.a,c,[])])})},280:function(l,n,t){"use strict";function u(l){return e._29(2,[e._25(402653184,1,{_fixedContent:0}),e._25(402653184,2,{_scrollContent:0}),(l()(),e._6(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),e._19(null,0),(l()(),e._6(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),e._19(null,1),e._19(null,2)],null,null)}t.d(n,"a",function(){return a}),n.b=u;var e=t(0),a=(t(21),t(1),t(3),t(9),t(8),t(33),t(5),t(20),e._3({encapsulation:2,styles:[],data:{}}))},281:function(l,n,t){"use strict";function u(l){return e._29(0,[(l()(),e._6(0,null,null,1,"div",[["class","toolbar-background"]],null,null,null,null,null)),e._4(278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e._6(0,null,null,8,"button",[["class","back-button"],["ion-button","bar-button"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.backButtonClick(t)&&u),u},i.b,i.a)),e._4(278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._4(1097728,null,0,o.a,[[8,"bar-button"],r.a,e.k,e.E],null,null),(l()(),e._6(0,null,0,2,"ion-icon",[["class","back-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._4(278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._4(147456,null,0,s.a,[r.a,e.k,e.E],{name:[0,"name"]},null),(l()(),e._6(0,null,0,2,"span",[["class","back-button-text"]],null,null,null,null,null)),e._4(278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),e._27(null,["",""])),e._19(null,0),e._19(null,1),e._19(null,2),(l()(),e._6(0,null,null,2,"div",[["class","toolbar-content"]],null,null,null,null,null)),e._4(278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._19(null,3)],function(l,n){var t=n.component;l(n,1,0,"toolbar-background","toolbar-background-"+t._mode);l(n,3,0,"back-button","back-button-"+t._mode);l(n,6,0,"back-button-icon","back-button-icon-"+t._mode),l(n,7,0,t._bbIcon);l(n,9,0,"back-button-text","back-button-text-"+t._mode);l(n,15,0,"toolbar-content","toolbar-content-"+t._mode)},function(l,n){var t=n.component;l(n,2,0,t._hideBb),l(n,5,0,e._20(n,7)._hidden),l(n,10,0,t._backText)})}t.d(n,"a",function(){return c}),n.b=u;var e=t(0),a=t(16),i=(t(39),t(40)),o=t(19),r=t(1),s=t(41),c=(t(8),t(5),t(20),e._3({encapsulation:2,styles:[],data:{}}))},282:function(l,n,t){"use strict";function u(l){return e._29(2,[(l()(),e._6(0,null,null,2,"div",[["class","toolbar-title"]],null,null,null,null,null)),e._4(278528,null,0,a.h,[e.s,e.t,e.k,e.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e._19(null,0)],function(l,n){l(n,1,0,"toolbar-title","toolbar-title-"+n.component._mode)},null)}t.d(n,"a",function(){return i}),n.b=u;var e=t(0),a=t(16),i=(t(117),t(1),t(53),t(39),e._3({encapsulation:2,styles:[],data:{}}))},302:function(l,n,t){"use strict";t.d(n,"a",function(){return r});var u=t(4),e=t(0),a=t(52),i=t(38),o=t(72),r=function(){function l(l,n,t){this.UserService=l,this.http=n,this.navCtrl=t,this.data={},this.isfork=!1}return l.prototype.ngOnChanges=function(l){try{l.data.currentValue&&l.data.currentValue.uid&&this.checkfork()}catch(l){}},l.prototype.checkfork=function(){this.isfork=this.UserService.checkisfork(this.data.uid)},l.prototype.fork=function(){var l=this;if(this.checkfork(),this.isfork)return!0;if(this.UserService.presentLoadingDefault(),this.UserService._user._id!=this.data.uid&&this.UserService._user._id){var n=new i.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihu2/forkuser","uid="+this.data.uid+"&id="+this.UserService._user._id+"&name="+this.UserService._user.nickname+"&uname="+this.data.name+"&userimg="+this.UserService._user.userimg+"&uuserimg="+this.data.userimg,{headers:n}).subscribe(function(n){n.json()&&(l.isfork=!0),l.UserService.get_fork_user()})}else{if(this.UserService.presentLoadingDismiss(),this.UserService._user._id)return!0;this.navCtrl.push("LoginPage")}},l.prototype.unfork=function(){var l=this;if(this.checkfork(),!this.isfork)return!0;this.UserService.presentLoadingDefault();var n=new i.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihu2/disfork_user","uid="+this.data.uid+"&id="+this.UserService._user._id,{headers:n}).subscribe(function(n){n.json()&&(l.isfork=!1),l.UserService.get_fork_user()})},l.prototype.pushPersonPage=function(l){this.navCtrl.push("PersonalPage",{_id:l})},l}();Object(u.__decorate)([Object(e.r)(),Object(u.__metadata)("design:type",Object)],r.prototype,"data",void 0),r=Object(u.__decorate)([Object(e.i)({selector:"header",templateUrl:"header.html"}),Object(u.__metadata)("design:paramtypes",["function"==typeof(s=void 0!==a.a&&a.a)&&s||Object,"function"==typeof(c=void 0!==i.e&&i.e)&&c||Object,"function"==typeof(_=void 0!==o.j&&o.j)&&_||Object])],r);var s,c,_},303:function(l,n,t){"use strict";t.d(n,"a",function(){return r});var u=t(4),e=t(0),a=t(52),i=t(38),o=t(72),r=function(){function l(l,n,t){this.UserService=l,this.http=n,this.navCtrl=t,this.data={},this.ishide=!0}return l.prototype.ngOnChanges=function(l){try{l.data.currentValue&&l.data.currentValue._id&&(this._id=l.data.currentValue._id,this.checkfork())}catch(l){}},l.prototype.checkfork=function(){var l=this;if(this.UserService._user._id){var n=new i.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihu2/checkforkquestion","artid="+this._id+"&id="+this.UserService._user._id,{headers:n}).subscribe(function(n){"0"==n.json().length&&(l.ishide=!1)})}},l.prototype.fork=function(){var l=this;if(this.UserService._user._id){var n=new i.d;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("https://www.devonhello.com/chihu2/forkquestion","uid="+this.data.uid+"&artid="+this._id+"&id="+this.UserService._user._id+"&name="+this.UserService._user.nickname+"&userimg="+this.UserService._user.userimg+"&title="+this.data.title,{headers:n}).subscribe(function(n){1==n.json().result.ok&&(l.ishide=!0,alert("关注成功"))})}else this.navCtrl.push("LoginPage")},l}();Object(u.__decorate)([Object(e.r)(),Object(u.__metadata)("design:type",Object)],r.prototype,"data",void 0),r=Object(u.__decorate)([Object(e.i)({selector:"footer",templateUrl:"footer.html"}),Object(u.__metadata)("design:paramtypes",["function"==typeof(s=void 0!==a.a&&a.a)&&s||Object,"function"==typeof(c=void 0!==i.e&&i.e)&&c||Object,"function"==typeof(_=void 0!==o.j&&o.j)&&_||Object])],r);var s,c,_},307:function(l,n,t){"use strict";t.d(n,"a",function(){return o});var u=t(4),e=t(0),a=t(72),i=t(302),o=function(){return function(){}}();o=Object(u.__decorate)([Object(e.v)({declarations:[i.a],imports:[a.g],exports:[i.a]})],o)},308:function(l,n,t){"use strict";t.d(n,"a",function(){return o});var u=t(4),e=t(0),a=t(72),i=t(303),o=function(){return function(){}}();o=Object(u.__decorate)([Object(e.v)({declarations:[i.a],imports:[a.g],exports:[i.a]})],o)},323:function(l,n,t){"use strict";t.d(n,"a",function(){return o});var u=t(4),e=t(0),a=t(72),i=t(52),o=function(){function l(l,n){this.UserService=l,this.navCtrl=n,this.data={},this.isIdark=this.UserService.isIdark}return l.prototype.pushQuestionPage=function(l){this.navCtrl.push("QuestionPage",{_id:l})},l}();Object(u.__decorate)([Object(e.r)(),Object(u.__metadata)("design:type",Object)],o.prototype,"data",void 0),o=Object(u.__decorate)([Object(e.i)({selector:"question",templateUrl:"question.html"}),Object(u.__metadata)("design:paramtypes",["function"==typeof(r=void 0!==i.a&&i.a)&&r||Object,"function"==typeof(s=void 0!==a.j&&a.j)&&s||Object])],o);var r,s},326:function(l,n,t){"use strict";t.d(n,"a",function(){return s});var u=t(4),e=t(0),a=t(72),i=t(323),o=t(307),r=t(308),s=function(){return function(){}}();s=Object(u.__decorate)([Object(e.v)({declarations:[i.a],imports:[o.a,r.a,a.g],exports:[i.a]})],s)},327:function(l,n,t){"use strict";function u(l){return e._29(0,[e._21(0,a.d,[e.u]),(l()(),e._27(null,["\n"])),(l()(),e._6(0,null,null,22,"section",[["class","header"]],null,null,null,null,null)),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,0,"img",[["alt",""]],[[8,"src",4]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;return"click"===n&&(u=!1!==e.pushPersonPage(e.data.uid)&&u),u},null,null)),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,9,"div",[["class","it-left"]],null,null,null,null,null)),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),e._27(null,[""," 分享了心情"])),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,3,"p",[["class","time"]],null,null,null,null,null)),(l()(),e._6(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-clock-o"]],null,null,null,null,null)),(l()(),e._27(null,[":",""])),e._23(1),(l()(),e._27(null,["\n    "])),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,2,"div",[["class","fork"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.fork()&&u),u},null,null)),(l()(),e._6(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-plus"]],null,null,null,null,null)),(l()(),e._27(null,[" 关注"])),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,2,"div",[["class","fork nofork"]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.unfork()&&u),u},null,null)),(l()(),e._6(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-plus"]],null,null,null,null,null)),(l()(),e._27(null,[" 取消关注"])),(l()(),e._27(null,["\n"]))],null,function(l,n){var t=n.component;l(n,4,0,t.data.userimg),l(n,9,0,t.data.name),l(n,13,0,e._28(n,13,0,l(n,14,0,e._20(n,0),t.data.time))),l(n,17,0,t.isfork),l(n,21,0,!t.isfork)})}t.d(n,"a",function(){return i}),n.b=u;var e=t(0),a=t(16),i=(t(302),t(52),t(38),t(20),e._3({encapsulation:2,styles:[],data:{}}))},328:function(l,n,t){"use strict";function u(l){return e._29(0,[(l()(),e._27(null,["\n"])),(l()(),e._6(0,null,null,42,"ion-row",[["class","row"]],null,null,null,null,null)),e._4(16384,null,0,a.a,[],null,null),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),e._4(16384,null,0,i.a,[],null,null),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,8,"button",[["clear",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,o.b,o.a)),e._4(1097728,null,0,r.a,[[8,""],s.a,e.k,e.E],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),e._27(0,["\n                  "])),(l()(),e._6(0,null,0,1,"ion-icon",[["name","eye"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._4(147456,null,0,c.a,[s.a,e.k,e.E],{name:[0,"name"]},null),(l()(),e._27(0,["\n                  "])),(l()(),e._6(0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e._27(null,["",""])),(l()(),e._27(0,["\n                "])),(l()(),e._27(null,["\n    "])),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,12,"ion-col",[["class","col"]],null,null,null,null,null)),e._4(16384,null,0,i.a,[],null,null),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,8,"button",[["clear",""],["icon-left",""],["ion-button",""],["small",""]],null,null,null,o.b,o.a)),e._4(1097728,null,0,r.a,[[8,""],s.a,e.k,e.E],{small:[0,"small"],clear:[1,"clear"]},null),(l()(),e._27(0,["\n                  "])),(l()(),e._6(0,null,0,1,"ion-icon",[["name","text"],["role","img"]],[[2,"hide",null]],null,null,null,null)),e._4(147456,null,0,c.a,[s.a,e.k,e.E],{name:[0,"name"]},null),(l()(),e._27(0,["\n                  "])),(l()(),e._6(0,null,0,1,"div",[],null,null,null,null,null)),(l()(),e._27(null,["",""])),(l()(),e._27(0,["\n                "])),(l()(),e._27(null,["\n    "])),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,10,"ion-col",[["center",""],["class","col"],["text-center",""]],null,null,null,null,null)),e._4(16384,null,0,i.a,[],null,null),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,2,"button",[["ion-button",""]],[[8,"hidden",0]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.fork()&&u),u},o.b,o.a)),e._4(1097728,null,0,r.a,[[8,""],s.a,e.k,e.E],null,null),(l()(),e._27(0,["＋关注问题"])),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,2,"button",[["color","tabc"],["ion-button",""]],[[8,"hidden",0]],null,null,o.b,o.a)),e._4(1097728,null,0,r.a,[[8,""],s.a,e.k,e.E],{color:[0,"color"]},null),(l()(),e._27(0,["-取消关注"])),(l()(),e._27(null,["\n    "])),(l()(),e._27(null,["\n"]))],function(l,n){l(n,8,0,"","");l(n,11,0,"eye");l(n,22,0,"","");l(n,25,0,"text");l(n,40,0,"tabc")},function(l,n){var t=n.component;l(n,10,0,e._20(n,11)._hidden),l(n,14,0,t.data.fork),l(n,24,0,e._20(n,25)._hidden),l(n,28,0,t.data.answer),l(n,35,0,t.ishide),l(n,39,0,!t.ishide)})}t.d(n,"a",function(){return _}),n.b=u;var e=t(0),a=t(123),i=t(122),o=t(40),r=t(19),s=t(1),c=t(41),_=(t(303),t(52),t(38),t(20),e._3({encapsulation:2,styles:[],data:{}}))},333:function(l,n,t){"use strict";function u(l){return e._29(0,[(l()(),e._27(null,["\n"])),(l()(),e._6(0,null,null,16,"section",[["class","dv_top_ban"]],[[2,"idark",null]],null,null,null,null)),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,1,"header",[],null,null,null,a.b,a.a)),e._4(573440,null,0,i.a,[o.a,r.e,s.a],{data:[0,"data"]},null),(l()(),e._27(null,["\n    "])),(l()(),e._6(0,null,null,10,"section",[],null,[[null,"click"]],function(l,n,t){var u=!0,e=l.component;return"click"===n&&(u=!1!==e.pushQuestionPage(e.data._id)&&u),u},null,null)),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._27(null,["",""])),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._27(null,["",""])),(l()(),e._27(null,["\n        "])),(l()(),e._6(0,null,null,1,"footer",[],null,null,null,c.b,c.a)),e._4(573440,null,0,_.a,[o.a,r.e,s.a],{data:[0,"data"]},null),(l()(),e._27(null,["\n    "])),(l()(),e._27(null,["\n"]))],function(l,n){var t=n.component;l(n,4,0,t.data),l(n,15,0,t.data)},function(l,n){var t=n.component;l(n,1,0,t.isIdark),l(n,9,0,t.data.title),l(n,12,0,t.data.text)})}t.d(n,"a",function(){return d}),n.b=u;var e=t(0),a=t(327),i=t(302),o=t(52),r=t(38),s=t(20),c=(t(323),t(328)),_=t(303),d=e._3({encapsulation:2,styles:[],data:{}})}});