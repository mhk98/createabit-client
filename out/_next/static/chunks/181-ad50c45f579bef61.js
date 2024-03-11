"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[181],{18918:function(e,s,t){t.d(s,{Z:function(){return r}});function r(e){let{preview:s,lightMode:t}=e,r=document.querySelector('link[href="/landing-preview/css/preview-style.css"]'),i=document.querySelector('link[href="/dark/assets/css/style.css"]'),a=document.querySelector('link[href="/light/assets/css/style.css"]'),n=document.querySelector('link[href="/dark/assets/css/plugins.css"]'),l=document.querySelector('link[href="/light/assets/css/plugins.css"]');if(t&&!s){document.querySelector("noscript").before(l),document.querySelector("noscript").before(a);let e=document.querySelectorAll('link[href="/light/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/light/assets/css/style.css"]');s.length>1&&s[0].remove()}if(!t&&!s){document.querySelector("noscript").before(n),document.querySelector("noscript").before(i);let e=document.querySelectorAll('link[href="/dark/assets/css/plugins.css"]');e.length>1&&e[0].remove();let s=document.querySelectorAll('link[href="/dark/assets/css/style.css"]');s.length>1&&s[0].remove()}s&&r?(document.head.append(r),a&&a.remove(),l&&l.remove()):!s&&r&&r.remove()}},37236:function(e,s){s.Z=()=>{let e;let s=document.querySelectorAll(".gallery"),t=document.querySelector(".filtering"),r=document.querySelectorAll(".filtering");if(s.length>=1&&s.forEach(s=>{e=new Isotope(s,{itemSelector:".items"})}),t){t.addEventListener("click",function(s){if(matchesSelector(s.target,"span")){var t=s.target.getAttribute("data-filter");e.arrange({filter:t})}});let s=e=>{e.addEventListener("click",s=>{matchesSelector(s.target,"span")&&(e.querySelector(".active").classList.remove("active"),s.target.classList.add("active"))})};for(var i=0,a=r.length;i<a;i++)s(r[i])}}},83538:function(e,s,t){var r=t(85893),i=t(67294);s.Z=function(){return(0,i.useEffect)(()=>{let e=document.querySelectorAll(".hover-this"),s=document.querySelector(".cursor"),t=function(e){let s=this.querySelector(".hover-anim"),{offsetX:t,offsetY:r}=e,{offsetWidth:i,offsetHeight:a}=this;s.style.transform="translate(".concat(t/i*50-25,"px, ").concat(r/a*50-25,"px)"),"mouseleave"===e.type&&(s.style.transform="")};e.forEach(e=>e.addEventListener("mousemove",t)),e.forEach(e=>e.addEventListener("mouseleave",t)),window.addEventListener("mousemove",e=>{let{clientX:t,clientY:r}=e;s.style.left=t+"px",s.style.top=r+"px"}),document.querySelectorAll("a, .cursor-pointer").forEach(e=>{e.addEventListener("mousemove",()=>{s.classList.add("cursor-active")}),e.addEventListener("mouseleave",()=>{s.classList.remove("cursor-active")})})},[]),(0,r.jsx)("div",{className:"cursor"})}},98876:function(e,s,t){var r=t(85893),i=t(67294);s.Z=function(){return(0,i.useEffect)(()=>{let e=document.getElementById("svg"),s=gsap.timeline();s.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont",{delay:1.5,y:-100,opacity:0}),s.to(e,{duration:.5,attr:{d:"M0 502S175 272 500 272s500 230 500 230V0H0Z"},ease:"power2.easeIn"}).to(e,{duration:.5,attr:{d:"M0 2S175 1 500 1s500 1 500 1V0H0Z"},ease:"power2.easeOut"}),s.to(".loader-wrap",{y:-1500}),s.to(".loader-wrap",{zIndex:-1,display:"none"}),s.from("header",{y:200},"-=1.5"),s.from("header .container",{y:40,opacity:0,delay:.3},"-=1.5")},[]),(0,r.jsxs)("div",{className:"loader-wrap",children:[(0,r.jsx)("svg",{viewBox:"0 0 1000 1000",preserveAspectRatio:"none",children:(0,r.jsx)("path",{id:"svg",d:"M0,1005S175,995,500,995s500,5,500,5V0H0Z"})}),(0,r.jsx)("div",{className:"loader-wrap-heading",children:(0,r.jsx)("span",{children:(0,r.jsxs)("h2",{className:"load-text",children:[(0,r.jsx)("span",{children:"L"}),(0,r.jsx)("span",{children:"o"}),(0,r.jsx)("span",{children:"a"}),(0,r.jsx)("span",{children:"d"}),(0,r.jsx)("span",{children:"i"}),(0,r.jsx)("span",{children:"n"}),(0,r.jsx)("span",{children:"g"})]})})})]})}},42037:function(e,s,t){t.d(s,{Z:function(){return n}});var r=t(85893),i=t(67294),a=()=>{let e=document.querySelector(".progress-wrap"),s=document.querySelector(".progress-wrap path"),t=s.getTotalLength(),r=()=>{let e=window.pageYOffset,r=document.documentElement.scrollHeight-window.innerHeight;s.style.strokeDashoffset=t-e*t/r};e&&(s.style.transition=s.style.WebkitTransition="none",s.style.strokeDasharray=t+" "+t,s.style.strokeDashoffset=t,s.getBoundingClientRect(),s.style.transition=s.style.WebkitTransition="stroke-dashoffset 10ms linear",r(),window.addEventListener("scroll",r),window.addEventListener("scroll",function(){window.pageYOffset>150?e.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")}),e.addEventListener("click",function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},n=()=>((0,i.useEffect)(()=>{a()},[]),(0,r.jsx)("div",{className:"progress-wrap cursor-pointer",children:(0,r.jsx)("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:(0,r.jsx)("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})}))},33765:function(e,s,t){t.d(s,{Z:function(){return o}});var r=t(85893),i=t(41664),a=t.n(i),n=t(67294),l=t(37236),c=JSON.parse('{"l":[{"id":1,"filter":"web","image":"/dark/assets/imgs/works/grid2/1.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":2,"filter":"app","image":"/dark/assets/imgs/works/grid2/2.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":3,"filter":"brand","image":"/dark/assets/imgs/works/grid2/3.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":4,"filter":"web","image":"/dark/assets/imgs/works/grid2/4.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":5,"filter":"app","image":"/dark/assets/imgs/works/grid2/6.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":6,"filter":"brand","image":"/dark/assets/imgs/works/grid2/5.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":7,"filter":"web","image":"/dark/assets/imgs/works/grid2/7.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":8,"filter":"app","image":"/dark/assets/imgs/works/grid2/8.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":9,"filter":"brand","image":"/dark/assets/imgs/works/grid2/9.jpg","type":"Design ART","year":"2023","title":"Character Design"}]}'),o=function(){return(0,n.useEffect)(()=>{(0,l.Z)()},[]),(0,r.jsx)("section",{className:" mt-30 portfolio ",children:(0,r.jsxs)("div",{className:"container-xxl",children:[(0,r.jsx)("h6",{className:"mt-3 dot-titl-non ",children:"Product"}),(0,r.jsx)("h2",{className:"fz-50",children:"Dynamic Digital Products"}),(0,r.jsx)("div",{className:"gallery",children:(0,r.jsx)("div",{className:"grid row md-marg",children:c.l.map(e=>(0,r.jsx)("div",{className:"col-lg-4 col-md-6 items ".concat(e.filter," info-overlay mb-30"),children:(0,r.jsxs)("div",{className:"item-img o-hidden",children:[(0,r.jsx)(a(),{href:"/dark/project-details1",className:"imago wow",children:(0,r.jsx)("div",{className:"inner wow",children:(0,r.jsx)("img",{src:e.image,alt:"image"})})}),(0,r.jsxs)("div",{className:"info",children:[(0,r.jsx)("span",{className:"mb-15",children:(0,r.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",fill:"currentColor"})})}),(0,r.jsx)("h6",{className:"sub-title tag",children:(0,r.jsxs)(a(),{href:"/dark/project-details1",children:["\xa9 ",e.year," ",(0,r.jsx)("br",{})," ",e.type]})}),(0,r.jsx)("h5",{children:(0,r.jsx)(a(),{href:"/dark/project-details1",children:e.title})})]})]})},e.id))})})]})})}},28235:function(e,s,t){var r=t(85893),i=t(67294),a=t(9008),n=t.n(a),l=t(18918),c=t(83538),o=t(42037);s.Z=e=>{let{children:s,lightMode:t}=e;return(0,i.useEffect)(()=>{(0,l.Z)({lightMode:t})},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n(),{children:t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/plugins.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/light/assets/css/style.css"})]}):(0,r.jsx)("link",{rel:"stylesheet",href:"/dark/assets/css/base.css"})}),(0,r.jsx)(c.Z,{}),(0,r.jsx)(o.Z,{}),s]})}}}]);