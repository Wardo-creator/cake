(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const Jd="modulepreload",Zd=function(r){return"/cake/"+r},rh={},jd=function(t,e,n){let i=Promise.resolve();if(e&&e.length>0){let a=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=a(e.map(l=>{if(l=Zd(l),l in rh)return;rh[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Jd,h||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),h)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="179",Qd=0,sh=1,tp=2,tf=1,ep=2,qn=3,vi=0,Ye=1,bn=2,Zn=0,Sr=1,Ze=2,ah=3,oh=4,np=5,ki=100,ip=101,rp=102,sp=103,ap=104,op=200,lp=201,cp=202,hp=203,il=204,rl=205,up=206,fp=207,dp=208,pp=209,mp=210,gp=211,_p=212,vp=213,xp=214,sl=0,al=1,ol=2,Cr=3,ll=4,cl=5,hl=6,ul=7,ef=0,yp=1,Mp=2,mi=0,nf=1,rf=2,sf=3,hc=4,af=5,of=6,lf=7,lh="attached",Sp="detached",cf=300,Rr=301,Pr=302,fl=303,dl=304,Ka=306,pl=1e3,Vi=1001,ml=1002,cn=1003,Tp=1004,Bs=1005,Un=1006,ao=1007,Hi=1008,On=1009,hf=1010,uf=1011,ms=1012,uc=1013,Ki=1014,wn=1015,jn=1016,fc=1017,dc=1018,gs=1020,ff=35902,df=1021,pf=1022,vn=1023,_s=1026,vs=1027,pc=1028,mc=1029,mf=1030,gc=1031,_c=1033,xa=33776,ya=33777,Ma=33778,Sa=33779,gl=35840,_l=35841,vl=35842,xl=35843,yl=36196,Ml=37492,Sl=37496,Tl=37808,bl=37809,El=37810,wl=37811,Al=37812,Cl=37813,Rl=37814,Pl=37815,Dl=37816,Ll=37817,Il=37818,Ul=37819,Nl=37820,Fl=37821,Ta=36492,Ol=36494,Bl=36495,gf=36283,kl=36284,zl=36285,Vl=36286,Ra=2300,Hl=2301,oo=2302,ch=2400,hh=2401,uh=2402,bp=2500,iS=0,rS=1,sS=2,Ep=3200,wp=3201,_f=0,Ap=1,ui="",Ge="srgb",Dr="srgb-linear",Pa="linear",Jt="srgb",Zi=7680,fh=519,Cp=512,Rp=513,Pp=514,vf=515,Dp=516,Lp=517,Ip=518,Up=519,Gl=35044,dh="300 es",Nn=2e3,Da=2001;class zr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const ls=Math.PI/180,Lr=180/Math.PI;function An(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[r&255]+Ne[r>>8&255]+Ne[r>>16&255]+Ne[r>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function kt(r,t,e){return Math.max(t,Math.min(e,r))}function vc(r,t){return(r%t+t)%t}function Np(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Fp(r,t,e){return r!==t?(e-r)/(t-r):0}function cs(r,t,e){return(1-e)*r+e*t}function Op(r,t,e,n){return cs(r,t,1-Math.exp(-e*n))}function Bp(r,t=1){return t-Math.abs(vc(r,t*2)-t)}function kp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function zp(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Vp(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Hp(r,t){return r+Math.random()*(t-r)}function Gp(r){return r*(.5-Math.random())}function Wp(r){r!==void 0&&(ph=r);let t=ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xp(r){return r*ls}function Yp(r){return r*Lr}function qp(r){return(r&r-1)===0&&r!==0}function Kp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $p(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jp(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),c=a(e/2),l=s((t+n)/2),h=a((t+n)/2),u=s((t-n)/2),f=a((t-n)/2),d=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*h,c*u,c*f,o*l);break;case"YZY":r.set(c*f,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*f,o*h,o*l);break;case"XZX":r.set(o*h,c*_,c*d,o*l);break;case"YXY":r.set(c*d,o*h,c*_,o*l);break;case"ZYZ":r.set(c*_,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const hi={DEG2RAD:ls,RAD2DEG:Lr,generateUUID:An,clamp:kt,euclideanModulo:vc,mapLinear:Np,inverseLerp:Fp,lerp:cs,damp:Op,pingpong:Bp,smoothstep:kp,smootherstep:zp,randInt:Vp,randFloat:Hp,randFloatSpread:Gp,seededRandom:Wp,degToRad:Xp,radToDeg:Yp,isPowerOfTwo:qp,ceilPowerOfTwo:Kp,floorPowerOfTwo:$p,setQuaternionFromProperEuler:Jp,normalize:Zt,denormalize:En};class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(u!==g||c!==f||l!==d||h!==_){let m=1-o;const p=c*f+l*d+h*_+u*g,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const E=Math.sqrt(x),A=Math.atan2(E,p*S);m=Math.sin(m*A)/E,o=Math.sin(o*A)/E}const v=o*S;if(c=c*m+f*v,l=l*m+d*v,h=h*m+_*v,u=u*m+g*v,m===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],f=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-o*d,t[e+2]=l*_+h*d+o*f-c*u,t[e+3]=h*_-o*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),f=c(n/2),d=c(i/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(s-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lo.copy(this).projectOnVector(t),this.sub(lo)}reflect(t){return this.sub(lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lo=new D,mh=new Vr;class Ft{constructor(t,e,n,i,s,a,o,c,l){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],S=i[1],x=i[4],v=i[7],E=i[2],A=i[5],w=i[8];return s[0]=a*g+o*S+c*E,s[3]=a*m+o*x+c*A,s[6]=a*p+o*v+c*w,s[1]=l*g+h*S+u*E,s[4]=l*m+h*x+u*A,s[7]=l*p+h*v+u*w,s[2]=f*g+d*S+_*E,s[5]=f*m+d*x+_*A,s[8]=f*p+d*v+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,f=o*c-h*s,d=l*s-a*c,_=e*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*l-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=f*g,t[4]=(h*e-i*c)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const co=new Ft;function xf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zp(){const r=xs("canvas");return r.style.display="block",r}const gh={};function Tr(r){r in gh||(gh[r]=!0,console.warn(r))}function jp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const _h=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qp(){const r={enabled:!0,workingColorSpace:Dr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(i.r=Qn(i.r),i.g=Qn(i.g),i.b=Qn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ui?Pa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Tr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Tr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Dr]:{primaries:t,whitePoint:n,transfer:Pa,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),r}const Xt=Qp();function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ji;class tm{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=xs("canvas")),ji.width=t.width,ji.height=t.height;const i=ji.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let em=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=An(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ho(i[a].image)):s.push(ho(i[a]))}else s=ho(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ho(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nm=0;const uo=new D;class Ie extends zr{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=Vi,i=Vi,s=Un,a=Hi,o=vn,c=On,l=Ie.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=An(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pl:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pl:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=cf;Ie.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,i=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,v=(d+1)/2,E=(p+1)/2,A=(h+f)/4,w=(u+g)/4,R=(_+m)/4;return x>v&&x>E?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=A/n,s=w/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=R/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=w/s,i=R/s),this.set(n,i,s,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=kt(this.x,t.x,e.x),this.y=kt(this.y,t.y,e.y),this.z=kt(this.z,t.z,e.z),this.w=kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=kt(this.x,t,e),this.y=kt(this.y,t,e),this.z=kt(this.z,t,e),this.w=kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class im extends zr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new Ie(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new xc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends im{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yf extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rm extends Ie{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qr),zs.subVectors(this.max,qr),Qi.subVectors(t.a,qr),tr.subVectors(t.b,qr),er.subVectors(t.c,qr),ri.subVectors(tr,Qi),si.subVectors(er,tr),Ai.subVectors(Qi,er);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ai.z,Ai.y,ri.z,0,-ri.x,si.z,0,-si.x,Ai.z,0,-Ai.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ai.y,Ai.x,0];return!fo(e,Qi,tr,er,zs)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Qi,tr,er,zs))?!1:(Vs.crossVectors(ri,si),e=[Vs.x,Vs.y,Vs.z],fo(e,Qi,tr,er,zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new D,new D,new D,new D,new D,new D,new D,new D],Mn=new D,ks=new Si,Qi=new D,tr=new D,er=new D,ri=new D,si=new D,Ai=new D,qr=new D,zs=new D,Vs=new D,Ci=new D;function fo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ci.fromArray(r,s);const o=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),c=t.dot(Ci),l=e.dot(Ci),h=n.dot(Ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const sm=new Si,Kr=new D,po=new D;class ni{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kr.subVectors(t,this.center);const e=Kr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Kr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kr.copy(t.center).add(po)),this.expandByPoint(Kr.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Hn=new D,mo=new D,Hs=new D,ai=new D,go=new D,Gs=new D,_o=new D;class Ps{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){mo.copy(t).add(e).multiplyScalar(.5),Hs.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(mo);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Hs),o=ai.dot(this.direction),c=-ai.dot(Hs),l=ai.lengthSq(),h=Math.abs(1-a*a);let u,f,d,_;if(h>0)if(u=a*c-o,f=a*o-c,_=s*h,u>=0)if(f>=-_)if(f<=_){const g=1/h;u*=g,f*=g,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),d=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(mo).addScaledVector(Hs,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,i,s){go.subVectors(e,t),Gs.subVectors(n,t),_o.crossVectors(go,Gs);let a=this.direction.dot(_o),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ai.subVectors(this.origin,t);const c=o*this.direction.dot(Gs.crossVectors(ai,Gs));if(c<0)return null;const l=o*this.direction.dot(go.cross(ai));if(l<0||c+l>a)return null;const h=-o*ai.dot(_o);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(t,e,n,i,s,a,o,c,l,h,u,f,d,_,g,m){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,h,u,f,d,_,g,m)}set(t,e,n,i,s,a,o,c,l,h,u,f,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/nr.setFromMatrixColumn(t,0).length(),s=1/nr.setFromMatrixColumn(t,1).length(),a=1/nr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,d=a*u,_=o*h,g=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-g*l,e[9]=-o*c,e[2]=g-f*l,e[6]=_+d*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f+g*o,e[4]=_*o-d,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-_,e[6]=g+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,g=l*u;e[0]=f-g*o,e[4]=-a*u,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*h,e[9]=g-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,d=a*u,_=o*h,g=o*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+g,e[1]=c*u,e[5]=g*l+f,e[9]=d*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,d=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=g-f*u,e[8]=_*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-g*u}else if(t.order==="XZY"){const f=a*c,d=a*l,_=o*c,g=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+g,e[5]=a*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=o*h,e[10]=g*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(am,t,om)}lookAt(t,e,n){const i=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),oi.crossVectors(n,en),oi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),oi.crossVectors(n,en)),oi.normalize(),Ws.crossVectors(en,oi),i[0]=oi.x,i[4]=Ws.x,i[8]=en.x,i[1]=oi.y,i[5]=Ws.y,i[9]=en.y,i[2]=oi.z,i[6]=Ws.z,i[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],S=n[3],x=n[7],v=n[11],E=n[15],A=i[0],w=i[4],R=i[8],y=i[12],T=i[1],P=i[5],V=i[9],O=i[13],B=i[2],q=i[6],G=i[10],$=i[14],H=i[3],it=i[7],ot=i[11],_t=i[15];return s[0]=a*A+o*T+c*B+l*H,s[4]=a*w+o*P+c*q+l*it,s[8]=a*R+o*V+c*G+l*ot,s[12]=a*y+o*O+c*$+l*_t,s[1]=h*A+u*T+f*B+d*H,s[5]=h*w+u*P+f*q+d*it,s[9]=h*R+u*V+f*G+d*ot,s[13]=h*y+u*O+f*$+d*_t,s[2]=_*A+g*T+m*B+p*H,s[6]=_*w+g*P+m*q+p*it,s[10]=_*R+g*V+m*G+p*ot,s[14]=_*y+g*O+m*$+p*_t,s[3]=S*A+x*T+v*B+E*H,s[7]=S*w+x*P+v*q+E*it,s[11]=S*R+x*V+v*G+E*ot,s[15]=S*y+x*O+v*$+E*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*c*u-i*l*u-s*o*f+n*l*f+i*o*d-n*c*d)+g*(+e*c*d-e*l*f+s*a*f-i*a*d+i*l*h-s*c*h)+m*(+e*l*u-e*o*d-s*a*u+n*a*d+s*o*h-n*l*h)+p*(-i*o*h-e*c*u+e*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],S=u*m*l-g*f*l+g*c*d-o*m*d-u*c*p+o*f*p,x=_*f*l-h*m*l-_*c*d+a*m*d+h*c*p-a*f*p,v=h*g*l-_*u*l+_*o*d-a*g*d-h*o*p+a*u*p,E=_*u*c-h*g*c-_*o*f+a*g*f+h*o*m-a*u*m,A=e*S+n*x+i*v+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(g*f*s-u*m*s-g*i*d+n*m*d+u*i*p-n*f*p)*w,t[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*p+n*c*p)*w,t[3]=(u*c*s-o*f*s-u*i*l+n*f*l+o*i*d-n*c*d)*w,t[4]=x*w,t[5]=(h*m*s-_*f*s+_*i*d-e*m*d-h*i*p+e*f*p)*w,t[6]=(_*c*s-a*m*s-_*i*l+e*m*l+a*i*p-e*c*p)*w,t[7]=(a*f*s-h*c*s+h*i*l-e*f*l-a*i*d+e*c*d)*w,t[8]=v*w,t[9]=(_*u*s-h*g*s-_*n*d+e*g*d+h*n*p-e*u*p)*w,t[10]=(a*g*s-_*o*s+_*n*l-e*g*l-a*n*p+e*o*p)*w,t[11]=(h*o*s-a*u*s-h*n*l+e*u*l+a*n*d-e*o*d)*w,t[12]=E*w,t[13]=(h*g*i-_*u*i+_*n*f-e*g*f-h*n*m+e*u*m)*w,t[14]=(_*o*i-a*g*i-_*n*c+e*g*c+a*n*m-e*o*m)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,h=a+a,u=o+o,f=s*l,d=s*h,_=s*u,g=a*h,m=a*u,p=o*u,S=c*l,x=c*h,v=c*u,E=n.x,A=n.y,w=n.z;return i[0]=(1-(g+p))*E,i[1]=(d+v)*E,i[2]=(_-x)*E,i[3]=0,i[4]=(d-v)*A,i[5]=(1-(f+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(_+x)*w,i[9]=(m-S)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=nr.set(i[0],i[1],i[2]).length();const a=nr.set(i[4],i[5],i[6]).length(),o=nr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const l=1/s,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Nn,c=!1){const l=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let _,g;if(c)_=s/(a-s),g=a*s/(a-s);else if(o===Nn)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Da)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Nn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let _,g;if(c)_=1/(a-s),g=a/(a-s);else if(o===Nn)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===Da)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nr=new D,Sn=new zt,am=new D(0,0,0),om=new D(1,1,1),oi=new D,Ws=new D,en=new D,xh=new zt,yh=new Vr;class Bn{constructor(t=0,e=0,n=0,i=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yh.setFromEuler(this),this.setFromQuaternion(yh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lm=0;const Mh=new D,ir=new Vr,Gn=new zt,Xs=new D,$r=new D,cm=new D,hm=new Vr,Sh=new D(1,0,0),Th=new D(0,1,0),bh=new D(0,0,1),Eh={type:"added"},um={type:"removed"},rr={type:"childadded",child:null},vo={type:"childremoved",child:null};class _e extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=An(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new D,e=new Bn,n=new Vr,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Ft}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(Sh,t)}rotateY(t){return this.rotateOnAxis(Th,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return Mh.copy(t).applyQuaternion(this.quaternion),this.position.add(Mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sh,t)}translateY(t){return this.translateOnAxis(Th,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt($r,Xs,this.up):Gn.lookAt(Xs,$r,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),ir.setFromRotationMatrix(Gn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eh),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(um),vo.child=t,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eh),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,hm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new D,Wn=new D,xo=new D,Xn=new D,sr=new D,ar=new D,wh=new D,yo=new D,Mo=new D,So=new D,To=new Kt,bo=new Kt,Eo=new Kt;class _n{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Tn.subVectors(t,e),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Tn.subVectors(i,e),Wn.subVectors(n,e),xo.subVectors(t,e);const a=Tn.dot(Tn),o=Tn.dot(Wn),c=Tn.dot(xo),l=Wn.dot(Wn),h=Wn.dot(xo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,_=(a*h-o*c)*f;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Xn.x),c.addScaledVector(a,Xn.y),c.addScaledVector(o,Xn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return To.setScalar(0),bo.setScalar(0),Eo.setScalar(0),To.fromBufferAttribute(t,e),bo.fromBufferAttribute(t,n),Eo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(To,s.x),a.addScaledVector(bo,s.y),a.addScaledVector(Eo,s.z),a}static isFrontFacing(t,e,n,i){return Tn.subVectors(n,e),Wn.subVectors(t,e),Tn.cross(Wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Tn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;sr.subVectors(i,n),ar.subVectors(s,n),yo.subVectors(t,n);const c=sr.dot(yo),l=ar.dot(yo);if(c<=0&&l<=0)return e.copy(n);Mo.subVectors(t,i);const h=sr.dot(Mo),u=ar.dot(Mo);if(h>=0&&u<=h)return e.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(sr,a);So.subVectors(t,s);const d=sr.dot(So),_=ar.dot(So);if(_>=0&&d<=_)return e.copy(s);const g=d*l-c*_;if(g<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ar,o);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return wh.subVectors(s,i),o=(u-h)/(u-h+(d-_)),e.copy(i).addScaledVector(wh,o);const p=1/(m+g+f);return a=g*p,o=f*p,e.copy(n).addScaledVector(sr,a).addScaledVector(ar,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function wo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=vc(t,1),e=kt(e,0,1),n=kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=wo(a,s,t+1/3),this.g=wo(a,s,t),this.b=wo(a,s,t-1/3)}return Xt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ge){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=Mf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return Xt.workingToColorSpace(Fe.copy(this),t),Math.round(kt(Fe.r*255,0,255))*65536+Math.round(kt(Fe.g*255,0,255))*256+Math.round(kt(Fe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,s=Fe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ge){Xt.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(li),this.setHSL(li.h+t,li.s+e,li.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(li),t.getHSL(Ys);const n=cs(li.h,Ys.h,e),i=cs(li.s,Ys.s,e),s=cs(li.l,Ys.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Rt;Rt.NAMES=Mf;let fm=0;class Ti extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=An(),this.name="",this.type="Material",this.blending=Sr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=rl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $a extends Ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,qs=new at;let dm=0;class ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qs.fromBufferAttribute(this,e),qs.applyMatrix3(t),this.setXY(e,qs.x,qs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=En(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=En(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=En(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=En(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class Sf extends ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tf extends ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let pm=0;const mn=new zt,Ao=new _e,or=new D,nn=new Si,Jr=new Si,Re=new D;class Pe extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=An(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?Tf:Sf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ft().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(nn.min,Jr.min),nn.expandByPoint(Re),Re.addVectors(nn.max,Jr.max),nn.expandByPoint(Re)):(nn.expandByPoint(Jr.min),nn.expandByPoint(Jr.max))}nn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Re.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(or.fromBufferAttribute(t,l),Re.add(or)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ie(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new D,c[R]=new D;const l=new D,h=new D,u=new D,f=new at,d=new at,_=new at,g=new D,m=new D;function p(R,y,T){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),_.fromBufferAttribute(s,T),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[y].add(g),o[T].add(g),c[R].add(m),c[y].add(m),c[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,y=S.length;R<y;++R){const T=S[R],P=T.start,V=T.count;for(let O=P,B=P+V;O<B;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new D,v=new D,E=new D,A=new D;function w(R){E.fromBufferAttribute(i,R),A.copy(E);const y=o[R];x.copy(y),x.sub(E.multiplyScalar(E.dot(y))).normalize(),v.crossVectors(A,y);const P=v.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,y=S.length;R<y;++R){const T=S[R],P=T.start,V=T.count;for(let O=P,B=P+V;O<B;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),g=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?d=c[g]*o.data.stride+o.offset:d=c[g]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const s=t.morphAttributes;for(const l in s){const h=[],u=s[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ah=new zt,Ri=new Ps,Ks=new ni,Ch=new D,$s=new D,Js=new D,Zs=new D,Co=new D,js=new D,Rh=new D,Qs=new D;class be extends _e{constructor(t=new Pe,e=new $a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){js.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(Co.fromBufferAttribute(u,t),a?js.addScaledVector(Co,h):js.addScaledVector(Co.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ri.copy(t.ray).recast(t.near),!(Ks.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ks,Ch)===null||Ri.origin.distanceToSquared(Ch)>(t.far-t.near)**2))&&(Ah.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(Ah),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=x;v<E;v+=3){const A=o.getX(v),w=o.getX(v+1),R=o.getX(v+2);i=ta(this,p,t,n,l,h,u,A,w,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);i=ta(this,a,t,n,l,h,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=S,E=x;v<E;v+=3){const A=v,w=v+1,R=v+2;i=ta(this,p,t,n,l,h,u,A,w,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const S=m,x=m+1,v=m+2;i=ta(this,a,t,n,l,h,u,S,x,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function mm(r,t,e,n,i,s,a,o){let c;if(t.side===Ye?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===vi,o),c===null)return null;Qs.copy(o),Qs.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(Qs);return l<e.near||l>e.far?null:{distance:l,point:Qs.clone(),object:r}}function ta(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,$s),r.getVertexPosition(c,Js),r.getVertexPosition(l,Zs);const h=mm(r,t,e,n,$s,Js,Zs,Rh);if(h){const u=new D;_n.getBarycoord(Rh,$s,Js,Zs,u),i&&(h.uv=_n.getInterpolatedAttribute(i,o,c,l,u,new at)),s&&(h.uv1=_n.getInterpolatedAttribute(s,o,c,l,u,new at)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};_n.getNormal($s,Js,Zs,f.normal),h.face=f,h.barycoord=u}return h}class Ds extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function _(g,m,p,S,x,v,E,A,w,R,y){const T=v/w,P=E/R,V=v/2,O=E/2,B=A/2,q=w+1,G=R+1;let $=0,H=0;const it=new D;for(let ot=0;ot<G;ot++){const _t=ot*P-O;for(let Dt=0;Dt<q;Dt++){const te=Dt*T-V;it[g]=te*S,it[m]=_t*x,it[p]=B,l.push(it.x,it.y,it.z),it[g]=0,it[m]=0,it[p]=A>0?1:-1,h.push(it.x,it.y,it.z),u.push(Dt/w),u.push(1-ot/R),$+=1}}for(let ot=0;ot<R;ot++)for(let _t=0;_t<w;_t++){const Dt=f+_t+q*ot,te=f+_t+q*(ot+1),Vt=f+(_t+1)+q*(ot+1),W=f+(_t+1)+q*ot;c.push(Dt,te,W),c.push(te,Vt,W),H+=6}o.addGroup(d,H,y),d+=H,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ds(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ir(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(r){const t={};for(let e=0;e<r.length;e++){const n=Ir(r[e]);for(const i in n)t[i]=n[i]}return t}function gm(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function bf(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const ys={clone:Ir,merge:Ve};var _m=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ee extends Ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_m,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ir(t.uniforms),this.uniformsGroups=gm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ef extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new D,Ph=new at,Dh=new at;class We extends Ef{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Ph,Dh),e.subVectors(Dh,Ph)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ls*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const lr=-90,cr=1;class xm extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(lr,cr,t,e);i.layers=this.layers,this.add(i);const s=new We(lr,cr,t,e);s.layers=this.layers,this.add(s);const a=new We(lr,cr,t,e);a.layers=this.layers,this.add(a);const o=new We(lr,cr,t,e);o.layers=this.layers,this.add(o);const c=new We(lr,cr,t,e);c.layers=this.layers,this.add(c);const l=new We(lr,cr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Da)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class wf extends Ie{constructor(t=[],e=Rr,n,i,s,a,o,c,l,h){super(t,e,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ym extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),s=new Ee({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:Zn});s.uniforms.tEquirect.value=e;const a=new be(i,s),o=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Un),new xm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class an extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mm={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Mc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new Mc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sm extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Tm{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=An()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=An()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new D;class La{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=En(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=En(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=En(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=En(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=En(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new La(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ms extends Ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let hr;const Zr=new D,ur=new D,fr=new D,dr=new at,jr=new at,Af=new zt,ea=new D,Qr=new D,na=new D,Lh=new at,Po=new at,Ih=new at;class Ia extends _e{constructor(t=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Pe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Tm(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new La(n,3,0,!1)),hr.setAttribute("uv",new La(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Af.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-fr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ia(ea.set(-.5,-.5,0),fr,a,ur,i,s),ia(Qr.set(.5,-.5,0),fr,a,ur,i,s),ia(na.set(.5,.5,0),fr,a,ur,i,s),Lh.set(0,0),Po.set(1,0),Ih.set(1,1);let o=t.ray.intersectTriangle(ea,Qr,na,!1,Zr);if(o===null&&(ia(Qr.set(-.5,.5,0),fr,a,ur,i,s),Po.set(0,1),o=t.ray.intersectTriangle(ea,na,Qr,!1,Zr),o===null))return;const c=t.ray.origin.distanceTo(Zr);c<t.near||c>t.far||e.push({distance:c,point:Zr.clone(),uv:_n.getInterpolation(Zr,ea,Qr,na,Lh,Po,Ih,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ia(r,t,e,n,i,s){dr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(jr.x=s*dr.x-i*dr.y,jr.y=i*dr.x+s*dr.y):jr.copy(dr),r.copy(t),r.x+=jr.x,r.y+=jr.y,r.applyMatrix4(Af)}const Uh=new D,Nh=new Kt,Fh=new Kt,bm=new D,Oh=new zt,ra=new D,Do=new ni,Bh=new zt,Lo=new Ps;class aS extends be{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ra),this.boundingBox.expandByPoint(ra)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ra),this.boundingSphere.expandByPoint(ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(i),t.ray.intersectsSphere(Do)!==!1&&(Bh.copy(i).invert(),Lo.copy(t.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&Lo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Lo)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Kt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Sp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Nh.fromBufferAttribute(i.attributes.skinIndex,t),Fh.fromBufferAttribute(i.attributes.skinWeight,t),Uh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Fh.getComponent(s);if(a!==0){const o=Nh.getComponent(s);Oh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(bm.copy(Uh).applyMatrix4(Oh),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Em extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Cf extends Ie{constructor(t=null,e=1,n=1,i,s,a,o,c,l=cn,h=cn,u,f){super(null,a,o,c,l,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kh=new zt,wm=new zt;class Rf{constructor(t=[],e=[]){this.uuid=An(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new zt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:wm;kh.multiplyMatrices(o,e[s]),kh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Rf(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Cf(e,t,t,vn,wn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Em),this.bones.push(a),this.boneInverses.push(new zt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class zh extends ie{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pr=new zt,Vh=new zt,sa=[],Hh=new Si,Am=new zt,ts=new be,es=new ni;class oS extends be{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Am)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Si),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Hh.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),es.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ts.geometry=this.geometry,ts.material=this.material,ts.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),es.copy(this.boundingSphere),es.applyMatrix4(n),t.ray.intersectsSphere(es)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,pr),Vh.multiplyMatrices(n,pr),ts.matrixWorld=Vh,ts.raycast(t,sa);for(let a=0,o=sa.length;a<o;a++){const c=sa[a];c.instanceId=s,c.object=this,e.push(c)}sa.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cf(new Float32Array(i*this.count),i,this.count,pc,wn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Io=new D,Cm=new D,Rm=new Ft;class Ni{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Io.subVectors(n,e).cross(Cm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rm.getNormalMatrix(t),i=this.coplanarPoint(Io).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new ni,Pm=new at(.5,.5),aa=new D;class Sc{constructor(t=new Ni,e=new Ni,n=new Ni,i=new Ni,s=new Ni,a=new Ni){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],f=s[6],d=s[7],_=s[8],g=s[9],m=s[10],p=s[11],S=s[12],x=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-a,d-h,p-_,E-S).normalize(),i[1].setComponents(l+a,d+h,p+_,E+S).normalize(),i[2].setComponents(l+o,d+u,p+g,E+x).normalize(),i[3].setComponents(l-o,d-u,p-g,E-x).normalize(),n)i[4].setComponents(c,f,m,v).normalize(),i[5].setComponents(l-c,d-f,p-m,E-v).normalize();else if(i[4].setComponents(l-c,d-f,p-m,E-v).normalize(),e===Nn)i[5].setComponents(l+c,d+f,p+m,E+v).normalize();else if(e===Da)i[5].setComponents(c,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=Pm.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(aa.x=i.normal.x>0?t.max.x:t.min.x,aa.y=i.normal.y>0?t.max.y:t.min.y,aa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dm extends Ti{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ua=new D,Na=new D,Gh=new zt,ns=new Ps,oa=new ni,Uo=new D,Wh=new D;class Pf extends _e{constructor(t=new Pe,e=new Dm){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Ua.fromBufferAttribute(e,i-1),Na.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ua.distanceTo(Na);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Gh.copy(i).invert(),ns.copy(t.ray).applyMatrix4(Gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const p=h.getX(g),S=h.getX(g+1),x=la(this,t,ns,c,p,S,g);x&&e.push(x)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(d),p=la(this,t,ns,c,g,m,_-1);p&&e.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=d,m=_-1;g<m;g+=l){const p=la(this,t,ns,c,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=la(this,t,ns,c,_-1,d,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function la(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Ua.fromBufferAttribute(o,i),Na.fromBufferAttribute(o,s),e.distanceSqToSegment(Ua,Na,Uo,Wh)>n)return;Uo.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Uo);if(!(l<t.near||l>t.far))return{distance:l,point:Wh.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Xh=new D,Yh=new D;class lS extends Pf{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Xh.fromBufferAttribute(e,i),Yh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Xh.distanceTo(Yh);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cS extends Pf{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Df extends Ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const qh=new zt,Wl=new Ps,ca=new ni,ha=new D;class Fa extends _e{constructor(t=new Pe,e=new Df){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(i),ca.radius+=s,t.ray.intersectsSphere(ca)===!1)return;qh.copy(i).invert(),Wl.copy(t.ray).applyMatrix4(qh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=f,g=d;_<g;_++){const m=l.getX(_);ha.fromBufferAttribute(u,m),Kh(ha,m,c,i,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,g=d;_<g;_++)ha.fromBufferAttribute(u,_),Kh(ha,_,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Kh(r,t,e,n,i,s,a){const o=Wl.distanceSqToPoint(r);if(o<e){const c=new D;Wl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Lm extends Ie{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lf extends Ie{constructor(t,e,n=Ki,i,s,a,o=cn,c=cn,l,h=_s,u=1){if(h!==_s&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Tc extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Te(s,3)),this.setAttribute("normal",new Te(s.slice(),3)),this.setAttribute("uv",new Te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new D,v=new D,E=new D;for(let A=0;A<e.length;A+=3)d(e[A+0],x),d(e[A+1],v),d(e[A+2],E),c(x,v,E,S)}function c(S,x,v,E){const A=E+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const y=S.clone().lerp(v,R/A),T=x.clone().lerp(v,R/A),P=A-R;for(let V=0;V<=P;V++)V===0&&R===A?w[R][V]=y:w[R][V]=y.clone().lerp(T,V/P)}for(let R=0;R<A;R++)for(let y=0;y<2*(A-R)-1;y++){const T=Math.floor(y/2);y%2===0?(f(w[R][T+1]),f(w[R+1][T]),f(w[R][T])):(f(w[R][T+1]),f(w[R+1][T+1]),f(w[R+1][T]))}}function l(S){const x=new D;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(S),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){const S=new D;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(v,1-E)}_(),u()}function u(){for(let S=0;S<a.length;S+=6){const x=a[S+0],v=a[S+2],E=a[S+4],A=Math.max(x,v,E),w=Math.min(x,v,E);A>.9&&w<.1&&(x<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function f(S){s.push(S.x,S.y,S.z)}function d(S,x){const v=S*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function _(){const S=new D,x=new D,v=new D,E=new D,A=new at,w=new at,R=new at;for(let y=0,T=0;y<s.length;y+=9,T+=6){S.set(s[y+0],s[y+1],s[y+2]),x.set(s[y+3],s[y+4],s[y+5]),v.set(s[y+6],s[y+7],s[y+8]),A.set(a[T+0],a[T+1]),w.set(a[T+2],a[T+3]),R.set(a[T+4],a[T+5]),E.copy(S).add(x).add(v).divideScalar(3);const P=m(E);g(A,T+0,S,P),g(w,T+2,x,P),g(R,T+4,v,P)}}function g(S,x,v,E){E<0&&S.x===1&&(a[x]=S.x-1),v.x===0&&v.z===0&&(a[x]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tc(t.vertices,t.indices,t.radius,t.details)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(s-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),c=e||(a.isVector2?new at:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,i=[],s=[],a=[],o=new D,c=new zt;for(let d=0;d<=t;d++){const _=d/t;i[d]=this.getTangentAt(_,new D)}s[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(kt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(o,_))}a[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(kt(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let _=1;_<=t;_++)s[_].applyMatrix4(c.makeRotationAxis(i[_],d*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class If extends ii{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Im extends If{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function bc(){let r=0,t=0,e=0,n=0;function i(s,a,o,c){r=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let f=(a-s)/l-(o-s)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const ua=new D,No=new bc,Fo=new bc,Oo=new bc;class Uf extends ii{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%s]:(ua.subVectors(i[0],i[1]).add(i[0]),l=ua);const u=i[o%s],f=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(ua.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ua),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),d),g=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),No.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,_,g,m),Fo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,_,g,m),Oo.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Fo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Oo.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(No.calc(c),Fo.calc(c),Oo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $h(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,c=r*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*r+e}function Um(r,t){const e=1-r;return e*e*t}function Nm(r,t){return 2*(1-r)*r*t}function Fm(r,t){return r*r*t}function hs(r,t,e,n){return Um(r,t)+Nm(r,e)+Fm(r,n)}function Om(r,t){const e=1-r;return e*e*e*t}function Bm(r,t){const e=1-r;return 3*e*e*r*t}function km(r,t){return 3*(1-r)*r*r*t}function zm(r,t){return r*r*r*t}function us(r,t,e,n,i){return Om(r,t)+Bm(r,e)+km(r,n)+zm(r,i)}class Vm extends ii{constructor(t=new at,e=new at,n=new at,i=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(us(t,i.x,s.x,a.x,o.x),us(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hm extends ii{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(us(t,i.x,s.x,a.x,o.x),us(t,i.y,s.y,a.y,o.y),us(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Gm extends ii{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wm extends ii{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Xm extends ii{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(hs(t,i.x,s.x,a.x),hs(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends ii{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(hs(t,i.x,s.x,a.x),hs(t,i.y,s.y,a.y),hs(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ym extends ii{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set($h(o,c.x,l.x,h.x,u.x),$h(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new at().fromArray(i))}return this}}var qm=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:Uf,CubicBezierCurve:Vm,CubicBezierCurve3:Hm,EllipseCurve:If,LineCurve:Gm,LineCurve3:Wm,QuadraticBezierCurve:Xm,QuadraticBezierCurve3:Nf,SplineCurve:Ym});class Ec extends Tc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ec(t.radius,t.detail)}}class Ls extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,f=e/c,d=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const S=p*f-a;for(let x=0;x<l;x++){const v=x*u-s;_.push(v,-S,0),g.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const x=S+l*p,v=S+l*(p+1),E=S+1+l*(p+1),A=S+1+l*p;d.push(x,v,A),d.push(v,E,A)}this.setIndex(d),this.setAttribute("position",new Te(_,3)),this.setAttribute("normal",new Te(g,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ja extends Pe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(_/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,S=(i+1)*d+_;a.push(g,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Oa extends Pe{constructor(t=new Nf(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};const a=t.computeFrenetFrames(e,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new at;let h=new D;const u=[],f=[],d=[],_=[];g(),this.setIndex(_),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(d,2));function g(){for(let x=0;x<e;x++)m(x);m(s===!1?e:0),S(),p()}function m(x){h=t.getPointAt(x/e,h);const v=a.normals[x],E=a.binormals[x];for(let A=0;A<=i;A++){const w=A/i*Math.PI*2,R=Math.sin(w),y=-Math.cos(w);c.x=y*v.x+R*E.x,c.y=y*v.y+R*E.y,c.z=y*v.z+R*E.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=e;x++)for(let v=1;v<=i;v++){const E=(i+1)*(x-1)+(v-1),A=(i+1)*x+(v-1),w=(i+1)*x+v,R=(i+1)*(x-1)+v;_.push(E,A,R),_.push(A,w,R)}}function S(){for(let x=0;x<=e;x++)for(let v=0;v<=i;v++)l.x=x/e,l.y=v/i,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Oa(new qm[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Km extends Ee{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $m extends Ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_f,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ba extends $m{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Jm extends Ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ep,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zm extends Ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function fa(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function jm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qm(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Jh(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let c=0;c!==t;++c)i[a++]=r[o+c]}return i}function Ff(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}class Za{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class tg extends Za{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case hh:s=t,o=2*e-n;break;case uh:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:a=t,c=2*n-e;break;case uh:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,S=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,x=(-1-d)*m+(1.5+d)*g+.5*_,v=d*m-d*g;for(let E=0;E!==o;++E)s[E]=p*a[h+E]+S*a[l+E]+x*a[c+E]+v*a[u+E];return s}}class eg extends Za{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*h;return s}}class ng extends Za{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Rn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fa(e,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fa(t.times,Array),values:fa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ng(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new eg(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tg(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ra:e=this.InterpolantFactoryMethodDiscrete;break;case Hl:e=this.InterpolantFactoryMethodLinear;break;case oo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Hl;case this.InterpolantFactoryMethodSmooth:return oo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&jm(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===oo,s=t.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const g=e[u+_];if(g!==e[f+_]||g!==e[d+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Hl;class Hr extends Rn{constructor(t,e,n){super(t,e,n)}}Hr.prototype.ValueTypeName="bool";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=Ra;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Of extends Rn{constructor(t,e,n,i){super(t,e,n,i)}}Of.prototype.ValueTypeName="color";class ka extends Rn{constructor(t,e,n,i){super(t,e,n,i)}}ka.prototype.ValueTypeName="number";class ig extends Za{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)Vr.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ja extends Rn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ig(this.times,this.values,this.getValueSize(),t)}}ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Rn{constructor(t,e,n){super(t,e,n)}}Gr.prototype.ValueTypeName="string";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=Ra;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends Rn{constructor(t,e,n,i){super(t,e,n,i)}}za.prototype.ValueTypeName="vector";class hS{constructor(t="",e=-1,n=[],i=bp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=An(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(sg(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(Rn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Qm(c);c=Jh(c,1,h),l=Jh(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ka(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,g){if(d.length!==0){const m=[],p=[];Ff(d,m,p,_),m.length!==0&&g.push(new u(f,m,p))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let S=0;S!==f[_].morphTargets.length;++S){const x=f[_];m.push(x.time),p.push(x.morphTarget===g?1:0)}i.push(new ka(".morphTargetInfluence["+g+"]",m,p))}c=d.length*a}else{const d=".bones["+e[u].name+"]";n(za,d+".position",f,"pos",i),n(ja,d+".quaternion",f,"rot",i),n(za,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ka;case"vector":case"vector2":case"vector3":case"vector4":return za;case"color":return Of;case"quaternion":return ja;case"bool":case"boolean":return Hr;case"string":return Gr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function sg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=rg(r.type);if(r.times===void 0){const e=[],n=[];Ff(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Jn={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ag{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const og=new ag;class Is{constructor(t){this.manager=t!==void 0?t:og,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Is.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class lg extends Error{constructor(t,e){super(t),this.response=e}}class uS extends Is{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Jn.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Yn[t]!==void 0){Yn[t].push({onLoad:e,onProgress:n,onError:i});return}Yn[t]=[],Yn[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Yn[t],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:x,value:v})=>{if(x)p.close();else{g+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,w=h.length;A<w;A++){const R=h[A];R.onProgress&&R.onProgress(E)}p.enqueue(v),S()}},x=>{p.error(x)})}}});return new Response(m)}else throw new lg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Jn.add(`file:${t}`,l);const h=Yn[t];delete Yn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Yn[t];if(h===void 0)throw this.manager.itemError(t),l;delete Yn[t];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const mr=new WeakMap;class cg extends Is{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Jn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=mr.get(a);u===void 0&&(u=[],mr.set(a,u)),u.push({onLoad:e,onError:i})}return a}const o=xs("img");function c(){h(),e&&e(this);const u=mr.get(this)||[];for(let f=0;f<u.length;f++){const d=u[f];d.onLoad&&d.onLoad(this)}mr.delete(this),s.manager.itemEnd(t)}function l(u){h(),i&&i(u),Jn.remove(`image:${t}`);const f=mr.get(this)||[];for(let d=0;d<f.length;d++){const _=f[d];_.onError&&_.onError(u)}mr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class Bf extends Is{constructor(t){super(t)}load(t,e,n,i){const s=new Ie,a=new cg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Qa extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Bo=new zt,Zh=new D,jh=new D;class wc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zh),jh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jh),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hg extends wc{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=Lr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class fS extends Qa{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new hg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Qh=new zt,is=new D,ko=new D;class ug extends wc{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),ko.copy(n.position),ko.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ko),n.updateMatrixWorld(),i.makeTranslation(-is.x,-is.y,-is.z),Qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh,n.coordinateSystem,n.reversedDepth)}}class Xl extends Qa{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ug}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ac extends Ef{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class fg extends wc{constructor(){super(new Ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dg extends Qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new fg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pg extends Qa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class dS{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}const zo=new WeakMap;class pS extends Is{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Jn.get(`image-bitmap:${t}`);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(l=>{if(zo.has(a)===!0)i&&i(zo.get(a)),s.manager.itemError(t),s.manager.itemEnd(t);else return e&&e(l),s.manager.itemEnd(t),l});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(`image-bitmap:${t}`,l),e&&e(l),s.manager.itemEnd(t),l}).catch(function(l){i&&i(l),zo.set(c,l),Jn.remove(`image-bitmap:${t}`),s.manager.itemError(t),s.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,c),s.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class mg extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class kf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Cc="\\[\\]\\.:\\/",gg=new RegExp("["+Cc+"]","g"),Rc="[^"+Cc+"]",_g="[^"+Cc.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",Rc),xg=/(WCOD+)?/.source.replace("WCOD",_g),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),Sg=new RegExp("^"+vg+xg+yg+Mg+"$"),Tg=["material","materials","bones","map"];class bg{constructor(t,e,n){const i=n||Qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Qt{constructor(t,e,n){this.path=e,this.parsedPath=n||Qt.parseTrackName(e),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,e,n):new Qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(t){const e=Sg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Tg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=bg;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const tu=new zt;class Eg{constructor(t,e,n=0,i=1/0){this.ray=new Ps(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tu),this}intersectObject(t,e=!0,n=[]){return Yl(t,this,n,e),n.sort(eu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Yl(t[i],this,n,e);return n.sort(eu),n}}function eu(r,t){return r.distance-t.distance}function Yl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Yl(s[a],t,e,!0)}}function nu(r,t,e,n){const i=wg(n);switch(e){case df:return r*t;case pc:return r*t/i.components*i.byteLength;case mc:return r*t/i.components*i.byteLength;case mf:return r*t*2/i.components*i.byteLength;case gc:return r*t*2/i.components*i.byteLength;case pf:return r*t*3/i.components*i.byteLength;case vn:return r*t*4/i.components*i.byteLength;case _c:return r*t*4/i.components*i.byteLength;case xa:case ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ma:case Sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _l:case xl:return Math.max(r,16)*Math.max(t,8)/4;case gl:case vl:return Math.max(r,8)*Math.max(t,8)/2;case yl:case Ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case El:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Il:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ta:case Ol:case Bl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case gf:case kl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zl:case Vl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wg(r){switch(r){case On:case hf:return{byteLength:1,components:1};case ms:case uf:case jn:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case Ki:case uc:case wn:return{byteLength:4,components:1};case ff:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zf(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Ag(r){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=r.createBuffer();r.bindBuffer(c,f),r.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=r.SHORT;else if(l instanceof Uint32Array)d=r.UNSIGNED_INT;else if(l instanceof Int32Array)d=r.INT;else if(l instanceof Int8Array)d=r.BYTE;else if(l instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],g=u[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,u[f]=g)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const g=u[d];r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rg=`#ifdef USE_ALPHAHASH
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
#endif`,Pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ug=`#ifdef USE_AOMAP
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
#endif`,Ng=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fg=`#ifdef USE_BATCHING
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
#endif`,Og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vg=`#ifdef USE_IRIDESCENCE
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
#endif`,Hg=`#ifdef USE_BUMPMAP
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
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$g=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zg=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qg=`vec3 transformedNormal = objectNormal;
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
#endif`,t_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r_="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a_=`#ifdef USE_ENVMAP
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
#endif`,o_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,l_=`#ifdef USE_ENVMAP
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
#endif`,c_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m_=`#ifdef USE_GRADIENTMAP
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
}`,g_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x_=`uniform bool receiveShadow;
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
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,M_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E_=`PhysicalMaterial material;
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
#endif`,w_=`struct PhysicalMaterial {
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
}`,A_=`
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
#endif`,C_=`#if defined( RE_IndirectDiffuse )
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
#endif`,R_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O_=`#if defined( USE_POINTS_UV )
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
#endif`,B_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G_=`#ifdef USE_MORPHTARGETS
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
#endif`,W_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,q_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_=`#ifdef USE_NORMALMAP
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
#endif`,Z_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,i0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g0=`#ifdef USE_SKINNING
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
#endif`,_0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,K0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,Z0=`#define STANDARD
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define TOON
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
}`,tv=`#define TOON
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
}`,ev=`uniform float size;
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
}`,nv=`uniform vec3 diffuse;
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
}`,iv=`#include <common>
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
}`,rv=`uniform vec3 color;
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
}`,sv=`uniform float rotation;
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
}`,av=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:Cg,alphahash_pars_fragment:Rg,alphamap_fragment:Pg,alphamap_pars_fragment:Dg,alphatest_fragment:Lg,alphatest_pars_fragment:Ig,aomap_fragment:Ug,aomap_pars_fragment:Ng,batching_pars_vertex:Fg,batching_vertex:Og,begin_vertex:Bg,beginnormal_vertex:kg,bsdfs:zg,iridescence_fragment:Vg,bumpmap_pars_fragment:Hg,clipping_planes_fragment:Gg,clipping_planes_pars_fragment:Wg,clipping_planes_pars_vertex:Xg,clipping_planes_vertex:Yg,color_fragment:qg,color_pars_fragment:Kg,color_pars_vertex:$g,color_vertex:Jg,common:Zg,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Qg,displacementmap_pars_vertex:t_,displacementmap_vertex:e_,emissivemap_fragment:n_,emissivemap_pars_fragment:i_,colorspace_fragment:r_,colorspace_pars_fragment:s_,envmap_fragment:a_,envmap_common_pars_fragment:o_,envmap_pars_fragment:l_,envmap_pars_vertex:c_,envmap_physical_pars_fragment:y_,envmap_vertex:h_,fog_vertex:u_,fog_pars_vertex:f_,fog_fragment:d_,fog_pars_fragment:p_,gradientmap_pars_fragment:m_,lightmap_pars_fragment:g_,lights_lambert_fragment:__,lights_lambert_pars_fragment:v_,lights_pars_begin:x_,lights_toon_fragment:M_,lights_toon_pars_fragment:S_,lights_phong_fragment:T_,lights_phong_pars_fragment:b_,lights_physical_fragment:E_,lights_physical_pars_fragment:w_,lights_fragment_begin:A_,lights_fragment_maps:C_,lights_fragment_end:R_,logdepthbuf_fragment:P_,logdepthbuf_pars_fragment:D_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:I_,map_fragment:U_,map_pars_fragment:N_,map_particle_fragment:F_,map_particle_pars_fragment:O_,metalnessmap_fragment:B_,metalnessmap_pars_fragment:k_,morphinstance_vertex:z_,morphcolor_vertex:V_,morphnormal_vertex:H_,morphtarget_pars_vertex:G_,morphtarget_vertex:W_,normal_fragment_begin:X_,normal_fragment_maps:Y_,normal_pars_fragment:q_,normal_pars_vertex:K_,normal_vertex:$_,normalmap_pars_fragment:J_,clearcoat_normal_fragment_begin:Z_,clearcoat_normal_fragment_maps:j_,clearcoat_pars_fragment:Q_,iridescence_pars_fragment:t0,opaque_fragment:e0,packing:n0,premultiplied_alpha_fragment:i0,project_vertex:r0,dithering_fragment:s0,dithering_pars_fragment:a0,roughnessmap_fragment:o0,roughnessmap_pars_fragment:l0,shadowmap_pars_fragment:c0,shadowmap_pars_vertex:h0,shadowmap_vertex:u0,shadowmask_pars_fragment:f0,skinbase_vertex:d0,skinning_pars_vertex:p0,skinning_vertex:m0,skinnormal_vertex:g0,specularmap_fragment:_0,specularmap_pars_fragment:v0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:M0,transmission_pars_fragment:S0,uv_pars_fragment:T0,uv_pars_vertex:b0,uv_vertex:E0,worldpos_vertex:w0,background_vert:A0,background_frag:C0,backgroundCube_vert:R0,backgroundCube_frag:P0,cube_vert:D0,cube_frag:L0,depth_vert:I0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:k0,linedashed_frag:z0,meshbasic_vert:V0,meshbasic_frag:H0,meshlambert_vert:G0,meshlambert_frag:W0,meshmatcap_vert:X0,meshmatcap_frag:Y0,meshnormal_vert:q0,meshnormal_frag:K0,meshphong_vert:$0,meshphong_frag:J0,meshphysical_vert:Z0,meshphysical_frag:j0,meshtoon_vert:Q0,meshtoon_frag:tv,points_vert:ev,points_frag:nv,shadow_vert:iv,shadow_frag:rv,sprite_vert:sv,sprite_frag:av},st={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ln={basic:{uniforms:Ve([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ve([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ve([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ve([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ve([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ve([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ve([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ve([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ve([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ve([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ve([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ve([st.common,st.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ve([st.lights,st.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ln.physical={uniforms:Ve([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const da={r:0,b:0,g:0},Di=new Bn,ov=new zt;function lv(r,t,e,n,i,s,a){const o=new Rt(0);let c=s===!0?0:1,l,h,u=null,f=0,d=null;function _(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function g(x){let v=!1;const E=_(x);E===null?p(o,c):E&&E.isColor&&(p(E,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===Ka)?(h===void 0&&(h=new be(new Ds(1,1,1),new Ee({name:"BackgroundCubeMaterial",uniforms:Ir(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Di.copy(v.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ov.makeRotationFromEuler(Di)),h.material.toneMapped=Xt.getTransfer(E.colorSpace)!==Jt,(u!==E||f!==E.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new be(new Ls(2,2),new Ee({name:"BackgroundMaterial",uniforms:Ir(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(E.colorSpace)!==Jt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,d=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(da,bf(r)),n.buffers.color.setClear(da.r,da.g,da.b,v,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:g,addToRenderList:m,dispose:S}}function cv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,a=!1;function o(T,P,V,O,B){let q=!1;const G=u(O,V,P);s!==G&&(s=G,l(s.object)),q=d(T,O,V,B),q&&_(T,O,V,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(T,P,V,O),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return r.createVertexArray()}function l(T){return r.bindVertexArray(T)}function h(T){return r.deleteVertexArray(T)}function u(T,P,V){const O=V.wireframe===!0;let B=n[T.id];B===void 0&&(B={},n[T.id]=B);let q=B[P.id];q===void 0&&(q={},B[P.id]=q);let G=q[O];return G===void 0&&(G=f(c()),q[O]=G),G}function f(T){const P=[],V=[],O=[];for(let B=0;B<e;B++)P[B]=0,V[B]=0,O[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,P,V,O){const B=s.attributes,q=P.attributes;let G=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){const ot=B[H];let _t=q[H];if(_t===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(_t=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(_t=T.instanceColor)),ot===void 0||ot.attribute!==_t||_t&&ot.data!==_t.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function _(T,P,V,O){const B={},q=P.attributes;let G=0;const $=V.getAttributes();for(const H in $)if($[H].location>=0){let ot=q[H];ot===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor));const _t={};_t.attribute=ot,ot&&ot.data&&(_t.data=ot.data),B[H]=_t,G++}s.attributes=B,s.attributesNum=G,s.index=O}function g(){const T=s.newAttributes;for(let P=0,V=T.length;P<V;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){const V=s.newAttributes,O=s.enabledAttributes,B=s.attributeDivisors;V[T]=1,O[T]===0&&(r.enableVertexAttribArray(T),O[T]=1),B[T]!==P&&(r.vertexAttribDivisor(T,P),B[T]=P)}function S(){const T=s.newAttributes,P=s.enabledAttributes;for(let V=0,O=P.length;V<O;V++)P[V]!==T[V]&&(r.disableVertexAttribArray(V),P[V]=0)}function x(T,P,V,O,B,q,G){G===!0?r.vertexAttribIPointer(T,P,V,B,q):r.vertexAttribPointer(T,P,V,O,B,q)}function v(T,P,V,O){g();const B=O.attributes,q=V.getAttributes(),G=P.defaultAttributeValues;for(const $ in q){const H=q[$];if(H.location>=0){let it=B[$];if(it===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(it=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(it=T.instanceColor)),it!==void 0){const ot=it.normalized,_t=it.itemSize,Dt=t.get(it);if(Dt===void 0)continue;const te=Dt.buffer,Vt=Dt.type,W=Dt.bytesPerElement,lt=Vt===r.INT||Vt===r.UNSIGNED_INT||it.gpuType===uc;if(it.isInterleavedBufferAttribute){const nt=it.data,wt=nt.stride,At=it.offset;if(nt.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)p(H.location+It,nt.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);r.bindBuffer(r.ARRAY_BUFFER,te);for(let It=0;It<H.locationSize;It++)x(H.location+It,_t/H.locationSize,Vt,ot,wt*W,(At+_t/H.locationSize*It)*W,lt)}else{if(it.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt,it.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);r.bindBuffer(r.ARRAY_BUFFER,te);for(let nt=0;nt<H.locationSize;nt++)x(H.location+nt,_t/H.locationSize,Vt,ot,_t*W,_t/H.locationSize*nt*W,lt)}}else if(G!==void 0){const ot=G[$];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(H.location,ot);break;case 3:r.vertexAttrib3fv(H.location,ot);break;case 4:r.vertexAttrib4fv(H.location,ot);break;default:r.vertexAttrib1fv(H.location,ot)}}}}S()}function E(){R();for(const T in n){const P=n[T];for(const V in P){const O=P[V];for(const B in O)h(O[B].object),delete O[B];delete P[V]}delete n[T]}}function A(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const V in P){const O=P[V];for(const B in O)h(O[B].object),delete O[B];delete P[V]}delete n[T.id]}function w(T){for(const P in n){const V=n[P];if(V[T.id]===void 0)continue;const O=V[T.id];for(const B in O)h(O[B].object),delete O[B];delete V[T.id]}}function R(){y(),a=!0,s!==i&&(s=i,l(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function hv(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)a(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*f[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function uv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==vn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==On&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==wn&&!R)}function c(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:A}}function fv(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ni,o=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):l();else{const S=s?0:n,x=S*4;let v=p.clippingState||null;c.value=v,v=h(_,f,x,d);for(let E=0;E!==x;++E)v[E]=e[E];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const p=d+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=d;x!==g;++x,v+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function dv(r){let t=new WeakMap;function e(a,o){return o===fl?a.mapping=Rr:o===dl&&(a.mapping=Pr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fl||o===dl)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ym(c.height);return l.fromEquirectangularTexture(r,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const xr=4,iu=[.125,.215,.35,.446,.526,.582],zi=20,Vo=new Ac,ru=new Rt;let Ho=null,Go=0,Wo=0,Xo=!1;const Fi=(1+Math.sqrt(5))/2,gr=1/Fi,su=[new D(-Fi,gr,0),new D(Fi,gr,0),new D(-gr,0,Fi),new D(gr,0,Fi),new D(0,Fi,-gr),new D(0,Fi,gr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],pv=new D;class au{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=pv}=s;Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ho,Go,Wo),this._renderer.xr.enabled=Xo,t.scissorTest=!1,pa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Rr||t.mapping===Pr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ho=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:jn,format:vn,colorSpace:Dr,depthBuffer:!1},i=ou(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mv(s)),this._blurMaterial=gv(s,t,e)}return i}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,n,i,s){const c=new We(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ru),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const g=new $a({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new be(new Ds,g);let p=!1;const S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(ru),p=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[x],s.y,s.z)):v===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[x]));const E=this._cubeSize;pa(i,v*E,x>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Rr||t.mapping===Pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new be(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;pa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=su[(i-s-1)%su.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*zi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let S=0;for(let w=0;w<zi;++w){const R=w/g,y=Math.exp(-R*R/2);p.push(y),w===0?S+=y:w<m&&(S+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const v=this._sizeLods[i],E=3*v*(i>x-xr?i-x+xr:0),A=4*(this._cubeSize-v);pa(e,E,A,3*v,2*v),c.setRenderTarget(e),c.render(u,Vo)}}function mv(r){const t=[],e=[],n=[];let i=r;const s=r-xr+1+iu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>r-xr?c=iu[a-r+xr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*d),x=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,y=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(y,g*_*A),x.set(f,m*_*A);const T=[A,A,A,A,A,A];v.set(T,p*_*A)}const E=new Pe;E.setAttribute("position",new ie(S,g)),E.setAttribute("uv",new ie(x,m)),E.setAttribute("faceIndex",new ie(v,p)),t.push(E),i>xr&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ou(r,t,e){const n=new Cn(r,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function gv(r,t,e){const n=new Float32Array(zi),i=new D(0,1,0);return new Ee({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function lu(){return new Ee({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function cu(){return new Ee({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function _v(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fl||c===dl,h=c===Rr||c===Pr;if(l||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new au(r)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new au(r)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function vv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function xv(r,t,e,n){const i={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete i[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const d in f)t.update(f[d],r.ARRAY_BUFFER)}function l(u){const f=[],d=u.index,_=u.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let x=0,v=S.length;x<v;x+=3){const E=S[x+0],A=S[x+1],w=S[x+2];f.push(E,A,A,w,w,E)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,v=S.length/3-1;x<v;x+=3){const E=x+0,A=x+1,w=x+2;f.push(E,A,A,w,w,E)}}else return;const m=new(xf(f)?Tf:Sf)(f,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const f=s.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function yv(r,t,e){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,d){r.drawElements(n,d,s,f*a),e.update(d,n,1)}function l(f,d,_){_!==0&&(r.drawElementsInstanced(n,d,s,f*a,_),e.update(d,n,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,n,1)}function u(f,d,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=d[S]*g[S];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Sv(r,t,e){const n=new WeakMap,i=new Kt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let v=o.attributes.position.count*x,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const A=new Float32Array(v*E*4*u),w=new yf(A,v,E,u);w.type=wn,w.needsUpdate=!0;const R=x*4;for(let T=0;T<u;T++){const P=m[T],V=p[T],O=S[T],B=v*E*4*T;for(let q=0;q<P.count;q++){const G=q*R;d===!0&&(i.fromBufferAttribute(P,q),A[B+G+0]=i.x,A[B+G+1]=i.y,A[B+G+2]=i.z,A[B+G+3]=0),_===!0&&(i.fromBufferAttribute(V,q),A[B+G+4]=i.x,A[B+G+5]=i.y,A[B+G+6]=i.z,A[B+G+7]=0),g===!0&&(i.fromBufferAttribute(O,q),A[B+G+8]=i.x,A[B+G+9]=i.y,A[B+G+10]=i.z,A[B+G+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new at(v,E)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let d=0;for(let g=0;g<l.length;g++)d+=l[g];const _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Tv(r,t,e,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const Vf=new Ie,hu=new Lf(1,1),Hf=new yf,Gf=new rm,Wf=new wf,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Wr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=uu[i];if(s===void 0&&(s=new Float32Array(i),uu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function we(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ae(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function to(r,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function bv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ev(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2fv(this.addr,t),Ae(e,t)}}function wv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;r.uniform3fv(this.addr,t),Ae(e,t)}}function Av(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4fv(this.addr,t),Ae(e,t)}}function Cv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;mu.set(n),r.uniformMatrix2fv(this.addr,!1,mu),Ae(e,n)}}function Rv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;pu.set(n),r.uniformMatrix3fv(this.addr,!1,pu),Ae(e,n)}}function Pv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;du.set(n),r.uniformMatrix4fv(this.addr,!1,du),Ae(e,n)}}function Dv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Lv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2iv(this.addr,t),Ae(e,t)}}function Iv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3iv(this.addr,t),Ae(e,t)}}function Uv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4iv(this.addr,t),Ae(e,t)}}function Nv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Fv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;r.uniform2uiv(this.addr,t),Ae(e,t)}}function Ov(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;r.uniform3uiv(this.addr,t),Ae(e,t)}}function Bv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;r.uniform4uiv(this.addr,t),Ae(e,t)}}function kv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hu.compareFunction=vf,s=hu):s=Vf,e.setTexture2D(t||s,i)}function zv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gf,i)}function Vv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wf,i)}function Hv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Hf,i)}function Gv(r){switch(r){case 5126:return bv;case 35664:return Ev;case 35665:return wv;case 35666:return Av;case 35674:return Cv;case 35675:return Rv;case 35676:return Pv;case 5124:case 35670:return Dv;case 35667:case 35671:return Lv;case 35668:case 35672:return Iv;case 35669:case 35673:return Uv;case 5125:return Nv;case 36294:return Fv;case 36295:return Ov;case 36296:return Bv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Vv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(r,t){r.uniform1fv(this.addr,t)}function Xv(r,t){const e=Wr(t,this.size,2);r.uniform2fv(this.addr,e)}function Yv(r,t){const e=Wr(t,this.size,3);r.uniform3fv(this.addr,e)}function qv(r,t){const e=Wr(t,this.size,4);r.uniform4fv(this.addr,e)}function Kv(r,t){const e=Wr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function $v(r,t){const e=Wr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Jv(r,t){const e=Wr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Zv(r,t){r.uniform1iv(this.addr,t)}function jv(r,t){r.uniform2iv(this.addr,t)}function Qv(r,t){r.uniform3iv(this.addr,t)}function tx(r,t){r.uniform4iv(this.addr,t)}function ex(r,t){r.uniform1uiv(this.addr,t)}function nx(r,t){r.uniform2uiv(this.addr,t)}function ix(r,t){r.uniform3uiv(this.addr,t)}function rx(r,t){r.uniform4uiv(this.addr,t)}function sx(r,t,e){const n=this.cache,i=t.length,s=to(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Vf,s[a])}function ax(r,t,e){const n=this.cache,i=t.length,s=to(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Gf,s[a])}function ox(r,t,e){const n=this.cache,i=t.length,s=to(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wf,s[a])}function lx(r,t,e){const n=this.cache,i=t.length,s=to(e,i);we(n,s)||(r.uniform1iv(this.addr,s),Ae(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Hf,s[a])}function cx(r){switch(r){case 5126:return Wv;case 35664:return Xv;case 35665:return Yv;case 35666:return qv;case 35674:return Kv;case 35675:return $v;case 35676:return Jv;case 5124:case 35670:return Zv;case 35667:case 35671:return jv;case 35668:case 35672:return Qv;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return lx}}class hx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Gv(e.type)}}class ux{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cx(e.type)}}class fx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function gu(r,t){r.seq.push(t),r.map[t.id]=t}function dx(r,t,e){const n=r.name,i=n.length;for(Yo.lastIndex=0;;){const s=Yo.exec(n),a=Yo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){gu(e,l===void 0?new hx(o,r,t):new ux(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new fx(o),gu(e,u)),e=u}}}class ba{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);dx(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function _u(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const px=37297;let mx=0;function gx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const vu=new Ft;function _x(r){Xt._getMatrix(vu,Xt.workingColorSpace,r);const t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(r)){case Pa:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function xu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+gx(r.getShaderSource(t),o)}else return s}function vx(r,t){const e=_x(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xx(r,t){let e;switch(t){case nf:e="Linear";break;case rf:e="Reinhard";break;case sf:e="Cineon";break;case hc:e="ACESFilmic";break;case of:e="AgX";break;case lf:e="Neutral";break;case af:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ma=new D;function yx(){Xt.getLuminanceCoefficients(ma);const r=ma.x.toFixed(4),t=ma.y.toFixed(4),e=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Sx(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ss(r){return r!==""}function yu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const bx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ql(r){return r.replace(bx,wx)}const Ex=new Map;function wx(r,t){let e=Ot[t];if(e===void 0){const n=Ex.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ql(e)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Su(r){return r.replace(Ax,Cx)}function Cx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Tu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Rx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ep?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qn&&(t="SHADOWMAP_TYPE_VSM"),t}function Px(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Rr:case Pr:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Pr:t="ENVMAP_MODE_REFRACTION";break}return t}function Lx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ef:t="ENVMAP_BLENDING_MULTIPLY";break;case yp:t="ENVMAP_BLENDING_MIX";break;case Mp:t="ENVMAP_BLENDING_ADD";break}return t}function Ix(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ux(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Rx(e),l=Px(e),h=Dx(e),u=Lx(e),f=Ix(e),d=Mx(e),_=Sx(s),g=i.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),p=[Tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mi?"#define TONE_MAPPING":"",e.toneMapping!==mi?Ot.tonemapping_pars_fragment:"",e.toneMapping!==mi?xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=ql(a),a=yu(a,e),a=Mu(a,e),o=ql(o),o=yu(o,e),o=Mu(o,e),a=Su(a),o=Su(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,v=S+p+o,E=_u(i,i.VERTEX_SHADER,x),A=_u(i,i.FRAGMENT_SHADER,v);i.attachShader(g,E),i.attachShader(g,A),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(P){if(r.debug.checkShaderErrors){const V=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(E)||"",B=i.getShaderInfoLog(A)||"",q=V.trim(),G=O.trim(),$=B.trim();let H=!0,it=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,A);else{const ot=xu(i,E,"vertex"),_t=xu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+q+`
`+ot+`
`+_t)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||$==="")&&(it=!1);it&&(P.diagnostics={runnable:H,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(E),i.deleteShader(A),R=new ba(i,g),y=Tx(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,px)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=A,this}let Nx=0;class Fx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ox(t),e.set(t,n)),n}}class Ox{constructor(t){this.id=Nx++,this.code=t,this.usedTimes=0}}function Bx(r,t,e,n,i,s,a){const o=new yc,c=new Fx,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,T,P,V,O){const B=V.fog,q=O.geometry,G=y.isMeshStandardMaterial?V.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),H=$&&$.mapping===Ka?$.image.height:null,it=_[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ot=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=ot!==void 0?ot.length:0;let Dt=0;q.morphAttributes.position!==void 0&&(Dt=1),q.morphAttributes.normal!==void 0&&(Dt=2),q.morphAttributes.color!==void 0&&(Dt=3);let te,Vt,W,lt;if(it){const $t=Ln[it];te=$t.vertexShader,Vt=$t.fragmentShader}else te=y.vertexShader,Vt=y.fragmentShader,c.update(y),W=c.getVertexShaderID(y),lt=c.getFragmentShaderID(y);const nt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),At=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,ve=!!y.map,Wt=!!y.matcap,L=!!$,se=!!y.aoMap,bt=!!y.lightMap,qt=!!y.bumpMap,St=!!y.normalMap,le=!!y.displacementMap,pt=!!y.emissiveMap,Bt=!!y.metalnessMap,Ce=!!y.roughnessMap,xe=y.anisotropy>0,C=y.clearcoat>0,M=y.dispersion>0,F=y.iridescence>0,Y=y.sheen>0,J=y.transmission>0,X=xe&&!!y.anisotropyMap,Mt=C&&!!y.clearcoatMap,et=C&&!!y.clearcoatNormalMap,vt=C&&!!y.clearcoatRoughnessMap,xt=F&&!!y.iridescenceMap,Q=F&&!!y.iridescenceThicknessMap,ut=Y&&!!y.sheenColorMap,Pt=Y&&!!y.sheenRoughnessMap,yt=!!y.specularMap,ct=!!y.specularColorMap,Nt=!!y.specularIntensityMap,I=J&&!!y.transmissionMap,tt=J&&!!y.thicknessMap,rt=!!y.gradientMap,dt=!!y.alphaMap,Z=y.alphaTest>0,K=!!y.alphaHash,gt=!!y.extensions;let Ut=mi;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const ae={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:Vt,defines:y.defines,customVertexShaderID:W,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:At,instancingColor:At&&O.instanceColor!==null,instancingMorph:At&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Dr,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Wt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:H,aoMap:se,lightMap:bt,bumpMap:qt,normalMap:St,displacementMap:f&&le,emissiveMap:pt,normalMapObjectSpace:St&&y.normalMapType===Ap,normalMapTangentSpace:St&&y.normalMapType===_f,metalnessMap:Bt,roughnessMap:Ce,anisotropy:xe,anisotropyMap:X,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:et,clearcoatRoughnessMap:vt,dispersion:M,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:ut,sheenRoughnessMap:Pt,specularMap:yt,specularColorMap:ct,specularIntensityMap:Nt,transmission:J,transmissionMap:I,thicknessMap:tt,gradientMap:rt,opaque:y.transparent===!1&&y.blending===Sr&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:Z,alphaHash:K,combine:y.combine,mapUv:ve&&g(y.map.channel),aoMapUv:se&&g(y.aoMap.channel),lightMapUv:bt&&g(y.lightMap.channel),bumpMapUv:qt&&g(y.bumpMap.channel),normalMapUv:St&&g(y.normalMap.channel),displacementMapUv:le&&g(y.displacementMap.channel),emissiveMapUv:pt&&g(y.emissiveMap.channel),metalnessMapUv:Bt&&g(y.metalnessMap.channel),roughnessMapUv:Ce&&g(y.roughnessMap.channel),anisotropyMapUv:X&&g(y.anisotropyMap.channel),clearcoatMapUv:Mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&g(y.sheenRoughnessMap.channel),specularMapUv:yt&&g(y.specularMap.channel),specularColorMapUv:ct&&g(y.specularColorMap.channel),specularIntensityMapUv:Nt&&g(y.specularIntensityMap.channel),transmissionMapUv:I&&g(y.transmissionMap.channel),thicknessMapUv:tt&&g(y.thicknessMap.channel),alphaMapUv:dt&&g(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(St||xe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(ve||dt),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:wt,skinning:O.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Dt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===Jt,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===bn,flipSided:y.side===Ye,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:gt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&y.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function p(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(S(T,y),x(T,y),T.push(r.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function S(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function x(y,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const T=_[y.type];let P;if(T){const V=Ln[T];P=ys.clone(V.uniforms)}else P=y.uniforms;return P}function E(y,T){let P;for(let V=0,O=h.length;V<O;V++){const B=h[V];if(B.cacheKey===T){P=B,++P.usedTimes;break}}return P===void 0&&(P=new Ux(r,T,y,s),h.push(P)),P}function A(y){if(--y.usedTimes===0){const T=h.indexOf(y);h[T]=h[h.length-1],h.pop(),y.destroy()}}function w(y){c.remove(y)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:E,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function kx(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function zx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function bu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Eu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,f,d,_,g,m){const p=a(u,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function c(u,f,d,_,g,m){const p=a(u,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||zx),n.length>1&&n.sort(f||bu),i.length>1&&i.sort(f||bu)}function h(){for(let u=t,f=r.length;u<f;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function Vx(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new Eu,r.set(n,[a])):i>=s.length?(a=new Eu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Hx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return r[t.id]=e,e}}}function Gx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Wx=0;function Xx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Yx(r){const t=new Hx,e=Gx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,s=new zt,a=new zt;function o(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,S=0,x=0,v=0,E=0,A=0,w=0;l.sort(Xx);for(let y=0,T=l.length;y<T;y++){const P=l[y],V=P.color,O=P.intensity,B=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=V.r*O,u+=V.g*O,f+=V.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);w++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=q,n.directionalShadowMatrix[d]=P.shadow.matrix,S++}n.directional[d]=G,d++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(V).multiplyScalar(O),G.distance=B,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const $=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=$.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=q,v++}g++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(V).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const $=P.shadow,H=e.get(P);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=P.shadow.matrix,x++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==S||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=S,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=w,n.version=Wx++)}function c(l,h){let u=0,f=0,d=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(x.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function wu(r){const t=new Yx(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function qx(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new wu(r),t.set(i,[o])):s>=a.length?(o=new wu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;function Jx(r,t,e){let n=new Sc;const i=new at,s=new at,a=new Kt,o=new Jm({depthPacking:wp}),c=new Zm,l={},h=e.maxTextureSize,u={[vi]:Ye,[Ye]:vi,[bn]:bn},f=new Ee({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Kx,fragmentShader:$x}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pe;_.setAttribute("position",new ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new be(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Zn),V.buffers.depth.getReversed()?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=p!==qn&&this.type===qn,B=p===qn&&this.type!==qn;for(let q=0,G=A.length;q<G;q++){const $=A[q],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const it=H.getFrameExtents();if(i.multiply(it),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/it.x),i.x=s.x*it.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/it.y),i.y=s.y*it.y,H.mapSize.y=s.y)),H.map===null||O===!0||B===!0){const _t=this.type!==qn?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new Cn(i.x,i.y,_t),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ot=H.getViewportCount();for(let _t=0;_t<ot;_t++){const Dt=H.getViewport(_t);a.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),V.viewport(a),H.updateMatrices($,_t),n=H.getFrustum(),v(w,R,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===qn&&S(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,T,P)};function S(A,w){const R=t.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,R,d,g,null)}function x(A,w,R,y){let T=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?c:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const V=T.uuid,O=w.uuid;let B=l[V];B===void 0&&(B={},l[V]=B);let q=B[O];q===void 0&&(q=T.clone(),B[O]=q,w.addEventListener("dispose",E)),T=q}if(T.visible=w.visible,T.wireframe=w.wireframe,y===qn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=r.properties.get(T);V.light=R}return T}function v(A,w,R,y,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===qn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=t.update(A),B=A.material;if(Array.isArray(B)){const q=O.groups;for(let G=0,$=q.length;G<$;G++){const H=q[G],it=B[H.materialIndex];if(it&&it.visible){const ot=x(A,it,y,T);A.onBeforeShadow(r,A,w,R,O,ot,H),r.renderBufferDirect(R,null,O,ot,A,H),A.onAfterShadow(r,A,w,R,O,ot,H)}}}else if(B.visible){const q=x(A,B,y,T);A.onBeforeShadow(r,A,w,R,O,q,null),r.renderBufferDirect(R,null,O,q,A,null),A.onAfterShadow(r,A,w,R,O,q,null)}}const V=A.children;for(let O=0,B=V.length;O<B;O++)v(V[O],w,R,y,T)}function E(A){A.target.removeEventListener("dispose",E);for(const R in l){const y=l[R],T=A.target.uuid;T in y&&(y[T].dispose(),delete y[T])}}}const Zx={[sl]:al,[ol]:hl,[ll]:ul,[Cr]:cl,[al]:sl,[hl]:ol,[ul]:ll,[cl]:Cr};function jx(r,t){function e(){let I=!1;const tt=new Kt;let rt=null;const dt=new Kt(0,0,0,0);return{setMask:function(Z){rt!==Z&&!I&&(r.colorMask(Z,Z,Z,Z),rt=Z)},setLocked:function(Z){I=Z},setClear:function(Z,K,gt,Ut,ae){ae===!0&&(Z*=Ut,K*=Ut,gt*=Ut),tt.set(Z,K,gt,Ut),dt.equals(tt)===!1&&(r.clearColor(Z,K,gt,Ut),dt.copy(tt))},reset:function(){I=!1,rt=null,dt.set(-1,0,0,0)}}}function n(){let I=!1,tt=!1,rt=null,dt=null,Z=null;return{setReversed:function(K){if(tt!==K){const gt=t.get("EXT_clip_control");K?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),tt=K;const Ut=Z;Z=null,this.setClear(Ut)}},getReversed:function(){return tt},setTest:function(K){K?nt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(K){rt!==K&&!I&&(r.depthMask(K),rt=K)},setFunc:function(K){if(tt&&(K=Zx[K]),dt!==K){switch(K){case sl:r.depthFunc(r.NEVER);break;case al:r.depthFunc(r.ALWAYS);break;case ol:r.depthFunc(r.LESS);break;case Cr:r.depthFunc(r.LEQUAL);break;case ll:r.depthFunc(r.EQUAL);break;case cl:r.depthFunc(r.GEQUAL);break;case hl:r.depthFunc(r.GREATER);break;case ul:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=K}},setLocked:function(K){I=K},setClear:function(K){Z!==K&&(tt&&(K=1-K),r.clearDepth(K),Z=K)},reset:function(){I=!1,rt=null,dt=null,Z=null,tt=!1}}}function i(){let I=!1,tt=null,rt=null,dt=null,Z=null,K=null,gt=null,Ut=null,ae=null;return{setTest:function($t){I||($t?nt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function($t){tt!==$t&&!I&&(r.stencilMask($t),tt=$t)},setFunc:function($t,zn,Pn){(rt!==$t||dt!==zn||Z!==Pn)&&(r.stencilFunc($t,zn,Pn),rt=$t,dt=zn,Z=Pn)},setOp:function($t,zn,Pn){(K!==$t||gt!==zn||Ut!==Pn)&&(r.stencilOp($t,zn,Pn),K=$t,gt=zn,Ut=Pn)},setLocked:function($t){I=$t},setClear:function($t){ae!==$t&&(r.clearStencil($t),ae=$t)},reset:function(){I=!1,tt=null,rt=null,dt=null,Z=null,K=null,gt=null,Ut=null,ae=null}}}const s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,x=null,v=null,E=null,A=null,w=new Rt(0,0,0),R=0,y=!1,T=null,P=null,V=null,O=null,B=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let it=null,ot={};const _t=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),te=new Kt().fromArray(_t),Vt=new Kt().fromArray(Dt);function W(I,tt,rt,dt){const Z=new Uint8Array(4),K=r.createTexture();r.bindTexture(I,K),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let gt=0;gt<rt;gt++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,Z):r.texImage2D(tt+gt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Z);return K}const lt={};lt[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),lt[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),lt[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(r.DEPTH_TEST),a.setFunc(Cr),qt(!1),St(sh),nt(r.CULL_FACE),se(Zn);function nt(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function wt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function At(I,tt){return u[I]!==tt?(r.bindFramebuffer(I,tt),u[I]=tt,I===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),I===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function It(I,tt){let rt=d,dt=!1;if(I){rt=f.get(tt),rt===void 0&&(rt=[],f.set(tt,rt));const Z=I.textures;if(rt.length!==Z.length||rt[0]!==r.COLOR_ATTACHMENT0){for(let K=0,gt=Z.length;K<gt;K++)rt[K]=r.COLOR_ATTACHMENT0+K;rt.length=Z.length,dt=!0}}else rt[0]!==r.BACK&&(rt[0]=r.BACK,dt=!0);dt&&r.drawBuffers(rt)}function ve(I){return _!==I?(r.useProgram(I),_=I,!0):!1}const Wt={[ki]:r.FUNC_ADD,[ip]:r.FUNC_SUBTRACT,[rp]:r.FUNC_REVERSE_SUBTRACT};Wt[sp]=r.MIN,Wt[ap]=r.MAX;const L={[op]:r.ZERO,[lp]:r.ONE,[cp]:r.SRC_COLOR,[il]:r.SRC_ALPHA,[mp]:r.SRC_ALPHA_SATURATE,[dp]:r.DST_COLOR,[up]:r.DST_ALPHA,[hp]:r.ONE_MINUS_SRC_COLOR,[rl]:r.ONE_MINUS_SRC_ALPHA,[pp]:r.ONE_MINUS_DST_COLOR,[fp]:r.ONE_MINUS_DST_ALPHA,[gp]:r.CONSTANT_COLOR,[_p]:r.ONE_MINUS_CONSTANT_COLOR,[vp]:r.CONSTANT_ALPHA,[xp]:r.ONE_MINUS_CONSTANT_ALPHA};function se(I,tt,rt,dt,Z,K,gt,Ut,ae,$t){if(I===Zn){g===!0&&(wt(r.BLEND),g=!1);return}if(g===!1&&(nt(r.BLEND),g=!0),I!==np){if(I!==m||$t!==y){if((p!==ki||v!==ki)&&(r.blendEquation(r.FUNC_ADD),p=ki,v=ki),$t)switch(I){case Sr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ze:r.blendFunc(r.ONE,r.ONE);break;case ah:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case oh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ze:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ah:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,x=null,E=null,A=null,w.set(0,0,0),R=0,m=I,y=$t}return}Z=Z||tt,K=K||rt,gt=gt||dt,(tt!==p||Z!==v)&&(r.blendEquationSeparate(Wt[tt],Wt[Z]),p=tt,v=Z),(rt!==S||dt!==x||K!==E||gt!==A)&&(r.blendFuncSeparate(L[rt],L[dt],L[K],L[gt]),S=rt,x=dt,E=K,A=gt),(Ut.equals(w)===!1||ae!==R)&&(r.blendColor(Ut.r,Ut.g,Ut.b,ae),w.copy(Ut),R=ae),m=I,y=!1}function bt(I,tt){I.side===bn?wt(r.CULL_FACE):nt(r.CULL_FACE);let rt=I.side===Ye;tt&&(rt=!rt),qt(rt),I.blending===Sr&&I.transparent===!1?se(Zn):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const dt=I.stencilWrite;o.setTest(dt),dt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(I){T!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),T=I)}function St(I){I!==Qd?(nt(r.CULL_FACE),I!==P&&(I===sh?r.cullFace(r.BACK):I===tp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),P=I}function le(I){I!==V&&(G&&r.lineWidth(I),V=I)}function pt(I,tt,rt){I?(nt(r.POLYGON_OFFSET_FILL),(O!==tt||B!==rt)&&(r.polygonOffset(tt,rt),O=tt,B=rt)):wt(r.POLYGON_OFFSET_FILL)}function Bt(I){I?nt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Ce(I){I===void 0&&(I=r.TEXTURE0+q-1),it!==I&&(r.activeTexture(I),it=I)}function xe(I,tt,rt){rt===void 0&&(it===null?rt=r.TEXTURE0+q-1:rt=it);let dt=ot[rt];dt===void 0&&(dt={type:void 0,texture:void 0},ot[rt]=dt),(dt.type!==I||dt.texture!==tt)&&(it!==rt&&(r.activeTexture(rt),it=rt),r.bindTexture(I,tt||lt[I]),dt.type=I,dt.texture=tt)}function C(){const I=ot[it];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{r.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{r.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{r.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(I){te.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function Pt(I){Vt.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),Vt.copy(I))}function yt(I,tt){let rt=l.get(tt);rt===void 0&&(rt=new WeakMap,l.set(tt,rt));let dt=rt.get(I);dt===void 0&&(dt=r.getUniformBlockIndex(tt,I.name),rt.set(I,dt))}function ct(I,tt){const dt=l.get(tt).get(I);c.get(tt)!==dt&&(r.uniformBlockBinding(tt,dt,I.__bindingPointIndex),c.set(tt,dt))}function Nt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},it=null,ot={},u={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,S=null,x=null,v=null,E=null,A=null,w=new Rt(0,0,0),R=0,y=!1,T=null,P=null,V=null,O=null,B=null,te.set(0,0,r.canvas.width,r.canvas.height),Vt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:nt,disable:wt,bindFramebuffer:At,drawBuffers:It,useProgram:ve,setBlending:se,setMaterial:bt,setFlipSided:qt,setCullFace:St,setLineWidth:le,setPolygonOffset:pt,setScissorTest:Bt,activeTexture:Ce,bindTexture:xe,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:xt,texImage3D:Q,updateUBOMapping:yt,uniformBlockBinding:ct,texStorage2D:et,texStorage3D:vt,texSubImage2D:Y,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Mt,scissor:ut,viewport:Pt,reset:Nt}}function Qx(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return d?new OffscreenCanvas(C,M):xs("canvas")}function g(C,M,F){let Y=1;const J=xe(C);if((J.width>F||J.height>F)&&(Y=F/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*J.width),Mt=Math.floor(Y*J.height);u===void 0&&(u=_(X,Mt));const et=M?_(X,Mt):u;return et.width=X,et.height=Mt,et.getContext("2d").drawImage(C,0,0,X,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Mt+")."),et}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(C,M,F,Y,J=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=M;if(M===r.RED&&(F===r.FLOAT&&(X=r.R32F),F===r.HALF_FLOAT&&(X=r.R16F),F===r.UNSIGNED_BYTE&&(X=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.R8UI),F===r.UNSIGNED_SHORT&&(X=r.R16UI),F===r.UNSIGNED_INT&&(X=r.R32UI),F===r.BYTE&&(X=r.R8I),F===r.SHORT&&(X=r.R16I),F===r.INT&&(X=r.R32I)),M===r.RG&&(F===r.FLOAT&&(X=r.RG32F),F===r.HALF_FLOAT&&(X=r.RG16F),F===r.UNSIGNED_BYTE&&(X=r.RG8)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RG8UI),F===r.UNSIGNED_SHORT&&(X=r.RG16UI),F===r.UNSIGNED_INT&&(X=r.RG32UI),F===r.BYTE&&(X=r.RG8I),F===r.SHORT&&(X=r.RG16I),F===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGB8UI),F===r.UNSIGNED_SHORT&&(X=r.RGB16UI),F===r.UNSIGNED_INT&&(X=r.RGB32UI),F===r.BYTE&&(X=r.RGB8I),F===r.SHORT&&(X=r.RGB16I),F===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),F===r.UNSIGNED_INT&&(X=r.RGBA32UI),F===r.BYTE&&(X=r.RGBA8I),F===r.SHORT&&(X=r.RGBA16I),F===r.INT&&(X=r.RGBA32I)),M===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),M===r.RGBA){const Mt=J?Pa:Xt.getTransfer(Y);F===r.FLOAT&&(X=r.RGBA32F),F===r.HALF_FLOAT&&(X=r.RGBA16F),F===r.UNSIGNED_BYTE&&(X=Mt===Jt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(C,M){let F;return C?M===null||M===Ki||M===gs?F=r.DEPTH24_STENCIL8:M===wn?F=r.DEPTH32F_STENCIL8:M===ms&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ki||M===gs?F=r.DEPTH_COMPONENT24:M===wn?F=r.DEPTH_COMPONENT32F:M===ms&&(F=r.DEPTH_COMPONENT16),F}function E(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==cn&&C.minFilter!==Un?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&h.delete(M)}function w(C){const M=C.target;M.removeEventListener("dispose",w),T(M)}function R(C){const M=n.get(C);if(M.__webglInit===void 0)return;const F=C.source,Y=f.get(F);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(Y).length===0&&f.delete(F)}n.remove(C)}function y(C){const M=n.get(C);r.deleteTexture(M.__webglTexture);const F=C.source,Y=f.get(F);delete Y[M.__cacheKey],a.memory.textures--}function T(C){const M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)r.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else r.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)r.deleteFramebuffer(M.__webglFramebuffer[Y]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let Y=0,J=F.length;Y<J;Y++){const X=n.get(F[Y]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[Y])}n.remove(C)}let P=0;function V(){P=0}function O(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function B(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function q(C,M){const F=n.get(C);if(C.isVideoTexture&&Bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){const Y=C.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,C,M);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function G(C,M){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){lt(F,C,M);return}e.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function $(C,M){const F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){lt(F,C,M);return}e.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function H(C,M){const F=n.get(C);if(C.version>0&&F.__version!==C.version){nt(F,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}const it={[pl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[ml]:r.MIRRORED_REPEAT},ot={[cn]:r.NEAREST,[Tp]:r.NEAREST_MIPMAP_NEAREST,[Bs]:r.NEAREST_MIPMAP_LINEAR,[Un]:r.LINEAR,[ao]:r.LINEAR_MIPMAP_NEAREST,[Hi]:r.LINEAR_MIPMAP_LINEAR},_t={[Cp]:r.NEVER,[Up]:r.ALWAYS,[Rp]:r.LESS,[vf]:r.LEQUAL,[Pp]:r.EQUAL,[Ip]:r.GEQUAL,[Dp]:r.GREATER,[Lp]:r.NOTEQUAL};function Dt(C,M){if(M.type===wn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Un||M.magFilter===ao||M.magFilter===Bs||M.magFilter===Hi||M.minFilter===Un||M.minFilter===ao||M.minFilter===Bs||M.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,it[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,it[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,it[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ot[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,_t[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==Bs&&M.minFilter!==Hi||M.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function te(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const Y=M.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const X=B(M);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&y(M)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return F}function Vt(C,M,F){return Math.floor(Math.floor(C/F)/M)}function W(C,M,F,Y){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,F,Y,M.data);else{X.sort((Q,ut)=>Q.start-ut.start);let Mt=0;for(let Q=1;Q<X.length;Q++){const ut=X[Mt],Pt=X[Q],yt=ut.start+ut.count,ct=Vt(Pt.start,M.width,4),Nt=Vt(ut.start,M.width,4);Pt.start<=yt+1&&ct===Nt&&Vt(Pt.start+Pt.count-1,M.width,4)===ct?ut.count=Math.max(ut.count,Pt.start+Pt.count-ut.start):(++Mt,X[Mt]=Pt)}X.length=Mt+1;const et=r.getParameter(r.UNPACK_ROW_LENGTH),vt=r.getParameter(r.UNPACK_SKIP_PIXELS),xt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Q=0,ut=X.length;Q<ut;Q++){const Pt=X[Q],yt=Math.floor(Pt.start/4),ct=Math.ceil(Pt.count/4),Nt=yt%M.width,I=Math.floor(yt/M.width),tt=ct,rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Nt),r.pixelStorei(r.UNPACK_SKIP_ROWS,I),e.texSubImage2D(r.TEXTURE_2D,0,Nt,I,tt,rt,F,Y,M.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,et),r.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,xt)}}function lt(C,M,F){let Y=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=r.TEXTURE_3D);const J=te(C,M),X=M.source;e.bindTexture(Y,C.__webglTexture,r.TEXTURE0+F);const Mt=n.get(X);if(X.version!==Mt.__version||J===!0){e.activeTexture(r.TEXTURE0+F);const et=Xt.getPrimaries(Xt.workingColorSpace),vt=M.colorSpace===ui?null:Xt.getPrimaries(M.colorSpace),xt=M.colorSpace===ui||et===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Q=g(M.image,!1,i.maxTextureSize);Q=Ce(M,Q);const ut=s.convert(M.format,M.colorSpace),Pt=s.convert(M.type);let yt=x(M.internalFormat,ut,Pt,M.colorSpace,M.isVideoTexture);Dt(Y,M);let ct;const Nt=M.mipmaps,I=M.isVideoTexture!==!0,tt=Mt.__version===void 0||J===!0,rt=X.dataReady,dt=E(M,Q);if(M.isDepthTexture)yt=v(M.format===vs,M.type),tt&&(I?e.texStorage2D(r.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(r.TEXTURE_2D,0,yt,Q.width,Q.height,0,ut,Pt,null));else if(M.isDataTexture)if(Nt.length>0){I&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,yt,Nt[0].width,Nt[0].height);for(let Z=0,K=Nt.length;Z<K;Z++)ct=Nt[Z],I?rt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ct.width,ct.height,ut,Pt,ct.data):e.texImage2D(r.TEXTURE_2D,Z,yt,ct.width,ct.height,0,ut,Pt,ct.data);M.generateMipmaps=!1}else I?(tt&&e.texStorage2D(r.TEXTURE_2D,dt,yt,Q.width,Q.height),rt&&W(M,Q,ut,Pt)):e.texImage2D(r.TEXTURE_2D,0,yt,Q.width,Q.height,0,ut,Pt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){I&&tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,yt,Nt[0].width,Nt[0].height,Q.depth);for(let Z=0,K=Nt.length;Z<K;Z++)if(ct=Nt[Z],M.format!==vn)if(ut!==null)if(I){if(rt)if(M.layerUpdates.size>0){const gt=nu(ct.width,ct.height,M.format,M.type);for(const Ut of M.layerUpdates){const ae=ct.data.subarray(Ut*gt/ct.data.BYTES_PER_ELEMENT,(Ut+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,Ut,ct.width,ct.height,1,ut,ae)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,Q.depth,ut,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Z,yt,ct.width,ct.height,Q.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,Q.depth,ut,Pt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Z,yt,ct.width,ct.height,Q.depth,0,ut,Pt,ct.data)}else{I&&tt&&e.texStorage2D(r.TEXTURE_2D,dt,yt,Nt[0].width,Nt[0].height);for(let Z=0,K=Nt.length;Z<K;Z++)ct=Nt[Z],M.format!==vn?ut!==null?I?rt&&e.compressedTexSubImage2D(r.TEXTURE_2D,Z,0,0,ct.width,ct.height,ut,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,Z,yt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ct.width,ct.height,ut,Pt,ct.data):e.texImage2D(r.TEXTURE_2D,Z,yt,ct.width,ct.height,0,ut,Pt,ct.data)}else if(M.isDataArrayTexture)if(I){if(tt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,yt,Q.width,Q.height,Q.depth),rt)if(M.layerUpdates.size>0){const Z=nu(Q.width,Q.height,M.format,M.type);for(const K of M.layerUpdates){const gt=Q.data.subarray(K*Z/Q.data.BYTES_PER_ELEMENT,(K+1)*Z/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,ut,Pt,gt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Pt,Q.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,ut,Pt,Q.data);else if(M.isData3DTexture)I?(tt&&e.texStorage3D(r.TEXTURE_3D,dt,yt,Q.width,Q.height,Q.depth),rt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Pt,Q.data)):e.texImage3D(r.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,ut,Pt,Q.data);else if(M.isFramebufferTexture){if(tt)if(I)e.texStorage2D(r.TEXTURE_2D,dt,yt,Q.width,Q.height);else{let Z=Q.width,K=Q.height;for(let gt=0;gt<dt;gt++)e.texImage2D(r.TEXTURE_2D,gt,yt,Z,K,0,ut,Pt,null),Z>>=1,K>>=1}}else if(Nt.length>0){if(I&&tt){const Z=xe(Nt[0]);e.texStorage2D(r.TEXTURE_2D,dt,yt,Z.width,Z.height)}for(let Z=0,K=Nt.length;Z<K;Z++)ct=Nt[Z],I?rt&&e.texSubImage2D(r.TEXTURE_2D,Z,0,0,ut,Pt,ct):e.texImage2D(r.TEXTURE_2D,Z,yt,ut,Pt,ct);M.generateMipmaps=!1}else if(I){if(tt){const Z=xe(Q);e.texStorage2D(r.TEXTURE_2D,dt,yt,Z.width,Z.height)}rt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Pt,Q)}else e.texImage2D(r.TEXTURE_2D,0,yt,ut,Pt,Q);m(M)&&p(Y),Mt.__version=X.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function nt(C,M,F){if(M.image.length!==6)return;const Y=te(C,M),J=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+F);const X=n.get(J);if(J.version!==X.__version||Y===!0){e.activeTexture(r.TEXTURE0+F);const Mt=Xt.getPrimaries(Xt.workingColorSpace),et=M.colorSpace===ui?null:Xt.getPrimaries(M.colorSpace),vt=M.colorSpace===ui||Mt===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,ut=[];for(let K=0;K<6;K++)!xt&&!Q?ut[K]=g(M.image[K],!0,i.maxCubemapSize):ut[K]=Q?M.image[K].image:M.image[K],ut[K]=Ce(M,ut[K]);const Pt=ut[0],yt=s.convert(M.format,M.colorSpace),ct=s.convert(M.type),Nt=x(M.internalFormat,yt,ct,M.colorSpace),I=M.isVideoTexture!==!0,tt=X.__version===void 0||Y===!0,rt=J.dataReady;let dt=E(M,Pt);Dt(r.TEXTURE_CUBE_MAP,M);let Z;if(xt){I&&tt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Nt,Pt.width,Pt.height);for(let K=0;K<6;K++){Z=ut[K].mipmaps;for(let gt=0;gt<Z.length;gt++){const Ut=Z[gt];M.format!==vn?yt!==null?I?rt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,yt,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,0,0,Ut.width,Ut.height,yt,ct,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt,Nt,Ut.width,Ut.height,0,yt,ct,Ut.data)}}}else{if(Z=M.mipmaps,I&&tt){Z.length>0&&dt++;const K=xe(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Nt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ut[K].width,ut[K].height,yt,ct,ut[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,ut[K].width,ut[K].height,0,yt,ct,ut[K].data);for(let gt=0;gt<Z.length;gt++){const ae=Z[gt].image[K].image;I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,ae.width,ae.height,yt,ct,ae.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Nt,ae.width,ae.height,0,yt,ct,ae.data)}}else{I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,ct,ut[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Nt,yt,ct,ut[K]);for(let gt=0;gt<Z.length;gt++){const Ut=Z[gt];I?rt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,0,0,yt,ct,Ut.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,gt+1,Nt,yt,ct,Ut.image[K])}}}m(M)&&p(r.TEXTURE_CUBE_MAP),X.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function wt(C,M,F,Y,J,X){const Mt=s.convert(F.format,F.colorSpace),et=s.convert(F.type),vt=x(F.internalFormat,Mt,et,F.colorSpace),xt=n.get(M),Q=n.get(F);if(Q.__renderTarget=M,!xt.__hasExternalTextures){const ut=Math.max(1,M.width>>X),Pt=Math.max(1,M.height>>X);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,X,vt,ut,Pt,M.depth,0,Mt,et,null):e.texImage2D(J,X,vt,ut,Pt,0,Mt,et,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),pt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,J,Q.__webglTexture,0,le(M)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,J,Q.__webglTexture,X),e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(C,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,X=v(M.stencilBuffer,J),Mt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=le(M);pt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,et,X,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,et,X,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,X,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,C)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const X=Y[J],Mt=s.convert(X.format,X.colorSpace),et=s.convert(X.type),vt=x(X.internalFormat,Mt,et,X.colorSpace),xt=le(M);F&&pt(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,M.width,M.height):pt(M)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,vt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,vt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function It(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(M.depthTexture);Y.__renderTarget=M,(!Y.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const J=Y.__webglTexture,X=le(M);if(M.depthTexture.format===_s)pt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(M.depthTexture.format===vs)pt(M)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ve(C){const M=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const Y=C.texture.mipmaps;Y&&Y.length>0?It(M.__webglFramebuffer[0],C):It(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=r.createRenderbuffer(),At(M.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),At(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,X)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Wt(C,M,F){const Y=n.get(C);M!==void 0&&wt(Y.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ve(C)}function L(C){const M=C.texture,F=n.get(C),Y=n.get(M);C.addEventListener("dispose",w);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=M.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[et]=[];for(let vt=0;vt<M.mipmaps.length;vt++)F.__webglFramebuffer[et][vt]=r.createFramebuffer()}else F.__webglFramebuffer[et]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let et=0;et<M.mipmaps.length;et++)F.__webglFramebuffer[et]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let et=0,vt=J.length;et<vt;et++){const xt=n.get(J[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let et=0;et<J.length;et++){const vt=J[et];F.__webglColorRenderbuffer[et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[et]);const xt=s.convert(vt.format,vt.colorSpace),Q=s.convert(vt.type),ut=x(vt.internalFormat,xt,Q,vt.colorSpace,C.isXRRenderTarget===!0),Pt=le(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,ut,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,F.__webglColorRenderbuffer[et])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),At(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,M);for(let et=0;et<6;et++)if(M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)wt(F.__webglFramebuffer[et][vt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,vt);else wt(F.__webglFramebuffer[et],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(M)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let et=0,vt=J.length;et<vt;et++){const xt=J[et],Q=n.get(xt);let ut=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),Dt(ut,xt),wt(F.__webglFramebuffer,C,xt,r.COLOR_ATTACHMENT0+et,ut,0),m(xt)&&p(ut)}e.unbindTexture()}else{let et=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(et,Y.__webglTexture),Dt(et,M),M.mipmaps&&M.mipmaps.length>0)for(let vt=0;vt<M.mipmaps.length;vt++)wt(F.__webglFramebuffer[vt],C,M,r.COLOR_ATTACHMENT0,et,vt);else wt(F.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,et,0);m(M)&&p(et),e.unbindTexture()}C.depthBuffer&&ve(C)}function se(C){const M=C.textures;for(let F=0,Y=M.length;F<Y;F++){const J=M[F];if(m(J)){const X=S(C),Mt=n.get(J).__webglTexture;e.bindTexture(X,Mt),p(X),e.unbindTexture()}}}const bt=[],qt=[];function St(C){if(C.samples>0){if(pt(C)===!1){const M=C.textures,F=C.width,Y=C.height;let J=r.COLOR_BUFFER_BIT;const X=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(C),et=M.length>1;if(et)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const vt=C.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const Q=n.get(M[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,F,Y,0,0,F,Y,J,r.NEAREST),c===!0&&(bt.length=0,qt.length=0,bt.push(r.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(X),qt.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),et)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);const Q=n.get(M[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,Q,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function le(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Bt(C){const M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Ce(C,M){const F=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Dr&&F!==ui&&(Xt.getTransfer(F)===Jt?(Y!==vn||J!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=V,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=Wt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=pt}function ty(r,t){function e(n,i=ui){let s;const a=Xt.getTransfer(i);if(n===On)return r.UNSIGNED_BYTE;if(n===fc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ff)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===hf)return r.BYTE;if(n===uf)return r.SHORT;if(n===ms)return r.UNSIGNED_SHORT;if(n===uc)return r.INT;if(n===Ki)return r.UNSIGNED_INT;if(n===wn)return r.FLOAT;if(n===jn)return r.HALF_FLOAT;if(n===df)return r.ALPHA;if(n===pf)return r.RGB;if(n===vn)return r.RGBA;if(n===_s)return r.DEPTH_COMPONENT;if(n===vs)return r.DEPTH_STENCIL;if(n===pc)return r.RED;if(n===mc)return r.RED_INTEGER;if(n===mf)return r.RG;if(n===gc)return r.RG_INTEGER;if(n===_c)return r.RGBA_INTEGER;if(n===xa||n===ya||n===Ma||n===Sa)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===_l||n===vl||n===xl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Ml||n===Sl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yl||n===Ml)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Sl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===bl||n===El||n===wl||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Ll||n===Il||n===Ul||n===Nl||n===Fl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===El)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Dl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Il)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Ol||n===Bl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ta)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gf||n===kl||n===zl||n===Vl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Xf extends Ie{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const ey=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
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

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xf(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ee({vertexShader:ey,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends zr{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const g=new iy,m={},p=e.getContextAttributes();let S=null,x=null;const v=[],E=[],A=new at;let w=null;const R=new We;R.viewport=new Kt;const y=new We;y.viewport=new Kt;const T=[R,y],P=new mg;let V=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let lt=v[W];return lt===void 0&&(lt=new Ro,v[W]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(W){let lt=v[W];return lt===void 0&&(lt=new Ro,v[W]=lt),lt.getGripSpace()},this.getHand=function(W){let lt=v[W];return lt===void 0&&(lt=new Ro,v[W]=lt),lt.getHandSpace()};function B(W){const lt=E.indexOf(W.inputSource);if(lt===-1)return;const nt=v[lt];nt!==void 0&&(nt.update(W.inputSource,W.frame,l||a),nt.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",G);for(let W=0;W<v.length;W++){const lt=E[W];lt!==null&&(E[W]=null,v[W].disconnect(lt))}V=null,O=null,g.reset();for(const W in m)delete m[W];t.setRenderTarget(S),d=null,f=null,u=null,i=null,x=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(i,e)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,wt=null,At=null;p.depth&&(At=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?vs:_s,wt=p.stencil?gs:Ki);const It={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};f=u.createProjectionLayer(It),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Cn(f.textureWidth,f.textureHeight,{format:vn,type:On,depthTexture:new Lf(f.textureWidth,f.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Cn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Vt.setContext(i),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let lt=0;lt<W.removed.length;lt++){const nt=W.removed[lt],wt=E.indexOf(nt);wt>=0&&(E[wt]=null,v[wt].disconnect(nt))}for(let lt=0;lt<W.added.length;lt++){const nt=W.added[lt];let wt=E.indexOf(nt);if(wt===-1){for(let It=0;It<v.length;It++)if(It>=E.length){E.push(nt),wt=It;break}else if(E[It]===null){E[It]=nt,wt=It;break}if(wt===-1)break}const At=v[wt];At&&At.connect(nt)}}const $=new D,H=new D;function it(W,lt,nt){$.setFromMatrixPosition(lt.matrixWorld),H.setFromMatrixPosition(nt.matrixWorld);const wt=$.distanceTo(H),At=lt.projectionMatrix.elements,It=nt.projectionMatrix.elements,ve=At[14]/(At[10]-1),Wt=At[14]/(At[10]+1),L=(At[9]+1)/At[5],se=(At[9]-1)/At[5],bt=(At[8]-1)/At[0],qt=(It[8]+1)/It[0],St=ve*bt,le=ve*qt,pt=wt/(-bt+qt),Bt=pt*-bt;if(lt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Bt),W.translateZ(pt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),At[10]===-1)W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ce=ve+pt,xe=Wt+pt,C=St-Bt,M=le+(wt-Bt),F=L*Wt/xe*Ce,Y=se*Wt/xe*Ce;W.projectionMatrix.makePerspective(C,M,F,Y,Ce,xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ot(W,lt){lt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(lt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let lt=W.near,nt=W.far;g.texture!==null&&(g.depthNear>0&&(lt=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),P.near=y.near=R.near=lt,P.far=y.far=R.far=nt,(V!==P.near||O!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),V=P.near,O=P.far),P.layers.mask=W.layers.mask|6,R.layers.mask=P.layers.mask&3,y.layers.mask=P.layers.mask&5;const wt=W.parent,At=P.cameras;ot(P,wt);for(let It=0;It<At.length;It++)ot(At[It],wt);At.length===2?it(P,R,y):P.projectionMatrix.copy(R.projectionMatrix),_t(W,P,wt)};function _t(W,lt,nt){nt===null?W.matrix.copy(lt.matrixWorld):(W.matrix.copy(nt.matrixWorld),W.matrix.invert(),W.matrix.multiply(lt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(lt.projectionMatrix),W.projectionMatrixInverse.copy(lt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(W){c=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(W){return m[W]};let Dt=null;function te(W,lt){if(h=lt.getViewerPose(l||a),_=lt,h!==null){const nt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let wt=!1;nt.length!==P.cameras.length&&(P.cameras.length=0,wt=!0);for(let Wt=0;Wt<nt.length;Wt++){const L=nt[Wt];let se=null;if(d!==null)se=d.getViewport(L);else{const qt=u.getViewSubImage(f,L);se=qt.viewport,Wt===0&&(t.setRenderTargetTextures(x,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(x))}let bt=T[Wt];bt===void 0&&(bt=new We,bt.layers.enable(Wt),bt.viewport=new Kt,T[Wt]=bt),bt.matrix.fromArray(L.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(L.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(se.x,se.y,se.width,se.height),Wt===0&&(P.matrix.copy(bt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),wt===!0&&P.cameras.push(bt)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Wt=u.getDepthInformation(nt[0]);Wt&&Wt.isValid&&Wt.texture&&g.init(Wt,i.renderState)}if(At&&At.includes("camera-access")&&(t.state.unbindTexture(),u))for(let Wt=0;Wt<nt.length;Wt++){const L=nt[Wt].camera;if(L){let se=m[L];se||(se=new Xf,m[L]=se);const bt=u.getCameraImage(L);se.sourceTexture=bt}}}for(let nt=0;nt<v.length;nt++){const wt=E[nt],At=v[nt];wt!==null&&At!==void 0&&At.update(wt,lt,l||a)}Dt&&Dt(W,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const Vt=new zf;Vt.setAnimationLoop(te),this.setAnimationLoop=function(W){Dt=W},this.dispose=function(){}}}const Li=new Bn,sy=new zt;function ay(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ye&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ye&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),x=S.envMap,v=S.envMapRotation;x&&(m.envMap.value=x,Li.copy(v),Li.x*=-1,Li.y*=-1,Li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),m.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(Li)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ye&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function oy(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const v=x.program;n.uniformBlockBinding(S,v)}function l(S,x){let v=i[S.id];v===void 0&&(_(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(S,E);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const x=u();S.__bindingPointIndex=x;const v=r.createBuffer(),E=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,E,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],v=S.uniforms,E=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let A=0,w=v.length;A<w;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,T=R.length;y<T;y++){const P=R[y];if(d(P,A,y,E)===!0){const V=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let q=0;q<O.length;q++){const G=O[q],$=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,V+B,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,B),B+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(S,x,v,E){const A=S.value,w=x+"_"+v;if(E[w]===void 0)return typeof A=="number"||typeof A=="boolean"?E[w]=A:E[w]=A.clone(),!0;{const R=E[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(S){const x=S.uniforms;let v=0;const E=16;for(let w=0,R=x.length;w<R;w++){const y=Array.isArray(x[w])?x[w]:[x[w]];for(let T=0,P=y.length;T<P;T++){const V=y[T],O=Array.isArray(V.value)?V.value:[V.value];for(let B=0,q=O.length;B<q;B++){const G=O[B],$=g(G),H=v%E,it=H%$.boundary,ot=H+it;v+=it,ot!==0&&E-ot<$.storage&&(v+=E-ot),V.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=$.storage}}}const A=v%E;return A>0&&(v+=E-A),S.__size=v,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class ly{constructor(t={}){const{canvas:e=Zp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const S=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Ge;let A=0,w=0,R=null,y=-1,T=null;const P=new Kt,V=new Kt;let O=null;const B=new Rt(0);let q=0,G=e.width,$=e.height,H=1,it=null,ot=null;const _t=new Kt(0,0,G,$),Dt=new Kt(0,0,G,$);let te=!1;const Vt=new Sc;let W=!1,lt=!1;const nt=new zt,wt=new D,At=new Kt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function Wt(){return R===null?H:1}let L=n;function se(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",Z,!1),L===null){const U="webgl2";if(L=se(U,b),L===null)throw se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let bt,qt,St,le,pt,Bt,Ce,xe,C,M,F,Y,J,X,Mt,et,vt,xt,Q,ut,Pt,yt,ct,Nt;function I(){bt=new vv(L),bt.init(),yt=new ty(L,bt),qt=new uv(L,bt,t,yt),St=new jx(L,bt),qt.reversedDepthBuffer&&f&&St.buffers.depth.setReversed(!0),le=new Mv(L),pt=new kx,Bt=new Qx(L,bt,St,pt,qt,yt,le),Ce=new dv(v),xe=new _v(v),C=new Ag(L),ct=new cv(L,C),M=new xv(L,C,le,ct),F=new Tv(L,M,C,le),Q=new Sv(L,qt,Bt),et=new fv(pt),Y=new Bx(v,Ce,xe,bt,qt,ct,et),J=new ay(v,pt),X=new Vx,Mt=new qx(bt),xt=new lv(v,Ce,xe,St,F,d,c),vt=new Jx(v,F,qt),Nt=new oy(L,le,qt,St),ut=new hv(L,bt,le),Pt=new yv(L,bt,le),le.programs=Y.programs,v.capabilities=qt,v.extensions=bt,v.properties=pt,v.renderLists=X,v.shadowMap=vt,v.state=St,v.info=le}I();const tt=new ry(v,L);this.xr=tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(G,$,!1))},this.getSize=function(b){return b.set(G,$)},this.setSize=function(b,U,k=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,$=U,e.width=Math.floor(b*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(b,U,k){G=b,$=U,H=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,U,k,z){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,U,k,z),St.viewport(P.copy(_t).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Dt)},this.setScissor=function(b,U,k,z){b.isVector4?Dt.set(b.x,b.y,b.z,b.w):Dt.set(b,U,k,z),St.scissor(V.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(b){St.setScissorTest(te=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){ot=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,k=!0){let z=0;if(b){let N=!1;if(R!==null){const j=R.texture.format;N=j===_c||j===gc||j===mc}if(N){const j=R.texture.type,ht=j===On||j===Ki||j===ms||j===gs||j===fc||j===dc,mt=xt.getClearColor(),ft=xt.getClearAlpha(),Ct=mt.r,Lt=mt.g,Tt=mt.b;ht?(_[0]=Ct,_[1]=Lt,_[2]=Tt,_[3]=ft,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Ct,g[1]=Lt,g[2]=Tt,g[3]=ft,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}U&&(z|=L.DEPTH_BUFFER_BIT),k&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),X.dispose(),Mt.dispose(),pt.dispose(),Ce.dispose(),xe.dispose(),F.dispose(),ct.dispose(),Nt.dispose(),Y.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Pn),tt.removeEventListener("sessionend",jc),Ei.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=le.autoReset,U=vt.enabled,k=vt.autoUpdate,z=vt.needsUpdate,N=vt.type;I(),le.autoReset=b,vt.enabled=U,vt.autoUpdate=k,vt.needsUpdate=z,vt.type=N}function Z(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function K(b){const U=b.target;U.removeEventListener("dispose",K),gt(U)}function gt(b){Ut(b),pt.remove(b)}function Ut(b){const U=pt.get(b).programs;U!==void 0&&(U.forEach(function(k){Y.releaseProgram(k)}),b.isShaderMaterial&&Y.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,z,N,j){U===null&&(U=It);const ht=N.isMesh&&N.matrixWorld.determinant()<0,mt=Wd(b,U,k,z,N);St.setMaterial(z,ht);let ft=k.index,Ct=1;if(z.wireframe===!0){if(ft=M.getWireframeAttribute(k),ft===void 0)return;Ct=2}const Lt=k.drawRange,Tt=k.attributes.position;let Ht=Lt.start*Ct,jt=(Lt.start+Lt.count)*Ct;j!==null&&(Ht=Math.max(Ht,j.start*Ct),jt=Math.min(jt,(j.start+j.count)*Ct)),ft!==null?(Ht=Math.max(Ht,0),jt=Math.min(jt,ft.count)):Tt!=null&&(Ht=Math.max(Ht,0),jt=Math.min(jt,Tt.count));const me=jt-Ht;if(me<0||me===1/0)return;ct.setup(N,z,mt,k,ft);let oe,ee=ut;if(ft!==null&&(oe=C.get(ft),ee=Pt,ee.setIndex(oe)),N.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*Wt()),ee.setMode(L.LINES)):ee.setMode(L.TRIANGLES);else if(N.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),St.setLineWidth(Et*Wt()),N.isLineSegments?ee.setMode(L.LINES):N.isLineLoop?ee.setMode(L.LINE_LOOP):ee.setMode(L.LINE_STRIP)}else N.isPoints?ee.setMode(L.POINTS):N.isSprite&&ee.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Tr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,he=N._multiDrawCounts,Yt=N._multiDrawCount,Qe=ft?C.get(ft).bytesPerElement:1,Ji=pt.get(z).currentProgram.getUniforms();for(let tn=0;tn<Yt;tn++)Ji.setValue(L,"_gl_DrawID",tn),ee.render(Et[tn]/Qe,he[tn])}else if(N.isInstancedMesh)ee.renderInstances(Ht,me,N.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,he=Math.min(k.instanceCount,Et);ee.renderInstances(Ht,me,he)}else ee.render(Ht,me)};function ae(b,U,k){b.transparent===!0&&b.side===bn&&b.forceSinglePass===!1?(b.side=Ye,b.needsUpdate=!0,Os(b,U,k),b.side=vi,b.needsUpdate=!0,Os(b,U,k),b.side=bn):Os(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),p=Mt.get(k),p.init(U),x.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const j=N.material;if(j)if(Array.isArray(j))for(let ht=0;ht<j.length;ht++){const mt=j[ht];ae(mt,k,N),z.add(mt)}else ae(j,k,N),z.add(j)}),p=x.pop(),z},this.compileAsync=function(b,U,k=null){const z=this.compile(b,U,k);return new Promise(N=>{function j(){if(z.forEach(function(ht){pt.get(ht).currentProgram.isReady()&&z.delete(ht)}),z.size===0){N(b);return}setTimeout(j,10)}bt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let $t=null;function zn(b){$t&&$t(b)}function Pn(){Ei.stop()}function jc(){Ei.start()}const Ei=new zf;Ei.setAnimationLoop(zn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(b){$t=b,tt.setAnimationLoop(b),b===null?Ei.stop():Ei.start()},tt.addEventListener("sessionstart",Pn),tt.addEventListener("sessionend",jc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,R),p=Mt.get(b,x.length),p.init(U),x.push(p),nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Vt.setFromProjectionMatrix(nt,Nn,U.reversedDepth),lt=this.localClippingEnabled,W=et.init(this.clippingPlanes,lt),m=X.get(b,S.length),m.init(),S.push(m),tt.enabled===!0&&tt.isPresenting===!0){const j=v.xr.getDepthSensingMesh();j!==null&&ro(j,U,-1/0,v.sortObjects)}ro(b,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,ot),ve=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ve&&xt.addToRenderList(m,b),this.info.render.frame++,W===!0&&et.beginShadows();const k=p.state.shadowsArray;vt.render(k,b,U),W===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const j=U.cameras;if(N.length>0)for(let ht=0,mt=j.length;ht<mt;ht++){const ft=j[ht];th(z,N,b,ft)}ve&&xt.render(b);for(let ht=0,mt=j.length;ht<mt;ht++){const ft=j[ht];Qc(m,b,ft,ft.viewport)}}else N.length>0&&th(z,N,b,U),ve&&xt.render(b),Qc(m,b,U);R!==null&&w===0&&(Bt.updateMultisampleRenderTarget(R),Bt.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,U),ct.resetDefaultState(),y=-1,T=null,x.pop(),x.length>0?(p=x[x.length-1],W===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ro(b,U,k,z){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Vt.intersectsSprite(b)){z&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);const ht=F.update(b),mt=b.material;mt.visible&&m.push(b,ht,mt,k,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Vt.intersectsObject(b))){const ht=F.update(b),mt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),At.copy(ht.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(mt)){const ft=ht.groups;for(let Ct=0,Lt=ft.length;Ct<Lt;Ct++){const Tt=ft[Ct],Ht=mt[Tt.materialIndex];Ht&&Ht.visible&&m.push(b,ht,Ht,k,At.z,Tt)}}else mt.visible&&m.push(b,ht,mt,k,At.z,null)}}const j=b.children;for(let ht=0,mt=j.length;ht<mt;ht++)ro(j[ht],U,k,z)}function Qc(b,U,k,z){const N=b.opaque,j=b.transmissive,ht=b.transparent;p.setupLightsView(k),W===!0&&et.setGlobalState(v.clippingPlanes,k),z&&St.viewport(P.copy(z)),N.length>0&&Fs(N,U,k),j.length>0&&Fs(j,U,k),ht.length>0&&Fs(ht,U,k),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function th(b,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Cn(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?jn:On,minFilter:Hi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const j=p.state.transmissionRenderTarget[z.id],ht=z.viewport||P;j.setSize(ht.z*v.transmissionResolutionScale,ht.w*v.transmissionResolutionScale);const mt=v.getRenderTarget(),ft=v.getActiveCubeFace(),Ct=v.getActiveMipmapLevel();v.setRenderTarget(j),v.getClearColor(B),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),ve&&xt.render(k);const Lt=v.toneMapping;v.toneMapping=mi;const Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),W===!0&&et.setGlobalState(v.clippingPlanes,z),Fs(b,k,z),Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let jt=0,me=U.length;jt<me;jt++){const oe=U[jt],ee=oe.object,Et=oe.geometry,he=oe.material,Yt=oe.group;if(he.side===bn&&ee.layers.test(z.layers)){const Qe=he.side;he.side=Ye,he.needsUpdate=!0,eh(ee,k,z,Et,he,Yt),he.side=Qe,he.needsUpdate=!0,Ht=!0}}Ht===!0&&(Bt.updateMultisampleRenderTarget(j),Bt.updateRenderTargetMipmap(j))}v.setRenderTarget(mt,ft,Ct),v.setClearColor(B,q),Tt!==void 0&&(z.viewport=Tt),v.toneMapping=Lt}function Fs(b,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,j=b.length;N<j;N++){const ht=b[N],mt=ht.object,ft=ht.geometry,Ct=ht.group;let Lt=ht.material;Lt.allowOverride===!0&&z!==null&&(Lt=z),mt.layers.test(k.layers)&&eh(mt,U,k,ft,Lt,Ct)}}function eh(b,U,k,z,N,j){b.onBeforeRender(v,U,k,z,N,j),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,k,z,b,j),N.transparent===!0&&N.side===bn&&N.forceSinglePass===!1?(N.side=Ye,N.needsUpdate=!0,v.renderBufferDirect(k,U,z,N,b,j),N.side=vi,N.needsUpdate=!0,v.renderBufferDirect(k,U,z,N,b,j),N.side=bn):v.renderBufferDirect(k,U,z,N,b,j),b.onAfterRender(v,U,k,z,N,j)}function Os(b,U,k){U.isScene!==!0&&(U=It);const z=pt.get(b),N=p.state.lights,j=p.state.shadowsArray,ht=N.state.version,mt=Y.getParameters(b,N.state,j,U,k),ft=Y.getProgramCacheKey(mt);let Ct=z.programs;z.environment=b.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(b.isMeshStandardMaterial?xe:Ce).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ct===void 0&&(b.addEventListener("dispose",K),Ct=new Map,z.programs=Ct);let Lt=Ct.get(ft);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===ht)return ih(b,mt),Lt}else mt.uniforms=Y.getUniforms(b),b.onBeforeCompile(mt,v),Lt=Y.acquireProgram(mt,ft),Ct.set(ft,Lt),z.uniforms=mt.uniforms;const Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=et.uniform),ih(b,mt),z.needsLights=Yd(b),z.lightsStateVersion=ht,z.needsLights&&(Tt.ambientLightColor.value=N.state.ambient,Tt.lightProbe.value=N.state.probe,Tt.directionalLights.value=N.state.directional,Tt.directionalLightShadows.value=N.state.directionalShadow,Tt.spotLights.value=N.state.spot,Tt.spotLightShadows.value=N.state.spotShadow,Tt.rectAreaLights.value=N.state.rectArea,Tt.ltc_1.value=N.state.rectAreaLTC1,Tt.ltc_2.value=N.state.rectAreaLTC2,Tt.pointLights.value=N.state.point,Tt.pointLightShadows.value=N.state.pointShadow,Tt.hemisphereLights.value=N.state.hemi,Tt.directionalShadowMap.value=N.state.directionalShadowMap,Tt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Tt.spotShadowMap.value=N.state.spotShadowMap,Tt.spotLightMatrix.value=N.state.spotLightMatrix,Tt.spotLightMap.value=N.state.spotLightMap,Tt.pointShadowMap.value=N.state.pointShadowMap,Tt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function nh(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=ba.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ih(b,U){const k=pt.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Wd(b,U,k,z,N){U.isScene!==!0&&(U=It),Bt.resetTextureUnits();const j=U.fog,ht=z.isMeshStandardMaterial?U.environment:null,mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Dr,ft=(z.isMeshStandardMaterial?xe:Ce).get(z.envMap||ht),Ct=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Lt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!k.morphAttributes.position,Ht=!!k.morphAttributes.normal,jt=!!k.morphAttributes.color;let me=mi;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(me=v.toneMapping);const oe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=oe!==void 0?oe.length:0,Et=pt.get(z),he=p.state.lights;if(W===!0&&(lt===!0||b!==T)){const ke=b===T&&z.id===y;et.setState(z,b,ke)}let Yt=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==he.state.version||Et.outputColorSpace!==mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==ft||z.fog===!0&&Et.fog!==j||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Ct||Et.vertexTangents!==Lt||Et.morphTargets!==Tt||Et.morphNormals!==Ht||Et.morphColors!==jt||Et.toneMapping!==me||Et.morphTargetsCount!==ee)&&(Yt=!0):(Yt=!0,Et.__version=z.version);let Qe=Et.currentProgram;Yt===!0&&(Qe=Os(z,U,N));let Ji=!1,tn=!1,Yr=!1;const ue=Qe.getUniforms(),dn=Et.uniforms;if(St.useProgram(Qe.program)&&(Ji=!0,tn=!0,Yr=!0),z.id!==y&&(y=z.id,tn=!0),Ji||T!==b){St.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ue.setValue(L,"projectionMatrix",b.projectionMatrix),ue.setValue(L,"viewMatrix",b.matrixWorldInverse);const He=ue.map.cameraPosition;He!==void 0&&He.setValue(L,wt.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&ue.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,tn=!0,Yr=!0)}if(N.isSkinnedMesh){ue.setOptional(L,N,"bindMatrix"),ue.setOptional(L,N,"bindMatrixInverse");const ke=N.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ue.setValue(L,"boneTexture",ke.boneTexture,Bt))}N.isBatchedMesh&&(ue.setOptional(L,N,"batchingTexture"),ue.setValue(L,"batchingTexture",N._matricesTexture,Bt),ue.setOptional(L,N,"batchingIdTexture"),ue.setValue(L,"batchingIdTexture",N._indirectTexture,Bt),ue.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(L,"batchingColorTexture",N._colorsTexture,Bt));const pn=k.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Q.update(N,k,Qe),(tn||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,ue.setValue(L,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(dn.envMap.value=ft,dn.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),tn&&(ue.setValue(L,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&Xd(dn,Yr),j&&z.fog===!0&&J.refreshFogUniforms(dn,j),J.refreshMaterialUniforms(dn,z,H,$,p.state.transmissionRenderTarget[b.id]),ba.upload(L,nh(Et),dn,Bt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ba.upload(L,nh(Et),dn,Bt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(L,"center",N.center),ue.setValue(L,"modelViewMatrix",N.modelViewMatrix),ue.setValue(L,"normalMatrix",N.normalMatrix),ue.setValue(L,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ke=z.uniformsGroups;for(let He=0,so=ke.length;He<so;He++){const wi=ke[He];Nt.update(wi,Qe),Nt.bind(wi,Qe)}}return Qe}function Xd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,k){const z=pt.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),pt.get(b.texture).__webglTexture=U,pt.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const k=pt.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const qd=L.createFramebuffer();this.setRenderTarget=function(b,U=0,k=0){R=b,A=U,w=k;let z=!0,N=null,j=!1,ht=!1;if(b){const ft=pt.get(b);if(ft.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(ft.__webglFramebuffer===void 0)Bt.setupRenderTarget(b);else if(ft.__hasExternalTextures)Bt.rebindTextures(b,pt.get(b.texture).__webglTexture,pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&pt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(b)}}const Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(ht=!0);const Lt=pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?N=Lt[U][k]:N=Lt[U],j=!0):b.samples>0&&Bt.useMultisampledRTT(b)===!1?N=pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?N=Lt[k]:N=Lt,P.copy(b.viewport),V.copy(b.scissor),O=b.scissorTest}else P.copy(_t).multiplyScalar(H).floor(),V.copy(Dt).multiplyScalar(H).floor(),O=te;if(k!==0&&(N=qd),St.bindFramebuffer(L.FRAMEBUFFER,N)&&z&&St.drawBuffers(b,N),St.viewport(P),St.scissor(V),St.setScissorTest(O),j){const ft=pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,ft.__webglTexture,k)}else if(ht){const ft=U;for(let Ct=0;Ct<b.textures.length;Ct++){const Lt=pt.get(b.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,k,ft)}}else if(b!==null&&k!==0){const ft=pt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ft.__webglTexture,k)}y=-1},this.readRenderTargetPixels=function(b,U,k,z,N,j,ht,mt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft){St.bindFramebuffer(L.FRAMEBUFFER,ft);try{const Ct=b.textures[mt],Lt=Ct.format,Tt=Ct.type;if(!qt.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-z&&k>=0&&k<=b.height-N&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(U,k,z,N,yt.convert(Lt),yt.convert(Tt),j))}finally{const Ct=R!==null?pt.get(R).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,z,N,j,ht,mt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ht!==void 0&&(ft=ft[ht]),ft)if(U>=0&&U<=b.width-z&&k>=0&&k<=b.height-N){St.bindFramebuffer(L.FRAMEBUFFER,ft);const Ct=b.textures[mt],Lt=Ct.format,Tt=Ct.type;if(!qt.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,j.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+mt),L.readPixels(U,k,z,N,yt.convert(Lt),yt.convert(Tt),0);const jt=R!==null?pt.get(R).__webglFramebuffer:null;St.bindFramebuffer(L.FRAMEBUFFER,jt);const me=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jp(L,me,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,j),L.deleteBuffer(Ht),L.deleteSync(me),j}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,k=0){const z=Math.pow(2,-k),N=Math.floor(b.image.width*z),j=Math.floor(b.image.height*z),ht=U!==null?U.x:0,mt=U!==null?U.y:0;Bt.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,ht,mt,N,j),St.unbindTexture()};const Kd=L.createFramebuffer(),$d=L.createFramebuffer();this.copyTextureToTexture=function(b,U,k=null,z=null,N=0,j=null){j===null&&(N!==0?(Tr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),j=N,N=0):j=0);let ht,mt,ft,Ct,Lt,Tt,Ht,jt,me;const oe=b.isCompressedTexture?b.mipmaps[j]:b.image;if(k!==null)ht=k.max.x-k.min.x,mt=k.max.y-k.min.y,ft=k.isBox3?k.max.z-k.min.z:1,Ct=k.min.x,Lt=k.min.y,Tt=k.isBox3?k.min.z:0;else{const pn=Math.pow(2,-N);ht=Math.floor(oe.width*pn),mt=Math.floor(oe.height*pn),b.isDataArrayTexture?ft=oe.depth:b.isData3DTexture?ft=Math.floor(oe.depth*pn):ft=1,Ct=0,Lt=0,Tt=0}z!==null?(Ht=z.x,jt=z.y,me=z.z):(Ht=0,jt=0,me=0);const ee=yt.convert(U.format),Et=yt.convert(U.type);let he;U.isData3DTexture?(Bt.setTexture3D(U,0),he=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Bt.setTexture2DArray(U,0),he=L.TEXTURE_2D_ARRAY):(Bt.setTexture2D(U,0),he=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Yt=L.getParameter(L.UNPACK_ROW_LENGTH),Qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ji=L.getParameter(L.UNPACK_SKIP_PIXELS),tn=L.getParameter(L.UNPACK_SKIP_ROWS),Yr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,oe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ct),L.pixelStorei(L.UNPACK_SKIP_ROWS,Lt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Tt);const ue=b.isDataArrayTexture||b.isData3DTexture,dn=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const pn=pt.get(b),ke=pt.get(U),He=pt.get(pn.__renderTarget),so=pt.get(ke.__renderTarget);St.bindFramebuffer(L.READ_FRAMEBUFFER,He.__webglFramebuffer),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let wi=0;wi<ft;wi++)ue&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(b).__webglTexture,N,Tt+wi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,j,me+wi)),L.blitFramebuffer(Ct,Lt,ht,mt,Ht,jt,ht,mt,L.DEPTH_BUFFER_BIT,L.NEAREST);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||pt.has(b)){const pn=pt.get(b),ke=pt.get(U);St.bindFramebuffer(L.READ_FRAMEBUFFER,Kd),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,$d);for(let He=0;He<ft;He++)ue?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pn.__webglTexture,N,Tt+He):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,pn.__webglTexture,N),dn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,j,me+He):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,j),N!==0?L.blitFramebuffer(Ct,Lt,ht,mt,Ht,jt,ht,mt,L.COLOR_BUFFER_BIT,L.NEAREST):dn?L.copyTexSubImage3D(he,j,Ht,jt,me+He,Ct,Lt,ht,mt):L.copyTexSubImage2D(he,j,Ht,jt,Ct,Lt,ht,mt);St.bindFramebuffer(L.READ_FRAMEBUFFER,null),St.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else dn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(he,j,Ht,jt,me,ht,mt,ft,ee,Et,oe.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(he,j,Ht,jt,me,ht,mt,ft,ee,oe.data):L.texSubImage3D(he,j,Ht,jt,me,ht,mt,ft,ee,Et,oe):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,j,Ht,jt,ht,mt,ee,Et,oe.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,j,Ht,jt,oe.width,oe.height,ee,oe.data):L.texSubImage2D(L.TEXTURE_2D,j,Ht,jt,ht,mt,ee,Et,oe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Yt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,tn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Yr),j===0&&U.generateMipmaps&&L.generateMipmap(he),St.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,z=null,N=0){return Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,z,N)},this.initRenderTarget=function(b){pt.get(b).__webglFramebuffer===void 0&&Bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Bt.setTextureCube(b,0):b.isData3DTexture?Bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Bt.setTexture2DArray(b,0):Bt.setTexture2D(b,0),St.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,St.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}const Ea={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cy=new Ac(-1,1,1,-1,0,1);class hy extends Pe{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}const uy=new hy;class Dc{constructor(t){this._mesh=new be(uy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class fy extends Xr{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ee?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ys.clone(t.uniforms),this.material=new Ee({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Dc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Au extends Xr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class dy extends Xr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class py{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:jn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fy(Ea),this.copyPass.material.blending=Zn,this.clock=new kf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Au!==void 0&&(a instanceof Au?n=!0:a instanceof dy&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class my extends Xr{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Rt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const gy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ur extends Xr{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(s,a,{type:jn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Cn(s,a,{type:jn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Cn(s,a,{type:jn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=gy;this.highPassUniforms=ys.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ee({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new at(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ys.clone(Ea.uniforms),this.blendMaterial=new Ee({uniforms:this.copyUniforms,vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,blending:Ze,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new $a,this._fsQuad=new Dc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new at(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ee({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new Ee({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ur.BlurDirectionX=new at(1,0);Ur.BlurDirectionY=new at(0,1);const ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class _y extends Xr{constructor(){super(),this.uniforms=ys.clone(ga.uniforms),this.material=new Km({name:ga.name,uniforms:this.uniforms,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._fsQuad=new Dc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Xt.getTransfer(this._outputColorSpace)===Jt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===nf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===sf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===of?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===af&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Kn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ss={duration:.5,overwrite:!1,delay:0},Lc,Ue,ce,xn=1e8,re=1/xn,Kl=Math.PI*2,vy=Kl/4,xy=0,qf=Math.sqrt,yy=Math.cos,My=Math.sin,De=function(t){return typeof t=="string"},ge=function(t){return typeof t=="function"},ti=function(t){return typeof t=="number"},Ic=function(t){return typeof t>"u"},kn=function(t){return typeof t=="object"},qe=function(t){return t!==!1},Uc=function(){return typeof window<"u"},_a=function(t){return ge(t)||De(t)},Kf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Be=Array.isArray,Sy=/random\([^)]+\)/g,Ty=/,\s*/g,Cu=/(?:-?\.?\d|\.)+/gi,$f=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,yr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Jf=/[+-]=-?[.\d]+/,by=/[^,'"\[\]\s]+/gi,Ey=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,de,Dn,$l,Nc,un={},Va={},Zf,jf=function(t){return(Va=Nr(t,un))&&je},Fc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ts=function(t,e){return!e&&console.warn(t)},Qf=function(t,e){return t&&(un[t]=e)&&Va&&(Va[t]=e)||un},bs=function(){return 0},wy={suppressEvents:!0,isStart:!0,kill:!1},wa={suppressEvents:!0,kill:!1},Ay={suppressEvents:!0},Oc={},gi=[],Jl={},td,rn={},Ko={},Ru=30,Aa=[],Bc="",kc=function(t){var e=t[0],n,i;if(kn(e)||ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Aa.length;i--&&!Aa[i].targetTest(e););n=Aa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Sd(t[i],n)))||t.splice(i,1);return t},Wi=function(t){return t._gsap||kc(yn(t))[0]._gsap},ed=function(t,e,n){return(n=t[e])&&ge(n)?t[e]():Ic(n)&&t.getAttribute&&t.getAttribute(e)||n},Ke=function(t,e){return(t=t.split(",")).forEach(e)||t},ye=function(t){return Math.round(t*1e5)/1e5||0},fe=function(t){return Math.round(t*1e7)/1e7||0},Er=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Cy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ha=function(){var t=gi.length,e=gi.slice(0),n,i;for(Jl={},gi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},zc=function(t){return!!(t._initted||t._startAt||t.add)},nd=function(t,e,n,i){gi.length&&!Ue&&Ha(),t.render(e,n,!!(Ue&&e<0&&zc(t))),gi.length&&!Ue&&Ha()},id=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(by).length<2?e:De(t)?t.trim():t},rd=function(t){return t},fn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ry=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Nr=function(t,e){for(var n in e)t[n]=e[n];return t},Pu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=kn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},fs=function(t){var e=t.parent||de,n=t.keyframes?Ry(Be(t.keyframes)):fn;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Py=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},sd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},eo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},xi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Xi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Dy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Zl=function(t,e,n,i){return t._startAt&&(Ue?t._startAt.revert(wa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Ly=function r(t){return!t||t._ts&&r(t.parent)},Du=function(t){return t._repeat?Fr(t._tTime,t=t.duration()+t._rDelay)*t:0},Fr=function(t,e){var n=Math.floor(t=fe(t/e));return t&&n===t?n-1:n},Wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},no=function(t){return t._end=fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||re)||0))},io=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),no(t),n._dirty||Xi(n,t)),t},ad=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Wa(t.rawTime(),e),(!e._dur||Us(0,e.totalDuration(),n)-e._tTime>re)&&e.render(n,!0)),Xi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-re}},In=function(t,e,n,i){return e.parent&&xi(e),e._start=fe((ti(n)?n:n||t!==de?gn(t,n,e):t._time)+e._delay),e._end=fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),sd(t,e,"_first","_last",t._sort?"_start":0),jl(e)||(t._recent=e),i||ad(t,e),t._ts<0&&io(t,t._tTime),t},od=function(t,e){return(un.ScrollTrigger||Fc("scrollTrigger",e))&&un.ScrollTrigger.create(e,t)},ld=function(t,e,n,i,s){if(Hc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&td!==sn.frame)return gi.push(t),t._lazy=[s,i],1},Iy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},jl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Uy=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Iy(t)&&!(!t._initted&&jl(t))||(t._ts<0||t._dp._ts<0)&&!jl(t))?0:1,o=t._rDelay,c=0,l,h,u;if(o&&t._repeat&&(c=Us(0,t._tDur,e),h=Fr(c,o),t._yoyo&&h&1&&(a=1-a),h!==Fr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Ue||i||t._zTime===re||!e&&t._zTime){if(!t._initted&&ld(t,e,i,n,c))return;for(u=t._zTime,t._zTime=e||(n?re:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Zl(t,e,n,!0),t._onUpdate&&!n&&on(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&on(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&xi(t,1),!n&&!Ue&&(on(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ny=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Or=function(t,e,n,i){var s=t._repeat,a=fe(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:fe(a*(s+1)+t._rDelay*s):a,o>0&&!i&&io(t,t._tTime=t._tDur*o),t.parent&&no(t),n||Xi(t.parent,t),t},Lu=function(t){return t instanceof Xe?Xi(t):Or(t,t._dur)},Fy={_start:0,endTime:bs,totalDuration:bs},gn=function r(t,e,n){var i=t.labels,s=t._recent||Fy,a=t.duration()>=xn?s.endTime(!1):t._dur,o,c,l;return De(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),c==="<"||c===">"?(o>=0&&(e=e.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(Be(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e},ds=function(t,e,n){var i=ti(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=qe(c.vars.inherit)&&c.parent;a.immediateRender=qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Se(e[0],a,e[s+1])},bi=function(t,e){return t||t===0?e(t):e},Us=function(t,e,n){return n<t?t:n>e?e:n},Oe=function(t,e){return!De(t)||!(e=Ey.exec(t))?"":e[1]},Oy=function(t,e,n){return bi(n,function(i){return Us(t,e,i)})},Ql=[].slice,cd=function(t,e){return t&&kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&kn(t[0]))&&!t.nodeType&&t!==Dn},By=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return De(i)&&!e||cd(i,1)?(s=n).push.apply(s,yn(i)):n.push(i)})||n},yn=function(t,e,n){return ce&&!e&&ce.selector?ce.selector(t):De(t)&&!n&&($l||!Br())?Ql.call((e||Nc).querySelectorAll(t),0):Be(t)?By(t,n):cd(t)?Ql.call(t,0):t?[t]:[]},tc=function(t){return t=yn(t)[0]||Ts("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yn(e,n.querySelectorAll?n:n===t?Ts("Invalid scope")||Nc.createElement("div"):t)}},hd=function(t){return t.sort(function(){return .5-Math.random()})},ud=function(t){if(ge(t))return t;var e=kn(t)?t:{each:t},n=Yi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,h=i,u=i;return De(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(f,d,_){var g=(_||e).length,m=a[g],p,S,x,v,E,A,w,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,xn])[1],!y){for(w=-xn;w<(w=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=a[g]=[],p=c?Math.min(y,g)*h-.5:i%y,S=y===xn?0:c?g*u/y-.5:i/y|0,w=0,R=xn,A=0;A<g;A++)x=A%y-p,v=S-(A/y|0),m[A]=E=l?Math.abs(l==="y"?v:x):qf(x*x+v*v),E>w&&(w=E),E<R&&(R=E);i==="random"&&hd(m),m.max=w-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:l?l==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Oe(e.amount||e.each)||0,n=n&&g<0?Zy(n):n}return g=(m[f]-m.min)/m.max||0,fe(m.b+(n?n(g):g)*m.v)+m.u}},ec=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ti(n)?0:Oe(n))}},fd=function(t,e){var n=Be(t),i,s;return!n&&kn(t)&&(i=n=t.radius||xn,t.values?(t=yn(t.values),(s=!ti(t[0]))&&(i*=i)):t=ec(t.increment)),bi(e,n?ge(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=xn,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-o,d=t[u].y-c,f=f*f+d*d):f=Math.abs(t[u]-o),f<l&&(l=f,h=u);return h=!i||l<=i?t[h]:a,s||h===a||ti(a)?h:h+Oe(a)}:ec(t))},dd=function(t,e,n,i){return bi(Be(t)?!e:n===!0?!!(n=0):!i,function(){return Be(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ky=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},zy=function(t,e){return function(n){return t(parseFloat(n))+(e||Oe(n))}},Vy=function(t,e,n){return md(t,e,0,1,n)},pd=function(t,e,n){return bi(n,function(i){return t[~~e(i)]})},Hy=function r(t,e,n){var i=e-t;return Be(t)?pd(t,r(0,t.length),e):bi(n,function(s){return(i+(s-t)%i)%i+t})},Gy=function r(t,e,n){var i=e-t,s=i*2;return Be(t)?pd(t,r(0,t.length-1),e):bi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Es=function(t){return t.replace(Sy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Ty);return dd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},md=function(t,e,n,i,s){var a=e-t,o=i-n;return bi(s,function(c){return n+((c-t)/a*o||0)})},Wy=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=De(t),o={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Be(t)&&!Be(e)){for(h=[],u=t.length,f=u-2,l=1;l<u;l++)h.push(r(t[l-1],t[l]));u--,s=function(_){_*=u;var g=Math.min(f,~~_);return h[g](_-g)},n=e}else i||(t=Nr(Be(t)?[]:{},t));if(!h){for(c in e)Vc.call(o,t,c,"get",e[c]);s=function(_){return Xc(_,o)||(a?t.p:t)}}}return bi(n,s)},Iu=function(t,e,n){var i=t.labels,s=xn,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},on=function(t,e,n){var i=t.vars,s=i[e],a=ce,o=t._ctx,c,l,h;if(s)return c=i[e+"Params"],l=i.callbackScope||t,n&&gi.length&&Ha(),o&&(ce=o),h=c?s.apply(l,c):s.call(l),ce=a,h},as=function(t){return xi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ue),t.progress()<1&&on(t,"onInterrupt"),t},Mr,gd=[],_d=function(t){if(t)if(t=!t.name&&t.default||t,Uc()||t.headless){var e=t.name,n=ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:bs,render:Xc,add:Vc,kill:oM,modifier:aM,rawVars:0},a={targetTest:0,get:0,getSetter:Wc,aliases:{},register:0};if(Br(),t!==i){if(rn[e])return;fn(i,fn(Ga(t,s),a)),Nr(i.prototype,Nr(s,Ga(t,a))),rn[i.prop=e]=i,t.targetTest&&(Aa.push(i),Oc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qf(e,i),t.register&&t.register(je,i,$e)}else gd.push(t)},ne=255,os={aqua:[0,ne,ne],lime:[0,ne,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ne],navy:[0,0,128],white:[ne,ne,ne],olive:[128,128,0],yellow:[ne,ne,0],orange:[ne,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ne,0,0],pink:[ne,192,203],cyan:[0,ne,ne],transparent:[ne,ne,ne,0]},$o=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ne+.5|0},vd=function(t,e,n){var i=t?ti(t)?[t>>16,t>>8&ne,t&ne]:0:os.black,s,a,o,c,l,h,u,f,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),os[t])i=os[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ne,i&ne,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ne,t&ne]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Cu),!e)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=$o(c+1/3,s,a),i[1]=$o(c,s,a),i[2]=$o(c-1/3,s,a);else if(~t.indexOf("="))return i=t.match($f),n&&i.length<4&&(i[3]=1),i}else i=t.match(Cu)||os.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ne,a=i[1]/ne,o=i[2]/ne,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===s?(a-o)/d+(a<o?6:0):u===a?(o-s)/d+2:(s-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},xd=function(t){var e=[],n=[],i=-1;return t.split(_i).forEach(function(s){var a=s.match(yr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Uu=function(t,e,n){var i="",s=(t+i).match(_i),a=e?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return t;if(s=s.map(function(f){return(f=vd(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=xd(t),c=n.c,c.join(i)!==h.c.join(i)))for(l=t.replace(_i,"1").split(yr),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=t.split(_i),u=l.length-1;o<u;o++)i+=l[o]+s[o];return i+l[u]},_i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in os)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Xy=/hsl[a]?\(/,yd=function(t){var e=t.join(" "),n;if(_i.lastIndex=0,_i.test(e))return n=Xy.test(e),t[1]=Uu(t[1],n),t[0]=Uu(t[0],n,xd(t[1])),!0},ws,sn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,h,u,f,d,_=function g(m){var p=r()-i,S=m===!0,x,v,E,A;if((p>t||p<0)&&(n+=p-e),i+=p,E=i-n,x=E-a,(x>0||S)&&(A=++u.frame,f=E-u.time*1e3,u.time=E=E/1e3,a+=x+(x>=s?4:s-x),v=1),S||(c=l(g)),v)for(d=0;d<o.length;d++)o[d](E,f,A,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Zf&&(!$l&&Uc()&&(Dn=$l=window,Nc=Dn.document||{},un.gsap=je,(Dn.gsapVersions||(Dn.gsapVersions=[])).push(je.version),jf(Va||Dn.GreenSockGlobals||!Dn.gsap&&Dn||{}),gd.forEach(_d)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ws=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),ws=0,l=bs},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,S){var x=p?function(v,E,A,w){m(v,E,A,w),u.remove(x)}:m;return u.remove(m),o[S?"unshift":"push"](x),Br(),x},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},u})(),Br=function(){return!ws&&sn.wake()},Gt={},Yy=/^[\d.\-M][\d.\-,\s]/,qy=/["']/g,Ky=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(qy,"").trim():+l,i=c.substr(o+1).trim();return e},$y=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Jy=function(t){var e=(t+"").split("("),n=Gt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ky(e[1])]:$y(t).split(",").map(id)):Gt._CE&&Yy.test(t)?Gt._CE("",t):n},Zy=function(t){return function(e){return 1-t(1-e)}},Yi=function(t,e){return t&&(ge(t)?t:Gt[t]||Jy(t))||e},$i=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Ke(t,function(o){Gt[o]=un[o]=s,Gt[a=o.toLowerCase()]=n;for(var c in s)Gt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Gt[o+"."+c]=s[c]}),s},Md=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Jo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Kl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*My((h-a)*s)+1},c=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:Md(o);return s=Kl/s,c.config=function(l,h){return r(t,l,h)},c},Zo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Md(n);return i.config=function(s){return r(t,s)},i};Ke("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;$i(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;$i("Elastic",Jo("in"),Jo("out"),Jo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};$i("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);$i("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});$i("Circ",function(r){return-(qf(1-r*r)-1)});$i("Sine",function(r){return r===1?1:-yy(r*vy)+1});$i("Back",Zo("in"),Zo("out"),Zo());Gt.SteppedEase=Gt.steps=un.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-re;return function(o){return((i*Us(0,a,o)|0)+s)*n}}};Ss.ease=Gt["quad.out"];Ke("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Bc+=r+","+r+"Params,"});var Sd=function(t,e){this.id=xy++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ed,this.set=e?e.getSetter:Wc},As=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Or(this,+e.duration,1,1),this.data=e.data,ce&&(this._ctx=ce,ce.data.push(this)),ws||sn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Or(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Br(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(io(this,n),!s._dp||s.parent||ad(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&In(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===re||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Du(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Du(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-re?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-re?0:this._rts,this.totalTime(Us(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),no(this),Dy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Br(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==re&&(this._tTime-=re)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=fe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&In(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ay);var i=Ue;return Ue=n,zc(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ue=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Lu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Lu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(gn(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i)),this._dur||(this._zTime=-re),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-re:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-re,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-re)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ge(n)?n:rd,c=function(){var h=i.then;i.then=null,s&&s(),ge(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){as(this)},r})();fn(As.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-re,_prom:0,_ps:!1,_rts:1});var Xe=(function(r){Yf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qe(n.sortChildren),de&&In(n.parent||de,Kn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&od(Kn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return ds(0,arguments,this),this},e.from=function(i,s,a){return ds(1,arguments,this),this},e.fromTo=function(i,s,a,o){return ds(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Se(i,s,gn(this,a),1),this},e.call=function(i,s,a){return In(this,Se.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Se(i,a,gn(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,h){return a.runBackwards=1,fs(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,s,a,o,c,l,h)},e.staggerFromTo=function(i,s,a,o,c,l,h,u){return o.startAt=a,fs(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,s,o,c,l,h,u)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:fe(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,g,m,p,S,x,v,E,A,w;if(this!==de&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),f=h,v=this._start,x=this._ts,p=!x,u&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=fe(h%m),h===c?(g=this._repeat,f=l):(E=fe(h/m),g=~~E,g&&g===E&&(f=l,g--),f>l&&(f=l)),E=Fr(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),A&&g&1&&(f=l-f,w=1),g!==E&&!this._lock){var R=A&&E&1,y=R===(A&&g&1);if(g<E&&(R=!R),o=R?0:h%l?l:h,this._lock=1,this.render(o||(w?0:fe(g*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&on(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,o=R?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ny(this,fe(o),fe(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!s&&!E&&(on(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,a),f!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-re);break}}d=_}else{d=this._last;for(var T=i<0?i:f;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,a||Ue&&zc(d)),f!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=T?-re:re);break}}d=_}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-re)._zTime=f>=o?1:-1,this._ts))return this._start=v,no(this),this.render(i,s,a);this._onUpdate&&!s&&on(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(on(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ti(s)||(s=gn(this,s,i)),!(i instanceof As)){if(Be(i))return i.forEach(function(o){return a.add(o,s)}),this;if(De(i))return this.addLabel(i,s);if(ge(i))i=Se.delayedCall(0,i);else return this}return this!==i?In(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-xn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Se?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return De(i)?this.removeLabel(i):ge(i)?this.killTweensOf(i):(i.parent===this&&eo(this,i),i===this._recent&&(this._recent=this._last),Xi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fe(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=gn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Se.delayedCall(0,s||bs,a);return o.data="isPause",this._hasPause=1,In(this,o,gn(this,i))},e.removePause=function(i){var s=this._first;for(i=gn(this,i);s;)s._start===i&&s.data==="isPause"&&xi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)fi!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=yn(i),c=this._first,l=ti(s),h;c;)c instanceof Se?Cy(c._targets,o)&&(l?(!fi||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=gn(a,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,_=Se.to(a,fn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||re,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==m&&Or(_,m,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,fn({startAt:{time:gn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Iu(this,gn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Iu(this,gn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+re)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=fe(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Xi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Xi(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=xn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,In(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=fe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Or(a,a===de&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(de._ts&&(nd(de,Wa(i,de)),td=sn.frame),sn.frame>=Ru){Ru+=hn.autoSleep||120;var s=de._first;if((!s||!s._ts)&&hn.autoSleep&&sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||sn.sleep()}}},t})(As);fn(Xe.prototype,{_lock:0,_hasPause:0,_forcing:0});var jy=function(t,e,n,i,s,a,o){var c=new $e(this._pt,t,e,0,1,Cd,null,s),l=0,h=0,u,f,d,_,g,m,p,S;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Es(i)),a&&(S=[n,i],a(S,t,e),n=S[0],i=S[1]),f=n.match(qo)||[];u=qo.exec(i);)_=u[0],g=i.substring(l,u.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(m=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Er(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=qo.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Jf.test(i)||p)&&(c.e=0),this._pt=c,c},Vc=function(t,e,n,i,s,a,o,c,l,h){ge(i)&&(i=i(s||0,t,a));var u=t[e],f=n!=="get"?n:ge(u)?l?t[e.indexOf("set")||!ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,d=ge(u)?l?iM:wd:Gc,_;if(De(i)&&(~i.indexOf("random(")&&(i=Es(i)),i.charAt(1)==="="&&(_=Er(f,i)+(Oe(f)||0),(_||_===0)&&(i=_))),!h||f!==i||nc)return!isNaN(f*i)&&i!==""?(_=new $e(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?sM:Ad,0,d),l&&(_.fp=l),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Fc(e,i),jy.call(this,t,e,f,i,d,c||hn.stringFilter,l))},Qy=function(t,e,n,i,s){if(ge(t)&&(t=ps(t,s,e,n,i)),!kn(t)||t.style&&t.nodeType||Be(t)||Kf(t))return De(t)?ps(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ps(t[o],s,e,n,i);return a},Td=function(t,e,n,i,s,a){var o,c,l,h;if(rn[t]&&(o=new rn[t]).init(s,o.rawVars?e[t]:Qy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new $e(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Mr))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},fi,nc,Hc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=t._overwrite==="auto"&&!Lc,v=t.timeline,E=i.easeReverse||u,A,w,R,y,T,P,V,O,B,q,G,$,H;if(v&&(!f||!s)&&(s="none"),t._ease=Yi(s,Ss.ease),t._rEase=E&&(Yi(E)||t._ease),t._from=!v&&!!i.runBackwards,t._from&&(t.ratio=1),!v||f&&!i.stagger){if(O=m[0]?Wi(m[0]).harness:0,$=O&&i[O.prop],A=Ga(i,Oc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!d?g.render(-1,!0):g.revert(h&&_?wa:wy),g._lazy=0),a){if(xi(t._startAt=Se.set(m,fn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&qe(c),startAt:null,delay:0,onUpdate:l&&function(){return on(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue||!o&&!d)&&t._startAt.revert(wa),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),R=fn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&qe(c),immediateRender:o,stagger:0,parent:p},A),$&&(R[O.prop]=$),xi(t._startAt=Se.set(m,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ue?t._startAt.revert(wa):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,re,re);else if(!e)return}for(t._pt=t._ptCache=0,c=_&&qe(c)||c&&!_,w=0;w<m.length;w++){if(T=m[w],V=T._gsap||kc(m)[w]._gsap,t._ptLookup[w]=q={},Jl[V.id]&&gi.length&&Ha(),G=S===m?w:S.indexOf(T),O&&(B=new O).init(T,$||A,t,G,S)!==!1&&(t._pt=y=new $e(t._pt,T,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(it){q[it]=y}),B.priority&&(P=1)),!O||$)for(R in A)rn[R]&&(B=Td(R,A,t,G,T,S))?B.priority&&(P=1):q[R]=y=Vc.call(t,T,R,"get",A[R],G,S,0,i.stringFilter);t._op&&t._op[w]&&t.kill(T,t._op[w]),x&&t._pt&&(fi=t,de.killTweensOf(T,q,t.globalTime(e)),H=!t.parent,fi=0),t._pt&&c&&(Jl[V.id]=1)}P&&Rd(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&v.render(xn,!0,!0)},tM=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return nc=1,t.vars[e]="+=0",Hc(t,o),nc=0,c?Ts(e+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=ye(n)+Oe(u.e)),u.b&&(u.b=h.s+Oe(u.b))},eM=function(t,e){var n=t[0]?Wi(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=Nr({},e);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},nM=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Be(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ps=function(t,e,n,i,s){return ge(t)?t.call(e,n,i,s):De(t)&&~t.indexOf("random(")?Es(t):t},bd=Bc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ed={};Ke(bd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ed[r]=1});var Se=(function(r){Yf(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:fs(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=i.parent||de,S=(Be(n)||Kf(n)?ti(n[0]):"length"in i)?[n]:yn(n),x,v,E,A,w,R,y,T;if(o._targets=S.length?kc(S):Ts("GSAP target "+n+" not found. https://gsap.com",!hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||_a(l)||_a(h)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Xe({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:S}),x.kill(),x.parent=x._dp=Kn(o),x._start=0,f||_a(l)||_a(h)){if(A=S.length,y=f&&ud(f),kn(f))for(w in f)~bd.indexOf(w)&&(T||(T={}),T[w]=f[w]);for(v=0;v<A;v++)E=Ga(i,Ed),E.stagger=0,P&&(E.easeReverse=P),T&&Nr(E,T),R=S[v],E.duration=+ps(l,Kn(o),v,R,S),E.delay=(+ps(h,Kn(o),v,R,S)||0)-o._delay,!f&&A===1&&E.delay&&(o._delay=h=E.delay,o._start+=h,E.delay=0),x.to(R,E,y?y(v,R,S):0),x._ease=Gt.none;x.duration()?l=h=0:o.timeline=0}else if(_){fs(fn(x.vars.defaults,{ease:"none"})),x._ease=Yi(_.ease||i.ease||"none");var V=0,O,B,q;if(Be(_))_.forEach(function(G){return x.to(S,G,">")}),x.duration();else{E={};for(w in _)w==="ease"||w==="easeEach"||nM(w,_[w],E,_.easeEach);for(w in E)for(O=E[w].sort(function(G,$){return G.t-$.t}),V=0,v=0;v<O.length;v++)B=O[v],q={ease:B.e,duration:(B.t-(v?O[v-1].t:0))/100*l},q[w]=B.v,x.to(S,q,V),V+=q.duration;x.duration()<l&&x.to({},{duration:l-x.duration()})}}l||o.duration(l=x.duration())}else o.timeline=0;return d===!0&&!Lc&&(fi=Kn(o),de.killTweensOf(S),fi=0),In(p,Kn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!_&&o._start===fe(p._time)&&qe(u)&&Ly(Kn(o))&&p.data!=="nested")&&(o._tTime=-re,o.render(Math.max(0,-h)||0)),m&&od(Kn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-re&&!h?c:i<re?0:i,f,d,_,g,m,p,S,x;if(!l)Uy(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(f=fe(u%g),u===c?(_=this._repeat,f=l):(m=fe(u/g),_=~~m,_&&_===m?(f=l,_--):f>l&&(f=l)),p=this._yoyo&&_&1,p&&(f=l-f),m=Fr(this._tTime,g),f===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=a=1,this.render(fe(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(ld(this,h?i:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=f<o;if(v!==this._inv){var E=v?o:l-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(v?-1:1)/E:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/l);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(on(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Zl(this,i,s,a),on(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&on(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Zl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&xi(this,1),!s&&!(h&&!o)&&(u||o||p)&&(on(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){ws||sn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Hc(this,l),h=this._ease(l/this._dur),tM(this,i,s,a,o,h,l,c)?this.resetTo(i,s,a,o,1):(io(this,0),this.parent||sd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?as(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ue),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,fi&&fi.vars.overwrite!==!0)._first||as(this),this.parent&&a!==this.timeline.totalDuration()&&Or(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?yn(i):o,l=this._ptLookup,h=this._pt,u,f,d,_,g,m,p;if((!s||s==="all")&&Py(o,c))return s==="all"&&(this._pt=0),as(this);for(u=this._op=this._op||[],s!=="all"&&(De(s)&&(g={},Ke(s,function(S){return g[S]=1}),s=g),s=eM(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){f=l[p],s==="all"?(u[p]=s,_=f,d={}):(d=u[p]=u[p]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&eo(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&h&&as(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ds(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return ds(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return de.killTweensOf(i,s,a)},t})(As);fn(Se.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ke("staggerTo,staggerFrom,staggerFromTo",function(r){Se[r]=function(){var t=new Xe,e=Ql.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Gc=function(t,e,n){return t[e]=n},wd=function(t,e,n){return t[e](n)},iM=function(t,e,n,i){return t[e](i.fp,n)},rM=function(t,e,n){return t.setAttribute(e,n)},Wc=function(t,e){return ge(t[e])?wd:Ic(t[e])&&t.setAttribute?rM:Gc},Ad=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},sM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Cd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Xc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},aM=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},oM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?eo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},lM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Rd=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},$e=(function(){function r(e,n,i,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ad,this.d=c||this,this.set=l||Gc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=lM,this.m=n,this.mt=s,this.tween=i},r})();Ke(Bc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Oc[r]=1});un.TweenMax=un.TweenLite=Se;un.TimelineLite=un.TimelineMax=Xe;de=new Xe({sortChildren:!1,defaults:Ss,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});hn.stringFilter=yd;var qi=[],Ca={},cM=[],Nu=0,hM=0,jo=function(t){return(Ca[t]||cM).map(function(e){return e()})},ic=function(){var t=Date.now(),e=[];t-Nu>2&&(jo("matchMediaInit"),qi.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Dn.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),jo("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Nu=t,jo("matchMedia"))},Pd=(function(){function r(e,n){this.selector=n&&tc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=hM++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ge(n)&&(s=i,i=n,n=ge);var a=this,o=function(){var l=ce,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=tc(s)),ce=a,u=i.apply(a,arguments),ge(u)&&a._r.push(u),ce=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ge?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=ce;ce=null,n(this),ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Se&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Xe?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Se)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=qi.length;a--;)qi[a].id===this.id&&qi.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),uM=(function(){function r(e){this.contexts=[],this.scope=e,ce&&ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){kn(n)||(n={matches:n});var a=new Pd(0,s||this.scope),o=a.conditions={},c,l,h;ce&&!a.selector&&(a.selector=ce.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=Dn.matchMedia(n[l]),c&&(qi.indexOf(a)<0&&qi.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(ic):c.addEventListener("change",ic)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _d(i)})},timeline:function(t){return new Xe(t)},getTweensOf:function(t,e){return de.getTweensOf(t,e)},getProperty:function(t,e,n,i){De(t)&&(t=yn(t)[0]);var s=Wi(t||{}).get,a=n?rd:id;return n==="native"&&(n=""),t&&(e?a((rn[e]&&rn[e].get||s)(t,e,n,i)):function(o,c,l){return a((rn[o]&&rn[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=yn(t),t.length>1){var i=t.map(function(h){return je.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=rn[e],o=Wi(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(h){var u=new a;Mr._pt=0,u.init(t,n?h+n:h,Mr,0,[t]),u.render(1,u),Mr._pt&&Xc(1,Mr)}:o.set(t,c);return a?l:function(h){return l(t,c,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=je.to(t,fn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return s.resetTo(e,c,l,h)};return a.tween=s,a},isTweening:function(t){return de.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Yi(t.ease,Ss.ease)),Pu(Ss,t||{})},config:function(t){return Pu(hn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!rn[o]&&!un[o]&&Ts(e+" effect requires "+o+" plugin.")}),Ko[e]=function(o,c,l){return n(yn(o),fn(c||{},s),l)},a&&(Xe.prototype[e]=function(o,c,l){return this.add(Ko[e](o,kn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Gt[t]=Yi(e)},parseEase:function(t,e){return arguments.length?Yi(t,e):Gt},getById:function(t){return de.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Xe(t),i,s;for(n.smoothChildTiming=qe(t.smoothChildTiming),de.remove(n),n._dp=0,n._time=n._tTime=de._time,i=de._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Se&&i.vars.onComplete===i._targets[0]))&&In(n,i,i._start-i._delay),i=s;return In(de,n,0),n},context:function(t,e){return t?new Pd(t,e):ce},matchMedia:function(t){return new uM(t)},matchMediaRefresh:function(){return qi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ic()},addEventListener:function(t,e){var n=Ca[t]||(Ca[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ca[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Hy,wrapYoyo:Gy,distribute:ud,random:dd,snap:fd,normalize:Vy,getUnit:Oe,clamp:Oy,splitColor:vd,toArray:yn,selector:tc,mapRange:md,pipe:ky,unitize:zy,interpolate:Wy,shuffle:hd},install:jf,effects:Ko,ticker:sn,updateRoot:Xe.updateRoot,plugins:rn,globalTimeline:de,core:{PropTween:$e,globals:Qf,Tween:Se,Timeline:Xe,Animation:As,getCache:Wi,_removeLinkedListItem:eo,reverting:function(){return Ue},context:function(t){return t&&ce&&(ce.data.push(t),t._ctx=ce),ce},suppressOverwrites:function(t){return Lc=t}}};Ke("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xa[r]=Se[r]});sn.add(Xe.updateRoot);Mr=Xa.to({},{duration:0});var fM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},dM=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=fM(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Qo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(De(s)&&(c={},Ke(s,function(h){return c[h]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}dM(o,s)}}}},je=Xa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(c||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Qo("roundProps",ec),Qo("modifiers"),Qo("snap",fd))||Xa;Se.version=Xe.version=je.version="3.15.0";Zf=1;Uc()&&Br();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fu,di,wr,Yc,Gi,Ou,qc,pM=function(){return typeof window<"u"},ei={},Oi=180/Math.PI,Ar=Math.PI/180,_r=Math.atan2,Bu=1e8,Kc=/([A-Z])/g,mM=/(left|right|width|margin|padding|x)/i,gM=/[\s,\(]\S/,Fn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_M=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},xM=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Dd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ld=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},MM=function(t,e,n){return t.style[e]=n},SM=function(t,e,n){return t.style.setProperty(e,n)},TM=function(t,e,n){return t._gsap[e]=n},bM=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},EM=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},wM=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},pe="transform",Je=pe+"Origin",AM=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ei&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=$n(i,o)}):this.tfm[t]=a.x?a[t]:$n(i,t),t===Je&&(this.tfm.zOrigin=a.zOrigin);else return Fn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(pe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Je,e,"")),t=pe}(s||e)&&this.props.push(t,e,s[t])},Id=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},CM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Kc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qc(),(!s||!s.isStart)&&!n[pe]&&(Id(n),i.zOrigin&&n[Je]&&(n[Je]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ud=function(t,e){var n={target:t,props:[],revert:CM,save:AM};return t._gsap||je.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Nd,sc=function(t,e){var n=di.createElementNS?di.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):di.createElement(t);return n&&n.style?n:di.createElement(t)},ln=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Kc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,kr(e)||e,1)||""},ku="O,Moz,ms,Ms,Webkit".split(","),kr=function(t,e,n){var i=e||Gi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(ku[a]+t in s););return a<0?null:(a===3?"ms":a>=0?ku[a]:"")+t},ac=function(){pM()&&window.document&&(Fu=window,di=Fu.document,wr=di.documentElement,Gi=sc("div")||{style:{}},sc("div"),pe=kr(pe),Je=pe+"Origin",Gi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nd=!!kr("perspective"),qc=je.core.reverting,Yc=1)},zu=function(t){var e=t.ownerSVGElement,n=sc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),wr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),wr.removeChild(n),s},Vu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Fd=function(t){var e,n;try{e=t.getBBox()}catch{e=zu(t),n=1}return e&&(e.width||e.height)||n||(e=zu(t)),e&&!e.width&&!e.x&&!e.y?{x:+Vu(t,["x","cx","x1"])||0,y:+Vu(t,["y","cy","y1"])||0,width:0,height:0}:e},Od=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fd(t))},yi=function(t,e){if(e){var n=t.style,i;e in ei&&e!==Je&&(e=pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Kc,"-$1").toLowerCase())):n.removeAttribute(e)}},pi=function(t,e,n,i,s,a){var o=new $e(t._pt,e,n,0,1,a?Ld:Dd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Hu={deg:1,rad:1,turn:1},RM={grid:1,flex:1},Mi=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Gi.style,c=mM.test(e),l=t.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,g,m,p;if(i===a||!s||Hu[i]||Hu[a])return s;if(a!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Od(t),(d||a==="%")&&(ei[e]||~e.indexOf("adius")))return _=p?t.getBBox()[c?"width":"height"]:t[h],ye(d?s/_*u:s/100*_);if(o[c?"width":"height"]=u+(f?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===di||!g.appendChild)&&(g=di.body),m=g._gsap,m&&d&&m.width&&c&&m.time===sn.time&&!m.uncache)return ye(s/m.width*u);if(d&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+i,_=t[h],S?t.style[e]=S:yi(t,e)}else(d||a==="%")&&!RM[ln(g,"display")]&&(o.position=ln(t,"position")),g===t&&(o.position="static"),g.appendChild(Gi),_=Gi[h],g.removeChild(Gi),o.position="absolute";return c&&d&&(m=Wi(g),m.time=sn.time,m.width=g[h]),ye(f?_*s/u:_&&s?u/_*s:0)},$n=function(t,e,n,i){var s;return Yc||ac(),e in Fn&&e!=="transform"&&(e=Fn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ei[e]&&e!=="transform"?(s=Rs(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:qa(ln(t,Je))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ya[e]&&Ya[e](t,e,n)||ln(t,e)||ed(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Mi(t,e,s,n)+n:s},PM=function(t,e,n,i){if(!n||n==="none"){var s=kr(e,t,1),a=s&&ln(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ln(t,"borderTopColor"))}var o=new $e(this._pt,t.style,e,0,1,Cd),c=0,l=0,h,u,f,d,_,g,m,p,S,x,v,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ln(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=ln(t,e)||i,g?t.style[e]=g:yi(t,e)),h=[n,i],yd(h),n=h[0],i=h[1],f=n.match(yr)||[],E=i.match(yr)||[],E.length){for(;u=yr.exec(i);)m=u[0],S=i.substring(c,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=f[l++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Er(d,m)+v),p=parseFloat(m),x=m.substr((p+"").length),c=yr.lastIndex-x.length,x||(x=x||hn.units[e]||v,c===i.length&&(i+=x,o.e+=x)),v!==x&&(d=Mi(t,e,g,x)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=e==="display"&&i==="none"?Ld:Dd;return Jf.test(i)&&(o.e=0),this._pt=o,o},Gu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Gu[n]||n,e[1]=Gu[i]||i,e.join(" ")},LM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],ei[o]&&(c=1,o=o==="transformOrigin"?Je:pe),yi(n,o);c&&(yi(n,pe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Rs(n,1),a.uncache=1,Id(i)))}},Ya={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new $e(t._pt,e,n,0,0,LM);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Cs=[1,0,0,1,0,0],Bd={},kd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Wu=function(t){var e=ln(t,pe);return kd(e)?Cs:e.substr(7).match($f).map(ye)},$c=function(t,e){var n=t._gsap||Wi(t),i=t.style,s=Wu(t),a,o,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Cs:s):(s===Cs&&!t.offsetParent&&t!==wr&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,wr.appendChild(t)),s=Wu(t),c?i.display=c:yi(t,"display"),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):wr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},oc=function(t,e,n,i,s,a){var o=t._gsap,c=s||$c(t,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=c[0],_=c[1],g=c[2],m=c[3],p=c[4],S=c[5],x=e.split(" "),v=parseFloat(x[0])||0,E=parseFloat(x[1])||0,A,w,R,y;n?c!==Cs&&(w=d*m-_*g)&&(R=v*(m/w)+E*(-g/w)+(g*S-m*p)/w,y=v*(-_/w)+E*(d/w)-(d*S-_*p)/w,v=R,E=y):(A=Fd(t),v=A.x+(~x[0].indexOf("%")?v/100*A.width:v),E=A.y+(~(x[1]||x[0]).indexOf("%")?E/100*A.height:E)),i||i!==!1&&o.smooth?(p=v-l,S=E-h,o.xOffset=u+(p*d+S*g)-p,o.yOffset=f+(p*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Je]="0px 0px",a&&(pi(a,o,"xOrigin",l,v),pi(a,o,"yOrigin",h,E),pi(a,o,"xOffset",u,o.xOffset),pi(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+E)},Rs=function(t,e){var n=t._gsap||new Sd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(t),l=ln(t,Je)||"0",h,u,f,d,_,g,m,p,S,x,v,E,A,w,R,y,T,P,V,O,B,q,G,$,H,it,ot,_t,Dt,te,Vt,W;return h=u=f=g=m=p=S=x=v=0,d=_=1,n.svg=!!(t.getCTM&&Od(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[pe]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[pe]!=="none"?c[pe]:"")),i.scale=i.rotate=i.translate="none"),w=$c(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),oc(t,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,A=n.yOrigin||0,w!==Cs&&(P=w[0],V=w[1],O=w[2],B=w[3],h=q=w[4],u=G=w[5],w.length===6?(d=Math.sqrt(P*P+V*V),_=Math.sqrt(B*B+O*O),g=P||V?_r(V,P)*Oi:0,S=O||B?_r(O,B)*Oi+g:0,S&&(_*=Math.abs(Math.cos(S*Ar))),n.svg&&(h-=E-(E*P+A*O),u-=A-(E*V+A*B))):(W=w[6],te=w[7],ot=w[8],_t=w[9],Dt=w[10],Vt=w[11],h=w[12],u=w[13],f=w[14],R=_r(W,Dt),m=R*Oi,R&&(y=Math.cos(-R),T=Math.sin(-R),$=q*y+ot*T,H=G*y+_t*T,it=W*y+Dt*T,ot=q*-T+ot*y,_t=G*-T+_t*y,Dt=W*-T+Dt*y,Vt=te*-T+Vt*y,q=$,G=H,W=it),R=_r(-O,Dt),p=R*Oi,R&&(y=Math.cos(-R),T=Math.sin(-R),$=P*y-ot*T,H=V*y-_t*T,it=O*y-Dt*T,Vt=B*T+Vt*y,P=$,V=H,O=it),R=_r(V,P),g=R*Oi,R&&(y=Math.cos(R),T=Math.sin(R),$=P*y+V*T,H=q*y+G*T,V=V*y-P*T,G=G*y-q*T,P=$,q=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=ye(Math.sqrt(P*P+V*V+O*O)),_=ye(Math.sqrt(G*G+W*W)),R=_r(q,G),S=Math.abs(R)>2e-4?R*Oi:0,v=Vt?1/(Vt<0?-Vt:Vt):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!kd(ln(t,pe)),$&&t.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=ye(d),n.scaleY=ye(_),n.rotation=ye(g)+o,n.rotationX=ye(m)+o,n.rotationY=ye(p)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Je]=qa(l)),n.xOffset=n.yOffset=0,n.force3D=hn.force3D,n.renderTransform=n.svg?UM:Nd?zd:IM,n.uncache=0,n},qa=function(t){return(t=t.split(" "))[0]+" "+t[1]},tl=function(t,e,n){var i=Oe(e);return ye(parseFloat(e)+parseFloat(Mi(t,"x",n+"px",i)))+i},IM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,zd(t,e)},Ii="0deg",rs="0px",Ui=") ",zd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,S=n.target,x=n.zOrigin,v="",E=p==="auto"&&t&&t!==1||p===!0;if(x&&(u!==Ii||h!==Ii)){var A=parseFloat(h)*Ar,w=Math.sin(A),R=Math.cos(A),y;A=parseFloat(u)*Ar,y=Math.cos(A),a=tl(S,a,w*y*-x),o=tl(S,o,-Math.sin(A)*-x),c=tl(S,c,R*y*-x+x)}m!==rs&&(v+="perspective("+m+Ui),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||a!==rs||o!==rs||c!==rs)&&(v+=c!==rs||E?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Ui),l!==Ii&&(v+="rotate("+l+Ui),h!==Ii&&(v+="rotateY("+h+Ui),u!==Ii&&(v+="rotateX("+u+Ui),(f!==Ii||d!==Ii)&&(v+="skew("+f+", "+d+Ui),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ui),S.style[pe]=v||"translate(0, 0)"},UM=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,S=n.forceCSS,x=parseFloat(a),v=parseFloat(o),E,A,w,R,y;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ar,l*=Ar,E=Math.cos(c)*u,A=Math.sin(c)*u,w=Math.sin(c-l)*-f,R=Math.cos(c-l)*f,l&&(h*=Ar,y=Math.tan(l-h),y=Math.sqrt(1+y*y),w*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),E*=y,A*=y)),E=ye(E),A=ye(A),w=ye(w),R=ye(R)):(E=u,R=f,A=w=0),(x&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(x=Mi(d,"x",a,"px"),v=Mi(d,"y",o,"px")),(_||g||m||p)&&(x=ye(x+_-(_*E+g*w)+m),v=ye(v+g-(_*A+g*R)+p)),(i||s)&&(y=d.getBBox(),x=ye(x+i/100*y.width),v=ye(v+s/100*y.height)),y="matrix("+E+","+A+","+w+","+R+","+x+","+v+")",d.setAttribute("transform",y),S&&(d.style[pe]=y)},NM=function(t,e,n,i,s){var a=360,o=De(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Oi:1),l=c-i,h=i+l+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Bu)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Bu)%a-~~(l/a)*a)),t._pt=f=new $e(t._pt,e,n,i,l,_M),f.e=h,f.u="deg",t._props.push(n),f},Xu=function(t,e){for(var n in e)t[n]=e[n];return t},FM=function(t,e,n){var i=Xu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[pe]=e,o=Rs(n,1),yi(n,pe),n.setAttribute("transform",l)):(l=getComputedStyle(n)[pe],a[pe]=e,o=Rs(n,1),a[pe]=l);for(c in ei)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(d=Oe(l),_=Oe(h),u=d!==_?Mi(n,c,l,_):parseFloat(l),f=parseFloat(h),t._pt=new $e(t._pt,o,c,u,f-u,rc),t._pt.u=_||0,t._props.push(c));Xu(o,i)};Ke("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});Ya[t>1?"border"+r:r]=function(o,c,l,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return $n(o,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),o.init(c,d,u)}});var Vd={name:"css",register:ac,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,h,u,f,d,_,g,m,p,S,x,v,E,A,w,R,y;Yc||ac(),this.styles=this.styles||Ud(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(rn[g]&&Td(g,e,n,i,t,s)))){if(d=typeof h,_=Ya[g],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Es(h)),_)_(this,t,g,h,n)&&(w=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",_i.lastIndex=0,_i.test(l)||(m=Oe(l),p=Oe(h),p?m!==p&&(l=Mi(t,g,l,p)+p):m&&(h+=m)),this.add(o,"setProperty",l,h,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,i,t,s):c[g],De(l)&&~l.indexOf("random(")&&(l=Es(l)),Oe(l+"")||l==="auto"||(l+=hn.units[g]||Oe($n(t,g))||""),(l+"").charAt(1)==="="&&(l=$n(t,g))):l=$n(t,g),f=parseFloat(l),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Fn&&(g==="autoAlpha"&&(f===1&&$n(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,o.visibility),pi(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Fn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in ei,x){if(this.styles.save(g),y=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=ln(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=ln(t,"perspective"),T?t.style.perspective=T:yi(t,"perspective")}u=parseFloat(h)}if(v||(E=t._gsap,E.renderTransform&&!e.parseTransform||Rs(t,e.parseTransform),A=e.smoothOrigin!==!1&&E.smooth,v=this._pt=new $e(this._pt,o,pe,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new $e(this._pt,E,"scaleY",E.scaleY,(S?Er(E.scaleY,S+u):u)-E.scaleY||0,rc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Je,0,o[Je]),h=DM(h),E.svg?oc(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==E.zOrigin&&pi(this,E,"zOrigin",E.zOrigin,p),pi(this,o,g,qa(l),qa(h)));continue}else if(g==="svgOrigin"){oc(t,h,1,A,0,this);continue}else if(g in Bd){NM(this,E,g,f,S?Er(f,S+h):h);continue}else if(g==="smoothOrigin"){pi(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){FM(this,h,t);continue}}else g in o||(g=kr(g)||g);if(x||(u||u===0)&&(f||f===0)&&!gM.test(h)&&g in o)m=(l+"").substr((f+"").length),u||(u=0),p=Oe(h)||(g in hn.units?hn.units[g]:m),m!==p&&(f=Mi(t,g,l,p)),this._pt=new $e(this._pt,x?E:o,g,f,(S?Er(f,S+u):u)-f,!x&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?yM:rc),this._pt.u=p||0,x&&y!==h?(this._pt.b=l,this._pt.e=y,this._pt.r=xM):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=vM);else if(g in o)PM.call(this,t,g,l,S?S+h:h);else if(g in t)this.add(t,g,l||t[g],S?S+h:h,i,s);else if(g!=="parseTransform"){Fc(g,h);continue}x||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,l||t[g])),a.push(g)}}w&&Rd(this)},render:function(t,e){if(e.tween._time||!qc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:$n,aliases:Fn,getSetter:function(t,e,n){var i=Fn[e];return i&&i.indexOf(",")<0&&(e=i),e in ei&&e!==Je&&(t._gsap.x||$n(t,"x"))?n&&Ou===n?e==="scale"?bM:TM:(Ou=n||{})&&(e==="scale"?EM:wM):t.style&&!Ic(t.style[e])?MM:~e.indexOf("-")?SM:Wc(t,e)},core:{_removeProperty:yi,_getMatrix:$c}};je.utils.checkPrefix=kr;je.core.getStyleSaver=Ud;(function(r,t,e,n){var i=Ke(r+","+t+","+e,function(s){ei[s]=1});Ke(t,function(s){hn.units[s]="deg",Bd[s]=1}),Fn[i[13]]=r+","+t,Ke(n,function(s){var a=s.split(":");Fn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ke("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){hn.units[r]="px"});je.registerPlugin(Vd);var Bi=je.registerPlugin(Vd)||je;Bi.core.Tween;const OM="/cake/assets/gift-000-BfCVsNz5.png",BM="/cake/assets/cake-CNp0LLjc.png",lc={gift:new URL("../assets/gift.png",import.meta.url).href,cake:new URL("../assets/cake.png",import.meta.url).href,music:new URL("../assets/music.mp3",import.meta.url).href},kM=Object.assign({"../assets/gift/gift-000.png":OM}),zM=Object.assign({"../assets/cake/cake.png":BM}),Yu=Object.entries(kM).map(([r,t])=>{const e=r.match(/gift-(\d{3})\.png$/);return e?{angle:Number(e[1])%360,path:t}:null}).filter(Boolean).filter((r,t,e)=>e.findIndex(({angle:n})=>n===r.angle)===t).sort((r,t)=>r.angle-t.angle),qu=Object.entries(zM).map(([r,t])=>({file:r,path:t})).sort((r,t)=>r.file.localeCompare(t.file)),el={blue:5752831,violet:10315775,gold:16766842},Le={LOADING:"loading",GIFT:"gift",TRANSITION:"transition",CAKE:"cake"},VM=`
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
`,HM=`
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
`,Ku=[new Rt(16777215),new Rt(8378623),new Rt(11832575),new Rt(16767370),new Rt(16752101)];class GM extends Fa{constructor({count:t=1800,radius:e=24,depth:n=38,pixelRatio:i=1}={}){const s=new Pe,a=new Float32Array(t*3),o=new Float32Array(t),c=new Float32Array(t),l=new Float32Array(t),h=new Float32Array(t*3);for(let f=0;f<t;f+=1){const d=f*3,_=Math.random()*Math.PI*2,g=Math.pow(Math.random(),.72)*e;a[d]=Math.cos(_)*g,a[d+1]=(Math.random()-.5)*e*1.3,a[d+2]=-Math.random()*n-1.5,o[f]=.55+Math.pow(Math.random(),2.4)*3.15,c[f]=Math.random()*Math.PI*2,l[f]=.12+Math.random()*.46;const m=Ku[Math.floor(Math.random()*Ku.length)];h[d]=m.r,h[d+1]=m.g,h[d+2]=m.b}s.setAttribute("position",new ie(a,3)),s.setAttribute("aSize",new ie(o,1)),s.setAttribute("aPhase",new ie(c,1)),s.setAttribute("aSpeed",new ie(l,1)),s.setAttribute("aColor",new ie(h,3));const u=new Ee({uniforms:{uTime:{value:0},uPixelRatio:{value:i}},vertexShader:VM,fragmentShader:HM,transparent:!0,depthWrite:!1,blending:Ze});super(s,u),this.frustumCulled=!1}update(t,e){this.material.uniforms.uTime.value=t,this.rotation.y+=e*.004,this.rotation.z=Math.sin(t*.035)*.025}setPixelRatio(t){this.material.uniforms.uPixelRatio.value=t}}const WM=`
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
`,$u=`
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
`,XM=`
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
`,va=[16777215,16769690,8444159,12685823,16751839].map(r=>new Rt(r));class YM extends an{constructor({pixelRatio:t=1,maxBurst:e=1100,gatherCount:n=700}={}){super(),this.pixelRatio=t,this.maxBurst=e,this.gather=this.createGatherParticles(n),this.burst=this.createBurstParticles(e),this.add(this.gather,this.burst),this.gather.visible=!1}createGatherParticles(t){const e=new Pe,n=new Float32Array(t*3),i=new Float32Array(t*3),s=new Float32Array(t*3),a=new Float32Array(t),o=new Float32Array(t*3);for(let c=0;c<t;c+=1){const l=c*3,h=new D().randomDirection(),u=4.5+Math.random()*8;n[l]=h.x*u,n[l+1]=h.y*u,n[l+2]=h.z*u*.55,i[l]=(Math.random()-.5)*.25,i[l+1]=(Math.random()-.5)*.25,i[l+2]=(Math.random()-.5)*.25,s[l]=n[l]*.55+(Math.random()-.5)*3,s[l+1]=n[l+1]*.55+(Math.random()-.5)*3,s[l+2]=n[l+2]*.55+(Math.random()-.5)*3,a[c]=.9+Math.random()*3.4;const f=va[c%va.length];o[l]=f.r,o[l+1]=f.g,o[l+2]=f.b}return e.setAttribute("position",new ie(n,3)),e.setAttribute("aTarget",new ie(i,3)),e.setAttribute("aControl",new ie(s,3)),e.setAttribute("aSize",new ie(a,1)),e.setAttribute("aColor",new ie(o,3)),new Fa(e,new Ee({uniforms:{uProgress:{value:0},uPixelRatio:{value:this.pixelRatio}},vertexShader:WM,fragmentShader:$u,transparent:!0,depthWrite:!1,blending:Ze}))}createBurstParticles(t){const e=new Pe;return this.burstPositions=new Float32Array(t*3),this.burstVelocities=Array.from({length:t},()=>new D),this.burstLife=new Float32Array(t),this.burstMaxLife=new Float32Array(t),this.burstSizes=new Float32Array(t),this.burstAlpha=new Float32Array(t),this.burstColors=new Float32Array(t*3),e.setAttribute("position",new ie(this.burstPositions,3)),e.setAttribute("aSize",new ie(this.burstSizes,1)),e.setAttribute("aAlpha",new ie(this.burstAlpha,1)),e.setAttribute("aColor",new ie(this.burstColors,3)),e.setDrawRange(0,t),new Fa(e,new Ee({uniforms:{uPixelRatio:{value:this.pixelRatio}},vertexShader:XM,fragmentShader:$u,transparent:!0,depthWrite:!1,blending:Ze}))}startGather(t){return this.gather.position.copy(t),this.gather.material.uniforms.uProgress.value=0,this.gather.visible=!0,this.gather.material.uniforms.uProgress}stopGather(){this.gather.visible=!1}emitBurst(t,e=320,n=3.6){for(let i=0;i<Math.min(e,this.maxBurst);i+=1){const s=i*3,a=new D().randomDirection();a.y=a.y*.72+.22,a.normalize();const o=n*(.35+Math.random()*.95);this.burstPositions[s]=t.x+(Math.random()-.5)*.22,this.burstPositions[s+1]=t.y+(Math.random()-.5)*.22,this.burstPositions[s+2]=t.z+(Math.random()-.5)*.22,this.burstVelocities[i].copy(a).multiplyScalar(o),this.burstMaxLife[i]=.85+Math.random()*1.4,this.burstLife[i]=this.burstMaxLife[i],this.burstSizes[i]=.8+Math.random()*4.2;const c=va[Math.floor(Math.random()*va.length)];this.burstColors[s]=c.r,this.burstColors[s+1]=c.g,this.burstColors[s+2]=c.b,this.burstAlpha[i]=1}this.burst.geometry.attributes.position.needsUpdate=!0,this.burst.geometry.attributes.aColor.needsUpdate=!0,this.burst.geometry.attributes.aSize.needsUpdate=!0}update(t){for(let e=0;e<this.maxBurst;e+=1){if(this.burstLife[e]<=0)continue;const n=e*3;this.burstLife[e]-=t;const i=this.burstVelocities[e];i.multiplyScalar(Math.max(0,1-t*.72)),i.y-=t*.18,this.burstPositions[n]+=i.x*t,this.burstPositions[n+1]+=i.y*t,this.burstPositions[n+2]+=i.z*t;const s=Math.max(0,this.burstLife[e]/this.burstMaxLife[e]);this.burstAlpha[e]=s*s}this.burst.geometry.attributes.position.needsUpdate=!0,this.burst.geometry.attributes.aAlpha.needsUpdate=!0}setPixelRatio(t){this.gather.material.uniforms.uPixelRatio.value=t,this.burst.material.uniforms.uPixelRatio.value=t}}const qM=`
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
`,KM=`
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
`;class Ju extends an{constructor({texture:t,size:e=5.4,aspect:n=1,glowColor:i=9219839}){super(),this.material=new Ee({uniforms:{uTexture:{value:t},uTextureNext:{value:t},uTextureMix:{value:0},uTime:{value:0},uOpacity:{value:1},uDissolve:{value:0},uGlow:{value:.12},uHover:{value:0},uGlowColor:{value:new Rt(i)}},vertexShader:qM,fragmentShader:KM,transparent:!0,depthWrite:!1,side:bn});const s=n>=1?e:e*n,a=n>=1?e/n:e;this.mesh=new be(new Ls(s,a,36,36),this.material),this.mesh.userData.portal=this,this.add(this.mesh)}set opacity(t){this.material.uniforms.uOpacity.value=t}get opacity(){return this.material.uniforms.uOpacity.value}set dissolve(t){this.material.uniforms.uDissolve.value=t}get dissolve(){return this.material.uniforms.uDissolve.value}set glow(t){this.material.uniforms.uGlow.value=t}set hover(t){this.material.uniforms.uHover.value=t}setTextureBlend(t,e,n){this.material.uniforms.uTexture.value=t,this.material.uniforms.uTextureNext.value=e,this.material.uniforms.uTextureMix.value=n}update(t){this.material.uniforms.uTime.value=t}}function Zu(r,t,e,n=0){const i=[];for(let a=0;a<=150;a+=1){const o=a/150,c=o*Math.PI*2*e+n,l=r+Math.sin(o*Math.PI*4+n)*.18;i.push(new D(Math.cos(c)*l,(o-.5)*t+Math.sin(c*.5)*.2,Math.sin(c)*l*.52))}return new Uf(i,!1,"centripetal")}class $M extends an{constructor(){super();const t=[new Ba({color:11983103,emissive:6047944,emissiveIntensity:1.25,transparent:!0,opacity:.34,roughness:.12,metalness:.05,transmission:.72,thickness:.35,depthWrite:!1,blending:Ze}),new Ba({color:16762355,emissive:8077245,emissiveIntensity:1.05,transparent:!0,opacity:.25,roughness:.18,transmission:.65,thickness:.25,depthWrite:!1,blending:Ze})],e=new be(new Oa(Zu(2.25,3.25,1.65),190,.038,8,!1),t[0]),n=new be(new Oa(Zu(2.52,2.45,1.25,Math.PI),170,.026,8,!1),t[1]);e.rotation.z=-.08,n.rotation.z=.16,this.add(e,n),this.ribbons=[e,n]}update(t,e){this.rotation.y+=e*.18,this.rotation.z=Math.sin(t*.32)*.08,this.ribbons[0].material.opacity=.28+Math.sin(t*1.1)*.07,this.ribbons[1].material.opacity=.22+Math.cos(t*.9)*.06}}function Jc(r){return r.colorSpace=Ge,r.anisotropy=4,r.needsUpdate=!0,r}function Ns(r,t=1024){const e=document.createElement("canvas");e.width=t,e.height=t;const n=e.getContext("2d");return r(n,t),Jc(new Lm(e))}function Zc(){return Ns((r,t)=>{const e=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.12,"rgba(255,241,180,.95)"),e.addColorStop(.32,"rgba(140,178,255,.45)"),e.addColorStop(1,"rgba(65,70,255,0)"),r.fillStyle=e,r.fillRect(0,0,t,t)},256)}function JM(){return Ns((r,t)=>{r.translate(t/2,t/2);const e=r.createRadialGradient(0,0,0,0,0,t*.48);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.1,"rgba(255,244,193,.96)"),e.addColorStop(.38,"rgba(127,179,255,.34)"),e.addColorStop(1,"rgba(80,80,255,0)"),r.fillStyle=e,r.fillRect(-t/2,-t/2,t,t),r.strokeStyle="rgba(255,255,255,.9)",r.lineWidth=t*.018,r.beginPath(),r.moveTo(-t*.38,0),r.lineTo(t*.38,0),r.moveTo(0,-t*.38),r.lineTo(0,t*.38),r.stroke()},128)}function ZM(){return Ns((r,t)=>{const e=r.createRadialGradient(t/2,t*.62,0,t/2,t*.58,t*.42);e.addColorStop(0,"rgba(255,255,235,1)"),e.addColorStop(.18,"rgba(255,235,130,.98)"),e.addColorStop(.48,"rgba(255,135,35,.8)"),e.addColorStop(.82,"rgba(148,69,255,.3)"),e.addColorStop(1,"rgba(60,30,255,0)"),r.fillStyle=e,r.beginPath(),r.moveTo(t*.5,t*.05),r.bezierCurveTo(t*.72,t*.35,t*.84,t*.62,t*.5,t*.94),r.bezierCurveTo(t*.18,t*.62,t*.3,t*.35,t*.5,t*.05),r.fill()},256)}function Hd(r,t,e,n,i){for(let s=0;s<e;s+=1){const a=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*n,c=t/2+Math.cos(a)*o,l=i+Math.sin(a)*o,h=2+Math.random()*8;r.fillStyle=["#fff4bb","#8fd9ff","#cf9cff","#ffffff"][s%4],r.shadowColor=r.fillStyle,r.shadowBlur=8,r.beginPath();for(let u=0;u<10;u+=1){const f=u%2===0?h:h*.42,d=-Math.PI/2+u*Math.PI/5,_=c+Math.cos(d)*f,g=l+Math.sin(d)*f;u===0?r.moveTo(_,g):r.lineTo(_,g)}r.closePath(),r.fill()}r.shadowBlur=0}function jM(){return Ns((r,t)=>{const e=r.createRadialGradient(t/2,t*.46,20,t/2,t/2,t*.5);e.addColorStop(0,"rgba(71,77,205,.74)"),e.addColorStop(.62,"rgba(14,17,75,.4)"),e.addColorStop(1,"rgba(3,4,20,0)"),r.fillStyle=e,r.fillRect(0,0,t,t),Hd(r,t,72,t*.42,t*.48);const n=t*.245,i=t*.37,s=t*.51,a=t*.42,o=r.createLinearGradient(n,i,n+s,i+a);o.addColorStop(0,"#405be8"),o.addColorStop(.42,"#171c77"),o.addColorStop(.72,"#492183"),o.addColorStop(1,"#11164f"),r.shadowColor="#697dff",r.shadowBlur=45,r.fillStyle=o,r.roundRect(n,i,s,a,t*.025),r.fill(),r.strokeStyle="rgba(164,210,255,.8)",r.lineWidth=t*.009,r.stroke(),r.shadowBlur=0;const c=r.createLinearGradient(0,i,t,i+a);c.addColorStop(0,"rgba(173,225,255,.35)"),c.addColorStop(.5,"rgba(255,222,165,.88)"),c.addColorStop(1,"rgba(205,150,255,.4)"),r.fillStyle=c,r.fillRect(t*.465,i,t*.07,a),r.fillRect(n,t*.49,s,t*.065),r.strokeStyle="rgba(234,224,255,.72)",r.lineWidth=t*.045,r.lineCap="round",r.beginPath(),r.moveTo(t*.5,t*.4),r.bezierCurveTo(t*.34,t*.16,t*.18,t*.28,t*.45,t*.43),r.moveTo(t*.5,t*.4),r.bezierCurveTo(t*.66,t*.16,t*.82,t*.28,t*.55,t*.43),r.stroke(),r.fillStyle="#fff3ba",r.shadowColor="#ffffff",r.shadowBlur=24,r.font=`bold ${t*.12}px serif`,r.textAlign="center",r.fillText("✦",t/2,t*.44)})}function QM(){return Ns((r,t)=>{const e=r.createRadialGradient(t/2,t*.53,20,t/2,t/2,t*.48);e.addColorStop(0,"rgba(60,79,220,.58)"),e.addColorStop(.65,"rgba(16,18,72,.28)"),e.addColorStop(1,"rgba(3,4,20,0)"),r.fillStyle=e,r.fillRect(0,0,t,t),Hd(r,t,64,t*.43,t*.5);const n=r.createLinearGradient(0,t*.43,0,t*.78);n.addColorStop(0,"#315bc4"),n.addColorStop(.38,"#142b83"),n.addColorStop(.78,"#34136c"),n.addColorStop(1,"#10174f"),r.fillStyle=n,r.shadowColor="#487cff",r.shadowBlur=40,r.beginPath(),r.ellipse(t/2,t*.7,t*.29,t*.105,0,0,Math.PI*2),r.fill(),r.fillRect(t*.21,t*.48,t*.58,t*.22),r.beginPath(),r.ellipse(t/2,t*.48,t*.29,t*.105,0,0,Math.PI*2),r.fill(),r.shadowBlur=0,r.fillStyle="#fff3dd",r.beginPath(),r.ellipse(t/2,t*.46,t*.285,t*.095,0,0,Math.PI*2),r.fill(),r.strokeStyle="#ffd890",r.lineWidth=t*.012,r.stroke(),r.strokeStyle="rgba(255,219,125,.9)",r.lineWidth=t*.006;for(let i=0;i<24;i+=1){const s=t*.25+Math.random()*t*.5,a=t*.52+Math.random()*t*.16;r.beginPath(),r.moveTo(s-5,a),r.lineTo(s+5,a),r.moveTo(s,a-5),r.lineTo(s,a+5),r.stroke()}r.fillStyle="#f6d5ff",r.fillRect(t*.485,t*.245,t*.03,t*.19),r.strokeStyle="#bc7cff",r.lineWidth=t*.008,r.strokeRect(t*.485,t*.245,t*.03,t*.19)})}async function ju(r,t){const e=new Bf;try{const n=await e.loadAsync(r);return{texture:Jc(n),usedFallback:!1}}catch{return{texture:t(),usedFallback:!0}}}async function nl(r){const t=await new Bf().loadAsync(r);return Jc(t)}class tS extends an{constructor(){super();const t=new Ms({map:ZM(),transparent:!0,depthWrite:!1,blending:Ze,color:16777215});this.flame=new Ia(t),this.flame.scale.set(.42,.72,1),this.glow=new Ia(new Ms({map:Zc(),color:16751669,transparent:!0,opacity:.16,depthWrite:!1,blending:Ze})),this.glow.scale.setScalar(1.05),this.glow.position.z=-.04,this.light=new Xl(16756067,1.05,3.2,2),this.light.position.z=.3,this.add(this.glow,this.flame,this.light)}update(t){const e=Math.sin(t*14.3)*.055+Math.sin(t*23.7)*.032;this.flame.scale.set(.42-e*.45,.72+e,1),this.flame.position.x=Math.sin(t*8.4)*.025,this.glow.material.opacity=.13+Math.sin(t*11.2)*.035,this.glow.scale.setScalar(.98+Math.sin(t*7.5)*.06),this.light.intensity=.82+Math.sin(t*12.6)*.16+Math.random()*.08}}class Qu extends an{constructor({color:t=8887551,radius:e=2.7}={}){super(),this.fade=1,this.sprite=new Ia(new Ms({map:Zc(),color:t,transparent:!0,opacity:.055,depthWrite:!1,blending:Ze})),this.sprite.scale.setScalar(e*2.35),this.sprite.position.z=-.45,this.add(this.sprite);const n=new $a({color:t,transparent:!0,opacity:.26,depthWrite:!1,blending:Ze,side:bn});this.rings=[0,1,2].map(i=>{const s=new be(new Ja(e+i*.18,.012,8,180),n.clone());return s.scale.y=.42+i*.09,s.rotation.x=.1+i*.24,s.rotation.z=i*.8,this.add(s),s})}update(t,e){this.rings.forEach((n,i)=>{n.rotation.z+=e*(.12+i*.05)*(i%2===0?1:-1),n.material.opacity=(.085+Math.sin(t*(.7+i*.2)+i)*.035)*this.fade}),this.sprite.material.opacity=(.038+Math.sin(t*.85)*.012)*this.fade}}const vr=hi.clamp;class eS{constructor({canvas:t,ui:e}){this.canvas=t,this.ui=e,this.state=Le.LOADING,this.clock=new kf,this.pointer=new at(4,4),this.pointerTarget=new at,this.raycaster=new Eg,this.drag={active:!1,moved:!1,startX:0,startY:0,lastX:0,lastY:0},this.cakeRotationTarget={yaw:0,pitch:0},this.giftViewAngle=0,this.giftViewVelocity=7,this.loadingProgressValue=0,this.pendingGiftFramePaths=[],this.giftHoverTarget=0,this.giftHover=0,this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.tick=this.tick.bind(this)}async init(){this.setupRenderer(),this.setupScene(),this.bindEvents(),this.setLoadingProgress(12);const[t,e]=await Promise.all([this.loadGiftAssets().then(n=>(this.setLoadingProgress(54),n)),this.loadCakeAsset().then(n=>(this.setLoadingProgress(82),n))]);this.createWorld(t.frames,e),this.showFallbackNotice(t.usedFallback,e.usedFallback),this.setLoadingProgress(100),this.onResize(),this.renderer.setAnimationLoop(this.tick),window.setTimeout(()=>{this.ui.loading.classList.add("is-hidden"),this.state=Le.GIFT,window.setTimeout(()=>this.loadRemainingGiftFrames(),450)},500)}async loadGiftAssets(){if(Yu.length>0){const[e,...n]=Yu;return this.pendingGiftFramePaths=n,{frames:[{angle:e.angle,texture:await nl(e.path)}],usedFallback:!1}}const t=await ju(lc.gift,jM);return{frames:[{angle:0,texture:t.texture}],usedFallback:t.usedFallback}}async loadRemainingGiftFrames(){if(!this.pendingGiftFramePaths.length)return;const t=this.pendingGiftFramePaths;this.pendingGiftFramePaths=[];const e=await Promise.all(t.map(async({angle:n,path:i})=>{try{return{angle:n,texture:await nl(i)}}catch{return null}}));this.giftFrames.push(...e.filter(Boolean)),this.giftFrames.sort((n,i)=>n.angle-i.angle)}async loadCakeAsset(){if(qu.length>0){const[{path:e}]=qu;return{texture:await nl(e),usedFallback:!1,embeddedScene:!0}}const t=await ju(lc.cake,QM);return{texture:t.texture,usedFallback:t.usedFallback,embeddedScene:!1}}setupRenderer(){this.renderer=new ly({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.8)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=Ge,this.renderer.toneMapping=hc,this.renderer.toneMappingExposure=.92}setupScene(){this.scene=new Sm,this.scene.fog=new Mc(395037,.021),this.camera=new We(42,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,.15,11),this.composer=new py(this.renderer),this.composer.addPass(new my(this.scene,this.camera)),this.bloomPass=new Ur(new at(window.innerWidth,window.innerHeight),this.reducedMotion?.18:.24,.18,.86),this.composer.addPass(this.bloomPass),this.composer.addPass(new _y),this.presentationRoot=new an,this.scene.add(this.presentationRoot);const t=new pg(7439615,.58),e=new dg(10934271,2.1);e.position.set(-4,5,5);const n=new Xl(11560191,26,18,2);n.position.set(5,1,2);const i=new Xl(16763513,3.2,7,2);i.position.set(-4,-2,3),this.scene.add(t,e,n,i)}createWorld(t,e){this.starField=new GM({count:this.reducedMotion?900:1700,radius:25,depth:46,pixelRatio:this.renderer.getPixelRatio()}),this.scene.add(this.starField),this.magicParticles=new YM({pixelRatio:this.renderer.getPixelRatio(),maxBurst:this.reducedMotion?550:1150,gatherCount:this.reducedMotion?360:760}),this.presentationRoot.add(this.magicParticles),this.createGift(t),this.createCake(e),this.createTransitionFlash(),this.createCrystalDust()}createGift(t){this.giftGroup=new an,this.giftGroup.position.y=.15,this.giftFrames=t,this.giftPortal=new Ju({texture:t[0].texture,size:5.35,glowColor:el.blue}),this.giftPortal.glow=.015,this.giftHalo=new Qu({color:6786559,radius:2.45}),this.giftHalo.position.z=-.35,this.giftHalo.scale.setScalar(.9),this.giftDust=this.createOrbitDust(310,2.6,1.9),this.giftGroup.add(this.giftHalo,this.giftPortal,this.giftDust),this.presentationRoot.add(this.giftGroup)}createCake({texture:t,embeddedScene:e}){var s,a,o,c;this.cakeUsesEmbeddedScene=e,this.cakeStage=new an,this.cakeStage.visible=!1,this.cakeStage.position.y=-4,this.cakeStage.scale.setScalar(.36);const n=((s=t.image)==null?void 0:s.naturalWidth)||((a=t.image)==null?void 0:a.width)||1,i=((o=t.image)==null?void 0:o.naturalHeight)||((c=t.image)==null?void 0:c.height)||1;this.cakePortal=new Ju({texture:t,size:e?6.75:6.15,aspect:n/i,glowColor:e?el.violet:el.gold}),this.cakePortal.position.y=e?-.12:-.25,this.cakePortal.glow=e?.005:.06,this.cakePortal.opacity=0,this.cakeHalo=new Qu({color:9401087,radius:2.72}),this.cakeHalo.position.set(0,-.3,-.55),this.cakeHalo.scale.setScalar(.45),this.cakeRotator=new an,this.cakeRotator.position.y=-.42,this.createCakePedestal(),this.ribbon=new $M,this.ribbon.position.y=-.05,this.ribbon.visible=!e,this.cakeRotator.add(this.ribbon),this.flame=new tS,this.flame.position.set(0,1.58,.25),this.flame.visible=!e,this.cakeStage.add(this.cakeHalo,this.cakeRotator,this.cakePortal,this.flame),this.presentationRoot.add(this.cakeStage)}createCakePedestal(){const t=new Ba({color:7902975,emissive:3220085,emissiveIntensity:1.8,metalness:.12,roughness:.08,transmission:.68,thickness:.5,transparent:!0,opacity:.48,depthWrite:!1});this.pedestalRings=[{radius:2.2,tube:.045,y:-1.92},{radius:2.48,tube:.018,y:-1.75},{radius:1.9,tube:.012,y:-2.08}].map(({radius:e,tube:n,y:i},s)=>{const a=new be(new Ja(e,n,12,180),t.clone());return a.position.y=i,a.rotation.x=Math.PI/2,a.rotation.z=s*.55,this.cakeRotator.add(a),a})}createOrbitDust(t,e,n){const i=new Pe,s=new Float32Array(t*3);for(let a=0;a<t;a+=1){const o=a*3,c=Math.random()*Math.PI*2,l=e+(Math.random()-.5)*1.25;s[o]=Math.cos(c)*l,s[o+1]=Math.sin(c)*n+(Math.random()-.5)*.9,s[o+2]=-.18-Math.random()*1.25}return i.setAttribute("position",new ie(s,3)),new Fa(i,new Df({map:JM(),color:10471679,size:.045,sizeAttenuation:!0,transparent:!0,opacity:.58,alphaTest:.01,depthWrite:!1,blending:Ze}))}createTransitionFlash(){this.transitionFlash=new Ia(new Ms({map:Zc(),color:16767371,transparent:!0,opacity:0,depthWrite:!1,blending:Ze})),this.transitionFlash.scale.setScalar(.1),this.transitionFlash.position.z=.45,this.presentationRoot.add(this.transitionFlash)}createCrystalDust(){const t=new Ec(.13,0),e=new Ba({color:10412031,emissive:5255336,emissiveIntensity:1.4,transmission:.72,roughness:.05,metalness:.08,transparent:!0,opacity:.72});this.crystals=[];for(let n=0;n<18;n+=1){const i=new be(t,e.clone()),s=n%2===0?-1:1;i.position.set(s*(3.4+Math.random()*5.5),(Math.random()-.5)*8,-2-Math.random()*12),i.scale.setScalar(.45+Math.random()*1.8),i.userData.speed=.08+Math.random()*.2,i.userData.offset=Math.random()*Math.PI*2,this.scene.add(i),this.crystals.push(i)}}bindEvents(){window.addEventListener("resize",()=>this.onResize()),this.canvas.addEventListener("pointermove",t=>this.onPointerMove(t)),this.canvas.addEventListener("pointerdown",t=>this.onPointerDown(t)),this.canvas.addEventListener("pointerup",t=>this.onPointerUp(t)),this.canvas.addEventListener("pointercancel",()=>this.endDrag()),this.ui.giftTrigger.addEventListener("click",()=>this.openGift()),this.ui.soundToggle.addEventListener("click",()=>this.toggleMusic())}updatePointer(t){const e=this.canvas.getBoundingClientRect();this.pointerTarget.x=(t.clientX-e.left)/e.width*2-1,this.pointerTarget.y=-((t.clientY-e.top)/e.height)*2+1}onPointerMove(t){if(this.updatePointer(t),this.drag.active&&this.state===Le.CAKE){Math.hypot(t.clientX-this.drag.startX,t.clientY-this.drag.startY)>4&&(this.drag.moved=!0);const n=t.clientX-this.drag.lastX,i=t.clientY-this.drag.lastY;this.cakeRotationTarget.yaw=vr(this.cakeRotationTarget.yaw+n*.0024,-.16,.16),this.cakeRotationTarget.pitch=vr(this.cakeRotationTarget.pitch+i*.0018,-.08,.09),this.drag.lastX=t.clientX,this.drag.lastY=t.clientY}else if(this.drag.active&&this.state===Le.GIFT){Math.hypot(t.clientX-this.drag.startX,t.clientY-this.drag.startY)>4&&(this.drag.moved=!0);const n=t.clientX-this.drag.lastX;this.giftViewAngle-=n*.42,this.drag.lastX=t.clientX,this.drag.lastY=t.clientY}if(this.state===Le.GIFT){this.raycaster.setFromCamera(this.pointerTarget,this.camera);const e=this.raycaster.intersectObject(this.giftPortal.mesh,!1).length>0;this.giftHoverTarget=e?1:0,this.canvas.style.cursor=e?"pointer":"grab"}}onPointerDown(t){var e,n;this.updatePointer(t),this.drag.active=!0,this.drag.moved=!1,this.drag.startX=t.clientX,this.drag.startY=t.clientY,this.drag.lastX=t.clientX,this.drag.lastY=t.clientY,(n=(e=this.canvas).setPointerCapture)==null||n.call(e,t.pointerId),(this.state===Le.CAKE||this.state===Le.GIFT)&&this.canvas.classList.add("is-dragging")}onPointerUp(t){this.updatePointer(t);const e=!this.drag.moved;if(this.endDrag(),!!e){if(this.raycaster.setFromCamera(this.pointerTarget,this.camera),this.state===Le.GIFT)this.raycaster.intersectObject(this.giftPortal.mesh,!1).length>0&&this.openGift();else if(this.state===Le.CAKE){const n=this.raycaster.intersectObject(this.cakePortal.mesh,!1);n.length>0&&this.sparkCake(n[0].point)}}}endDrag(){this.drag.active=!1,this.canvas.classList.remove("is-dragging")}openGift(){if(this.state!==Le.GIFT)return;this.state=Le.TRANSITION,this.ui.intro.classList.add("is-hidden"),this.tryStartMusic();const t=this.magicParticles.startGather(this.giftGroup.position),e=Bi.timeline();e.to(this.giftPortal.material.uniforms.uGlow,{value:1.35,duration:.5,ease:"power2.in"},0),e.to(this.giftGroup.scale,{x:1.08,y:1.08,z:1.08,duration:.5,ease:"power2.out"},0),e.to(t,{value:1,duration:1,ease:"power3.in"},.5),e.call(()=>{this.magicParticles.emitBurst(this.giftGroup.position,this.reducedMotion?280:760,4.6),this.flashMagic(.78)},[],1.5),e.to(this.giftPortal.material.uniforms.uDissolve,{value:1,duration:1,ease:"power2.inOut"},1.5),e.to(this.giftPortal.material.uniforms.uOpacity,{value:0,duration:.82,ease:"power2.in"},1.68),e.to(this.giftHalo.scale,{x:2.2,y:2.2,z:2.2,duration:.9,ease:"power3.out"},1.52),e.to(this.giftHalo,{fade:0,duration:.7,ease:"power2.in"},1.8),e.call(()=>{this.magicParticles.emitBurst(this.giftGroup.position,this.reducedMotion?150:380,2.8)},[],2.05),e.call(()=>{this.giftGroup.visible=!1,this.magicParticles.stopGather(),this.revealCake()},[],2.52)}flashMagic(t=1){this.transitionFlash.material.opacity=0,this.transitionFlash.scale.setScalar(.1),Bi.timeline().to(this.transitionFlash.material,{opacity:t,duration:.16,ease:"power2.out"}).to(this.transitionFlash.scale,{x:11,y:11,z:11,duration:.82,ease:"power3.out"},0).to(this.transitionFlash.material,{opacity:0,duration:.65,ease:"power2.in"},.2)}revealCake(){this.cakeStage.visible=!0,this.cakeStage.position.y=-4,this.cakeStage.scale.setScalar(.34),this.cakePortal.opacity=0,this.cakePortal.glow=this.cakeUsesEmbeddedScene?.08:.42,this.cakeHalo.scale.setScalar(.42),this.cakeRotationTarget.yaw=0,this.cakeRotationTarget.pitch=0,this.cakeRotator.rotation.y=-.1,Bi.timeline({onComplete:()=>{this.state=Le.CAKE,this.showBlessing()}}).to(this.cakeStage.position,{y:this.getCakeRestY(),duration:1.75,ease:"power3.out"},0).to(this.cakeStage.scale,{x:1,y:1,z:1,duration:1.65,ease:"back.out(1.25)"},.08).to(this.cakePortal.material.uniforms.uOpacity,{value:1,duration:1.2,ease:"power2.out"},.12).to(this.cakePortal.material.uniforms.uGlow,{value:this.cakeUsesEmbeddedScene?.008:.06,duration:1.5,ease:"power2.out"},.2).to(this.cakeHalo.scale,{x:1,y:1,z:1,duration:1.5,ease:"power3.out"},.05).to(this.cakeRotator.rotation,{y:0,duration:1.8,ease:"power3.out"},.05).call(()=>{this.magicParticles.emitBurst(new D(0,this.getCakeRestY(),0),this.reducedMotion?220:520,2.9)},[],.55)}showBlessing(){this.ui.blessing.classList.add("is-visible"),Bi.to(this.ui.blessing,{opacity:1,y:0,scale:1,duration:1.35,ease:"power3.out"}),Bi.to(this.ui.cakeGuide,{autoAlpha:1,y:0,duration:.8,delay:.65,ease:"power2.out"})}sparkCake(t){const e=this.presentationRoot.worldToLocal(t.clone());this.magicParticles.emitBurst(e,this.reducedMotion?220:520,3.4),this.flashMagic(.35),Bi.fromTo(this.cakeStage.scale,{x:1.03,y:1.03,z:1.03},{x:1,y:1,z:1,duration:.55,ease:"elastic.out(1, 0.4)"})}tryStartMusic(){var t;(t=this.ui.music)!=null&&t.src&&(this.ui.music.volume=.48,this.ui.music.play().then(()=>this.ui.soundToggle.classList.add("is-playing")).catch(()=>{}))}toggleMusic(){this.ui.music.paused?this.tryStartMusic():(this.ui.music.pause(),this.ui.soundToggle.classList.remove("is-playing"))}setLoadingProgress(t){this.loadingProgressValue=Math.max(this.loadingProgressValue,t),this.ui.loadingProgress.style.width=`${this.loadingProgressValue}%`}showFallbackNotice(t,e){if(!t&&!e)return;const n=[t&&"gift.png",e&&"cake.png"].filter(Boolean).join("、");this.ui.assetNotice.textContent=`未找到 ${n}，当前使用内置梦幻占位图。将正式图片放入 assets/ 后会自动替换。`,this.ui.assetNotice.classList.add("is-visible"),window.setTimeout(()=>this.ui.assetNotice.classList.remove("is-visible"),9e3)}getCakeRestY(){return window.innerWidth/window.innerHeight<.72?-.72:-.58}updateGiftTexture(t){var u;if(!((u=this.giftFrames)!=null&&u.length))return;if(this.giftFrames.length===1){const[{texture:f}]=this.giftFrames;this.giftPortal.setTextureBlend(f,f,0);return}const e=(t%360+360)%360;let n=-1;for(let f=0;f<this.giftFrames.length&&this.giftFrames[f].angle<=e;f+=1)n=f;n<0&&(n=this.giftFrames.length-1);const i=(n+1)%this.giftFrames.length,s=this.giftFrames[n],a=this.giftFrames[i],o=s.angle,c=i===0?a.angle+360:a.angle,l=e<o?e+360:e,h=vr((l-o)/Math.max(1,c-o),0,1);this.giftPortal.setTextureBlend(s.texture,a.texture,h)}onResize(){var i,s,a;const t=window.innerWidth,e=window.innerHeight,n=Math.min(window.devicePixelRatio,1.8);if(this.camera.aspect=t/e,this.camera.position.z=t/e<.72?12.4:11,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(n),this.renderer.setSize(t,e),this.composer.setPixelRatio(n),this.composer.setSize(t,e),(i=this.starField)==null||i.setPixelRatio(n),(s=this.magicParticles)==null||s.setPixelRatio(n),this.presentationRoot){const o=t/e<.72?vr(t/430,.78,.98):1;this.presentationRoot.scale.setScalar(o)}(a=this.cakeStage)!=null&&a.visible&&this.state===Le.CAKE&&(this.cakeStage.position.y=this.getCakeRestY())}async replaceCakeWithGLB(t){const{GLTFLoader:e}=await jd(async()=>{const{GLTFLoader:i}=await import("./GLTFLoader-CWZr-kxB.js");return{GLTFLoader:i}},[]),n=await new e().loadAsync(t);return this.cakeModel&&this.cakeRotator.remove(this.cakeModel),this.cakeModel=n.scene,this.cakeModel.scale.setScalar(1.4),this.cakeRotator.add(this.cakeModel),this.cakePortal.visible=!1,this.cakeModel}updateScene(t,e){if(this.pointer.lerp(this.pointerTarget,1-Math.pow(.002,e)),this.camera.position.x=hi.lerp(this.camera.position.x,this.pointer.x*.34,1-Math.pow(.01,e)),this.camera.position.y=hi.lerp(this.camera.position.y,.15+this.pointer.y*.2,1-Math.pow(.01,e)),this.camera.lookAt(0,-.05,0),this.starField.update(t,e),this.magicParticles.update(e),this.giftPortal.update(t),this.cakePortal.update(t),this.giftHalo.update(t,e),this.cakeHalo.update(t,e),this.ribbon.update(t,e),this.flame.update(t),this.crystals.forEach(n=>{n.rotation.x+=e*n.userData.speed,n.rotation.y+=e*n.userData.speed*1.25,n.position.y+=Math.sin(t*n.userData.speed+n.userData.offset)*e*.08}),this.state===Le.GIFT){this.giftHover=hi.lerp(this.giftHover,this.giftHoverTarget,1-Math.pow(8e-4,e)),this.giftPortal.hover=this.giftHover;const n=Math.sin(t*.82)*.18;this.giftGroup.position.y=.15+n+this.giftHover*.08,this.giftGroup.rotation.z=Math.sin(t*.38)*.025;const i=1+this.giftHover*.055;this.giftGroup.scale.lerp(new D(i,i,i),1-Math.pow(.002,e)),this.giftDust.rotation.z+=e*(.08+this.giftHover*.08),this.giftDust.rotation.y-=e*.045,this.drag.active||(this.giftViewAngle+=e*(this.giftViewVelocity+this.giftHover*3.5)),this.updateGiftTexture(this.giftViewAngle)}if(this.cakeStage.visible){if(!this.drag.active&&this.state===Le.CAKE){const o=1-Math.pow(.16,e);this.cakeRotationTarget.yaw=hi.lerp(this.cakeRotationTarget.yaw,0,o),this.cakeRotationTarget.pitch=hi.lerp(this.cakeRotationTarget.pitch,0,o)}const n=this.state===Le.CAKE?Math.sin(t*.48)*.035:0,i=this.state===Le.CAKE?Math.cos(t*.38)*.012:0,s=vr(this.cakeRotationTarget.yaw+n,-.18,.18),a=vr(this.cakeRotationTarget.pitch+i,-.09,.1);this.cakeStage.rotation.x=hi.lerp(this.cakeStage.rotation.x,a,1-Math.pow(.003,e)),this.cakeRotator.rotation.y=hi.lerp(this.cakeRotator.rotation.y,s,1-Math.pow(.002,e)),this.cakePortal.rotation.y=this.cakeRotator.rotation.y*.58,this.cakePortal.position.x=this.cakeRotator.rotation.y*.18,this.pedestalRings.forEach((o,c)=>{o.rotation.z+=e*(.08+c*.035)*(c%2===0?1:-1)})}}tick(){const t=Math.min(this.clock.getDelta(),.05),e=this.clock.elapsedTime;this.starField&&this.updateScene(e,t),this.composer.render()}}const Gd=document.querySelector("#birthday-music");Gd.src=lc.music;const nS=new eS({canvas:document.querySelector("#webgl"),ui:{loading:document.querySelector("#loading"),loadingProgress:document.querySelector("#loading-progress"),intro:document.querySelector("#intro-ui"),giftTrigger:document.querySelector("#gift-trigger"),blessing:document.querySelector("#blessing"),cakeGuide:document.querySelector("#cake-guide"),soundToggle:document.querySelector("#sound-toggle"),assetNotice:document.querySelector("#asset-notice"),music:Gd}});nS.init();export{Em as $,aS as A,ie as B,Rt as C,dg as D,be as E,uS as F,lS as G,Pf as H,oS as I,cS as J,Fa as K,Is as L,Ba as M,Bs as N,_e as O,Xl as P,Vr as Q,pl as R,Ge as S,iS as T,an as U,at as V,We as W,hi as X,Ac as Y,Rf as Z,hS as _,sS as a,Ra as a0,Hl as a1,La as a2,Ie as a3,za as a4,ka as a5,ja as a6,Xt as a7,vi as a8,Za as a9,Si as aa,ni as ab,rS as b,dS as c,Dr as d,fS as e,zt as f,D as g,zh as h,Bf as i,pS as j,Tm as k,Hi as l,ao as m,Tp as n,Un as o,cn as p,ml as q,Vi as r,Df as s,Ti as t,Dm as u,$m as v,bn as w,$a as x,Qt as y,Pe as z};
