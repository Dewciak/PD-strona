import{r as n,j as t,L as e}from"./index-soZtivNt.js";import{A as j,I as u,a as c}from"./index-_F3enQkZ.js";function v({sections:a}){const[i,x]=n.useState(!1),d=()=>{x(!i)};return n.useEffect(()=>{const h=document.querySelectorAll("ul li a");window.onscroll=()=>{a.forEach(s=>{let o=window.scrollY,r=s.offsetTop-150,f=s.offsetHeight,m=s.getAttribute("id");o>=r&&o<r+f&&h.forEach(l=>{l.classList.remove("active"),l.getAttribute("href")===`#${m}`&&l.classList.add("active")})})}},[a]),t.jsxs("div",{className:"w-full h-auto bg-transparent",children:[t.jsxs("div",{className:"md:hidden w-[100%] mx-auto h-8 flex flex-row py-10  items-center justify-between fixed z-[10] top-0 left-[50%] bg-white px-4 translate-x-[-50%]",children:[t.jsx("div",{onClick:d,className:i?"transition-transform duration-500 transform rotate-180 block md:hidden z-20 px-10 ":"transition-transform duration-500 transform rotate-0 block md:hidden z-20 px-10 ",children:i?t.jsx(j,{size:30}):t.jsx(u,{size:30})}),t.jsx("div",{className:i?"w-[60%] fixed left-0 top-0 h-screen bg-blue-100 flex justify-center items-center ease-in-out duration-500 z-[5]":"fixed left-[-60%] w-[60%] top-0 h-screen bg-blue-200 flex justify-center items-center ease-in-out duration-500 z-[5]",children:t.jsxs("ul",{className:"z-10 text-black m-4 md:flex flex-row gap-x-16 items-center cursor-pointer",children:[t.jsx(e,{activeClass:"active",to:"/PD-strona",onClick:()=>{window.scrollTo(0,700)},children:t.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray",children:"O mnie"})}),t.jsx(e,{activeClass:"active",to:"/PD-strona",onClick:()=>{window.scrollTo(0,1600)},children:t.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray ",children:"Portfolio"})}),t.jsx(e,{activeClass:"active",to:"/PD-strona",onClick:()=>{window.scrollTo(0,3600)},children:t.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray ",children:"Oferta"})}),t.jsx(e,{activeClass:"active",to:"/PD-strona",onClick:()=>{window.scrollTo(0,9e3)},children:t.jsx("li",{className:"text-2xl p-4 font-light tracking-[5px]  text-titleGray ",children:"Kontakt"})})]})}),t.jsx(e,{to:"/",children:t.jsx("div",{className:"md:hidden w-20 mx-4 h-auto object-scale-dow ml-auto",children:t.jsx("img",{src:c,className:""})})})]}),t.jsxs("div",{className:"w-[100%] bg-white hidden fixed mx-auto h-8 md:flex flex-row py-10 justify-center items-center  top-0 left-[50%] translate-x-[-50%] z-[10]",children:[t.jsxs("ul",{className:"hidden md:flex flex-row gap-x-16 items-center cursor-pointer absolute bg-transparent",children:[t.jsx(e,{activeClass:"active",to:"/",onClick:()=>{window.scrollTo(0,500)},children:t.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"O mnie"})}),t.jsx(e,{activeClass:"active",to:"/",onClick:()=>{window.scrollTo(0,1300)},children:t.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Portfolio"})}),t.jsx(e,{activeClass:"active",to:"/",onClick:()=>{window.scrollTo(0,2200)},children:t.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Oferta"})}),t.jsx(e,{activeClass:"active",to:"/",onClick:()=>{window.scrollTo(0,4e3)},children:t.jsx("li",{className:"font-light hover:text-[#0009] text-lg tracking-[5px]  text-titleGray",children:"Kontakt"})})]}),t.jsx("div",{className:"w-20 mx-4 h-auto object-scale-dow ml-auto ",children:t.jsx(e,{to:"/",children:t.jsx("img",{src:c,className:""})})})]})]})}export{v as N};
