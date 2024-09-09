import{r as j,j as s,L as re,R as $e,a as T,P as p}from"./index-DZh-8kqS.js";import{A as bn,I as yn,L as U,a as it}from"./index-BRZSTK3V.js";import{A as ot,S as wn}from"./ScrollToTop-D81wbAXF.js";import vn from"./Footer-BEDiFTGx.js";function jn({sections:e}){const[t,n]=j.useState(!1),a=()=>{n(!t)};return j.useEffect(()=>{const r=document.querySelectorAll("ul li a");window.onscroll=()=>{e.forEach(i=>{let o=window.scrollY,l=i.offsetTop-150,c=i.offsetHeight,f=i.getAttribute("id");o>=l&&o<l+c&&r.forEach(u=>{u.classList.remove("active"),u.getAttribute("href")===`#${f}`&&u.classList.add("active")})})}},[e]),s.jsxs("div",{className:"w-full h-auto bg-transparent",children:[s.jsxs("div",{className:"md:hidden w-[100%]  mx-auto h-8 flex flex-row py-10 justify-center items-center fixed z-[10] top-0 left-[50%] bg-white px-4 translate-x-[-50%]",children:[s.jsx("div",{onClick:a,className:t?"transition-transform duration-500 transform rotate-180 block md:hidden z-20 px-10 ":"transition-transform duration-500 transform rotate-0 block md:hidden z-20 px-10 ",children:t?s.jsx(bn,{size:30}):s.jsx(yn,{size:30})}),s.jsx("div",{className:t?"w-[60%] fixed left-0 top-0 h-screen bg-blue-100 flex justify-center items-center ease-in-out duration-500 z-[5]":"fixed left-[-60%] w-[60%] top-0 h-screen bg-blue-200 flex justify-center items-center ease-in-out duration-500 z-[5]",children:s.jsxs("ul",{className:"z-10 text-black  m-4 md:flex flex-row gap-x-16 items-center cursor-pointer",children:[s.jsx(U,{activeClass:"active",to:"/About",spy:!0,smooth:!0,offset:-70,duration:500,onClick:a,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"O mnie"})}),s.jsx(U,{activeClass:"active",to:"/Portfolio",spy:!0,smooth:!0,offset:-70,onClick:a,duration:500,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"Portfolio"})}),s.jsx(U,{activeClass:"active",to:"/Offer",spy:!0,smooth:!0,offset:-70,duration:500,onClick:a,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"Oferta"})}),s.jsx(U,{activeClass:"active",to:"/Contact",spy:!0,smooth:!0,offset:-70,onClick:a,duration:500,children:s.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"Kontakt"})})]})}),s.jsx("div",{className:"md:hidden w-20 mx-4 h-auto object-scale-dow ml-auto",children:s.jsx("img",{src:it,className:""})})]}),s.jsxs("div",{className:"w-[100%] bg-white hidden fixed mx-auto h-8 md:flex flex-row py-10 justify-center items-center  top-0 left-[50%] translate-x-[-50%] z-[10]",children:[s.jsxs("ul",{className:"hidden md:flex  flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent",children:[s.jsx(U,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"O mnie"})}),s.jsx(U,{activeClass:"active",to:"Portfolio",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"hover:text-[#0009]  font-light text-lg tracking-[5px]  text-titleGray",children:"Portfolio"})}),s.jsx(U,{activeClass:"active",to:"Offer",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Oferta"})}),s.jsx(U,{activeClass:"active",to:"Contact",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Kontakt"})})]}),s.jsx("div",{className:"w-20 mx-4 h-auto object-scale-dow ml-auto ",children:s.jsx(re,{to:"/",children:s.jsx("img",{src:it,className:""})})})]})]})}const me=({slides:e,delay:t=0,initialDelay:n=0})=>{const[a,r]=j.useState(0),i=j.useRef(null),o=j.useRef(null);return j.useEffect(()=>{const l=()=>{o.current=setTimeout(()=>{i.current=setInterval(()=>{document.visibilityState==="visible"&&r(f=>(f+1)%e.length)},t)},n)},c=()=>{document.visibilityState==="visible"?l():(clearInterval(i.current),clearTimeout(o.current))};return document.addEventListener("visibilitychange",c),l(),()=>{document.removeEventListener("visibilitychange",c),clearInterval(i.current),clearTimeout(o.current)}},[e,t,n]),s.jsx("div",{className:"relative w-full h-full flex justify-center items-center",children:e.map((l,c)=>s.jsx("img",{src:l,alt:`Slide ${c}`,className:`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${c===a?"opacity-100":"opacity-0"}`},c))})},kn=""+new URL("s1-1-ClbUTb3t.jpg",import.meta.url).href,Nn=""+new URL("s1-2-DKBdPC0W.jpg",import.meta.url).href,An=""+new URL("s2-1-G1TAPOhe.jpg",import.meta.url).href,Ln=""+new URL("s2-2-DxuWG7-J.jpg",import.meta.url).href,Cn=""+new URL("s3-1-BJyjtWzd.jpg",import.meta.url).href,On=""+new URL("s3-2-DoENceOC.jpg",import.meta.url).href,zn=""+new URL("s4-1-BwC0tXP0.jpg",import.meta.url).href,Sn=""+new URL("s4-2-Dd_MtrYK.jpg",import.meta.url).href;function Pn(){const e=[kn,Nn],t=[An,Ln],n=[Cn,On],a=[zn,Sn];return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"Hero",className:"max-w-[1050px] md:mt-[40px] w-full  h-auto mx-auto flex md:flex-row flex-col-reverse justify-center mt-10 pt-14  ",children:[s.jsxs("div",{className:"w-full md:w-[500px] px-6 md:mt-12 flex flex-col items-center md:items-start",children:[s.jsx("h1",{className:"text-5xl md:py-6 mx-auto  md:mx-0 tracking-[5px] font-light text-titleGray",children:"Cześć"}),s.jsx("p",{className:"mt-2 py-4 md:py-0 tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Zajmuję się fotografią psów i koni. Pokazanie ich atutów oraz charakteru to coś co definiuje moje zdjęcia. Zapewnij sobie świetną pamiątke ze swoim pupilem!"}),s.jsx(U,{activeClass:"active",to:"Portfolio",spy:!0,smooth:!0,offset:-70,duration:500,children:s.jsx("div",{className:"w-[130px] cursor-pointer mt-6 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-[#66c4fb] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200",children:s.jsx("div",{className:"rounded-[50px] tracking-[1px] flex items-center justify-center mx-auto bg-white mr-auto w-[122px] py-1 text-[17px] font-bold text-black hover:text-[#9b9b9b]",children:s.jsx("h2",{className:"text-center text-lg font-normal bg-gradient-to-r from-[#56c0fd] to-purple-400 hover:from-[#72cbfe] hover:to-purple-200 inline-block text-transparent bg-clip-text md:mt-0",children:"Portfolio"})})})})]}),s.jsxs("div",{className:"  w-[100%] max-w-[480px] px-4 md:w-[50%] md:max-w-[480px] h-[400px]  md:ml-auto mx-auto",children:[s.jsxs("div",{className:"w-[100%] h-[180px] flex flex-row items-end",children:[s.jsx("div",{className:"w-[70%] h-[150px]",children:s.jsx(me,{slides:e,delay:"10000",initialDelay:"2000"})}),s.jsx("div",{className:"w-[30%] h-[100%] ",children:s.jsx(me,{slides:t,delay:"10000",initialDelay:"6000"})})]}),s.jsxs("div",{className:"w-[100%] h-[180px]  flex flex-row",children:[s.jsx("div",{className:"w-[135px] h-[180px] ",children:s.jsx(me,{slides:n,delay:"10000",initialDelay:"8000"})}),s.jsx("div",{className:"w-[70%] h-[150px] ",children:s.jsx(me,{slides:a,delay:"10000",initialDelay:"4000"})})]})]})]})})}const En=""+new URL("offercard-horse-DO158oID.webp",import.meta.url).href,Rn=""+new URL("offercard-dog-BP4p7s1i.webp",import.meta.url).href,In=""+new URL("offercard-event-CjC7vzEh.webp",import.meta.url).href;function Tn(){return s.jsxs("div",{id:"Offer",className:"max-w-[1050px] justify-center mx-auto flex flex-col md:mt-[60px] md:pt-0 mt-[50px]",children:[s.jsx("h1",{className:"text-center md:text-6xl text-6xl pb-4 mx-auto tracking-[5px] font-light text-titleGray",children:"Oferta"}),s.jsxs("div",{className:"flex flex-col md:flex-row gap-y-8 gap-x-8 mt-14 mx-auto",children:[s.jsx(re,{to:"/oferta-konie",onClick:()=>{window.scrollTo(0,0)},children:s.jsxs("div",{className:"relative w-[300px] h-auto hover:scale-105 transition duration-300",children:[s.jsx("img",{src:En,alt:"Horse",loading:"lazy",className:"w-full h-auto "}),s.jsx("h1",{className:"absolute tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl z-4 cursor-pointer",children:"Konie"})]})}),s.jsx(re,{to:"/oferta-psy",onClick:()=>{window.scrollTo(0,0)},children:s.jsxs("div",{className:"relative w-[300px] h-auto hover:scale-105 transition duration-300",children:[s.jsx("img",{src:Rn,alt:"dog",loading:"lazy",className:"w-full h-auto "}),s.jsx("h1",{className:"absolute  tracking-[5px] font-light inset-0 flex justify-center items-start pt-16 text-white text-4xl  z-4 cursor-pointer",children:"Psy"})]})}),s.jsx(re,{to:"/oferta-wydarzenia",onClick:()=>{window.scrollTo(0,0)},children:s.jsxs("div",{className:"relative w-[300px] h-auto hover:scale-105 transition duration-300",children:[s.jsx("img",{src:In,alt:"wydarzenia",loading:"lazy",className:"w-full h-auto "}),s.jsx("h1",{className:"absolute inset-0  tracking-[5px] font-light flex justify-center items-start pt-16 text-white text-4xl  z-4 cursor-pointer",children:"Wydarzenia"})]})})]}),s.jsx("div",{className:" mx-auto h-auto py-8 mt-20",children:s.jsxs("h2",{"data-aos":"slide-up",className:"mx-auto max-w-[900px] text-center px-6    tracking-[0px] font-[Lora] text-gray-700 font-normal text-[20px] leading-[34px] pb-4 overflow-visible z-4 ",children:["Jeśli sesja jaka Cię interesuje nie znajduję się w tej zakładce,",s.jsx("br",{}),"napisz do mnie, a na pewno razem coś wymyślimy :)"]})})]})}const Un=""+new URL("fb-Doi5lfQZ.png",import.meta.url).href,_n=""+new URL("ig-BG7lF8Jg.png",import.meta.url).href,Mn=""+new URL("mail-5nlIgxw_.png",import.meta.url).href,Dn=""+new URL("messenger-CdLPOB1K.png",import.meta.url).href;function Ne({id:e,open:t}){return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:`${e===t?"rotate-180":""} h-5 w-5 transition-transform`,children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})})}function Fn(){const[e,t]=$e.useState(0),n=a=>t(e===a?0:a);return s.jsxs("div",{className:"w-[85%]  max-w-[900px]  md:w-[55%] py-8  mx-auto",children:[s.jsxs(T.Accordion,{open:e===1,icon:s.jsx(Ne,{id:1,open:e}),children:[s.jsx(T.AccordionHeader,{className:"font-[Montserrat] tracking-[5px] font-light text-titleGray",onClick:()=>n(1),children:"Jak przygotować się przed sesją?"}),s.jsx(T.AccordionBody,{className:" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Przed sesją warto nakreślić mi swoje oczekiwania co do zdjęć. Jeśli robisz ujęcia swojego pupila zadbaj o to by był on wypoczęty, jego sierść nie była posklejana i brudna, a na sesje zabierz ulubione smaczki."})]}),s.jsxs(T.Accordion,{open:e===2,icon:s.jsx(Ne,{id:2,open:e}),children:[s.jsx(T.AccordionHeader,{className:"font-[Montserrat] tracking-[5px] font-light text-titleGray",onClick:()=>n(2),children:"Czy mogę dostać nieobrobione zdjęcia z sesji?"}),s.jsx(T.AccordionBody,{className:" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Nie wysyłam nieobrobionych zdjęć. Po sesji wybieram najlepsze kadry i poddaje je starannej obróbce, aby zapewnić najlepszą jakość materiału który otrzymasz."})]}),s.jsxs(T.Accordion,{open:e===3,icon:s.jsx(Ne,{id:3,open:e}),children:[s.jsx(T.AccordionHeader,{className:"font-[Montserrat]  tracking-[5px] font-light text-titleGray",onClick:()=>n(3),children:"Ile zwierząt mogę zabrać na sesje?"}),s.jsx(T.AccordionBody,{className:" tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px] ",children:"Co do zasady ile chcesz, jednak pamiętaj, że najlepiej jest nam się skupić na mniejszej ilości modeli. Jeśli planujesz ujęcia z większą ilością zwierzaków, napisz mi to wcześniej :)"})]})]})}function Gn(){const[e,t]=j.useState(!1),[n,a]=j.useState(!1),r=o=>{t(o.target.checked),o.target.checked&&a(!1)},i=o=>{e||(a(!0),o.preventDefault())};return s.jsx("div",{children:s.jsxs("div",{id:"Contact",className:"max-w-[850px] flex justify-center flex-col items-center mx-auto mb-0 md:mb-10 md:pt-6 pt-6 pb-4",children:[s.jsx("h1",{className:"text-5xl md:text-6xl text-center tracking-[5px] font-light text-titleGray",children:"Skontaktuj"}),s.jsx("h2",{className:"text-center text-2xl tracking-[5px] font-light  bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text md:mt-0",children:"się ze mną!"}),s.jsxs("div",{className:"w-full h-full flex flex-col md:flex-row mt-6 justify-between items-start  py-4 ",children:[s.jsxs("div",{className:"md:w-[50%] w-[70%] flex flex-col mx-auto",children:[s.jsx("h1",{className:"text-center text-xl  py-3 tracking-[5px] font-light text-titleGray",children:"Zapytaj o termin!"}),s.jsx("form",{action:"https://api.web3forms.com/submit",method:"POST",className:"flex flex-col justify-center items-center ",children:s.jsxs("div",{className:"md:min-w-[355px] min-w-[295px] flex flex-col justify-start space-y-6",children:[s.jsx("input",{type:"hidden",name:"access_key",value:"YOUR_ACCESS_KEY_HERE"}),s.jsx("input",{type:"email",name:"email",required:!0,placeholder:"np. email@gmail.com",className:"w-[100%] rounded-lg bg-gray-300 py-2 border-transparent pl-4 tracking-[5px] font-light text-titleGray"}),s.jsx("textarea",{name:"message",required:!0,placeholder:"tutaj możesz wpisać jaki termin cie interesuje",className:"w-[100%] pb-[100px] rounded-xl bg-gray-300 py-2 px-4 border-none tracking-[5px] font-light text-titleGray"}),s.jsx("div",{className:"w-[130px] cursor-pointer bg-red-500 flex justify-center items-center py-1 rounded-[50px] bg-gradient-to-r from-blue-300 to-purple-300",children:s.jsx("button",{type:"submit",onClick:i,id:"ContactButton",className:"rounded-[50px] mx-auto tracking-[5px] font-normal  bg-white mr-auto w-[120px] py-1 text-[17px]  text-[#747474] hover:text-[#9b9b9b]",children:"Wyślij"})}),s.jsxs("div",{className:"flex flex-row items-start justify-center ml-2 pb-4",children:[s.jsx("input",{type:"checkbox",id:"checkbox",className:"mt-1 mr-2",onChange:r}),s.jsxs("p",{className:"text-xs text-gray-400 tracking-[3px] font-light ",children:["Oświadczam iż przeczytałem"," ",s.jsxs(re,{to:"Polityka-Prywatności",onClick:()=>{window.scrollTo(0,0)},children:[" ","politykę prywatności"]})," ","i wyrażam zgodę na przetwarzanie moich danych osobowych w celach kontaktowych przez administratora strony"]})]}),s.jsx("p",{id:"needed",className:`text-red-200 text-xs tracking-[5px] font-light  ${n?"":"hidden"}`,children:"*Zaznaczenie tej zgody jest wymagane"})]})})]}),s.jsx("div",{className:"md:w-[50%] md:ml-10 h-full md:mb-6 flex justify-center mx-auto md:pt-20 ",children:s.jsxs("ul",{children:[s.jsx("a",{href:"https://www.facebook.com/patrycjadawidfotografia?locale=pl_PL",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md ",children:[s.jsx("img",{src:Un,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"Patrycja Dawid Fotografia"})]})}),s.jsx("a",{href:"https://m.me/patrycjadawidfotografia",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md",children:[s.jsx("img",{src:Dn,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"Patrycja Dawid Fotografia"})]})}),s.jsx("a",{href:"https://www.instagram.com/patrycjadfotografia/",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md",children:[s.jsx("img",{src:_n,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"patrycjadfotografia"})]})}),s.jsx("a",{href:"mailto:wiktorskid@wp.pl",children:s.jsxs("li",{className:"flex flex-row py-2 items-center space-x-2 text-md",children:[s.jsx("img",{src:Mn,width:40,loading:"lazy"}),s.jsx("p",{className:"tracking-[5px] font-normal text-titleGray",children:"patrycjad20@gmail.com"})]})})]})})]})]})})}const Wn=({setSessionType:e,sessionTypesButtons:t})=>{const[n,a]=j.useState(0);return s.jsx("ul",{className:" mb-4 py-1 bg-gray-100 rounded-xl text-center flex-row flex",children:t.map((r,i)=>s.jsx("li",{className:`w-[33%]
            ${n===i?"bg-white shadow-sm font-semibold rounded-lg":""}`,children:s.jsx("button",{className:"w-full py-2   cursor-pointer transition-all duration-800 delay-800 ease-in-out",onClick:()=>{e(r),a(i)},children:r.name})},i))})},Bn=({sessionType:e,setSessionType:t,setShowDialog:n,dogs:a,horses:r,events:i,setImageIndex:o})=>{const l=[a,r,i],[c,f]=j.useState(!1),[u,h]=j.useState("lg:grid-cols-15 md:w-[5200px]");return j.useEffect(()=>{e.name==="Psy"&&h("lg:grid-cols-15 md:w-[5200px]"),e.name==="Konie"&&h("lg:grid-cols-12 md:w-[4200px]"),e.name==="Wydarzenia"&&h("lg:grid-cols-10 md:w-[3500px]"),f(!1);const d=setTimeout(()=>f(!0),350);return()=>clearTimeout(d)},[e]),s.jsxs("div",{className:"max-w-[1200px] flex flex-col",children:[s.jsx(Wn,{setSessionType:t,sessionTypesButtons:l}),s.jsx("div",{className:"w-full px-2 py-2 overflow-x-scroll",children:s.jsx("div",{className:`grid   mb-4 mx-auto md:grid-cols-2 ${u} items-start justify-center gap-4`,children:e.id.map((d,b)=>s.jsx("img",{onClick:()=>{n(!0),o(b)},src:d,className:`w-full ${c?"animate-fadeIn":"opacity-0"} duration-500 object-cover object-center h-60 rounded-xl hover:scale-105 cursor-pointer`,loading:"lazy"},b))})})]})},lt=()=>{};let Ve={},Tt={},Ut=null,_t={mark:lt,measure:lt};try{typeof window<"u"&&(Ve=window),typeof document<"u"&&(Tt=document),typeof MutationObserver<"u"&&(Ut=MutationObserver),typeof performance<"u"&&(_t=performance)}catch{}const{userAgent:ct=""}=Ve.navigator||{},W=Ve,x=Tt,ft=Ut,ue=_t;W.document;const D=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Mt=~ct.indexOf("MSIE")||~ct.indexOf("Trident/");var g="classic",Dt="duotone",A="sharp",L="sharp-duotone",Yn=[g,Dt,A,L],Hn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},mt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Xn=["kit"],Kn=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,$n=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Vn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},qn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Jn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Qn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Zn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},ea={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Ft={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},ta=["solid","regular","light","thin","duotone","brands"],Gt=[1,2,3,4,5,6,7,8,9,10],na=Gt.concat([11,12,13,14,15,16,17,18,19,20]),ne={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},aa=[...Object.keys(Qn),...ta,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ne.GROUP,ne.SWAP_OPACITY,ne.PRIMARY,ne.SECONDARY].concat(Gt.map(e=>"".concat(e,"x"))).concat(na.map(e=>"w-".concat(e))),ra={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},sa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},ia={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},ut={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const _="___FONT_AWESOME___",Pe=16,Wt="fa",Bt="svg-inline--fa",$="data-fa-i2svg",Ee="data-fa-pseudo-element",oa="data-fa-pseudo-element-pending",qe="data-prefix",Je="data-icon",dt="fontawesome-i2svg",la="async",ca=["HTML","HEAD","STYLE","SCRIPT"],Yt=(()=>{try{return!0}catch{return!1}})(),Ht=[g,A,L];function ce(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[g]}})}const Xt={...Ft};Xt[g]={...Ft[g],...mt.kit,...mt["kit-duotone"]};const X=ce(Xt),Re={...ea};Re[g]={...Re[g],...ut.kit,...ut["kit-duotone"]};const oe=ce(Re),Ie={...Zn};Ie[g]={...Ie[g],...ia.kit};const K=ce(Ie),Te={...Jn};Te[g]={...Te[g],...sa.kit};const fa=ce(Te),ma=Kn,Kt="fa-layers-text",ua=$n,da={...Hn};ce(da);const pa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ae=ne,Z=new Set;Object.keys(oe[g]).map(Z.add.bind(Z));Object.keys(oe[A]).map(Z.add.bind(Z));Object.keys(oe[L]).map(Z.add.bind(Z));const ha=[...Xn,...aa],se=W.FontAwesomeConfig||{};function xa(e){var t=x.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ga(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=ga(xa(n));r!=null&&(se[a]=r)});const $t={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wt,replacementClass:Bt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};se.familyPrefix&&(se.cssPrefix=se.familyPrefix);const ee={...$t,...se};ee.autoReplaceSvg||(ee.observeMutations=!1);const m={};Object.keys($t).forEach(e=>{Object.defineProperty(m,e,{enumerable:!0,set:function(t){ee[e]=t,ie.forEach(n=>n(m))},get:function(){return ee[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(e){ee.cssPrefix=e,ie.forEach(t=>t(m))},get:function(){return ee.cssPrefix}});W.FontAwesomeConfig=m;const ie=[];function ba(e){return ie.push(e),()=>{ie.splice(ie.indexOf(e),1)}}const F=Pe,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ya(e){if(!e||!D)return;const t=x.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=x.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return x.head.insertBefore(t,a),e}const wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function le(){let e=12,t="";for(;e-- >0;)t+=wa[Math.random()*62|0];return t}function te(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qe(e){return e.classList?te(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Vt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function va(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Vt(e[n]),'" '),"").trim()}function ye(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Ze(e){return e.size!==P.size||e.x!==P.x||e.y!==P.y||e.rotate!==P.rotate||e.flipX||e.flipY}function ja(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function ka(e){let{transform:t,width:n=Pe,height:a=Pe,startCentered:r=!1}=e,i="";return r&&Mt?i+="translate(".concat(t.x/F-n/2,"em, ").concat(t.y/F-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(t.x/F,"em), calc(-50% + ").concat(t.y/F,"em)) "):i+="translate(".concat(t.x/F,"em, ").concat(t.y/F,"em) "),i+="scale(".concat(t.size/F*(t.flipX?-1:1),", ").concat(t.size/F*(t.flipY?-1:1),") "),i+="rotate(".concat(t.rotate,"deg) "),i}var Na=`:root, :host {
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
}`;function qt(){const e=Wt,t=Bt,n=m.cssPrefix,a=m.replacementClass;let r=Na;if(n!==e||a!==t){const i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let pt=!1;function Le(){m.autoAddCss&&!pt&&(ya(qt()),pt=!0)}var Aa={mixout(){return{dom:{css:qt,insertCss:Le}}},hooks(){return{beforeDOMElementCreation(){Le()},beforeI2svg(){Le()}}}};const M=W||{};M[_]||(M[_]={});M[_].styles||(M[_].styles={});M[_].hooks||(M[_].hooks={});M[_].shims||(M[_].shims=[]);var E=M[_];const Jt=[],Qt=function(){x.removeEventListener("DOMContentLoaded",Qt),he=1,Jt.map(e=>e())};let he=!1;D&&(he=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),he||x.addEventListener("DOMContentLoaded",Qt));function La(e){D&&(he?setTimeout(e,0):Jt.push(e))}function fe(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Vt(e):"<".concat(t," ").concat(va(n),">").concat(a.map(fe).join(""),"</").concat(t,">")}function ht(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ce=function(t,n,a,r){var i=Object.keys(t),o=i.length,l=n,c,f,u;for(a===void 0?(c=1,u=t[i[0]]):(c=0,u=a);c<o;c++)f=i[c],u=l(u,t[f],f,t);return u};function Ca(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ue(e){const t=Ca(e);return t.length===1?t[0].toString(16):null}function Oa(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function xt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function _e(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=xt(t);typeof E.hooks.addPack=="function"&&!a?E.hooks.addPack(e,xt(t)):E.styles[e]={...E.styles[e]||{},...r},e==="fas"&&_e("fa",t)}const{styles:H,shims:za}=E,Sa={[g]:Object.values(K[g]),[A]:Object.values(K[A]),[L]:Object.values(K[L])};let et=null,Zt={},en={},tn={},nn={},an={};const Pa={[g]:Object.keys(X[g]),[A]:Object.keys(X[A]),[L]:Object.keys(X[L])};function Ea(e){return~ha.indexOf(e)}function Ra(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ea(r)?r:null}const rn=()=>{const e=a=>Ce(H,(r,i,o)=>(r[o]=Ce(i,a,{}),r),{});Zt=e((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=i}),a)),en=e((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=i}),a)),an=e((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(l=>{a[l]=i}),a});const t="far"in H||m.autoFetchSvg,n=Ce(za,(a,r)=>{const i=r[0];let o=r[1];const l=r[2];return o==="far"&&!t&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:l}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:l}),a},{names:{},unicodes:{}});tn=n.names,nn=n.unicodes,et=we(m.styleDefault,{family:m.familyDefault})};ba(e=>{et=we(e.styleDefault,{family:m.familyDefault})});rn();function tt(e,t){return(Zt[e]||{})[t]}function Ia(e,t){return(en[e]||{})[t]}function G(e,t){return(an[e]||{})[t]}function sn(e){return tn[e]||{prefix:null,iconName:null}}function Ta(e){const t=nn[e],n=tt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return et}const nt=()=>({prefix:null,iconName:null,rest:[]});function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=g}=t,a=X[n][e],r=oe[n][e]||oe[n][a],i=e in E.styles?e:null;return r||i||null}const Ua={[g]:Object.keys(K[g]),[A]:Object.keys(K[A]),[L]:Object.keys(K[L])};function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t,a={[g]:"".concat(m.cssPrefix,"-").concat(g),[A]:"".concat(m.cssPrefix,"-").concat(A),[L]:"".concat(m.cssPrefix,"-").concat(L)};let r=null,i=g;const o=Yn.filter(c=>c!==Dt);o.forEach(c=>{(e.includes(a[c])||e.some(f=>Ua[c].includes(f)))&&(i=c)});const l=e.reduce((c,f)=>{const u=Ra(m.cssPrefix,f);if(H[f]?(f=Sa[i].includes(f)?fa[i][f]:f,r=f,c.prefix=f):Pa[i].indexOf(f)>-1?(r=f,c.prefix=we(f,{family:i})):u?c.iconName=u:f!==m.replacementClass&&!o.some(h=>f===a[h])&&c.rest.push(f),!n&&c.prefix&&c.iconName){const h=r==="fa"?sn(c.iconName):{},d=G(c.prefix,c.iconName);h.prefix&&(r=null),c.iconName=h.iconName||d||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!H.far&&H.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},nt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&i===A&&(H.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=G(l.prefix,l.iconName)||l.iconName),!l.prefix&&i===L&&(H.fasds||m.autoFetchSvg)&&(l.prefix="fasds",l.iconName=G(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||r==="fa")&&(l.prefix=B()||"fas"),l}class _a{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]={...this.definitions[i]||{},...r[i]},_e(i,r[i]);const o=K[g][i];o&&_e(o,r[i]),rn()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:l}=a[r],c=l[2];t[i]||(t[i]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(t[i][f]=l)}),t[i][o]=l}),t}}let gt=[],q={};const Q={},Ma=Object.keys(Q);function Da(e,t){let{mixoutsTo:n}=t;return gt=e,q={},Object.keys(Q).forEach(a=>{Ma.indexOf(a)===-1&&delete Q[a]}),gt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(n[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{n[i]||(n[i]={}),n[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{q[o]||(q[o]=[]),q[o].push(i[o])})}a.provides&&a.provides(Q)}),n}function Me(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(q[e]||[]).forEach(o=>{t=o.apply(null,[t,...a])}),t}function V(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];(q[e]||[]).forEach(i=>{i.apply(null,n)})}function Y(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q[e]?Q[e].apply(null,t):void 0}function De(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||B();if(t)return t=G(n,t)||t,ht(on.definitions,n,t)||ht(E.styles,n,t)}const on=new _a,Fa=()=>{m.autoReplaceSvg=!1,m.observeMutations=!1,V("noAuto")},Ga={i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(V("beforeI2svg",e),Y("pseudoElements2svg",e),Y("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,La(()=>{Ba({autoReplaceSvgRoot:t}),V("watch",e)})}},Wa={icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:G(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=we(e[0]);return{prefix:n,iconName:G(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(m.cssPrefix,"-"))>-1||e.match(ma))){const t=ve(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||B(),iconName:G(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=B();return{prefix:t,iconName:G(t,e)||e}}}},C={noAuto:Fa,config:m,dom:Ga,parse:Wa,library:on,findIconDefinition:De,toHtml:fe},Ba=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=x}=e;(Object.keys(E.styles).length>0||m.autoFetchSvg)&&D&&m.autoReplaceSvg&&C.dom.i2svg({node:t})};function je(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>fe(n))}}),Object.defineProperty(e,"node",{get:function(){if(!D)return;const n=x.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ya(e){let{children:t,main:n,mask:a,attributes:r,styles:i,transform:o}=e;if(Ze(o)&&n.found&&!a.found){const{width:l,height:c}=n,f={x:l/c/2,y:.5};r.style=ye({...i,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:t}]}function Ha(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:i}=e;const o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:a}]}]}function at(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:i,symbol:o,title:l,maskId:c,titleId:f,extra:u,watchable:h=!1}=e,{width:d,height:b}=n.found?n:t,N=a==="fak",O=[m.replacementClass,r?"".concat(m.cssPrefix,"-").concat(r):""].filter(z=>u.classes.indexOf(z)===-1).filter(z=>z!==""||!!z).concat(u.classes).join(" ");let y={children:[],attributes:{...u.attributes,"data-prefix":a,"data-icon":r,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)}};const v=N&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};h&&(y.attributes[$]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||le())},children:[l]}),delete y.attributes.title);const w={...y,prefix:a,iconName:r,main:t,mask:n,maskId:c,transform:i,symbol:o,styles:{...v,...u.styles}},{children:k,attributes:I}=n.found&&t.found?Y("generateAbstractMask",w)||{children:[],attributes:{}}:Y("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=k,w.attributes=I,o?Ha(w):Ya(w)}function bt(e){const{content:t,width:n,height:a,transform:r,title:i,extra:o,watchable:l=!1}=e,c={...o.attributes,...i?{title:i}:{},class:o.classes.join(" ")};l&&(c[$]="");const f={...o.styles};Ze(r)&&(f.transform=ka({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=ye(f);u.length>0&&(c.style=u);const h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Xa(e){const{content:t,title:n,extra:a}=e,r={...a.attributes,...n?{title:n}:{},class:a.classes.join(" ")},i=ye(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Oe}=E;function Fe(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ae.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ae.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(Ae.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Ka={found:!1,width:512,height:512};function $a(e,t){!Yt&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ge(e,t){let n=t;return t==="fa"&&m.styleDefault!==null&&(t=B()),new Promise((a,r)=>{if(n==="fa"){const i=sn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Oe[t]&&Oe[t][e]){const i=Oe[t][e];return a(Fe(i))}$a(e,t),a({...Ka,icon:m.showMissingIcons&&e?Y("missingIconAbstract")||{}:{}})})}const yt=()=>{},We=m.measurePerformance&&ue&&ue.mark&&ue.measure?ue:{mark:yt,measure:yt},ae='FA "6.6.0"',Va=e=>(We.mark("".concat(ae," ").concat(e," begins")),()=>ln(e)),ln=e=>{We.mark("".concat(ae," ").concat(e," ends")),We.measure("".concat(ae," ").concat(e),"".concat(ae," ").concat(e," begins"),"".concat(ae," ").concat(e," ends"))};var rt={begin:Va,end:ln};const de=()=>{};function wt(e){return typeof(e.getAttribute?e.getAttribute($):null)=="string"}function qa(e){const t=e.getAttribute?e.getAttribute(qe):null,n=e.getAttribute?e.getAttribute(Je):null;return t&&n}function Ja(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Qa(){return m.autoReplaceSvg===!0?pe.replace:pe[m.autoReplaceSvg]||pe.replace}function Za(e){return x.createElementNS("http://www.w3.org/2000/svg",e)}function er(e){return x.createElement(e)}function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?Za:er}=t;if(typeof e=="string")return x.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(i){a.setAttribute(i,e.attributes[i])}),(e.children||[]).forEach(function(i){a.appendChild(cn(i,{ceFn:n}))}),a}function tr(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const pe={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(cn(n),t)}),t.getAttribute($)===null&&m.keepOriginalSource){let n=x.createComment(tr(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Qe(t).indexOf(m.replacementClass))return pe.replace(e);const a=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((o,l)=>(l===m.replacementClass||l.match(a)?o.toSvg.push(l):o.toNode.push(l),o),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}const r=n.map(i=>fe(i)).join(`
`);t.setAttribute($,""),t.innerHTML=r}};function vt(e){e()}function fn(e,t){const n=typeof t=="function"?t:de;if(e.length===0)n();else{let a=vt;m.mutateApproach===la&&(a=W.requestAnimationFrame||vt),a(()=>{const r=Qa(),i=rt.begin("mutate");e.map(r),i(),n()})}}let st=!1;function mn(){st=!0}function Be(){st=!1}let xe=null;function jt(e){if(!ft||!m.observeMutations)return;const{treeCallback:t=de,nodeCallback:n=de,pseudoElementsCallback:a=de,observeMutationsRoot:r=x}=e;xe=new ft(i=>{if(st)return;const o=B();te(i).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!wt(l.addedNodes[0])&&(m.searchPseudoElements&&a(l.target),t(l.target)),l.type==="attributes"&&l.target.parentNode&&m.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&wt(l.target)&&~pa.indexOf(l.attributeName))if(l.attributeName==="class"&&qa(l.target)){const{prefix:c,iconName:f}=ve(Qe(l.target));l.target.setAttribute(qe,c||o),f&&l.target.setAttribute(Je,f)}else Ja(l.target)&&n(l.target)})}),D&&xe.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function nr(){xe&&xe.disconnect()}function ar(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function rr(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=ve(Qe(e));return r.prefix||(r.prefix=B()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ia(r.prefix,e.innerText)||tt(r.prefix,Ue(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function sr(e){const t=te(e.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||le()):(t["aria-hidden"]="true",t.focusable="false")),t}function ir(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=rr(e),i=sr(e),o=Me("parseNodeAttributes",{},e);let l=t.styleParser?ar(e):[];return{iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:i},...o}}const{styles:or}=E;function un(e){const t=m.autoReplaceSvg==="nest"?kt(e,{styleParser:!1}):kt(e);return~t.extra.classes.indexOf(Kt)?Y("generateLayersText",e,t):Y("generateSvgReplacementMutation",e,t)}let R=new Set;Ht.map(e=>{R.add("fa-".concat(e))});Object.keys(X[g]).map(R.add.bind(R));Object.keys(X[A]).map(R.add.bind(R));Object.keys(X[L]).map(R.add.bind(R));R=[...R];function Nt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();const n=x.documentElement.classList,a=u=>n.add("".concat(dt,"-").concat(u)),r=u=>n.remove("".concat(dt,"-").concat(u)),i=m.autoFetchSvg?R:Ht.map(u=>"fa-".concat(u)).concat(Object.keys(or));i.includes("fa")||i.push("fa");const o=[".".concat(Kt,":not([").concat($,"])")].concat(i.map(u=>".".concat(u,":not([").concat($,"])"))).join(", ");if(o.length===0)return Promise.resolve();let l=[];try{l=te(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const c=rt.begin("onTree"),f=l.reduce((u,h)=>{try{const d=un(h);d&&u.push(d)}catch(d){Yt||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,h)=>{Promise.all(f).then(d=>{fn(d,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),u()})}).catch(d=>{c(),h(d)})})}function lr(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;un(e).then(n=>{n&&fn([n],t)})}function cr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:De(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:De(r||{})),e(a,{...n,mask:r})}}const fr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=P,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:l=null,classes:c=[],attributes:f={},styles:u={}}=t;if(!e)return;const{prefix:h,iconName:d,icon:b}=e;return je({type:"icon",...e},()=>(V("beforeDOMElementCreation",{iconDefinition:e,params:t}),m.autoA11y&&(o?f["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(l||le()):(f["aria-hidden"]="true",f.focusable="false")),at({icons:{main:Fe(b),mask:r?Fe(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:d,transform:{...P,...n},symbol:a,title:o,maskId:i,titleId:l,extra:{attributes:f,styles:u,classes:c}})))};var mr={mixout(){return{icon:cr(fr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=Nt,e.nodeCallback=lr,e}}},provides(e){e.i2svg=function(t){const{node:n=x,callback:a=()=>{}}=t;return Nt(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:i,prefix:o,transform:l,symbol:c,mask:f,maskId:u,extra:h}=n;return new Promise((d,b)=>{Promise.all([Ge(a,o),f.iconName?Ge(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(N=>{let[O,y]=N;d([t,at({icons:{main:O,mask:y},prefix:o,iconName:a,transform:l,symbol:c,maskId:u,title:r,titleId:i,extra:h,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:i,styles:o}=t;const l=ye(o);l.length>0&&(a.style=l);let c;return Ze(i)&&(c=Y("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},ur={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return je({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},dr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:i={}}=t;return je({type:"counter",content:e},()=>(V("beforeDOMElementCreation",{content:e,params:t}),Xa({content:e.toString(),title:n,extra:{attributes:r,styles:i,classes:["".concat(m.cssPrefix,"-layers-counter"),...a]}})))}}}},pr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=P,title:a=null,classes:r=[],attributes:i={},styles:o={}}=t;return je({type:"text",content:e},()=>(V("beforeDOMElementCreation",{content:e,params:t}),bt({content:e,transform:{...P,...n},title:a,extra:{attributes:i,styles:o,classes:["".concat(m.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:i}=n;let o=null,l=null;if(Mt){const c=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();o=f.width/c,l=f.height/c}return m.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([t,bt({content:t.innerHTML,width:o,height:l,transform:r,title:a,extra:i,watchable:!0})])}}};const hr=new RegExp('"',"ug"),At=[1105920,1112319],Lt={FontAwesome:{normal:"fas",400:"fas"},...qn,...Vn,...ra},Ye=Object.keys(Lt).reduce((e,t)=>(e[t.toLowerCase()]=Lt[t],e),{}),xr=Object.keys(Ye).reduce((e,t)=>{const n=Ye[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function gr(e){const t=e.replace(hr,""),n=Oa(t,0),a=n>=At[0]&&n<=At[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ue(r?t[0]:t),isSecondary:a||r}}function br(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Ye[n]||{})[r]||xr[n]}function Ct(e,t){const n="".concat(oa).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const o=te(e.children).filter(d=>d.getAttribute(Ee)===t)[0],l=W.getComputedStyle(e,t),c=l.getPropertyValue("font-family"),f=c.match(ua),u=l.getPropertyValue("font-weight"),h=l.getPropertyValue("content");if(o&&!f)return e.removeChild(o),a();if(f&&h!=="none"&&h!==""){const d=l.getPropertyValue("content");let b=br(c,u);const{value:N,isSecondary:O}=gr(d),y=f[0].startsWith("FontAwesome");let v=tt(b,N),w=v;if(y){const k=Ta(N);k.iconName&&k.prefix&&(v=k.iconName,b=k.prefix)}if(v&&!O&&(!o||o.getAttribute(qe)!==b||o.getAttribute(Je)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);const k=ir(),{extra:I}=k;I.attributes[Ee]=t,Ge(v,b).then(z=>{const xn=at({...k,icons:{main:z,mask:nt()},prefix:b,iconName:w,extra:I,watchable:!0}),ke=x.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=xn.map(gn=>fe(gn)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function yr(e){return Promise.all([Ct(e,"::before"),Ct(e,"::after")])}function wr(e){return e.parentNode!==document.head&&!~ca.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ee)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ot(e){if(D)return new Promise((t,n)=>{const a=te(e.querySelectorAll("*")).filter(wr).map(yr),r=rt.begin("searchPseudoElements");mn(),Promise.all(a).then(()=>{r(),Be(),t()}).catch(()=>{r(),Be(),n()})})}var vr={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=Ot,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=x}=t;m.searchPseudoElements&&Ot(n)}}};let zt=!1;var jr={mixout(){return{dom:{unwatch(){mn(),zt=!0}}}},hooks(){return{bootstrap(){jt(Me("mutationObserverCallbacks",{}))},noAuto(){nr()},watch(e){const{observeMutationsRoot:t}=e;zt?Be():jt(Me("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const St=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},t)};var kr={mixout(){return{parse:{transform:e=>St(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=St(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:i}=t;const o={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:u,path:h};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const ze={x:0,y:0,width:"100%",height:"100%"};function Pt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Nr(e){return e.tag==="g"?e.children:[e]}var Ar={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?ve(n.split(" ").map(r=>r.trim())):nt();return a.prefix||(a.prefix=B()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:i,maskId:o,transform:l}=t;const{width:c,icon:f}=r,{width:u,icon:h}=i,d=ja({transform:l,containerWidth:u,iconWidth:c}),b={tag:"rect",attributes:{...ze,fill:"white"}},N=f.children?{children:f.children.map(Pt)}:{},O={tag:"g",attributes:{...d.inner},children:[Pt({tag:f.tag,attributes:{...f.attributes,...d.path},...N})]},y={tag:"g",attributes:{...d.outer},children:[O]},v="mask-".concat(o||le()),w="clip-".concat(o||le()),k={tag:"mask",attributes:{...ze,id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[b,y]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:Nr(h)},k]};return n.push(I,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(v,")"),...ze}}),{children:n,attributes:a}}}},Lr={provides(e){let t=!1;W.matchMedia&&(t=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...a,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const i={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...a,cx:"256",cy:"364",r:"28"},children:[]};return t||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...i,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...a,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:t?[]:[{tag:"animate",attributes:{...i,values:"1;0;0;0;0;1;"}}]}),t||n.push({tag:"path",attributes:{...a,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...i,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Cr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Or=[Aa,mr,ur,dr,pr,vr,jr,kr,Ar,Lr,Cr];Da(Or,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const He=C.parse;C.findIconDefinition;C.toHtml;const zr=C.icon;C.layer;C.text;C.counter;function Et(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Et(Object(n),!0).forEach(function(a){J(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ge(e){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ge(e)}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Sr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Pr(e,t){if(e==null)return{};var n=Sr(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Xe(e){return Er(e)||Rr(e)||Ir(e)||Tr()}function Er(e){if(Array.isArray(e))return Ke(e)}function Rr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ir(e,t){if(e){if(typeof e=="string")return Ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ke(e,t)}}function Ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Tr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ur(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,c=e.spin,f=e.spinPulse,u=e.spinReverse,h=e.pulse,d=e.fixedWidth,b=e.inverse,N=e.border,O=e.listItem,y=e.flip,v=e.size,w=e.rotation,k=e.pull,I=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":h,"fa-fw":d,"fa-inverse":b,"fa-border":N,"fa-li":O,"fa-flip":y===!0,"fa-flip-horizontal":y==="horizontal"||y==="both","fa-flip-vertical":y==="vertical"||y==="both"},J(t,"fa-".concat(v),typeof v<"u"&&v!==null),J(t,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),J(t,"fa-pull-".concat(k),typeof k<"u"&&k!==null),J(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(I).map(function(z){return I[z]?z:null}).filter(function(z){return z})}function _r(e){return e=e-0,e===e}function dn(e){return _r(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Mr=["style"];function Dr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Fr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=dn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[Dr(r)]=i:t[r]=i,t},{})}function pn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return pn(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=Fr(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[dn(f)]=u}return c},{attrs:{}}),i=n.style,o=i===void 0?{}:i,l=Pr(n,Mr);return r.attrs.style=S(S({},r.attrs.style),o),e.apply(void 0,[t.tag,S(S({},r.attrs),l)].concat(Xe(a)))}var hn=!1;try{hn=!0}catch{}function Gr(){if(!hn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rt(e){if(e&&ge(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(He.icon)return He.icon(e);if(e===null)return null;if(e&&ge(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Se(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?J({},e,t):{}}var It={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},be=$e.forwardRef(function(e,t){var n=S(S({},It),e),a=n.icon,r=n.mask,i=n.symbol,o=n.className,l=n.title,c=n.titleId,f=n.maskId,u=Rt(a),h=Se("classes",[].concat(Xe(Ur(n)),Xe((o||"").split(" ")))),d=Se("transform",typeof n.transform=="string"?He.transform(n.transform):n.transform),b=Se("mask",Rt(r)),N=zr(u,S(S(S(S({},h),d),b),{},{symbol:i,title:l,titleId:c,maskId:f}));if(!N)return Gr("Could not find icon",u),null;var O=N.abstract,y={ref:t};return Object.keys(n).forEach(function(v){It.hasOwnProperty(v)||(y[v]=n[v])}),Wr(O[0],y)});be.displayName="FontAwesomeIcon";be.propTypes={beat:p.bool,border:p.bool,beatFade:p.bool,bounce:p.bool,className:p.string,fade:p.bool,flash:p.bool,mask:p.oneOfType([p.object,p.array,p.string]),maskId:p.string,fixedWidth:p.bool,inverse:p.bool,flip:p.oneOf([!0,!1,"horizontal","vertical","both"]),icon:p.oneOfType([p.object,p.array,p.string]),listItem:p.bool,pull:p.oneOf(["right","left"]),pulse:p.bool,rotation:p.oneOf([0,90,180,270]),shake:p.bool,size:p.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:p.bool,spinPulse:p.bool,spinReverse:p.bool,symbol:p.oneOfType([p.bool,p.string]),title:p.string,titleId:p.string,transform:p.oneOfType([p.string,p.object]),swapOpacity:p.bool};var Wr=pn.bind(null,$e.createElement);const Br={prefix:"fas",iconName:"less-than",icon:[384,512,[62774],"3c","M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"]},Yr={prefix:"fas",iconName:"greater-than",icon:[384,512,[62769],"3e","M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"]},Hr=({sessionType:e,setShowDialog:t,imageIndex:n,setImageIndex:a})=>{function r(){a(l=>l>=e.id.length-1?0:l+1)}function i(){a(l=>l<=0?e.id.length-1:l-1)}function o(l){l.key==="ArrowRight"?r():l.key==="ArrowLeft"&&i()}return j.useEffect(()=>(window.addEventListener("keydown",o,!0),console.log("listener"),()=>{window.removeEventListener("keydown",o),console.log("istner usutnięty")}),[]),s.jsxs("div",{className:`flex absolute flex-col items-start  
        top-0 left-0  w-full h-full `,children:[s.jsx("div",{onClick:()=>t(!1),className:"fixed top-0 left-0 z-[15] w-full h-full bg-[#000000c1] "}),s.jsx("div",{className:"fixed top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100%] overflow-hidden md:w-1/2 flex items-center justify-center z-[16]",children:s.jsxs("div",{className:"max-w-[97%]  md:max-w-[700px]",children:[s.jsx("button",{onClick:()=>t(!1),className:" text-6xl z-[16] md:left-[92%] left-[90%] text-white relative md:top-[8vh] top-[6vh] ",children:"×"}),s.jsxs("div",{className:"flex flex-col overflow-hidden",children:[s.jsx("div",{className:"flex flex-row items-center justify-center",children:s.jsx("div",{className:"flex flex-row ",children:e.id.map((l,c)=>s.jsx("img",{src:l,loading:"lazy",className:"w-full object-cover object-center cursor-pointer duration-300",style:{translate:`${-100*n}%`}},c))})}),s.jsxs("div",{className:"w-[700px]  mt-6 overflow-hidden flex flex-row mx-auto ",children:[s.jsxs("div",{className:" flex flex-row items-center justify-between absolute  md:w-[700px] w-[97%]",children:[s.jsx("button",{onClick:i,className:"bg-gray-400 md:px-1 px-2   z-[16] h-[113px] duration-100 text-2xl opacity-50 hover:opacity-70",children:s.jsx(be,{icon:Br})}),s.jsx("button",{onClick:r,className:"bg-gray-400 md:px-1 px-2 z-[16] h-[113px] duration-100 text-2xl opacity-50 hover:opacity-70",children:s.jsx(be,{icon:Yr})})]}),s.jsx("div",{className:"flex flex-row justify-between gap-x-2  ",children:e.id.map((l,c)=>s.jsx("img",{src:l,loading:"lazy",className:`w-[24%] object-cover object-center cursor-pointer duration-300 hover:scale-105 ${c==n?" border-white":""}`,style:{translate:`${-65*n}%`,boxSizing:"border-box"},onClick:()=>a(c)},c))})]})]})]})})]})},Xr=""+new URL("1-ChFnh18M.webp",import.meta.url).href,Kr=""+new URL("2-DLFRa46S.webp",import.meta.url).href,$r=""+new URL("3-L3Eh-Hxm.webp",import.meta.url).href,Vr=""+new URL("4-C_ayELQW.webp",import.meta.url).href,qr=""+new URL("5-DoTmdtof.webp",import.meta.url).href,Jr=""+new URL("6-C2uCJKk9.webp",import.meta.url).href,Qr=""+new URL("7-DVuhAEhX.webp",import.meta.url).href,Zr=""+new URL("8-Lk30HScb.webp",import.meta.url).href,es=""+new URL("9-LQ6WwF42.webp",import.meta.url).href,ts=""+new URL("10-BlTxZosT.webp",import.meta.url).href,ns=""+new URL("11-XdmV8F0C.webp",import.meta.url).href,as=""+new URL("12-Bc9j7wDs.webp",import.meta.url).href,rs=""+new URL("13-GlviO1ob.webp",import.meta.url).href,ss=""+new URL("14-xlkeorHV.webp",import.meta.url).href,is=""+new URL("15-WST9ucwV.webp",import.meta.url).href,os=""+new URL("16-ynYTQ2O-.webp",import.meta.url).href,ls=""+new URL("17--s1UGmr3.webp",import.meta.url).href,cs=""+new URL("18-DLuEzTfN.webp",import.meta.url).href,fs=""+new URL("19-Dyt_6RPm.webp",import.meta.url).href,ms=""+new URL("20-DqmsZMBE.webp",import.meta.url).href,us=""+new URL("21-CpPe2GQ0.webp",import.meta.url).href,ds=""+new URL("22-DWxW0gWE.webp",import.meta.url).href,ps=""+new URL("23-WhbNYuS1.webp",import.meta.url).href,hs=""+new URL("24-BO9ooWON.webp",import.meta.url).href,xs=""+new URL("25-CWWWXGtd.webp",import.meta.url).href,gs=""+new URL("26-CX_LdJJL.webp",import.meta.url).href,bs=""+new URL("27-BiKCAVY1.webp",import.meta.url).href,ys=""+new URL("28-CnL7sXZi.webp",import.meta.url).href,ws=""+new URL("29-Cz1g0Hv3.webp",import.meta.url).href,vs=""+new URL("30-BH8Y5heh.webp",import.meta.url).href,js=""+new URL("1-CsA2gQJu.webp",import.meta.url).href,ks=""+new URL("2-B9W3aumy.webp",import.meta.url).href,Ns=""+new URL("3-iysaAMSb.webp",import.meta.url).href,As=""+new URL("4-8g2eOk8j.webp",import.meta.url).href,Ls=""+new URL("5-97nO5IKG.webp",import.meta.url).href,Cs=""+new URL("6-CbVDhzLo.webp",import.meta.url).href,Os=""+new URL("7-C6IVrVIH.webp",import.meta.url).href,zs=""+new URL("8-29QyQCV8.webp",import.meta.url).href,Ss=""+new URL("9-Lz_UlwCT.webp",import.meta.url).href,Ps=""+new URL("10-DdJWoLsN.webp",import.meta.url).href,Es=""+new URL("11-BuLKBUm0.webp",import.meta.url).href,Rs=""+new URL("12-B_phznap.webp",import.meta.url).href,Is=""+new URL("13-twrxyu6d.webp",import.meta.url).href,Ts=""+new URL("14-DeYdyfn-.webp",import.meta.url).href,Us=""+new URL("15-C8TgjMsu.webp",import.meta.url).href,_s=""+new URL("16-DERzYBWo.webp",import.meta.url).href,Ms=""+new URL("17-Bp_bd7f8.webp",import.meta.url).href,Ds=""+new URL("18-xuXVj60N.webp",import.meta.url).href,Fs=""+new URL("19-BnKG1sxd.webp",import.meta.url).href,Gs=""+new URL("20-BzniSlHz.webp",import.meta.url).href,Ws=""+new URL("21-CKnySkT4.webp",import.meta.url).href,Bs=""+new URL("22-D6-KENQ5.webp",import.meta.url).href,Ys=""+new URL("23-TjTGMcZH.webp",import.meta.url).href,Hs=""+new URL("24-DOf7hKqS.webp",import.meta.url).href,Xs=""+new URL("1-C0chnglL.webp",import.meta.url).href,Ks=""+new URL("2-BzIqlXLW.webp",import.meta.url).href,$s=""+new URL("3-GpivHOyQ.webp",import.meta.url).href,Vs=""+new URL("4-CDdjk_mK.webp",import.meta.url).href,qs=""+new URL("5-DWPDbWT8.webp",import.meta.url).href,Js=""+new URL("6-CgvcR9LS.webp",import.meta.url).href,Qs=""+new URL("7-BBKkLfej.webp",import.meta.url).href,Zs=""+new URL("8-RlXeqxB7.webp",import.meta.url).href,ei=""+new URL("9-xVdO-1NR.webp",import.meta.url).href,ti=""+new URL("10-cLKZEUeo.webp",import.meta.url).href,ni=""+new URL("11-vtuvzgQo.webp",import.meta.url).href,ai=""+new URL("12-BvMdz-5T.webp",import.meta.url).href,ri=""+new URL("13-MbGeC9O0.webp",import.meta.url).href,si=""+new URL("14-C668xsub.webp",import.meta.url).href,ii=""+new URL("15-Bve8jS3-.webp",import.meta.url).href,oi=""+new URL("16-C6q3KseI.webp",import.meta.url).href,li=""+new URL("17-DdTJUbMD.webp",import.meta.url).href,ci=""+new URL("18-DdqtQo6X.webp",import.meta.url).href,fi=""+new URL("19-DquBbMhj.webp",import.meta.url).href,mi=""+new URL("20-DB5aD-kq.webp",import.meta.url).href;function ui(){const e={id:[Xr,Kr,$r,Vr,qr,Jr,Qr,Zr,es,ts,ns,as,rs,ss,is,os,ls,cs,fs,ms,us,ds,ps,hs,xs,gs,bs,ys,ws,vs],name:"Psy"},t={id:[js,ks,Ns,As,Ls,Cs,Os,zs,Ss,Ps,Es,Rs,Is,Ts,Us,_s,Ms,Ds,Fs,Gs,Ws,Bs,Ys,Hs],name:"Konie"},n={id:[Xs,Ks,$s,Vs,qs,Js,Qs,Zs,ei,ti,ni,ai,ri,si,ii,oi,li,ci,fi,mi],name:"Wydarzenia"},[a,r]=j.useState(!1),[i,o]=j.useState(e),[l,c]=j.useState(0);return s.jsxs("div",{id:"Portfolio",className:"max-w-[1050px] h-auto py-0 mx-auto md:mt-0 md:mb-32 md:pt-0 pt-16",children:[s.jsx("h1",{className:"text-center text-6xl pb-12 md:pb-4 md:my-14 tracking-[5px] font-light text-titleGray",children:"Portfolio"}),s.jsx(Bn,{sessionType:i,setSessionType:o,setShowDialog:r,dogs:e,horses:t,events:n,setImageIndex:c}),a===!0?s.jsx(Hr,{sessionType:i,setShowDialog:r,imageIndex:l,setImageIndex:c}):""]})}const di=""+new URL("dog1-O8fuLAHx.webp",import.meta.url).href,pi=""+new URL("dog3-CeIrcc3q.jpg",import.meta.url).href,hi=""+new URL("horse1-DOTDeMTY.jpg",import.meta.url).href,xi=""+new URL("horse2-D83Ic7A9.jpg",import.meta.url).href,gi=""+new URL("About-img-Ck7p2bgX.webp",import.meta.url).href;function bi(){return s.jsx(s.Fragment,{children:s.jsxs("div",{id:"About",className:"max-w-[1050px] h-auto  mx-auto md:pt-24 mt-10 overflow-hidden  shadow-[#0000000d]",children:[s.jsxs("div",{className:"w-full text-center ",children:[s.jsx("h1",{className:"md:text-5xl text-4xl mt-10 md:mt-0 tracking-[5px] font-light",children:"Profesjonalna"}),s.jsx("h2",{className:"md:text-xl text-xl md:py-4 py-2 mb-4 tracking-[5px] font-light text-gray-500  text-[17px] leading-[34px] ",children:"fotografia zwierząt"})]}),s.jsxs("div",{className:"w-full flex flex-col-reverse md:flex-row justify-center items-center md:mt-6 ",children:[s.jsxs("div",{className:"flex flex-col md:w-[45%] pl-4",children:[s.jsx("h1",{"data-aos":"slide-right",className:"text-4xl pb-6 tracking-[5px] font-normal  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text  mt-8 text-center md:text-left mx-6 ",children:"Poznaj mnie!"}),s.jsx("p",{"data-aos":"slide-right",className:"px-6 text-justify tracking-[0px] font-[Lora] text-myGray font-normal text-[17px] leading-[34px]",children:"Cześć, nazywam się Patrycja Dawid. Swoją pasję do fotografii odkryłam w 2014 roku dorastając w otoczeniu zwierząt, które zawsze były moimi najlepszymi modelami. Dzięki temu łatwo jest mi uchwycić ich naturalne piękno i charakter. W wolnych chwilach najbardziej lubię zapuszczać się w długie tereny na końskim grzbiecie i spacerować po lesie."})]}),s.jsx("div",{"data-aos":"slide-left",className:"md:ml-auto mx-auto ",children:s.jsx("img",{src:gi,className:" md:w-[500px] mx-auto w-[90%] rounded-xl",loading:"lazy"})})]}),s.jsxs("div",{className:"w-full flex flex-col mx-auto text-center mt-8",children:[s.jsxs("h1",{className:"text-center w-full text-xl tracking-[5px] font-light",children:["A to moje"," ",s.jsx("span",{className:"text-blue-400 tracking-[5px] font-light",children:"pupile"})," ",":)"]}),s.jsxs("div",{className:"w-[300px] h-14 mx-auto mt-2 flex flex-row justify-center items-center gap-x-2",children:[s.jsx("img",{src:di,loading:"lazy",className:"w-[20%] rounded-[50%]"}),s.jsx("img",{src:pi,loading:"lazy",className:"w-[20%] rounded-[50%]"}),s.jsx("img",{src:hi,loading:"lazy",className:"w-[20%] rounded-[50%]"}),s.jsx("img",{src:xi,loading:"lazy",className:"w-[20%] rounded-[50%]"})]})]})]})})}const yi=""+new URL("BlueBarDog-B4yfAq1f.webp",import.meta.url).href;function wi(){return s.jsx("div",{children:s.jsx("div",{className:"w-screen bg-[#eef5f9] md:my-10  py-[0px] mt-12 md:mt-0 ",children:s.jsxs("div",{className:"max-w-[900px] flex-col flex mx-auto md:flex-row  justify-center items-center py-[30px]",children:[s.jsxs("div",{className:"flex flex-col px-4 md:items-start  items-start justify-start h-full mx-auto md:w-[60%] ",children:[s.jsxs("p",{className:"text-start  md:text-2xl text-[24px] pb-6   tracking-[2px] leading-10 font-normal  bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text ",children:["K I L K A   P O W O D Ó W  ",s.jsx("br",{})," D L A C Z E G O . . ."]}),s.jsxs("p",{className:"tracking-[1.7px]  text-myGray font-light text-[18px] leading-[32px]  md:mr-10 pb-6 md:pb-0",children:["• Zyskujesz wspaniałą pamiątkę na całe życie ",s.jsx("br",{}),s.jsx("br",{}),"• Twój czworonożny przyjaciel zostanie uwieczniony w najlepszy możliwy sposób",s.jsx("br",{}),s.jsx("br",{}),"• Ukażę na fotografiach piękną więź, jaka was łączy",s.jsx("br",{}),s.jsx("br",{}),"• Zdjęcia są wysokiej rozdzielczości idealne do wydruków, foto książek i innych niekomercyjnych zastosowań."]})]}),s.jsx("div",{className:"md:w-[37%] w-[90%] h-full my-4 md:my-0",children:s.jsx("img",{src:yi,loading:"lazy"})})]})})})}function Ai(){let e=document.querySelectorAll("section");j.useEffect(()=>{ot.init({debug:!0})},[]);let t=0;return window.addEventListener("scroll",function(){t<=10?t++:ot.refresh()}),s.jsxs("div",{className:"App overflow-hidden scroll-smooth",children:[s.jsx(jn,{sections:e}),s.jsx(wn,{}),s.jsx(Pn,{className:"Section",id:"Hero"}),s.jsx(bi,{}),s.jsx(ui,{className:"Section",id:"Portfolio"}),s.jsx(wi,{}),s.jsx(Fn,{}),s.jsx(Tn,{className:"Section",id:"Offer"}),s.jsx(Gn,{className:"Section",id:"Contact"}),s.jsx(vn,{})]})}export{Ai as default};
