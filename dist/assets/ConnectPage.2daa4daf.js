import{r as i,a as e,j as r}from"./index.2e43c66c.js";import{L as s}from"./Logo.6e88cb66.js";var c="/assets/heroWalking.6e7a6139.mp4";const l=()=>{const[a,n]=i.exports.useState([{link:"https://docs.google.com/document/d/1Ib8fcVEwBZkPbYGxaiinklCVOFpSoUs7RKY_7aIa1Ic/edit",name:"CV"},{link:"engineeralamiir@gmail.com",name:"GMAIL"},{link:"https://github.com/al-amiir",name:"Github"},{link:"https://www.linkedin.com/in/al-amiir/",name:"LinkedIn"},{link:"https://www.youtube.com/channel/UCVQzuaxXlqa8xgwA5xAQY4Q",name:"Youtube"}]);return e("ul",{className:"connect_links",children:a.map((t,o)=>e("li",{children:e("a",{href:t.link==="engineeralamiir@gmail.com"?"mailto:engineeralamiir@gmail.com":t.link,target:"_blank",children:t.name})},o))})},h=()=>{const[a,n]=i.exports.useState(0);return i.exports.useEffect(()=>(document.body.style.width="100vw",document.body.style.height="100vh",n(1),()=>{n(0)}),[]),r("div",{className:"connect",style:{opacity:`${a}`},children:[e(s,{}),e(l,{}),e("h1",{className:"hire",children:"Hire a hero "}),e("span",{className:"overlay"}),e("video",{className:"hero",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:c})]})};export{h as default};
