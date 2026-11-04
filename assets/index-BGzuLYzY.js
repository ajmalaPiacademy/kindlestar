var us=Object.defineProperty;var fs=(n,t,e)=>t in n?us(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>fs(n,typeof t!="symbol"?t+"":t,e);import{O as Ze,S as he,P as Xt,R as vt,V as Et,a as mt,W as Te,L as Fe,H as ts,M as bt,I as de,b as ue,c as lt,C as St,d as Ae,D as yt,B as es,e as Wt,f as ss,g as ps,E as ms,U as gs,h as vs,i as xs,j as ys}from"./three-BEZrlTT0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const Ge=[[[0,7,12,16],[5,12,16,21],[3,10,15,19],[-2,5,10,14]],[[2,9,14,17],[7,14,19,22],[5,12,17,21],[0,7,12,16]],[[0,7,14,15],[-4,3,10,12],[-2,5,12,14],[3,10,15,19]],[[5,12,16,19],[0,7,14,16],[9,16,19,24],[7,14,17,21]],[[-3,4,9,12],[2,9,12,16],[0,7,11,16],[5,9,12,19]],[[0,7,12,19],[5,12,17,21],[7,14,19,23],[3,10,15,22]],[[-5,2,7,11],[0,7,11,14],[-3,4,9,12],[2,9,14,17]],[[0,3,7,10],[-4,3,8,12],[-2,5,10,13],[-7,0,5,8]],[[0,7,12,16],[4,11,16,19],[9,16,21,24],[5,12,17,21]]],Zt=[0,2,4,7,9,12,14,16,19,21,24],bs=110,F=n=>bs*Math.pow(2,n/12);class ks{constructor(){l(this,"ctx",null);l(this,"master");l(this,"sfx");l(this,"music");l(this,"verb");l(this,"noise");l(this,"boostGain");l(this,"boostFilter");l(this,"holeGain");l(this,"tensionGain");l(this,"droneOsc",[]);l(this,"nextBar",0);l(this,"bar",0);l(this,"nextBell",0);l(this,"lastDust",0);l(this,"stage",0);l(this,"danger",0);l(this,"musicOn",!0);l(this,"sfxOn",!0);l(this,"volume",.8);l(this,"muted",!1);l(this,"paused",!1)}unlock(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const s=e.createDynamicsCompressor();s.threshold.value=-14,s.ratio.value=4,s.connect(e.destination),this.master=e.createGain(),this.master.connect(s),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master);const i=e.createConvolver(),o=Math.floor(e.sampleRate*3.2),a=e.createBuffer(2,o,e.sampleRate);for(let f=0;f<2;f++){const b=a.getChannelData(f);for(let L=0;L<o;L++)b[L]=(Math.random()*2-1)*Math.pow(1-L/o,3.2)}i.buffer=a,this.verb=e.createGain(),this.verb.gain.value=.5,this.verb.connect(i).connect(this.master),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const r=this.noise.getChannelData(0);for(let f=0;f<r.length;f++)r[f]=Math.random()*2-1;const c=this.loopNoise();this.boostFilter=e.createBiquadFilter(),this.boostFilter.type="bandpass",this.boostFilter.frequency.value=700,this.boostFilter.Q.value=.8,this.boostGain=e.createGain(),this.boostGain.gain.value=0,c.connect(this.boostFilter).connect(this.boostGain).connect(this.sfx);const h=this.loopNoise(),d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=120,this.holeGain=e.createGain(),this.holeGain.gain.value=0,h.connect(d).connect(this.holeGain).connect(this.sfx);const u=e.createGain();u.gain.value=.07;const m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=400,u.connect(m).connect(this.music),m.connect(this.verb);for(const f of[-6,5]){const b=e.createOscillator();b.type="sawtooth",b.frequency.value=F(-12),b.detune.value=f,b.connect(u),b.start(),this.droneOsc.push(b)}const p=e.createOscillator();p.type="square",p.frequency.value=F(-12);const k=e.createBiquadFilter();k.type="lowpass",k.frequency.value=300;const P=e.createOscillator();P.frequency.value=4;const v=e.createGain();v.gain.value=.5;const y=e.createGain();y.gain.value=.5,P.connect(v).connect(y.gain),this.tensionGain=e.createGain(),this.tensionGain.gain.value=0,p.connect(k).connect(y).connect(this.tensionGain).connect(this.music),p.start(),P.start(),this.nextBar=e.currentTime+.1,this.nextBell=e.currentTime+1,this.apply()}loopNoise(){const t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t.start(),t}apply(){if(!this.ctx)return;const t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted||this.paused?0:this.volume,t,.08),this.sfx.gain.setTargetAtTime(this.sfxOn?.85:0,t,.05),this.music.gain.setTargetAtTime(this.musicOn?.55:0,t,.3)}setStage(t){this.stage=Math.max(0,Math.min(Ge.length-1,t))}update(t,e,s){const i=this.ctx;if(!i)return;const o=i.currentTime;this.boostGain.gain.setTargetAtTime(t?.16:0,o,t?.05:.15),this.boostFilter.frequency.setTargetAtTime(t?1100:600,o,.2),this.holeGain.gain.setTargetAtTime(Math.min(.6,e*.6),o,.3),this.danger+=(s-this.danger)*.05,this.tensionGain.gain.setTargetAtTime(this.musicOn?this.danger*.05:0,o,.4),this.schedule()}schedule(){const e=this.ctx.currentTime;if(this.paused){this.nextBar=Math.max(this.nextBar,e+.2);return}const s=Ge[this.stage];for(;this.nextBar<e+.3;){const o=s[this.bar%s.length],a=this.nextBar;for(const r of o)this.pad(F(r),a,4.6,.028);for(const r of this.droneOsc)r.frequency.setTargetAtTime(F(o[0]-12),a,.8);if(this.stage>=3&&this.pad(F(o[0]-12),a,4.4,.03,"triangle"),this.stage>=5)for(let r=0;r<8;r++)this.bell(F(o[r%o.length]+12),a+r*.5,.012,.6);this.bar++,this.nextBar+=4}const i=2.6-Math.min(1.6,this.stage*.22);for(;this.nextBell<e+.3;){const a=s[this.bar%s.length][0]+12+Zt[Math.floor(Math.random()*7)];(this.stage>=1||Math.random()<.5)&&this.bell(F(a),this.nextBell,.035,2.4),this.nextBell+=i*(.6+Math.random()*.8)}}pad(t,e,s,i,o="sawtooth"){const a=this.ctx,r=a.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(i,e+1.4),r.gain.setValueAtTime(i,e+s-1.6),r.gain.linearRampToValueAtTime(1e-4,e+s);const c=a.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(500+this.stage*120,e),c.Q.value=.6,r.connect(c),c.connect(this.music),c.connect(this.verb);for(const h of[-9,0,8]){const d=a.createOscillator();d.type=o,d.frequency.value=t,d.detune.value=h,d.connect(r),d.start(e),d.stop(e+s+.1)}}bell(t,e,s,i){const o=this.ctx,a=o.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(this.music),a.connect(this.verb);for(const[r,c]of[[1,1],[2.01,.35],[3,.12]]){const h=o.createOscillator();h.type="sine",h.frequency.value=t*r;const d=o.createGain();d.gain.value=c,h.connect(d).connect(a),h.start(e),h.stop(e+i+.05)}}tone(t,e,s,i,o=0,a=0,r=.3){const c=this.ctx;if(!c||!this.sfxOn)return;const h=c.currentTime+o,d=c.createOscillator();d.type=s,d.frequency.setValueAtTime(t,h),a&&d.frequency.exponentialRampToValueAtTime(Math.max(20,t*a),h+e);const u=c.createGain();if(u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(i,h+.008),u.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u),u.connect(this.sfx),r>0){const m=c.createGain();m.gain.value=r,u.connect(m).connect(this.verb)}d.start(h),d.stop(h+e+.05)}hiss(t,e,s,i=0,o="lowpass",a=0){const r=this.ctx;if(!r||!this.sfxOn)return;const c=r.currentTime+i,h=r.createBufferSource();h.buffer=this.noise;const d=r.createBiquadFilter();d.type=o,d.frequency.setValueAtTime(e,c),a&&d.frequency.exponentialRampToValueAtTime(Math.max(30,e*a),c+s);const u=r.createGain();u.gain.setValueAtTime(t,c),u.gain.exponentialRampToValueAtTime(1e-4,c+s),h.connect(d).connect(u).connect(this.sfx);const m=r.createGain();m.gain.value=.3,u.connect(m).connect(this.verb),h.start(c,Math.random()*1.5),h.stop(c+s+.05)}click(){this.tone(1400,.05,"sine",.06,0,.7,0)}event(t){if(this.ctx)switch(t.t){case"eat":{if(t.who!=="player"){t.who==="hole"&&this.hiss(.05,300,.6,0,"lowpass",.3);break}const e=Math.min(Zt.length-1,Math.max(0,t.combo-1)),s=F(24+Zt[e]);this.tone(s,.25,"sine",.11,0,1.02),this.tone(s*1.5,.18,"triangle",.04,.03),this.tone(140+Math.random()*30,.16,"sine",.12,0,.5,0);break}case"dust":{const e=this.ctx.currentTime;if(e-this.lastDust<.05)break;this.lastDust=e,this.tone(F(36+Zt[Math.floor(Math.random()*6)]),.07,"sine",.02,0,1,.5);break}case"collect":t.kind==="gold"?[0,4,7,12].forEach((e,s)=>this.tone(F(36+e),.3,"triangle",.06,s*.05)):[0,7,12,19].forEach((e,s)=>this.tone(F(28+e),.35,"sine",.07,s*.06,1.01));break;case"stage":[0,7,12,16,19,24].forEach((e,s)=>this.tone(F(12+e),2.2,"triangle",.05,s*.07,1,.8)),this.hiss(.08,2e3,1.6,0,"highpass",.3);break;case"hit":this.tone(90,.4,"sine",.3,0,.4,.2),this.hiss(.18,900,.35,0,"lowpass",.3);break;case"bump":this.tone(120,.15,"sine",.08*Math.min(2,t.strength),0,.6,0);break;case"shieldBlock":this.tone(900,.12,"triangle",.05,0,1.5);break;case"novaWarn":for(let e=0;e<4;e++)this.tone(660+e*110,.12,"square",.035,e*1.1,1,.2);this.tone(55,4.4,"sawtooth",.04,0,2.5,.4);break;case"novaBlast":this.tone(48,1.8,"sine",.4,0,.5,.5),this.hiss(.35,1400,2.2,0,"lowpass",.1);break;case"novaSafe":[0,7,12].forEach((e,s)=>this.tone(F(31+e),.5,"sine",.06,s*.06));break;case"stormWarn":this.hiss(.08,300,2.5,0,"bandpass",6),this.tone(220,.3,"square",.03,0),this.tone(220,.3,"square",.03,.45);break;case"titan":this.tone(F(-12),1.6,"sawtooth",.09,0,1,.6),this.tone(F(-5),1.6,"sawtooth",.07,.15,1,.6);break;case"titanEaten":[0,4,7,12,16,19,24].forEach((e,s)=>this.tone(F(19+e),1.4,"triangle",.06,s*.06,1,.7)),this.tone(60,1.2,"sine",.25,0,.5);break;case"holeEaten":this.tone(40,1.5,"sine",.35,0,.4),this.hiss(.2,200,1.4,0,"lowpass",.2);break;case"capture":this.tone(F(31),.4,"sine",.05,0,1.5,.6);break;case"moonFed":this.tone(F(33),.3,"sine",.05,0,.7,.5);break;case"moonLost":this.tone(200,.3,"triangle",.06,0,.5);break;case"secondWind":case"revive":[0,12,24].forEach((e,s)=>this.tone(F(12+e),1,"sine",.1,s*.08,1,.8));break;case"death":this.tone(330,1.6,"sawtooth",.08,0,.12,.6),this.tone(55,1.4,"sine",.3,.05,.5),this.hiss(.25,2500,1.8,0,"lowpass",.05);break}}jingle(t){t==="buy"&&[0,7,12,16].forEach((e,s)=>this.tone(F(28+e),.35,"triangle",.06,s*.06)),t==="best"&&[0,4,7,12,16,19,24].forEach((e,s)=>this.tone(F(24+e),.8,"sine",.06,s*.09,1,.6)),t==="deny"&&this.tone(160,.2,"square",.04,0,.8,0)}}function x(n){const t=document.createElement("div");return t.className=n,t}function me(n){const t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const ws=(n,t)=>Math.round(Math.min(1.75,Math.max(1,Math.min(n/1e3,t/600)))*100)/100;me(`
#ui .ks-stick { position: absolute; width: 120px; height: 120px; margin: -60px 0 0 -60px; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(255,255,255,.07) 0 55%, rgba(255,255,255,.14) 56% 58%, transparent 59%); opacity: 0; transition: opacity .2s; }
#ui .ks-stick.on { opacity: 1; }
#ui .ks-knob { position: absolute; left: 50%; top: 50%; width: 48px; height: 48px; margin: -24px 0 0 -24px; border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, rgba(255,255,255,.55), rgba(255,220,150,.22) 60%, rgba(255,200,120,.08)); box-shadow: 0 0 18px rgba(255,200,120,.35); }
/* Double-tap boost: the stick turns gold. */
#ui .ks-stick.boost { background: radial-gradient(circle, rgba(255,190,100,.12) 0 55%, rgba(255,200,120,.55) 56% 58%, transparent 59%); }
#ui .ks-stick.boost .ks-knob { background: radial-gradient(circle at 40% 35%, #fff6dc, #ffb54a 70%); box-shadow: 0 0 22px #ffb54a; }
`);class Ms{constructor(t){l(this,"held",new Set);l(this,"mouse",{x:0,y:0,has:!1,down:!1});l(this,"touchMove",null);l(this,"touchBoost",new Set);l(this,"stickBoosts",!1);l(this,"lastTap",{t:-1e9,x:0,y:0});l(this,"lastDevice","mouse");l(this,"stick",x("ks-stick"));l(this,"knob",x("ks-knob"));l(this,"onFirst",()=>{});l(this,"onPause",()=>{});l(this,"active",!1);l(this,"stickMode","float");l(this,"isTouch",!1);l(this,"touchMove0",{t:0,x:0,y:0});const e=document.getElementById("game");this.stick.append(this.knob),t.append(this.stick),window.addEventListener("keydown",i=>{if(i.code==="Escape"||i.code==="KeyP"){this.active&&(i.preventDefault(),this.onPause());return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),this.held.add(i.code),/^(Key[WASD]|Arrow)/.test(i.code)&&(this.lastDevice="keys"),this.onFirst()}),window.addEventListener("keyup",i=>this.held.delete(i.code)),window.addEventListener("blur",()=>{this.held.clear(),this.mouse.down=!1,this.touchMove=null,this.stickBoosts=!1,this.touchBoost.clear(),this.updateStick()}),e.addEventListener("contextmenu",i=>i.preventDefault()),window.addEventListener("pointermove",i=>{if(i.pointerType==="mouse")this.mouse.x=i.clientX,this.mouse.y=i.clientY,(!this.mouse.has||Math.abs(i.movementX)+Math.abs(i.movementY)>2)&&(this.lastDevice=this.held.size&&this.lastDevice==="keys"?"keys":"mouse"),this.mouse.has=!0;else if(this.touchMove&&i.pointerId===this.touchMove.id){if(this.touchMove.x=i.clientX,this.touchMove.y=i.clientY,this.stickMode==="float"){const o=this.touchMove.x-this.touchMove.x0,a=this.touchMove.y-this.touchMove.y0,r=Math.hypot(o,a);r>70&&(this.touchMove.x0+=o/r*(r-70),this.touchMove.y0+=a/r*(r-70))}this.updateStick()}}),e.addEventListener("pointerdown",i=>{if(i.pointerType==="mouse")this.mouse.down=!0,this.mouse.has=!0,this.mouse.x=i.clientX,this.mouse.y=i.clientY,this.lastDevice="mouse";else if(this.isTouch=!0,this.lastDevice="touch",this.touchMove)this.touchBoost.add(i.pointerId);else{const a=this.stickMode==="fixed"?this.fixedBase():{x:i.clientX,y:i.clientY};this.touchMove={id:i.pointerId,x0:a.x,y0:a.y,x:i.clientX,y:i.clientY};const r=performance.now();this.stickBoosts=r-this.lastTap.t<350&&Math.hypot(i.clientX-this.lastTap.x,i.clientY-this.lastTap.y)<70,this.touchMove0={t:r,x:i.clientX,y:i.clientY},this.updateStick()}this.onFirst()});const s=i=>{if(i.pointerType==="mouse"&&(this.mouse.down=!1),this.touchMove&&i.pointerId===this.touchMove.id){const o=this.touchMove0;performance.now()-o.t<250&&Math.hypot(i.clientX-o.x,i.clientY-o.y)<20&&(this.lastTap={t:performance.now(),x:i.clientX,y:i.clientY}),this.touchMove=null,this.stickBoosts=!1,this.updateStick()}this.touchBoost.delete(i.pointerId)};window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s),matchMedia("(pointer: coarse)").matches&&(this.isTouch=!0)}fixedBase(){return{x:96,y:window.innerHeight-110}}updateStick(){const t=this.touchMove,e=(!!t||this.stickMode==="fixed"&&this.isTouch)&&this.active;this.stick.classList.toggle("on",e),this.stick.classList.toggle("boost",!!t&&this.stickBoosts);const s=t?{x:t.x0,y:t.y0}:this.fixedBase();this.stick.style.left=`${s.x}px`,this.stick.style.top=`${s.y}px`;let i=0,o=0;if(t){const a=t.x-t.x0,r=t.y-t.y0,c=Math.hypot(a,r),h=Math.min(c,46);i=c?a/c*h:0,o=c?r/c*h:0}this.knob.style.transform=`translate(${i}px, ${o}px)`}setActive(t){this.active=t,t||(this.touchMove=null,this.stickBoosts=!1,this.touchBoost.clear()),this.updateStick()}sample(t){const e=h=>this.held.has(h)?1:0,s=e("KeyD")+e("ArrowRight")-e("KeyA")-e("ArrowLeft"),i=e("KeyS")+e("ArrowDown")-e("KeyW")-e("ArrowUp"),o=this.held.has("Space")||this.held.has("ShiftLeft")||this.held.has("ShiftRight");let a=0,r=0;if(s||i)a=s,r=i;else if(this.touchMove){const h=this.touchMove.x-this.touchMove.x0,d=this.touchMove.y-this.touchMove.y0,u=Math.hypot(h,d);if(u>6){const m=Math.min(1,(u-6)/40);a=h/u*m,r=d/u*m}}else if(this.lastDevice==="mouse"&&this.mouse.has){const h=this.mouse.x-t.x,d=this.mouse.y-t.y,u=Math.hypot(h,d),m=Math.min(window.innerWidth,window.innerHeight)*.2;if(u>4){const p=Math.min(1,u/m);a=h/u*p,r=d/u*p}}const c=this.touchBoost.size>0||!!this.touchMove&&this.stickBoosts;return{mx:a,my:r,boost:o||this.mouse.down||c}}}const Ss="kindlestar",$t=`${Ss}:v1`,Le=30,Ts=()=>({v:1,best:{},stardust:0,upgrades:{},skin:"ember",owned:["ember"],codex:[],missions:[],missionsDone:0,milestones:0,dailyUsed:"",stats:{runs:0,eaten:0,seconds:0,titans:0},tutorialDone:!1,boostLearned:!1,history:[],daily:{date:"",best:0,stage:0},settings:{music:!0,sfx:!0,reduceMotion:!1,graphics:"auto",stick:"float",volume:.8,vibrate:!0}}),W=(n,t,e=0,s=1e15)=>typeof n=="number"&&Number.isFinite(n)?Math.min(s,Math.max(e,n)):t,He=(n,t=200)=>Array.isArray(n)?n.filter(e=>typeof e=="string"&&e.length<40).slice(0,t):[];function Vt(n){const t=Ts();try{const e=n.get($t);if(!e)return t;const s=JSON.parse(e);if(!s||typeof s!="object")return t;if(s.best&&typeof s.best=="object")for(const[i,o]of Object.entries(s.best))typeof o=="number"&&Number.isFinite(o)&&(t.best[i]=o);if(t.stardust=Math.floor(W(s.stardust,0)),s.upgrades&&typeof s.upgrades=="object")for(const[i,o]of Object.entries(s.upgrades))typeof o=="number"&&Number.isFinite(o)&&(t.upgrades[i]=Math.max(0,Math.min(10,Math.floor(o))));if(typeof s.skin=="string"&&(t.skin=s.skin),t.owned=Array.from(new Set(["ember",...He(s.owned)])),t.owned.includes(t.skin)||(t.skin="ember"),t.codex=Array.from(new Set(He(s.codex))),Array.isArray(s.missions)&&(t.missions=s.missions.filter(i=>!!i&&typeof i=="object"&&typeof i.id=="string").slice(0,3).map(i=>({id:i.id,target:W(i.target,1,1),reward:W(i.reward,10,0,1e3),progress:W(i.progress,0),done:i.done===!0}))),t.missionsDone=Math.floor(W(s.missionsDone,0)),t.milestones=Math.floor(W(s.milestones,0,0,1023)),typeof s.dailyUsed=="string"&&(t.dailyUsed=s.dailyUsed.slice(0,10)),s.stats&&typeof s.stats=="object")for(const i of Object.keys(t.stats))t.stats[i]=W(s.stats[i],0);if(t.tutorialDone=s.tutorialDone===!0,t.boostLearned=s.boostLearned===!0,s.daily&&typeof s.daily=="object"&&typeof s.daily.date=="string"&&(t.daily={date:s.daily.date.slice(0,10),best:W(s.daily.best,0),stage:Math.floor(W(s.daily.stage,0,0,8))}),Array.isArray(s.history)&&(t.history=s.history.filter(i=>!!i&&typeof i=="object").slice(0,Le).map(i=>({at:W(i.at,0),seconds:W(i.seconds,0),eaten:W(i.eaten,0),mass:W(i.mass,0),stage:Math.floor(W(i.stage,0,0,8)),titans:W(i.titans,0),combo:W(i.combo,0),cause:typeof i.cause=="string"?i.cause.slice(0,20):"",continues:W(i.continues,0),dust:W(i.dust,0)}))),s.settings){const i=s.settings;for(const o of["music","sfx","reduceMotion","vibrate"])typeof i[o]=="boolean"&&(t.settings[o]=i[o]);(i.graphics==="auto"||i.graphics==="high"||i.graphics==="medium"||i.graphics==="low")&&(t.settings.graphics=i.graphics),(i.stick==="float"||i.stick==="fixed")&&(t.settings.stick=i.stick),t.settings.volume=W(i.volume,.8,0,1)}}catch{}return t}function As(n,t){try{n.set($t,JSON.stringify(t))}catch{}}function Ls(n,t){const e={...n,best:{...n.best},upgrades:{...n.upgrades},settings:{...n.settings},stats:{...n.stats}};for(const[i,o]of Object.entries(t.best))e.best[i]=Math.max(e.best[i]??-1/0,o);for(const[i,o]of Object.entries(t.upgrades))e.upgrades[i]=Math.max(e.upgrades[i]??0,o);e.stardust=Math.max(n.stardust,t.stardust),e.owned=Array.from(new Set([...n.owned,...t.owned])),e.codex=Array.from(new Set([...n.codex,...t.codex])),e.missionsDone=Math.max(n.missionsDone,t.missionsDone),e.milestones=n.milestones|t.milestones,e.tutorialDone=n.tutorialDone||t.tutorialDone,e.boostLearned=n.boostLearned||t.boostLearned;const s=new Set;e.history=[...n.history,...t.history].sort((i,o)=>o.at-i.at).filter(i=>!s.has(i.at)&&!!s.add(i.at)).slice(0,Le);for(const i of Object.keys(e.stats))e.stats[i]=Math.max(n.stats[i],t.stats[i]);return e}function zs(n,t){try{if(t.get($t)===null)return;const e=JSON.stringify(Ls(Vt(n),Vt(t)));n.set($t,e),t.get($t)!==e&&t.remove?.($t)}catch{}}const R=[{id:"dust",name:"Stardust",min:0},{id:"comet",name:"Comet",min:12},{id:"moon",name:"Moon",min:70},{id:"planet",name:"Planet",min:450},{id:"giant",name:"Gas Giant",min:3e3},{id:"star",name:"Star",min:22e3},{id:"supergiant",name:"Supergiant",min:16e4},{id:"hole",name:"Black Hole",min:12e5},{id:"quasar",name:"Quasar",min:9e6}],fe=4,Ue=2.2;function pe(n){let t=0;for(let e=1;e<R.length;e++)n>=R[e].min&&(t=e);return t}function Ps(n){const t=pe(n),e=Math.max(R[t].min,fe),s=t+1<R.length?R[t+1].min:e*10;return Math.min(1,Math.max(0,Math.log(n/e)/Math.log(s/e)))}const kt=n=>.5*Math.sqrt(n),ke=n=>13*Math.pow(n,.9),E=n=>10*Math.pow(n,.8),J=1.12,ne=n=>pe(n),It=[["Rocky Pebble","Ice Pebble"],["Ice Comet","Emerald Comet","Ember Comet"],["Grey Moon","Frost Moon","Lava Moon","Rust Moon"],["Ocean World","Desert World","Jungle World","Ice World","Lava World","Toxic World"],["Banded Giant","Ringed Giant","Storm Giant","Ice Giant"],["Red Dwarf","Yellow Star","White Star","Blue Star"],["Red Supergiant","Blue Supergiant","Pulsar"],["Star Cluster","Globular Cluster"],["Spiral Galaxy","Elliptical Galaxy"]],Cs=(n,t)=>t%It[n].length,gt=[{name:"Pip",mass:9},{name:"Wisp",mass:40},{name:"Cinder",mass:220},{name:"Tundra",mass:1300},{name:"Maelstrom",mass:8e3},{name:"Solara",mass:55e3},{name:"Vortigan",mass:38e4},{name:"Umbra",mass:26e5},{name:"Leviathan",mass:18e6},{name:"Eternity",mass:12e7}],Es=.0012;function X(n){const t=(e,s)=>(e>=100?Math.round(e):e>=10?Math.round(e*10)/10:Math.round(e*100)/100)+s;return n>=1e9?t(n/1e9,"B"):n>=1e6?t(n/1e6,"M"):n>=1e3?t(n/1e3,"K"):t(n,"")}function $s(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Is(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}const is=60,Ht=1/is,j=Ht,C=n=>Math.round(n*is),we=["magnet","shield","surge"],Me={startMass:fe,magnet:1,boostCost:1,shell:1,luck:1,secondWind:!1},Ds=[0,0,0,0,3,5,7,8,8],We=.5;class ze{constructor(t=1,e=Me,s=[]){l(this,"tick",0);l(this,"over",!1);l(this,"cause",null);l(this,"causeBy","");l(this,"killerRatio",0);l(this,"player");l(this,"bodies",[]);l(this,"dust",[]);l(this,"novas",[]);l(this,"storm",null);l(this,"titans");l(this,"events",[]);l(this,"found",[]);l(this,"stats");l(this,"rnd");l(this,"nextId",1);l(this,"nextNova",0);l(this,"nextStorm",0);l(this,"nextGold",0);l(this,"nextPower",0);l(this,"nextHoleCheck",0);l(this,"foundSet",new Set);l(this,"nearHoleTicks",0);this.seed=t,this.loadout=e,this.rnd=$s(t);for(const o of s)this.foundSet.add(o);const i=Math.max(fe,e.startMass);this.player={x:0,y:0,px:0,py:0,vx:0,vy:0,mass:i,r:kt(i),stage:pe(i),boosting:!1,dirX:1,dirY:0,invulnT:C(3),shieldT:0,magnetT:0,surgeT:0,secondWind:e.secondWind,sinceEat:999,combo:0},this.titans=gt.map(o=>({mass:o.mass,alive:!0,bodyId:-1,cooldownUntil:C(50)})),this.stats={ticks:0,peakMass:i,peakStage:this.player.stage,eaten:0,titansEaten:0,gold:0,novaSurvived:0,stormsSurvived:0,holesEaten:0,bestCombo:0,powers:0,moonsFed:0,continues:0},this.nextNova=C(70),this.nextStorm=C(45),this.nextGold=C(8),this.nextPower=C(20),this.nextHoleCheck=C(30),this.fillStart()}slow(){return Math.pow(this.player.r,-.24)}get view(){return ke(this.player.r)}step(t){if(this.events=[],this.over)return;const e=this.player;for(const s of this.bodies)s.px=s.x,s.py=s.y;for(const s of this.dust)s.px=s.x,s.py=s.y;e.px=e.x,e.py=e.y,this.movePlayer(t),this.updateTitans(),this.moveBodies(),this.moveDust(),this.updateNovas(),this.updateStorm(),this.playerContacts(),this.over||this.rivalContacts(),this.holeContacts(),this.updateMoons(),this.spawn(),this.cull(),e.invulnT>0&&e.invulnT--,e.shieldT>0&&e.shieldT--,e.magnetT>0&&e.magnetT--,e.surgeT>0&&e.surgeT--,e.sinceEat++,e.sinceEat>C(1.4)&&(e.combo=0),e.mass<Ue&&!this.over&&this.die("fizzle",""),this.tick++,this.stats.ticks=this.tick}movePlayer(t){const e=this.player,s=m=>m>1?1:m<-1?-1:m||0;let i=s(t.mx),o=s(t.my);const a=Math.hypot(i,o);a>1&&([i,o]=[i/a,o/a]),a>.05?(e.dirX=i/a,e.dirY=o/a):t.boost&&(i=e.dirX,o=e.dirY);const r=t.boost&&(e.surgeT>0||e.mass>Ue*1.25);r!==e.boosting&&this.events.push({t:"boost",on:r}),e.boosting=r;let c=E(e.r)*(r?1.8:1)*(e.surgeT>0?1.35:1);const h=i*c,d=o*c,u=Math.min(1,5*j);if(e.vx+=(h-e.vx)*u,e.vy+=(d-e.vy)*u,this.applyGravity(e,!0),e.x+=e.vx*j,e.y+=e.vy*j,r&&e.surgeT<=0){const m=e.mass*.016*j*this.loadout.boostCost;if(this.setPlayerMass(e.mass-m),this.tick%4===0){const p=Math.hypot(e.vx,e.vy)||1,k=m*4*.6;this.addDust(e.x-e.vx/p*e.r*1.3+(this.rnd()-.5)*e.r*.6,e.y-e.vy/p*e.r*1.3+(this.rnd()-.5)*e.r*.6,k,-e.vx*.1,-e.vy*.1)}}c=0}setPlayerMass(t){const e=this.player;e.mass=Math.max(.5,t),e.r=kt(e.mass),e.mass>this.stats.peakMass&&(this.stats.peakMass=e.mass);const s=pe(e.mass);s>e.stage?(e.stage=s,e.invulnT=Math.max(e.invulnT,C(1.5)),s>this.stats.peakStage&&(this.stats.peakStage=s,this.events.push({t:"stage",stage:s}))):s<e.stage&&(e.stage=s)}grow(t){this.setPlayerMass(this.player.mass+t)}discover(t){this.foundSet.has(t)||(this.foundSet.add(t),this.found.push(t),this.events.push({t:"discover",code:t}))}clearSpace(){const t=this.player;for(const e of this.bodies){const s=e.x-t.x,i=e.y-t.y,o=Math.hypot(s,i)||1;if(o<t.r*8&&e.role!=="hole"&&e.role!=="moon"){const a=E(e.r)*2.5;e.vx+=s/o*a,e.vy+=i/o*a}}}die(t,e){const s=this.player;if(s.secondWind&&t!=="fizzle"){s.secondWind=!1,this.setPlayerMass(s.mass*.6),s.invulnT=C(3),this.clearSpace(),this.comeback(),this.events.push({t:"secondWind"});return}this.over=!0,this.cause=t,this.causeBy=e,this.events.push({t:"death",cause:t,by:e,x:s.x,y:s.y})}revive(){if(!this.over)return;const t=this.player;if(this.cause==="hole"){let e=null,s=1/0;for(const i of this.bodies){if(i.role!=="hole")continue;const o=Math.hypot(i.x-t.x,i.y-t.y);o<s&&(s=o,e=i)}if(e){const i=this.rnd()*Math.PI*2;t.x=e.x+Math.cos(i)*e.r*15,t.y=e.y+Math.sin(i)*e.r*15,t.px=t.x,t.py=t.y}}this.cause==="fizzle"&&this.setPlayerMass(Math.max(t.mass,fe*1.5)),t.vx=0,t.vy=0,t.invulnT=C(3),this.over=!1,this.cause=null,this.causeBy="",this.stats.continues++,this.clearSpace(),this.comeback(),this.events=[{t:"revive",x:t.x,y:t.y}]}newBody(t,e,s,i){const o={id:this.nextId++,role:t,x:e,y:s,px:e,py:s,vx:0,vy:0,mass:i,r:t==="hole"?kt(i)*.5:kt(i),seed:Math.floor(this.rnd()*1e9),alive:!0,born:this.tick,tag:-1,aiT:0,wx:e,wy:s,huntId:-1,boosting:!1,orbitA:0,feedAt:0};return this.bodies.push(o),o}setMass(t,e){t.mass=e,t.r=t.role==="hole"?kt(e)*.5:kt(e)}applyGravity(t,e){for(const s of this.bodies){if(s.role!=="hole"||!s.alive||s===t||e&&this.player.stage>=7&&this.player.mass>s.mass*J)continue;const i=s.x-t.x,o=s.y-t.y,a=i*i+o*o,r=s.r*13;if(a>r*r)continue;const c=Math.max(Math.sqrt(a),s.r*.8),h=30*E(s.r*1.4)*(s.r*s.r/(c*c))*(1-c/r);t.vx+=i/c*h*j,t.vy+=o/c*h*j,e&&c<s.r*4&&this.nearHoleTicks++}}moveBodies(){const t=this.player;for(const e of this.bodies)if(e.alive){switch(e.role){case"rival":case"titan":this.think(e);break;case"gold":{const s=e.x-t.x,i=e.y-t.y,o=Math.hypot(s,i)||1,a=E(t.r)*1.05,r=o<t.r*9?s/o*a:e.wx,c=o<t.r*9?i/o*a:e.wy;e.vx+=(r-e.vx)*.05,e.vy+=(c-e.vy)*.05;break}case"moon":continue}e.role!=="hole"&&e.role!=="meteor"&&this.applyGravity(e,!1),e.x+=e.vx*j,e.y+=e.vy*j}}think(t){const e=this.player,s=t.role==="titan",i=t.r*(s?16:11);let o=0,a=0;const r=(y,f,b,L)=>{const D=t.x-y,T=t.y-f,B=Math.hypot(D,T)||1,Y=i*.7+b;if(B<Y){const tt=L*(1-B/Y);o+=D/B*tt,a+=T/B*tt}};e.mass>t.mass*J&&r(e.x,e.y,e.r,s?.8:1.4);for(const y of this.bodies)y===t||!y.alive||(y.role==="hole"?r(y.x,y.y,y.r*6,3):(y.role==="rival"||y.role==="titan")&&y.mass>t.mass*J&&r(y.x,y.y,y.r,1));for(const y of this.novas)y.wave<0&&r(y.x,y.y,y.r*4,1.2);if(--t.aiT<=0){t.aiT=C(.5)+Math.floor(this.rnd()*20),t.huntId=-1;let y=0;const f=e.x-t.x,b=e.y-t.y,L=Math.hypot(f,b);if(t.mass>e.mass*J&&e.invulnT<=0&&L<i*(s?1:.7)&&(t.huntId=0,y=1e9),t.huntId!==0)for(const T of this.bodies){if(T===t||!T.alive||T.role==="hole"||T.role==="nova"||T.role==="moon"||T.mass*J>=t.mass)continue;const B=Math.hypot(T.x-t.x,T.y-t.y);if(B>i)continue;const Y=T.mass/(B+t.r);Y>y&&(y=Y,t.huntId=T.id)}if(t.huntId<0){const T=this.rnd()*Math.PI*2;t.wx=t.x+Math.cos(T)*i*.6,t.wy=t.y+Math.sin(T)*i*.6}}let c=t.wx-t.x,h=t.wy-t.y;if(t.boosting=!1,t.huntId===0){c=e.x-t.x,h=e.y-t.y;const y=Math.hypot(c,h);t.boosting=y<t.r*5+e.r&&this.tick%C(3)<C(1.2)}else if(t.huntId>0){const y=this.bodies.find(f=>f.id===t.huntId);y&&y.alive?(c=y.x-t.x,h=y.y-t.y):t.huntId=-1}else c*=.6,h*=.6;const d=Math.hypot(c,h)||1;let u=c/d+o*2,m=h/d+a*2;const p=Math.hypot(u,m)||1;u/=p,m/=p;const k=Math.min(1.35,Math.max(.45,Math.pow(e.r/t.r,.45))),P=E(e.r)*k*(s?.9:.85)*(t.boosting?1.5:1)*(t.huntId===0?1:.85),v=Math.min(1,3*j);t.vx+=(u*P-t.vx)*v,t.vy+=(m*P-t.vy)*v}moveDust(){const t=this.player,e=t.r*2.6*this.loadout.magnet*(t.magnetT>0?3:1)+(t.stage>=7?t.r*3:0),s=e*e,i=E(t.r)*2.2;for(const o of this.dust){if(!o.alive)continue;const a=t.x-o.x,r=t.y-o.y,c=a*a+r*r;if(c<s){const h=Math.sqrt(c)||1,d=i*(1.2-h/e);o.vx+=(a/h*d-o.vx)*.2,o.vy+=(r/h*d-o.vy)*.2}else o.vx*=.995,o.vy*=.995;for(const h of this.bodies){if(h.role!=="hole")continue;const d=h.x-o.x,u=h.y-o.y,m=Math.hypot(d,u);if(m<h.r*10&&m>0){const p=E(h.r)*6*(h.r/m);o.vx+=d/m*p*j,o.vy+=u/m*p*j}}o.x+=o.vx*j,o.y+=o.vy*j}}playerContacts(){const t=this.player;for(const e of this.dust){if(!e.alive)continue;const s=e.x-t.x,i=e.y-t.y;s*s+i*i<t.r*t.r*1.1&&(e.alive=!1,this.grow(e.m),this.tick%2===0&&this.events.push({t:"dust",x:e.x,y:e.y,seed:e.seed}))}for(const e of this.bodies){if(!e.alive||e.role==="moon")continue;const s=e.x-t.x,i=e.y-t.y,o=Math.hypot(s,i);if(e.role!=="hole"){if(e.role==="nova"){o<e.r+t.r&&this.pushApart(t,e,o,s,i,!0);continue}if(e.role==="gold"||e.role==="power"){if(o<t.r+e.r*1.4)if(e.alive=!1,e.role==="gold"){const a=1+t.stage;this.stats.gold+=a,this.events.push({t:"collect",kind:"gold",x:e.x,y:e.y,value:a})}else{const a=we[e.tag];a==="magnet"&&(t.magnetT=C(9)),a==="shield"&&(t.shieldT=C(7)),a==="surge"&&(t.surgeT=C(6)),this.stats.powers++,this.events.push({t:"collect",kind:a,x:e.x,y:e.y,value:0})}continue}if(!(o>t.r+e.r))if(t.mass>e.mass*J)o<t.r&&this.playerEats(e);else if(e.mass>t.mass*J){if(e.role==="meteor"?this.meteorHit(e):o<e.r&&(t.invulnT>0||t.shieldT>0?(t.shieldT>0&&this.tick%10===0&&this.events.push({t:"shieldBlock",x:t.x,y:t.y}),this.pushApart(t,e,o,s,i,!1)):(this.killerRatio=e.mass/t.mass,this.die(e.role==="titan"?"titan":"rival",e.role==="titan"?gt[e.tag].name:""))),this.over)return}else e.role==="meteor"?this.meteorHit(e):this.pushApart(t,e,o,s,i,!0)}}}playerEats(t){const e=this.player;t.alive=!1;const s=ne(t.mass);if(e.combo=e.sinceEat<C(1.4)?e.combo+1:1,e.sinceEat=0,e.combo>this.stats.bestCombo&&(this.stats.bestCombo=e.combo),this.stats.eaten++,this.grow(t.mass*We*this.slow()),this.events.push({t:"eat",who:"player",role:t.role,x:t.x,y:t.y,mass:t.mass,r:t.r,cls:s,seed:t.seed,eaterId:0,combo:e.combo}),this.discover(`c${s}v${Cs(s,t.seed)}`),t.role==="titan"){const i=this.titans[t.tag];i.alive=!1,i.bodyId=-1,this.stats.titansEaten++,this.events.push({t:"titanEaten",idx:t.tag,x:t.x,y:t.y}),this.discover(`titan${t.tag}`)}}meteorHit(t){const e=this.player;if(t.alive=!1,this.shatter(t,6),e.invulnT>0||e.shieldT>0){this.events.push({t:"shieldBlock",x:e.x,y:e.y});return}const s=this.bodies.find(r=>r.role==="moon"&&r.alive);if(s){s.alive=!1,this.events.push({t:"moonLost",x:s.x,y:s.y});return}const i=e.mass*Math.min(.12,.07*(t.mass/e.mass))*this.loadout.shell;this.setPlayerMass(e.mass-i);const o=Math.hypot(e.x-t.x,e.y-t.y)||1,a=E(e.r)*.9;e.vx+=(e.x-t.x)/o*a+t.vx*.3,e.vy+=(e.y-t.y)/o*a+t.vy*.3,this.events.push({t:"hit",x:t.x,y:t.y,loss:i,by:"meteor"})}pushApart(t,e,s,i,o,a){const r=s>0?i/s:1,c=s>0?o/s:0,h=t.r+e.r-s,u=e.role==="nova"?0:t.mass/(t.mass+e.mass),m=1-u;t.x-=r*h*m,t.y-=c*h*m,e.x+=r*h*u,e.y+=c*h*u;const p=(e.vx-t.vx)*r+(e.vy-t.vy)*c;if(p<0){const k=-p*1.6;t.vx-=r*k*m,t.vy-=c*k*m,e.vx+=r*k*u,e.vy+=c*k*u;const P=-p/Math.max(1e-6,E(t.r));if(a&&P>.6&&(this.events.push({t:"bump",x:t.x+r*t.r,y:t.y+c*t.r,strength:P}),t===this.player&&this.player.invulnT<=0&&this.player.shieldT<=0)){const v=t.mass*.015*Math.min(2,P);this.setPlayerMass(t.mass-v),this.addDust(t.x+r*t.r,t.y+c*t.r,v*.7,-r*E(t.r)*.4,-c*E(t.r)*.4)}}}rivalContacts(){const t=this.bodies.filter(e=>e.alive&&(e.role==="rival"||e.role==="titan"));for(const e of t)if(e.alive){for(const s of this.dust){if(!s.alive)continue;const i=s.x-e.x,o=s.y-e.y;i*i+o*o<e.r*e.r&&(s.alive=!1,this.setMass(e,e.mass+s.m*.6))}for(const s of this.bodies){if(s===e||!s.alive||s.role==="hole"||s.role==="nova"||s.role==="gold"||s.role==="power")continue;const i=Math.hypot(s.x-e.x,s.y-e.y);i>e.r+s.r||(e.mass>s.mass*J&&i<e.r?(s.alive=!1,this.setMass(e,e.mass+s.mass*We),s.role==="moon"&&this.events.push({t:"moonLost",x:s.x,y:s.y}),this.events.push({t:"eat",who:"rival",role:s.role,x:s.x,y:s.y,mass:s.mass,r:s.r,cls:ne(s.mass),seed:s.seed,eaterId:e.id,combo:0}),s.role==="titan"&&(this.titans[s.tag].bodyId=-1,this.titans[s.tag].alive=!1)):s.role!=="moon"&&s.role!=="meteor"&&s.mass<e.mass*J&&e.mass<s.mass*J&&this.pushApart(e,s,i,s.x-e.x,s.y-e.y,!1))}e.role==="titan"&&(this.titans[e.tag].mass=e.mass)}}holeContacts(){const t=this.player;for(const e of this.bodies)if(!(e.role!=="hole"||!e.alive)){if(!this.over){const s=Math.hypot(t.x-e.x,t.y-e.y);t.stage>=7&&t.mass>e.mass*J?s<t.r&&(e.alive=!1,this.stats.holesEaten++,this.grow(e.mass*.9),this.events.push({t:"holeEaten",x:e.x,y:e.y})):s<e.r+t.r*.35&&(t.invulnT>0?this.pushApart(t,e,s,e.x-t.x,e.y-t.y,!1):this.die("hole",""))}if(e.alive){for(const s of this.bodies){if(s===e||!s.alive||s.role==="nova")continue;const i=Math.hypot(s.x-e.x,s.y-e.y);if(s.role==="hole"){i<e.r+s.r&&e.mass>=s.mass&&(s.alive=!1,this.setMass(e,e.mass+s.mass));continue}i<e.r+s.r*.3&&(s.alive=!1,this.setMass(e,e.mass+s.mass*.5),this.events.push({t:"eat",who:"hole",role:s.role,x:s.x,y:s.y,mass:s.mass,r:s.r,cls:ne(s.mass),seed:s.seed,eaterId:e.id,combo:0}),s.role==="titan"&&(this.titans[s.tag].bodyId=-1,this.titans[s.tag].alive=!1),s.role==="moon"&&this.events.push({t:"moonLost",x:s.x,y:s.y}))}for(const s of this.dust)s.alive&&Math.hypot(s.x-e.x,s.y-e.y)<e.r&&(s.alive=!1)}}this.nearHoleTicks>C(1.5)&&(this.nearHoleTicks=0,this.discover("hole"))}updateMoons(){const t=this.player;if(this.over)return;const e=Ds[t.stage];let s=this.bodies.filter(i=>i.role==="moon"&&i.alive);if(s.length<e&&this.tick%6===0)for(const i of this.bodies){if(s.length>=e)break;if(i.role!=="drift"||!i.alive||i.mass>t.mass*.09||i.mass<t.mass*.01)continue;const o=Math.hypot(i.x-t.x,i.y-t.y);o<t.r*4.5&&o>t.r*1.3&&(i.role="moon",i.orbitA=Math.atan2(i.y-t.y,i.x-t.x),i.feedAt=this.tick+C(18+this.rnd()*10),s.push(i),this.events.push({t:"capture",id:i.id}))}s=s.filter(i=>i.alive),s.forEach((i,o)=>{const a=t.r*(1.9+o%3*.45);i.orbitA+=(1.6-o%3*.3)*j;const r=t.x+Math.cos(i.orbitA)*a,c=t.y+Math.sin(i.orbitA)*a,h=Math.min(1,(this.tick-i.born)/C(1))*.15+.1;i.x+=(r-i.x)*h,i.y+=(c-i.y)*h,this.tick>=i.feedAt&&(i.alive=!1,this.stats.moonsFed++,this.grow(i.mass),this.events.push({t:"moonFed",x:i.x,y:i.y}))})}updateNovas(){const t=this.player,e=this.view;if(this.tick>=this.nextNova&&t.stage>=3&&this.novas.length===0){const s=this.rnd()*Math.PI*2,i=e*(.75+this.rnd()*.35),o=C(4.5),a={id:this.nextId++,x:t.x+Math.cos(s)*i,y:t.y+Math.sin(s)*i,r:t.r*1.3,warn:o,warnTotal:o,wave:-1,waveSpeed:E(t.r)*1.6,maxWave:e*3,hitPlayer:!1,done:!1};this.novas.push(a);const r=this.newBody("nova",a.x,a.y,t.mass*3);r.r=a.r,r.tag=a.id,this.events.push({t:"novaWarn",id:a.id,x:a.x,y:a.y});const c=Math.max(.55,1-this.tick/C(900));this.nextNova=this.tick+C((60+this.rnd()*35)*c)}for(const s of this.novas){if(s.warn>0){if(s.warn--,s.warn===0){s.wave=s.r;for(const a of this.bodies)a.role==="nova"&&a.tag===s.id&&(a.alive=!1);this.events.push({t:"novaBlast",id:s.id,x:s.x,y:s.y});for(let a=0;a<70;a++){const r=this.rnd()*Math.PI*2,c=s.r*(1+this.rnd()*5),h=s.waveSpeed*(.05+this.rnd()*.25);this.addDust(s.x+Math.cos(r)*c,s.y+Math.sin(r)*c,t.mass*(.004+this.rnd()*.006),Math.cos(r)*h,Math.sin(r)*h)}}continue}const i=s.wave;s.wave+=s.waveSpeed*j;const o=Math.hypot(t.x-s.x,t.y-s.y);if(!s.hitPlayer&&o>=i&&o<s.wave+t.r)if(s.hitPlayer=!0,this.shadowed(s.x,s.y,t.x,t.y,t.r)||t.invulnT>0||t.shieldT>0)this.stats.novaSurvived++,this.events.push({t:"novaSafe"}),this.discover("nova");else{const a=t.mass*.28*this.loadout.shell;this.setPlayerMass(t.mass-a);const r=E(t.r)*2;t.vx+=(t.x-s.x)/(o||1)*r,t.vy+=(t.y-s.y)/(o||1)*r,this.stats.novaSurvived++,this.events.push({t:"hit",x:t.x,y:t.y,loss:a,by:"nova"}),this.comeback(),this.discover("nova")}for(const a of this.bodies){if(!a.alive||a.role==="hole"||a.role==="moon"||a.role==="nova")continue;const r=Math.hypot(a.x-s.x,a.y-s.y);if(r>=i&&r<s.wave)if(a.mass<t.mass*.15&&a.role!=="titan"&&a.role!=="gold"&&a.role!=="power")a.alive=!1,this.shatter(a,4);else{const c=E(a.r)*1.5;a.vx+=(a.x-s.x)/(r||1)*c,a.vy+=(a.y-s.y)/(r||1)*c,(a.role==="rival"||a.role==="titan")&&this.setMass(a,a.mass*.8)}}s.wave>s.maxWave&&(s.done=!0)}this.novas=this.novas.filter(s=>!s.done)}shadowed(t,e,s,i,o){const a=s-t,r=i-e,c=a*a+r*r||1;for(const h of this.bodies){if(!h.alive||h.role==="nova"||h.role==="meteor"||h.role==="gold"||h.role==="power"||h.r<o*.7&&h.role!=="hole")continue;const d=((h.x-t)*a+(h.y-e)*r)/c;if(d<=.05||d>=1)continue;const u=t+a*d,m=e+r*d;if(Math.hypot(h.x-u,h.y-m)<h.r*1.05)return!0}return!1}updateStorm(){const t=this.player,e=this.view;if(!this.storm&&this.tick>=this.nextStorm&&t.stage>=2){const i=this.rnd()*Math.PI*2;this.storm={dx:Math.cos(i),dy:Math.sin(i),warn:C(3),active:C(7),acc:0},this.events.push({t:"stormWarn",dx:this.storm.dx,dy:this.storm.dy})}const s=this.storm;if(s){if(s.warn>0){--s.warn===0&&this.events.push({t:"stormStart"});return}for(s.acc+=4.5*j*(1+Math.min(1,this.tick/C(600)));s.acc>=1;){s.acc--;const i=(this.rnd()-.5)*e*3.4,o=t.x-s.dx*e*2.6-s.dy*i,a=t.y-s.dy*e*2.6+s.dx*i,r=t.mass*Math.pow(10,-.9+this.rnd()*1.15),c=this.newBody("meteor",o,a,r),h=E(t.r)*(2.4+this.rnd()*1.2),d=(this.rnd()-.5)*.25;c.vx=(s.dx-s.dy*d)*h,c.vy=(s.dy+s.dx*d)*h}if(--s.active<=0){this.storm=null,this.stats.stormsSurvived++,this.events.push({t:"stormEnd"}),this.discover("storm");const i=Math.max(.6,1-this.tick/C(900));this.nextStorm=this.tick+C((40+this.rnd()*30)*i)}}}updateTitans(){const t=this.player;for(let e=0;e<this.titans.length;e++){const s=this.titans[e];s.alive&&s.bodyId<0&&(s.mass*=1+Es*j)}if(this.tick%30===0&&!this.titans.some(e=>e.bodyId>=0))for(let e=0;e<this.titans.length;e++){const s=this.titans[e];if(!s.alive||this.tick<s.cooldownUntil||s.mass<t.mass*.45||s.mass>t.mass*(t.stage<3?1.35:2.2))continue;const i=this.ringPoint(1),o=this.newBody("titan",i.x,i.y,s.mass);o.tag=e,o.seed=1e3+e*7,s.bodyId=o.id,this.events.push({t:"titan",idx:e});break}}ringPoint(t=1){const e=this.view,s=this.rnd()*Math.PI*2,i=e*(2.4+this.rnd()*1.1)*t;return{x:this.player.x+Math.cos(s)*i,y:this.player.y+Math.sin(s)*i}}addDust(t,e,s,i=0,o=0){this.dust.length>900||this.dust.push({x:t,y:e,px:t,py:e,vx:i,vy:o,m:s,seed:Math.floor(this.rnd()*1e6),alive:!0})}dustCluster(t,e){const s=this.player,i=this.view,o=10+Math.floor(this.rnd()*16),a=this.rnd()*Math.PI*2,r=i*(.25+this.rnd()*.5);for(let c=0;c<o;c++){const h=c/o-.5,d=a+h*1.2,u=t+Math.cos(d)*r*h+(this.rnd()-.5)*i*.06,m=e+Math.sin(d)*r*h+(this.rnd()-.5)*i*.06;this.addDust(u,m,s.mass*(.0016+this.rnd()*.0024)*this.slow())}}comeback(){const t=this.player,e=this.view;for(let s=0;s<2;s++){const i=this.rnd()*Math.PI*2,o=e*(.45+this.rnd()*.35);this.dustCluster(t.x+Math.cos(i)*o,t.y+Math.sin(i)*o)}}spawnDrift(t,e,s){const i=this.player,o=this.rnd(),a=s?-.2:.45,r=i.mass*Math.pow(10,-1.45+(a+1.45)*Math.pow(o,1.9)),c=this.newBody("drift",t,e,r),h=this.rnd()*Math.PI*2,d=E(c.r)*(.03+this.rnd()*.12);c.vx=Math.cos(h)*d,c.vy=Math.sin(h)*d}spawnRival(t,e,s){const i=this.player,o=this.rnd(),a=s?i.mass*(.3+o*.55):i.mass*Math.pow(10,-.7+o*.95),r=this.newBody("rival",t,e,a);r.aiT=Math.floor(this.rnd()*30)}fillStart(){const t=this.view,e=this.player;for(let s=0;s<5;s++){const i=s/5*Math.PI*2+this.rnd()*.8,o=t*(.35+this.rnd()*.4);this.dustCluster(Math.cos(i)*o,Math.sin(i)*o)}for(let s=0;s<7;s++){const i=this.rnd()*Math.PI*2,o=t*(.3+this.rnd()*.6),a=this.newBody("drift",Math.cos(i)*o,Math.sin(i)*o,e.mass*(.12+this.rnd()*.3)),r=this.rnd()*Math.PI*2;a.vx=Math.cos(r)*E(a.r)*.05,a.vy=Math.sin(r)*E(a.r)*.05}for(let s=0;s<34;s++){const i=this.rnd()*Math.PI*2,o=t*(.25+this.rnd()*3.2);this.dustCluster(Math.cos(i)*o,Math.sin(i)*o)}for(let s=0;s<85;s++){const i=this.rnd()*Math.PI*2,o=t*(.45+this.rnd()*3);this.spawnDrift(Math.cos(i)*o,Math.sin(i)*o,!0)}for(let s=0;s<3;s++){const i=this.ringPoint(.8);this.spawnRival(i.x,i.y,!0)}}spawn(){if(this.tick%10!==0)return;const t=this.player,e=this.tick<C(25);let s=0,i=0,o=0,a=0,r=0;for(const d of this.bodies)d.alive&&(d.role==="drift"?s++:d.role==="rival"?i++:d.role==="hole"?o++:d.role==="gold"?a++:d.role==="power"&&r++);for(let d=s;d<100&&d<s+4;d++){const u=this.ringPoint();this.spawnDrift(u.x,u.y,e)}if(this.dust.length<560){const d=this.ringPoint();this.dustCluster(d.x,d.y)}const h=t.stage===0?3:t.stage===1?5:7;if(i<h&&this.rnd()<.3){const d=this.ringPoint();this.spawnRival(d.x,d.y,e)}if(this.tick>=this.nextHoleCheck&&t.stage>=2){this.nextHoleCheck=this.tick+C(6);const d=t.stage>=4?2:1;if(o<d&&this.rnd()<.18){const u=this.ringPoint(1.05),m=this.newBody("hole",u.x,u.y,t.mass*(2+this.rnd()*3)),p=this.rnd()*Math.PI*2,k=E(t.r)*.12;m.vx=Math.cos(p)*k,m.vy=Math.sin(p)*k}}if(this.tick>=this.nextGold&&a<2){this.nextGold=this.tick+C((14+this.rnd()*10)/this.loadout.luck);const d=this.ringPoint(.75),u=this.newBody("gold",d.x,d.y,t.mass*.05);u.r=t.r*.45;const m=this.rnd()*Math.PI*2;u.wx=Math.cos(m)*E(t.r)*.3,u.wy=Math.sin(m)*E(t.r)*.3}if(this.tick>=this.nextPower&&r<1){this.nextPower=this.tick+C(22+this.rnd()*14);const d=this.view,u=this.rnd()*Math.PI*2,m=d*(1.3+this.rnd()*.6),p=this.newBody("power",t.x+Math.cos(u)*m,t.y+Math.sin(u)*m,t.mass*.05);p.r=t.r*.55,p.tag=Math.floor(this.rnd()*we.length)}}shatter(t,e){for(let s=0;s<e;s++){const i=this.rnd()*Math.PI*2,o=E(t.r)*(.3+this.rnd()*.6);this.addDust(t.x+Math.cos(i)*t.r*.5,t.y+Math.sin(i)*t.r*.5,t.mass*.6/e,Math.cos(i)*o+t.vx*.2,Math.sin(i)*o+t.vy*.2)}}cull(){const t=this.player,e=this.view,s=e*4.4,i=s*s;for(const a of this.bodies){if(!a.alive)continue;const r=a.x-t.x,c=a.y-t.y,h=r*r+c*c,d=a.role==="hole"||a.role==="titan"?i*1.6:a.role==="meteor"?i*.6:i;if(h>d&&(a.alive=!1,a.role==="titan")){const u=this.titans[a.tag];u.bodyId=-1,u.mass=a.mass,u.cooldownUntil=this.tick+C(40)}a.role==="rival"&&(a.mass<t.mass*.004||a.mass>t.mass*60)&&h>e*e*4&&(a.alive=!1),a.role==="drift"&&a.mass<t.mass*.002&&h>e*e*4&&(a.alive=!1),a.role==="gold"&&this.tick-a.born>C(30)&&h>e*e*3&&(a.alive=!1),a.role==="power"&&this.tick-a.born>C(35)&&(a.alive=!1)}this.bodies=this.bodies.filter(a=>a.alive);let o=0;for(const a of this.dust){if(!a.alive)continue;const r=a.x-t.x,c=a.y-t.y;r*r+c*c>i||a.m<t.mass*1e-5||(this.dust[o++]=a)}this.dust.length=o}leaderboard(){return[...this.titans.map((s,i)=>({name:gt[i].name,mass:s.mass,you:!1,idx:i,alive:s.alive})).filter(s=>s.alive).map(({name:s,mass:i,you:o,idx:a})=>({name:s,mass:i,you:o,idx:a})),{name:"You",mass:this.player.mass,you:!0,idx:-1}].sort((s,i)=>i.mass-s.mass)}hash(){const t=new Float64Array(1),e=new Uint32Array(t.buffer);let s=2166136261;const i=a=>{t[0]=a;for(const r of[e[0],e[1]])for(let c=0;c<32;c+=8)s=Math.imul(s^r>>>c&255,16777619)},o=this.player;for(const a of[this.tick,o.x,o.y,o.vx,o.vy,o.mass,this.bodies.length,this.dust.length])i(a);for(const a of this.bodies)for(const r of[a.id,a.x,a.y,a.mass])i(r);for(const a of this.dust)for(const r of[a.x,a.y,a.m])i(r);return(s>>>0).toString(16)}}const Se=[{id:"start",name:"Bright Start",icon:"✦",desc:n=>`Begin ${n*15}% bigger`,costs:[30,70,140,250,400]},{id:"magnet",name:"Gravity Well",icon:"◎",desc:n=>`Pull stardust from ${n*15}% farther`,costs:[30,70,140,250,400]},{id:"thrust",name:"Efficient Thrust",icon:"➤",desc:n=>`Boost sheds ${n*10}% less`,costs:[30,70,140,250,400]},{id:"shell",name:"Hardened Core",icon:"⬢",desc:n=>`Lose ${n*8}% less to meteors and blasts`,costs:[40,90,170,280,450]},{id:"luck",name:"Comet Luck",icon:"☄",desc:n=>`${n*20}% more golden comets`,costs:[40,90,170,280,450]},{id:"wind",name:"Second Wind",icon:"❤",desc:()=>"Survive one fatal hit per run",costs:[600]}],qt=(n,t)=>n.upgrades[t]??0;function Pe(n){const t=e=>qt(n,e);return{...Me,startMass:Me.startMass*(1+t("start")*.15),magnet:1+t("magnet")*.15,boostCost:1-t("thrust")*.1,shell:1-t("shell")*.08,luck:1+t("luck")*.2,secondWind:t("wind")>0}}function Bs(n,t){const e=Se.find(o=>o.id===t);if(!e)return!1;const s=qt(n,t);if(s>=e.costs.length)return!1;const i=e.costs[s];return n.stardust<i?!1:(n.stardust-=i,n.upgrades[t]=s+1,!0)}const Os=[0,3,6,10,16,24,34,46,60],Rs=[0,10,20,35,55,80,110,150,220],Mt=(n=new Date)=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;function Ns(n,t,e,s=Mt(),i="",o=Date.now()){const a=t.stats,r=[],c=(p,k)=>k>0&&r.push({label:p,value:Math.round(k)});c(`Reached ${R[a.peakStage].name}`,Os[a.peakStage]),c("Bodies swallowed",Math.floor(a.eaten/5)),c("Golden comets",a.gold),c("Titans devoured",a.titansEaten*20),c("Supernovae survived",a.novaSurvived*3),c("Meteor storms",a.stormsSurvived*2);const h=[];for(let p=1;p<=a.peakStage;p++)n.milestones&1<<p||(n.milestones|=1<<p,h.push(p),c(`First ${R[p].name}!`,Rs[p]));const d=[];for(const p of n.missions){if(p.done)continue;const k=ge.find(v=>v.id===p.id);if(!k)continue;const P=k.measure(t);k.total?p.progress+=P:p.progress=Math.max(p.progress,P),p.progress>=p.target&&(p.done=!0,d.push(p),c(`Mission: ${as(p)}`,p.reward))}let u=r.reduce((p,k)=>p+k.value,0);const m=n.dailyUsed!==s&&u>0;m&&(n.dailyUsed=s,r.push({label:"Daily spark ×2",value:u}),u*=2),n.stardust+=u,n.best.mass=Math.max(n.best.mass??0,a.peakMass),n.best.stage=Math.max(n.best.stage??0,a.peakStage),n.best.time=Math.max(n.best.time??0,Math.floor(a.ticks/60)),n.best.combo=Math.max(n.best.combo??0,a.bestCombo),n.best.eaten=Math.max(n.best.eaten??0,a.eaten),n.best.titans=Math.max(n.best.titans??0,a.titansEaten),n.stats.runs++,n.stats.eaten+=a.eaten,n.stats.seconds+=Math.floor(a.ticks/60),n.stats.titans+=a.titansEaten;for(const p of e)n.codex.includes(p)||n.codex.push(p);return n.history.unshift({at:o,seconds:Math.floor(a.ticks/60),eaten:a.eaten,mass:a.peakMass,stage:a.peakStage,titans:a.titansEaten,combo:a.bestCombo,cause:i,continues:a.continues,dust:u}),n.history.length=Math.min(n.history.length,Le),{lines:r,total:u,daily:m,milestones:h,missions:d}}const Fs=3,Gs=(n,t)=>Math.round((20+12*n)*Math.pow(2,t)),ge=[{id:"eat",text:"Swallow {n} bodies in one run",targets:[15,30,50,80,120],reward:15,measure:n=>n.stats.eaten},{id:"eatT",total:!0,text:"Swallow {n} bodies in total",targets:[100,250,500,900,1500],reward:25,measure:n=>n.stats.eaten},{id:"stage",text:"Become a {stage}",targets:[2,3,4,5,6,7,8],reward:30,measure:n=>n.stats.peakStage},{id:"gold",total:!0,text:"Catch {n} golden comet stardust",targets:[5,12,25,45,80],reward:20,measure:n=>n.stats.gold},{id:"combo",text:"Make a ×{n} swallow combo",targets:[4,6,8,11,15],reward:20,measure:n=>n.stats.bestCombo},{id:"rivals",text:"Swallow {n} rivals in one run",targets:[2,4,7,10,15],reward:20,measure:n=>n.rivals},{id:"time",text:"Survive {n} minutes in one run",targets:[2,4,6,9,12],reward:25,measure:n=>Math.floor(n.stats.ticks/3600)},{id:"powers",total:!0,text:"Grab {n} power orbs",targets:[3,8,15,25,40],reward:15,measure:n=>n.stats.powers},{id:"storm",total:!0,text:"Live through {n} meteor storms",targets:[1,3,6,10,15],reward:20,measure:n=>n.stats.stormsSurvived,minStage:2},{id:"nova",total:!0,text:"Survive {n} supernovae",targets:[1,3,6,10,15],reward:25,measure:n=>n.stats.novaSurvived,minStage:3},{id:"moons",total:!0,text:"Feed on {n} captured moons",targets:[2,6,12,20,35],reward:25,measure:n=>n.stats.moonsFed,minStage:4},{id:"titan",total:!0,text:"Devour {n} Titans",targets:[1,2,4,6,9],reward:40,measure:n=>n.stats.titansEaten,minStage:2}];function as(n){const t=ge.find(e=>e.id===n.id);return t?t.text.replace("{n}",String(n.target)).replace("{stage}",R[Math.min(R.length-1,n.target)]?.name??""):""}function ve(n,t=Math.random){const e=n.missions.filter(a=>a.done).length;n.missionsDone+=e,n.missions=n.missions.filter(a=>!a.done);const s=Math.min(4,Math.floor(n.missionsDone/6)),i=n.best.stage??0;let o=0;for(;n.missions.length<3&&o++<50;){const a=ge.filter(h=>!n.missions.some(d=>d.id===h.id)&&(h.minStage??0)<=Math.max(1,i+1));if(!a.length)break;const r=a[Math.floor(t()*a.length)];let c=r.targets[Math.min(r.targets.length-1,s)];r.id==="stage"&&(c=Math.min(R.length-1,Math.max(2,i+(i>=2?1:0)))),n.missions.push({id:r.id,target:c,reward:Math.round(r.reward*(1+s*.5)),progress:0,done:!1})}}const Hs={"Rocky Pebble":"Planets grow from pebbles like this, sticking together over millions of years.","Ice Pebble":"Beyond the frost line, water freezes into ice pebbles that build giant planets.","Ice Comet":"Comets are dirty snowballs; their tails always point away from the Sun.","Emerald Comet":"Some comets glow green from diatomic carbon breaking apart in sunlight.","Ember Comet":"Sungrazing comets can be vaporised as they skim past their star.","Grey Moon":"Our Moon drifts about 3.8 cm farther from Earth every year.","Frost Moon":"Icy moons like Europa may hide liquid oceans under their crust.","Lava Moon":"Io is the most volcanic body known, squeezed hot by Jupiter's tides.","Rust Moon":"Iron oxide — rust — is what makes Mars and many rocks look red.","Ocean World":"Earth is the only world known to have liquid water seas on its surface.","Desert World":"Dust storms on Mars can wrap the entire planet for weeks.","Jungle World":"Life changed Earth's air: plants filled it with oxygen.","Ice World":"Some exoplanets orbit so far out their skies are always night.","Lava World":"Planet 55 Cancri e may be covered in oceans of molten rock.","Toxic World":"Venus has clouds of sulphuric acid and surface heat that melts lead.","Banded Giant":"Jupiter's stripes are bands of wind racing in opposite directions.","Ringed Giant":"Saturn's rings are mostly ice and are less than a kilometre thick.","Storm Giant":"Jupiter's Great Red Spot is a storm bigger than Earth.","Ice Giant":"Uranus spins on its side, probably knocked over by an ancient impact.","Red Dwarf":"Red dwarfs are the most common stars and can shine for trillions of years.","Yellow Star":"The Sun turns about 4 million tonnes of matter into energy every second.","White Star":"Sirius, the brightest star in our night sky, is a hot white star.","Blue Star":"Blue stars burn so hot and fast they live only a few million years.","Red Supergiant":"Betelgeuse is so large it would swallow the orbit of Mars.","Blue Supergiant":"Rigel shines tens of thousands of times brighter than the Sun.",Pulsar:"Pulsars are city-sized dead stars that can spin hundreds of times a second.","Star Cluster":"Open clusters are stellar siblings born from the same cloud.","Globular Cluster":"Globular clusters pack up to a million ancient stars into a ball.","Spiral Galaxy":"The Milky Way is a barred spiral about 100,000 light-years across.","Elliptical Galaxy":"Giant ellipticals grow by merging with other galaxies."},Dt=[...It.flatMap((n,t)=>n.map((e,s)=>({code:`c${t}v${s}`,name:e,group:R[t].name,fact:Hs[e]??"",cls:t,variant:s}))),{code:"hole",name:"Black Hole",group:"Hazards",fact:"Not even light can escape from inside a black hole's event horizon.",cls:7,variant:0,special:"hole"},{code:"nova",name:"Supernova",group:"Hazards",fact:"A supernova can briefly outshine its entire galaxy.",cls:5,variant:1,special:"nova"},{code:"storm",name:"Meteor Storm",group:"Hazards",fact:"Earth sweeps up around 100 tonnes of space dust every day.",cls:2,variant:2,special:"storm"},...gt.map((n,t)=>({code:`titan${t}`,name:n.name,group:"Titans",fact:"A Titan of the galaxy. Devour it to prove you are bigger.",cls:Math.min(8,Us(n.mass)),variant:t,special:"titan"}))];function Us(n){let t=0;for(let e=1;e<R.length;e++)n>=R[e].min&&(t=e);return t}function Ws(n,t){for(const e of t)e.t==="eat"&&e.who==="player"&&(e.role==="rival"||e.role==="titan")&&n.rivals++,e.t==="capture"&&n.captured++}class Ce{constructor(){l(this,"startsOnPlayable",!1);l(this,"playing",!1);l(this,"muteListeners",[]);l(this,"storageListeners",[]);l(this,"hooks",{pause(){},resume(){}})}setAdHooks(t){this.hooks=t}loadingStart(){}loadingStop(){}gameplayStart(){this.playing||(this.playing=!0,this.sendGameplayStart())}gameplayStop(){this.playing&&(this.playing=!1,this.sendGameplayStop())}sendGameplayStart(){}sendGameplayStop(){}async midgameAd(){}async rewardedAd(){return!1}isMuted(){return!1}onMuteChange(t){this.muteListeners.push(t)}emitMute(t){for(const e of this.muteListeners)e(t)}onStorageSwitch(t){this.storageListeners.push(t)}emitStorageSwitch(){for(const t of this.storageListeners)t()}inviteLink(t){const e=globalThis.location;return e?`${e.origin}${e.pathname}?${new URLSearchParams(t).toString()}`:""}inviteParams(){const t=new URLSearchParams(globalThis.location?.search??""),e={};for(const s of["cs","cm","cst"]){const i=t.get(s);i!==null&&(e[s]=i)}return Object.keys(e).length?e:null}locale(){return globalThis.navigator?.language??"en"}}function Ee(n=""){const t=new Map;return{get(e){try{const s=globalThis.localStorage?.getItem(n+e);if(s!=null)return s}catch{}return t.get(e)??null},set(e,s){t.set(e,s);try{globalThis.localStorage?.setItem(n+e,s)}catch{}},remove(e){t.delete(e);try{globalThis.localStorage?.removeItem(n+e)}catch{}}}}function Q(){return globalThis.CrazyGames?.SDK}const qe=n=>n.environment==="disabled",qs=3e3;class _s extends Ce{constructor(e=qs){super();l(this,"name","crazygames");l(this,"startsOnPlayable",!0);l(this,"loading",!1);l(this,"ready",!1);l(this,"fallback",Ee());l(this,"storage",{get:e=>this.ready?Q().data.getItem(e):this.fallback.get(e),set:(e,s)=>this.ready?Q().data.setItem(e,s):this.fallback.set(e,s),remove:e=>this.ready?Q().data.removeItem?.(e):this.fallback.remove?.(e)});this.initTimeoutMs=e}async init(){const e=Q();if(!e||qe(e))return;let s;const i=new Promise(a=>s=setTimeout(()=>a(!1),this.initTimeoutMs)),o=Promise.resolve().then(()=>e.init()).then(()=>!0);try{if(!await Promise.race([o,i])){o.then(()=>this.goLive(e,!0),()=>{});return}this.goLive(e,!1)}catch{this.ready=!1}finally{clearTimeout(s)}}goLive(e,s){if(!qe(e)){try{e.game.addSettingsChangeListener(i=>this.emitMute(!!i.muteAudio)),this.ready=!0}catch{this.ready=!1;return}zs(this.storage,this.fallback),s&&(this.emitStorageSwitch(),this.emitMute(!!e.game.settings.muteAudio),this.playing&&e.game.gameplayStart())}}loadingStart(){this.ready&&(this.loading=!0,Q().game.loadingStart?.())}loadingStop(){!this.ready||!this.loading||(this.loading=!1,Q().game.loadingStop?.(),this.playing&&Q().game.gameplayStart())}sendGameplayStart(){this.ready&&!this.loading&&Q().game.gameplayStart()}sendGameplayStop(){this.ready&&!this.loading&&Q().game.gameplayStop()}isMuted(){return this.ready?!!Q().game.settings.muteAudio:!1}locale(){return this.ready&&Q().user?.systemInfo?.locale||super.locale()}midgameAd(){return this.requestAd("midgame").then(()=>{})}rewardedAd(){return this.requestAd("rewarded")}requestAd(e){return this.ready?new Promise(s=>{let i=!1;Q().ad.requestAd(e,{adStarted:()=>{i=!0,this.hooks.pause()},adFinished:()=>{i&&this.hooks.resume(),s(!0)},adError:()=>{i&&this.hooks.resume(),s(!1)}})}):Promise.resolve(!1)}inviteLink(e){try{const s=Q();if(this.ready&&s?.game.inviteLink)return s.game.inviteLink(e)}catch{}return super.inviteLink(e)}inviteParams(){try{const e=Q();if(this.ready&&e){if(e.game.inviteParams&&Object.keys(e.game.inviteParams).length)return e.game.inviteParams;if(e.game.getInviteParam){const s={};for(const i of["cs","cm","cst"]){const o=e.game.getInviteParam(i);o&&(s[i]=o)}if(Object.keys(s).length)return s}}}catch{}return super.inviteParams()}}class js extends Ce{constructor(){super(...arguments);l(this,"name","local");l(this,"storage",Ee())}async init(){}isMuted(){return new URLSearchParams(globalThis.location?.search??"").get("muteAudio")==="true"}}function Pt(){return globalThis.PokiSDK}class Vs extends Ce{constructor(){super(...arguments);l(this,"name","poki");l(this,"storage",Ee());l(this,"ready",!1)}async init(){const e=Pt();if(e){try{await e.init()}catch{}this.ready=!0}}loadingStop(){this.ready&&Pt().gameLoadingFinished()}sendGameplayStart(){this.ready&&Pt().gameplayStart()}sendGameplayStop(){this.ready&&Pt().gameplayStop()}async midgameAd(){if(!this.ready)return;let e=!1;await Pt().commercialBreak(()=>{e=!0,this.hooks.pause()}),e&&this.hooks.resume()}async rewardedAd(){if(!this.ready)return!1;let e=!1;const s=await Pt().rewardedBreak(()=>{e=!0,this.hooks.pause()});return e&&this.hooks.resume(),s}}function Ys(n="local"){switch(n){case"crazygames":return new _s;case"poki":return new Vs;default:return new js}}const w=n=>{const t=parseInt(n.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},te=[{base:w("#0b0a1f"),a:w("#1f6f8b"),b:w("#6b2a7a"),star:w("#cfe8ff")},{base:w("#0a0d22"),a:w("#2a7fa6"),b:w("#3b3a8f"),star:w("#d8f2ff")},{base:w("#0d0b1d"),a:w("#6d5a9e"),b:w("#2d6e7e"),star:w("#efe6ff")},{base:w("#0a0f1e"),a:w("#1d8a7a"),b:w("#8a3b78"),star:w("#e6fff6")},{base:w("#120a1a"),a:w("#a0522d"),b:w("#5a2a86"),star:w("#fff1dc")},{base:w("#150a14"),a:w("#c0485a"),b:w("#e09a3a"),star:w("#fff3e0")},{base:w("#08081c"),a:w("#3256c8"),b:w("#b03a8c"),star:w("#e3ecff")},{base:w("#06060f"),a:w("#5a2fa0"),b:w("#1b5c8a"),star:w("#d9d2ff")},{base:w("#070612"),a:w("#2fa0a0"),b:w("#c83c9a"),star:w("#ffffff")}],Yt=[{id:"ember",name:"Ember Gold",cost:0,aura:w("#ffc35a"),core:w("#fff1c9")},{id:"aurora",name:"Aurora",cost:120,aura:w("#4dffc3"),core:w("#d8fff1")},{id:"rose",name:"Rose Nebula",cost:160,aura:w("#ff6fb5"),core:w("#ffe0f0")},{id:"frost",name:"Frostfire",cost:200,aura:w("#6fd6ff"),core:w("#e6f8ff")},{id:"violet",name:"Violet Flame",cost:260,aura:w("#b07bff"),core:w("#efe3ff")},{id:"solar",name:"Solar White",cost:320,aura:w("#fff6e8"),core:w("#ffffff")},{id:"verdant",name:"Verdant Spark",cost:380,aura:w("#a6ff4d"),core:w("#f1ffd9")},{id:"prism",name:"Prism",cost:600,aura:w("#ffffff"),core:w("#ffffff"),prism:!0}];w("#ff4a3d");w("#ffb340");const Xs=w("#c46bff"),ee=w("#ffd34d"),Ft=[w("#4dd2ff"),w("#7dffb0"),w("#ff9a4d")],se=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],Kt=`
float hash11(float p) { p = fract(p * 0.1031); p *= p + 33.33; p *= p + p; return fract(p); }
float hash21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
vec2 hash22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }

// 2D value noise (cheap, smooth).
float vnoise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), u.x), mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm2(vec2 p, int oct) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 6; i++) { if (i >= oct) break; s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}

// 3D simplex noise (Ashima / Stefan Gustavson, MIT).
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm3(vec3 p, int oct) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { if (i >= oct) break; s += a * snoise(p); p = p * 2.02 + vec3(5.1, 1.3, 7.7); a *= 0.5; }
  return s;
}
`,_e=`
precision highp float;
attribute vec3 position;
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,Ks=`
precision highp float;
varying vec2 vUv;
uniform vec2 uHalf;      // half extents of the view in "shorter side = 1" units
uniform vec2 uOff[3];    // camera offset per octave layer (already divided by that layer's scale)
uniform float uFade;     // fract(log2(zoom))
uniform float uN;        // floor(log2(zoom)): seeds follow the absolute octave so layers never change when they shift
uniform float uTime;
uniform float uQuality;
uniform vec3 uBase, uA, uB;
${Kt}
vec3 nebula(vec2 q, float seed) {
  // Domain warp (2 cheap octaves), then gas, wisps and dark lanes: about 13 value-noise taps per layer.
  vec2 w = q;
  if (uQuality > 0.5) w += 0.9 * vec2(fbm2(q * 0.7 + seed, 2), fbm2(q * 0.7 + seed + 31.7, 2));
  float n = fbm2(w + vec2(uTime * 0.004, 0.0), uQuality > 0.5 ? 4 : 3);
  float m = fbm2(w * 1.7 - seed + 4.0, 3);
  float gas = smoothstep(0.38, 0.85, n);
  float wisps = smoothstep(0.5, 0.95, m) * (1.0 - gas * 0.5);
  vec3 c = uA * gas * 0.55 + uB * wisps * 0.45;
  float lane = smoothstep(0.55, 0.75, fbm2(q * 2.3 + seed * 1.3, 2));
  return c * (1.0 - lane * 0.55);
}
void main() {
  vec2 v = (vUv * 2.0 - 1.0) * uHalf;
  vec3 c = vec3(0.0);
  float wsum = 0.0;
  for (int k = 0; k < 3; k++) {
    float w = k == 0 ? 1.0 - uFade : (k == 1 ? 1.0 : uFade);
    float s = pow(2.0, float(k));
    vec2 q = uOff[k] + v * exp2(uFade) / s * 0.55;
    c += nebula(q, mod(uN + float(k), 61.0) * 13.7) * w;
    wsum += w;
  }
  c /= wsum;
  gl_FragColor = vec4(uBase + c, 1.0);
}
`,Qs=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uNebula;
uniform vec2 uHalf;
uniform vec2 uRes;
uniform vec2 uOff[9];    // 3 parallax layers × 3 octaves
uniform float uFade;
uniform float uN;
uniform float uTime;
uniform vec3 uStar;
uniform float uMotes;
uniform float uLayers;
${Kt}
// p: layer coordinates; qs: layer units per view unit (sets the on-screen star size in pixels).
float starLayer(vec2 p, float cell, float density, float seed, float qs, out vec3 tint) {
  vec2 g = p / cell;
  vec2 id = floor(g);
  vec2 f = fract(g);
  float h = hash21(id + seed);
  float tt = hash11(h * 7.7);
  tint = tt < 0.15 ? vec3(1.0, 0.75, 0.55) : (tt < 0.35 ? vec3(0.7, 0.85, 1.0) : vec3(1.0));
  if (h > density) return 0.0;
  vec2 pos = 0.2 + 0.6 * hash22(id + seed * 1.7);
  vec2 d = (f - pos) * cell;
  float pxPerUnit = uRes.y / (uHalf.y * 2.0) / qs;
  float sz = mix(0.6, 1.9, pow(hash11(h * 91.3), 6.0)) / pxPerUnit;
  float r = length(d) / sz;
  float tw = 0.65 + 0.35 * sin(uTime * (1.0 + h * 3.0) + h * 40.0);
  float core = exp(-r * r * 1.6);
  // A few bright stars get soft diffraction spikes.
  if (r > 12.0) return 0.0; // far from this cell's star: nothing to draw (most pixels)
  float spikes = 0.0;
  if (hash11(h * 13.1) > 0.985) spikes = (exp(-abs(d.x) / sz * 3.0) * exp(-abs(d.y) / (sz * 9.0)) + exp(-abs(d.y) / sz * 3.0) * exp(-abs(d.x) / (sz * 9.0))) * 0.6;

  return (core + spikes) * tw * (0.35 + 0.65 * hash11(h * 3.3));
}
void main() {
  vec3 col = texture2D(uNebula, vUv).rgb;
  vec2 v = (vUv * 2.0 - 1.0) * uHalf;
  vec3 stars = vec3(0.0);
  for (int L = 0; L < 3; L++) {
    if (float(L) >= uLayers) break;
    float cell = L == 0 ? 0.075 : (L == 1 ? 0.11 : 0.2);
    float dens = L == 0 ? 0.42 : (L == 1 ? 0.3 : 0.16);
    float bright = L == 0 ? 0.55 : (L == 1 ? 0.8 : 1.0);
    float wsum = 0.0;
    vec3 acc = vec3(0.0);
    for (int k = 0; k < 3; k++) {
      float w = k == 0 ? 1.0 - uFade : (k == 1 ? 1.0 : uFade);
      float qs = exp2(uFade) / pow(2.0, float(k));
      vec3 tint;
      float b = starLayer(uOff[L * 3 + k] + v * qs, cell, dens, float(L) * 101.0 + mod(uN + float(k), 61.0) * 7.3, qs, tint);
      // Fading layers fade in/out by brightness, not by size, so stars never pop.
      acc += tint * b * w;
      wsum += 1.0;
    }
    stars += acc * bright * 0.75;
  }
  col += stars * uStar;
  // Faint foreground motes drifting past faster than the world (depth cue).
  if (uMotes > 0.5) {
    vec3 t;
    float m = starLayer(uOff[8] * 2.2 + v * 0.8, 0.5, 0.09, 99.0, 0.8, t);
    col += vec3(0.55, 0.6, 0.8) * m * 0.12;
  }
  gl_FragColor = vec4(col, 1.0);
}
`;class Js{constructor(){l(this,"cam",new Ze(-1,1,1,-1,0,1));l(this,"nebScene",new he);l(this,"starScene",new he);l(this,"neb");l(this,"stars");l(this,"rt");l(this,"scale",.5);const t=new Xt(2,2);this.neb=new vt({vertexShader:_e,fragmentShader:Ks,depthTest:!1,depthWrite:!1,uniforms:{uHalf:{value:new mt(1,1)},uOff:{value:[new mt,new mt,new mt]},uFade:{value:0},uN:{value:0},uTime:{value:0},uQuality:{value:1},uBase:{value:new Et},uA:{value:new Et},uB:{value:new Et}}}),this.rt=new Te(4,4,{type:ts,magFilter:Fe,minFilter:Fe,depthBuffer:!1,samples:0}),this.stars=new vt({vertexShader:_e,fragmentShader:Qs,depthTest:!1,depthWrite:!1,uniforms:{uNebula:{value:this.rt.texture},uHalf:{value:new mt(1,1)},uRes:{value:new mt(1,1)},uOff:{value:Array.from({length:9},()=>new mt)},uFade:{value:0},uN:{value:0},uTime:{value:0},uStar:{value:new Et(1,1,1)},uMotes:{value:1},uLayers:{value:3}}}),this.nebScene.add(new bt(t,this.neb)),this.starScene.add(new bt(t,this.stars))}setSize(t,e,s,i){this.scale=i>.5?.38:.26,this.stars.uniforms.uLayers.value=i>.5?3:2,this.rt.setSize(Math.max(4,Math.round(t*s*this.scale)),Math.max(4,Math.round(e*s*this.scale)));const o=t>e?[t/e,1]:[1,e/t];this.neb.uniforms.uHalf.value.set(o[0],o[1]),this.stars.uniforms.uHalf.value.set(o[0],o[1]),this.stars.uniforms.uRes.value.set(t*s,e*s),this.neb.uniforms.uQuality.value=i}render(t,e,s,i,o,a,r){const c=Math.log2(Math.max(1e-6,i)),h=Math.floor(c),d=c-h,u=(v,y,f)=>{const b=Math.pow(2,h+y)*f,L=e*v/b%4096,D=-s*v/b%4096;return[L,D]},m=this.neb.uniforms.uOff.value;for(let v=0;v<3;v++){const[y,f]=u(.35,v,1.8);m[v].set(y,f)}this.neb.uniforms.uFade.value=d,this.neb.uniforms.uN.value=h,this.stars.uniforms.uN.value=h,this.neb.uniforms.uTime.value=o,this.neb.uniforms.uBase.value.set(...a.base),this.neb.uniforms.uA.value.set(...a.a),this.neb.uniforms.uB.value.set(...a.b);const p=this.stars.uniforms.uOff.value,k=[.12,.25,.5];for(let v=0;v<3;v++)for(let y=0;y<3;y++){const[f,b]=u(k[v],y,1);p[v*3+y].set(f,b)}this.stars.uniforms.uFade.value=d,this.stars.uniforms.uTime.value=o,this.stars.uniforms.uStar.value.set(...a.star),this.stars.uniforms.uMotes.value=r?1:0;const P=t.getRenderTarget();t.setRenderTarget(this.rt),t.render(this.nebScene,this.cam),t.setRenderTarget(P),t.render(this.starScene,this.cam)}}const ft=600,V={body:0,player:1,rival:2,titan:3,gold:4,magnet:5,shield:6,surge:7,meteor:8,nova:9,moon:10},Zs=`
precision highp float;
attribute vec3 position;
attribute vec3 iPos;   // x, y, radius (view units)
attribute vec4 iLook;  // class, variant, seed 0..1, spin
attribute vec4 iTint;  // aura rgb, aura strength
attribute vec4 iState; // danger (-1 edible, 0 none, 0.5 caution, 1 danger), flash, alpha, kind
uniform vec2 uHalf;
varying vec2 vP;
varying vec4 vLook;
varying vec4 vTint;
varying vec4 vState;
varying float vPx;
uniform float uPxPerUnit;
void main() {
  float ext = iLook.x >= 7.0 ? 1.15 : (iLook.x == 5.0 || iLook.x == 6.0 ? 3.2 : 2.5);
  if (iState.w == 9.0) ext = 3.2;
  vP = position.xy * 2.0 * ext;
  vLook = iLook; vTint = iTint; vState = iState;
  vPx = iPos.z * uPxPerUnit;
  vec2 world = iPos.xy + vP * iPos.z;
  gl_Position = vec4(world / uHalf, 0.0, 1.0);
}
`,ti=`
precision highp float;
varying vec2 vP;
varying vec4 vLook;
varying vec4 vTint;
varying vec4 vState;
varying float vPx;
uniform float uTime;
uniform float uQuality;
${Kt}
const vec3 LIGHT = normalize(vec3(-0.55, 0.6, 0.6));

mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }

vec3 pal(float i, vec3 a, vec3 b, vec3 c, vec3 d) { return a + b * cos(6.28318 * (c * i + d)); }

// Lit sphere shading helpers.
float diffuse(vec3 n) { return clamp(dot(n, LIGHT), 0.0, 1.0); }
vec3 shade(vec3 albedo, vec3 n, float amb) {
  float l = diffuse(n);
  float wrap = clamp(dot(n, LIGHT) * 0.5 + 0.5, 0.0, 1.0);
  return albedo * (amb + l * 0.95 + wrap * 0.12);
}

void main() {
  vec2 p = vP;
  float d = length(p);
  float cls = vLook.x;
  float variant = vLook.y;
  float seed = vLook.z;
  float spin = vLook.w;
  float kind = vState.w;
  int oct = uQuality > 0.75 ? 5 : (uQuality > 0.25 ? 4 : 3);
  // Thin features fade with size: tiny bodies get fewer details (no shimmer).
  float detail = clamp(vPx / 18.0, 0.0, 1.0);

  vec3 col = vec3(0.0);   // premultiplied colour
  float a = 0.0;          // coverage
  vec3 glow = vec3(0.0);  // additive glow

  bool sphere = d < 1.0;
  vec3 n = vec3(p, sqrt(max(0.0, 1.0 - d * d)));
  mat3 R = rotX(0.35 + seed * 0.6) * rotY(spin);
  vec3 sp = R * n;
  vec3 so = vec3(seed * 91.7, seed * 37.3, seed * 13.1);
  float aa = 1.5 / max(vPx, 1.0); // one pixel in radius units (edge antialias)
  float disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, d);

  if (kind == 4.0) {
    // Golden comet: hot white core, gold coma, sparkle cross.
    float core = exp(-d * d * 9.0);
    float coma = exp(-d * 2.6);
    float tw = 0.75 + 0.25 * sin(uTime * 7.0 + seed * 30.0);
    float cross = (exp(-abs(p.x) * 14.0) * exp(-abs(p.y) * 1.6) + exp(-abs(p.y) * 14.0) * exp(-abs(p.x) * 1.6)) * tw;
    glow = vec3(1.0, 0.85, 0.35) * (coma * 0.9 + cross * 0.8) + vec3(1.0, 0.98, 0.9) * core * 1.6;
  } else if (kind >= 5.0 && kind <= 7.0) {
    // Power orb: glassy bubble with a glyph.
    vec3 c = kind == 5.0 ? vec3(0.3, 0.82, 1.0) : (kind == 6.0 ? vec3(0.49, 1.0, 0.69) : vec3(1.0, 0.6, 0.3));
    float pulse = 0.85 + 0.15 * sin(uTime * 4.0 + seed * 10.0);
    float rim = smoothstep(0.7, 1.0, d) * disc;
    float g = 0.0;
    vec2 q = p / 0.62;
    if (kind == 5.0) { // magnet: a U
      float u = abs(length(q - vec2(0.0, 0.1)) - 0.45);
      u = q.y > 0.1 ? u : abs(abs(q.x) - 0.45);
      u = max(u, -min(q.y + 0.55, 1.0));
      g = 1.0 - smoothstep(0.08, 0.14, u);
    } else if (kind == 6.0) { // shield: a hexagon outline
      vec2 h = abs(q);
      float hx = max(h.x * 0.866 + h.y * 0.5, h.y);
      g = 1.0 - smoothstep(0.08, 0.14, abs(hx - 0.5));
    } else { // surge: double chevron
      vec2 h = vec2(q.x, abs(q.y));
      float c1 = abs(h.x - 0.35 + h.y * 0.9);
      float c2 = abs(h.x + 0.2 + h.y * 0.9);
      g = (1.0 - smoothstep(0.07, 0.13, min(c1, c2))) * step(h.y, 0.55);
    }
    col = (c * 0.18 + vec3(1.0) * g * 0.95 + c * rim * 0.9) * disc;
    a = disc * (0.35 + g * 0.6 + rim * 0.4);
    glow = c * exp(-max(0.0, d - 0.9) * 3.0) * 0.55 * pulse * (1.0 - disc * 0.6);
  } else if (cls < 0.5) {
    if (kind == 1.0) {
      // The player's first form: a warm spark (its gold ring is added below).
      float core = exp(-d * d * 5.0);
      float halo = exp(-d * 2.2) * 0.35;
      glow = vec3(1.0, 0.86, 0.6) * (core * 1.1 + halo);
    } else {
      // Small bodies: lumpy rocky or icy planetoids, lit like everything else (no glow, nothing white and blinding).
      bool on = d < 1.1;
      float lump = 1.0 + 0.1 * snoise(vec3(normalize(p + 1e-4) * 1.7, seed * 13.0));
      float dd = d / (0.9 * lump);
      float dsc = 1.0 - smoothstep(1.0 - aa * 2.0, 1.0 + aa * 2.0, dd);
      vec3 nn = vec3(p / (0.9 * lump), sqrt(max(0.0, 1.0 - dd * dd)));
      vec3 ssp = R * nn;
      float h = on ? fbm3(ssp * 3.0 + so, oct) : 0.0;
      float pit = on && detail > 0.2 ? 1.0 - smoothstep(0.0, 0.08, abs(snoise(ssp * 6.0 + so) - 0.3)) : 0.0;
      vec3 lo = variant < 0.5 ? vec3(0.26, 0.22, 0.2) : vec3(0.42, 0.55, 0.66);
      vec3 hi = variant < 0.5 ? vec3(0.62, 0.55, 0.48) : vec3(0.82, 0.9, 0.97);
      vec3 alb = mix(lo, hi, smoothstep(-0.5, 0.5, h)) * (1.0 - pit * 0.3);
      // A faint cool rim so dark rocks still read against dark space.
      float rim = pow(1.0 - nn.z, 3.0) * 0.35;
      col = (shade(alb, nn, 0.16) + vec3(0.55, 0.65, 0.85) * rim) * dsc;
      a = dsc;
    }
  } else if (cls < 1.5) {
    // Comet nucleus: dark icy rock inside a bright coma.
    vec3 coma = variant < 0.5 ? vec3(0.55, 0.85, 1.0) : (variant < 1.5 ? vec3(0.45, 1.0, 0.7) : vec3(1.0, 0.6, 0.3));
    float h = fbm3(sp * 3.0 + so, oct);
    vec3 alb = mix(vec3(0.32, 0.34, 0.38), vec3(0.75, 0.82, 0.9), smoothstep(-0.2, 0.4, h));
    // Lumpy silhouette.
    float lump = 1.0 + 0.08 * snoise(vec3(normalize(p) * 2.0, seed * 10.0));
    float dd = d / (0.62 * lump);
    float dsc = 1.0 - smoothstep(1.0 - aa * 2.0, 1.0 + aa * 2.0, dd);
    vec3 nn = vec3(p / (0.62 * lump), sqrt(max(0.0, 1.0 - dd * dd)));
    col = (shade(alb, nn, 0.5) + coma * 0.25) * dsc;
    a = dsc;
    glow = coma * (exp(-d * 2.4) * 0.55 + exp(-d * 6.0) * 0.3);
  } else if (cls < 2.5) {
    // Moon: cratered rock. Variants: grey, frost, lava (glowing cracks), rust.
    bool on = d < 1.0 + aa * 2.0;
    float h = on ? fbm3(sp * 2.5 + so, oct) : 0.0;
    float cr = on ? 1.0 - smoothstep(0.0, 0.09, abs(snoise(sp * 4.5 + so) - 0.25)) : 0.0;
    float cr2 = on && detail > 0.3 ? 1.0 - smoothstep(0.0, 0.06, abs(snoise(sp * 9.0 + so * 1.3) - 0.3)) : 0.0;
    vec3 lo, hi;
    if (variant < 0.5) { lo = vec3(0.32, 0.31, 0.33); hi = vec3(0.72, 0.7, 0.68); }
    else if (variant < 1.5) { lo = vec3(0.45, 0.58, 0.7); hi = vec3(0.9, 0.96, 1.0); }
    else if (variant < 2.5) { lo = vec3(0.12, 0.08, 0.07); hi = vec3(0.35, 0.25, 0.22); }
    else { lo = vec3(0.38, 0.2, 0.14); hi = vec3(0.8, 0.5, 0.35); }
    vec3 alb = mix(lo, hi, smoothstep(-0.5, 0.6, h));
    alb *= 1.0 - (cr * 0.25 + cr2 * 0.15) * detail;
    col = shade(alb, n, 0.12) * disc;
    if (variant > 1.5 && variant < 2.5) {
      float crack = on ? 1.0 - smoothstep(0.0, 0.05, abs(snoise(sp * 3.2 + so))) : 0.0;
      col += vec3(1.0, 0.4, 0.1) * crack * 1.4 * disc;
      glow += vec3(1.0, 0.35, 0.1) * exp(-max(0.0, d - 1.0) * 6.0) * 0.25;
    }
    a = disc;
  } else if (cls < 3.5) {
    // Terrestrial worlds with clouds and an atmosphere.
    bool on = d < 1.0 + aa * 2.0;
    float h = on ? fbm3(sp * 1.8 + so, oct) : 0.0;
    vec3 alb; vec3 atm; float clouds = 0.0; float spec = 0.0; vec3 emit = vec3(0.0);
    vec3 cs = rotY(uTime * 0.03) * sp;
    float cl = on ? fbm3(cs * 2.6 + so * 1.7, oct) : 0.0;
    if (variant < 0.5) { // ocean
      float land = smoothstep(0.02, 0.08, h);
      vec3 sea = mix(vec3(0.03, 0.15, 0.4), vec3(0.08, 0.35, 0.65), smoothstep(-0.4, 0.05, h));
      vec3 gr = mix(vec3(0.2, 0.45, 0.18), vec3(0.6, 0.5, 0.3), smoothstep(0.1, 0.45, h));
      alb = mix(sea, gr, land);
      spec = 1.0 - land;
      clouds = smoothstep(0.05, 0.45, cl);
      atm = vec3(0.35, 0.65, 1.0);
    } else if (variant < 1.5) { // desert
      float b = sin(sp.y * 9.0 + h * 6.0) * 0.5 + 0.5;
      alb = mix(vec3(0.7, 0.45, 0.22), vec3(0.95, 0.78, 0.5), b * 0.6 + smoothstep(-0.3, 0.5, h) * 0.4);
      clouds = smoothstep(0.35, 0.7, cl) * 0.4;
      atm = vec3(1.0, 0.7, 0.4);
    } else if (variant < 2.5) { // jungle
      alb = mix(vec3(0.05, 0.25, 0.12), vec3(0.3, 0.6, 0.2), smoothstep(-0.3, 0.4, h));
      alb = mix(alb, vec3(0.05, 0.2, 0.35), 1.0 - smoothstep(-0.25, -0.15, h));
      clouds = smoothstep(0.0, 0.4, cl) * 0.85;
      spec = 1.0 - smoothstep(-0.25, -0.15, h);
      atm = vec3(0.45, 1.0, 0.75);
    } else if (variant < 3.5) { // ice
      alb = mix(vec3(0.6, 0.75, 0.88), vec3(0.97, 0.99, 1.0), smoothstep(-0.3, 0.3, h));
      float crack = on ? 1.0 - smoothstep(0.0, 0.04, abs(snoise(sp * 3.0 + so))) : 0.0;
      alb = mix(alb, vec3(0.25, 0.5, 0.75), crack * 0.6 * detail);
      clouds = smoothstep(0.3, 0.7, cl) * 0.5;
      spec = 0.4;
      atm = vec3(0.7, 0.9, 1.0);
    } else if (variant < 4.5) { // lava
      alb = mix(vec3(0.08, 0.05, 0.05), vec3(0.25, 0.14, 0.1), smoothstep(-0.3, 0.4, h));
      float crack = on ? 1.0 - smoothstep(0.0, 0.07, abs(snoise(sp * 2.6 + so))) : 0.0;
      emit = vec3(1.0, 0.38, 0.08) * (crack * 1.5 + (1.0 - smoothstep(-0.5, -0.2, h)) * 0.8);
      atm = vec3(1.0, 0.4, 0.15);
    } else { // toxic
      float sw = on ? fbm3(sp * 2.0 + vec3(0.0, uTime * 0.02, 0.0) + so, oct) : 0.0;
      alb = mix(vec3(0.45, 0.5, 0.1), vec3(0.85, 0.9, 0.35), smoothstep(-0.4, 0.4, sw));
      clouds = smoothstep(0.2, 0.6, cl) * 0.5;
      atm = vec3(0.7, 1.0, 0.3);
    }
    vec3 surf = shade(alb, n, 0.07);
    float sh = pow(max(0.0, dot(reflect(-LIGHT, n), vec3(0.0, 0.0, 1.0))), 24.0) * spec * diffuse(n);
    surf += vec3(0.9, 0.95, 1.0) * sh * 0.6;
    surf = mix(surf, vec3(1.0) * (0.15 + diffuse(n) * 0.95), clouds * detail);
    surf += emit;
    // Atmosphere: fresnel tint on the disc and a soft rim outside it, on the lit side mostly.
    float fres = pow(1.0 - n.z, 2.5);
    float lit = clamp(dot(normalize(vec3(p, 0.2)), LIGHT) * 0.6 + 0.6, 0.0, 1.2);
    surf += atm * fres * 0.55 * lit;
    col = surf * disc;
    a = disc;
    float rim = exp(-max(0.0, d - 1.0) * 9.0) * (1.0 - disc);
    glow += atm * rim * 0.75 * lit;
  } else if (cls < 4.5) {
    // Gas giants: banded, ringed, storm, ice.
    vec3 c1, c2, c3; vec3 atm;
    if (variant < 0.5) { c1 = vec3(0.85, 0.65, 0.45); c2 = vec3(0.55, 0.35, 0.22); c3 = vec3(0.95, 0.9, 0.8); atm = vec3(1.0, 0.8, 0.6); }
    else if (variant < 1.5) { c1 = vec3(0.92, 0.82, 0.6); c2 = vec3(0.7, 0.58, 0.38); c3 = vec3(1.0, 0.95, 0.85); atm = vec3(1.0, 0.9, 0.7); }
    else if (variant < 2.5) { c1 = vec3(0.75, 0.4, 0.35); c2 = vec3(0.4, 0.2, 0.3); c3 = vec3(0.95, 0.75, 0.6); atm = vec3(1.0, 0.6, 0.55); }
    else { c1 = vec3(0.45, 0.75, 0.9); c2 = vec3(0.25, 0.45, 0.75); c3 = vec3(0.8, 0.95, 1.0); atm = vec3(0.5, 0.85, 1.0); }
    vec3 bp = rotY(spin * 0.5) * (rotX(0.25 + seed * 0.3) * n);
    float turb = d < 1.0 + aa * 2.0 ? fbm3(bp * vec3(1.5, 6.0, 1.5) + so + vec3(uTime * 0.02, 0.0, 0.0), oct) : 0.0;
    float lat = bp.y * 7.0 + turb * 2.2;
    float bands = sin(lat * 2.0 + seed * 6.0) * 0.5 + 0.5;
    float fine = sin(lat * 7.0 + turb * 4.0) * 0.5 + 0.5;
    vec3 alb = mix(c2, c1, bands);
    alb = mix(alb, c3, fine * 0.35 * detail);
    if (variant > 1.5 && variant < 2.5) {
      vec2 sc = vec2(bp.x - 0.25, (bp.y + 0.2) * 1.8);
      float spot = 1.0 - smoothstep(0.08, 0.22, length(sc));
      float swirl = sin(atan(sc.y, sc.x) * 3.0 + length(sc) * 30.0 - uTime) * 0.5 + 0.5;
      alb = mix(alb, vec3(0.85, 0.35, 0.25) * (0.8 + swirl * 0.3), spot * step(0.0, bp.z));
    }
    vec3 surf = shade(alb, n, 0.08);
    float fres = pow(1.0 - n.z, 3.0);
    surf += atm * fres * 0.35;
    col = surf * disc;
    a = disc;
    glow += atm * exp(-max(0.0, d - 1.0) * 10.0) * (1.0 - disc) * 0.45;
    if (variant > 0.5 && variant < 1.5 || variant > 2.5) {
      // Rings: intersect the view ray with a tilted ring plane; hide the part behind the planet.
      vec3 N = normalize(vec3(sin(seed * 6.0) * 0.25, 0.92, 0.38));
      float zr = -(N.x * p.x + N.y * p.y) / N.z;
      vec3 rp = vec3(p, zr);
      float rho = length(rp);
      float ring = smoothstep(1.35, 1.42, rho) * (1.0 - smoothstep(2.15, 2.3, rho));
      float rb = 0.55 + 0.45 * sin(rho * 38.0 + seed * 9.0) * sin(rho * 11.0);
      ring *= rb * (1.0 - smoothstep(1.78, 1.84, rho) * (1.0 - smoothstep(1.86, 1.9, rho)) * 0.9);
      bool behind = d < 1.0 && zr < n.z;
      float shadowed = 1.0 - smoothstep(0.85, 1.0, length(rp - LIGHT * dot(rp, LIGHT))) * step(dot(rp, LIGHT), 0.0);
      vec3 rc = mix(c1, c3, 0.5) * (0.35 + 0.65 * shadowed);
      if (!behind) {
        float ra = ring * (variant > 2.5 ? 0.45 : 0.85);
        col = col * (1.0 - ra) + rc * ra;
        a = a + ra * (1.0 - a);
      }
    }
  } else if (cls < 6.5 || kind == 9.0) {
    // Stars and supergiants: boiling granulated surface, limb darkening, corona and flickering rays.
    vec3 hot, cool;
    float v = variant;
    if (kind == 9.0) { hot = vec3(1.0, 0.95, 0.85); cool = vec3(1.0, 0.45, 0.2); }
    else if (cls < 5.5) {
      if (v < 0.5) { hot = vec3(1.0, 0.55, 0.3); cool = vec3(0.8, 0.18, 0.08); }
      else if (v < 1.5) { hot = vec3(1.0, 0.92, 0.6); cool = vec3(1.0, 0.55, 0.15); }
      else if (v < 2.5) { hot = vec3(1.0, 1.0, 0.97); cool = vec3(0.8, 0.85, 1.0); }
      else { hot = vec3(0.8, 0.9, 1.0); cool = vec3(0.3, 0.45, 1.0); }
    } else {
      if (v < 0.5) { hot = vec3(1.0, 0.6, 0.35); cool = vec3(0.75, 0.12, 0.08); }
      else if (v < 1.5) { hot = vec3(0.85, 0.92, 1.0); cool = vec3(0.25, 0.4, 1.0); }
      else { hot = vec3(0.9, 0.95, 1.0); cool = vec3(0.55, 0.7, 1.0); }
    }
    bool pulsar = cls > 5.5 && v > 1.5 && kind != 9.0;
    float t = uTime * (kind == 9.0 ? 0.6 : 0.15);
    bool on = d < 1.0 + aa * 2.0;
    float gran = on ? fbm3(sp * 5.0 + so + vec3(t, t * 0.7, 0.0), oct) : 0.0;
    float big = on ? fbm3(sp * 1.6 + so - vec3(0.0, t * 0.4, t), 3) : 0.0;
    float limb = pow(max(n.z, 0.0), 0.45);
    vec3 surf = mix(cool, hot, clamp(0.55 + gran * 0.6 + big * 0.3, 0.0, 1.0)) * (0.55 + 0.75 * limb);
    float core = 1.0;
    if (pulsar) { surf = mix(cool, hot, 0.8) * 1.4; core = 0.45; }
    float coreDisc = 1.0 - smoothstep(core - aa, core + aa, d);
    col = surf * coreDisc * 0.95;
    a = coreDisc;
    float ang = atan(p.y, p.x);
    float rays = pow(vnoise(vec2(ang * 7.0 + seed * 50.0, uTime * 0.6)) * 0.5 + vnoise(vec2(ang * 17.0 - seed * 20.0, uTime * 0.9 + 3.0)) * 0.5, 2.0);
    float rd = max(0.0, d - core);
    vec3 cor = mix(cool, hot, 0.4);
    glow += cor * (exp(-rd * 3.6) * 0.6 + exp(-rd * 1.3) * 0.16 * (0.6 + rays * 1.4)) * (1.0 - coreDisc * 0.9);
    if (pulsar) {
      float beamA = uTime * 2.4 + seed * 6.0;
      vec2 bd = vec2(cos(beamA), sin(beamA));
      float along = dot(p, bd);
      float across = abs(p.x * bd.y - p.y * bd.x);
      float beam = exp(-across * across / (0.02 + abs(along) * 0.03)) * exp(-abs(along) * 0.9);
      glow += hot * beam * 1.2;
    }
    if (kind == 9.0) {
      float pulse = 0.5 + 0.5 * sin(uTime * (8.0 + vTint.w * 22.0));
      col *= 1.0 + pulse * 0.6;
      glow *= 1.0 + pulse * 0.8;
    }
  } else if (cls < 7.5) {
    // Star clusters: a swarm of points with a soft glow.
    float r = d;
    vec2 g = p * (variant < 0.5 ? 9.0 : 13.0);
    vec2 id = floor(g); vec2 f = fract(g) - 0.5;
    float h = hash21(id + seed * 77.0);
    float dens = exp(-r * r * (variant < 0.5 ? 3.5 : 6.0));
    float st = step(1.0 - dens * 0.9, h) * exp(-dot(f, f) * 40.0) * (0.5 + h);
    vec3 sc = h > 0.7 ? vec3(0.7, 0.85, 1.0) : vec3(1.0, 0.85, 0.65);
    glow = sc * st * 1.4 + mix(vec3(0.9, 0.8, 1.0), vec3(1.0, 0.85, 0.6), variant) * exp(-r * r * 5.0) * 0.6;
  } else {
    // Galaxies: logarithmic spiral arms or a smooth elliptical glow, seen at a tilt.
    float inc = 0.45 + seed * 0.4;
    vec2 q = vec2(p.x * cos(seed * 6.28) - p.y * sin(seed * 6.28), p.x * sin(seed * 6.28) + p.y * cos(seed * 6.28));
    q.y /= inc;
    float r = length(q);
    float th = atan(q.y, q.x);
    vec3 coreC = vec3(1.0, 0.88, 0.65);
    if (variant < 0.5) {
      float arms = cos(2.0 * (th - log(max(r, 0.02)) * 2.4 - uTime * 0.05 - seed * 9.0));
      float dust = fbm2(q * 6.0 + seed * 20.0, 3);
      float armL = smoothstep(0.2, 1.0, arms) * exp(-r * 2.2) * (0.6 + dust * 0.8);
      float hii = step(0.93, hash21(floor(q * 40.0) + seed)) * armL * 3.0;
      glow = coreC * exp(-r * r * 30.0) * 1.5 + vec3(0.55, 0.7, 1.0) * armL * 1.1 + vec3(1.0, 0.45, 0.7) * hii + vec3(0.6, 0.65, 0.9) * exp(-r * 2.8) * 0.25;
    } else {
      glow = coreC * (exp(-r * r * 12.0) * 1.2 + exp(-r * 3.5) * 0.45);
    }
    glow *= smoothstep(1.15, 0.85, length(p));
  }

  // Ownership and threat cues.
  float danger = vState.x;
  float ringD = abs(d - 1.16);
  if (kind == 1.0 || kind == 10.0) {
    // The player: a warm aura and a crisp bright ring; captured moons show a faint ring in the same colour.
    vec3 au = vTint.rgb;
    float str = kind == 1.0 ? vTint.w : 0.35;
    glow += au * exp(-max(0.0, d - 1.0) * 5.0) * (1.0 - disc * 0.7) * 0.75 * str;
    glow += au * (1.0 - smoothstep(0.0, 0.035 + aa, abs(d - 1.1))) * 0.9 * str;
  } else if (kind == 2.0 || kind == 3.0) {
    vec3 au = vTint.rgb;
    glow += au * exp(-max(0.0, d - 1.0) * 6.0) * (1.0 - disc * 0.8) * 0.5;
    if (kind == 3.0) {
      // Titans wear a slowly turning crown of light.
      float crown = (1.0 - smoothstep(0.0, 0.03 + aa, abs(d - 1.28))) * (0.5 + 0.5 * sin(atan(p.y, p.x) * 8.0 + uTime * 1.5));
      glow += vec3(1.0, 0.85, 0.4) * crown * 0.9;
    }
  }
  if (danger > 0.75) {
    float pulse = 0.65 + 0.35 * sin(uTime * 7.0);
    float ring = 1.0 - smoothstep(0.0, 0.045 + aa, ringD);
    // Spiky silhouette marks: small teeth around the ring.
    float teeth = (1.0 - smoothstep(0.0, 0.03 + aa, abs(d - 1.24))) * step(0.6, sin(atan(p.y, p.x) * 18.0 + uTime * 0.8) * 0.5 + 0.5);
    glow += vec3(1.0, 0.25, 0.18) * (ring * 1.1 + teeth * 0.7) * pulse;
    glow += vec3(1.0, 0.2, 0.12) * exp(-max(0.0, d - 1.0) * 7.0) * (1.0 - disc) * 0.25 * pulse;
  } else if (danger > 0.25) {
    float ring = 1.0 - smoothstep(0.0, 0.03 + aa, ringD);
    glow += vec3(1.0, 0.72, 0.25) * ring * 0.55;
  }

  float flash = vState.y;
  col = mix(col, vec3(1.0) * a, flash * 0.7);
  glow += vec3(1.0) * flash * exp(-max(0.0, d - 1.0) * 4.0) * 0.5;

  float alpha = vState.z;
  gl_FragColor = vec4((col + glow) * alpha, a * alpha);
}
`,ei=`
precision highp float;
attribute vec3 position;
attribute vec4 tPos;  // x, y, width, length (view units)
attribute vec2 tDir;  // unit direction the tail points to (away from motion)
attribute vec4 tCol;  // rgb, intensity
uniform vec2 uHalf;
varying vec2 vQ;
varying vec4 vCol;
void main() {
  vQ = position.xy + 0.5; // x across 0..1, y along 0..1
  vec2 side = vec2(-tDir.y, tDir.x);
  vec2 w = tPos.xy + tDir * (vQ.y * tPos.w) + side * ((vQ.x - 0.5) * tPos.z * 2.0 * (1.0 - vQ.y * 0.7));
  vCol = tCol;
  gl_Position = vec4(w / uHalf, 0.0, 1.0);
}
`,si=`
precision highp float;
varying vec2 vQ;
varying vec4 vCol;
uniform float uTime;
void main() {
  float across = 1.0 - abs(vQ.x - 0.5) * 2.0;
  float fall = pow(1.0 - vQ.y, 1.6);
  float flick = 0.85 + 0.15 * sin(vQ.y * 30.0 - uTime * 12.0);
  float a = pow(across, 1.5) * fall * flick * vCol.a;
  gl_FragColor = vec4(vCol.rgb * a, 0.0);
}
`;class je{constructor(t){l(this,"mesh");l(this,"tails");l(this,"geo");l(this,"tgeo");l(this,"aPos",new Float32Array(ft*3));l(this,"aLook",new Float32Array(ft*4));l(this,"aTint",new Float32Array(ft*4));l(this,"aState",new Float32Array(ft*4));l(this,"tPos",new Float32Array(ft*4));l(this,"tDir",new Float32Array(ft*2));l(this,"tCol",new Float32Array(ft*4));l(this,"material");l(this,"tailMaterial");l(this,"n",0);l(this,"nt",0);const e=new Xt(1,1);this.geo=new de,this.geo.index=e.index,this.geo.setAttribute("position",e.getAttribute("position"));const s=(i,o)=>new Ae(i,o).setUsage(yt);this.geo.setAttribute("iPos",s(this.aPos,3)),this.geo.setAttribute("iLook",s(this.aLook,4)),this.geo.setAttribute("iTint",s(this.aTint,4)),this.geo.setAttribute("iState",s(this.aState,4)),this.material=new vt({vertexShader:Zs,fragmentShader:ti,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:ue,uniforms:{uHalf:{value:[1,1]},uTime:{value:0},uQuality:{value:1},uPxPerUnit:{value:100}}}),this.mesh=new bt(this.geo,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.tgeo=new de,this.tgeo.index=e.index,this.tgeo.setAttribute("position",e.getAttribute("position")),this.tgeo.setAttribute("tPos",s(this.tPos,4)),this.tgeo.setAttribute("tDir",s(this.tDir,2)),this.tgeo.setAttribute("tCol",s(this.tCol,4)),this.tailMaterial=new vt({vertexShader:ei,fragmentShader:si,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:ue,uniforms:{uHalf:{value:[1,1]},uTime:{value:0}}}),this.tails=new bt(this.tgeo,this.tailMaterial),this.tails.frustumCulled=!1,this.tails.renderOrder=8,t.add(this.tails,this.mesh)}begin(){this.n=0,this.nt=0}add(t){if(this.n>=ft)return;const e=this.n++;this.aPos.set([t.x,t.y,t.r],e*3),this.aLook.set([t.cls,t.variant,t.seed,t.spin],e*4),this.aTint.set([t.tint[0],t.tint[1],t.tint[2],t.tintStrength],e*4),this.aState.set([t.danger,t.flash,t.alpha,t.kind],e*4)}tail(t,e,s,i,o,a,r,c){if(this.nt>=ft)return;const h=this.nt++;this.tPos.set([t,e,o,a],h*4),this.tDir.set([s,i],h*2),this.tCol.set([r[0],r[1],r[2],c],h*4)}end(t,e,s,i){this.geo.instanceCount=this.n,this.tgeo.instanceCount=this.nt;for(const o of["iPos","iLook","iTint","iState"])this.geo.getAttribute(o).needsUpdate=!0;for(const o of["tPos","tDir","tCol"])this.tgeo.getAttribute(o).needsUpdate=!0;this.material.uniforms.uTime.value=t,this.material.uniforms.uHalf.value=e,this.material.uniforms.uPxPerUnit.value=s,this.material.uniforms.uQuality.value=i,this.tailMaterial.uniforms.uTime.value=t,this.tailMaterial.uniforms.uHalf.value=e,this.mesh.visible=this.n>0,this.tails.visible=this.nt>0}}const ii=`
precision highp float;
attribute vec2 position;
attribute vec4 pCol;  // rgb, alpha
attribute vec2 pSize; // size in px, sparkle 0..1
uniform vec2 uHalf;
uniform float uMaxSize;
varying vec4 vCol;
varying float vSparkle;
varying float vSize;
void main() {
  vCol = pCol;
  vSparkle = pSize.y;
  vSize = min(pSize.x, uMaxSize);
  gl_PointSize = max(2.0, vSize);
  gl_Position = vec4(position / uHalf, 0.0, 1.0);
}
`,ai=`
precision highp float;
varying vec4 vCol;
varying float vSparkle;
varying float vSize;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  float d = length(p);
  float core = exp(-d * d * 14.0) * 1.6;
  float halo = exp(-d * 4.0) * 0.55;
  float cross = (exp(-abs(p.x) * 9.0) * exp(-abs(p.y) * 1.8) + exp(-abs(p.y) * 9.0) * exp(-abs(p.x) * 1.8)) * vSparkle;
  // Points smaller than the 2 px floor keep their brightness in check.
  float scale = min(1.0, vSize / 2.0);
  float a = (core + halo + cross * 0.6) * vCol.a * scale * (1.0 - smoothstep(0.85, 1.0, d));
  gl_FragColor = vec4(vCol.rgb * a, 0.0);
}
`;class os{constructor(t,e,s){l(this,"points");l(this,"pos");l(this,"col");l(this,"size");l(this,"geo",new es);l(this,"mat");l(this,"n",0);this.max=e,this.pos=new Float32Array(e*2),this.col=new Float32Array(e*4),this.size=new Float32Array(e*2),this.geo.setAttribute("position",new Wt(this.pos,2).setUsage(yt)),this.geo.setAttribute("pCol",new Wt(this.col,4).setUsage(yt)),this.geo.setAttribute("pSize",new Wt(this.size,2).setUsage(yt)),this.geo.boundingSphere=new ss(new Et,1e6),this.mat=new vt({vertexShader:ii,fragmentShader:ai,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:lt,uniforms:{uHalf:{value:[1,1]},uMaxSize:{value:64}}}),this.points=new ps(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,t.add(this.points)}push(t,e,s,i,o,a,r,c){if(this.n>=this.max)return;const h=this.n++;this.pos[h*2]=t,this.pos[h*2+1]=e,this.col[h*4]=i,this.col[h*4+1]=o,this.col[h*4+2]=a,this.col[h*4+3]=r,this.size[h*2]=s,this.size[h*2+1]=c}flush(t,e){this.geo.setDrawRange(0,this.n);for(const s of["position","pCol","pSize"])this.geo.getAttribute(s).needsUpdate=!0;this.mat.uniforms.uHalf.value=t,this.mat.uniforms.uMaxSize.value=e,this.points.visible=this.n>0,this.n=0}}const it=3e3;class oi{constructor(t){l(this,"x",new Float64Array(it));l(this,"y",new Float64Array(it));l(this,"vx",new Float64Array(it));l(this,"vy",new Float64Array(it));l(this,"life",new Float32Array(it));l(this,"max",new Float32Array(it));l(this,"sz",new Float64Array(it));l(this,"rgb",new Float32Array(it*3));l(this,"drag",new Float32Array(it));l(this,"spark",new Float32Array(it));l(this,"n",0);l(this,"out");l(this,"budget",1);this.out=new os(t,it,20)}emit(t,e,s,i,o,a,r,c=2,h=0){if(this.n>=it)return;const d=this.n++;this.x[d]=t,this.y[d]=e,this.vx[d]=s,this.vy[d]=i,this.life[d]=a,this.max[d]=a,this.sz[d]=o,this.rgb[d*3]=r[0],this.rgb[d*3+1]=r[1],this.rgb[d*3+2]=r[2],this.drag[d]=c,this.spark[d]=h}burst(t,e,s,i,o,a,r,c,h=.3){const d=Math.round(s*this.budget);for(let u=0;u<d;u++){const m=c()*Math.PI*2,p=i*(.25+c()*.75);this.emit(t,e,Math.cos(m)*p,Math.sin(m)*p,o*(.5+c()),a*(.6+c()*.6),r,2.2,c()<.3?h:0)}}update(t,e,s,i,o){let a=0;for(let r=0;r<this.n;r++){if(this.life[r]-=t,this.life[r]<=0)continue;const c=Math.exp(-this.drag[r]*t);this.vx[r]*=c,this.vy[r]*=c,this.x[r]+=this.vx[r]*t,this.y[r]+=this.vy[r]*t,a!==r&&(this.x[a]=this.x[r],this.y[a]=this.y[r],this.vx[a]=this.vx[r],this.vy[a]=this.vy[r],this.life[a]=this.life[r],this.max[a]=this.max[r],this.sz[a]=this.sz[r],this.rgb[a*3]=this.rgb[r*3],this.rgb[a*3+1]=this.rgb[r*3+1],this.rgb[a*3+2]=this.rgb[r*3+2],this.drag[a]=this.drag[r],this.spark[a]=this.spark[r]);const h=this.life[a]/this.max[a],d=Math.min(1,h*2.2)*Math.min(1,(1-h)*12+.2);this.out.push((this.x[a]-e)*i,-(this.y[a]-s)*i,Math.max(1.5,this.sz[a]*i*o),this.rgb[a*3],this.rgb[a*3+1],this.rgb[a*3+2],d,this.spark[a]),a++}this.n=a}clear(){this.n=0}}class ni{constructor(t){l(this,"out");this.out=new os(t,1e3,9)}}const ie=96,ri=`
precision highp float;
attribute vec3 position;
attribute vec4 rPos;   // x, y, radius, thickness (view units)
attribute vec4 rCol;   // rgb, alpha
attribute vec2 rStyle; // dash count (0 = solid), spin
uniform vec2 uHalf;
varying vec2 vP;
varying vec4 vCol;
varying vec2 vStyle;
varying float vEdge;
varying float vR;
void main() {
  float ext = rPos.z + rPos.w * 3.0;
  vP = position.xy * 2.0 * ext;
  vCol = rCol; vStyle = rStyle; vEdge = rPos.w; vR = rPos.z;
  gl_Position = vec4((rPos.xy + vP) / uHalf, 0.0, 1.0);
}
`,li=`
precision highp float;
varying vec2 vP;
varying vec4 vCol;
varying vec2 vStyle;
varying float vEdge;
varying float vR;
uniform float uTime;
void main() {
  float d = length(vP);
  float x = (d - vR) / max(vEdge, 1e-5);
  float a = exp(-x * x * 2.5) + exp(-abs(x) * 1.2) * 0.25;
  if (vStyle.x > 0.0) {
    float ang = atan(vP.y, vP.x);
    a *= step(0.0, sin(ang * vStyle.x + uTime * vStyle.y));
  }
  gl_FragColor = vec4(vCol.rgb * a * vCol.a, 0.0);
}
`;class ci{constructor(t){l(this,"geo",new de);l(this,"aPos",new Float32Array(ie*4));l(this,"aCol",new Float32Array(ie*4));l(this,"aSty",new Float32Array(ie*2));l(this,"mat");l(this,"mesh");l(this,"bursts",[]);l(this,"n",0);const e=new Xt(1,1);this.geo.index=e.index,this.geo.setAttribute("position",e.getAttribute("position"));const s=(i,o)=>new Ae(i,o).setUsage(yt);this.geo.setAttribute("rPos",s(this.aPos,4)),this.geo.setAttribute("rCol",s(this.aCol,4)),this.geo.setAttribute("rStyle",s(this.aSty,2)),this.mat=new vt({vertexShader:ri,fragmentShader:li,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:lt,uniforms:{uHalf:{value:[1,1]},uTime:{value:0}}}),this.mesh=new bt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,t.add(this.mesh)}burst(t,e,s,i,o,a,r,c=1){this.bursts.length<48&&this.bursts.push({x:t,y:e,r0:s,r1:i,w:o,t:0,life:a,rgb:r,a:c})}draw(t,e,s,i,o,a,r=0,c=0){if(this.n>=ie)return;const h=this.n++;this.aPos.set([t,e,s,i],h*4),this.aCol.set([o[0],o[1],o[2],a],h*4),this.aSty.set([r,c],h*2)}update(t,e,s,i){this.bursts=this.bursts.filter(o=>(o.t+=t)<o.life);for(const o of this.bursts){const a=o.t/o.life,r=1-Math.pow(1-a,3);this.draw((o.x-e)*i,-(o.y-s)*i,(o.r0+(o.r1-o.r0)*r)*i,o.w*i*(1-a*.5),o.rgb,o.a*(1-a)*(1-a))}}end(t,e){this.geo.instanceCount=this.n;for(const s of["rPos","rCol","rStyle"])this.geo.getAttribute(s).needsUpdate=!0;this.mat.uniforms.uHalf.value=e,this.mat.uniforms.uTime.value=t,this.mesh.visible=this.n>0,this.n=0}clear(){this.bursts=[]}}const pt=48,hi=`
precision highp float;
attribute vec2 position;
attribute vec2 tUv; // along 0..1 (0 = head), side -1..1
uniform vec2 uHalf;
varying vec2 vUv;
void main() { vUv = tUv; gl_Position = vec4(position / uHalf, 0.0, 1.0); }
`,di=`
precision highp float;
varying vec2 vUv;
uniform vec3 uCol;
uniform float uAlpha;
uniform float uTime;
${Kt}
void main() {
  float along = vUv.x;
  float across = 1.0 - abs(vUv.y);
  float n = vnoise(vec2(along * 12.0 - uTime * 3.0, vUv.y * 2.0)) * 0.5 + 0.5;
  float a = pow(across, 1.8) * pow(1.0 - along, 1.4) * (0.6 + n * 0.6) * uAlpha;
  vec3 c = mix(uCol, vec3(1.0), pow(across, 6.0) * (1.0 - along) * 0.6);
  gl_FragColor = vec4(c * a, 0.0);
}
`;class ui{constructor(t){l(this,"hx",new Float64Array(pt));l(this,"hy",new Float64Array(pt));l(this,"count",0);l(this,"pos",new Float32Array(pt*2*2));l(this,"uv",new Float32Array(pt*2*2));l(this,"geo",new es);l(this,"mat");l(this,"mesh");l(this,"acc",0);const e=[];for(let s=0;s<pt-1;s++){const i=s*2;e.push(i,i+1,i+2,i+1,i+3,i+2)}this.geo.setIndex(e),this.geo.setAttribute("position",new Wt(this.pos,2).setUsage(yt)),this.geo.setAttribute("tUv",new Wt(this.uv,2).setUsage(yt)),this.geo.boundingSphere=new ss(new Et,1e6),this.mat=new vt({vertexShader:hi,fragmentShader:di,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:ue,uniforms:{uHalf:{value:[1,1]},uCol:{value:[1,1,1]},uAlpha:{value:1},uTime:{value:0}}}),this.mesh=new bt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh)}reset(t,e){this.count=1,this.hx[0]=t,this.hy[0]=e}update(t,e,s,i,o,a,r,c,h,d,u){if(this.acc+=t,this.acc>1/50||this.count===0){this.acc=0;for(let p=Math.min(this.count,pt-1);p>0;p--)this.hx[p]=this.hx[p-1],this.hy[p]=this.hy[p-1];this.count=Math.min(pt,this.count+1)}this.hx[0]=e,this.hy[0]=s;const m=this.count;for(let p=0;p<pt;p++){const k=Math.min(p,m-1),P=Math.min(k+1,m-1),v=Math.max(k-1,0);let y=this.hx[v]-this.hx[P],f=this.hy[v]-this.hy[P];const b=Math.hypot(y,f)||1;y/=b,f/=b;const L=p/(pt-1),D=i*.85*(1-L*.75),T=(this.hx[k]-o)*r,B=-(this.hy[k]-a)*r,Y=-f*D*r,tt=-y*D*r;this.pos.set([T+Y,B+tt,T-Y,B-tt],p*4),this.uv.set([L,1,L,-1],p*4)}this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("tUv").needsUpdate=!0,this.mat.uniforms.uHalf.value=d,this.mat.uniforms.uCol.value=c,this.mat.uniforms.uAlpha.value=m>2?h:0,this.mat.uniforms.uTime.value=u}}const _t=8,fi=`
precision highp float;
varying vec2 vUv;
uniform vec2 uHalf;
uniform vec3 uNova;      // x, y, max wave radius (view units)
uniform float uWarn;     // 0..1 progress to the blast
uniform vec3 uBlock[${_t}];
uniform int uNBlock;
uniform float uTime;
void main() {
  vec2 v = (vUv * 2.0 - 1.0) * uHalf;
  vec2 to = v - uNova.xy;
  float d = length(to);
  if (d > uNova.z) { gl_FragColor = vec4(0.0); return; }
  bool safe = false;
  for (int i = 0; i < ${_t}; i++) {
    if (i >= uNBlock) break;
    vec3 b = uBlock[i];
    vec2 bo = b.xy - uNova.xy;
    float t = dot(bo, to) / max(dot(to, to), 1e-6);
    if (t > 0.0 && t < 1.0 && dot(bo, bo) < dot(to, to)) {
      vec2 c = uNova.xy + to * t;
      if (length(b.xy - c) < b.z) safe = true;
    }
  }
  float edge = 1.0 - smoothstep(uNova.z * 0.85, uNova.z, d);
  float pulse = 0.5 + 0.5 * sin(uTime * (6.0 + uWarn * 14.0));
  vec3 c;
  float a;
  if (safe) {
    float hatch = step(0.5, fract((v.x + v.y) * 14.0 - uTime * 0.6));
    c = vec3(0.35, 0.85, 1.0);
    a = (0.08 + hatch * 0.07) * edge;
  } else {
    float rings = 0.5 + 0.5 * sin(d * 18.0 - uTime * 10.0);
    c = vec3(1.0, 0.42, 0.15);
    a = (0.07 + 0.1 * uWarn + rings * 0.04) * (0.7 + 0.3 * pulse) * edge;
  }
  gl_FragColor = vec4(c * a, 0.0);
}
`;class pi{constructor(t){l(this,"mesh");l(this,"mat");this.mat=new vt({vertexShader:`
precision highp float;
attribute vec3 position;
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:fi,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:lt,uniforms:{uHalf:{value:[1,1]},uNova:{value:[0,0,0]},uWarn:{value:0},uBlock:{value:Array.from({length:_t},()=>[0,0,0]).flat()},uNBlock:{value:0},uTime:{value:0}}}),this.mesh=new bt(new Xt(2,2),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.mesh.visible=!1,t.add(this.mesh)}set(t,e,s,i=0,o=[],a=0){if(this.mesh.visible=t,!t||!s)return;this.mat.uniforms.uHalf.value=e,this.mat.uniforms.uNova.value=s,this.mat.uniforms.uWarn.value=i;const r=this.mat.uniforms.uBlock.value;r.fill(0),o.slice(0,_t).forEach((c,h)=>r.splice(h*3,3,c[0],c[1],c[2])),this.mat.uniforms.uNBlock.value=Math.min(_t,o.length),this.mat.uniforms.uTime.value=a}}const ae=8,re=13,mi=`
precision highp float;
attribute vec3 position;
attribute vec3 hPos;  // x, y, horizon radius (view units)
attribute vec4 hLook; // seed, mode (0 hazard, 1 player hole, 2 quasar), warn 0..1, alpha
attribute vec4 hTint; // disk tint rgb, tint mix
uniform vec2 uHalf;
uniform float uPxPerUnit;
varying vec2 vP;
varying vec4 vLook;
varying vec4 vTint;
varying float vPx;
void main() {
  vP = position.xy * 2.0 * ${re.toFixed(1)};
  vLook = hLook;
  vTint = hTint;
  vPx = hPos.z * uPxPerUnit;
  gl_Position = vec4((hPos.xy + vP * hPos.z) / uHalf, 0.0, 1.0);
}
`,gi=`
precision highp float;
varying vec2 vP;
varying vec4 vLook;
varying vec4 vTint;
varying float vPx;
uniform float uTime;
uniform float uQuality;
${Kt}
void main() {
  vec2 p = vP;
  float d = length(p);
  float seed = vLook.x;
  float mode = vLook.y;
  float warn = vLook.z;
  float alpha = vLook.w;
  float aa = 1.5 / max(vPx, 1.0);
  vec3 hot = vec3(1.0, 0.86, 0.6);
  vec3 warm = vec3(1.0, 0.45, 0.15);
  if (mode > 0.5) { hot = mix(hot, vTint.rgb + 0.4, vTint.w); warm = mix(warm, vTint.rgb, vTint.w); }
  float t = uTime;
  vec3 glow = vec3(0.0);

  // Pull zone: a slow faint spiral of infalling dust out to the edge of the quad.
  float ang = atan(p.y, p.x);
  float spiral = sin(ang * 3.0 + log(max(d, 0.5)) * 5.0 + t * 0.9 + seed * 20.0) * 0.5 + 0.5;
  float zone = smoothstep(${re.toFixed(1)}, ${(re*.55).toFixed(1)}, d) * smoothstep(1.5, 3.0, d);
  float swirlN = vnoise(vec2(ang * 4.0 + t * 0.3, log(max(d, 0.5)) * 3.0 - t * 0.5));
  glow += mix(vec3(0.45, 0.35, 0.8), warm, 0.3) * zone * spiral * swirlN * 0.16;
  // Danger ring at the point of no return when the player is close.
  float nr = 1.0 - smoothstep(0.0, 0.08 + aa, abs(d - 3.2));
  float dash = step(0.0, sin(ang * 24.0 - t * 2.0));
  glow += vec3(1.0, 0.3, 0.2) * nr * dash * warn * (0.6 + 0.4 * sin(t * 6.0));

  // Accretion disk in a tilted plane (front half drawn over the shadow, back half hidden by it).
  float tilt = 0.28 + seed * 0.08;
  vec2 dp = vec2(p.x, p.y / tilt);
  float dr = length(dp);
  float da = atan(dp.y, dp.x);
  float diskBand = smoothstep(1.55, 1.9, dr) * (1.0 - smoothstep(3.6, 5.2, dr));
  // Noise only where the disk can be (most of the quad is the faint pull zone).
  float flow = dr < 5.4 ? fbm2(vec2(da * 3.0 - t * 1.6 / max(dr, 1.0) * 2.0, dr * 2.5), uQuality > 0.5 ? 4 : 2) : 0.0;
  float doppler = 0.55 + 0.45 * cos(da - 0.4);
  vec3 diskC = mix(warm, hot, smoothstep(4.5, 1.6, dr));
  float disk = diskBand * (0.45 + flow * 0.9) * doppler;
  bool front = p.y < 0.0;
  // Lensed far side: a bright arc hugging the shadow above and below.
  float lensBand = 1.0 - smoothstep(0.0, 0.38, abs(d - 1.3));
  float lens = lensBand > 0.0 ? lensBand * (0.55 + 0.45 * fbm2(vec2(ang * 5.0 + t * 1.2, d * 4.0), 3)) : 0.0;
  lens *= 0.6 + 0.4 * cos(ang - 1.2);
  // Photon ring.
  float photon = 1.0 - smoothstep(0.0, 0.035 + aa, abs(d - 1.06));
  float shadow = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, d);

  glow += hot * photon * 1.2;
  glow += mix(warm, hot, 0.5) * lens * 0.6 * (1.0 - shadow);
  vec3 col = vec3(0.0);
  float a = shadow;
  if (!front || d > 1.0) glow += diskC * disk * (front ? 1.0 : 0.85) * (d < 1.05 && !front ? 0.0 : 1.0);

  // The horizon itself stays pure black (no disk or lens light leaks inside it).
  glow *= 1.0 - shadow;
  if (mode > 1.5) {
    // Quasar jets: two beams along the spin axis.
    float across = abs(p.x);
    float along = abs(p.y);
    float jet = exp(-across * across / (0.05 + along * 0.035)) * smoothstep(${re.toFixed(1)}, 2.0, along) * smoothstep(1.0, 1.6, along);
    float knots = 0.85 + 0.15 * sin(along * 2.0 - t * 6.0);
    glow += mix(vec3(0.6, 0.85, 1.0), vTint.rgb, 0.4) * jet * knots * 1.4;
  }
  if (mode > 0.5) {
    // The player's own aura: a soft halo in their colour around the whole disk.
    glow += vTint.rgb * exp(-max(0.0, dr - 4.0) * 1.2) * smoothstep(1.2, 2.0, d) * 0.12;
  }
  gl_FragColor = vec4((col + glow) * alpha, a * alpha);
}
`;class Ve{constructor(t){l(this,"mesh");l(this,"geo");l(this,"aPos",new Float32Array(ae*3));l(this,"aLook",new Float32Array(ae*4));l(this,"aTint",new Float32Array(ae*4));l(this,"mat");l(this,"n",0);l(this,"list",[]);const e=new Xt(1,1);this.geo=new de,this.geo.index=e.index,this.geo.setAttribute("position",e.getAttribute("position"));const s=(i,o)=>new Ae(i,o).setUsage(yt);this.geo.setAttribute("hPos",s(this.aPos,3)),this.geo.setAttribute("hLook",s(this.aLook,4)),this.geo.setAttribute("hTint",s(this.aTint,4)),this.mat=new vt({vertexShader:mi,fragmentShader:gi,transparent:!0,depthTest:!1,depthWrite:!1,blending:St,blendSrc:lt,blendDst:ue,uniforms:{uHalf:{value:[1,1]},uTime:{value:0},uQuality:{value:1},uPxPerUnit:{value:100}}}),this.mesh=new bt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,t.add(this.mesh)}begin(){this.n=0,this.list.length=0}add(t){if(this.n>=ae)return;const e=this.n++;this.aPos.set([t.x,t.y,t.r],e*3),this.aLook.set([t.seed,t.mode,t.warn,t.alpha],e*4),this.aTint.set([t.tint[0],t.tint[1],t.tint[2],t.tintMix],e*4),this.list.push({x:t.x,y:t.y,r:t.r})}end(t,e,s,i){this.geo.instanceCount=this.n;for(const o of["hPos","hLook","hTint"])this.geo.getAttribute(o).needsUpdate=!0;this.mat.uniforms.uTime.value=t,this.mat.uniforms.uHalf.value=e,this.mat.uniforms.uPxPerUnit.value=s,this.mat.uniforms.uQuality.value=i,this.mesh.visible=this.n>0}}const le=4,ce=3,vi={uniforms:{tDiffuse:{value:null},uHalf:{value:new mt(1,1)},uLens:{value:Array.from({length:le*3},()=>0)},uNLens:{value:0},uWave:{value:Array.from({length:ce*4},()=>0)},uNWave:{value:0},uTime:{value:0},uGrain:{value:1},uCA:{value:1},uFlash:{value:0},uFlashCol:{value:[1,1,1]}},vertexShader:`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
uniform sampler2D tDiffuse;
uniform vec2 uHalf;
uniform vec3 uLens[${le}];
uniform int uNLens;
uniform vec4 uWave[${ce}];
uniform int uNWave;
uniform float uTime;
uniform float uGrain;
uniform float uCA;
uniform float uFlash;
uniform vec3 uFlashCol;
varying vec2 vUv;
float h(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec2 v = (vUv * 2.0 - 1.0) * uHalf;
  vec2 off = vec2(0.0);
  for (int i = 0; i < ${le}; i++) {
    if (i >= uNLens) break;
    vec2 to = v - uLens[i].xy;
    float d = length(to);
    float rs = uLens[i].z;
    // Einstein-ring-like bend: light from behind is pulled around the hole.
    float k = rs * rs * 2.2 / max(d, rs * 0.9);
    off -= to / max(d, 1e-4) * k * smoothstep(rs * 14.0, rs * 3.0, d);
  }
  for (int i = 0; i < ${ce}; i++) {
    if (i >= uNWave) break;
    vec2 to = v - uWave[i].xy;
    float d = length(to);
    float x = (d - uWave[i].z) / max(uWave[i].w, 1e-4);
    off += to / max(d, 1e-4) * exp(-x * x) * uWave[i].w * 0.6;
  }
  vec2 uv = vUv + off / (uHalf * 2.0);
  vec2 c = vUv - 0.5;
  float r2 = dot(c, c);
  vec2 ca = c * r2 * 0.012 * uCA;
  vec3 col;
  col.r = texture2D(tDiffuse, uv + ca).r;
  col.g = texture2D(tDiffuse, uv).g;
  col.b = texture2D(tDiffuse, uv - ca).b;
  col *= 1.0 - smoothstep(0.18, 0.85, r2) * 0.45;
  col += (h(vUv * 917.0 + fract(uTime * 7.3)) - 0.5) * 0.025 * uGrain;
  col = mix(col, uFlashCol, uFlash);
  // Soft shoulder so stacked glows don't clip harshly.
  col = col / (1.0 + max(col - 1.0, 0.0) * 0.6);
  gl_FragColor = vec4(col, 1.0);
}`};class xi extends xs{constructor(t){super(),this.draw=t,this.needsSwap=!1}render(t,e,s){t.setRenderTarget(s),t.clear(),this.draw(s)}}class yi{constructor(t,e){l(this,"composer");l(this,"bloom");l(this,"final");l(this,"tier",2);const s=new Te(4,4,{type:ts,samples:0});this.composer=new ms(t,s),this.composer.addPass(new xi(()=>e())),this.bloom=new gs(new mt(256,256),.7,.5,.8),this.composer.addPass(this.bloom),this.final=new vs(vi),this.composer.addPass(this.final)}setSize(t,e,s,i){this.tier=i,this.composer.setPixelRatio(s),this.composer.setSize(t,e),this.bloom.enabled=i>=2,this.final.uniforms.uHalf.value.set(t>e?t/e:1,t>e?1:e/t)}render(t,e,s,i,o,a,r){const c=this.final.uniforms.uLens.value,h=Math.min(le,s.length);for(let m=0;m<h;m++)c.splice(m*3,3,s[m].x,s[m].y,s[m].r);this.final.uniforms.uNLens.value=h;const d=this.final.uniforms.uWave.value,u=Math.min(ce,i.length);for(let m=0;m<u;m++)d.splice(m*4,4,i[m].x,i[m].y,i[m].r,i[m].w);this.final.uniforms.uNWave.value=u,this.final.uniforms.uTime.value=e,this.final.uniforms.uGrain.value=r?1:0,this.final.uniforms.uCA.value=this.tier>=2?1:.5,this.final.uniforms.uFlash.value=o,this.final.uniforms.uFlashCol.value=a,this.composer.render(t)}}const bi=[[.75,.9,1],[.55,.85,1],[.8,.75,.7],[.45,.75,1],[1,.8,.55],[1,.8,.45],[.75,.85,1],[.95,.9,1],[.7,.75,1]];class ki{constructor(t){l(this,"renderer");l(this,"scene",new he);l(this,"cam",new Ze(-1,1,1,-1,-1,1));l(this,"bg",new Js);l(this,"bodies");l(this,"holes");l(this,"dust");l(this,"particles");l(this,"rings");l(this,"trail");l(this,"nova");l(this,"post");l(this,"w",1);l(this,"h",1);l(this,"dpr",1);l(this,"half",[1,1]);l(this,"tier",2);l(this,"reduceMotion",!1);l(this,"skin",Yt[0]);l(this,"skinIndex",0);l(this,"camX",0);l(this,"camY",0);l(this,"zoom",13);l(this,"zoomVel",0);l(this,"pulse",1);l(this,"pulseT",0);l(this,"shake",0);l(this,"time",0);l(this,"flash",0);l(this,"flashCol",[1,1,1]);l(this,"playerFlash",0);l(this,"flashes",new Map);l(this,"ghosts",[]);l(this,"sky",{...te[0]});l(this,"skyTarget",0);l(this,"dead",!1);l(this,"deathT",0);l(this,"marks",[]);l(this,"rnd",Math.random);l(this,"pxPerUnit",100);l(this,"playerScreen",{x:0,y:0,r:10});l(this,"resScale",1);l(this,"thumbs",new Map);l(this,"thumbKit",null);this.renderer=new ys({canvas:t,antialias:!1,powerPreference:"high-performance",alpha:!1,stencil:!1,depth:!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(723487,1),this.dust=new ni(this.scene),this.holes=new Ve(this.scene),this.nova=new pi(this.scene),this.trail=new ui(this.scene),this.bodies=new je(this.scene),this.particles=new oi(this.scene),this.rings=new ci(this.scene),this.post=new yi(this.renderer,()=>this.drawScene())}phoneZoom(){const t=this.h>this.w;return t&&this.w<560?.62:!t&&this.h<520?.78:1}setResScale(t){const e=Math.max(.55,Math.min(1,t));Math.abs(e-this.resScale)<.01||(this.resScale=e,this.resize(this.w,this.h))}setTier(t){this.tier=t,this.resize(this.w,this.h)}resize(t,e){this.w=Math.max(1,t),this.h=Math.max(1,e);const s=this.tier===0?1:this.tier===1?1.6:2;this.dpr=Math.max(.75,Math.min(s,window.devicePixelRatio||1)*this.resScale),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1),this.half=this.w>this.h?[this.w/this.h,1]:[1,this.h/this.w],this.bg.setSize(this.w,this.h,this.dpr,this.tier>=2?1:0),this.post.setSize(this.w,this.h,this.dpr,this.tier),this.particles.budget=this.tier===0?.5:1}reset(t){const e=t.player;this.camX=e.x,this.camY=e.y,this.zoom=ke(e.r)*this.phoneZoom(),this.zoomVel=0,this.pulse=1,this.pulseT=0,this.ghosts=[],this.flashes.clear(),this.particles.clear(),this.rings.clear(),this.trail.reset(e.x,e.y),this.dead=!1,this.deathT=0,this.skyTarget=e.stage,this.sky={...te[e.stage]},this.flash=0}onEvents(t,e){const s=t.player,i=this.skin.aura,o=this.rnd;for(const a of e)switch(a.t){case"eat":{const r=bi[a.cls]??[1,1,1],c=a.who==="player"?s:t.bodies.find(d=>d.id===a.eaterId);this.ghosts.push({x:a.x,y:a.y,r:a.r,cls:a.cls,variant:a.seed%It[a.cls].length,seed:a.seed,tx:c?c.x:a.x,ty:c?c.y:a.y,t:0,kind:a.who==="player"?1:0});const h=a.who==="player"?10+Math.min(20,a.combo*3):6;this.particles.burst(a.x,a.y,h,E(a.r)*2.5,a.r*.25,.7,r,o,.6),a.who==="player"?(this.rings.burst(a.x,a.y,a.r*.8,a.r*2.4,a.r*.25,.45,i,.7),this.playerFlash=Math.min(.5,this.playerFlash+.18)):a.who==="hole"&&this.rings.burst(a.x,a.y,a.r,a.r*.2,a.r*.2,.5,[.7,.5,1],.6);break}case"dust":o()<.5&&this.particles.emit(a.x,a.y,(o()-.5)*s.r,(o()-.5)*s.r,s.r*.12,.35,i,4,.8);break;case"collect":{const r=a.kind==="gold"?ee:Ft[we.indexOf(a.kind)];this.particles.burst(a.x,a.y,26,E(s.r)*3,s.r*.18,.9,r,o,1),this.rings.burst(a.x,a.y,s.r*.5,s.r*4,s.r*.3,.6,r,1);break}case"stage":this.skyTarget=a.stage,this.rings.burst(s.x,s.y,s.r,s.r*14,s.r*.8,1.6,i,1),this.rings.burst(s.x,s.y,s.r,s.r*8,s.r*.4,1.1,[1,1,1],.8),this.particles.burst(s.x,s.y,80,E(s.r)*4,s.r*.25,1.6,i,o,1),this.reduceMotion||(this.pulseT=2.6),this.flash=.35,this.flashCol=[i[0]*.6+.4,i[1]*.6+.4,i[2]*.6+.4];break;case"hit":this.particles.burst(a.x,a.y,a.by==="nova"?50:18,E(s.r)*3,s.r*.18,.8,a.by==="nova"?[1,.6,.25]:[1,.45,.2],o,.4),this.playerFlash=1,this.addShake(a.by==="nova"?1:.5),a.by==="nova"&&(this.flash=.45,this.flashCol=[1,.75,.5]);break;case"bump":this.particles.burst(a.x,a.y,8,E(s.r)*1.5,s.r*.1,.4,[1,.95,.85],o,.5),this.addShake(.15*Math.min(2,a.strength));break;case"shieldBlock":this.rings.burst(a.x,a.y,s.r*1.2,s.r*1.8,s.r*.15,.35,Ft[1],1);break;case"novaBlast":this.particles.burst(a.x,a.y,140,E(s.r)*6,s.r*.35,2,[1,.8,.5],o,1),this.rings.burst(a.x,a.y,s.r,s.r*6,s.r*1.2,.8,[1,.95,.85],1),this.addShake(.6),this.flash=Math.max(this.flash,.25),this.flashCol=[1,.85,.65];break;case"novaSafe":this.rings.burst(s.x,s.y,s.r*1.1,s.r*2.2,s.r*.2,.6,[.4,.9,1],1);break;case"titanEaten":this.particles.burst(a.x,a.y,120,E(s.r)*5,s.r*.3,1.8,ee,o,1),this.rings.burst(a.x,a.y,s.r,s.r*10,s.r*.6,1.4,ee,1),this.flash=.3,this.flashCol=[1,.9,.6];break;case"holeEaten":this.particles.burst(a.x,a.y,90,E(s.r)*4,s.r*.2,1.5,[.7,.5,1],o,1),this.rings.burst(a.x,a.y,s.r*3,s.r*.5,s.r*.5,.9,[.8,.6,1],1);break;case"capture":this.flashes.set(a.id,1);break;case"moonFed":this.particles.burst(a.x,a.y,12,E(s.r),s.r*.12,.6,i,o,1);break;case"moonLost":this.particles.burst(a.x,a.y,14,E(s.r)*1.5,s.r*.12,.6,[.8,.8,.85],o,.3);break;case"secondWind":this.rings.burst(s.x,s.y,s.r,s.r*9,s.r*.7,1,[1,1,1],1),this.particles.burst(s.x,s.y,60,E(s.r)*4,s.r*.2,1.2,i,o,1),this.flash=.5,this.flashCol=[1,1,1];break;case"revive":this.dead=!1,this.deathT=0,this.trail.reset(s.x,s.y),this.rings.burst(s.x,s.y,s.r*6,s.r,s.r*.5,.8,i,1),this.rings.burst(s.x,s.y,s.r,s.r*5,s.r*.3,.9,[1,1,1],.8),this.particles.burst(s.x,s.y,70,E(s.r)*3,s.r*.2,1.2,i,o,1),this.flash=.4,this.flashCol=[1,1,1];break;case"death":this.dead=!0,this.deathT=0,this.particles.burst(a.x,a.y,160,E(s.r)*4,s.r*.3,2.2,i,o,1),this.particles.burst(a.x,a.y,60,E(s.r)*2,s.r*.2,1.6,[1,1,1],o,1),this.rings.burst(a.x,a.y,s.r,s.r*7,s.r*.6,1.2,i,1),this.addShake(.8);break}}addShake(t){this.reduceMotion||(this.shake=Math.min(1.2,this.shake+t))}frame(t,e,s,i=!1){this.time+=s;const o=t.player,a=(g,S)=>g+(S-g)*e,r=a(o.px,o.x),c=a(o.py,o.y),h=this.reduceMotion?.12:.3,d=r+o.vx*h,u=c+o.vy*h,m=1-Math.exp(-s*(this.dead?1.5:4));this.camX+=(d-this.camX)*m,this.camY+=(u-this.camY)*m,this.pulseT>0&&(this.pulseT=Math.max(0,this.pulseT-s));const p=this.pulseT>0?1-this.pulseT/2.6:1;this.pulse=this.pulseT>0?1+.55*Math.sin(Math.min(1,p)*Math.PI):1;const k=this.phoneZoom(),P=ke(o.r)*k*(o.boosting?1.06:1)*this.pulse*(i?1.15:1),v=3.2,y=v*v*(P-this.zoom)-2*v*this.zoomVel;this.zoomVel+=y*s,this.zoom+=this.zoomVel*s,this.zoom<1e-6&&(this.zoom=P),this.shake=Math.max(0,this.shake-s*2.2);let f=0,b=0;if(this.shake>0){const g=this.shake*this.shake*this.zoom*.025;f=(Math.sin(this.time*61)+Math.sin(this.time*37))*g,b=(Math.cos(this.time*53)+Math.sin(this.time*29))*g}const L=this.camX+f,D=this.camY+b,T=1/this.zoom;this.pxPerUnit=Math.min(this.w,this.h)/2*this.dpr;const B=(g,S)=>[(g-L)*T,-(S-D)*T],Y=te[Math.min(this.skyTarget,te.length-1)],tt=1-Math.exp(-s*.6);this.sky.base=se(this.sky.base,Y.base,tt),this.sky.a=se(this.sky.a,Y.a,tt),this.sky.b=se(this.sky.b,Y.b,tt),this.sky.star=se(this.sky.star,Y.star,tt);const ct=this.skin.prism?wi(this.time*.15%1,.9,.65):this.skin.aura;this.bodies.begin(),this.holes.begin(),Math.hypot(this.half[0],this.half[1])+.2;const Tt=(g,S,N)=>Math.abs(g)<this.half[0]+N&&Math.abs(S)<this.half[1]+N,Nt=[.68,-.73],Be=[],Oe=t.novas.find(g=>g.warn>0);for(const g of t.bodies){const S=a(g.px,g.x),N=a(g.py,g.y),[O,H]=B(S,N),U=g.r*T;if(g.role==="hole"){if(!Tt(O,H,U*13))continue;const st=Math.hypot(S-r,N-c),ut=Math.max(0,Math.min(1,1-(st-g.r*4)/(g.r*6)));this.holes.add({x:O,y:H,r:U,seed:g.seed%1e3/1e3,mode:0,warn:ut,alpha:Math.min(1,(t.tick-g.born)/40),tint:[1,1,1],tintMix:0});continue}if(!Tt(O,H,U*3.3))continue;const et=g.seed%1e3/1e3;let at=Math.min(8,ne(g.mass)),xt=g.seed%It[at].length,K=V.body,dt=[1,1,1],Jt=0,zt=0;switch((g.role==="drift"||g.role==="rival"||g.role==="titan"||g.role==="meteor")&&(zt=g.mass>o.mass*J?1:g.mass*J>o.mass?.5:-1),g.role){case"rival":K=V.rival,dt=Xs;break;case"titan":K=V.titan,dt=[1,.75,.35];break;case"gold":K=V.gold;break;case"power":K=g.tag===0?V.magnet:g.tag===1?V.shield:V.surge;break;case"meteor":K=V.meteor,at=2,xt=2;break;case"nova":{K=V.nova,at=5;const st=t.novas.find(ut=>ut.id===g.tag);Jt=st?1-st.warn/st.warnTotal:0,zt=0;break}case"moon":K=V.moon,dt=ct,zt=0;break}const ye=this.flashes.get(g.id)??0;ye>0?this.flashes.set(g.id,ye-s*2.5):this.flashes.has(g.id)&&this.flashes.delete(g.id);const ds=g.seed%2===0?1:-1;if(this.bodies.add({x:O,y:H,r:U,cls:at,variant:xt,seed:et,spin:this.time*(.06+et*.2)*ds+et*6,tint:dt,tintStrength:Jt,danger:zt,flash:Math.max(0,ye),alpha:1,kind:K}),g.role==="meteor"||g.role==="gold"){const st=Math.hypot(g.vx,g.vy)||1,ut=g.role==="gold"?[1,.85,.4]:[1,.5,.2];this.bodies.tail(O,H,-g.vx/st,g.vy/st,U*(g.role==="gold"?.9:.75),U*(g.role==="gold"?7:5.5),ut,g.role==="gold"?.9:.8)}else if(at===1&&K!==V.moon){const st=xt===0?[.55,.85,1]:xt===1?[.45,1,.7]:[1,.6,.3];this.bodies.tail(O,H,Nt[0],Nt[1],U*.7,U*6,st,.6)}if(g.role==="power"||g.role==="gold"){const st=g.role==="gold"?ee:Ft[g.tag],ut=(this.time*.8+et)%1;this.rings.draw(O,H,U*1.9,U*.09,st,.85,10,g.role==="gold"?2.5:1.6),this.rings.draw(O,H,U*(1.4+ut*2.6),U*.12,st,.75*(1-ut)*(1-ut))}Oe&&g.role!=="meteor"&&g.role!=="gold"&&g.role!=="power"&&g.r>=o.r*.7&&Be.push([O,H,U*1.05])}this.ghosts=this.ghosts.filter(g=>(g.t+=s)<.28);for(const g of this.ghosts){const S=g.t/.28,N=S*S,O=g.kind===1?r:g.tx,H=g.kind===1?c:g.ty,[U,et]=B(g.x+(O-g.x)*N,g.y+(H-g.y)*N);this.bodies.add({x:U,y:et,r:g.r*T*(1-N*.85),cls:g.cls,variant:g.variant,seed:g.seed%1e3/1e3,spin:0,tint:[1,1,1],tintStrength:0,danger:0,flash:S,alpha:1-N*.5,kind:V.body})}const[At,Lt]=B(r,c),ht=o.r*T;this.playerScreen={x:(At/this.half[0]*.5+.5)*this.w,y:(.5-Lt/this.half[1]*.5)*this.h,r:ht/this.half[1]*.5*this.h},this.playerFlash=Math.max(0,this.playerFlash-s*3),this.dead&&(this.deathT+=s);const cs=o.invulnT>0&&!this.dead?.75+.25*Math.sin(this.time*22):1;if(!this.dead){const g=Math.min(8,o.stage);g>=7?this.holes.add({x:At,y:Lt,r:ht*.5,seed:.37,mode:g===8?2:1,warn:0,alpha:1,tint:ct,tintMix:.55}):this.bodies.add({x:At,y:Lt,r:ht,cls:g,variant:this.skinIndex%It[g].length,seed:.37,spin:this.time*.15,tint:ct,tintStrength:1,danger:0,flash:this.playerFlash,alpha:cs,kind:V.player}),o.shieldT>0&&this.rings.draw(At,Lt,ht*1.45,ht*.08,Ft[1],.55+.25*Math.sin(this.time*6),6,1.5),o.magnetT>0&&this.rings.draw(At,Lt,ht*2.6*t.loadout.magnet*3*.33,ht*.05,Ft[0],.35,24,-2)}this.trail.update(s,r,c,this.dead?0:o.r*(o.stage>=7?.5:1),L,D,T,ct,this.dead?0:o.boosting||o.surgeT>0?1:.55,this.half,this.time);const Re=this.dust.out;for(const g of t.dust){const S=a(g.px,g.x),N=a(g.py,g.y),[O,H]=B(S,N);if(Math.abs(O)>this.half[0]+.05||Math.abs(H)>this.half[1]+.05)continue;const U=kt(g.m)*9*T*this.pxPerUnit,et=g.seed%5,at=et===0?[1,.85,.6]:et===1?[.6,.85,1]:et===2?[1,.6,.85]:et===3?[.7,1,.9]:[.95,.95,1],xt=.85+.25*Math.sin(this.time*3+g.seed);Re.push(O,H,Math.max(9*this.dpr,U),at[0],at[1],at[2],xt,g.seed%5===0?.9:.2)}Re.flush(this.half,48*this.dpr);const Ne=[];for(const g of t.novas){const[S,N]=B(g.x,g.y);if(g.warn>0){const O=1-g.warn/g.warnTotal;this.rings.draw(S,N,g.r*T*(1.4+(1-O)*3),g.r*T*.08,[1,.6,.25],.5+O*.5,0,0),this.nova.set(!0,this.half,[S,N,g.maxWave*T],O,Be,this.time)}else{const O=g.wave*T,H=1-g.wave/g.maxWave;this.rings.draw(S,N,O,g.r*T*.9,[1,.75,.45],.9*H,0,0),this.rings.draw(S,N,O*.97,g.r*T*.3,[1,1,1],.6*H,0,0),Ne.push({x:S,y:N,r:O,w:g.r*T*.6*H})}}if(Oe||this.nova.set(!1,this.half),t.bodies.filter(g=>g.role==="moon").length>0&&!this.dead&&this.rings.draw(At,Lt,ht*2.35,ht*.02,ct,.18,40,.3),this.particles.update(s,L,D,T,this.pxPerUnit),this.particles.out.flush(this.half,96*this.dpr),this.rings.update(s,L,D,T),this.rings.end(this.time,this.half),this.bodies.end(this.time,this.half,this.pxPerUnit,this.tier/2),this.holes.end(this.time,this.half,this.pxPerUnit,this.tier>=1?1:0),this.marks.length=0,!i){const g=(S,N,O,H,U,et)=>{const[at,xt]=B(N,O),K=(at/this.half[0]*.5+.5)*this.w,dt=(.5-xt/this.half[1]*.5)*this.h,Jt=K>0&&K<this.w&&dt>0&&dt<this.h,zt=Math.atan2(dt-this.h/2,K-this.w/2);this.marks.push({kind:S,x:K,y:dt,onScreen:Jt,angle:zt,rPx:H*T/this.half[1]*.5*this.h,label:U,value:et})};for(const S of t.bodies)S.role==="titan"?g("titan",a(S.px,S.x),a(S.py,S.y),S.r,void 0,S.tag):S.role==="gold"?g("gold",S.x,S.y,S.r):S.role==="power"?g("power",S.x,S.y,S.r,void 0,S.tag):S.role==="hole"&&Math.hypot(S.x-r,S.y-c)<this.zoom*3&&g("hole",S.x,S.y,S.r);for(const S of t.novas)S.warn>0&&g("nova",S.x,S.y,S.r,void 0,Math.ceil(S.warn/60))}this.flash=Math.max(0,this.flash-s*1.4);const hs=this.holes.list.slice(0,4);this.tier<2?(this.renderer.setRenderTarget(null),this.renderer.clear(),this.drawScene()):this.post.render(s,this.time,hs,Ne,this.reduceMotion?this.flash*.4:this.flash,this.flashCol,this.tier>=2)}drawScene(){this.bg.render(this.renderer,this.camX,this.camY,this.zoom,this.time,this.sky,this.tier>=1),this.renderer.render(this.scene,this.cam)}thumbnail(t,e=96){const s=this.thumbs.get(t.code);if(s)return s;if(!this.thumbKit){const v=new he;this.thumbKit={scene:v,holes:new Ve(v),bodies:new je(v),rt:new Te(e,e)}}const{scene:i,bodies:o,holes:a,rt:r}=this.thumbKit;o.begin(),a.begin();const c=(v,y,f,b,L=[1,1,1],D=0)=>o.add({x:0,y:0,r:b,cls:v,variant:y,seed:.42,spin:.8,tint:L,tintStrength:D,danger:0,flash:0,alpha:1,kind:f});if(t.special==="hole")a.add({x:0,y:0,r:.2,seed:.3,mode:0,warn:0,alpha:1,tint:[1,1,1],tintMix:0});else if(t.special==="nova")c(5,1,V.nova,.4,[1,1,1],.6);else if(t.special==="storm")o.tail(.25,-.25,-.7,.7,.18,.9,[1,.5,.2],.9),c(2,2,V.meteor,.4);else if(t.special==="titan")t.cls>=7?a.add({x:0,y:0,r:.17,seed:.6,mode:1,warn:0,alpha:1,tint:[1,.75,.35],tintMix:.5}):c(t.cls,t.variant%It[t.cls].length,V.titan,t.cls>=5?.38:.6,[1,.75,.35]);else{const v=t.cls>=7?.95:t.cls===5||t.cls===6?.42:t.cls===4&&(t.variant===1||t.variant===3)?.43:t.cls===0?.5:.68;c(t.cls,t.variant,V.body,v),t.cls===1&&o.tail(0,0,.68,-.73,v*.7,v*5,t.variant===0?[.55,.85,1]:t.variant===1?[.45,1,.7]:[1,.6,.3],.6)}o.end(3,[1,1],e/2,1),a.end(3,[1,1],e/2,1);const h=this.renderer,d=h.getRenderTarget();h.setRenderTarget(r),h.setClearColor(0,1),h.clear(),h.render(i,this.cam);const u=new Uint8Array(e*e*4);h.readRenderTargetPixels(r,0,0,e,e,u),h.setRenderTarget(d),h.setClearColor(723487,1);const m=document.createElement("canvas");m.width=m.height=e;const p=m.getContext("2d");if(!p)return"";const k=p.createImageData(e,e);for(let v=0;v<e;v++)for(let y=0;y<e;y++){const f=((e-1-v)*e+y)*4,b=(v*e+y)*4,L=Math.min(255,Math.max(u[f],u[f+1],u[f+2])*1.15),D=L>0?255/L:0;k.data[b]=Math.min(255,u[f]*D),k.data[b+1]=Math.min(255,u[f+1]*D),k.data[b+2]=Math.min(255,u[f+2]*D),k.data[b+3]=L}p.putImageData(k,0,0);const P=m.toDataURL("image/png");return this.thumbs.set(t.code,P),P}get sinceDeath(){return this.dead?this.deathT:0}}function wi(n,t,e){const s=i=>{const o=(i+n*12)%12,a=t*Math.min(e,1-e);return e-a*Math.max(-1,Math.min(o-3,9-o,1))};return[s(0),s(8),s(4)]}function Mi(n,t=1,e=0){const s=n.player,i=n.view*1.6;let o=0,a=0,r=0,c=0,h=0,d=0;const u=(v,y,f,b)=>{const L=s.x-v,D=s.y-y,T=Math.hypot(L,D)||1;if(T<f){const B=b*(1-T/f)*(1-T/f);o+=L/T*B,a+=D/T*B,d=Math.max(d,B)}};for(const v of n.bodies){const y=Math.hypot(v.x-s.x,v.y-s.y);if(y>i)continue;if(v.role==="hole"){u(v.x,v.y,v.r*9+s.r,6);continue}if(v.role==="nova"){u(v.x,v.y,v.r*3+s.r,2);continue}if(v.role==="moon")continue;if(v.mass>s.mass*J*.95&&v.role!=="gold"&&v.role!=="power"){u(v.x,v.y,v.r+s.r*(v.role==="meteor"?5:7)+s.r*4*t,v.role==="meteor"?2:3);continue}const b=(v.role==="gold"?s.mass*.4:v.role==="power"?s.mass*.2:v.mass)/(y+s.r*2);b>r&&(r=b,c=v.x-s.x,h=v.y-s.y)}for(const v of n.novas)v.wave>=0&&u(v.x,v.y,v.wave+s.r*6,.5);if(r===0){let v=1/0;for(const y of n.dust){const f=Math.hypot(y.x-s.x,y.y-s.y);f<v&&f>s.r&&(v=f,c=y.x-s.x,h=y.y-s.y)}}const m=Math.hypot(c,h)||1;let p=c/m+o*(1+2*t),k=h/m+a*(1+2*t);if(e>0){const v=Math.sin(n.tick*.05)*e;[p,k]=[p*Math.cos(v)-k*Math.sin(v),p*Math.sin(v)+k*Math.cos(v)]}const P=Math.hypot(p,k)||1;return{mx:p/P,my:k/P,boost:d>.35&&t>.5&&s.mass>12}}const Ye=10;class Si{constructor(t){l(this,"acc",0);l(this,"ticks",0);this.step=t}advance(t){this.acc+=Math.max(0,t);let e=0;for(;this.acc>=Ht&&e<Ye;)this.step(),this.acc-=Ht,this.ticks++,e++;return e===Ye&&(this.acc=Math.min(this.acc,Ht)),this.acc/Ht}reset(){this.acc=0,this.ticks=0}}me(`
#ui .kh { position: absolute; inset: 0; pointer-events: none; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; color: #fff; }
#ui .kh * { pointer-events: none; }
#ui .kh-top { position: absolute; left: 0; right: 0; top: 0; display: flex; justify-content: space-between; align-items: flex-start; padding: 10px 12px; zoom: var(--ui-z, 1); gap: 10px; }
#ui .kh-stage { min-width: 190px; max-width: 46vw; padding: 8px 12px 10px; border-radius: 14px; background: rgba(12,10,32,.55); border: 1px solid rgba(190,170,255,.18); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
#ui .kh-row { display: flex; align-items: baseline; gap: 8px; }
#ui .kh-sname { font-weight: 800; font-size: 16px; letter-spacing: .04em; text-shadow: 0 0 10px rgba(255,210,140,.5); }
#ui .kh-mass { margin-left: auto; font-weight: 700; font-size: 15px; color: #ffe2a8; font-variant-numeric: tabular-nums; }
#ui .kh-bar { position: relative; height: 7px; margin-top: 7px; border-radius: 4px; background: rgba(255,255,255,.1); overflow: hidden; }
#ui .kh-fill { position: absolute; inset: 0 auto 0 0; width: 0; border-radius: 4px; background: linear-gradient(90deg, #ffb347, #ffe7a0); box-shadow: 0 0 10px #ffc66b; transition: width .25s ease-out; }
#ui .kh-next { margin-top: 4px; font-size: 11px; color: rgba(225,215,255,.7); letter-spacing: .05em; }
#ui .kh-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
#ui .kh-btns { display: flex; gap: 8px; align-items: center; }
#ui .kh-dust { white-space: nowrap; padding: 6px 10px; border-radius: 12px; background: rgba(12,10,32,.55); border: 1px solid rgba(255,210,120,.25); font-weight: 800; font-size: 14px; color: #ffd76a; }
#ui .kh-pause { pointer-events: auto !important; width: 42px; height: 42px; border-radius: 12px; border: 1px solid rgba(190,170,255,.3); background: rgba(12,10,32,.6); color: #fff; font: 800 16px system-ui; cursor: pointer; display: flex; align-items: center; justify-content: center; }
#ui .kh-pause * { pointer-events: none; }
#ui .kh-rank { white-space: nowrap; display: none; padding: 6px 10px; border-radius: 12px; background: rgba(12,10,32,.55); border: 1px solid rgba(190,170,255,.2); font-weight: 800; font-size: 14px; color: #e8deff; }
#ui .kh-lb { min-width: 150px; padding: 6px 8px; border-radius: 12px; background: rgba(12,10,32,.5); border: 1px solid rgba(190,170,255,.15); font-size: 12px; }
#ui .kh-lbt { font-size: 10px; letter-spacing: .12em; color: rgba(225,215,255,.6); margin: 0 2px 3px; }
#ui .kh-lbr { display: flex; gap: 6px; padding: 2px 4px; border-radius: 6px; color: rgba(255,255,255,.82); }
#ui .kh-lbr b { width: 22px; color: rgba(255,255,255,.5); font-weight: 600; }
#ui .kh-lbr span:last-child { margin-left: auto; font-variant-numeric: tabular-nums; color: rgba(255,255,255,.65); }
#ui .kh-lbr.you { background: rgba(255,200,110,.18); color: #ffe6b0; font-weight: 800; }
#ui .kh-lbr.big span:first-of-type { color: #ff9a8a; }
#ui .kh-banner { position: absolute; left: 50%; top: 22%; transform: translate(-50%, -50%); text-align: center; width: max-content; max-width: calc(100vw / var(--ui-z, 1) - 16px); opacity: 0; transition: opacity .35s, transform .35s; zoom: var(--ui-z, 1); white-space: nowrap; }
#ui .kh-banner.on { opacity: 1; transform: translate(-50%, -50%) scale(1); }
#ui .kh-banner .t1 { font-size: 46px; font-weight: 900; letter-spacing: .14em; background: linear-gradient(180deg, #fff, #ffd88a); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 18px rgba(255,190,100,.6)); }
#ui .kh-banner .t2 { margin-top: 2px; font-size: 15px; font-weight: 600; letter-spacing: .06em; color: rgba(240,232,255,.9); text-shadow: 0 1px 6px #000; }
#ui .kh-warn { position: absolute; left: 50%; bottom: 27%; transform: translateX(-50%); width: max-content; max-width: calc(100vw / var(--ui-z, 1) - 24px); box-sizing: border-box; text-align: center; white-space: normal !important; padding: 8px 16px; border-radius: 22px; font-weight: 800; font-size: 15px; letter-spacing: .08em; opacity: 0; transition: opacity .25s; zoom: var(--ui-z, 1); white-space: nowrap;
  background: rgba(60,10,8,.72); border: 1px solid rgba(255,110,80,.6); color: #ffd2c2; box-shadow: 0 0 22px rgba(255,90,60,.35); }
#ui .kh-warn.on { opacity: 1; animation: kh-throb 0.9s ease-in-out infinite; }
#ui .kh-warn.safe { background: rgba(8,40,60,.72); border-color: rgba(110,220,255,.6); color: #d0f4ff; box-shadow: 0 0 22px rgba(80,200,255,.35); animation: none; }
@keyframes kh-throb { 50% { box-shadow: 0 0 34px rgba(255,90,60,.6); } }
#ui .kh-toast { position: absolute; left: 12px; top: 96px; transform: translate(0, -6px); padding: 6px 14px; border-radius: 16px; background: rgba(10,40,34,.72); border: 1px solid rgba(120,255,200,.45); color: #c9ffe9; font-weight: 800; font-size: 13px; letter-spacing: .05em; opacity: 0; transition: opacity .3s, transform .3s; zoom: var(--ui-z, 1); white-space: nowrap; }
#ui .kh-toast.on { opacity: 1; transform: translate(0, 0); }
@media (max-height: 430px) { #ui .kh-toast { top: 84px; font-size: 12px; } }
#ui .kh-powers { position: absolute; left: 12px; top: 132px; zoom: var(--ui-z, 1); display: flex; flex-direction: column; gap: 6px; }
#ui .kh-power { position: relative; overflow: hidden; display: flex; align-items: center; gap: 7px; min-width: 132px; padding: 6px 12px 9px; border-radius: 12px; font-weight: 900; font-size: 13px; letter-spacing: .08em; color: var(--pc);
  background: rgba(8,10,24,.75); border: 1.5px solid var(--pc); box-shadow: 0 0 16px color-mix(in srgb, var(--pc) 45%, transparent); animation: kh-pp2 1.2s ease-in-out infinite; }
#ui .kh-power b { font-size: 16px; }
#ui .kh-power i { position: absolute; left: 0; bottom: 0; height: 3px; background: var(--pc); box-shadow: 0 0 8px var(--pc); }
@media (max-height: 430px) { #ui .kh-powers { top: 114px; } #ui .kh-power { min-width: 110px; padding: 4px 9px 7px; font-size: 11.5px; } }
@keyframes kh-pp2 { 50% { box-shadow: 0 0 26px color-mix(in srgb, var(--pc) 70%, transparent); } }
#ui .kh-target { position: absolute; left: 50%; top: 14px; transform: translateX(-50%); padding: 6px 12px; border-radius: 14px; font-weight: 900; font-size: 13px; letter-spacing: .06em; white-space: nowrap; zoom: var(--ui-z, 1);
  background: rgba(60,14,30,.72); border: 1px solid rgba(255,130,150,.6); color: #ffd0d8; display: none; }
#ui .kh-target.won { background: rgba(10,50,36,.75); border-color: rgba(120,255,190,.6); color: #c9ffe4; }
@media (max-width: 560px) { #ui .kh-target { top: auto; bottom: calc(24px + env(safe-area-inset-bottom)); left: 16px; transform: none; } }
#ui .kh-combo { position: absolute; transform: translate(-50%, -100%); font-weight: 900; font-size: 22px; color: #fff3cf; text-shadow: 0 0 10px rgba(255,190,90,.9), 0 2px 4px #000; transition: opacity .4s, transform .6s; }
#ui .kh-tag { position: absolute; transform: translate(-50%, -100%); padding: 3px 9px; border-radius: 10px; font-size: 12px; font-weight: 800; letter-spacing: .06em; white-space: nowrap; background: rgba(40,26,8,.7); border: 1px solid rgba(255,200,110,.6); color: #ffe2a6; }
#ui .kh-tag.big { border-color: rgba(255,110,90,.8); color: #ffc4b6; background: rgba(60,12,8,.7); }
#ui .kh-arrow { position: absolute; width: 30px; height: 30px; margin: -15px 0 0 -15px; }
#ui .kh-arrow i { position: absolute; inset: 0; clip-path: polygon(100% 50%, 15% 8%, 32% 50%, 15% 92%); }
#ui .kh-arrow span { position: absolute; left: 50%; top: 34px; transform: translateX(-50%); font-size: 11px; font-weight: 800; white-space: nowrap; text-shadow: 0 1px 3px #000; }
#ui .kh-hand { position: absolute; width: 64px; height: 64px; margin: -8px 0 0 -14px; opacity: 0; transition: opacity .4s; filter: drop-shadow(0 2px 8px rgba(0,0,0,.6)); }
#ui .kh-hand.on { opacity: 1; }
#ui .kh-tip { position: absolute; left: 50%; bottom: 16%; transform: translateX(-50%); width: max-content; max-width: calc(100vw / var(--ui-z, 1) - 24px); box-sizing: border-box; white-space: normal !important; padding: 9px 16px; border-radius: 18px; background: rgba(12,10,32,.72); border: 1px solid rgba(255,220,150,.35); font-weight: 700; font-size: 16px; color: #fff4dc; opacity: 0; transition: opacity .4s; zoom: var(--ui-z, 1); white-space: nowrap; display: flex; gap: 10px; align-items: center; }
#ui .kh-tip.on { opacity: 1; }
#ui .kh-tip svg { width: 26px; height: 26px; flex: none; }
#ui .kh-pointer { position: absolute; width: 0; height: 0; opacity: 0; transition: opacity .3s; }
#ui .kh-pointer.on { opacity: 1; }
#ui .kh-pointer i { position: absolute; left: -22px; top: -22px; width: 44px; height: 44px; border-radius: 50%; border: 3px solid #9dffcf; box-shadow: 0 0 16px #6dffb5; animation: kh-pp 1s ease-out infinite; }
@keyframes kh-pp { 0% { transform: scale(1.6); opacity: .2; } 60% { transform: scale(1); opacity: 1; } 100% { transform: scale(1); opacity: 0; } }
@media (max-width: 560px) and (orientation: portrait) {
  #ui .kh-lb { display: none; }
  #ui .kh-rank { display: block; }
  #ui .kh-stage { min-width: 150px; }
  #ui .kh-banner .t1 { font-size: 34px; }
}
@media (max-width: 400px) {
  #ui .kh-top { padding: 8px; gap: 6px; }
  #ui .kh-stage { min-width: 0; flex: 1 1 auto; padding: 6px 9px 8px; }
  #ui .kh-sname { font-size: 14px; }
  #ui .kh-mass { font-size: 13px; }
  #ui .kh-btns { gap: 5px; }
  #ui .kh-dust, #ui .kh-rank { padding: 5px 7px; font-size: 12.5px; }
  #ui .kh-pause { width: 38px; height: 38px; }
}
@media (max-height: 430px) {
  #ui .kh-lb .kh-lbr:nth-child(n+5) { display: none; }
  #ui .kh-warn { font-size: 12.5px; padding: 6px 12px; bottom: 22%; }
  #ui .kh-tip { font-size: 13.5px; bottom: 10%; }
  #ui .kh-stage { min-width: 160px; padding: 6px 10px 8px; }
  #ui .kh-banner { top: 28%; }
  #ui .kh-banner .t1 { font-size: 34px; }
}
`);const Ti='<svg viewBox="0 0 64 64"><path d="M22 30V12a4 4 0 0 1 8 0v14l2-1a4 4 0 0 1 6 2l1 1a4 4 0 0 1 6 2 4 4 0 0 1 6 3v10c0 9-6 15-15 15h-3c-6 0-10-3-13-8l-7-12a4 4 0 0 1 6-5z" fill="#fff8ec" stroke="#3b2a55" stroke-width="2.5" stroke-linejoin="round"/></svg>',Ai='<svg viewBox="0 0 24 24" fill="none" stroke="#ffd98a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>',Li='<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="7" fill="#ffd98a"/><circle cx="19" cy="12" r="3" fill="#9dffcf"/></svg>',zi='<svg viewBox="0 0 24 24"><circle cx="15" cy="12" r="7" fill="none" stroke="#ff6a55" stroke-width="2.5"/><circle cx="5" cy="12" r="3" fill="#ffd98a"/></svg>',Xe='<svg viewBox="0 0 24 24" fill="none" stroke="#ffd98a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l6-6 6 6M5 18l6-6 6 6"/></svg>',Pi=["","Catch the stardust streams","Watch out: black holes and meteor storms","Supernovae ahead: hide in the shadow of big bodies","Moons now orbit you and shield you","You shine! More moons follow you","A giant among stars","Your gravity swallows everything — even black holes","You light up the universe"],Ct=[{name:"MAGNET",icon:"◎",color:"#4dd2ff"},{name:"SHIELD",icon:"⬢",color:"#7dffb0"},{name:"SURGE",icon:"»",color:"#ff9a4d"}];class Ci{constructor(t){l(this,"root",x("kh"));l(this,"sname",x("kh-sname"));l(this,"mass",x("kh-mass"));l(this,"fill",x("kh-fill"));l(this,"next",x("kh-next"));l(this,"dust",x("kh-dust"));l(this,"pause",document.createElement("button"));l(this,"lb",x("kh-lb"));l(this,"rank",x("kh-rank"));l(this,"banner",x("kh-banner"));l(this,"warn",x("kh-warn"));l(this,"tags",x(""));l(this,"arrows",x(""));l(this,"hand",x("kh-hand"));l(this,"tip",x("kh-tip"));l(this,"pointer",x("kh-pointer"));l(this,"toastEl",x("kh-toast"));l(this,"targetEl",x("kh-target"));l(this,"target",0);l(this,"targetBeaten",!1);l(this,"powers",x("kh-powers"));l(this,"powerEls",[]);l(this,"toasts",[]);l(this,"toastT",0);l(this,"bannerT",0);l(this,"warnT",0);l(this,"warnKind","");l(this,"lastStage",-1);l(this,"lastLb","");l(this,"combos",[]);l(this,"tagEls",[]);l(this,"arrowEls",[]);l(this,"tutorial","done");l(this,"tutT",0);l(this,"isTouch",!1);l(this,"moved",0);l(this,"eatenAtStart",0);l(this,"hintT",0);l(this,"hintText","");l(this,"onHintDone",()=>{});const e=x("kh-top"),s=x("kh-stage"),i=x("kh-row");i.append(this.sname,this.mass);const o=x("kh-bar");o.append(this.fill),s.append(i,o,this.next);const a=x("kh-right"),r=x("kh-btns");this.pause.className="kh-pause",this.pause.setAttribute("aria-label","Pause"),this.pause.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16"><rect x="3" y="2" width="3.5" height="12" rx="1" fill="#fff"/><rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="#fff"/></svg>',r.append(this.rank,this.dust,this.pause),a.append(r,this.lb),e.append(s,a),this.hand.innerHTML=Ti,this.pointer.append(document.createElement("i"));for(const c of Ct){const h=x("kh-power");h.style.setProperty("--pc",c.color),h.innerHTML=`<b>${c.icon}</b><span>${c.name}</span><i></i>`,h.style.display="none",this.powerEls.push(h),this.powers.append(h)}this.root.append(this.tags,this.arrows,this.pointer,this.hand,e,this.powers,this.targetEl,this.banner,this.warn,this.tip,this.toastEl),t.append(this.root),this.show(!1)}show(t){this.root.style.display=t?"":"none"}setTarget(t){this.target=t,this.targetBeaten=!1,this.targetEl.style.display=t>0?"block":"none"}toast(t){this.toasts.length<4&&this.toasts.push(t)}reset(){this.toasts=[],this.toastT=0,this.toastEl.classList.remove("on"),this.lastStage=-1,this.lastLb="",this.bannerT=0,this.warnT=0,this.banner.classList.remove("on"),this.warn.classList.remove("on");for(const t of this.combos)t.el.remove();this.combos=[]}stageUp(t){this.banner.innerHTML=`<div class="t1">${R[t].name.toUpperCase()}</div><div class="t2">${Pi[t]??""}</div>`,this.banner.classList.add("on"),this.bannerT=3.2}announce(t,e=""){this.banner.innerHTML=`<div class="t1">${t}</div><div class="t2">${e}</div>`,this.banner.classList.add("on"),this.bannerT=2.6}warning(t,e,s,i=!1){this.warnKind=t,this.warn.textContent=e,this.warn.classList.add("on"),this.warn.classList.toggle("safe",i),this.warnT=s}combo(t,e,s){if(s<2)return;const i=x("kh-combo");i.textContent=`×${s}`,i.style.left=`${t}px`,i.style.top=`${e}px`,this.root.append(i),requestAnimationFrame(()=>{i.style.transform="translate(-50%, -160%)",i.style.opacity="0"}),this.combos.push({el:i,t:.7})}update(t,e,s,i,o){const a=e.player;a.stage!==this.lastStage&&(this.lastStage=a.stage,this.sname.textContent=R[a.stage].name,this.next.textContent=a.stage+1<R.length?`Next: ${R[a.stage+1].name}`:"Keep growing!"),this.mass.textContent=X(a.mass),this.fill.style.width=`${(Ps(a.mass)*100).toFixed(1)}%`,this.dust.textContent=`✦ ${s}`;const r=e.leaderboard(),c=r.findIndex(f=>f.you);this.rank.textContent=`#${c+1}`;const h=Math.max(0,Math.min(r.length-5,c-2)),d=r.slice(h,h+5),u=d.map(f=>f.name+Math.round(Math.log(f.mass)*20)).join("|")+c;u!==this.lastLb&&(this.lastLb=u,this.lb.innerHTML='<div class="kh-lbt">GALAXY RANK</div>'+d.map((f,b)=>`<div class="kh-lbr${f.you?" you":""}${!f.you&&f.mass>a.mass*1.12?" big":""}"><b>#${h+b+1}</b><span>${f.name}</span><span>${X(f.mass)}</span></div>`).join("")),this.bannerT>0&&(this.bannerT-=t)<=0&&this.banner.classList.remove("on"),this.toastT-=t,this.toastT<=.35&&this.toastEl.classList.remove("on"),this.toastT<=0&&this.toasts.length&&(this.toastEl.textContent=this.toasts.shift(),this.toastEl.classList.add("on"),this.toastT=1.9),this.warnT>0&&(this.warnT-=t)<=0&&(this.warn.classList.remove("on"),this.warnKind="");const m=i.find(f=>f.kind==="nova");m&&this.warnKind==="nova"&&(this.warn.textContent=`SUPERNOVA IN ${m.value} — HIDE BEHIND SOMETHING BIG`),this.combos=this.combos.filter(f=>(f.t-=t,f.t<=0&&f.el.remove(),f.t>0));let p=0,k=0;const P=window.innerWidth,v=window.innerHeight;for(const f of i){if(f.kind==="titan"&&f.onScreen){const b=this.tagEls[p]??this.tags.appendChild(x("kh-tag"));this.tagEls[p++]=b;const L=e.titans[f.value??0];b.textContent=`${gt[f.value??0].name} · ${X(L.mass)}`,b.classList.toggle("big",L.mass>a.mass*1.12),b.style.color=b.style.borderColor=b.style.background="",b.style.left=`${f.x}px`,b.style.top=`${f.y-f.rPx*1.35-6}px`,b.style.display=""}if(f.onScreen&&(f.kind==="power"||f.kind==="gold")){const b=this.tagEls[p]??this.tags.appendChild(x("kh-tag"));this.tagEls[p++]=b;const L=f.kind==="gold"?"#ffd34d":Ct[f.value??0].color;b.textContent=f.kind==="gold"?"✦ STARDUST":`${Ct[f.value??0].icon} ${Ct[f.value??0].name}`,b.classList.remove("big"),b.style.color=L,b.style.borderColor=L,b.style.background="rgba(8,10,24,.72)",b.style.left=`${f.x}px`,b.style.top=`${f.y-f.rPx*2.1-6}px`,b.style.display=""}if(!f.onScreen&&(f.kind==="titan"||f.kind==="nova"||f.kind==="gold"||f.kind==="power")){const b=this.arrowEls[k]??this.arrows.appendChild(x("kh-arrow"));b.firstChild||(b.innerHTML="<i></i><span></span>"),this.arrowEls[k++]=b;const L=34,D=P/2,T=v/2,B=Math.cos(f.angle),Y=Math.sin(f.angle),tt=Math.min((D-L)/Math.max(1e-6,Math.abs(B)),(T-L-40)/Math.max(1e-6,Math.abs(Y)));b.style.left=`${D+B*tt}px`,b.style.top=`${T+Y*tt}px`;const ct=f.kind==="nova"?"#ff7a4a":f.kind==="gold"?"#ffd34d":f.kind==="power"?Ct[f.value??0].color:Ei(e,f,a.mass),Tt=b.firstChild;Tt.style.background=ct,Tt.style.transform=`rotate(${f.angle}rad)`,Tt.style.filter=`drop-shadow(0 0 6px ${ct})`;const Nt=b.lastChild;Nt.style.color=ct,Nt.textContent=f.kind==="titan"?gt[f.value??0].name:f.kind==="nova"?`${f.value}`:f.kind==="power"?Ct[f.value??0].name:"✦",b.style.display=""}}for(let f=p;f<this.tagEls.length;f++)this.tagEls[f].style.display="none";for(let f=k;f<this.arrowEls.length;f++)this.arrowEls[f].style.display="none";if(this.target>0){const f=a.mass>this.target;this.targetEl.textContent=f?`⚔ Beat ${X(this.target)} ✔`:`⚔ Beat ${X(this.target)} · ${Math.min(99,Math.floor(a.mass/this.target*100))}%`,this.targetEl.classList.toggle("won",f),f&&!this.targetBeaten&&(this.targetBeaten=!0,this.announce("CHALLENGE BEATEN",`You passed ${X(this.target)}. Keep growing!`))}[a.magnetT/(60*9),a.shieldT/(60*7),a.surgeT/(60*6)].forEach((f,b)=>{const L=this.powerEls[b];L.style.display=f>0?"":"none",f>0&&(L.lastChild.style.width=`${(f*100).toFixed(1)}%`)}),this.updateTutorial(t,e,o)}hint(t,e=9){this.hintText=t,this.hintT=e}startTutorial(t){this.tutorial="move",this.tutT=0,this.moved=0,this.eatenAtStart=t.stats.eaten}setTip(t,e){const s=`${t}<span>${e}</span>`;this.tip.innerHTML!==s&&(this.tip.innerHTML=s),this.tip.classList.add("on")}updateTutorial(t,e,s){const i=e.player;this.tutT+=t;const o=()=>this.hand.classList.remove("on");if(this.tutorial==="done"){this.hintT>0&&!i.boosting?(this.hintT-=t,this.setTip(Xe,this.hintText)):(this.hintT>0&&i.boosting&&this.onHintDone(),this.hintT=0,this.tip.classList.remove("on")),this.pointer.classList.remove("on"),o();return}if(this.tutorial==="move"){this.moved+=Math.hypot(i.x-i.px,i.y-i.py);const a=this.tutT*1.6;this.hand.style.left=`${s.x+60+Math.cos(a)*34}px`,this.hand.style.top=`${s.y+30+Math.sin(a)*22}px`,this.hand.classList.add("on"),this.setTip(Ai,this.isTouch?"Drag anywhere to fly":"Move the mouse to fly"),this.moved>i.r*14&&(this.tutorial="eat",this.tutT=0,o());return}if(this.tutorial==="eat"){this.setTip(Li,"Swallow anything smaller");let a=null,r=1/0;for(const c of e.bodies){if(c.role!=="drift"||c.mass*1.12>i.mass)continue;const h=Math.hypot(c.x-i.x,c.y-i.y);h<r&&(r=h,a=c)}if(a&&r<e.view*1.4){const c=s.x+(a.x-i.x)/e.view*Math.min(window.innerWidth,window.innerHeight)*.5,h=s.y+(a.y-i.y)/e.view*Math.min(window.innerWidth,window.innerHeight)*.5;this.pointer.style.left=`${c}px`,this.pointer.style.top=`${h}px`,this.pointer.classList.add("on")}else this.pointer.classList.remove("on");e.stats.eaten-this.eatenAtStart>=3&&(this.tutorial="avoid",this.tutT=0,this.pointer.classList.remove("on"));return}if(this.tutorial==="avoid"){this.setTip(zi,"Red rings are bigger — stay away!"),this.tutT>4.5&&(this.tutorial="boost",this.tutT=0);return}this.tutorial==="boost"&&(this.setTip(Xe,this.isTouch?"Boost: double-tap, hold and drag":"Boost: hold click or Space (costs a little mass)"),(this.tutT>(this.isTouch?9:5)||i.boosting&&this.tutT>1.2)&&(this.tutorial="done",this.tip.classList.remove("on")))}}function Ei(n,t,e){const s=n.titans[t.value??0];return s&&s.mass>e*1.12?"#ff6a55":"#ffd27a"}me(`
#ui .ks-layer { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; color: #fff; }
#ui .ks-layer button { font-family: inherit; cursor: pointer; -webkit-tap-highlight-color: transparent; }
#ui .ks-dim { position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(8,6,24,.55), rgba(5,4,16,.92)); }
#ui .ks-btn { min-height: 44px; padding: 10px 20px; border-radius: 14px; border: 1px solid rgba(200,180,255,.28); background: rgba(30,24,70,.7); color: #f2ecff; font-weight: 700; font-size: 15px; letter-spacing: .04em; transition: transform .1s, background .2s; }
#ui .ks-btn:hover { background: rgba(50,40,110,.85); }
#ui .ks-btn:active, #ui .ks-mbtn:active, #ui .ks-centry:active, #ui .ks-seg button:active { transform: scale(.94); filter: brightness(1.25); }
#ui .ks-mbtn, #ui .ks-centry, #ui .ks-seg button { transition: transform .08s, filter .08s; }
#ui .ks-btn.primary { border: 0; color: #2a1505; font-weight: 900; letter-spacing: .1em; background: linear-gradient(180deg, #ffe7a6, #ffb547); box-shadow: 0 0 26px rgba(255,180,80,.45), inset 0 -3px 0 rgba(160,80,10,.35); }
#ui .ks-btn.primary:hover { background: linear-gradient(180deg, #fff0c4, #ffc565); }
#ui .ks-btn[disabled] { opacity: .45; cursor: default; }
/* Title */
#ui .ks-title { position: relative; display: flex; flex-direction: column; align-items: center; gap: 14px; zoom: var(--ui-z, 1); padding: 16px; text-align: center; max-width: 100vw; }
#ui .ks-title::before { content: ''; position: absolute; left: 50%; top: 50%; width: 140%; height: 150%; transform: translate(-50%, -50%); z-index: -1; pointer-events: none;
  background: radial-gradient(ellipse at center, rgba(6,5,20,.62) 0%, rgba(6,5,20,.35) 45%, transparent 70%); }
#ui .ks-logo { font-size: clamp(42px, 11vw, 78px); font-weight: 900; letter-spacing: .12em; line-height: 1; background: linear-gradient(180deg, #fff 20%, #ffd98a 60%, #ff9c5a); -webkit-background-clip: text; background-clip: text; color: transparent; filter: drop-shadow(0 0 24px rgba(255,170,90,.55)); }
#ui .ks-tagline { font-size: 15px; letter-spacing: .2em; text-transform: uppercase; color: rgba(230,220,255,.8); }
#ui .ks-play { margin-top: 10px; min-width: 220px; min-height: 62px; font-size: 24px; border-radius: 20px; animation: ks-glow 2.4s ease-in-out infinite; }
@keyframes ks-glow { 50% { box-shadow: 0 0 44px rgba(255,190,90,.75), inset 0 -3px 0 rgba(160,80,10,.35); } }
#ui .ks-best { font-size: 13px; color: rgba(230,220,255,.7); letter-spacing: .06em; min-height: 16px; }
#ui .ks-menu { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 6px; }
#ui .ks-mbtn { position: relative; width: 84px; min-height: 74px; padding: 8px 4px; display: flex; flex-direction: column; align-items: center; gap: 4px; border-radius: 16px; border: 1px solid rgba(200,180,255,.22); background: rgba(20,16,50,.62); color: #efe8ff; font-size: 12px; font-weight: 700; }
#ui .ks-mbtn:hover { background: rgba(45,36,100,.8); }
#ui .ks-mbtn .ic { font-size: 24px; line-height: 28px; color: #ffd98a; }
#ui .ks-badge { position: absolute; top: -6px; right: -6px; min-width: 20px; height: 20px; padding: 0 5px; border-radius: 10px; background: #ff6a55; color: #fff; font-size: 11px; font-weight: 900; line-height: 20px; box-shadow: 0 0 10px rgba(255,90,70,.6); }
#ui .ks-wallet { position: absolute; top: calc(12px + env(safe-area-inset-top)); right: calc(14px + env(safe-area-inset-right)); padding: 7px 12px; border-radius: 14px; background: rgba(20,16,50,.65); border: 1px solid rgba(255,210,120,.3); color: #ffd76a; font-weight: 900; font-size: 15px; zoom: var(--ui-z, 1); }
#ui .ks-hint { position: absolute; bottom: calc(10px + env(safe-area-inset-bottom)); left: 0; right: 0; text-align: center; font-size: 12px; color: rgba(220,210,255,.5); letter-spacing: .08em; }
/* Panels */
#ui .ks-panel { position: relative; display: flex; flex-direction: column; width: min(560px, calc(100vw / var(--ui-z, 1) - 24px)); max-height: calc(100dvh / var(--ui-z, 1) - 24px); zoom: var(--ui-z, 1);
  border-radius: 22px; background: linear-gradient(180deg, rgba(26,20,62,.96), rgba(12,10,32,.97)); border: 1px solid rgba(200,180,255,.25); box-shadow: 0 20px 60px rgba(0,0,0,.6), 0 0 40px rgba(140,110,255,.15); }
#ui .ks-head { flex: none; display: flex; align-items: center; gap: 10px; padding: 16px 18px 10px; }
#ui .ks-head h2 { margin: 0; font-size: 22px; font-weight: 900; letter-spacing: .08em; }
#ui .ks-head .ks-pill { margin-left: auto; }
#ui .ks-pill { padding: 5px 11px; border-radius: 12px; background: rgba(255,210,120,.12); border: 1px solid rgba(255,210,120,.3); color: #ffd76a; font-weight: 900; font-size: 14px; white-space: nowrap; }
#ui .ks-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; padding: 4px 18px 12px; -webkit-overflow-scrolling: touch; overscroll-behavior: contain; }
#ui .ks-foot { flex: none; display: flex; gap: 10px; justify-content: center; padding: 10px 18px 16px; flex-wrap: wrap; }
#ui .ks-foot .ks-btn { min-width: 130px; }
#ui .ks-sub { font-size: 12px; color: rgba(225,215,255,.6); letter-spacing: .05em; margin: 2px 0 10px; }
#ui .ks-list { display: grid; gap: 10px; }
#ui .ks-card { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 16px; background: rgba(255,255,255,.04); border: 1px solid rgba(200,180,255,.14); }
#ui .ks-card .ic { flex: none; width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: #ffd98a; background: rgba(255,200,110,.1); }
#ui .ks-card .tx { flex: 1; min-width: 0; }
#ui .ks-card .nm { font-weight: 800; font-size: 15px; }
#ui .ks-card .ds { font-size: 12.5px; color: rgba(225,215,255,.7); margin-top: 2px; }
#ui .ks-pips { display: flex; gap: 4px; margin-top: 6px; }
#ui .ks-pips i { width: 16px; height: 5px; border-radius: 3px; background: rgba(255,255,255,.12); }
#ui .ks-pips i.on { background: linear-gradient(90deg, #ffb347, #ffe7a0); box-shadow: 0 0 6px #ffc66b; }
#ui .ks-card .ks-btn { flex: none; min-width: 92px; padding: 8px 12px; font-size: 14px; }
#ui .ks-prog { height: 6px; margin-top: 7px; border-radius: 3px; background: rgba(255,255,255,.1); overflow: hidden; }
#ui .ks-prog i { display: block; height: 100%; background: linear-gradient(90deg, #6dffb5, #c9ffe4); }
/* Skins */
#ui .ks-skins { display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 10px; }
#ui .ks-skin { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 12px 8px; border-radius: 16px; background: rgba(255,255,255,.04); border: 1px solid rgba(200,180,255,.14); color: #fff; }
#ui .ks-skin.sel { border-color: rgba(255,210,120,.8); box-shadow: 0 0 18px rgba(255,190,90,.3); }
#ui .ks-orb { width: 54px; height: 54px; border-radius: 50%; }
#ui .ks-skin .nm { font-size: 13px; font-weight: 800; }
#ui .ks-skin .ks-btn { width: 100%; min-height: 36px; padding: 6px; font-size: 13px; }
/* Codex */
#ui .ks-cgroup { margin: 12px 0 6px; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: rgba(225,215,255,.6); }
#ui .ks-codex { display: grid; grid-template-columns: repeat(auto-fill, minmax(92px, 1fr)); gap: 8px; }
#ui .ks-centry { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 4px; border-radius: 14px; background: rgba(255,255,255,.035); border: 1px solid rgba(200,180,255,.1); color: #fff; font-size: 11.5px; font-weight: 700; text-align: center; min-height: 112px; }
#ui .ks-centry img { width: 64px; height: 64px; }
#ui .ks-centry.locked img { filter: brightness(0) invert(1); opacity: .16; }
#ui .ks-body::-webkit-scrollbar { width: 8px; }
#ui .ks-body::-webkit-scrollbar-track { background: transparent; }
#ui .ks-body::-webkit-scrollbar-thumb { background: rgba(200,180,255,.25); border-radius: 4px; }
#ui .ks-body { scrollbar-color: rgba(200,180,255,.25) transparent; scrollbar-width: thin; }
#ui .ks-centry.locked { color: rgba(225,215,255,.4); }
#ui .ks-fact { margin-top: 12px; padding: 12px; border-radius: 14px; background: rgba(255,210,120,.08); border: 1px solid rgba(255,210,120,.2); font-size: 13.5px; line-height: 1.45; color: #fff3da; min-height: 44px; }
/* Settings */
#ui .ks-set { display: flex; align-items: center; gap: 10px; padding: 10px 2px; border-bottom: 1px solid rgba(255,255,255,.06); }
#ui .ks-set label { flex: 1; font-weight: 700; font-size: 14.5px; }
#ui .ks-seg { display: flex; border-radius: 12px; overflow: hidden; border: 1px solid rgba(200,180,255,.25); }
#ui .ks-seg button { min-height: 36px; min-width: 52px; padding: 6px 10px; border: 0; background: rgba(30,24,70,.6); color: #d8d0f0; font-weight: 700; font-size: 13px; }
#ui .ks-seg button.on { background: linear-gradient(180deg, #ffe7a6, #ffb547); color: #2a1505; }
#ui .ks-gdesc { padding: 2px 2px 10px; font-size: 12px; color: rgba(225,215,255,.65); border-bottom: 1px solid rgba(255,255,255,.06); grid-column: 1 / -1; }
#ui .ks-set input[type=range] { width: 150px; accent-color: #ffb547; }
/* Results */
#ui .ks-res-top { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 6px 0 10px; text-align: center; }
#ui .ks-res-cause { font-size: 13px; letter-spacing: .1em; text-transform: uppercase; color: rgba(255,190,170,.85); }
#ui .ks-res-stage { font-size: 34px; font-weight: 900; letter-spacing: .08em; background: linear-gradient(180deg, #fff, #ffd88a); -webkit-background-clip: text; background-clip: text; color: transparent; }
#ui .ks-res-mass { font-size: 15px; color: #ffe2a8; font-weight: 700; }
#ui .ks-newbest { padding: 4px 12px; border-radius: 12px; background: linear-gradient(90deg, #ff9f5a, #ffd86e); color: #2a1505; font-weight: 900; font-size: 12px; letter-spacing: .14em; animation: ks-pop .5s ease-out; }
@keyframes ks-pop { 0% { transform: scale(.3); opacity: 0; } 70% { transform: scale(1.15); } 100% { transform: scale(1); opacity: 1; } }
#ui .ks-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 4px 0 10px; }
#ui .ks-stat { padding: 8px; border-radius: 12px; background: rgba(255,255,255,.04); text-align: center; }
#ui .ks-stat b { display: block; font-size: 17px; color: #fff; }
#ui .ks-stat span { font-size: 11px; color: rgba(225,215,255,.6); letter-spacing: .06em; }
#ui .ks-pay { display: flex; justify-content: space-between; padding: 5px 2px; font-size: 13.5px; color: rgba(240,232,255,.88); opacity: 0; transform: translateY(6px); transition: opacity .3s, transform .3s; }
#ui .ks-pay.on { opacity: 1; transform: none; }
#ui .ks-pay b { color: #ffd76a; }
#ui .ks-pay.total { margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(255,255,255,.1); font-size: 16px; font-weight: 900; }
#ui .ks-disc { margin-top: 10px; font-size: 13px; color: #9dffcf; text-align: center; }
/* How to play (pause) */
#ui .ks-howto { display: grid; gap: 8px; }
#ui .ks-how { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 14px; background: rgba(255,255,255,.04); border: 1px solid rgba(200,180,255,.14); }
#ui .ks-how b { flex: none; width: 38px; height: 38px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 19px; color: #ffd98a; background: rgba(255,200,110,.1); }
#ui .ks-how span { font-size: 13px; color: rgba(225,215,255,.75); line-height: 1.35; }
#ui .ks-how strong { display: block; font-size: 14.5px; color: #fff; }
/* Modes */
#ui .ks-dailybtn { min-width: 220px; border-color: rgba(255,210,120,.45); color: #ffe6b0; background: rgba(60,40,20,.55); }
#ui .ks-chal { display: flex; flex-direction: column; align-items: center; gap: 8px; max-width: 420px; padding: 12px 16px; border-radius: 18px; background: rgba(60,14,30,.72); border: 1px solid rgba(255,130,150,.55); box-shadow: 0 0 26px rgba(255,90,120,.25); }
#ui .ks-chal .t { font-weight: 900; letter-spacing: .1em; color: #ffc4cf; font-size: 14px; }
#ui .ks-chal .d { font-size: 13.5px; color: rgba(255,235,240,.9); }
#ui .ks-modetag { margin-top: 2px; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 900; letter-spacing: .1em; background: rgba(255,210,120,.14); border: 1px solid rgba(255,210,120,.4); color: #ffe2a8; }
#ui .ks-modetag.win { background: rgba(60,200,140,.16); border-color: rgba(120,255,190,.55); color: #c9ffe4; }
#ui .ks-modetag.lose { background: rgba(255,90,90,.12); border-color: rgba(255,140,130,.5); color: #ffc9c2; }
#ui .ks-share { border-color: rgba(255,130,150,.55); color: #ffd6dd; }
#ui .ks-toast2 { position: absolute; left: 50%; bottom: calc(16px + env(safe-area-inset-bottom)); transform: translateX(-50%); padding: 9px 16px; border-radius: 14px; background: rgba(10,40,34,.92); border: 1px solid rgba(120,255,200,.5); color: #c9ffe9; font-weight: 800; font-size: 14px; zoom: var(--ui-z, 1); max-width: calc(100vw - 24px); word-break: break-all; text-align: center; }
/* Continue offer */
#ui .ks-cont { display: flex; flex-direction: column; align-items: center; gap: 8px; text-align: center; padding: 4px 0 6px; }
#ui .ks-clock { position: relative; width: 108px; height: 108px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  background: conic-gradient(#ffc565 calc(var(--p, 1) * 360deg), rgba(255,255,255,.08) 0); }
#ui .ks-clock::before { content: ''; position: absolute; inset: 7px; border-radius: 50%; background: #17123a; }
#ui .ks-clock b { position: relative; font-size: 40px; font-weight: 900; color: #ffe2a8; }
#ui .ks-cont .lead { font-size: 15px; color: rgba(240,232,255,.9); }
#ui .ks-cont .have { font-size: 13px; color: rgba(225,215,255,.65); }
#ui .ks-cont .have.short { color: #ffb4a6; }
#ui .ks-foot .ks-btn.wide { min-width: 170px; }
/* Records */
#ui .ks-recgrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 6px; }
#ui .ks-runs { display: grid; gap: 6px; }
#ui .ks-run { display: grid; grid-template-columns: 1.3fr 1.4fr .8fr .8fr .7fr; gap: 6px; align-items: center; padding: 8px 10px; border-radius: 12px; background: rgba(255,255,255,.04); font-size: 12.5px; color: rgba(240,232,255,.88); }
#ui .ks-run.head { background: none; padding: 0 10px; font-size: 10.5px; letter-spacing: .1em; color: rgba(225,215,255,.5); }
#ui .ks-run b { color: #ffe2a8; }
#ui .ks-run .when { color: rgba(225,215,255,.6); }
#ui .ks-run.best { border: 1px solid rgba(255,210,120,.45); }
@media (max-width: 520px) {
  #ui .ks-panel { width: calc(100vw / var(--ui-z, 1) - 12px); max-height: calc(100dvh / var(--ui-z, 1) - 12px); border-radius: 18px; }
  #ui .ks-mbtn { width: 70px; min-height: 66px; font-size: 11px; }
  #ui .ks-play { min-width: 190px; min-height: 56px; font-size: 22px; }
}
@media (max-height: 480px) {
  #ui .ks-title { gap: 8px; }
  #ui .ks-logo { font-size: 44px; }
  #ui .ks-play { min-height: 50px; margin-top: 4px; }
  #ui .ks-menu { gap: 8px; margin-top: 2px; }
  #ui .ks-mbtn { min-height: 56px; width: 72px; padding: 4px; }
  #ui .ks-mbtn .ic { font-size: 20px; line-height: 22px; }
  #ui .ks-panel { max-height: calc(100dvh / var(--ui-z, 1) - 10px); }
  #ui .ks-list.two, #ui .ks-settings { display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; }
  #ui .ks-stats { grid-template-columns: repeat(6, 1fr); }
  #ui .ks-res-stage { font-size: 26px; }
}
`);const $i={rival:"Swallowed by a bigger rival",titan:"Devoured by a Titan",hole:"Lost beyond the event horizon",fizzle:"Your light burned out"};class Ii{constructor(t,e,s){l(this,"layer",x("ks-layer"));l(this,"current",null);l(this,"backTo","title");l(this,"offerTimer",0);this.save=e,this.hooks=s,t.append(this.layer),this.layer.style.display="none",window.addEventListener("keydown",i=>{!this.current||i.defaultPrevented||(i.code==="KeyP"&&this.current==="pause"&&this.hooks.resume(),i.code==="Escape"&&(this.current==="pause"?this.hooks.resume():this.current!=="title"&&this.current!=="results"&&this.current!=="offer"&&this.back()),(i.code==="Enter"||i.code==="Space")&&(this.current==="title"||this.current==="results")&&(i.preventDefault(),this.hooks.play()))})}hide(){this.current=null,this.layer.style.display="none",this.layer.replaceChildren()}mount(t,...e){this.current=t,this.layer.style.display="",this.layer.replaceChildren(...e)}btn(t,e,s){const i=document.createElement("button");return i.className=`ks-btn ${e}`,i.innerHTML=t,i.addEventListener("click",o=>{o.stopPropagation(),this.hooks.click(),s()}),i}panel(t,e,s,i){const o=x("ks-panel"),a=x("ks-head");a.innerHTML=`<h2>${t}</h2>${i?`<span class="ks-pill">${i}</span>`:""}`;const r=x("ks-foot");return r.append(...s),e.classList.add("ks-body"),o.append(a,e,r),o}back(){this.backTo==="pause"?this.pause():this.hooks.menu()}wallet(){return`✦ ${this.save.stardust}`}title(){this.backTo="title";const t=x("ks-title"),e=this.save.best.mass?`Best: ${R[this.save.best.stage??0].name} · ${X(this.save.best.mass)}`:"",s=this.save.missions.filter(k=>!k.done).length,i=this.save.dailyUsed!==Mt();t.innerHTML='<div class="ks-logo">KINDLESTAR</div><div class="ks-tagline">From a spark to a galaxy</div>';const o=this.btn("PLAY","primary ks-play",()=>this.hooks.play()),a=x("ks-best");a.textContent=e;const r=x("ks-menu"),c=(k,P,v,y="")=>{const f=document.createElement("button");return f.className="ks-mbtn",f.innerHTML=`<span class="ic">${k}</span>${P}${y?`<span class="ks-badge">${y}</span>`:""}`,f.addEventListener("click",b=>{b.stopPropagation(),this.hooks.click(),v()}),f},h=Se.some(k=>qt(this.save,k.id)<k.costs.length&&this.save.stardust>=k.costs[qt(this.save,k.id)]);r.append(c("⬆","Upgrades",()=>this.upgrades(),h?"!":""),c("◐","Skins",()=>this.skins()),c("✧","Codex",()=>this.codex(),""),c("◎","Missions",()=>this.missions(),i?"×2":s?String(s):""),c("♛","Records",()=>this.records()),c("⚙","Settings",()=>this.settings()));const d=this.btn(`☀ Daily Galaxy${this.save.daily.date===Mt()&&this.save.daily.best?` · best ${X(this.save.daily.best)}`:""}`,"ks-dailybtn",()=>this.hooks.daily()),u=this.hooks.challenge();if(u){const k=x("ks-chal");k.innerHTML=`<div class="t">⚔ A friend challenges you</div><div class="d">They reached <b>${R[u.stage]?.name??""} · ${X(u.mass)}</b> in this galaxy. Can you grow bigger?</div>`,k.append(this.btn("Accept challenge","primary",()=>this.hooks.acceptChallenge())),t.append(k)}t.append(o,d,a,r);const m=x("ks-wallet");m.textContent=this.wallet();const p=x("ks-hint");p.textContent="Swallow smaller · Avoid red rings · Grow forever",this.mount("title",t,m,p)}pause(){this.backTo="pause";const t=x(""),s=this.hooks.isTouch()?[["☝","Drag anywhere","Fly. Your body follows your finger."],["»","Double-tap, hold and drag","Boost in any direction (sheds a little mass)."],["✌","Second finger","Also boosts while you steer."]]:[["🖱","Move the mouse","Fly towards the cursor (closer = slower)."],["»","Hold click or Space","Boost (sheds a little mass). WASD / arrows also steer."],["⏸","Esc or P","Pause and resume."]];t.innerHTML=`<div class="ks-howto">${s.map(([o,a,r])=>`<div class="ks-how"><b>${o}</b><span><strong>${a}</strong>${r}</span></div>`).join("")}</div><div class="ks-sub" style="text-align:center;margin-top:10px">Swallow anything smaller · Red rings are bigger: stay away · Hide from supernovae behind big bodies</div>`;const i=this.panel("PAUSED",t,[this.btn("Resume","primary",()=>this.hooks.resume()),this.btn("Restart","",()=>this.hooks.restart()),this.btn("Settings","",()=>this.settings()),this.btn("Menu","",()=>this.hooks.menu())]);this.mount("pause",x("ks-dim"),i)}results(t){const e=x(""),s=t.cause==="titan"&&t.by?`Devoured by the Titan ${t.by}`:$i[t.cause],i=Math.floor(t.seconds/60),o=String(t.seconds%60).padStart(2,"0");e.innerHTML=`
      <div class="ks-res-top">
        <div class="ks-res-cause">${s}</div>
        <div class="ks-res-stage">${R[t.peakStage].name.toUpperCase()}</div>
        <div class="ks-res-mass">Peak mass ${X(t.peakMass)}${t.continues?` · continued ×${t.continues}`:""}</div>
        ${t.newBest?'<div class="ks-newbest">NEW BEST</div>':""}
        ${t.mode==="daily"?`<div class="ks-modetag">☀ DAILY GALAXY${t.dailyBest?" · TODAY'S BEST":""}</div>`:""}
        ${t.mode==="challenge"?`<div class="ks-modetag ${t.peakMass>t.target?"win":"lose"}">${t.peakMass>t.target?`⚔ CHALLENGE WON — you beat ${X(t.target)}`:`⚔ ${X(t.target)} still leads. Try again!`}</div>`:""}
      </div>
      <div class="ks-stats">
        <div class="ks-stat"><b>${i}:${o}</b><span>TIME</span></div>
        <div class="ks-stat"><b>${t.eaten}</b><span>SWALLOWED</span></div>
        <div class="ks-stat"><b>×${t.combo}</b><span>BEST COMBO</span></div>
      </div>`;const a=x("");if([...t.payout.lines.map(d=>({label:d.label,value:`+${d.value}`,total:!1})),{label:"Stardust earned",value:`✦ ${t.payout.total}`,total:!0}].forEach((d,u)=>{const m=x(`ks-pay${d.total?" total":""}`);m.innerHTML=`<span>${d.label}</span><b>${d.value}</b>`,a.append(m),setTimeout(()=>m.classList.add("on"),250+u*140)}),e.append(a),t.found>0){const d=x("ks-disc");d.textContent=`✧ ${t.found} new codex ${t.found===1?"entry":"entries"} discovered`,e.append(d)}const c=this.btn("⚔ Challenge a friend","ks-share",()=>this.hooks.share(t.peakMass,t.peakStage)),h=this.panel("RUN COMPLETE",e,[this.btn("Play again","primary",()=>t.mode==="normal"?this.hooks.play():t.mode==="daily"?this.hooks.daily():this.hooks.acceptChallenge()),c,this.btn("Upgrades","",()=>this.upgrades()),this.btn("Menu","",()=>this.hooks.menu())],this.wallet());this.backTo="title",this.mount("results",x("ks-dim"),h)}upgrades(){const t=x("");t.innerHTML='<div class="ks-sub">Small, permanent boosts. Skill still decides every run.</div>';const e=x("ks-list two");for(const s of Se){const i=qt(this.save,s.id),o=i>=s.costs.length,a=o?0:s.costs[i],r=x("ks-card");r.innerHTML=`<div class="ic">${s.icon}</div><div class="tx"><div class="nm">${s.name}</div><div class="ds">${o?s.desc(i):s.desc(i+1)}</div><div class="ks-pips">${s.costs.map((h,d)=>`<i class="${d<i?"on":""}"></i>`).join("")}</div></div>`;const c=this.btn(o?"MAX":`✦ ${a}`,o?"":this.save.stardust>=a?"primary":"",()=>{this.hooks.buyUpgrade(s.id)&&this.upgrades()});(o||this.save.stardust<a)&&(c.disabled=!0),r.append(c),e.append(r)}t.append(e),this.mount("upgrades",x("ks-dim"),this.panel("UPGRADES",t,[this.btn("Back","",()=>this.back())],this.wallet()))}skins(){const t=x("");t.innerHTML='<div class="ks-sub">The colour of your light: aura, trail and glow.</div>';const e=x("ks-skins");for(const s of Yt){const i=this.save.owned.includes(s.id),o=this.save.skin===s.id,a=x(`ks-skin${o?" sel":""}`),r=x("ks-orb");r.style.background=Di(s),r.style.boxShadow=`0 0 22px ${jt(s.aura)}, 0 0 44px ${jt(s.aura,.4)}`,s.prism&&(r.style.animation="ks-prism 4s linear infinite");const c=x("nm");c.textContent=s.name;const h=o?this.btn("Equipped","",()=>{}):i?this.btn("Equip","",()=>{this.hooks.equipSkin(s.id),this.skins()}):this.btn(`✦ ${s.cost}`,this.save.stardust>=s.cost?"primary":"",()=>{this.hooks.buySkin(s.id)&&this.skins()});(o||!i&&this.save.stardust<s.cost)&&(h.disabled=!0),a.append(r,c,h),e.append(a)}t.append(e),this.mount("skins",x("ks-dim"),this.panel("SKINS",t,[this.btn("Back","",()=>this.back())],this.wallet()))}codex(){const t=x(""),e=new Set(this.save.codex),s=Dt.filter(h=>e.has(h.code)).length;t.innerHTML=`<div class="ks-sub">Everything you have swallowed, survived or met. ${s} / ${Dt.length} discovered.</div>`;const i=x("ks-fact");i.textContent="Tap an entry to read about it.";let o="",a=null;const r=[],c=()=>{for(let h=0;h<4&&r.length;h++){const[d,u]=r.shift();if(!d.isConnected)return;d.src=this.hooks.thumbnail(u)}r.length&&requestAnimationFrame(c)};requestAnimationFrame(c),Dt.forEach((h,d)=>{if(h.group!==o){o=h.group;const P=x("ks-cgroup");P.textContent=o,a=x("ks-codex"),t.append(P,a)}const u=e.has(h.code),m=document.createElement("button");m.className=`ks-centry${u?"":" locked"}`;const p=document.createElement("img");p.alt="",p.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",r.push([p,d]);const k=document.createElement("span");k.textContent=u?h.name:"???",m.append(p,k),m.addEventListener("click",()=>{this.hooks.click(),i.innerHTML=u?`<b>${h.name}</b> — ${h.fact}`:"Not discovered yet. Swallow it, survive it or meet it to unlock."}),a.append(m)}),t.append(i),this.mount("codex",x("ks-dim"),this.panel("CODEX",t,[this.btn("Back","",()=>this.back())],`${s}/${Dt.length}`))}missions(){const t=x(""),e=this.save.dailyUsed!==Mt();t.innerHTML=`<div class="ks-sub">${e?"✦ Daily spark ready: your next run pays double stardust.":"Daily spark used. It recharges tomorrow."}</div>`;const s=x("ks-list");for(const o of this.save.missions){const a=ge.find(h=>h.id===o.id),r=x("ks-card"),c=Math.min(100,o.progress/o.target*100);r.innerHTML=`<div class="ic">${o.done?"✔":"◎"}</div><div class="tx"><div class="nm">${as(o)}</div><div class="ds">${a?.total?`${Math.min(o.progress,o.target)} / ${o.target}`:"In a single run"}</div><div class="ks-prog"><i style="width:${c}%"></i></div></div><span class="ks-pill">✦ ${o.reward}</span>`,s.append(r)}t.append(s);const i=x("ks-sub");i.style.marginTop="12px",i.textContent=`Missions completed: ${this.save.missionsDone}. New ones get harder — and pay more.`,t.append(i),this.mount("missions",x("ks-dim"),this.panel("MISSIONS",t,[this.btn("Back","",()=>this.back())],this.wallet()))}note(t){const e=x("ks-toast2");e.textContent=t,this.layer.parentElement?.append(e),setTimeout(()=>e.remove(),3500)}continueOffer(t){const e=x(""),s=t.have>=t.cost,i=x("ks-cont");i.innerHTML=`<div class="ks-clock"><b>${t.secs}</b></div>
      <div class="lead">Continue as a <b>${R[t.stage].name}</b> (${X(t.mass)}) with 3 s of protection</div>
      <div class="have${s?"":" short"}">${s?`You have ✦ ${t.have}`:`You have ✦ ${t.have}, you need ✦ ${t.cost}. Earn more by playing!`}</div>`,e.append(i);let o=!1;const a=p=>{o||(o=!0,clearInterval(this.offerTimer),window.removeEventListener("keydown",r,!0),p?t.onContinue():t.onDecline())},r=p=>{p.code==="Enter"&&s?(p.preventDefault(),p.stopPropagation(),a(!0)):p.code==="Escape"&&(p.preventDefault(),p.stopPropagation(),a(!1))};window.addEventListener("keydown",r,!0);const c=this.btn(`Continue ✦ ${t.cost}`,`wide${s?" primary":""}`,()=>a(!0));s||(c.disabled=!0);const h=this.btn("No thanks","wide",()=>a(!1));this.mount("offer",x("ks-dim"),this.panel("KEEP GOING?",e,[c,h],`✦ ${t.have}`));const d=i.querySelector(".ks-clock"),u=d.querySelector("b"),m=performance.now();clearInterval(this.offerTimer),this.offerTimer=window.setInterval(()=>{const p=t.secs-(performance.now()-m)/1e3;d.style.setProperty("--p",String(Math.max(0,p/t.secs))),u.textContent=String(Math.max(0,Math.ceil(p))),p<=0&&a(!1)},50)}records(){const t=this.save,e=x(""),s=d=>`${Math.floor(d/60)}:${String(Math.floor(d%60)).padStart(2,"0")}`,i=t.history,o=i.reduce((d,u)=>Math.max(d,u.eaten),t.best.eaten??0);let a=-1,r=-1;for(const d of i)d.mass>r&&([r,a]=[d.mass,d.at]);const c=(d,u)=>`<div class="ks-stat"><b>${d}</b><span>${u}</span></div>`;e.innerHTML=`
      <div class="ks-cgroup" style="margin-top:2px">Personal bests</div>
      <div class="ks-recgrid">
        ${c(t.best.mass?X(t.best.mass):"-",R[t.best.stage??0].name.toUpperCase())}
        ${c(s(t.best.time??0),"LONGEST RUN")}
        ${c(String(o),"MOST SWALLOWED")}
        ${c(`×${t.best.combo??0}`,"BEST COMBO")}
        ${c(String(t.best.titans??0),"TITANS IN A RUN")}
        ${c(String(t.missionsDone),"MISSIONS DONE")}
      </div>
      <div class="ks-cgroup">All time</div>
      <div class="ks-recgrid">
        ${c(String(t.stats.runs),"RUNS")}
        ${c(s(t.stats.seconds),"TIME PLAYED")}
        ${c(String(t.stats.eaten),"SWALLOWED")}
      </div>
      <div class="ks-cgroup">Recent runs</div>`;const h=x("ks-runs");i.length?h.innerHTML='<div class="ks-run head"><span>WHEN</span><span>REACHED</span><span>TIME</span><span>EATEN</span><span>CONT.</span></div>'+i.map(d=>{const u=new Date(d.at),p=`${new Date().toDateString()===u.toDateString()?"Today":u.toLocaleDateString(void 0,{day:"numeric",month:"short"})} ${u.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}`;return`<div class="ks-run${d.at===a?" best":""}"><span class="when">${p}</span><span><b>${R[d.stage]?.name??""}</b> ${X(d.mass)}</span><span>${s(d.seconds)}</span><span>${d.eaten}</span><span>${d.continues?`×${d.continues}`:"-"}</span></div>`}).join(""):h.innerHTML='<div class="ks-sub">No runs yet. Play one!</div>',e.append(h),this.mount("records",x("ks-dim"),this.panel("RECORDS",e,[this.btn("Back","",()=>this.back())]))}settings(){const t=this.save.settings,e=x("ks-settings"),s=(h,d)=>{const u=x("ks-set"),m=document.createElement("label");m.textContent=h,u.append(m,d),e.append(u)},i=(h,d,u)=>{const m=x("ks-seg"),p=()=>m.replaceChildren(...h.map(([k,P])=>{const v=document.createElement("button");return v.textContent=P,v.className=d()===k?"on":"",v.addEventListener("click",()=>{this.hooks.click(),u(k),this.hooks.setting(),p()}),v}));return p(),m};s("Music",i([[!0,"On"],[!1,"Off"]],()=>t.music,h=>t.music=h)),s("Sound effects",i([[!0,"On"],[!1,"Off"]],()=>t.sfx,h=>t.sfx=h));const o=document.createElement("input");o.type="range",o.min="0",o.max="100",o.value=String(Math.round(t.volume*100)),o.addEventListener("input",()=>{t.volume=+o.value/100,this.hooks.setting()}),s("Volume",o);const a=x("ks-gdesc"),r={high:"High: glowing bloom, black-hole lensing, shock ripples, film grain, sharpest picture.",medium:"Medium: full detail, no glow effects. Smooth on most phones.",low:"Low: simpler, softer picture for the fastest play on older devices."},c=()=>{const h=this.hooks.graphicsNow();a.textContent=t.graphics==="auto"?`Auto picks the best for this device. Now using: ${h.toUpperCase()}. ${r[h]}`:r[t.graphics]};s("Graphics",i([["auto","Auto"],["high","High"],["medium","Med"],["low","Low"]],()=>t.graphics,h=>{t.graphics=h,setTimeout(c,0)})),e.append(a),c(),s("Reduce motion",i([[!1,"Off"],[!0,"On"]],()=>t.reduceMotion,h=>t.reduceMotion=h)),"vibrate"in navigator&&s("Vibration",i([[!0,"On"],[!1,"Off"]],()=>t.vibrate,h=>t.vibrate=h)),s("Touch stick",i([["float","Floating"],["fixed","Fixed"]],()=>t.stick,h=>t.stick=h)),this.mount("settings",x("ks-dim"),this.panel("SETTINGS",e,[this.btn("Back","",()=>this.back())]))}}const jt=(n,t=1)=>`rgba(${Math.round(n[0]*255)},${Math.round(n[1]*255)},${Math.round(n[2]*255)},${t})`;function Di(n){return n.prism?"conic-gradient(from 0deg, #ff6b6b, #ffd36b, #6bff9e, #6bd6ff, #b36bff, #ff6b6b)":`radial-gradient(circle at 38% 34%, ${jt(n.core)} 0 18%, ${jt(n.aura)} 55%, ${jt(n.aura,.25)} 72%, transparent 74%)`}me("@keyframes ks-prism { to { filter: hue-rotate(360deg); } }");const q=Ys(),Bi=document.getElementById("game"),Qt=document.getElementById("ui"),A=Vt(q.storage);A.missions.length<3&&ve(A);const rt=()=>As(q.storage,A),$=new ki(Bi),z=new ks,_=new Ms(Qt),G=new Ci(Qt);let wt="normal",Z=null;const Oi=()=>Is(`kindlestar:${Mt()}`);let I="title",M=new ze(1,Pe(A),A.codex),ot=Ie(),$e={stats:M.stats,rivals:0,captured:0},Bt=2;function Ie(){const n=[800,5e3,9e3,4e4,9e4];return new ze(Math.random()*1e9>>>0,{...Pe(A),secondWind:!1,startMass:n[Math.floor(Math.random()*n.length)]})}function Ri(){const n=navigator.deviceMemory??8;return _.isTouch||n<=4?1:2}function Rt(){const n=A.settings;z.musicOn=n.music,z.sfxOn=n.sfx,z.volume=n.volume,z.muted=q.isMuted(),z.apply();const t=n.graphics==="high"?2:n.graphics==="medium"?1:n.graphics==="low"?0:Ri();t!==$.tier&&(Bt=t,$.setTier(t)),Bt=t,$.reduceMotion=n.reduceMotion,_.stickMode=n.stick;const e=Math.max(0,Yt.findIndex(s=>s.id===A.skin));$.skin=Yt[e],$.skinIndex=e}function ns(){const n=window.innerWidth,t=window.innerHeight;$.resize(n,t),Qt.style.setProperty("--ui-z",String(ws(n,t)))}window.addEventListener("resize",ns);ns();Rt();const nt=new Ii(Qt,A,{play:()=>Ot(),daily:()=>Ot(Oi(),"daily"),isTouch:()=>_.isTouch,graphicsNow:()=>["low","medium","high"][$.tier],acceptChallenge:()=>{Z&&Ot(Z.seed,"challenge")},challenge:()=>Z?{mass:Z.mass,stage:Z.stage}:null,share:(n,t)=>void Ni(n,t),resume:()=>Fi(),restart:()=>Ot(wt==="normal"?void 0:M.seed,wt),menu:()=>I==="title"?nt.title():rs(),click:()=>z.click(),buyUpgrade:n=>{const t=Bs(A,n);return z.jingle(t?"buy":"deny"),t&&rt(),t},buySkin:n=>{const t=Yt.find(e=>e.id===n);return!t||A.owned.includes(n)||A.stardust<t.cost?(z.jingle("deny"),!1):(A.stardust-=t.cost,A.owned.push(n),A.skin=n,z.jingle("buy"),Rt(),rt(),!0)},equipSkin:n=>{A.owned.includes(n)&&(A.skin=n,Rt(),rt())},setting:()=>{Rt(),rt()},thumbnail:n=>$.thumbnail(Dt[n]),save:rt});async function Ni(n,t){const e=q.inviteLink({cs:String(M.seed>>>0),cm:String(Math.round(n)),cst:String(t)}),s=`I grew into a ${R[t].name} (${Math.round(n).toLocaleString()}) in Kindlestar. Can you beat me in the same galaxy?`;try{const i=navigator;if(_.isTouch&&i.share){await i.share({title:"Kindlestar challenge",text:s,url:e});return}await navigator.clipboard.writeText(`${s} ${e}`),nt.note("Challenge link copied! Send it to a friend.")}catch{nt.note(e)}}function Ot(n=Math.random()*2**31>>>0,t="normal"){wt=t,z.unlock();const e=Pe(A);M=new ze(n,e,A.codex),$e={stats:M.stats,rivals:0,captured:0},$.reset(M),G.reset(),G.setTarget(t==="challenge"&&Z?Z.mass:0),G.isTouch=_.isTouch,A.tutorialDone?(G.tutorial="done",_.isTouch&&!A.boostLearned&&G.hint("Boost: double-tap, hold and drag")):G.startTutorial(M),z.setStage(M.player.stage),nt.hide(),G.show(!0),I="play",Ut=-1,_.setActive(!0),z.paused=!1,z.apply(),xe.reset(),q.gameplayStart()}function De(){I==="play"&&(I="paused",_.setActive(!1),z.paused=!0,z.apply(),q.gameplayStop(),nt.pause())}function Fi(){I==="paused"&&(nt.hide(),I="play",_.setActive(!0),z.paused=!1,z.apply(),xe.reset(),q.gameplayStart())}function rs(){I="title",_.setActive(!1),G.show(!1),z.paused=!1,z.apply(),q.gameplayStop(),ot=Ie(),$.reset(ot),z.setStage(0),nt.title()}function Gi(){if(M.stats.continues>=Fs){Ke();return}I="offer",q.gameplayStop();const n=Gs(M.stats.peakStage,M.stats.continues);nt.continueOffer({cost:n,have:A.stardust,stage:M.player.stage,mass:M.player.mass,secs:8,onContinue:()=>{I!=="offer"||A.stardust<n||(A.stardust-=n,rt(),z.jingle("buy"),M.revive(),$.onEvents(M,M.events),z.event(M.events[0]),nt.hide(),I="play",_.setActive(!0),xe.reset(),q.gameplayStart())},onDecline:()=>{I==="offer"&&Ke()}})}function Ke(){I="results",_.setActive(!1),G.show(!1),q.gameplayStop();const n=A.best.mass??0;A.tutorialDone=!0;const t=Ns(A,$e,M.found,void 0,M.cause??"");ve(A),rt();const e=M.stats.peakMass>n&&n>0;let s=!1;wt==="daily"&&(A.daily.date!==Mt()&&(A.daily={date:Mt(),best:0,stage:0}),M.stats.peakMass>A.daily.best&&(A.daily.best=M.stats.peakMass,A.daily.stage=M.stats.peakStage,s=!0),rt()),wt==="challenge"&&Z&&M.stats.peakMass>Z.mass&&(Z=null),e&&z.jingle("best"),nt.results({cause:M.cause??"fizzle",by:M.causeBy,peakMass:M.stats.peakMass,peakStage:M.stats.peakStage,seconds:Math.floor(M.stats.ticks/60),eaten:M.stats.eaten,titans:M.stats.titansEaten,combo:M.stats.bestCombo,newBest:e,payout:t,found:M.found.length,continues:M.stats.continues,mode:wt,target:wt==="challenge"?Z?.mass??M.stats.peakMass-1:0,dailyBest:s})}_.onPause=()=>{I==="play"&&De()};_.onFirst=()=>{z.unlock(),z.apply()};Qt.addEventListener("pointerdown",()=>z.unlock());for(const n of["touchend","click"])window.addEventListener(n,()=>z.unlock(),{passive:!0});G.onHintDone=()=>{A.boostLearned=!0,rt()};G.pause.addEventListener("click",n=>{n.stopPropagation(),z.click(),De()});function Gt(n){if(!(!A.settings.vibrate||!_.isTouch))try{navigator.vibrate?.(n)}catch{}}function Hi(n){const t=M.player;for(const e of n)switch(z.event(e),e.t==="stage"?Gt([30,60,40]):e.t==="hit"?Gt(e.by==="nova"?70:35):e.t==="death"?Gt([60,40,120]):e.t==="titanEaten"||e.t==="holeEaten"?Gt([40,40,40]):e.t==="collect"&&Gt(15),e.t){case"stage":G.stageUp(e.stage),z.setStage(e.stage);break;case"novaWarn":G.warning("nova","SUPERNOVA — HIDE BEHIND SOMETHING BIG",4.6);break;case"novaSafe":G.warning("safe","SAFE IN THE SHADOW!",1.6,!0);break;case"stormWarn":G.warning("storm","METEOR STORM INCOMING",3);break;case"titan":{const i=M.titans[e.idx].mass>t.mass*1.12;G.warning("titan",i?`TITAN ${gt[e.idx].name.toUpperCase()} IS HUNTING`:`TITAN ${gt[e.idx].name.toUpperCase()} — SWALLOW IT!`,3,!i);break}case"titanEaten":G.announce("TITAN DEVOURED",`${gt[e.idx].name} is no more`);break;case"secondWind":G.announce("SECOND WIND","One more chance");break;case"discover":{const s=Dt.find(i=>i.code===e.code);s&&G.toast(`✧ New in codex: ${s.name}`);break}case"eat":e.who==="player"&&e.combo>=2&&G.combo($.playerScreen.x,$.playerScreen.y-$.playerScreen.r-10,e.combo);break}}function Ui(){I==="play"?(M.step(_.sample($.playerScreen)),M.events.length&&(Ws($e,M.events),$.onEvents(M,M.events),Hi(M.events),M.over&&(I="dying",_.setActive(!1)))):I==="title"&&(ot.step(Mi(ot,.85)),$.onEvents(ot,ot.events),(ot.over||ot.tick>60*60*3)&&(ot=Ie(),$.reset(ot)))}const xe=new Si(Ui);let Qe=performance.now(),Je=!0,oe=0,be=0,Ut=-1;function ls(n){const t=Math.min(.1,Math.max(0,(n-Qe)/1e3));Qe=n;const s=I==="play"||I==="title"?xe.advance(t):1,i=I==="title"?ot:M;if($.frame(i,s,I==="paused"?0:t,I==="title"),I==="play"||I==="dying"){G.update(t,M,M.stats.gold,$.marks,$.playerScreen);const o=M.player;let a=0,r=0;for(const c of M.bodies){const h=Math.hypot(c.x-o.x,c.y-o.y);c.role==="hole"?a=Math.max(a,1-(h-c.r*3)/(c.r*10)):(c.role==="rival"||c.role==="titan")&&c.mass>o.mass*1.12&&h<M.view*1.2&&(r=Math.max(r,1-h/(M.view*1.2)))}M.novas.some(c=>c.warn>0)&&(r=Math.max(r,.8)),z.update(o.boosting&&I==="play",Math.max(0,Math.min(1,a)),r),o.boosting&&_.isTouch&&!A.boostLearned&&(A.boostLearned=!0,rt())}else z.update(!1,0,0);if(I==="dying"&&(Ut<0&&(Ut=n),n-Ut>1500&&(Ut=-1,Gi())),document.visibilityState==="visible"&&I!=="paused"&&(oe+=t,be++,oe>2)){const o=be/oe;o<48&&$.resScale>.56?$.setResScale($.resScale-.15):o<40&&A.settings.graphics==="auto"&&Bt>0?(Bt=Bt-1,$.setTier(Bt),$.setResScale(.85)):o>57&&$.resScale<1&&$.setResScale($.resScale+.1),oe=0,be=0}if(Je){Je=!1,q.loadingStop();const o=q.inviteParams();o&&Number.isFinite(+o.cs)&&+o.cm>0&&(Z={seed:+o.cs>>>0,mass:+o.cm,stage:Math.max(0,Math.min(8,Math.floor(+o.cst||0)))}),Z?Ot(Z.seed,"challenge"):A.tutorialDone?rs():Ot()}requestAnimationFrame(ls)}document.addEventListener("visibilitychange",()=>{document.hidden?(I==="play"&&De(),z.paused=!0,z.apply()):I!=="paused"&&(z.paused=!1,z.apply())});q.onMuteChange(n=>{z.muted=n,z.apply()});q.onStorageSwitch(()=>{Object.assign(A,Vt(q.storage)),A.missions.length<3&&ve(A),Rt(),I==="title"&&nt.title()});q.init().finally(()=>{q.loadingStart(),Object.assign(A,Vt(q.storage)),A.missions.length<3&&ve(A),Rt(),requestAnimationFrame(ls)});
