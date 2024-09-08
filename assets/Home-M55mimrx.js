import{r as j,j as s,L as rt,R as Zt,a as _,P as p}from"./index-BvRoGbla.js";import{A as wn,I as jn,L as R,a as ce}from"./index-BcjvXH8o.js";import{A as fe,S as kn}from"./ScrollToTop-CgNOfb_7.js";import Nn from"./Footer-Ddg4YI0G.js";function An({sections:t}){const[e,n]=j.useState(!1),a=()=>{n(!e)};return j.useEffect(()=>{const r=document.querySelectorAll("ul li a");window.onscroll=()=>{t.forEach(i=>{let o=window.scrollY,l=i.offsetTop-150,c=i.offsetHeight,f=i.getAttribute("id");o>=l&&o<l+c&&r.forEach(m=>{m.classList.remove("active"),m.getAttribute("href")===`#${f}`&&m.classList.add("active")})})}},[t]),s.jsxs("div",{className:"w-full h-auto bg-transparent",children:[s.jsxs("div",{className:"md:hidden w-[100%]  mx-auto h-8 flex flex-row py-10 justify-center items-center fixed z-[10] top-0 left-[50%] bg-white px-4 translate-x-[-50%]",children:[s.jsx("div",{onClick:a,className:e?"transition-transform duration-500 transform rotate-180 block md:hidden z-20 px-10 ":"transition-transform duration-500 transform rotate-0 block md:hidden z-20 px-10 ",children:e?s.jsx(wn,{size:30}):s.jsx(jn,{size:30})}),s.jsx("div",{className:e?"w-[60%] fixed left-0 top-0 h-screen bg-blue-100 flex justify-center items-center ease-in-out duration-500 z-[5]":"fixed left-[-60%] w-[60%] top-0 h-screen bg-blue-200 flex justify-center items-center ease-in-out duration-500 z-[5]",children:s.jsxs("ul",{className:"z-10 text-black  m-4 md:flex flex-row gap-x-16 items-center cursor-pointer",children:[s.jsx(R,{activeClass:"active",to:"/About",spy:!0,smooth:!0,offset:-70,duration:500,onClick:a,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"O mnie"})}),s.jsx(R,{activeClass:"active",to:"/Portfolio",spy:!0,smooth:!0,offset:-70,onClick:a,duration:500,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"Portfolio"})}),s.jsx(R,{activeClass:"active",to:"/Offer",spy:!0,smooth:!0,offset:-70,duration:500,onClick:a,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"Oferta"})}),s.jsx(R,{activeClass:"active",to:"/Contact",spy:!0,smooth:!0,offset:-70,onClick:a,duration:500,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"Kontakt"})})]})}),s.jsx("div",{className:"md:hidden w-20 mx-4 h-auto object-scale-dow ml-auto",children:s.jsx("img",{src:ce,className:""})})]}),s.jsxs("div",{className:"w-[100%] bg-white hidden fixed mx-auto h-8 md:flex flex-row py-10 justify-center items-center  top-0 left-[50%] translate-x-[-50%] z-[10]",children:[s.jsxs("ul",{className:"hidden md:flex  flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent",children:[s.jsx(R,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"O mnie"})}),s.jsx(R,{activeClass:"active",to:"Portfolio",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"hover:text-[#0009]  font-light text-lg tracking-[5px]  text-titleGray",children:"Portfolio"})}),s.jsx(R,{activeClass:"active",to:"Offer",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Oferta"})}),s.jsx(R,{activeClass:"active",to:"Contact",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Kontakt"})})]}),s.jsx("div",{className:"w-20 mx-4 h-auto object-scale-dow ml-auto ",children:s.jsx(rt,{to:"/",children:s.jsx("img",{src:ce,className:""})})})]})]})}const ut=({slides:t,delay:e=0,initialDelay:n=0})=>{const[a,r]=j.useState(0),i=j.useRef(null),o=j.useRef(null);return j.useEffect(()=>{const l=()=>{o.current=setTimeout(()=>{i.current=setInterval(()=>{document.visibilityState==="visible"&&r(f=>(f+1)%t.length)},e)},n)},c=()=>{document.visibilityState==="visible"?l():(clearInterval(i.current),clearTimeout(o.current))};return document.addEventListener("visibilitychange",c),l(),()=>{document.removeEventListener("visibilitychange",c),clearInterval(i.current),clearTimeout(o.current)}},[t,e,n]),s.jsx("div",{className:"relative w-full h-full flex justify-center items-center",children:t.map((l,c)=>s.jsx("img",{src:l,alt:`Slide ${c}`,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${c===a?"opacity-100":"opacity-0"}`},c))})},On=""+new URL("s1-1-ClbUTb3t.jpg",import.meta.url).href,Cn=""+new URL("s1-2-D8pVfsyM.jpg",import.meta.url).href,zn=""+new URL("s2-1-G1TAPOhe.jpg",import.meta.url).href,Pn=""+new URL("s2-2-DxuWG7-J.jpg",import.meta.url).href,Sn=""+new URL("s3-1-BJyjtWzd.jpg",import.meta.url).href,En=""+new URL("s3-2-DoENceOC.jpg",import.meta.url).href,Ln=""+new URL("s4-1-BwC0tXP0.jpg",import.meta.url).href,In=""+new URL("s4-2-Dd_MtrYK.jpg",import.meta.url).href;function Tn(){const t=[On,Cn],e=[zn,Pn],n=[Sn,En],a=[Ln,In];return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"Hero",className:"max-w-[1050px] md:mt-[40px] w-full  h-auto mx-auto flex md:flex-row flex-col-reverse justify-center mt-10 pt-14  ",children:[s.jsxs("div",{className:"w-full md:w-[500px] px-6 md:mt-12 flex flex-col items-center md:items-start",children:[s.jsx("h1",{className:"text-5xl md:py-6 mx-auto  md:mx-0 tracking-[5px] font-light text-titleGray",children:"Cześć"}),s.jsx("p",{className:"mt-2 py-4 md:py-0 tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Zajmuję się fotografią psów i koni. Pokazanie ich atutów oraz charakteru to coś co definiuje moje zdjęcia. Zapewnij sobie świetną pamiątke ze swoim pupilem!"}),s.jsx(R,{activeClass:"active",to:"Portfolio",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("div",{className:"w-[130px] cursor-pointer mt-6 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-[#66c4fb] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200",children:s.jsx("div",{className:"rounded-[50px] tracking-[1px] flex items-center justify-center mx-auto bg-white mr-auto w-[122px] py-1 text-[17px] font-bold text-black hover:text-[#9b9b9b]",children:s.jsx("h2",{className:"text-center text-lg font-normal bg-gradient-to-r from-[#56c0fd] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200 inline-block text-transparent bg-clip-text md:mt-0",children:"Portfolio"})})})})]}),s.jsxs("div",{className:"  w-[100%] max-w-[480px] px-4 md:w-[50%] md:max-w-[480px] h-[400px]  md:ml-auto mx-auto",children:[s.jsxs("div",{className:"w-[100%] h-[180px] flex flex-row items-end",children:[s.jsx("div",{className:"w-[70%] h-[150px]",children:s.jsx(ut,{slides:t,delay:"10000",initialDelay:"2000"})}),s.jsx("div",{className:"w-[30%] h-[100%] ",children:s.jsx(ut,{slides:e,delay:"10000",initialDelay:"6000"})})]}),s.jsxs("div",{className:"w-[100%] h-[180px]  flex flex-row",children:[s.jsx("div",{className:"w-[135px] h-[180px] ",children:s.jsx(ut,{slides:n,delay:"10000",initialDelay:"8000"})}),s.jsx("div",{className:"w-[70%] h-[150px] ",children:s.jsx(ut,{slides:a,delay:"10000",initialDelay:"4000"})})]})]})]})})}const _n=""+new URL("offercard-horse-DO158oID.webp",import.meta.url).href,Rn=""+new URL("offercard-dog-BP4p7s1i.webp",import.meta.url).href,Mn=""+new URL("offercard-event-CjC7vzEh.webp",import.meta.url).href;function Fn(){return s.jsxs("div",{id:"Offer",className:"max-w-[1050px] justify-center mx-auto flex flex-col md:mt-[60px] md:pt-0 mt-[50px]",children:[s.jsx("h1",{className:"text-center md:text-6xl text-6xl pb-4 mx-auto tracking-[5px] font-light text-titleGray",children:"Oferta"}),s.jsxs("div",{className:"flex flex-col md:flex-row gap-y-8 gap-x-8 mt-14 mx-auto",children:[s.jsx(rt,{to:"/oferta-konie",onClick:()=>{window.scrollTo(0,0)},children:s.jsxs("div",{className:"relative w-[300px] h-auto hover:scale-105 transition duration-300",children:[s.jsx("img",{src:_n,alt:"Horse",loading:"lazy",className:"w-full h-auto "}),s.jsx("h1",{className:"absolute tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl z-4 cursor-pointer",children:"Konie"})]})}),s.jsx(rt,{to:"/oferta-psy",onClick:()=>{window.scrollTo(0,0)},children:s.jsxs("div",{className:"relative w-[300px] h-auto hover:scale-105 transition duration-300",children:[s.jsx("img",{src:Rn,alt:"dog",loading:"lazy",className:"w-full h-auto "}),s.jsx("h1",{className:"absolute  tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl  z-4 cursor-pointer",children:"Psy"})]})}),s.jsx(rt,{to:"/oferta-wydarzenia",onClick:()=>{window.scrollTo(0,0)},children:s.jsxs("div",{className:"relative w-[300px] h-auto hover:scale-105 transition duration-300",children:[s.jsx("img",{src:Mn,alt:"wydarzenia",loading:"lazy",className:"w-full h-auto "}),s.jsx("h1",{className:"absolute inset-0  tracking-[5px] font-light flex justify-center items-start pt-16 text-white text-4xl  z-4 cursor-pointer",children:"Wydarzenia"})]})})]}),s.jsx("div",{className:" mx-auto h-auto py-8 mt-20",children:s.jsxs("h2",{"data-aos":"slide-up",className:"mx-auto max-w-[900px] text-center px-6    tracking-[0px] font-[Lora] text-gray-700 font-normal text-[20px] leading-[34px] pb-4 overflow-visible z-4 ",children:["Jeśli sesja jaka Cię interesuje nie znajduję się w tej zakładce,",s.jsx("br",{}),"napisz do mnie, a na pewno razem coś wymyślimy :)"]})})]})}const Dn=""+new URL("fb-Doi5lfQZ.png",import.meta.url).href,Un=""+new URL("ig-BG7lF8Jg.png",import.meta.url).href,Gn=""+new URL("mail-5nlIgxw_.png",import.meta.url).href,Wn=""+new URL("messenger-CdLPOB1K.png",import.meta.url).href;function Nt({id:t,open:e}){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`${t===e?"rotate-180":""} h-5 w-5 transition-transform`,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function Yn(){const[t,e]=Zt.useState(0),n=a=>e(t===a?0:a);return s.jsxs("div",{className:"w-[85%]  max-w-[900px]  md:w-[55%] py-8  mx-auto",children:[s.jsxs(_.Accordion,{open:t===1,icon:s.jsx(Nt,{id:1,open:t}),children:[s.jsx(_.AccordionHeader,{className:"font-[Montserrat] tracking-[5px] font-light text-titleGray",onClick:()=>n(1),children:"Jak przygotować się przed sesją?"}),s.jsx(_.AccordionBody,{className:" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Przed sesją warto nakreślić mi swoje oczekiwania co do zdjęć. Jeśli robisz ujęcia swojego pupila zadbaj o to by był on wypoczęty, jego sierść nie była posklejana i brudna, a na sesje zabierz ulubione smaczki."})]}),s.jsxs(_.Accordion,{open:t===2,icon:s.jsx(Nt,{id:2,open:t}),children:[s.jsx(_.AccordionHeader,{className:"font-[Montserrat] tracking-[5px] font-light text-titleGray",onClick:()=>n(2),children:"Czy mogę dostać nieobrobione zdjęcia z sesji?"}),s.jsx(_.AccordionBody,{className:" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Nie wysyłam nieobrobionych zdjęć. Po sesji wybieram najlepsze kadry i poddaje je starannej obróbce, aby zapewnić najlepszą jakość materiału który otrzymasz."})]}),s.jsxs(_.Accordion,{open:t===3,icon:s.jsx(Nt,{id:3,open:t}),children:[s.jsx(_.AccordionHeader,{className:"font-[Montserrat]  tracking-[5px] font-light text-titleGray",onClick:()=>n(3),children:"Ile zwierząt mogę zabrać na sesje?"}),s.jsx(_.AccordionBody,{className:" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px] ",children:"Co do zasady ile chcesz, jednak pamiętaj, że najlepiej jest nam się skupić na mniejszej ilości modeli. Jeśli planujesz ujęcia z większą ilością zwierzaków, napisz mi to wcześniej :)"})]})]})}function Bn(){const[t,e]=j.useState(!1),[n,a]=j.useState(!1),r=o=>{e(o.target.checked),o.target.checked&&a(!1)},i=o=>{t||(a(!0),o.preventDefault())};return s.jsx("div",{children:s.jsxs("div",{id:"Contact",className:"max-w-[850px] flex justify-center flex-col items-center mx-auto mb-0 md:mb-10 md:pt-6 pt-6 pb-4",children:[s.jsx("h1",{className:"text-5xl md:text-6xl text-center tracking-[5px] font-light text-titleGray",children:"Skontaktuj"}),s.jsx("h2",{className:"text-center text-2xl tracking-[5px] font-light  bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text md:mt-0",children:"się ze mną!"}),s.jsxs("div",{className:"w-full h-full flex flex-col md:flex-row mt-6 justify-between items-start  py-4 ",children:[s.jsxs("div",{className:"md:w-[50%] w-[70%] flex flex-col mx-auto",children:[s.jsx("h1",{className:"text-center text-xl  py-3 tracking-[5px] font-light text-titleGray",children:"Zapytaj o termin!"}),s.jsx("form",{action:"https://api.web3forms.com/submit",method:"POST",className:"flex flex-col justify-center items-center ",children:s.jsxs("div",{className:"md:min-w-[355px] min-w-[295px] flex flex-col justify-start space-y-6",children:[s.jsx("input",{type:"hidden",name:"access_key",value:"YOUR_ACCESS_KEY_HERE"}),s.jsx("input",{type:"email",name:"email",required:!0,placeholder:"np. email@gmail.com",className:"w-[100%] rounded-lg bg-gray-300 py-2 border-transparent pl-4 tracking-[5px] font-light text-titleGray"}),s.jsx("textarea",{name:"message",required:!0,placeholder:"tutaj możesz wpisać jaki termin cie interesuje",className:"w-[100%] pb-[100px] rounded-xl bg-gray-300 py-2 px-4 border-none tracking-[5px] font-light text-titleGray"}),s.jsx("div",{className:"w-[130px] cursor-pointer bg-red-500 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-blue-300 to-purple-300",children:s.jsx("button",{type:"submit",onClick:i,id:"ContactButton",className:"rounded-[50px] mx-auto tracking-[5px] font-normal  bg-white mr-auto w-[120px] py-1 text-[17px]  text-[#747474] hover:text-[#9b9b9b]",children:"Wyślij"})}),s.jsxs("div",{className:"flex flex-row items-start justify-center ml-2 pb-4",children:[s.jsx("input",{type:"checkbox",id:"checkbox",className:"mt-1 mr-2",onChange:r}),s.jsxs("p",{className:"text-xs text-gray-400 tracking-[3px] font-light ",children:["Oświadczam iż przeczytałem"," ",s.jsxs(rt,{to:"Polityka-Prywatności",onClick:()=>{window.scrollTo(0,0)},children:[" ","politykę prywatności"]})," ","i wyrażam zgodę na przetwarzanie moich danych osobowych w celach kontaktowych przez administratora strony"]})]}),s.jsx("p",{id:"needed",className:`text-red-200 text-xs tracking-[5px] font-light  ${n?"":"hidden"}`,children:"*Zaznaczenie tej zgody jest wymagane"})]})})]}),s.jsx("div",{className:"md:w-[50%] md:ml-10 h-full md:mb-6 flex justify-center mx-auto md:pt-20 ",children:s.jsxs("ul",{children:[s.jsx("a",{href:"https://www.facebook.com/patrycjadawidfotografia?locale=pl_PL",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md ",children:[s.jsx("img",{src:Dn,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"Patrycja Dawid Fotografia"})]})}),s.jsx("a",{href:"https://m.me/patrycjadawidfotografia",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md",children:[s.jsx("img",{src:Wn,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"Patrycja Dawid Fotografia"})]})}),s.jsx("a",{href:"https://www.instagram.com/patrycjadfotografia/",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md",children:[s.jsx("img",{src:Un,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"patrycjadfotografia"})]})}),s.jsx("a",{href:"mailto:wiktorskid@wp.pl",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md",children:[s.jsx("img",{src:Gn,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"patrycjad20@gmail.com"})]})})]})})]})]})})}const Hn=""+new URL("2-BjLwdV2G.jpg",import.meta.url).href,$n=""+new URL("3-e4H2MAVi.jpg",import.meta.url).href,Xn=""+new URL("4-DNmv9HZt.jpg",import.meta.url).href,Kn=""+new URL("5-QbbeLnpM.jpg",import.meta.url).href,At=""+new URL("6-Cp05BE8d.jpg",import.meta.url).href,Vn=""+new URL("1-fx4mTG9y.jpg",import.meta.url).href,qn=""+new URL("2-C__W97Lp.jpg",import.meta.url).href,Zn=""+new URL("3-B3LE8vEp.jpg",import.meta.url).href,Jn=""+new URL("4--7y4feTW.jpg",import.meta.url).href,Qn=""+new URL("5-BtFu2AJ1.jpg",import.meta.url).href,Ot=""+new URL("6-DX8Jk-HN.jpg",import.meta.url).href,ta=""+new URL("1--gKG2vLH.jpg",import.meta.url).href,ea=""+new URL("2-CVhH8qZB.jpg",import.meta.url).href,na=""+new URL("3-WZCSxWmy.jpg",import.meta.url).href,aa=""+new URL("4-iUJmRSjg.jpg",import.meta.url).href,ra=""+new URL("5-BC_wNRuE.jpg",import.meta.url).href,Ct=""+new URL("6-Bkz8E0Z3.jpg",import.meta.url).href,sa=({setSessionType:t,sessionTypesButtons:e})=>{const[n,a]=j.useState(0);return s.jsx("ul",{className:" mb-4 py-1 bg-gray-100 rounded-xl text-center flex-row flex",children:e.map((r,i)=>s.jsx("li",{className:`w-[33%]
            ${n===i?"bg-white shadow-sm font-semibold rounded-lg":""}`,children:s.jsx("button",{className:"w-full py-2   cursor-pointer transition-all duration-800 delay-800 ease-in-out",onClick:()=>{t(r),a(i)},children:r.name})},i))})},ia=({sessionType:t,setSessionType:e,setShowDialog:n,setBigPic:a,dogs:r,horses:i,events:o,setImageIndex:l})=>{const c=[r,i,o],[f,m]=j.useState(!1);return j.useEffect(()=>{m(!1);const h=setTimeout(()=>m(!0),350);return()=>clearTimeout(h)},[t]),s.jsxs("div",{className:"max-w-[1200px] flex flex-col",children:[s.jsx(sa,{setSessionType:e,sessionTypesButtons:c}),s.jsx("div",{className:"w-full px-2 py-2 overflow-x-scroll",children:s.jsx("div",{className:"grid  w-[400%] mb-4 mx-auto md:w-[1500px] grid-cols-4 md:grid-cols-2 lg:grid-cols-4 items-start justify-center gap-4",children:t.id.map((h,d)=>s.jsx("img",{onClick:()=>{n(!0),l(d)},src:h,className:`w-full ${f?"animate-fadeIn":"opacity-0"} duration-500 object-cover object-center h-60 rounded-xl hover:scale-105 cursor-pointer`,loading:"lazy"},d))})})]})},ue=()=>{};let Jt={},Fe={},De=null,Ue={mark:ue,measure:ue};try{typeof window<"u"&&(Jt=window),typeof document<"u"&&(Fe=document),typeof MutationObserver<"u"&&(De=MutationObserver),typeof performance<"u"&&(Ue=performance)}catch{}const{userAgent:me=""}=Jt.navigator||{},W=Jt,x=Fe,de=De,mt=Ue;W.document;const D=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Ge=~me.indexOf("MSIE")||~me.indexOf("Trident/");var g="classic",We="duotone",A="sharp",O="sharp-duotone",oa=[g,We,A,O],la={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},pe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ca=["kit"],fa=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,ua=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ma={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},da={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},pa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},ha={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},xa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ga={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ye={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},ya=["solid","regular","light","thin","duotone","brands"],Be=[1,2,3,4,5,6,7,8,9,10],ba=Be.concat([11,12,13,14,15,16,17,18,19,20]),nt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},va=[...Object.keys(ha),...ya,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",nt.GROUP,nt.SWAP_OPACITY,nt.PRIMARY,nt.SECONDARY].concat(Be.map(t=>"".concat(t,"x"))).concat(ba.map(t=>"w-".concat(t))),wa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ja={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ka={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},he={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",Tt=16,He="fa",$e="svg-inline--fa",K="data-fa-i2svg",_t="data-fa-pseudo-element",Na="data-fa-pseudo-element-pending",Qt="data-prefix",te="data-icon",xe="fontawesome-i2svg",Aa="async",Oa=["HTML","HEAD","STYLE","SCRIPT"],Xe=(()=>{try{return!0}catch{return!1}})(),Ke=[g,A,O];function ct(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[g]}})}const Ve={...Ye};Ve[g]={...Ye[g],...pe.kit,...pe["kit-duotone"]};const $=ct(Ve),Rt={...ga};Rt[g]={...Rt[g],...he.kit,...he["kit-duotone"]};const ot=ct(Rt),Mt={...xa};Mt[g]={...Mt[g],...ka.kit};const X=ct(Mt),Ft={...pa};Ft[g]={...Ft[g],...ja.kit};const Ca=ct(Ft),za=fa,qe="fa-layers-text",Pa=ua,Sa={...la};ct(Sa);const Ea=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],zt=nt,Q=new Set;Object.keys(ot[g]).map(Q.add.bind(Q));Object.keys(ot[A]).map(Q.add.bind(Q));Object.keys(ot[O]).map(Q.add.bind(Q));const La=[...ca,...va],st=W.FontAwesomeConfig||{};function Ia(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ta(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Ta(Ia(n));r!=null&&(st[a]=r)});const Ze={styleDefault:"solid",familyDefault:"classic",cssPrefix:He,replacementClass:$e,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);const tt={...Ze,...st};tt.autoReplaceSvg||(tt.observeMutations=!1);const u={};Object.keys(Ze).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(e){tt[t]=e,it.forEach(n=>n(u))},get:function(){return tt[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){tt.cssPrefix=t,it.forEach(e=>e(u))},get:function(){return tt.cssPrefix}});W.FontAwesomeConfig=u;const it=[];function _a(t){return it.push(t),()=>{it.splice(it.indexOf(t),1)}}const U=Tt,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ra(t){if(!t||!D)return;const e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=x.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(e,a),t}const Ma="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function lt(){let t=12,e="";for(;t-- >0;)e+=Ma[Math.random()*62|0];return e}function et(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ee(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Je(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fa(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Je(t[n]),'" '),"").trim()}function bt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function ne(t){return t.size!==E.size||t.x!==E.x||t.y!==E.y||t.rotate!==E.rotate||t.flipX||t.flipY}function Da(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Ua(t){let{transform:e,width:n=Tt,height:a=Tt,startCentered:r=!1}=t,i="";return r&&Ge?i+="translate(".concat(e.x/U-n/2,"em, ").concat(e.y/U-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(e.x/U,"em), calc(-50% + ").concat(e.y/U,"em)) "):i+="translate(".concat(e.x/U,"em, ").concat(e.y/U,"em) "),i+="scale(".concat(e.size/U*(e.flipX?-1:1),", ").concat(e.size/U*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Ga=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qe(){const t=He,e=$e,n=u.cssPrefix,a=u.replacementClass;let r=Ga;if(n!==t||a!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let ge=!1;function Pt(){u.autoAddCss&&!ge&&(Ra(Qe()),ge=!0)}var Wa={mixout(){return{dom:{css:Qe,insertCss:Pt}}},hooks(){return{beforeDOMElementCreation(){Pt()},beforeI2svg(){Pt()}}}};const F=W||{};F[M]||(F[M]={});F[M].styles||(F[M].styles={});F[M].hooks||(F[M].hooks={});F[M].shims||(F[M].shims=[]);var L=F[M];const tn=[],en=function(){x.removeEventListener("DOMContentLoaded",en),ht=1,tn.map(t=>t())};let ht=!1;D&&(ht=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),ht||x.addEventListener("DOMContentLoaded",en));function Ya(t){D&&(ht?setTimeout(t,0):tn.push(t))}function ft(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Je(t):"<".concat(e," ").concat(Fa(n),">").concat(a.map(ft).join(""),"</").concat(e,">")}function ye(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var St=function(e,n,a,r){var i=Object.keys(e),o=i.length,l=n,c,f,m;for(a===void 0?(c=1,m=e[i[0]]):(c=0,m=a);c<o;c++)f=i[c],m=l(m,e[f],f,e);return m};function Ba(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Dt(t){const e=Ba(t);return e.length===1?e[0].toString(16):null}function Ha(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function be(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function Ut(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=be(e);typeof L.hooks.addPack=="function"&&!a?L.hooks.addPack(t,be(e)):L.styles[t]={...L.styles[t]||{},...r},t==="fas"&&Ut("fa",e)}const{styles:H,shims:$a}=L,Xa={[g]:Object.values(X[g]),[A]:Object.values(X[A]),[O]:Object.values(X[O])};let ae=null,nn={},an={},rn={},sn={},on={};const Ka={[g]:Object.keys($[g]),[A]:Object.keys($[A]),[O]:Object.keys($[O])};function Va(t){return~La.indexOf(t)}function qa(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Va(r)?r:null}const ln=()=>{const t=a=>St(H,(r,i,o)=>(r[o]=St(i,a,{}),r),{});nn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),an=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),on=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const e="far"in H||u.autoFetchSvg,n=St($a,(a,r)=>{const i=r[0];let o=r[1];const l=r[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});rn=n.names,sn=n.unicodes,ae=vt(u.styleDefault,{family:u.familyDefault})};_a(t=>{ae=vt(t.styleDefault,{family:u.familyDefault})});ln();function re(t,e){return(nn[t]||{})[e]}function Za(t,e){return(an[t]||{})[e]}function G(t,e){return(on[t]||{})[e]}function cn(t){return rn[t]||{prefix:null,iconName:null}}function Ja(t){const e=sn[t],n=re("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Y(){return ae}const se=()=>({prefix:null,iconName:null,rest:[]});function vt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=g}=e,a=$[n][t],r=ot[n][t]||ot[n][a],i=t in L.styles?t:null;return r||i||null}const Qa={[g]:Object.keys(X[g]),[A]:Object.keys(X[A]),[O]:Object.keys(X[O])};function wt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,a={[g]:"".concat(u.cssPrefix,"-").concat(g),[A]:"".concat(u.cssPrefix,"-").concat(A),[O]:"".concat(u.cssPrefix,"-").concat(O)};let r=null,i=g;const o=oa.filter(c=>c!==We);o.forEach(c=>{(t.includes(a[c])||t.some(f=>Qa[c].includes(f)))&&(i=c)});const l=t.reduce((c,f)=>{const m=qa(u.cssPrefix,f);if(H[f]?(f=Xa[i].includes(f)?Ca[i][f]:f,r=f,c.prefix=f):Ka[i].indexOf(f)>-1?(r=f,c.prefix=vt(f,{family:i})):m?c.iconName=m:f!==u.replacementClass&&!o.some(h=>f===a[h])&&c.rest.push(f),!n&&c.prefix&&c.iconName){const h=r==="fa"?cn(c.iconName):{},d=G(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||d||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!H.far&&H.fas&&!u.autoFetchSvg&&(c.prefix="fas")}return c},se());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===A&&(H.fass||u.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===O&&(H.fasds||u.autoFetchSvg)&&(l.prefix="fasds",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=Y()||"fas"),l}class tr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},Ut(i,r[i]);const o=X[g][i];o&&Ut(o,r[i]),ln()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:l}=a[r],c=l[2];e[i]||(e[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(e[i][f]=l)}),e[i][o]=l}),e}}let ve=[],q={};const J={},er=Object.keys(J);function nr(t,e){let{mixoutsTo:n}=e;return ve=t,q={},Object.keys(J).forEach(a=>{er.indexOf(a)===-1&&delete J[a]}),ve.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{q[o]||(q[o]=[]),q[o].push(i[o])})}a.provides&&a.provides(J)}),n}function Gt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(q[t]||[]).forEach(o=>{e=o.apply(null,[e,...a])}),e}function V(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(q[t]||[]).forEach(i=>{i.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return J[t]?J[t].apply(null,e):void 0}function Wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Y();if(e)return e=G(n,e)||e,ye(fn.definitions,n,e)||ye(L.styles,n,e)}const fn=new tr,ar=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,V("noAuto")},rr={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(V("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,Ya(()=>{ir({autoReplaceSvgRoot:e}),V("watch",t)})}},sr={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:G(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=vt(t[0]);return{prefix:n,iconName:G(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(za))){const e=wt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Y(),iconName:G(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Y();return{prefix:e,iconName:G(e,t)||t}}}},C={noAuto:ar,config:u,dom:rr,parse:sr,library:fn,findIconDefinition:Wt,toHtml:ft},ir=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=x}=t;(Object.keys(L.styles).length>0||u.autoFetchSvg)&&D&&u.autoReplaceSvg&&C.dom.i2svg({node:e})};function jt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>ft(n))}}),Object.defineProperty(t,"node",{get:function(){if(!D)return;const n=x.createElement("div");return n.innerHTML=t.html,n.children}}),t}function or(t){let{children:e,main:n,mask:a,attributes:r,styles:i,transform:o}=t;if(ne(o)&&n.found&&!a.found){const{width:l,height:c}=n,f={x:l/c/2,y:.5};r.style=bt({...i,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function lr(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(e,"-").concat(u.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function ie(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:l,maskId:c,titleId:f,extra:m,watchable:h=!1}=t,{width:d,height:b}=n.found?n:e,N=a==="fak",z=[u.replacementClass,r?"".concat(u.cssPrefix,"-").concat(r):""].filter(P=>m.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(m.classes).join(" ");let y={children:[],attributes:{...m.attributes,"data-prefix":a,"data-icon":r,class:z,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)}};const w=N&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};h&&(y.attributes[K]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||lt())},children:[l]}),delete y.attributes.title);const v={...y,prefix:a,iconName:r,main:e,mask:n,maskId:c,transform:i,symbol:o,styles:{...w,...m.styles}},{children:k,attributes:T}=n.found&&e.found?B("generateAbstractMask",v)||{children:[],attributes:{}}:B("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=k,v.attributes=T,o?lr(v):or(v)}function we(t){const{content:e,width:n,height:a,transform:r,title:i,extra:o,watchable:l=!1}=t,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};l&&(c[K]="");const f={...o.styles};ne(r)&&(f.transform=Ua({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const m=bt(f);m.length>0&&(c.style=m);const h=[];return h.push({tag:"span",attributes:c,children:[e]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function cr(t){const{content:e,title:n,extra:a}=t,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=bt(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Et}=L;function Yt(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(zt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(zt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(zt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const fr={found:!1,width:512,height:512};function ur(t,e){!Xe&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Bt(t,e){let n=e;return e==="fa"&&u.styleDefault!==null&&(e=Y()),new Promise((a,r)=>{if(n==="fa"){const i=cn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Et[e]&&Et[e][t]){const i=Et[e][t];return a(Yt(i))}ur(t,e),a({...fr,icon:u.showMissingIcons&&t?B("missingIconAbstract")||{}:{}})})}const je=()=>{},Ht=u.measurePerformance&&mt&&mt.mark&&mt.measure?mt:{mark:je,measure:je},at='FA "6.6.0"',mr=t=>(Ht.mark("".concat(at," ").concat(t," begins")),()=>un(t)),un=t=>{Ht.mark("".concat(at," ").concat(t," ends")),Ht.measure("".concat(at," ").concat(t),"".concat(at," ").concat(t," begins"),"".concat(at," ").concat(t," ends"))};var oe={begin:mr,end:un};const dt=()=>{};function ke(t){return typeof(t.getAttribute?t.getAttribute(K):null)=="string"}function dr(t){const e=t.getAttribute?t.getAttribute(Qt):null,n=t.getAttribute?t.getAttribute(te):null;return e&&n}function pr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function hr(){return u.autoReplaceSvg===!0?pt.replace:pt[u.autoReplaceSvg]||pt.replace}function xr(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function gr(t){return x.createElement(t)}function mn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?xr:gr}=e;if(typeof t=="string")return x.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(mn(i,{ceFn:n}))}),a}function yr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const pt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(mn(n),e)}),e.getAttribute(K)===null&&u.keepOriginalSource){let n=x.createComment(yr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~ee(e).indexOf(u.replacementClass))return pt.replace(t);const a=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===u.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>ft(i)).join(`
`);e.setAttribute(K,""),e.innerHTML=r}};function Ne(t){t()}function dn(t,e){const n=typeof e=="function"?e:dt;if(t.length===0)n();else{let a=Ne;u.mutateApproach===Aa&&(a=W.requestAnimationFrame||Ne),a(()=>{const r=hr(),i=oe.begin("mutate");t.map(r),i(),n()})}}let le=!1;function pn(){le=!0}function $t(){le=!1}let xt=null;function Ae(t){if(!de||!u.observeMutations)return;const{treeCallback:e=dt,nodeCallback:n=dt,pseudoElementsCallback:a=dt,observeMutationsRoot:r=x}=t;xt=new de(i=>{if(le)return;const o=Y();et(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!ke(l.addedNodes[0])&&(u.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&u.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&ke(l.target)&&~Ea.indexOf(l.attributeName))if(l.attributeName==="class"&&dr(l.target)){const{prefix:c,iconName:f}=wt(ee(l.target));l.target.setAttribute(Qt,c||o),f&&l.target.setAttribute(te,f)}else pr(l.target)&&n(l.target)})}),D&&xt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function br(){xt&&xt.disconnect()}function vr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function wr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=wt(ee(t));return r.prefix||(r.prefix=Y()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Za(r.prefix,t.innerText)||re(r.prefix,Dt(t.innerText))),!r.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function jr(t){const e=et(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return u.autoA11y&&(n?e["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(a||lt()):(e["aria-hidden"]="true",e.focusable="false")),e}function kr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oe(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=wr(t),i=jr(t),o=Gt("parseNodeAttributes",{},t);let l=e.styleParser?vr(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i},...o}}const{styles:Nr}=L;function hn(t){const e=u.autoReplaceSvg==="nest"?Oe(t,{styleParser:!1}):Oe(t);return~e.extra.classes.indexOf(qe)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}let I=new Set;Ke.map(t=>{I.add("fa-".concat(t))});Object.keys($[g]).map(I.add.bind(I));Object.keys($[A]).map(I.add.bind(I));Object.keys($[O]).map(I.add.bind(I));I=[...I];function Ce(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();const n=x.documentElement.classList,a=m=>n.add("".concat(xe,"-").concat(m)),r=m=>n.remove("".concat(xe,"-").concat(m)),i=u.autoFetchSvg?I:Ke.map(m=>"fa-".concat(m)).concat(Object.keys(Nr));i.includes("fa")||i.push("fa");const o=[".".concat(qe,":not([").concat(K,"])")].concat(i.map(m=>".".concat(m,":not([").concat(K,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=et(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const c=oe.begin("onTree"),f=l.reduce((m,h)=>{try{const d=hn(h);d&&m.push(d)}catch(d){Xe||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,h)=>{Promise.all(f).then(d=>{dn(d,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),c(),m()})}).catch(d=>{c(),h(d)})})}function Ar(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hn(t).then(n=>{n&&dn([n],e)})}function Or(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Wt(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Wt(r||{})),t(a,{...n,mask:r})}}const Cr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:f={},styles:m={}}=e;if(!t)return;const{prefix:h,iconName:d,icon:b}=t;return jt({type:"icon",...t},()=>(V("beforeDOMElementCreation",{iconDefinition:t,params:e}),u.autoA11y&&(o?f["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(l||lt()):(f["aria-hidden"]="true",f.focusable="false")),ie({icons:{main:Yt(b),mask:r?Yt(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:d,transform:{...E,...n},symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:f,styles:m,classes:c}})))};var zr={mixout(){return{icon:Or(Cr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Ce,t.nodeCallback=Ar,t}}},provides(t){t.i2svg=function(e){const{node:n=x,callback:a=()=>{}}=e;return Ce(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:l,symbol:c,mask:f,maskId:m,extra:h}=n;return new Promise((d,b)=>{Promise.all([Bt(a,o),f.iconName?Bt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[z,y]=N;d([e,ie({icons:{main:z,mask:y},prefix:o,iconName:a,transform:l,symbol:c,maskId:m,title:r,titleId:i,extra:h,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:i,styles:o}=e;const l=bt(o);l.length>0&&(a.style=l);let c;return ne(i)&&(c=B("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},Pr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return jt({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Sr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=e;return jt({type:"counter",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),cr({content:t.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...a]}})))}}}},Er={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=E,title:a=null,classes:r=[],attributes:i={},styles:o={}}=e;return jt({type:"text",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),we({content:t,transform:{...E,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:i}=n;let o=null,l=null;if(Ge){const c=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/c,l=f.height/c}return u.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,we({content:e.innerHTML,width:o,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const Lr=new RegExp('"',"ug"),ze=[1105920,1112319],Pe={FontAwesome:{normal:"fas",400:"fas"},...da,...ma,...wa},Xt=Object.keys(Pe).reduce((t,e)=>(t[e.toLowerCase()]=Pe[e],t),{}),Ir=Object.keys(Xt).reduce((t,e)=>{const n=Xt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Tr(t){const e=t.replace(Lr,""),n=Ha(e,0),a=n>=ze[0]&&n<=ze[1],r=e.length===2?e[0]===e[1]:!1;return{value:Dt(r?e[0]:e),isSecondary:a||r}}function _r(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(Xt[n]||{})[r]||Ir[n]}function Se(t,e){const n="".concat(Na).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const o=et(t.children).filter(d=>d.getAttribute(_t)===e)[0],l=W.getComputedStyle(t,e),c=l.getPropertyValue("font-family"),f=c.match(Pa),m=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&h!=="none"&&h!==""){const d=l.getPropertyValue("content");let b=_r(c,m);const{value:N,isSecondary:z}=Tr(d),y=f[0].startsWith("FontAwesome");let w=re(b,N),v=w;if(y){const k=Ja(N);k.iconName&&k.prefix&&(w=k.iconName,b=k.prefix)}if(w&&!z&&(!o||o.getAttribute(Qt)!==b||o.getAttribute(te)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const k=kr(),{extra:T}=k;T.attributes[_t]=e,Bt(w,b).then(P=>{const bn=ie({...k,icons:{main:P,mask:se()},prefix:b,iconName:v,extra:T,watchable:!0}),kt=x.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(kt,t.firstChild):t.appendChild(kt),kt.outerHTML=bn.map(vn=>ft(vn)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Rr(t){return Promise.all([Se(t,"::before"),Se(t,"::after")])}function Mr(t){return t.parentNode!==document.head&&!~Oa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_t)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ee(t){if(D)return new Promise((e,n)=>{const a=et(t.querySelectorAll("*")).filter(Mr).map(Rr),r=oe.begin("searchPseudoElements");pn(),Promise.all(a).then(()=>{r(),$t(),e()}).catch(()=>{r(),$t(),n()})})}var Fr={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Ee,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=x}=e;u.searchPseudoElements&&Ee(n)}}};let Le=!1;var Dr={mixout(){return{dom:{unwatch(){pn(),Le=!0}}}},hooks(){return{bootstrap(){Ae(Gt("mutationObserverCallbacks",{}))},noAuto(){br()},watch(t){const{observeMutationsRoot:e}=t;Le?$t():Ae(Gt("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Ie=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var Ur={mixout(){return{parse:{transform:t=>Ie(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Ie(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:i}=e;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:m,path:h};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Lt={x:0,y:0,width:"100%",height:"100%"};function Te(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Gr(t){return t.tag==="g"?t.children:[t]}var Wr={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?wt(n.split(" ").map(r=>r.trim())):se();return a.prefix||(a.prefix=Y()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:l}=e;const{width:c,icon:f}=r,{width:m,icon:h}=i,d=Da({transform:l,containerWidth:m,iconWidth:c}),b={tag:"rect",attributes:{...Lt,fill:"white"}},N=f.children?{children:f.children.map(Te)}:{},z={tag:"g",attributes:{...d.inner},children:[Te({tag:f.tag,attributes:{...f.attributes,...d.path},...N})]},y={tag:"g",attributes:{...d.outer},children:[z]},w="mask-".concat(o||lt()),v="clip-".concat(o||lt()),k={tag:"mask",attributes:{...Lt,id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,y]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:Gr(h)},k]};return n.push(T,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(w,")"),...Lt}}),{children:n,attributes:a}}}},Yr={provides(t){let e=!1;W.matchMedia&&(e=W.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Br={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},Hr=[Wa,zr,Pr,Sr,Er,Fr,Dr,Ur,Wr,Yr,Br];nr(Hr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const Kt=C.parse;C.findIconDefinition;C.toHtml;const $r=C.icon;C.layer;C.text;C.counter;function _e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_e(Object(n),!0).forEach(function(a){Z(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function gt(t){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},gt(t)}function Z(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Xr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Kr(t,e){if(t==null)return{};var n=Xr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Vt(t){return Vr(t)||qr(t)||Zr(t)||Jr()}function Vr(t){if(Array.isArray(t))return qt(t)}function qr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Zr(t,e){if(t){if(typeof t=="string")return qt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qt(t,e)}}function qt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,l=t.flash,c=t.spin,f=t.spinPulse,m=t.spinReverse,h=t.pulse,d=t.fixedWidth,b=t.inverse,N=t.border,z=t.listItem,y=t.flip,w=t.size,v=t.rotation,k=t.pull,T=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":m,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":d,"fa-inverse":b,"fa-border":N,"fa-li":z,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},Z(e,"fa-".concat(w),typeof w<"u"&&w!==null),Z(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),Z(e,"fa-pull-".concat(k),typeof k<"u"&&k!==null),Z(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(T).map(function(P){return T[P]?P:null}).filter(function(P){return P})}function ts(t){return t=t-0,t===t}function xn(t){return ts(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var es=["style"];function ns(t){return t.charAt(0).toUpperCase()+t.slice(1)}function as(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=xn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[ns(r)]=i:e[r]=i,e},{})}function gn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(c){return gn(t,c)}),r=Object.keys(e.attributes||{}).reduce(function(c,f){var m=e.attributes[f];switch(f){case"class":c.attrs.className=m,delete e.attributes.class;break;case"style":c.attrs.style=as(m);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=m:c.attrs[xn(f)]=m}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Kr(n,es);return r.attrs.style=S(S({},r.attrs.style),o),t.apply(void 0,[e.tag,S(S({},r.attrs),l)].concat(Vt(a)))}var yn=!1;try{yn=!0}catch{}function rs(){if(!yn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Re(t){if(t&&gt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Kt.icon)return Kt.icon(t);if(t===null)return null;if(t&&gt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function It(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Z({},t,e):{}}var Me={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},yt=Zt.forwardRef(function(t,e){var n=S(S({},Me),t),a=n.icon,r=n.mask,i=n.symbol,o=n.className,l=n.title,c=n.titleId,f=n.maskId,m=Re(a),h=It("classes",[].concat(Vt(Qr(n)),Vt((o||"").split(" ")))),d=It("transform",typeof n.transform=="string"?Kt.transform(n.transform):n.transform),b=It("mask",Re(r)),N=$r(m,S(S(S(S({},h),d),b),{},{symbol:i,title:l,titleId:c,maskId:f}));if(!N)return rs("Could not find icon",m),null;var z=N.abstract,y={ref:e};return Object.keys(n).forEach(function(w){Me.hasOwnProperty(w)||(y[w]=n[w])}),ss(z[0],y)});yt.displayName="FontAwesomeIcon";yt.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var ss=gn.bind(null,Zt.createElement);const is={prefix:"fas",iconName:"less-than",icon:[384,512,[62774],"3c","M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"]},os={prefix:"fas",iconName:"greater-than",icon:[384,512,[62769],"3e","M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"]},ls=({sessionType:t,setShowDialog:e,imageIndex:n,setImageIndex:a})=>{function r(){a(l=>l>=t.id.length-1?0:l+1)}function i(){a(l=>l<=0?t.id.length-1:l-1)}function o(l){l.key==="ArrowRight"?r():l.key==="ArrowLeft"&&i()}return j.useEffect(()=>(window.addEventListener("keydown",o,!0),console.log("listener"),()=>{window.removeEventListener("keydown",o),console.log("istner usutnięty")}),[]),s.jsxs("div",{className:`flex absolute flex-col items-start  
        top-0 left-0  w-full h-full `,children:[s.jsx("div",{onClick:()=>e(!1),className:"fixed top-0 left-0 z-[15] w-full h-full bg-[#000000c1] "}),s.jsx("div",{className:"fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] overflow-hidden md:w-1/2 flex items-center justify-center z-[16]",children:s.jsxs("div",{className:"max-w-[97%]  md:max-w-[700px]",children:[s.jsx("button",{onClick:()=>e(!1),className:" text-6xl z-[16] md:left-[92%] left-[90%] text-white relative md:top-[8vh] top-[6vh] ",children:"×"}),s.jsxs("div",{className:"flex flex-col overflow-hidden",children:[s.jsx("div",{className:"flex flex-row items-center justify-center",children:s.jsx("div",{className:"flex flex-row ",children:t.id.map((l,c)=>s.jsx("img",{src:l,loading:"lazy",className:"w-full object-cover object-center cursor-pointer duration-300",style:{translate:`${-100*n}%`}},c))})}),s.jsxs("div",{className:"w-[700px]  mt-6 overflow-hidden flex flex-row mx-auto ",children:[s.jsxs("div",{className:" flex flex-row items-center justify-between absolute  md:w-[700px] w-[97%]",children:[s.jsx("button",{onClick:i,className:"bg-gray-400 md:px-1 px-2   z-[16] h-[113px] duration-100 text-2xl opacity-50 hover:opacity-70",children:s.jsx(yt,{icon:is})}),s.jsx("button",{onClick:r,className:"bg-gray-400 md:px-1 px-2 z-[16] h-[113px] duration-100 text-2xl opacity-50 hover:opacity-70",children:s.jsx(yt,{icon:os})})]}),s.jsx("div",{className:"flex flex-row justify-between gap-x-2  ",children:t.id.map((l,c)=>s.jsx("img",{src:l,loading:"lazy",className:`w-[24%] object-cover object-center cursor-pointer duration-300 hover:scale-105 ${c==n?" border-white":""}`,style:{translate:`${-65*n}%`,boxSizing:"border-box"},onClick:()=>a(c)},c))})]})]})]})})]})},cs=""+new URL("1-D8_C-_ed.webp",import.meta.url).href;function fs(){const t={id:[cs,Hn,$n,Xn,Kn,At,At,At],name:"Psy"},e={id:[Vn,qn,Zn,Jn,Qn,Ot,Ot,Ot],name:"Konie"},n={id:[ta,ea,na,aa,ra,Ct,Ct,Ct],name:"Wydarzenia"},[a,r]=j.useState(!1),[i,o]=j.useState(t),[l,c]=j.useState(0);return s.jsxs("div",{id:"Portfolio",className:"max-w-[1050px] h-auto py-0 mx-auto md:mt-0 md:mb-32 md:pt-0 pt-16",children:[s.jsx("h1",{className:"text-center text-6xl pb-12 md:pb-4 md:my-14 tracking-[5px] font-light text-titleGray",children:"Portfolio"}),s.jsx(ia,{sessionType:i,setSessionType:o,setShowDialog:r,dogs:t,horses:e,events:n,setImageIndex:c}),a===!0?s.jsx(ls,{sessionType:i,setShowDialog:r,imageIndex:l,setImageIndex:c}):""]})}const us=""+new URL("dog1-O8fuLAHx.webp",import.meta.url).href,ms=""+new URL("dog3-CeIrcc3q.jpg",import.meta.url).href,ds=""+new URL("horse1-DOTDeMTY.jpg",import.meta.url).href,ps=""+new URL("horse2-D83Ic7A9.jpg",import.meta.url).href,hs=""+new URL("About-img-Ck7p2bgX.webp",import.meta.url).href;function xs(){return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"About",className:"max-w-[1050px] h-auto  mx-auto md:pt-24 mt-10 overflow-hidden  shadow-[#0000000d]",children:[s.jsxs("div",{className:"w-full text-center ",children:[s.jsx("h1",{className:"md:text-5xl text-4xl mt-10 md:mt-0 tracking-[5px] font-light",children:"Profesjonalna"}),s.jsx("h2",{className:"md:text-xl text-xl md:py-4 py-2 mb-4 tracking-[5px] font-light text-gray-500  text-[17px] leading-[34px] ",children:"fotografia zwierząt"})]}),s.jsxs("div",{className:"w-full flex flex-col-reverse md:flex-row justify-center items-center md:mt-6 ",children:[s.jsxs("div",{className:"flex flex-col md:w-[45%] pl-4",children:[s.jsx("h1",{"data-aos":"slide-right",className:"text-4xl pb-6 tracking-[5px] font-normal  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text  mt-8 text-center md:text-left mx-6 ",children:"Poznaj mnie!"}),s.jsx("p",{"data-aos":"slide-right",className:"px-6 text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Cześć, nazywam sie Patrycja Dawid. Swoją pasję do fotografii odkryłam w 2014 roku dorastając w otoczeniu zwierząt, które zawsze były moimi najlepszymi modelami. Dzięki temu łatwo jest mi uchwycić ich naturalne piękno i charakter. W wolnych chwilach najbardziej lubię zapuszczać się w długie tereny na końskim grzbiecie i spacerować po lesie."})]}),s.jsx("div",{"data-aos":"slide-left",className:"md:ml-auto mx-auto ",children:s.jsx("img",{src:hs,className:" md:w-[500px] mx-auto w-[90%] rounded-xl",loading:"lazy"})})]}),s.jsxs("div",{className:"w-full flex flex-col mx-auto text-center mt-8",children:[s.jsxs("h1",{className:"text-center w-full text-xl tracking-[5px] font-light",children:["A to moje"," ",s.jsx("span",{className:"text-blue-400 tracking-[5px] font-light",children:"pupile"})," ",":)"]}),s.jsxs("div",{className:"w-[300px] h-14 mx-auto mt-2 flex flex-row justify-center items-center gap-x-2",children:[s.jsx("img",{src:us,loading:"lazy",className:"w-[20%] rounded-[50%]"}),s.jsx("img",{src:ms,loading:"lazy",className:"w-[20%] rounded-[50%]"}),s.jsx("img",{src:ds,loading:"lazy",className:"w-[20%] rounded-[50%]"}),s.jsx("img",{src:ps,loading:"lazy",className:"w-[20%] rounded-[50%]"})]})]})]})})}const gs=""+new URL("BlueBarDog-B4yfAq1f.webp",import.meta.url).href;function ys(){return s.jsx("div",{children:s.jsx("div",{className:"w-screen bg-[#DFF0FA] md:my-10  py-[0px] mt-12 md:mt-0 ",children:s.jsxs("div",{className:"max-w-[900px] flex-col flex mx-auto md:flex-row  justify-center items-center py-[30px]",children:[s.jsxs("div",{className:"flex flex-col px-4 md:items-start  items-start justify-start h-full mx-auto md:w-[60%] ",children:[s.jsxs("p",{className:"text-start  md:text-2xl text-[24px] pb-6   tracking-[2px] leading-10 font-normal  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text ",children:["K I L K A   P O W O D Ó W  ",s.jsx("br",{})," D L A C Z E G O . . ."]}),s.jsxs("p",{className:"tracking-[1.7px]  text-myGray font-light text-[18px] leading-[32px]  md:mr-10 pb-6 md:pb-0",children:["• Zyskujesz wspaniałą pamiątkę na całe życie ",s.jsx("br",{}),s.jsx("br",{}),"• Twój czworonożny przyjaciel zostanie uwieczniony w najlepszy możliwy sposób",s.jsx("br",{}),s.jsx("br",{}),"• Ukażę na fotografiach piękną więź, jaka was łączy",s.jsx("br",{}),s.jsx("br",{}),"• Zdjęcia są wysokiej rozdzielczości idealne do wydruków, foto książek i innych niekomercyjnych zastosowań."]})]}),s.jsx("div",{className:"md:w-[37%] w-[90%] h-full my-4 md:my-0",children:s.jsx("img",{src:gs,loading:"lazy"})})]})})})}function ks(){let t=document.querySelectorAll("section");j.useEffect(()=>{fe.init({debug:!0})},[]);let e=0;return window.addEventListener("scroll",function(){e<=10?e++:fe.refresh()}),s.jsxs("div",{className:"App overflow-hidden scroll-smooth",children:[s.jsx(An,{sections:t}),s.jsx(kn,{}),s.jsx(Tn,{className:"Section",id:"Hero"}),s.jsx(xs,{}),s.jsx(fs,{className:"Section",id:"Portfolio"}),s.jsx(ys,{}),s.jsx(Yn,{}),s.jsx(Fn,{className:"Section",id:"Offer"}),s.jsx(Bn,{className:"Section",id:"Contact"}),s.jsx(Nn,{})]})}export{ks as default};
