(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{12:function(t,e,o){t.exports={BoardRow:"styles_BoardRow__lfUbB",BoardStatusWrapper:"styles_BoardStatusWrapper__3pZpg",Status:"styles_Status__1TH2x",Draw:"styles_Draw__2zdHF","Kbd-navigation":"styles_Kbd-navigation__367nS",Square:"styles_Square__19rBC",BoardHeading:"styles_BoardHeading__37lVS",BoardResetButton:"styles_BoardResetButton__3Cwnu"}},18:function(t,e,o){t.exports={footer:"styles_footer__10WIf",footerGithubs:"styles_footerGithubs__2axkO",footerGithubIcon:"styles_footerGithubIcon__3YPND",title:"styles_title__34ke5",footerYear:"styles_footerYear__1h2VH",footerLogo:"styles_footerLogo__2R3W-"}},30:function(t,e,o){t.exports={Header:"styles_Header__30dzN",HeaderTitle:"styles_HeaderTitle__1dGMb"}},38:function(t,e,o){t.exports={Game:"styles_Game__3jfoF"}},50:function(t,e,o){},51:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var r=o(0),a=o.n(r),n=o(14),i=o.n(n),c=(o(50),o(13)),s=o(79),l=(o(51),o(2)),u=function(t){return Object(l.jsx)("button",{className:"Square".concat(t.isActive?" "+t.isActive:""),onClick:t.onClick,children:t.value})},d=o(12),b=o.n(d),f=o(81),j=function(){var t=Object(r.useState)("Current player: X"),e=Object(c.a)(t,2),o=e[0],a=e[1],n=Object(r.useState)(Array(9).fill(null)),i=Object(c.a)(n,2),d=i[0],j=i[1],h=Object(r.useState)(null),x=Object(c.a)(h,2),m=x[0],p=x[1],O=Object(r.useState)(!1),_=Object(c.a)(O,2),g=_[0],v=_[1],y=Object(r.useState)(null),B=Object(c.a)(y,2),S=B[0],N=B[1],R=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],C=function(t){a("Current player: ".concat(t))};null!==m||d.includes(null)||g||v(!0);var w=function(t){for(var e=0;e<R.length;e++){var o=Object(c.a)(R[e],3),r=o[0],a=o[1],n=o[2];if(t[r]&&t[r]===t[a]&&t[r]===t[n])return t[r]}return null}(d),M=function(t){for(var e=0;e<R.length;e++){var o=Object(c.a)(R[e],3),r=o[0],a=o[1],n=o[2];if(t[r]&&t[r]===t[a]&&t[r]===t[n])return[r,a,n]}return null}(d);if(w&&w!==m&&p(w),M&&!S){var k=Object.assign({},S);M.forEach((function(t){k[t]="Active"})),M=null,N(k)}var W=function(t){return Object(l.jsx)(u,{value:d[t],onClick:function(){return function(t){var e=d.slice();m||("Current player: X"===o?(e[t]="X",j(e),C("O")):(e[t]="O",j(e),C("X")))}(t)},isActive:S?S[t]:""},t)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:b.a.BoardHeading,children:[Object(l.jsx)(s.a,{className:b.a.BoardStatusWrapper,children:Object(l.jsx)("div",{className:b.a.Status,children:m?"The winner is ".concat(m):o})}),Object(l.jsx)(f.a,{onClick:function(){return a("Current player: X"),j(Array(9).fill(null)),p(null),v(!1),void N(null)},className:b.a.BoardResetButton,children:"Reset"})]}),Object(l.jsxs)("div",{className:b.a.BoardRow,children:[W(0),W(1),W(2)]}),Object(l.jsxs)("div",{className:b.a.BoardRow,children:[W(3),W(4),W(5)]}),Object(l.jsxs)("div",{className:b.a.BoardRow,children:[W(6),W(7),W(8)]}),Object(l.jsx)(s.a,{children:Object(l.jsx)("div",{className:b.a.Draw,children:g?"It's a draw":null})})]})},h=o(38),x=o.n(h),m=function(){return Object(l.jsx)("div",{className:x.a.Game,children:Object(l.jsx)(j,{})})},p=o(82),O=o(83),_=o(86),g=o(30),v=o.n(g),y=function(){return Object(l.jsx)(_.a,{color:"primary",position:"static",className:v.a.Header,children:Object(l.jsx)(p.a,{maxWidth:"lg",children:Object(l.jsxs)(O.a,{color:"primary.main",children:[Object(l.jsx)(s.a,{variant:"h2",className:v.a.HeaderTitle,children:"Tic Tac Toe"}),Object(l.jsx)(f.a,{color:"inherit",id:"login"})]})})})},B=o(84),S=o(18),N=o.n(S),R=o(39),C=o.n(R),w=function(){return Object(l.jsx)("footer",{children:Object(l.jsx)(_.a,{className:N.a.footer,position:"static",children:Object(l.jsx)(p.a,{maxWidth:"lg",children:Object(l.jsxs)(O.a,{children:[Object(l.jsx)("div",{className:N.a.footerGithubs,children:Object(l.jsx)(B.a,{href:"https://github.com/Safwood",target:"_blank",children:Object(l.jsx)(C.a,{className:N.a.footerGithubIcon,style:{color:"#000"}})})}),Object(l.jsx)(s.a,{variant:"h6",className:N.a.title,children:"RSLang"}),Object(l.jsx)(s.a,{variant:"body2",className:N.a.footerYear,children:"2021\u0433."})]})})})})},M=o(40),k="#b2ebf2",W="rgba(0, 0, 0, 0.768)",H=Object(M.a)({palette:{primary:{main:k,light:"#bfd7ff",dark:"#084ac0"},secondary:{main:"#ff5f56",contrastText:"#fff"}},breakpoints:{values:{xs:660,sm:780,md:860,lg:960,xl:1090}},typography:{fontFamily:"Roboto",body1:{fontFamily:"Roboto",fontSize:"20px",marginBottom:"10px"},body2:{fontFamily:"Roboto",marginBottom:"10px",fontSize:"16px"},h1:{fontWeight:"bold",fontSize:"40px",marginBottom:"20px",color:W},h2:{fontWeight:"bold",fontSize:"36px",marginBottom:"20px",color:W},h3:{fontWeight:"bold",fontSize:"34px",marginBottom:"20px",color:W},h4:{fontWeight:"bold",fontSize:"26px",marginBottom:"20px",color:W},h5:{fontWeight:"bold",fontSize:"22px",marginBottom:"20px",color:W},button:{color:W,fontFamily:"Roboto",fontSize:"20px",fontWeight:"bold"}},shape:{borderRadius:0},overrides:{MuiPaper:{root:{borderRadius:"4px"}},MuiCard:{root:{boxShadow:"none"}},MuiTextField:{root:{borderColor:k,marginBottom:"20px","& .MuiInput-underline:before":{borderBottomColor:k},"&:hover":{borderBottomColor:k}}},MuiButton:{root:{backgroundColor:k,borderRadius:"8px","&:focus":{outline:"none"}}},MuiInputLabel:{root:{}},MuiMenu:{paper:{background:"#5c75f4",borderRadius:"4px"}},MuiSvgIcon:{root:{color:"#fff"}},MuiSelect:{icon:{color:"#fff"}},MuiInput:{root:{"&:focus":{outline:"none"},"&:hover":{outline:"none"}}},MuiButtonBase:{root:{color:"#fff"}}}}),T=o(85),F=function(){return Object(l.jsx)(T.a,{theme:H,children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(y,{}),Object(l.jsx)("main",{className:"Main",children:Object(l.jsx)(m,{})}),Object(l.jsx)(w,{})]})})},I=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,87)).then((function(e){var o=e.getCLS,r=e.getFID,a=e.getFCP,n=e.getLCP,i=e.getTTFB;o(t),r(t),a(t),n(t),i(t)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(F,{})}),document.getElementById("root")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.ced56824.chunk.js.map