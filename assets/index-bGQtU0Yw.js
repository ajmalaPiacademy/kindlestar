var ws=Object.defineProperty;var Ms=(n,t,e)=>t in n?ws(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var l=(n,t,e)=>Ms(n,typeof t!="symbol"?t+"":t,e);import{O as ns,S as ge,T as rs,N as ls,R as cs,M as Ts,P as Rt,a as dt,V as It,b as ct,W as Ee,L as Ae,H as hs,c as xt,I as Qt,d as Jt,e as rt,C as bt,f as ye,D as gt,B as ds,g as Vt,h as us,i as Ss,j as Ue,k as As,G as Ls,E as zs,U as Ps,l as We,F as Cs,m as Es,n as $s}from"./three-DB6SgjdI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();const _e=[[[0,7,12,16],[5,12,16,21],[3,10,15,19],[-2,5,10,14]],[[2,9,14,17],[7,14,19,22],[5,12,17,21],[0,7,12,16]],[[0,7,14,15],[-4,3,10,12],[-2,5,12,14],[3,10,15,19]],[[5,12,16,19],[0,7,14,16],[9,16,19,24],[7,14,17,21]],[[-3,4,9,12],[2,9,12,16],[0,7,11,16],[5,9,12,19]],[[0,7,12,19],[5,12,17,21],[7,14,19,23],[3,10,15,22]],[[-5,2,7,11],[0,7,11,14],[-3,4,9,12],[2,9,14,17]],[[0,3,7,10],[-4,3,8,12],[-2,5,10,13],[-7,0,5,8]],[[0,7,12,16],[4,11,16,19],[9,16,21,24],[5,12,17,21]]],ae=[0,2,4,7,9,12,14,16,19,21,24],Is=110,W=n=>Is*Math.pow(2,n/12);class Ds{constructor(){l(this,"ctx",null);l(this,"master");l(this,"sfx");l(this,"music");l(this,"verb");l(this,"noise");l(this,"boostGain");l(this,"boostFilter");l(this,"boostHum");l(this,"boostHumGain");l(this,"lastWhoosh",0);l(this,"holeGain");l(this,"tensionGain");l(this,"droneOsc",[]);l(this,"nextBar",0);l(this,"bar",0);l(this,"nextBell",0);l(this,"lastDust",0);l(this,"stage",0);l(this,"danger",0);l(this,"musicOn",!0);l(this,"sfxOn",!0);l(this,"volume",.8);l(this,"muted",!1);l(this,"paused",!1)}unlock(){if(this.ctx){this.ctx.resume();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;const e=new t;this.ctx=e;const s=e.createDynamicsCompressor();s.threshold.value=-14,s.ratio.value=4,s.connect(e.destination),this.master=e.createGain(),this.master.connect(s),this.sfx=e.createGain(),this.sfx.connect(this.master),this.music=e.createGain(),this.music.connect(this.master);const i=e.createConvolver(),o=Math.floor(e.sampleRate*3.2),a=e.createBuffer(2,o,e.sampleRate);for(let w=0;w<2;w++){const A=a.getChannelData(w);for(let g=0;g<o;g++)A[g]=(Math.random()*2-1)*Math.pow(1-g/o,3.2)}i.buffer=a,this.verb=e.createGain(),this.verb.gain.value=.5,this.verb.connect(i).connect(this.master),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const r=this.noise.getChannelData(0);for(let w=0;w<r.length;w++)r[w]=Math.random()*2-1;const c=this.loopNoise();this.boostFilter=e.createBiquadFilter(),this.boostFilter.type="lowpass",this.boostFilter.frequency.value=260,this.boostFilter.Q.value=.4,this.boostGain=e.createGain(),this.boostGain.gain.value=0,c.connect(this.boostFilter).connect(this.boostGain).connect(this.sfx),this.boostHum=e.createOscillator(),this.boostHum.type="sine",this.boostHum.frequency.value=98,this.boostHumGain=e.createGain(),this.boostHumGain.gain.value=0,this.boostHum.connect(this.boostHumGain).connect(this.sfx),this.boostHum.start();const h=this.loopNoise(),d=e.createBiquadFilter();d.type="lowpass",d.frequency.value=120,this.holeGain=e.createGain(),this.holeGain.gain.value=0,h.connect(d).connect(this.holeGain).connect(this.sfx);const p=e.createGain();p.gain.value=.07;const m=e.createBiquadFilter();m.type="lowpass",m.frequency.value=400,p.connect(m).connect(this.music),m.connect(this.verb);for(const w of[-6,5]){const A=e.createOscillator();A.type="sawtooth",A.frequency.value=W(-12),A.detune.value=w,A.connect(p),A.start(),this.droneOsc.push(A)}const f=e.createOscillator();f.type="square",f.frequency.value=W(-12);const b=e.createBiquadFilter();b.type="lowpass",b.frequency.value=300;const z=e.createOscillator();z.frequency.value=4;const y=e.createGain();y.gain.value=.5;const x=e.createGain();x.gain.value=.5,z.connect(y).connect(x.gain),this.tensionGain=e.createGain(),this.tensionGain.gain.value=0,f.connect(b).connect(x).connect(this.tensionGain).connect(this.music),f.start(),z.start(),this.nextBar=e.currentTime+.1,this.nextBell=e.currentTime+1,this.apply()}loopNoise(){const t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t.start(),t}apply(){if(!this.ctx)return;const t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.muted||this.paused?0:this.volume,t,.08),this.sfx.gain.setTargetAtTime(this.sfxOn?.85:0,t,.05),this.music.gain.setTargetAtTime(this.musicOn?.55:0,t,.3)}setStage(t){this.stage=Math.max(0,Math.min(_e.length-1,t))}update(t,e,s){const i=this.ctx;if(!i)return;const o=i.currentTime;this.boostGain.gain.setTargetAtTime(t?.023:0,o,t?.12:.25),this.boostFilter.frequency.setTargetAtTime(t?420:260,o,.4),this.boostHumGain.gain.setTargetAtTime(t?.0073:0,o,t?.15:.3),this.boostHum.frequency.setTargetAtTime(t?131:98,o,.6),this.holeGain.gain.setTargetAtTime(Math.min(.6,e*.6),o,.3),this.danger+=(s-this.danger)*.05,this.tensionGain.gain.setTargetAtTime(this.musicOn?this.danger*.05:0,o,.4),this.schedule()}schedule(){const e=this.ctx.currentTime;if(this.paused){this.nextBar=Math.max(this.nextBar,e+.2);return}const s=_e[this.stage];for(;this.nextBar<e+.3;){const o=s[this.bar%s.length],a=this.nextBar;for(const r of o)this.pad(W(r),a,4.6,.028);for(const r of this.droneOsc)r.frequency.setTargetAtTime(W(o[0]-12),a,.8);if(this.stage>=3&&this.pad(W(o[0]-12),a,4.4,.03,"triangle"),this.stage>=5)for(let r=0;r<8;r++)this.bell(W(o[r%o.length]+12),a+r*.5,.012,.6);this.bar++,this.nextBar+=4}const i=2.6-Math.min(1.6,this.stage*.22);for(;this.nextBell<e+.3;){const a=s[this.bar%s.length][0]+12+ae[Math.floor(Math.random()*7)];(this.stage>=1||Math.random()<.5)&&this.bell(W(a),this.nextBell,.035,2.4),this.nextBell+=i*(.6+Math.random()*.8)}}pad(t,e,s,i,o="sawtooth"){const a=this.ctx,r=a.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(i,e+1.4),r.gain.setValueAtTime(i,e+s-1.6),r.gain.linearRampToValueAtTime(1e-4,e+s);const c=a.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(500+this.stage*120,e),c.Q.value=.6,r.connect(c),c.connect(this.music),c.connect(this.verb);for(const h of[-9,0,8]){const d=a.createOscillator();d.type=o,d.frequency.value=t,d.detune.value=h,d.connect(r),d.start(e),d.stop(e+s+.1)}}bell(t,e,s,i){const o=this.ctx,a=o.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.exponentialRampToValueAtTime(s,e+.01),a.gain.exponentialRampToValueAtTime(1e-4,e+i),a.connect(this.music),a.connect(this.verb);for(const[r,c]of[[1,1],[2.01,.35],[3,.12]]){const h=o.createOscillator();h.type="sine",h.frequency.value=t*r;const d=o.createGain();d.gain.value=c,h.connect(d).connect(a),h.start(e),h.stop(e+i+.05)}}tone(t,e,s,i,o=0,a=0,r=.3){const c=this.ctx;if(!c||!this.sfxOn)return;const h=c.currentTime+o,d=c.createOscillator();d.type=s,d.frequency.setValueAtTime(t,h),a&&d.frequency.exponentialRampToValueAtTime(Math.max(20,t*a),h+e);const p=c.createGain();if(p.gain.setValueAtTime(1e-4,h),p.gain.exponentialRampToValueAtTime(i,h+.008),p.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(p),p.connect(this.sfx),r>0){const m=c.createGain();m.gain.value=r,p.connect(m).connect(this.verb)}d.start(h),d.stop(h+e+.05)}hiss(t,e,s,i=0,o="lowpass",a=0){const r=this.ctx;if(!r||!this.sfxOn)return;const c=r.currentTime+i,h=r.createBufferSource();h.buffer=this.noise;const d=r.createBiquadFilter();d.type=o,d.frequency.setValueAtTime(e,c),a&&d.frequency.exponentialRampToValueAtTime(Math.max(30,e*a),c+s);const p=r.createGain();p.gain.setValueAtTime(t,c),p.gain.exponentialRampToValueAtTime(1e-4,c+s),h.connect(d).connect(p).connect(this.sfx);const m=r.createGain();m.gain.value=.3,p.connect(m).connect(this.verb),h.start(c,Math.random()*1.5),h.stop(c+s+.05)}click(){this.tone(1400,.05,"sine",.06,0,.7,0)}event(t){if(this.ctx)switch(t.t){case"eat":{if(t.who!=="player"){t.who==="hole"&&this.hiss(.05,300,.6,0,"lowpass",.3);break}const e=Math.min(ae.length-1,Math.max(0,t.combo-1)),s=W(24+ae[e]);this.tone(s,.25,"sine",.11,0,1.02),this.tone(s*1.5,.18,"triangle",.04,.03),this.tone(140+Math.random()*30,.16,"sine",.12,0,.5,0);break}case"dust":{const e=this.ctx.currentTime;if(e-this.lastDust<.05)break;this.lastDust=e,this.tone(W(36+ae[Math.floor(Math.random()*6)]),.07,"sine",.02,0,1,.5);break}case"collect":t.kind==="gold"?[0,4,7,12].forEach((e,s)=>this.tone(W(36+e),.3,"triangle",.06,s*.05)):[0,7,12,19].forEach((e,s)=>this.tone(W(28+e),.35,"sine",.07,s*.06,1.01));break;case"boost":{const e=this.ctx.currentTime;if(!t.on||e-this.lastWhoosh<.5)break;this.lastWhoosh=e,this.hiss(.017,900,.45,0,"lowpass",.3);break}case"stage":[0,7,12,16,19,24].forEach((e,s)=>this.tone(W(12+e),2.2,"triangle",.05,s*.07,1,.8)),this.hiss(.08,2e3,1.6,0,"highpass",.3);break;case"hit":this.tone(90,.4,"sine",.3,0,.4,.2),this.hiss(.18,900,.35,0,"lowpass",.3);break;case"bump":this.tone(120,.15,"sine",.08*Math.min(2,t.strength),0,.6,0);break;case"shieldBlock":this.tone(900,.12,"triangle",.05,0,1.5);break;case"novaWarn":for(let e=0;e<4;e++)this.tone(660+e*110,.12,"square",.035,e*1.1,1,.2);this.tone(55,4.4,"sawtooth",.04,0,2.5,.4);break;case"novaBlast":this.tone(48,1.8,"sine",.4,0,.5,.5),this.hiss(.35,1400,2.2,0,"lowpass",.1);break;case"novaSafe":[0,7,12].forEach((e,s)=>this.tone(W(31+e),.5,"sine",.06,s*.06));break;case"stormWarn":this.hiss(.08,300,2.5,0,"bandpass",6),this.tone(220,.3,"square",.03,0),this.tone(220,.3,"square",.03,.45);break;case"titan":this.tone(W(-12),1.6,"sawtooth",.09,0,1,.6),this.tone(W(-5),1.6,"sawtooth",.07,.15,1,.6);break;case"titanEaten":[0,4,7,12,16,19,24].forEach((e,s)=>this.tone(W(19+e),1.4,"triangle",.06,s*.06,1,.7)),this.tone(60,1.2,"sine",.25,0,.5);break;case"holeEaten":this.tone(40,1.5,"sine",.35,0,.4),this.hiss(.2,200,1.4,0,"lowpass",.2);break;case"capture":this.tone(W(31),.4,"sine",.05,0,1.5,.6);break;case"moonFed":this.tone(W(33),.3,"sine",.05,0,.7,.5);break;case"moonLost":this.tone(200,.3,"triangle",.06,0,.5);break;case"secondWind":case"revive":[0,12,24].forEach((e,s)=>this.tone(W(12+e),1,"sine",.1,s*.08,1,.8));break;case"death":this.tone(330,1.6,"sawtooth",.08,0,.12,.6),this.tone(55,1.4,"sine",.3,.05,.5),this.hiss(.25,2500,1.8,0,"lowpass",.05);break}}jingle(t){t==="buy"&&[0,7,12,16].forEach((e,s)=>this.tone(W(28+e),.35,"triangle",.06,s*.06)),t==="best"&&[0,4,7,12,16,19,24].forEach((e,s)=>this.tone(W(24+e),.8,"sine",.06,s*.09,1,.6)),t==="deny"&&this.tone(160,.2,"square",.04,0,.8,0)}}function v(n){const t=document.createElement("div");return t.className=n,t}function be(n){const t=document.createElement("style");t.textContent=n,document.head.appendChild(t)}const Bs=(n,t)=>Math.round(Math.min(1.75,Math.max(1,Math.min(n/1e3,t/600)))*100)/100;be(`
#ui .ks-stick { position: absolute; width: 120px; height: 120px; margin: -60px 0 0 -60px; border-radius: 50%; pointer-events: none;
  background: radial-gradient(circle, rgba(255,255,255,.07) 0 55%, rgba(255,255,255,.14) 56% 58%, transparent 59%); opacity: 0; transition: opacity .2s; }
#ui .ks-stick.on { opacity: 1; }
#ui .ks-knob { position: absolute; left: 50%; top: 50%; width: 48px; height: 48px; margin: -24px 0 0 -24px; border-radius: 50%;
  background: radial-gradient(circle at 40% 35%, rgba(255,255,255,.55), rgba(255,220,150,.22) 60%, rgba(255,200,120,.08)); box-shadow: 0 0 18px rgba(255,200,120,.35); }
/* Double-tap boost: the stick turns gold. */
#ui .ks-stick.boost { background: radial-gradient(circle, rgba(255,190,100,.12) 0 55%, rgba(255,200,120,.55) 56% 58%, transparent 59%); }
#ui .ks-stick.boost .ks-knob { background: radial-gradient(circle at 40% 35%, #fff6dc, #ffb54a 70%); box-shadow: 0 0 22px #ffb54a; }
`);class Fs{constructor(t){l(this,"held",new Set);l(this,"mouse",{x:0,y:0,has:!1,down:!1});l(this,"touchMove",null);l(this,"touchBoost",new Set);l(this,"stickBoosts",!1);l(this,"lastTap",{t:-1e9,x:0,y:0});l(this,"lastDevice","mouse");l(this,"stick",v("ks-stick"));l(this,"knob",v("ks-knob"));l(this,"onFirst",()=>{});l(this,"onPause",()=>{});l(this,"active",!1);l(this,"stickMode","float");l(this,"isTouch",!1);l(this,"touchMove0",{t:0,x:0,y:0});const e=document.getElementById("game");this.stick.append(this.knob),t.append(this.stick),window.addEventListener("keydown",i=>{if(i.code==="Escape"||i.code==="KeyP"){this.active&&(i.preventDefault(),this.onPause());return}["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),this.held.add(i.code),/^(Key[WASD]|Arrow)/.test(i.code)&&(this.lastDevice="keys"),this.onFirst()}),window.addEventListener("keyup",i=>this.held.delete(i.code)),window.addEventListener("blur",()=>{this.held.clear(),this.mouse.down=!1,this.touchMove=null,this.stickBoosts=!1,this.touchBoost.clear(),this.updateStick()}),e.addEventListener("contextmenu",i=>i.preventDefault()),window.addEventListener("pointermove",i=>{if(i.pointerType==="mouse")this.mouse.x=i.clientX,this.mouse.y=i.clientY,(!this.mouse.has||Math.abs(i.movementX)+Math.abs(i.movementY)>2)&&(this.lastDevice=this.held.size&&this.lastDevice==="keys"?"keys":"mouse"),this.mouse.has=!0;else if(this.touchMove&&i.pointerId===this.touchMove.id){if(this.touchMove.x=i.clientX,this.touchMove.y=i.clientY,this.stickMode==="float"){const o=this.touchMove.x-this.touchMove.x0,a=this.touchMove.y-this.touchMove.y0,r=Math.hypot(o,a);r>70&&(this.touchMove.x0+=o/r*(r-70),this.touchMove.y0+=a/r*(r-70))}this.updateStick()}}),e.addEventListener("pointerdown",i=>{if(i.pointerType==="mouse")this.mouse.down=!0,this.mouse.has=!0,this.mouse.x=i.clientX,this.mouse.y=i.clientY,this.lastDevice="mouse";else if(this.isTouch=!0,this.lastDevice="touch",this.touchMove)this.touchBoost.add(i.pointerId);else{const a=this.stickMode==="fixed"?this.fixedBase():{x:i.clientX,y:i.clientY};this.touchMove={id:i.pointerId,x0:a.x,y0:a.y,x:i.clientX,y:i.clientY};const r=performance.now();this.stickBoosts=r-this.lastTap.t<350&&Math.hypot(i.clientX-this.lastTap.x,i.clientY-this.lastTap.y)<70,this.touchMove0={t:r,x:i.clientX,y:i.clientY},this.updateStick()}this.onFirst()});const s=i=>{if(i.pointerType==="mouse"&&(this.mouse.down=!1),this.touchMove&&i.pointerId===this.touchMove.id){const o=this.touchMove0;performance.now()-o.t<250&&Math.hypot(i.clientX-o.x,i.clientY-o.y)<20&&(this.lastTap={t:performance.now(),x:i.clientX,y:i.clientY}),this.touchMove=null,this.stickBoosts=!1,this.updateStick()}this.touchBoost.delete(i.pointerId)};window.addEventListener("pointerup",s),window.addEventListener("pointercancel",s),matchMedia("(pointer: coarse)").matches&&(this.isTouch=!0)}fixedBase(){return{x:96,y:window.innerHeight-110}}updateStick(){const t=this.touchMove,e=(!!t||this.stickMode==="fixed"&&this.isTouch)&&this.active;this.stick.classList.toggle("on",e),this.stick.classList.toggle("boost",!!t&&this.stickBoosts);const s=t?{x:t.x0,y:t.y0}:this.fixedBase();this.stick.style.left=`${s.x}px`,this.stick.style.top=`${s.y}px`;let i=0,o=0;if(t){const a=t.x-t.x0,r=t.y-t.y0,c=Math.hypot(a,r),h=Math.min(c,46);i=c?a/c*h:0,o=c?r/c*h:0}this.knob.style.transform=`translate(${i}px, ${o}px)`}setActive(t){this.active=t,t||(this.touchMove=null,this.stickBoosts=!1,this.touchBoost.clear()),this.updateStick()}sample(t){const e=h=>this.held.has(h)?1:0,s=e("KeyD")+e("ArrowRight")-e("KeyA")-e("ArrowLeft"),i=e("KeyS")+e("ArrowDown")-e("KeyW")-e("ArrowUp"),o=this.held.has("Space")||this.held.has("ShiftLeft")||this.held.has("ShiftRight");let a=0,r=0;if(s||i)a=s,r=i;else if(this.touchMove){const h=this.touchMove.x-this.touchMove.x0,d=this.touchMove.y-this.touchMove.y0,p=Math.hypot(h,d);if(p>6){const m=Math.min(1,(p-6)/40);a=h/p*m,r=d/p*m}}else if(this.lastDevice==="mouse"&&this.mouse.has){const h=this.mouse.x-t.x,d=this.mouse.y-t.y,p=Math.hypot(h,d),m=Math.min(window.innerWidth,window.innerHeight)*.2;if(p>4){const f=Math.min(1,p/m);a=h/p*f,r=d/p*f}}const c=this.touchBoost.size>0||!!this.touchMove&&this.stickBoosts;return{mx:a,my:r,boost:o||this.mouse.down||c}}}const Os="kindlestar",Dt=`${Os}:v1`,$e=30,Hs=()=>({v:1,best:{},stardust:0,upgrades:{},skin:"ember",owned:["ember"],codex:[],missions:[],missionsDone:0,milestones:0,dailyUsed:"",stats:{runs:0,eaten:0,seconds:0,titans:0},tutorialDone:!1,boostLearned:!1,history:[],daily:{date:"",best:0,stage:0},settings:{music:!0,sfx:!0,reduceMotion:!1,graphics:"auto",stick:"float",volume:.8,vibrate:!0}}),q=(n,t,e=0,s=1e15)=>typeof n=="number"&&Number.isFinite(n)?Math.min(s,Math.max(e,n)):t,qe=(n,t=200)=>Array.isArray(n)?n.filter(e=>typeof e=="string"&&e.length<40).slice(0,t):[];function Zt(n){const t=Hs();try{const e=n.get(Dt);if(!e)return t;const s=JSON.parse(e);if(!s||typeof s!="object")return t;if(s.best&&typeof s.best=="object")for(const[i,o]of Object.entries(s.best))typeof o=="number"&&Number.isFinite(o)&&(t.best[i]=o);if(t.stardust=Math.floor(q(s.stardust,0)),s.upgrades&&typeof s.upgrades=="object")for(const[i,o]of Object.entries(s.upgrades))typeof o=="number"&&Number.isFinite(o)&&(t.upgrades[i]=Math.max(0,Math.min(10,Math.floor(o))));if(typeof s.skin=="string"&&(t.skin=s.skin),t.owned=Array.from(new Set(["ember",...qe(s.owned)])),t.owned.includes(t.skin)||(t.skin="ember"),t.codex=Array.from(new Set(qe(s.codex))),Array.isArray(s.missions)&&(t.missions=s.missions.filter(i=>!!i&&typeof i=="object"&&typeof i.id=="string").slice(0,3).map(i=>({id:i.id,target:q(i.target,1,1),reward:q(i.reward,10,0,1e3),progress:q(i.progress,0),done:i.done===!0}))),t.missionsDone=Math.floor(q(s.missionsDone,0)),t.milestones=Math.floor(q(s.milestones,0,0,1023)),typeof s.dailyUsed=="string"&&(t.dailyUsed=s.dailyUsed.slice(0,10)),s.stats&&typeof s.stats=="object")for(const i of Object.keys(t.stats))t.stats[i]=q(s.stats[i],0);if(t.tutorialDone=s.tutorialDone===!0,t.boostLearned=s.boostLearned===!0,s.daily&&typeof s.daily=="object"&&typeof s.daily.date=="string"&&(t.daily={date:s.daily.date.slice(0,10),best:q(s.daily.best,0),stage:Math.floor(q(s.daily.stage,0,0,8))}),Array.isArray(s.history)&&(t.history=s.history.filter(i=>!!i&&typeof i=="object").slice(0,$e).map(i=>({at:q(i.at,0),seconds:q(i.seconds,0),eaten:q(i.eaten,0),mass:q(i.mass,0),stage:Math.floor(q(i.stage,0,0,8)),titans:q(i.titans,0),combo:q(i.combo,0),cause:typeof i.cause=="string"?i.cause.slice(0,20):"",continues:q(i.continues,0),dust:q(i.dust,0)}))),s.settings){const i=s.settings;for(const o of["music","sfx","reduceMotion","vibrate"])typeof i[o]=="boolean"&&(t.settings[o]=i[o]);(i.graphics==="auto"||i.graphics==="high"||i.graphics==="medium"||i.graphics==="low")&&(t.settings.graphics=i.graphics),(i.stick==="float"||i.stick==="fixed")&&(t.settings.stick=i.stick),t.settings.volume=q(i.volume,.8,0,1)}}catch{}return t}function Rs(n,t){try{n.set(Dt,JSON.stringify(t))}catch{}}function Ns(n,t){const e={...n,best:{...n.best},upgrades:{...n.upgrades},settings:{...n.settings},stats:{...n.stats}};for(const[i,o]of Object.entries(t.best))e.best[i]=Math.max(e.best[i]??-1/0,o);for(const[i,o]of Object.entries(t.upgrades))e.upgrades[i]=Math.max(e.upgrades[i]??0,o);e.stardust=Math.max(n.stardust,t.stardust),e.owned=Array.from(new Set([...n.owned,...t.owned])),e.codex=Array.from(new Set([...n.codex,...t.codex])),e.missionsDone=Math.max(n.missionsDone,t.missionsDone),e.milestones=n.milestones|t.milestones,e.tutorialDone=n.tutorialDone||t.tutorialDone,e.boostLearned=n.boostLearned||t.boostLearned;const s=new Set;e.history=[...n.history,...t.history].sort((i,o)=>o.at-i.at).filter(i=>!s.has(i.at)&&!!s.add(i.at)).slice(0,$e);for(const i of Object.keys(e.stats))e.stats[i]=Math.max(n.stats[i],t.stats[i]);return e}function Gs(n,t){try{if(t.get(Dt)===null)return;const e=JSON.stringify(Ns(Zt(n),Zt(t)));n.set(Dt,e),t.get(Dt)!==e&&t.remove?.(Dt)}catch{}}const R=[{id:"dust",name:"Ice Pebble",min:0},{id:"comet",name:"Comet",min:12},{id:"moon",name:"Moon",min:70},{id:"planet",name:"Planet",min:450},{id:"giant",name:"Gas Giant",min:3e3},{id:"star",name:"Star",min:22e3},{id:"supergiant",name:"Supergiant",min:16e4},{id:"hole",name:"Black Hole",min:12e5},{id:"quasar",name:"Quasar",min:9e6}],ve=4,je=2.2;function xe(n){let t=0;for(let e=1;e<R.length;e++)n>=R[e].min&&(t=e);return t}function Us(n){const t=xe(n),e=Math.max(R[t].min,ve),s=t+1<R.length?R[t+1].min:e*10;return Math.min(1,Math.max(0,Math.log(n/e)/Math.log(s/e)))}const Mt=n=>.5*Math.sqrt(n),Le=n=>13*Math.pow(n,.9),C=n=>10*Math.pow(n,.8),et=1.12,ue=n=>xe(n),Bt=[["Rocky Pebble","Ice Pebble"],["Ice Comet","Emerald Comet","Ember Comet"],["Grey Moon","Frost Moon","Lava Moon","Rust Moon"],["Ocean World","Desert World","Jungle World","Ice World","Lava World","Toxic World"],["Banded Giant","Ringed Giant","Storm Giant","Ice Giant"],["Red Dwarf","Yellow Star","White Star","Blue Star"],["Red Supergiant","Blue Supergiant","Pulsar"],["Star Cluster","Globular Cluster"],["Spiral Galaxy","Elliptical Galaxy"]],Ws=(n,t)=>t%Bt[n].length,vt=[{name:"Pip",mass:9},{name:"Wisp",mass:40},{name:"Cinder",mass:220},{name:"Tundra",mass:1300},{name:"Maelstrom",mass:8e3},{name:"Solara",mass:55e3},{name:"Vortigan",mass:38e4},{name:"Umbra",mass:26e5},{name:"Leviathan",mass:18e6},{name:"Eternity",mass:12e7}],_s=.0012;function J(n){const t=(e,s)=>(e>=100?Math.round(e):e>=10?Math.round(e*10)/10:Math.round(e*100)/100)+s;return n>=1e9?t(n/1e9,"B"):n>=1e6?t(n/1e6,"M"):n>=1e3?t(n/1e3,"K"):t(n,"")}function qs(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function js(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}const ps=60,qt=1/ps,X=qt,I=n=>Math.round(n*ps),ze=["magnet","shield","surge"],Pe={startMass:ve,magnet:1,boostCost:1,shell:1,luck:1,secondWind:!1},Vs=[0,0,0,0,3,5,7,8,8],Ve=.5;class Ie{constructor(t=1,e=Pe,s=[]){l(this,"tick",0);l(this,"over",!1);l(this,"cause",null);l(this,"causeBy","");l(this,"killerRatio",0);l(this,"player");l(this,"bodies",[]);l(this,"dust",[]);l(this,"novas",[]);l(this,"storm",null);l(this,"titans");l(this,"events",[]);l(this,"found",[]);l(this,"stats");l(this,"rnd");l(this,"nextId",1);l(this,"nextNova",0);l(this,"nextStorm",0);l(this,"nextGold",0);l(this,"nextPower",0);l(this,"nextHoleCheck",0);l(this,"foundSet",new Set);l(this,"nearHoleTicks",0);this.seed=t,this.loadout=e,this.rnd=qs(t);for(const o of s)this.foundSet.add(o);const i=Math.max(ve,e.startMass);this.player={x:0,y:0,px:0,py:0,vx:0,vy:0,mass:i,r:Mt(i),stage:xe(i),boosting:!1,dirX:1,dirY:0,invulnT:I(3),shieldT:0,magnetT:0,surgeT:0,secondWind:e.secondWind,sinceEat:999,combo:0},this.titans=vt.map(o=>({mass:o.mass,alive:!0,bodyId:-1,cooldownUntil:I(50)})),this.stats={ticks:0,peakMass:i,peakStage:this.player.stage,eaten:0,titansEaten:0,gold:0,novaSurvived:0,stormsSurvived:0,holesEaten:0,bestCombo:0,powers:0,moonsFed:0,continues:0},this.nextNova=I(70),this.nextStorm=I(45),this.nextGold=I(8),this.nextPower=I(20),this.nextHoleCheck=I(30),this.fillStart()}slow(){return Math.pow(this.player.r,-.24)}get view(){return Le(this.player.r)}step(t){if(this.events=[],this.over)return;const e=this.player;for(const s of this.bodies)s.px=s.x,s.py=s.y;for(const s of this.dust)s.px=s.x,s.py=s.y;e.px=e.x,e.py=e.y,this.movePlayer(t),this.updateTitans(),this.moveBodies(),this.moveDust(),this.updateNovas(),this.updateStorm(),this.playerContacts(),this.over||this.rivalContacts(),this.holeContacts(),this.updateMoons(),this.spawn(),this.cull(),e.invulnT>0&&e.invulnT--,e.shieldT>0&&e.shieldT--,e.magnetT>0&&e.magnetT--,e.surgeT>0&&e.surgeT--,e.sinceEat++,e.sinceEat>I(1.4)&&(e.combo=0),e.mass<je&&!this.over&&this.die("fizzle",""),this.tick++,this.stats.ticks=this.tick}movePlayer(t){const e=this.player,s=m=>m>1?1:m<-1?-1:m||0;let i=s(t.mx),o=s(t.my);const a=Math.hypot(i,o);a>1&&([i,o]=[i/a,o/a]),a>.05?(e.dirX=i/a,e.dirY=o/a):t.boost&&(i=e.dirX,o=e.dirY);const r=t.boost&&(e.surgeT>0||e.mass>je*1.25);r!==e.boosting&&this.events.push({t:"boost",on:r}),e.boosting=r;let c=C(e.r)*(r?1.8:1)*(e.surgeT>0?1.35:1);const h=i*c,d=o*c,p=Math.min(1,5*X);if(e.vx+=(h-e.vx)*p,e.vy+=(d-e.vy)*p,this.applyGravity(e,!0),e.x+=e.vx*X,e.y+=e.vy*X,r&&e.surgeT<=0){const m=e.mass*.016*X*this.loadout.boostCost;if(this.setPlayerMass(e.mass-m),this.tick%4===0){const f=Math.hypot(e.vx,e.vy)||1,b=m*4*.6;this.addDust(e.x-e.vx/f*e.r*1.3+(this.rnd()-.5)*e.r*.6,e.y-e.vy/f*e.r*1.3+(this.rnd()-.5)*e.r*.6,b,-e.vx*.1,-e.vy*.1)}}c=0}setPlayerMass(t){const e=this.player;e.mass=Math.max(.5,t),e.r=Mt(e.mass),e.mass>this.stats.peakMass&&(this.stats.peakMass=e.mass);const s=xe(e.mass);s>e.stage?(e.stage=s,e.invulnT=Math.max(e.invulnT,I(1.5)),s>this.stats.peakStage&&(this.stats.peakStage=s,this.events.push({t:"stage",stage:s}))):s<e.stage&&(e.stage=s)}grow(t){this.setPlayerMass(this.player.mass+t)}discover(t){this.foundSet.has(t)||(this.foundSet.add(t),this.found.push(t),this.events.push({t:"discover",code:t}))}clearSpace(){const t=this.player;for(const e of this.bodies){const s=e.x-t.x,i=e.y-t.y,o=Math.hypot(s,i)||1;if(o<t.r*8&&e.role!=="hole"&&e.role!=="moon"){const a=C(e.r)*2.5;e.vx+=s/o*a,e.vy+=i/o*a}}}die(t,e){const s=this.player;if(s.secondWind&&t!=="fizzle"){s.secondWind=!1,this.setPlayerMass(s.mass*.6),s.invulnT=I(3),this.clearSpace(),this.comeback(),this.events.push({t:"secondWind"});return}this.over=!0,this.cause=t,this.causeBy=e,this.events.push({t:"death",cause:t,by:e,x:s.x,y:s.y})}revive(){if(!this.over)return;const t=this.player;if(this.cause==="hole"){let e=null,s=1/0;for(const i of this.bodies){if(i.role!=="hole")continue;const o=Math.hypot(i.x-t.x,i.y-t.y);o<s&&(s=o,e=i)}if(e){const i=this.rnd()*Math.PI*2;t.x=e.x+Math.cos(i)*e.r*15,t.y=e.y+Math.sin(i)*e.r*15,t.px=t.x,t.py=t.y}}this.cause==="fizzle"&&this.setPlayerMass(Math.max(t.mass,ve*1.5)),t.vx=0,t.vy=0,t.invulnT=I(3),this.over=!1,this.cause=null,this.causeBy="",this.stats.continues++,this.clearSpace(),this.comeback(),this.events=[{t:"revive",x:t.x,y:t.y}]}newBody(t,e,s,i){const o={id:this.nextId++,role:t,x:e,y:s,px:e,py:s,vx:0,vy:0,mass:i,r:t==="hole"?Mt(i)*.5:Mt(i),seed:Math.floor(this.rnd()*1e9),alive:!0,born:this.tick,tag:-1,aiT:0,wx:e,wy:s,huntId:-1,boosting:!1,orbitA:0,feedAt:0};return this.bodies.push(o),o}setMass(t,e){t.mass=e,t.r=t.role==="hole"?Mt(e)*.5:Mt(e)}applyGravity(t,e){for(const s of this.bodies){if(s.role!=="hole"||!s.alive||s===t||e&&this.player.stage>=7&&this.player.mass>s.mass*et)continue;const i=s.x-t.x,o=s.y-t.y,a=i*i+o*o,r=s.r*13;if(a>r*r)continue;const c=Math.max(Math.sqrt(a),s.r*.8),h=30*C(s.r*1.4)*(s.r*s.r/(c*c))*(1-c/r);t.vx+=i/c*h*X,t.vy+=o/c*h*X,e&&c<s.r*4&&this.nearHoleTicks++}}moveBodies(){const t=this.player;for(const e of this.bodies)if(e.alive){switch(e.role){case"rival":case"titan":this.think(e);break;case"gold":{const s=e.x-t.x,i=e.y-t.y,o=Math.hypot(s,i)||1,a=C(t.r)*1.05,r=o<t.r*9?s/o*a:e.wx,c=o<t.r*9?i/o*a:e.wy;e.vx+=(r-e.vx)*.05,e.vy+=(c-e.vy)*.05;break}case"moon":continue}e.role!=="hole"&&e.role!=="meteor"&&this.applyGravity(e,!1),e.x+=e.vx*X,e.y+=e.vy*X}}think(t){const e=this.player,s=t.role==="titan",i=t.r*(s?16:11);let o=0,a=0;const r=(x,w,A,g)=>{const M=t.x-x,k=t.y-w,$=Math.hypot(M,k)||1,N=i*.7+A;if($<N){const U=g*(1-$/N);o+=M/$*U,a+=k/$*U}};e.mass>t.mass*et&&r(e.x,e.y,e.r,s?.8:1.4);for(const x of this.bodies)x===t||!x.alive||(x.role==="hole"?r(x.x,x.y,x.r*6,3):(x.role==="rival"||x.role==="titan")&&x.mass>t.mass*et&&r(x.x,x.y,x.r,1));for(const x of this.novas)x.wave<0&&r(x.x,x.y,x.r*4,1.2);if(--t.aiT<=0){t.aiT=I(.5)+Math.floor(this.rnd()*20),t.huntId=-1;let x=0;const w=e.x-t.x,A=e.y-t.y,g=Math.hypot(w,A);if(t.mass>e.mass*et&&e.invulnT<=0&&g<i*(s?1:.7)&&(t.huntId=0,x=1e9),t.huntId!==0)for(const k of this.bodies){if(k===t||!k.alive||k.role==="hole"||k.role==="nova"||k.role==="moon"||k.mass*et>=t.mass)continue;const $=Math.hypot(k.x-t.x,k.y-t.y);if($>i)continue;const N=k.mass/($+t.r);N>x&&(x=N,t.huntId=k.id)}if(t.huntId<0){const k=this.rnd()*Math.PI*2;t.wx=t.x+Math.cos(k)*i*.6,t.wy=t.y+Math.sin(k)*i*.6}}let c=t.wx-t.x,h=t.wy-t.y;if(t.boosting=!1,t.huntId===0){c=e.x-t.x,h=e.y-t.y;const x=Math.hypot(c,h);t.boosting=x<t.r*5+e.r&&this.tick%I(3)<I(1.2)}else if(t.huntId>0){const x=this.bodies.find(w=>w.id===t.huntId);x&&x.alive?(c=x.x-t.x,h=x.y-t.y):t.huntId=-1}else c*=.6,h*=.6;const d=Math.hypot(c,h)||1;let p=c/d+o*2,m=h/d+a*2;const f=Math.hypot(p,m)||1;p/=f,m/=f;const b=Math.min(1.35,Math.max(.45,Math.pow(e.r/t.r,.45))),z=C(e.r)*b*(s?.9:.85)*(t.boosting?1.5:1)*(t.huntId===0?1:.85),y=Math.min(1,3*X);t.vx+=(p*z-t.vx)*y,t.vy+=(m*z-t.vy)*y}moveDust(){const t=this.player,e=t.r*2.6*this.loadout.magnet*(t.magnetT>0?3:1)+(t.stage>=7?t.r*3:0),s=e*e,i=C(t.r)*2.2;for(const o of this.dust){if(!o.alive)continue;const a=t.x-o.x,r=t.y-o.y,c=a*a+r*r;if(c<s){const h=Math.sqrt(c)||1,d=i*(1.2-h/e);o.vx+=(a/h*d-o.vx)*.2,o.vy+=(r/h*d-o.vy)*.2}else o.vx*=.995,o.vy*=.995;for(const h of this.bodies){if(h.role!=="hole")continue;const d=h.x-o.x,p=h.y-o.y,m=Math.hypot(d,p);if(m<h.r*10&&m>0){const f=C(h.r)*6*(h.r/m);o.vx+=d/m*f*X,o.vy+=p/m*f*X}}o.x+=o.vx*X,o.y+=o.vy*X}}playerContacts(){const t=this.player;for(const e of this.dust){if(!e.alive)continue;const s=e.x-t.x,i=e.y-t.y;s*s+i*i<t.r*t.r*1.1&&(e.alive=!1,this.grow(e.m),this.tick%2===0&&this.events.push({t:"dust",x:e.x,y:e.y,seed:e.seed}))}for(const e of this.bodies){if(!e.alive||e.role==="moon")continue;const s=e.x-t.x,i=e.y-t.y,o=Math.hypot(s,i);if(e.role!=="hole"){if(e.role==="nova"){o<e.r+t.r&&this.pushApart(t,e,o,s,i,!0);continue}if(e.role==="gold"||e.role==="power"){if(o<t.r+e.r*1.4)if(e.alive=!1,e.role==="gold"){const a=1+t.stage;this.stats.gold+=a,this.events.push({t:"collect",kind:"gold",x:e.x,y:e.y,value:a})}else{const a=ze[e.tag];a==="magnet"&&(t.magnetT=I(9)),a==="shield"&&(t.shieldT=I(7)),a==="surge"&&(t.surgeT=I(6)),this.stats.powers++,this.events.push({t:"collect",kind:a,x:e.x,y:e.y,value:0})}continue}if(!(o>t.r+e.r))if(t.mass>e.mass*et)o<t.r&&this.playerEats(e);else if(e.mass>t.mass*et){if(e.role==="meteor"?this.meteorHit(e):o<e.r&&(t.invulnT>0||t.shieldT>0?(t.shieldT>0&&this.tick%10===0&&this.events.push({t:"shieldBlock",x:t.x,y:t.y}),this.pushApart(t,e,o,s,i,!1)):(this.killerRatio=e.mass/t.mass,this.die(e.role==="titan"?"titan":"rival",e.role==="titan"?vt[e.tag].name:""))),this.over)return}else e.role==="meteor"?this.meteorHit(e):this.pushApart(t,e,o,s,i,!0)}}}playerEats(t){const e=this.player;t.alive=!1;const s=ue(t.mass);if(e.combo=e.sinceEat<I(1.4)?e.combo+1:1,e.sinceEat=0,e.combo>this.stats.bestCombo&&(this.stats.bestCombo=e.combo),this.stats.eaten++,this.grow(t.mass*Ve*this.slow()),this.events.push({t:"eat",who:"player",role:t.role,x:t.x,y:t.y,mass:t.mass,r:t.r,cls:s,seed:t.seed,eaterId:0,combo:e.combo}),this.discover(`c${s}v${Ws(s,t.seed)}`),t.role==="titan"){const i=this.titans[t.tag];i.alive=!1,i.bodyId=-1,this.stats.titansEaten++,this.events.push({t:"titanEaten",idx:t.tag,x:t.x,y:t.y}),this.discover(`titan${t.tag}`)}}meteorHit(t){const e=this.player;if(t.alive=!1,this.shatter(t,6),e.invulnT>0||e.shieldT>0){this.events.push({t:"shieldBlock",x:e.x,y:e.y});return}const s=this.bodies.find(r=>r.role==="moon"&&r.alive);if(s){s.alive=!1,this.events.push({t:"moonLost",x:s.x,y:s.y});return}const i=e.mass*Math.min(.12,.07*(t.mass/e.mass))*this.loadout.shell;this.setPlayerMass(e.mass-i);const o=Math.hypot(e.x-t.x,e.y-t.y)||1,a=C(e.r)*.9;e.vx+=(e.x-t.x)/o*a+t.vx*.3,e.vy+=(e.y-t.y)/o*a+t.vy*.3,this.events.push({t:"hit",x:t.x,y:t.y,loss:i,by:"meteor"})}pushApart(t,e,s,i,o,a){const r=s>0?i/s:1,c=s>0?o/s:0,h=t.r+e.r-s,p=e.role==="nova"?0:t.mass/(t.mass+e.mass),m=1-p;t.x-=r*h*m,t.y-=c*h*m,e.x+=r*h*p,e.y+=c*h*p;const f=(e.vx-t.vx)*r+(e.vy-t.vy)*c;if(f<0){const b=-f*1.6;t.vx-=r*b*m,t.vy-=c*b*m,e.vx+=r*b*p,e.vy+=c*b*p;const z=-f/Math.max(1e-6,C(t.r));if(a&&z>.6&&(this.events.push({t:"bump",x:t.x+r*t.r,y:t.y+c*t.r,strength:z}),t===this.player&&this.player.invulnT<=0&&this.player.shieldT<=0)){const y=t.mass*.015*Math.min(2,z);this.setPlayerMass(t.mass-y),this.addDust(t.x+r*t.r,t.y+c*t.r,y*.7,-r*C(t.r)*.4,-c*C(t.r)*.4)}}}rivalContacts(){const t=this.bodies.filter(e=>e.alive&&(e.role==="rival"||e.role==="titan"));for(const e of t)if(e.alive){for(const s of this.dust){if(!s.alive)continue;const i=s.x-e.x,o=s.y-e.y;i*i+o*o<e.r*e.r&&(s.alive=!1,this.setMass(e,e.mass+s.m*.6))}for(const s of this.bodies){if(s===e||!s.alive||s.role==="hole"||s.role==="nova"||s.role==="gold"||s.role==="power")continue;const i=Math.hypot(s.x-e.x,s.y-e.y);i>e.r+s.r||(e.mass>s.mass*et&&i<e.r?(s.alive=!1,this.setMass(e,e.mass+s.mass*Ve),s.role==="moon"&&this.events.push({t:"moonLost",x:s.x,y:s.y}),this.events.push({t:"eat",who:"rival",role:s.role,x:s.x,y:s.y,mass:s.mass,r:s.r,cls:ue(s.mass),seed:s.seed,eaterId:e.id,combo:0}),s.role==="titan"&&(this.titans[s.tag].bodyId=-1,this.titans[s.tag].alive=!1)):s.role!=="moon"&&s.role!=="meteor"&&s.mass<e.mass*et&&e.mass<s.mass*et&&this.pushApart(e,s,i,s.x-e.x,s.y-e.y,!1))}e.role==="titan"&&(this.titans[e.tag].mass=e.mass)}}holeContacts(){const t=this.player;for(const e of this.bodies)if(!(e.role!=="hole"||!e.alive)){if(!this.over){const s=Math.hypot(t.x-e.x,t.y-e.y);t.stage>=7&&t.mass>e.mass*et?s<t.r&&(e.alive=!1,this.stats.holesEaten++,this.grow(e.mass*.9),this.events.push({t:"holeEaten",x:e.x,y:e.y})):s<e.r+t.r*.35&&(t.invulnT>0?this.pushApart(t,e,s,e.x-t.x,e.y-t.y,!1):this.die("hole",""))}if(e.alive){for(const s of this.bodies){if(s===e||!s.alive||s.role==="nova")continue;const i=Math.hypot(s.x-e.x,s.y-e.y);if(s.role==="hole"){i<e.r+s.r&&e.mass>=s.mass&&(s.alive=!1,this.setMass(e,e.mass+s.mass));continue}i<e.r+s.r*.3&&(s.alive=!1,this.setMass(e,e.mass+s.mass*.5),this.events.push({t:"eat",who:"hole",role:s.role,x:s.x,y:s.y,mass:s.mass,r:s.r,cls:ue(s.mass),seed:s.seed,eaterId:e.id,combo:0}),s.role==="titan"&&(this.titans[s.tag].bodyId=-1,this.titans[s.tag].alive=!1),s.role==="moon"&&this.events.push({t:"moonLost",x:s.x,y:s.y}))}for(const s of this.dust)s.alive&&Math.hypot(s.x-e.x,s.y-e.y)<e.r&&(s.alive=!1)}}this.nearHoleTicks>I(1.5)&&(this.nearHoleTicks=0,this.discover("hole"))}updateMoons(){const t=this.player;if(this.over)return;const e=Vs[t.stage];let s=this.bodies.filter(i=>i.role==="moon"&&i.alive);if(s.length<e&&this.tick%6===0)for(const i of this.bodies){if(s.length>=e)break;if(i.role!=="drift"||!i.alive||i.mass>t.mass*.09||i.mass<t.mass*.01)continue;const o=Math.hypot(i.x-t.x,i.y-t.y);o<t.r*4.5&&o>t.r*1.3&&(i.role="moon",i.orbitA=Math.atan2(i.y-t.y,i.x-t.x),i.feedAt=this.tick+I(18+this.rnd()*10),s.push(i),this.events.push({t:"capture",id:i.id}))}s=s.filter(i=>i.alive),s.forEach((i,o)=>{const a=t.r*(1.9+o%3*.45);i.orbitA+=(1.6-o%3*.3)*X;const r=t.x+Math.cos(i.orbitA)*a,c=t.y+Math.sin(i.orbitA)*a,h=Math.min(1,(this.tick-i.born)/I(1))*.15+.1;i.x+=(r-i.x)*h,i.y+=(c-i.y)*h,this.tick>=i.feedAt&&(i.alive=!1,this.stats.moonsFed++,this.grow(i.mass),this.events.push({t:"moonFed",x:i.x,y:i.y}))})}updateNovas(){const t=this.player,e=this.view;if(this.tick>=this.nextNova&&t.stage>=3&&this.novas.length===0){const s=this.rnd()*Math.PI*2,i=e*(.75+this.rnd()*.35),o=I(4.5),a={id:this.nextId++,x:t.x+Math.cos(s)*i,y:t.y+Math.sin(s)*i,r:t.r*1.3,warn:o,warnTotal:o,wave:-1,waveSpeed:C(t.r)*1.6,maxWave:e*3,hitPlayer:!1,done:!1};this.novas.push(a);const r=this.newBody("nova",a.x,a.y,t.mass*3);r.r=a.r,r.tag=a.id,this.events.push({t:"novaWarn",id:a.id,x:a.x,y:a.y});const c=Math.max(.55,1-this.tick/I(900));this.nextNova=this.tick+I((60+this.rnd()*35)*c)}for(const s of this.novas){if(s.warn>0){if(s.warn--,s.warn===0){s.wave=s.r;for(const a of this.bodies)a.role==="nova"&&a.tag===s.id&&(a.alive=!1);this.events.push({t:"novaBlast",id:s.id,x:s.x,y:s.y});for(let a=0;a<70;a++){const r=this.rnd()*Math.PI*2,c=s.r*(1+this.rnd()*5),h=s.waveSpeed*(.05+this.rnd()*.25);this.addDust(s.x+Math.cos(r)*c,s.y+Math.sin(r)*c,t.mass*(.004+this.rnd()*.006),Math.cos(r)*h,Math.sin(r)*h)}}continue}const i=s.wave;s.wave+=s.waveSpeed*X;const o=Math.hypot(t.x-s.x,t.y-s.y);if(!s.hitPlayer&&o>=i&&o<s.wave+t.r)if(s.hitPlayer=!0,this.shadowed(s.x,s.y,t.x,t.y,t.r)||t.invulnT>0||t.shieldT>0)this.stats.novaSurvived++,this.events.push({t:"novaSafe"}),this.discover("nova");else{const a=t.mass*.28*this.loadout.shell;this.setPlayerMass(t.mass-a);const r=C(t.r)*2;t.vx+=(t.x-s.x)/(o||1)*r,t.vy+=(t.y-s.y)/(o||1)*r,this.stats.novaSurvived++,this.events.push({t:"hit",x:t.x,y:t.y,loss:a,by:"nova"}),this.comeback(),this.discover("nova")}for(const a of this.bodies){if(!a.alive||a.role==="hole"||a.role==="moon"||a.role==="nova")continue;const r=Math.hypot(a.x-s.x,a.y-s.y);if(r>=i&&r<s.wave)if(a.mass<t.mass*.15&&a.role!=="titan"&&a.role!=="gold"&&a.role!=="power")a.alive=!1,this.shatter(a,4);else{const c=C(a.r)*1.5;a.vx+=(a.x-s.x)/(r||1)*c,a.vy+=(a.y-s.y)/(r||1)*c,(a.role==="rival"||a.role==="titan")&&this.setMass(a,a.mass*.8)}}s.wave>s.maxWave&&(s.done=!0)}this.novas=this.novas.filter(s=>!s.done)}shadowed(t,e,s,i,o){const a=s-t,r=i-e,c=a*a+r*r||1;for(const h of this.bodies){if(!h.alive||h.role==="nova"||h.role==="meteor"||h.role==="gold"||h.role==="power"||h.r<o*.7&&h.role!=="hole")continue;const d=((h.x-t)*a+(h.y-e)*r)/c;if(d<=.05||d>=1)continue;const p=t+a*d,m=e+r*d;if(Math.hypot(h.x-p,h.y-m)<h.r*1.05)return!0}return!1}updateStorm(){const t=this.player,e=this.view;if(!this.storm&&this.tick>=this.nextStorm&&t.stage>=2){const i=this.rnd()*Math.PI*2;this.storm={dx:Math.cos(i),dy:Math.sin(i),warn:I(3),active:I(7),acc:0},this.events.push({t:"stormWarn",dx:this.storm.dx,dy:this.storm.dy})}const s=this.storm;if(s){if(s.warn>0){--s.warn===0&&this.events.push({t:"stormStart"});return}for(s.acc+=4.5*X*(1+Math.min(1,this.tick/I(600)));s.acc>=1;){s.acc--;const i=(this.rnd()-.5)*e*3.4,o=t.x-s.dx*e*2.6-s.dy*i,a=t.y-s.dy*e*2.6+s.dx*i,r=t.mass*Math.pow(10,-.9+this.rnd()*1.15),c=this.newBody("meteor",o,a,r),h=C(t.r)*(2.4+this.rnd()*1.2),d=(this.rnd()-.5)*.25;c.vx=(s.dx-s.dy*d)*h,c.vy=(s.dy+s.dx*d)*h}if(--s.active<=0){this.storm=null,this.stats.stormsSurvived++,this.events.push({t:"stormEnd"}),this.discover("storm");const i=Math.max(.6,1-this.tick/I(900));this.nextStorm=this.tick+I((40+this.rnd()*30)*i)}}}updateTitans(){const t=this.player;for(let e=0;e<this.titans.length;e++){const s=this.titans[e];s.alive&&s.bodyId<0&&(s.mass*=1+_s*X)}if(this.tick%30===0&&!this.titans.some(e=>e.bodyId>=0))for(let e=0;e<this.titans.length;e++){const s=this.titans[e];if(!s.alive||this.tick<s.cooldownUntil||s.mass<t.mass*.45||s.mass>t.mass*(t.stage<3?1.35:2.2))continue;const i=this.ringPoint(1),o=this.newBody("titan",i.x,i.y,s.mass);o.tag=e,o.seed=1e3+e*7,s.bodyId=o.id,this.events.push({t:"titan",idx:e});break}}ringPoint(t=1){const e=this.view,s=this.rnd()*Math.PI*2,i=e*(2.4+this.rnd()*1.1)*t;return{x:this.player.x+Math.cos(s)*i,y:this.player.y+Math.sin(s)*i}}addDust(t,e,s,i=0,o=0){this.dust.length>900||this.dust.push({x:t,y:e,px:t,py:e,vx:i,vy:o,m:s,seed:Math.floor(this.rnd()*1e6),alive:!0})}dustCluster(t,e){const s=this.player,i=this.view,o=10+Math.floor(this.rnd()*16),a=this.rnd()*Math.PI*2,r=i*(.25+this.rnd()*.5);for(let c=0;c<o;c++){const h=c/o-.5,d=a+h*1.2,p=t+Math.cos(d)*r*h+(this.rnd()-.5)*i*.06,m=e+Math.sin(d)*r*h+(this.rnd()-.5)*i*.06;this.addDust(p,m,s.mass*(.0016+this.rnd()*.0024)*this.slow())}}comeback(){const t=this.player,e=this.view;for(let s=0;s<2;s++){const i=this.rnd()*Math.PI*2,o=e*(.45+this.rnd()*.35);this.dustCluster(t.x+Math.cos(i)*o,t.y+Math.sin(i)*o)}}spawnDrift(t,e,s){const i=this.player,o=this.rnd(),a=s?-.2:.45,r=i.mass*Math.pow(10,-1.45+(a+1.45)*Math.pow(o,1.9)),c=this.newBody("drift",t,e,r),h=this.rnd()*Math.PI*2,d=C(c.r)*(.03+this.rnd()*.12);c.vx=Math.cos(h)*d,c.vy=Math.sin(h)*d}spawnRival(t,e,s){const i=this.player,o=this.rnd(),a=s?i.mass*(.3+o*.55):i.mass*Math.pow(10,-.7+o*.95),r=this.newBody("rival",t,e,a);r.aiT=Math.floor(this.rnd()*30)}fillStart(){const t=this.view,e=this.player;for(let s=0;s<5;s++){const i=s/5*Math.PI*2+this.rnd()*.8,o=t*(.35+this.rnd()*.4);this.dustCluster(Math.cos(i)*o,Math.sin(i)*o)}for(let s=0;s<7;s++){const i=this.rnd()*Math.PI*2,o=t*(.3+this.rnd()*.6),a=this.newBody("drift",Math.cos(i)*o,Math.sin(i)*o,e.mass*(.12+this.rnd()*.3)),r=this.rnd()*Math.PI*2;a.vx=Math.cos(r)*C(a.r)*.05,a.vy=Math.sin(r)*C(a.r)*.05}for(let s=0;s<34;s++){const i=this.rnd()*Math.PI*2,o=t*(.25+this.rnd()*3.2);this.dustCluster(Math.cos(i)*o,Math.sin(i)*o)}for(let s=0;s<85;s++){const i=this.rnd()*Math.PI*2,o=t*(.45+this.rnd()*3);this.spawnDrift(Math.cos(i)*o,Math.sin(i)*o,!0)}for(let s=0;s<3;s++){const i=this.ringPoint(.8);this.spawnRival(i.x,i.y,!0)}}spawn(){if(this.tick%10!==0)return;const t=this.player,e=this.tick<I(25);let s=0,i=0,o=0,a=0,r=0;for(const d of this.bodies)d.alive&&(d.role==="drift"?s++:d.role==="rival"?i++:d.role==="hole"?o++:d.role==="gold"?a++:d.role==="power"&&r++);for(let d=s;d<100&&d<s+4;d++){const p=this.ringPoint();this.spawnDrift(p.x,p.y,e)}if(this.dust.length<560){const d=this.ringPoint();this.dustCluster(d.x,d.y)}const h=t.stage===0?3:t.stage===1?5:7;if(i<h&&this.rnd()<.3){const d=this.ringPoint();this.spawnRival(d.x,d.y,e)}if(this.tick>=this.nextHoleCheck&&t.stage>=2){this.nextHoleCheck=this.tick+I(6);const d=t.stage>=4?2:1;if(o<d&&this.rnd()<.18){const p=this.ringPoint(1.05),m=this.newBody("hole",p.x,p.y,t.mass*(2+this.rnd()*3)),f=this.rnd()*Math.PI*2,b=C(t.r)*.12;m.vx=Math.cos(f)*b,m.vy=Math.sin(f)*b}}if(this.tick>=this.nextGold&&a<2){this.nextGold=this.tick+I((14+this.rnd()*10)/this.loadout.luck);const d=this.ringPoint(.75),p=this.newBody("gold",d.x,d.y,t.mass*.05);p.r=t.r*.45;const m=this.rnd()*Math.PI*2;p.wx=Math.cos(m)*C(t.r)*.3,p.wy=Math.sin(m)*C(t.r)*.3}if(this.tick>=this.nextPower&&r<1){this.nextPower=this.tick+I(22+this.rnd()*14);const d=this.view,p=this.rnd()*Math.PI*2,m=d*(1.3+this.rnd()*.6),f=this.newBody("power",t.x+Math.cos(p)*m,t.y+Math.sin(p)*m,t.mass*.05);f.r=t.r*.55,f.tag=Math.floor(this.rnd()*ze.length)}}shatter(t,e){for(let s=0;s<e;s++){const i=this.rnd()*Math.PI*2,o=C(t.r)*(.3+this.rnd()*.6);this.addDust(t.x+Math.cos(i)*t.r*.5,t.y+Math.sin(i)*t.r*.5,t.mass*.6/e,Math.cos(i)*o+t.vx*.2,Math.sin(i)*o+t.vy*.2)}}cull(){const t=this.player,e=this.view,s=e*4.4,i=s*s;for(const a of this.bodies){if(!a.alive)continue;const r=a.x-t.x,c=a.y-t.y,h=r*r+c*c,d=a.role==="hole"||a.role==="titan"?i*1.6:a.role==="meteor"?i*.6:i;if(h>d&&(a.alive=!1,a.role==="titan")){const p=this.titans[a.tag];p.bodyId=-1,p.mass=a.mass,p.cooldownUntil=this.tick+I(40)}a.role==="rival"&&(a.mass<t.mass*.004||a.mass>t.mass*60)&&h>e*e*4&&(a.alive=!1),a.role==="drift"&&a.mass<t.mass*.002&&h>e*e*4&&(a.alive=!1),a.role==="gold"&&this.tick-a.born>I(30)&&h>e*e*3&&(a.alive=!1),a.role==="power"&&this.tick-a.born>I(35)&&(a.alive=!1)}this.bodies=this.bodies.filter(a=>a.alive);let o=0;for(const a of this.dust){if(!a.alive)continue;const r=a.x-t.x,c=a.y-t.y;r*r+c*c>i||a.m<t.mass*1e-5||(this.dust[o++]=a)}this.dust.length=o}leaderboard(){return[...this.titans.map((s,i)=>({name:vt[i].name,mass:s.mass,you:!1,idx:i,alive:s.alive})).filter(s=>s.alive).map(({name:s,mass:i,you:o,idx:a})=>({name:s,mass:i,you:o,idx:a})),{name:"You",mass:this.player.mass,you:!0,idx:-1}].sort((s,i)=>i.mass-s.mass)}hash(){const t=new Float64Array(1),e=new Uint32Array(t.buffer);let s=2166136261;const i=a=>{t[0]=a;for(const r of[e[0],e[1]])for(let c=0;c<32;c+=8)s=Math.imul(s^r>>>c&255,16777619)},o=this.player;for(const a of[this.tick,o.x,o.y,o.vx,o.vy,o.mass,this.bodies.length,this.dust.length])i(a);for(const a of this.bodies)for(const r of[a.id,a.x,a.y,a.mass])i(r);for(const a of this.dust)for(const r of[a.x,a.y,a.m])i(r);return(s>>>0).toString(16)}}const Ce=[{id:"start",name:"Bright Start",icon:"✦",desc:n=>`Begin ${n*15}% bigger`,costs:[30,70,140,250,400]},{id:"magnet",name:"Gravity Well",icon:"◎",desc:n=>`Pull stardust from ${n*15}% farther`,costs:[30,70,140,250,400]},{id:"thrust",name:"Efficient Thrust",icon:"➤",desc:n=>`Boost sheds ${n*10}% less`,costs:[30,70,140,250,400]},{id:"shell",name:"Hardened Core",icon:"⬢",desc:n=>`Lose ${n*8}% less to meteors and blasts`,costs:[40,90,170,280,450]},{id:"luck",name:"Comet Luck",icon:"☄",desc:n=>`${n*20}% more golden comets`,costs:[40,90,170,280,450]},{id:"wind",name:"Second Wind",icon:"❤",desc:()=>"Survive one fatal hit per run",costs:[600]}],Yt=(n,t)=>n.upgrades[t]??0;function De(n){const t=e=>Yt(n,e);return{...Pe,startMass:Pe.startMass*(1+t("start")*.15),magnet:1+t("magnet")*.15,boostCost:1-t("thrust")*.1,shell:1-t("shell")*.08,luck:1+t("luck")*.2,secondWind:t("wind")>0}}function Ys(n,t){const e=Ce.find(o=>o.id===t);if(!e)return!1;const s=Yt(n,t);if(s>=e.costs.length)return!1;const i=e.costs[s];return n.stardust<i?!1:(n.stardust-=i,n.upgrades[t]=s+1,!0)}const Xs=[0,3,6,10,16,24,34,46,60],Ks=[0,10,20,35,55,80,110,150,220],At=(n=new Date)=>`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;function Qs(n,t,e,s=At(),i="",o=Date.now()){const a=t.stats,r=[],c=(f,b)=>b>0&&r.push({label:f,value:Math.round(b)});c(`Reached ${R[a.peakStage].name}`,Xs[a.peakStage]),c("Bodies swallowed",Math.floor(a.eaten/5)),c("Golden comets",a.gold),c("Titans devoured",a.titansEaten*20),c("Supernovae survived",a.novaSurvived*3),c("Meteor storms",a.stormsSurvived*2);const h=[];for(let f=1;f<=a.peakStage;f++)n.milestones&1<<f||(n.milestones|=1<<f,h.push(f),c(`First ${R[f].name}!`,Ks[f]));const d=[];for(const f of n.missions){if(f.done)continue;const b=ke.find(y=>y.id===f.id);if(!b)continue;const z=b.measure(t);b.total?f.progress+=z:f.progress=Math.max(f.progress,z),f.progress>=f.target&&(f.done=!0,d.push(f),c(`Mission: ${fs(f)}`,f.reward))}let p=r.reduce((f,b)=>f+b.value,0);const m=n.dailyUsed!==s&&p>0;m&&(n.dailyUsed=s,r.push({label:"Daily spark ×2",value:p}),p*=2),n.stardust+=p,n.best.mass=Math.max(n.best.mass??0,a.peakMass),n.best.stage=Math.max(n.best.stage??0,a.peakStage),n.best.time=Math.max(n.best.time??0,Math.floor(a.ticks/60)),n.best.combo=Math.max(n.best.combo??0,a.bestCombo),n.best.eaten=Math.max(n.best.eaten??0,a.eaten),n.best.titans=Math.max(n.best.titans??0,a.titansEaten),n.stats.runs++,n.stats.eaten+=a.eaten,n.stats.seconds+=Math.floor(a.ticks/60),n.stats.titans+=a.titansEaten;for(const f of e)n.codex.includes(f)||n.codex.push(f);return n.history.unshift({at:o,seconds:Math.floor(a.ticks/60),eaten:a.eaten,mass:a.peakMass,stage:a.peakStage,titans:a.titansEaten,combo:a.bestCombo,cause:i,continues:a.continues,dust:p}),n.history.length=Math.min(n.history.length,$e),{lines:r,total:p,daily:m,milestones:h,missions:d}}const Js=3,Zs=(n,t)=>Math.round((20+12*n)*Math.pow(2,t)),ke=[{id:"eat",text:"Swallow {n} bodies in one run",targets:[15,30,50,80,120],reward:15,measure:n=>n.stats.eaten},{id:"eatT",total:!0,text:"Swallow {n} bodies in total",targets:[100,250,500,900,1500],reward:25,measure:n=>n.stats.eaten},{id:"stage",text:"Become a {stage}",targets:[2,3,4,5,6,7,8],reward:30,measure:n=>n.stats.peakStage},{id:"gold",total:!0,text:"Catch {n} golden comet stardust",targets:[5,12,25,45,80],reward:20,measure:n=>n.stats.gold},{id:"combo",text:"Make a ×{n} swallow combo",targets:[4,6,8,11,15],reward:20,measure:n=>n.stats.bestCombo},{id:"rivals",text:"Swallow {n} rivals in one run",targets:[2,4,7,10,15],reward:20,measure:n=>n.rivals},{id:"time",text:"Survive {n} minutes in one run",targets:[2,4,6,9,12],reward:25,measure:n=>Math.floor(n.stats.ticks/3600)},{id:"powers",total:!0,text:"Grab {n} power orbs",targets:[3,8,15,25,40],reward:15,measure:n=>n.stats.powers},{id:"storm",total:!0,text:"Live through {n} meteor storms",targets:[1,3,6,10,15],reward:20,measure:n=>n.stats.stormsSurvived,minStage:2},{id:"nova",total:!0,text:"Survive {n} supernovae",targets:[1,3,6,10,15],reward:25,measure:n=>n.stats.novaSurvived,minStage:3},{id:"moons",total:!0,text:"Feed on {n} captured moons",targets:[2,6,12,20,35],reward:25,measure:n=>n.stats.moonsFed,minStage:4},{id:"titan",total:!0,text:"Devour {n} Titans",targets:[1,2,4,6,9],reward:40,measure:n=>n.stats.titansEaten,minStage:2}];function fs(n){const t=ke.find(e=>e.id===n.id);return t?t.text.replace("{n}",String(n.target)).replace("{stage}",R[Math.min(R.length-1,n.target)]?.name??""):""}function we(n,t=Math.random){const e=n.missions.filter(a=>a.done).length;n.missionsDone+=e,n.missions=n.missions.filter(a=>!a.done);const s=Math.min(4,Math.floor(n.missionsDone/6)),i=n.best.stage??0;let o=0;for(;n.missions.length<3&&o++<50;){const a=ke.filter(h=>!n.missions.some(d=>d.id===h.id)&&(h.minStage??0)<=Math.max(1,i+1));if(!a.length)break;const r=a[Math.floor(t()*a.length)];let c=r.targets[Math.min(r.targets.length-1,s)];r.id==="stage"&&(c=Math.min(R.length-1,Math.max(2,i+(i>=2?1:0)))),n.missions.push({id:r.id,target:c,reward:Math.round(r.reward*(1+s*.5)),progress:0,done:!1})}}const ti={"Rocky Pebble":"Planets grow from pebbles like this, sticking together over millions of years.","Ice Pebble":"Beyond the frost line, water freezes into ice pebbles that build giant planets.","Ice Comet":"Comets are dirty snowballs; their tails always point away from the Sun.","Emerald Comet":"Some comets glow green from diatomic carbon breaking apart in sunlight.","Ember Comet":"Sungrazing comets can be vaporised as they skim past their star.","Grey Moon":"Our Moon drifts about 3.8 cm farther from Earth every year.","Frost Moon":"Icy moons like Europa may hide liquid oceans under their crust.","Lava Moon":"Io is the most volcanic body known, squeezed hot by Jupiter's tides.","Rust Moon":"Iron oxide — rust — is what makes Mars and many rocks look red.","Ocean World":"Earth is the only world known to have liquid water seas on its surface.","Desert World":"Dust storms on Mars can wrap the entire planet for weeks.","Jungle World":"Life changed Earth's air: plants filled it with oxygen.","Ice World":"Some exoplanets orbit so far out their skies are always night.","Lava World":"Planet 55 Cancri e may be covered in oceans of molten rock.","Toxic World":"Venus has clouds of sulphuric acid and surface heat that melts lead.","Banded Giant":"Jupiter's stripes are bands of wind racing in opposite directions.","Ringed Giant":"Saturn's rings are mostly ice and are less than a kilometre thick.","Storm Giant":"Jupiter's Great Red Spot is a storm bigger than Earth.","Ice Giant":"Uranus spins on its side, probably knocked over by an ancient impact.","Red Dwarf":"Red dwarfs are the most common stars and can shine for trillions of years.","Yellow Star":"The Sun turns about 4 million tonnes of matter into energy every second.","White Star":"Sirius, the brightest star in our night sky, is a hot white star.","Blue Star":"Blue stars burn so hot and fast they live only a few million years.","Red Supergiant":"Betelgeuse is so large it would swallow the orbit of Mars.","Blue Supergiant":"Rigel shines tens of thousands of times brighter than the Sun.",Pulsar:"Pulsars are city-sized dead stars that can spin hundreds of times a second.","Star Cluster":"Open clusters are stellar siblings born from the same cloud.","Globular Cluster":"Globular clusters pack up to a million ancient stars into a ball.","Spiral Galaxy":"The Milky Way is a barred spiral about 100,000 light-years across.","Elliptical Galaxy":"Giant ellipticals grow by merging with other galaxies."},Tt=[...Bt.flatMap((n,t)=>n.map((e,s)=>({code:`c${t}v${s}`,name:e,group:R[t].name,fact:ti[e]??"",cls:t,variant:s}))),{code:"hole",name:"Black Hole",group:"Hazards",fact:"Not even light can escape from inside a black hole's event horizon.",cls:7,variant:0,special:"hole"},{code:"nova",name:"Supernova",group:"Hazards",fact:"A supernova can briefly outshine its entire galaxy.",cls:5,variant:1,special:"nova"},{code:"storm",name:"Meteor Storm",group:"Hazards",fact:"Earth sweeps up around 100 tonnes of space dust every day.",cls:2,variant:2,special:"storm"},...vt.map((n,t)=>({code:`titan${t}`,name:n.name,group:"Titans",fact:"A Titan of the galaxy. Devour it to prove you are bigger.",cls:Math.min(8,ei(n.mass)),variant:t,special:"titan"}))];function ei(n){let t=0;for(let e=1;e<R.length;e++)n>=R[e].min&&(t=e);return t}function si(n,t){for(const e of t)e.t==="eat"&&e.who==="player"&&(e.role==="rival"||e.role==="titan")&&n.rivals++,e.t==="capture"&&n.captured++}class Be{constructor(){l(this,"startsOnPlayable",!1);l(this,"playing",!1);l(this,"muteListeners",[]);l(this,"storageListeners",[]);l(this,"hooks",{pause(){},resume(){}})}setAdHooks(t){this.hooks=t}loadingStart(){}loadingStop(){}gameplayStart(){this.playing||(this.playing=!0,this.sendGameplayStart())}gameplayStop(){this.playing&&(this.playing=!1,this.sendGameplayStop())}sendGameplayStart(){}sendGameplayStop(){}async midgameAd(){}async rewardedAd(){return!1}isMuted(){return!1}onMuteChange(t){this.muteListeners.push(t)}emitMute(t){for(const e of this.muteListeners)e(t)}onStorageSwitch(t){this.storageListeners.push(t)}emitStorageSwitch(){for(const t of this.storageListeners)t()}inviteLink(t){const e=globalThis.location;return e?`${e.origin}${e.pathname}?${new URLSearchParams(t).toString()}`:""}inviteParams(){const t=new URLSearchParams(globalThis.location?.search??""),e={};for(const s of["cs","cm","cst"]){const i=t.get(s);i!==null&&(e[s]=i)}return Object.keys(e).length?e:null}locale(){return globalThis.navigator?.language??"en"}}function Fe(n=""){const t=new Map;return{get(e){try{const s=globalThis.localStorage?.getItem(n+e);if(s!=null)return s}catch{}return t.get(e)??null},set(e,s){t.set(e,s);try{globalThis.localStorage?.setItem(n+e,s)}catch{}},remove(e){t.delete(e);try{globalThis.localStorage?.removeItem(n+e)}catch{}}}}function tt(){return globalThis.CrazyGames?.SDK}const Ye=n=>n.environment==="disabled",ii=3e3;class ai extends Be{constructor(e=ii){super();l(this,"name","crazygames");l(this,"startsOnPlayable",!0);l(this,"loading",!1);l(this,"ready",!1);l(this,"fallback",Fe());l(this,"storage",{get:e=>this.ready?tt().data.getItem(e):this.fallback.get(e),set:(e,s)=>this.ready?tt().data.setItem(e,s):this.fallback.set(e,s),remove:e=>this.ready?tt().data.removeItem?.(e):this.fallback.remove?.(e)});this.initTimeoutMs=e}async init(){const e=tt();if(!e||Ye(e))return;let s;const i=new Promise(a=>s=setTimeout(()=>a(!1),this.initTimeoutMs)),o=Promise.resolve().then(()=>e.init()).then(()=>!0);try{if(!await Promise.race([o,i])){o.then(()=>this.goLive(e,!0),()=>{});return}this.goLive(e,!1)}catch{this.ready=!1}finally{clearTimeout(s)}}goLive(e,s){if(!Ye(e)){try{e.game.addSettingsChangeListener(i=>this.emitMute(!!i.muteAudio)),this.ready=!0}catch{this.ready=!1;return}Gs(this.storage,this.fallback),s&&(this.emitStorageSwitch(),this.emitMute(!!e.game.settings.muteAudio),this.playing&&e.game.gameplayStart())}}loadingStart(){this.ready&&(this.loading=!0,tt().game.loadingStart?.())}loadingStop(){!this.ready||!this.loading||(this.loading=!1,tt().game.loadingStop?.(),this.playing&&tt().game.gameplayStart())}sendGameplayStart(){this.ready&&!this.loading&&tt().game.gameplayStart()}sendGameplayStop(){this.ready&&!this.loading&&tt().game.gameplayStop()}isMuted(){return this.ready?!!tt().game.settings.muteAudio:!1}locale(){return this.ready&&tt().user?.systemInfo?.locale||super.locale()}midgameAd(){return this.requestAd("midgame").then(()=>{})}rewardedAd(){return this.requestAd("rewarded")}requestAd(e){return this.ready?new Promise(s=>{let i=!1;tt().ad.requestAd(e,{adStarted:()=>{i=!0,this.hooks.pause()},adFinished:()=>{i&&this.hooks.resume(),s(!0)},adError:()=>{i&&this.hooks.resume(),s(!1)}})}):Promise.resolve(!1)}inviteLink(e){try{const s=tt();if(this.ready&&s?.game.inviteLink)return s.game.inviteLink(e)}catch{}return super.inviteLink(e)}inviteParams(){try{const e=tt();if(this.ready&&e){if(e.game.inviteParams&&Object.keys(e.game.inviteParams).length)return e.game.inviteParams;if(e.game.getInviteParam){const s={};for(const i of["cs","cm","cst"]){const o=e.game.getInviteParam(i);o&&(s[i]=o)}if(Object.keys(s).length)return s}}}catch{}return super.inviteParams()}}class oi extends Be{constructor(){super(...arguments);l(this,"name","local");l(this,"storage",Fe())}async init(){}isMuted(){return new URLSearchParams(globalThis.location?.search??"").get("muteAudio")==="true"}}function Ct(){return globalThis.PokiSDK}class ni extends Be{constructor(){super(...arguments);l(this,"name","poki");l(this,"storage",Fe());l(this,"ready",!1)}async init(){const e=Ct();if(e){try{await e.init()}catch{}this.ready=!0}}loadingStop(){this.ready&&Ct().gameLoadingFinished()}sendGameplayStart(){this.ready&&Ct().gameplayStart()}sendGameplayStop(){this.ready&&Ct().gameplayStop()}async midgameAd(){if(!this.ready)return;let e=!1;await Ct().commercialBreak(()=>{e=!0,this.hooks.pause()}),e&&this.hooks.resume()}async rewardedAd(){if(!this.ready)return!1;let e=!1;const s=await Ct().rewardedBreak(()=>{e=!0,this.hooks.pause()});return e&&this.hooks.resume(),s}}function ri(n="local"){switch(n){case"crazygames":return new ai;case"poki":return new ni;default:return new oi}}const S=n=>{const t=parseInt(n.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]},oe=[{base:S("#0b0a1f"),a:S("#1f6f8b"),b:S("#6b2a7a"),star:S("#cfe8ff")},{base:S("#0a0d22"),a:S("#2a7fa6"),b:S("#3b3a8f"),star:S("#d8f2ff")},{base:S("#0d0b1d"),a:S("#6d5a9e"),b:S("#2d6e7e"),star:S("#efe6ff")},{base:S("#0a0f1e"),a:S("#1d8a7a"),b:S("#8a3b78"),star:S("#e6fff6")},{base:S("#120a1a"),a:S("#a0522d"),b:S("#5a2a86"),star:S("#fff1dc")},{base:S("#150a14"),a:S("#c0485a"),b:S("#e09a3a"),star:S("#fff3e0")},{base:S("#08081c"),a:S("#3256c8"),b:S("#b03a8c"),star:S("#e3ecff")},{base:S("#06060f"),a:S("#5a2fa0"),b:S("#1b5c8a"),star:S("#d9d2ff")},{base:S("#070612"),a:S("#2fa0a0"),b:S("#c83c9a"),star:S("#ffffff")}],te=[{id:"ember",name:"Ember Gold",cost:0,aura:S("#ffc35a"),core:S("#fff1c9")},{id:"aurora",name:"Aurora",cost:120,aura:S("#4dffc3"),core:S("#d8fff1")},{id:"rose",name:"Rose Nebula",cost:160,aura:S("#ff6fb5"),core:S("#ffe0f0")},{id:"frost",name:"Frostfire",cost:200,aura:S("#6fd6ff"),core:S("#e6f8ff")},{id:"violet",name:"Violet Flame",cost:260,aura:S("#b07bff"),core:S("#efe3ff")},{id:"solar",name:"Solar White",cost:320,aura:S("#fff6e8"),core:S("#ffffff")},{id:"verdant",name:"Verdant Spark",cost:380,aura:S("#a6ff4d"),core:S("#f1ffd9")},{id:"prism",name:"Prism",cost:600,aura:S("#ffffff"),core:S("#ffffff"),prism:!0}];S("#ff4a3d");S("#ffb340");const li=S("#c46bff"),ne=S("#ffd34d"),re=[S("#4dd2ff"),S("#7dffb0"),S("#ff9a4d")],le=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],ee=`
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
`,Xe=`
precision highp float;
attribute vec3 position;
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,ci=`
precision highp float;
varying vec2 vUv;
uniform vec2 uHalf;      // half extents of the view in "shorter side = 1" units
uniform vec2 uOff[3];    // camera offset per octave layer (already divided by that layer's scale)
uniform float uFade;     // fract(log2(zoom))
uniform float uN;        // floor(log2(zoom)): seeds follow the absolute octave so layers never change when they shift
uniform float uTime;
uniform float uQuality;
uniform vec3 uBase, uA, uB;
${ee}
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
`,hi=`
precision highp float;
varying vec2 vUv;
uniform sampler2D uNebula;
uniform sampler2D uMilky;   // Phase 2: real Milky Way photo (Solar System Scope, CC BY 4.0)
uniform float uMwOn;
uniform vec2 uMwOff;
uniform vec2 uHalf;
uniform vec2 uRes;
uniform vec2 uOff[9];    // 3 parallax layers × 3 octaves
uniform float uFade;
uniform float uN;
uniform float uTime;
uniform vec3 uStar;
uniform float uMotes;
uniform float uLayers;
${ee}
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
  if (uMwOn > 0.0) {
    // The photo is a far backdrop: it drifts with the camera at its own slow pace and never zooms, so the
    // procedural nebula fades to a soft stage tint over it and the procedural stars still give the zoom depth.
    vec2 mv = (vUv * 2.0 - 1.0) * uHalf;
    vec3 mw = texture2D(uMilky, uMwOff + vec2(mv.x * 0.11, mv.y * 0.22)).rgb;
    col = mix(col, col * 0.55 + mw * 1.45, uMwOn);
  }
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
`;class di{constructor(){l(this,"cam",new ns(-1,1,1,-1,0,1));l(this,"nebScene",new ge);l(this,"starScene",new ge);l(this,"neb");l(this,"stars");l(this,"rt");l(this,"scale",.5);l(this,"milky",null);l(this,"milkyWant","");l(this,"mwFade",0);l(this,"lastCam",null);const t=new Rt(2,2);this.neb=new dt({vertexShader:Xe,fragmentShader:ci,depthTest:!1,depthWrite:!1,uniforms:{uHalf:{value:new ct(1,1)},uOff:{value:[new ct,new ct,new ct]},uFade:{value:0},uN:{value:0},uTime:{value:0},uQuality:{value:1},uBase:{value:new It},uA:{value:new It},uB:{value:new It}}}),this.rt=new Ee(4,4,{type:hs,magFilter:Ae,minFilter:Ae,depthBuffer:!1,samples:0}),this.stars=new dt({vertexShader:Xe,fragmentShader:hi,depthTest:!1,depthWrite:!1,uniforms:{uNebula:{value:this.rt.texture},uMilky:{value:null},uMwOn:{value:0},uMwOff:{value:new ct(.37,.5)},uHalf:{value:new ct(1,1)},uRes:{value:new ct(1,1)},uOff:{value:Array.from({length:9},()=>new ct)},uFade:{value:0},uN:{value:0},uTime:{value:0},uStar:{value:new It(1,1,1)},uMotes:{value:1},uLayers:{value:3}}}),this.nebScene.add(new xt(t,this.neb)),this.starScene.add(new xt(t,this.stars))}setMilky(t){const e=t?"milkyway_4k":"milkyway_2k";this.milkyWant!==e&&(this.milkyWant=e,new rs().load(`./tex/${e}.webp`,s=>{if(this.milkyWant!==e)return s.dispose();s.colorSpace=ls,s.wrapS=cs,s.wrapT=Ts,this.milky?.dispose(),this.milky=s,this.stars.uniforms.uMilky.value=s}))}setSize(t,e,s,i){this.scale=i>.5?.38:.26,this.stars.uniforms.uLayers.value=i>.5?3:2,this.rt.setSize(Math.max(4,Math.round(t*s*this.scale)),Math.max(4,Math.round(e*s*this.scale)));const o=t>e?[t/e,1]:[1,e/t];this.neb.uniforms.uHalf.value.set(o[0],o[1]),this.stars.uniforms.uHalf.value.set(o[0],o[1]),this.stars.uniforms.uRes.value.set(t*s,e*s),this.neb.uniforms.uQuality.value=i}render(t,e,s,i,o,a,r){const c=Math.log2(Math.max(1e-6,i)),h=Math.floor(c),d=c-h,p=(x,w,A)=>{const g=Math.pow(2,h+w)*A,M=e*x/g%4096,k=-s*x/g%4096;return[M,k]},m=this.neb.uniforms.uOff.value;for(let x=0;x<3;x++){const[w,A]=p(.35,x,1.8);m[x].set(w,A)}this.neb.uniforms.uFade.value=d,this.neb.uniforms.uN.value=h,this.stars.uniforms.uN.value=h,this.neb.uniforms.uTime.value=o,this.neb.uniforms.uBase.value.set(...a.base),this.neb.uniforms.uA.value.set(...a.a),this.neb.uniforms.uB.value.set(...a.b);const f=this.stars.uniforms.uOff.value,b=[.12,.25,.5];for(let x=0;x<3;x++)for(let w=0;w<3;w++){const[A,g]=p(b[x],w,1);f[x*3+w].set(A,g)}this.stars.uniforms.uFade.value=d,this.stars.uniforms.uTime.value=o,this.stars.uniforms.uStar.value.set(...a.star),this.stars.uniforms.uMotes.value=r?1:0;const z=this.stars.uniforms.uMwOff.value;if(this.lastCam){const x=(e-this.lastCam[0])/this.lastCam[2],w=(s-this.lastCam[1])/this.lastCam[2];Math.abs(x)+Math.abs(w)<3&&z.set(z.x+x*.006,z.y-w*.006)}this.lastCam=[e,s,i],this.milky&&(this.mwFade=Math.min(1,this.mwFade+.02)),this.stars.uniforms.uMwOn.value=this.mwFade;const y=t.getRenderTarget();t.setRenderTarget(this.rt),t.render(this.nebScene,this.cam),t.setRenderTarget(y),t.render(this.starScene,this.cam)}}const ft=600,Y={body:0,player:1,rival:2,titan:3,gold:4,magnet:5,shield:6,surge:7,meteor:8,nova:9,moon:10},ui=`
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
`,pi=`
precision highp float;
varying vec2 vP;
varying vec4 vLook;
varying vec4 vTint;
varying vec4 vState;
varying float vPx;
uniform float uTime;
uniform float uQuality;
${ee}
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
    {
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
    vec3 alb = mix(vec3(0.26, 0.28, 0.32), vec3(0.58, 0.64, 0.72), smoothstep(-0.2, 0.4, h));
    // Lumpy silhouette.
    float lump = 1.0 + 0.08 * snoise(vec3(normalize(p) * 2.0, seed * 10.0));
    float dd = d / (0.62 * lump);
    float dsc = 1.0 - smoothstep(1.0 - aa * 2.0, 1.0 + aa * 2.0, dd);
    vec3 nn = vec3(p / (0.62 * lump), sqrt(max(0.0, 1.0 - dd * dd)));
    col = (shade(alb, nn, 0.3) + coma * 0.08) * dsc;
    a = dsc;
    glow = coma * (exp(-d * 2.6) * 0.28 + exp(-d * 6.0) * 0.12);
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
    glow += au * exp(-max(0.0, d - 1.0) * 6.0) * (1.0 - disc * 0.8) * 0.35 * str;
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
`,fi=`
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
`,mi=`
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
`;class Ke{constructor(t){l(this,"mesh");l(this,"tails");l(this,"geo");l(this,"tgeo");l(this,"aPos",new Float32Array(ft*3));l(this,"aLook",new Float32Array(ft*4));l(this,"aTint",new Float32Array(ft*4));l(this,"aState",new Float32Array(ft*4));l(this,"tPos",new Float32Array(ft*4));l(this,"tDir",new Float32Array(ft*2));l(this,"tCol",new Float32Array(ft*4));l(this,"material");l(this,"tailMaterial");l(this,"n",0);l(this,"nt",0);const e=new Rt(1,1);this.geo=new Qt,this.geo.index=e.index,this.geo.setAttribute("position",e.getAttribute("position"));const s=(i,o)=>new ye(i,o).setUsage(gt);this.geo.setAttribute("iPos",s(this.aPos,3)),this.geo.setAttribute("iLook",s(this.aLook,4)),this.geo.setAttribute("iTint",s(this.aTint,4)),this.geo.setAttribute("iState",s(this.aState,4)),this.material=new dt({vertexShader:ui,fragmentShader:pi,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:Jt,uniforms:{uHalf:{value:[1,1]},uTime:{value:0},uQuality:{value:1},uPxPerUnit:{value:100}}}),this.mesh=new xt(this.geo,this.material),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.tgeo=new Qt,this.tgeo.index=e.index,this.tgeo.setAttribute("position",e.getAttribute("position")),this.tgeo.setAttribute("tPos",s(this.tPos,4)),this.tgeo.setAttribute("tDir",s(this.tDir,2)),this.tgeo.setAttribute("tCol",s(this.tCol,4)),this.tailMaterial=new dt({vertexShader:fi,fragmentShader:mi,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:Jt,uniforms:{uHalf:{value:[1,1]},uTime:{value:0}}}),this.tails=new xt(this.tgeo,this.tailMaterial),this.tails.frustumCulled=!1,this.tails.renderOrder=8,t.add(this.tails,this.mesh)}begin(){this.n=0,this.nt=0}add(t){if(this.n>=ft)return;const e=this.n++;this.aPos.set([t.x,t.y,t.r],e*3),this.aLook.set([t.cls,t.variant,t.seed,t.spin],e*4),this.aTint.set([t.tint[0],t.tint[1],t.tint[2],t.tintStrength],e*4),this.aState.set([t.danger,t.flash,t.alpha,t.kind],e*4)}tail(t,e,s,i,o,a,r,c){if(this.nt>=ft)return;const h=this.nt++;this.tPos.set([t,e,o,a],h*4),this.tDir.set([s,i],h*2),this.tCol.set([r[0],r[1],r[2],c],h*4)}end(t,e,s,i){this.geo.instanceCount=this.n,this.tgeo.instanceCount=this.nt;for(const o of["iPos","iLook","iTint","iState"])this.geo.getAttribute(o).needsUpdate=!0;for(const o of["tPos","tDir","tCol"])this.tgeo.getAttribute(o).needsUpdate=!0;this.material.uniforms.uTime.value=t,this.material.uniforms.uHalf.value=e,this.material.uniforms.uPxPerUnit.value=s,this.material.uniforms.uQuality.value=i,this.tailMaterial.uniforms.uTime.value=t,this.tailMaterial.uniforms.uHalf.value=e,this.mesh.visible=this.n>0,this.tails.visible=this.nt>0}}const gi=`
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
`,vi=`
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
`;class ms{constructor(t,e,s){l(this,"points");l(this,"pos");l(this,"col");l(this,"size");l(this,"geo",new ds);l(this,"mat");l(this,"n",0);this.max=e,this.pos=new Float32Array(e*2),this.col=new Float32Array(e*4),this.size=new Float32Array(e*2),this.geo.setAttribute("position",new Vt(this.pos,2).setUsage(gt)),this.geo.setAttribute("pCol",new Vt(this.col,4).setUsage(gt)),this.geo.setAttribute("pSize",new Vt(this.size,2).setUsage(gt)),this.geo.boundingSphere=new us(new It,1e6),this.mat=new dt({vertexShader:gi,fragmentShader:vi,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:rt,uniforms:{uHalf:{value:[1,1]},uMaxSize:{value:64}}}),this.points=new Ss(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=s,t.add(this.points)}push(t,e,s,i,o,a,r,c){if(this.n>=this.max)return;const h=this.n++;this.pos[h*2]=t,this.pos[h*2+1]=e,this.col[h*4]=i,this.col[h*4+1]=o,this.col[h*4+2]=a,this.col[h*4+3]=r,this.size[h*2]=s,this.size[h*2+1]=c}flush(t,e){this.geo.setDrawRange(0,this.n);for(const s of["position","pCol","pSize"])this.geo.getAttribute(s).needsUpdate=!0;this.mat.uniforms.uHalf.value=t,this.mat.uniforms.uMaxSize.value=e,this.points.visible=this.n>0,this.n=0}}const ot=3e3;class xi{constructor(t){l(this,"x",new Float64Array(ot));l(this,"y",new Float64Array(ot));l(this,"vx",new Float64Array(ot));l(this,"vy",new Float64Array(ot));l(this,"life",new Float32Array(ot));l(this,"max",new Float32Array(ot));l(this,"sz",new Float64Array(ot));l(this,"rgb",new Float32Array(ot*3));l(this,"drag",new Float32Array(ot));l(this,"spark",new Float32Array(ot));l(this,"n",0);l(this,"out");l(this,"budget",1);this.out=new ms(t,ot,20)}emit(t,e,s,i,o,a,r,c=2,h=0){if(this.n>=ot)return;const d=this.n++;this.x[d]=t,this.y[d]=e,this.vx[d]=s,this.vy[d]=i,this.life[d]=a,this.max[d]=a,this.sz[d]=o,this.rgb[d*3]=r[0],this.rgb[d*3+1]=r[1],this.rgb[d*3+2]=r[2],this.drag[d]=c,this.spark[d]=h}burst(t,e,s,i,o,a,r,c,h=.3){const d=Math.round(s*this.budget);for(let p=0;p<d;p++){const m=c()*Math.PI*2,f=i*(.25+c()*.75);this.emit(t,e,Math.cos(m)*f,Math.sin(m)*f,o*(.5+c()),a*(.6+c()*.6),r,2.2,c()<.3?h:0)}}update(t,e,s,i,o){let a=0;for(let r=0;r<this.n;r++){if(this.life[r]-=t,this.life[r]<=0)continue;const c=Math.exp(-this.drag[r]*t);this.vx[r]*=c,this.vy[r]*=c,this.x[r]+=this.vx[r]*t,this.y[r]+=this.vy[r]*t,a!==r&&(this.x[a]=this.x[r],this.y[a]=this.y[r],this.vx[a]=this.vx[r],this.vy[a]=this.vy[r],this.life[a]=this.life[r],this.max[a]=this.max[r],this.sz[a]=this.sz[r],this.rgb[a*3]=this.rgb[r*3],this.rgb[a*3+1]=this.rgb[r*3+1],this.rgb[a*3+2]=this.rgb[r*3+2],this.drag[a]=this.drag[r],this.spark[a]=this.spark[r]);const h=this.life[a]/this.max[a],d=Math.min(1,h*2.2)*Math.min(1,(1-h)*12+.2);this.out.push((this.x[a]-e)*i,-(this.y[a]-s)*i,Math.max(1.5,this.sz[a]*i*o),this.rgb[a*3],this.rgb[a*3+1],this.rgb[a*3+2],d,this.spark[a]),a++}this.n=a}clear(){this.n=0}}class yi{constructor(t){l(this,"out");this.out=new ms(t,1e3,9)}}const ce=96,bi=`
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
`,ki=`
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
`;class wi{constructor(t){l(this,"geo",new Qt);l(this,"aPos",new Float32Array(ce*4));l(this,"aCol",new Float32Array(ce*4));l(this,"aSty",new Float32Array(ce*2));l(this,"mat");l(this,"mesh");l(this,"bursts",[]);l(this,"n",0);const e=new Rt(1,1);this.geo.index=e.index,this.geo.setAttribute("position",e.getAttribute("position"));const s=(i,o)=>new ye(i,o).setUsage(gt);this.geo.setAttribute("rPos",s(this.aPos,4)),this.geo.setAttribute("rCol",s(this.aCol,4)),this.geo.setAttribute("rStyle",s(this.aSty,2)),this.mat=new dt({vertexShader:bi,fragmentShader:ki,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:rt,uniforms:{uHalf:{value:[1,1]},uTime:{value:0}}}),this.mesh=new xt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=15,t.add(this.mesh)}burst(t,e,s,i,o,a,r,c=1){this.bursts.length<48&&this.bursts.push({x:t,y:e,r0:s,r1:i,w:o,t:0,life:a,rgb:r,a:c})}draw(t,e,s,i,o,a,r=0,c=0){if(this.n>=ce)return;const h=this.n++;this.aPos.set([t,e,s,i],h*4),this.aCol.set([o[0],o[1],o[2],a],h*4),this.aSty.set([r,c],h*2)}update(t,e,s,i){this.bursts=this.bursts.filter(o=>(o.t+=t)<o.life);for(const o of this.bursts){const a=o.t/o.life,r=1-Math.pow(1-a,3);this.draw((o.x-e)*i,-(o.y-s)*i,(o.r0+(o.r1-o.r0)*r)*i,o.w*i*(1-a*.5),o.rgb,o.a*(1-a)*(1-a))}}end(t,e){this.geo.instanceCount=this.n;for(const s of["rPos","rCol","rStyle"])this.geo.getAttribute(s).needsUpdate=!0;this.mat.uniforms.uHalf.value=e,this.mat.uniforms.uTime.value=t,this.mesh.visible=this.n>0,this.n=0}clear(){this.bursts=[]}}const mt=80,Mi=`
precision highp float;
attribute vec2 position;
attribute vec2 tUv; // along 0..1 (0 = head), side -1..1
uniform vec2 uHalf;
varying vec2 vUv;
void main() { vUv = tUv; gl_Position = vec4(position / uHalf, 0.0, 1.0); }
`,Ti=`
precision highp float;
varying vec2 vUv;
uniform vec3 uCol;
uniform float uAlpha;
uniform float uTime;
${ee}
void main() {
  float along = vUv.x;
  float across = 1.0 - abs(vUv.y);
  float n = vnoise(vec2(along * 12.0 - uTime * 3.0, vUv.y * 2.0)) * 0.5 + 0.5;
  float a = pow(across, 1.8) * pow(1.0 - along, 1.4) * (0.6 + n * 0.6) * uAlpha;
  vec3 c = mix(uCol, vec3(1.0), pow(across, 6.0) * (1.0 - along) * 0.6);
  gl_FragColor = vec4(c * a, 0.0);
}
`;class Si{constructor(t){l(this,"hx",new Float64Array(mt));l(this,"hy",new Float64Array(mt));l(this,"count",0);l(this,"pos",new Float32Array(mt*2*2));l(this,"uv",new Float32Array(mt*2*2));l(this,"geo",new ds);l(this,"mat");l(this,"mesh");l(this,"acc",0);const e=[];for(let s=0;s<mt-1;s++){const i=s*2;e.push(i,i+1,i+2,i+1,i+3,i+2)}this.geo.setIndex(e),this.geo.setAttribute("position",new Vt(this.pos,2).setUsage(gt)),this.geo.setAttribute("tUv",new Vt(this.uv,2).setUsage(gt)),this.geo.boundingSphere=new us(new It,1e6),this.mat=new dt({vertexShader:Mi,fragmentShader:Ti,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:Jt,uniforms:{uHalf:{value:[1,1]},uCol:{value:[1,1,1]},uAlpha:{value:1},uTime:{value:0}}}),this.mesh=new xt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=7,t.add(this.mesh)}reset(t,e){this.count=1,this.hx[0]=t,this.hy[0]=e}update(t,e,s,i,o,a,r,c,h,d,p){if(this.acc+=t,this.acc>1/80||this.count===0){this.acc=0;for(let f=Math.min(this.count,mt-1);f>0;f--)this.hx[f]=this.hx[f-1],this.hy[f]=this.hy[f-1];this.count=Math.min(mt,this.count+1)}this.hx[0]=e,this.hy[0]=s;const m=this.count;for(let f=0;f<mt;f++){const b=Math.min(f,m-1),z=Math.min(b+1,m-1),y=Math.max(b-1,0);let x=this.hx[y]-this.hx[z],w=this.hy[y]-this.hy[z];const A=Math.hypot(x,w)||1;x/=A,w/=A;const g=f/(mt-1),M=i*.85*(1-g*.75),k=(this.hx[b]-o)*r,$=-(this.hy[b]-a)*r,N=-w*M*r,U=-x*M*r;this.pos.set([k+N,$+U,k-N,$-U],f*4),this.uv.set([g,1,g,-1],f*4)}this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("tUv").needsUpdate=!0,this.mat.uniforms.uHalf.value=d,this.mat.uniforms.uCol.value=c,this.mat.uniforms.uAlpha.value=m>2?h:0,this.mat.uniforms.uTime.value=p}}const Xt=8,Ai=`
precision highp float;
varying vec2 vUv;
uniform vec2 uHalf;
uniform vec3 uNova;      // x, y, max wave radius (view units)
uniform float uWarn;     // 0..1 progress to the blast
uniform vec3 uBlock[${Xt}];
uniform int uNBlock;
uniform float uTime;
void main() {
  vec2 v = (vUv * 2.0 - 1.0) * uHalf;
  vec2 to = v - uNova.xy;
  float d = length(to);
  if (d > uNova.z) { gl_FragColor = vec4(0.0); return; }
  bool safe = false;
  for (int i = 0; i < ${Xt}; i++) {
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
`;class Li{constructor(t){l(this,"mesh");l(this,"mat");this.mat=new dt({vertexShader:`
precision highp float;
attribute vec3 position;
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:Ai,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:rt,uniforms:{uHalf:{value:[1,1]},uNova:{value:[0,0,0]},uWarn:{value:0},uBlock:{value:Array.from({length:Xt},()=>[0,0,0]).flat()},uNBlock:{value:0},uTime:{value:0}}}),this.mesh=new xt(new Rt(2,2),this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,this.mesh.visible=!1,t.add(this.mesh)}set(t,e,s,i=0,o=[],a=0){if(this.mesh.visible=t,!t||!s)return;this.mat.uniforms.uHalf.value=e,this.mat.uniforms.uNova.value=s,this.mat.uniforms.uWarn.value=i;const r=this.mat.uniforms.uBlock.value;r.fill(0),o.slice(0,Xt).forEach((c,h)=>r.splice(h*3,3,c[0],c[1],c[2])),this.mat.uniforms.uNBlock.value=Math.min(Xt,o.length),this.mat.uniforms.uTime.value=a}}const he=8,pe=13,zi=`
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
  vP = position.xy * 2.0 * ${pe.toFixed(1)};
  vLook = hLook;
  vTint = hTint;
  vPx = hPos.z * uPxPerUnit;
  gl_Position = vec4((hPos.xy + vP * hPos.z) / uHalf, 0.0, 1.0);
}
`,Pi=`
precision highp float;
varying vec2 vP;
varying vec4 vLook;
varying vec4 vTint;
varying float vPx;
uniform float uTime;
uniform float uQuality;
${ee}
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
  float zone = smoothstep(${pe.toFixed(1)}, ${(pe*.55).toFixed(1)}, d) * smoothstep(1.5, 3.0, d);
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
    float jet = exp(-across * across / (0.05 + along * 0.035)) * smoothstep(${pe.toFixed(1)}, 2.0, along) * smoothstep(1.0, 1.6, along);
    float knots = 0.85 + 0.15 * sin(along * 2.0 - t * 6.0);
    glow += mix(vec3(0.6, 0.85, 1.0), vTint.rgb, 0.4) * jet * knots * 1.4;
  }
  if (mode > 0.5) {
    // The player's own aura: a soft halo in their colour around the whole disk.
    glow += vTint.rgb * exp(-max(0.0, dr - 4.0) * 1.2) * smoothstep(1.2, 2.0, d) * 0.12;
  }
  gl_FragColor = vec4((col + glow) * alpha, a * alpha);
}
`;class Qe{constructor(t){l(this,"mesh");l(this,"geo");l(this,"aPos",new Float32Array(he*3));l(this,"aLook",new Float32Array(he*4));l(this,"aTint",new Float32Array(he*4));l(this,"mat");l(this,"n",0);l(this,"list",[]);const e=new Rt(1,1);this.geo=new Qt,this.geo.index=e.index,this.geo.setAttribute("position",e.getAttribute("position"));const s=(i,o)=>new ye(i,o).setUsage(gt);this.geo.setAttribute("hPos",s(this.aPos,3)),this.geo.setAttribute("hLook",s(this.aLook,4)),this.geo.setAttribute("hTint",s(this.aTint,4)),this.mat=new dt({vertexShader:zi,fragmentShader:Pi,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:Jt,uniforms:{uHalf:{value:[1,1]},uTime:{value:0},uQuality:{value:1},uPxPerUnit:{value:100}}}),this.mesh=new xt(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=6,t.add(this.mesh)}begin(){this.n=0,this.list.length=0}add(t){if(this.n>=he)return;const e=this.n++;this.aPos.set([t.x,t.y,t.r],e*3),this.aLook.set([t.seed,t.mode,t.warn,t.alpha],e*4),this.aTint.set([t.tint[0],t.tint[1],t.tint[2],t.tintMix],e*4),this.list.push({x:t.x,y:t.y,r:t.r})}end(t,e,s,i){this.geo.instanceCount=this.n;for(const o of["hPos","hLook","hTint"])this.geo.getAttribute(o).needsUpdate=!0;this.mat.uniforms.uTime.value=t,this.mat.uniforms.uHalf.value=e,this.mat.uniforms.uPxPerUnit.value=s,this.mat.uniforms.uQuality.value=i,this.mesh.visible=this.n>0}}const j=(n,t,e={})=>({map:n,kind:t,tint:[1,1,1],atm:[0,0,0],bump:0,...e}),Ci=[[null,null],[null,null,null],[j("moon","rock",{bump:1.6}),j("eris","rock",{tint:[.88,.97,1.12],bump:1.2}),null,j("makemake","rock",{tint:[1.05,.82,.7],bump:1.3})],[j("earth","planet",{clouds:!0,night:!0,atm:[.35,.65,1],bump:.6}),j("mars","planet",{atm:[1,.62,.4],bump:1.1}),j("earth","planet",{clouds:!0,tint:[.9,1.12,.82],atm:[.45,1,.75],bump:.6}),j("ceres","planet",{clouds:!0,tint:[.92,1.02,1.15],atm:[.7,.9,1],bump:.9}),null,j("venus_atmo","planet",{tint:[1,1,.82],atm:[.85,1,.4]})],[j("jupiter","giant",{atm:[1,.82,.6]}),j("saturn","giant",{ring:!0,atm:[1,.9,.7]}),j("jupiter","giant",{tint:[1.1,.88,.8],atm:[1,.6,.5]}),j("neptune","giant",{ring:!0,atm:[.5,.75,1]})],[j("sun","star",{tint:[1.05,.5,.32]}),j("sun","star",{tint:[1.08,.95,.7]}),j("sun","star",{tint:[.95,.98,1.05]}),j("sun","star",{tint:[.62,.78,1.25]})],[j("sun","star",{tint:[1.1,.48,.3]}),j("sun","star",{tint:[.6,.75,1.3]}),null],[null,null],[null,null]];function Je(n,t,e){return e===9?j("sun","star",{tint:[1.15,1.05,.92]}):e===8||e>=4&&e<=7?null:Ci[n]?.[t]??null}const Ei=`
precision highp float;
in vec3 position;
in vec3 iPos;
in vec4 iLook;
in vec4 iTint;
in vec4 iState;
in vec3 iMul;
uniform vec2 uHalf;
uniform float uPxPerUnit;
uniform float uIsStar;
out vec2 vP;
out vec4 vLook;
out vec4 vTint;
out vec4 vState;
out vec3 vMul;
out float vPx;
void main() {
  float ext = uIsStar > 0.5 || iState.w == 9.0 ? 3.2 : 2.5;
  vP = position.xy * 2.0 * ext;
  vLook = iLook; vTint = iTint; vState = iState; vMul = iMul;
  vPx = iPos.z * uPxPerUnit;
  gl_Position = vec4((iPos.xy + vP * iPos.z) / uHalf, 0.0, 1.0);
}
`,$i=`
precision highp float;
in vec2 vP;
in vec4 vLook;
in vec4 vTint;
in vec4 vState;
in vec3 vMul;
in float vPx;
uniform sampler2D uMap;
uniform sampler2D uClouds;
uniform sampler2D uNight;
uniform sampler2D uRing;
uniform float uHasClouds;
uniform float uHasNight;
uniform float uHasRing;
uniform float uIsStar;
uniform float uIsGiant;
uniform float uBump;
uniform vec3 uAtm;
uniform float uTime;
uniform float uQuality;
out vec4 outColor;
const vec3 LIGHT = normalize(vec3(-0.55, 0.6, 0.6));
const float PI = 3.14159265;

mat3 rotY(float a) { float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }
mat3 rotX(float a) { float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }

// Equirectangular lookup without the seam line: derivatives come from whichever of u or u+0.5 is continuous here.
vec4 sphereTex(sampler2D t, vec3 d, float du) {
  vec2 uv = vec2(atan(d.x, d.z) / (2.0 * PI) + 0.5 + du, acos(clamp(d.y, -1.0, 1.0)) / PI);
  float ub = fract(uv.x + 0.5);
  vec2 gx = vec2(dFdx(uv.x), dFdx(uv.y));
  vec2 gy = vec2(dFdy(uv.x), dFdy(uv.y));
  float bx = dFdx(ub);
  float by = dFdy(ub);
  if (abs(bx) < abs(gx.x)) gx.x = bx;
  if (abs(by) < abs(gy.x)) gy.x = by;
  return textureGrad(t, uv, gx, gy);
}

void main() {
  vec2 p = vP;
  float d = length(p);
  float seed = vLook.z;
  float spin = vLook.w;
  float kind = vState.w;
  float aa = 1.5 / max(vPx, 1.0);
  float disc = 1.0 - smoothstep(1.0 - aa, 1.0 + aa, d);
  vec3 n = vec3(p, sqrt(max(0.0, 1.0 - d * d)));
  mat3 R = rotX(0.35 + seed * 0.6) * rotY(spin);
  vec3 sp = R * n;
  vec3 col = vec3(0.0);
  float a = 0.0;
  vec3 glow = vec3(0.0);
  float hiQ = step(0.25, uQuality);

  if (uIsStar > 0.5 || kind == 9.0) {
    // Star: two counter-drifting samples of the photo surface make it boil; limb darkening; corona with rays.
    // Map reads only on the disc (the corona around it is most of the quad).
    vec3 surf = vec3(0.0);
    if (d < 1.0 + aa * 2.0) {
      vec3 s1 = sphereTex(uMap, sp, uTime * 0.004).rgb;
      vec3 s2 = hiQ > 0.5 ? sphereTex(uMap, R * vec3(n.x, -n.y, n.z), -uTime * 0.003 + 0.37).rgb : s1;
      surf = mix(s1, s2, 0.5 + 0.5 * sin(uTime * 0.7 + seed * 9.0)) * vMul * 1.35;
    }
    float limb = pow(max(n.z, 0.0), 0.4);
    col = surf * (0.55 + 0.7 * limb) * disc;
    a = disc;
    float ang = atan(p.y, p.x);
    float rays = 0.55 + 0.25 * sin(ang * 13.0 + uTime * 0.6 + seed * 20.0) * sin(ang * 7.0 - uTime * 0.4) + 0.2 * sin(ang * 29.0 - uTime * 0.9);
    float rd = max(0.0, d - 1.0);
    vec3 cor = vMul * vec3(1.0, 0.85, 0.65);
    glow += cor * (exp(-rd * 3.6) * 0.6 + exp(-rd * 1.3) * 0.16 * rays) * (1.0 - disc * 0.9);
    if (kind == 9.0) {
      float pulse = 0.5 + 0.5 * sin(uTime * (8.0 + vTint.w * 22.0));
      col *= 1.0 + pulse * 0.6;
      glow *= 1.0 + pulse * 0.8;
    }
  } else {
    // Rocky moons, planets and giants: lit sphere with a soft terminator.
    vec4 tex = d < 1.0 + aa * 2.0 ? sphereTex(uMap, sp, 0.0) : vec4(0.0);
    vec3 alb = tex.rgb * vMul;
    vec3 nn = n;
    if (uBump > 0.0 && hiQ > 0.5 && d < 1.0) {
      // Relief: screen-space slope of the map's brightness tilts the normal.
      float h = dot(tex.rgb, vec3(0.33));
      vec2 g = vec2(dFdx(h), dFdy(h)) / max(aa, 1e-4);
      nn = normalize(vec3(n.xy - g * 0.012 * uBump, n.z));
    }
    float l = dot(nn, LIGHT);
    float day = smoothstep(-0.12, 0.35, l);
    float wrap = clamp(l * 0.5 + 0.5, 0.0, 1.0);
    // Bright maps (giants, icy moons) would blow out under bloom: keep diffuse light a touch under 1.
    vec3 surf = alb * (0.04 + day * (uIsGiant > 0.5 ? 0.78 : 0.9) + wrap * 0.06);
    // Oceans glint (blue, dark pixels of the map).
    float water = smoothstep(0.02, 0.12, alb.b - max(alb.r, alb.g) * 0.85) * step(dot(alb, vec3(0.33)), 0.45);
    if (hiQ > 0.5) surf += vec3(0.85, 0.92, 1.0) * pow(max(0.0, dot(reflect(-LIGHT, nn), vec3(0.0, 0.0, 1.0))), 30.0) * water * day * 0.7;
    if (uHasNight > 0.5) {
      // City lights glow on the night side only.
      vec3 nl = sphereTex(uNight, sp, 0.0).rgb;
      surf += nl * vec3(1.0, 0.78, 0.45) * (1.0 - smoothstep(-0.25, 0.08, l)) * 1.3;
    }
    if (uHasClouds > 0.5) {
      vec3 cs = rotY(uTime * 0.02) * sp;
      float cl = sphereTex(uClouds, cs, 0.0).r;
      surf = mix(surf, vec3(1.0) * (0.05 + day * 1.0), cl * 0.85);
    }
    // Atmosphere: fresnel haze on the lit side, a red-gold band along the day/night line, a thin glow outside.
    float fres = pow(1.0 - n.z, 2.4);
    float litSide = clamp(dot(normalize(vec3(p, 0.2)), LIGHT) * 0.6 + 0.6, 0.0, 1.2);
    surf += uAtm * fres * 0.6 * litSide;
    surf += vec3(1.0, 0.45, 0.2) * uAtm * (1.0 - smoothstep(0.0, 0.25, abs(l))) * fres * 0.35;
    col = surf * disc;
    a = disc;
    glow += uAtm * exp(-max(0.0, d - 1.0) * (uIsGiant > 0.5 ? 10.0 : 9.0)) * (1.0 - disc) * 0.7 * litSide;
    if (uHasRing > 0.5) {
      // Ring plane hit, textured; hidden behind the planet, darkened in the planet's shadow.
      vec3 N = normalize(vec3(sin(seed * 6.0) * 0.25, 0.92, 0.38));
      float zr = -(N.x * p.x + N.y * p.y) / N.z;
      vec3 rp = vec3(p, zr);
      float rho = length(rp);
      float ru = (rho - 1.25) / 1.05;
      if (ru > 0.0 && ru < 1.0) {
        vec4 rt = texture(uRing, vec2(ru, 0.5));
        bool behind = d < 1.0 && zr < n.z;
        vec3 toL = rp - LIGHT * dot(rp, LIGHT);
        float shadow = (dot(rp, LIGHT) < 0.0 && length(toL) < 1.0) ? 0.25 : 1.0;
        float ra = rt.a * (uIsGiant > 0.5 && uHasClouds < 0.5 ? 0.9 : 0.5);
        if (!behind) {
          vec3 rc = rt.rgb * vMul * (0.25 + 0.85 * shadow);
          col = col * (1.0 - ra) + rc * ra;
          a = a + ra * (1.0 - a);
        }
      }
    }
  }

  // Ownership and threat cues (same as the procedural bodies).
  float danger = vState.x;
  float ringD = abs(d - 1.16);
  if (kind == 1.0 || kind == 10.0) {
    vec3 au = vTint.rgb;
    float str = kind == 1.0 ? vTint.w : 0.35;
    glow += au * exp(-max(0.0, d - 1.0) * 6.0) * (1.0 - disc * 0.8) * 0.35 * str;
    glow += au * (1.0 - smoothstep(0.0, 0.035 + aa, abs(d - 1.1))) * 0.9 * str;
  } else if (kind == 2.0 || kind == 3.0) {
    vec3 au = vTint.rgb;
    glow += au * exp(-max(0.0, d - 1.0) * 6.0) * (1.0 - disc * 0.8) * 0.5;
    if (kind == 3.0) {
      float crown = (1.0 - smoothstep(0.0, 0.03 + aa, abs(d - 1.28))) * (0.5 + 0.5 * sin(atan(p.y, p.x) * 8.0 + uTime * 1.5));
      glow += vec3(1.0, 0.85, 0.4) * crown * 0.9;
    }
  }
  if (danger > 0.75) {
    float pulse = 0.65 + 0.35 * sin(uTime * 7.0);
    float ring = 1.0 - smoothstep(0.0, 0.045 + aa, ringD);
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
  outColor = vec4((col + glow) * alpha, a * alpha);
}
`,Et=160,Ze={earth:"earth",mars:"mars",jupiter:"jupiter",saturn:"saturn",moon:"moon",sun:"sun",mercury:"mercury",venus:"venus",venus_atmo:"venus_atmo",neptune:"neptune",uranus:"uranus",ceres:"ceres",eris:"eris",haumea:"haumea",makemake:"makemake",earth_clouds:"earth_clouds",earth_night:"earth_night",saturn_ring:"saturn_ring"};class Ii{constructor(){l(this,"loader",new rs);l(this,"tex",new Map);l(this,"ready",new Set);l(this,"failed",new Set)}get(t){if(this.ready.has(t))return this.tex.get(t);if(!this.tex.has(t)&&!this.failed.has(t)){const e=this.loader.load(`./tex/${Ze[t]}.webp`,()=>this.ready.add(t),void 0,()=>this.failed.add(t));e.colorSpace=ls,e.wrapS=t==="saturn_ring"?Ue:cs,e.wrapT=Ue,e.minFilter=As,e.magFilter=Ae,e.anisotropy=4,this.tex.set(t,e)}return null}preloadAll(){for(const t of Object.keys(Ze))this.get(t)}}class ts{constructor(t,e){l(this,"groups",new Map);this.scene=t,this.maps=e}ready(t){const e=!!this.maps.get(t.map),s=!t.clouds||!!this.maps.get("earth_clouds"),i=!t.night||!!this.maps.get("earth_night"),o=!t.ring||!!this.maps.get("saturn_ring");return e&&s&&i&&o}group(t){const e=`${t.map}|${t.kind}|${t.clouds?1:0}${t.night?1:0}${t.ring?1:0}|${t.atm.join(",")}|${t.bump}`;let s=this.groups.get(e);if(s)return s;const i=new Rt(1,1),o=new Qt;o.index=i.index,o.setAttribute("position",i.getAttribute("position"));const a=new Float32Array(Et*3),r=new Float32Array(Et*4),c=new Float32Array(Et*4),h=new Float32Array(Et*4),d=new Float32Array(Et*3),p=(z,y)=>new ye(z,y).setUsage(gt);o.setAttribute("iPos",p(a,3)),o.setAttribute("iLook",p(r,4)),o.setAttribute("iTint",p(c,4)),o.setAttribute("iState",p(h,4)),o.setAttribute("iMul",p(d,3));const m=this.maps.get(t.map),f=new dt({glslVersion:Ls,vertexShader:Ei,fragmentShader:$i,transparent:!0,depthTest:!1,depthWrite:!1,blending:bt,blendSrc:rt,blendDst:Jt,uniforms:{uHalf:{value:[1,1]},uPxPerUnit:{value:100},uTime:{value:0},uQuality:{value:1},uMap:{value:m},uClouds:{value:t.clouds?this.maps.get("earth_clouds"):m},uNight:{value:t.night?this.maps.get("earth_night"):m},uRing:{value:t.ring?this.maps.get("saturn_ring"):m},uHasClouds:{value:t.clouds?1:0},uHasNight:{value:t.night?1:0},uHasRing:{value:t.ring?1:0},uIsStar:{value:t.kind==="star"?1:0},uIsGiant:{value:t.kind==="giant"?1:0},uBump:{value:t.bump},uAtm:{value:[...t.atm]}}}),b=new xt(o,f);return b.frustumCulled=!1,b.renderOrder=10,this.scene.add(b),s={geo:o,mesh:b,mat:f,pos:a,look:r,tint:c,state:h,mul:d,n:0},this.groups.set(e,s),s}begin(){for(const t of this.groups.values())t.n=0}add(t,e){const s=this.group(t);if(s.n>=Et)return;const i=s.n++;s.pos.set([e.x,e.y,e.r],i*3),s.look.set([e.cls,e.variant,e.seed,e.spin],i*4),s.tint.set([e.tint[0],e.tint[1],e.tint[2],e.tintStrength],i*4),s.state.set([e.danger,e.flash,e.alpha,e.kind],i*4),s.mul.set(t.tint,i*3)}end(t,e,s,i){for(const o of this.groups.values()){if(o.geo.instanceCount=o.n,o.mesh.visible=o.n>0,!o.n)continue;for(const r of["iPos","iLook","iTint","iState","iMul"])o.geo.getAttribute(r).needsUpdate=!0;const a=o.mat.uniforms;a.uTime.value=t,a.uHalf.value=e,a.uPxPerUnit.value=s,a.uQuality.value=i}}}const fe=4,me=3,Di={uniforms:{tDiffuse:{value:null},uHalf:{value:new ct(1,1)},uLens:{value:Array.from({length:fe*3},()=>0)},uNLens:{value:0},uWave:{value:Array.from({length:me*4},()=>0)},uNWave:{value:0},uTime:{value:0},uGrain:{value:1},uCA:{value:1},uFlash:{value:0},uFlashCol:{value:[1,1,1]}},vertexShader:`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
uniform sampler2D tDiffuse;
uniform vec2 uHalf;
uniform vec3 uLens[${fe}];
uniform int uNLens;
uniform vec4 uWave[${me}];
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
  for (int i = 0; i < ${fe}; i++) {
    if (i >= uNLens) break;
    vec2 to = v - uLens[i].xy;
    float d = length(to);
    float rs = uLens[i].z;
    // Einstein-ring-like bend: light from behind is pulled around the hole.
    float k = rs * rs * 2.2 / max(d, rs * 0.9);
    off -= to / max(d, 1e-4) * k * smoothstep(rs * 14.0, rs * 3.0, d);
  }
  for (int i = 0; i < ${me}; i++) {
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
}`};class Bi extends Es{constructor(t){super(),this.draw=t,this.needsSwap=!1}render(t,e,s){t.setRenderTarget(s),t.clear(),this.draw(s)}}class Fi{constructor(t,e){l(this,"composer");l(this,"bloom");l(this,"final");l(this,"fxaa");l(this,"tier",2);const s=new Ee(4,4,{type:hs,samples:0});this.composer=new zs(t,s),this.composer.addPass(new Bi(()=>e())),this.bloom=new Ps(new ct(256,256),.7,.5,.8),this.composer.addPass(this.bloom),this.final=new We(Di),this.composer.addPass(this.final),this.fxaa=new We(Cs),this.composer.addPass(this.fxaa)}setSize(t,e,s,i){this.tier=i,this.composer.setPixelRatio(s),this.composer.setSize(t,e),this.bloom.enabled=i>=2,this.fxaa.uniforms.resolution.value.set(1/(t*s),1/(e*s)),this.final.uniforms.uHalf.value.set(t>e?t/e:1,t>e?1:e/t)}render(t,e,s,i,o,a,r){const c=this.final.uniforms.uLens.value,h=Math.min(fe,s.length);for(let m=0;m<h;m++)c.splice(m*3,3,s[m].x,s[m].y,s[m].r);this.final.uniforms.uNLens.value=h;const d=this.final.uniforms.uWave.value,p=Math.min(me,i.length);for(let m=0;m<p;m++)d.splice(m*4,4,i[m].x,i[m].y,i[m].r,i[m].w);this.final.uniforms.uNWave.value=p,this.final.uniforms.uTime.value=e,this.final.uniforms.uGrain.value=r?1:0,this.final.uniforms.uCA.value=this.tier>=2?1:.5,this.final.uniforms.uFlash.value=o,this.final.uniforms.uFlashCol.value=a,this.composer.render(t)}}const Oi=[[.75,.9,1],[.55,.85,1],[.8,.75,.7],[.45,.75,1],[1,.8,.55],[1,.8,.45],[.75,.85,1],[.95,.9,1],[.7,.75,1]];class Hi{constructor(t){l(this,"renderer");l(this,"scene",new ge);l(this,"cam",new ns(-1,1,1,-1,-1,1));l(this,"bg",new di);l(this,"bodies");l(this,"maps",new Ii);l(this,"textured");l(this,"holes");l(this,"dust");l(this,"particles");l(this,"rings");l(this,"trail");l(this,"nova");l(this,"post");l(this,"w",1);l(this,"h",1);l(this,"dpr",1);l(this,"half",[1,1]);l(this,"tier",2);l(this,"reduceMotion",!1);l(this,"skin",te[0]);l(this,"skinIndex",0);l(this,"camX",0);l(this,"camY",0);l(this,"zoom",13);l(this,"zoomVel",0);l(this,"pulse",1);l(this,"pulseT",0);l(this,"shake",0);l(this,"time",0);l(this,"flash",0);l(this,"flashCol",[1,1,1]);l(this,"playerFlash",0);l(this,"flashes",new Map);l(this,"ghosts",[]);l(this,"debris",[]);l(this,"sky",{...oe[0]});l(this,"skyTarget",0);l(this,"dead",!1);l(this,"deathT",0);l(this,"marks",[]);l(this,"rnd",Math.random);l(this,"pxPerUnit",100);l(this,"playerScreen",{x:0,y:0,r:10});l(this,"resScale",1);l(this,"thumbs",new Map);l(this,"thumbKit",null);this.renderer=new $s({canvas:t,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1,depth:!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(723487,1),this.dust=new yi(this.scene),this.holes=new Qe(this.scene),this.nova=new Li(this.scene),this.trail=new Si(this.scene),this.bodies=new Ke(this.scene),this.textured=new ts(this.scene,this.maps),this.particles=new xi(this.scene),this.rings=new wi(this.scene),this.post=new Fi(this.renderer,()=>this.drawScene())}phoneZoom(){const t=this.h>this.w;return t&&this.w<560?.62:!t&&this.h<520?.78:1}setResScale(t){const e=Math.max(.55,Math.min(1,t));Math.abs(e-this.resScale)<.01||(this.resScale=e,this.resize(this.w,this.h))}setTier(t){this.tier=t,this.resize(this.w,this.h)}resize(t,e){this.w=Math.max(1,t),this.h=Math.max(1,e);const s=this.tier===0?1:this.tier===1?1.6:2;this.dpr=Math.max(.75,Math.min(s,window.devicePixelRatio||1)*this.resScale),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.w,this.h,!1),this.half=this.w>this.h?[this.w/this.h,1]:[1,this.h/this.w],this.bg.setSize(this.w,this.h,this.dpr,this.tier>=2?1:0),this.bg.setMilky(this.tier>=2),this.post.setSize(this.w,this.h,this.dpr,this.tier),this.particles.budget=this.tier===0?.5:1}reset(t){const e=t.player;this.camX=e.x,this.camY=e.y,this.zoom=Le(e.r)*this.phoneZoom(),this.zoomVel=0,this.pulse=1,this.pulseT=0,this.ghosts=[],this.debris=[],this.flashes.clear(),this.particles.clear(),this.rings.clear(),this.trail.reset(e.x,e.y),this.dead=!1,this.deathT=0,this.skyTarget=e.stage,this.sky={...oe[e.stage]},this.flash=0}onEvents(t,e){const s=t.player,i=this.skin.aura,o=this.rnd;for(const a of e)switch(a.t){case"eat":{const r=Oi[a.cls]??[1,1,1],c=a.who==="player"?s:t.bodies.find(d=>d.id===a.eaterId);if(this.ghosts.push({x:a.x,y:a.y,r:a.r,cls:a.cls,variant:a.seed%Bt[a.cls].length,seed:a.seed,tx:c?c.x:a.x,ty:c?c.y:a.y,t:0,kind:a.who==="player"?1:0}),a.who==="player"&&a.cls>=2&&a.cls<=4&&this.tier>=1){const d=Math.min(12,5+a.cls*2);for(let p=0;p<d;p++){const m=o()*Math.PI*2,f=C(a.r)*(.6+o()*1.2);this.debris.push({x:a.x+Math.cos(m)*a.r*.4,y:a.y+Math.sin(m)*a.r*.4,vx:Math.cos(m)*f,vy:Math.sin(m)*f,r:a.r*(.12+o()*.16),t:0,life:.9+o()*.5,seed:Math.floor(o()*1e3),variant:o()<.6?0:1})}}const h=a.who==="player"?10+Math.min(20,a.combo*3):6;this.particles.burst(a.x,a.y,h,C(a.r)*2.5,a.r*.25,.7,r,o,.6),a.who==="player"?(a.cls>=2&&this.rings.burst(a.x,a.y,a.r*.8,a.r*2.2,a.r*.2,.4,i,.4),this.playerFlash=Math.min(.5,this.playerFlash+.18)):a.who==="hole"&&this.rings.burst(a.x,a.y,a.r,a.r*.2,a.r*.2,.5,[.7,.5,1],.6);break}case"dust":o()<.5&&this.particles.emit(a.x,a.y,(o()-.5)*s.r,(o()-.5)*s.r,s.r*.12,.35,i,4,.8);break;case"collect":{const r=a.kind==="gold"?ne:re[ze.indexOf(a.kind)];this.particles.burst(a.x,a.y,26,C(s.r)*3,s.r*.18,.9,r,o,1),this.rings.burst(a.x,a.y,s.r*.5,s.r*4,s.r*.3,.6,r,1);break}case"stage":this.skyTarget=a.stage,this.rings.burst(s.x,s.y,s.r,s.r*14,s.r*.8,1.6,i,1),this.rings.burst(s.x,s.y,s.r,s.r*8,s.r*.4,1.1,[1,1,1],.8),this.particles.burst(s.x,s.y,80,C(s.r)*4,s.r*.25,1.6,i,o,1),this.reduceMotion||(this.pulseT=2.6),this.flash=.35,this.flashCol=[i[0]*.6+.4,i[1]*.6+.4,i[2]*.6+.4];break;case"hit":this.particles.burst(a.x,a.y,a.by==="nova"?50:18,C(s.r)*3,s.r*.18,.8,a.by==="nova"?[1,.6,.25]:[1,.45,.2],o,.4),this.playerFlash=1,this.addShake(a.by==="nova"?1:.5),a.by==="nova"&&(this.flash=.45,this.flashCol=[1,.75,.5]);break;case"bump":this.particles.burst(a.x,a.y,8,C(s.r)*1.5,s.r*.1,.4,[1,.95,.85],o,.5),this.addShake(.15*Math.min(2,a.strength));break;case"shieldBlock":this.rings.burst(a.x,a.y,s.r*1.2,s.r*1.8,s.r*.15,.35,re[1],1);break;case"novaBlast":this.particles.burst(a.x,a.y,140,C(s.r)*6,s.r*.35,2,[1,.8,.5],o,1),this.rings.burst(a.x,a.y,s.r,s.r*6,s.r*1.2,.8,[1,.95,.85],1),this.addShake(.6),this.flash=Math.max(this.flash,.25),this.flashCol=[1,.85,.65];break;case"novaSafe":this.rings.burst(s.x,s.y,s.r*1.1,s.r*2.2,s.r*.2,.6,[.4,.9,1],1);break;case"titanEaten":this.particles.burst(a.x,a.y,120,C(s.r)*5,s.r*.3,1.8,ne,o,1),this.rings.burst(a.x,a.y,s.r,s.r*10,s.r*.6,1.4,ne,1),this.flash=.3,this.flashCol=[1,.9,.6];break;case"holeEaten":this.particles.burst(a.x,a.y,90,C(s.r)*4,s.r*.2,1.5,[.7,.5,1],o,1),this.rings.burst(a.x,a.y,s.r*3,s.r*.5,s.r*.5,.9,[.8,.6,1],1);break;case"capture":this.flashes.set(a.id,1);break;case"moonFed":this.particles.burst(a.x,a.y,12,C(s.r),s.r*.12,.6,i,o,1);break;case"moonLost":this.particles.burst(a.x,a.y,14,C(s.r)*1.5,s.r*.12,.6,[.8,.8,.85],o,.3);break;case"secondWind":this.rings.burst(s.x,s.y,s.r,s.r*9,s.r*.7,1,[1,1,1],1),this.particles.burst(s.x,s.y,60,C(s.r)*4,s.r*.2,1.2,i,o,1),this.flash=.5,this.flashCol=[1,1,1];break;case"revive":this.dead=!1,this.deathT=0,this.trail.reset(s.x,s.y),this.rings.burst(s.x,s.y,s.r*6,s.r,s.r*.5,.8,i,1),this.rings.burst(s.x,s.y,s.r,s.r*5,s.r*.3,.9,[1,1,1],.8),this.particles.burst(s.x,s.y,70,C(s.r)*3,s.r*.2,1.2,i,o,1),this.flash=.4,this.flashCol=[1,1,1];break;case"death":this.dead=!0,this.deathT=0,this.particles.burst(a.x,a.y,160,C(s.r)*4,s.r*.3,2.2,i,o,1),this.particles.burst(a.x,a.y,60,C(s.r)*2,s.r*.2,1.6,[1,1,1],o,1),this.rings.burst(a.x,a.y,s.r,s.r*7,s.r*.6,1.2,i,1),this.addShake(.8);break}}addShake(t){this.reduceMotion||(this.shake=Math.min(1.2,this.shake+t))}drawBody(t){const e=Je(t.cls,t.variant,t.kind);e&&this.textured.ready(e)?this.textured.add(e,t):this.bodies.add(t)}frame(t,e,s,i=!1){this.time+=s;const o=t.player,a=(u,T)=>u+(T-u)*e,r=a(o.px,o.x),c=a(o.py,o.y),h=this.reduceMotion?.12:.3,d=r+o.vx*h,p=c+o.vy*h,m=1-Math.exp(-s*(this.dead?1.5:4));this.camX+=(d-this.camX)*m,this.camY+=(p-this.camY)*m,this.pulseT>0&&(this.pulseT=Math.max(0,this.pulseT-s));const f=this.pulseT>0?1-this.pulseT/2.6:1;this.pulse=this.pulseT>0?1+.55*Math.sin(Math.min(1,f)*Math.PI):1;const b=this.phoneZoom(),z=Le(o.r)*b*(o.boosting?1.06:1)*this.pulse*(i?1.15:1),y=3.2,x=y*y*(z-this.zoom)-2*y*this.zoomVel;this.zoomVel+=x*s,this.zoom+=this.zoomVel*s,this.zoom<1e-6&&(this.zoom=z),this.shake=Math.max(0,this.shake-s*2.2);let w=0,A=0;if(this.shake>0){const u=this.shake*this.shake*this.zoom*.025;w=(Math.sin(this.time*61)+Math.sin(this.time*37))*u,A=(Math.cos(this.time*53)+Math.sin(this.time*29))*u}const g=this.camX+w,M=this.camY+A,k=1/this.zoom;this.pxPerUnit=Math.min(this.w,this.h)/2*this.dpr;const $=(u,T)=>[(u-g)*k,-(T-M)*k],N=oe[Math.min(this.skyTarget,oe.length-1)],U=1-Math.exp(-s*.6);this.sky.base=le(this.sky.base,N.base,U),this.sky.a=le(this.sky.a,N.a,U),this.sky.b=le(this.sky.b,N.b,U),this.sky.star=le(this.sky.star,N.star,U);const kt=this.skin.prism?Ri(this.time*.15%1,.9,.65):this.skin.aura;this.bodies.begin(),this.textured.begin(),this.holes.begin(),Math.hypot(this.half[0],this.half[1])+.2;const Nt=(u,T,O)=>Math.abs(u)<this.half[0]+O&&Math.abs(T)<this.half[1]+O,Lt=[.68,-.73],zt=[],Gt=t.novas.find(u=>u.warn>0);for(const u of t.bodies){const T=a(u.px,u.x),O=a(u.py,u.y),[F,H]=$(T,O),G=u.r*k;if(u.role==="hole"){if(!Nt(F,H,G*13))continue;const at=Math.hypot(T-r,O-c),pt=Math.max(0,Math.min(1,1-(at-u.r*4)/(u.r*6)));this.holes.add({x:F,y:H,r:G,seed:u.seed%1e3/1e3,mode:0,warn:pt,alpha:Math.min(1,(t.tick-u.born)/40),tint:[1,1,1],tintMix:0});continue}if(!Nt(F,H,G*3.3))continue;const Q=u.seed%1e3/1e3;let it=Math.min(8,ue(u.mass)),yt=u.seed%Bt[it].length,Z=Y.body,ut=[1,1,1],ie=0,Pt=0;switch((u.role==="drift"||u.role==="rival"||u.role==="titan"||u.role==="meteor")&&(Pt=u.mass>o.mass*et?1:u.mass*et>o.mass?.5:-1),u.role){case"rival":Z=Y.rival,ut=li;break;case"titan":Z=Y.titan,ut=[1,.75,.35];break;case"gold":Z=Y.gold;break;case"power":Z=u.tag===0?Y.magnet:u.tag===1?Y.shield:Y.surge;break;case"meteor":Z=Y.meteor,it=2,yt=2;break;case"nova":{Z=Y.nova,it=5;const at=t.novas.find(pt=>pt.id===u.tag);ie=at?1-at.warn/at.warnTotal:0,Pt=0;break}case"moon":Z=Y.moon,ut=kt,Pt=0;break}const Te=this.flashes.get(u.id)??0;Te>0?this.flashes.set(u.id,Te-s*2.5):this.flashes.has(u.id)&&this.flashes.delete(u.id);const ks=u.seed%2===0?1:-1;if(this.drawBody({x:F,y:H,r:G,cls:it,variant:yt,seed:Q,spin:this.time*(.06+Q*.2)*ks+Q*6,tint:ut,tintStrength:ie,danger:Pt,flash:Math.max(0,Te),alpha:1,kind:Z}),u.role==="meteor"||u.role==="gold"){const at=Math.hypot(u.vx,u.vy)||1,pt=u.role==="gold"?[1,.85,.4]:[1,.5,.2];this.bodies.tail(F,H,-u.vx/at,u.vy/at,G*(u.role==="gold"?.9:.75),G*(u.role==="gold"?7:5.5),pt,u.role==="gold"?.9:.8)}else if(it===1&&Z!==Y.moon){const at=yt===0?[.55,.85,1]:yt===1?[.45,1,.7]:[1,.6,.3];this.bodies.tail(F,H,Lt[0],Lt[1],G*.7,G*6,at,.6)}if(u.role==="power"||u.role==="gold"){const at=u.role==="gold"?ne:re[u.tag],pt=(this.time*.8+Q)%1;this.rings.draw(F,H,G*1.9,G*.09,at,.85,10,u.role==="gold"?2.5:1.6),this.rings.draw(F,H,G*(1.4+pt*2.6),G*.12,at,.75*(1-pt)*(1-pt))}Gt&&u.role!=="meteor"&&u.role!=="gold"&&u.role!=="power"&&u.r>=o.r*.7&&zt.push([F,H,G*1.05])}this.debris=this.debris.filter(u=>(u.t+=s)<u.life);for(const u of this.debris){const T=Math.min(1,u.t/u.life),O=r-u.x,F=c-u.y,H=Math.hypot(O,F)||1,G=C(o.r)*6*T*T;u.vx+=O/H*G*s-u.vx*2.2*s,u.vy+=F/H*G*s-u.vy*2.2*s,u.x+=u.vx*s,u.y+=u.vy*s,H<o.r*.8&&(u.t=u.life);const[Q,it]=$(u.x,u.y);this.drawBody({x:Q,y:it,r:u.r*k*(1-T*.6),cls:0,variant:u.variant,seed:u.seed%1e3/1e3,spin:this.time*2+u.seed,tint:[1,1,1],tintStrength:0,danger:0,flash:0,alpha:1-T*T*.6,kind:Y.body})}this.ghosts=this.ghosts.filter(u=>(u.t+=s)<.28);for(const u of this.ghosts){const T=u.t/.28,O=T*T,F=u.kind===1?r:u.tx,H=u.kind===1?c:u.ty,[G,Q]=$(u.x+(F-u.x)*O,u.y+(H-u.y)*O);this.drawBody({x:G,y:Q,r:u.r*k*(1-O*.85),cls:u.cls,variant:u.variant,seed:u.seed%1e3/1e3,spin:0,tint:[1,1,1],tintStrength:0,danger:0,flash:T,alpha:1-O*.5,kind:Y.body})}const[Ut,Wt]=$(r,c),wt=o.r*k;this.playerScreen={x:(Ut/this.half[0]*.5+.5)*this.w,y:(.5-Wt/this.half[1]*.5)*this.h,r:wt/this.half[1]*.5*this.h},this.playerFlash=Math.max(0,this.playerFlash-s*3),this.dead&&(this.deathT+=s);const ys=o.invulnT>0&&!this.dead?.75+.25*Math.sin(this.time*22):1;if(!this.dead){const u=Math.min(8,o.stage);if(u>=7)this.holes.add({x:Ut,y:Wt,r:wt*.5,seed:.37,mode:u===8?2:1,warn:0,alpha:1,tint:kt,tintMix:.55});else{if(u<=1){const T=Math.hypot(o.vx,o.vy);T>.01&&this.bodies.tail(Ut,Wt,-o.vx/T,o.vy/T,wt*.8,wt*(3+Math.min(4,T/C(o.r)*4)),[.62,.85,1],.6)}this.drawBody({x:Ut,y:Wt,r:wt,cls:u,variant:u===0?1:this.skinIndex%Bt[u].length,seed:.37,spin:this.time*.15,tint:kt,tintStrength:1,danger:0,flash:this.playerFlash,alpha:ys,kind:Y.player})}o.shieldT>0&&this.rings.draw(Ut,Wt,wt*1.45,wt*.08,re[1],.55+.25*Math.sin(this.time*6),6,1.5)}this.trail.update(s,r,c,this.dead?0:o.r*(o.stage>=7?.5:1),g,M,k,kt,this.dead?0:o.boosting||o.surgeT>0?1:.55,this.half,this.time);const Ne=this.dust.out;for(const u of t.dust){const T=a(u.px,u.x),O=a(u.py,u.y),[F,H]=$(T,O);if(Math.abs(F)>this.half[0]+.05||Math.abs(H)>this.half[1]+.05)continue;const G=Mt(u.m)*9*k*this.pxPerUnit,Q=u.seed%5,it=Q===0?[1,.85,.6]:Q===1?[.6,.85,1]:Q===2?[1,.6,.85]:Q===3?[.7,1,.9]:[.95,.95,1],yt=.85+.25*Math.sin(this.time*3+u.seed);Ne.push(F,H,Math.max(9*this.dpr,G),it[0],it[1],it[2],yt,u.seed%5===0?.9:.2)}Ne.flush(this.half,48*this.dpr);const Ge=[];for(const u of t.novas){const[T,O]=$(u.x,u.y);if(u.warn>0){const F=1-u.warn/u.warnTotal;this.rings.draw(T,O,u.r*k*(1.4+(1-F)*3),u.r*k*.08,[1,.6,.25],.5+F*.5,0,0),this.nova.set(!0,this.half,[T,O,u.maxWave*k],F,zt,this.time)}else{const F=u.wave*k,H=1-u.wave/u.maxWave;this.rings.draw(T,O,F,u.r*k*.9,[1,.75,.45],.9*H,0,0),this.rings.draw(T,O,F*.97,u.r*k*.3,[1,1,1],.6*H,0,0),Ge.push({x:T,y:O,r:F,w:u.r*k*.6*H})}}if(Gt||this.nova.set(!1,this.half),this.particles.update(s,g,M,k,this.pxPerUnit),this.particles.out.flush(this.half,96*this.dpr),this.rings.update(s,g,M,k),this.rings.end(this.time,this.half),this.bodies.end(this.time,this.half,this.pxPerUnit,this.tier/2),this.textured.end(this.time,this.half,this.pxPerUnit,this.tier/2),this.holes.end(this.time,this.half,this.pxPerUnit,this.tier>=1?1:0),this.marks.length=0,!i){const u=(T,O,F,H,G,Q)=>{const[it,yt]=$(O,F),Z=(it/this.half[0]*.5+.5)*this.w,ut=(.5-yt/this.half[1]*.5)*this.h,ie=Z>0&&Z<this.w&&ut>0&&ut<this.h,Pt=Math.atan2(ut-this.h/2,Z-this.w/2);this.marks.push({kind:T,x:Z,y:ut,onScreen:ie,angle:Pt,rPx:H*k/this.half[1]*.5*this.h,label:G,value:Q})};for(const T of t.bodies)T.role==="titan"?u("titan",a(T.px,T.x),a(T.py,T.y),T.r,void 0,T.tag):T.role==="gold"?u("gold",T.x,T.y,T.r):T.role==="power"?u("power",T.x,T.y,T.r,void 0,T.tag):T.role==="hole"&&Math.hypot(T.x-r,T.y-c)<this.zoom*3&&u("hole",T.x,T.y,T.r);for(const T of t.novas)T.warn>0&&u("nova",T.x,T.y,T.r,void 0,Math.ceil(T.warn/60))}this.flash=Math.max(0,this.flash-s*1.4);const bs=this.holes.list.slice(0,4);this.tier<2?(this.renderer.setRenderTarget(null),this.renderer.clear(),this.drawScene()):this.post.render(s,this.time,bs,Ge,this.reduceMotion?this.flash*.4:this.flash,this.flashCol,this.tier>=2)}drawScene(){this.bg.render(this.renderer,this.camX,this.camY,this.zoom,this.time,this.sky,this.tier>=1),this.renderer.render(this.scene,this.cam)}thumbnail(t,e=96){const s=this.thumbs.get(t.code);if(s)return s;if(!this.thumbKit){const w=new ge;this.thumbKit={scene:w,holes:new Qe(w),bodies:new Ke(w),textured:new ts(w,this.maps),rt:new Ee(e,e)}}const{scene:i,bodies:o,holes:a,textured:r,rt:c}=this.thumbKit;o.begin(),a.begin(),r.begin();let h=!1;const d=(w,A,g,M,k=[1,1,1],$=0)=>{const N={x:0,y:0,r:M,cls:w,variant:A,seed:.42,spin:.8,tint:k,tintStrength:$,danger:0,flash:0,alpha:1,kind:g},U=Je(w,A,g);U&&r.ready(U)?r.add(U,N):(U&&(h=!0),o.add(N))};if(t.special==="hole")a.add({x:0,y:0,r:.2,seed:.3,mode:0,warn:0,alpha:1,tint:[1,1,1],tintMix:0});else if(t.special==="nova")d(5,1,Y.nova,.4,[1,1,1],.6);else if(t.special==="storm")o.tail(.25,-.25,-.7,.7,.18,.9,[1,.5,.2],.9),d(2,2,Y.meteor,.4);else if(t.special==="titan")t.cls>=7?a.add({x:0,y:0,r:.17,seed:.6,mode:1,warn:0,alpha:1,tint:[1,.75,.35],tintMix:.5}):d(t.cls,t.variant%Bt[t.cls].length,Y.titan,t.cls>=5?.38:.6,[1,.75,.35]);else{const w=t.cls>=7?.95:t.cls===5||t.cls===6?.42:t.cls===4&&(t.variant===1||t.variant===3)?.43:t.cls===0?.5:.68;d(t.cls,t.variant,Y.body,w),t.cls===1&&o.tail(0,0,.68,-.73,w*.7,w*5,t.variant===0?[.55,.85,1]:t.variant===1?[.45,1,.7]:[1,.6,.3],.6)}o.end(3,[1,1],e/2,1),a.end(3,[1,1],e/2,1),r.end(3,[1,1],e/2,1);const p=this.renderer,m=p.getRenderTarget();p.setRenderTarget(c),p.setClearColor(0,1),p.clear(),p.render(i,this.cam);const f=new Uint8Array(e*e*4);p.readRenderTargetPixels(c,0,0,e,e,f),p.setRenderTarget(m),p.setClearColor(723487,1);const b=document.createElement("canvas");b.width=b.height=e;const z=b.getContext("2d");if(!z)return"";const y=z.createImageData(e,e);for(let w=0;w<e;w++)for(let A=0;A<e;A++){const g=((e-1-w)*e+A)*4,M=(w*e+A)*4,k=Math.min(255,Math.max(f[g],f[g+1],f[g+2])*1.15),$=k>0?255/k:0;y.data[M]=Math.min(255,f[g]*$),y.data[M+1]=Math.min(255,f[g+1]*$),y.data[M+2]=Math.min(255,f[g+2]*$),y.data[M+3]=k}z.putImageData(y,0,0);const x=b.toDataURL("image/png");return h||this.thumbs.set(t.code,x),x}get sinceDeath(){return this.dead?this.deathT:0}}function Ri(n,t,e){const s=i=>{const o=(i+n*12)%12,a=t*Math.min(e,1-e);return e-a*Math.max(-1,Math.min(o-3,9-o,1))};return[s(0),s(8),s(4)]}function Ni(n,t=1,e=0){const s=n.player,i=n.view*1.6;let o=0,a=0,r=0,c=0,h=0,d=0;const p=(y,x,w,A)=>{const g=s.x-y,M=s.y-x,k=Math.hypot(g,M)||1;if(k<w){const $=A*(1-k/w)*(1-k/w);o+=g/k*$,a+=M/k*$,d=Math.max(d,$)}};for(const y of n.bodies){const x=Math.hypot(y.x-s.x,y.y-s.y);if(x>i)continue;if(y.role==="hole"){p(y.x,y.y,y.r*9+s.r,6);continue}if(y.role==="nova"){p(y.x,y.y,y.r*3+s.r,2);continue}if(y.role==="moon")continue;if(y.mass>s.mass*et*.95&&y.role!=="gold"&&y.role!=="power"){p(y.x,y.y,y.r+s.r*(y.role==="meteor"?5:7)+s.r*4*t,y.role==="meteor"?2:3);continue}const A=(y.role==="gold"?s.mass*.4:y.role==="power"?s.mass*.2:y.mass)/(x+s.r*2);A>r&&(r=A,c=y.x-s.x,h=y.y-s.y)}for(const y of n.novas)y.wave>=0&&p(y.x,y.y,y.wave+s.r*6,.5);if(r===0){let y=1/0;for(const x of n.dust){const w=Math.hypot(x.x-s.x,x.y-s.y);w<y&&w>s.r&&(y=w,c=x.x-s.x,h=x.y-s.y)}}const m=Math.hypot(c,h)||1;let f=c/m+o*(1+2*t),b=h/m+a*(1+2*t);if(e>0){const y=Math.sin(n.tick*.05)*e;[f,b]=[f*Math.cos(y)-b*Math.sin(y),f*Math.sin(y)+b*Math.cos(y)]}const z=Math.hypot(f,b)||1;return{mx:f/z,my:b/z,boost:d>.35&&t>.5&&s.mass>12}}const es=10;class Gi{constructor(t){l(this,"acc",0);l(this,"ticks",0);this.step=t}advance(t){this.acc+=Math.max(0,t);let e=0;for(;this.acc>=qt&&e<es;)this.step(),this.acc-=qt,this.ticks++,e++;return e===es&&(this.acc=Math.min(this.acc,qt)),this.acc/qt}reset(){this.acc=0,this.ticks=0}}be(`
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
#ui .kh-toast { position: absolute; left: 12px; top: 122px; transform: translate(0, -6px); padding: 6px 14px; border-radius: 16px; background: rgba(10,40,34,.72); border: 1px solid rgba(120,255,200,.45); color: #c9ffe9; font-weight: 800; font-size: 13px; letter-spacing: .05em; opacity: 0; transition: opacity .3s, transform .3s; zoom: var(--ui-z, 1); white-space: nowrap; }
#ui .kh-toast.on { opacity: 1; transform: translate(0, 0); }
@media (max-height: 430px) { #ui .kh-toast { top: 100px; font-size: 12px; } }
#ui .kh-powers { position: absolute; left: 12px; top: 160px; zoom: var(--ui-z, 1); display: flex; flex-direction: column; gap: 6px; }
#ui .kh-power { position: relative; overflow: hidden; display: flex; align-items: center; gap: 7px; min-width: 132px; padding: 6px 12px 9px; border-radius: 12px; font-weight: 900; font-size: 13px; letter-spacing: .08em; color: var(--pc);
  background: rgba(8,10,24,.75); border: 1.5px solid var(--pc); box-shadow: 0 0 16px color-mix(in srgb, var(--pc) 45%, transparent); animation: kh-pp2 1.2s ease-in-out infinite; }
#ui .kh-power b { font-size: 16px; }
#ui .kh-power i { position: absolute; left: 0; bottom: 0; height: 3px; background: var(--pc); box-shadow: 0 0 8px var(--pc); }
@media (max-height: 430px) { #ui .kh-powers { top: 132px; } #ui .kh-power { min-width: 110px; padding: 4px 9px 7px; font-size: 11.5px; } }
@keyframes kh-pp2 { 50% { box-shadow: 0 0 26px color-mix(in srgb, var(--pc) 70%, transparent); } }
#ui .kh-target { position: absolute; left: 50%; top: 14px; transform: translateX(-50%); padding: 6px 12px; border-radius: 14px; font-weight: 900; font-size: 13px; letter-spacing: .06em; white-space: nowrap; zoom: var(--ui-z, 1);
  background: rgba(60,14,30,.72); border: 1px solid rgba(255,130,150,.6); color: #ffd0d8; display: none; }
#ui .kh-target.won { background: rgba(10,50,36,.75); border-color: rgba(120,255,190,.6); color: #c9ffe4; }
@media (max-width: 560px) { #ui .kh-target { top: auto; bottom: calc(24px + env(safe-area-inset-bottom)); left: 16px; transform: none; } }
/* Touch boost reminder: plain text under the top bar, no box, hidden while boosting. */
#ui .kh-help { position: absolute; left: 0; right: 0; top: 96px; text-align: center; font-size: 12.5px; font-weight: 600; letter-spacing: .04em; color: rgba(235,228,255,.62);
  text-shadow: 0 1px 3px rgba(0,0,0,.8); zoom: var(--ui-z, 1); transition: opacity .25s; }
#ui .kh-help.off { opacity: 0; }
@media (max-height: 430px) { #ui .kh-help { top: 76px; font-size: 11.5px; } }
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
  #ui .kh-lb { min-width: 128px; padding: 5px 6px; font-size: 11.5px; }
  #ui .kh-lbt { font-size: 9.5px; }
  #ui .kh-lbr b { width: 26px; }
  /* Portrait phones: the rank list sits top-right, so the boost reminder, codex toast and power chips stack below it. */
  #ui .kh-help { top: 150px; }
  #ui .kh-toast { top: 176px; }
  #ui .kh-powers { top: 216px; }
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
`);const Ui='<svg viewBox="0 0 64 64"><path d="M22 30V12a4 4 0 0 1 8 0v14l2-1a4 4 0 0 1 6 2l1 1a4 4 0 0 1 6 2 4 4 0 0 1 6 3v10c0 9-6 15-15 15h-3c-6 0-10-3-13-8l-7-12a4 4 0 0 1 6-5z" fill="#fff8ec" stroke="#3b2a55" stroke-width="2.5" stroke-linejoin="round"/></svg>',Wi='<svg viewBox="0 0 24 24" fill="none" stroke="#ffd98a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M3 12h18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3M3 12l3-3M3 12l3 3M21 12l-3-3M21 12l-3 3"/></svg>',_i='<svg viewBox="0 0 24 24"><circle cx="9" cy="12" r="7" fill="#ffd98a"/><circle cx="19" cy="12" r="3" fill="#9dffcf"/></svg>',qi='<svg viewBox="0 0 24 24"><circle cx="15" cy="12" r="7" fill="none" stroke="#ff6a55" stroke-width="2.5"/><circle cx="5" cy="12" r="3" fill="#ffd98a"/></svg>',ss='<svg viewBox="0 0 24 24" fill="none" stroke="#ffd98a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l6-6 6 6M5 18l6-6 6 6"/></svg>',ji=["","Catch the stardust streams","Watch out: black holes and meteor storms","Supernovae ahead: hide in the shadow of big bodies","Moons now orbit you and shield you","You shine! More moons follow you","A giant among stars","Your gravity swallows everything — even black holes","You light up the universe"],$t=[{name:"MAGNET",icon:"◎",color:"#4dd2ff"},{name:"SHIELD",icon:"⬢",color:"#7dffb0"},{name:"SURGE",icon:"»",color:"#ff9a4d"}];class Vi{constructor(t){l(this,"root",v("kh"));l(this,"sname",v("kh-sname"));l(this,"mass",v("kh-mass"));l(this,"fill",v("kh-fill"));l(this,"next",v("kh-next"));l(this,"dust",v("kh-dust"));l(this,"pause",document.createElement("button"));l(this,"lb",v("kh-lb"));l(this,"rank",v("kh-rank"));l(this,"banner",v("kh-banner"));l(this,"warn",v("kh-warn"));l(this,"tags",v(""));l(this,"arrows",v(""));l(this,"hand",v("kh-hand"));l(this,"tip",v("kh-tip"));l(this,"pointer",v("kh-pointer"));l(this,"toastEl",v("kh-toast"));l(this,"help",v("kh-help"));l(this,"targetEl",v("kh-target"));l(this,"target",0);l(this,"targetBeaten",!1);l(this,"powers",v("kh-powers"));l(this,"powerEls",[]);l(this,"toasts",[]);l(this,"toastT",0);l(this,"bannerT",0);l(this,"warnT",0);l(this,"warnKind","");l(this,"lastStage",-1);l(this,"lastLb","");l(this,"combos",[]);l(this,"tagEls",[]);l(this,"arrowEls",[]);l(this,"tutorial","done");l(this,"tutT",0);l(this,"isTouch",!1);l(this,"moved",0);l(this,"eatenAtStart",0);l(this,"hintT",0);l(this,"hintText","");l(this,"onHintDone",()=>{});const e=v("kh-top"),s=v("kh-stage"),i=v("kh-row");i.append(this.sname,this.mass);const o=v("kh-bar");o.append(this.fill),s.append(i,o,this.next);const a=v("kh-right"),r=v("kh-btns");this.pause.className="kh-pause",this.pause.setAttribute("aria-label","Pause"),this.pause.innerHTML='<svg width="16" height="16" viewBox="0 0 16 16"><rect x="3" y="2" width="3.5" height="12" rx="1" fill="#fff"/><rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="#fff"/></svg>',r.append(this.rank,this.dust,this.pause),a.append(r,this.lb),e.append(s,a),this.hand.innerHTML=Ui,this.pointer.append(document.createElement("i"));for(const c of $t){const h=v("kh-power");h.style.setProperty("--pc",c.color),h.innerHTML=`<b>${c.icon}</b><span>${c.name}</span><i></i>`,h.style.display="none",this.powerEls.push(h),this.powers.append(h)}this.help.textContent="Double-tap, hold and drag to boost",this.root.append(this.tags,this.arrows,this.pointer,this.hand,e,this.help,this.powers,this.targetEl,this.banner,this.warn,this.tip,this.toastEl),t.append(this.root),this.show(!1)}show(t){this.root.style.display=t?"":"none"}setTarget(t){this.target=t,this.targetBeaten=!1,this.targetEl.style.display=t>0?"block":"none"}toast(t){this.toasts.length<4&&this.toasts.push(t)}reset(){this.toasts=[],this.toastT=0,this.toastEl.classList.remove("on"),this.lastStage=-1,this.lastLb="",this.bannerT=0,this.warnT=0,this.banner.classList.remove("on"),this.warn.classList.remove("on");for(const t of this.combos)t.el.remove();this.combos=[]}stageUp(t){this.banner.innerHTML=`<div class="t1">${R[t].name.toUpperCase()}</div><div class="t2">${ji[t]??""}</div>`,this.banner.classList.add("on"),this.bannerT=3.2}announce(t,e=""){this.banner.innerHTML=`<div class="t1">${t}</div><div class="t2">${e}</div>`,this.banner.classList.add("on"),this.bannerT=2.6}warning(t,e,s,i=!1){this.warnKind=t,this.warn.textContent=e,this.warn.classList.add("on"),this.warn.classList.toggle("safe",i),this.warnT=s}combo(t,e,s){if(s<2)return;const i=v("kh-combo");i.textContent=`×${s}`,i.style.left=`${t}px`,i.style.top=`${e}px`,this.root.append(i),requestAnimationFrame(()=>{i.style.transform="translate(-50%, -160%)",i.style.opacity="0"}),this.combos.push({el:i,t:.7})}update(t,e,s,i,o){const a=e.player;a.stage!==this.lastStage&&(this.lastStage=a.stage,this.sname.textContent=R[a.stage].name,this.next.textContent=a.stage+1<R.length?`Next: ${R[a.stage+1].name}`:"Keep growing!"),this.mass.textContent=J(a.mass),this.fill.style.width=`${(Us(a.mass)*100).toFixed(1)}%`,this.dust.textContent=`✦ ${s}`;const r=e.leaderboard(),c=r.findIndex(g=>g.you);this.rank.textContent=`#${c+1}`;const h=matchMedia("(max-width: 560px), (max-height: 430px)").matches?3:5,d=Math.max(0,Math.min(r.length-h,c-Math.floor(h/2))),p=r.slice(d,d+h),m=p.map(g=>g.name+Math.round(Math.log(g.mass)*20)).join("|")+c;m!==this.lastLb&&(this.lastLb=m,this.lb.innerHTML='<div class="kh-lbt">GALAXY RANK</div>'+p.map((g,M)=>`<div class="kh-lbr${g.you?" you":""}${!g.you&&g.mass>a.mass*1.12?" big":""}"><b>#${d+M+1}</b><span>${g.name}</span><span>${J(g.mass)}</span></div>`).join("")),this.bannerT>0&&(this.bannerT-=t)<=0&&this.banner.classList.remove("on"),this.toastT-=t,this.toastT<=.35&&this.toastEl.classList.remove("on"),this.toastT<=0&&this.toasts.length&&(this.toastEl.textContent=this.toasts.shift(),this.toastEl.classList.add("on"),this.toastT=1.9),this.warnT>0&&(this.warnT-=t)<=0&&(this.warn.classList.remove("on"),this.warnKind="");const f=i.find(g=>g.kind==="nova");f&&this.warnKind==="nova"&&(this.warn.textContent=`SUPERNOVA IN ${f.value} — HIDE BEHIND SOMETHING BIG`),this.combos=this.combos.filter(g=>(g.t-=t,g.t<=0&&g.el.remove(),g.t>0));let b=0,z=0;const y=window.innerWidth,x=window.innerHeight;for(const g of i){if(g.kind==="titan"&&g.onScreen){const M=this.tagEls[b]??this.tags.appendChild(v("kh-tag"));this.tagEls[b++]=M;const k=e.titans[g.value??0];M.textContent=`${vt[g.value??0].name} · ${J(k.mass)}`,M.classList.toggle("big",k.mass>a.mass*1.12),M.style.color=M.style.borderColor=M.style.background="",M.style.left=`${g.x}px`,M.style.top=`${g.y-g.rPx*1.35-6}px`,M.style.display=""}if(g.onScreen&&(g.kind==="power"||g.kind==="gold")){const M=this.tagEls[b]??this.tags.appendChild(v("kh-tag"));this.tagEls[b++]=M;const k=g.kind==="gold"?"#ffd34d":$t[g.value??0].color;M.textContent=g.kind==="gold"?"✦ STARDUST":`${$t[g.value??0].icon} ${$t[g.value??0].name}`,M.classList.remove("big"),M.style.color=k,M.style.borderColor=k,M.style.background="rgba(8,10,24,.72)",M.style.left=`${g.x}px`,M.style.top=`${g.y-g.rPx*2.1-6}px`,M.style.display=""}if(!g.onScreen&&(g.kind==="titan"||g.kind==="nova"||g.kind==="gold"||g.kind==="power")){const M=this.arrowEls[z]??this.arrows.appendChild(v("kh-arrow"));M.firstChild||(M.innerHTML="<i></i><span></span>"),this.arrowEls[z++]=M;const k=34,$=y/2,N=x/2,U=Math.cos(g.angle),kt=Math.sin(g.angle),Nt=Math.min(($-k)/Math.max(1e-6,Math.abs(U)),(N-k-40)/Math.max(1e-6,Math.abs(kt)));M.style.left=`${$+U*Nt}px`,M.style.top=`${N+kt*Nt}px`;const Lt=g.kind==="nova"?"#ff7a4a":g.kind==="gold"?"#ffd34d":g.kind==="power"?$t[g.value??0].color:Yi(e,g,a.mass),zt=M.firstChild;zt.style.background=Lt,zt.style.transform=`rotate(${g.angle}rad)`,zt.style.filter=`drop-shadow(0 0 6px ${Lt})`;const Gt=M.lastChild;Gt.style.color=Lt,Gt.textContent=g.kind==="titan"?vt[g.value??0].name:g.kind==="nova"?`${g.value}`:g.kind==="power"?$t[g.value??0].name:"✦",M.style.display=""}}for(let g=b;g<this.tagEls.length;g++)this.tagEls[g].style.display="none";for(let g=z;g<this.arrowEls.length;g++)this.arrowEls[g].style.display="none";if(this.target>0){const g=a.mass>this.target;this.targetEl.textContent=g?`⚔ Beat ${J(this.target)} ✔`:`⚔ Beat ${J(this.target)} · ${Math.min(99,Math.floor(a.mass/this.target*100))}%`,this.targetEl.classList.toggle("won",g),g&&!this.targetBeaten&&(this.targetBeaten=!0,this.announce("CHALLENGE BEATEN",`You passed ${J(this.target)}. Keep growing!`))}const w=this.isTouch&&this.tutorial==="done"&&!a.boosting;this.help.style.display=this.isTouch?"":"none",this.help.classList.toggle("off",!w),[a.magnetT/(60*9),a.shieldT/(60*7),a.surgeT/(60*6)].forEach((g,M)=>{const k=this.powerEls[M];k.style.display=g>0?"":"none",g>0&&(k.lastChild.style.width=`${(g*100).toFixed(1)}%`)}),this.updateTutorial(t,e,o)}hint(t,e=9){this.hintText=t,this.hintT=e}startTutorial(t){this.tutorial="move",this.tutT=0,this.moved=0,this.eatenAtStart=t.stats.eaten}setTip(t,e){const s=`${t}<span>${e}</span>`;this.tip.innerHTML!==s&&(this.tip.innerHTML=s),this.tip.classList.add("on")}updateTutorial(t,e,s){const i=e.player;this.tutT+=t;const o=()=>this.hand.classList.remove("on");if(this.tutorial==="done"){this.hintT>0&&!i.boosting?(this.hintT-=t,this.setTip(ss,this.hintText)):(this.hintT>0&&i.boosting&&this.onHintDone(),this.hintT=0,this.tip.classList.remove("on")),this.pointer.classList.remove("on"),o();return}if(this.tutorial==="move"){this.moved+=Math.hypot(i.x-i.px,i.y-i.py);const a=this.tutT*1.6;this.hand.style.left=`${s.x+60+Math.cos(a)*34}px`,this.hand.style.top=`${s.y+30+Math.sin(a)*22}px`,this.hand.classList.add("on"),this.setTip(Wi,this.isTouch?"Drag anywhere to fly":"Move the mouse to fly"),this.moved>i.r*14&&(this.tutorial="eat",this.tutT=0,o());return}if(this.tutorial==="eat"){this.setTip(_i,"Swallow anything smaller");let a=null,r=1/0;for(const c of e.bodies){if(c.role!=="drift"||c.mass*1.12>i.mass)continue;const h=Math.hypot(c.x-i.x,c.y-i.y);h<r&&(r=h,a=c)}if(a&&r<e.view*1.4){const c=s.x+(a.x-i.x)/e.view*Math.min(window.innerWidth,window.innerHeight)*.5,h=s.y+(a.y-i.y)/e.view*Math.min(window.innerWidth,window.innerHeight)*.5;this.pointer.style.left=`${c}px`,this.pointer.style.top=`${h}px`}else this.pointer.classList.remove("on");e.stats.eaten-this.eatenAtStart>=3&&(this.tutorial="avoid",this.tutT=0,this.pointer.classList.remove("on"));return}if(this.tutorial==="avoid"){this.setTip(qi,"Red rings are bigger — stay away!"),this.tutT>4.5&&(this.tutorial="boost",this.tutT=0);return}this.tutorial==="boost"&&(this.setTip(ss,this.isTouch?"Boost: double-tap, hold and drag":"Boost: hold click or Space (costs a little mass)"),(this.tutT>(this.isTouch?9:5)||i.boosting&&this.tutT>1.2)&&(this.tutorial="done",this.tip.classList.remove("on")))}}function Yi(n,t,e){const s=n.titans[t.value??0];return s&&s.mass>e*1.12?"#ff6a55":"#ffd27a"}be(`
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
/* Codex detail: fixed between the scrolling grid and Back, so the fact is always in view. */
#ui .ks-detail { flex: none; display: flex; align-items: center; gap: 14px; margin: 4px 18px 0; padding: 12px 14px; min-height: 84px; box-sizing: border-box; border-radius: 16px;
  background: linear-gradient(135deg, rgba(255,210,120,.12), rgba(140,110,255,.10)); border: 1px solid rgba(255,210,120,.28); box-shadow: 0 -8px 20px rgba(8,6,24,.55); }
#ui .ks-detail .pic { flex: none; width: 66px; height: 66px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,.06), transparent 70%); }
#ui .ks-detail .pic.locked { filter: brightness(0) invert(1); opacity: .2; }
#ui .ks-detail .tx { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
#ui .ks-detail .grp { font-size: 10.5px; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; color: rgba(255,210,140,.75); }
#ui .ks-detail .nm { font-size: 17px; font-weight: 900; color: #fff; }
#ui .ks-detail .fx { font-size: 13px; line-height: 1.4; color: rgba(240,232,255,.85); }
#ui .ks-detail.empty .nm { font-size: 14px; font-weight: 700; color: rgba(240,232,255,.75); }
#ui .ks-centry.sel { border-color: rgba(255,210,120,.85); background: rgba(255,210,120,.1); box-shadow: 0 0 16px rgba(255,190,90,.25); }
@media (max-height: 480px) {
  #ui .ks-detail { min-height: 62px; padding: 8px 12px; gap: 10px; }
  #ui .ks-detail .pic { width: 46px; height: 46px; }
  #ui .ks-detail .nm { font-size: 14.5px; }
  #ui .ks-detail .fx { font-size: 12px; }
}
/* Settings */
#ui .ks-set { display: flex; align-items: center; gap: 10px; padding: 10px 2px; border-bottom: 1px solid rgba(255,255,255,.06); }
#ui .ks-set label { flex: 1; font-weight: 700; font-size: 14.5px; }
#ui .ks-seg { display: flex; border-radius: 12px; overflow: hidden; border: 1px solid rgba(200,180,255,.25); }
#ui .ks-seg button { min-height: 36px; min-width: 52px; padding: 6px 10px; border: 0; background: rgba(30,24,70,.6); color: #d8d0f0; font-weight: 700; font-size: 13px; }
#ui .ks-seg button.on { background: linear-gradient(180deg, #ffe7a6, #ffb547); color: #2a1505; }
#ui .ks-gdesc { padding: 2px 2px 10px; font-size: 12px; color: rgba(225,215,255,.65); border-bottom: 1px solid rgba(255,255,255,.06); grid-column: 1 / -1; }
#ui .ks-credit { grid-column: 1 / -1; padding: 12px 2px 2px; font-size: 11px; color: rgba(225,215,255,.5); line-height: 1.4; }
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
`);const Xi={rival:"Swallowed by a bigger rival",titan:"Devoured by a Titan",hole:"Lost beyond the event horizon",fizzle:"Your light burned out"};class Ki{constructor(t,e,s){l(this,"layer",v("ks-layer"));l(this,"current",null);l(this,"backTo","title");l(this,"offerTimer",0);this.save=e,this.hooks=s,t.append(this.layer),this.layer.style.display="none",window.addEventListener("keydown",i=>{!this.current||i.defaultPrevented||(i.code==="KeyP"&&this.current==="pause"&&this.hooks.resume(),i.code==="Escape"&&(this.current==="pause"?this.hooks.resume():this.current!=="title"&&this.current!=="results"&&this.current!=="offer"&&this.back()),(i.code==="Enter"||i.code==="Space")&&(this.current==="title"||this.current==="results")&&(i.preventDefault(),this.hooks.play()))})}hide(){this.current=null,this.layer.style.display="none",this.layer.replaceChildren()}mount(t,...e){this.current=t,this.layer.style.display="",this.layer.replaceChildren(...e)}btn(t,e,s){const i=document.createElement("button");return i.className=`ks-btn ${e}`,i.innerHTML=t,i.addEventListener("click",o=>{o.stopPropagation(),this.hooks.click(),s()}),i}panel(t,e,s,i){const o=v("ks-panel"),a=v("ks-head");a.innerHTML=`<h2>${t}</h2>${i?`<span class="ks-pill">${i}</span>`:""}`;const r=v("ks-foot");return r.append(...s),e.classList.add("ks-body"),o.append(a,e,r),o}back(){this.backTo==="pause"?this.pause():this.hooks.menu()}wallet(){return`✦ ${this.save.stardust}`}title(){this.backTo="title";const t=v("ks-title"),e=this.save.best.mass?`Best: ${R[this.save.best.stage??0].name} · ${J(this.save.best.mass)}`:"",s=this.save.missions.filter(b=>!b.done).length,i=this.save.dailyUsed!==At();t.innerHTML='<div class="ks-logo">KINDLESTAR</div><div class="ks-tagline">From a spark to a galaxy</div>';const o=this.btn("PLAY","primary ks-play",()=>this.hooks.play()),a=v("ks-best");a.textContent=e;const r=v("ks-menu"),c=(b,z,y,x="")=>{const w=document.createElement("button");return w.className="ks-mbtn",w.innerHTML=`<span class="ic">${b}</span>${z}${x?`<span class="ks-badge">${x}</span>`:""}`,w.addEventListener("click",A=>{A.stopPropagation(),this.hooks.click(),y()}),w},h=Ce.some(b=>Yt(this.save,b.id)<b.costs.length&&this.save.stardust>=b.costs[Yt(this.save,b.id)]);r.append(c("⬆","Upgrades",()=>this.upgrades(),h?"!":""),c("◐","Skins",()=>this.skins()),c("✧","Codex",()=>this.codex(),""),c("◎","Missions",()=>this.missions(),i?"×2":s?String(s):""),c("♛","Records",()=>this.records()),c("⚙","Settings",()=>this.settings()));const d=this.btn(`☀ Daily Galaxy${this.save.daily.date===At()&&this.save.daily.best?` · best ${J(this.save.daily.best)}`:""}`,"ks-dailybtn",()=>this.hooks.daily()),p=this.hooks.challenge();if(p){const b=v("ks-chal");b.innerHTML=`<div class="t">⚔ A friend challenges you</div><div class="d">They reached <b>${R[p.stage]?.name??""} · ${J(p.mass)}</b> in this galaxy. Can you grow bigger?</div>`,b.append(this.btn("Accept challenge","primary",()=>this.hooks.acceptChallenge())),t.append(b)}t.append(o,d,a,r);const m=v("ks-wallet");m.textContent=this.wallet();const f=v("ks-hint");f.textContent="Swallow smaller · Avoid red rings · Grow forever",this.mount("title",t,m,f)}pause(){this.backTo="pause";const t=v(""),s=this.hooks.isTouch()?[["☝","Drag anywhere","Fly. Your body follows your finger."],["»","Double-tap, hold and drag","Boost in any direction (sheds a little mass)."],["✌","Second finger","Also boosts while you steer."]]:[["🖱","Move the mouse","Fly towards the cursor (closer = slower)."],["»","Hold click or Space","Boost (sheds a little mass). WASD / arrows also steer."],["⏸","Esc or P","Pause and resume."]];t.innerHTML=`<div class="ks-howto">${s.map(([o,a,r])=>`<div class="ks-how"><b>${o}</b><span><strong>${a}</strong>${r}</span></div>`).join("")}</div><div class="ks-sub" style="text-align:center;margin-top:10px">Swallow anything smaller · Red rings are bigger: stay away · Hide from supernovae behind big bodies</div>`;const i=this.panel("PAUSED",t,[this.btn("Resume","primary",()=>this.hooks.resume()),this.btn("Restart","",()=>this.hooks.restart()),this.btn("Settings","",()=>this.settings()),this.btn("Menu","",()=>this.hooks.menu())]);this.mount("pause",v("ks-dim"),i)}results(t){const e=v(""),s=t.cause==="titan"&&t.by?`Devoured by the Titan ${t.by}`:Xi[t.cause],i=Math.floor(t.seconds/60),o=String(t.seconds%60).padStart(2,"0");e.innerHTML=`
      <div class="ks-res-top">
        <div class="ks-res-cause">${s}</div>
        <div class="ks-res-stage">${R[t.peakStage].name.toUpperCase()}</div>
        <div class="ks-res-mass">Peak mass ${J(t.peakMass)}${t.continues?` · continued ×${t.continues}`:""}</div>
        ${t.newBest?'<div class="ks-newbest">NEW BEST</div>':""}
        ${t.mode==="daily"?`<div class="ks-modetag">☀ DAILY GALAXY${t.dailyBest?" · TODAY'S BEST":""}</div>`:""}
        ${t.mode==="challenge"?`<div class="ks-modetag ${t.peakMass>t.target?"win":"lose"}">${t.peakMass>t.target?`⚔ CHALLENGE WON — you beat ${J(t.target)}`:`⚔ ${J(t.target)} still leads. Try again!`}</div>`:""}
      </div>
      <div class="ks-stats">
        <div class="ks-stat"><b>${i}:${o}</b><span>TIME</span></div>
        <div class="ks-stat"><b>${t.eaten}</b><span>SWALLOWED</span></div>
        <div class="ks-stat"><b>×${t.combo}</b><span>BEST COMBO</span></div>
      </div>`;const a=v("");if([...t.payout.lines.map(d=>({label:d.label,value:`+${d.value}`,total:!1})),{label:"Stardust earned",value:`✦ ${t.payout.total}`,total:!0}].forEach((d,p)=>{const m=v(`ks-pay${d.total?" total":""}`);m.innerHTML=`<span>${d.label}</span><b>${d.value}</b>`,a.append(m),setTimeout(()=>m.classList.add("on"),250+p*140)}),e.append(a),t.found>0){const d=v("ks-disc");d.textContent=`✧ ${t.found} new codex ${t.found===1?"entry":"entries"} discovered`,e.append(d)}const c=this.btn("⚔ Challenge a friend","ks-share",()=>this.hooks.share(t.peakMass,t.peakStage)),h=this.panel("RUN COMPLETE",e,[this.btn("Play again","primary",()=>t.mode==="normal"?this.hooks.play():t.mode==="daily"?this.hooks.daily():this.hooks.acceptChallenge()),c,this.btn("Upgrades","",()=>this.upgrades()),this.btn("Menu","",()=>this.hooks.menu())],this.wallet());this.backTo="title",this.mount("results",v("ks-dim"),h)}upgrades(){const t=v("");t.innerHTML='<div class="ks-sub">Small, permanent boosts. Skill still decides every run.</div>';const e=v("ks-list two");for(const s of Ce){const i=Yt(this.save,s.id),o=i>=s.costs.length,a=o?0:s.costs[i],r=v("ks-card");r.innerHTML=`<div class="ic">${s.icon}</div><div class="tx"><div class="nm">${s.name}</div><div class="ds">${o?s.desc(i):s.desc(i+1)}</div><div class="ks-pips">${s.costs.map((h,d)=>`<i class="${d<i?"on":""}"></i>`).join("")}</div></div>`;const c=this.btn(o?"MAX":`✦ ${a}`,o?"":this.save.stardust>=a?"primary":"",()=>{this.hooks.buyUpgrade(s.id)&&this.upgrades()});(o||this.save.stardust<a)&&(c.disabled=!0),r.append(c),e.append(r)}t.append(e),this.mount("upgrades",v("ks-dim"),this.panel("UPGRADES",t,[this.btn("Back","",()=>this.back())],this.wallet()))}skins(){const t=v("");t.innerHTML='<div class="ks-sub">The colour of your light: aura, trail and glow.</div>';const e=v("ks-skins");for(const s of te){const i=this.save.owned.includes(s.id),o=this.save.skin===s.id,a=v(`ks-skin${o?" sel":""}`),r=v("ks-orb");r.style.background=Qi(s),r.style.boxShadow=`0 0 22px ${Kt(s.aura)}, 0 0 44px ${Kt(s.aura,.4)}`,s.prism&&(r.style.animation="ks-prism 4s linear infinite");const c=v("nm");c.textContent=s.name;const h=o?this.btn("Equipped","",()=>{}):i?this.btn("Equip","",()=>{this.hooks.equipSkin(s.id),this.skins()}):this.btn(`✦ ${s.cost}`,this.save.stardust>=s.cost?"primary":"",()=>{this.hooks.buySkin(s.id)&&this.skins()});(o||!i&&this.save.stardust<s.cost)&&(h.disabled=!0),a.append(r,c,h),e.append(a)}t.append(e),this.mount("skins",v("ks-dim"),this.panel("SKINS",t,[this.btn("Back","",()=>this.back())],this.wallet()))}codex(){const t=v(""),e=new Set(this.save.codex),s=Tt.filter(A=>e.has(A.code)).length;t.innerHTML=`<div class="ks-sub">Everything you have swallowed, survived or met. ${s} / ${Tt.length} discovered.</div>`;const i=v("ks-detail empty"),o=document.createElement("img");o.className="pic",o.alt="";const a=v("tx"),r=v("grp"),c=v("nm"),h=v("fx");a.append(r,c,h),i.append(o,a),c.textContent="Tap any entry to read about it",o.style.visibility="hidden";let d=null;const p=(A,g)=>{const M=Tt[A],k=e.has(M.code);d?.classList.remove("sel"),d=g,g.classList.add("sel"),i.classList.remove("empty"),o.style.visibility="",o.src=this.hooks.thumbnail(A),o.classList.toggle("locked",!k),r.textContent=M.group,c.textContent=k?M.name:"Not discovered yet",h.textContent=k?M.fact:"Swallow it, survive it or meet it in a run to unlock this entry."};let m=-1,f=null,b="",z=null;const y=[],x=()=>{for(let A=0;A<4&&y.length;A++){const[g,M]=y.shift();if(!g.isConnected)return;g.src=this.hooks.thumbnail(M)}y.length&&requestAnimationFrame(x)};requestAnimationFrame(x),Tt.forEach((A,g)=>{if(A.group!==b){b=A.group;const U=v("ks-cgroup");U.textContent=b,z=v("ks-codex"),t.append(U,z)}const M=e.has(A.code),k=document.createElement("button");k.className=`ks-centry${M?"":" locked"}`;const $=document.createElement("img");$.alt="",$.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",y.push([$,g]);const N=document.createElement("span");N.textContent=M?A.name:"???",k.append($,N),k.addEventListener("click",()=>{this.hooks.click(),p(g,k)}),M&&m<0&&(m=g,f=k),z.append(k)});const w=this.panel("CODEX",t,[this.btn("Back","",()=>this.back())],`${s}/${Tt.length}`);w.insertBefore(i,w.lastChild),this.mount("codex",v("ks-dim"),w),f&&p(m,f)}missions(){const t=v(""),e=this.save.dailyUsed!==At();t.innerHTML=`<div class="ks-sub">${e?"✦ Daily spark ready: your next run pays double stardust.":"Daily spark used. It recharges tomorrow."}</div>`;const s=v("ks-list");for(const o of this.save.missions){const a=ke.find(h=>h.id===o.id),r=v("ks-card"),c=Math.min(100,o.progress/o.target*100);r.innerHTML=`<div class="ic">${o.done?"✔":"◎"}</div><div class="tx"><div class="nm">${fs(o)}</div><div class="ds">${a?.total?`${Math.min(o.progress,o.target)} / ${o.target}`:"In a single run"}</div><div class="ks-prog"><i style="width:${c}%"></i></div></div><span class="ks-pill">✦ ${o.reward}</span>`,s.append(r)}t.append(s);const i=v("ks-sub");i.style.marginTop="12px",i.textContent=`Missions completed: ${this.save.missionsDone}. New ones get harder — and pay more.`,t.append(i),this.mount("missions",v("ks-dim"),this.panel("MISSIONS",t,[this.btn("Back","",()=>this.back())],this.wallet()))}note(t){const e=v("ks-toast2");e.textContent=t,this.layer.parentElement?.append(e),setTimeout(()=>e.remove(),3500)}continueOffer(t){const e=v(""),s=t.have>=t.cost,i=v("ks-cont");i.innerHTML=`<div class="ks-clock"><b>${t.secs}</b></div>
      <div class="lead">Continue as a <b>${R[t.stage].name}</b> (${J(t.mass)}) with 3 s of protection</div>
      <div class="have${s?"":" short"}">${s?`You have ✦ ${t.have}`:`You have ✦ ${t.have}, you need ✦ ${t.cost}. Earn more by playing!`}</div>`,e.append(i);let o=!1;const a=f=>{o||(o=!0,clearInterval(this.offerTimer),window.removeEventListener("keydown",r,!0),f?t.onContinue():t.onDecline())},r=f=>{f.code==="Enter"&&s?(f.preventDefault(),f.stopPropagation(),a(!0)):f.code==="Escape"&&(f.preventDefault(),f.stopPropagation(),a(!1))};window.addEventListener("keydown",r,!0);const c=this.btn(`Continue ✦ ${t.cost}`,`wide${s?" primary":""}`,()=>a(!0));s||(c.disabled=!0);const h=this.btn("No thanks","wide",()=>a(!1));this.mount("offer",v("ks-dim"),this.panel("KEEP GOING?",e,[c,h],`✦ ${t.have}`));const d=i.querySelector(".ks-clock"),p=d.querySelector("b"),m=performance.now();clearInterval(this.offerTimer),this.offerTimer=window.setInterval(()=>{const f=t.secs-(performance.now()-m)/1e3;d.style.setProperty("--p",String(Math.max(0,f/t.secs))),p.textContent=String(Math.max(0,Math.ceil(f))),f<=0&&a(!1)},50)}records(){const t=this.save,e=v(""),s=d=>`${Math.floor(d/60)}:${String(Math.floor(d%60)).padStart(2,"0")}`,i=t.history,o=i.reduce((d,p)=>Math.max(d,p.eaten),t.best.eaten??0);let a=-1,r=-1;for(const d of i)d.mass>r&&([r,a]=[d.mass,d.at]);const c=(d,p)=>`<div class="ks-stat"><b>${d}</b><span>${p}</span></div>`;e.innerHTML=`
      <div class="ks-cgroup" style="margin-top:2px">Personal bests</div>
      <div class="ks-recgrid">
        ${c(t.best.mass?J(t.best.mass):"-",R[t.best.stage??0].name.toUpperCase())}
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
      <div class="ks-cgroup">Recent runs</div>`;const h=v("ks-runs");i.length?h.innerHTML='<div class="ks-run head"><span>WHEN</span><span>REACHED</span><span>TIME</span><span>EATEN</span><span>CONT.</span></div>'+i.map(d=>{const p=new Date(d.at),f=`${new Date().toDateString()===p.toDateString()?"Today":p.toLocaleDateString(void 0,{day:"numeric",month:"short"})} ${p.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"})}`;return`<div class="ks-run${d.at===a?" best":""}"><span class="when">${f}</span><span><b>${R[d.stage]?.name??""}</b> ${J(d.mass)}</span><span>${s(d.seconds)}</span><span>${d.eaten}</span><span>${d.continues?`×${d.continues}`:"-"}</span></div>`}).join(""):h.innerHTML='<div class="ks-sub">No runs yet. Play one!</div>',e.append(h),this.mount("records",v("ks-dim"),this.panel("RECORDS",e,[this.btn("Back","",()=>this.back())]))}settings(){const t=this.save.settings,e=v("ks-settings"),s=(d,p)=>{const m=v("ks-set"),f=document.createElement("label");f.textContent=d,m.append(f,p),e.append(m)},i=(d,p,m)=>{const f=v("ks-seg"),b=()=>f.replaceChildren(...d.map(([z,y])=>{const x=document.createElement("button");return x.textContent=y,x.className=p()===z?"on":"",x.addEventListener("click",()=>{this.hooks.click(),m(z),this.hooks.setting(),b()}),x}));return b(),f};s("Music",i([[!0,"On"],[!1,"Off"]],()=>t.music,d=>t.music=d)),s("Sound effects",i([[!0,"On"],[!1,"Off"]],()=>t.sfx,d=>t.sfx=d));const o=document.createElement("input");o.type="range",o.min="0",o.max="100",o.value=String(Math.round(t.volume*100)),o.addEventListener("input",()=>{t.volume=+o.value/100,this.hooks.setting()}),s("Volume",o);const a=v("ks-gdesc"),r={high:"High: glowing bloom, black-hole lensing, shock ripples, film grain, sharpest picture.",medium:"Medium: full detail, no glow effects. Smooth on most phones.",low:"Low: simpler, softer picture for the fastest play on older devices."},c=()=>{const d=this.hooks.graphicsNow();a.textContent=t.graphics==="auto"?`Auto picks the best for this device. Now using: ${d.toUpperCase()}. ${r[d]}`:r[t.graphics]};s("Graphics",i([["auto","Auto"],["high","High"],["medium","Med"],["low","Low"]],()=>t.graphics,d=>{t.graphics=d,setTimeout(c,0)})),e.append(a),c(),s("Reduce motion",i([[!1,"Off"],[!0,"On"]],()=>t.reduceMotion,d=>t.reduceMotion=d)),"vibrate"in navigator&&s("Vibration",i([[!0,"On"],[!1,"Off"]],()=>t.vibrate,d=>t.vibrate=d)),s("Touch stick",i([["float","Floating"],["fixed","Fixed"]],()=>t.stick,d=>t.stick=d));const h=v("ks-credit");h.textContent="Planet, star and Milky Way maps: Solar System Scope (solarsystemscope.com), CC BY 4.0.",e.append(h),this.mount("settings",v("ks-dim"),this.panel("SETTINGS",e,[this.btn("Back","",()=>this.back())]))}}const Kt=(n,t=1)=>`rgba(${Math.round(n[0]*255)},${Math.round(n[1]*255)},${Math.round(n[2]*255)},${t})`;function Qi(n){return n.prism?"conic-gradient(from 0deg, #ff6b6b, #ffd36b, #6bff9e, #6bd6ff, #b36bff, #ff6b6b)":`radial-gradient(circle at 38% 34%, ${Kt(n.core)} 0 18%, ${Kt(n.aura)} 55%, ${Kt(n.aura,.25)} 72%, transparent 74%)`}be("@keyframes ks-prism { to { filter: hue-rotate(360deg); } }");const V=ri(),Ji=document.getElementById("game"),se=document.getElementById("ui"),P=Zt(V.storage);P.missions.length<3&&we(P);const ht=()=>Rs(V.storage,P),D=new Hi(Ji),E=new Ds,K=new Fs(se),_=new Vi(se);let St="normal",st=null;const Zi=()=>js(`kindlestar:${At()}`);let B="title",L=new Ie(1,De(P),P.codex),nt=He(),Oe={stats:L.stats,rivals:0,captured:0},Ft=2;function He(){const n=[800,5e3,9e3,4e4,9e4];return new Ie(Math.random()*1e9>>>0,{...De(P),secondWind:!1,startMass:n[Math.floor(Math.random()*n.length)]})}function ta(){const n=navigator.deviceMemory??8;return K.isTouch||n<=4?1:2}function Ht(){const n=P.settings;E.musicOn=n.music,E.sfxOn=n.sfx,E.volume=n.volume,E.muted=V.isMuted(),E.apply();const t=n.graphics==="high"?2:n.graphics==="medium"?1:n.graphics==="low"?0:ta();t!==D.tier&&(Ft=t,D.setTier(t)),Ft=t,D.reduceMotion=n.reduceMotion,K.stickMode=n.stick;const e=Math.max(0,te.findIndex(s=>s.id===P.skin));D.skin=te[e],D.skinIndex=e}function gs(){const n=window.innerWidth,t=window.innerHeight;D.resize(n,t),se.style.setProperty("--ui-z",String(Bs(n,t)))}window.addEventListener("resize",gs);gs();Ht();const lt=new Ki(se,P,{play:()=>Ot(),daily:()=>Ot(Zi(),"daily"),isTouch:()=>K.isTouch,graphicsNow:()=>["low","medium","high"][D.tier],acceptChallenge:()=>{st&&Ot(st.seed,"challenge")},challenge:()=>st?{mass:st.mass,stage:st.stage}:null,share:(n,t)=>void ea(n,t),resume:()=>sa(),restart:()=>Ot(St==="normal"?void 0:L.seed,St),menu:()=>B==="title"?lt.title():vs(),click:()=>E.click(),buyUpgrade:n=>{const t=Ys(P,n);return E.jingle(t?"buy":"deny"),t&&ht(),t},buySkin:n=>{const t=te.find(e=>e.id===n);return!t||P.owned.includes(n)||P.stardust<t.cost?(E.jingle("deny"),!1):(P.stardust-=t.cost,P.owned.push(n),P.skin=n,E.jingle("buy"),Ht(),ht(),!0)},equipSkin:n=>{P.owned.includes(n)&&(P.skin=n,Ht(),ht())},setting:()=>{Ht(),ht()},thumbnail:n=>D.thumbnail(Tt[n]),save:ht});async function ea(n,t){const e=V.inviteLink({cs:String(L.seed>>>0),cm:String(Math.round(n)),cst:String(t)}),s=`I grew into a ${R[t].name} (${Math.round(n).toLocaleString()}) in Kindlestar. Can you beat me in the same galaxy?`;try{const i=navigator;if(K.isTouch&&i.share){await i.share({title:"Kindlestar challenge",text:s,url:e});return}await navigator.clipboard.writeText(`${s} ${e}`),lt.note("Challenge link copied! Send it to a friend.")}catch{lt.note(e)}}function Ot(n=Math.random()*2**31>>>0,t="normal"){St=t,E.unlock();const e=De(P);L=new Ie(n,e,P.codex),Oe={stats:L.stats,rivals:0,captured:0},D.reset(L),_.reset(),_.setTarget(t==="challenge"&&st?st.mass:0),_.isTouch=K.isTouch,P.tutorialDone?_.tutorial="done":_.startTutorial(L),E.setStage(L.player.stage),lt.hide(),_.show(!0),B="play",jt=-1,K.setActive(!0),E.paused=!1,E.apply(),Me.reset(),V.gameplayStart()}function Re(){B==="play"&&(B="paused",K.setActive(!1),E.paused=!0,E.apply(),V.gameplayStop(),lt.pause())}function sa(){B==="paused"&&(lt.hide(),B="play",K.setActive(!0),E.paused=!1,E.apply(),Me.reset(),V.gameplayStart())}function vs(){B="title",K.setActive(!1),_.show(!1),E.paused=!1,E.apply(),V.gameplayStop(),nt=He(),D.reset(nt),E.setStage(0),lt.title()}function ia(){if(L.stats.continues>=Js){is();return}B="offer",V.gameplayStop();const n=Zs(L.stats.peakStage,L.stats.continues);lt.continueOffer({cost:n,have:P.stardust,stage:L.player.stage,mass:L.player.mass,secs:8,onContinue:()=>{B!=="offer"||P.stardust<n||(P.stardust-=n,ht(),E.jingle("buy"),L.revive(),D.onEvents(L,L.events),E.event(L.events[0]),lt.hide(),B="play",K.setActive(!0),Me.reset(),V.gameplayStart())},onDecline:()=>{B==="offer"&&is()}})}function is(){B="results",K.setActive(!1),_.show(!1),V.gameplayStop();const n=P.best.mass??0;P.tutorialDone=!0;const t=Qs(P,Oe,L.found,void 0,L.cause??"");we(P),ht();const e=L.stats.peakMass>n&&n>0;let s=!1;St==="daily"&&(P.daily.date!==At()&&(P.daily={date:At(),best:0,stage:0}),L.stats.peakMass>P.daily.best&&(P.daily.best=L.stats.peakMass,P.daily.stage=L.stats.peakStage,s=!0),ht()),St==="challenge"&&st&&L.stats.peakMass>st.mass&&(st=null),e&&E.jingle("best"),lt.results({cause:L.cause??"fizzle",by:L.causeBy,peakMass:L.stats.peakMass,peakStage:L.stats.peakStage,seconds:Math.floor(L.stats.ticks/60),eaten:L.stats.eaten,titans:L.stats.titansEaten,combo:L.stats.bestCombo,newBest:e,payout:t,found:L.found.length,continues:L.stats.continues,mode:St,target:St==="challenge"?st?.mass??L.stats.peakMass-1:0,dailyBest:s})}K.onPause=()=>{B==="play"&&Re()};K.onFirst=()=>{E.unlock(),E.apply()};se.addEventListener("pointerdown",()=>E.unlock());for(const n of["touchend","click"])window.addEventListener(n,()=>E.unlock(),{passive:!0});_.onHintDone=()=>{P.boostLearned=!0,ht()};_.pause.addEventListener("click",n=>{n.stopPropagation(),E.click(),Re()});function _t(n){if(!(!P.settings.vibrate||!K.isTouch))try{navigator.vibrate?.(n)}catch{}}function aa(n){const t=L.player;for(const e of n)switch(E.event(e),e.t==="stage"?_t([30,60,40]):e.t==="hit"?_t(e.by==="nova"?70:35):e.t==="death"?_t([60,40,120]):e.t==="titanEaten"||e.t==="holeEaten"?_t([40,40,40]):e.t==="collect"&&_t(15),e.t){case"stage":_.stageUp(e.stage),E.setStage(e.stage);break;case"novaWarn":_.warning("nova","SUPERNOVA — HIDE BEHIND SOMETHING BIG",4.6);break;case"novaSafe":_.warning("safe","SAFE IN THE SHADOW!",1.6,!0);break;case"stormWarn":_.warning("storm","METEOR STORM INCOMING",3);break;case"titan":{const i=L.titans[e.idx].mass>t.mass*1.12;_.warning("titan",i?`TITAN ${vt[e.idx].name.toUpperCase()} IS HUNTING`:`TITAN ${vt[e.idx].name.toUpperCase()} — SWALLOW IT!`,3,!i);break}case"titanEaten":_.announce("TITAN DEVOURED",`${vt[e.idx].name} is no more`);break;case"secondWind":_.announce("SECOND WIND","One more chance");break;case"discover":{const s=Tt.find(i=>i.code===e.code);s&&_.toast(`✧ New in codex: ${s.name}`);break}case"eat":e.who==="player"&&e.combo>=2&&_.combo(D.playerScreen.x,D.playerScreen.y-D.playerScreen.r-10,e.combo);break}}function oa(){B==="play"?(L.step(K.sample(D.playerScreen)),L.events.length&&(si(Oe,L.events),D.onEvents(L,L.events),aa(L.events),L.over&&(B="dying",K.setActive(!1)))):B==="title"&&(nt.step(Ni(nt,.85)),D.onEvents(nt,nt.events),(nt.over||nt.tick>60*60*3)&&(nt=He(),D.reset(nt)))}const Me=new Gi(oa);let as=performance.now(),os=!0,de=0,Se=0,jt=-1;function xs(n){const t=Math.min(.1,Math.max(0,(n-as)/1e3));as=n;const s=B==="play"||B==="title"?Me.advance(t):1,i=B==="title"?nt:L;if(D.frame(i,s,B==="paused"?0:t,B==="title"),B==="play"||B==="dying"){_.update(t,L,L.stats.gold,D.marks,D.playerScreen);const o=L.player;let a=0,r=0;for(const c of L.bodies){const h=Math.hypot(c.x-o.x,c.y-o.y);c.role==="hole"?a=Math.max(a,1-(h-c.r*3)/(c.r*10)):(c.role==="rival"||c.role==="titan")&&c.mass>o.mass*1.12&&h<L.view*1.2&&(r=Math.max(r,1-h/(L.view*1.2)))}L.novas.some(c=>c.warn>0)&&(r=Math.max(r,.8)),E.update(o.boosting&&B==="play",Math.max(0,Math.min(1,a)),r),o.boosting&&K.isTouch&&!P.boostLearned&&(P.boostLearned=!0,ht())}else E.update(!1,0,0);if(B==="dying"&&(jt<0&&(jt=n),n-jt>1500&&(jt=-1,ia())),document.visibilityState==="visible"&&B!=="paused"&&(de+=t,Se++,de>2)){const o=Se/de;o<48&&D.resScale>.56?D.setResScale(D.resScale-.15):o<40&&P.settings.graphics==="auto"&&Ft>0?(Ft=Ft-1,D.setTier(Ft),D.setResScale(.85)):o>57&&D.resScale<1&&D.setResScale(D.resScale+.1),de=0,Se=0}if(os){os=!1,V.loadingStop(),setTimeout(()=>D.maps.preloadAll(),1200);const o=V.inviteParams();o&&Number.isFinite(+o.cs)&&+o.cm>0&&(st={seed:+o.cs>>>0,mass:+o.cm,stage:Math.max(0,Math.min(8,Math.floor(+o.cst||0)))}),st?Ot(st.seed,"challenge"):P.tutorialDone?vs():Ot()}requestAnimationFrame(xs)}document.addEventListener("visibilitychange",()=>{document.hidden?(B==="play"&&Re(),E.paused=!0,E.apply()):B!=="paused"&&(E.paused=!1,E.apply())});V.onMuteChange(n=>{E.muted=n,E.apply()});V.onStorageSwitch(()=>{Object.assign(P,Zt(V.storage)),P.missions.length<3&&we(P),Ht(),B==="title"&&lt.title()});V.init().finally(()=>{V.loadingStart(),Object.assign(P,Zt(V.storage)),P.missions.length<3&&we(P),Ht(),requestAnimationFrame(xs)});
