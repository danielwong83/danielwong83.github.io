"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44],{6044:(t,e,i)=>{i.r(e),i.d(e,{default:()=>G});var n=i(2791),a=i(5751);const o=a.ZP.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`,r=a.ZP.div`
    display: flex;
    flex-direction: column;
    margin-left: 4%;
    margin-top: 2%;

    @media (max-width: 768px){
        flex-direction: row;
        justify-content: center;
        margin-left: 0;
        margin-top: 0;
    }

    @media (max-width: 400px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-left: 0;
        margin-top: 0;
    }

`,s=a.ZP.div`
    display: flex;
    background: ${t=>t.theme.chessDiv};
    width: 175px;
    border-radius: 25px;
    height: 110px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4%;
    padding: 15px;

    @media (max-width: 768px){
        margin-right: 4%;
        width: 150px;
        height: 85px;
    }

`,l=a.ZP.h1`
    font-family: 'Inter';
    font-size: 15px;
    color: ${t=>t.theme.textColor};
    margin-top: 15px;
    margin-bottom: 10px;
    text-align: left;
    width: 100%;
    margin-left: 45px;
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 13px;
        margin-top: 8px;
        margin-bottom: 7px;
    }
`,d=a.ZP.h1`
    font-family: 'Inter';
    font-size: 55px;
    color: ${t=>t.theme.textColor};
    margin: 0;
    justify-content: center;
    transition: all 1.5s ease-in-out;
    font-weight: 500;

    @media (max-width: 768px){
        font-size: 40px;
    }
`,h=a.ZP.h1`
    font-family: 'Inter';
    font-size: 20px;
    color: #00DB45;
    margin: 0;
    margin-top: 15px;
    margin-left: 4%;
    transition: all 1.5s ease-in-out;
    font-weight: 500;

    @media (max-width: 768px){
        font-size: 15px;
    }
    
`,x=a.ZP.h1`
    font-family: 'Inter';
    font-size: 20px;
    color: #E30206;
    margin: 0;
    margin-top: 15px;
    margin-left: 4%;
    transition: all 1.5s ease-in-out;
    font-weight: 500;

    @media (max-width: 768px){
        font-size: 15px;
    }
`;var p=i(2426),m=i.n(p),c=i(184);class f extends n.Component{constructor(){super(),this.state={data:[],time:[]}}componentDidMount(){fetch("https://lichess.org/api/user/danielwong4").then((t=>t.json())).then((t=>{console.log([t]),this.setState({data:[t]})}))}render(){return this.state.data.map((t=>(0,c.jsxs)(o,{children:[(0,c.jsxs)(r,{children:[(0,c.jsxs)(s,{children:[(0,c.jsx)(l,{children:"Blitz Rating: "}),(0,c.jsxs)(d,{children:[t.perfs.blitz.rating," "]})]}),(0,c.jsxs)(s,{children:[(0,c.jsx)(l,{children:"Puzzle Rating: "}),(0,c.jsxs)(d,{children:[t.perfs.puzzle.rating," "]})]})]}),!0===t.online?(0,c.jsx)(h,{children:" Currently Online "}):(0,c.jsxs)(x,{children:["Last Seen Online: ",m()(t.seenAt).endOf("second").fromNow()]})]})))}}const g=f,u=a.ZP.h1`
    font-family: 'Inter';
    font-size: 15px;
    color: ${t=>t.theme.textColor};
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 11px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 13px;
    }
`,w=a.ZP.h1`
    font-family: 'Inter';
    font-size: 27px;
    color: ${t=>t.theme.textColor};
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px){
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 16px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 20px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 24px;
    }
`,y=a.ZP.iframe`
    width: 90%;
    height: 95%;
    border: 1px solid #004495;
    margin: 0px;

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
    }
`,v=a.ZP.div`
    height: 65vh;

`;class b extends n.Component{constructor(){super(),this.state={data:[]}}componentDidMount(){fetch("https://lichess.org/api/user/danielwong4").then((t=>t.json())).then((t=>{console.log([t]),this.setState({data:[t]})}))}render(){return this.state.data.map((t=>(0,c.jsxs)("div",{children:[1===t.count.playing&&(0,c.jsxs)(v,{children:[(0,c.jsxs)(u,{children:["Currently playing with the ",String(t.playing).split("/")[4]," pieces. "]}),(0,c.jsx)(y,{src:`https://lichess.org/embed/${String(t.playing).split("/")[3]}?theme=blue&bg=light`})]}),0===t.count.playing&&(0,c.jsx)(v,{children:(0,c.jsx)(w,{children:"Currently not in game."})})]})))}}const j=b;var z=i(6152),k=i(9683);a.ZP.h1`
    font-family: 'Inter';
    font-size: 25px;
    margin: 0;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 400;
`;const P=a.ZP.div`
    position: relative;
    width: 95%;
    height: 70%;
    min-height: 260px;
    background-color: ${t=>t.theme.everyBackground};
`;z.kL.register(z.uw,z.f$,z.od,z.jn,z.Dx,z.u,z.De);class Z extends n.Component{constructor(){super(),this.state={x:[],y:[]}}componentDidMount(){fetch("https://lichess.org/api/user/danielwong4/rating-history").then((t=>t.json())).then((t=>{const e=t.find((t=>"Blitz"===t.name)).points,{labels:i,values:n}=function(t){if(!t||0===t.length)return{labels:[],values:[]};const e=[...t].sort(((t,e)=>m()({year:t[0],month:t[1],day:t[2]}).valueOf()-m()({year:e[0],month:e[1],day:e[2]}).valueOf())),i=m()({year:e[0][0],month:e[0][1],day:e[0][2]}).startOf("day"),n=m()({year:e[e.length-1][0],month:e[e.length-1][1],day:e[e.length-1][2]}).startOf("day"),a=[],o=[];let r=0;for(let s=i.clone();s.isSameOrBefore(n,"day");s.add(1,"day")){for(;r+1<e.length&&m()({year:e[r+1][0],month:e[r+1][1],day:e[r+1][2]}).startOf("day").isSameOrBefore(s,"day");)r+=1;a.push(s.format("YYYY-MM-DD")),o.push(e[r][3])}return{labels:a,values:o}}(e);this.setState({x:i,y:n})}))}render(){const{theme:t}=this.props,e=t.textColor||"#000",i="white"===e||"#fff"===e||"#ffffff"===e?"rgba(255,255,255,0.14)":"rgba(0,0,0,0.12)",n={labels:this.state.x,datasets:[{label:"Blitz Rating",data:this.state.y,borderColor:e,backgroundColor:e,tension:0,stepped:"before",pointRadius:0,pointHoverRadius:4,borderWidth:2,hitRadius:6}]},a={responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{legend:{labels:{color:e,font:{family:"Inter"}}},title:{display:!0,text:"Lichess Blitz Rating History",color:e,font:{family:"Inter",size:15}},tooltip:{titleFont:{family:"Inter"},bodyFont:{family:"Inter"}}},scales:{x:{title:{display:!0,text:"Date",color:e,font:{family:"Inter"}},ticks:{color:e,maxRotation:45,minRotation:0,autoSkip:!0,maxTicksLimit:12},grid:{color:i}},y:{title:{display:!0,text:"Rating",color:e,font:{family:"Inter"}},ticks:{color:e},grid:{color:i}}}};return(0,c.jsx)(P,{children:(0,c.jsx)(k.x1,{data:n,options:a})})}}const C=(0,a.Zz)(Z),$=a.ZP.div`
    background-color: ${t=>t.theme.everyBackground};
    display: flex;
    flex-direction: row;
    height: calc( 100vh - 66px);
    overflow-y: auto;
    position: relative;

    @media (max-width: 768px){
        height: calc( 100vh - 65px);
    }
`,I=a.ZP.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    @media (max-width: 768px){
        flex-direction: column;
    }
`,B=a.ZP.div`
    display: flex;
    margin-left: 4%;
    margin-top: 2%;
    flex-direction: column;
    text-align: left;
    width: 25%;

    @media (max-width: 768px){
        width: 93vw;
    }
`,R=a.ZP.p`
    font-family: 'Inter';
    font-size: 51px;
    color: ${t=>t.theme.textColor};
    margin: 0;
    transition: all 1.5s ease-in-out;
    margin-bottom: 5%;
    font-weight: 600;

    @media (max-width: 400px){
        font-size: 35px;
        margin-top: 10px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 40px;
        margin-top: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px){
        font-size: 45px;
        margin-top: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px){
        font-size: 48px;
        margin-top: 7px;
    }
`,S=a.ZP.a`
    font-family: 'Inter';
    font-size: 20px;
    display: flex;
    color: ${t=>t.theme.hyperLink};
    margin: 0;
    margin-left: 4%;
    margin-top: 30px;
    font-weight: 400;

    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        font-size: 15px;
        margin-top: 15px;
        margin-bottom: 30px;
    }


    
`,D=a.ZP.div`
    display: flex;
    text-align: left;
    width: 70%;
    flex-direction: column;
    margin-left: 5%;
    padding-right: 3%;

    @media (max-width: 768px){
        width: 93vw;
        margin-left: 3%;
        padding-right: 0%;
    }
`,O=a.ZP.div`
    overflow: hidden;
    background-color: ${t=>t.theme.everyBackground};
    margin-top: 3%;
`,F=a.ZP.button`
    cursor: pointer;
    width: 30%;
    font-family: 'Inter';
    font-size: 15px;
    position: relative;
    margin-right: 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-bottom: 4px;
    color: ${t=>t.theme.chessTabTextColor};

    border: ${t=>t.theme.chessTabBorder};
    background-color: ${t=>t.active?t.theme.chessCurrentTab:t.theme.chessTab};
    height: ${t=>t.active?"56px":"50px; top:6px"};

    :hover {
        background-color: ${t=>t.theme.chessCurrentTab};
    }

    @media (max-width: 600px){
        width: 32%;
        font-size: 11px;
        height: ${t=>t.active?"40px":"35px; top:5px"};
    }

    @media (min-width: 601px) and (max-width: 768px){
        width: 32%;
        font-size: 13px;
        height: ${t=>t.active?"52px":"46px; top:6px"};
    }


`,T=a.ZP.div`
    height: 65vh;
    ${t=>t.active?"":"display:none"}
`,L=a.ZP.iframe`
    width: 90%;
    height: 95%;
    border: ${t=>t.theme.chessFavGameBorder}; 
    margin: 0px;
    background-image: url(${t=>t.theme.chessFav});
    transition: all 1.5s ease-in-out;

    @media (max-width: 768px){
        width: 100%;
        height: 100%;
    }

`,M=a.ZP.h1`
    font-family: 'Inter';
    font-size: 15px;
    color: ${t=>t.theme.textColor};
    transition: all 1.5s ease-in-out;
    font-weight: 400;

    @media (max-width: 400px){
        font-size: 11px;
    }

    @media (min-width: 401px) and (max-width: 600px){
        font-size: 13px;
    }
`;const G=function(){const[t,e]=(0,n.useState)(0),i=i=>{const n=parseInt(i.target.id,0);n!==t&&e(n)},o=(0,a.Fg)();return(0,c.jsx)($,{children:(0,c.jsxs)(I,{children:[(0,c.jsxs)(B,{children:[(0,c.jsx)(R,{children:"Chess Stats"}),(0,c.jsx)(g,{}),(0,c.jsx)(S,{href:"https://lichess.org/@/danielwong4",target:"_blank",rel:"noopener noreferrer",children:" See Full Profile "})]}),(0,c.jsxs)(D,{children:[(0,c.jsxs)(O,{children:[(0,c.jsx)(F,{onClick:i,active:0===t,id:0,children:"Favorite Game"}),(0,c.jsx)(F,{onClick:i,active:1===t,id:1,children:"Live Game"}),(0,c.jsx)(F,{onClick:i,active:2===t,id:2,children:"Blitz Rating Graph"})]}),(0,c.jsx)(T,{active:1===t,children:(0,c.jsx)(j,{})}),(0,c.jsxs)(T,{active:0===t,children:[(0,c.jsx)(M,{children:"My most accurate game played according to engine: 0 inaccuracies, 0 mistakes, 0 blunders, and an average centipawn lost of 15."}),(0,c.jsx)(L,{src:o.chessFav})]}),(0,c.jsx)(T,{active:2===t,children:(0,c.jsx)(C,{})})]})]})})}}}]);
//# sourceMappingURL=44.5dd43fb4.chunk.js.map