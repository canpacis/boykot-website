(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1355:e=>{e.exports={hero:"Hero_hero__F1sxj",loading:"Hero_loading__QfBIU",item:"Hero_item__2m_tm",content:"Hero_content__Ivut2",image:"Hero_image__yENHl",container:"Hero_container__Ty3ee",slogan:"Hero_slogan__N1_Ey"}},1371:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),r=s(2115),n=s(6636),i=s(7190),l=s(6766),c=s(4739),o=s.n(c);let d=()=>{let[e,t]=(0,r.useState)(!0),[s,c]=(0,r.useState)({date:"",images:[]});return(0,r.useEffect)(()=>{fetch("/data/list.json").then(e=>e.json()).then(e=>{c(e),t(!1)}).catch(e=>console.error("JSON fetch error:",e))},[]),(0,a.jsx)("div",{className:o().section,children:(0,a.jsxs)(n.A,{children:[e&&(0,a.jsx)("div",{style:{minHeight:400,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(l.default,{src:"/images/spinner-white.gif",width:48,height:48,alt:""})}),!e&&s.images.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("div",{className:o().statusBadge,children:"G\xfcncel"}),(0,a.jsx)("h2",{children:"SIRALI TAM LİSTE"})]}),(0,a.jsx)("div",{className:o().cardList,children:(0,a.jsx)("div",{className:o().cardList,children:s.images.map((e,t)=>(0,a.jsx)(i.A,{image:e},t))})})]}),(0,a.jsxs)("div",{className:o().description,children:["Halkın haber alma hakkını gasbedene, haksıza, hukuksuza, halkı yok sayana, g\xf6rmeyen, duymayan, s\xf6ylemeyene, milli iradeye saygı g\xf6stermeyene ",(0,a.jsx)("b",{children:" cevabımız, t\xfcketimden gelen hakkımız!"})]}),(0,a.jsx)("div",{className:o().badge,children:(0,a.jsx)(l.default,{src:"/images/boykot_badge.svg",alt:"",width:500,height:159})})]})})}},1545:e=>{e.exports={card:"CardLogo_card__nkSde"}},1573:(e,t,s)=>{"use strict";s.d(t,{default:()=>x});var a=s(5155),r=s(2115),n=s(1355),i=s.n(n),l=s(6766),c=s(6636),o=s(9300),d=s.n(o),h=s(7677);s(2252),s(6816);var m=s(9497);let x=()=>{let[e,t]=(0,r.useState)(!0),[s,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{fetch("/data/hero.json").then(e=>e.json()).then(e=>{n(e),t(!1)}).catch(e=>console.error("JSON fetch error:",e))},[]),(0,r.useEffect)(()=>{},[s]),(0,a.jsx)("div",{className:d()(i().hero,{[i().loading]:e}),children:(0,a.jsx)(h.RC,{effect:"fade",loop:!0,simulateTouch:!1,autoplay:{delay:4e3,disableOnInteraction:!1},modules:[m.Ij,m._R],children:s.map((e,t)=>(0,a.jsx)(h.qr,{children:(0,a.jsxs)("div",{className:i().item,children:[(0,a.jsx)("div",{className:i().content,children:(0,a.jsxs)(c.A,{className:i().container,children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)(l.default,{src:"/images/slogan.svg",alt:"",width:355,height:113,className:i().slogan})]})}),(0,a.jsx)(l.default,{className:i().image,src:e.image,alt:"",width:1440,height:637})]})},t))})})}},3354:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3063,23)),Promise.resolve().then(s.bind(s,9769)),Promise.resolve().then(s.t.bind(s,6889,23)),Promise.resolve().then(s.bind(s,1573)),Promise.resolve().then(s.bind(s,1371)),Promise.resolve().then(s.bind(s,7040))},4739:e=>{e.exports={section:"SectionAll_section__S_nXu",cardList:"SectionAll_cardList__LmPFg",description:"SectionAll_description__NMc62",badge:"SectionAll_badge__0OKoC",statusBadge:"SectionAll_statusBadge__hDYiQ"}},5389:e=>{e.exports={footer:"Footer_footer__OYoYH",inner:"Footer_inner__LCA3x",socialList:"Footer_socialList__HzTIh",copyText:"Footer_copyText__KWfrr"}},6636:(e,t,s)=>{"use strict";s.d(t,{A:()=>c});var a=s(5155),r=s(9300),n=s.n(r),i=s(9577),l=s.n(i);let c=e=>{let{children:t,className:s}=e;return(0,a.jsx)("div",{className:n()(l().container,s),children:t})}},6889:e=>{e.exports={header:"Header_header__MwWvM",logo:"Header_logo__V9h3K"}},7040:(e,t,s)=>{"use strict";s.d(t,{default:()=>d});var a=s(5155),r=s(2115),n=s(6636),i=s(7190),l=s(6766),c=s(8637),o=s.n(c);let d=()=>{let[e,t]=(0,r.useState)(!0),[s,c]=(0,r.useState)({date:"",images:[]});return((0,r.useEffect)(()=>{fetch("/data/stage.json").then(e=>e.json()).then(e=>{c(e),t(!1)}).catch(e=>{console.error("JSON fetch error:",e),t(!1)})},[]),e||s.images&&0!==s.images.length)?(0,a.jsx)("div",{className:o().section,children:(0,a.jsx)(n.A,{children:e?(0,a.jsx)("div",{style:{minHeight:400,display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(l.default,{src:"/images/spinner-black.gif",width:48,height:48,alt:""})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{children:["BOYKOT SAHNESİNDE ",(0,a.jsxs)("span",{className:"text-red",children:["#",s.date]})]}),(0,a.jsx)("div",{className:o().cardList,children:s.images.map((e,t)=>(0,a.jsx)(i.A,{image:e},t))})]})})}):null}},7190:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var a=s(5155),r=s(9300),n=s.n(r),i=s(6766),l=s(1545),c=s.n(l);let o=e=>{let{image:t}=e;return(0,a.jsx)("div",{className:n()("card-logo",c().card),children:(0,a.jsx)(i.default,{src:t,alt:"",width:180,height:180})})}},8637:e=>{e.exports={section:"SectionStage_section__JgaWe",cardList:"SectionStage_cardList__AXEK7"}},9577:e=>{e.exports={container:"Container_container__A7FAx"}},9769:(e,t,s)=>{"use strict";s.d(t,{default:()=>h});var a=s(5155),r=s(2115);let n=e=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 25 24",...e,children:[(0,a.jsx)("g",{clipPath:"url(#facebook_svg__a)",children:(0,a.jsx)("path",{fill:"currentcolor",d:"M12.5 0C5.873 0 .5 5.373.5 12c0 5.628 3.875 10.35 9.101 11.647v-7.98H7.127V12H9.6v-1.58c0-4.084 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.324c-.283-.03-.775-.044-1.386-.044-1.967 0-2.728.745-2.728 2.683V12h3.92l-.673 3.667h-3.247v8.245C19.896 23.195 24.5 18.135 24.5 12c0-6.627-5.373-12-12-12"})}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"facebook_svg__a",children:(0,a.jsx)("path",{fill:"#fff",d:"M.5 0h24v24H.5z"})})})]}),i=e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 25 24",...e,children:(0,a.jsx)("path",{fill:"currentcolor",fillRule:"evenodd",d:"M13.275 2.75a6 6 0 0 1 8.484 8.485l-.012.012-3 3a6 6 0 0 1-9.048-.648 1 1 0 1 1 1.602-1.198 4 4 0 0 0 6.032.432l2.993-2.994a4 4 0 0 0-5.656-5.654l-1.715 1.704a1 1 0 0 1-1.41-1.418l1.72-1.71zM8.4 8.374a6 6 0 0 1 6.902 2.028 1 1 0 1 1-1.602 1.198 4 4 0 0 0-6.032-.432L4.674 14.16a4 4 0 0 0 5.655 5.655l1.704-1.703a1 1 0 1 1 1.414 1.414l-1.71 1.71-.012.012a6 6 0 0 1-8.484-8.484l.012-.012 3-3a6 6 0 0 1 2.146-1.38",clipRule:"evenodd"})}),l=e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 25 24",...e,children:(0,a.jsx)("path",{fill:"currentcolor",d:"m.5 24 1.687-6.163A11.87 11.87 0 0 1 .6 11.891C.603 5.335 5.938 0 12.493 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648zm11.387-5.464c-.074-.124-.272-.198-.57-.347s-1.758-.868-2.031-.967c-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165s-.347.223-.644.074-1.255-.462-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372S6.45 7.788 6.45 9.251s1.065 2.876 1.213 3.074 2.095 3.2 5.076 4.487c.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413s.248-1.29.173-1.414"})}),c=e=>(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 25 24",...e,children:(0,a.jsx)("path",{fill:"currentcolor",d:"M18.826 1.904H22.2l-7.37 8.423L23.5 21.79h-6.789l-5.317-6.952L5.31 21.79H1.934l7.883-9.01L1.5 1.904h6.961l4.806 6.354zM17.642 19.77h1.87L7.445 3.817H5.44z"})});var o=s(5389),d=s.n(o);let h=()=>{let[e,t]=(0,r.useState)(""),[s,o]=(0,r.useState)(!1);(0,r.useEffect)(()=>{t("".concat(window.location.protocol,"//").concat(window.location.host))},[]);let h="https://api.whatsapp.com/send?text=".concat(encodeURIComponent("BOYKOT YAP! "+e));return(0,a.jsx)("footer",{className:d().footer,children:(0,a.jsxs)("div",{className:d().inner,children:[(0,a.jsx)("h3",{children:"T\xfcketim G\xfcc\xfcn\xfc Direnişe D\xf6n\xfcşt\xfcr!"}),(0,a.jsx)("p",{children:"Boykota Davet Et"}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:d().socialList,children:[(0,a.jsxs)("button",{"aria-label":"copy-clipboard",type:"button",onClick:()=>{navigator.clipboard&&(navigator.clipboard.writeText(e),o(!0),setTimeout(()=>{o(!1)},1500))},children:[s&&(0,a.jsx)("div",{className:d().copyText,children:"Kopyalandı"}),(0,a.jsx)(i,{})]}),(0,a.jsx)("a",{href:h,target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp",children:(0,a.jsx)(l,{})}),(0,a.jsx)("a",{href:"https://twitter.com/intent/tweet?url=".concat(encodeURIComponent(e)),target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter",children:(0,a.jsx)(c,{})}),(0,a.jsx)("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(encodeURIComponent(e)),target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook",children:(0,a.jsx)(n,{})})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[328,555,441,684,358],()=>t(3354)),_N_E=e.O()}]);