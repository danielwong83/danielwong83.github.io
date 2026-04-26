"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[129],{2129:(e,i,t)=>{t.r(i),t.d(i,{default:()=>b});var n=t(2791),o=t(3025),r=t(5751);const s=r.ZP.div`
    flex-direction: 'column';
`,x=r.ZP.div`
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
`,l=r.ZP.div`
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    overflow: hidden;

    @media (max-width: 1000px){
        display: none;
    }
`,d=r.ZP.div`
    justify-content: center;
    align-items: center;
    position: absolute;
    display: flex;
    flex-direction: row;
`,c=r.ZP.div`
    justify-content: center;
    margin-top: 185px;
    margin-right: 130px;
    position: absolute;
    display: flex;
    flex-direction: row;
`,h=r.ZP.div`
    display: flex;
`,p=r.ZP.div`
    margin-left: 17px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
`,y=r.ZP.h1`
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
`,f=r.ZP.h1`
    display: flex;
    font-family: 'Inter';
    font-size: 25px;
    color: ${e=>e.theme.textColor};
    margin: 0;
    margin-bottom: 5%;
    transition: all 1.5s ease-in-out;
`,m=r.ZP.h1`
    display: flex;
    font-family: 'Inter';
    font-size: 15px;
    color: ${e=>e.theme.textColor};
    margin: 0;
`,g=r.ZP.a`
    font-family: 'Inter';
    font-size: 20px;
    color: ${e=>e.theme.hyperLink};
    margin: 0;
    text-decoration: underline;
    display: flex;
    margin-left: 4.5%;
`,u=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 45px;
    color: ${e=>e.theme.textColor};
    margin-top: 40px;
`,j=r.ZP.h1`
    font-family: 'Indie Flower';
    color: #00548f;
    margin: 0;
`,w=r.ZP.h1`
    font-family: 'Indie Flower';
    color: #549dc5;
    margin-top: -9px;
`,k=r.ZP.h1`
    font-family: 'Indie Flower';
    font-size: 170px;
    color: ${e=>e.theme.textColor};
`;var v=t(184);class P extends n.Component{constructor(){super(...arguments),this.state={isDragging:!1,x:0,y:0}}render(){const e=(new Date).getHours(),i=[{x:400,y:517},{x:452,y:465},{x:504,y:411},{x:556,y:364},{x:608,y:324},{x:660,y:293},{x:713,y:279},{x:765,y:300},{x:817,y:344},{x:869,y:382},{x:921,y:387},{x:973,y:369},{x:1026,y:345},{x:1078,y:315},{x:1130,y:285},{x:1182,y:261},{x:1234,y:244},{x:1286,y:239},{x:1338,y:252},{x:1391,y:282},{x:1443,y:328},{x:1495,y:383},{x:1547,y:447},{x:1600,y:517}],t=i[e].x,n=i[e].y;return(0,v.jsxs)(a,{children:[(0,v.jsxs)(s,{children:[(0,v.jsx)(y,{children:"Version 1.0 "}),(0,v.jsx)(g,{href:"/#/about",children:" Previous Page"})]}),(0,v.jsxs)(x,{children:[(0,v.jsx)(f,{children:"Sorry, this feature is not supported for this current device. Please use another device to view this feature. "}),(0,v.jsx)(m,{children:"(Works better on laptops and desktops)"})]}),(0,v.jsxs)(l,{children:[(0,v.jsx)(d,{children:(0,v.jsx)(k,{children:"Daniel Wong"})}),(0,v.jsxs)(c,{children:[(0,v.jsx)(h,{children:(0,v.jsx)(u,{children:"Financial Engineering at "})}),(0,v.jsxs)(p,{children:[(0,v.jsx)(j,{children:"Imperial College"}),(0,v.jsx)(w,{children:"London"})]})]}),(0,v.jsx)(o.Hf,{width:2e3,height:1e3,children:(0,v.jsxs)(o.mh,{children:[(0,v.jsxs)(o.ZA,{x:this.state.x,y:this.state.y,draggable:!0,onDragStart:()=>{this.setState({isDragging:!0})},onDragEnd:e=>{this.setState({isDragging:!1,x:e.target.x(),y:e.target.y()})},children:[(0,v.jsx)(o.Cd,{x:t,y:n,radius:5,fill:"black"}),(0,v.jsx)(o.x1,{x:t,y:n,points:[0,0,0,15],stroke:"black"}),(0,v.jsx)(o.x1,{x:t,y:n,points:[0,15,-5,30],stroke:"black"}),(0,v.jsx)(o.x1,{x:t,y:n,points:[0,15,5,30],stroke:"black"}),(0,v.jsx)(o.x1,{x:t,y:n,points:[0,7,-5,13],stroke:"black"}),(0,v.jsx)(o.x1,{x:t,y:n,points:[0,7,5,13],stroke:"black"})]}),(0,v.jsx)(o.x1,{x:0,y:0,points:[400,555,700,310,900,420,1300,270,1600,555],tension:.33,stroke:"#468C26"})]})})]})]})}}const b=P}}]);
//# sourceMappingURL=129.c4d07d69.chunk.js.map