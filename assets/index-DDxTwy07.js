(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const tp="modulepreload",ep=function(r){return"/cake/"+r},ah={},ip=function(t,e,i){let n=Promise.resolve();if(e&&e.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));n=a(e.map(c=>{if(c=ep(c),c in ah)return;ah[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":tp,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return n.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="179",np=0,oh=1,rp=2,rf=1,sp=2,qi=3,Sn=0,Je=1,Ke=2,ji=0,Ar=1,Le=2,lh=3,ch=4,ap=5,Gn=100,op=101,lp=102,cp=103,hp=104,up=200,fp=201,dp=202,pp=203,ol=204,ll=205,mp=206,gp=207,_p=208,vp=209,xp=210,yp=211,Mp=212,Sp=213,Tp=214,cl=0,hl=1,ul=2,Ir=3,fl=4,dl=5,pl=6,ml=7,sf=0,bp=1,Ep=2,xn=0,af=1,of=2,lf=3,dc=4,cf=5,hf=6,uf=7,hh="attached",wp="detached",ff=300,Ur=301,Nr=302,gl=303,_l=304,Qa=306,vl=1e3,Xn=1001,xl=1002,ui=1003,Ap=1004,Ws=1005,li=1006,ho=1007,Yn=1008,Oi=1009,df=1010,pf=1011,Ss=1012,pc=1013,jn=1014,Ai=1015,Qi=1016,mc=1017,gc=1018,Ts=1020,mf=35902,gf=1021,_f=1022,yi=1023,bs=1026,Es=1027,_c=1028,vc=1029,vf=1030,xc=1031,yc=1033,Ea=33776,wa=33777,Aa=33778,Ca=33779,yl=35840,Ml=35841,Sl=35842,Tl=35843,bl=36196,El=37492,wl=37496,Al=37808,Cl=37809,Rl=37810,Pl=37811,Dl=37812,Ll=37813,Il=37814,Ul=37815,Nl=37816,Fl=37817,Ol=37818,Bl=37819,kl=37820,zl=37821,Ra=36492,Vl=36494,Hl=36495,xf=36283,Gl=36284,Wl=36285,Xl=36286,Na=2300,Yl=2301,uo=2302,uh=2400,fh=2401,dh=2402,Cp=2500,dS=0,pS=1,mS=2,Rp=3200,Pp=3201,yf=0,Dp=1,mn="",Xe="srgb",Fr="srgb-linear",Fa="linear",Jt="srgb",ir=7680,ph=519,Lp=512,Ip=513,Up=514,Mf=515,Np=516,Fp=517,Op=518,Bp=519,ql=35044,mh="300 es",Ni=2e3,Oa=2001;class Yr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const n=i[t];if(n!==void 0){const s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gh=1234567;const ms=Math.PI/180,Or=180/Math.PI;function Ci(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[r&255]+Oe[r>>8&255]+Oe[r>>16&255]+Oe[r>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function kt(r,t,e){return Math.max(t,Math.min(e,r))}function Mc(r,t){return(r%t+t)%t}function kp(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function zp(r,t,e){return r!==t?(e-r)/(t-r):0}function gs(r,t,e){return(1-e)*r+e*t}function Vp(r,t,e,i){return gs(r,t,1-Math.exp(-e*i))}function Hp(r,t=1){return t-Math.abs(Mc(r,t*2)-t)}function Gp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Wp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Xp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Yp(r,t){return r+Math.random()*(t-r)}function qp(r){return r*(.5-Math.random())}function Kp(r){r!==void 0&&(gh=r);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $p(r){return r*ms}function Jp(r){return r*Or}function Zp(r){return(r&r-1)===0&&r!==0}function jp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Qp(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function tm(r,t,e,i,n){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),h=a((t+i)/2),u=s((t-i)/2),f=a((t-i)/2),d=s((i-t)/2),_=a((i-t)/2);switch(n){case"XYX":r.set(o*h,l*u,l*f,o*c);break;case"YZY":r.set(l*f,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*f,o*h,o*c);break;case"XZX":r.set(o*h,l*_,l*d,o*c);break;case"YXY":r.set(l*d,o*h,l*_,o*c);break;case"ZYZ":r.set(l*_,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ki={DEG2RAD:ms,RAD2DEG:Or,generateUUID:Ci,clamp:kt,euclideanModulo:Mc,mapLinear:kp,inverseLerp:zp,lerp:gs,damp:Vp,pingpong:Hp,smoothstep:Gp,smootherstep:Wp,randInt:Xp,randFloat:Yp,randFloatSpread:qp,seededRandom:Kp,degToRad:$p,radToDeg:Jp,isPowerOfTwo:Zp,ceilPowerOfTwo:jp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:tm,normalize:Zt,denormalize:wi};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*n+t.x,this.y=s*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qr{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==f||c!==d||h!==_){let m=1-o;const p=l*f+c*d+h*_+u*g,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,p*S);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const v=o*S;if(l=l*m+f*v,c=c*m+d*v,h=h*m+_*v,u=u*m+g*v,m===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*d-c*f,t[e+1]=l*_+h*f+c*u-o*d,t[e+2]=c*_+h*d+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),f=l(i/2),d=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(s+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(s-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*t._w+i*t._x+n*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*n+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-s*n),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fo=new D,_h=new qr;class Ft{constructor(t,e,i,n,s,a,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c)}set(t,e,i,n,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],g=n[0],m=n[3],p=n[6],S=n[1],x=n[4],v=n[7],E=n[2],A=n[5],w=n[8];return s[0]=a*g+o*S+l*E,s[3]=a*m+o*x+l*A,s[6]=a*p+o*v+l*w,s[1]=c*g+h*S+u*E,s[4]=c*m+h*x+u*A,s[7]=c*p+h*v+u*w,s[2]=f*g+d*S+_*E,s[5]=f*m+d*x+_*A,s[8]=f*p+d*v+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,d=c*s-a*l,_=e*u+i*f+n*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(n*c-h*i)*g,t[2]=(o*i-n*a)*g,t[3]=f*g,t[4]=(h*e-n*l)*g,t[5]=(n*s-o*e)*g,t[6]=d*g,t[7]=(i*l-c*e)*g,t[8]=(a*e-i*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const po=new Ft;function Sf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function em(){const r=ws("canvas");return r.style.display="block",r}const vh={};function Cr(r){r in vh||(vh[r]=!0,console.warn(r))}function im(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}const xh=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nm(){const r={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(n.r=tn(n.r),n.g=tn(n.g),n.b=tn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(n.r=Rr(n.r),n.g=Rr(n.g),n.b=Rr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===mn?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Fr]:{primaries:t,whitePoint:i,transfer:Fa,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:Jt,toXYZ:xh,fromXYZ:yh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),r}const Xt=nm();function tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let nr;class rm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{nr===void 0&&(nr=ws("canvas")),nr.width=t.width,nr.height=t.height;const n=nr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=nr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ws("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=tn(s[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(tn(e[i]/255)*255):e[i]=tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sm=0;class Sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Ci(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(mo(n[a].image)):s.push(mo(n[a]))}else s=mo(n);i.url=s}return e||(t.images[this.uuid]=i),i}}function mo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let am=0;const go=new D;class Ne extends Yr{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,i=Xn,n=Xn,s=li,a=Yn,o=yi,l=Oi,c=Ne.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ci(),this.name="",this.source=new Sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vl:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vl:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=ff;Ne.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,i=0,n=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(d+1)/2,E=(p+1)/2,A=(h+f)/4,w=(u+g)/4,R=(_+m)/4;return x>v&&x>E?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=A/i,s=w/i):v>E?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=A/n,s=R/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=w/s,n=R/s),this.set(i,n,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends Yr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const n={width:t,height:e,depth:i.depth},s=new Ne(n);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const n=Object.assign({},t.textures[e].image);this.textures[e].source=new Sc(n)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends om{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Tf extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lm extends Ne{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class An{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ti):Ti.fromBufferAttribute(s,a),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xs.copy(i.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}const n=t.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qr),Ys.subVectors(this.max,Qr),rr.subVectors(t.a,Qr),sr.subVectors(t.b,Qr),ar.subVectors(t.c,Qr),on.subVectors(sr,rr),ln.subVectors(ar,sr),Ln.subVectors(rr,ar);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Ln.z,Ln.y,on.z,0,-on.x,ln.z,0,-ln.x,Ln.z,0,-Ln.x,-on.y,on.x,0,-ln.y,ln.x,0,-Ln.y,Ln.x,0];return!_o(e,rr,sr,ar,Ys)||(e=[1,0,0,0,1,0,0,0,1],!_o(e,rr,sr,ar,Ys))?!1:(qs.crossVectors(on,ln),e=[qs.x,qs.y,qs.z],_o(e,rr,sr,ar,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vi=[new D,new D,new D,new D,new D,new D,new D,new D],Ti=new D,Xs=new An,rr=new D,sr=new D,ar=new D,on=new D,ln=new D,Ln=new D,Qr=new D,Ys=new D,qs=new D,In=new D;function _o(r,t,e,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){In.fromArray(r,s);const o=n.x*Math.abs(In.x)+n.y*Math.abs(In.y)+n.z*Math.abs(In.z),l=t.dot(In),c=e.dot(In),h=i.dot(In);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const cm=new An,ts=new D,vo=new D;class sn{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):cm.setFromPoints(t).getCenter(i);let n=0;for(let s=0,a=t.length;s<a;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ts.subVectors(t,this.center);const e=ts.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ts,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ts.copy(t.center).add(vo)),this.expandByPoint(ts.copy(t.center).sub(vo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hi=new D,xo=new D,Ks=new D,cn=new D,yo=new D,$s=new D,Mo=new D;class Fs{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){xo.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),cn.copy(this.origin).sub(xo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=cn.dot(this.direction),l=-cn.dot(Ks),c=cn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,_;if(h>0)if(u=a*l-o,f=a*o-l,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(xo).addScaledVector(Ks,f),d}intersectSphere(t,e){Hi.subVectors(t.center,this.origin);const i=Hi.dot(this.direction),n=Hi.dot(Hi)-i*i,s=t.radius*t.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,i,n,s){yo.subVectors(e,t),$s.subVectors(i,t),Mo.crossVectors(yo,$s);let a=this.direction.dot(Mo),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,t);const l=o*this.direction.dot($s.crossVectors(cn,$s));if(l<0)return null;const c=o*this.direction.dot(yo.cross(cn));if(c<0||l+c>a)return null;const h=-o*cn.dot(Mo);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,i,n,s,a,o,l,c,h,u,f,d,_,g,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,a,o,l,c,h,u,f,d,_,g,m)}set(t,e,i,n,s,a,o,l,c,h,u,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/or.setFromMatrixColumn(t,0).length(),s=1/or.setFromMatrixColumn(t,1).length(),a=1/or.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+_*c,e[5]=f-g*c,e[9]=-o*l,e[2]=g-f*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,_=c*h,g=c*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-d,e[8]=f*c+g,e[1]=l*u,e[5]=g*c+f,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hm,t,um)}lookAt(t,e,i){const n=this.elements;return ri.subVectors(t,e),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),hn.crossVectors(i,ri),hn.lengthSq()===0&&(Math.abs(i.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),hn.crossVectors(i,ri)),hn.normalize(),Js.crossVectors(ri,hn),n[0]=hn.x,n[4]=Js.x,n[8]=ri.x,n[1]=hn.y,n[5]=Js.y,n[9]=ri.y,n[2]=hn.z,n[6]=Js.z,n[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],x=i[7],v=i[11],E=i[15],A=n[0],w=n[4],R=n[8],y=n[12],T=n[1],P=n[5],V=n[9],O=n[13],B=n[2],q=n[6],G=n[10],$=n[14],H=n[3],nt=n[7],ot=n[11],_t=n[15];return s[0]=a*A+o*T+l*B+c*H,s[4]=a*w+o*P+l*q+c*nt,s[8]=a*R+o*V+l*G+c*ot,s[12]=a*y+o*O+l*$+c*_t,s[1]=h*A+u*T+f*B+d*H,s[5]=h*w+u*P+f*q+d*nt,s[9]=h*R+u*V+f*G+d*ot,s[13]=h*y+u*O+f*$+d*_t,s[2]=_*A+g*T+m*B+p*H,s[6]=_*w+g*P+m*q+p*nt,s[10]=_*R+g*V+m*G+p*ot,s[14]=_*y+g*O+m*$+p*_t,s[3]=S*A+x*T+v*B+E*H,s[7]=S*w+x*P+v*q+E*nt,s[11]=S*R+x*V+v*G+E*ot,s[15]=S*y+x*O+v*$+E*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-n*c*u-s*o*f+i*c*f+n*o*d-i*l*d)+g*(+e*l*d-e*c*f+s*a*f-n*a*d+n*c*h-s*l*h)+m*(+e*c*u-e*o*d-s*a*u+i*a*d+s*o*h-i*c*h)+p*(-n*o*h-e*l*u+e*o*f+n*a*u-i*a*f+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*c-g*f*c+g*l*d-o*m*d-u*l*p+o*f*p,x=_*f*c-h*m*c-_*l*d+a*m*d+h*l*p-a*f*p,v=h*g*c-_*u*c+_*o*d-a*g*d-h*o*p+a*u*p,E=_*u*l-h*g*l-_*o*f+a*g*f+h*o*m-a*u*m,A=e*S+i*x+n*v+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(g*f*s-u*m*s-g*n*d+i*m*d+u*n*p-i*f*p)*w,t[2]=(o*m*s-g*l*s+g*n*c-i*m*c-o*n*p+i*l*p)*w,t[3]=(u*l*s-o*f*s-u*n*c+i*f*c+o*n*d-i*l*d)*w,t[4]=x*w,t[5]=(h*m*s-_*f*s+_*n*d-e*m*d-h*n*p+e*f*p)*w,t[6]=(_*l*s-a*m*s-_*n*c+e*m*c+a*n*p-e*l*p)*w,t[7]=(a*f*s-h*l*s+h*n*c-e*f*c-a*n*d+e*l*d)*w,t[8]=v*w,t[9]=(_*u*s-h*g*s-_*i*d+e*g*d+h*i*p-e*u*p)*w,t[10]=(a*g*s-_*o*s+_*i*c-e*g*c-a*i*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*d-e*o*d)*w,t[12]=E*w,t[13]=(h*g*n-_*u*n+_*i*f-e*g*f-h*i*m+e*u*m)*w,t[14]=(_*o*n-a*g*n-_*i*l+e*g*l+a*i*m-e*o*m)*w,t[15]=(a*u*n-h*o*n+h*i*l-e*u*l-a*i*f+e*o*f)*w,this}scale(t){const e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,a){return this.set(1,i,s,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,d=s*h,_=s*u,g=a*h,m=a*u,p=o*u,S=l*c,x=l*h,v=l*u,E=i.x,A=i.y,w=i.z;return n[0]=(1-(g+p))*E,n[1]=(d+v)*E,n[2]=(_-x)*E,n[3]=0,n[4]=(d-v)*A,n[5]=(1-(f+p))*A,n[6]=(m+S)*A,n[7]=0,n[8]=(_+x)*w,n[9]=(m-S)*w,n[10]=(1-(f+g))*w,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let s=or.set(n[0],n[1],n[2]).length();const a=or.set(n[4],n[5],n[6]).length(),o=or.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),t.x=n[12],t.y=n[13],t.z=n[14],bi.copy(this);const c=1/s,h=1/a,u=1/o;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,n,s,a,o=Ni,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-n),f=(e+t)/(e-t),d=(i+n)/(i-n);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Ni)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Oa)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,a,o=Ni,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-n),f=-(e+t)/(e-t),d=-(i+n)/(i-n);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Ni)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Oa)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const or=new D,bi=new zt,hm=new D(0,0,0),um=new D(1,1,1),hn=new D,Js=new D,ri=new D,Mh=new zt,Sh=new qr;class Bi{constructor(t=0,e=0,i=0,n=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fm=0;const Th=new D,lr=new qr,Gi=new zt,Zs=new D,es=new D,dm=new D,pm=new qr,bh=new D(1,0,0),Eh=new D(0,1,0),wh=new D(0,0,1),Ah={type:"added"},mm={type:"removed"},cr={type:"childadded",child:null},So={type:"childremoved",child:null};class xe extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new D,e=new Bi,i=new qr,n=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ft}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,e){return lr.setFromAxisAngle(t,e),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(Eh,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(Eh,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Zs.copy(t):Zs.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(es,Zs,this.up):Gi.lookAt(Zs,es,this.up),this.quaternion.setFromRotationMatrix(Gi),n&&(Gi.extractRotation(n.matrixWorld),lr.setFromRotationMatrix(Gi),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ah),cr.child=t,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mm),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ah),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,pm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));n.material=o}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new D,Wi=new D,To=new D,Xi=new D,hr=new D,ur=new D,Ch=new D,bo=new D,Eo=new D,wo=new D,Ao=new Kt,Co=new Kt,Ro=new Kt;class xi{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ei.subVectors(t,e),n.cross(Ei);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Ei.subVectors(n,e),Wi.subVectors(i,e),To.subVectors(t,e);const a=Ei.dot(Ei),o=Ei.dot(Wi),l=Ei.dot(To),c=Wi.dot(Wi),h=Wi.dot(To),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(t,e,i,n,s,a,o,l){return this.getBarycoord(t,e,i,n,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xi.x),l.addScaledVector(a,Xi.y),l.addScaledVector(o,Xi.z),l)}static getInterpolatedAttribute(t,e,i,n,s,a){return Ao.setScalar(0),Co.setScalar(0),Ro.setScalar(0),Ao.fromBufferAttribute(t,e),Co.fromBufferAttribute(t,i),Ro.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ao,s.x),a.addScaledVector(Co,s.y),a.addScaledVector(Ro,s.z),a}static isFrontFacing(t,e,i,n){return Ei.subVectors(i,e),Wi.subVectors(t,e),Ei.cross(Wi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),Ei.cross(Wi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return xi.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,s=this.c;let a,o;hr.subVectors(n,i),ur.subVectors(s,i),bo.subVectors(t,i);const l=hr.dot(bo),c=ur.dot(bo);if(l<=0&&c<=0)return e.copy(i);Eo.subVectors(t,n);const h=hr.dot(Eo),u=ur.dot(Eo);if(h>=0&&u<=h)return e.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(hr,a);wo.subVectors(t,s);const d=hr.dot(wo),_=ur.dot(wo);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(i).addScaledVector(ur,o);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Ch.subVectors(s,n),o=(u-h)/(u-h+(d-_)),e.copy(n).addScaledVector(Ch,o);const p=1/(m+g+f);return a=g*p,o=f*p,e.copy(i).addScaledVector(hr,a).addScaledVector(ur,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},js={h:0,s:0,l:0};function Po(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Rt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Xt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=Xt.workingColorSpace){if(t=Mc(t,1),e=kt(e,0,1),i=kt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Po(a,s,t+1/3),this.g=Po(a,s,t),this.b=Po(a,s,t-1/3)}return Xt.colorSpaceToWorking(this,n),this}setStyle(t,e=Xe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const i=bf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tn(t.r),this.g=tn(t.g),this.b=tn(t.b),this}copyLinearToSRGB(t){return this.r=Rr(t.r),this.g=Rr(t.g),this.b=Rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Xt.workingToColorSpace(Be.copy(this),t),Math.round(kt(Be.r*255,0,255))*65536+Math.round(kt(Be.g*255,0,255))*256+Math.round(kt(Be.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Be.copy(this),e);const i=Be.r,n=Be.g,s=Be.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Xe){Xt.workingToColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,n=Be.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(js);const i=gs(un.h,js.h,e),n=gs(un.s,js.s,e),s=gs(un.l,js.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Rt;Rt.NAMES=bf;let gm=0;class Cn extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=Ar,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=ll,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==ll&&(i.blendDst=this.blendDst),this.blendEquation!==Gn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=n(t.textures),a=n(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tn extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=sf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new D,Qs=new at;let _m=0;class ne{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_m++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ql,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Qs.fromBufferAttribute(this,e),Qs.applyMatrix3(t),this.setXY(e,Qs.x,Qs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Zt(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ql&&(t.usage=this.usage),t}}class Ef extends ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class wf extends ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class we extends ne{constructor(t,e,i){super(new Float32Array(t),e,i)}}let vm=0;const _i=new zt,Do=new xe,fr=new D,si=new An,is=new An,De=new D;class Ie extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sf(t)?wf:Ef)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ft().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,i){return _i.makeTranslation(t,e,i),this.applyMatrix4(_i),this}scale(t,e,i){return _i.makeScale(t,e,i),this.applyMatrix4(_i),this}lookAt(t){return Do.lookAt(t),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{const i=Math.min(t.length,e.count);for(let n=0;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new An);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const s=e[i];si.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(si.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];is.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(si.min,is.min),si.expandByPoint(De),De.addVectors(si.max,is.max),si.expandByPoint(De)):(si.expandByPoint(is.min),si.expandByPoint(is.max))}si.getCenter(i);let n=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(De));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(t,c),De.add(fr)),n=Math.max(n,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ne(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new D,l[R]=new D;const c=new D,h=new D,u=new D,f=new at,d=new at,_=new at,g=new D,m=new D;function p(R,y,T){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,T),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[y].add(g),o[T].add(g),l[R].add(m),l[y].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,y=S.length;R<y;++R){const T=S[R],P=T.start,V=T.count;for(let O=P,B=P+V;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new D,v=new D,E=new D,A=new D;function w(R){E.fromBufferAttribute(n,R),A.copy(E);const y=o[R];x.copy(y),x.sub(E.multiplyScalar(E.dot(y))).normalize(),v.crossVectors(A,y);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,y=S.length;R<y;++R){const T=S[R],P=T.start,V=T.count;for(let O=P,B=P+V;O<B;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new D,s=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*h;for(let p=0;p<h;p++)f[_++]=c[d++]}return new ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ie,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new zt,Un=new Fs,ta=new sn,Ph=new D,ea=new D,ia=new D,na=new D,Lo=new D,ra=new D,Dh=new D,sa=new D;class ge extends xe{constructor(t=new Ie,e=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const o=this.morphTargetInfluences;if(s&&o){ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Lo.fromBufferAttribute(u,t),a?ra.addScaledVector(Lo,h):ra.addScaledVector(Lo.sub(e),h))}e.add(ra)}return e}raycast(t,e){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),Un.copy(t.ray).recast(t.near),!(ta.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ta,Ph)===null||Un.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Rh.copy(s).invert(),Un.copy(t.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&Un.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Un)))}_computeIntersections(t,e,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=x;v<E;v+=3){const A=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);n=aa(this,p,t,i,c,h,u,A,w,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);n=aa(this,a,t,i,c,h,u,S,x,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=x;v<E;v+=3){const A=v,w=v+1,R=v+2;n=aa(this,p,t,i,c,h,u,A,w,R),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,x=m+1,v=m+2;n=aa(this,a,t,i,c,h,u,S,x,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function xm(r,t,e,i,n,s,a,o){let l;if(t.side===Je?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,t.side===Sn,o),l===null)return null;sa.copy(o),sa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:r}}function aa(r,t,e,i,n,s,a,o,l,c){r.getVertexPosition(o,ea),r.getVertexPosition(l,ia),r.getVertexPosition(c,na);const h=xm(r,t,e,i,ea,ia,na,Dh);if(h){const u=new D;xi.getBarycoord(Dh,ea,ia,na,u),n&&(h.uv=xi.getInterpolatedAttribute(n,o,l,c,u,new at)),s&&(h.uv1=xi.getInterpolatedAttribute(s,o,l,c,u,new at)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new D,materialIndex:0};xi.getNormal(ea,ia,na,f.normal),h.face=f,h.barycoord=u}return h}class Os extends Ie{constructor(t=1,e=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,a,s,0),_("z","y","x",1,-1,i,e,-t,a,s,1),_("x","z","y",1,1,t,i,e,n,a,2),_("x","z","y",1,-1,t,i,-e,n,a,3),_("x","y","z",1,-1,t,e,i,n,s,4),_("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function _(g,m,p,S,x,v,E,A,w,R,y){const T=v/w,P=E/R,V=v/2,O=E/2,B=A/2,q=w+1,G=R+1;let $=0,H=0;const nt=new D;for(let ot=0;ot<G;ot++){const _t=ot*P-O;for(let Dt=0;Dt<q;Dt++){const te=Dt*T-V;nt[g]=te*S,nt[m]=_t*x,nt[p]=B,c.push(nt.x,nt.y,nt.z),nt[g]=0,nt[m]=0,nt[p]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Dt/w),u.push(1-ot/R),$+=1}}for(let ot=0;ot<R;ot++)for(let _t=0;_t<w;_t++){const Dt=f+_t+q*ot,te=f+_t+q*(ot+1),Vt=f+(_t+1)+q*(ot+1),W=f+(_t+1)+q*ot;l.push(Dt,te,W),l.push(te,Vt,W),H+=6}o.addGroup(d,H,y),d+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Br(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const n=r[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function We(r){const t={};for(let e=0;e<r.length;e++){const i=Br(r[e]);for(const n in i)t[n]=i[n]}return t}function ym(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Af(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const As={clone:Br,merge:We};var Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ae extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Br(t.uniforms),this.uniformsGroups=ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cf extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new D,Lh=new at,Ih=new at;class qe extends Cf{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Or*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,Lh,Ih),e.subVectors(Ih,Lh)}setViewOffset(t,e,i,n,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ms*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const dr=-90,pr=1;class Tm extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new qe(dr,pr,t,e);n.layers=this.layers,this.add(n);const s=new qe(dr,pr,t,e);s.layers=this.layers,this.add(s);const a=new qe(dr,pr,t,e);a.layers=this.layers,this.add(a);const o=new qe(dr,pr,t,e);o.layers=this.layers,this.add(o);const l=new qe(dr,pr,t,e);l.layers=this.layers,this.add(l);const c=new qe(dr,pr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,s),t.setRenderTarget(i,1,n),t.render(e,a),t.setRenderTarget(i,2,n),t.render(e,o),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Rf extends Ne{constructor(t=[],e=Ur,i,n,s,a,o,l,c,h){super(t,e,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bm extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new Rf(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Os(5,5,5),s=new Ae({name:"CubemapFromEquirect",uniforms:Br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:ji});s.uniforms.tEquirect.value=e;const a=new ge(n,s),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=li),new Tm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(s)}}class ze extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Em={type:"move"};class Io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class bc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new bc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wm extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Am{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new D;class Ba{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Zt(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=wi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=wi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=wi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=wi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),i=Zt(i,this.array),n=Zt(n,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ba(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qn extends Cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let mr;const ns=new D,gr=new D,_r=new D,vr=new at,rs=new at,Pf=new zt,oa=new D,ss=new D,la=new D,Uh=new at,Uo=new at,Nh=new at;class kr extends xe{constructor(t=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new Ie;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Am(e,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new Ba(i,3,0,!1)),mr.setAttribute("uv",new Ba(i,2,3,!1))}this.geometry=mr,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),Pf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-_r.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;ca(oa.set(-.5,-.5,0),_r,a,gr,n,s),ca(ss.set(.5,-.5,0),_r,a,gr,n,s),ca(la.set(.5,.5,0),_r,a,gr,n,s),Uh.set(0,0),Uo.set(1,0),Nh.set(1,1);let o=t.ray.intersectTriangle(oa,ss,la,!1,ns);if(o===null&&(ca(ss.set(-.5,.5,0),_r,a,gr,n,s),Uo.set(0,1),o=t.ray.intersectTriangle(oa,la,ss,!1,ns),o===null))return;const l=t.ray.origin.distanceTo(ns);l<t.near||l>t.far||e.push({distance:l,point:ns.clone(),uv:xi.getInterpolation(ns,oa,ss,la,Uh,Uo,Nh,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ca(r,t,e,i,n,s){vr.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(rs.x=s*vr.x-n*vr.y,rs.y=n*vr.x+s*vr.y):rs.copy(vr),r.copy(t),r.x+=rs.x,r.y+=rs.y,r.applyMatrix4(Pf)}const Fh=new D,Oh=new Kt,Bh=new Kt,Cm=new D,kh=new zt,ha=new D,No=new sn,zh=new zt,Fo=new Fs;class gS extends ge{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hh,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new An),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ha),this.boundingBox.expandByPoint(ha)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,ha),this.boundingSphere.expandByPoint(ha)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1&&(zh.copy(n).invert(),Fo.copy(t.ray).applyMatrix4(zh),!(this.boundingBox!==null&&Fo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Fo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Kt,e=this.geometry.attributes.skinWeight;for(let i=0,n=e.count;i<n;i++){t.fromBufferAttribute(e,i);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===hh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const i=this.skeleton,n=this.geometry;Oh.fromBufferAttribute(n.attributes.skinIndex,t),Bh.fromBufferAttribute(n.attributes.skinWeight,t),Fh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Bh.getComponent(s);if(a!==0){const o=Oh.getComponent(s);kh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),e.addScaledVector(Cm.copy(Fh).applyMatrix4(kh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Rm extends xe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Df extends Ne{constructor(t=null,e=1,i=1,n,s,a,o,l,c=ui,h=ui,u,f){super(null,a,o,l,c,h,n,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new zt,Pm=new zt;class Lf{constructor(t=[],e=[]){this.uuid=Ci(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const i=new zt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,e=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:Pm;Vh.multiplyMatrices(o,e[s]),Vh.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Lf(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const i=new Df(e,t,t,yi,Ai);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){const n=this.bones[e];if(n.name===t)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,n=t.bones.length;i<n;i++){const s=t.bones[i];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Rm),this.bones.push(a),this.boneInverses.push(new zt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,i=this.boneInverses;for(let n=0,s=e.length;n<s;n++){const a=e[n];t.bones.push(a.uuid);const o=i[n];t.boneInverses.push(o.toArray())}return t}}class Hh extends ne{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const xr=new zt,Gh=new zt,ua=[],Wh=new An,Dm=new zt,as=new ge,os=new sn;class _S extends ge{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Hh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Dm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new An),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xr),Wh.copy(t.boundingBox).applyMatrix4(xr),this.boundingBox.union(Wh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xr),os.copy(t.boundingSphere).applyMatrix4(xr),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){const i=this.matrixWorld,n=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(i),t.ray.intersectsSphere(os)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,xr),Gh.multiplyMatrices(i,xr),as.matrixWorld=Gh,as.raycast(t,ua);for(let a=0,o=ua.length;a<o;a++){const l=ua[a];l.instanceId=s,l.object=this,e.push(l)}ua.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Df(new Float32Array(n*this.count),n,this.count,_c,Ai));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oo=new D,Lm=new D,Im=new Ft;class zn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Oo.subVectors(i,e).cross(Lm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Im.getNormalMatrix(t),n=this.coplanarPoint(Oo).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new sn,Um=new at(.5,.5),fa=new D;class Ec{constructor(t=new zn,e=new zn,i=new zn,n=new zn,s=new zn,a=new zn){this.planes=[t,e,i,n,s,a]}set(t,e,i,n,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ni,i=!1){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],_=s[8],g=s[9],m=s[10],p=s[11],S=s[12],x=s[13],v=s[14],E=s[15];if(n[0].setComponents(c-a,d-h,p-_,E-S).normalize(),n[1].setComponents(c+a,d+h,p+_,E+S).normalize(),n[2].setComponents(c+o,d+u,p+g,E+x).normalize(),n[3].setComponents(c-o,d-u,p-g,E-x).normalize(),i)n[4].setComponents(l,f,m,v).normalize(),n[5].setComponents(c-l,d-f,p-m,E-v).normalize();else if(n[4].setComponents(c-l,d-f,p-m,E-v).normalize(),e===Ni)n[5].setComponents(c+l,d+f,p+m,E+v).normalize();else if(e===Oa)n[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(t){Nn.center.set(0,0,0);const e=Um.distanceTo(t.center);return Nn.radius=.7071067811865476+e,Nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(fa.x=n.normal.x>0?t.max.x:t.min.x,fa.y=n.normal.y>0?t.max.y:t.min.y,fa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nm extends Cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ka=new D,za=new D,Xh=new zt,ls=new Fs,da=new sn,Bo=new D,Yh=new D;class If extends xe{constructor(t=new Ie,e=new Nm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)ka.fromBufferAttribute(e,n-1),za.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=ka.distanceTo(za);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(n),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;Xh.copy(n).invert(),ls.copy(t.ray).applyMatrix4(Xh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){const p=h.getX(g),S=h.getX(g+1),x=pa(this,t,ls,l,p,S,g);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(d),p=pa(this,t,ls,l,g,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=c){const p=pa(this,t,ls,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=pa(this,t,ls,l,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pa(r,t,e,i,n,s,a){const o=r.geometry.attributes.position;if(ka.fromBufferAttribute(o,n),za.fromBufferAttribute(o,s),e.distanceSqToSegment(ka,za,Bo,Yh)>i)return;Bo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Bo);if(!(c<t.near||c>t.far))return{distance:c,point:Yh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const qh=new D,Kh=new D;class vS extends If{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)qh.fromBufferAttribute(e,n),Kh.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+qh.distanceTo(Kh);t.setAttribute("lineDistance",new we(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xS extends If{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Uf extends Cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $h=new zt,Kl=new Fs,ma=new sn,ga=new D;class Va extends xe{constructor(t=new Ie,e=new Uf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(n),ma.radius+=s,t.ray.intersectsSphere(ma)===!1)return;$h.copy(n).invert(),Kl.copy(t.ray).applyMatrix4($h);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);ga.fromBufferAttribute(u,m),Jh(ga,m,l,n,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)ga.fromBufferAttribute(u,_),Jh(ga,_,l,n,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jh(r,t,e,i,n,s,a){const o=Kl.distanceSqToPoint(r);if(o<e){const l=new D;Kl.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Nf extends Ne{constructor(t,e,i,n,s,a,o,l,c){super(t,e,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ff extends Ne{constructor(t,e,i=jn,n,s,a,o=ui,l=ui,c,h=bs,u=1){if(h!==bs&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wc extends Ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const s=[],a=[];o(n),c(i),h(),this.setAttribute("position",new we(s,3)),this.setAttribute("normal",new we(s.slice(),3)),this.setAttribute("uv",new we(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new D,v=new D,E=new D;for(let A=0;A<e.length;A+=3)d(e[A+0],x),d(e[A+1],v),d(e[A+2],E),l(x,v,E,S)}function l(S,x,v,E){const A=E+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const y=S.clone().lerp(v,R/A),T=x.clone().lerp(v,R/A),P=A-R;for(let V=0;V<=P;V++)V===0&&R===A?w[R][V]=y:w[R][V]=y.clone().lerp(T,V/P)}for(let R=0;R<A;R++)for(let y=0;y<2*(A-R)-1;y++){const T=Math.floor(y/2);y%2===0?(f(w[R][T+1]),f(w[R+1][T]),f(w[R][T])):(f(w[R][T+1]),f(w[R+1][T+1]),f(w[R+1][T]))}}function c(S){const x=new D;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(S),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const S=new D;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(v,1-E)}_(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],v=a[S+2],E=a[S+4],A=Math.max(x,v,E),w=Math.min(x,v,E);A>.9&&w<.1&&(x<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function _(){const S=new D,x=new D,v=new D,E=new D,A=new at,w=new at,R=new at;for(let y=0,T=0;y<s.length;y+=9,T+=6){S.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),A.set(a[T+0],a[T+1]),w.set(a[T+2],a[T+3]),R.set(a[T+4],a[T+5]),E.copy(S).add(x).add(v).divideScalar(3);const P=m(E);g(A,T+0,S,P),g(w,T+2,x,P),g(R,T+4,v,P)}}function g(S,x,v,E){E<0&&S.x===1&&(a[x]=S.x-1),v.x===0&&v.z===0&&(a[x]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.vertices,t.indices,t.radius,t.details)}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,n=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let n=0;const s=i.length;let a;e?a=e:a=t*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=e||(a.isVector2?new at:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new D,n=[],s=[],a=[],o=new D,l=new zt;for(let d=0;d<=t;d++){const _=d/t;n[d]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(kt(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(kt(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(n[_],d*_)),a[_].crossVectors(n[_],s[_])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Of extends an{constructor(t=0,e=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new at){const i=e,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Fm extends Of{constructor(t,e,i,n,s,a){super(t,e,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ac(){let r=0,t=0,e=0,i=0;function n(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+i*o}}}const _a=new D,ko=new Ac,zo=new Ac,Vo=new Ac;class Bf extends an{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new D){const i=e,n=this.points,s=n.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(_a.subVectors(n[0],n[1]).add(n[0]),c=_a);const u=n[o%s],f=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(_a.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=_a),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ko.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,g,m),zo.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,g,m),Vo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(ko.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),zo.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(ko.calc(l),zo.calc(l),Vo.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new D().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zh(r,t,e,i,n){const s=(i-t)*.5,a=(n-e)*.5,o=r*r,l=r*o;return(2*e-2*i+s+a)*l+(-3*e+3*i-2*s-a)*o+s*r+e}function Om(r,t){const e=1-r;return e*e*t}function Bm(r,t){return 2*(1-r)*r*t}function km(r,t){return r*r*t}function _s(r,t,e,i){return Om(r,t)+Bm(r,e)+km(r,i)}function zm(r,t){const e=1-r;return e*e*e*t}function Vm(r,t){const e=1-r;return 3*e*e*r*t}function Hm(r,t){return 3*(1-r)*r*r*t}function Gm(r,t){return r*r*r*t}function vs(r,t,e,i,n){return zm(r,t)+Vm(r,e)+Hm(r,i)+Gm(r,n)}class Wm extends an{constructor(t=new at,e=new at,i=new at,n=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new at){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(vs(t,n.x,s.x,a.x,o.x),vs(t,n.y,s.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xm extends an{constructor(t=new D,e=new D,i=new D,n=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new D){const i=e,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(vs(t,n.x,s.x,a.x,o.x),vs(t,n.y,s.y,a.y,o.y),vs(t,n.z,s.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ym extends an{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qm extends an{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Km extends an{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(_s(t,n.x,s.x,a.x),_s(t,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class kf extends an{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,n=this.v0,s=this.v1,a=this.v2;return i.set(_s(t,n.x,s.x,a.x),_s(t,n.y,s.y,a.y),_s(t,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $m extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,n=this.points,s=(n.length-1)*t,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Zh(o,l.x,c.x,h.x,u.x),Zh(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(n.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const n=t.points[e];this.points.push(new at().fromArray(n))}return this}}var Jm=Object.freeze({__proto__:null,ArcCurve:Fm,CatmullRomCurve3:Bf,CubicBezierCurve:Wm,CubicBezierCurve3:Xm,EllipseCurve:Of,LineCurve:Ym,LineCurve3:qm,QuadraticBezierCurve:Km,QuadraticBezierCurve3:kf,SplineCurve:$m});class Cc extends wc{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cc(t.radius,t.detail)}}class en extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=t/o,f=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let x=0;x<c;x++){const v=x*u-s;_.push(v,-S,0),g.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+c*p,v=S+c*(p+1),E=S+1+c*(p+1),A=S+1+c*p;d.push(x,v,A),d.push(v,E,A)}this.setIndex(d),this.setAttribute("position",new we(_,3)),this.setAttribute("normal",new we(g,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new en(t.width,t.height,t.widthSegments,t.heightSegments)}}class to extends Ie{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new D,u=new D,f=new D;for(let d=0;d<=i;d++)for(let _=0;_<=n;_++){const g=_/n*s,m=d/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let _=1;_<=n;_++){const g=(n+1)*d+_-1,m=(n+1)*(d-1)+_-1,p=(n+1)*(d-1)+_,S=(n+1)*d+_;a.push(g,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(l,3)),this.setAttribute("uv",new we(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ha extends Ie{constructor(t=new kf(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,c=new at;let h=new D;const u=[],f=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(f,3)),this.setAttribute("uv",new we(d,2));function g(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),S(),p()}function m(x){h=t.getPointAt(x/e,h);const v=a.normals[x],E=a.binormals[x];for(let A=0;A<=n;A++){const w=A/n*Math.PI*2,R=Math.sin(w),y=-Math.cos(w);l.x=y*v.x+R*E.x,l.y=y*v.y+R*E.y,l.z=y*v.z+R*E.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=n;v++){const E=(n+1)*(x-1)+(v-1),A=(n+1)*x+(v-1),w=(n+1)*x+v,R=(n+1)*(x-1)+v;_.push(E,A,R),_.push(A,w,R)}}function S(){for(let x=0;x<=e;x++)for(let v=0;v<=n;v++)c.x=x/e,c.y=v/n,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ha(new Jm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Zm extends Ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jm extends Cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ga extends jm{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Qm extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tg extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function va(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function eg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ig(r){function t(n,s){return r[n]-r[s]}const e=r.length,i=new Array(e);for(let n=0;n!==e;++n)i[n]=n;return i.sort(t),i}function jh(r,t,e){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=e[s]*t;for(let l=0;l!==t;++l)n[a++]=r[o+l]}return n}function zf(r,t,e,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(t.push(s.time),e.push(a)),s=r[n++];while(s!==void 0)}class eo{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}a=i,i=0;break e}break i}for(;i<a;){const o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let a=0;a!==n;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ng extends eo{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(t,e,i){const n=this.parameterPositions;let s=t-2,a=t+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case fh:s=t,o=2*e-i;break;case dh:s=n.length-2,o=e+n[s]-n[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:a=t,l=2*i-e;break;case dh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}const c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(i-e)/(n-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,S=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+S*a[c+E]+x*a[l+E]+v*a[u+E];return s}}class rg extends eo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[c+f]*u+a[l+f]*h;return s}}class sg extends eo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}}class Pi{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};const n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ng(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Na:e=this.InterpolantFactoryMethodDiscrete;break;case Yl:e=this.InterpolantFactoryMethodLinear;break;case uo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Na;case this.InterpolantFactoryMethodLinear:return Yl;case this.InterpolantFactoryMethodSmooth:return uo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t}return this}trim(t,e){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&eg(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===uo,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{const u=o*i,f=u-i,d=u+i;for(let _=0;_!==i;++_){const g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,n}}Pi.prototype.ValueTypeName="";Pi.prototype.TimeBufferType=Float32Array;Pi.prototype.ValueBufferType=Float32Array;Pi.prototype.DefaultInterpolation=Yl;class Kr extends Pi{constructor(t,e,i){super(t,e,i)}}Kr.prototype.ValueTypeName="bool";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Na;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Vf extends Pi{constructor(t,e,i,n){super(t,e,i,n)}}Vf.prototype.ValueTypeName="color";class Wa extends Pi{constructor(t,e,i,n){super(t,e,i,n)}}Wa.prototype.ValueTypeName="number";class ag extends eo{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e);let c=t*o;for(let h=c+o;c!==h;c+=4)qr.slerpFlat(s,0,a,c-o,a,c,l);return s}}class io extends Pi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new ag(this.times,this.values,this.getValueSize(),t)}}io.prototype.ValueTypeName="quaternion";io.prototype.InterpolantFactoryMethodSmooth=void 0;class $r extends Pi{constructor(t,e,i){super(t,e,i)}}$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Na;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Xa extends Pi{constructor(t,e,i,n){super(t,e,i,n)}}Xa.prototype.ValueTypeName="vector";class yS{constructor(t="",e=-1,i=[],n=Cp){this.name=t,this.tracks=i,this.duration=e,this.blendMode=n,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],i=t.tracks,n=1/(t.fps||1);for(let a=0,o=i.length;a!==o;++a)e.push(lg(i[a]).scale(n));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],i=t.tracks,n={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=i.length;s!==a;++s)e.push(Pi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(t,e,i,n){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=ig(l);l=jh(l,1,h),c=jh(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Wa(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/i))}return new this(t,-1,a)}static findByName(t,e){let i=t;if(!Array.isArray(t)){const n=t;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===e)return i[n];return null}static CreateClipsFromMorphTargetSequences(t,e,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let f=n[u];f||(n[u]=f=[]),f.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],e,i));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,d,_,g){if(d.length!==0){const m=[],p=[];zf(d,m,p,_),m.length!==0&&g.push(new u(f,m,p))}},n=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let S=0;S!==f[_].morphTargets.length;++S){const x=f[_];m.push(x.time),p.push(x.morphTarget===g?1:0)}n.push(new Wa(".morphTargetInfluence["+g+"]",m,p))}l=d.length*a}else{const d=".bones["+e[u].name+"]";i(Xa,d+".position",f,"pos",n),i(io,d+".quaternion",f,"rot",n),i(Xa,d+".scale",f,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const t=this.tracks;let e=0;for(let i=0,n=t.length;i!==n;++i){const s=this.tracks[i];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function og(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wa;case"vector":case"vector2":case"vector3":case"vector4":return Xa;case"color":return Vf;case"quaternion":return io;case"bool":case"boolean":return Kr;case"string":return $r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=og(r.type);if(r.times===void 0){const e=[],i=[];zf(r.keys,e,i,"value"),r.times=e,r.values=i}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Zi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class cg{constructor(t,e,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],_=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const hg=new cg;class Bs{constructor(t){this.manager=t!==void 0?t:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class ug extends Error{constructor(t,e){super(t),this.response=e}}class MS extends Bs{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Zi.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Yi[t]!==void 0){Yi[t].push({onLoad:e,onProgress:i,onError:n});return}Yi[t]=[],Yi[t].push({onLoad:e,onProgress:i,onError:n});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Yi[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{g+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,w=h.length;A<w;A++){const R=h[A];R.onProgress&&R.onProgress(E)}p.enqueue(v),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new ug(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Zi.add(`file:${t}`,c);const h=Yi[t];delete Yi[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Yi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Yi[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const yr=new WeakMap;class fg extends Bs{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Zi.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=yr.get(a);u===void 0&&(u=[],yr.set(a,u)),u.push({onLoad:e,onError:n})}return a}const o=ws("img");function l(){h(),e&&e(this);const u=yr.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}yr.delete(this),s.manager.itemEnd(t)}function c(u){h(),n&&n(u),Zi.remove(`image:${t}`);const f=yr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(u)}yr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zi.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Hf extends Bs{constructor(t){super(t)}load(t,e,i,n){const s=new Ne,a=new fg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}}class no extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ho=new zt,Qh=new D,tu=new D;class Rc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ho,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ho)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class dg extends Rc{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Or*2*t.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(i!==e.fov||n!==e.aspect||s!==e.far)&&(e.fov=i,e.aspect=n,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class SS extends no{constructor(t,e,i=0,n=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new dg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const eu=new zt,cs=new D,Go=new D;class pg extends Rc{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,s=t.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),i.position.copy(cs),Go.copy(i.position),Go.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Go),i.updateMatrixWorld(),n.makeTranslation(-cs.x,-cs.y,-cs.z),eu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu,i.coordinateSystem,i.reversedDepth)}}class $l extends no{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new pg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pc extends Cf{constructor(t=-1,e=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mg extends Rc{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gg extends no{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new mg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _g extends no{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class TS{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const Wo=new WeakMap;class bS extends Bs{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,i,n){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Zi.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{if(Wo.has(a)===!0)n&&n(Wo.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(c),s.manager.itemEnd(t),c});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Zi.add(`image-bitmap:${t}`,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){n&&n(c),Wo.set(l,c),Zi.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Zi.add(`image-bitmap:${t}`,l),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vg extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Gf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Dc="\\[\\]\\.:\\/",xg=new RegExp("["+Dc+"]","g"),Lc="[^"+Dc+"]",yg="[^"+Dc.replace("\\.","")+"]",Mg=/((?:WC+[\/:])*)/.source.replace("WC",Lc),Sg=/(WCOD+)?/.source.replace("WCOD",yg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lc),bg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lc),Eg=new RegExp("^"+Mg+Sg+Tg+bg+"$"),wg=["material","materials","bones","map"];class Ag{constructor(t,e,i){const n=i||Qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}}class Qt{constructor(t,e,i){this.path=e,this.parsedPath=i||Qt.parseTrackName(e),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,e,i):new Qt(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xg,"")}static parseTrackName(t){const e=Eg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);wg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,i=e.objectName,n=e.propertyName;let s=e.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[n];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=Ag;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const iu=new zt;class Cg{constructor(t,e,i=0,n=1/0){this.ray=new Fs(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return iu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(iu),this}intersectObject(t,e=!0,i=[]){return Jl(t,this,i,e),i.sort(nu),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Jl(t[n],this,i,e);return i.sort(nu),i}}function nu(r,t){return r.distance-t.distance}function Jl(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Jl(s[a],t,e,!0)}}function ru(r,t,e,i){const n=Rg(i);switch(e){case gf:return r*t;case _c:return r*t/n.components*n.byteLength;case vc:return r*t/n.components*n.byteLength;case vf:return r*t*2/n.components*n.byteLength;case xc:return r*t*2/n.components*n.byteLength;case _f:return r*t*3/n.components*n.byteLength;case yi:return r*t*4/n.components*n.byteLength;case yc:return r*t*4/n.components*n.byteLength;case Ea:case wa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Aa:case Ca:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ml:case Tl:return Math.max(r,16)*Math.max(t,8)/4;case yl:case Sl:return Math.max(r,8)*Math.max(t,8)/2;case bl:case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Al:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Rl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ll:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Il:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ul:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ra:case Vl:case Hl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xf:case Gl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Wl:case Xl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(r){switch(r){case Oi:case df:return{byteLength:1,components:1};case Ss:case pf:case Qi:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case jn:case pc:case Ai:return{byteLength:4,components:1};case mf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wf(){let r=null,t=!1,e=null,i=null;function n(s,a){e(s,a),i=r.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Pg(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}var Dg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ug=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,t_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,i_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,n_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,T_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,t0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,i0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const P0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,B0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,k0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,j0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ev=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ot={alphahash_fragment:Dg,alphahash_pars_fragment:Lg,alphamap_fragment:Ig,alphamap_pars_fragment:Ug,alphatest_fragment:Ng,alphatest_pars_fragment:Fg,aomap_fragment:Og,aomap_pars_fragment:Bg,batching_pars_vertex:kg,batching_vertex:zg,begin_vertex:Vg,beginnormal_vertex:Hg,bsdfs:Gg,iridescence_fragment:Wg,bumpmap_pars_fragment:Xg,clipping_planes_fragment:Yg,clipping_planes_pars_fragment:qg,clipping_planes_pars_vertex:Kg,clipping_planes_vertex:$g,color_fragment:Jg,color_pars_fragment:Zg,color_pars_vertex:jg,color_vertex:Qg,common:t_,cube_uv_reflection_fragment:e_,defaultnormal_vertex:i_,displacementmap_pars_vertex:n_,displacementmap_vertex:r_,emissivemap_fragment:s_,emissivemap_pars_fragment:a_,colorspace_fragment:o_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:h_,envmap_pars_fragment:u_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:T_,envmap_vertex:d_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:v_,lightmap_pars_fragment:x_,lights_lambert_fragment:y_,lights_lambert_pars_fragment:M_,lights_pars_begin:S_,lights_toon_fragment:b_,lights_toon_pars_fragment:E_,lights_phong_fragment:w_,lights_phong_pars_fragment:A_,lights_physical_fragment:C_,lights_physical_pars_fragment:R_,lights_fragment_begin:P_,lights_fragment_maps:D_,lights_fragment_end:L_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:N_,logdepthbuf_vertex:F_,map_fragment:O_,map_pars_fragment:B_,map_particle_fragment:k_,map_particle_pars_fragment:z_,metalnessmap_fragment:V_,metalnessmap_pars_fragment:H_,morphinstance_vertex:G_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:Y_,morphtarget_vertex:q_,normal_fragment_begin:K_,normal_fragment_maps:$_,normal_pars_fragment:J_,normal_pars_vertex:Z_,normal_vertex:j_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:t0,clearcoat_normal_fragment_maps:e0,clearcoat_pars_fragment:i0,iridescence_pars_fragment:n0,opaque_fragment:r0,packing:s0,premultiplied_alpha_fragment:a0,project_vertex:o0,dithering_fragment:l0,dithering_pars_fragment:c0,roughnessmap_fragment:h0,roughnessmap_pars_fragment:u0,shadowmap_pars_fragment:f0,shadowmap_pars_vertex:d0,shadowmap_vertex:p0,shadowmask_pars_fragment:m0,skinbase_vertex:g0,skinning_pars_vertex:_0,skinning_vertex:v0,skinnormal_vertex:x0,specularmap_fragment:y0,specularmap_pars_fragment:M0,tonemapping_fragment:S0,tonemapping_pars_fragment:T0,transmission_fragment:b0,transmission_pars_fragment:E0,uv_pars_fragment:w0,uv_pars_vertex:A0,uv_vertex:C0,worldpos_vertex:R0,background_vert:P0,background_frag:D0,backgroundCube_vert:L0,backgroundCube_frag:I0,cube_vert:U0,cube_frag:N0,depth_vert:F0,depth_frag:O0,distanceRGBA_vert:B0,distanceRGBA_frag:k0,equirect_vert:z0,equirect_frag:V0,linedashed_vert:H0,linedashed_frag:G0,meshbasic_vert:W0,meshbasic_frag:X0,meshlambert_vert:Y0,meshlambert_frag:q0,meshmatcap_vert:K0,meshmatcap_frag:$0,meshnormal_vert:J0,meshnormal_frag:Z0,meshphong_vert:j0,meshphong_frag:Q0,meshphysical_vert:tv,meshphysical_frag:ev,meshtoon_vert:iv,meshtoon_frag:nv,points_vert:rv,points_frag:sv,shadow_vert:av,shadow_frag:ov,sprite_vert:lv,sprite_frag:cv},st={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ii={basic:{uniforms:We([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:We([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:We([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:We([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:We([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:We([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:We([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:We([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:We([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:We([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:We([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:We([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:We([st.lights,st.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ii.physical={uniforms:We([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const xa={r:0,b:0,g:0},Fn=new Bi,hv=new zt;function uv(r,t,e,i,n,s,a){const o=new Rt(0);let l=s===!0?0:1,c,h,u=null,f=0,d=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function g(x){let v=!1;const E=_(x);E===null?p(o,l):E&&E.isColor&&(p(E,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Qa)?(h===void 0&&(h=new ge(new Os(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Br(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Fn.copy(v.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hv.makeRotationFromEuler(Fn)),h.material.toneMapped=Xt.getTransfer(E.colorSpace)!==Jt,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ge(new en(2,2),new Ae({name:"BackgroundMaterial",uniforms:Br(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(E.colorSpace)!==Jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(xa,Af(r)),i.buffers.color.setClear(xa.r,xa.g,xa.b,v,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:g,addToRenderList:m,dispose:S}}function fv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null);let s=n,a=!1;function o(T,P,V,O,B){let q=!1;const G=u(O,V,P);s!==G&&(s=G,c(s.object)),q=d(T,O,V,B),q&&_(T,O,V,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(T,P,V,O),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,V){const O=V.wireframe===!0;let B=i[T.id];B===void 0&&(B={},i[T.id]=B);let q=B[P.id];q===void 0&&(q={},B[P.id]=q);let G=q[O];return G===void 0&&(G=f(l()),q[O]=G),G}function f(T){const P=[],V=[],O=[];for(let B=0;B<e;B++)P[B]=0,V[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,P,V,O){const B=s.attributes,q=P.attributes;let G=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){const ot=B[H];let _t=q[H];if(_t===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(_t=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(_t=T.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function _(T,P,V,O){const B={},q=P.attributes;let G=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){let ot=q[H];ot===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor));const _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),B[H]=_t,G++}s.attributes=B,s.attributesNum=G,s.index=O}function g(){const T=s.newAttributes;for(let P=0,V=T.length;P<V;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const V=s.newAttributes,O=s.enabledAttributes,B=s.attributeDivisors;V[T]=1,O[T]===0&&(r.enableVertexAttribArray(T),O[T]=1),B[T]!==P&&(r.vertexAttribDivisor(T,P),B[T]=P)}function S(){const T=s.newAttributes,P=s.enabledAttributes;for(let V=0,O=P.length;V<O;V++)P[V]!==T[V]&&(r.disableVertexAttribArray(V),P[V]=0)}function x(T,P,V,O,B,q,G){G===!0?r.vertexAttribIPointer(T,P,V,B,q):r.vertexAttribPointer(T,P,V,O,B,q)}function v(T,P,V,O){g();const B=O.attributes,q=V.getAttributes(),G=P.defaultAttributeValues;for(const $ in q){const H=q[$];if(H.location>=0){let nt=B[$];if(nt===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor)),nt!==void 0){const ot=nt.normalized,_t=nt.itemSize,Dt=t.get(nt);if(Dt===void 0)continue;const te=Dt.buffer,Vt=Dt.type,W=Dt.bytesPerElement,lt=Vt===r.INT||Vt===r.UNSIGNED_INT||nt.gpuType===pc;if(nt.isInterleavedBufferAttribute){const it=nt.data,wt=it.stride,At=nt.offset;if(it.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,it.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);r.bindBuffer(r.ARRAY_BUFFER,te);for(let It=0;It<H.locationSize;It++)x(H.location+It,_t/H.locationSize,Vt,ot,wt*W,(At+_t/H.locationSize*It)*W,lt)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<H.locationSize;it++)p(H.location+it,nt.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<H.locationSize;it++)m(H.location+it);r.bindBuffer(r.ARRAY_BUFFER,te);for(let it=0;it<H.locationSize;it++)x(H.location+it,_t/H.locationSize,Vt,ot,_t*W,_t/H.locationSize*it*W,lt)}}else if(G!==void 0){const ot=G[$];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(H.location,ot);break;case 3:r.vertexAttrib3fv(H.location,ot);break;case 4:r.vertexAttrib4fv(H.location,ot);break;default:r.vertexAttrib1fv(H.location,ot)}}}}S()}function E(){R();for(const T in i){const P=i[T];for(const V in P){const O=P[V];for(const B in O)h(O[B].object),delete O[B];delete P[V]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const V in P){const O=P[V];for(const B in O)h(O[B].object),delete O[B];delete P[V]}delete i[T.id]}function w(T){for(const P in i){const V=i[P];if(V[T.id]===void 0)continue;const O=V[T.id];for(const B in O)h(O[B].object),delete O[B];delete V[T.id]}}function R(){y(),a=!0,s!==n&&(s=n,c(s.object))}function y(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function dv(r,t,e){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pv(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(w){return!(w!==yi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===Qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Oi&&i.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ai&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function mv(r){const t=this;let e=null,i=0,n=!1,s=!1;const a=new zn,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!m)s?h(null):c();else{const S=s?0:i,x=S*4;let v=p.clippingState||null;l.value=v,v=h(_,f,x,d);for(let E=0;E!==x;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==g;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function gv(r){let t=new WeakMap;function e(a,o){return o===gl?a.mapping=Ur:o===_l&&(a.mapping=Nr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===gl||o===_l)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new bm(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",n),e(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const br=4,su=[.125,.215,.35,.446,.526,.582],Wn=20,Xo=new Pc,au=new Rt;let Yo=null,qo=0,Ko=0,$o=!1;const Vn=(1+Math.sqrt(5))/2,Mr=1/Vn,ou=[new D(-Vn,Mr,0),new D(Vn,Mr,0),new D(-Mr,0,Vn),new D(Mr,0,Vn),new D(0,Vn,-Mr),new D(0,Vn,Mr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],_v=new D;class lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100,s={}){const{size:a=256,position:o=_v}=s;Yo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,qo,Ko),this._renderer.xr.enabled=$o,t.scissorTest=!1,ya(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ur||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),$o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Qi,format:yi,colorSpace:Fr,depthBuffer:!1},n=cu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cu(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vv(s)),this._blurMaterial=xv(s,t,e)}return n}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,i,n,s){const l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(au),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null));const g=new Tn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),m=new ge(new Os,g);let p=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(au),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const E=this._cubeSize;ya(n,v*E,x>2?E:0,E,E),u.setRenderTarget(n),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Ur||t.mapping===Nr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new ge(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;ya(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Xo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ou[(n-s-1)%ou.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,n,"latitudinal",s),this._halfBlur(a,t,i,i,n,"longitudinal",s)}_halfBlur(t,e,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ge(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Wn-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Wn;m>Wn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let S=0;for(let w=0;w<Wn;++w){const R=w/g,y=Math.exp(-R*R/2);p.push(y),w===0?S+=y:w<m&&(S+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const v=this._sizeLods[n],E=3*v*(n>x-br?n-x+br:0),A=4*(this._cubeSize-v);ya(e,E,A,3*v,2*v),l.setRenderTarget(e),l.render(u,Xo)}}function vv(r){const t=[],e=[],i=[];let n=r;const s=r-br+1+su.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);e.push(o);let l=1/o;a>r-br?l=su[a-r+br-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),x=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(y,g*_*A),x.set(f,m*_*A);const T=[A,A,A,A,A,A];v.set(T,p*_*A)}const E=new Ie;E.setAttribute("position",new ne(S,g)),E.setAttribute("uv",new ne(x,m)),E.setAttribute("faceIndex",new ne(v,p)),t.push(E),n>br&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function cu(r,t,e){const i=new Ri(r,t,e);return i.texture.mapping=Qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function xv(r,t,e){const i=new Float32Array(Wn),n=new D(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function hu(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function uu(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yv(r){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===gl||l===_l,h=l===Ur||l===Nr;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new lu(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(e===null&&(e=new lu(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Mv(r){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&Cr("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Sv(r,t,e,i){const n={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete n[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,v=S.length;x<v;x+=3){const E=S[x+0],A=S[x+1],w=S[x+2];f.push(E,A,A,w,w,E)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const E=x+0,A=x+1,w=x+2;f.push(E,A,A,w,w,E)}}else return;const m=new(Sf(f)?wf:Ef)(f,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Tv(r,t,e){let i;function n(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){r.drawElements(i,d,s,f*a),e.update(d,i,1)}function c(f,d,_){_!==0&&(r.drawElementsInstanced(i,d,s,f*a,_),e.update(d,i,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function u(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*g[S];e.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Ev(r,t,e){const i=new WeakMap,n=new Kt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let y=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let v=o.attributes.position.count*x,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*E*4*u),w=new Tf(A,v,E,u);w.type=Ai,w.needsUpdate=!0;const R=x*4;for(let T=0;T<u;T++){const P=m[T],V=p[T],O=S[T],B=v*E*4*T;for(let q=0;q<P.count;q++){const G=q*R;d===!0&&(n.fromBufferAttribute(P,q),A[B+G+0]=n.x,A[B+G+1]=n.y,A[B+G+2]=n.z,A[B+G+3]=0),_===!0&&(n.fromBufferAttribute(V,q),A[B+G+4]=n.x,A[B+G+5]=n.y,A[B+G+6]=n.z,A[B+G+7]=0),g===!0&&(n.fromBufferAttribute(O,q),A[B+G+8]=n.x,A[B+G+9]=n.y,A[B+G+10]=n.z,A[B+G+11]=O.itemSize===4?n.w:1)}}f={count:u,texture:w,size:new at(v,E)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wv(r,t,e,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Xf=new Ne,fu=new Ff(1,1),Yf=new Tf,qf=new lm,Kf=new Rf,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function Jr(r,t,e){const i=r[0];if(i<=0||i>0)return r;const n=t*e;let s=du[n];if(s===void 0&&(s=new Float32Array(n),du[n]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ce(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Re(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ro(r,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function Av(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Cv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2fv(this.addr,t),Re(e,t)}}function Rv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;r.uniform3fv(this.addr,t),Re(e,t)}}function Pv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4fv(this.addr,t),Re(e,t)}}function Dv(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;_u.set(i),r.uniformMatrix2fv(this.addr,!1,_u),Re(e,i)}}function Lv(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;gu.set(i),r.uniformMatrix3fv(this.addr,!1,gu),Re(e,i)}}function Iv(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;mu.set(i),r.uniformMatrix4fv(this.addr,!1,mu),Re(e,i)}}function Uv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Nv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2iv(this.addr,t),Re(e,t)}}function Fv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3iv(this.addr,t),Re(e,t)}}function Ov(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4iv(this.addr,t),Re(e,t)}}function Bv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function kv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;r.uniform2uiv(this.addr,t),Re(e,t)}}function zv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;r.uniform3uiv(this.addr,t),Re(e,t)}}function Vv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;r.uniform4uiv(this.addr,t),Re(e,t)}}function Hv(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(fu.compareFunction=Mf,s=fu):s=Xf,e.setTexture2D(t||s,n)}function Gv(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||qf,n)}function Wv(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Kf,n)}function Xv(r,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Yf,n)}function Yv(r){switch(r){case 5126:return Av;case 35664:return Cv;case 35665:return Rv;case 35666:return Pv;case 35674:return Dv;case 35675:return Lv;case 35676:return Iv;case 5124:case 35670:return Uv;case 35667:case 35671:return Nv;case 35668:case 35672:return Fv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return kv;case 36295:return zv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Hv;case 35679:case 36299:case 36307:return Gv;case 35680:case 36300:case 36308:case 36293:return Wv;case 36289:case 36303:case 36311:case 36292:return Xv}}function qv(r,t){r.uniform1fv(this.addr,t)}function Kv(r,t){const e=Jr(t,this.size,2);r.uniform2fv(this.addr,e)}function $v(r,t){const e=Jr(t,this.size,3);r.uniform3fv(this.addr,e)}function Jv(r,t){const e=Jr(t,this.size,4);r.uniform4fv(this.addr,e)}function Zv(r,t){const e=Jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function jv(r,t){const e=Jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Qv(r,t){const e=Jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function tx(r,t){r.uniform1iv(this.addr,t)}function ex(r,t){r.uniform2iv(this.addr,t)}function ix(r,t){r.uniform3iv(this.addr,t)}function nx(r,t){r.uniform4iv(this.addr,t)}function rx(r,t){r.uniform1uiv(this.addr,t)}function sx(r,t){r.uniform2uiv(this.addr,t)}function ax(r,t){r.uniform3uiv(this.addr,t)}function ox(r,t){r.uniform4uiv(this.addr,t)}function lx(r,t,e){const i=this.cache,n=t.length,s=ro(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTexture2D(t[a]||Xf,s[a])}function cx(r,t,e){const i=this.cache,n=t.length,s=ro(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||qf,s[a])}function hx(r,t,e){const i=this.cache,n=t.length,s=ro(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Kf,s[a])}function ux(r,t,e){const i=this.cache,n=t.length,s=ro(e,n);Ce(i,s)||(r.uniform1iv(this.addr,s),Re(i,s));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Yf,s[a])}function fx(r){switch(r){case 5126:return qv;case 35664:return Kv;case 35665:return $v;case 35666:return Jv;case 35674:return Zv;case 35675:return jv;case 35676:return Qv;case 5124:case 35670:return tx;case 35667:case 35671:return ex;case 35668:case 35672:return ix;case 35669:case 35673:return nx;case 5125:return rx;case 36294:return sx;case 36295:return ax;case 36296:return ox;case 35678:case 36198:case 36298:case 36306:case 35682:return lx;case 35679:case 36299:case 36307:return cx;case 35680:case 36300:case 36308:case 36293:return hx;case 36289:case 36303:case 36311:case 36292:return ux}}class dx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Yv(e.type)}}class px{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fx(e.type)}}class mx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(t,e[o.id],i)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function vu(r,t){r.seq.push(t),r.map[t.id]=t}function gx(r,t,e){const i=r.name,n=i.length;for(Jo.lastIndex=0;;){const s=Jo.exec(i),a=Jo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){vu(e,c===void 0?new dx(o,r,t):new px(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new mx(o),vu(e,u)),e=u}}}class Pa{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=t.getActiveUniform(e,n),a=t.getUniformLocation(e,s.name);gx(s,a,this)}}setValue(t,e,i,n){const s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,s=t.length;n!==s;++n){const a=t[n];a.id in e&&i.push(a)}return i}}function xu(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const _x=37297;let vx=0;function xx(r,t){const e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const yu=new Ft;function yx(r){Xt._getMatrix(yu,Xt.workingColorSpace,r);const t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(r)){case Fa:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Mu(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+xx(r.getShaderSource(t),o)}else return s}function Mx(r,t){const e=yx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sx(r,t){let e;switch(t){case af:e="Linear";break;case of:e="Reinhard";break;case lf:e="Cineon";break;case dc:e="ACESFilmic";break;case hf:e="AgX";break;case uf:e="Neutral";break;case cf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ma=new D;function Tx(){Xt.getLuminanceCoefficients(Ma);const r=Ma.x.toFixed(4),t=Ma.y.toFixed(4),e=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Ex(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wx(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(t,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function fs(r){return r!==""}function Su(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(r){return r.replace(Ax,Rx)}const Cx=new Map;function Rx(r,t){let e=Ot[t];if(e===void 0){const i=Cx.get(t);if(i!==void 0)e=Ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}const Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(r){return r.replace(Px,Dx)}function Dx(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Eu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===rf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function Ix(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Nr:t="ENVMAP_TYPE_CUBE";break;case Qa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ux(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Nr:t="ENVMAP_MODE_REFRACTION";break}return t}function Nx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sf:t="ENVMAP_BLENDING_MULTIPLY";break;case bp:t="ENVMAP_BLENDING_MIX";break;case Ep:t="ENVMAP_BLENDING_ADD";break}return t}function Fx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ox(r,t,e,i){const n=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Lx(e),c=Ix(e),h=Ux(e),u=Nx(e),f=Fx(e),d=bx(e),_=Ex(s),g=n.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[Eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==xn?Sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Mx("linearToOutputTexel",e.outputColorSpace),Tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),a=Zl(a),a=Su(a,e),a=Tu(a,e),o=Zl(o),o=Su(o,e),o=Tu(o,e),a=bu(a),o=bu(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,v=S+p+o,E=xu(n,n.VERTEX_SHADER,x),A=xu(n,n.FRAGMENT_SHADER,v);n.attachShader(g,E),n.attachShader(g,A),e.index0AttributeName!==void 0?n.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const V=n.getProgramInfoLog(g)||"",O=n.getShaderInfoLog(E)||"",B=n.getShaderInfoLog(A)||"",q=V.trim(),G=O.trim(),$=B.trim();let H=!0,nt=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,E,A);else{const ot=Mu(n,E,"vertex"),_t=Mu(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ot+`
`+_t)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||$==="")&&(nt=!1);nt&&(P.diagnostics={runnable:H,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:p}})}n.deleteShader(E),n.deleteShader(A),R=new Pa(n,g),y=wx(n,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=n.getProgramParameter(g,_x)),T},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let Bx=0;class kx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zx(t),e.set(t,i)),i}}class zx{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}}function Vx(r,t,e,i,n,s,a){const o=new Tc,l=new kx,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,T,P,V,O){const B=V.fog,q=O.geometry,G=y.isMeshStandardMaterial?V.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),H=$&&$.mapping===Qa?$.image.height:null,nt=_[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=ot!==void 0?ot.length:0;let Dt=0;q.morphAttributes.position!==void 0&&(Dt=1),q.morphAttributes.normal!==void 0&&(Dt=2),q.morphAttributes.color!==void 0&&(Dt=3);let te,Vt,W,lt;if(nt){const $t=Ii[nt];te=$t.vertexShader,Vt=$t.fragmentShader}else te=y.vertexShader,Vt=y.fragmentShader,l.update(y),W=l.getVertexShaderID(y),lt=l.getFragmentShaderID(y);const it=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),At=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,ye=!!y.map,Wt=!!y.matcap,L=!!$,se=!!y.aoMap,bt=!!y.lightMap,qt=!!y.bumpMap,St=!!y.normalMap,ce=!!y.displacementMap,pt=!!y.emissiveMap,Bt=!!y.metalnessMap,Pe=!!y.roughnessMap,Me=y.anisotropy>0,C=y.clearcoat>0,M=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,J=y.transmission>0,X=Me&&!!y.anisotropyMap,Mt=C&&!!y.clearcoatMap,et=C&&!!y.clearcoatNormalMap,vt=C&&!!y.clearcoatRoughnessMap,xt=F&&!!y.iridescenceMap,Q=F&&!!y.iridescenceThicknessMap,ut=Y&&!!y.sheenColorMap,Pt=Y&&!!y.sheenRoughnessMap,yt=!!y.specularMap,ct=!!y.specularColorMap,Nt=!!y.specularIntensityMap,I=J&&!!y.transmissionMap,tt=J&&!!y.thicknessMap,rt=!!y.gradientMap,dt=!!y.alphaMap,Z=y.alphaTest>0,K=!!y.alphaHash,gt=!!y.extensions;let Ut=xn;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const ae={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:Vt,defines:y.defines,customVertexShaderID:W,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:At,instancingColor:At&&O.instanceColor!==null,instancingMorph:At&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:it===null?r.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Fr,alphaToCoverage:!!y.alphaToCoverage,map:ye,matcap:Wt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:bt,bumpMap:qt,normalMap:St,displacementMap:f&&ce,emissiveMap:pt,normalMapObjectSpace:St&&y.normalMapType===Dp,normalMapTangentSpace:St&&y.normalMapType===yf,metalnessMap:Bt,roughnessMap:Pe,anisotropy:Me,anisotropyMap:X,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:et,clearcoatRoughnessMap:vt,dispersion:M,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ut,sheenRoughnessMap:Pt,specularMap:yt,specularColorMap:ct,specularIntensityMap:Nt,transmission:J,transmissionMap:I,thicknessMap:tt,gradientMap:rt,opaque:y.transparent===!1&&y.blending===Ar&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:Z,alphaHash:K,combine:y.combine,mapUv:ye&&g(y.map.channel),aoMapUv:se&&g(y.aoMap.channel),lightMapUv:bt&&g(y.lightMap.channel),bumpMapUv:qt&&g(y.bumpMap.channel),normalMapUv:St&&g(y.normalMap.channel),displacementMapUv:ce&&g(y.displacementMap.channel),emissiveMapUv:pt&&g(y.emissiveMap.channel),metalnessMapUv:Bt&&g(y.metalnessMap.channel),roughnessMapUv:Pe&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:Mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(y.sheenRoughnessMap.channel),specularMapUv:yt&&g(y.specularMap.channel),specularColorMapUv:ct&&g(y.specularColorMap.channel),specularIntensityMapUv:Nt&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:tt&&g(y.thicknessMap.channel),alphaMapUv:dt&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(St||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ye||dt),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Dt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ye&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===Jt,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===Je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||It)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=c.has(1),ae.vertexUv2s=c.has(2),ae.vertexUv3s=c.has(3),c.clear(),ae}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(T,y),x(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const T=_[y.type];let P;if(T){const V=Ii[T];P=As.clone(V.uniforms)}else P=y.uniforms;return P}function E(y,T){let P;for(let V=0,O=h.length;V<O;V++){const B=h[V];if(B.cacheKey===T){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Ox(r,T,y,s),h.push(P)),P}function A(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function Hx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function Gx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function wu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Au(){const r=[];let t=0;const e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function a(u,f,d,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,f,d,_,g,m){const p=a(u,f,d,_,g,m);d.transmission>0?i.push(p):d.transparent===!0?n.push(p):e.push(p)}function l(u,f,d,_,g,m){const p=a(u,f,d,_,g,m);d.transmission>0?i.unshift(p):d.transparent===!0?n.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Gx),i.length>1&&i.sort(f||wu),n.length>1&&n.sort(f||wu)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function Wx(){let r=new WeakMap;function t(i,n){const s=r.get(i);let a;return s===void 0?(a=new Au,r.set(i,[a])):n>=s.length?(a=new Au,s.push(a)):a=s[n],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Xx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Yx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let qx=0;function Kx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function $x(r){const t=new Xx,e=Yx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,s=new zt,a=new zt;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,x=0,v=0,E=0,A=0,w=0;c.sort(Kx);for(let y=0,T=c.length;y<T;y++){const P=c[y],V=P.color,O=P.intensity,B=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*O,u+=V.g*O,f+=V.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],O);w++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[d]=H,i.directionalShadowMap[d]=q,i.directionalShadowMatrix[d]=P.shadow.matrix,S++}i.directional[d]=G,d++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(V).multiplyScalar(O),G.distance=B,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[g]=G;const $=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[g]=$.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[g]=H,i.spotShadowMap[g]=q,v++}g++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(V).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=w,i.version=qx++)}function l(c,h){let u=0,f=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Cu(r){const t=new $x(r),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Jx(r){let t=new WeakMap;function e(n,s=0){const a=t.get(n);let o;return a===void 0?(o=new Cu(r),t.set(n,[o])):s>=a.length?(o=new Cu(r),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qx(r,t,e){let i=new Ec;const n=new at,s=new at,a=new Kt,o=new Qm({depthPacking:Pp}),l=new tg,c={},h=e.maxTextureSize,u={[Sn]:Je,[Je]:Sn,[Ke]:Ke},f=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Zx,fragmentShader:jx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Ie;_.setAttribute("position",new ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ge(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rf;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),V=r.state;V.setBlending(ji),V.buffers.depth.getReversed()?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=p!==qi&&this.type===qi,B=p===qi&&this.type!==qi;for(let q=0,G=A.length;q<G;q++){const $=A[q],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);const nt=H.getFrameExtents();if(n.multiply(nt),s.copy(H.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/nt.x),n.x=s.x*nt.x,H.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/nt.y),n.y=s.y*nt.y,H.mapSize.y=s.y)),H.map===null||O===!0||B===!0){const _t=this.type!==qi?{minFilter:ui,magFilter:ui}:{};H.map!==null&&H.map.dispose(),H.map=new Ri(n.x,n.y,_t),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ot=H.getViewportCount();for(let _t=0;_t<ot;_t++){const Dt=H.getViewport(_t);a.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),V.viewport(a),H.updateMatrices($,_t),i=H.getFrustum(),v(w,R,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===qi&&S(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,T,P)};function S(A,w){const R=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ri(n.x,n.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,R,d,g,null)}function x(A,w,R,y){let T=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const V=T.uuid,O=w.uuid;let B=c[V];B===void 0&&(B={},c[V]=B);let q=B[O];q===void 0&&(q=T.clone(),B[O]=q,w.addEventListener("dispose",E)),T=q}if(T.visible=w.visible,T.wireframe=w.wireframe,y===qi?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=r.properties.get(T);V.light=R}return T}function v(A,w,R,y,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===qi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=t.update(A),B=A.material;if(Array.isArray(B)){const q=O.groups;for(let G=0,$=q.length;G<$;G++){const H=q[G],nt=B[H.materialIndex];if(nt&&nt.visible){const ot=x(A,nt,y,T);A.onBeforeShadow(r,A,w,R,O,ot,H),r.renderBufferDirect(R,null,O,ot,A,H),A.onAfterShadow(r,A,w,R,O,ot,H)}}}else if(B.visible){const q=x(A,B,y,T);A.onBeforeShadow(r,A,w,R,O,q,null),r.renderBufferDirect(R,null,O,q,A,null),A.onAfterShadow(r,A,w,R,O,q,null)}}const V=A.children;for(let O=0,B=V.length;O<B;O++)v(V[O],w,R,y,T)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const y=c[R],T=A.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const ty={[cl]:hl,[ul]:pl,[fl]:ml,[Ir]:dl,[hl]:cl,[pl]:ul,[ml]:fl,[dl]:Ir};function ey(r,t){function e(){let I=!1;const tt=new Kt;let rt=null;const dt=new Kt(0,0,0,0);return{setMask:function(Z){rt!==Z&&!I&&(r.colorMask(Z,Z,Z,Z),rt=Z)},setLocked:function(Z){I=Z},setClear:function(Z,K,gt,Ut,ae){ae===!0&&(Z*=Ut,K*=Ut,gt*=Ut),tt.set(Z,K,gt,Ut),dt.equals(tt)===!1&&(r.clearColor(Z,K,gt,Ut),dt.copy(tt))},reset:function(){I=!1,rt=null,dt.set(-1,0,0,0)}}}function i(){let I=!1,tt=!1,rt=null,dt=null,Z=null;return{setReversed:function(K){if(tt!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),tt=K;const Ut=Z;Z=null,this.setClear(Ut)}},getReversed:function(){return tt},setTest:function(K){K?it(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(K){rt!==K&&!I&&(r.depthMask(K),rt=K)},setFunc:function(K){if(tt&&(K=ty[K]),dt!==K){switch(K){case cl:r.depthFunc(r.NEVER);break;case hl:r.depthFunc(r.ALWAYS);break;case ul:r.depthFunc(r.LESS);break;case Ir:r.depthFunc(r.LEQUAL);break;case fl:r.depthFunc(r.EQUAL);break;case dl:r.depthFunc(r.GEQUAL);break;case pl:r.depthFunc(r.GREATER);break;case ml:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=K}},setLocked:function(K){I=K},setClear:function(K){Z!==K&&(tt&&(K=1-K),r.clearDepth(K),Z=K)},reset:function(){I=!1,rt=null,dt=null,Z=null,tt=!1}}}function n(){let I=!1,tt=null,rt=null,dt=null,Z=null,K=null,gt=null,Ut=null,ae=null;return{setTest:function($t){I||($t?it(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function($t){tt!==$t&&!I&&(r.stencilMask($t),tt=$t)},setFunc:function($t,zi,Di){(rt!==$t||dt!==zi||Z!==Di)&&(r.stencilFunc($t,zi,Di),rt=$t,dt=zi,Z=Di)},setOp:function($t,zi,Di){(K!==$t||gt!==zi||Ut!==Di)&&(r.stencilOp($t,zi,Di),K=$t,gt=zi,Ut=Di)},setLocked:function($t){I=$t},setClear:function($t){ae!==$t&&(r.clearStencil($t),ae=$t)},reset:function(){I=!1,tt=null,rt=null,dt=null,Z=null,K=null,gt=null,Ut=null,ae=null}}}const s=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,x=null,v=null,E=null,A=null,w=new Rt(0,0,0),R=0,y=!1,T=null,P=null,V=null,O=null,B=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let nt=null,ot={};const _t=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),te=new Kt().fromArray(_t),Vt=new Kt().fromArray(Dt);function W(I,tt,rt,dt){const Z=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let gt=0;gt<rt;gt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(tt+gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return K}const lt={};lt[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),lt[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),lt[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(r.DEPTH_TEST),a.setFunc(Ir),qt(!1),St(oh),it(r.CULL_FACE),se(ji);function it(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function wt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function At(I,tt){return u[I]!==tt?(r.bindFramebuffer(I,tt),u[I]=tt,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function It(I,tt){let rt=d,dt=!1;if(I){rt=f.get(tt),rt===void 0&&(rt=[],f.set(tt,rt));const Z=I.textures;if(rt.length!==Z.length||rt[0]!==r.COLOR_ATTACHMENT0){for(let K=0,gt=Z.length;K<gt;K++)rt[K]=r.COLOR_ATTACHMENT0+K;rt.length=Z.length,dt=!0}}else rt[0]!==r.BACK&&(rt[0]=r.BACK,dt=!0);dt&&r.drawBuffers(rt)}function ye(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const Wt={[Gn]:r.FUNC_ADD,[op]:r.FUNC_SUBTRACT,[lp]:r.FUNC_REVERSE_SUBTRACT};Wt[cp]=r.MIN,Wt[hp]=r.MAX;const L={[up]:r.ZERO,[fp]:r.ONE,[dp]:r.SRC_COLOR,[ol]:r.SRC_ALPHA,[xp]:r.SRC_ALPHA_SATURATE,[_p]:r.DST_COLOR,[mp]:r.DST_ALPHA,[pp]:r.ONE_MINUS_SRC_COLOR,[ll]:r.ONE_MINUS_SRC_ALPHA,[vp]:r.ONE_MINUS_DST_COLOR,[gp]:r.ONE_MINUS_DST_ALPHA,[yp]:r.CONSTANT_COLOR,[Mp]:r.ONE_MINUS_CONSTANT_COLOR,[Sp]:r.CONSTANT_ALPHA,[Tp]:r.ONE_MINUS_CONSTANT_ALPHA};function se(I,tt,rt,dt,Z,K,gt,Ut,ae,$t){if(I===ji){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(it(r.BLEND),g=!0),I!==ap){if(I!==m||$t!==y){if((p!==Gn||v!==Gn)&&(r.blendEquation(r.FUNC_ADD),p=Gn,v=Gn),$t)switch(I){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Le:r.blendFunc(r.ONE,r.ONE);break;case lh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ch:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Le:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ch:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,E=null,A=null,w.set(0,0,0),R=0,m=I,y=$t}return}Z=Z||tt,K=K||rt,gt=gt||dt,(tt!==p||Z!==v)&&(r.blendEquationSeparate(Wt[tt],Wt[Z]),p=tt,v=Z),(rt!==S||dt!==x||K!==E||gt!==A)&&(r.blendFuncSeparate(L[rt],L[dt],L[K],L[gt]),S=rt,x=dt,E=K,A=gt),(Ut.equals(w)===!1||ae!==R)&&(r.blendColor(Ut.r,Ut.g,Ut.b,ae),w.copy(Ut),R=ae),m=I,y=!1}function bt(I,tt){I.side===Ke?wt(r.CULL_FACE):it(r.CULL_FACE);let rt=I.side===Je;tt&&(rt=!rt),qt(rt),I.blending===Ar&&I.transparent===!1?se(ji):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const dt=I.stencilWrite;o.setTest(dt),dt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(I){T!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),T=I)}function St(I){I!==np?(it(r.CULL_FACE),I!==P&&(I===oh?r.cullFace(r.BACK):I===rp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),P=I}function ce(I){I!==V&&(G&&r.lineWidth(I),V=I)}function pt(I,tt,rt){I?(it(r.POLYGON_OFFSET_FILL),(O!==tt||B!==rt)&&(r.polygonOffset(tt,rt),O=tt,B=rt)):wt(r.POLYGON_OFFSET_FILL)}function Bt(I){I?it(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Pe(I){I===void 0&&(I=r.TEXTURE0+q-1),nt!==I&&(r.activeTexture(I),nt=I)}function Me(I,tt,rt){rt===void 0&&(nt===null?rt=r.TEXTURE0+q-1:rt=nt);let dt=ot[rt];dt===void 0&&(dt={type:void 0,texture:void 0},ot[rt]=dt),(dt.type!==I||dt.texture!==tt)&&(nt!==rt&&(r.activeTexture(rt),nt=rt),r.bindTexture(I,tt||lt[I]),dt.type=I,dt.texture=tt)}function C(){const I=ot[nt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){te.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function Pt(I){Vt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Vt.copy(I))}function yt(I,tt){let rt=c.get(tt);rt===void 0&&(rt=new WeakMap,c.set(tt,rt));let dt=rt.get(I);dt===void 0&&(dt=r.getUniformBlockIndex(tt,I.name),rt.set(I,dt))}function ct(I,tt){const dt=c.get(tt).get(I);l.get(tt)!==dt&&(r.uniformBlockBinding(tt,dt,I.__bindingPointIndex),l.set(tt,dt))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},nt=null,ot={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,x=null,v=null,E=null,A=null,w=new Rt(0,0,0),R=0,y=!1,T=null,P=null,V=null,O=null,B=null,te.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:it,disable:wt,bindFramebuffer:At,drawBuffers:It,useProgram:ye,setBlending:se,setMaterial:bt,setFlipSided:qt,setCullFace:St,setLineWidth:ce,setPolygonOffset:pt,setScissorTest:Bt,activeTexture:Pe,bindTexture:Me,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:xt,texImage3D:Q,updateUBOMapping:yt,uniformBlockBinding:ct,texStorage2D:et,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:ut,viewport:Pt,reset:Nt}}function iy(r,t,e,i,n,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return d?new OffscreenCanvas(C,M):ws("canvas")}function g(C,M,F){let Y=1;const J=Me(C);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*J.width),Mt=Math.floor(Y*J.height);u===void 0&&(u=_(X,Mt));const et=M?_(X,Mt):u;return et.width=X,et.height=Mt,et.getContext("2d").drawImage(C,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),et}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(C,M,F,Y,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=M;if(M===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),M===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),M===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),M===r.RGBA){const Mt=J?Fa:Xt.getTransfer(Y);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=Mt===Jt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(C,M){let F;return C?M===null||M===jn||M===Ts?F=r.DEPTH24_STENCIL8:M===Ai?F=r.DEPTH32F_STENCIL8:M===Ss&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===jn||M===Ts?F=r.DEPTH_COMPONENT24:M===Ai?F=r.DEPTH_COMPONENT32F:M===Ss&&(F=r.DEPTH_COMPONENT16),F}function E(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ui&&C.minFilter!==li?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&h.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),T(M)}function R(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,Y=f.get(F);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(Y).length===0&&f.delete(F)}i.remove(C)}function y(C){const M=i.get(C);r.deleteTexture(M.__webglTexture);const F=C.source,Y=f.get(F);delete Y[M.__cacheKey],a.memory.textures--}function T(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let Y=0,J=F.length;Y<J;Y++){const X=i.get(F[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(F[Y])}i.remove(C)}let P=0;function V(){P=0}function O(){const C=P;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const F=i.get(C);if(C.isVideoTexture&&Bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,C,M);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function G(C,M){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){lt(F,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function $(C,M){const F=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){lt(F,C,M);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function H(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){it(F,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}const nt={[vl]:r.REPEAT,[Xn]:r.CLAMP_TO_EDGE,[xl]:r.MIRRORED_REPEAT},ot={[ui]:r.NEAREST,[Ap]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[li]:r.LINEAR,[ho]:r.LINEAR_MIPMAP_NEAREST,[Yn]:r.LINEAR_MIPMAP_LINEAR},_t={[Lp]:r.NEVER,[Bp]:r.ALWAYS,[Ip]:r.LESS,[Mf]:r.LEQUAL,[Up]:r.EQUAL,[Op]:r.GEQUAL,[Np]:r.GREATER,[Fp]:r.NOTEQUAL};function Dt(C,M){if(M.type===Ai&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===li||M.magFilter===ho||M.magFilter===Ws||M.magFilter===Yn||M.minFilter===li||M.minFilter===ho||M.minFilter===Ws||M.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,nt[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,nt[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,nt[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ot[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ui||M.minFilter!==Ws&&M.minFilter!==Yn||M.type===Ai&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const X=B(M);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&y(M)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return F}function Vt(C,M,F){return Math.floor(Math.floor(C/F)/M)}function W(C,M,F,Y){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,F,Y,M.data);else{X.sort((Q,ut)=>Q.start-ut.start);let Mt=0;for(let Q=1;Q<X.length;Q++){const ut=X[Mt],Pt=X[Q],yt=ut.start+ut.count,ct=Vt(Pt.start,M.width,4),Nt=Vt(ut.start,M.width,4);Pt.start<=yt+1&&ct===Nt&&Vt(Pt.start+Pt.count-1,M.width,4)===ct?ut.count=Math.max(ut.count,Pt.start+Pt.count-ut.start):(++Mt,X[Mt]=Pt)}X.length=Mt+1;const et=r.getParameter(r.UNPACK_ROW_LENGTH),vt=r.getParameter(r.UNPACK_SKIP_PIXELS),xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Q=0,ut=X.length;Q<ut;Q++){const Pt=X[Q],yt=Math.floor(Pt.start/4),ct=Math.ceil(Pt.count/4),Nt=yt%M.width,I=Math.floor(yt/M.width),tt=ct,rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Nt),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,Nt,I,tt,rt,F,Y,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,et),r.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,xt)}}function lt(C,M,F){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const J=te(C,M),X=M.source;e.bindTexture(Y,C.__webglTexture,r.TEXTURE0+F);const Mt=i.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(r.TEXTURE0+F);const et=Xt.getPrimaries(Xt.workingColorSpace),vt=M.colorSpace===mn?null:Xt.getPrimaries(M.colorSpace),xt=M.colorSpace===mn||et===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Q=g(M.image,!1,n.maxTextureSize);Q=Pe(M,Q);const ut=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type);let yt=x(M.internalFormat,ut,Pt,M.colorSpace,M.isVideoTexture);Dt(Y,M);let ct;const Nt=M.mipmaps,I=M.isVideoTexture!==!0,tt=Mt.__version===void 0||J===!0,rt=X.dataReady,dt=E(M,Q);if(M.isDepthTexture)yt=v(M.format===Es,M.type),tt&&(I?e.texStorage2D(r.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,yt,Q.width,Q.height,0,ut,Pt,null));else if(M.isDataTexture)if(Nt.length>0){I&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,yt,Nt[0].width,Nt[0].height);for(let Z=0,K=Nt.length;Z<K;Z++)ct=Nt[Z],I?rt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ct.width,ct.height,ut,Pt,ct.data):e.texImage2D(r.TEXTURE_2D,Z,yt,ct.width,ct.height,0,ut,Pt,ct.data);M.generateMipmaps=!1}else I?(tt&&e.texStorage2D(r.TEXTURE_2D,dt,yt,Q.width,Q.height),rt&&W(M,Q,ut,Pt)):e.texImage2D(r.TEXTURE_2D,0,yt,Q.width,Q.height,0,ut,Pt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,yt,Nt[0].width,Nt[0].height,Q.depth);for(let Z=0,K=Nt.length;Z<K;Z++)if(ct=Nt[Z],M.format!==yi)if(ut!==null)if(I){if(rt)if(M.layerUpdates.size>0){const gt=ru(ct.width,ct.height,M.format,M.type);for(const Ut of M.layerUpdates){const ae=ct.data.subarray(Ut*gt/ct.data.BYTES_PER_ELEMENT,(Ut+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Ut,ct.width,ct.height,1,ut,ae)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,Q.depth,ut,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,yt,ct.width,ct.height,Q.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,Q.depth,ut,Pt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,yt,ct.width,ct.height,Q.depth,0,ut,Pt,ct.data)}else{I&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,yt,Nt[0].width,Nt[0].height);for(let Z=0,K=Nt.length;Z<K;Z++)ct=Nt[Z],M.format!==yi?ut!==null?I?rt&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ct.width,ct.height,ut,Pt,ct.data):e.texImage2D(r.TEXTURE_2D,Z,yt,ct.width,ct.height,0,ut,Pt,ct.data)}else if(M.isDataArrayTexture)if(I){if(tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,yt,Q.width,Q.height,Q.depth),rt)if(M.layerUpdates.size>0){const Z=ru(Q.width,Q.height,M.format,M.type);for(const K of M.layerUpdates){const gt=Q.data.subarray(K*Z/Q.data.BYTES_PER_ELEMENT,(K+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ut,Pt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Pt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,ut,Pt,Q.data);else if(M.isData3DTexture)I?(tt&&e.texStorage3D(r.TEXTURE_3D,dt,yt,Q.width,Q.height,Q.depth),rt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Pt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,ut,Pt,Q.data);else if(M.isFramebufferTexture){if(tt)if(I)e.texStorage2D(r.TEXTURE_2D,dt,yt,Q.width,Q.height);else{let Z=Q.width,K=Q.height;for(let gt=0;gt<dt;gt++)e.texImage2D(r.TEXTURE_2D,gt,yt,Z,K,0,ut,Pt,null),Z>>=1,K>>=1}}else if(Nt.length>0){if(I&&tt){const Z=Me(Nt[0]);e.texStorage2D(r.TEXTURE_2D,dt,yt,Z.width,Z.height)}for(let Z=0,K=Nt.length;Z<K;Z++)ct=Nt[Z],I?rt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ut,Pt,ct):e.texImage2D(r.TEXTURE_2D,Z,yt,ut,Pt,ct);M.generateMipmaps=!1}else if(I){if(tt){const Z=Me(Q);e.texStorage2D(r.TEXTURE_2D,dt,yt,Z.width,Z.height)}rt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Pt,Q)}else e.texImage2D(r.TEXTURE_2D,0,yt,ut,Pt,Q);m(M)&&p(Y),Mt.__version=X.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function it(C,M,F){if(M.image.length!==6)return;const Y=te(C,M),J=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+F);const X=i.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(r.TEXTURE0+F);const Mt=Xt.getPrimaries(Xt.workingColorSpace),et=M.colorSpace===mn?null:Xt.getPrimaries(M.colorSpace),vt=M.colorSpace===mn||Mt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!xt&&!Q?ut[K]=g(M.image[K],!0,n.maxCubemapSize):ut[K]=Q?M.image[K].image:M.image[K],ut[K]=Pe(M,ut[K]);const Pt=ut[0],yt=s.convert(M.format,M.colorSpace),ct=s.convert(M.type),Nt=x(M.internalFormat,yt,ct,M.colorSpace),I=M.isVideoTexture!==!0,tt=X.__version===void 0||Y===!0,rt=J.dataReady;let dt=E(M,Pt);Dt(r.TEXTURE_CUBE_MAP,M);let Z;if(xt){I&&tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Nt,Pt.width,Pt.height);for(let K=0;K<6;K++){Z=ut[K].mipmaps;for(let gt=0;gt<Z.length;gt++){const Ut=Z[gt];M.format!==yi?yt!==null?I?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,yt,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,yt,ct,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Nt,Ut.width,Ut.height,0,yt,ct,Ut.data)}}}else{if(Z=M.mipmaps,I&&tt){Z.length>0&&dt++;const K=Me(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Nt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,yt,ct,ut[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,ut[K].width,ut[K].height,0,yt,ct,ut[K].data);for(let gt=0;gt<Z.length;gt++){const ae=Z[gt].image[K].image;I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,ae.width,ae.height,yt,ct,ae.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Nt,ae.width,ae.height,0,yt,ct,ae.data)}}else{I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,ct,ut[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,yt,ct,ut[K]);for(let gt=0;gt<Z.length;gt++){const Ut=Z[gt];I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,yt,ct,Ut.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Nt,yt,ct,Ut.image[K])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),X.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function wt(C,M,F,Y,J,X){const Mt=s.convert(F.format,F.colorSpace),et=s.convert(F.type),vt=x(F.internalFormat,Mt,et,F.colorSpace),xt=i.get(M),Q=i.get(F);if(Q.__renderTarget=M,!xt.__hasExternalTextures){const ut=Math.max(1,M.width>>X),Pt=Math.max(1,M.height>>X);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,X,vt,ut,Pt,M.depth,0,Mt,et,null):e.texImage2D(J,X,vt,ut,Pt,0,Mt,et,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),pt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,Q.__webglTexture,0,ce(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,Q.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(C,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=v(M.stencilBuffer,J),Mt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=ce(M);pt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,X,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,X,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,C)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const X=Y[J],Mt=s.convert(X.format,X.colorSpace),et=s.convert(X.type),vt=x(X.internalFormat,Mt,et,X.colorSpace),xt=ce(M);F&&pt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,M.width,M.height):pt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,vt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,vt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const J=Y.__webglTexture,X=ce(M);if(M.depthTexture.format===bs)pt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===Es)pt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ye(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?It(M.__webglFramebuffer[0],C):It(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),At(M.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),At(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(C,M,F){const Y=i.get(C);M!==void 0&&wt(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ye(C)}function L(C){const M=C.texture,F=i.get(C),Y=i.get(M);C.addEventListener("dispose",w);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[et]=[];for(let vt=0;vt<M.mipmaps.length;vt++)F.__webglFramebuffer[et][vt]=r.createFramebuffer()}else F.__webglFramebuffer[et]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)F.__webglFramebuffer[et]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let et=0,vt=J.length;et<vt;et++){const xt=i.get(J[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let et=0;et<J.length;et++){const vt=J[et];F.__webglColorRenderbuffer[et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[et]);const xt=s.convert(vt.format,vt.colorSpace),Q=s.convert(vt.type),ut=x(vt.internalFormat,xt,Q,vt.colorSpace,C.isXRRenderTarget===!0),Pt=ce(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,ut,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,F.__webglColorRenderbuffer[et])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),At(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)wt(F.__webglFramebuffer[et][vt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt);else wt(F.__webglFramebuffer[et],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(M)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let et=0,vt=J.length;et<vt;et++){const xt=J[et],Q=i.get(xt);let ut=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),Dt(ut,xt),wt(F.__webglFramebuffer,C,xt,r.COLOR_ATTACHMENT0+et,ut,0),m(xt)&&p(ut)}e.unbindTexture()}else{let et=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(et,Y.__webglTexture),Dt(et,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)wt(F.__webglFramebuffer[vt],C,M,r.COLOR_ATTACHMENT0,et,vt);else wt(F.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,et,0);m(M)&&p(et),e.unbindTexture()}C.depthBuffer&&ye(C)}function se(C){const M=C.textures;for(let F=0,Y=M.length;F<Y;F++){const J=M[F];if(m(J)){const X=S(C),Mt=i.get(J).__webglTexture;e.bindTexture(X,Mt),p(X),e.unbindTexture()}}}const bt=[],qt=[];function St(C){if(C.samples>0){if(pt(C)===!1){const M=C.textures,F=C.width,Y=C.height;let J=r.COLOR_BUFFER_BIT;const X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=i.get(C),et=M.length>1;if(et)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const Q=i.get(M[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,r.NEAREST),l===!0&&(bt.length=0,qt.length=0,bt.push(r.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(X),qt.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),et)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const Q=i.get(M[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function ce(C){return Math.min(n.maxSamples,C.samples)}function pt(C){const M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Pe(C,M){const F=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Fr&&F!==mn&&(Xt.getTransfer(F)===Jt?(Y!==yi||J!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Wt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=pt}function ny(r,t){function e(i,n=mn){let s;const a=Xt.getTransfer(n);if(i===Oi)return r.UNSIGNED_BYTE;if(i===mc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===gc)return r.UNSIGNED_SHORT_5_5_5_1;if(i===mf)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===df)return r.BYTE;if(i===pf)return r.SHORT;if(i===Ss)return r.UNSIGNED_SHORT;if(i===pc)return r.INT;if(i===jn)return r.UNSIGNED_INT;if(i===Ai)return r.FLOAT;if(i===Qi)return r.HALF_FLOAT;if(i===gf)return r.ALPHA;if(i===_f)return r.RGB;if(i===yi)return r.RGBA;if(i===bs)return r.DEPTH_COMPONENT;if(i===Es)return r.DEPTH_STENCIL;if(i===_c)return r.RED;if(i===vc)return r.RED_INTEGER;if(i===vf)return r.RG;if(i===xc)return r.RG_INTEGER;if(i===yc)return r.RGBA_INTEGER;if(i===Ea||i===wa||i===Aa||i===Ca)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yl||i===Ml||i===Sl||i===Tl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bl||i===El||i===wl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bl||i===El)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===wl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Al||i===Cl||i===Rl||i===Pl||i===Dl||i===Ll||i===Il||i===Ul||i===Nl||i===Fl||i===Ol||i===Bl||i===kl||i===zl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Al)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Il)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ul)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ra||i===Vl||i===Hl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Ra)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xf||i===Gl||i===Wl||i===Xl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ra)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ts?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}class $f extends Ne{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ay{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new $f(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ae({vertexShader:ry,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new en(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oy extends Yr{constructor(t,e){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const g=new ay,m={},p=e.getContextAttributes();let S=null,x=null;const v=[],E=[],A=new at;let w=null;const R=new qe;R.viewport=new Kt;const y=new qe;y.viewport=new Kt;const T=[R,y],P=new vg;let V=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let lt=v[W];return lt===void 0&&(lt=new Io,v[W]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(W){let lt=v[W];return lt===void 0&&(lt=new Io,v[W]=lt),lt.getGripSpace()},this.getHand=function(W){let lt=v[W];return lt===void 0&&(lt=new Io,v[W]=lt),lt.getHandSpace()};function B(W){const lt=E.indexOf(W.inputSource);if(lt===-1)return;const it=v[lt];it!==void 0&&(it.update(W.inputSource,W.frame,c||a),it.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){n.removeEventListener("select",B),n.removeEventListener("selectstart",B),n.removeEventListener("selectend",B),n.removeEventListener("squeeze",B),n.removeEventListener("squeezestart",B),n.removeEventListener("squeezeend",B),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",G);for(let W=0;W<v.length;W++){const lt=E[W];lt!==null&&(E[W]=null,v[W].disconnect(lt))}V=null,O=null,g.reset();for(const W in m)delete m[W];t.setRenderTarget(S),d=null,f=null,u=null,n=null,x=null,Vt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(S=t.getRenderTarget(),n.addEventListener("select",B),n.addEventListener("selectstart",B),n.addEventListener("selectend",B),n.addEventListener("squeeze",B),n.addEventListener("squeezestart",B),n.addEventListener("squeezeend",B),n.addEventListener("end",q),n.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(n,e)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,wt=null,At=null;p.depth&&(At=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Es:bs,wt=p.stencil?Ts:jn);const It={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};f=u.createProjectionLayer(It),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ri(f.textureWidth,f.textureHeight,{format:yi,type:Oi,depthTexture:new Ff(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,it),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Ri(d.framebufferWidth,d.framebufferHeight,{format:yi,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Vt.setContext(n),Vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let lt=0;lt<W.removed.length;lt++){const it=W.removed[lt],wt=E.indexOf(it);wt>=0&&(E[wt]=null,v[wt].disconnect(it))}for(let lt=0;lt<W.added.length;lt++){const it=W.added[lt];let wt=E.indexOf(it);if(wt===-1){for(let It=0;It<v.length;It++)if(It>=E.length){E.push(it),wt=It;break}else if(E[It]===null){E[It]=it,wt=It;break}if(wt===-1)break}const At=v[wt];At&&At.connect(it)}}const $=new D,H=new D;function nt(W,lt,it){$.setFromMatrixPosition(lt.matrixWorld),H.setFromMatrixPosition(it.matrixWorld);const wt=$.distanceTo(H),At=lt.projectionMatrix.elements,It=it.projectionMatrix.elements,ye=At[14]/(At[10]-1),Wt=At[14]/(At[10]+1),L=(At[9]+1)/At[5],se=(At[9]-1)/At[5],bt=(At[8]-1)/At[0],qt=(It[8]+1)/It[0],St=ye*bt,ce=ye*qt,pt=wt/(-bt+qt),Bt=pt*-bt;if(lt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Bt),W.translateZ(pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Pe=ye+pt,Me=Wt+pt,C=St-Bt,M=ce+(wt-Bt),F=L*Wt/Me*Pe,Y=se*Wt/Me*Pe;W.projectionMatrix.makePerspective(C,M,F,Y,Pe,Me),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ot(W,lt){lt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(lt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let lt=W.near,it=W.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(it=g.depthFar)),P.near=y.near=R.near=lt,P.far=y.far=R.far=it,(V!==P.near||O!==P.far)&&(n.updateRenderState({depthNear:P.near,depthFar:P.far}),V=P.near,O=P.far),P.layers.mask=W.layers.mask|6,R.layers.mask=P.layers.mask&3,y.layers.mask=P.layers.mask&5;const wt=W.parent,At=P.cameras;ot(P,wt);for(let It=0;It<At.length;It++)ot(At[It],wt);At.length===2?nt(P,R,y):P.projectionMatrix.copy(R.projectionMatrix),_t(W,P,wt)};function _t(W,lt,it){it===null?W.matrix.copy(lt.matrixWorld):(W.matrix.copy(it.matrixWorld),W.matrix.invert(),W.matrix.multiply(lt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Or*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(W){return m[W]};let Dt=null;function te(W,lt){if(h=lt.getViewerPose(c||a),_=lt,h!==null){const it=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let wt=!1;it.length!==P.cameras.length&&(P.cameras.length=0,wt=!0);for(let Wt=0;Wt<it.length;Wt++){const L=it[Wt];let se=null;if(d!==null)se=d.getViewport(L);else{const qt=u.getViewSubImage(f,L);se=qt.viewport,Wt===0&&(t.setRenderTargetTextures(x,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(x))}let bt=T[Wt];bt===void 0&&(bt=new qe,bt.layers.enable(Wt),bt.viewport=new Kt,T[Wt]=bt),bt.matrix.fromArray(L.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(L.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(se.x,se.y,se.width,se.height),Wt===0&&(P.matrix.copy(bt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),wt===!0&&P.cameras.push(bt)}const At=n.enabledFeatures;if(At&&At.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&u){const Wt=u.getDepthInformation(it[0]);Wt&&Wt.isValid&&Wt.texture&&g.init(Wt,n.renderState)}if(At&&At.includes("camera-access")&&(t.state.unbindTexture(),u))for(let Wt=0;Wt<it.length;Wt++){const L=it[Wt].camera;if(L){let se=m[L];se||(se=new $f,m[L]=se);const bt=u.getCameraImage(L);se.sourceTexture=bt}}}for(let it=0;it<v.length;it++){const wt=E[it],At=v[it];wt!==null&&At!==void 0&&At.update(wt,lt,c||a)}Dt&&Dt(W,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),_=null}const Vt=new Wf;Vt.setAnimationLoop(te),this.setAnimationLoop=function(W){Dt=W},this.dispose=function(){}}}const On=new Bi,ly=new zt;function cy(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Af(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,On.copy(v),On.x*=-1,On.y*=-1,On.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(On)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function hy(r,t,e,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const v=x.program;i.uniformBlockBinding(S,v)}function c(S,x){let v=n[S.id];v===void 0&&(_(S),v=h(S),n[S.id]=v,S.addEventListener("dispose",m));const E=x.program;i.updateUBOMapping(S,E);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const v=r.createBuffer(),E=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=n[S.id],v=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,w=v.length;A<w;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,T=R.length;y<T;y++){const P=R[y];if(d(P,A,y,E)===!0){const V=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let q=0;q<O.length;q++){const G=O[q],$=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,V+B,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,v,E){const A=S.value,w=x+"_"+v;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const R=E[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(S){const x=S.uniforms;let v=0;const E=16;for(let w=0,R=x.length;w<R;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,P=y.length;T<P;T++){const V=y[T],O=Array.isArray(V.value)?V.value:[V.value];for(let B=0,q=O.length;B<q;B++){const G=O[B],$=g(G),H=v%E,nt=H%$.boundary,ot=H+nt;v+=nt,ot!==0&&E-ot<$.storage&&(v+=E-ot),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=$.storage}}}const A=v%E;return A>0&&(v+=E-A),S.__size=v,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(const S in n)r.deleteBuffer(n[S]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class uy{constructor(t={}){const{canvas:e=em(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Xe;let A=0,w=0,R=null,y=-1,T=null;const P=new Kt,V=new Kt;let O=null;const B=new Rt(0);let q=0,G=e.width,$=e.height,H=1,nt=null,ot=null;const _t=new Kt(0,0,G,$),Dt=new Kt(0,0,G,$);let te=!1;const Vt=new Ec;let W=!1,lt=!1;const it=new zt,wt=new D,At=new Kt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Wt(){return R===null?H:1}let L=i;function se(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Z,!1),L===null){const U="webgl2";if(L=se(U,b),L===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let bt,qt,St,ce,pt,Bt,Pe,Me,C,M,F,Y,J,X,Mt,et,vt,xt,Q,ut,Pt,yt,ct,Nt;function I(){bt=new Mv(L),bt.init(),yt=new ny(L,bt),qt=new pv(L,bt,t,yt),St=new ey(L,bt),qt.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),ce=new bv(L),pt=new Hx,Bt=new iy(L,bt,St,pt,qt,yt,ce),Pe=new gv(v),Me=new yv(v),C=new Pg(L),ct=new fv(L,C),M=new Sv(L,C,ce,ct),F=new wv(L,M,C,ce),Q=new Ev(L,qt,Bt),et=new mv(pt),Y=new Vx(v,Pe,Me,bt,qt,ct,et),J=new cy(v,pt),X=new Wx,Mt=new Jx(bt),xt=new uv(v,Pe,Me,St,F,d,l),vt=new Qx(v,F,qt),Nt=new hy(L,ce,qt,St),ut=new dv(L,bt,ce),Pt=new Tv(L,bt,ce),ce.programs=Y.programs,v.capabilities=qt,v.extensions=bt,v.properties=pt,v.renderLists=X,v.shadowMap=vt,v.state=St,v.info=ce}I();const tt=new oy(v,L);this.xr=tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(G,$,!1))},this.getSize=function(b){return b.set(G,$)},this.setSize=function(b,U,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,$=U,e.width=Math.floor(b*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(b,U,k){G=b,$=U,H=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,U,k,z){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,U,k,z),St.viewport(P.copy(_t).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,U,k,z){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,U,k,z),St.scissor(V.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){St.setScissorTest(te=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,k=!0){let z=0;if(b){let N=!1;if(R!==null){const j=R.texture.format;N=j===yc||j===xc||j===vc}if(N){const j=R.texture.type,ht=j===Oi||j===jn||j===Ss||j===Ts||j===mc||j===gc,mt=xt.getClearColor(),ft=xt.getClearAlpha(),Ct=mt.r,Lt=mt.g,Tt=mt.b;ht?(_[0]=Ct,_[1]=Lt,_[2]=Tt,_[3]=ft,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Ct,g[1]=Lt,g[2]=Tt,g[3]=ft,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),X.dispose(),Mt.dispose(),pt.dispose(),Pe.dispose(),Me.dispose(),F.dispose(),ct.dispose(),Nt.dispose(),Y.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Di),tt.removeEventListener("sessionend",th),Pn.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=ce.autoReset,U=vt.enabled,k=vt.autoUpdate,z=vt.needsUpdate,N=vt.type;I(),ce.autoReset=b,vt.enabled=U,vt.autoUpdate=k,vt.needsUpdate=z,vt.type=N}function Z(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){const U=b.target;U.removeEventListener("dispose",K),gt(U)}function gt(b){Ut(b),pt.remove(b)}function Ut(b){const U=pt.get(b).programs;U!==void 0&&(U.forEach(function(k){Y.releaseProgram(k)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,z,N,j){U===null&&(U=It);const ht=N.isMesh&&N.matrixWorld.determinant()<0,mt=Kd(b,U,k,z,N);St.setMaterial(z,ht);let ft=k.index,Ct=1;if(z.wireframe===!0){if(ft=M.getWireframeAttribute(k),ft===void 0)return;Ct=2}const Lt=k.drawRange,Tt=k.attributes.position;let Ht=Lt.start*Ct,jt=(Lt.start+Lt.count)*Ct;j!==null&&(Ht=Math.max(Ht,j.start*Ct),jt=Math.min(jt,(j.start+j.count)*Ct)),ft!==null?(Ht=Math.max(Ht,0),jt=Math.min(jt,ft.count)):Tt!=null&&(Ht=Math.max(Ht,0),jt=Math.min(jt,Tt.count));const _e=jt-Ht;if(_e<0||_e===1/0)return;ct.setup(N,z,mt,k,ft);let oe,ee=ut;if(ft!==null&&(oe=C.get(ft),ee=Pt,ee.setIndex(oe)),N.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*Wt()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(N.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),St.setLineWidth(Et*Wt()),N.isLineSegments?ee.setMode(L.LINES):N.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else N.isPoints?ee.setMode(L.POINTS):N.isSprite&&ee.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,ue=N._multiDrawCounts,Yt=N._multiDrawCount,ii=ft?C.get(ft).bytesPerElement:1,er=pt.get(z).currentProgram.getUniforms();for(let ni=0;ni<Yt;ni++)er.setValue(L,"_gl_DrawID",ni),ee.render(Et[ni]/ii,ue[ni])}else if(N.isInstancedMesh)ee.renderInstances(Ht,_e,N.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ue=Math.min(k.instanceCount,Et);ee.renderInstances(Ht,_e,ue)}else ee.render(Ht,_e)};function ae(b,U,k){b.transparent===!0&&b.side===Ke&&b.forceSinglePass===!1?(b.side=Je,b.needsUpdate=!0,Gs(b,U,k),b.side=Sn,b.needsUpdate=!0,Gs(b,U,k),b.side=Ke):Gs(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),p=Mt.get(k),p.init(U),x.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const j=N.material;if(j)if(Array.isArray(j))for(let ht=0;ht<j.length;ht++){const mt=j[ht];ae(mt,k,N),z.add(mt)}else ae(j,k,N),z.add(j)}),p=x.pop(),z},this.compileAsync=function(b,U,k=null){const z=this.compile(b,U,k);return new Promise(N=>{function j(){if(z.forEach(function(ht){pt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){N(b);return}setTimeout(j,10)}bt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let $t=null;function zi(b){$t&&$t(b)}function Di(){Pn.stop()}function th(){Pn.start()}const Pn=new Wf;Pn.setAnimationLoop(zi),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(b){$t=b,tt.setAnimationLoop(b),b===null?Pn.stop():Pn.start()},tt.addEventListener("sessionstart",Di),tt.addEventListener("sessionend",th),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,R),p=Mt.get(b,x.length),p.init(U),x.push(p),it.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Vt.setFromProjectionMatrix(it,Ni,U.reversedDepth),lt=this.localClippingEnabled,W=et.init(this.clippingPlanes,lt),m=X.get(b,S.length),m.init(),S.push(m),tt.enabled===!0&&tt.isPresenting===!0){const j=v.xr.getDepthSensingMesh();j!==null&&lo(j,U,-1/0,v.sortObjects)}lo(b,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,ot),ye=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ye&&xt.addToRenderList(m,b),this.info.render.frame++,W===!0&&et.beginShadows();const k=p.state.shadowsArray;vt.render(k,b,U),W===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const j=U.cameras;if(N.length>0)for(let ht=0,mt=j.length;ht<mt;ht++){const ft=j[ht];ih(z,N,b,ft)}ye&&xt.render(b);for(let ht=0,mt=j.length;ht<mt;ht++){const ft=j[ht];eh(m,b,ft,ft.viewport)}}else N.length>0&&ih(z,N,b,U),ye&&xt.render(b),eh(m,b,U);R!==null&&w===0&&(Bt.updateMultisampleRenderTarget(R),Bt.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,U),ct.resetDefaultState(),y=-1,T=null,x.pop(),x.length>0?(p=x[x.length-1],W===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function lo(b,U,k,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Vt.intersectsSprite(b)){z&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(it);const ht=F.update(b),mt=b.material;mt.visible&&m.push(b,ht,mt,k,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Vt.intersectsObject(b))){const ht=F.update(b),mt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),At.copy(ht.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(it)),Array.isArray(mt)){const ft=ht.groups;for(let Ct=0,Lt=ft.length;Ct<Lt;Ct++){const Tt=ft[Ct],Ht=mt[Tt.materialIndex];Ht&&Ht.visible&&m.push(b,ht,Ht,k,At.z,Tt)}}else mt.visible&&m.push(b,ht,mt,k,At.z,null)}}const j=b.children;for(let ht=0,mt=j.length;ht<mt;ht++)lo(j[ht],U,k,z)}function eh(b,U,k,z){const N=b.opaque,j=b.transmissive,ht=b.transparent;p.setupLightsView(k),W===!0&&et.setGlobalState(v.clippingPlanes,k),z&&St.viewport(P.copy(z)),N.length>0&&Hs(N,U,k),j.length>0&&Hs(j,U,k),ht.length>0&&Hs(ht,U,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ih(b,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Ri(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Qi:Oi,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const j=p.state.transmissionRenderTarget[z.id],ht=z.viewport||P;j.setSize(ht.z*v.transmissionResolutionScale,ht.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ft=v.getActiveCubeFace(),Ct=v.getActiveMipmapLevel();v.setRenderTarget(j),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ye&&xt.render(k);const Lt=v.toneMapping;v.toneMapping=xn;const Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),W===!0&&et.setGlobalState(v.clippingPlanes,z),Hs(b,k,z),Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let jt=0,_e=U.length;jt<_e;jt++){const oe=U[jt],ee=oe.object,Et=oe.geometry,ue=oe.material,Yt=oe.group;if(ue.side===Ke&&ee.layers.test(z.layers)){const ii=ue.side;ue.side=Je,ue.needsUpdate=!0,nh(ee,k,z,Et,ue,Yt),ue.side=ii,ue.needsUpdate=!0,Ht=!0}}Ht===!0&&(Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j))}v.setRenderTarget(mt,ft,Ct),v.setClearColor(B,q),Tt!==void 0&&(z.viewport=Tt),v.toneMapping=Lt}function Hs(b,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,j=b.length;N<j;N++){const ht=b[N],mt=ht.object,ft=ht.geometry,Ct=ht.group;let Lt=ht.material;Lt.allowOverride===!0&&z!==null&&(Lt=z),mt.layers.test(k.layers)&&nh(mt,U,k,ft,Lt,Ct)}}function nh(b,U,k,z,N,j){b.onBeforeRender(v,U,k,z,N,j),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,k,z,b,j),N.transparent===!0&&N.side===Ke&&N.forceSinglePass===!1?(N.side=Je,N.needsUpdate=!0,v.renderBufferDirect(k,U,z,N,b,j),N.side=Sn,N.needsUpdate=!0,v.renderBufferDirect(k,U,z,N,b,j),N.side=Ke):v.renderBufferDirect(k,U,z,N,b,j),b.onAfterRender(v,U,k,z,N,j)}function Gs(b,U,k){U.isScene!==!0&&(U=It);const z=pt.get(b),N=p.state.lights,j=p.state.shadowsArray,ht=N.state.version,mt=Y.getParameters(b,N.state,j,U,k),ft=Y.getProgramCacheKey(mt);let Ct=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?Me:Pe).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",K),Ct=new Map,z.programs=Ct);let Lt=Ct.get(ft);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===ht)return sh(b,mt),Lt}else mt.uniforms=Y.getUniforms(b),b.onBeforeCompile(mt,v),Lt=Y.acquireProgram(mt,ft),Ct.set(ft,Lt),z.uniforms=mt.uniforms;const Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=et.uniform),sh(b,mt),z.needsLights=Jd(b),z.lightsStateVersion=ht,z.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function rh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Pa.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function sh(b,U){const k=pt.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Kd(b,U,k,z,N){U.isScene!==!0&&(U=It),Bt.resetTextureUnits();const j=U.fog,ht=z.isMeshStandardMaterial?U.environment:null,mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fr,ft=(z.isMeshStandardMaterial?Me:Pe).get(z.envMap||ht),Ct=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!k.morphAttributes.position,Ht=!!k.morphAttributes.normal,jt=!!k.morphAttributes.color;let _e=xn;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=v.toneMapping);const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=oe!==void 0?oe.length:0,Et=pt.get(z),ue=p.state.lights;if(W===!0&&(lt===!0||b!==T)){const He=b===T&&z.id===y;et.setState(z,b,He)}let Yt=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ue.state.version||Et.outputColorSpace!==mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==ft||z.fog===!0&&Et.fog!==j||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Lt||Et.morphTargets!==Tt||Et.morphNormals!==Ht||Et.morphColors!==jt||Et.toneMapping!==_e||Et.morphTargetsCount!==ee)&&(Yt=!0):(Yt=!0,Et.__version=z.version);let ii=Et.currentProgram;Yt===!0&&(ii=Gs(z,U,N));let er=!1,ni=!1,jr=!1;const fe=ii.getUniforms(),mi=Et.uniforms;if(St.useProgram(ii.program)&&(er=!0,ni=!0,jr=!0),z.id!==y&&(y=z.id,ni=!0),er||T!==b){St.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(L,"projectionMatrix",b.projectionMatrix),fe.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ye=fe.map.cameraPosition;Ye!==void 0&&Ye.setValue(L,wt.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&fe.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&fe.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,ni=!0,jr=!0)}if(N.isSkinnedMesh){fe.setOptional(L,N,"bindMatrix"),fe.setOptional(L,N,"bindMatrixInverse");const He=N.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),fe.setValue(L,"boneTexture",He.boneTexture,Bt))}N.isBatchedMesh&&(fe.setOptional(L,N,"batchingTexture"),fe.setValue(L,"batchingTexture",N._matricesTexture,Bt),fe.setOptional(L,N,"batchingIdTexture"),fe.setValue(L,"batchingIdTexture",N._indirectTexture,Bt),fe.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&fe.setValue(L,"batchingColorTexture",N._colorsTexture,Bt));const gi=k.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Q.update(N,k,ii),(ni||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,fe.setValue(L,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(mi.envMap.value=ft,mi.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(mi.envMapIntensity.value=U.environmentIntensity),ni&&(fe.setValue(L,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&$d(mi,jr),j&&z.fog===!0&&J.refreshFogUniforms(mi,j),J.refreshMaterialUniforms(mi,z,H,$,p.state.transmissionRenderTarget[b.id]),Pa.upload(L,rh(Et),mi,Bt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Pa.upload(L,rh(Et),mi,Bt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&fe.setValue(L,"center",N.center),fe.setValue(L,"modelViewMatrix",N.modelViewMatrix),fe.setValue(L,"normalMatrix",N.normalMatrix),fe.setValue(L,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const He=z.uniformsGroups;for(let Ye=0,co=He.length;Ye<co;Ye++){const Dn=He[Ye];Nt.update(Dn,ii),Nt.bind(Dn,ii)}}return ii}function $d(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Jd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,k){const z=pt.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),pt.get(b.texture).__webglTexture=U,pt.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const k=pt.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Zd=L.createFramebuffer();this.setRenderTarget=function(b,U=0,k=0){R=b,A=U,w=k;let z=!0,N=null,j=!1,ht=!1;if(b){const ft=pt.get(b);if(ft.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ft.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(ft.__hasExternalTextures)Bt.rebindTextures(b,pt.get(b.texture).__webglTexture,pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&pt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);const Lt=pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?N=Lt[U][k]:N=Lt[U],j=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?N=pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?N=Lt[k]:N=Lt,P.copy(b.viewport),V.copy(b.scissor),O=b.scissorTest}else P.copy(_t).multiplyScalar(H).floor(),V.copy(Dt).multiplyScalar(H).floor(),O=te;if(k!==0&&(N=Zd),St.bindFramebuffer(L.FRAMEBUFFER,N)&&z&&St.drawBuffers(b,N),St.viewport(P),St.scissor(V),St.setScissorTest(O),j){const ft=pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,k)}else if(ht){const ft=U;for(let Ct=0;Ct<b.textures.length;Ct++){const Lt=pt.get(b.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,k,ft)}}else if(b!==null&&k!==0){const ft=pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(b,U,k,z,N,j,ht,mt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft){St.bindFramebuffer(L.FRAMEBUFFER,ft);try{const Ct=b.textures[mt],Lt=Ct.format,Tt=Ct.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&k>=0&&k<=b.height-N&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(U,k,z,N,yt.convert(Lt),yt.convert(Tt),j))}finally{const Ct=R!==null?pt.get(R).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,z,N,j,ht,mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft)if(U>=0&&U<=b.width-z&&k>=0&&k<=b.height-N){St.bindFramebuffer(L.FRAMEBUFFER,ft);const Ct=b.textures[mt],Lt=Ct.format,Tt=Ct.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,j.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(U,k,z,N,yt.convert(Lt),yt.convert(Tt),0);const jt=R!==null?pt.get(R).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,jt);const _e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await im(L,_e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,j),L.deleteBuffer(Ht),L.deleteSync(_e),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,k=0){const z=Math.pow(2,-k),N=Math.floor(b.image.width*z),j=Math.floor(b.image.height*z),ht=U!==null?U.x:0,mt=U!==null?U.y:0;Bt.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ht,mt,N,j),St.unbindTexture()};const jd=L.createFramebuffer(),Qd=L.createFramebuffer();this.copyTextureToTexture=function(b,U,k=null,z=null,N=0,j=null){j===null&&(N!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=N,N=0):j=0);let ht,mt,ft,Ct,Lt,Tt,Ht,jt,_e;const oe=b.isCompressedTexture?b.mipmaps[j]:b.image;if(k!==null)ht=k.max.x-k.min.x,mt=k.max.y-k.min.y,ft=k.isBox3?k.max.z-k.min.z:1,Ct=k.min.x,Lt=k.min.y,Tt=k.isBox3?k.min.z:0;else{const gi=Math.pow(2,-N);ht=Math.floor(oe.width*gi),mt=Math.floor(oe.height*gi),b.isDataArrayTexture?ft=oe.depth:b.isData3DTexture?ft=Math.floor(oe.depth*gi):ft=1,Ct=0,Lt=0,Tt=0}z!==null?(Ht=z.x,jt=z.y,_e=z.z):(Ht=0,jt=0,_e=0);const ee=yt.convert(U.format),Et=yt.convert(U.type);let ue;U.isData3DTexture?(Bt.setTexture3D(U,0),ue=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),ue=L.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),ue=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Yt=L.getParameter(L.UNPACK_ROW_LENGTH),ii=L.getParameter(L.UNPACK_IMAGE_HEIGHT),er=L.getParameter(L.UNPACK_SKIP_PIXELS),ni=L.getParameter(L.UNPACK_SKIP_ROWS),jr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Tt);const fe=b.isDataArrayTexture||b.isData3DTexture,mi=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const gi=pt.get(b),He=pt.get(U),Ye=pt.get(gi.__renderTarget),co=pt.get(He.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,Ye.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let Dn=0;Dn<ft;Dn++)fe&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(b).__webglTexture,N,Tt+Dn),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,j,_e+Dn)),L.blitFramebuffer(Ct,Lt,ht,mt,Ht,jt,ht,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||pt.has(b)){const gi=pt.get(b),He=pt.get(U);St.bindFramebuffer(L.READ_FRAMEBUFFER,jd),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qd);for(let Ye=0;Ye<ft;Ye++)fe?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gi.__webglTexture,N,Tt+Ye):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gi.__webglTexture,N),mi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,He.__webglTexture,j,_e+Ye):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,He.__webglTexture,j),N!==0?L.blitFramebuffer(Ct,Lt,ht,mt,Ht,jt,ht,mt,L.COLOR_BUFFER_BIT,L.NEAREST):mi?L.copyTexSubImage3D(ue,j,Ht,jt,_e+Ye,Ct,Lt,ht,mt):L.copyTexSubImage2D(ue,j,Ht,jt,Ct,Lt,ht,mt);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mi?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(ue,j,Ht,jt,_e,ht,mt,ft,ee,Et,oe.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(ue,j,Ht,jt,_e,ht,mt,ft,ee,oe.data):L.texSubImage3D(ue,j,Ht,jt,_e,ht,mt,ft,ee,Et,oe):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,Ht,jt,ht,mt,ee,Et,oe.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,Ht,jt,oe.width,oe.height,ee,oe.data):L.texSubImage2D(L.TEXTURE_2D,j,Ht,jt,ht,mt,ee,Et,oe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Yt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ii),L.pixelStorei(L.UNPACK_SKIP_PIXELS,er),L.pixelStorei(L.UNPACK_SKIP_ROWS,ni),L.pixelStorei(L.UNPACK_SKIP_IMAGES,jr),j===0&&U.generateMipmaps&&L.generateMipmap(ue),St.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,z=null,N=0){return Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,z,N)},this.initRenderTarget=function(b){pt.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),St.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,St.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const Da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const fy=new Pc(-1,1,1,-1,0,1);class dy extends Ie{constructor(){super(),this.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new we([0,2,0,0,2,0],2))}}const py=new dy;class Uc{constructor(t){this._mesh=new ge(py,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,fy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class my extends Zr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=As.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Uc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ru extends Zr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class gy extends Zr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _y{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Qi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new my(Da),this.copyPass.material.blending=ji,this.clock=new Gf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ru!==void 0&&(a instanceof Ru?i=!0:a instanceof gy&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vy extends Zr{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}}const xy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class zr extends Zr{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(s,a,{type:Qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Ri(s,a,{type:Qi});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Ri(s,a,{type:Qi});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=xy;this.highPassUniforms=As.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new at(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=As.clone(Da.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:Da.vertexShader,fragmentShader:Da.fragmentShader,blending:Le,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new Tn,this._fsQuad=new Uc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new at(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=zr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}zr.BlurDirectionX=new at(1,0);zr.BlurDirectionY=new at(0,1);const Sa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class yy extends Zr{constructor(){super(),this.uniforms=As.clone(Sa.uniforms),this.material=new Zm({name:Sa.name,uniforms:this.uniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader}),this._fsQuad=new Uc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===af?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===of?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===uf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Jf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},Nc,Fe,he,Mi=1e8,re=1/Mi,jl=Math.PI*2,My=jl/4,Sy=0,Zf=Math.sqrt,Ty=Math.cos,by=Math.sin,Ue=function(t){return typeof t=="string"},ve=function(t){return typeof t=="function"},nn=function(t){return typeof t=="number"},Fc=function(t){return typeof t>"u"},ki=function(t){return typeof t=="object"},Ze=function(t){return t!==!1},Oc=function(){return typeof window<"u"},Ta=function(t){return ve(t)||Ue(t)},jf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ve=Array.isArray,Ey=/random\([^)]+\)/g,wy=/,\s*/g,Pu=/(?:-?\.?\d|\.)+/gi,Qf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Er=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,td=/[+-]=-?[.\d]+/,Ay=/[^,'"\[\]\s]+/gi,Cy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pe,Li,Ql,Bc,di={},Ya={},ed,id=function(t){return(Ya=Vr(t,di))&&ei},kc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Rs=function(t,e){return!e&&console.warn(t)},nd=function(t,e){return t&&(di[t]=e)&&Ya&&(Ya[t]=e)||di},Ps=function(){return 0},Ry={suppressEvents:!0,isStart:!0,kill:!1},La={suppressEvents:!0,kill:!1},Py={suppressEvents:!0},zc={},yn=[],tc={},rd,ai={},jo={},Du=30,Ia=[],Vc="",Hc=function(t){var e=t[0],i,n;if(ki(e)||ve(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Ia.length;n--&&!Ia[n].targetTest(e););i=Ia[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new wd(t[n],i)))||t.splice(n,1);return t},Kn=function(t){return t._gsap||Hc(Si(t))[0]._gsap},sd=function(t,e,i){return(i=t[e])&&ve(i)?t[e]():Fc(i)&&t.getAttribute&&t.getAttribute(e)||i},je=function(t,e){return(t=t.split(",")).forEach(e)||t},Te=function(t){return Math.round(t*1e5)/1e5||0},de=function(t){return Math.round(t*1e7)/1e7||0},Pr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Dy=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},qa=function(){var t=yn.length,e=yn.slice(0),i,n;for(tc={},yn.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Gc=function(t){return!!(t._initted||t._startAt||t.add)},ad=function(t,e,i,n){yn.length&&!Fe&&qa(),t.render(e,i,!!(Fe&&e<0&&Gc(t))),yn.length&&!Fe&&qa()},od=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ay).length<2?e:Ue(t)?t.trim():t},ld=function(t){return t},pi=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Ly=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Vr=function(t,e){for(var i in e)t[i]=e[i];return t},Lu=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ki(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Ka=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},xs=function(t){var e=t.parent||pe,i=t.keyframes?Ly(Ve(t.keyframes)):pi;if(Ze(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Iy=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},cd=function(t,e,i,n,s){var a=t[n],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=a,e.parent=e._dp=t,e},so=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},bn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$n=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Uy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ec=function(t,e,i,n){return t._startAt&&(Fe?t._startAt.revert(La):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Ny=function r(t){return!t||t._ts&&r(t.parent)},Iu=function(t){return t._repeat?Hr(t._tTime,t=t.duration()+t._rDelay)*t:0},Hr=function(t,e){var i=Math.floor(t=de(t/e));return t&&i===t?i-1:i},$a=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ao=function(t){return t._end=de(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},oo=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=de(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ao(t),i._dirty||$n(i,t)),t},hd=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=$a(t.rawTime(),e),(!e._dur||ks(0,e.totalDuration(),i)-e._tTime>re)&&e.render(i,!0)),$n(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-re}},Ui=function(t,e,i,n){return e.parent&&bn(e),e._start=de((nn(i)?i:i||t!==pe?vi(t,i,e):t._time)+e._delay),e._end=de(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),cd(t,e,"_first","_last",t._sort?"_start":0),ic(e)||(t._recent=e),n||hd(t,e),t._ts<0&&oo(t,t._tTime),t},ud=function(t,e){return(di.ScrollTrigger||kc("scrollTrigger",e))&&di.ScrollTrigger.create(e,t)},fd=function(t,e,i,n,s){if(Xc(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rd!==oi.frame)return yn.push(t),t._lazy=[s,n],1},Fy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},ic=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Oy=function(t,e,i,n){var s=t.ratio,a=e<0||!e&&(!t._start&&Fy(t)&&!(!t._initted&&ic(t))||(t._ts<0||t._dp._ts<0)&&!ic(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ks(0,t._tDur,e),h=Hr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Hr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Fe||n||t._zTime===re||!e&&t._zTime){if(!t._initted&&fd(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?re:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ec(t,e,i,!0),t._onUpdate&&!i&&ci(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ci(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&bn(t,1),!i&&!Fe&&(ci(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},By=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},Gr=function(t,e,i,n){var s=t._repeat,a=de(e)||0,o=t._tTime/t._tDur;return o&&!n&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:de(a*(s+1)+t._rDelay*s):a,o>0&&!n&&oo(t,t._tTime=t._tDur*o),t.parent&&ao(t),i||$n(t.parent,t),t},Uu=function(t){return t instanceof $e?$n(t):Gr(t,t._dur)},ky={_start:0,endTime:Ps,totalDuration:Ps},vi=function r(t,e,i){var n=t.labels,s=t._recent||ky,a=t.duration()>=Mi?s.endTime(!1):t._dur,o,l,c;return Ue(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(e in n||(n[e]=a),n[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(Ve(i)?i[0]:i).totalDuration()),o>1?r(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},ys=function(t,e,i){var n=nn(e[1]),s=(n?2:1)+(t<2?0:1),a=e[s],o,l;if(n&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ze(l.vars.inherit)&&l.parent;a.immediateRender=Ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ee(e[0],a,e[s+1])},Rn=function(t,e){return t||t===0?e(t):e},ks=function(t,e,i){return i<t?t:i>e?e:i},ke=function(t,e){return!Ue(t)||!(e=Cy.exec(t))?"":e[1]},zy=function(t,e,i){return Rn(i,function(n){return ks(t,e,n)})},nc=[].slice,dd=function(t,e){return t&&ki(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ki(t[0]))&&!t.nodeType&&t!==Li},Vy=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return Ue(n)&&!e||dd(n,1)?(s=i).push.apply(s,Si(n)):i.push(n)})||i},Si=function(t,e,i){return he&&!e&&he.selector?he.selector(t):Ue(t)&&!i&&(Ql||!Wr())?nc.call((e||Bc).querySelectorAll(t),0):Ve(t)?Vy(t,i):dd(t)?nc.call(t,0):t?[t]:[]},rc=function(t){return t=Si(t)[0]||Rs("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Si(e,i.querySelectorAll?i:i===t?Rs("Invalid scope")||Bc.createElement("div"):t)}},pd=function(t){return t.sort(function(){return .5-Math.random()})},md=function(t){if(ve(t))return t;var e=ki(t)?t:{each:t},i=Jn(e.ease),n=e.from||0,s=parseFloat(e.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=e.axis,h=n,u=n;return Ue(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,S,x,v,E,A,w,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,Mi])[1],!y){for(w=-Mi;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],p=l?Math.min(y,g)*h-.5:n%y,S=y===Mi?0:l?g*u/y-.5:n/y|0,w=0,R=Mi,A=0;A<g;A++)x=A%y-p,v=S-(A/y|0),m[A]=E=c?Math.abs(c==="y"?v:x):Zf(x*x+v*v),E>w&&(w=E),E<R&&(R=E);n==="random"&&pd(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=ke(e.amount||e.each)||0,i=i&&g<0?tM(i):i}return g=(m[f]-m.min)/m.max||0,de(m.b+(i?i(g):g)*m.v)+m.u}},sc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=de(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(nn(i)?0:ke(i))}},gd=function(t,e){var i=Ve(t),n,s;return!i&&ki(t)&&(n=i=t.radius||Mi,t.values?(t=Si(t.values),(s=!nn(t[0]))&&(n*=n)):t=sc(t.increment)),Rn(e,i?ve(t)?function(a){return s=t(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Mi,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!n||c<=n?t[h]:a,s||h===a||nn(a)?h:h+ke(a)}:sc(t))},_d=function(t,e,i,n){return Rn(Ve(t)?!e:i===!0?!!(i=0):!n,function(){return Ve(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Hy=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,a){return a(s)},n)}},Gy=function(t,e){return function(i){return t(parseFloat(i))+(e||ke(i))}},Wy=function(t,e,i){return xd(t,e,0,1,i)},vd=function(t,e,i){return Rn(i,function(n){return t[~~e(n)]})},Xy=function r(t,e,i){var n=e-t;return Ve(t)?vd(t,r(0,t.length),e):Rn(i,function(s){return(n+(s-t)%n)%n+t})},Yy=function r(t,e,i){var n=e-t,s=n*2;return Ve(t)?vd(t,r(0,t.length-1),e):Rn(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>n?s-a:a)})},Ds=function(t){return t.replace(Ey,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(wy);return _d(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},xd=function(t,e,i,n,s){var a=e-t,o=n-i;return Rn(s,function(l){return i+((l-t)/a*o||0)})},qy=function r(t,e,i,n){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Ue(t),o={},l,c,h,u,f;if(i===!0&&(n=1)&&(i=null),a)t={p:t},e={p:e};else if(Ve(t)&&!Ve(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},i=e}else n||(t=Vr(Ve(t)?[]:{},t));if(!h){for(l in e)Wc.call(o,t,l,"get",e[l]);s=function(_){return Kc(_,o)||(a?t.p:t)}}}return Rn(i,s)},Nu=function(t,e,i){var n=t.labels,s=Mi,a,o,l;for(a in n)o=n[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ci=function(t,e,i){var n=t.vars,s=n[e],a=he,o=t._ctx,l,c,h;if(s)return l=n[e+"Params"],c=n.callbackScope||t,i&&yn.length&&qa(),o&&(he=o),h=l?s.apply(c,l):s.call(c),he=a,h},ds=function(t){return bn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&ci(t,"onInterrupt"),t},wr,yd=[],Md=function(t){if(t)if(t=!t.name&&t.default||t,Oc()||t.headless){var e=t.name,i=ve(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Ps,render:Kc,add:Wc,kill:hM,modifier:cM,rawVars:0},a={targetTest:0,get:0,getSetter:qc,aliases:{},register:0};if(Wr(),t!==n){if(ai[e])return;pi(n,pi(Ka(t,s),a)),Vr(n.prototype,Vr(s,Ka(t,a))),ai[n.prop=e]=n,t.targetTest&&(Ia.push(n),zc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}nd(e,n),t.register&&t.register(ei,n,Qe)}else yd.push(t)},ie=255,ps={aqua:[0,ie,ie],lime:[0,ie,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ie],navy:[0,0,128],white:[ie,ie,ie],olive:[128,128,0],yellow:[ie,ie,0],orange:[ie,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ie,0,0],pink:[ie,192,203],cyan:[0,ie,ie],transparent:[ie,ie,ie,0]},Qo=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ie+.5|0},Sd=function(t,e,i){var n=t?nn(t)?[t>>16,t>>8&ie,t&ie]:0:ps.black,s,a,o,l,c,h,u,f,d,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ps[t])n=ps[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&ie,n&ie,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&ie,t&ie]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(Pu),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=Qo(l+1/3,s,a),n[1]=Qo(l,s,a),n[2]=Qo(l-1/3,s,a);else if(~t.indexOf("="))return n=t.match(Qf),i&&n.length<4&&(n[3]=1),n}else n=t.match(Pu)||ps.transparent;n=n.map(Number)}return e&&!_&&(s=n[0]/ie,a=n[1]/ie,o=n[2]/ie,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Td=function(t){var e=[],i=[],n=-1;return t.split(Mn).forEach(function(s){var a=s.match(Er)||[];e.push.apply(e,a),i.push(n+=a.length+1)}),e.c=i,e},Fu=function(t,e,i){var n="",s=(t+n).match(Mn),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Sd(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Td(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(Mn,"1").split(Er),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=t.split(Mn),u=c.length-1;o<u;o++)n+=c[o]+s[o];return n+c[u]},Mn=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ps)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Ky=/hsl[a]?\(/,bd=function(t){var e=t.join(" "),i;if(Mn.lastIndex=0,Mn.test(e))return i=Ky.test(e),t[1]=Fu(t[1],i),t[0]=Fu(t[0],i,Td(t[1])),!0},Ls,oi=(function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,h,u,f,d,_=function g(m){var p=r()-n,S=m===!0,x,v,E,A;if((p>t||p<0)&&(i+=p-e),n+=p,E=n-i,x=E-a,(x>0||S)&&(A=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=x+(x>=s?4:s-x),v=1),S||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](E,f,A,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){ed&&(!Ql&&Oc()&&(Li=Ql=window,Bc=Li.document||{},di.gsap=ei,(Li.gsapVersions||(Li.gsapVersions=[])).push(ei.version),id(Ya||Li.GreenSockGlobals||!Li.gsap&&Li||{}),yd.forEach(Md)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ls=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ls=0,c=Ps},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,S){var x=p?function(v,E,A,w){m(v,E,A,w),u.remove(x)}:m;return u.remove(m),o[S?"unshift":"push"](x),Wr(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u})(),Wr=function(){return!Ls&&oi.wake()},Gt={},$y=/^[\d.\-M][\d.\-,\s]/,Jy=/["']/g,Zy=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[n]=isNaN(c)?c.replace(Jy,"").trim():+c,n=l.substr(o+1).trim();return e},jy=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Qy=function(t){var e=(t+"").split("("),i=Gt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Zy(e[1])]:jy(t).split(",").map(od)):Gt._CE&&$y.test(t)?Gt._CE("",t):i},tM=function(t){return function(e){return 1-t(1-e)}},Jn=function(t,e){return t&&(ve(t)?t:Gt[t]||Qy(t))||e},tr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},a;return je(t,function(o){Gt[o]=di[o]=s,Gt[a=o.toLowerCase()]=i;for(var l in s)Gt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Gt[o+"."+l]=s[l]}),s},Ed=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},tl=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/jl*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*by((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Ed(o);return s=jl/s,l.config=function(c,h){return r(t,c,h)},l},el=function r(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Ed(i);return n.config=function(s){return r(t,s)},n};je("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;tr(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;tr("Elastic",tl("in"),tl("out"),tl());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(o){return o<e?r*o*o:o<i?r*Math.pow(o-1.5/t,2)+.75:o<n?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};tr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);tr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});tr("Circ",function(r){return-(Zf(1-r*r)-1)});tr("Sine",function(r){return r===1?1:-Ty(r*My)+1});tr("Back",el("in"),el("out"),el());Gt.SteppedEase=Gt.steps=di.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,a=1-re;return function(o){return((n*ks(0,a,o)|0)+s)*i}}};Cs.ease=Gt["quad.out"];je("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vc+=r+","+r+"Params,"});var wd=function(t,e){this.id=Sy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sd,this.set=e?e.getSetter:qc},Is=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Gr(this,+e.duration,1,1),this.data=e.data,he&&(this._ctx=he,he.data.push(this)),Ls||oi.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Gr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Wr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(oo(this,i),!s._dp||s.parent||hd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ad(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Iu(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Iu(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Hr(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?$a(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-re?0:this._rts,this.totalTime(ks(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),ao(this),Uy(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=de(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Ui(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Ze(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$a(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Py);var n=Fe;return Fe=i,Gc(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Fe=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Uu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Uu(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(vi(this,i),Ze(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Ze(n)),this._dur||(this._zTime=-re),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-re)},t.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(a){var o=ve(i)?i:ld,l=function(){var h=n.then;n.then=null,s&&s(),ve(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),a(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){ds(this)},r})();pi(Is.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var $e=(function(r){Jf(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ze(i.sortChildren),pe&&Ui(i.parent||pe,$i(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ud($i(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,a){return ys(0,arguments,this),this},e.from=function(n,s,a){return ys(1,arguments,this),this},e.fromTo=function(n,s,a,o){return ys(2,arguments,this),this},e.set=function(n,s,a){return s.duration=0,s.parent=this,xs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ee(n,s,vi(this,a),1),this},e.call=function(n,s,a){return Ui(this,Ee.delayedCall(0,n,s),a)},e.staggerTo=function(n,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Ee(n,a,vi(this,l)),this},e.staggerFrom=function(n,s,a,o,l,c,h){return a.runBackwards=1,xs(a).immediateRender=Ze(a.immediateRender),this.staggerTo(n,s,a,o,l,c,h)},e.staggerFromTo=function(n,s,a,o,l,c,h,u){return o.startAt=a,xs(o).immediateRender=Ze(o.immediateRender),this.staggerTo(n,s,o,l,c,h,u)},e.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:de(n),u=this._zTime<0!=n<0&&(this._initted||!c),f,d,_,g,m,p,S,x,v,E,A,w;if(this!==pe&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),f=h,v=this._start,x=this._ts,p=!x,u&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,a);if(f=de(h%m),h===l?(g=this._repeat,f=c):(E=de(h/m),g=~~E,g&&g===E&&(f=c,g--),f>c&&(f=c)),E=Hr(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),A&&g&1&&(f=c-f,w=1),g!==E&&!this._lock){var R=A&&E&1,y=R===(A&&g&1);if(g<E&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(w?0:de(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=By(this,de(o),de(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&c&&!s&&!E&&(ci(this,"onStart"),this._tTime!==h))return this;if(f>=o&&n>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(n,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-re);break}}d=_}else{d=this._last;for(var T=n<0?n:f;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(n,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||Fe&&Gc(d)),f!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=T?-re:re);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-re)._zTime=f>=o?1:-1,this._ts))return this._start=v,ao(this),this.render(n,s,a);this._onUpdate&&!s&&ci(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&bn(this,1),!s&&!(n<0&&!o)&&(h||o||!l)&&(ci(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var a=this;if(nn(s)||(s=vi(this,s,n)),!(n instanceof Is)){if(Ve(n))return n.forEach(function(o){return a.add(o,s)}),this;if(Ue(n))return this.addLabel(n,s);if(ve(n))n=Ee.delayedCall(0,n);else return this}return this!==n?Ui(this,n,s):this},e.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ee?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},e.remove=function(n){return Ue(n)?this.removeLabel(n):ve(n)?this.killTweensOf(n):(n.parent===this&&so(this,n),n===this._recent&&(this._recent=this._last),$n(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=de(oi.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=vi(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,a){var o=Ee.delayedCall(0,s||Ps,a);return o.data="isPause",this._hasPause=1,Ui(this,o,vi(this,n))},e.removePause=function(n){var s=this._first;for(n=vi(this,n);s;)s._start===n&&s.data==="isPause"&&bn(s),s=s._next},e.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)gn!==o[l]&&o[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var a=[],o=Si(n),l=this._first,c=nn(s),h;l;)l instanceof Ee?Dy(l._targets,o)&&(c?(!gn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(n,s){s=s||{};var a=this,o=vi(a,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,_=Ee.to(a,pi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||re,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&Gr(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(n,s,a){return this.tweenTo(s,pi({startAt:{time:vi(this,n)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Nu(this,vi(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Nu(this,vi(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(n,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(n=de(n);o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return $n(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),$n(this)},e.totalDuration=function(n){var s=0,a=this,o=a._last,l=Mi,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ui(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=de(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Gr(a,a===pe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(n){if(pe._ts&&(ad(pe,$a(n,pe)),rd=oi.frame),oi.frame>=Du){Du+=fi.autoSleep||120;var s=pe._first;if((!s||!s._ts)&&fi.autoSleep&&oi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||oi.sleep()}}},t})(Is);pi($e.prototype,{_lock:0,_hasPause:0,_forcing:0});var eM=function(t,e,i,n,s,a,o){var l=new Qe(this._pt,t,e,0,1,Ld,null,s),c=0,h=0,u,f,d,_,g,m,p,S;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Ds(n)),a&&(S=[i,n],a(S,t,e),i=S[0],n=S[1]),f=i.match(Zo)||[];u=Zo.exec(n);)_=u[0],g=n.substring(c,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Pr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Zo.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(td.test(n)||p)&&(l.e=0),this._pt=l,l},Wc=function(t,e,i,n,s,a,o,l,c,h){ve(n)&&(n=n(s||0,t,a));var u=t[e],f=i!=="get"?i:ve(u)?c?t[e.indexOf("set")||!ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=ve(u)?c?aM:Pd:Yc,_;if(Ue(n)&&(~n.indexOf("random(")&&(n=Ds(n)),n.charAt(1)==="="&&(_=Pr(f,n)+(ke(f)||0),(_||_===0)&&(n=_))),!h||f!==n||ac)return!isNaN(f*n)&&n!==""?(_=new Qe(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?lM:Dd,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&kc(e,n),eM.call(this,t,e,f,n,d,l||fi.stringFilter,c))},iM=function(t,e,i,n,s){if(ve(t)&&(t=Ms(t,s,e,i,n)),!ki(t)||t.style&&t.nodeType||Ve(t)||jf(t))return Ue(t)?Ms(t,s,e,i,n):t;var a={},o;for(o in t)a[o]=Ms(t[o],s,e,i,n);return a},Ad=function(t,e,i,n,s,a){var o,l,c,h;if(ai[t]&&(o=new ai[t]).init(s,o.rawVars?e[t]:iM(e[t],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new Qe(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==wr))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},gn,ac,Xc=function r(t,e,i){var n=t.vars,s=n.ease,a=n.startAt,o=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,f=n.keyframes,d=n.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!Nc,v=t.timeline,E=n.easeReverse||u,A,w,R,y,T,P,V,O,B,q,G,$,H;if(v&&(!f||!s)&&(s="none"),t._ease=Jn(s,Cs.ease),t._rEase=E&&(Jn(E)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||f&&!n.stagger){if(O=m[0]?Kn(m[0]).harness:0,$=O&&n[O.prop],A=Ka(n,zc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?La:Ry),g._lazy=0),a){if(bn(t._startAt=Ee.set(m,pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Ze(l),startAt:null,delay:0,onUpdate:c&&function(){return ci(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!o&&!d)&&t._startAt.revert(La),o&&_&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),R=pi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Ze(l),immediateRender:o,stagger:0,parent:p},A),$&&(R[O.prop]=$),bn(t._startAt=Ee.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(La):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Ze(l)||l&&!_,w=0;w<m.length;w++){if(T=m[w],V=T._gsap||Hc(m)[w]._gsap,t._ptLookup[w]=q={},tc[V.id]&&yn.length&&qa(),G=S===m?w:S.indexOf(T),O&&(B=new O).init(T,$||A,t,G,S)!==!1&&(t._pt=y=new Qe(t._pt,T,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(nt){q[nt]=y}),B.priority&&(P=1)),!O||$)for(R in A)ai[R]&&(B=Ad(R,A,t,G,T,S))?B.priority&&(P=1):q[R]=y=Wc.call(t,T,R,"get",A[R],G,S,0,n.stringFilter);t._op&&t._op[w]&&t.kill(T,t._op[w]),x&&t._pt&&(gn=t,pe.killTweensOf(T,q,t.globalTime(e)),H=!t.parent,gn=0),t._pt&&l&&(tc[V.id]=1)}P&&Id(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&v.render(Mi,!0,!0)},nM=function(t,e,i,n,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ac=1,t.vars[e]="+=0",Xc(t,o),ac=0,l?Rs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Te(i)+ke(u.e)),u.b&&(u.b=h.s+ke(u.b))},rM=function(t,e){var i=t[0]?Kn(t[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return e;s=Vr({},e);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},sM=function(t,e,i,n){var s=e.ease||n||"power1.inOut",a,o;if(Ve(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ms=function(t,e,i,n,s){return ve(t)?t.call(e,i,n,s):Ue(t)&&~t.indexOf("random(")?Ds(t):t},Cd=Vc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Rd={};je(Cd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rd[r]=1});var Ee=(function(r){Jf(t,r);function t(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:xs(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=n.parent||pe,S=(Ve(i)||jf(i)?nn(i[0]):"length"in n)?[i]:Si(i),x,v,E,A,w,R,y,T;if(o._targets=S.length?Hc(S):Rs("GSAP target "+i+" not found. https://gsap.com",!fi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||Ta(c)||Ta(h)){n=o.vars;var P=n.easeReverse||n.yoyoEase;if(x=o.timeline=new $e({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),x.kill(),x.parent=x._dp=$i(o),x._start=0,f||Ta(c)||Ta(h)){if(A=S.length,y=f&&md(f),ki(f))for(w in f)~Cd.indexOf(w)&&(T||(T={}),T[w]=f[w]);for(v=0;v<A;v++)E=Ka(n,Rd),E.stagger=0,P&&(E.easeReverse=P),T&&Vr(E,T),R=S[v],E.duration=+Ms(c,$i(o),v,R,S),E.delay=(+Ms(h,$i(o),v,R,S)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),x.to(R,E,y?y(v,R,S):0),x._ease=Gt.none;x.duration()?c=h=0:o.timeline=0}else if(_){xs(pi(x.vars.defaults,{ease:"none"})),x._ease=Jn(_.ease||n.ease||"none");var V=0,O,B,q;if(Ve(_))_.forEach(function(G){return x.to(S,G,">")}),x.duration();else{E={};for(w in _)w==="ease"||w==="easeEach"||sM(w,_[w],E,_.easeEach);for(w in E)for(O=E[w].sort(function(G,$){return G.t-$.t}),V=0,v=0;v<O.length;v++)B=O[v],q={ease:B.e,duration:(B.t-(v?O[v-1].t:0))/100*c},q[w]=B.v,x.to(S,q,V),V+=q.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!Nc&&(gn=$i(o),pe.killTweensOf(S),gn=0),Ui(p,$i(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===de(p._time)&&Ze(u)&&Ny($i(o))&&p.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-h)||0)),m&&ud($i(o),m),o}var e=t.prototype;return e.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-re&&!h?l:n<re?0:n,f,d,_,g,m,p,S,x;if(!c)Oy(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,a);if(f=de(u%g),u===l?(_=this._repeat,f=c):(m=de(u/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=Hr(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(de(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(fd(this,h?n:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,s,a)}if(this._rEase){var v=f<o;if(v!==this._inv){var E=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(v?-1:1)/E:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/c);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(ci(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(n<0?n:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&ec(this,n,s,a),ci(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&ci(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ec(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&bn(this,1),!s&&!(h&&!o)&&(u||o||p)&&(ci(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,a,o,l){Ls||oi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Xc(this,c),h=this._ease(c/this._dur),nM(this,n,s,a,o,h,c,l)?this.resetTo(n,s,a,o,1):(oo(this,0),this.parent||cd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ds(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,gn&&gn.vars.overwrite!==!0)._first||ds(this),this.parent&&a!==this.timeline.totalDuration()&&Gr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?Si(n):o,c=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!s||s==="all")&&Iy(o,l))return s==="all"&&(this._pt=0),ds(this);for(u=this._op=this._op||[],s!=="all"&&(Ue(s)&&(g={},je(s,function(S){return g[S]=1}),s=g),s=rM(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],s==="all"?(u[p]=s,_=f,d={}):(d=u[p]=u[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&so(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&ds(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return ys(1,arguments)},t.delayedCall=function(n,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(n,s,a){return ys(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,a){return pe.killTweensOf(n,s,a)},t})(Is);pi(Ee.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});je("staggerTo,staggerFrom,staggerFromTo",function(r){Ee[r]=function(){var t=new $e,e=nc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Yc=function(t,e,i){return t[e]=i},Pd=function(t,e,i){return t[e](i)},aM=function(t,e,i,n){return t[e](n.fp,i)},oM=function(t,e,i){return t.setAttribute(e,i)},qc=function(t,e){return ve(t[e])?Pd:Fc(t[e])&&t.setAttribute?oM:Yc},Dd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},lM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ld=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Kc=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},cM=function(t,e,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(t,e,i),s=a},hM=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?so(this,e,"_pt"):e.dep||(i=1),e=n;return!i},uM=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Id=function(t){for(var e=t._pt,i,n,s,a;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:a)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:a=e,e=i}t._pt=s},Qe=(function(){function r(e,i,n,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||Dd,this.d=l||this,this.set=c||Yc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=uM,this.m=i,this.mt=s,this.tween=n},r})();je(Vc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return zc[r]=1});di.TweenMax=di.TweenLite=Ee;di.TimelineLite=di.TimelineMax=$e;pe=new $e({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=bd;var Zn=[],Ua={},fM=[],Ou=0,dM=0,il=function(t){return(Ua[t]||fM).map(function(e){return e()})},oc=function(){var t=Date.now(),e=[];t-Ou>2&&(il("matchMediaInit"),Zn.forEach(function(i){var n=i.queries,s=i.conditions,a,o,l,c;for(o in n)a=Li.matchMedia(n[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),il("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Ou=t,il("matchMedia"))},Ud=(function(){function r(e,i){this.selector=i&&rc(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dM++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){ve(i)&&(s=n,n=i,i=ve);var a=this,o=function(){var c=he,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=rc(s)),he=a,u=n.apply(a,arguments),ve(u)&&a._r.push(u),he=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===ve?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var n=he;he=null,i(this),he=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Ee&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof $e?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ee)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=Zn.length;a--;)Zn[a].id===this.id&&Zn.splice(a,1)},t.revert=function(i){this.kill(i||{})},r})(),pM=(function(){function r(e){this.contexts=[],this.scope=e,he&&he.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){ki(i)||(i={matches:i});var a=new Ud(0,s||this.scope),o=a.conditions={},l,c,h;he&&!a.selector&&(a.selector=he.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(c in i)c==="all"?h=1:(l=Li.matchMedia(i[c]),l&&(Zn.indexOf(a)<0&&Zn.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(oc):l.addEventListener("change",oc)));return h&&n(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),Ja={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Md(n)})},timeline:function(t){return new $e(t)},getTweensOf:function(t,e){return pe.getTweensOf(t,e)},getProperty:function(t,e,i,n){Ue(t)&&(t=Si(t)[0]);var s=Kn(t||{}).get,a=i?ld:od;return i==="native"&&(i=""),t&&(e?a((ai[e]&&ai[e].get||s)(t,e,i,n)):function(o,l,c){return a((ai[o]&&ai[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=Si(t),t.length>1){var n=t.map(function(h){return ei.quickSetter(h,e,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}t=t[0]||{};var a=ai[e],o=Kn(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;wr._pt=0,u.init(t,i?h+i:h,wr,0,[t]),u.render(1,u),wr._pt&&Kc(1,wr)}:o.set(t,l);return a?c:function(h){return c(t,l,i?h+i:h,o,1)}},quickTo:function(t,e,i){var n,s=ei.to(t,pi((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Jn(t.ease,Cs.ease)),Lu(Cs,t||{})},config:function(t){return Lu(fi,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,a=t.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!ai[o]&&!di[o]&&Rs(e+" effect requires "+o+" plugin.")}),jo[e]=function(o,l,c){return i(Si(o),pi(l||{},s),c)},a&&($e.prototype[e]=function(o,l,c){return this.add(jo[e](o,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Gt[t]=Jn(e)},parseEase:function(t,e){return arguments.length?Jn(t,e):Gt},getById:function(t){return pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new $e(t),n,s;for(i.smoothChildTiming=Ze(t.smoothChildTiming),pe.remove(i),i._dp=0,i._time=i._tTime=pe._time,n=pe._first;n;)s=n._next,(e||!(!n._dur&&n instanceof Ee&&n.vars.onComplete===n._targets[0]))&&Ui(i,n,n._start-n._delay),n=s;return Ui(pe,i,0),i},context:function(t,e){return t?new Ud(t,e):he},matchMedia:function(t){return new pM(t)},matchMediaRefresh:function(){return Zn.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||oc()},addEventListener:function(t,e){var i=Ua[t]||(Ua[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Ua[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:Xy,wrapYoyo:Yy,distribute:md,random:_d,snap:gd,normalize:Wy,getUnit:ke,clamp:zy,splitColor:Sd,toArray:Si,selector:rc,mapRange:xd,pipe:Hy,unitize:Gy,interpolate:qy,shuffle:pd},install:id,effects:jo,ticker:oi,updateRoot:$e.updateRoot,plugins:ai,globalTimeline:pe,core:{PropTween:Qe,globals:nd,Tween:Ee,Timeline:$e,Animation:Is,getCache:Kn,_removeLinkedListItem:so,reverting:function(){return Fe},context:function(t){return t&&he&&(he.data.push(t),t._ctx=he),he},suppressOverwrites:function(t){return Nc=t}}};je("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ja[r]=Ee[r]});oi.add($e.updateRoot);wr=Ja.to({},{duration:0});var mM=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},gM=function(t,e){var i=t._targets,n,s,a;for(n in e)for(s=i.length;s--;)a=t._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=mM(a,n)),a&&a.modifier&&a.modifier(e[n],t,i[s],n))},nl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(Ue(s)&&(l={},je(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}gM(o,s)}}}},ei=Ja.registerPlugin({name:"attr",init:function(t,e,i,n,s){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],n,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)Fe?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},nl("roundProps",sc),nl("modifiers"),nl("snap",gd))||Ja;Ee.version=$e.version=ei.version="3.15.0";ed=1;Oc()&&Wr();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bu,_n,Dr,$c,qn,ku,Jc,_M=function(){return typeof window<"u"},rn={},Hn=180/Math.PI,Lr=Math.PI/180,Sr=Math.atan2,zu=1e8,Zc=/([A-Z])/g,vM=/(left|right|width|margin|padding|x)/i,xM=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},yM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},MM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},SM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},TM=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Nd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Fd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},bM=function(t,e,i){return t.style[e]=i},EM=function(t,e,i){return t.style.setProperty(e,i)},wM=function(t,e,i){return t._gsap[e]=i},AM=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},CM=function(t,e,i,n,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},RM=function(t,e,i,n,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},me="transform",ti=me+"Origin",PM=function r(t,e){var i=this,n=this.target,s=n.style,a=n._gsap;if(t in rn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Ji(n,o)}):this.tfm[t]=a.x?a[t]:Ji(n,t),t===ti&&(this.tfm.zOrigin=a.zOrigin);else return Fi.transform.split(",").forEach(function(o){return r.call(i,o,e)});if(this.props.indexOf(me)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ti,e,"")),t=me}(s||e)&&this.props.push(t,e,s[t])},Od=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},DM=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Zc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Jc(),(!s||!s.isStart)&&!i[me]&&(Od(i),n.zOrigin&&i[ti]&&(i[ti]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Bd=function(t,e){var i={target:t,props:[],revert:DM,save:PM};return t._gsap||ei.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},kd,cc=function(t,e){var i=_n.createElementNS?_n.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):_n.createElement(t);return i&&i.style?i:_n.createElement(t)},hi=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Zc,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,Xr(e)||e,1)||""},Vu="O,Moz,ms,Ms,Webkit".split(","),Xr=function(t,e,i){var n=e||qn,s=n.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Vu[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Vu[a]:"")+t},hc=function(){_M()&&window.document&&(Bu=window,_n=Bu.document,Dr=_n.documentElement,qn=cc("div")||{style:{}},cc("div"),me=Xr(me),ti=me+"Origin",qn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kd=!!Xr("perspective"),Jc=ei.core.reverting,$c=1)},Hu=function(t){var e=t.ownerSVGElement,i=cc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Dr.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Dr.removeChild(i),s},Gu=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},zd=function(t){var e,i;try{e=t.getBBox()}catch{e=Hu(t),i=1}return e&&(e.width||e.height)||i||(e=Hu(t)),e&&!e.width&&!e.x&&!e.y?{x:+Gu(t,["x","cx","x1"])||0,y:+Gu(t,["y","cy","y1"])||0,width:0,height:0}:e},Vd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zd(t))},En=function(t,e){if(e){var i=t.style,n;e in rn&&e!==ti&&(e=me),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Zc,"-$1").toLowerCase())):i.removeAttribute(e)}},vn=function(t,e,i,n,s,a){var o=new Qe(t._pt,e,i,0,1,a?Fd:Nd);return t._pt=o,o.b=n,o.e=s,t._props.push(i),o},Wu={deg:1,rad:1,turn:1},LM={grid:1,flex:1},wn=function r(t,e,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=qn.style,l=vM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",d=n==="%",_,g,m,p;if(n===a||!s||Wu[n]||Wu[a])return s;if(a!=="px"&&!f&&(s=r(t,e,i,"px")),p=t.getCTM&&Vd(t),(d||a==="%")&&(rn[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Te(d?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(f?a:n),g=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===_n||!g.appendChild)&&(g=_n.body),m=g._gsap,m&&d&&m.width&&l&&m.time===oi.time&&!m.uncache)return Te(s/m.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+n,_=t[h],S?t.style[e]=S:En(t,e)}else(d||a==="%")&&!LM[hi(g,"display")]&&(o.position=hi(t,"position")),g===t&&(o.position="static"),g.appendChild(qn),_=qn[h],g.removeChild(qn),o.position="absolute";return l&&d&&(m=Kn(g),m.time=oi.time,m.width=g[h]),Te(f?_*s/u:_&&s?u/_*s:0)},Ji=function(t,e,i,n){var s;return $c||hc(),e in Fi&&e!=="transform"&&(e=Fi[e],~e.indexOf(",")&&(e=e.split(",")[0])),rn[e]&&e!=="transform"?(s=Ns(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ja(hi(t,ti))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Za[e]&&Za[e](t,e,i)||hi(t,e)||sd(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?wn(t,e,s,i)+i:s},IM=function(t,e,i,n){if(!i||i==="none"){var s=Xr(e,t,1),a=s&&hi(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=hi(t,"borderTopColor"))}var o=new Qe(this._pt,t.style,e,0,1,Ld),l=0,c=0,h,u,f,d,_,g,m,p,S,x,v,E;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=hi(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=t.style[e],t.style[e]=n,n=hi(t,e)||n,g?t.style[e]=g:En(t,e)),h=[i,n],bd(h),i=h[0],n=h[1],f=i.match(Er)||[],E=n.match(Er)||[],E.length){for(;u=Er.exec(n);)m=u[0],S=n.substring(l,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Pr(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),l=Er.lastIndex-x.length,x||(x=x||fi.units[e]||v,l===n.length&&(n+=x,o.e+=x)),v!==x&&(d=wn(t,e,g,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=e==="display"&&n==="none"?Fd:Nd;return td.test(n)&&(o.e=0),this._pt=o,o},Xu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},UM=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Xu[i]||i,e[1]=Xu[n]||n,e.join(" ")},NM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],rn[o]&&(l=1,o=o==="transformOrigin"?ti:me),En(i,o);l&&(En(i,me),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Ns(i,1),a.uncache=1,Od(n)))}},Za={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var a=t._pt=new Qe(t._pt,e,i,0,0,NM);return a.u=n,a.pr=-10,a.tween=s,t._props.push(i),1}}},Us=[1,0,0,1,0,0],Hd={},Gd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Yu=function(t){var e=hi(t,me);return Gd(e)?Us:e.substr(7).match(Qf).map(Te)},jc=function(t,e){var i=t._gsap||Kn(t),n=t.style,s=Yu(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Us:s):(s===Us&&!t.offsetParent&&t!==Dr&&!i.svg&&(l=n.display,n.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Dr.appendChild(t)),s=Yu(t),l?n.display=l:En(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Dr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},uc=function(t,e,i,n,s,a){var o=t._gsap,l=s||jc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],x=e.split(" "),v=parseFloat(x[0])||0,E=parseFloat(x[1])||0,A,w,R,y;i?l!==Us&&(w=d*m-_*g)&&(R=v*(m/w)+E*(-g/w)+(g*S-m*p)/w,y=v*(-_/w)+E*(d/w)-(d*S-_*p)/w,v=R,E=y):(A=zd(t),v=A.x+(~x[0].indexOf("%")?v/100*A.width:v),E=A.y+(~(x[1]||x[0]).indexOf("%")?E/100*A.height:E)),n||n!==!1&&o.smooth?(p=v-c,S=E-h,o.xOffset=u+(p*d+S*g)-p,o.yOffset=f+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!n,o.origin=e,o.originIsAbsolute=!!i,t.style[ti]="0px 0px",a&&(vn(a,o,"xOrigin",c,v),vn(a,o,"yOrigin",h,E),vn(a,o,"xOffset",u,o.xOffset),vn(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+E)},Ns=function(t,e){var i=t._gsap||new wd(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=hi(t,ti)||"0",h,u,f,d,_,g,m,p,S,x,v,E,A,w,R,y,T,P,V,O,B,q,G,$,H,nt,ot,_t,Dt,te,Vt,W;return h=u=f=g=m=p=S=x=v=0,d=_=1,i.svg=!!(t.getCTM&&Vd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[me]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[me]!=="none"?l[me]:"")),n.scale=n.rotate=n.translate="none"),w=jc(t,i.svg),i.svg&&(i.uncache?(H=t.getBBox(),c=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),uc(t,$||c,!!$||i.originIsAbsolute,i.smooth!==!1,w)),E=i.xOrigin||0,A=i.yOrigin||0,w!==Us&&(P=w[0],V=w[1],O=w[2],B=w[3],h=q=w[4],u=G=w[5],w.length===6?(d=Math.sqrt(P*P+V*V),_=Math.sqrt(B*B+O*O),g=P||V?Sr(V,P)*Hn:0,S=O||B?Sr(O,B)*Hn+g:0,S&&(_*=Math.abs(Math.cos(S*Lr))),i.svg&&(h-=E-(E*P+A*O),u-=A-(E*V+A*B))):(W=w[6],te=w[7],ot=w[8],_t=w[9],Dt=w[10],Vt=w[11],h=w[12],u=w[13],f=w[14],R=Sr(W,Dt),m=R*Hn,R&&(y=Math.cos(-R),T=Math.sin(-R),$=q*y+ot*T,H=G*y+_t*T,nt=W*y+Dt*T,ot=q*-T+ot*y,_t=G*-T+_t*y,Dt=W*-T+Dt*y,Vt=te*-T+Vt*y,q=$,G=H,W=nt),R=Sr(-O,Dt),p=R*Hn,R&&(y=Math.cos(-R),T=Math.sin(-R),$=P*y-ot*T,H=V*y-_t*T,nt=O*y-Dt*T,Vt=B*T+Vt*y,P=$,V=H,O=nt),R=Sr(V,P),g=R*Hn,R&&(y=Math.cos(R),T=Math.sin(R),$=P*y+V*T,H=q*y+G*T,V=V*y-P*T,G=G*y-q*T,P=$,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Te(Math.sqrt(P*P+V*V+O*O)),_=Te(Math.sqrt(G*G+W*W)),R=Sr(q,G),S=Math.abs(R)>2e-4?R*Hn:0,v=Vt?1/(Vt<0?-Vt:Vt):0),i.svg&&($=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Gd(hi(t,me)),$&&t.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Te(d),i.scaleY=Te(_),i.rotation=Te(g)+o,i.rotationX=Te(m)+o,i.rotationY=Te(p)+o,i.skewX=S+o,i.skewY=x+o,i.transformPerspective=v+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[ti]=ja(c)),i.xOffset=i.yOffset=0,i.force3D=fi.force3D,i.renderTransform=i.svg?OM:kd?Wd:FM,i.uncache=0,i},ja=function(t){return(t=t.split(" "))[0]+" "+t[1]},rl=function(t,e,i){var n=ke(e);return Te(parseFloat(e)+parseFloat(wn(t,"x",i+"px",n)))+n},FM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wd(t,e)},Bn="0deg",hs="0px",kn=") ",Wd=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,d=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,S=i.target,x=i.zOrigin,v="",E=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Bn||h!==Bn)){var A=parseFloat(h)*Lr,w=Math.sin(A),R=Math.cos(A),y;A=parseFloat(u)*Lr,y=Math.cos(A),a=rl(S,a,w*y*-x),o=rl(S,o,-Math.sin(A)*-x),l=rl(S,l,R*y*-x+x)}m!==hs&&(v+="perspective("+m+kn),(n||s)&&(v+="translate("+n+"%, "+s+"%) "),(E||a!==hs||o!==hs||l!==hs)&&(v+=l!==hs||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+kn),c!==Bn&&(v+="rotate("+c+kn),h!==Bn&&(v+="rotateY("+h+kn),u!==Bn&&(v+="rotateX("+u+kn),(f!==Bn||d!==Bn)&&(v+="skew("+f+", "+d+kn),(_!==1||g!==1)&&(v+="scale("+_+", "+g+kn),S.style[me]=v||"translate(0, 0)"},OM=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,d=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,S=i.forceCSS,x=parseFloat(a),v=parseFloat(o),E,A,w,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Lr,c*=Lr,E=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Lr,y=Math.tan(c-h),y=Math.sqrt(1+y*y),w*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),E*=y,A*=y)),E=Te(E),A=Te(A),w=Te(w),R=Te(R)):(E=u,R=f,A=w=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=wn(d,"x",a,"px"),v=wn(d,"y",o,"px")),(_||g||m||p)&&(x=Te(x+_-(_*E+g*w)+m),v=Te(v+g-(_*A+g*R)+p)),(n||s)&&(y=d.getBBox(),x=Te(x+n/100*y.width),v=Te(v+s/100*y.height)),y="matrix("+E+","+A+","+w+","+R+","+x+","+v+")",d.setAttribute("transform",y),S&&(d.style[me]=y)},BM=function(t,e,i,n,s){var a=360,o=Ue(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Hn:1),c=l-n,h=n+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*zu)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*zu)%a-~~(c/a)*a)),t._pt=f=new Qe(t._pt,e,i,n,c,yM),f.e=h,f.u="deg",t._props.push(i),f},qu=function(t,e){for(var i in e)t[i]=e[i];return t},kM=function(t,e,i){var n=qu({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,f,d,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[me]=e,o=Ns(i,1),En(i,me),i.setAttribute("transform",c)):(c=getComputedStyle(i)[me],a[me]=e,o=Ns(i,1),a[me]=c);for(l in rn)c=n[l],h=o[l],c!==h&&s.indexOf(l)<0&&(d=ke(c),_=ke(h),u=d!==_?wn(i,l,c,_):parseFloat(c),f=parseFloat(h),t._pt=new Qe(t._pt,o,l,u,f-u,lc),t._pt.u=_||0,t._props.push(l));qu(o,n)};je("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",a=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(o){return t<2?r+o:"border"+o+r});Za[t>1?"border"+r:r]=function(o,l,c,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return Ji(o,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(l,d,u)}});var Xd={name:"css",register:hc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var a=this._props,o=t.style,l=i.vars.startAt,c,h,u,f,d,_,g,m,p,S,x,v,E,A,w,R,y;$c||hc(),this.styles=this.styles||Bd(t),R=this.styles.props,this.tween=i;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ai[g]&&Ad(g,e,i,n,t,s)))){if(d=typeof h,_=Za[g],d==="function"&&(h=h.call(i,n,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ds(h)),_)_(this,t,g,h,i)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Mn.lastIndex=0,Mn.test(c)||(m=ke(c),p=ke(h),p?m!==p&&(c=wn(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,n,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,t,s):l[g],Ue(c)&&~c.indexOf("random(")&&(c=Ds(c)),ke(c+"")||c==="auto"||(c+=fi.units[g]||ke(Ji(t,g))||""),(c+"").charAt(1)==="="&&(c=Ji(t,g))):c=Ji(t,g),f=parseFloat(c),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Fi&&(g==="autoAlpha"&&(f===1&&Ji(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,o.visibility),vn(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in rn,x){if(this.styles.save(g),y=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=hi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=hi(t,"perspective"),T?t.style.perspective=T:En(t,"perspective")}u=parseFloat(h)}if(v||(E=t._gsap,E.renderTransform&&!e.parseTransform||Ns(t,e.parseTransform),A=e.smoothOrigin!==!1&&E.smooth,v=this._pt=new Qe(this._pt,o,me,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new Qe(this._pt,E,"scaleY",E.scaleY,(S?Pr(E.scaleY,S+u):u)-E.scaleY||0,lc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(ti,0,o[ti]),h=UM(h),E.svg?uc(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&vn(this,E,"zOrigin",E.zOrigin,p),vn(this,o,g,ja(c),ja(h)));continue}else if(g==="svgOrigin"){uc(t,h,1,A,0,this);continue}else if(g in Hd){BM(this,E,g,f,S?Pr(f,S+h):h);continue}else if(g==="smoothOrigin"){vn(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){kM(this,h,t);continue}}else g in o||(g=Xr(g)||g);if(x||(u||u===0)&&(f||f===0)&&!xM.test(h)&&g in o)m=(c+"").substr((f+"").length),u||(u=0),p=ke(h)||(g in fi.units?fi.units[g]:m),m!==p&&(f=wn(t,g,c,p)),this._pt=new Qe(this._pt,x?E:o,g,f,(S?Pr(f,S+u):u)-f,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?TM:lc),this._pt.u=p||0,x&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=SM):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=MM);else if(g in o)IM.call(this,t,g,c,S?S+h:h);else if(g in t)this.add(t,g,c||t[g],S?S+h:h,n,s);else if(g!=="parseTransform"){kc(g,h);continue}x||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}w&&Id(this)},render:function(t,e){if(e.tween._time||!Jc())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Ji,aliases:Fi,getSetter:function(t,e,i){var n=Fi[e];return n&&n.indexOf(",")<0&&(e=n),e in rn&&e!==ti&&(t._gsap.x||Ji(t,"x"))?i&&ku===i?e==="scale"?AM:wM:(ku=i||{})&&(e==="scale"?CM:RM):t.style&&!Fc(t.style[e])?bM:~e.indexOf("-")?EM:qc(t,e)},core:{_removeProperty:En,_getMatrix:jc}};ei.utils.checkPrefix=Xr;ei.core.getStyleSaver=Bd;(function(r,t,e,i){var n=je(r+","+t+","+e,function(s){rn[s]=1});je(t,function(s){fi.units[s]="deg",Hd[s]=1}),Fi[n[13]]=r+","+t,je(i,function(s){var a=s.split(":");Fi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");je("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fi.units[r]="px"});ei.registerPlugin(Xd);var le=ei.registerPlugin(Xd)||ei;le.core.Tween;const zM="/cake/assets/gift-000-BfCVsNz5.png",VM="/cake/assets/cake-CNp0LLjc.png",pn={gift:new URL("../assets/gift.png",import.meta.url).href,cake:new URL("../assets/cake.png",import.meta.url).href,music:new URL("../assets/music.mp3",import.meta.url).href,wishBottleEmpty:new URL("/cake/assets/bottle-empty-Cpdz2go0.png",import.meta.url).href,wishBottleWithScroll:new URL("/cake/assets/bottle-with-scroll-3Uv6gMVe.png",import.meta.url).href,wishGalaxy:new URL("/cake/assets/galaxy-IFrRpjmY.png",import.meta.url).href,wishScrollOpen:new URL("/cake/assets/scroll_open-D6_SGJCz.png",import.meta.url).href,wishPen:new URL("/cake/assets/pen-BXrazMWm.png",import.meta.url).href},HM=Object.assign({"../assets/gift/gift-000.png":zM}),GM=Object.assign({"../assets/cake/cake.png":VM}),Ku=Object.entries(HM).map(([r,t])=>{const e=r.match(/gift-(\d{3})\.png$/);return e?{angle:Number(e[1])%360,path:t}:null}).filter(Boolean).filter((r,t,e)=>e.findIndex(({angle:i})=>i===r.angle)===t).sort((r,t)=>r.angle-t.angle),$u=Object.entries(GM).map(([r,t])=>({file:r,path:t})).sort((r,t)=>r.file.localeCompare(t.file)),sl={blue:5752831,violet:10315775,gold:16766842},Se={LOADING:"loading",GIFT:"gift",TRANSITION:"transition",CAKE:"cake",WISH_TRANSITION:"wish-transition",WISH:"wish"},WM=`
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSize;
  attribute float aPhase;
  attribute float aSpeed;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vTwinkle;

  void main() {
    vec3 animated = position;
    animated.x += sin(uTime * aSpeed + aPhase) * 0.09;
    animated.y += cos(uTime * aSpeed * 0.7 + aPhase) * 0.08;
    vec4 modelPosition = modelMatrix * vec4(animated, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    vColor = aColor;
    vTwinkle = 0.5 + 0.5 * sin(uTime * (1.2 + aSpeed * 2.4) + aPhase);
    gl_PointSize = min(aSize * uPixelRatio * (160.0 / max(1.0, -viewPosition.z)), 14.0 * uPixelRatio);
  }
`,XM=`
  varying vec3 vColor;
  varying float vTwinkle;

  void main() {
    vec2 centered = gl_PointCoord - 0.5;
    float distanceToCenter = length(centered);
    float core = smoothstep(0.18, 0.0, distanceToCenter);
    float glow = smoothstep(0.5, 0.08, distanceToCenter);
    float rays = smoothstep(0.055, 0.0, min(abs(centered.x), abs(centered.y))) * smoothstep(0.48, 0.05, distanceToCenter);
    float alpha = (glow * 0.28 + core * 0.82 + rays * 0.42) * (0.38 + vTwinkle * 0.62);
    if (alpha < 0.02) discard;
    gl_FragColor = vec4(vColor * (1.0 + core * 0.8), alpha);
  }
`,Ju=[new Rt(16777215),new Rt(8378623),new Rt(11832575),new Rt(16767370),new Rt(16752101)];class YM extends Va{constructor({count:t=1800,radius:e=24,depth:i=38,pixelRatio:n=1}={}){const s=new Ie,a=new Float32Array(t*3),o=new Float32Array(t),l=new Float32Array(t),c=new Float32Array(t),h=new Float32Array(t*3);for(let f=0;f<t;f+=1){const d=f*3,_=Math.random()*Math.PI*2,g=Math.pow(Math.random(),.72)*e;a[d]=Math.cos(_)*g,a[d+1]=(Math.random()-.5)*e*1.3,a[d+2]=-Math.random()*i-1.5,o[f]=.55+Math.pow(Math.random(),2.4)*3.15,l[f]=Math.random()*Math.PI*2,c[f]=.12+Math.random()*.46;const m=Ju[Math.floor(Math.random()*Ju.length)];h[d]=m.r,h[d+1]=m.g,h[d+2]=m.b}s.setAttribute("position",new ne(a,3)),s.setAttribute("aSize",new ne(o,1)),s.setAttribute("aPhase",new ne(l,1)),s.setAttribute("aSpeed",new ne(c,1)),s.setAttribute("aColor",new ne(h,3));const u=new Ae({uniforms:{uTime:{value:0},uPixelRatio:{value:n}},vertexShader:WM,fragmentShader:XM,transparent:!0,depthWrite:!1,blending:Le});super(s,u),this.frustumCulled=!1}update(t,e){this.material.uniforms.uTime.value=t,this.rotation.y+=e*.004,this.rotation.z=Math.sin(t*.035)*.025}setPixelRatio(t){this.material.uniforms.uPixelRatio.value=t}}const qM=`
  uniform float uProgress;
  uniform float uPixelRatio;
  attribute vec3 aTarget;
  attribute vec3 aControl;
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float progress = smoothstep(0.0, 1.0, uProgress);
    vec3 first = mix(position, aControl, progress);
    vec3 second = mix(aControl, aTarget, progress);
    vec3 transformed = mix(first, second, progress);
    vec4 viewPosition = modelViewMatrix * vec4(transformed, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = aSize * uPixelRatio * (130.0 / max(1.0, -viewPosition.z));
    vColor = aColor;
    vAlpha = sin(progress * 3.1415926) * 1.35;
  }
`,Zu=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float distanceToCenter = length(gl_PointCoord - 0.5);
    float glow = smoothstep(0.5, 0.0, distanceToCenter);
    float core = smoothstep(0.16, 0.0, distanceToCenter);
    float alpha = (glow * 0.55 + core) * vAlpha;
    if (alpha < 0.02) discard;
    gl_FragColor = vec4(vColor * (1.0 + core), alpha);
  }
`,KM=`
  uniform float uPixelRatio;
  attribute float aSize;
  attribute float aAlpha;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewPosition;
    gl_PointSize = aSize * uPixelRatio * (145.0 / max(1.0, -viewPosition.z));
    vColor = aColor;
    vAlpha = aAlpha;
  }
`,ba=[16777215,16769690,8444159,12685823,16751839].map(r=>new Rt(r));class $M extends ze{constructor({pixelRatio:t=1,maxBurst:e=1100,gatherCount:i=700}={}){super(),this.pixelRatio=t,this.maxBurst=e,this.gather=this.createGatherParticles(i),this.burst=this.createBurstParticles(e),this.add(this.gather,this.burst),this.gather.visible=!1}createGatherParticles(t){const e=new Ie,i=new Float32Array(t*3),n=new Float32Array(t*3),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t*3);for(let l=0;l<t;l+=1){const c=l*3,h=new D().randomDirection(),u=4.5+Math.random()*8;i[c]=h.x*u,i[c+1]=h.y*u,i[c+2]=h.z*u*.55,n[c]=(Math.random()-.5)*.25,n[c+1]=(Math.random()-.5)*.25,n[c+2]=(Math.random()-.5)*.25,s[c]=i[c]*.55+(Math.random()-.5)*3,s[c+1]=i[c+1]*.55+(Math.random()-.5)*3,s[c+2]=i[c+2]*.55+(Math.random()-.5)*3,a[l]=.9+Math.random()*3.4;const f=ba[l%ba.length];o[c]=f.r,o[c+1]=f.g,o[c+2]=f.b}return e.setAttribute("position",new ne(i,3)),e.setAttribute("aTarget",new ne(n,3)),e.setAttribute("aControl",new ne(s,3)),e.setAttribute("aSize",new ne(a,1)),e.setAttribute("aColor",new ne(o,3)),new Va(e,new Ae({uniforms:{uProgress:{value:0},uPixelRatio:{value:this.pixelRatio}},vertexShader:qM,fragmentShader:Zu,transparent:!0,depthWrite:!1,blending:Le}))}createBurstParticles(t){const e=new Ie;return this.burstPositions=new Float32Array(t*3),this.burstVelocities=Array.from({length:t},()=>new D),this.burstLife=new Float32Array(t),this.burstMaxLife=new Float32Array(t),this.burstSizes=new Float32Array(t),this.burstAlpha=new Float32Array(t),this.burstColors=new Float32Array(t*3),e.setAttribute("position",new ne(this.burstPositions,3)),e.setAttribute("aSize",new ne(this.burstSizes,1)),e.setAttribute("aAlpha",new ne(this.burstAlpha,1)),e.setAttribute("aColor",new ne(this.burstColors,3)),e.setDrawRange(0,t),new Va(e,new Ae({uniforms:{uPixelRatio:{value:this.pixelRatio}},vertexShader:KM,fragmentShader:Zu,transparent:!0,depthWrite:!1,blending:Le}))}startGather(t){return this.gather.position.copy(t),this.gather.material.uniforms.uProgress.value=0,this.gather.visible=!0,this.gather.material.uniforms.uProgress}stopGather(){this.gather.visible=!1}emitBurst(t,e=320,i=3.6){for(let n=0;n<Math.min(e,this.maxBurst);n+=1){const s=n*3,a=new D().randomDirection();a.y=a.y*.72+.22,a.normalize();const o=i*(.35+Math.random()*.95);this.burstPositions[s]=t.x+(Math.random()-.5)*.22,this.burstPositions[s+1]=t.y+(Math.random()-.5)*.22,this.burstPositions[s+2]=t.z+(Math.random()-.5)*.22,this.burstVelocities[n].copy(a).multiplyScalar(o),this.burstMaxLife[n]=.85+Math.random()*1.4,this.burstLife[n]=this.burstMaxLife[n],this.burstSizes[n]=.8+Math.random()*4.2;const l=ba[Math.floor(Math.random()*ba.length)];this.burstColors[s]=l.r,this.burstColors[s+1]=l.g,this.burstColors[s+2]=l.b,this.burstAlpha[n]=1}this.burst.geometry.attributes.position.needsUpdate=!0,this.burst.geometry.attributes.aColor.needsUpdate=!0,this.burst.geometry.attributes.aSize.needsUpdate=!0}update(t){for(let e=0;e<this.maxBurst;e+=1){if(this.burstLife[e]<=0)continue;const i=e*3;this.burstLife[e]-=t;const n=this.burstVelocities[e];n.multiplyScalar(Math.max(0,1-t*.72)),n.y-=t*.18,this.burstPositions[i]+=n.x*t,this.burstPositions[i+1]+=n.y*t,this.burstPositions[i+2]+=n.z*t;const s=Math.max(0,this.burstLife[e]/this.burstMaxLife[e]);this.burstAlpha[e]=s*s}this.burst.geometry.attributes.position.needsUpdate=!0,this.burst.geometry.attributes.aAlpha.needsUpdate=!0}setPixelRatio(t){this.gather.material.uniforms.uPixelRatio.value=t,this.burst.material.uniforms.uPixelRatio.value=t}}const JM=`
  uniform float uTime;
  uniform float uHover;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    vec3 transformed = position;
    float wave = sin((uv.y * 8.0) + uTime * 1.7) * 0.025 * uHover;
    transformed.z += wave;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
`,ZM=`
  uniform sampler2D uTexture;
  uniform sampler2D uTextureNext;
  uniform float uTextureMix;
  uniform float uTime;
  uniform float uOpacity;
  uniform float uDissolve;
  uniform float uGlow;
  uniform float uHover;
  uniform vec3 uGlowColor;
  varying vec2 vUv;

  float hash(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  float noise(vec2 point) {
    vec2 cell = floor(point);
    vec2 local = fract(point);
    local = local * local * (3.0 - 2.0 * local);
    float a = hash(cell);
    float b = hash(cell + vec2(1.0, 0.0));
    float c = hash(cell + vec2(0.0, 1.0));
    float d = hash(cell + vec2(1.0, 1.0));
    return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
  }

  void main() {
    vec4 currentTexel = texture2D(uTexture, vUv);
    vec4 nextTexel = texture2D(uTextureNext, vUv);
    float mixedAlpha = mix(currentTexel.a, nextTexel.a, uTextureMix);
    vec3 mixedPremultiplied = mix(
      currentTexel.rgb * currentTexel.a,
      nextTexel.rgb * nextTexel.a,
      uTextureMix
    );
    vec4 texel = vec4(mixedPremultiplied / max(mixedAlpha, 0.001), mixedAlpha);
    float detailedNoise = noise(vUv * 12.0 + vec2(uTime * 0.06, -uTime * 0.04));
    float keep = step(uDissolve, detailedNoise);
    float dissolveEdge = smoothstep(uDissolve, uDissolve + 0.11, detailedNoise) - smoothstep(uDissolve + 0.11, uDissolve + 0.22, detailedNoise);
    float dissolveActive = smoothstep(0.015, 0.08, uDissolve);
    float edgeFade = smoothstep(0.0, 0.08, vUv.x) * smoothstep(0.0, 0.08, 1.0 - vUv.x);
    edgeFade *= smoothstep(0.0, 0.08, vUv.y) * smoothstep(0.0, 0.08, 1.0 - vUv.y);
    float pulse = 0.75 + sin(uTime * 2.2) * 0.25;
    vec3 glow = uGlowColor * (uGlow * pulse + dissolveEdge * 4.5 * dissolveActive + uHover * 0.2);
    vec3 color = texel.rgb + glow;
    float alpha = texel.a * uOpacity * edgeFade * keep;
    if (alpha < 0.01) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;class ju extends ze{constructor({texture:t,size:e=5.4,aspect:i=1,glowColor:n=9219839}){super(),this.material=new Ae({uniforms:{uTexture:{value:t},uTextureNext:{value:t},uTextureMix:{value:0},uTime:{value:0},uOpacity:{value:1},uDissolve:{value:0},uGlow:{value:.12},uHover:{value:0},uGlowColor:{value:new Rt(n)}},vertexShader:JM,fragmentShader:ZM,transparent:!0,depthWrite:!1,side:Ke});const s=i>=1?e:e*i,a=i>=1?e/i:e;this.mesh=new ge(new en(s,a,36,36),this.material),this.mesh.userData.portal=this,this.add(this.mesh)}set opacity(t){this.material.uniforms.uOpacity.value=t}get opacity(){return this.material.uniforms.uOpacity.value}set dissolve(t){this.material.uniforms.uDissolve.value=t}get dissolve(){return this.material.uniforms.uDissolve.value}set glow(t){this.material.uniforms.uGlow.value=t}set hover(t){this.material.uniforms.uHover.value=t}setTextureBlend(t,e,i){this.material.uniforms.uTexture.value=t,this.material.uniforms.uTextureNext.value=e,this.material.uniforms.uTextureMix.value=i}update(t){this.material.uniforms.uTime.value=t}}function Qu(r,t,e,i=0){const n=[];for(let a=0;a<=150;a+=1){const o=a/150,l=o*Math.PI*2*e+i,c=r+Math.sin(o*Math.PI*4+i)*.18;n.push(new D(Math.cos(l)*c,(o-.5)*t+Math.sin(l*.5)*.2,Math.sin(l)*c*.52))}return new Bf(n,!1,"centripetal")}class jM extends ze{constructor(){super();const t=[new Ga({color:11983103,emissive:6047944,emissiveIntensity:1.25,transparent:!0,opacity:.34,roughness:.12,metalness:.05,transmission:.72,thickness:.35,depthWrite:!1,blending:Le}),new Ga({color:16762355,emissive:8077245,emissiveIntensity:1.05,transparent:!0,opacity:.25,roughness:.18,transmission:.65,thickness:.25,depthWrite:!1,blending:Le})],e=new ge(new Ha(Qu(2.25,3.25,1.65),190,.038,8,!1),t[0]),i=new ge(new Ha(Qu(2.52,2.45,1.25,Math.PI),170,.026,8,!1),t[1]);e.rotation.z=-.08,i.rotation.z=.16,this.add(e,i),this.ribbons=[e,i]}update(t,e){this.rotation.y+=e*.18,this.rotation.z=Math.sin(t*.32)*.08,this.ribbons[0].material.opacity=.28+Math.sin(t*1.1)*.07,this.ribbons[1].material.opacity=.22+Math.cos(t*.9)*.06}}const tf=window.matchMedia("(max-width: 820px), (pointer: coarse)").matches;function Qc(r){return r.colorSpace=Xe,r.anisotropy=tf?1:4,tf&&(r.generateMipmaps=!1,r.minFilter=li),r.needsUpdate=!0,r}function zs(r,t=1024){const e=document.createElement("canvas");e.width=t,e.height=t;const i=e.getContext("2d");return r(i,t),Qc(new Nf(e))}function Vs(){return zs((r,t)=>{const e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,241,180,.95)"),e.addColorStop(.32,"rgba(140,178,255,.45)"),e.addColorStop(1,"rgba(65,70,255,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)},256)}function QM(){return zs((r,t)=>{r.translate(t/2,t/2);const e=r.createRadialGradient(0,0,0,0,0,t*.48);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.1,"rgba(255,244,193,.96)"),e.addColorStop(.38,"rgba(127,179,255,.34)"),e.addColorStop(1,"rgba(80,80,255,0)"),r.fillStyle=e,r.fillRect(-t/2,-t/2,t,t),r.strokeStyle="rgba(255,255,255,.9)",r.lineWidth=t*.018,r.beginPath(),r.moveTo(-t*.38,0),r.lineTo(t*.38,0),r.moveTo(0,-t*.38),r.lineTo(0,t*.38),r.stroke()},128)}function tS(){return zs((r,t)=>{const e=r.createRadialGradient(t/2,t*.62,0,t/2,t*.58,t*.42);e.addColorStop(0,"rgba(255,255,235,1)"),e.addColorStop(.18,"rgba(255,235,130,.98)"),e.addColorStop(.48,"rgba(255,135,35,.8)"),e.addColorStop(.82,"rgba(148,69,255,.3)"),e.addColorStop(1,"rgba(60,30,255,0)"),r.fillStyle=e,r.beginPath(),r.moveTo(t*.5,t*.05),r.bezierCurveTo(t*.72,t*.35,t*.84,t*.62,t*.5,t*.94),r.bezierCurveTo(t*.18,t*.62,t*.3,t*.35,t*.5,t*.05),r.fill()},256)}function Yd(r,t,e,i,n){for(let s=0;s<e;s+=1){const a=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*i,l=t/2+Math.cos(a)*o,c=n+Math.sin(a)*o,h=2+Math.random()*8;r.fillStyle=["#fff4bb","#8fd9ff","#cf9cff","#ffffff"][s%4],r.shadowColor=r.fillStyle,r.shadowBlur=8,r.beginPath();for(let u=0;u<10;u+=1){const f=u%2===0?h:h*.42,d=-Math.PI/2+u*Math.PI/5,_=l+Math.cos(d)*f,g=c+Math.sin(d)*f;u===0?r.moveTo(_,g):r.lineTo(_,g)}r.closePath(),r.fill()}r.shadowBlur=0}function eS(){return zs((r,t)=>{const e=r.createRadialGradient(t/2,t*.46,20,t/2,t/2,t*.5);e.addColorStop(0,"rgba(71,77,205,.74)"),e.addColorStop(.62,"rgba(14,17,75,.4)"),e.addColorStop(1,"rgba(3,4,20,0)"),r.fillStyle=e,r.fillRect(0,0,t,t),Yd(r,t,72,t*.42,t*.48);const i=t*.245,n=t*.37,s=t*.51,a=t*.42,o=r.createLinearGradient(i,n,i+s,n+a);o.addColorStop(0,"#405be8"),o.addColorStop(.42,"#171c77"),o.addColorStop(.72,"#492183"),o.addColorStop(1,"#11164f"),r.shadowColor="#697dff",r.shadowBlur=45,r.fillStyle=o,r.roundRect(i,n,s,a,t*.025),r.fill(),r.strokeStyle="rgba(164,210,255,.8)",r.lineWidth=t*.009,r.stroke(),r.shadowBlur=0;const l=r.createLinearGradient(0,n,t,n+a);l.addColorStop(0,"rgba(173,225,255,.35)"),l.addColorStop(.5,"rgba(255,222,165,.88)"),l.addColorStop(1,"rgba(205,150,255,.4)"),r.fillStyle=l,r.fillRect(t*.465,n,t*.07,a),r.fillRect(i,t*.49,s,t*.065),r.strokeStyle="rgba(234,224,255,.72)",r.lineWidth=t*.045,r.lineCap="round",r.beginPath(),r.moveTo(t*.5,t*.4),r.bezierCurveTo(t*.34,t*.16,t*.18,t*.28,t*.45,t*.43),r.moveTo(t*.5,t*.4),r.bezierCurveTo(t*.66,t*.16,t*.82,t*.28,t*.55,t*.43),r.stroke(),r.fillStyle="#fff3ba",r.shadowColor="#ffffff",r.shadowBlur=24,r.font=`bold ${t*.12}px serif`,r.textAlign="center",r.fillText("✦",t/2,t*.44)})}function iS(){return zs((r,t)=>{const e=r.createRadialGradient(t/2,t*.53,20,t/2,t/2,t*.48);e.addColorStop(0,"rgba(60,79,220,.58)"),e.addColorStop(.65,"rgba(16,18,72,.28)"),e.addColorStop(1,"rgba(3,4,20,0)"),r.fillStyle=e,r.fillRect(0,0,t,t),Yd(r,t,64,t*.43,t*.5);const i=r.createLinearGradient(0,t*.43,0,t*.78);i.addColorStop(0,"#315bc4"),i.addColorStop(.38,"#142b83"),i.addColorStop(.78,"#34136c"),i.addColorStop(1,"#10174f"),r.fillStyle=i,r.shadowColor="#487cff",r.shadowBlur=40,r.beginPath(),r.ellipse(t/2,t*.7,t*.29,t*.105,0,0,Math.PI*2),r.fill(),r.fillRect(t*.21,t*.48,t*.58,t*.22),r.beginPath(),r.ellipse(t/2,t*.48,t*.29,t*.105,0,0,Math.PI*2),r.fill(),r.shadowBlur=0,r.fillStyle="#fff3dd",r.beginPath(),r.ellipse(t/2,t*.46,t*.285,t*.095,0,0,Math.PI*2),r.fill(),r.strokeStyle="#ffd890",r.lineWidth=t*.012,r.stroke(),r.strokeStyle="rgba(255,219,125,.9)",r.lineWidth=t*.006;for(let n=0;n<24;n+=1){const s=t*.25+Math.random()*t*.5,a=t*.52+Math.random()*t*.16;r.beginPath(),r.moveTo(s-5,a),r.lineTo(s+5,a),r.moveTo(s,a-5),r.lineTo(s,a+5),r.stroke()}r.fillStyle="#f6d5ff",r.fillRect(t*.485,t*.245,t*.03,t*.19),r.strokeStyle="#bc7cff",r.lineWidth=t*.008,r.strokeRect(t*.485,t*.245,t*.03,t*.19)})}async function ef(r,t){const e=new Hf;try{const i=await e.loadAsync(r);return{texture:Qc(i),usedFallback:!1}}catch{return{texture:t(),usedFallback:!0}}}async function dn(r){const t=await new Hf().loadAsync(r);return Qc(t)}class nS extends ze{constructor(){super();const t=new Qn({map:tS(),transparent:!0,depthWrite:!1,blending:Le,color:16777215});this.flame=new kr(t),this.flame.scale.set(.42,.72,1),this.glow=new kr(new Qn({map:Vs(),color:16751669,transparent:!0,opacity:.16,depthWrite:!1,blending:Le})),this.glow.scale.setScalar(1.05),this.glow.position.z=-.04,this.light=new $l(16756067,1.05,3.2,2),this.light.position.z=.3,this.add(this.glow,this.flame,this.light)}update(t){const e=Math.sin(t*14.3)*.055+Math.sin(t*23.7)*.032;this.flame.scale.set(.42-e*.45,.72+e,1),this.flame.position.x=Math.sin(t*8.4)*.025,this.glow.material.opacity=.13+Math.sin(t*11.2)*.035,this.glow.scale.setScalar(.98+Math.sin(t*7.5)*.06),this.light.intensity=.82+Math.sin(t*12.6)*.16+Math.random()*.08}}class nf extends ze{constructor({color:t=8887551,radius:e=2.7}={}){super(),this.fade=1,this.sprite=new kr(new Qn({map:Vs(),color:t,transparent:!0,opacity:.055,depthWrite:!1,blending:Le})),this.sprite.scale.setScalar(e*2.35),this.sprite.position.z=-.45,this.add(this.sprite);const i=new Tn({color:t,transparent:!0,opacity:.26,depthWrite:!1,blending:Le,side:Ke});this.rings=[0,1,2].map(n=>{const s=new ge(new to(e+n*.18,.012,8,180),i.clone());return s.scale.y=.42+n*.09,s.rotation.x=.1+n*.24,s.rotation.z=n*.8,this.add(s),s})}update(t,e){this.rings.forEach((i,n)=>{i.rotation.z+=e*(.12+n*.05)*(n%2===0?1:-1),i.material.opacity=(.085+Math.sin(t*(.7+n*.2)+n)*.035)*this.fade}),this.sprite.material.opacity=(.038+Math.sin(t*.85)*.012)*this.fade}}function al(r,t,e={}){var o,l,c,h;const i=((o=r.image)==null?void 0:o.naturalWidth)||((l=r.image)==null?void 0:l.width)||1,n=((c=r.image)==null?void 0:c.naturalHeight)||((h=r.image)==null?void 0:h.height)||1,s=i/n,a=new Tn({map:r,transparent:!0,depthWrite:!1,side:Ke,...e});return new ge(new en(t*s,t,1,1),a)}class rS extends ze{constructor({bottleTexture:t,sealedBottleTexture:e,galaxyTexture:i}){super(),this.baseY=0,this.opacity=0,this.sealedMix=0,this.magicIntensity=0,this.glow=new kr(new Qn({map:Vs(),color:7495167,transparent:!0,opacity:0,depthWrite:!1,blending:Le})),this.glow.position.set(0,-.15,-.55),this.glow.scale.set(6.2,6.8,1),this.galaxy=al(i,2.35,{color:11057407,opacity:0,blending:Le}),this.galaxy.position.set(0,-.28,-.18),this.galaxy.scale.set(.82,.72,1),this.bottle=al(t,4.18,{color:14870527,opacity:0}),this.bottle.position.z=.81,this.bottle.renderOrder=10,this.sealedBottle=al(e,4.18,{color:15854335,opacity:0}),this.sealedBottle.position.z=.82,this.sealedBottle.renderOrder=11,this.add(this.glow,this.galaxy,this.bottle,this.sealedBottle),this.setOpacity(0)}setOpacity(t){this.opacity=t,this.updateBottleOpacity(),this.galaxy.material.opacity=t*.72,this.glow.material.opacity=t*.18}setSealedMix(t){this.sealedMix=Ki.clamp(t,0,1),this.updateBottleOpacity()}updateBottleOpacity(){this.bottle.visible=this.sealedMix<.999,this.sealedBottle.visible=this.sealedMix>.001,this.bottle.material.opacity=this.opacity*(1-this.sealedMix),this.sealedBottle.material.opacity=this.opacity*this.sealedMix}update(t){this.position.y=this.baseY+Math.sin(t*.72)*.12,this.rotation.z=Math.sin(t*.42)*.018,this.rotation.y=Math.sin(t*.34)*.045,this.galaxy.rotation.z=t*.035;const e=Math.sin(t*.8)*.025;this.galaxy.scale.set(.82+e,.72+e,1),this.galaxy.material.opacity=this.opacity*(.72+this.magicIntensity*.2),this.glow.material.opacity=this.opacity*(.15+Math.sin(t*1.1)*.035+this.magicIntensity*.42);const i=6.1+Math.sin(t*.65)*.18+this.magicIntensity*1.2;this.glow.scale.set(i,i*1.08,1)}}const us=5.85;function sS(){const r=document.createElement("canvas");r.width=1024,r.height=1152;const t=new Nf(r);return t.colorSpace=Xe,t.minFilter=li,t.magFilter=li,t.generateMipmaps=!1,{canvas:r,texture:t}}function aS(r,t,e,i){const n=[],s=t.trim().split(/\n+/);for(const a of s){let o="";for(const l of Array.from(a)){const c=`${o}${l}`;if(o&&r.measureText(c).width>e){if(n.push(o),o=l,n.length===i)break}else o=c}if(n.length===i)break;o&&n.push(o)}return n.length>i&&(n.length=i),n.length===i&&n.join("").length<t.replace(/\s/g,"").length&&(n[i-1]=`${n[i-1].slice(0,-1)}…`),n}class oS extends ze{constructor({scrollTexture:t}){var o,l,c,h;super(),this.baseY=.2,this.revealOffset=-.55,this.isShown=!1;const e=((o=t.image)==null?void 0:o.naturalWidth)||((l=t.image)==null?void 0:l.width)||1,i=((c=t.image)==null?void 0:c.naturalHeight)||((h=t.image)==null?void 0:h.height)||1,n=e/i;this.scrollWidth=us*n,this.scrollMaterial=new Tn({map:t,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,side:Ke}),this.scroll=new ge(new en(this.scrollWidth,us),this.scrollMaterial);const{canvas:s,texture:a}=sS();this.textCanvas=s,this.textTexture=a,this.textMaterial=new Tn({map:a,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}),this.textPlane=new ge(new en(this.scrollWidth*.7,us*.67),this.textMaterial),this.textPlane.position.set(0,-.05,.035),this.scroll.renderOrder=40,this.textPlane.renderOrder=41,this.scroll.frustumCulled=!1,this.textPlane.frustumCulled=!1,this.glow=new kr(new Qn({map:Vs(),color:9598207,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Le})),this.glow.scale.set(this.scrollWidth*1.2,us*1.12,1),this.glow.position.z=-.04,this.glow.renderOrder=39,this.add(this.glow,this.scroll,this.textPlane),this.position.z=2.4,this.scale.setScalar(0),this.visible=!1}drawWish(t){const e=this.textCanvas.getContext("2d"),{width:i,height:n}=this.textCanvas;e.clearRect(0,0,i,n);const s=t.trim(),a=s.length>70?54:s.length>36?62:70;e.font=`600 ${a}px "Noto Serif SC", "Songti SC", serif`,e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(116, 72, 177, 0.24)",e.shadowBlur=12;const o=aS(e,s,i*.78,8),l=a*1.62,c=n/2-(o.length-1)*l/2,h=e.createLinearGradient(i*.2,0,i*.8,n);h.addColorStop(0,"#4d246f"),h.addColorStop(.5,"#6a347d"),h.addColorStop(1,"#a56b24"),e.fillStyle=h,o.forEach((u,f)=>{e.fillText(u,i/2,c+f*l)}),this.textTexture.needsUpdate=!0}showWish(t){this.drawWish(t),this.visible=!0,this.isShown=!0,this.revealOffset=-.55,this.scale.setScalar(0),this.position.y=this.baseY+this.revealOffset,this.scrollMaterial.opacity=0,this.textMaterial.opacity=0,this.glow.material.opacity=0,le.killTweensOf(this),le.killTweensOf(this.scale),le.killTweensOf(this.scrollMaterial),le.killTweensOf(this.textMaterial),le.timeline().to(this.scale,{x:1,y:1,z:1,duration:1.1,ease:"back.out(1.35)"},0).to(this,{revealOffset:0,duration:1.15,ease:"power3.out"},0).to(this.scrollMaterial,{opacity:1,duration:.78,ease:"power2.out"},.05).to(this.textMaterial,{opacity:1,duration:.72,ease:"power2.out"},.38)}sealAway(){return this.isShown=!1,new Promise(t=>{le.timeline({onComplete:()=>{this.visible=!1,t()}}).to(this.glow.material,{opacity:.82,duration:.34,ease:"power2.out"},0).to(this.glow.scale,{x:this.scrollWidth*1.55,y:us*1.45,duration:.72,ease:"power3.out"},0).to(this.scale,{x:1.07,y:1.07,z:1.07,duration:.26,ease:"power2.out"},0).to(this.scale,{x:.04,y:.04,z:.04,duration:1.02,ease:"power3.in"},.27).to(this,{revealOffset:.36,duration:1.08,ease:"power2.in"},.2).to(this.scrollMaterial,{opacity:0,duration:.72,ease:"power2.in"},.44).to(this.textMaterial,{opacity:0,duration:.55,ease:"power2.in"},.32).to(this.glow.material,{opacity:0,duration:.62,ease:"power2.in"},.62)})}update(t){if(!this.visible)return;const e=this.isShown?.075:0;this.position.y=this.baseY+this.revealOffset+Math.sin(t*.62)*e,this.rotation.y=Math.sin(t*.3)*.032,this.rotation.z=Math.sin(t*.4)*.012}}class lS extends ze{constructor({texture:t}){var s,a,o,l;super(),this.baseY=.5,this.revealOffset=-.3,this.isShown=!1;const e=((s=t.image)==null?void 0:s.naturalWidth)||((a=t.image)==null?void 0:a.width)||1,i=((o=t.image)==null?void 0:o.naturalHeight)||((l=t.image)==null?void 0:l.height)||1,n=e/i;this.material=new Tn({map:t,color:15854335,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,blending:Le,side:Ke}),this.plane=new ge(new en(3.45*n,3.45),this.material),this.plane.renderOrder=34,this.plane.frustumCulled=!1,this.add(this.plane),this.position.z=2.15,this.scale.setScalar(.72),this.visible=!1}show(){return this.visible=!0,this.isShown=!0,this.revealOffset=-.32,this.position.y=this.baseY+this.revealOffset,this.scale.setScalar(.72),this.material.opacity=0,new Promise(t=>{le.timeline({onComplete:t}).to(this.scale,{x:1,y:1,z:1,duration:.92,ease:"back.out(1.25)"},0).to(this,{revealOffset:0,duration:.9,ease:"power3.out"},0).to(this.material,{opacity:.94,duration:.72,ease:"power2.out"},.08)})}hide(){return this.isShown=!1,new Promise(t=>{le.timeline({onComplete:()=>{this.visible=!1,t()}}).to(this.material,{opacity:0,duration:.62,ease:"power2.in"},0).to(this.scale,{x:.76,y:.76,z:.76,duration:.7,ease:"power3.in"},0).to(this,{revealOffset:.24,duration:.68,ease:"power2.in"},0)})}update(t){if(!this.visible)return;const e=this.isShown?.08:0;this.position.y=this.baseY+this.revealOffset+Math.sin(t*.74)*e,this.rotation.z=Math.sin(t*.42)*.014,this.rotation.y=Math.sin(t*.3)*.026}}const Tr=Ki.clamp;class cS{constructor({canvas:t,ui:e,storyText:i}){this.canvas=t,this.ui=e,this.storyText=i,this.state=Se.LOADING,this.clock=new Gf,this.pointer=new at(4,4),this.pointerTarget=new at,this.raycaster=new Cg,this.drag={active:!1,moved:!1,startX:0,startY:0,lastX:0,lastY:0},this.cakeRotationTarget={yaw:0,pitch:0},this.giftViewAngle=0,this.giftViewVelocity=7,this.loadingProgressValue=0,this.pendingGiftFramePaths=[],this.giftHoverTarget=0,this.giftHover=0,this.wishBottle=null,this.wishBottlePromise=null,this.wishScroll=null,this.wishScrollPromise=null,this.wishPen=null,this.wishPenPromise=null,this.wishSealDelay=null,this.wishSealing=!1,this.wishStarted=!1,this.wishLoading=!1,this.isMobile=window.matchMedia("(max-width: 820px), (pointer: coarse)").matches,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.tick=this.tick.bind(this)}async init(){this.setupRenderer(),this.setupScene(),this.bindEvents(),this.setLoadingProgress(12);const[t,e]=await Promise.all([this.loadGiftAssets().then(i=>(this.setLoadingProgress(54),i)),this.loadCakeAsset().then(i=>(this.setLoadingProgress(82),i))]);this.createWorld(t.frames,e),this.showFallbackNotice(t.usedFallback,e.usedFallback),this.setLoadingProgress(100),this.onResize(),this.renderer.setAnimationLoop(this.tick),window.setTimeout(()=>{this.ui.loading.classList.add("is-hidden"),this.state=Se.GIFT,window.setTimeout(()=>this.loadRemainingGiftFrames(),450)},500)}async loadGiftAssets(){if(Ku.length>0){const[e,...i]=Ku;return this.pendingGiftFramePaths=i,{frames:[{angle:e.angle,texture:await dn(e.path)}],usedFallback:!1}}const t=await ef(pn.gift,eS);return{frames:[{angle:0,texture:t.texture}],usedFallback:t.usedFallback}}async loadRemainingGiftFrames(){if(!this.pendingGiftFramePaths.length)return;const t=this.pendingGiftFramePaths;this.pendingGiftFramePaths=[];const e=await Promise.all(t.map(async({angle:i,path:n})=>{try{return{angle:i,texture:await dn(n)}}catch{return null}}));this.giftFrames.push(...e.filter(Boolean)),this.giftFrames.sort((i,n)=>i.angle-n.angle)}async loadCakeAsset(){if($u.length>0){const[{path:e}]=$u;return{texture:await dn(e),usedFallback:!1,embeddedScene:!0}}const t=await ef(pn.cake,iS);return{texture:t.texture,usedFallback:t.usedFallback,embeddedScene:!1}}setupRenderer(){this.renderer=new uy({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,this.isMobile?1.15:1.8)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Xe,this.renderer.toneMapping=dc,this.renderer.toneMappingExposure=.92}setupScene(){this.scene=new wm,this.scene.fog=new bc(395037,.021),this.camera=new qe(42,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.15,11),this.composer=new _y(this.renderer),this.composer.addPass(new vy(this.scene,this.camera)),this.bloomPass=new zr(new at(window.innerWidth,window.innerHeight),this.reducedMotion?.18:.24,.18,.86),this.composer.addPass(this.bloomPass),this.composer.addPass(new yy),this.presentationRoot=new ze,this.scene.add(this.presentationRoot);const t=new _g(7439615,.58),e=new gg(10934271,2.1);e.position.set(-4,5,5);const i=new $l(11560191,26,18,2);i.position.set(5,1,2);const n=new $l(16763513,3.2,7,2);n.position.set(-4,-2,3),this.scene.add(t,e,i,n)}createWorld(t,e){this.starField=new YM({count:this.reducedMotion?900:this.isMobile?1200:1700,radius:25,depth:46,pixelRatio:this.renderer.getPixelRatio()}),this.scene.add(this.starField),this.magicParticles=new $M({pixelRatio:this.renderer.getPixelRatio(),maxBurst:this.reducedMotion?550:this.isMobile?780:1150,gatherCount:this.reducedMotion?360:this.isMobile?500:760}),this.presentationRoot.add(this.magicParticles),this.createGift(t),this.createCake(e),this.createTransitionFlash(),this.createCrystalDust()}async prepareWishBottle(){try{const[t,e,i]=await Promise.all([dn(pn.wishBottleEmpty),dn(pn.wishBottleWithScroll),dn(pn.wishGalaxy)]);return this.wishBottle=new rS({bottleTexture:t,sealedBottleTexture:e,galaxyTexture:i}),this.wishBottle.visible=!1,this.wishBottle.baseY=this.getWishBottleRestY(),this.presentationRoot.add(this.wishBottle),this.wishBottle}catch(t){return console.error("Wish bottle assets failed to load.",t),null}}async ensureWishBottle(){return this.wishBottle?this.wishBottle:(this.wishBottlePromise||(this.wishBottlePromise=this.prepareWishBottle().then(t=>(t||(this.wishBottlePromise=null),t))),this.wishBottlePromise)}async prepareWishScroll(){try{const t=await dn(pn.wishScrollOpen);return this.wishScroll=new oS({scrollTexture:t}),this.wishScroll.baseY=this.getWishScrollRestY(),this.presentationRoot.add(this.wishScroll),this.wishScroll}catch(t){return console.error("Wish scroll asset failed to load.",t),null}}async prepareWishPen(){try{const t=await dn(pn.wishPen);return this.wishPen=new lS({texture:t}),this.wishPen.baseY=this.getWishPenRestY(),this.presentationRoot.add(this.wishPen),this.wishPen}catch(t){return console.error("Wish pen asset failed to load.",t),null}}async ensureWritingAssets(){return this.wishScrollPromise||(this.wishScrollPromise=this.prepareWishScroll().then(t=>(t||(this.wishScrollPromise=null),t))),this.wishPenPromise||(this.wishPenPromise=this.prepareWishPen().then(t=>(t||(this.wishPenPromise=null),t))),Promise.all([this.wishScrollPromise,this.wishPenPromise])}createGift(t){this.giftGroup=new ze,this.giftGroup.position.y=.15,this.giftFrames=t,this.giftPortal=new ju({texture:t[0].texture,size:5.35,glowColor:sl.blue}),this.giftPortal.glow=.015,this.giftHalo=new nf({color:6786559,radius:2.45}),this.giftHalo.position.z=-.35,this.giftHalo.scale.setScalar(.9),this.giftDust=this.createOrbitDust(310,2.6,1.9),this.giftGroup.add(this.giftHalo,this.giftPortal,this.giftDust),this.presentationRoot.add(this.giftGroup)}createCake({texture:t,embeddedScene:e}){var s,a,o,l;this.cakeUsesEmbeddedScene=e,this.cakeStage=new ze,this.cakeStage.visible=!1,this.cakeStage.position.y=-4,this.cakeStage.scale.setScalar(.36);const i=((s=t.image)==null?void 0:s.naturalWidth)||((a=t.image)==null?void 0:a.width)||1,n=((o=t.image)==null?void 0:o.naturalHeight)||((l=t.image)==null?void 0:l.height)||1;this.cakePortal=new ju({texture:t,size:e?6.75:6.15,aspect:i/n,glowColor:e?sl.violet:sl.gold}),this.cakePortal.position.y=e?-.12:-.25,this.cakePortal.glow=e?.005:.06,this.cakePortal.opacity=0,this.cakeHalo=new nf({color:9401087,radius:2.72}),this.cakeHalo.position.set(0,-.3,-.55),this.cakeHalo.scale.setScalar(.45),this.cakeRotator=new ze,this.cakeRotator.position.y=-.42,this.createCakePedestal(),this.ribbon=new jM,this.ribbon.position.y=-.05,this.ribbon.visible=!e,this.cakeRotator.add(this.ribbon),this.flame=new nS,this.flame.position.set(0,1.58,.25),this.flame.visible=!e,this.cakeStage.add(this.cakeHalo,this.cakeRotator,this.cakePortal,this.flame),this.presentationRoot.add(this.cakeStage)}createCakePedestal(){const t=new Ga({color:7902975,emissive:3220085,emissiveIntensity:1.8,metalness:.12,roughness:.08,transmission:.68,thickness:.5,transparent:!0,opacity:.48,depthWrite:!1});this.pedestalRings=[{radius:2.2,tube:.045,y:-1.92},{radius:2.48,tube:.018,y:-1.75},{radius:1.9,tube:.012,y:-2.08}].map(({radius:e,tube:i,y:n},s)=>{const a=new ge(new to(e,i,12,180),t.clone());return a.position.y=n,a.rotation.x=Math.PI/2,a.rotation.z=s*.55,this.cakeRotator.add(a),a})}createOrbitDust(t,e,i){const n=new Ie,s=new Float32Array(t*3);for(let a=0;a<t;a+=1){const o=a*3,l=Math.random()*Math.PI*2,c=e+(Math.random()-.5)*1.25;s[o]=Math.cos(l)*c,s[o+1]=Math.sin(l)*i+(Math.random()-.5)*.9,s[o+2]=-.18-Math.random()*1.25}return n.setAttribute("position",new ne(s,3)),new Va(n,new Uf({map:QM(),color:10471679,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.58,alphaTest:.01,depthWrite:!1,blending:Le}))}createTransitionFlash(){this.transitionFlash=new kr(new Qn({map:Vs(),color:16767371,transparent:!0,opacity:0,depthWrite:!1,blending:Le})),this.transitionFlash.scale.setScalar(.1),this.transitionFlash.position.z=.45,this.presentationRoot.add(this.transitionFlash)}createCrystalDust(){const t=new Cc(.13,0),e=new Ga({color:10412031,emissive:5255336,emissiveIntensity:1.4,transmission:.72,roughness:.05,metalness:.08,transparent:!0,opacity:.72});this.crystals=[];for(let i=0;i<18;i+=1){const n=new ge(t,e.clone()),s=i%2===0?-1:1;n.position.set(s*(3.4+Math.random()*5.5),(Math.random()-.5)*8,-2-Math.random()*12),n.scale.setScalar(.45+Math.random()*1.8),n.userData.speed=.08+Math.random()*.2,n.userData.offset=Math.random()*Math.PI*2,this.scene.add(n),this.crystals.push(n)}}bindEvents(){window.addEventListener("resize",()=>this.onResize()),this.canvas.addEventListener("pointermove",t=>this.onPointerMove(t)),this.canvas.addEventListener("pointerdown",t=>this.onPointerDown(t)),this.canvas.addEventListener("pointerup",t=>this.onPointerUp(t)),this.canvas.addEventListener("pointercancel",()=>this.endDrag()),this.ui.giftTrigger.addEventListener("click",()=>this.openGift()),this.ui.wishTrigger.addEventListener("click",()=>this.startWishStage()),this.ui.wishForm.addEventListener("submit",t=>this.saveWish(t)),this.ui.soundToggle.addEventListener("click",()=>this.toggleMusic())}updatePointer(t){const e=this.canvas.getBoundingClientRect();this.pointerTarget.x=(t.clientX-e.left)/e.width*2-1,this.pointerTarget.y=-((t.clientY-e.top)/e.height)*2+1}onPointerMove(t){if(this.updatePointer(t),this.drag.active&&this.state===Se.CAKE){Math.hypot(t.clientX-this.drag.startX,t.clientY-this.drag.startY)>4&&(this.drag.moved=!0);const i=t.clientX-this.drag.lastX,n=t.clientY-this.drag.lastY;this.cakeRotationTarget.yaw=Tr(this.cakeRotationTarget.yaw+i*.0024,-.16,.16),this.cakeRotationTarget.pitch=Tr(this.cakeRotationTarget.pitch+n*.0018,-.08,.09),this.drag.lastX=t.clientX,this.drag.lastY=t.clientY}else if(this.drag.active&&this.state===Se.GIFT){Math.hypot(t.clientX-this.drag.startX,t.clientY-this.drag.startY)>4&&(this.drag.moved=!0);const i=t.clientX-this.drag.lastX;this.giftViewAngle-=i*.42,this.drag.lastX=t.clientX,this.drag.lastY=t.clientY}if(this.state===Se.GIFT){this.raycaster.setFromCamera(this.pointerTarget,this.camera);const e=this.raycaster.intersectObject(this.giftPortal.mesh,!1).length>0;this.giftHoverTarget=e?1:0,this.canvas.style.cursor=e?"pointer":"grab"}}onPointerDown(t){var e,i;this.updatePointer(t),this.drag.active=!0,this.drag.moved=!1,this.drag.startX=t.clientX,this.drag.startY=t.clientY,this.drag.lastX=t.clientX,this.drag.lastY=t.clientY,(i=(e=this.canvas).setPointerCapture)==null||i.call(e,t.pointerId),(this.state===Se.CAKE||this.state===Se.GIFT)&&this.canvas.classList.add("is-dragging")}onPointerUp(t){this.updatePointer(t);const e=!this.drag.moved;if(this.endDrag(),!!e){if(this.raycaster.setFromCamera(this.pointerTarget,this.camera),this.state===Se.GIFT)this.raycaster.intersectObject(this.giftPortal.mesh,!1).length>0&&this.openGift();else if(this.state===Se.CAKE){const i=this.raycaster.intersectObject(this.cakePortal.mesh,!1);i.length>0&&this.sparkCake(i[0].point)}}}endDrag(){this.drag.active=!1,this.canvas.classList.remove("is-dragging")}openGift(){if(this.state!==Se.GIFT)return;this.state=Se.TRANSITION,this.ui.intro.classList.add("is-hidden"),this.tryStartMusic();const t=this.magicParticles.startGather(this.giftGroup.position),e=le.timeline();e.to(this.giftPortal.material.uniforms.uGlow,{value:1.35,duration:.5,ease:"power2.in"},0),e.to(this.giftGroup.scale,{x:1.08,y:1.08,z:1.08,duration:.5,ease:"power2.out"},0),e.to(t,{value:1,duration:1,ease:"power3.in"},.5),e.call(()=>{this.magicParticles.emitBurst(this.giftGroup.position,this.reducedMotion?280:760,4.6),this.flashMagic(.78)},[],1.5),e.to(this.giftPortal.material.uniforms.uDissolve,{value:1,duration:1,ease:"power2.inOut"},1.5),e.to(this.giftPortal.material.uniforms.uOpacity,{value:0,duration:.82,ease:"power2.in"},1.68),e.to(this.giftHalo.scale,{x:2.2,y:2.2,z:2.2,duration:.9,ease:"power3.out"},1.52),e.to(this.giftHalo,{fade:0,duration:.7,ease:"power2.in"},1.8),e.call(()=>{this.magicParticles.emitBurst(this.giftGroup.position,this.reducedMotion?150:380,2.8)},[],2.05),e.call(()=>{this.giftGroup.visible=!1,this.magicParticles.stopGather(),this.releasePortalTextures(this.giftPortal),this.revealCake()},[],2.52)}flashMagic(t=1){this.transitionFlash.material.opacity=0,this.transitionFlash.scale.setScalar(.1),le.timeline().to(this.transitionFlash.material,{opacity:t,duration:.16,ease:"power2.out"}).to(this.transitionFlash.scale,{x:11,y:11,z:11,duration:.82,ease:"power3.out"},0).to(this.transitionFlash.material,{opacity:0,duration:.65,ease:"power2.in"},.2)}revealCake(){this.cakeStage.visible=!0,this.cakeStage.position.y=-4,this.cakeStage.scale.setScalar(.34),this.cakePortal.opacity=0,this.cakePortal.glow=this.cakeUsesEmbeddedScene?.08:.42,this.cakeHalo.scale.setScalar(.42),this.cakeRotationTarget.yaw=0,this.cakeRotationTarget.pitch=0,this.cakeRotator.rotation.y=-.1,le.timeline({onComplete:()=>{this.state=Se.CAKE,this.showBlessing()}}).to(this.cakeStage.position,{y:this.getCakeRestY(),duration:1.75,ease:"power3.out"},0).to(this.cakeStage.scale,{x:1,y:1,z:1,duration:1.65,ease:"back.out(1.25)"},.08).to(this.cakePortal.material.uniforms.uOpacity,{value:1,duration:1.2,ease:"power2.out"},.12).to(this.cakePortal.material.uniforms.uGlow,{value:this.cakeUsesEmbeddedScene?.008:.06,duration:1.5,ease:"power2.out"},.2).to(this.cakeHalo.scale,{x:1,y:1,z:1,duration:1.5,ease:"power3.out"},.05).to(this.cakeRotator.rotation,{y:0,duration:1.8,ease:"power3.out"},.05).call(()=>{this.magicParticles.emitBurst(new D(0,this.getCakeRestY(),0),this.reducedMotion?220:520,2.9)},[],.55)}showBlessing(){this.ensureWishBottle(),this.ui.blessing.classList.add("is-visible"),le.to(this.ui.blessing,{opacity:1,y:0,scale:1,duration:1.35,ease:"power3.out"}),le.to(this.ui.cakeGuide,{autoAlpha:1,y:0,duration:.8,delay:.65,ease:"power2.out"}),le.to(this.ui.wishTrigger,{autoAlpha:1,y:0,scale:1,duration:.9,delay:1.05,ease:"back.out(1.4)"})}async startWishStage(){if(this.state!==Se.CAKE||this.wishStarted||this.wishLoading)return;this.wishLoading=!0,this.ui.wishTrigger.disabled=!0;const t=await this.ensureWishBottle();if(this.wishLoading=!1,!t){this.ui.wishTrigger.disabled=!1,this.showRuntimeNotice("愿望水晶正在重新连接星河，请稍后再试一次");return}this.wishStarted=!0,this.state=Se.WISH_TRANSITION,le.to([this.ui.wishTrigger,this.ui.blessing,this.ui.cakeGuide],{autoAlpha:0,y:-12,duration:.55,ease:"power2.in",stagger:.04}),await new Promise(e=>{le.timeline({onComplete:e}).call(()=>{this.magicParticles.emitBurst(new D(0,this.getCakeRestY(),0),this.reducedMotion?240:620,3.7)},[],0).to(this.cakeStage.scale,{x:.16,y:.16,z:.16,duration:1.55,ease:"power2.inOut"},0).to(this.cakeStage.position,{y:this.getCakeRestY()+.35,duration:1.45,ease:"sine.inOut"},0).to(this.cakePortal.material.uniforms.uOpacity,{value:0,duration:1.3,ease:"power2.in"},.12).to(this.cakeHalo,{fade:0,duration:1.15,ease:"power2.in"},.18).call(()=>{this.magicParticles.emitBurst(new D(0,this.getCakeRestY()+.2,0),this.reducedMotion?160:420,2.8),this.flashMagic(.28)},[],.62)}),this.cakeStage.visible=!1,this.releasePortalTextures(this.cakePortal),this.revealWishBottle(t)}revealWishBottle(t){const e=this.getWishBottleRestY(),i={value:0};t.visible=!0,t.baseY=e-3.4,t.scale.setScalar(.46),t.setOpacity(0),le.timeline({onComplete:()=>{this.state=Se.WISH,this.ensureWritingAssets()}}).to(t,{baseY:e,duration:1.75,ease:"power3.out"},0).to(t.scale,{x:1,y:1,z:1,duration:1.55,ease:"back.out(1.2)"},.04).to(i,{value:1,duration:1.2,ease:"power2.out",onUpdate:()=>t.setOpacity(i.value)},.08).call(()=>{this.magicParticles.emitBurst(new D(0,e,0),this.reducedMotion?180:460,2.6)},[],.56).to(this.ui.wishPanel,{autoAlpha:1,y:0,scale:1,duration:.9,ease:"power3.out"},.82)}async saveWish(t){var l;t.preventDefault();const e=this.ui.wishInput.value.trim();if(!e){this.ui.wishInput.focus();return}this.ui.wishSave.textContent="愿望已收藏 ✦",this.ui.wishSave.classList.add("is-saved"),this.ui.wishSave.disabled=!0;const[[i,n],s]=await Promise.all([this.ensureWritingAssets(),this.ensureWishBottle()]);if(!i||!n||!s){this.ui.wishSave.textContent="收藏愿望",this.ui.wishSave.classList.remove("is-saved"),this.ui.wishSave.disabled=!1,this.showRuntimeNotice("愿望素材加载较慢，请检查网络后再试一次");return}le.to(this.ui.wishPanel,{autoAlpha:0,y:18,scale:.96,duration:.55,ease:"power2.in"}),await this.hideWishBottleForWriting(s),n.baseY=this.getWishPenRestY(),await n.show();const a=this.storyText.enqueue("✨ 星河正在聆听你的愿望...",{hold:.9,fadeOut:.52}),o=this.storyText.enqueue("一份特别的心愿，正在被记录...",{hold:1.25,fadeOut:.58});await Promise.all([a,o]),await n.hide(),this.restoreWishBottleAfterWriting(s),i.baseY=this.getWishScrollRestY(),i.showWish(e),this.magicParticles.emitBurst(new D(0,i.baseY,1.2),this.reducedMotion?160:380,2.4),this.flashMagic(.2),(l=this.wishSealDelay)==null||l.kill(),this.wishSealDelay=le.delayedCall(5,()=>this.sealWish())}hideWishBottleForWriting(t){const e={value:t.opacity};return new Promise(i=>{le.timeline({onComplete:()=>{t.visible=!1,i()}}).to(e,{value:0,duration:.72,ease:"power2.in",onUpdate:()=>t.setOpacity(e.value)},0).to(t.scale,{x:.82,y:.82,z:.82,duration:.76,ease:"power3.in"},0)})}restoreWishBottleAfterWriting(t){const e={value:0};t.visible=!0,t.scale.setScalar(.86),t.setOpacity(0),le.timeline().to(e,{value:1,duration:.9,ease:"power2.out",onUpdate:()=>t.setOpacity(e.value)},.08).to(t.scale,{x:1,y:1,z:1,duration:1,ease:"power3.out"},0)}async sealWish(){if(this.wishSealing)return;const[t,e]=await Promise.all([this.wishScrollPromise,this.wishBottlePromise]);if(!t||!e||!t.visible)return;this.wishSealing=!0;const i=new D(0,t.position.y,2.1);this.magicParticles.emitBurst(i,this.reducedMotion?190:470,2.7),this.flashMagic(.24),await t.sealAway(),this.magicParticles.emitBurst(new D(0,t.position.y,1.2),this.reducedMotion?140:340,2.2);const n=e.position.clone();n.z=.5;const s=this.magicParticles.startGather(n),a={value:e.sealedMix};le.timeline({onComplete:()=>{e.setSealedMix(1),e.magicIntensity=0,this.magicParticles.stopGather(),this.wishSealing=!1,this.storyText.enqueue("✨ 这份心愿，将永远闪耀 ✨",{hold:1.7,fadeOut:.72}),this.storyText.enqueue("妈妈，生日快乐 ❤️",{fadeIn:.95,persist:!0})}}).to(s,{value:1,duration:1.05,ease:"power3.in"},0).to(e,{magicIntensity:1,duration:.62,ease:"power2.out"},.08).to(e.scale,{x:1.08,y:1.08,z:1.08,duration:.72,ease:"power2.out"},.18).call(()=>{this.flashMagic(.5),this.magicParticles.emitBurst(n,this.reducedMotion?220:560,3.25)},[],.72).to(a,{value:1,duration:.82,ease:"power2.out",onUpdate:()=>e.setSealedMix(a.value)},.66).to(e.scale,{x:1,y:1,z:1,duration:.86,ease:"back.out(1.45)"},1.02).to(e,{magicIntensity:0,duration:.95,ease:"power2.inOut"},1.02).call(()=>this.magicParticles.stopGather(),[],1.16)}sparkCake(t){const e=this.presentationRoot.worldToLocal(t.clone());this.magicParticles.emitBurst(e,this.reducedMotion?220:520,3.4),this.flashMagic(.35),le.fromTo(this.cakeStage.scale,{x:1.03,y:1.03,z:1.03},{x:1,y:1,z:1,duration:.55,ease:"elastic.out(1, 0.4)"})}tryStartMusic(){var t;(t=this.ui.music)!=null&&t.src&&(this.ui.music.volume=.48,this.ui.music.play().then(()=>this.ui.soundToggle.classList.add("is-playing")).catch(()=>{}))}toggleMusic(){this.ui.music.paused?this.tryStartMusic():(this.ui.music.pause(),this.ui.soundToggle.classList.remove("is-playing"))}setLoadingProgress(t){this.loadingProgressValue=Math.max(this.loadingProgressValue,t),this.ui.loadingProgress.style.width=`${this.loadingProgressValue}%`}showRuntimeNotice(t){this.ui.assetNotice.textContent=t,this.ui.assetNotice.classList.add("is-visible"),window.setTimeout(()=>this.ui.assetNotice.classList.remove("is-visible"),5e3)}releasePortalTextures(t){var n,s,a;if(!((n=t==null?void 0:t.material)!=null&&n.uniforms))return;const e=(s=t.material.uniforms.uTexture)==null?void 0:s.value,i=(a=t.material.uniforms.uTextureNext)==null?void 0:a.value;e!=null&&e.isTexture&&e.dispose(),i!=null&&i.isTexture&&i!==e&&i.dispose()}showFallbackNotice(t,e){if(!t&&!e)return;const i=[t&&"gift.png",e&&"cake.png"].filter(Boolean).join("、");this.ui.assetNotice.textContent=`未找到 ${i}，当前使用内置梦幻占位图。将正式图片放入 assets/ 后会自动替换。`,this.ui.assetNotice.classList.add("is-visible"),window.setTimeout(()=>this.ui.assetNotice.classList.remove("is-visible"),9e3)}getCakeRestY(){return window.innerWidth/window.innerHeight<.72?-.72:-.58}getWishBottleRestY(){return window.innerWidth/window.innerHeight<.72?1.02:.46}getWishScrollRestY(){return window.innerWidth/window.innerHeight<.72?.36:.12}getWishPenRestY(){return window.innerWidth/window.innerHeight<.72?1.05:.58}updateGiftTexture(t){var u;if(!((u=this.giftFrames)!=null&&u.length))return;if(this.giftFrames.length===1){const[{texture:f}]=this.giftFrames;this.giftPortal.setTextureBlend(f,f,0);return}const e=(t%360+360)%360;let i=-1;for(let f=0;f<this.giftFrames.length&&this.giftFrames[f].angle<=e;f+=1)i=f;i<0&&(i=this.giftFrames.length-1);const n=(i+1)%this.giftFrames.length,s=this.giftFrames[i],a=this.giftFrames[n],o=s.angle,l=n===0?a.angle+360:a.angle,c=e<o?e+360:e,h=Tr((c-o)/Math.max(1,l-o),0,1);this.giftPortal.setTextureBlend(s.texture,a.texture,h)}onResize(){var n,s,a,o,l,c;const t=window.innerWidth,e=window.innerHeight,i=Math.min(window.devicePixelRatio,this.isMobile?1.15:1.8);if(this.camera.aspect=t/e,this.camera.position.z=t/e<.72?12.4:11,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(i),this.renderer.setSize(t,e),this.composer.setPixelRatio(i),this.composer.setSize(t,e),(n=this.starField)==null||n.setPixelRatio(i),(s=this.magicParticles)==null||s.setPixelRatio(i),this.presentationRoot){const h=t/e<.72?Tr(t/430,.78,.98):1;this.presentationRoot.scale.setScalar(h)}(a=this.cakeStage)!=null&&a.visible&&this.state===Se.CAKE&&(this.cakeStage.position.y=this.getCakeRestY()),(o=this.wishBottle)!=null&&o.visible&&this.state===Se.WISH&&(this.wishBottle.baseY=this.getWishBottleRestY()),(l=this.wishScroll)!=null&&l.visible&&(this.wishScroll.baseY=this.getWishScrollRestY()),(c=this.wishPen)!=null&&c.visible&&(this.wishPen.baseY=this.getWishPenRestY())}async replaceCakeWithGLB(t){const{GLTFLoader:e}=await ip(async()=>{const{GLTFLoader:n}=await import("./GLTFLoader-D-MOkNbX.js");return{GLTFLoader:n}},[]),i=await new e().loadAsync(t);return this.cakeModel&&this.cakeRotator.remove(this.cakeModel),this.cakeModel=i.scene,this.cakeModel.scale.setScalar(1.4),this.cakeRotator.add(this.cakeModel),this.cakePortal.visible=!1,this.cakeModel}updateScene(t,e){var i,n,s;if(this.pointer.lerp(this.pointerTarget,1-Math.pow(.002,e)),this.camera.position.x=Ki.lerp(this.camera.position.x,this.pointer.x*.34,1-Math.pow(.01,e)),this.camera.position.y=Ki.lerp(this.camera.position.y,.15+this.pointer.y*.2,1-Math.pow(.01,e)),this.camera.lookAt(0,-.05,0),this.starField.update(t,e),this.magicParticles.update(e),this.giftPortal.update(t),this.cakePortal.update(t),this.giftHalo.update(t,e),this.cakeHalo.update(t,e),this.ribbon.update(t,e),this.flame.update(t),(i=this.wishBottle)!=null&&i.visible&&this.wishBottle.update(t),(n=this.wishScroll)!=null&&n.visible&&this.wishScroll.update(t),(s=this.wishPen)!=null&&s.visible&&this.wishPen.update(t),this.crystals.forEach(a=>{a.rotation.x+=e*a.userData.speed,a.rotation.y+=e*a.userData.speed*1.25,a.position.y+=Math.sin(t*a.userData.speed+a.userData.offset)*e*.08}),this.state===Se.GIFT){this.giftHover=Ki.lerp(this.giftHover,this.giftHoverTarget,1-Math.pow(8e-4,e)),this.giftPortal.hover=this.giftHover;const a=Math.sin(t*.82)*.18;this.giftGroup.position.y=.15+a+this.giftHover*.08,this.giftGroup.rotation.z=Math.sin(t*.38)*.025;const o=1+this.giftHover*.055;this.giftGroup.scale.lerp(new D(o,o,o),1-Math.pow(.002,e)),this.giftDust.rotation.z+=e*(.08+this.giftHover*.08),this.giftDust.rotation.y-=e*.045,this.drag.active||(this.giftViewAngle+=e*(this.giftViewVelocity+this.giftHover*3.5)),this.updateGiftTexture(this.giftViewAngle)}if(this.cakeStage.visible){if(!this.drag.active&&this.state===Se.CAKE){const h=1-Math.pow(.16,e);this.cakeRotationTarget.yaw=Ki.lerp(this.cakeRotationTarget.yaw,0,h),this.cakeRotationTarget.pitch=Ki.lerp(this.cakeRotationTarget.pitch,0,h)}const a=this.state===Se.CAKE?Math.sin(t*.48)*.035:0,o=this.state===Se.CAKE?Math.cos(t*.38)*.012:0,l=Tr(this.cakeRotationTarget.yaw+a,-.18,.18),c=Tr(this.cakeRotationTarget.pitch+o,-.09,.1);this.cakeStage.rotation.x=Ki.lerp(this.cakeStage.rotation.x,c,1-Math.pow(.003,e)),this.cakeRotator.rotation.y=Ki.lerp(this.cakeRotator.rotation.y,l,1-Math.pow(.002,e)),this.cakePortal.rotation.y=this.cakeRotator.rotation.y*.58,this.cakePortal.position.x=this.cakeRotator.rotation.y*.18,this.pedestalRings.forEach((h,u)=>{h.rotation.z+=e*(.08+u*.035)*(u%2===0?1:-1)})}}tick(){const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;this.starField&&this.updateScene(e,t),this.composer.render()}}class hS{constructor({layer:t,content:e}){this.layer=t,this.content=e,this.queue=Promise.resolve()}enqueue(t,{fadeIn:e=.65,hold:i=1.1,fadeOut:n=.6,gap:s=.12,persist:a=!1}={}){return this.queue=this.queue.then(()=>new Promise(o=>{this.content.textContent=t,this.layer.style.visibility="visible",this.layer.classList.toggle("is-final",a);const l=le.timeline({onComplete:()=>{a||(this.layer.style.visibility="hidden"),o()}});l.fromTo(this.content,{autoAlpha:0,y:18,scale:.96,filter:"blur(9px)"},{autoAlpha:a?1:.9,y:0,scale:1,filter:"blur(0px)",duration:e,ease:"power3.out"}),!a&&l.to(this.content,{autoAlpha:.82,duration:i,ease:"none"}).to(this.content,{autoAlpha:0,y:-14,scale:1.025,filter:"blur(7px)",duration:n,ease:"power2.in"}).to({},{duration:s})})),this.queue}}const qd=document.querySelector("#birthday-music");qd.src=pn.music;const uS=new hS({layer:document.querySelector("#story-text"),content:document.querySelector("#story-text-content")}),fS=new cS({canvas:document.querySelector("#webgl"),storyText:uS,ui:{loading:document.querySelector("#loading"),loadingProgress:document.querySelector("#loading-progress"),intro:document.querySelector("#intro-ui"),giftTrigger:document.querySelector("#gift-trigger"),blessing:document.querySelector("#blessing"),cakeGuide:document.querySelector("#cake-guide"),wishTrigger:document.querySelector("#wish-trigger"),wishPanel:document.querySelector("#wish-panel"),wishForm:document.querySelector("#wish-form"),wishInput:document.querySelector("#wish-input"),wishSave:document.querySelector("#wish-save"),soundToggle:document.querySelector("#sound-toggle"),assetNotice:document.querySelector("#asset-notice"),music:qd}});fS.init();export{Rm as $,gS as A,ne as B,Rt as C,gg as D,ge as E,MS as F,vS as G,If as H,_S as I,xS as J,Va as K,Bs as L,Ga as M,Ws as N,xe as O,$l as P,qr as Q,vl as R,Xe as S,dS as T,ze as U,at as V,qe as W,Ki as X,Pc as Y,Lf as Z,yS as _,mS as a,Na as a0,Yl as a1,Ba as a2,Ne as a3,Xa as a4,Wa as a5,io as a6,Xt as a7,Sn as a8,eo as a9,An as aa,sn as ab,pS as b,TS as c,Fr as d,SS as e,zt as f,D as g,Hh as h,Hf as i,bS as j,Am as k,Yn as l,ho as m,Ap as n,li as o,ui as p,xl as q,Xn as r,Uf as s,Cn as t,Nm as u,jm as v,Ke as w,Tn as x,Qt as y,Ie as z};
