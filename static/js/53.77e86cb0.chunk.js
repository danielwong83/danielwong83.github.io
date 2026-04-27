(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{9053:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>we});var a=t(2791),r=t(5751);const n=`url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="20" height="14"><rect width="20" height="14" fill="#5c5248"/><rect x="5.05" y="2.75" width="9.9" height="8.5" rx="1.35" fill="#020100"/><rect x="5.05" y="2.9" width="9.9" height="2.15" rx="0.55" fill="#4a3f38" opacity="0.55"/><rect x="5.2" y="3.05" width="9.6" height="0.9" rx="0.35" fill="#8a7b6e" opacity="0.14"/><rect x="5.35" y="9.85" width="9.3" height="1.05" rx="0.35" fill="#1a1410" opacity="0.65"/></svg>')}")`,o=r.ZP.div`
    background-color: ${e=>e.theme.everyBackground};
    background-image: url(${e=>e.theme.homeBackgroundImage});
    display: flex;
    flex-direction: row;
    height: calc(100vh - 66px);
    overflow-y: auto;
    position: relative;

    @media (max-width: 768px) {
        height: calc(100vh - 65px);
    }
`,s=r.ZP.div`
    display: flex;
    position: relative;
    margin: 0 px;
    margin-top: 2%;
    margin-bottom: 10px;
    flex-direction: column;
    align-items: center;
    text-align: left;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    min-width: 0;
`,d=r.ZP.div`
    display: flex;
    margin-top: 0;
    margin-bottom: 28px;
    flex-direction: column;
    text-align: left;
    width: 80%;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    min-width: 0;

    @media (max-width: 768px) {
        width: 80%;
        max-width: 80%;
    }
`,x=r.ZP.div`
    display: flex;
    justify-content: center;
    width: 100%;
`,p=r.ZP.div`
    display: flex;
    flex-direction: column;
    background: ${e=>e.theme.projectDiv};
    width: 100%;
    max-width: 100%;
    min-width: 0;
    border-radius: 25px;
    padding: 22px 28px 26px 28px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding: 18px 20px 22px 20px;
    }
`,h=(0,r.ZP)(p)`
    text-align: left;

    & > p:first-of-type {
        margin-top: 0;
    }
`,l=(0,r.ZP)(p)`
    position: relative;
    overflow: visible;
`,c=r.ZP.section`
    width: 80%;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 36px;
    box-sizing: border-box;
    min-width: 0;
`,m=r.ZP.div`
    display: flex;
    justify-content: center;
    width: 100%;
`,g=(r.ZP.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: min(55vh, 520px);
    contain: paint;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,r.ZP.div`
    width: 100%;
    min-width: 0;
    max-width: 100%;
    box-sizing: border-box;
`),f=r.ZP.div`
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-x: contain;
    overscroll-behavior-y: auto;
    touch-action: pan-x pinch-zoom;
    scrollbar-width: thin;
    scrollbar-color: ${e=>"white"===e.theme.textColor?"rgba(255, 255, 255, 0.22)":"rgba(0, 0, 0, 0.18)"}
        transparent;

    background: transparent;

    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
        border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${e=>"white"===e.theme.textColor?"rgba(255, 255, 255, 0.22)":"rgba(0, 0, 0, 0.18)"};
        border-radius: 4px;
    }
`,b=r.ZP.div`
    display: inline-flex;
    flex-direction: column;
    width: max-content;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        #6b5e52 0%,
        #4a4038 6%,
        #2a221c 18%,
        #1a1510 50%,
        #221c18 82%,
        #3d3530 94%,
        #524840 100%
    );
    box-shadow:
        0 1px 0 rgba(255, 245, 230, 0.09) inset,
        0 -1px 0 rgba(0, 0, 0, 0.35) inset,
        0 12px 28px rgba(0, 0, 0, ${e=>"white"===e.theme.textColor?.52:.18}),
        0 2px 4px rgba(0, 0, 0, 0.25),
        0 0 0 1px rgba(20, 15, 10, 0.65);
    user-select: none;

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        border-radius: inherit;
        opacity: 0.07;
        background-image: repeating-radial-gradient(
            circle at 13% 27%,
            rgba(255, 255, 255, 0.09) 0,
            rgba(255, 255, 255, 0.09) 0.5px,
            transparent 0.6px,
            transparent 2.5px
        );
        mix-blend-mode: overlay;
    }
`,w=r.ZP.div`
    height: 14px;
    width: 100%;
    flex-shrink: 0;
    background-color: #4d433a;
    background-image: ${n};
    background-size: 20px 14px;
    background-repeat: repeat-x;
    background-position: 0 0;
    box-shadow: ${e=>e.$isBottom?"inset 0 -3px 5px rgba(0, 0, 0, 0.5),\n           inset 0 1px 0 rgba(255, 248, 238, 0.06),\n           0 -1px 0 rgba(0, 0, 0, 0.35)":"inset 0 3px 5px rgba(0, 0, 0, 0.5),\n           inset 0 -1px 0 rgba(255, 248, 238, 0.06),\n           0 1px 0 rgba(0, 0, 0, 0.35)"};
`,u=r.ZP.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    background: linear-gradient(
        180deg,
        #2c241c 0%,
        #18120e 45%,
        #1c1612 55%,
        #262018 100%
    );
    box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.35);
`,j=r.ZP.div`
    flex: 0 0 auto;
    width: 198px;
    box-sizing: border-box;
    padding: 8px 7px;
    position: relative;
    z-index: 1;
    transform-origin: center center;
    transition: transform 0.4s cubic-bezier(0.33, 1.4, 0.64, 1), z-index 0s;

    &:hover {
        transform: scale(1.05);
        z-index: 4;
    }

    &:hover img[data-film-grayscale='true'] {
        filter: none;
    }

    @media (max-width: 480px) {
        width: 166px;
        padding: 6px 5px;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
        &:hover {
            transform: none;
        }
    }
`,P=r.ZP.div`
    width: 100%;
    overflow: hidden;
    border-radius: 1px;
    aspect-ratio: 2 / 3;
    background: #030201;
    box-shadow:
        inset 0 0 28px rgba(0, 0, 0, 0.6);
`,v=r.ZP.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    filter: none;
    transition: filter 0.35s ease;

    &[data-film-grayscale='true'] {
        filter: grayscale(100%);
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }
`,y=r.ZP.div`
    margin: 0 0 18px 0;
    width: 100%;
    box-sizing: border-box;
`,G=r.ZP.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        gap: 6px;
    }
`,J=r.ZP.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    flex: 1;
    min-width: 0;

    @media (max-width: 768px) {
        gap: 6px;
    }
`,k=r.ZP.button`
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    box-sizing: border-box;
    background: conic-gradient(
        from 40deg,
        hsl(350, 88%, 58%),
        hsl(45, 95%, 52%),
        hsl(95, 72%, 46%),
        hsl(195, 82%, 48%),
        hsl(265, 78%, 58%),
        hsl(320, 82%, 54%),
        hsl(350, 88%, 58%)
    );
    box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.18),
        0 1px 3px rgba(0, 0, 0, 0.22),
        inset 0 0 0 1px rgba(255, 255, 255, 0.28);
    filter: ${e=>e.$grayscaleOn?"grayscale(1)":"none"};
    opacity: ${e=>e.$grayscaleOn?.82:1};
    transition: filter 0.3s ease, opacity 0.3s ease, transform 0.15s ease;

    &:hover {
        transform: scale(1.08);
    }

    &:active {
        transform: scale(0.95);
    }

    &:focus-visible {
        outline: 2px solid ${e=>e.theme.hyperLink};
        outline-offset: 3px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @media (prefers-reduced-motion: reduce) {
        transition: none;
        &:hover {
            transform: none;
        }
        &:active {
            transform: none;
        }
    }

    @media (max-width: 768px) {
        width: 22px;
        height: 22px;
    }
`,z=r.ZP.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: ${e=>e.$active?600:500};
    color: ${e=>e.theme.textColor};
    padding: 0.35rem 1.1rem;
    min-height: 36px;
    border-radius: 13px;
    box-sizing: border-box;
    margin: 0;
    line-height: 1.2;
    background: ${e=>e.$active?e.theme.projectDiv:"transparent"};
    border: 1px solid
        ${e=>e.$active?"transparent":`${e.theme.hyperLink}45`};
    transition: background 0.2s ease, border-color 0.2s ease, font-weight 0.15s ease;

    &:hover {
        background: ${e=>e.theme.projectDiv};
    }

    &:focus-visible {
        outline: 2px solid ${e=>e.theme.hyperLink};
        outline-offset: 2px;
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }

    @media (max-width: 768px) {
        font-size: 12px;
        padding: 0.28rem 0.75rem;
        min-height: 30px;
        border-radius: 10px;
    }

    @media (max-width: 480px) {
        font-size: 11px;
        padding: 0.22rem 0.62rem;
        min-height: 28px;
        border-radius: 9px;
    }
`,Z=r.ZP.p`
    font-family: 'Inter';
    font-size: 15px;
    color: ${e=>e.theme.textColor};
    opacity: 0.85;
    margin: 8px 0 0 0;
    text-align: center;
`,$=r.ZP.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 1fr;
    align-items: stretch;
    gap: 24px;
    justify-content: start;
    width: 80%;
    max-width: 80%;
    box-sizing: border-box;
    min-width: 0;
`,_=(0,r.ZP)($)`
    margin: 0px auto 24px;
`,C=r.ZP.div`
    display: flex;
    flex-direction: column;
    background: ${e=>e.theme.projectDiv};
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 25px;
    margin-bottom: 0;
    height: auto;
    align-items: stretch;
    padding: 12px 16px;
    overflow: hidden;
    min-height: 320px;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 1 100%;
        max-width: 100%;
        min-width: 0;
        width: 100%;
        padding: 12px 10px;
        min-height: auto;
    }
`,A=(0,r.ZP)(C)`
    background: linear-gradient(135deg, #f7df9c 0%, #f5c56b 35%, #f0ad1f 65%, #ffdc73 100%);
    border: 1px solid rgba(0,0,0,0.08);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.25), 0 4px 12px rgba(0,0,0,0.06);
    color: ${e=>e.theme.textColor};
    text-shadow: 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.25);

    @media (max-width: 768px) {
        min-height: 0;
    }
`,I=r.ZP.div`
    display: flex;
    position: relative;
    text-align: left;
    flex-direction: column;
    flex: 1 1 0%;
    min-width: 0;
    padding: 8px 12px 16px 12px;
    justify-content: flex-start;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex: none;
        width: 100%;
        padding-left: 5%;
        padding-right: 4%;
    }
`,O=(0,r.ZP)($)`
    margin: 0 auto;
    padding-bottom: 40px;
`,S=r.ZP.div`
    display: flex;
    height: 160px;
    width: 100%;
    max-width: 100%;
    margin: 12px 0 8px 0;
    border-radius: 12px;
    color: ${e=>e.theme.textColor};
    font-weight: 700;
    align-items: center;
    justify-content: center;
    font-family: 'Policing Market';
    font-size: 40px;
    box-sizing: border-box;
    padding: 8px;

    @media (max-width: 768px) {
        height: 90px;
        font-size: 28px;
    }
`,D=r.ZP.h1`
    font-family: 'Inter';
    font-size: 51px;
    font-weight: 600;
    color: ${e=>e.theme.textColor};
    margin: 0;
    padding-left: 0;
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px) {
        font-size: 35px;
        margin-top: 10px;
    }

    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 40px;
        margin-top: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px) {
        font-size: 45px;
        margin-top: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        font-size: 48px;
        margin-top: 7px;
    }
`,N=(0,r.ZP)(D)`
    margin-bottom: 24px;
`,M=r.ZP.p`
    font-family: 'Inter';
    font-size: 51px;
    color: ${e=>e.theme.textColor};
    margin: 0;
    padding-left: 0;
    transition: all 1.5s ease-in-out;
    font-weight: 600;

    @media (max-width: 400px) {
        font-size: 35px;
        margin-top: 10px;
    }

    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 40px;
        margin-top: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px) {
        font-size: 45px;
        margin-top: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        font-size: 48px;
        margin-top: 7px;
    }
`,L=(0,r.ZP)(M)`
    margin-bottom: 22px;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 80%;
    box-sizing: border-box;
`,B=r.ZP.p`
    font-family: 'Inter';
    font-size: 21px;
    color: ${e=>e.theme.textColor};
    margin-top: 10px;
    margin-bottom: 10px;
    transition: all 1.5s ease-in-out;

    font-style: ${e=>e.italic?"italic":"normal"};
    font-weight: ${e=>e.bold?"bold":"normal"};

    @media (max-width: 400px) {
        font-size: 12px;
        margin-top: 8px;
    }

    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 14px;
        margin-top: 8px;
    }

    @media (min-width: 601px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        font-size: 18px;
    }
`,F=r.ZP.p`
    font-family: 'Inter';
    font-size: 21px;
    color: ${e=>e.theme.textColor};
    margin-top: 0px;
    margin-bottom: 10px;
    margin-left: 10px;
    transition: all 1.5s ease-in-out;

    @media (max-width: 400px) {
        font-size: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 14px;
    }

    @media (min-width: 601px) and (max-width: 768px) {
        font-size: 16px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        font-size: 18px;
    }
`,T=r.ZP.p`
    font-family: 'Inter';
    opacity: 1;
    font-size: 24px;
    color: ${e=>e.theme.textColor};
    text-align: left;
    margin-top: 8px;
    margin-bottom: 12px;
    font-weight: 600;

    transition: all 1.5s ease-in-out;
    width: 100%;
    white-space: normal;
    word-break: break-word;

    @media (max-width: 400px) {
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 10px;
        white-space: normal;
    }

    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 601px) and (max-width: 768px) {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 10px;
        white-space: normal;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        font-size: 20px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        font-size: 26px;
    }
`,U=r.ZP.p`
    font-family: 'Inter';
    font-size: 19px;
    color: ${e=>e.theme.textColor};
    margin: 0px;
    margin-top: 0px;
    margin-bottom: 15px;
    padding-right: 20px;
    display: flex;

    transition: all 1.5s ease-in-out;

    @media (max-width: 400px) {
        font-size: 9px;
        margin-bottom: 12px;
    }

    @media (min-width: 401px) and (max-width: 600px) {
        font-size: 10px;
        margin-bottom: 12px;
    }

    @media (min-width: 601px) and (max-width: 768px) {
        font-size: 12px;
        margin-bottom: 12px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        font-size: 14px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        font-size: 16px;
    }
`,V=(0,r.ZP)(U)`
    font-style: italic;
`,E=r.ZP.img`
    display: block;
    height: 160px;
    width: auto;
    max-width: 90%;
    margin: 18px auto 8px auto;
    object-fit: contain;
    transition: all 1.5s ease-in-out;
`,R=(0,r.ZP)(E)`
    @media (max-width: 768px) {
        height: 120px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        height: 160px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        height: 160px;
    }
`,Y=(0,r.ZP)(E)`
    @media (max-width: 768px) {
        height: 110px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        height: 110px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        height: 150px;
    }
`,H=(0,r.ZP)(E)`
    @media (max-width: 768px) {
        height: 110px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        height: 110px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        height: 150px;
    }
`,W=(0,r.ZP)(E)`
    @media (max-width: 768px) {
        height: 110px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        height: 110px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        height: 150px;
    }
`,q=(0,r.ZP)(E)`
    @media (max-width: 768px) {
        height: 120px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    @media (min-width: 769px) and (max-width: 1000px) {
        height: 120px;
    }

    @media (min-width: 1001px) and (max-width: 1350px) {
        height: 150px;
    }
`,K=r.ZP.img`
    display: block;
    height: 160px;
    width: auto;
    max-width: 90%;
    margin: 18px auto 8px auto;
    object-fit: contain;
    box-sizing: border-box;

    @media (max-width: 768px) {
        height: 120px;
    }
`,Q=r.ZP.a`
    display: flex;
    text-decoration: None;
    color: ${e=>e.theme.textColor};

    transition: all 1.5s ease-in-out;
`,X=JSON.parse('{"0001.JPG":["people","nature"],"0002.JPG":["objects"],"0003.JPG":["nature"],"0004.JPG":["people","nature"],"0005.JPG":["objects"],"0006.JPG":["nature"],"0007.JPG":["people","objects"],"0008.JPG":["people","nature"],"0009.JPG":["animals"],"0010.JPG":["objects"],"0011.JPG":["objects"],"0012.JPG":["objects"],"0013.JPG":["nature"],"0014.JPG":["nature"],"0015.JPG":["people"],"0016.JPG":["objects"],"0017.JPG":["objects"],"0018.JPG":["people","nature"],"1357.JPG":["people"],"1547.JPG":["objects"],"2038.JPG":["objects","nature"],"2826.JPG":["animals"],"3260.JPG":["people","objects"]}');const ee=t.p+"static/media/blackjack.9f28c9c3386478704065beaf87d08b9b.svg";const ie=t.p+"static/media/dashboard.0d11cdd7e27907b1b7a3859d5d8b145c.svg";const te=t.p+"static/media/football.e80026b620a71d68c02f59c2632d4514.svg";const ae=t.p+"static/media/webscraping.44164dab492378c975021879c3bcb1e5.svg";const re=t.p+"static/media/maze.854045791bca60d6eeb1e3f9ec6c5718.svg";const ne=t.p+"static/media/chess-board.8ff910bcd8e57ae9e1f7922c1688665d.svg";var oe=t(2318),se=t(9660),de=t(934),xe=t(184);const pe="https://sndw1.shinyapps.io/dashboard/",he="https://github.com/danielwong83/blackjack",le="https://github.com/danielwong83/yahoo_finance_scraper",ce="https://github.com/danielwong83/maze_game",me=t(7590),ge=me.keys().sort().map((e=>({fileName:e.replace(/^\.\//,""),src:me(e)}))),fe=[{id:"nature",label:"Nature"},{id:"people",label:"People"},{id:"animals",label:"Animals"},{id:"objects",label:"Objects"}],be=()=>{const e=(0,a.useRef)(null),[i,t]=(0,a.useState)(null),[r,n]=(0,a.useState)(!1),o=(0,a.useMemo)((()=>null==i?ge:ge.filter((e=>{const t=X[e.fileName];return Array.isArray(t)&&t.includes(i)}))),[i]),s=(0,a.useCallback)((e=>{t((i=>i===e?null:e))}),[]);(0,a.useLayoutEffect)((()=>{const i=e.current;i&&(i.scrollLeft=0,i.scrollTop=0)}),[i]);const d=Math.min(o.length,12),x=e=>{e.preventDefault()};return(0,xe.jsxs)(c,{"aria-label":"Film photography gallery",children:[(0,xe.jsx)(y,{role:"group","aria-label":"Photo categories",children:(0,xe.jsxs)(G,{children:[(0,xe.jsx)(J,{children:fe.map((e=>{const t=i===e.id;return(0,xe.jsx)(z,{type:"button",$active:t,"aria-pressed":t,onClick:()=>s(e.id),children:e.label},e.id)}))}),(0,xe.jsx)(k,{type:"button","aria-label":r?"Show film strip in color":"Show film strip in grayscale","aria-pressed":r,$grayscaleOn:r,onClick:()=>n((e=>!e))})]})}),(0,xe.jsx)(m,{children:(0,xe.jsx)(l,{children:0===o.length?(0,xe.jsx)(Z,{children:"No photos match this category yet. Choose another category, clear the selection, or add labels in src/data/filmCategories.json."}):(0,xe.jsx)(g,{children:(0,xe.jsx)(f,{ref:e,children:(p=o,h=d,$=r,(0,xe.jsxs)(b,{onContextMenu:x,children:[(0,xe.jsx)(w,{"aria-hidden":!0}),(0,xe.jsx)(u,{"data-film-strip-frames":!0,children:p.map(((e,i)=>{let{src:t,fileName:a}=e;return(0,xe.jsx)(j,{children:(0,xe.jsx)(P,{onContextMenu:x,children:(0,xe.jsx)(v,{src:t,alt:"","data-film-grayscale":$?"true":void 0,loading:i<h?"eager":"lazy",draggable:!1,onDragStart:x})})},a)}))}),(0,xe.jsx)(w,{"aria-hidden":!0,$isBottom:!0})]}))})})})})]});var p,h,$},we=()=>(0,xe.jsx)(o,{children:(0,xe.jsxs)(s,{children:[(0,xe.jsxs)(d,{children:[(0,xe.jsx)(N,{children:"About Me"}),(0,xe.jsx)(x,{children:(0,xe.jsxs)(h,{children:[(0,xe.jsx)(B,{bold:!0,children:"Services I Offer (use at your own risk):"}),(0,xe.jsxs)(F,{children:["\u2022"," Wedding Photography on Film"]}),(0,xe.jsxs)(F,{children:["\u2022"," Disney+ Show Recommendations"]}),(0,xe.jsx)(B,{italic:!0,children:"Contact Info on Home Page"})]})})]}),(0,xe.jsx)(L,{children:"Captured on Film"}),(0,xe.jsx)(be,{}),(0,xe.jsx)(L,{children:"Projects"}),(0,xe.jsxs)(_,{children:[(0,xe.jsxs)(A,{children:[(0,xe.jsx)(Q,{href:"/",children:(0,xe.jsx)(R,{src:de})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/",children:"Tennis Arbitrage"})}),(0,xe.jsx)(V,{children:"No Description Available"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/",children:(0,xe.jsx)(R,{src:se})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/",children:" Systematic Spread Trading in the NBA Betting Market"})}),(0,xe.jsx)(U,{children:"To create a prediction model that can calculate the spread between two teams. "})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/",children:(0,xe.jsx)(Y,{src:te})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/",children:"Football xG Modelling + Betting"})}),(0,xe.jsxs)(U,{children:["To find the expected goals scored per football match, and using the results to bet on Over/Under 2.5 goal prop."," "]})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:ce,target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)(Y,{src:re})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:ce,target:"_blank",rel:"noopener noreferrer",children:"Maze Memory Game"})}),(0,xe.jsx)(U,{children:"A game where you have to have to memorize the path process to reach the finishing point. "})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:pe,target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)(H,{src:ie})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:pe,target:"_blank",rel:"noopener noreferrer",children:"Actuarial Dashboard"})}),(0,xe.jsx)(U,{children:"A dashboard with relevant actuarial statistics for the life insurance industry, including mortality and critical illness data."})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:le,target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)(W,{src:ae})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:le,target:"_blank",rel:"noopener noreferrer",children:"Yahoo Finance Scraper"})}),(0,xe.jsx)(U,{children:"A tool that scrapes Yahoo Finance and finds current and historic prices of financial derivatives, and data can be exported to an excel."})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:he,target:"_blank",rel:"noopener noreferrer",children:(0,xe.jsx)(q,{src:ee})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:he,target:"_blank",rel:"noopener noreferrer",children:"BlackJack (4 Players)"})}),(0,xe.jsx)(U,{children:"A recreation of the famous casino game, and one of my first code where OOP was utilised."})]})]})]}),(0,xe.jsx)(L,{children:"Pages"}),(0,xe.jsxs)(O,{children:[(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/home_vers_1",children:(0,xe.jsx)(S,{children:"V1.0"})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/home_vers_1",children:"Landing Page"})}),(0,xe.jsx)(U,{children:"Stickman"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/home_vers_2",children:(0,xe.jsx)(S,{children:"V2.0"})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/home_vers_2",children:"Landing Page"})}),(0,xe.jsx)(U,{children:"Index Card"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/home_vers_3",children:(0,xe.jsx)(S,{children:"V2.1"})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/home_vers_3",children:"Landing Page"})}),(0,xe.jsx)(U,{children:"Name Card"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/home_vers_4",children:(0,xe.jsx)(S,{children:"V3.0.1"})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/home_vers_4",children:"Landing Page"})}),(0,xe.jsx)(U,{children:"Say hi?"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/chelsea_21_22",children:(0,xe.jsx)(K,{src:oe.Z})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/chelsea_21_22",children:"Chelsea 2021-2022"})}),(0,xe.jsx)(U,{children:"Drag Around"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/chelsea",children:(0,xe.jsx)(K,{src:oe.Z})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/chelsea",children:"Chelsea"})}),(0,xe.jsx)(U,{children:"my team tactics"})]})]}),(0,xe.jsxs)(C,{children:[(0,xe.jsx)(Q,{href:"/#/chess",children:(0,xe.jsx)(K,{src:ne})}),(0,xe.jsxs)(I,{children:[(0,xe.jsx)(T,{children:(0,xe.jsx)(Q,{href:"/#/chess",children:"Chess"})}),(0,xe.jsx)(U,{children:"my chess journey"})]})]})]})]})})},7590:(e,i,t)=>{var a={"./0001.JPG":925,"./0002.JPG":98,"./0003.JPG":8786,"./0004.JPG":2822,"./0005.JPG":8724,"./0006.JPG":2828,"./0007.JPG":655,"./0008.JPG":5326,"./0009.JPG":5265,"./0010.JPG":5703,"./0011.JPG":6619,"./0012.JPG":3076,"./0013.JPG":0,"./0014.JPG":7415,"./0015.JPG":8895,"./0016.JPG":2743,"./0017.JPG":2686,"./0018.JPG":2457,"./1357.JPG":2048,"./1547.JPG":2808,"./2038.JPG":365,"./2826.JPG":6041,"./3260.JPG":4339};function r(e){var i=n(e);return t(i)}function n(e){if(!t.o(a,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=n,e.exports=r,r.id=7590},925:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0001.25f7f33edd2b01e0a46d.JPG"},98:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0002.13c34007042f824051d5.JPG"},8786:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0003.4fffbe570de62b5cb152.JPG"},2822:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0004.4522aac739444e5c35a2.JPG"},8724:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0005.53ebc49c970b3c5251b1.JPG"},2828:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0006.9f662403ed7411e5a977.JPG"},655:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0007.bba127ea4d7e8a4e9167.JPG"},5326:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0008.a1dc23e4572d07624c2a.JPG"},5265:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0009.bc3a54f4f123078df1d5.JPG"},5703:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0010.d42f05fb271ddbcc7a6d.JPG"},6619:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0011.1b56b9eb19e6b8baa0d9.JPG"},3076:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0012.3044e24502289d4ae62f.JPG"},0:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0013.e73705f6f757dcf353c7.JPG"},7415:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0014.8829d7d240ce10dfc88d.JPG"},8895:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0015.ff702ab5e5b6b6b116f0.JPG"},2743:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0016.7c2c1f1131540bd2a798.JPG"},2686:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0017.0ef58f50c22df630353b.JPG"},2457:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/0018.bf195692548637be4fb1.JPG"},2048:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/1357.eea7d0d20eea07fe0f5b.JPG"},2808:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/1547.3e82826a8c4af5237ed3.JPG"},365:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/2038.264c142de9cc8d8416a9.JPG"},6041:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/2826.033f9e277d754c506da7.JPG"},4339:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/3260.5f9c720a2595b3d90077.JPG"},9660:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/nba.fb65b6aa3a203cca2dd7.png"},934:(e,i,t)=>{"use strict";e.exports=t.p+"static/media/tennis.be0db9560c1a48e2683a.png"}}]);
//# sourceMappingURL=53.77e86cb0.chunk.js.map