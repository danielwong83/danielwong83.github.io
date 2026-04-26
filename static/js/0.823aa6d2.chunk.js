"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[0],{1e3:(e,i,n)=>{n.r(i),n.d(i,{default:()=>L});var t=n(2791),r=n(5751),o=n(4139);const s=r.ZP.div`
    flex-direction: column;
`,l=r.ZP.div`
    display: none;

    @media (max-width: 1000px){
        justify-content: center;
        text-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 10%;
    }
`,a=r.ZP.div`
    background-color: ${e=>e.theme.everyBackground};
    display: flex;
    flex-direction: column;
    height: calc( 100vh - 66px);
    overflow: hidden;

    @media (max-width: 768px){
        height: calc( 100vh - 65px);
    }
`,x=r.ZP.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    margin-top: 30vh;

    @media (max-width: 1000px){
        display: none;
    }

`,d=r.ZP.div`
    background-color: #fffcf4;
    justify-content: center;
    align-items: center;
    display: flex;
`,c=(0,r.ZP)(o.animated.div)`
    display: flex;
    align-items: center;
    height: 100%;
    width: auto;
    justify-content: center;
`,p=(0,r.ZP)(o.animated.div)`
    display: inline-block;
    background: #f7f7f7;
    border-radius: 10px;
    position: absolute;
    backdrop-filter: blur(10px);
    box-shadow: ${e=>e.theme.homeshadow};
    background-clip: border-box;
    height: 400px;
    width: 750px;
`,h=r.ZP.div`
    border-radius: 50%;
    background: ${e=>e.theme.everyBackground};
    width: 25px;
    height: 25px;
    border: 1px solid black;
    margin-top: 15px;
    margin-left: 20px;

`,f=r.ZP.div`
    border-radius: 50%;
    background: ${e=>e.theme.everyBackground};
    width: 25px;
    height: 25px;
    border: 1px solid black;
    margin-top: 15px;
    margin-left: 700px;

`,m=r.ZP.div`
    display: absolute;
    flex-direction: row;
`,g=r.ZP.div`
    margin-top: 20px;
`,j=r.ZP.div`
    margin-top: 30px;
`,u=r.ZP.hr`
    color: #f00;
    background-color: #f00;
    height: 2px;
`,y=r.ZP.hr`
    color: #001375;
    background-color: rgba(0, 67, 239, 0.24);
    height: 1px;
`,b=r.ZP.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    margin: 0px;
    margin-top: -40px;
    margin-left: -80px;
    margin-bottom: 60px;
    user-select: none;
`,w=r.ZP.div`
    margin-left: 17px;
    display: flex;
    flex-direction: column;
    text-align: left;
`,v=r.ZP.h1`
    display: flex;
    font-family: 'Inter';
    font-size: 25px;
    color: ${e=>e.theme.textColor};
    margin: 0;
    margin-bottom: 5%;
`,P=r.ZP.h1`
    display: flex;
    font-family: 'Inter';
    font-size: 15px;
    color: ${e=>e.theme.textColor};
    margin: 0;
`,k=r.ZP.h1`
    display: flex;
    font-family: 'Inter';
    font-size: 51px;
    font-weight: 600;
    color: ${e=>e.theme.textColor};
    margin: 0;
    margin-left: 4%;
    margin-top: 2%;
    margin-bottom: 15px;
    width: 100%;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 35px;
        margin-top: 4%;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 40px;
        margin-top: 4%;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 45px;
        margin-top: 4%;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 48px;
        margin-top: 3.5%;
    }
    
`,Z=r.ZP.a`
    font-family: 'Inter';
    font-size: 20px;
    color: ${e=>e.theme.hyperLink};
    margin: 0;
    text-decoration: underline;
    display: flex;
    margin-left: 4.5%;
`,z=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 35px;
    color: rgba(179,97,122,1);
    margin: 0px;
    margin-top: 10px;
`,$=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 35px;
    color: #00548f;
    margin: 0px;
    margin-top: 10px;
`,I=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 35px;
    color: #549dc5;
    margin-top: -17px;
`,C=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 130px;
    color: rgba(87,92,133,1);
    margin: 0px;
    margin-top: -305px;
    user-select: none;
`,F=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 45px;
    color: black;
    margin: 0px;
    margin-top: -250px;
    margin-left: -200px;
    user-select: none;
    justify-content: center;
    display: flex;
    transform: rotate(-30deg);
`,Y=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 13px;
    color: black;
    margin: 0px;
    margin-top: 180px;
    margin-left: 490px;
    user-select: none;
    justify-content: center;
    display: flex;
`;var B=n(184);const S=(e,i)=>[-(i-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1.1],W=(e,i,n)=>`perspective(600px) rotateX(${e}deg) rotateY(${i}deg) scale(${n})`,L=()=>{const[e,i]=(0,t.useState)(!1),[n,r]=(0,o.useSpring)((()=>({xys:[0,0,1],config:{mass:7,tension:250,friction:50}}))),{transform:L,opacity:M}=(0,o.useSpring)({opacity:e?1:0,transform:`perspective(700px) rotateY(${e?180:0}deg)`,config:{mass:4,tension:500,friction:50}});return(0,B.jsxs)(a,{children:[(0,B.jsxs)(s,{children:[(0,B.jsx)(k,{children:"Version 2.0 "}),(0,B.jsx)(Z,{href:"/#/about",children:" Previous Page"})]}),(0,B.jsxs)(l,{children:[(0,B.jsx)(v,{children:"Sorry, this feature is not supported for this current device. Please use another device to view this feature. "}),(0,B.jsx)(P,{children:"(Works better on laptops and desktops)"})]}),(0,B.jsx)(x,{children:(0,B.jsx)(d,{children:(0,B.jsxs)(c,{onClick:()=>i((e=>!e)),onMouseMove:e=>{let{clientX:i,clientY:n}=e;return r({xys:S(i,n)})},onMouseLeave:()=>r({xys:[0,0,1]}),style:{transform:n.xys.interpolate(W)},children:[(0,B.jsxs)(p,{style:{opacity:M.to((e=>1-e)),transform:L},children:[(0,B.jsx)(h,{}),(0,B.jsxs)(m,{children:[(0,B.jsx)(g,{children:(0,B.jsx)(u,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})})]}),(0,B.jsx)(C,{children:"Daniel Wong"}),(0,B.jsxs)(b,{children:[(0,B.jsx)(z,{children:"Financial Engineering at "}),(0,B.jsxs)(w,{children:[(0,B.jsx)($,{children:"Imperial College"}),(0,B.jsx)(I,{children:"London"})]})]})]}),(0,B.jsxs)(p,{style:{opacity:M,transform:L,rotateY:"180deg"},children:[(0,B.jsx)(f,{}),(0,B.jsxs)(m,{children:[(0,B.jsx)(g,{children:(0,B.jsx)(u,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})}),(0,B.jsx)(j,{children:(0,B.jsx)(y,{})})]}),(0,B.jsx)(F,{children:"HEYY! \ud83d\ude21 flip me back"}),(0,B.jsx)(Y,{children:'"Who\'s your worm guy?" - Creed Bratton'})]})]})})})]})}}}]);
//# sourceMappingURL=0.823aa6d2.chunk.js.map