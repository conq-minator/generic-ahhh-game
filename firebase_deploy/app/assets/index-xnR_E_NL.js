var of=Object.defineProperty;var rl=i=>{throw TypeError(i)};var cf=(i,t,e)=>t in i?of(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var F=(i,t,e)=>cf(i,typeof t!="symbol"?t+"":t,e),no=(i,t,e)=>t.has(i)||rl("Cannot "+e);var O=(i,t,e)=>(no(i,t,"read from private field"),e?e.call(i):t.get(i)),ee=(i,t,e)=>t.has(i)?rl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),Zt=(i,t,e,n)=>(no(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),Ot=(i,t,e)=>(no(i,t,"access private method"),e);var al=(i,t,e,n)=>({set _(s){Zt(i,t,s,e)},get _(){return O(i,t,n)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ac="162",lf=0,ol=1,uf=2,hh=1,dh=2,Zn=3,Li=0,Xe=1,Un=2,Ci=0,Ws=1,cl=2,ll=3,ul=4,hf=5,Yi=100,df=101,ff=102,hl=103,dl=104,pf=200,mf=201,gf=202,_f=203,Ko=204,Jo=205,vf=206,yf=207,xf=208,wf=209,Sf=210,Mf=211,Ef=212,bf=213,Tf=214,Af=0,Cf=1,Rf=2,ba=3,Pf=4,Lf=5,If=6,Nf=7,fh=0,Df=1,Uf=2,Ri=0,Of=1,Ff=2,Bf=3,ph=4,kf=5,zf=6,Gf=7,mh=300,tr=301,er=302,Zo=303,jo=304,Ga=306,Qo=1e3,Mn=1001,tc=1002,He=1003,fl=1004,hr=1005,Ke=1006,io=1007,ji=1008,Pi=1009,Hf=1010,Vf=1011,Cc=1012,gh=1013,Ai=1014,si=1015,Ar=1016,_h=1017,vh=1018,rs=1020,Wf=1021,En=1023,Xf=1024,qf=1025,as=1026,nr=1027,$f=1028,yh=1029,Yf=1030,xh=1031,wh=1033,so=33776,ro=33777,ao=33778,oo=33779,pl=35840,ml=35841,gl=35842,_l=35843,Sh=36196,vl=37492,yl=37496,xl=37808,wl=37809,Sl=37810,Ml=37811,El=37812,bl=37813,Tl=37814,Al=37815,Cl=37816,Rl=37817,Pl=37818,Ll=37819,Il=37820,Nl=37821,co=36492,Dl=36494,Ul=36495,Kf=36283,Ol=36284,Fl=36285,Bl=36286,Jf=3200,Zf=3201,Mh=0,jf=1,Si="",Pn="srgb",Ni="srgb-linear",Rc="display-p3",Ha="display-p3-linear",Ta="linear",le="srgb",Aa="rec709",Ca="p3",gs=7680,kl=519,Qf=512,tp=513,ep=514,Eh=515,np=516,ip=517,sp=518,rp=519,zl=35044,Gl="300 es",ec=1035,ri=2e3,Ra=2001;class ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lo=Math.PI/180,nc=180/Math.PI;function or(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Oe(i,t,e){return Math.max(t,Math.min(e,i))}function ap(i,t){return(i%t+t)%t}function uo(i,t,e){return(1-e)*i+e*t}function Hl(i){return(i&i-1)===0&&i!==0}function ic(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,a,o,c,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],v=s[0],f=s[3],p=s[6],w=s[1],_=s[4],S=s[7],P=s[2],A=s[5],T=s[8];return r[0]=a*v+o*w+c*P,r[3]=a*f+o*_+c*A,r[6]=a*p+o*S+c*T,r[1]=l*v+u*w+h*P,r[4]=l*f+u*_+h*A,r[7]=l*p+u*S+h*T,r[2]=d*v+m*w+g*P,r[5]=d*f+m*_+g*A,r[8]=d*p+m*S+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,m=l*r-a*c,g=e*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=h*v,t[1]=(s*l-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(u*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ho.makeScale(t,e)),this}rotate(t){return this.premultiply(ho.makeRotation(-t)),this}translate(t,e){return this.premultiply(ho.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ho=new qt;function bh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function op(){const i=Pa("canvas");return i.style.display="block",i}const Vl={};function cp(i){i in Vl||(Vl[i]=!0,console.warn(i))}const Wl=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xl=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xr={[Ni]:{transfer:Ta,primaries:Aa,toReference:i=>i,fromReference:i=>i},[Pn]:{transfer:le,primaries:Aa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ha]:{transfer:Ta,primaries:Ca,toReference:i=>i.applyMatrix3(Xl),fromReference:i=>i.applyMatrix3(Wl)},[Rc]:{transfer:le,primaries:Ca,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xl),fromReference:i=>i.applyMatrix3(Wl).convertLinearToSRGB()}},lp=new Set([Ni,Ha]),ae={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!lp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Xr[t].toReference,s=Xr[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Xr[i].primaries},getTransfer:function(i){return i===Si?Ta:Xr[i].transfer}};function Xs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _s;class Th{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Pa("canvas")),_s.width=t.width,_s.height=t.height;const n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Xs(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xs(e[n]/255)*255):e[n]=Xs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let up=0;class Ah{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hp=0;class qe extends ar{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Mn,s=Mn,r=Ke,a=ji,o=En,c=Pi,l=qe.DEFAULT_ANISOTROPY,u=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=or(),this.name="",this.source=new Ah(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=mh;qe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],v=c[2],f=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,S=(m+1)/2,P=(p+1)/2,A=(u+d)/4,T=(h+v)/4,N=(g+f)/4;return _>S&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=T/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=N/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=N/r),this.set(n,s,r,e),this}let w=Math.sqrt((f-g)*(f-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(h-v)/w,this.z=(d-u)/w,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dp extends ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ah(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends dp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ch extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fp extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(h!==v||c!==d||l!==m||u!==g){let f=1-o;const p=c*d+l*m+u*g+h*v,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),A=Math.atan2(P,p*w);f=Math.sin(f*A)/P,o=Math.sin(o*A)/P}const S=o*w;if(c=c*f+d*S,l=l*f+m*S,u=u*f+g*S,h=h*f+v*S,f===1-o){const P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+u*h+c*m-l*d,t[e+1]=c*g+u*d+l*h-o*m,t[e+2]=l*g+u*m+o*d-c*h,t[e+3]=u*g-o*h-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mo=new R,ql=new kr;class zr{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),$r.subVectors(this.max,fr),vs.subVectors(t.a,fr),ys.subVectors(t.b,fr),xs.subVectors(t.c,fr),pi.subVectors(ys,vs),mi.subVectors(xs,ys),Bi.subVectors(vs,xs);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Bi.z,Bi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Bi.z,0,-Bi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Bi.y,Bi.x,0];return!go(e,vs,ys,xs,$r)||(e=[1,0,0,0,1,0,0,0,1],!go(e,vs,ys,xs,$r))?!1:(Yr.crossVectors(pi,mi),e=[Yr.x,Yr.y,Yr.z],go(e,vs,ys,xs,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new R,new R,new R,new R,new R,new R,new R,new R],_n=new R,qr=new zr,vs=new R,ys=new R,xs=new R,pi=new R,mi=new R,Bi=new R,fr=new R,$r=new R,Yr=new R,ki=new R;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ki.fromArray(i,r);const o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const pp=new zr,pr=new R,_o=new R;class Pc{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);const e=pr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(_o)),this.expandByPoint(pr.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new R,vo=new R,Kr=new R,gi=new R,yo=new R,Jr=new R,xo=new R;class mp{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vo.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(vo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Kr),o=gi.dot(this.direction),c=-gi.dot(Kr),l=gi.lengthSq(),u=Math.abs(1-a*a);let h,d,m,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,m=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vo).addScaledVector(Kr,d),m}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),Jr.subVectors(n,t),xo.crossVectors(yo,Jr);let a=this.direction.dot(xo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gi.subVectors(this.origin,t);const c=o*this.direction.dot(Jr.crossVectors(gi,Jr));if(c<0)return null;const l=o*this.direction.dot(yo.cross(gi));if(l<0||c+l>a)return null;const u=-o*gi.dot(xo);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,a,o,c,l,u,h,d,m,g,v,f){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,m,g,v,f)}set(t,e,n,s,r,a,o,c,l,u,h,d,m,g,v,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=m,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),a=1/ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=a*u,m=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=d-v*l,e[9]=-o*c,e[2]=v-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,m=c*h,g=l*u,v=l*h;e[0]=d+v*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,m=c*h,g=l*u,v=l*h;e[0]=d-v*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=v-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,m=a*h,g=o*u,v=o*h;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+v,e[1]=c*h,e[5]=v*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=v-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*h+g,e[10]=d-v*h}else if(t.order==="XZY"){const d=a*c,m=a*l,g=o*c,v=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+v,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gp,t,_p)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),_i.crossVectors(n,tn),_i.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),_i.crossVectors(n,tn)),_i.normalize(),Zr.crossVectors(tn,_i),s[0]=_i.x,s[4]=Zr.x,s[8]=tn.x,s[1]=_i.y,s[5]=Zr.y,s[9]=tn.y,s[2]=_i.z,s[6]=Zr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],v=n[6],f=n[10],p=n[14],w=n[3],_=n[7],S=n[11],P=n[15],A=s[0],T=s[4],N=s[8],V=s[12],y=s[1],b=s[5],Z=s[9],j=s[13],L=s[2],X=s[6],z=s[10],K=s[14],Y=s[3],q=s[7],rt=s[11],nt=s[15];return r[0]=a*A+o*y+c*L+l*Y,r[4]=a*T+o*b+c*X+l*q,r[8]=a*N+o*Z+c*z+l*rt,r[12]=a*V+o*j+c*K+l*nt,r[1]=u*A+h*y+d*L+m*Y,r[5]=u*T+h*b+d*X+m*q,r[9]=u*N+h*Z+d*z+m*rt,r[13]=u*V+h*j+d*K+m*nt,r[2]=g*A+v*y+f*L+p*Y,r[6]=g*T+v*b+f*X+p*q,r[10]=g*N+v*Z+f*z+p*rt,r[14]=g*V+v*j+f*K+p*nt,r[3]=w*A+_*y+S*L+P*Y,r[7]=w*T+_*b+S*X+P*q,r[11]=w*N+_*Z+S*z+P*rt,r[15]=w*V+_*j+S*K+P*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],m=t[14],g=t[3],v=t[7],f=t[11],p=t[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*m-n*c*m)+v*(+e*c*m-e*l*d+r*a*d-s*a*m+s*l*u-r*c*u)+f*(+e*l*h-e*o*m-r*a*h+n*a*m+r*o*u-n*l*u)+p*(-s*o*u-e*c*h+e*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],m=t[11],g=t[12],v=t[13],f=t[14],p=t[15],w=h*f*l-v*d*l+v*c*m-o*f*m-h*c*p+o*d*p,_=g*d*l-u*f*l-g*c*m+a*f*m+u*c*p-a*d*p,S=u*v*l-g*h*l+g*o*m-a*v*m-u*o*p+a*h*p,P=g*h*c-u*v*c-g*o*d+a*v*d+u*o*f-a*h*f,A=e*w+n*_+s*S+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=w*T,t[1]=(v*d*r-h*f*r-v*s*m+n*f*m+h*s*p-n*d*p)*T,t[2]=(o*f*r-v*c*r+v*s*l-n*f*l-o*s*p+n*c*p)*T,t[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*m-n*c*m)*T,t[4]=_*T,t[5]=(u*f*r-g*d*r+g*s*m-e*f*m-u*s*p+e*d*p)*T,t[6]=(g*c*r-a*f*r-g*s*l+e*f*l+a*s*p-e*c*p)*T,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*m+e*c*m)*T,t[8]=S*T,t[9]=(g*h*r-u*v*r-g*n*m+e*v*m+u*n*p-e*h*p)*T,t[10]=(a*v*r-g*o*r+g*n*l-e*v*l-a*n*p+e*o*p)*T,t[11]=(u*o*r-a*h*r-u*n*l+e*h*l+a*n*m-e*o*m)*T,t[12]=P*T,t[13]=(u*v*s-g*h*s+g*n*d-e*v*d-u*n*f+e*h*f)*T,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*f-e*o*f)*T,t[15]=(a*h*s-u*o*s+u*n*c-e*h*c-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,m=r*u,g=r*h,v=a*u,f=a*h,p=o*h,w=c*l,_=c*u,S=c*h,P=n.x,A=n.y,T=n.z;return s[0]=(1-(v+p))*P,s[1]=(m+S)*P,s[2]=(g-_)*P,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(d+p))*A,s[6]=(f+w)*A,s[7]=0,s[8]=(g+_)*T,s[9]=(f-w)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ws.set(s[0],s[1],s[2]).length();const a=ws.set(s[4],s[5],s[6]).length(),o=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const l=1/r,u=1/a,h=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,e.setFromRotationMatrix(vn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=ri){const c=this.elements,l=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(o===ri)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ra)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=ri){const c=this.elements,l=1/(e-t),u=1/(n-s),h=1/(a-r),d=(e+t)*l,m=(n+s)*u;let g,v;if(o===ri)g=(a+r)*h,v=-2*h;else if(o===Ra)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ws=new R,vn=new _e,gp=new R(0,0,0),_p=new R(1,1,1),_i=new R,Zr=new R,tn=new R,$l=new _e,Yl=new kr;class Vn{constructor(t=0,e=0,n=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return $l.makeRotationFromQuaternion(t),this.setFromRotationMatrix($l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class Rh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vp=0;const Kl=new R,Ss=new kr,Yn=new _e,jr=new R,mr=new R,yp=new R,xp=new kr,Jl=new R(1,0,0),Zl=new R(0,1,0),jl=new R(0,0,1),wp={type:"added"},Sp={type:"removed"},wo={type:"childadded",child:null},So={type:"childremoved",child:null};class Fe extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new R,e=new Vn,n=new kr,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new qt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(Jl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return Kl.copy(t).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(mr,jr,this.up):Yn.lookAt(jr,mr,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(wp),wo.child=t,this.dispatchEvent(wo),wo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,xp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new R(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new R,Kn=new R,Mo=new R,Jn=new R,Ms=new R,Es=new R,Ql=new R,Eo=new R,bo=new R,To=new R;class On{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Kn.subVectors(n,e),Mo.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Kn),c=yn.dot(Mo),l=Kn.dot(Kn),u=Kn.dot(Mo),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Kn.subVectors(t,e),yn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),yn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return On.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return On.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return On.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return On.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return On.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Ms.subVectors(s,n),Es.subVectors(r,n),Eo.subVectors(t,n);const c=Ms.dot(Eo),l=Es.dot(Eo);if(c<=0&&l<=0)return e.copy(n);bo.subVectors(t,s);const u=Ms.dot(bo),h=Es.dot(bo);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ms,a);To.subVectors(t,r);const m=Ms.dot(To),g=Es.dot(To);if(g>=0&&m<=g)return e.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Es,o);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Ql.subVectors(r,s),o=(h-u)/(h-u+(m-g)),e.copy(s).addScaledVector(Ql,o);const p=1/(f+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(Ms,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=ap(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ao(a,r,t+1/3),this.g=Ao(a,r,t),this.b=Ao(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xs(t.r),this.g=Xs(t.g),this.b=Xs(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return ae.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Oe(Ne.r*255,0,255))*65536+Math.round(Oe(Ne.g*255,0,255))*256+Math.round(Oe(Ne.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Pn){ae.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(Qr);const n=uo(vi.h,Qr.h,e),s=uo(vi.s,Qr.s,e),r=uo(vi.l,Qr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new te;te.NAMES=Ph;let Mp=0;class Gr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Ws,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ko,this.blendDst=Jo,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Jo&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ls extends Gr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new R,ta=new ut;class zn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return cp("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}}class Lh extends zn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ih extends zn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends zn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ep=0;const fn=new _e,Co=new Fe,bs=new R,en=new zr,gr=new zr,Te=new R;class ln extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bh(t)?Ih:Lh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new fe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(en.min,gr.min),en.expandByPoint(Te),Te.addVectors(en.max,gr.max),en.expandByPoint(Te)):(en.expandByPoint(gr.min),en.expandByPoint(gr.max))}en.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Te.fromBufferAttribute(o,l),c&&(bs.fromBufferAttribute(t,l),Te.add(bs)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new R,c[N]=new R;const l=new R,u=new R,h=new R,d=new ut,m=new ut,g=new ut,v=new R,f=new R;function p(N,V,y){l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,V),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,N),m.fromBufferAttribute(r,V),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(b),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(b),o[N].add(v),o[V].add(v),o[y].add(v),c[N].add(f),c[V].add(f),c[y].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,V=w.length;N<V;++N){const y=w[N],b=y.start,Z=y.count;for(let j=b,L=b+Z;j<L;j+=3)p(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const _=new R,S=new R,P=new R,A=new R;function T(N){P.fromBufferAttribute(s,N),A.copy(P);const V=o[N];_.copy(V),_.sub(P.multiplyScalar(P.dot(V))).normalize(),S.crossVectors(A,V);const b=S.dot(c[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,b)}for(let N=0,V=w.length;N<V;++N){const y=w[N],b=y.start,Z=y.count;for(let j=b,L=b+Z;j<L;j+=3)T(t.getX(j+0)),T(t.getX(j+1)),T(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,h=new R;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,f=c.length;v<f;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*u;for(let p=0;p<u;p++)d[g++]=l[m++]}return new zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ln,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new _e,zi=new mp,ea=new Pc,eu=new R,Ts=new R,As=new R,Cs=new R,Ro=new R,na=new R,ia=new ut,sa=new ut,ra=new ut,nu=new R,iu=new R,su=new R,aa=new R,oa=new R;class Mt extends Fe{constructor(t=new ln,e=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Ro.fromBufferAttribute(h,t),a?na.addScaledVector(Ro,u):na.addScaledVector(Ro.sub(e),u))}e.add(na)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(ea.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ea,eu)===null||zi.origin.distanceToSquared(eu)>(t.far-t.near)**2))&&(tu.copy(r).invert(),zi.copy(t.ray).applyMatrix4(tu),!(n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],p=a[f.materialIndex],w=Math.max(f.start,m.start),_=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let S=w,P=_;S<P;S+=3){const A=o.getX(S),T=o.getX(S+1),N=o.getX(S+2);s=ca(this,p,t,n,l,u,h,A,T,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const w=o.getX(f),_=o.getX(f+1),S=o.getX(f+2);s=ca(this,a,t,n,l,u,h,w,_,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],p=a[f.materialIndex],w=Math.max(f.start,m.start),_=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let S=w,P=_;S<P;S+=3){const A=S,T=S+1,N=S+2;s=ca(this,p,t,n,l,u,h,A,T,N),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let f=g,p=v;f<p;f+=3){const w=f,_=f+1,S=f+2;s=ca(this,a,t,n,l,u,h,w,_,S),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function bp(i,t,e,n,s,r,a,o){let c;if(t.side===Xe?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Li,o),c===null)return null;oa.copy(o),oa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(oa);return l<e.near||l>e.far?null:{distance:l,point:oa.clone(),object:i}}function ca(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ts),i.getVertexPosition(c,As),i.getVertexPosition(l,Cs);const u=bp(i,t,e,n,Ts,As,Cs,aa);if(u){s&&(ia.fromBufferAttribute(s,o),sa.fromBufferAttribute(s,c),ra.fromBufferAttribute(s,l),u.uv=On.getInterpolation(aa,Ts,As,Cs,ia,sa,ra,new ut)),r&&(ia.fromBufferAttribute(r,o),sa.fromBufferAttribute(r,c),ra.fromBufferAttribute(r,l),u.uv1=On.getInterpolation(aa,Ts,As,Cs,ia,sa,ra,new ut)),a&&(nu.fromBufferAttribute(a,o),iu.fromBufferAttribute(a,c),su.fromBufferAttribute(a,l),u.normal=On.getInterpolation(aa,Ts,As,Cs,nu,iu,su,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new R,materialIndex:0};On.getNormal(Ts,As,Cs,h.normal),u.face=h}return u}class Ue extends ln{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function g(v,f,p,w,_,S,P,A,T,N,V){const y=S/T,b=P/N,Z=S/2,j=P/2,L=A/2,X=T+1,z=N+1;let K=0,Y=0;const q=new R;for(let rt=0;rt<z;rt++){const nt=rt*b-j;for(let vt=0;vt<X;vt++){const Ft=vt*y-Z;q[v]=Ft*w,q[f]=nt*_,q[p]=L,l.push(q.x,q.y,q.z),q[v]=0,q[f]=0,q[p]=A>0?1:-1,u.push(q.x,q.y,q.z),h.push(vt/T),h.push(1-rt/N),K+=1}}for(let rt=0;rt<N;rt++)for(let nt=0;nt<T;nt++){const vt=d+nt+X*rt,Ft=d+nt+X*(rt+1),G=d+(nt+1)+X*(rt+1),et=d+(nt+1)+X*rt;c.push(vt,Ft,et),c.push(Ft,G,et),Y+=6}o.addGroup(m,Y,V),m+=Y,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=ir(i[e]);for(const s in n)t[s]=n[s]}return t}function Tp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Nh(i){return i.getRenderTarget()===null?i.outputColorSpace:ae.workingColorSpace}const Ap={clone:ir,merge:ze};var Cp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ci extends Gr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cp,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Dh extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new R,ru=new ut,au=new ut;class on extends Dh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,ru,au),e.subVectors(au,ru)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Ps=1;class Pp extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new on(Rs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new on(Rs,Ps,t,e);r.layers=this.layers,this.add(r);const a=new on(Rs,Ps,t,e);a.layers=this.layers,this.add(a);const o=new on(Rs,Ps,t,e);o.layers=this.layers,this.add(o);const c=new on(Rs,Ps,t,e);c.layers=this.layers,this.add(c);const l=new on(Rs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Uh extends qe{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lp extends cs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Uh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new ci({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Ci});r.uniforms.tEquirect.value=e;const a=new Mt(s,r),o=e.minFilter;return e.minFilter===ji&&(e.minFilter=Ke),new Pp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Po=new R,Ip=new R,Np=new qt;class Xi{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(Ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Np.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Pc,la=new R;class Lc{constructor(t=new Xi,e=new Xi,n=new Xi,s=new Xi,r=new Xi,a=new Xi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],v=s[10],f=s[11],p=s[12],w=s[13],_=s[14],S=s[15];if(n[0].setComponents(c-r,d-l,f-m,S-p).normalize(),n[1].setComponents(c+r,d+l,f+m,S+p).normalize(),n[2].setComponents(c+a,d+u,f+g,S+w).normalize(),n[3].setComponents(c-a,d-u,f-g,S-w).normalize(),n[4].setComponents(c-o,d-h,f-v,S-_).normalize(),e===ri)n[5].setComponents(c+o,d+h,f+v,S+_).normalize();else if(e===Ra)n[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(la.x=s.normal.x>0?t.max.x:t.min.x,la.y=s.normal.y>0?t.max.y:t.min.y,la.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dp(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let v;if(h instanceof Float32Array)v=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=i.SHORT;else if(h instanceof Uint32Array)v=i.UNSIGNED_INT;else if(h instanceof Int32Array)v=i.INT;else if(h instanceof Int8Array)v=i.BYTE;else if(h instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let v=0,f=g.length;v<f;v++){const p=g[v];e?i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(h,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class us extends ln{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,m=[],g=[],v=[],f=[];for(let p=0;p<u;p++){const w=p*d-a;for(let _=0;_<l;_++){const S=_*h-r;g.push(S,-w,0),v.push(0,0,1),f.push(_/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const _=w+l*p,S=w+l*(p+1),P=w+1+l*(p+1),A=w+1+l*p;m.push(_,S,A),m.push(S,P,A)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
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
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$p=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sm=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,am=`vec3 transformedNormal = objectNormal;
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
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",dm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sm=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Em=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Am=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nm=`PhysicalMaterial material;
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
#endif`,Dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Um=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Om=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xm=`#if defined( USE_POINTS_UV )
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
#endif`,qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Km=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Zm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sg=`#ifdef USE_NORMALMAP
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
#endif`,rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_g=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sg=`#ifdef USE_SKINNING
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
#endif`,Mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ug=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Og=`uniform sampler2D t2D;
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`#include <common>
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
}`,Hg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vg=`#define DISTANCE
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
}`,Wg=`#define DISTANCE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Jg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define MATCAP
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
}`,t0=`#define MATCAP
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
}`,e0=`#define NORMAL
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
}`,n0=`#define NORMAL
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
}`,i0=`#define PHONG
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
}`,s0=`#define PHONG
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
}`,r0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
}`,o0=`#define TOON
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
}`,c0=`#define TOON
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
}`,l0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,h0=`#include <common>
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
}`,d0=`uniform vec3 color;
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
}`,f0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,p0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Up,alphahash_pars_fragment:Op,alphamap_fragment:Fp,alphamap_pars_fragment:Bp,alphatest_fragment:kp,alphatest_pars_fragment:zp,aomap_fragment:Gp,aomap_pars_fragment:Hp,batching_pars_vertex:Vp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:qp,bsdfs:$p,iridescence_fragment:Yp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:Qp,color_fragment:tm,color_pars_fragment:em,color_pars_vertex:nm,color_vertex:im,common:sm,cube_uv_reflection_fragment:rm,defaultnormal_vertex:am,displacementmap_pars_vertex:om,displacementmap_vertex:cm,emissivemap_fragment:lm,emissivemap_pars_fragment:um,colorspace_fragment:hm,colorspace_pars_fragment:dm,envmap_fragment:fm,envmap_common_pars_fragment:pm,envmap_pars_fragment:mm,envmap_pars_vertex:gm,envmap_physical_pars_fragment:Cm,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:ym,fog_fragment:xm,fog_pars_fragment:wm,gradientmap_pars_fragment:Sm,lightmap_fragment:Mm,lightmap_pars_fragment:Em,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Tm,lights_pars_begin:Am,lights_toon_fragment:Rm,lights_toon_pars_fragment:Pm,lights_phong_fragment:Lm,lights_phong_pars_fragment:Im,lights_physical_fragment:Nm,lights_physical_pars_fragment:Dm,lights_fragment_begin:Um,lights_fragment_maps:Om,lights_fragment_end:Fm,logdepthbuf_fragment:Bm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:zm,logdepthbuf_vertex:Gm,map_fragment:Hm,map_pars_fragment:Vm,map_particle_fragment:Wm,map_particle_pars_fragment:Xm,metalnessmap_fragment:qm,metalnessmap_pars_fragment:$m,morphinstance_vertex:Ym,morphcolor_vertex:Km,morphnormal_vertex:Jm,morphtarget_pars_vertex:Zm,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:tg,normal_pars_fragment:eg,normal_pars_vertex:ng,normal_vertex:ig,normalmap_pars_fragment:sg,clearcoat_normal_fragment_begin:rg,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:og,iridescence_pars_fragment:cg,opaque_fragment:lg,packing:ug,premultiplied_alpha_fragment:hg,project_vertex:dg,dithering_fragment:fg,dithering_pars_fragment:pg,roughnessmap_fragment:mg,roughnessmap_pars_fragment:gg,shadowmap_pars_fragment:_g,shadowmap_pars_vertex:vg,shadowmap_vertex:yg,shadowmask_pars_fragment:xg,skinbase_vertex:wg,skinning_pars_vertex:Sg,skinning_vertex:Mg,skinnormal_vertex:Eg,specularmap_fragment:bg,specularmap_pars_fragment:Tg,tonemapping_fragment:Ag,tonemapping_pars_fragment:Cg,transmission_fragment:Rg,transmission_pars_fragment:Pg,uv_pars_fragment:Lg,uv_pars_vertex:Ig,uv_vertex:Ng,worldpos_vertex:Dg,background_vert:Ug,background_frag:Og,backgroundCube_vert:Fg,backgroundCube_frag:Bg,cube_vert:kg,cube_frag:zg,depth_vert:Gg,depth_frag:Hg,distanceRGBA_vert:Vg,distanceRGBA_frag:Wg,equirect_vert:Xg,equirect_frag:qg,linedashed_vert:$g,linedashed_frag:Yg,meshbasic_vert:Kg,meshbasic_frag:Jg,meshlambert_vert:Zg,meshlambert_frag:jg,meshmatcap_vert:Qg,meshmatcap_frag:t0,meshnormal_vert:e0,meshnormal_frag:n0,meshphong_vert:i0,meshphong_frag:s0,meshphysical_vert:r0,meshphysical_frag:a0,meshtoon_vert:o0,meshtoon_frag:c0,points_vert:l0,points_frag:u0,shadow_vert:h0,shadow_frag:d0,sprite_vert:f0,sprite_frag:p0},dt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Dn={basic:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new te(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:ze([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:ze([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:ze([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new te(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:ze([dt.points,dt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:ze([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:ze([dt.common,dt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:ze([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:ze([dt.sprite,dt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:ze([dt.common,dt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:ze([dt.lights,dt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Dn.physical={uniforms:ze([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ua={r:0,b:0,g:0},Hi=new Vn,m0=new _e;function g0(i,t,e,n,s,r,a){const o=new te(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(f,p){let w=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),w=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ga)?(u===void 0&&(u=new Mt(new Ue(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:ir(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Hi.copy(p.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(m0.makeRotationFromEuler(Hi)),u.material.toneMapped=ae.getTransfer(_.colorSpace)!==le,(h!==_||d!==_.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Mt(new us(2,2),new ci({name:"BackgroundMaterial",uniforms:ir(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ae.getTransfer(_.colorSpace)!==le,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,m=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function v(f,p){f.getRGB(ua,Nh(i)),n.buffers.color.setClear(ua.r,ua.g,ua.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(f,p=1){o.set(f),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,v(o,c)},render:g}}function _0(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null);let l=c,u=!1;function h(L,X,z,K,Y){let q=!1;if(a){const rt=v(K,z,X);l!==rt&&(l=rt,m(l.object)),q=p(L,K,z,Y),q&&w(L,K,z,Y)}else{const rt=X.wireframe===!0;(l.geometry!==K.id||l.program!==z.id||l.wireframe!==rt)&&(l.geometry=K.id,l.program=z.id,l.wireframe=rt,q=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(q||u)&&(u=!1,N(L,X,z,K),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,X,z){const K=z.wireframe===!0;let Y=o[L.id];Y===void 0&&(Y={},o[L.id]=Y);let q=Y[X.id];q===void 0&&(q={},Y[X.id]=q);let rt=q[K];return rt===void 0&&(rt=f(d()),q[K]=rt),rt}function f(L){const X=[],z=[],K=[];for(let Y=0;Y<s;Y++)X[Y]=0,z[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:z,attributeDivisors:K,object:L,attributes:{},index:null}}function p(L,X,z,K){const Y=l.attributes,q=X.attributes;let rt=0;const nt=z.getAttributes();for(const vt in nt)if(nt[vt].location>=0){const G=Y[vt];let et=q[vt];if(et===void 0&&(vt==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),vt==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),G===void 0||G.attribute!==et||et&&G.data!==et.data)return!0;rt++}return l.attributesNum!==rt||l.index!==K}function w(L,X,z,K){const Y={},q=X.attributes;let rt=0;const nt=z.getAttributes();for(const vt in nt)if(nt[vt].location>=0){let G=q[vt];G===void 0&&(vt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),vt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));const et={};et.attribute=G,G&&G.data&&(et.data=G.data),Y[vt]=et,rt++}l.attributes=Y,l.attributesNum=rt,l.index=K}function _(){const L=l.newAttributes;for(let X=0,z=L.length;X<z;X++)L[X]=0}function S(L){P(L,0)}function P(L,X){const z=l.newAttributes,K=l.enabledAttributes,Y=l.attributeDivisors;z[L]=1,K[L]===0&&(i.enableVertexAttribArray(L),K[L]=1),Y[L]!==X&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,X),Y[L]=X)}function A(){const L=l.newAttributes,X=l.enabledAttributes;for(let z=0,K=X.length;z<K;z++)X[z]!==L[z]&&(i.disableVertexAttribArray(z),X[z]=0)}function T(L,X,z,K,Y,q,rt){rt===!0?i.vertexAttribIPointer(L,X,z,Y,q):i.vertexAttribPointer(L,X,z,K,Y,q)}function N(L,X,z,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const Y=K.attributes,q=z.getAttributes(),rt=X.defaultAttributeValues;for(const nt in q){const vt=q[nt];if(vt.location>=0){let Ft=Y[nt];if(Ft===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(Ft=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(Ft=L.instanceColor)),Ft!==void 0){const G=Ft.normalized,et=Ft.itemSize,gt=e.get(Ft);if(gt===void 0)continue;const Pt=gt.buffer,Tt=gt.type,St=gt.bytesPerElement,$t=n.isWebGL2===!0&&(Tt===i.INT||Tt===i.UNSIGNED_INT||Ft.gpuType===gh);if(Ft.isInterleavedBufferAttribute){const Lt=Ft.data,C=Lt.stride,ct=Ft.offset;if(Lt.isInstancedInterleavedBuffer){for(let J=0;J<vt.locationSize;J++)P(vt.location+J,Lt.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let J=0;J<vt.locationSize;J++)S(vt.location+J);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let J=0;J<vt.locationSize;J++)T(vt.location+J,et/vt.locationSize,Tt,G,C*St,(ct+et/vt.locationSize*J)*St,$t)}else{if(Ft.isInstancedBufferAttribute){for(let Lt=0;Lt<vt.locationSize;Lt++)P(vt.location+Lt,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let Lt=0;Lt<vt.locationSize;Lt++)S(vt.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Lt=0;Lt<vt.locationSize;Lt++)T(vt.location+Lt,et/vt.locationSize,Tt,G,et*St,et/vt.locationSize*Lt*St,$t)}}else if(rt!==void 0){const G=rt[nt];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(vt.location,G);break;case 3:i.vertexAttrib3fv(vt.location,G);break;case 4:i.vertexAttrib4fv(vt.location,G);break;default:i.vertexAttrib1fv(vt.location,G)}}}}A()}function V(){Z();for(const L in o){const X=o[L];for(const z in X){const K=X[z];for(const Y in K)g(K[Y].object),delete K[Y];delete X[z]}delete o[L]}}function y(L){if(o[L.id]===void 0)return;const X=o[L.id];for(const z in X){const K=X[z];for(const Y in K)g(K[Y].object),delete K[Y];delete X[z]}delete o[L.id]}function b(L){for(const X in o){const z=o[X];if(z[L.id]===void 0)continue;const K=z[L.id];for(const Y in K)g(K[Y].object),delete K[Y];delete z[L.id]}}function Z(){j(),u=!0,l!==c&&(l=c,m(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:j,dispose:V,releaseStatesOfGeometry:y,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:S,disableUnusedAttributes:A}}function v0(i,t,e,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,h){i.drawArrays(r,u,h),e.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),e.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function y0(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=a||t.has("OES_texture_float"),P=_&&S,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:f,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:A}}function x0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Xi,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!f)r?u(null):l();else{const w=r?0:n,_=w*4;let S=p.clippingState||null;c.value=S,S=u(g,d,_,m);for(let P=0;P!==_;++P)S[P]=e[P];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,g){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const p=m+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,S=m;_!==v;++_,S+=4)a.copy(h[_]).applyMatrix4(w,o),a.normal.toArray(f,S),f[S+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function w0(i){let t=new WeakMap;function e(a,o){return o===Zo?a.mapping=tr:o===jo&&(a.mapping=er),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Zo||o===jo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Lp(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Fh extends Dh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,ou=[.125,.215,.35,.446,.526,.582],Ki=20,Lo=new Fh,cu=new te;let Io=null,No=0,Do=0;const qi=(1+Math.sqrt(5))/2,Ls=1/qi,lu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,qi,Ls),new R(0,qi,-Ls),new R(Ls,0,qi),new R(-Ls,0,qi),new R(qi,Ls,0),new R(-qi,Ls,0)];class uu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Io=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,No,Do),t.scissorTest=!1,ha(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Ar,format:En,colorSpace:Ni,depthBuffer:!1},s=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(r)),this._blurMaterial=M0(r,t,e)}return s}_compileMaterial(t){const e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,n,s){const o=new on(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cu),u.toneMapping=Ri,u.autoClear=!1;const m=new ls({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new Mt(new Ue,m);let v=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,v=!0):(m.color.copy(cu),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;ha(s,w*_,p>2?_:0,_,_),u.setRenderTarget(s),v&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===tr||t.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ha(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=lu[(s-1)%lu.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Mt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ki-1),v=r/g,f=isFinite(r)?1+Math.floor(u*v):Ki;f>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ki}`);const p=[];let w=0;for(let T=0;T<Ki;++T){const N=T/v,V=Math.exp(-N*N/2);p.push(V),T===0?w+=V:T<f&&(w+=2*V)}for(let T=0;T<p.length;T++)p[T]=p[T]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const S=this._sizeLods[s],P=3*S*(s>_-Os?s-_+Os:0),A=4*(this._cubeSize-S);ha(e,P,A,3*S,2*S),c.setRenderTarget(e),c.render(h,Lo)}}function S0(i){const t=[],e=[],n=[];let s=i;const r=i-Os+1+ou.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Os?c=ou[a-i+Os-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,f=2,p=1,w=new Float32Array(v*g*m),_=new Float32Array(f*g*m),S=new Float32Array(p*g*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,N=A>2?0:-1,V=[T,N,0,T+2/3,N,0,T+2/3,N+1,0,T,N,0,T+2/3,N+1,0,T,N+1,0];w.set(V,v*g*A),_.set(d,f*g*A);const y=[A,A,A,A,A,A];S.set(y,p*g*A)}const P=new ln;P.setAttribute("position",new zn(w,v)),P.setAttribute("uv",new zn(_,f)),P.setAttribute("faceIndex",new zn(S,p)),t.push(P),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function hu(i,t,e){const n=new cs(i,t,e);return n.texture.mapping=Ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M0(i,t,e){const n=new Float32Array(Ki),s=new R(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function du(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fu(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function E0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Zo||c===jo,u=c===tr||c===er;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new uu(i)),h=l?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new uu(i));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function b0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function T0(i,t,e,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)t.remove(v[f])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let f=0,p=v.length;f<p;f++)t.update(v[f],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const w=m.array;v=m.version;for(let _=0,S=w.length;_<S;_+=3){const P=w[_+0],A=w[_+1],T=w[_+2];d.push(P,A,A,T,T,P)}}else if(g!==void 0){const w=g.array;v=g.version;for(let _=0,S=w.length/3-1;_<S;_+=3){const P=_+0,A=_+1,T=_+2;d.push(P,A,A,T,T,P)}}else return;const f=new(bh(d)?Ih:Lh)(d,1);f.version=v;const p=r.get(h);p&&t.remove(p),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function A0(i,t,e,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(r,g,o,m*c),e.update(g,r,1)}function h(m,g,v){if(v===0)return;let f,p;if(s)f=i,p="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,g,o,m*c,v),e.update(g,r,v)}function d(m,g,v){if(v===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<v;p++)this.render(m[p]/c,g[p]);else{f.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let p=0;for(let w=0;w<v;w++)p+=g[w];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function C0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function R0(i,t){return i[0]-t[0]}function P0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function L0(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new de,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(u);if(v===void 0||v.count!==g){let Z=function(){y.dispose(),r.delete(u),u.removeEventListener("dispose",Z)};v!==void 0&&v.texture.dispose();const f=u.morphAttributes.position!==void 0,p=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let A=0;f===!0&&(A=1),p===!0&&(A=2),w===!0&&(A=3);let T=u.attributes.position.count*A,N=1;T>t.maxTextureSize&&(N=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const V=new Float32Array(T*N*4*g),y=new Ch(V,T,N,g);y.type=si,y.needsUpdate=!0;const b=A*4;for(let j=0;j<g;j++){const L=_[j],X=S[j],z=P[j],K=T*N*4*j;for(let Y=0;Y<L.count;Y++){const q=Y*b;f===!0&&(a.fromBufferAttribute(L,Y),V[K+q+0]=a.x,V[K+q+1]=a.y,V[K+q+2]=a.z,V[K+q+3]=0),p===!0&&(a.fromBufferAttribute(X,Y),V[K+q+4]=a.x,V[K+q+5]=a.y,V[K+q+6]=a.z,V[K+q+7]=0),w===!0&&(a.fromBufferAttribute(z,Y),V[K+q+8]=a.x,V[K+q+9]=a.y,V[K+q+10]=a.z,V[K+q+11]=z.itemSize===4?a.w:1)}}v={count:g,texture:y,size:new ut(T,N)},r.set(u,v),u.addEventListener("dispose",Z)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let f=0;for(let w=0;w<d.length;w++)f+=d[w];const p=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",p),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",v.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let _=0;_<m;_++)g[_]=[_,0];n[u.id]=g}for(let _=0;_<m;_++){const S=g[_];S[0]=_,S[1]=d[_]}g.sort(P0);for(let _=0;_<8;_++)_<m&&g[_][1]?(o[_][0]=g[_][0],o[_][1]=g[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(R0);const v=u.morphAttributes.position,f=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const S=o[_],P=S[0],A=S[1];P!==Number.MAX_SAFE_INTEGER&&A?(v&&u.getAttribute("morphTarget"+_)!==v[P]&&u.setAttribute("morphTarget"+_,v[P]),f&&u.getAttribute("morphNormal"+_)!==f[P]&&u.setAttribute("morphNormal"+_,f[P]),s[_]=A,p+=A):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),f&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),s[_]=0)}const w=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",w),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function I0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Bh extends qe{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:as,u!==as&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===as&&(n=Ai),n===void 0&&u===nr&&(n=rs),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kh=new qe,zh=new Bh(1,1);zh.compareFunction=Eh;const Gh=new Ch,Hh=new fp,Vh=new Uh,pu=[],mu=[],gu=new Float32Array(16),_u=new Float32Array(9),vu=new Float32Array(4);function cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=pu[s];if(r===void 0&&(r=new Float32Array(s),pu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=mu[t];e===void 0&&(e=new Int32Array(t),mu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function F0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;vu.set(n),i.uniformMatrix2fv(this.addr,!1,vu),Ee(e,n)}}function B0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;_u.set(n),i.uniformMatrix3fv(this.addr,!1,_u),Ee(e,n)}}function k0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Me(e,n))return;gu.set(n),i.uniformMatrix4fv(this.addr,!1,gu),Ee(e,n)}}function z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function V0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function W0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?zh:kh;e.setTexture2D(t||r,s)}function K0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Hh,s)}function J0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Vh,s)}function Z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gh,s)}function j0(i){switch(i){case 5126:return N0;case 35664:return D0;case 35665:return U0;case 35666:return O0;case 35674:return F0;case 35675:return B0;case 35676:return k0;case 5124:case 35670:return z0;case 35667:case 35671:return G0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return K0;case 35680:case 36300:case 36308:case 36293:return J0;case 36289:case 36303:case 36311:case 36292:return Z0}}function Q0(i,t){i.uniform1fv(this.addr,t)}function t_(i,t){const e=cr(t,this.size,2);i.uniform2fv(this.addr,e)}function e_(i,t){const e=cr(t,this.size,3);i.uniform3fv(this.addr,e)}function n_(i,t){const e=cr(t,this.size,4);i.uniform4fv(this.addr,e)}function i_(i,t){const e=cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function s_(i,t){const e=cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function r_(i,t){const e=cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function a_(i,t){i.uniform1iv(this.addr,t)}function o_(i,t){i.uniform2iv(this.addr,t)}function c_(i,t){i.uniform3iv(this.addr,t)}function l_(i,t){i.uniform4iv(this.addr,t)}function u_(i,t){i.uniform1uiv(this.addr,t)}function h_(i,t){i.uniform2uiv(this.addr,t)}function d_(i,t){i.uniform3uiv(this.addr,t)}function f_(i,t){i.uniform4uiv(this.addr,t)}function p_(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||kh,r[a])}function m_(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Hh,r[a])}function g_(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Vh,r[a])}function __(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);Me(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gh,r[a])}function v_(i){switch(i){case 5126:return Q0;case 35664:return t_;case 35665:return e_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return u_;case 36294:return h_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return __}}class y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=j0(e.type)}}class x_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}}class w_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Uo=/(\w+)(\])?(\[|\.)?/g;function yu(i,t){i.seq.push(t),i.map[t.id]=t}function S_(i,t,e){const n=i.name,s=n.length;for(Uo.lastIndex=0;;){const r=Uo.exec(n),a=Uo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yu(e,l===void 0?new y_(o,i,t):new x_(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new w_(o),yu(e,h)),e=h}}}class xa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);S_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function xu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const M_=37297;let E_=0;function b_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function T_(i){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i);let n;switch(t===e?n="":t===Ca&&e===Aa?n="LinearDisplayP3ToLinearSRGB":t===Aa&&e===Ca&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case Ha:return[n,"LinearTransferOETF"];case Pn:case Rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function wu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+b_(i.getShaderSource(t),a)}else return s}function A_(i,t){const e=T_(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function C_(i,t){let e;switch(t){case Of:e="Linear";break;case Ff:e="Reinhard";break;case Bf:e="OptimizedCineon";break;case ph:e="ACESFilmic";break;case zf:e="AgX";break;case Gf:e="Neutral";break;case kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function R_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fs).join(`
`)}function P_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function L_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function I_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function Su(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(N_,U_)}const D_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function U_(i,t){let e=Xt[t];if(e===void 0){const n=D_.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sc(e)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(O_,F_)}function F_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function k_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case Ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function z_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function G_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fh:t="ENVMAP_BLENDING_MULTIPLY";break;case Df:t="ENVMAP_BLENDING_MIX";break;case Uf:t="ENVMAP_BLENDING_ADD";break}return t}function H_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function V_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=B_(e),l=k_(e),u=z_(e),h=G_(e),d=H_(e),m=e.isWebGL2?"":R_(e),g=P_(e),v=L_(r),f=s.createProgram();let p,w,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Fs).join(`
`),p.length>0&&(p+=`
`),w=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Fs).join(`
`),w.length>0&&(w+=`
`)):(p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),w=[m,bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,A_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=sc(a),a=Su(a,e),a=Mu(a,e),o=sc(o),o=Su(o,e),o=Mu(o,e),a=Eu(a),o=Eu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const S=_+p+a,P=_+w+o,A=xu(s,s.VERTEX_SHADER,S),T=xu(s,s.FRAGMENT_SHADER,P);s.attachShader(f,A),s.attachShader(f,T),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function N(Z){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(A).trim(),X=s.getShaderInfoLog(T).trim();let z=!0,K=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,A,T);else{const Y=wu(s,A,"vertex"),q=wu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+j+`
`+Y+`
`+q)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||X==="")&&(K=!1);K&&(Z.diagnostics={runnable:z,programLog:j,vertexShader:{log:L,prefix:p},fragmentShader:{log:X,prefix:w}})}s.deleteShader(A),s.deleteShader(T),V=new xa(s,f),y=I_(s,f)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(f,M_)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=T,this}let W_=0;class X_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new q_(t),e.set(t,n)),n}}class q_{constructor(t){this.id=W_++,this.code=t,this.usedTimes=0}}function $_(i,t,e,n,s,r,a){const o=new Rh,c=new X_,l=new Set,u=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,b,Z,j,L){const X=j.fog,z=L.geometry,K=y.isMeshStandardMaterial?j.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),q=Y&&Y.mapping===Ga?Y.image.height:null,rt=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,vt=nt!==void 0?nt.length:0;let Ft=0;z.morphAttributes.position!==void 0&&(Ft=1),z.morphAttributes.normal!==void 0&&(Ft=2),z.morphAttributes.color!==void 0&&(Ft=3);let G,et,gt,Pt;if(rt){const oe=Dn[rt];G=oe.vertexShader,et=oe.fragmentShader}else G=y.vertexShader,et=y.fragmentShader,c.update(y),gt=c.getVertexShaderID(y),Pt=c.getFragmentShaderID(y);const Tt=i.getRenderTarget(),St=L.isInstancedMesh===!0,$t=L.isBatchedMesh===!0,Lt=!!y.map,C=!!y.matcap,ct=!!Y,J=!!y.aoMap,at=!!y.lightMap,Q=!!y.bumpMap,wt=!!y.normalMap,_t=!!y.displacementMap,Et=!!y.emissiveMap,Kt=!!y.metalnessMap,E=!!y.roughnessMap,x=y.anisotropy>0,W=y.clearcoat>0,$=y.iridescence>0,st=y.sheen>0,tt=y.transmission>0,Bt=x&&!!y.anisotropyMap,Nt=W&&!!y.clearcoatMap,ht=W&&!!y.clearcoatNormalMap,ft=W&&!!y.clearcoatRoughnessMap,kt=$&&!!y.iridescenceMap,ot=$&&!!y.iridescenceThicknessMap,we=st&&!!y.sheenColorMap,Jt=st&&!!y.sheenRoughnessMap,It=!!y.specularMap,At=!!y.specularColorMap,Ct=!!y.specularIntensityMap,Qt=tt&&!!y.transmissionMap,Gt=tt&&!!y.thicknessMap,ue=!!y.gradientMap,I=!!y.alphaMap,pt=y.alphaTest>0,B=!!y.alphaHash,lt=!!y.extensions;let mt=Ri;y.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(mt=i.toneMapping);const jt={isWebGL2:h,shaderID:rt,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:et,defines:y.defines,customVertexShaderID:gt,customFragmentShaderID:Pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:$t,instancing:St,instancingColor:St&&L.instanceColor!==null,instancingMorph:St&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Tt===null?i.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:Ni,alphaToCoverage:!!y.alphaToCoverage,map:Lt,matcap:C,envMap:ct,envMapMode:ct&&Y.mapping,envMapCubeUVHeight:q,aoMap:J,lightMap:at,bumpMap:Q,normalMap:wt,displacementMap:m&&_t,emissiveMap:Et,normalMapObjectSpace:wt&&y.normalMapType===jf,normalMapTangentSpace:wt&&y.normalMapType===Mh,metalnessMap:Kt,roughnessMap:E,anisotropy:x,anisotropyMap:Bt,clearcoat:W,clearcoatMap:Nt,clearcoatNormalMap:ht,clearcoatRoughnessMap:ft,iridescence:$,iridescenceMap:kt,iridescenceThicknessMap:ot,sheen:st,sheenColorMap:we,sheenRoughnessMap:Jt,specularMap:It,specularColorMap:At,specularIntensityMap:Ct,transmission:tt,transmissionMap:Qt,thicknessMap:Gt,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Ws&&y.alphaToCoverage===!1,alphaMap:I,alphaTest:pt,alphaHash:B,combine:y.combine,mapUv:Lt&&f(y.map.channel),aoMapUv:J&&f(y.aoMap.channel),lightMapUv:at&&f(y.lightMap.channel),bumpMapUv:Q&&f(y.bumpMap.channel),normalMapUv:wt&&f(y.normalMap.channel),displacementMapUv:_t&&f(y.displacementMap.channel),emissiveMapUv:Et&&f(y.emissiveMap.channel),metalnessMapUv:Kt&&f(y.metalnessMap.channel),roughnessMapUv:E&&f(y.roughnessMap.channel),anisotropyMapUv:Bt&&f(y.anisotropyMap.channel),clearcoatMapUv:Nt&&f(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&f(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&f(y.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&f(y.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(y.iridescenceThicknessMap.channel),sheenColorMapUv:we&&f(y.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&f(y.sheenRoughnessMap.channel),specularMapUv:It&&f(y.specularMap.channel),specularColorMapUv:At&&f(y.specularColorMap.channel),specularIntensityMapUv:Ct&&f(y.specularIntensityMap.channel),transmissionMapUv:Qt&&f(y.transmissionMap.channel),thicknessMapUv:Gt&&f(y.thicknessMap.channel),alphaMapUv:I&&f(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(wt||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Lt||I),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Ft,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:mt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===le,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Un,flipSided:y.side===Xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:lt&&y.extensions.derivatives===!0,extensionFragDepth:lt&&y.extensions.fragDepth===!0,extensionDrawBuffers:lt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:lt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:lt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return jt.vertexUv1s=l.has(1),jt.vertexUv2s=l.has(2),jt.vertexUv3s=l.has(3),l.clear(),jt}function w(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Z in y.defines)b.push(Z),b.push(y.defines[Z]);return y.isRawShaderMaterial===!1&&(_(b,y),S(b,y),b.push(i.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.instancingMorph&&o.enable(4),b.matcap&&o.enable(5),b.envMap&&o.enable(6),b.normalMapObjectSpace&&o.enable(7),b.normalMapTangentSpace&&o.enable(8),b.clearcoat&&o.enable(9),b.iridescence&&o.enable(10),b.alphaTest&&o.enable(11),b.vertexColors&&o.enable(12),b.vertexAlphas&&o.enable(13),b.vertexUv1s&&o.enable(14),b.vertexUv2s&&o.enable(15),b.vertexUv3s&&o.enable(16),b.vertexTangents&&o.enable(17),b.anisotropy&&o.enable(18),b.alphaHash&&o.enable(19),b.batching&&o.enable(20),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),y.push(o.mask)}function P(y){const b=v[y.type];let Z;if(b){const j=Dn[b];Z=Ap.clone(j.uniforms)}else Z=y.uniforms;return Z}function A(y,b){let Z;for(let j=0,L=u.length;j<L;j++){const X=u[j];if(X.cacheKey===b){Z=X,++Z.usedTimes;break}}return Z===void 0&&(Z=new V_(i,b,y,r),u.push(Z)),Z}function T(y){if(--y.usedTimes===0){const b=u.indexOf(y);u[b]=u[u.length-1],u.pop(),y.destroy()}}function N(y){c.remove(y)}function V(){c.dispose()}return{getParameters:p,getProgramCacheKey:w,getUniforms:P,acquireProgram:A,releaseProgram:T,releaseShaderCache:N,programs:u,dispose:V}}function Y_(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function K_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,d,m,g,v,f){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:f},i[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=f),t++,p}function o(h,d,m,g,v,f){const p=a(h,d,m,g,v,f);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(h,d,m,g,v,f){const p=a(h,d,m,g,v,f);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||K_),n.length>1&&n.sort(d||Tu),s.length>1&&s.sort(d||Tu)}function u(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function J_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Au,i.set(n,[a])):s>=r.length?(a=new Au,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new te};break;case"SpotLight":e={position:new R,direction:new R,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function j_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Q_=0;function tv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ev(i,t){const e=new Z_,n=j_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new R);const r=new R,a=new _e,o=new _e;function c(u,h){let d=0,m=0,g=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let v=0,f=0,p=0,w=0,_=0,S=0,P=0,A=0,T=0,N=0,V=0;u.sort(tv);const y=h===!0?Math.PI:1;for(let Z=0,j=u.length;Z<j;Z++){const L=u[Z],X=L.color,z=L.intensity,K=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=X.r*z*y,m+=X.g*z*y,g+=X.b*z*y;else if(L.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(L.sh.coefficients[q],z);V++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*y),L.castShadow){const rt=L.shadow,nt=n.get(L);nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize=rt.mapSize,s.directionalShadow[v]=nt,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=L.shadow.matrix,S++}s.directional[v]=q,v++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(X).multiplyScalar(z*y),q.distance=K,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,s.spot[p]=q;const rt=L.shadow;if(L.map&&(s.spotLightMap[T]=L.map,T++,rt.updateMatrices(L),L.castShadow&&N++),s.spotLightMatrix[p]=rt.matrix,L.castShadow){const nt=n.get(L);nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize=rt.mapSize,s.spotShadow[p]=nt,s.spotShadowMap[p]=Y,A++}p++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(X).multiplyScalar(z),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),s.rectArea[w]=q,w++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity*y),q.distance=L.distance,q.decay=L.decay,L.castShadow){const rt=L.shadow,nt=n.get(L);nt.shadowBias=rt.bias,nt.shadowNormalBias=rt.normalBias,nt.shadowRadius=rt.radius,nt.shadowMapSize=rt.mapSize,nt.shadowCameraNear=rt.camera.near,nt.shadowCameraFar=rt.camera.far,s.pointShadow[f]=nt,s.pointShadowMap[f]=Y,s.pointShadowMatrix[f]=L.shadow.matrix,P++}s.point[f]=q,f++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(z*y),q.groundColor.copy(L.groundColor).multiplyScalar(z*y),s.hemi[_]=q,_++}}w>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==v||b.pointLength!==f||b.spotLength!==p||b.rectAreaLength!==w||b.hemiLength!==_||b.numDirectionalShadows!==S||b.numPointShadows!==P||b.numSpotShadows!==A||b.numSpotMaps!==T||b.numLightProbes!==V)&&(s.directional.length=v,s.spot.length=p,s.rectArea.length=w,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+T-N,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=V,b.directionalLength=v,b.pointLength=f,b.spotLength=p,b.rectAreaLength=w,b.hemiLength=_,b.numDirectionalShadows=S,b.numPointShadows=P,b.numSpotShadows=A,b.numSpotMaps=T,b.numLightProbes=V,s.version=Q_++)}function l(u,h){let d=0,m=0,g=0,v=0,f=0;const p=h.matrixWorldInverse;for(let w=0,_=u.length;w<_;w++){const S=u[w];if(S.isDirectionalLight){const P=s.directional[d];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),d++}else if(S.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const P=s.rectArea[v];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),m++}else if(S.isHemisphereLight){const P=s.hemi[f];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(p),f++}}}return{setup:c,setupView:l,state:s}}function Cu(i,t){const e=new ev(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function nv(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Cu(i,t),e.set(r,[c])):a>=o.length?(c=new Cu(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class iv extends Gr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sv extends Gr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`;function ov(i,t,e){let n=new Lc;const s=new ut,r=new ut,a=new de,o=new iv({depthPacking:Zf}),c=new sv,l={},u=e.maxTextureSize,h={[Li]:Xe,[Xe]:Li,[Un]:Un},d=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:rv,fragmentShader:av}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Mt(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(A,T,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const V=i.getRenderTarget(),y=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(Ci),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const j=p!==Zn&&this.type===Zn,L=p===Zn&&this.type!==Zn;for(let X=0,z=A.length;X<z;X++){const K=A[X],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const q=Y.getFrameExtents();if(s.multiply(q),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,Y.mapSize.y=r.y)),Y.map===null||j===!0||L===!0){const nt=this.type!==Zn?{minFilter:He,magFilter:He}:{};Y.map!==null&&Y.map.dispose(),Y.map=new cs(s.x,s.y,nt),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const rt=Y.getViewportCount();for(let nt=0;nt<rt;nt++){const vt=Y.getViewport(nt);a.set(r.x*vt.x,r.y*vt.y,r.x*vt.z,r.y*vt.w),Z.viewport(a),Y.updateMatrices(K,nt),n=Y.getFrustum(),S(T,N,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Zn&&w(Y,N),Y.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(V,y,b)};function w(A,T){const N=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new cs(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,N,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,N,m,v,null)}function _(A,T,N,V){let y=null;const b=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)y=b;else if(y=N.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Z=y.uuid,j=T.uuid;let L=l[Z];L===void 0&&(L={},l[Z]=L);let X=L[j];X===void 0&&(X=y.clone(),L[j]=X,T.addEventListener("dispose",P)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,V===Zn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Z=i.properties.get(y);Z.light=N}return y}function S(A,T,N,V,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Zn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const j=t.update(A),L=A.material;if(Array.isArray(L)){const X=j.groups;for(let z=0,K=X.length;z<K;z++){const Y=X[z],q=L[Y.materialIndex];if(q&&q.visible){const rt=_(A,q,V,y);A.onBeforeShadow(i,A,T,N,j,rt,Y),i.renderBufferDirect(N,null,j,rt,A,Y),A.onAfterShadow(i,A,T,N,j,rt,Y)}}}else if(L.visible){const X=_(A,L,V,y);A.onBeforeShadow(i,A,T,N,j,X,null),i.renderBufferDirect(N,null,j,X,A,null),A.onAfterShadow(i,A,T,N,j,X,null)}}const Z=A.children;for(let j=0,L=Z.length;j<L;j++)S(Z[j],T,N,V,y)}function P(A){A.target.removeEventListener("dispose",P);for(const N in l){const V=l[N],y=A.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}function cv(i,t,e){const n=e.isWebGL2;function s(){let I=!1;const pt=new de;let B=null;const lt=new de(0,0,0,0);return{setMask:function(mt){B!==mt&&!I&&(i.colorMask(mt,mt,mt,mt),B=mt)},setLocked:function(mt){I=mt},setClear:function(mt,jt,oe,Ce,hn){hn===!0&&(mt*=Ce,jt*=Ce,oe*=Ce),pt.set(mt,jt,oe,Ce),lt.equals(pt)===!1&&(i.clearColor(mt,jt,oe,Ce),lt.copy(pt))},reset:function(){I=!1,B=null,lt.set(-1,0,0,0)}}}function r(){let I=!1,pt=null,B=null,lt=null;return{setTest:function(mt){mt?St(i.DEPTH_TEST):$t(i.DEPTH_TEST)},setMask:function(mt){pt!==mt&&!I&&(i.depthMask(mt),pt=mt)},setFunc:function(mt){if(B!==mt){switch(mt){case Af:i.depthFunc(i.NEVER);break;case Cf:i.depthFunc(i.ALWAYS);break;case Rf:i.depthFunc(i.LESS);break;case ba:i.depthFunc(i.LEQUAL);break;case Pf:i.depthFunc(i.EQUAL);break;case Lf:i.depthFunc(i.GEQUAL);break;case If:i.depthFunc(i.GREATER);break;case Nf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=mt}},setLocked:function(mt){I=mt},setClear:function(mt){lt!==mt&&(i.clearDepth(mt),lt=mt)},reset:function(){I=!1,pt=null,B=null,lt=null}}}function a(){let I=!1,pt=null,B=null,lt=null,mt=null,jt=null,oe=null,Ce=null,hn=null;return{setTest:function(ce){I||(ce?St(i.STENCIL_TEST):$t(i.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!I&&(i.stencilMask(ce),pt=ce)},setFunc:function(ce,ke,Rn){(B!==ce||lt!==ke||mt!==Rn)&&(i.stencilFunc(ce,ke,Rn),B=ce,lt=ke,mt=Rn)},setOp:function(ce,ke,Rn){(jt!==ce||oe!==ke||Ce!==Rn)&&(i.stencilOp(ce,ke,Rn),jt=ce,oe=ke,Ce=Rn)},setLocked:function(ce){I=ce},setClear:function(ce){hn!==ce&&(i.clearStencil(ce),hn=ce)},reset:function(){I=!1,pt=null,B=null,lt=null,mt=null,jt=null,oe=null,Ce=null,hn=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,v=[],f=null,p=!1,w=null,_=null,S=null,P=null,A=null,T=null,N=null,V=new te(0,0,0),y=0,b=!1,Z=null,j=null,L=null,X=null,z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const rt=i.getParameter(i.VERSION);rt.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(rt)[1]),Y=q>=1):rt.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),Y=q>=2);let nt=null,vt={};const Ft=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),et=new de().fromArray(Ft),gt=new de().fromArray(G);function Pt(I,pt,B,lt){const mt=new Uint8Array(4),jt=i.createTexture();i.bindTexture(I,jt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let oe=0;oe<B;oe++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(pt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(pt+oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return jt}const Tt={};Tt[i.TEXTURE_2D]=Pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Tt[i.TEXTURE_CUBE_MAP]=Pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Tt[i.TEXTURE_2D_ARRAY]=Pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Tt[i.TEXTURE_3D]=Pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),St(i.DEPTH_TEST),c.setFunc(ba),_t(!1),Et(ol),St(i.CULL_FACE),Q(Ci);function St(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function $t(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Lt(I,pt){return m[I]!==pt?(i.bindFramebuffer(I,pt),m[I]=pt,n&&(I===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=pt),I===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=pt)),!0):!1}function C(I,pt){let B=v,lt=!1;if(I){B=g.get(pt),B===void 0&&(B=[],g.set(pt,B));const mt=I.textures;if(B.length!==mt.length||B[0]!==i.COLOR_ATTACHMENT0){for(let jt=0,oe=mt.length;jt<oe;jt++)B[jt]=i.COLOR_ATTACHMENT0+jt;B.length=mt.length,lt=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,lt=!0);if(lt)if(e.isWebGL2)i.drawBuffers(B);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(B);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ct(I){return f!==I?(i.useProgram(I),f=I,!0):!1}const J={[Yi]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};if(n)J[hl]=i.MIN,J[dl]=i.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(J[hl]=I.MIN_EXT,J[dl]=I.MAX_EXT)}const at={[pf]:i.ZERO,[mf]:i.ONE,[gf]:i.SRC_COLOR,[Ko]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[vf]:i.DST_ALPHA,[_f]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[yf]:i.ONE_MINUS_DST_ALPHA,[Mf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[Tf]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(I,pt,B,lt,mt,jt,oe,Ce,hn,ce){if(I===Ci){p===!0&&($t(i.BLEND),p=!1);return}if(p===!1&&(St(i.BLEND),p=!0),I!==hf){if(I!==w||ce!==b){if((_!==Yi||A!==Yi)&&(i.blendEquation(i.FUNC_ADD),_=Yi,A=Yi),ce)switch(I){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,P=null,T=null,N=null,V.set(0,0,0),y=0,w=I,b=ce}return}mt=mt||pt,jt=jt||B,oe=oe||lt,(pt!==_||mt!==A)&&(i.blendEquationSeparate(J[pt],J[mt]),_=pt,A=mt),(B!==S||lt!==P||jt!==T||oe!==N)&&(i.blendFuncSeparate(at[B],at[lt],at[jt],at[oe]),S=B,P=lt,T=jt,N=oe),(Ce.equals(V)===!1||hn!==y)&&(i.blendColor(Ce.r,Ce.g,Ce.b,hn),V.copy(Ce),y=hn),w=I,b=!1}function wt(I,pt){I.side===Un?$t(i.CULL_FACE):St(i.CULL_FACE);let B=I.side===Xe;pt&&(B=!B),_t(B),I.blending===Ws&&I.transparent===!1?Q(Ci):Q(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const lt=I.stencilWrite;l.setTest(lt),lt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),E(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):$t(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(I){Z!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),Z=I)}function Et(I){I!==lf?(St(i.CULL_FACE),I!==j&&(I===ol?i.cullFace(i.BACK):I===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$t(i.CULL_FACE),j=I}function Kt(I){I!==L&&(Y&&i.lineWidth(I),L=I)}function E(I,pt,B){I?(St(i.POLYGON_OFFSET_FILL),(X!==pt||z!==B)&&(i.polygonOffset(pt,B),X=pt,z=B)):$t(i.POLYGON_OFFSET_FILL)}function x(I){I?St(i.SCISSOR_TEST):$t(i.SCISSOR_TEST)}function W(I){I===void 0&&(I=i.TEXTURE0+K-1),nt!==I&&(i.activeTexture(I),nt=I)}function $(I,pt,B){B===void 0&&(nt===null?B=i.TEXTURE0+K-1:B=nt);let lt=vt[B];lt===void 0&&(lt={type:void 0,texture:void 0},vt[B]=lt),(lt.type!==I||lt.texture!==pt)&&(nt!==B&&(i.activeTexture(B),nt=B),i.bindTexture(I,pt||Tt[I]),lt.type=I,lt.texture=pt)}function st(){const I=vt[nt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(I){et.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),et.copy(I))}function Ct(I){gt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),gt.copy(I))}function Qt(I,pt){let B=h.get(pt);B===void 0&&(B=new WeakMap,h.set(pt,B));let lt=B.get(I);lt===void 0&&(lt=i.getUniformBlockIndex(pt,I.name),B.set(I,lt))}function Gt(I,pt){const lt=h.get(pt).get(I);u.get(pt)!==lt&&(i.uniformBlockBinding(pt,lt,I.__bindingPointIndex),u.set(pt,lt))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},nt=null,vt={},m={},g=new WeakMap,v=[],f=null,p=!1,w=null,_=null,S=null,P=null,A=null,T=null,N=null,V=new te(0,0,0),y=0,b=!1,Z=null,j=null,L=null,X=null,z=null,et.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:St,disable:$t,bindFramebuffer:Lt,drawBuffers:C,useProgram:ct,setBlending:Q,setMaterial:wt,setFlipSided:_t,setCullFace:Et,setLineWidth:Kt,setPolygonOffset:E,setScissorTest:x,activeTexture:W,bindTexture:$,unbindTexture:st,compressedTexImage2D:tt,compressedTexImage3D:Bt,texImage2D:Jt,texImage3D:It,updateUBOMapping:Qt,uniformBlockBinding:Gt,texStorage2D:ot,texStorage3D:we,texSubImage2D:Nt,texSubImage3D:ht,compressedTexSubImage2D:ft,compressedTexSubImage3D:kt,scissor:At,viewport:Ct,reset:ue}}function lv(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ut,h=new WeakMap;let d;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,x){return g?new OffscreenCanvas(E,x):Pa("canvas")}function f(E,x,W,$){let st=1;const tt=Kt(E);if((tt.width>$||tt.height>$)&&(st=$/Math.max(tt.width,tt.height)),st<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Bt=x?ic:Math.floor,Nt=Bt(st*tt.width),ht=Bt(st*tt.height);d===void 0&&(d=v(Nt,ht));const ft=W?v(Nt,ht):d;return ft.width=Nt,ft.height=ht,ft.getContext("2d").drawImage(E,0,0,Nt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Nt+"x"+ht+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function p(E){const x=Kt(E);return Hl(x.width)&&Hl(x.height)}function w(E){return o?!1:E.wrapS!==Mn||E.wrapT!==Mn||E.minFilter!==He&&E.minFilter!==Ke}function _(E,x){return E.generateMipmaps&&x&&E.minFilter!==He&&E.minFilter!==Ke}function S(E){i.generateMipmap(E)}function P(E,x,W,$,st=!1){if(o===!1)return x;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let tt=x;if(x===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),x===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),x===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),x===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),x===i.RGBA){const Bt=st?Ta:ae.getTransfer($);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=Bt===le?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(E,x,W){return _(E,W)===!0||E.isFramebufferTexture&&E.minFilter!==He&&E.minFilter!==Ke?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function T(E){return E===He||E===fl||E===hr?i.NEAREST:i.LINEAR}function N(E){const x=E.target;x.removeEventListener("dispose",N),y(x),x.isVideoTexture&&h.delete(x)}function V(E){const x=E.target;x.removeEventListener("dispose",V),Z(x)}function y(E){const x=n.get(E);if(x.__webglInit===void 0)return;const W=E.source,$=m.get(W);if($){const st=$[x.__cacheKey];st.usedTimes--,st.usedTimes===0&&b(E),Object.keys($).length===0&&m.delete(W)}n.remove(E)}function b(E){const x=n.get(E);i.deleteTexture(x.__webglTexture);const W=E.source,$=m.get(W);delete $[x.__cacheKey],a.memory.textures--}function Z(E){const x=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let st=0;st<x.__webglFramebuffer[$].length;st++)i.deleteFramebuffer(x.__webglFramebuffer[$][st]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const W=E.textures;for(let $=0,st=W.length;$<st;$++){const tt=n.get(W[$]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(E)}let j=0;function L(){j=0}function X(){const E=j;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),j+=1,E}function z(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){const W=n.get(E);if(E.isVideoTexture&&_t(E),E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){const $=E.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(W,E,x);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+x)}function Y(E,x){const W=n.get(E);if(E.version>0&&W.__version!==E.version){gt(W,E,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+x)}function q(E,x){const W=n.get(E);if(E.version>0&&W.__version!==E.version){gt(W,E,x);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+x)}function rt(E,x){const W=n.get(E);if(E.version>0&&W.__version!==E.version){Pt(W,E,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+x)}const nt={[Qo]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[tc]:i.MIRRORED_REPEAT},vt={[He]:i.NEAREST,[fl]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Ft={[Qf]:i.NEVER,[rp]:i.ALWAYS,[tp]:i.LESS,[Eh]:i.LEQUAL,[ep]:i.EQUAL,[sp]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function G(E,x,W){if(x.type===si&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ke||x.magFilter===io||x.magFilter===hr||x.magFilter===ji||x.minFilter===Ke||x.minFilter===io||x.minFilter===hr||x.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(i.texParameteri(E,i.TEXTURE_WRAP_S,nt[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,nt[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,nt[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,vt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,vt[x.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==Mn||x.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(x.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(x.minFilter)),x.minFilter!==He&&x.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,Ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===He||x.minFilter!==hr&&x.minFilter!==ji||x.type===si&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ar&&t.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function et(E,x){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",N));const $=x.source;let st=m.get($);st===void 0&&(st={},m.set($,st));const tt=z(x);if(tt!==E.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),st[tt].usedTimes++;const Bt=st[E.__cacheKey];Bt!==void 0&&(st[E.__cacheKey].usedTimes--,Bt.usedTimes===0&&b(x)),E.__cacheKey=tt,E.__webglTexture=st[tt].texture}return W}function gt(E,x,W){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);const st=et(E,x),tt=x.source;e.bindTexture($,E.__webglTexture,i.TEXTURE0+W);const Bt=n.get(tt);if(tt.version!==Bt.__version||st===!0){e.activeTexture(i.TEXTURE0+W);const Nt=ae.getPrimaries(ae.workingColorSpace),ht=x.colorSpace===Si?null:ae.getPrimaries(x.colorSpace),ft=x.colorSpace===Si||Nt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const kt=w(x)&&p(x.image)===!1;let ot=f(x.image,kt,!1,s.maxTextureSize);ot=Et(x,ot);const we=p(ot)||o,Jt=r.convert(x.format,x.colorSpace);let It=r.convert(x.type),At=P(x.internalFormat,Jt,It,x.colorSpace,x.isVideoTexture);G($,x,we);let Ct;const Qt=x.mipmaps,Gt=o&&x.isVideoTexture!==!0&&At!==Sh,ue=Bt.__version===void 0||st===!0,I=tt.dataReady,pt=A(x,ot,we);if(x.isDepthTexture)At=i.DEPTH_COMPONENT,o?x.type===si?At=i.DEPTH_COMPONENT32F:x.type===Ai?At=i.DEPTH_COMPONENT24:x.type===rs?At=i.DEPTH24_STENCIL8:At=i.DEPTH_COMPONENT16:x.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===as&&At===i.DEPTH_COMPONENT&&x.type!==Cc&&x.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ai,It=r.convert(x.type)),x.format===nr&&At===i.DEPTH_COMPONENT&&(At=i.DEPTH_STENCIL,x.type!==rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=rs,It=r.convert(x.type))),ue&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,At,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,At,ot.width,ot.height,0,Jt,It,null));else if(x.isDataTexture)if(Qt.length>0&&we){Gt&&ue&&e.texStorage2D(i.TEXTURE_2D,pt,At,Qt[0].width,Qt[0].height);for(let B=0,lt=Qt.length;B<lt;B++)Ct=Qt[B],Gt?I&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Ct.width,Ct.height,Jt,It,Ct.data):e.texImage2D(i.TEXTURE_2D,B,At,Ct.width,Ct.height,0,Jt,It,Ct.data);x.generateMipmaps=!1}else Gt?(ue&&e.texStorage2D(i.TEXTURE_2D,pt,At,ot.width,ot.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Jt,It,ot.data)):e.texImage2D(i.TEXTURE_2D,0,At,ot.width,ot.height,0,Jt,It,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,At,Qt[0].width,Qt[0].height,ot.depth);for(let B=0,lt=Qt.length;B<lt;B++)Ct=Qt[B],x.format!==En?Jt!==null?Gt?I&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Ct.width,Ct.height,ot.depth,Jt,Ct.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,At,Ct.width,Ct.height,ot.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,Ct.width,Ct.height,ot.depth,Jt,It,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,At,Ct.width,Ct.height,ot.depth,0,Jt,It,Ct.data)}else{Gt&&ue&&e.texStorage2D(i.TEXTURE_2D,pt,At,Qt[0].width,Qt[0].height);for(let B=0,lt=Qt.length;B<lt;B++)Ct=Qt[B],x.format!==En?Jt!==null?Gt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,Ct.width,Ct.height,Jt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,B,At,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?I&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Ct.width,Ct.height,Jt,It,Ct.data):e.texImage2D(i.TEXTURE_2D,B,At,Ct.width,Ct.height,0,Jt,It,Ct.data)}else if(x.isDataArrayTexture)Gt?(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,At,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Jt,It,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,ot.width,ot.height,ot.depth,0,Jt,It,ot.data);else if(x.isData3DTexture)Gt?(ue&&e.texStorage3D(i.TEXTURE_3D,pt,At,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Jt,It,ot.data)):e.texImage3D(i.TEXTURE_3D,0,At,ot.width,ot.height,ot.depth,0,Jt,It,ot.data);else if(x.isFramebufferTexture){if(ue)if(Gt)e.texStorage2D(i.TEXTURE_2D,pt,At,ot.width,ot.height);else{let B=ot.width,lt=ot.height;for(let mt=0;mt<pt;mt++)e.texImage2D(i.TEXTURE_2D,mt,At,B,lt,0,Jt,It,null),B>>=1,lt>>=1}}else if(Qt.length>0&&we){if(Gt&&ue){const B=Kt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,pt,At,B.width,B.height)}for(let B=0,lt=Qt.length;B<lt;B++)Ct=Qt[B],Gt?I&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,Jt,It,Ct):e.texImage2D(i.TEXTURE_2D,B,At,Jt,It,Ct);x.generateMipmaps=!1}else if(Gt){if(ue){const B=Kt(ot);e.texStorage2D(i.TEXTURE_2D,pt,At,B.width,B.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Jt,It,ot)}else e.texImage2D(i.TEXTURE_2D,0,At,Jt,It,ot);_(x,we)&&S($),Bt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Pt(E,x,W){if(x.image.length!==6)return;const $=et(E,x),st=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+W);const tt=n.get(st);if(st.version!==tt.__version||$===!0){e.activeTexture(i.TEXTURE0+W);const Bt=ae.getPrimaries(ae.workingColorSpace),Nt=x.colorSpace===Si?null:ae.getPrimaries(x.colorSpace),ht=x.colorSpace===Si||Bt===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const ft=x.isCompressedTexture||x.image[0].isCompressedTexture,kt=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let B=0;B<6;B++)!ft&&!kt?ot[B]=f(x.image[B],!1,!0,s.maxCubemapSize):ot[B]=kt?x.image[B].image:x.image[B],ot[B]=Et(x,ot[B]);const we=ot[0],Jt=p(we)||o,It=r.convert(x.format,x.colorSpace),At=r.convert(x.type),Ct=P(x.internalFormat,It,At,x.colorSpace),Qt=o&&x.isVideoTexture!==!0,Gt=tt.__version===void 0||$===!0,ue=st.dataReady;let I=A(x,we,Jt);G(i.TEXTURE_CUBE_MAP,x,Jt);let pt;if(ft){Qt&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,I,Ct,we.width,we.height);for(let B=0;B<6;B++){pt=ot[B].mipmaps;for(let lt=0;lt<pt.length;lt++){const mt=pt[lt];x.format!==En?It!==null?Qt?ue&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt,0,0,mt.width,mt.height,It,mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt,Ct,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?ue&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt,0,0,mt.width,mt.height,It,At,mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt,Ct,mt.width,mt.height,0,It,At,mt.data)}}}else{if(pt=x.mipmaps,Qt&&Gt){pt.length>0&&I++;const B=Kt(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,I,Ct,B.width,B.height)}for(let B=0;B<6;B++)if(kt){Qt?ue&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ot[B].width,ot[B].height,It,At,ot[B].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ct,ot[B].width,ot[B].height,0,It,At,ot[B].data);for(let lt=0;lt<pt.length;lt++){const jt=pt[lt].image[B].image;Qt?ue&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt+1,0,0,jt.width,jt.height,It,At,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt+1,Ct,jt.width,jt.height,0,It,At,jt.data)}}else{Qt?ue&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,It,At,ot[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Ct,It,At,ot[B]);for(let lt=0;lt<pt.length;lt++){const mt=pt[lt];Qt?ue&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt+1,0,0,It,At,mt.image[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,lt+1,Ct,It,At,mt.image[B])}}}_(x,Jt)&&S(i.TEXTURE_CUBE_MAP),tt.__version=st.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Tt(E,x,W,$,st,tt){const Bt=r.convert(W.format,W.colorSpace),Nt=r.convert(W.type),ht=P(W.internalFormat,Bt,Nt,W.colorSpace);if(!n.get(x).__hasExternalTextures){const kt=Math.max(1,x.width>>tt),ot=Math.max(1,x.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,ht,kt,ot,x.depth,0,Bt,Nt,null):e.texImage2D(st,tt,ht,kt,ot,0,Bt,Nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),wt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,st,n.get(W).__webglTexture,0,Q(x)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,st,n.get(W).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(E,x,W){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let $=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||wt(x)){const st=x.depthTexture;st&&st.isDepthTexture&&(st.type===si?$=i.DEPTH_COMPONENT32F:st.type===Ai&&($=i.DEPTH_COMPONENT24));const tt=Q(x);wt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,$,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,$,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const $=Q(x);W&&wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,x.width,x.height):wt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{const $=x.textures;for(let st=0;st<$.length;st++){const tt=$[st],Bt=r.convert(tt.format,tt.colorSpace),Nt=r.convert(tt.type),ht=P(tt.internalFormat,Bt,Nt,tt.colorSpace),ft=Q(x);W&&wt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,ht,x.width,x.height):wt(x)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function $t(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const $=n.get(x.depthTexture).__webglTexture,st=Q(x);if(x.depthTexture.format===as)wt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(x.depthTexture.format===nr)wt(x)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Lt(E){const x=n.get(E),W=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");$t(x.__webglFramebuffer,E)}else if(W){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]=i.createRenderbuffer(),St(x.__webglDepthbuffer[$],E,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),St(x.__webglDepthbuffer,E,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function C(E,x,W){const $=n.get(E);x!==void 0&&Tt($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Lt(E)}function ct(E){const x=E.texture,W=n.get(E),$=n.get(x);E.addEventListener("dispose",V);const st=E.textures,tt=E.isWebGLCubeRenderTarget===!0,Bt=st.length>1,Nt=p(E)||o;if(Bt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,a.memory.textures++),tt){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let ft=0;ft<x.mipmaps.length;ft++)W.__webglFramebuffer[ht][ft]=i.createFramebuffer()}else W.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)W.__webglFramebuffer[ht]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Bt)if(s.drawBuffers)for(let ht=0,ft=st.length;ht<ft;ht++){const kt=n.get(st[ht]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&wt(E)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<st.length;ht++){const ft=st[ht];W.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);const kt=r.convert(ft.format,ft.colorSpace),ot=r.convert(ft.type),we=P(ft.internalFormat,kt,ot,ft.colorSpace,E.isXRRenderTarget===!0),Jt=Q(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,we,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),St(W.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),G(i.TEXTURE_CUBE_MAP,x,Nt);for(let ht=0;ht<6;ht++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Tt(W.__webglFramebuffer[ht][ft],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,ft);else Tt(W.__webglFramebuffer[ht],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);_(x,Nt)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let ht=0,ft=st.length;ht<ft;ht++){const kt=st[ht],ot=n.get(kt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),G(i.TEXTURE_2D,kt,Nt),Tt(W.__webglFramebuffer,E,kt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),_(kt,Nt)&&S(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ht=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,$.__webglTexture),G(ht,x,Nt),o&&x.mipmaps&&x.mipmaps.length>0)for(let ft=0;ft<x.mipmaps.length;ft++)Tt(W.__webglFramebuffer[ft],E,x,i.COLOR_ATTACHMENT0,ht,ft);else Tt(W.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,ht,0);_(x,Nt)&&S(ht),e.unbindTexture()}E.depthBuffer&&Lt(E)}function J(E){const x=p(E)||o,W=E.textures;for(let $=0,st=W.length;$<st;$++){const tt=W[$];if(_(tt,x)){const Bt=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Nt=n.get(tt).__webglTexture;e.bindTexture(Bt,Nt),S(Bt),e.unbindTexture()}}}function at(E){if(o&&E.samples>0&&wt(E)===!1){const x=E.textures,W=E.width,$=E.height;let st=i.COLOR_BUFFER_BIT;const tt=[],Bt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(E),ht=x.length>1;if(ht)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){tt.push(i.COLOR_ATTACHMENT0+ft),E.depthBuffer&&tt.push(Bt);const kt=Nt.__ignoreDepthValues!==void 0?Nt.__ignoreDepthValues:!1;if(kt===!1&&(E.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[ft]),kt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Bt])),ht){const ot=n.get(x[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,W,$,0,0,W,$,st,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[ft]);const kt=n.get(x[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}}function Q(E){return Math.min(s.maxSamples,E.samples)}function wt(E){const x=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _t(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Et(E,x){const W=E.colorSpace,$=E.format,st=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ec||W!==Ni&&W!==Si&&(ae.getTransfer(W)===le?o===!1?t.has("EXT_sRGB")===!0&&$===En?(E.format=ec,E.minFilter=Ke,E.generateMipmaps=!1):x=Th.sRGBToLinear(x):($!==En||st!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Kt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=L,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=rt,this.rebindTextures=C,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=wt}function uv(i,t,e){const n=e.isWebGL2;function s(r,a=Si){let o;const c=ae.getTransfer(a);if(r===Pi)return i.UNSIGNED_BYTE;if(r===_h)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Hf)return i.BYTE;if(r===Vf)return i.SHORT;if(r===Cc)return i.UNSIGNED_SHORT;if(r===gh)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===si)return i.FLOAT;if(r===Ar)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Wf)return i.ALPHA;if(r===En)return i.RGBA;if(r===Xf)return i.LUMINANCE;if(r===qf)return i.LUMINANCE_ALPHA;if(r===as)return i.DEPTH_COMPONENT;if(r===nr)return i.DEPTH_STENCIL;if(r===ec)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===$f)return i.RED;if(r===yh)return i.RED_INTEGER;if(r===Yf)return i.RG;if(r===xh)return i.RG_INTEGER;if(r===wh)return i.RGBA_INTEGER;if(r===so||r===ro||r===ao||r===oo)if(c===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===so)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===so)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ro)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===pl||r===ml||r===gl||r===_l)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===pl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ml)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_l)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sh)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vl||r===yl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===vl)return c===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===yl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xl||r===wl||r===Sl||r===Ml||r===El||r===bl||r===Tl||r===Al||r===Cl||r===Rl||r===Pl||r===Ll||r===Il||r===Nl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===xl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Sl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ml)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===El)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Tl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Al)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ll)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Il)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nl)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===co||r===Dl||r===Ul)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===co)return c===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ul)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kf||r===Ol||r===Fl||r===Bl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===co)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ol)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rs?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class hv extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class an extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dv={type:"move"};class Oo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new an,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new an,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new an,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),p=this._getHandJoint(l,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new an;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new ci({extensions:{fragDepth:!0},vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mt(new us(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class gv extends ar{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const v=new mv,f=e.getContextAttributes();let p=null,w=null;const _=[],S=[],P=new ut;let A=null;const T=new on;T.layers.enable(1),T.viewport=new de;const N=new on;N.layers.enable(2),N.viewport=new de;const V=[T,N],y=new hv;y.layers.enable(1),y.layers.enable(2);let b=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=_[G];return et===void 0&&(et=new Oo,_[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=_[G];return et===void 0&&(et=new Oo,_[G]=et),et.getGripSpace()},this.getHand=function(G){let et=_[G];return et===void 0&&(et=new Oo,_[G]=et),et.getHandSpace()};function j(G){const et=S.indexOf(G.inputSource);if(et===-1)return;const gt=_[et];gt!==void 0&&(gt.update(G.inputSource,G.frame,l||a),gt.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",X);for(let G=0;G<_.length;G++){const et=S[G];et!==null&&(S[G]=null,_[G].disconnect(et))}b=null,Z=null,v.reset(),t.setRenderTarget(p),m=null,d=null,h=null,s=null,w=null,Ft.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",L),s.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:s.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new cs(m.framebufferWidth,m.framebufferHeight,{format:En,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,gt=null,Pt=null;f.depth&&(Pt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?nr:as,gt=f.stencil?rs:Ai);const Tt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new cs(d.textureWidth,d.textureHeight,{format:En,type:Pi,depthTexture:new Bh(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0});const St=t.properties.get(w);St.__ignoreDepthValues=d.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ft.setContext(s),Ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function X(G){for(let et=0;et<G.removed.length;et++){const gt=G.removed[et],Pt=S.indexOf(gt);Pt>=0&&(S[Pt]=null,_[Pt].disconnect(gt))}for(let et=0;et<G.added.length;et++){const gt=G.added[et];let Pt=S.indexOf(gt);if(Pt===-1){for(let St=0;St<_.length;St++)if(St>=S.length){S.push(gt),Pt=St;break}else if(S[St]===null){S[St]=gt,Pt=St;break}if(Pt===-1)break}const Tt=_[Pt];Tt&&Tt.connect(gt)}}const z=new R,K=new R;function Y(G,et,gt){z.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(gt.matrixWorld);const Pt=z.distanceTo(K),Tt=et.projectionMatrix.elements,St=gt.projectionMatrix.elements,$t=Tt[14]/(Tt[10]-1),Lt=Tt[14]/(Tt[10]+1),C=(Tt[9]+1)/Tt[5],ct=(Tt[9]-1)/Tt[5],J=(Tt[8]-1)/Tt[0],at=(St[8]+1)/St[0],Q=$t*J,wt=$t*at,_t=Pt/(-J+at),Et=_t*-J;et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Et),G.translateZ(_t),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Kt=$t+_t,E=Lt+_t,x=Q-Et,W=wt+(Pt-Et),$=C*Lt/E*Kt,st=ct*Lt/E*Kt;G.projectionMatrix.makePerspective(x,W,$,st,Kt,E),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function q(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),y.near=N.near=T.near=G.near,y.far=N.far=T.far=G.far,(b!==y.near||Z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,Z=y.far,T.near=b,T.far=Z,N.near=b,N.far=Z,T.updateProjectionMatrix(),N.updateProjectionMatrix(),G.updateProjectionMatrix());const et=G.parent,gt=y.cameras;q(y,et);for(let Pt=0;Pt<gt.length;Pt++)q(gt[Pt],et);gt.length===2?Y(y,T,N):y.projectionMatrix.copy(T.projectionMatrix),rt(G,y,et)};function rt(G,et,gt){gt===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(gt.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=nc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let nt=null;function vt(G,et){if(u=et.getViewerPose(l||a),g=et,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let Pt=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,Pt=!0);for(let St=0;St<gt.length;St++){const $t=gt[St];let Lt=null;if(m!==null)Lt=m.getViewport($t);else{const ct=h.getViewSubImage(d,$t);Lt=ct.viewport,St===0&&(t.setRenderTargetTextures(w,ct.colorTexture,d.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(w))}let C=V[St];C===void 0&&(C=new on,C.layers.enable(St),C.viewport=new de,V[St]=C),C.matrix.fromArray($t.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray($t.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),St===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Pt===!0&&y.cameras.push(C)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const St=h.getDepthInformation(gt[0]);St&&St.isValid&&St.texture&&v.init(t,St,s.renderState)}}for(let gt=0;gt<_.length;gt++){const Pt=S[gt],Tt=_[gt];Pt!==null&&Tt!==void 0&&Tt.update(Pt,et,l||a)}v.render(t,y),nt&&nt(G,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Ft=new Oh;Ft.setAnimationLoop(vt),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}}const Vi=new Vn,_v=new _e;function vv(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Nh(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function s(f,p,w,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(f,p):p.isMeshToonMaterial?(r(f,p),h(f,p)):p.isMeshPhongMaterial?(r(f,p),u(f,p)):p.isMeshStandardMaterial?(r(f,p),d(f,p),p.isMeshPhysicalMaterial&&m(f,p,S)):p.isMeshMatcapMaterial?(r(f,p),g(f,p)):p.isMeshDepthMaterial?r(f,p):p.isMeshDistanceMaterial?(r(f,p),v(f,p)):p.isMeshNormalMaterial?r(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,w,_):p.isSpriteMaterial?l(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===Xe&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===Xe&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const w=t.get(p),_=w.envMap,S=w.envMapRotation;if(_&&(f.envMap.value=_,Vi.copy(S),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),f.envMapRotation.value.setFromMatrix4(_v.makeRotationFromEuler(Vi)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap){f.lightMap.value=p.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=p.lightMapIntensity*P,e(p.lightMap,f.lightMapTransform)}p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,w,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*w,f.scale.value=_*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function l(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function h(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function d(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),t.get(p).envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function m(f,p,w){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&f.clearcoatNormalScale.value.negate())),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const w=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yv(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,_){const S=_.program;n.uniformBlockBinding(w,S)}function l(w,_){let S=s[w.id];S===void 0&&(g(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",f));const P=_.program;n.updateUBOMapping(w,P);const A=t.render.frame;r[w.id]!==A&&(d(w),r[w.id]=A)}function u(w){const _=h();w.__bindingPointIndex=_;const S=i.createBuffer(),P=w.__size,A=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,S),S}function h(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const _=s[w.id],S=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,T=S.length;A<T;A++){const N=Array.isArray(S[A])?S[A]:[S[A]];for(let V=0,y=N.length;V<y;V++){const b=N[V];if(m(b,A,V,P)===!0){const Z=b.__offset,j=Array.isArray(b.value)?b.value:[b.value];let L=0;for(let X=0;X<j.length;X++){const z=j[X],K=v(z);typeof z=="number"||typeof z=="boolean"?(b.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,Z+L,b.__data)):z.isMatrix3?(b.__data[0]=z.elements[0],b.__data[1]=z.elements[1],b.__data[2]=z.elements[2],b.__data[3]=0,b.__data[4]=z.elements[3],b.__data[5]=z.elements[4],b.__data[6]=z.elements[5],b.__data[7]=0,b.__data[8]=z.elements[6],b.__data[9]=z.elements[7],b.__data[10]=z.elements[8],b.__data[11]=0):(z.toArray(b.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Z,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,_,S,P){const A=w.value,T=_+"_"+S;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const N=P[T];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return P[T]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(w){const _=w.uniforms;let S=0;const P=16;for(let T=0,N=_.length;T<N;T++){const V=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,b=V.length;y<b;y++){const Z=V[y],j=Array.isArray(Z.value)?Z.value:[Z.value];for(let L=0,X=j.length;L<X;L++){const z=j[L],K=v(z),Y=S%P;Y!==0&&P-Y<K.boundary&&(S+=P-Y),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=S,S+=K.storage}}}const A=S%P;return A>0&&(S+=P-A),w.__size=S,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function f(w){const _=w.target;_.removeEventListener("dispose",f);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Wh{constructor(t={}){const{canvas:e=op(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const _=this;let S=!1,P=0,A=0,T=null,N=-1,V=null;const y=new de,b=new de;let Z=null;const j=new te(0);let L=0,X=e.width,z=e.height,K=1,Y=null,q=null;const rt=new de(0,0,X,z),nt=new de(0,0,X,z);let vt=!1;const Ft=new Lc;let G=!1,et=!1,gt=null;const Pt=new _e,Tt=new ut,St=new R,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?K:1}let C=n;function ct(M,D){for(let k=0;k<M.length;k++){const H=M[k],U=e.getContext(H,D);if(U!==null)return U}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",pt,!1),C===null){const D=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&D.shift(),C=ct(D,M),C===null)throw ct(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&C instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let J,at,Q,wt,_t,Et,Kt,E,x,W,$,st,tt,Bt,Nt,ht,ft,kt,ot,we,Jt,It,At,Ct;function Qt(){J=new b0(C),at=new y0(C,J,t),J.init(at),It=new uv(C,J,at),Q=new cv(C,J,at),wt=new C0(C),_t=new Y_,Et=new lv(C,J,Q,_t,at,It,wt),Kt=new w0(_),E=new E0(_),x=new Dp(C,at),At=new _0(C,J,x,at),W=new T0(C,x,wt,At),$=new I0(C,W,x,wt),ot=new L0(C,at,Et),ht=new x0(_t),st=new $_(_,Kt,E,J,at,At,ht),tt=new vv(_,_t),Bt=new J_,Nt=new nv(J,at),kt=new g0(_,Kt,E,Q,$,d,c),ft=new ov(_,$,at),Ct=new yv(C,wt,at,Q),we=new v0(C,J,wt,at),Jt=new A0(C,J,wt,at),wt.programs=st.programs,_.capabilities=at,_.extensions=J,_.properties=_t,_.renderLists=Bt,_.shadowMap=ft,_.state=Q,_.info=wt}Qt();const Gt=new gv(_,C);this.xr=Gt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=J.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=J.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(X,z,!1))},this.getSize=function(M){return M.set(X,z)},this.setSize=function(M,D,k=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,z=D,e.width=Math.floor(M*K),e.height=Math.floor(D*K),k===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(X*K,z*K).floor()},this.setDrawingBufferSize=function(M,D,k){X=M,z=D,K=k,e.width=Math.floor(M*k),e.height=Math.floor(D*k),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(rt)},this.setViewport=function(M,D,k,H){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,D,k,H),Q.viewport(y.copy(rt).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(nt)},this.setScissor=function(M,D,k,H){M.isVector4?nt.set(M.x,M.y,M.z,M.w):nt.set(M,D,k,H),Q.scissor(b.copy(nt).multiplyScalar(K).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(M){Q.setScissorTest(vt=M)},this.setOpaqueSort=function(M){Y=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(M=!0,D=!0,k=!0){let H=0;if(M){let U=!1;if(T!==null){const yt=T.texture.format;U=yt===wh||yt===xh||yt===yh}if(U){const yt=T.texture.type,Rt=yt===Pi||yt===Ai||yt===Cc||yt===rs||yt===_h||yt===vh,Dt=kt.getClearColor(),Ut=kt.getClearAlpha(),Yt=Dt.r,zt=Dt.g,Ht=Dt.b;Rt?(m[0]=Yt,m[1]=zt,m[2]=Ht,m[3]=Ut,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Yt,g[1]=zt,g[2]=Ht,g[3]=Ut,C.clearBufferiv(C.COLOR,0,g))}else H|=C.COLOR_BUFFER_BIT}D&&(H|=C.DEPTH_BUFFER_BIT),k&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Bt.dispose(),Nt.dispose(),_t.dispose(),Kt.dispose(),E.dispose(),$.dispose(),At.dispose(),Ct.dispose(),st.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",hn),Gt.removeEventListener("sessionend",ce),gt&&(gt.dispose(),gt=null),ke.stop()};function ue(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=wt.autoReset,D=ft.enabled,k=ft.autoUpdate,H=ft.needsUpdate,U=ft.type;Qt(),wt.autoReset=M,ft.enabled=D,ft.autoUpdate=k,ft.needsUpdate=H,ft.type=U}function pt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function B(M){const D=M.target;D.removeEventListener("dispose",B),lt(D)}function lt(M){mt(M),_t.remove(M)}function mt(M){const D=_t.get(M).programs;D!==void 0&&(D.forEach(function(k){st.releaseProgram(k)}),M.isShaderMaterial&&st.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,k,H,U,yt){D===null&&(D=$t);const Rt=U.isMesh&&U.matrixWorld.determinant()<0,Dt=nf(M,D,k,H,U);Q.setMaterial(H,Rt);let Ut=k.index,Yt=1;if(H.wireframe===!0){if(Ut=W.getWireframeAttribute(k),Ut===void 0)return;Yt=2}const zt=k.drawRange,Ht=k.attributes.position;let ve=zt.start*Yt,Qe=(zt.start+zt.count)*Yt;yt!==null&&(ve=Math.max(ve,yt.start*Yt),Qe=Math.min(Qe,(yt.start+yt.count)*Yt)),Ut!==null?(ve=Math.max(ve,0),Qe=Math.min(Qe,Ut.count)):Ht!=null&&(ve=Math.max(ve,0),Qe=Math.min(Qe,Ht.count));const be=Qe-ve;if(be<0||be===1/0)return;At.setup(U,H,Dt,k,Ut);let Xn,pe=we;if(Ut!==null&&(Xn=x.get(Ut),pe=Jt,pe.setIndex(Xn)),U.isMesh)H.wireframe===!0?(Q.setLineWidth(H.wireframeLinewidth*Lt()),pe.setMode(C.LINES)):pe.setMode(C.TRIANGLES);else if(U.isLine){let Wt=H.linewidth;Wt===void 0&&(Wt=1),Q.setLineWidth(Wt*Lt()),U.isLineSegments?pe.setMode(C.LINES):U.isLineLoop?pe.setMode(C.LINE_LOOP):pe.setMode(C.LINE_STRIP)}else U.isPoints?pe.setMode(C.POINTS):U.isSprite&&pe.setMode(C.TRIANGLES);if(U.isBatchedMesh)pe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)pe.renderInstances(ve,be,U.count);else if(k.isInstancedBufferGeometry){const Wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ja=Math.min(k.instanceCount,Wt);pe.renderInstances(ve,be,ja)}else pe.render(ve,be)};function jt(M,D,k){M.transparent===!0&&M.side===Un&&M.forceSinglePass===!1?(M.side=Xe,M.needsUpdate=!0,Wr(M,D,k),M.side=Li,M.needsUpdate=!0,Wr(M,D,k),M.side=Un):Wr(M,D,k)}this.compile=function(M,D,k=null){k===null&&(k=M),f=Nt.get(k),f.init(),w.push(f),k.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==k&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(_._useLegacyLights);const H=new Set;return M.traverse(function(U){const yt=U.material;if(yt)if(Array.isArray(yt))for(let Rt=0;Rt<yt.length;Rt++){const Dt=yt[Rt];jt(Dt,k,U),H.add(Dt)}else jt(yt,k,U),H.add(yt)}),w.pop(),f=null,H},this.compileAsync=function(M,D,k=null){const H=this.compile(M,D,k);return new Promise(U=>{function yt(){if(H.forEach(function(Rt){_t.get(Rt).currentProgram.isReady()&&H.delete(Rt)}),H.size===0){U(M);return}setTimeout(yt,10)}J.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let oe=null;function Ce(M){oe&&oe(M)}function hn(){ke.stop()}function ce(){ke.start()}const ke=new Oh;ke.setAnimationLoop(Ce),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(M){oe=M,Gt.setAnimationLoop(M),M===null?ke.stop():ke.start()},Gt.addEventListener("sessionstart",hn),Gt.addEventListener("sessionend",ce),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(D),D=Gt.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,D,T),f=Nt.get(M,w.length),f.init(),w.push(f),Pt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ft.setFromProjectionMatrix(Pt),et=this.localClippingEnabled,G=ht.init(this.clippingPlanes,et),v=Bt.get(M,p.length),v.init(),p.push(v),Rn(M,D,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,q),this.info.render.frame++,G===!0&&ht.beginShadows();const k=f.state.shadowsArray;if(ft.render(k,M,D),G===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1)&&kt.render(v,M),f.setupLights(_._useLegacyLights),D.isArrayCamera){const H=D.cameras;for(let U=0,yt=H.length;U<yt;U++){const Rt=H[U];Qc(v,M,Rt,Rt.viewport)}}else Qc(v,M,D);T!==null&&(Et.updateMultisampleRenderTarget(T),Et.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(_,M,D),At.resetDefaultState(),N=-1,V=null,w.pop(),w.length>0?f=w[w.length-1]:f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Rn(M,D,k,H){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ft.intersectsSprite(M)){H&&St.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pt);const Rt=$.update(M),Dt=M.material;Dt.visible&&v.push(M,Rt,Dt,k,St.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ft.intersectsObject(M))){const Rt=$.update(M),Dt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),St.copy(M.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),St.copy(Rt.boundingSphere.center)),St.applyMatrix4(M.matrixWorld).applyMatrix4(Pt)),Array.isArray(Dt)){const Ut=Rt.groups;for(let Yt=0,zt=Ut.length;Yt<zt;Yt++){const Ht=Ut[Yt],ve=Dt[Ht.materialIndex];ve&&ve.visible&&v.push(M,Rt,ve,k,St.z,Ht)}}else Dt.visible&&v.push(M,Rt,Dt,k,St.z,null)}}const yt=M.children;for(let Rt=0,Dt=yt.length;Rt<Dt;Rt++)Rn(yt[Rt],D,k,H)}function Qc(M,D,k,H){const U=M.opaque,yt=M.transmissive,Rt=M.transparent;f.setupLightsView(k),G===!0&&ht.setGlobalState(_.clippingPlanes,k),yt.length>0&&ef(U,yt,D,k),H&&Q.viewport(y.copy(H)),U.length>0&&Vr(U,D,k),yt.length>0&&Vr(yt,D,k),Rt.length>0&&Vr(Rt,D,k),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ef(M,D,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const yt=at.isWebGL2;gt===null&&(gt=new cs(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Ar:Pi,minFilter:ji,samples:yt?4:0})),_.getDrawingBufferSize(Tt),yt?gt.setSize(Tt.x,Tt.y):gt.setSize(ic(Tt.x),ic(Tt.y));const Rt=_.getRenderTarget();_.setRenderTarget(gt),_.getClearColor(j),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const Dt=_.toneMapping;_.toneMapping=Ri,Vr(M,k,H),Et.updateMultisampleRenderTarget(gt),Et.updateRenderTargetMipmap(gt);let Ut=!1;for(let Yt=0,zt=D.length;Yt<zt;Yt++){const Ht=D[Yt],ve=Ht.object,Qe=Ht.geometry,be=Ht.material,Xn=Ht.group;if(be.side===Un&&ve.layers.test(H.layers)){const pe=be.side;be.side=Xe,be.needsUpdate=!0,tl(ve,k,H,Qe,be,Xn),be.side=pe,be.needsUpdate=!0,Ut=!0}}Ut===!0&&(Et.updateMultisampleRenderTarget(gt),Et.updateRenderTargetMipmap(gt)),_.setRenderTarget(Rt),_.setClearColor(j,L),_.toneMapping=Dt}function Vr(M,D,k){const H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,yt=M.length;U<yt;U++){const Rt=M[U],Dt=Rt.object,Ut=Rt.geometry,Yt=H===null?Rt.material:H,zt=Rt.group;Dt.layers.test(k.layers)&&tl(Dt,D,k,Ut,Yt,zt)}}function tl(M,D,k,H,U,yt){M.onBeforeRender(_,D,k,H,U,yt),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,D,k,H,M,yt),U.transparent===!0&&U.side===Un&&U.forceSinglePass===!1?(U.side=Xe,U.needsUpdate=!0,_.renderBufferDirect(k,D,H,U,M,yt),U.side=Li,U.needsUpdate=!0,_.renderBufferDirect(k,D,H,U,M,yt),U.side=Un):_.renderBufferDirect(k,D,H,U,M,yt),M.onAfterRender(_,D,k,H,U,yt)}function Wr(M,D,k){D.isScene!==!0&&(D=$t);const H=_t.get(M),U=f.state.lights,yt=f.state.shadowsArray,Rt=U.state.version,Dt=st.getParameters(M,U.state,yt,D,k),Ut=st.getProgramCacheKey(Dt);let Yt=H.programs;H.environment=M.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(M.isMeshStandardMaterial?E:Kt).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Yt===void 0&&(M.addEventListener("dispose",B),Yt=new Map,H.programs=Yt);let zt=Yt.get(Ut);if(zt!==void 0){if(H.currentProgram===zt&&H.lightsStateVersion===Rt)return nl(M,Dt),zt}else Dt.uniforms=st.getUniforms(M),M.onBuild(k,Dt,_),M.onBeforeCompile(Dt,_),zt=st.acquireProgram(Dt,Ut),Yt.set(Ut,zt),H.uniforms=Dt.uniforms;const Ht=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ht.clippingPlanes=ht.uniform),nl(M,Dt),H.needsLights=rf(M),H.lightsStateVersion=Rt,H.needsLights&&(Ht.ambientLightColor.value=U.state.ambient,Ht.lightProbe.value=U.state.probe,Ht.directionalLights.value=U.state.directional,Ht.directionalLightShadows.value=U.state.directionalShadow,Ht.spotLights.value=U.state.spot,Ht.spotLightShadows.value=U.state.spotShadow,Ht.rectAreaLights.value=U.state.rectArea,Ht.ltc_1.value=U.state.rectAreaLTC1,Ht.ltc_2.value=U.state.rectAreaLTC2,Ht.pointLights.value=U.state.point,Ht.pointLightShadows.value=U.state.pointShadow,Ht.hemisphereLights.value=U.state.hemi,Ht.directionalShadowMap.value=U.state.directionalShadowMap,Ht.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ht.spotShadowMap.value=U.state.spotShadowMap,Ht.spotLightMatrix.value=U.state.spotLightMatrix,Ht.spotLightMap.value=U.state.spotLightMap,Ht.pointShadowMap.value=U.state.pointShadowMap,Ht.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=zt,H.uniformsList=null,zt}function el(M){if(M.uniformsList===null){const D=M.currentProgram.getUniforms();M.uniformsList=xa.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function nl(M,D){const k=_t.get(M);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function nf(M,D,k,H,U){D.isScene!==!0&&(D=$t),Et.resetTextureUnits();const yt=D.fog,Rt=H.isMeshStandardMaterial?D.environment:null,Dt=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ni,Ut=(H.isMeshStandardMaterial?E:Kt).get(H.envMap||Rt),Yt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ht=!!k.morphAttributes.position,ve=!!k.morphAttributes.normal,Qe=!!k.morphAttributes.color;let be=Ri;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(be=_.toneMapping);const Xn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,pe=Xn!==void 0?Xn.length:0,Wt=_t.get(H),ja=f.state.lights;if(G===!0&&(et===!0||M!==V)){const dn=M===V&&H.id===N;ht.setState(H,M,dn)}let he=!1;H.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==ja.state.version||Wt.outputColorSpace!==Dt||U.isBatchedMesh&&Wt.batching===!1||!U.isBatchedMesh&&Wt.batching===!0||U.isInstancedMesh&&Wt.instancing===!1||!U.isInstancedMesh&&Wt.instancing===!0||U.isSkinnedMesh&&Wt.skinning===!1||!U.isSkinnedMesh&&Wt.skinning===!0||U.isInstancedMesh&&Wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Wt.instancingMorph===!1&&U.morphTexture!==null||Wt.envMap!==Ut||H.fog===!0&&Wt.fog!==yt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==ht.numPlanes||Wt.numIntersection!==ht.numIntersection)||Wt.vertexAlphas!==Yt||Wt.vertexTangents!==zt||Wt.morphTargets!==Ht||Wt.morphNormals!==ve||Wt.morphColors!==Qe||Wt.toneMapping!==be||at.isWebGL2===!0&&Wt.morphTargetsCount!==pe)&&(he=!0):(he=!0,Wt.__version=H.version);let Oi=Wt.currentProgram;he===!0&&(Oi=Wr(H,D,U));let il=!1,ur=!1,Qa=!1;const Le=Oi.getUniforms(),Fi=Wt.uniforms;if(Q.useProgram(Oi.program)&&(il=!0,ur=!0,Qa=!0),H.id!==N&&(N=H.id,ur=!0),il||V!==M){Le.setValue(C,"projectionMatrix",M.projectionMatrix),Le.setValue(C,"viewMatrix",M.matrixWorldInverse);const dn=Le.map.cameraPosition;dn!==void 0&&dn.setValue(C,St.setFromMatrixPosition(M.matrixWorld)),at.logarithmicDepthBuffer&&Le.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Le.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),V!==M&&(V=M,ur=!0,Qa=!0)}if(U.isSkinnedMesh){Le.setOptional(C,U,"bindMatrix"),Le.setOptional(C,U,"bindMatrixInverse");const dn=U.skeleton;dn&&(at.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Le.setValue(C,"boneTexture",dn.boneTexture,Et)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(Le.setOptional(C,U,"batchingTexture"),Le.setValue(C,"batchingTexture",U._matricesTexture,Et));const to=k.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&at.isWebGL2===!0)&&ot.update(U,k,Oi),(ur||Wt.receiveShadow!==U.receiveShadow)&&(Wt.receiveShadow=U.receiveShadow,Le.setValue(C,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Fi.envMap.value=Ut,Fi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ur&&(Le.setValue(C,"toneMappingExposure",_.toneMappingExposure),Wt.needsLights&&sf(Fi,Qa),yt&&H.fog===!0&&tt.refreshFogUniforms(Fi,yt),tt.refreshMaterialUniforms(Fi,H,K,z,gt),xa.upload(C,el(Wt),Fi,Et)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(xa.upload(C,el(Wt),Fi,Et),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Le.setValue(C,"center",U.center),Le.setValue(C,"modelViewMatrix",U.modelViewMatrix),Le.setValue(C,"normalMatrix",U.normalMatrix),Le.setValue(C,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const dn=H.uniformsGroups;for(let eo=0,af=dn.length;eo<af;eo++)if(at.isWebGL2){const sl=dn[eo];Ct.update(sl,Oi),Ct.bind(sl,Oi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Oi}function sf(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function rf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,D,k){_t.get(M.texture).__webglTexture=D,_t.get(M.depthTexture).__webglTexture=k;const H=_t.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){const k=_t.get(M);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,k=0){T=M,P=D,A=k;let H=!0,U=null,yt=!1,Rt=!1;if(M){const Ut=_t.get(M);Ut.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(C.FRAMEBUFFER,null),H=!1):Ut.__webglFramebuffer===void 0?Et.setupRenderTarget(M):Ut.__hasExternalTextures&&Et.rebindTextures(M,_t.get(M.texture).__webglTexture,_t.get(M.depthTexture).__webglTexture);const Yt=M.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Rt=!0);const zt=_t.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(zt[D])?U=zt[D][k]:U=zt[D],yt=!0):at.isWebGL2&&M.samples>0&&Et.useMultisampledRTT(M)===!1?U=_t.get(M).__webglMultisampledFramebuffer:Array.isArray(zt)?U=zt[k]:U=zt,y.copy(M.viewport),b.copy(M.scissor),Z=M.scissorTest}else y.copy(rt).multiplyScalar(K).floor(),b.copy(nt).multiplyScalar(K).floor(),Z=vt;if(Q.bindFramebuffer(C.FRAMEBUFFER,U)&&at.drawBuffers&&H&&Q.drawBuffers(M,U),Q.viewport(y),Q.scissor(b),Q.setScissorTest(Z),yt){const Ut=_t.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ut.__webglTexture,k)}else if(Rt){const Ut=_t.get(M.texture),Yt=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ut.__webglTexture,k||0,Yt)}N=-1},this.readRenderTargetPixels=function(M,D,k,H,U,yt,Rt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=_t.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Rt!==void 0&&(Dt=Dt[Rt]),Dt){Q.bindFramebuffer(C.FRAMEBUFFER,Dt);try{const Ut=M.texture,Yt=Ut.format,zt=Ut.type;if(Yt!==En&&It.convert(Yt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=zt===Ar&&(J.has("EXT_color_buffer_half_float")||at.isWebGL2&&J.has("EXT_color_buffer_float"));if(zt!==Pi&&It.convert(zt)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(zt===si&&(at.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-H&&k>=0&&k<=M.height-U&&C.readPixels(D,k,H,U,It.convert(Yt),It.convert(zt),yt)}finally{const Ut=T!==null?_t.get(T).__webglFramebuffer:null;Q.bindFramebuffer(C.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(M,D,k=0){const H=Math.pow(2,-k),U=Math.floor(D.image.width*H),yt=Math.floor(D.image.height*H);Et.setTexture2D(D,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,M.x,M.y,U,yt),Q.unbindTexture()},this.copyTextureToTexture=function(M,D,k,H=0){const U=D.image.width,yt=D.image.height,Rt=It.convert(k.format),Dt=It.convert(k.type);Et.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment),D.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,H,M.x,M.y,U,yt,Rt,Dt,D.image.data):D.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,H,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,Rt,D.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,H,M.x,M.y,Rt,Dt,D.image),H===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(M,D,k,H,U=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=Math.round(M.max.x-M.min.x),Rt=Math.round(M.max.y-M.min.y),Dt=M.max.z-M.min.z+1,Ut=It.convert(H.format),Yt=It.convert(H.type);let zt;if(H.isData3DTexture)Et.setTexture3D(H,0),zt=C.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Et.setTexture2DArray(H,0),zt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const Ht=C.getParameter(C.UNPACK_ROW_LENGTH),ve=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qe=C.getParameter(C.UNPACK_SKIP_PIXELS),be=C.getParameter(C.UNPACK_SKIP_ROWS),Xn=C.getParameter(C.UNPACK_SKIP_IMAGES),pe=k.isCompressedTexture?k.mipmaps[U]:k.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,M.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,M.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,M.min.z),k.isDataTexture||k.isData3DTexture?C.texSubImage3D(zt,U,D.x,D.y,D.z,yt,Rt,Dt,Ut,Yt,pe.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(zt,U,D.x,D.y,D.z,yt,Rt,Dt,Ut,pe.data):C.texSubImage3D(zt,U,D.x,D.y,D.z,yt,Rt,Dt,Ut,Yt,pe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ht),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ve),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,be),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Xn),U===0&&H.generateMipmaps&&C.generateMipmap(zt),Q.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Et.setTextureCube(M,0):M.isData3DTexture?Et.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Et.setTexture2DArray(M,0):Et.setTexture2D(M,0),Q.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,Q.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Rc?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===Ha?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class xv extends Wh{}xv.prototype.isWebGL1Renderer=!0;class Nc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new Nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class wv extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Sv extends qe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,m=(a-u)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ut:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],a=[],o=new R,c=new _e;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Oe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Oe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dc extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,m=l-this.aY;c=d*u-m*h+this.aX,l=d*h+m*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mv extends Dc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,m=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,m*=u,s(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const da=new R,Fo=new Uc,Bo=new Uc,ko=new Uc;class Ev extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(da.subVectors(s[0],s[1]).add(s[0]),l=da);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(da.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=da),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),Fo.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,v,f),Bo.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,v,f),ko.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,v,f)}else this.curveType==="catmullrom"&&(Fo.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Bo.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),ko.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Fo.calc(c),Bo.calc(c),ko.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ru(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function bv(i,t){const e=1-i;return e*e*t}function Tv(i,t){return 2*(1-i)*i*t}function Av(i,t){return i*i*t}function Mr(i,t,e,n){return bv(i,t)+Tv(i,e)+Av(i,n)}function Cv(i,t){const e=1-i;return e*e*e*t}function Rv(i,t){const e=1-i;return 3*e*e*i*t}function Pv(i,t){return 3*(1-i)*i*i*t}function Lv(i,t){return i*i*i*t}function Er(i,t,e,n,s){return Cv(i,t)+Rv(i,e)+Pv(i,n)+Lv(i,s)}class Xh extends Wn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,s.x,r.x,a.x,o.x),Er(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Iv extends Wn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,s.x,r.x,a.x,o.x),Er(t,s.y,r.y,a.y,o.y),Er(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Wn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nv extends Wn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Wn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(t,s.x,r.x,a.x),Mr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dv extends Wn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Mr(t,s.x,r.x,a.x),Mr(t,s.y,r.y,a.y),Mr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Ru(o,c.x,l.x,u.x,h.x),Ru(o,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var rc=Object.freeze({__proto__:null,ArcCurve:Mv,CatmullRomCurve3:Ev,CubicBezierCurve:Xh,CubicBezierCurve3:Iv,EllipseCurve:Dc,LineCurve:qh,LineCurve3:Nv,QuadraticBezierCurve:$h,QuadraticBezierCurve3:Dv,SplineCurve:Yh});class Uv extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rc[s.type]().fromJSON(s))}return this}}class Pu extends Uv{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $h(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Xh(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const l=new Dc(t,e,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class cn extends ln{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],m=[];let g=0;const v=[],f=n/2;let p=0;w(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(m,2));function w(){const S=new R,P=new R;let A=0;const T=(e-t)/n;for(let N=0;N<=r;N++){const V=[],y=N/r,b=y*(e-t)+t;for(let Z=0;Z<=s;Z++){const j=Z/s,L=j*c+o,X=Math.sin(L),z=Math.cos(L);P.x=b*X,P.y=-y*n+f,P.z=b*z,h.push(P.x,P.y,P.z),S.set(X,T,z).normalize(),d.push(S.x,S.y,S.z),m.push(j,1-y),V.push(g++)}v.push(V)}for(let N=0;N<s;N++)for(let V=0;V<r;V++){const y=v[V][N],b=v[V+1][N],Z=v[V+1][N+1],j=v[V][N+1];u.push(y,b,j),u.push(b,Z,j),A+=6}l.addGroup(p,A,0),p+=A}function _(S){const P=g,A=new ut,T=new R;let N=0;const V=S===!0?t:e,y=S===!0?1:-1;for(let Z=1;Z<=s;Z++)h.push(0,f*y,0),d.push(0,y,0),m.push(.5,.5),g++;const b=g;for(let Z=0;Z<=s;Z++){const L=Z/s*c+o,X=Math.cos(L),z=Math.sin(L);T.x=V*z,T.y=f*y,T.z=V*X,h.push(T.x,T.y,T.z),d.push(0,y,0),A.x=X*.5+.5,A.y=z*.5*y+.5,m.push(A.x,A.y),g++}for(let Z=0;Z<s;Z++){const j=P+Z,L=b+Z;S===!0?u.push(L,L+1,j):u.push(L+1,L,j),N+=3}l.addGroup(p,N,S===!0?1:2),p+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mi extends cn{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Mi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oc extends ln{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const _=new R,S=new R,P=new R;for(let A=0;A<e.length;A+=3)m(e[A+0],_),m(e[A+1],S),m(e[A+2],P),c(_,S,P,w)}function c(w,_,S,P){const A=P+1,T=[];for(let N=0;N<=A;N++){T[N]=[];const V=w.clone().lerp(S,N/A),y=_.clone().lerp(S,N/A),b=A-N;for(let Z=0;Z<=b;Z++)Z===0&&N===A?T[N][Z]=V:T[N][Z]=V.clone().lerp(y,Z/b)}for(let N=0;N<A;N++)for(let V=0;V<2*(A-N)-1;V++){const y=Math.floor(V/2);V%2===0?(d(T[N][y+1]),d(T[N+1][y]),d(T[N][y])):(d(T[N][y+1]),d(T[N+1][y+1]),d(T[N+1][y]))}}function l(w){const _=new R;for(let S=0;S<r.length;S+=3)_.x=r[S+0],_.y=r[S+1],_.z=r[S+2],_.normalize().multiplyScalar(w),r[S+0]=_.x,r[S+1]=_.y,r[S+2]=_.z}function u(){const w=new R;for(let _=0;_<r.length;_+=3){w.x=r[_+0],w.y=r[_+1],w.z=r[_+2];const S=f(w)/2/Math.PI+.5,P=p(w)/Math.PI+.5;a.push(S,1-P)}g(),h()}function h(){for(let w=0;w<a.length;w+=6){const _=a[w+0],S=a[w+2],P=a[w+4],A=Math.max(_,S,P),T=Math.min(_,S,P);A>.9&&T<.1&&(_<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),P<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function m(w,_){const S=w*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const w=new R,_=new R,S=new R,P=new R,A=new ut,T=new ut,N=new ut;for(let V=0,y=0;V<r.length;V+=9,y+=6){w.set(r[V+0],r[V+1],r[V+2]),_.set(r[V+3],r[V+4],r[V+5]),S.set(r[V+6],r[V+7],r[V+8]),A.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),N.set(a[y+4],a[y+5]),P.copy(w).add(_).add(S).divideScalar(3);const b=f(P);v(A,y+0,w,b),v(T,y+2,_,b),v(N,y+4,S,b)}}function v(w,_,S,P){P<0&&w.x===1&&(a[_]=w.x-1),S.x===0&&S.z===0&&(a[_]=P/2/Math.PI+.5)}function f(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.vertices,t.indices,t.radius,t.details)}}class Wa extends Oc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wa(t.radius,t.detail)}}class Kh extends Pu{constructor(t){super(t),this.uuid=or(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Pu().fromJSON(s))}return this}}const Ov={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jh(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,u,h,d,m;if(n&&(r=Gv(i,t,r,e)),i.length>80*e){o=l=i[0],c=u=i[1];for(let g=e;g<s;g+=e)h=i[g],d=i[g+1],h<o&&(o=h),d<c&&(c=d),h>l&&(l=h),d>u&&(u=d);m=Math.max(l-o,u-c),m=m!==0?32767/m:0}return Cr(r,a,e,o,c,m,0),a}};function Jh(i,t,e,n,s){let r,a;if(s===jv(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Lu(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Lu(r,i[r],i[r+1],a);return a&&Xa(a,a.next)&&(Pr(a),a=a.next),a}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Xa(e,e.next)||ge(e.prev,e,e.next)===0)){if(Pr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&qv(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Bv(i,n,s,r):Fv(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Pr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=kv(hs(i),t,e),Cr(i,t,e,n,s,r,2)):a===2&&zv(i,t,e,n,s,r):Cr(hs(i),t,e,n,s,r,1);break}}}function Fv(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=s<r?s<a?s:a:r<a?r:a,h=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,m=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=m&&Bs(s,o,r,c,a,l,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bv(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ge(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,m=o<c?o<l?o:l:c<l?c:l,g=u<h?u<d?u:d:h<d?h:d,v=o>c?o>l?o:l:c>l?c:l,f=u>h?u>d?u:d:h>d?h:d,p=ac(m,g,t,e,n),w=ac(v,f,t,e,n);let _=i.prevZ,S=i.nextZ;for(;_&&_.z>=p&&S&&S.z<=w;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&Bs(o,u,c,h,l,d,_.x,_.y)&&ge(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=m&&S.x<=v&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&Bs(o,u,c,h,l,d,S.x,S.y)&&ge(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=v&&_.y>=g&&_.y<=f&&_!==s&&_!==a&&Bs(o,u,c,h,l,d,_.x,_.y)&&ge(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=w;){if(S.x>=m&&S.x<=v&&S.y>=g&&S.y<=f&&S!==s&&S!==a&&Bs(o,u,c,h,l,d,S.x,S.y)&&ge(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function kv(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Xa(s,r)&&Zh(s,n,n.next,r)&&Rr(s,r)&&Rr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Pr(n),Pr(n.next),n=i=r),n=n.next}while(n!==i);return hs(n)}function zv(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kv(a,o)){let c=jh(a,o);a=hs(a,a.next),c=hs(c,c.next),Cr(a,t,e,n,s,r,0),Cr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gv(i,t,e,n){const s=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Jh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Yv(l));for(s.sort(Hv),r=0;r<s.length;r++)e=Vv(s[r],e);return e}function Hv(i,t){return i.x-t.x}function Vv(i,t){const e=Wv(i,t);if(!e)return t;const n=jh(e,i);return hs(n,n.next),hs(e,e.next)}function Wv(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,l=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Bs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(h=Math.abs(a-e.y)/(r-e.x),Rr(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Xv(s,e)))&&(s=e,u=h)),e=e.next;while(e!==o);return s}function Xv(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function qv(i,t,e,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$v(s)}function $v(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yv(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bs(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Kv(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jv(i,t)&&(Rr(i,t)&&Rr(t,i)&&Zv(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||Xa(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Xa(i,t){return i.x===t.x&&i.y===t.y}function Zh(i,t,e,n){const s=pa(ge(i,t,e)),r=pa(ge(i,t,n)),a=pa(ge(e,n,i)),o=pa(ge(e,n,t));return!!(s!==r&&a!==o||s===0&&fa(i,e,t)||r===0&&fa(i,n,t)||a===0&&fa(e,i,n)||o===0&&fa(e,t,n))}function fa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pa(i){return i>0?1:i<0?-1:0}function Jv(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rr(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Zv(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jh(i,t){const e=new oc(i.i,i.x,i.y),n=new oc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lu(i,t,e,n){const s=new oc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Pr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jv(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class br{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return br.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Iu(t),Nu(n,t);let a=t.length;e.forEach(Iu);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Nu(n,e[c]);const o=Ov.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Iu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fc extends ln{constructor(t=new Kh([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new fe(s,3)),this.setAttribute("uv",new fe(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Qv;let _,S=!1,P,A,T,N;p&&(_=p.getSpacedPoints(u),S=!0,d=!1,P=p.computeFrenetFrames(u,!1),A=new R,T=new R,N=new R),d||(f=0,m=0,g=0,v=0);const V=o.extractPoints(l);let y=V.shape;const b=V.holes;if(!br.isClockWise(y)){y=y.reverse();for(let C=0,ct=b.length;C<ct;C++){const J=b[C];br.isClockWise(J)&&(b[C]=J.reverse())}}const j=br.triangulateShape(y,b),L=y;for(let C=0,ct=b.length;C<ct;C++){const J=b[C];y=y.concat(J)}function X(C,ct,J){return ct||console.error("THREE.ExtrudeGeometry: vec does not exist"),C.clone().addScaledVector(ct,J)}const z=y.length,K=j.length;function Y(C,ct,J){let at,Q,wt;const _t=C.x-ct.x,Et=C.y-ct.y,Kt=J.x-C.x,E=J.y-C.y,x=_t*_t+Et*Et,W=_t*E-Et*Kt;if(Math.abs(W)>Number.EPSILON){const $=Math.sqrt(x),st=Math.sqrt(Kt*Kt+E*E),tt=ct.x-Et/$,Bt=ct.y+_t/$,Nt=J.x-E/st,ht=J.y+Kt/st,ft=((Nt-tt)*E-(ht-Bt)*Kt)/(_t*E-Et*Kt);at=tt+_t*ft-C.x,Q=Bt+Et*ft-C.y;const kt=at*at+Q*Q;if(kt<=2)return new ut(at,Q);wt=Math.sqrt(kt/2)}else{let $=!1;_t>Number.EPSILON?Kt>Number.EPSILON&&($=!0):_t<-Number.EPSILON?Kt<-Number.EPSILON&&($=!0):Math.sign(Et)===Math.sign(E)&&($=!0),$?(at=-Et,Q=_t,wt=Math.sqrt(x)):(at=_t,Q=Et,wt=Math.sqrt(x/2))}return new ut(at/wt,Q/wt)}const q=[];for(let C=0,ct=L.length,J=ct-1,at=C+1;C<ct;C++,J++,at++)J===ct&&(J=0),at===ct&&(at=0),q[C]=Y(L[C],L[J],L[at]);const rt=[];let nt,vt=q.concat();for(let C=0,ct=b.length;C<ct;C++){const J=b[C];nt=[];for(let at=0,Q=J.length,wt=Q-1,_t=at+1;at<Q;at++,wt++,_t++)wt===Q&&(wt=0),_t===Q&&(_t=0),nt[at]=Y(J[at],J[wt],J[_t]);rt.push(nt),vt=vt.concat(nt)}for(let C=0;C<f;C++){const ct=C/f,J=m*Math.cos(ct*Math.PI/2),at=g*Math.sin(ct*Math.PI/2)+v;for(let Q=0,wt=L.length;Q<wt;Q++){const _t=X(L[Q],q[Q],at);Pt(_t.x,_t.y,-J)}for(let Q=0,wt=b.length;Q<wt;Q++){const _t=b[Q];nt=rt[Q];for(let Et=0,Kt=_t.length;Et<Kt;Et++){const E=X(_t[Et],nt[Et],at);Pt(E.x,E.y,-J)}}}const Ft=g+v;for(let C=0;C<z;C++){const ct=d?X(y[C],vt[C],Ft):y[C];S?(T.copy(P.normals[0]).multiplyScalar(ct.x),A.copy(P.binormals[0]).multiplyScalar(ct.y),N.copy(_[0]).add(T).add(A),Pt(N.x,N.y,N.z)):Pt(ct.x,ct.y,0)}for(let C=1;C<=u;C++)for(let ct=0;ct<z;ct++){const J=d?X(y[ct],vt[ct],Ft):y[ct];S?(T.copy(P.normals[C]).multiplyScalar(J.x),A.copy(P.binormals[C]).multiplyScalar(J.y),N.copy(_[C]).add(T).add(A),Pt(N.x,N.y,N.z)):Pt(J.x,J.y,h/u*C)}for(let C=f-1;C>=0;C--){const ct=C/f,J=m*Math.cos(ct*Math.PI/2),at=g*Math.sin(ct*Math.PI/2)+v;for(let Q=0,wt=L.length;Q<wt;Q++){const _t=X(L[Q],q[Q],at);Pt(_t.x,_t.y,h+J)}for(let Q=0,wt=b.length;Q<wt;Q++){const _t=b[Q];nt=rt[Q];for(let Et=0,Kt=_t.length;Et<Kt;Et++){const E=X(_t[Et],nt[Et],at);S?Pt(E.x,E.y+_[u-1].y,_[u-1].x+J):Pt(E.x,E.y,h+J)}}}G(),et();function G(){const C=s.length/3;if(d){let ct=0,J=z*ct;for(let at=0;at<K;at++){const Q=j[at];Tt(Q[2]+J,Q[1]+J,Q[0]+J)}ct=u+f*2,J=z*ct;for(let at=0;at<K;at++){const Q=j[at];Tt(Q[0]+J,Q[1]+J,Q[2]+J)}}else{for(let ct=0;ct<K;ct++){const J=j[ct];Tt(J[2],J[1],J[0])}for(let ct=0;ct<K;ct++){const J=j[ct];Tt(J[0]+z*u,J[1]+z*u,J[2]+z*u)}}n.addGroup(C,s.length/3-C,0)}function et(){const C=s.length/3;let ct=0;gt(L,ct),ct+=L.length;for(let J=0,at=b.length;J<at;J++){const Q=b[J];gt(Q,ct),ct+=Q.length}n.addGroup(C,s.length/3-C,1)}function gt(C,ct){let J=C.length;for(;--J>=0;){const at=J;let Q=J-1;Q<0&&(Q=C.length-1);for(let wt=0,_t=u+f*2;wt<_t;wt++){const Et=z*wt,Kt=z*(wt+1),E=ct+at+Et,x=ct+Q+Et,W=ct+Q+Kt,$=ct+at+Kt;St(E,x,W,$)}}}function Pt(C,ct,J){c.push(C),c.push(ct),c.push(J)}function Tt(C,ct,J){$t(C),$t(ct),$t(J);const at=s.length/3,Q=w.generateTopUV(n,s,at-3,at-2,at-1);Lt(Q[0]),Lt(Q[1]),Lt(Q[2])}function St(C,ct,J,at){$t(C),$t(ct),$t(at),$t(ct),$t(J),$t(at);const Q=s.length/3,wt=w.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Lt(wt[0]),Lt(wt[1]),Lt(wt[3]),Lt(wt[1]),Lt(wt[2]),Lt(wt[3])}function $t(C){s.push(c[C*3+0]),s.push(c[C*3+1]),s.push(c[C*3+2])}function Lt(C){r.push(C.x),r.push(C.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return ty(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rc[s.type]().fromJSON(s)),new Fc(n,t.options)}}const Qv={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new ut(r,a),new ut(o,c),new ut(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],m=t[s*3+1],g=t[s*3+2],v=t[r*3],f=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new ut(a,1-c),new ut(l,1-h),new ut(d,1-g),new ut(v,1-p)]:[new ut(o,1-c),new ut(u,1-h),new ut(m,1-g),new ut(f,1-p)]}};function ty(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Bc extends ln{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,m=new R,g=new ut;for(let v=0;v<=s;v++){for(let f=0;f<=n;f++){const p=r+f/n*a;m.x=h*Math.cos(p),m.y=h*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<s;v++){const f=v*(n+1);for(let p=0;p<n;p++){const w=p+f,_=w,S=w+n+1,P=w+n+2,A=w+1;o.push(_,S,A),o.push(S,P,A)}}this.setIndex(o),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nn extends ln{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new R,d=new R,m=[],g=[],v=[],f=[];for(let p=0;p<=n;p++){const w=[],_=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const A=P/e;h.x=-t*Math.cos(s+A*r)*Math.sin(a+_*o),h.y=t*Math.cos(a+_*o),h.z=t*Math.sin(s+A*r)*Math.sin(a+_*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),f.push(A+S,1-_),w.push(l++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const _=u[p][w+1],S=u[p][w],P=u[p+1][w],A=u[p+1][w+1];(p!==0||a>0)&&m.push(_,S,A),(p!==n-1||c<Math.PI)&&m.push(S,P,A)}this.setIndex(m),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(v,3)),this.setAttribute("uv",new fe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kc extends ln{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],u=new R,h=new R,d=new R;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,f=m/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(v),h.y=(t+e*Math.cos(f))*Math.sin(v),h.z=e*Math.sin(f),o.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,f=(s+1)*(m-1)+g-1,p=(s+1)*(m-1)+g,w=(s+1)*m+g;a.push(v,f,w),a.push(f,p,w)}this.setIndex(a),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ie extends Gr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zc extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const zo=new _e,Du=new R,Uu=new R;class Qh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Du.setFromMatrixPosition(t.matrixWorld),e.position.copy(Du),Uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uu),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ou=new _e,_r=new R,Go=new R;class ey extends Qh{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ut(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_r.setFromMatrixPosition(t.matrixWorld),n.position.copy(_r),Go.copy(n.position),Go.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Go),n.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou)}}class td extends zc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ey}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ny extends Qh{constructor(){super(new Fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class iy extends zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new ny}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sy extends zc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);class ry{constructor(t){this.canvas=t,this.keys={},this.mouseDown=!1,this.mouseDelta={x:0,y:0},this.isLocked=!1,this._accDelta={x:0,y:0},window.addEventListener("keydown",e=>{this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),t.addEventListener("mousedown",e=>{e.button===0&&(this.mouseDown=!0)}),t.addEventListener("mouseup",e=>{e.button===0&&(this.mouseDown=!1)}),document.addEventListener("pointerlockchange",()=>{this.isLocked=document.pointerLockElement===t}),document.addEventListener("mousemove",e=>{this.isLocked&&(this._accDelta.x+=e.movementX,this._accDelta.y+=e.movementY)})}requestPointerLock(){this.canvas.requestPointerLock()}isKeyDown(t){return!!this.keys[t]}isMouseClicked(){const t=this.mouseDown;return this.mouseDown=!1,t}getMouseDelta(){const t={x:this._accDelta.x,y:this._accDelta.y};return this._accDelta.x=0,this._accDelta.y=0,t}}class mn{static createPlayerModel(){const t=new an,e=new cn(.35,.4,1.2,8),n=new ie({color:3447003,roughness:.6,metalness:.2}),s=new Mt(e,n);s.position.y=.6,t.add(s);const r=new nn(.28,8,8),a=new ie({color:16763042,roughness:.7}),o=new Mt(r,a);o.position.y=1.45,t.add(o);const c=new nn(.05,6,6),l=new ie({color:2236962}),u=new Mt(c,l);u.position.set(-.1,1.5,.25);const h=new Mt(c,l);h.position.set(.1,1.5,.25),t.add(u,h);const d=new cn(.1,.08,.7,6),m=new ie({color:2719929,roughness:.6}),g=new Mt(d,m);g.position.set(-.5,.7,0),g.rotation.z=.3;const v=new Mt(d,m);v.position.set(.5,.7,0),v.rotation.z=-.3,t.add(g,v);const f=mn.createBasicSword(10066329);return f.position.set(.6,.5,.2),f.rotation.z=-.5,f.name="weapon",t.add(f),t.castShadow=!0,t.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),t}static createBasicSword(t){const e=new an,n=new Ue(.06,.8,.04),s=new ie({color:t,roughness:.3,metalness:.8}),r=new Mt(n,s);r.position.y=.4,e.add(r);const a=new cn(.04,.04,.2,6),o=new ie({color:6111287,roughness:.8}),c=new Mt(a,o);e.add(c);const l=new Ue(.2,.04,.06),u=new ie({color:16766720,roughness:.4,metalness:.6}),h=new Mt(l,u);return h.position.y=.08,e.add(h),e}static createSwordDrop(t){const e={"defense-breaker":48340,"speed-counter":5025616,"power-counter":16733986},n=mn.createBasicSword(e[t]||16777215);n.scale.set(1.5,1.5,1.5);const s=new kc(.5,.05,8,16),r=new ie({color:e[t]||16777215,emissive:e[t]||16777215,emissiveIntensity:.8,transparent:!0,opacity:.6}),a=new Mt(s,r);return a.rotation.x=Math.PI/2,a.position.y=-.1,n.add(a),n}static createMonsterModel(){const t=new an,e=new Wa(.5,0),n=new ie({color:12597547,roughness:.5}),s=new Mt(e,n);s.position.y=.5,t.add(s);const r=new nn(.08,6,6),a=new ie({color:16776960,emissive:16776960,emissiveIntensity:.6}),o=new Mt(r,a);o.position.set(-.18,.6,.4);const c=new Mt(r,a);c.position.set(.18,.6,.4),t.add(o,c);const l=new Mi(.08,.3,4),u=new ie({color:9579297});for(let h=0;h<5;h++){const d=new Mt(l,u),m=h/5*Math.PI*2;d.position.set(Math.cos(m)*.45,.9,Math.sin(m)*.45),d.rotation.x=Math.cos(m)*.5,d.rotation.z=Math.sin(m)*.5,t.add(d)}return t.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),t}static createDefenseBossModel(){const t=new an,e=2899536,n=new ie({color:e,roughness:.7,metalness:.6,emissive:e,emissiveIntensity:.1}),s=new Mt(new Ue(2,2.5,1.5),n);s.position.y=1.25,t.add(s);const r=new ie({color:8359053,metalness:.8,roughness:.4}),a=new Mt(new nn(.8,8,8),r);a.position.set(-1.2,2.2,0);const o=new Mt(new nn(.8,8,8),r);o.position.set(1.2,2.2,0),t.add(a,o);const c=new Mt(new Ue(1,1,1.2),n);c.position.y=3,t.add(c);const l=new Mi(.2,1,4),u=new ie({color:12436423}),h=new Mt(l,u);h.position.set(-.6,3.4,.2),h.rotation.z=.5,h.rotation.x=-.3;const d=new Mt(l,u);d.position.set(.6,3.4,.2),d.rotation.z=-.5,d.rotation.x=-.3,t.add(h,d);const m=new ie({color:16711680,emissive:16711680,emissiveIntensity:2}),g=new Mt(new nn(.15,8,8),m);g.position.set(-.25,3.2,.6);const v=new Mt(new nn(.15,8,8),m);return v.position.set(.25,3.2,.6),t.add(g,v),t.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),t}static createSpeedBossModel(){const t=new an,e=2600544,n=new ie({color:e,roughness:.3,metalness:.2,emissive:e,emissiveIntensity:.2}),s=new Mt(new cn(.4,.2,2.5,8),n);s.position.y=1.25,t.add(s);const r=new Mt(new nn(.5,12,12),n);r.position.y=2.75,t.add(r);const a=new Mi(1.5,4,4),o=new ie({color:3066993,emissive:3066993,emissiveIntensity:.4,transparent:!0,opacity:.7}),c=new Mt(a,o);c.scale.z=.1,c.position.set(-1.5,1.5,-.5),c.rotation.z=Math.PI/4,c.rotation.y=-.2;const l=new Mt(a,o);l.scale.z=.1,l.position.set(1.5,1.5,-.5),l.rotation.z=-Math.PI/4,l.rotation.y=.2,t.add(c,l);const u=new ie({color:16776960,emissive:16776960,emissiveIntensity:1.5});for(let h=-1;h<=1;h++){const d=new Mt(new nn(.08,8,8),u);d.position.set(h*.2,2.8,.45),t.add(d)}return t.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.receiveShadow=!0)}),t}static createAttackBossModel(){const t=new an,e=9323693,n=new ie({color:e,roughness:.5,metalness:.5,emissive:4858714,emissiveIntensity:.4}),s=new Mt(new cn(1.2,.6,1.5,8),n);s.position.y=2,t.add(s);const r=new Mt(new cn(.6,.8,1.2,8),n);r.position.y=.6,t.add(r);const a=new Mt(new Ue(.8,.8,.8),n);a.position.y=3.1,t.add(a);const o=new ie({color:0});for(let v=0;v<3;v++){const f=new Mt(new Mi(.1,.5,4),o);f.position.set((v-1)*.3,3.6,0),t.add(f)}const c=new ie({color:16724736,emissive:16724736,emissiveIntensity:2}),l=new Mt(new Ue(.2,.1,.1),c);l.position.set(-.25,3.1,.4),l.rotation.z=-.2;const u=new Mt(new Ue(.2,.1,.1),c);u.position.set(.25,3.1,.4),u.rotation.z=.2,t.add(l,u);const h=mn.createBasicSword(16711680);h.scale.set(4,5,4),h.position.set(1.5,1.5,1),h.rotation.x=Math.PI/4;const d=new Ue(.4,4.2,.2),m=new ls({color:16711680,transparent:!0,opacity:.5}),g=new Mt(d,m);return g.position.y=2,h.add(g),t.add(h),t.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),t}static createGearModel(t){const e=new an;if(t==="armor"){const a=new Ue(.8,.9,.4),o=new ie({color:9807270,roughness:.3,metalness:.8}),c=new Mt(a,o);c.position.y=.5,e.add(c);const l=new nn(.2,8,8),u=new Mt(l,o);u.position.set(-.55,.8,0);const h=new Mt(l,o);h.position.set(.55,.8,0),e.add(u,h)}else if(t==="boots"){const a=new Ue(.3,.25,.5),o=new ie({color:2600544,emissive:2600544,emissiveIntensity:.3,roughness:.4,metalness:.5}),c=new Mt(a,o);c.position.set(-.25,.12,0);const l=new Mt(a,o);l.position.set(.25,.12,0),e.add(c,l)}else if(t==="legendary-sword"){const a=mn.createBasicSword(16739125);a.scale.set(2,2,2),e.add(a)}const n=new Bc(.6,.9,16),s=new ie({color:16238920,emissive:16238920,emissiveIntensity:.8,transparent:!0,opacity:.4,side:Un}),r=new Mt(n,s);return r.rotation.x=-Math.PI/2,r.position.y=.02,e.add(r),e.traverse(a=>{a.isMesh&&(a.castShadow=!0)}),e}static createCaveModel(t){const e=new an,n=new Kh;n.moveTo(-3,0),n.lineTo(-3,3),n.quadraticCurveTo(-3,5,0,5.5),n.quadraticCurveTo(3,5,3,3),n.lineTo(3,0),n.lineTo(-3,0);const s=new Fc(n,{depth:3,bevelEnabled:!1}),r=new ie({color:3815994,roughness:.9}),a=new Mt(s,r);a.position.z=-1.5,e.add(a);const o=new us(5,5),c=new ls({color:328965}),l=new Mt(o,c);l.position.set(0,2.5,-1.4),e.add(l);const u=new Mi(.3,1.2,5),h=new ie({color:t,emissive:t,emissiveIntensity:.6,transparent:!0,opacity:.8});for(let m=0;m<4;m++){const g=new Mt(u,h),v=m<2?-1:1;g.position.set(v*(2.8+Math.random()*.5),1+Math.random()*2,-.5),g.rotation.z=v*(.2+Math.random()*.3),g.rotation.x=Math.random()*.3,e.add(g)}const d=new td(t,2,10);return d.position.set(0,3,0),e.add(d),e.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),e}}class ay{constructor(t){this.scene=t,this.caves=[],this._build()}_build(){this.scene.fog=new Nc(1710638,.012);const t=new nn(200,32,32),e=new ci({side:Xe,uniforms:{topColor:{value:new te(657966)},bottomColor:{value:new te(1710654)},offset:{value:10},exponent:{value:.6}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPos = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `}),n=new Mt(t,e);this.scene.add(n);const s=new us(200,200,40,40),r=new ie({color:2972199,roughness:.95,metalness:0}),a=s.getAttribute("position");for(let p=0;p<a.count;p++){const w=a.getX(p),_=a.getY(p),S=Math.sin(w*.3)*Math.cos(_*.3)*.4+Math.sin(w*.7+1.3)*Math.cos(_*.5+2.1)*.2;a.setZ(p,S)}s.computeVertexNormals();const o=new Mt(s,r);o.rotation.x=-Math.PI/2,o.receiveShadow=!0,this.scene.add(o);const c=new cn(5,6,.5,16),l=new ie({color:4868698,roughness:.7,metalness:.3}),u=new Mt(c,l);u.position.y=.25,u.receiveShadow=!0,this.scene.add(u);const h=new cn(.3,.4,3,8),d=new ie({color:16238920,emissive:16238920,emissiveIntensity:.3}),m=new Mt(h,d);m.position.y=1.75,m.castShadow=!0,this.scene.add(m);const g=new td(16238920,3,20);g.position.set(0,4,0),this.scene.add(g);const v=new sy(4210784,.6);this.scene.add(v);const f=new iy(16774374,1);f.position.set(30,50,20),f.castShadow=!0,f.shadow.mapSize.width=2048,f.shadow.mapSize.height=2048,f.shadow.camera.near=.5,f.shadow.camera.far=120,f.shadow.camera.left=-60,f.shadow.camera.right=60,f.shadow.camera.top=60,f.shadow.camera.bottom=-60,this.scene.add(f),this._scatterProps(),this._placeCaves()}_scatterProps(){const t=new Wa(.5,0),e=new ie({color:5921370,roughness:.9}),n=new Mi(.8,2.5,6),s=new ie({color:1727514,roughness:.8}),r=new cn(.12,.15,1,6),a=new ie({color:6109722,roughness:.9});for(let o=0;o<80;o++){const c=Math.random()*Math.PI*2,l=15+Math.random()*60,u=Math.cos(c)*l,h=Math.sin(c)*l;if(Math.random()>.5){const d=new Mt(t,e),m=.4+Math.random()*1.5;d.scale.set(m,m*(.5+Math.random()*.5),m),d.position.set(u,m*.2,h),d.rotation.set(Math.random(),Math.random(),Math.random()),d.castShadow=!0,d.receiveShadow=!0,this.scene.add(d)}else{const d=new Mt(r,a);d.position.set(u,.5,h),d.castShadow=!0,this.scene.add(d);const m=new Mt(n,s),g=.8+Math.random()*.6;m.scale.set(g,g,g),m.position.set(u,1.6+g*.3,h),m.castShadow=!0,this.scene.add(m)}}}_placeCaves(){const t=[{id:1,color:48340,angle:Math.PI/2,dist:40,label:"Cave 1 — Defense"},{id:2,color:5025616,angle:Math.PI/2+2*Math.PI/3,dist:40,label:"Cave 2 — Speed"},{id:3,color:16733986,angle:Math.PI/2+4*Math.PI/3,dist:40,label:"Cave 3 — Attack"}];for(const e of t){const n=Math.cos(e.angle)*e.dist,s=Math.sin(e.angle)*e.dist,r=mn.createCaveModel(e.color);r.position.set(n,0,s),r.lookAt(0,0,0),this.scene.add(r);const a=new us(3,1),o=document.createElement("canvas");o.width=256,o.height=64;const c=o.getContext("2d");c.fillStyle="#222",c.fillRect(0,0,256,64),c.fillStyle="#"+e.color.toString(16).padStart(6,"0"),c.font="bold 28px Arial",c.textAlign="center",c.fillText(e.label,128,42);const l=new Sv(o),u=new ls({map:l,transparent:!0}),h=new Mt(a,u),d=Math.cos(e.angle)*(e.dist-10),m=Math.sin(e.angle)*(e.dist-10);h.position.set(d,3,m),h.lookAt(0,3,0),this.scene.add(h),this.caves.push({id:e.id,position:new R(n,0,s),color:e.color,label:e.label,monsterZoneCenter:new R(Math.cos(e.angle)*(e.dist-12),0,Math.sin(e.angle)*(e.dist-12)),bossPosition:new R(Math.cos(e.angle)*(e.dist+8),0,Math.sin(e.angle)*(e.dist+8)),angle:e.angle})}}getCaves(){return this.caves}}class oy{constructor(){this.swords={},this.gear={},this.activeSword=null}addSword(t,e){this.swords[t]=e,this.activeSword=e}hasSword(t){return!!this.swords[t]}getSwordType(t){return this.swords[t]||null}setActiveSword(t){this.activeSword=t}getActiveSword(){return this.activeSword}addGear(t,e={equipped:!0}){this.gear[t]=e}getGearData(t){return this.gear[t]||null}hasGear(t){return!!this.gear[t]&&this.gear[t].equipped}getGearBonuses(){return{defense:this.hasGear("Chestplate")?.5:0,speedMultiplier:this.hasGear("Boots")?1.4:1,dodgeMultiplier:this.hasGear("Boots")?1.5:1,damageMultiplier:this.hasGear("Sword")?1.8:1}}save(t){if(!t)return;const e=`bossRPG_equipment_${t}`;localStorage.setItem(e,JSON.stringify(this.gear))}load(t){if(!t)return;const e=`bossRPG_equipment_${t}`;try{const n=JSON.parse(localStorage.getItem(e));n&&(this.gear=n)}catch(n){console.error("Failed to load equipment",n)}}getAllGear(){return Object.keys(this.gear)}getAllSwords(){return{...this.swords}}}class cy{constructor(t,e){this.scene=t,this.input=e,this.inventory=new oy,this.maxHealth=100,this.health=100,this.baseDamage=8,this.moveSpeed=8,this.isDead=!1,this.isInvincible=!1,this.invincibleTimer=0,this.isAttacking=!1,this.attackTimer=0,this.attackCooldown=0,this.attackDuration=.3,this.attackCooldownTime=.5,this.attackRange=4.5,this.hasHitThisSwing=!1,this.fugaCooldown=0,this.fugaCooldownTime=3,this.isAimingFuga=!1,this.fugaFired=!1,this.isDodging=!1,this.dodgeTimer=0,this.dodgeDuration=.35,this.dodgeCooldown=0,this.dodgeCooldownTime=.8,this.dodgeSpeed=20,this.dodgeDirection=new R,this.cameraYaw=0,this.cameraPitch=.3,this.cameraDistance=8,this.cameraSensitivity=.002,this.position=new R(0,0,0),this.velocity=new R,this.facing=new R(0,0,-1),this.model=mn.createPlayerModel(),this.scene.add(this.model),this.camera=new on(60,window.innerWidth/window.innerHeight,.1,300),this.respawnPoint=new R(0,0,0),this.currentCaveId=null,this._bobPhase=0}getCamera(){return this.camera}update(t){if(this.isDead)return;if(this.attackCooldown>0&&(this.attackCooldown-=t),this.dodgeCooldown>0&&(this.dodgeCooldown-=t),this.fugaCooldown>0&&(this.fugaCooldown-=t),this.invincibleTimer>0&&(this.invincibleTimer-=t,this.invincibleTimer<=0&&(this.isInvincible=!1)),this.health<this.maxHealth&&(this.health=Math.min(this.health+1*t,this.maxHealth)),this.isDodging){this.dodgeTimer-=t;const l=this.inventory.getGearBonuses().dodgeMultiplier;this.position.addScaledVector(this.dodgeDirection,this.dodgeSpeed*l*t),this.dodgeTimer<=0&&(this.isDodging=!1,this.isInvincible=!1),this._updateModelAndCamera(t);return}if(this.isAttacking){this.attackTimer-=t;const l=this.model.getObjectByName("weapon");if(l){const u=1-this.attackTimer/this.attackDuration;l.rotation.x=Math.sin(u*Math.PI)*-1.5}this.attackTimer<=0&&(this.isAttacking=!1,l&&(l.rotation.x=0))}const e=this.inventory.getGearBonuses(),n=this.moveSpeed*e.speedMultiplier,s=new R(-Math.sin(this.cameraYaw),0,-Math.cos(this.cameraYaw)),r=new R(-s.z,0,s.x),a=new R;this.input.isKeyDown("KeyW")&&a.add(s),this.input.isKeyDown("KeyS")&&a.sub(s),this.input.isKeyDown("KeyA")&&a.sub(r),this.input.isKeyDown("KeyD")&&a.add(r),a.lengthSq()>0&&(a.normalize(),this.position.addScaledVector(a,n*t),this.facing.copy(a),this._bobPhase+=t*10),this.input.isKeyDown("Space")&&this.dodgeCooldown<=0&&!this.isDodging&&(this.isDodging=!0,this.isInvincible=!0,this.dodgeTimer=this.dodgeDuration,this.dodgeCooldown=this.dodgeCooldownTime,this.dodgeDirection.copy(a.lengthSq()>0?a:this.facing).normalize()),this.input.isMouseClicked()&&this.attackCooldown<=0&&!this.isAttacking&&!this.isAimingFuga&&(this.isAttacking=!0,this.attackTimer=this.attackDuration,this.attackCooldown=this.attackCooldownTime,this.hasHitThisSwing=!1);const o=this.input.isKeyDown("KeyJ");if(o&&this.fugaCooldown<=0&&!this.isDodging&&!this.isAttacking)this.isAimingFuga=!0;else if(!o&&this.isAimingFuga){this.isAimingFuga=!1,this.fugaFired=!0,this.fugaCooldown=this.fugaCooldownTime;const l=this.position.clone();l.y+=1.5;const u=new R(-Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch),Math.sin(this.cameraPitch),-Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch)).normalize();this.fugaRay={origin:l,dir:u}}const c=this.input.getMouseDelta();this.cameraYaw-=c.x*this.cameraSensitivity,this.cameraPitch+=c.y*this.cameraSensitivity,this.cameraPitch=Math.max(-.5,Math.min(1.2,this.cameraPitch)),this._updateModelAndCamera(t)}_updateModelAndCamera(t){this.model.position.copy(this.position);const e=Math.sin(this._bobPhase)*.05;if(this.model.position.y+=e,this.facing.lengthSq()>0){const n=Math.atan2(this.facing.x,this.facing.z);this.model.rotation.y=n}if(this.isDodging?(this.model.scale.y=.6,this.model.scale.x=1.3,this.model.scale.z=1.3):this.model.scale.set(1,1,1),this.isInvincible?this.model.visible=Math.floor(performance.now()/80)%2===0:this.model.visible=!0,this.isAimingFuga){const n=this.position.clone();n.y+=1.5,this.camera.position.copy(n);const s=new R(-Math.sin(this.cameraYaw)*Math.cos(this.cameraPitch),Math.sin(this.cameraPitch),-Math.cos(this.cameraYaw)*Math.cos(this.cameraPitch));this.camera.lookAt(n.add(s)),this.facing.copy(s).normalize(),this.facing.y=0,this.facing.lengthSq()>0&&(this.model.rotation.y=Math.atan2(this.facing.x,this.facing.z)),this.model.visible=!1}else{const n=new R(Math.sin(this.cameraYaw)*this.cameraDistance*Math.cos(this.cameraPitch),this.cameraDistance*Math.sin(this.cameraPitch)+2,Math.cos(this.cameraYaw)*this.cameraDistance*Math.cos(this.cameraPitch));this.camera.position.copy(this.position).add(n),this.camera.lookAt(this.position.x,this.position.y+1.2,this.position.z)}}getDamage(t){const e=this.inventory.getGearBonuses();let n=this.baseDamage*e.damageMultiplier;const s=this.inventory.getActiveSword();return t&&s===t?n:t?n*.05:n}takeDamage(t){if(this.isDead||this.isInvincible)return!1;const e=this.inventory.getGearBonuses(),n=t*(1-e.defense);return this.health-=n,this.isInvincible=!0,this.invincibleTimer=.5,this.health<=0&&(this.health=0,this.die()),!0}die(){this.isDead=!0}respawn(){this.isDead=!1,this.health=this.maxHealth,this.position.copy(this.respawnPoint),this.isInvincible=!0,this.invincibleTimer=2,this.isAttacking=!1,this.isDodging=!1}setRespawnPoint(t,e){this.respawnPoint.copy(t),this.currentCaveId=e}getAttackHitbox(){if(!this.isAttacking||this.hasHitThisSwing)return null;const t=this.position.clone().add(this.facing.clone().multiplyScalar(2.5));return t.y+=.8,{center:t,radius:this.attackRange}}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}}class ly{constructor(t,e,n){this.scene=t,this.caveId=n,this.maxHealth=30,this.health=30,this.damage=5,this.moveSpeed=3.5,this.detectionRadius=12,this.attackRadius=1.8,this.attackCooldownTime=1.2,this.attackCooldown=0,this.state="idle",this.isDead=!1,this.deathTimer=0,this.position=e.clone(),this.spawnPosition=e.clone(),this.dropsSword=!1,this.swordType=null,this.droppedSword=null,this.model=mn.createMonsterModel(),this.model.position.copy(this.position),this.scene.add(this.model),this._wanderTarget=null,this._wanderTimer=Math.random()*3,this._attackAnim=0}update(t,e){if(this.isDead){this.deathTimer+=t;const s=Math.max(0,1-this.deathTimer*2);this.model.scale.set(s,s,s),this.model.position.y=-this.deathTimer*.5,this.deathTimer>1&&(this.model.visible=!1);return}this.attackCooldown>0&&(this.attackCooldown-=t);const n=this.position.distanceTo(e);switch(n<this.attackRadius&&this.attackCooldown<=0?this.state="attack":n<this.detectionRadius?this.state="chase":this.state="idle",this.state){case"idle":this._idle(t);break;case"chase":this._chase(t,e);break;case"attack":this._attack(t,e);break}this.model.position.copy(this.position),this.model.position.y+=Math.sin(performance.now()*.003+this.position.x)*.08}_idle(t){if(this._wanderTimer-=t,this._wanderTimer<=0){this._wanderTimer=2+Math.random()*3;const e=Math.random()*Math.PI*2,n=2+Math.random()*4;this._wanderTarget=this.spawnPosition.clone().add(new R(Math.cos(e)*n,0,Math.sin(e)*n))}if(this._wanderTarget){const e=this._wanderTarget.clone().sub(this.position);e.y=0,e.length()>.5&&(e.normalize(),this.position.addScaledVector(e,this.moveSpeed*.3*t),this.model.lookAt(this._wanderTarget.x,this.model.position.y,this._wanderTarget.z))}}_chase(t,e){const n=e.clone().sub(this.position);n.y=0,n.length()>.5&&(n.normalize(),this.position.addScaledVector(n,this.moveSpeed*t),this.model.lookAt(e.x,this.model.position.y,e.z))}_attack(t,e){this.attackCooldown=this.attackCooldownTime,this.model.lookAt(e.x,this.model.position.y,e.z),this._attackAnim=1,this.state="chase"}takeDamage(t){this.isDead||(this.health-=t,this.model.traverse(e=>{e.isMesh&&(e.material=e.material.clone(),e.material.color.getHex(),e.material.emissive.setHex(16711680),e.material.emissiveIntensity=.8,setTimeout(()=>{e.material&&(e.material.emissive.setHex(0),e.material.emissiveIntensity=0)},150))}),this.health<=0&&(this.health=0,this.die()))}die(){this.isDead=!0,this.state="dead",this.deathTimer=0}isAttacking(){return this._attackAnim>0}consumeAttack(){const t=this._attackAnim>0;return this._attackAnim=0,t}destroy(){this.scene.remove(this.model),this.droppedSword&&this.scene.remove(this.droppedSword)}}class uy{constructor(t){this.scene=t,this.monstersByCave={},this.droppedSwords=[]}spawnForCave(t){const e=[],n=18+Math.floor(Math.random()*5),s={1:"defense-breaker",2:"speed-counter",3:"power-counter"},r=Math.floor(Math.random()*n);for(let a=0;a<n;a++){const o=Math.random()*Math.PI*2,c=3+Math.random()*8,l=t.monsterZoneCenter.clone().add(new R(Math.cos(o)*c,0,Math.sin(o)*c)),u=new ly(this.scene,l,t.id);(a===r||Math.random()<.08)&&(u.dropsSword=!0,u.swordType=s[t.id]),e.push(u)}return this.monstersByCave[t.id]=e,e}update(t,e){for(const n in this.monstersByCave){const s=this.monstersByCave[n];for(const r of s)r.update(t,e)}for(const n of this.droppedSwords)!n.collected&&n.mesh&&(n.mesh.rotation.y+=t*2,n.mesh.position.y=n.baseY+Math.sin(performance.now()*.003)*.3)}handleMonsterDeath(t){if(t.dropsSword&&t.swordType){const e=mn.createSwordDrop(t.swordType),n=t.position.clone();n.y=.8,e.position.copy(n),this.scene.add(e);const s={position:n.clone(),baseY:.8,type:t.swordType,caveId:t.caveId,mesh:e,collected:!1};return this.droppedSwords.push(s),t.droppedSword=e,s}return null}checkSwordPickup(t,e=2){for(const n of this.droppedSwords)if(!n.collected&&t.distanceTo(n.position)<e)return n.collected=!0,n.mesh&&this.scene.remove(n.mesh),n;return null}getAllMonsters(){const t=[];for(const e in this.monstersByCave)t.push(...this.monstersByCave[e]);return t}getMonstersForCave(t){return this.monstersByCave[t]||[]}areCaveMonstersDead(t){const e=this.monstersByCave[t];return e?e.every(n=>n.isDead):!0}}class Gc{constructor(t,e){this.scene=t,this.id=e.id,this.name=e.name,this.type=e.type,this.caveId=e.caveId,this.maxHealth=e.maxHealth||500,this.health=this.maxHealth,this.damage=e.damage||15,this.moveSpeed=e.moveSpeed||2,this.defense=e.defense||0,this.weakness=e.weakness,this.gearDrop=e.gearDrop,this.isDead=!1,this.isActive=!1,this.state="idle",this.stateTimer=0,this.position=e.position.clone(),this.spawnPosition=e.position.clone(),this.facing=new R(0,0,1),this.patterns=e.patterns||[],this.currentPattern=0,this.patternCooldown=0,this.attackHitbox=null,this.isVulnerable=!1,this.vulnerableTimer=0,this.vulnerableDuration=e.vulnerableDuration||2,this.telegraphDuration=e.telegraphDuration||.8,this.attackDuration=e.attackDuration||.5,this.cooldownDuration=e.cooldownDuration||1.5,this.model=new an,this.model.add(new Mt(new Ue(1,1,1),new ls({color:16711680}))),this.model.position.copy(this.position),this.model.visible=!1,this.scene.add(this.model),this.arenaRadius=15,this._attackAnimPhase=0}activate(){this.isActive=!0,this.model.visible=!0,this.state="chase",this.stateTimer=2}deactivate(){this.isActive=!1,this.model.visible=!1}update(t,e){if(!this.isActive||this.isDead)return;this.stateTimer-=t,this.patternCooldown>0&&(this.patternCooldown-=t);const n=this.position.distanceTo(e),s=e.clone().sub(this.position);switch(s.y=0,s.normalize(),this.state){case"chase":this._chase(t,e,n,s);break;case"telegraph":this._telegraph(t,e);break;case"attack":this._performAttack(t,e,s);break;case"cooldown":this._cooldown(t);break;case"vulnerable":this._vulnerable(t);break}if(this.model.position.copy(this.position),this.state==="telegraph"){const r=1+Math.sin(performance.now()*.02)*.1;this.model.scale.set(r,r,r)}else this.state==="vulnerable"?(this.model.scale.set(.9,.9,.9),this.model.visible=Math.floor(performance.now()/200)%3!==0):(this.model.scale.set(1,1,1),this.model.visible=!0)}_chase(t,e,n,s){n>3&&(this.position.addScaledVector(s,this.moveSpeed*t),this.model.lookAt(e.x,this.model.position.y,e.z)),(n<5||this.stateTimer<=0)&&this.patternCooldown<=0&&(this.state="telegraph",this.stateTimer=this.telegraphDuration,this.model.lookAt(e.x,this.model.position.y,e.z))}_telegraph(t,e){this.model.position.x+=(Math.random()-.5)*.1,this.model.position.z+=(Math.random()-.5)*.1,this.stateTimer<=0&&(this.state="attack",this.stateTimer=this.attackDuration,this._attackAnimPhase=0,this.facing.copy(e.clone().sub(this.position).normalize()))}_performAttack(t,e,n){this._attackAnimPhase+=t;const s=this.patterns[this.currentPattern%this.patterns.length];this.attackHitbox=this._getAttackHitbox(s),this.stateTimer<=0&&(this.attackHitbox=null,this.currentPattern=(this.currentPattern+1)%this.patterns.length,this.currentPattern%3===0?(this.state="vulnerable",this.stateTimer=this.vulnerableDuration,this.isVulnerable=!0):(this.state="cooldown",this.stateTimer=this.cooldownDuration))}_cooldown(t){this.attackHitbox=null,this.stateTimer<=0&&(this.state="chase",this.stateTimer=1+Math.random()*2,this.patternCooldown=.5)}_vulnerable(t){this.attackHitbox=null,this.stateTimer<=0&&(this.isVulnerable=!1,this.state="chase",this.stateTimer=1.5)}_getAttackHitbox(t){const e=this.position.clone().add(this.facing.clone().multiplyScalar(3));return e.y=1,{center:e,radius:(t==null?void 0:t.radius)||4,damage:this.damage*((t==null?void 0:t.damageMultiplier)||1)}}takeDamage(t){if(this.isDead)return;const e=this.isVulnerable?1.5:1,n=Math.max(1,(t-this.defense)*e);return this.health-=n,this.model.traverse(s=>{if(!s.isMesh||!s.material)return;(Array.isArray(s.material)?s.material:[s.material]).forEach((a,o)=>{try{if(!a||!a.emissive)return;const c=a.clone();c.emissive.setHex(16777215),c.emissiveIntensity=1,Array.isArray(s.material)?s.material[o]=c:s.material=c,setTimeout(()=>{try{c.emissive&&(c.emissive.setHex(0),c.emissiveIntensity=0)}catch{}},100)}catch{}})}),this.health<=0&&(this.health=0,this.die()),n}die(){this.isDead=!0,this.isActive=!1,this.attackHitbox=null}getHealthPercent(){return this.health/this.maxHealth}destroy(){this.scene.remove(this.model)}}class hy extends Gc{constructor(t,e){super(t,{id:"defense-boss",name:"IRON GUARDIAN",type:"defense",caveId:1,maxHealth:600,damage:20,moveSpeed:1.5,defense:5,weakness:"defense-breaker",position:e,vulnerableDuration:2.5,telegraphDuration:1.2,attackDuration:.6,cooldownDuration:1.8,gearDrop:{type:"Chestplate",name:"Titan Guard Armor",rarity:"Legendary",description:"A massive chestplate dropped from the Iron Guardian.",attributes:[{trait_type:"Item Type",value:"Chestplate"},{trait_type:"Defense",value:80},{trait_type:"Rarity",value:"Legendary"}],icon:"🛡️"},patterns:[{name:"slam",radius:5,damageMultiplier:1},{name:"sweep",radius:6,damageMultiplier:.8},{name:"ground-pound",radius:8,damageMultiplier:1.5}]}),this.scene.remove(this.model),this.model=mn.createDefenseBossModel(),this.model.visible=!1,this.scene.add(this.model)}}class dy extends Gc{constructor(t,e){super(t,{id:"speed-boss",name:"SHADOW STRIKER",type:"speed",caveId:2,maxHealth:400,damage:12,moveSpeed:5,defense:0,weakness:"speed-counter",position:e,vulnerableDuration:1.5,telegraphDuration:.4,attackDuration:.3,cooldownDuration:.8,gearDrop:{type:"Boots",name:"Shadowstep Boots",rarity:"Legendary",description:"Ethereal boots dropped from the Shadow Striker.",attributes:[{trait_type:"Item Type",value:"Boots"},{trait_type:"Speed",value:45},{trait_type:"Rarity",value:"Legendary"}],icon:"👢"},patterns:[{name:"dash-slash",radius:4,damageMultiplier:.8},{name:"flurry",radius:3,damageMultiplier:.5},{name:"dash-slash",radius:4,damageMultiplier:.8},{name:"spinning-strike",radius:5,damageMultiplier:1.2}]}),this.scene.remove(this.model),this.model=mn.createSpeedBossModel(),this.model.visible=!1,this.scene.add(this.model)}_chase(t,e,n,s){n>2&&(this.position.addScaledVector(s,this.moveSpeed*t),this.model.lookAt(e.x,this.model.position.y,e.z)),(n<4||this.stateTimer<=0)&&this.patternCooldown<=0&&(this.state="telegraph",this.stateTimer=this.telegraphDuration)}}class fy extends Gc{constructor(t,e){super(t,{id:"attack-boss",name:"DARK OVERLORD",type:"attack",caveId:3,maxHealth:500,damage:30,moveSpeed:2.5,defense:2,weakness:"power-counter",position:e,vulnerableDuration:2,telegraphDuration:1,attackDuration:.5,cooldownDuration:1.2,gearDrop:{type:"Sword",name:"Inferno Fang",rarity:"Legendary",description:"A legendary sword dropped from the Dark Overlord.",attributes:[{trait_type:"Item Type",value:"Sword"},{trait_type:"Damage",value:120},{trait_type:"Rarity",value:"Legendary"}],icon:"⚔️"},patterns:[{name:"heavy-strike",radius:5,damageMultiplier:1.5},{name:"ground-slam",radius:7,damageMultiplier:2},{name:"sweep",radius:5,damageMultiplier:1}]}),this.scene.remove(this.model),this.model=mn.createAttackBossModel(),this.model.visible=!1,this.scene.add(this.model)}}class py{constructor(){this.damageNumbers=[]}resolvePlayerAttack(t,e,n){const s=[],r=t.getAttackHitbox();if(!r)return s;for(const a of e){if(a.isDead)continue;if(r.center.distanceTo(a.position)<r.radius+.5){const c=t.getDamage(null);a.takeDamage(c),t.hasHitThisSwing=!0,s.push({target:a,damage:Math.round(c),position:a.position.clone(),isBoss:!1})}}if(n&&n.isActive&&!n.isDead&&r.center.distanceTo(n.position)<r.radius+1.5){const o=t.getDamage(n.weakness),c=n.takeDamage(o);t.hasHitThisSwing=!0;const l=o<t.baseDamage*.5;s.push({target:n,damage:Math.round(c),position:n.position.clone(),isBoss:!0,isWeakHit:l})}return s}resolveFugaHit(t,e,n){for(const s of e)if(!s.isDead&&t.distanceTo(s.position)<2)return s.takeDamage(100),{target:s,damage:100,position:s.position.clone(),isBoss:!1,isWeakHit:!1};return n&&n.isActive&&!n.isDead&&t.distanceTo(n.position)<4?(n.takeDamage(100),{target:n,damage:100,position:n.position.clone(),isBoss:!0,isWeakHit:!1}):null}resolveEnemyAttacks(t,e,n){const s=[];if(t.isDead||t.isInvincible)return s;for(const r of e)r.isDead||r.consumeAttack()&&t.position.distanceTo(r.position)<r.attackRadius+.5&&t.takeDamage(r.damage)&&s.push({source:r,damage:r.damage,position:t.position.clone()});return n&&n.isActive&&!n.isDead&&n.attackHitbox&&t.position.distanceTo(n.attackHitbox.center)<n.attackHitbox.radius&&t.takeDamage(n.attackHitbox.damage)&&s.push({source:n,damage:n.attackHitbox.damage,position:t.position.clone()}),s}}class my{constructor(){this.playerHealthBar=document.getElementById("player-health-bar"),this.playerHealthText=document.getElementById("player-health-text"),this.bossHud=document.getElementById("boss-hud"),this.bossName=document.getElementById("boss-name"),this.bossHealthBar=document.getElementById("boss-health-bar"),this.swordIndicator=document.getElementById("sword-indicator"),this.swordName=document.getElementById("sword-name"),this.notificationContainer=document.getElementById("notification-container"),this.gearSlots=document.getElementById("gear-slots"),this.minimap=document.getElementById("minimap"),this.minimapCtx=this.minimap?this.minimap.getContext("2d"):null,this.hudEl=document.getElementById("hud")}show(){this.hudEl.classList.remove("hidden")}hide(){this.hudEl.classList.add("hidden")}updatePlayerHealth(t,e){const n=Math.max(0,t/e)*100;this.playerHealthBar.style.width=n+"%",this.playerHealthText.textContent=`${Math.round(t)} / ${e}`,n<30?this.playerHealthBar.style.background="linear-gradient(90deg, #c0392b, #e74c3c)":n<60?this.playerHealthBar.style.background="linear-gradient(90deg, #e67e22, #f39c12)":this.playerHealthBar.style.background="linear-gradient(90deg, #e63946, #ff6b6b)"}showBossHealth(t,e){this.bossHud.classList.remove("hidden"),this.bossName.textContent=t,this.bossHealthBar.style.width=e*100+"%"}hideBossHealth(){this.bossHud.classList.add("hidden")}showSwordIndicator(t){this.swordIndicator.classList.remove("hidden"),this.swordName.textContent="⚔ "+t}hideSwordIndicator(){this.swordIndicator.classList.add("hidden")}notify(t,e="default"){const n=document.createElement("div");n.className=`notification ${e}`,n.textContent=t,this.notificationContainer.appendChild(n),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n)},3200)}updateGearSlots(t){if(!this.gearSlots)return;const e=[{type:"Chestplate",icon:"🛡️",label:"Chestplate"},{type:"Boots",icon:"👢",label:"Boots"},{type:"Sword",icon:"⚔️",label:"Sword"}];this.gearSlots.innerHTML="";for(const n of e){const s=document.createElement("div");s.className="gear-slot"+(t.hasGear(n.type)?" active":""),s.textContent=t.hasGear(n.type)?n.icon:"·",s.title=n.label,this.gearSlots.appendChild(s)}}showDamageNumber(t,e,n,s="normal"){const r=document.createElement("div");r.className="damage-number"+(s==="player"?" player-hit":"")+(s==="weak"?" weak":""),r.textContent=s==="weak"?n+" (Weak!)":n,r.style.left=t+"px",r.style.top=e+"px",document.body.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},1e3)}updateMinimap(t,e,n){if(!this.minimapCtx)return;const s=this.minimapCtx,r=this.minimap.width,a=this.minimap.height,o=r/2,c=a/2,l=1.5;s.clearRect(0,0,r,a),s.fillStyle="rgba(0,0,0,0.6)",s.beginPath(),s.arc(o,c,o,0,Math.PI*2),s.fill();for(const u of e){const h=(u.position.x-t.x)*l,d=(u.position.z-t.z)*l,m=o+h,g=c+d;m>0&&m<r&&g>0&&g<a&&(s.fillStyle="#"+u.color.toString(16).padStart(6,"0"),s.beginPath(),s.arc(m,g,5,0,Math.PI*2),s.fill())}if(n)for(const u of n){if(u.isDead)continue;const h=(u.position.x-t.x)*l,d=(u.position.z-t.z)*l,m=o+h,g=c+d;m>4&&m<r-4&&g>4&&g<a-4&&(s.fillStyle="#e74c3c",s.beginPath(),s.arc(m,g,2,0,Math.PI*2),s.fill())}s.fillStyle="#3498db",s.beginPath(),s.arc(o,c,4,0,Math.PI*2),s.fill(),s.strokeStyle="rgba(255,255,255,0.2)",s.lineWidth=2,s.beginPath(),s.arc(o,c,o-1,0,Math.PI*2),s.stroke()}}class gy{constructor(t,e){this.panel=document.getElementById("loot-panel"),this.lootIcon=document.getElementById("loot-icon"),this.lootName=document.getElementById("loot-name"),this.lootRarity=document.getElementById("loot-rarity"),this.lootDescription=document.getElementById("loot-description"),this.mintBtn=document.getElementById("mint-nft-btn"),this.continueBtn=document.getElementById("continue-btn"),this.currentGear=null,this.mintBtn.addEventListener("click",()=>{this.currentGear&&t&&t(this.currentGear)}),this.continueBtn.addEventListener("click",()=>{this.hide(),e&&e()})}show(t){this.currentGear=t,this.lootIcon.textContent=t.icon||"🎁",this.lootName.textContent=t.name,this.lootRarity.textContent=t.rarity,this.lootDescription.textContent=t.description;const e={Common:"#aaa",Rare:"#3498db",Epic:"#a855f7",Legendary:"#f7c948"};this.lootRarity.style.color=e[t.rarity]||"#fff",this.setMintingState("default"),this.panel.classList.remove("hidden")}hide(){this.panel.classList.add("hidden"),this.currentGear=null}setMintingState(t){t==="minting"?(this.mintBtn.textContent="⏳ Minting...",this.mintBtn.disabled=!0):t==="success"?(this.mintBtn.textContent="✅ Minted & Equipped!",this.mintBtn.disabled=!0):t==="error"?(this.mintBtn.textContent="❌ Failed — Retry",this.mintBtn.disabled=!1):(this.mintBtn.textContent="🔗 Mint as NFT",this.mintBtn.disabled=!1)}}const _y="modulepreload",vy=function(i){return"/"+i},Fu={},Hc=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(c=>{if(c=vy(c),c in Fu)return;Fu[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":_y,l||(h.as="script"),h.crossOrigin="",h.href=c,o&&h.setAttribute("nonce",o),document.head.appendChild(h),l)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};class yy{constructor(){this.provider=null,this.signer=null,this.account=null,this.chainId=null,this.isConnected=!1,this.targetChainId="0xaa36a7",this.targetChainName="Sepolia"}async connect(){if(console.log("[WalletManager] connect() called"),typeof window.ethereum>"u")throw new Error("MetaMask is not installed. Please install MetaMask to mint NFTs.");try{console.log("[WalletManager] Loading ethers.js...");let t;try{t=(await Hc(()=>import("./index-BBrNkZS3.js"),[])).BrowserProvider}catch(s){throw console.error("[WalletManager] Failed to load ethers.js from CDN",s),new Error("Failed to load Web3 libraries. Check your internet connection or ad blocker.")}console.log("[WalletManager] Requesting accounts...");const e=await window.ethereum.request({method:"eth_requestAccounts"});this.account=e[0],this.provider=new t(window.ethereum),this.signer=await this.provider.getSigner();const n=await this.provider.getNetwork();return this.chainId="0x"+n.chainId.toString(16),this.chainId!==this.targetChainId&&await this._switchNetwork(),this.isConnected=!0,window.ethereum.on("accountsChanged",s=>{this.account=s[0]||null,this.account||(this.isConnected=!1)}),window.ethereum.on("chainChanged",()=>{window.location.reload()}),this.account}catch(t){throw console.error("Wallet connection failed:",t),t}}async checkConnection(){if(typeof window.ethereum>"u")return null;try{if((await window.ethereum.request({method:"eth_accounts"})).length>0)return await this.connect()}catch(t){console.error("[WalletManager] Auto-connect failed",t)}return null}async _switchNetwork(){try{await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:this.targetChainId}]})}catch(t){if(t.code===4902)await window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:this.targetChainId,chainName:"Sepolia Testnet",nativeCurrency:{name:"SepoliaETH",symbol:"SEP",decimals:18},rpcUrls:["https://rpc.sepolia.org"],blockExplorerUrls:["https://sepolia.etherscan.io"]}]});else throw t}}getAccount(){return this.account}getSigner(){return this.signer}getProvider(){return this.provider}getShortAddress(){return this.account?this.account.slice(0,6)+"..."+this.account.slice(-4):""}}const xy="6.16.0";function wy(i,t,e){const n=t.split("|").map(r=>r.trim());for(let r=0;r<n.length;r++)switch(t){case"any":return;case"bigint":case"boolean":case"number":case"string":if(typeof i===t)return}const s=new Error(`invalid value for type ${t}`);throw s.code="INVALID_ARGUMENT",s.argument=`value.${e}`,s.value=i,s}async function cc(i){const t=Object.keys(i);return(await Promise.all(t.map(n=>Promise.resolve(i[n])))).reduce((n,s,r)=>(n[t[r]]=s,n),{})}function Vt(i,t,e){for(let n in t){let s=t[n];const r=e?e[n]:null;r&&wy(s,r,n),Object.defineProperty(i,n,{enumerable:!0,value:s,writable:!1})}}function ks(i,t){if(i==null)return"null";if(t==null&&(t=new Set),typeof i=="object"){if(t.has(i))return"[Circular]";t.add(i)}if(Array.isArray(i))return"[ "+i.map(e=>ks(e,t)).join(", ")+" ]";if(i instanceof Uint8Array){const e="0123456789abcdef";let n="0x";for(let s=0;s<i.length;s++)n+=e[i[s]>>4],n+=e[i[s]&15];return n}if(typeof i=="object"&&typeof i.toJSON=="function")return ks(i.toJSON(),t);switch(typeof i){case"boolean":case"number":case"symbol":return i.toString();case"bigint":return BigInt(i).toString();case"string":return JSON.stringify(i);case"object":{const e=Object.keys(i);return e.sort(),"{ "+e.map(n=>`${ks(n,t)}: ${ks(i[n],t)}`).join(", ")+" }"}}return"[ COULD NOT SERIALIZE ]"}function sr(i,t){return i&&i.code===t}function ed(i){return sr(i,"CALL_EXCEPTION")}function Lr(i,t,e){let n=i;{const r=[];if(e){if("message"in e||"code"in e||"name"in e)throw new Error(`value will overwrite populated values: ${ks(e)}`);for(const a in e){if(a==="shortMessage")continue;const o=e[a];r.push(a+"="+ks(o))}}r.push(`code=${t}`),r.push(`version=${xy}`),r.length&&(i+=" ("+r.join(", ")+")")}let s;switch(t){case"INVALID_ARGUMENT":s=new TypeError(i);break;case"NUMERIC_FAULT":case"BUFFER_OVERRUN":s=new RangeError(i);break;default:s=new Error(i)}return Vt(s,{code:t}),e&&Object.assign(s,e),s.shortMessage==null&&Vt(s,{shortMessage:n}),s}function bt(i,t,e,n){if(!i)throw Lr(t,e,n)}function it(i,t,e,n){bt(i,t,"INVALID_ARGUMENT",{argument:e,value:n})}function nd(i,t,e){e==null&&(e=""),e&&(e=": "+e),bt(i>=t,"missing argument"+e,"MISSING_ARGUMENT",{count:i,expectedCount:t}),bt(i<=t,"too many arguments"+e,"UNEXPECTED_ARGUMENT",{count:i,expectedCount:t})}const Sy=["NFD","NFC","NFKD","NFKC"].reduce((i,t)=>{try{if("test".normalize(t)!=="test")throw new Error("bad");if(t==="NFD"&&"é".normalize("NFD")!=="é")throw new Error("broken");i.push(t)}catch{}return i},[]);function My(i){bt(Sy.indexOf(i)>=0,"platform missing String.prototype.normalize","UNSUPPORTED_OPERATION",{operation:"String.prototype.normalize",info:{form:i}})}function qa(i,t,e){if(e==null&&(e=""),i!==t){let n=e,s="new";e&&(n+=".",s+=" "+e),bt(!1,`private constructor; use ${n}from* methods`,"UNSUPPORTED_OPERATION",{operation:s})}}function id(i,t,e){if(i instanceof Uint8Array)return e?new Uint8Array(i):i;if(typeof i=="string"&&i.length%2===0&&i.match(/^0x[0-9a-f]*$/i)){const n=new Uint8Array((i.length-2)/2);let s=2;for(let r=0;r<n.length;r++)n[r]=parseInt(i.substring(s,s+2),16),s+=2;return n}it(!1,"invalid BytesLike value",t||"value",i)}function Tn(i,t){return id(i,t,!1)}function Gn(i,t){return id(i,t,!0)}function kn(i,t){return!(typeof i!="string"||!i.match(/^0x[0-9A-Fa-f]*$/)||typeof t=="number"&&i.length!==2+2*t||t===!0&&i.length%2!==0)}function sd(i){return kn(i,!0)||i instanceof Uint8Array}const Bu="0123456789abcdef";function ye(i){const t=Tn(i);let e="0x";for(let n=0;n<t.length;n++){const s=t[n];e+=Bu[(s&240)>>4]+Bu[s&15]}return e}function qs(i){return"0x"+i.map(t=>ye(t).substring(2)).join("")}function Xw(i){return kn(i,!0)?(i.length-2)/2:Tn(i).length}function Is(i,t,e){const n=Tn(i);return e!=null&&e>n.length&&bt(!1,"cannot slice beyond data bounds","BUFFER_OVERRUN",{buffer:n,length:n.length,offset:e}),ye(n.slice(t??0,e??n.length))}function qw(i){let t=ye(i).substring(2);for(;t.startsWith("00");)t=t.substring(2);return"0x"+t}function rd(i,t,e){const n=Tn(i);bt(t>=n.length,"padding exceeds data length","BUFFER_OVERRUN",{buffer:new Uint8Array(n),length:t,offset:t+1});const s=new Uint8Array(t);return s.fill(0),e?s.set(n,t-n.length):s.set(n,0),ye(s)}function Ey(i,t){return rd(i,t,!0)}function by(i,t){return rd(i,t,!1)}const Hr=BigInt(0),bn=BigInt(1),zs=9007199254740991;function La(i,t){const e=$a(i,"value"),n=BigInt(Ze(t,"width"));if(bt(e>>n===Hr,"overflow","NUMERIC_FAULT",{operation:"fromTwos",fault:"overflow",value:i}),e>>n-bn){const s=(bn<<n)-bn;return-((~e&s)+bn)}return e}function Ty(i,t){let e=hi(i,"value");const n=BigInt(Ze(t,"width")),s=bn<<n-bn;if(e<Hr){e=-e,bt(e<=s,"too low","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:i});const r=(bn<<n)-bn;return(~e&r)+bn}else bt(e<s,"too high","NUMERIC_FAULT",{operation:"toTwos",fault:"overflow",value:i});return e}function Gs(i,t){const e=$a(i,"value"),n=BigInt(Ze(t,"bits"));return e&(bn<<n)-bn}function hi(i,t){switch(typeof i){case"bigint":return i;case"number":return it(Number.isInteger(i),"underflow",t||"value",i),it(i>=-zs&&i<=zs,"overflow",t||"value",i),BigInt(i);case"string":try{if(i==="")throw new Error("empty string");return i[0]==="-"&&i[1]!=="-"?-BigInt(i.substring(1)):BigInt(i)}catch(e){it(!1,`invalid BigNumberish string: ${e.message}`,t||"value",i)}}it(!1,"invalid BigNumberish value",t||"value",i)}function $a(i,t){const e=hi(i,t);return bt(e>=Hr,"unsigned value cannot be negative","NUMERIC_FAULT",{fault:"overflow",operation:"getUint",value:i}),e}const ku="0123456789abcdef";function Vc(i){if(i instanceof Uint8Array){let t="0x0";for(const e of i)t+=ku[e>>4],t+=ku[e&15];return BigInt(t)}return hi(i)}function Ze(i,t){switch(typeof i){case"bigint":return it(i>=-zs&&i<=zs,"overflow",t||"value",i),Number(i);case"number":return it(Number.isInteger(i),"underflow",t||"value",i),it(i>=-zs&&i<=zs,"overflow",t||"value",i),i;case"string":try{if(i==="")throw new Error("empty string");return Ze(BigInt(i),t)}catch(e){it(!1,`invalid numeric string: ${e.message}`,t||"value",i)}}it(!1,"invalid numeric value",t||"value",i)}function Ay(i){return Ze(Vc(i))}function ad(i,t){const e=$a(i,"value");let n=e.toString(16);if(t==null)n.length%2&&(n="0"+n);else{const s=Ze(t,"width");if(s===0&&e===Hr)return"0x";for(bt(s*2>=n.length,`value exceeds width (${s} bytes)`,"NUMERIC_FAULT",{operation:"toBeHex",fault:"overflow",value:i});n.length<s*2;)n="0"+n}return"0x"+n}function od(i,t){const e=$a(i,"value");if(e===Hr){const r=t!=null?Ze(t,"width"):0;return new Uint8Array(r)}let n=e.toString(16);if(n.length%2&&(n="0"+n),t!=null){const r=Ze(t,"width");for(;n.length<r*2;)n="00"+n;bt(r*2===n.length,`value exceeds width (${r} bytes)`,"NUMERIC_FAULT",{operation:"toBeArray",fault:"overflow",value:i})}const s=new Uint8Array(n.length/2);for(let r=0;r<s.length;r++){const a=r*2;s[r]=parseInt(n.substring(a,a+2),16)}return s}function $w(i){let t=ye(sd(i)?i:od(i)).substring(2);for(;t.startsWith("0");)t=t.substring(1);return t===""&&(t="0"),"0x"+t}var Ks;class Cy{constructor(t,e,n){F(this,"filter");F(this,"emitter");ee(this,Ks);Zt(this,Ks,e),Vt(this,{emitter:t,filter:n})}async removeListener(){O(this,Ks)!=null&&await this.emitter.off(this.filter,O(this,Ks))}}Ks=new WeakMap;function Ry(i,t,e,n,s){it(!1,`invalid codepoint at offset ${t}; ${i}`,"bytes",e)}function cd(i,t,e,n,s){if(i==="BAD_PREFIX"||i==="UNEXPECTED_CONTINUE"){let r=0;for(let a=t+1;a<e.length&&e[a]>>6===2;a++)r++;return r}return i==="OVERRUN"?e.length-t-1:0}function Py(i,t,e,n,s){return i==="OVERLONG"?(it(typeof s=="number","invalid bad code point for replacement","badCodepoint",s),n.push(s),0):(n.push(65533),cd(i,t,e))}const Ly=Object.freeze({error:Ry,ignore:cd,replace:Py});function ld(i,t){t==null&&(t=Ly.error);const e=Tn(i,"bytes"),n=[];let s=0;for(;s<e.length;){const r=e[s++];if(!(r>>7)){n.push(r);continue}let a=null,o=null;if((r&224)===192)a=1,o=127;else if((r&240)===224)a=2,o=2047;else if((r&248)===240)a=3,o=65535;else{(r&192)===128?s+=t("UNEXPECTED_CONTINUE",s-1,e,n):s+=t("BAD_PREFIX",s-1,e,n);continue}if(s-1+a>=e.length){s+=t("OVERRUN",s-1,e,n);continue}let c=r&(1<<8-a-1)-1;for(let l=0;l<a;l++){let u=e[s];if((u&192)!=128){s+=t("MISSING_CONTINUE",s,e,n),c=null;break}c=c<<6|u&63,s++}if(c!==null){if(c>1114111){s+=t("OUT_OF_RANGE",s-1-a,e,n,c);continue}if(c>=55296&&c<=57343){s+=t("UTF16_SURROGATE",s-1-a,e,n,c);continue}if(c<=o){s+=t("OVERLONG",s-1-a,e,n,c);continue}n.push(c)}}return n}function Wc(i,t){it(typeof i=="string","invalid string value","str",i),t!=null&&(My(t),i=i.normalize(t));let e=[];for(let n=0;n<i.length;n++){const s=i.charCodeAt(n);if(s<128)e.push(s);else if(s<2048)e.push(s>>6|192),e.push(s&63|128);else if((s&64512)==55296){n++;const r=i.charCodeAt(n);it(n<i.length&&(r&64512)===56320,"invalid surrogate pair","str",i);const a=65536+((s&1023)<<10)+(r&1023);e.push(a>>18|240),e.push(a>>12&63|128),e.push(a>>6&63|128),e.push(a&63|128)}else e.push(s>>12|224),e.push(s>>6&63|128),e.push(s&63|128)}return new Uint8Array(e)}function Iy(i){return i.map(t=>t<=65535?String.fromCharCode(t):(t-=65536,String.fromCharCode((t>>10&1023)+55296,(t&1023)+56320))).join("")}function Ny(i,t){return Iy(ld(i,t))}function Yw(i,t){return ld(Wc(i,t))}const Dy=BigInt(-1),xn=BigInt(0),Hs=BigInt(1),Uy=BigInt(5),Ns={};let $s="0000";for(;$s.length<80;)$s+=$s;function Wi(i){let t=$s;for(;t.length<i;)t+=t;return BigInt("1"+t.substring(0,i))}function vr(i,t,e){const n=BigInt(t.width);if(t.signed){const s=Hs<<n-Hs;bt(e==null||i>=-s&&i<s,"overflow","NUMERIC_FAULT",{operation:e,fault:"overflow",value:i}),i>xn?i=La(Gs(i,n),n):i=-La(Gs(-i,n),n)}else{const s=Hs<<n;bt(e==null||i>=0&&i<s,"overflow","NUMERIC_FAULT",{operation:e,fault:"overflow",value:i}),i=(i%s+s)%s&s-Hs}return i}function Ho(i){typeof i=="number"&&(i=`fixed128x${i}`);let t=!0,e=128,n=18;if(typeof i=="string"){if(i!=="fixed")if(i==="ufixed")t=!1;else{const r=i.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);it(r,"invalid fixed format","format",i),t=r[1]!=="u",e=parseInt(r[2]),n=parseInt(r[3])}}else if(i){const r=i,a=(o,c,l)=>r[o]==null?l:(it(typeof r[o]===c,"invalid fixed format ("+o+" not "+c+")","format."+o,r[o]),r[o]);t=a("signed","boolean",t),e=a("width","number",e),n=a("decimals","number",n)}it(e%8===0,"invalid FixedNumber width (not byte aligned)","format.width",e),it(n<=80,"invalid FixedNumber decimals (too large)","format.decimals",n);const s=(t?"":"u")+"fixed"+String(e)+"x"+String(n);return{signed:t,width:e,decimals:n,name:s}}function Oy(i,t){let e="";i<xn&&(e="-",i*=Dy);let n=i.toString();if(t===0)return e+n;for(;n.length<=t;)n=$s+n;const s=n.length-t;for(n=n.substring(0,s)+"."+n.substring(s);n[0]==="0"&&n[1]!==".";)n=n.substring(1);for(;n[n.length-1]==="0"&&n[n.length-2]!==".";)n=n.substring(0,n.length-1);return e+n}var wn,re,Ge,se,$i,jn,lc,uc,hc,dc;const wi=class wi{constructor(t,e,n){ee(this,se);F(this,"format");ee(this,wn);ee(this,re);ee(this,Ge);F(this,"_value");qa(t,Ns,"FixedNumber"),Zt(this,re,e),Zt(this,wn,n);const s=Oy(e,n.decimals);Vt(this,{format:n.name,_value:s}),Zt(this,Ge,Wi(n.decimals))}get signed(){return O(this,wn).signed}get width(){return O(this,wn).width}get decimals(){return O(this,wn).decimals}get value(){return O(this,re)}addUnsafe(t){return Ot(this,se,lc).call(this,t)}add(t){return Ot(this,se,lc).call(this,t,"add")}subUnsafe(t){return Ot(this,se,uc).call(this,t)}sub(t){return Ot(this,se,uc).call(this,t,"sub")}mulUnsafe(t){return Ot(this,se,hc).call(this,t)}mul(t){return Ot(this,se,hc).call(this,t,"mul")}mulSignal(t){Ot(this,se,$i).call(this,t);const e=O(this,re)*O(t,re);return bt(e%O(this,Ge)===xn,"precision lost during signalling mul","NUMERIC_FAULT",{operation:"mulSignal",fault:"underflow",value:this}),Ot(this,se,jn).call(this,e/O(this,Ge),"mulSignal")}divUnsafe(t){return Ot(this,se,dc).call(this,t)}div(t){return Ot(this,se,dc).call(this,t,"div")}divSignal(t){bt(O(t,re)!==xn,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),Ot(this,se,$i).call(this,t);const e=O(this,re)*O(this,Ge);return bt(e%O(t,re)===xn,"precision lost during signalling div","NUMERIC_FAULT",{operation:"divSignal",fault:"underflow",value:this}),Ot(this,se,jn).call(this,e/O(t,re),"divSignal")}cmp(t){let e=this.value,n=t.value;const s=this.decimals-t.decimals;return s>0?n*=Wi(s):s<0&&(e*=Wi(-s)),e<n?-1:e>n?1:0}eq(t){return this.cmp(t)===0}lt(t){return this.cmp(t)<0}lte(t){return this.cmp(t)<=0}gt(t){return this.cmp(t)>0}gte(t){return this.cmp(t)>=0}floor(){let t=O(this,re);return O(this,re)<xn&&(t-=O(this,Ge)-Hs),t=O(this,re)/O(this,Ge)*O(this,Ge),Ot(this,se,jn).call(this,t,"floor")}ceiling(){let t=O(this,re);return O(this,re)>xn&&(t+=O(this,Ge)-Hs),t=O(this,re)/O(this,Ge)*O(this,Ge),Ot(this,se,jn).call(this,t,"ceiling")}round(t){if(t==null&&(t=0),t>=this.decimals)return this;const e=this.decimals-t,n=Uy*Wi(e-1);let s=this.value+n;const r=Wi(e);return s=s/r*r,vr(s,O(this,wn),"round"),new wi(Ns,s,O(this,wn))}isZero(){return O(this,re)===xn}isNegative(){return O(this,re)<xn}toString(){return this._value}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return wi.fromString(this.toString(),t)}static fromValue(t,e,n){const s=e==null?0:Ze(e),r=Ho(n);let a=hi(t,"value");const o=s-r.decimals;if(o>0){const c=Wi(o);bt(a%c===xn,"value loses precision for format","NUMERIC_FAULT",{operation:"fromValue",fault:"underflow",value:t}),a/=c}else o<0&&(a*=Wi(-o));return vr(a,r,"fromValue"),new wi(Ns,a,r)}static fromString(t,e){const n=t.match(/^(-?)([0-9]*)\.?([0-9]*)$/);it(n&&n[2].length+n[3].length>0,"invalid FixedNumber string value","value",t);const s=Ho(e);let r=n[2]||"0",a=n[3]||"";for(;a.length<s.decimals;)a+=$s;bt(a.substring(s.decimals).match(/^0*$/),"too many decimals for format","NUMERIC_FAULT",{operation:"fromString",fault:"underflow",value:t}),a=a.substring(0,s.decimals);const o=BigInt(n[1]+r+a);return vr(o,s,"fromString"),new wi(Ns,o,s)}static fromBytes(t,e){let n=Vc(Tn(t,"value"));const s=Ho(e);return s.signed&&(n=La(n,s.width)),vr(n,s,"fromBytes"),new wi(Ns,n,s)}};wn=new WeakMap,re=new WeakMap,Ge=new WeakMap,se=new WeakSet,$i=function(t){it(this.format===t.format,"incompatible format; use fixedNumber.toFormat","other",t)},jn=function(t,e){return t=vr(t,O(this,wn),e),new wi(Ns,t,O(this,wn))},lc=function(t,e){return Ot(this,se,$i).call(this,t),Ot(this,se,jn).call(this,O(this,re)+O(t,re),e)},uc=function(t,e){return Ot(this,se,$i).call(this,t),Ot(this,se,jn).call(this,O(this,re)-O(t,re),e)},hc=function(t,e){return Ot(this,se,$i).call(this,t),Ot(this,se,jn).call(this,O(this,re)*O(t,re)/O(this,Ge),e)},dc=function(t,e){return bt(O(t,re)!==xn,"division by zero","NUMERIC_FAULT",{operation:"div",fault:"divide-by-zero",value:this}),Ot(this,se,$i).call(this,t),Ot(this,se,jn).call(this,O(this,re)*O(this,Ge)/O(t,re),e)};let Ia=wi;const ud=["wei","kwei","mwei","gwei","szabo","finney","ether"];function Fy(i,t){let e=18;if(typeof t=="string"){const n=ud.indexOf(t);it(n>=0,"invalid unit","unit",t),e=3*n}else t!=null&&(e=Ze(t,"unit"));return Ia.fromValue(i,e,{decimals:e,width:512}).toString()}function By(i,t){it(typeof i=="string","value must be a string","value",i);let e=18;if(typeof t=="string"){const n=ud.indexOf(t);it(n>=0,"invalid unit","unit",t),e=3*n}else t!=null&&(e=Ze(t,"unit"));return Ia.fromString(i,{decimals:e,width:512}).value}function Kw(i){return Fy(i,18)}function Vo(i){return By(i,18)}const Ve=32,fc=new Uint8Array(Ve),ky=["then"],ma={},hd=new WeakMap;function Ji(i){return hd.get(i)}function zu(i,t){hd.set(i,t)}function yr(i,t){const e=new Error(`deferred error during ABI decoding triggered accessing ${i}`);throw e.error=t,e}function pc(i,t,e){return i.indexOf(null)>=0?t.map((n,s)=>n instanceof rr?pc(Ji(n),n,e):n):i.reduce((n,s,r)=>{let a=t.getValue(s);return s in n||(e&&a instanceof rr&&(a=pc(Ji(a),a,e)),n[s]=a),n},{})}var Js;const Vs=class Vs extends Array{constructor(...e){const n=e[0];let s=e[1],r=(e[2]||[]).slice(),a=!0;n!==ma&&(s=e,r=[],a=!1);super(s.length);ee(this,Js);s.forEach((l,u)=>{this[u]=l});const o=r.reduce((l,u)=>(typeof u=="string"&&l.set(u,(l.get(u)||0)+1),l),new Map);if(zu(this,Object.freeze(s.map((l,u)=>{const h=r[u];return h!=null&&o.get(h)===1?h:null}))),Zt(this,Js,[]),O(this,Js)==null&&O(this,Js),!a)return;Object.freeze(this);const c=new Proxy(this,{get:(l,u,h)=>{if(typeof u=="string"){if(u.match(/^[0-9]+$/)){const m=Ze(u,"%index");if(m<0||m>=this.length)throw new RangeError("out of result range");const g=l[m];return g instanceof Error&&yr(`index ${m}`,g),g}if(ky.indexOf(u)>=0)return Reflect.get(l,u,h);const d=l[u];if(d instanceof Function)return function(...m){return d.apply(this===h?l:this,m)};if(!(u in l))return l.getValue.apply(this===h?l:this,[u])}return Reflect.get(l,u,h)}});return zu(c,Ji(this)),c}toArray(e){const n=[];return this.forEach((s,r)=>{s instanceof Error&&yr(`index ${r}`,s),e&&s instanceof Vs&&(s=s.toArray(e)),n.push(s)}),n}toObject(e){const n=Ji(this);return n.reduce((s,r,a)=>(bt(r!=null,`value at index ${a} unnamed`,"UNSUPPORTED_OPERATION",{operation:"toObject()"}),pc(n,this,e)),{})}slice(e,n){e==null&&(e=0),e<0&&(e+=this.length,e<0&&(e=0)),n==null&&(n=this.length),n<0&&(n+=this.length,n<0&&(n=0)),n>this.length&&(n=this.length);const s=Ji(this),r=[],a=[];for(let o=e;o<n;o++)r.push(this[o]),a.push(s[o]);return new Vs(ma,r,a)}filter(e,n){const s=Ji(this),r=[],a=[];for(let o=0;o<this.length;o++){const c=this[o];c instanceof Error&&yr(`index ${o}`,c),e.call(n,c,o,this)&&(r.push(c),a.push(s[o]))}return new Vs(ma,r,a)}map(e,n){const s=[];for(let r=0;r<this.length;r++){const a=this[r];a instanceof Error&&yr(`index ${r}`,a),s.push(e.call(n,a,r,this))}return s}getValue(e){const n=Ji(this).indexOf(e);if(n===-1)return;const s=this[n];return s instanceof Error&&yr(`property ${JSON.stringify(e)}`,s.error),s}static fromItems(e,n){return new Vs(ma,e,n)}};Js=new WeakMap;let rr=Vs;function Jw(i){const t=[],e=function(n,s){if(Array.isArray(s))for(let r in s){const a=n.slice();a.push(r);try{e(a,s[r])}catch(o){t.push({path:a,error:o})}}};return e([],i),t}function Gu(i){let t=od(i);return bt(t.length<=Ve,"value out-of-bounds","BUFFER_OVERRUN",{buffer:t,length:Ve,offset:t.length}),t.length!==Ve&&(t=Gn(qs([fc.slice(t.length%Ve),t]))),t}class di{constructor(t,e,n,s){F(this,"name");F(this,"type");F(this,"localName");F(this,"dynamic");Vt(this,{name:t,type:e,localName:n,dynamic:s},{name:"string",type:"string",localName:"string",dynamic:"boolean"})}_throwError(t,e){it(!1,t,this.localName,e)}}var ni,es,Zs,wa;class mc{constructor(){ee(this,Zs);ee(this,ni);ee(this,es);Zt(this,ni,[]),Zt(this,es,0)}get data(){return qs(O(this,ni))}get length(){return O(this,es)}appendWriter(t){return Ot(this,Zs,wa).call(this,Gn(t.data))}writeBytes(t){let e=Gn(t);const n=e.length%Ve;return n&&(e=Gn(qs([e,fc.slice(n)]))),Ot(this,Zs,wa).call(this,e)}writeValue(t){return Ot(this,Zs,wa).call(this,Gu(t))}writeUpdatableValue(){const t=O(this,ni).length;return O(this,ni).push(fc),Zt(this,es,O(this,es)+Ve),e=>{O(this,ni)[t]=Gu(e)}}}ni=new WeakMap,es=new WeakMap,Zs=new WeakSet,wa=function(t){return O(this,ni).push(t),Zt(this,es,O(this,es)+t.length),t.length};var Ye,rn,ns,is,Ei,ms,_c,dd;const Zc=class Zc{constructor(t,e,n){ee(this,ms);F(this,"allowLoose");ee(this,Ye);ee(this,rn);ee(this,ns);ee(this,is);ee(this,Ei);Vt(this,{allowLoose:!!e}),Zt(this,Ye,Gn(t)),Zt(this,ns,0),Zt(this,is,null),Zt(this,Ei,n??1024),Zt(this,rn,0)}get data(){return ye(O(this,Ye))}get dataLength(){return O(this,Ye).length}get consumed(){return O(this,rn)}get bytes(){return new Uint8Array(O(this,Ye))}subReader(t){const e=new Zc(O(this,Ye).slice(O(this,rn)+t),this.allowLoose,O(this,Ei));return Zt(e,is,this),e}readBytes(t,e){let n=Ot(this,ms,dd).call(this,0,t,!!e);return Ot(this,ms,_c).call(this,t),Zt(this,rn,O(this,rn)+n.length),n.slice(0,t)}readValue(){return Vc(this.readBytes(Ve))}readIndex(){return Ay(this.readBytes(Ve))}};Ye=new WeakMap,rn=new WeakMap,ns=new WeakMap,is=new WeakMap,Ei=new WeakMap,ms=new WeakSet,_c=function(t){var e;if(O(this,is))return Ot(e=O(this,is),ms,_c).call(e,t);Zt(this,ns,O(this,ns)+t),bt(O(this,Ei)<1||O(this,ns)<=O(this,Ei)*this.dataLength,`compressed ABI data exceeds inflation ratio of ${O(this,Ei)} ( see: https://github.com/ethers-io/ethers.js/issues/4537 )`,"BUFFER_OVERRUN",{buffer:Gn(O(this,Ye)),offset:O(this,rn),length:t,info:{bytesRead:O(this,ns),dataLength:this.dataLength}})},dd=function(t,e,n){let s=Math.ceil(e/Ve)*Ve;return O(this,rn)+s>O(this,Ye).length&&(this.allowLoose&&n&&O(this,rn)+e<=O(this,Ye).length?s=e:bt(!1,"data out-of-bounds","BUFFER_OVERRUN",{buffer:Gn(O(this,Ye)),length:O(this,Ye).length,offset:O(this,rn)+s})),O(this,Ye).slice(O(this,rn),O(this,rn)+s)};let gc=Zc;function Na(i){if(!Number.isSafeInteger(i)||i<0)throw new Error(`Wrong positive integer: ${i}`)}function fd(i,...t){if(!(i instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(i.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${i.length}`)}function Zw(i){if(typeof i!="function"||typeof i.create!="function")throw new Error("Hash should be wrapped by utils.wrapConstructor");Na(i.outputLen),Na(i.blockLen)}function Hu(i,t=!0){if(i.destroyed)throw new Error("Hash instance has been destroyed");if(t&&i.finished)throw new Error("Hash#digest() has already been called")}function zy(i,t){fd(i);const e=t.outputLen;if(i.length<e)throw new Error(`digestInto() expects output buffer of length at least ${e}`)}const Wo=typeof globalThis=="object"&&"crypto"in globalThis?globalThis.crypto:void 0;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const pd=i=>i instanceof Uint8Array,Gy=i=>new Uint32Array(i.buffer,i.byteOffset,Math.floor(i.byteLength/4)),jw=i=>new DataView(i.buffer,i.byteOffset,i.byteLength),Qw=(i,t)=>i<<32-t|i>>>t,Hy=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Hy)throw new Error("Non little-endian hardware is not supported");const Vy=async()=>{};async function tS(i,t,e){let n=Date.now();for(let s=0;s<i;s++){e(s);const r=Date.now()-n;r>=0&&r<t||(await Vy(),n+=r)}}function Wy(i){if(typeof i!="string")throw new Error(`utf8ToBytes expected string, got ${typeof i}`);return new Uint8Array(new TextEncoder().encode(i))}function md(i){if(typeof i=="string"&&(i=Wy(i)),!pd(i))throw new Error(`expected Uint8Array, got ${typeof i}`);return i}function eS(...i){const t=new Uint8Array(i.reduce((n,s)=>n+s.length,0));let e=0;return i.forEach(n=>{if(!pd(n))throw new Error("Uint8Array expected");t.set(n,e),e+=n.length}),t}class Xy{clone(){return this._cloneInto()}}const qy={}.toString;function nS(i,t){if(t!==void 0&&qy.call(t)!=="[object Object]")throw new Error("Options should be object or undefined");return Object.assign(i,t)}function $y(i){const t=n=>i().update(md(n)).digest(),e=i();return t.outputLen=e.outputLen,t.blockLen=e.blockLen,t.create=()=>i(),t}function iS(i=32){if(Wo&&typeof Wo.getRandomValues=="function")return Wo.getRandomValues(new Uint8Array(i));throw new Error("crypto.getRandomValues must be defined")}const ga=BigInt(2**32-1),vc=BigInt(32);function gd(i,t=!1){return t?{h:Number(i&ga),l:Number(i>>vc&ga)}:{h:Number(i>>vc&ga)|0,l:Number(i&ga)|0}}function _d(i,t=!1){let e=new Uint32Array(i.length),n=new Uint32Array(i.length);for(let s=0;s<i.length;s++){const{h:r,l:a}=gd(i[s],t);[e[s],n[s]]=[r,a]}return[e,n]}const Yy=(i,t)=>BigInt(i>>>0)<<vc|BigInt(t>>>0),Ky=(i,t,e)=>i>>>e,Jy=(i,t,e)=>i<<32-e|t>>>e,Zy=(i,t,e)=>i>>>e|t<<32-e,jy=(i,t,e)=>i<<32-e|t>>>e,Qy=(i,t,e)=>i<<64-e|t>>>e-32,tx=(i,t,e)=>i>>>e-32|t<<64-e,ex=(i,t)=>t,nx=(i,t)=>i,vd=(i,t,e)=>i<<e|t>>>32-e,yd=(i,t,e)=>t<<e|i>>>32-e,xd=(i,t,e)=>t<<e-32|i>>>64-e,wd=(i,t,e)=>i<<e-32|t>>>64-e;function ix(i,t,e,n){const s=(t>>>0)+(n>>>0);return{h:i+e+(s/2**32|0)|0,l:s|0}}const sx=(i,t,e)=>(i>>>0)+(t>>>0)+(e>>>0),rx=(i,t,e,n)=>t+e+n+(i/2**32|0)|0,ax=(i,t,e,n)=>(i>>>0)+(t>>>0)+(e>>>0)+(n>>>0),ox=(i,t,e,n,s)=>t+e+n+s+(i/2**32|0)|0,cx=(i,t,e,n,s)=>(i>>>0)+(t>>>0)+(e>>>0)+(n>>>0)+(s>>>0),lx=(i,t,e,n,s,r)=>t+e+n+s+r+(i/2**32|0)|0,sS={fromBig:gd,split:_d,toBig:Yy,shrSH:Ky,shrSL:Jy,rotrSH:Zy,rotrSL:jy,rotrBH:Qy,rotrBL:tx,rotr32H:ex,rotr32L:nx,rotlSH:vd,rotlSL:yd,rotlBH:xd,rotlBL:wd,add:ix,add3L:sx,add3H:rx,add4L:ax,add4H:ox,add5H:lx,add5L:cx},[Sd,Md,Ed]=[[],[],[]],ux=BigInt(0),xr=BigInt(1),hx=BigInt(2),dx=BigInt(7),fx=BigInt(256),px=BigInt(113);for(let i=0,t=xr,e=1,n=0;i<24;i++){[e,n]=[n,(2*e+3*n)%5],Sd.push(2*(5*n+e)),Md.push((i+1)*(i+2)/2%64);let s=ux;for(let r=0;r<7;r++)t=(t<<xr^(t>>dx)*px)%fx,t&hx&&(s^=xr<<(xr<<BigInt(r))-xr);Ed.push(s)}const[mx,gx]=_d(Ed,!0),Vu=(i,t,e)=>e>32?xd(i,t,e):vd(i,t,e),Wu=(i,t,e)=>e>32?wd(i,t,e):yd(i,t,e);function _x(i,t=24){const e=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let a=0;a<10;a++)e[a]=i[a]^i[a+10]^i[a+20]^i[a+30]^i[a+40];for(let a=0;a<10;a+=2){const o=(a+8)%10,c=(a+2)%10,l=e[c],u=e[c+1],h=Vu(l,u,1)^e[o],d=Wu(l,u,1)^e[o+1];for(let m=0;m<50;m+=10)i[a+m]^=h,i[a+m+1]^=d}let s=i[2],r=i[3];for(let a=0;a<24;a++){const o=Md[a],c=Vu(s,r,o),l=Wu(s,r,o),u=Sd[a];s=i[u],r=i[u+1],i[u]=c,i[u+1]=l}for(let a=0;a<50;a+=10){for(let o=0;o<10;o++)e[o]=i[a+o];for(let o=0;o<10;o++)i[a+o]^=~e[(o+2)%10]&e[(o+4)%10]}i[0]^=mx[n],i[1]^=gx[n]}e.fill(0)}class Xc extends Xy{constructor(t,e,n,s=!1,r=24){if(super(),this.blockLen=t,this.suffix=e,this.outputLen=n,this.enableXOF=s,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,Na(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Gy(this.state)}keccak(){_x(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){Hu(this);const{blockLen:e,state:n}=this;t=md(t);const s=t.length;for(let r=0;r<s;){const a=Math.min(e-this.pos,s-r);for(let o=0;o<a;o++)n[this.pos++]^=t[r++];this.pos===e&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:e,pos:n,blockLen:s}=this;t[n]^=e,e&128&&n===s-1&&this.keccak(),t[s-1]^=128,this.keccak()}writeInto(t){Hu(this,!1),fd(t),this.finish();const e=this.state,{blockLen:n}=this;for(let s=0,r=t.length;s<r;){this.posOut>=n&&this.keccak();const a=Math.min(n-this.posOut,r-s);t.set(e.subarray(this.posOut,this.posOut+a),s),this.posOut+=a,s+=a}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return Na(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(zy(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:e,suffix:n,outputLen:s,rounds:r,enableXOF:a}=this;return t||(t=new Xc(e,n,s,a,r)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=r,t.suffix=n,t.outputLen=s,t.enableXOF=a,t.destroyed=this.destroyed,t}}const vx=(i,t,e)=>$y(()=>new Xc(t,i,e)),yx=vx(1,136,256/8);let bd=!1;const Td=function(i){return yx(i)};let Ad=Td;function Ii(i){const t=Tn(i,"data");return ye(Ad(t))}Ii._=Td;Ii.lock=function(){bd=!0};Ii.register=function(i){if(bd)throw new TypeError("keccak256 is locked");Ad=i};Object.freeze(Ii);const xx=BigInt(0),wx=BigInt(36);function Xu(i){i=i.toLowerCase();const t=i.substring(2).split(""),e=new Uint8Array(40);for(let s=0;s<40;s++)e[s]=t[s].charCodeAt(0);const n=Tn(Ii(e));for(let s=0;s<40;s+=2)n[s>>1]>>4>=8&&(t[s]=t[s].toUpperCase()),(n[s>>1]&15)>=8&&(t[s+1]=t[s+1].toUpperCase());return"0x"+t.join("")}const qc={};for(let i=0;i<10;i++)qc[String(i)]=String(i);for(let i=0;i<26;i++)qc[String.fromCharCode(65+i)]=String(10+i);const qu=15;function Cd(i){i=i.toUpperCase(),i=i.substring(4)+i.substring(0,2)+"00";let t=i.split("").map(n=>qc[n]).join("");for(;t.length>=qu;){let n=t.substring(0,qu);t=parseInt(n,10)%97+t.substring(n.length)}let e=String(98-parseInt(t,10)%97);for(;e.length<2;)e="0"+e;return e}const Sx=function(){const i={};for(let t=0;t<36;t++){const e="0123456789abcdefghijklmnopqrstuvwxyz"[t];i[e]=BigInt(t)}return i}();function Mx(i){i=i.toLowerCase();let t=xx;for(let e=0;e<i.length;e++)t=t*wx+Sx[i[e]];return t}function li(i){if(it(typeof i=="string","invalid address","address",i),i.match(/^(0x)?[0-9a-fA-F]{40}$/)){i.startsWith("0x")||(i="0x"+i);const t=Xu(i);return it(!i.match(/([A-F].*[a-f])|([a-f].*[A-F])/)||t===i,"bad address checksum","address",i),t}if(i.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)){it(i.substring(2,4)===Cd(i),"bad icap checksum","address",i);let t=Mx(i.substring(4)).toString(16);for(;t.length<40;)t="0"+t;return Xu("0x"+t)}it(!1,"invalid address","address",i)}function rS(i){let t=BigInt(li(i)).toString(36).toUpperCase();for(;t.length<30;)t="0"+t;return"XE"+Cd("XE00"+t)+t}function Rd(i){return i&&typeof i.getAddress=="function"}function aS(i){try{return li(i),!0}catch{}return!1}async function Xo(i,t){const e=await t;return(e==null||e==="0x0000000000000000000000000000000000000000")&&(bt(typeof i!="string","unconfigured name","UNCONFIGURED_NAME",{value:i}),it(!1,"invalid AddressLike value; did not resolve to a value address","target",i)),li(e)}function Ir(i,t){if(typeof i=="string")return i.match(/^0x[0-9a-f]{40}$/i)?li(i):(bt(t!=null,"ENS resolution requires a provider","UNSUPPORTED_OPERATION",{operation:"resolveName"}),Xo(i,t.resolveName(i)));if(Rd(i))return Xo(i,i.getAddress());if(i&&typeof i.then=="function")return Xo(i,i);it(!1,"unsupported addressable value","target",i)}const Qn={};function xt(i,t){let e=!1;return t<0&&(e=!0,t*=-1),new Be(Qn,`${e?"":"u"}int${t}`,i,{signed:e,width:t})}function ne(i,t){return new Be(Qn,`bytes${t||""}`,i,{size:t})}const $u=Symbol.for("_ethers_typed");var ss;const ti=class ti{constructor(t,e,n,s){F(this,"type");F(this,"value");ee(this,ss);F(this,"_typedSymbol");s==null&&(s=null),qa(Qn,t,"Typed"),Vt(this,{_typedSymbol:$u,type:e,value:n}),Zt(this,ss,s),this.format()}format(){if(this.type==="array")throw new Error("");if(this.type==="dynamicArray")throw new Error("");return this.type==="tuple"?`tuple(${this.value.map(t=>t.format()).join(",")})`:this.type}defaultValue(){return 0}minValue(){return 0}maxValue(){return 0}isBigInt(){return!!this.type.match(/^u?int[0-9]+$/)}isData(){return this.type.startsWith("bytes")}isString(){return this.type==="string"}get tupleName(){if(this.type!=="tuple")throw TypeError("not a tuple");return O(this,ss)}get arrayLength(){if(this.type!=="array")throw TypeError("not an array");return O(this,ss)===!0?-1:O(this,ss)===!1?this.value.length:null}static from(t,e){return new ti(Qn,t,e)}static uint8(t){return xt(t,8)}static uint16(t){return xt(t,16)}static uint24(t){return xt(t,24)}static uint32(t){return xt(t,32)}static uint40(t){return xt(t,40)}static uint48(t){return xt(t,48)}static uint56(t){return xt(t,56)}static uint64(t){return xt(t,64)}static uint72(t){return xt(t,72)}static uint80(t){return xt(t,80)}static uint88(t){return xt(t,88)}static uint96(t){return xt(t,96)}static uint104(t){return xt(t,104)}static uint112(t){return xt(t,112)}static uint120(t){return xt(t,120)}static uint128(t){return xt(t,128)}static uint136(t){return xt(t,136)}static uint144(t){return xt(t,144)}static uint152(t){return xt(t,152)}static uint160(t){return xt(t,160)}static uint168(t){return xt(t,168)}static uint176(t){return xt(t,176)}static uint184(t){return xt(t,184)}static uint192(t){return xt(t,192)}static uint200(t){return xt(t,200)}static uint208(t){return xt(t,208)}static uint216(t){return xt(t,216)}static uint224(t){return xt(t,224)}static uint232(t){return xt(t,232)}static uint240(t){return xt(t,240)}static uint248(t){return xt(t,248)}static uint256(t){return xt(t,256)}static uint(t){return xt(t,256)}static int8(t){return xt(t,-8)}static int16(t){return xt(t,-16)}static int24(t){return xt(t,-24)}static int32(t){return xt(t,-32)}static int40(t){return xt(t,-40)}static int48(t){return xt(t,-48)}static int56(t){return xt(t,-56)}static int64(t){return xt(t,-64)}static int72(t){return xt(t,-72)}static int80(t){return xt(t,-80)}static int88(t){return xt(t,-88)}static int96(t){return xt(t,-96)}static int104(t){return xt(t,-104)}static int112(t){return xt(t,-112)}static int120(t){return xt(t,-120)}static int128(t){return xt(t,-128)}static int136(t){return xt(t,-136)}static int144(t){return xt(t,-144)}static int152(t){return xt(t,-152)}static int160(t){return xt(t,-160)}static int168(t){return xt(t,-168)}static int176(t){return xt(t,-176)}static int184(t){return xt(t,-184)}static int192(t){return xt(t,-192)}static int200(t){return xt(t,-200)}static int208(t){return xt(t,-208)}static int216(t){return xt(t,-216)}static int224(t){return xt(t,-224)}static int232(t){return xt(t,-232)}static int240(t){return xt(t,-240)}static int248(t){return xt(t,-248)}static int256(t){return xt(t,-256)}static int(t){return xt(t,-256)}static bytes1(t){return ne(t,1)}static bytes2(t){return ne(t,2)}static bytes3(t){return ne(t,3)}static bytes4(t){return ne(t,4)}static bytes5(t){return ne(t,5)}static bytes6(t){return ne(t,6)}static bytes7(t){return ne(t,7)}static bytes8(t){return ne(t,8)}static bytes9(t){return ne(t,9)}static bytes10(t){return ne(t,10)}static bytes11(t){return ne(t,11)}static bytes12(t){return ne(t,12)}static bytes13(t){return ne(t,13)}static bytes14(t){return ne(t,14)}static bytes15(t){return ne(t,15)}static bytes16(t){return ne(t,16)}static bytes17(t){return ne(t,17)}static bytes18(t){return ne(t,18)}static bytes19(t){return ne(t,19)}static bytes20(t){return ne(t,20)}static bytes21(t){return ne(t,21)}static bytes22(t){return ne(t,22)}static bytes23(t){return ne(t,23)}static bytes24(t){return ne(t,24)}static bytes25(t){return ne(t,25)}static bytes26(t){return ne(t,26)}static bytes27(t){return ne(t,27)}static bytes28(t){return ne(t,28)}static bytes29(t){return ne(t,29)}static bytes30(t){return ne(t,30)}static bytes31(t){return ne(t,31)}static bytes32(t){return ne(t,32)}static address(t){return new ti(Qn,"address",t)}static bool(t){return new ti(Qn,"bool",!!t)}static bytes(t){return new ti(Qn,"bytes",t)}static string(t){return new ti(Qn,"string",t)}static array(t,e){throw new Error("not implemented yet")}static tuple(t,e){throw new Error("not implemented yet")}static overrides(t){return new ti(Qn,"overrides",Object.assign({},t))}static isTyped(t){return t&&typeof t=="object"&&"_typedSymbol"in t&&t._typedSymbol===$u}static dereference(t,e){if(ti.isTyped(t)){if(t.type!==e)throw new Error(`invalid type: expecetd ${e}, got ${t.type}`);return t.value}return t}};ss=new WeakMap;let Be=ti;class Ex extends di{constructor(t){super("address","address",t,!1)}defaultValue(){return"0x0000000000000000000000000000000000000000"}encode(t,e){let n=Be.dereference(e,"string");try{n=li(n)}catch(s){return this._throwError(s.message,e)}return t.writeValue(n)}decode(t){return li(ad(t.readValue(),20))}}class bx extends di{constructor(e){super(e.name,e.type,"_",e.dynamic);F(this,"coder");this.coder=e}defaultValue(){return this.coder.defaultValue()}encode(e,n){return this.coder.encode(e,n)}decode(e){return this.coder.decode(e)}}function Pd(i,t,e){let n=[];if(Array.isArray(e))n=e;else if(e&&typeof e=="object"){let c={};n=t.map(l=>{const u=l.localName;return bt(u,"cannot encode object for signature with missing names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:e}),bt(!c[u],"cannot encode object for signature with duplicate names","INVALID_ARGUMENT",{argument:"values",info:{coder:l},value:e}),c[u]=!0,e[u]})}else it(!1,"invalid tuple value","tuple",e);it(t.length===n.length,"types/value length mismatch","tuple",e);let s=new mc,r=new mc,a=[];t.forEach((c,l)=>{let u=n[l];if(c.dynamic){let h=r.length;c.encode(r,u);let d=s.writeUpdatableValue();a.push(m=>{d(m+h)})}else c.encode(s,u)}),a.forEach(c=>{c(s.length)});let o=i.appendWriter(s);return o+=i.appendWriter(r),o}function Ld(i,t){let e=[],n=[],s=i.subReader(0);return t.forEach(r=>{let a=null;if(r.dynamic){let o=i.readIndex(),c=s.subReader(o);try{a=r.decode(c)}catch(l){if(sr(l,"BUFFER_OVERRUN"))throw l;a=l,a.baseType=r.name,a.name=r.localName,a.type=r.type}}else try{a=r.decode(i)}catch(o){if(sr(o,"BUFFER_OVERRUN"))throw o;a=o,a.baseType=r.name,a.name=r.localName,a.type=r.type}if(a==null)throw new Error("investigate");e.push(a),n.push(r.localName||null)}),rr.fromItems(e,n)}class Tx extends di{constructor(e,n,s){const r=e.type+"["+(n>=0?n:"")+"]",a=n===-1||e.dynamic;super("array",r,s,a);F(this,"coder");F(this,"length");Vt(this,{coder:e,length:n})}defaultValue(){const e=this.coder.defaultValue(),n=[];for(let s=0;s<this.length;s++)n.push(e);return n}encode(e,n){const s=Be.dereference(n,"array");Array.isArray(s)||this._throwError("expected array value",s);let r=this.length;r===-1&&(r=s.length,e.writeValue(s.length)),nd(s.length,r,"coder array"+(this.localName?" "+this.localName:""));let a=[];for(let o=0;o<s.length;o++)a.push(this.coder);return Pd(e,a,s)}decode(e){let n=this.length;n===-1&&(n=e.readIndex(),bt(n*Ve<=e.dataLength,"insufficient data length","BUFFER_OVERRUN",{buffer:e.bytes,offset:n*Ve,length:e.dataLength}));let s=[];for(let r=0;r<n;r++)s.push(new bx(this.coder));return Ld(e,s)}}class Ax extends di{constructor(t){super("bool","bool",t,!1)}defaultValue(){return!1}encode(t,e){const n=Be.dereference(e,"bool");return t.writeValue(n?1:0)}decode(t){return!!t.readValue()}}class Id extends di{constructor(t,e){super(t,t,e,!0)}defaultValue(){return"0x"}encode(t,e){e=Gn(e);let n=t.writeValue(e.length);return n+=t.writeBytes(e),n}decode(t){return t.readBytes(t.readIndex(),!0)}}class Cx extends Id{constructor(t){super("bytes",t)}decode(t){return ye(super.decode(t))}}class Rx extends di{constructor(e,n){let s="bytes"+String(e);super(s,s,n,!1);F(this,"size");Vt(this,{size:e},{size:"number"})}defaultValue(){return"0x0000000000000000000000000000000000000000000000000000000000000000".substring(0,2+this.size*2)}encode(e,n){let s=Gn(Be.dereference(n,this.type));return s.length!==this.size&&this._throwError("incorrect data length",n),e.writeBytes(s)}decode(e){return ye(e.readBytes(this.size))}}const Px=new Uint8Array([]);class Lx extends di{constructor(t){super("null","",t,!1)}defaultValue(){return null}encode(t,e){return e!=null&&this._throwError("not null",e),t.writeBytes(Px)}decode(t){return t.readBytes(0),null}}const Ix=BigInt(0),Nx=BigInt(1),Dx=BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");class Ux extends di{constructor(e,n,s){const r=(n?"int":"uint")+e*8;super(r,r,s,!1);F(this,"size");F(this,"signed");Vt(this,{size:e,signed:n},{size:"number",signed:"boolean"})}defaultValue(){return 0}encode(e,n){let s=hi(Be.dereference(n,this.type)),r=Gs(Dx,Ve*8);if(this.signed){let a=Gs(r,this.size*8-1);(s>a||s<-(a+Nx))&&this._throwError("value out-of-bounds",n),s=Ty(s,8*Ve)}else(s<Ix||s>Gs(r,this.size*8))&&this._throwError("value out-of-bounds",n);return e.writeValue(s)}decode(e){let n=Gs(e.readValue(),this.size*8);return this.signed&&(n=La(n,this.size*8)),n}}class Ox extends Id{constructor(t){super("string",t)}defaultValue(){return""}encode(t,e){return super.encode(t,Wc(Be.dereference(e,"string")))}decode(t){return Ny(super.decode(t))}}class _a extends di{constructor(e,n){let s=!1;const r=[];e.forEach(o=>{o.dynamic&&(s=!0),r.push(o.type)});const a="tuple("+r.join(",")+")";super("tuple",a,n,s);F(this,"coders");Vt(this,{coders:Object.freeze(e.slice())})}defaultValue(){const e=[];this.coders.forEach(s=>{e.push(s.defaultValue())});const n=this.coders.reduce((s,r)=>{const a=r.localName;return a&&(s[a]||(s[a]=0),s[a]++),s},{});return this.coders.forEach((s,r)=>{let a=s.localName;!a||n[a]!==1||(a==="length"&&(a="_length"),e[a]==null&&(e[a]=e[r]))}),Object.freeze(e)}encode(e,n){const s=Be.dereference(n,"tuple");return Pd(e,this.coders,s)}decode(e){return Ld(e,this.coders)}}function qo(i,t){return{address:li(i),storageKeys:t.map((e,n)=>(it(kn(e,32),"invalid slot",`storageKeys[${n}]`,e),e.toLowerCase()))}}function Fx(i){if(Array.isArray(i))return i.map((e,n)=>Array.isArray(e)?(it(e.length===2,"invalid slot set",`value[${n}]`,e),qo(e[0],e[1])):(it(e!=null&&typeof e=="object","invalid address-slot set","value",i),qo(e.address,e.storageKeys)));it(i!=null&&typeof i=="object","invalid access list","value",i);const t=Object.keys(i).map(e=>{const n=i[e].reduce((s,r)=>(s[r]=!0,s),{});return qo(e,Object.keys(n).sort())});return t.sort((e,n)=>e.address.localeCompare(n.address)),t}function Nr(i){return Ii(Wc(i))}function We(i){const t=new Set;return i.forEach(e=>t.add(e)),Object.freeze(t)}const Bx="external public payable override",kx=We(Bx.split(" ")),Nd="constant external internal payable private public pure view override",zx=We(Nd.split(" ")),Dd="constructor error event fallback function receive struct",Ud=We(Dd.split(" ")),Od="calldata memory storage payable indexed",Gx=We(Od.split(" ")),Hx="tuple returns",Vx=[Dd,Od,Hx,Nd].join(" "),Wx=We(Vx.split(" ")),Xx={"(":"OPEN_PAREN",")":"CLOSE_PAREN","[":"OPEN_BRACKET","]":"CLOSE_BRACKET",",":"COMMA","@":"AT"},qx=new RegExp("^(\\s*)"),$x=new RegExp("^([0-9]+)"),Yx=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)"),Fd=new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$"),Bd=new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");var Re,Sn,Ur,yc;const ka=class ka{constructor(t){ee(this,Ur);ee(this,Re);ee(this,Sn);Zt(this,Re,0),Zt(this,Sn,t.slice())}get offset(){return O(this,Re)}get length(){return O(this,Sn).length-O(this,Re)}clone(){return new ka(O(this,Sn))}reset(){Zt(this,Re,0)}popKeyword(t){const e=this.peek();if(e.type!=="KEYWORD"||!t.has(e.text))throw new Error(`expected keyword ${e.text}`);return this.pop().text}popType(t){if(this.peek().type!==t){const e=this.peek();throw new Error(`expected ${t}; got ${e.type} ${JSON.stringify(e.text)}`)}return this.pop().text}popParen(){const t=this.peek();if(t.type!=="OPEN_PAREN")throw new Error("bad start");const e=Ot(this,Ur,yc).call(this,O(this,Re)+1,t.match+1);return Zt(this,Re,t.match+1),e}popParams(){const t=this.peek();if(t.type!=="OPEN_PAREN")throw new Error("bad start");const e=[];for(;O(this,Re)<t.match-1;){const n=this.peek().linkNext;e.push(Ot(this,Ur,yc).call(this,O(this,Re)+1,n)),Zt(this,Re,n)}return Zt(this,Re,t.match+1),e}peek(){if(O(this,Re)>=O(this,Sn).length)throw new Error("out-of-bounds");return O(this,Sn)[O(this,Re)]}peekKeyword(t){const e=this.peekType("KEYWORD");return e!=null&&t.has(e)?e:null}peekType(t){if(this.length===0)return null;const e=this.peek();return e.type===t?e.text:null}pop(){const t=this.peek();return al(this,Re)._++,t}toString(){const t=[];for(let e=O(this,Re);e<O(this,Sn).length;e++){const n=O(this,Sn)[e];t.push(`${n.type}:${n.text}`)}return`<TokenString ${t.join(" ")}>`}};Re=new WeakMap,Sn=new WeakMap,Ur=new WeakSet,yc=function(t=0,e=0){return new ka(O(this,Sn).slice(t,e).map(n=>Object.freeze(Object.assign({},n,{match:n.match-t,linkBack:n.linkBack-t,linkNext:n.linkNext-t}))))};let An=ka;function Di(i){const t=[],e=a=>{const o=r<i.length?JSON.stringify(i[r]):"$EOI";throw new Error(`invalid token ${o} at ${r}: ${a}`)};let n=[],s=[],r=0;for(;r<i.length;){let a=i.substring(r),o=a.match(qx);o&&(r+=o[1].length,a=i.substring(r));const c={depth:n.length,linkBack:-1,linkNext:-1,match:-1,type:"",text:"",offset:r,value:-1};t.push(c);let l=Xx[a[0]]||"";if(l){if(c.type=l,c.text=a[0],r++,l==="OPEN_PAREN")n.push(t.length-1),s.push(t.length-1);else if(l=="CLOSE_PAREN")n.length===0&&e("no matching open bracket"),c.match=n.pop(),t[c.match].match=t.length-1,c.depth--,c.linkBack=s.pop(),t[c.linkBack].linkNext=t.length-1;else if(l==="COMMA")c.linkBack=s.pop(),t[c.linkBack].linkNext=t.length-1,s.push(t.length-1);else if(l==="OPEN_BRACKET")c.type="BRACKET";else if(l==="CLOSE_BRACKET"){let u=t.pop().text;if(t.length>0&&t[t.length-1].type==="NUMBER"){const h=t.pop().text;u=h+u,t[t.length-1].value=Ze(h)}if(t.length===0||t[t.length-1].type!=="BRACKET")throw new Error("missing opening bracket");t[t.length-1].text+=u}continue}if(o=a.match(Yx),o){if(c.text=o[1],r+=c.text.length,Wx.has(c.text)){c.type="KEYWORD";continue}if(c.text.match(Bd)){c.type="TYPE";continue}c.type="ID";continue}if(o=a.match($x),o){c.text=o[1],c.type="NUMBER",r+=c.text.length;continue}throw new Error(`unexpected token ${JSON.stringify(a[0])} at position ${r}`)}return new An(t.map(a=>Object.freeze(a)))}function Yu(i,t){let e=[];for(const n in t.keys())i.has(n)&&e.push(n);if(e.length>1)throw new Error(`conflicting types: ${e.join(", ")}`)}function Ya(i,t){if(t.peekKeyword(Ud)){const e=t.pop().text;if(e!==i)throw new Error(`expected ${i}, got ${e}`)}return t.popType("ID")}function ui(i,t){const e=new Set;for(;;){const n=i.peekType("KEYWORD");if(n==null||t&&!t.has(n))break;if(i.pop(),e.has(n))throw new Error(`duplicate keywords: ${JSON.stringify(n)}`);e.add(n)}return Object.freeze(e)}function kd(i){let t=ui(i,zx);return Yu(t,We("constant payable nonpayable".split(" "))),Yu(t,We("pure view payable nonpayable".split(" "))),t.has("view")?"view":t.has("pure")?"pure":t.has("payable")?"payable":t.has("nonpayable")?"nonpayable":t.has("constant")?"view":"nonpayable"}function oi(i,t){return i.popParams().map(e=>Pe.from(e,t))}function zd(i){if(i.peekType("AT")){if(i.pop(),i.peekType("NUMBER"))return hi(i.pop().text);throw new Error("invalid gas")}return null}function ds(i){if(i.length)throw new Error(`unexpected tokens at offset ${i.offset}: ${i.toString()}`)}const Kx=new RegExp(/^(.*)\[([0-9]*)\]$/);function Ku(i){const t=i.match(Bd);if(it(t,"invalid type","type",i),i==="uint")return"uint256";if(i==="int")return"int256";if(t[2]){const e=parseInt(t[2]);it(e!==0&&e<=32,"invalid bytes length","type",i)}else if(t[3]){const e=parseInt(t[3]);it(e!==0&&e<=256&&e%8===0,"invalid numeric width","type",i)}return i}const me={},je=Symbol.for("_ethers_internal"),Ju="_ParamTypeInternal",Zu="_ErrorInternal",ju="_EventInternal",Qu="_ConstructorInternal",th="_FallbackInternal",eh="_FunctionInternal",nh="_StructInternal";var js,Sa;const pn=class pn{constructor(t,e,n,s,r,a,o,c){ee(this,js);F(this,"name");F(this,"type");F(this,"baseType");F(this,"indexed");F(this,"components");F(this,"arrayLength");F(this,"arrayChildren");if(qa(t,me,"ParamType"),Object.defineProperty(this,je,{value:Ju}),a&&(a=Object.freeze(a.slice())),s==="array"){if(o==null||c==null)throw new Error("")}else if(o!=null||c!=null)throw new Error("");if(s==="tuple"){if(a==null)throw new Error("")}else if(a!=null)throw new Error("");Vt(this,{name:e,type:n,baseType:s,indexed:r,components:a,arrayLength:o,arrayChildren:c})}format(t){if(t==null&&(t="sighash"),t==="json"){const n=this.name||"";if(this.isArray()){const r=JSON.parse(this.arrayChildren.format("json"));return r.name=n,r.type+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`,JSON.stringify(r)}const s={type:this.baseType==="tuple"?"tuple":this.type,name:n};return typeof this.indexed=="boolean"&&(s.indexed=this.indexed),this.isTuple()&&(s.components=this.components.map(r=>JSON.parse(r.format(t)))),JSON.stringify(s)}let e="";return this.isArray()?(e+=this.arrayChildren.format(t),e+=`[${this.arrayLength<0?"":String(this.arrayLength)}]`):this.isTuple()?e+="("+this.components.map(n=>n.format(t)).join(t==="full"?", ":",")+")":e+=this.type,t!=="sighash"&&(this.indexed===!0&&(e+=" indexed"),t==="full"&&this.name&&(e+=" "+this.name)),e}isArray(){return this.baseType==="array"}isTuple(){return this.baseType==="tuple"}isIndexable(){return this.indexed!=null}walk(t,e){if(this.isArray()){if(!Array.isArray(t))throw new Error("invalid array value");if(this.arrayLength!==-1&&t.length!==this.arrayLength)throw new Error("array is wrong length");const n=this;return t.map(s=>n.arrayChildren.walk(s,e))}if(this.isTuple()){if(!Array.isArray(t))throw new Error("invalid tuple value");if(t.length!==this.components.length)throw new Error("array is wrong length");const n=this;return t.map((s,r)=>n.components[r].walk(s,e))}return e(this.type,t)}async walkAsync(t,e){const n=[],s=[t];return Ot(this,js,Sa).call(this,n,t,e,r=>{s[0]=r}),n.length&&await Promise.all(n),s[0]}static from(t,e){if(pn.isParamType(t))return t;if(typeof t=="string")try{return pn.from(Di(t),e)}catch{it(!1,"invalid param type","obj",t)}else if(t instanceof An){let o="",c="",l=null;ui(t,We(["tuple"])).has("tuple")||t.peekType("OPEN_PAREN")?(c="tuple",l=t.popParams().map(v=>pn.from(v)),o=`tuple(${l.map(v=>v.format()).join(",")})`):(o=Ku(t.popType("TYPE")),c=o);let u=null,h=null;for(;t.length&&t.peekType("BRACKET");){const v=t.pop();u=new pn(me,"",o,c,null,l,h,u),h=v.value,o+=v.text,c="array",l=null}let d=null;if(ui(t,Gx).has("indexed")){if(!e)throw new Error("");d=!0}const g=t.peekType("ID")?t.pop().text:"";if(t.length)throw new Error("leftover tokens");return new pn(me,g,o,c,d,l,h,u)}const n=t.name;it(!n||typeof n=="string"&&n.match(Fd),"invalid name","obj.name",n);let s=t.indexed;s!=null&&(it(e,"parameter cannot be indexed","obj.indexed",t.indexed),s=!!s);let r=t.type,a=r.match(Kx);if(a){const o=parseInt(a[2]||"-1"),c=pn.from({type:a[1],components:t.components});return new pn(me,n||"",r,"array",s,null,o,c)}if(r==="tuple"||r.startsWith("tuple(")||r.startsWith("(")){const o=t.components!=null?t.components.map(l=>pn.from(l)):null;return new pn(me,n||"",r,"tuple",s,o,null,null)}return r=Ku(t.type),new pn(me,n||"",r,r,s,null,null,null)}static isParamType(t){return t&&t[je]===Ju}};js=new WeakSet,Sa=function(t,e,n,s){if(this.isArray()){if(!Array.isArray(e))throw new Error("invalid array value");if(this.arrayLength!==-1&&e.length!==this.arrayLength)throw new Error("array is wrong length");const a=this.arrayChildren,o=e.slice();o.forEach((c,l)=>{var u;Ot(u=a,js,Sa).call(u,t,c,n,h=>{o[l]=h})}),s(o);return}if(this.isTuple()){const a=this.components;let o;if(Array.isArray(e))o=e.slice();else{if(e==null||typeof e!="object")throw new Error("invalid tuple value");o=a.map(c=>{if(!c.name)throw new Error("cannot use object value with unnamed components");if(!(c.name in e))throw new Error(`missing value for component ${c.name}`);return e[c.name]})}if(o.length!==this.components.length)throw new Error("array is wrong length");o.forEach((c,l)=>{var u;Ot(u=a[l],js,Sa).call(u,t,c,n,h=>{o[l]=h})}),s(o);return}const r=n(this.type,e);r.then?t.push(async function(){s(await r)}()):s(r)};let Pe=pn;class fs{constructor(t,e,n){F(this,"type");F(this,"inputs");qa(t,me,"Fragment"),n=Object.freeze(n.slice()),Vt(this,{type:e,inputs:n})}static from(t){if(typeof t=="string"){try{fs.from(JSON.parse(t))}catch{}return fs.from(Di(t))}if(t instanceof An)switch(t.peekKeyword(Ud)){case"constructor":return ai.from(t);case"error":return Je.from(t);case"event":return Fn.from(t);case"fallback":case"receive":return ei.from(t);case"function":return Bn.from(t);case"struct":return os.from(t)}else if(typeof t=="object"){switch(t.type){case"constructor":return ai.from(t);case"error":return Je.from(t);case"event":return Fn.from(t);case"fallback":case"receive":return ei.from(t);case"function":return Bn.from(t);case"struct":return os.from(t)}bt(!1,`unsupported type: ${t.type}`,"UNSUPPORTED_OPERATION",{operation:"Fragment.from"})}it(!1,"unsupported frgament object","obj",t)}static isConstructor(t){return ai.isFragment(t)}static isError(t){return Je.isFragment(t)}static isEvent(t){return Fn.isFragment(t)}static isFunction(t){return Bn.isFragment(t)}static isStruct(t){return os.isFragment(t)}}class Ka extends fs{constructor(e,n,s,r){super(e,n,r);F(this,"name");it(typeof s=="string"&&s.match(Fd),"invalid identifier","name",s),r=Object.freeze(r.slice()),Vt(this,{name:s})}}function Dr(i,t){return"("+t.map(e=>e.format(i)).join(i==="full"?", ":",")+")"}class Je extends Ka{constructor(t,e,n){super(t,"error",e,n),Object.defineProperty(this,je,{value:Zu})}get selector(){return Nr(this.format("sighash")).substring(0,10)}format(t){if(t==null&&(t="sighash"),t==="json")return JSON.stringify({type:"error",name:this.name,inputs:this.inputs.map(n=>JSON.parse(n.format(t)))});const e=[];return t!=="sighash"&&e.push("error"),e.push(this.name+Dr(t,this.inputs)),e.join(" ")}static from(t){if(Je.isFragment(t))return t;if(typeof t=="string")return Je.from(Di(t));if(t instanceof An){const e=Ya("error",t),n=oi(t);return ds(t),new Je(me,e,n)}return new Je(me,t.name,t.inputs?t.inputs.map(Pe.from):[])}static isFragment(t){return t&&t[je]===Zu}}class Fn extends Ka{constructor(e,n,s,r){super(e,"event",n,s);F(this,"anonymous");Object.defineProperty(this,je,{value:ju}),Vt(this,{anonymous:r})}get topicHash(){return Nr(this.format("sighash"))}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"event",anonymous:this.anonymous,name:this.name,inputs:this.inputs.map(s=>JSON.parse(s.format(e)))});const n=[];return e!=="sighash"&&n.push("event"),n.push(this.name+Dr(e,this.inputs)),e!=="sighash"&&this.anonymous&&n.push("anonymous"),n.join(" ")}static getTopicHash(e,n){return n=(n||[]).map(r=>Pe.from(r)),new Fn(me,e,n,!1).topicHash}static from(e){if(Fn.isFragment(e))return e;if(typeof e=="string")try{return Fn.from(Di(e))}catch{it(!1,"invalid event fragment","obj",e)}else if(e instanceof An){const n=Ya("event",e),s=oi(e,!0),r=!!ui(e,We(["anonymous"])).has("anonymous");return ds(e),new Fn(me,n,s,r)}return new Fn(me,e.name,e.inputs?e.inputs.map(n=>Pe.from(n,!0)):[],!!e.anonymous)}static isFragment(e){return e&&e[je]===ju}}class ai extends fs{constructor(e,n,s,r,a){super(e,n,s);F(this,"payable");F(this,"gas");Object.defineProperty(this,je,{value:Qu}),Vt(this,{payable:r,gas:a})}format(e){if(bt(e!=null&&e!=="sighash","cannot format a constructor for sighash","UNSUPPORTED_OPERATION",{operation:"format(sighash)"}),e==="json")return JSON.stringify({type:"constructor",stateMutability:this.payable?"payable":"undefined",payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(e)))});const n=[`constructor${Dr(e,this.inputs)}`];return this.payable&&n.push("payable"),this.gas!=null&&n.push(`@${this.gas.toString()}`),n.join(" ")}static from(e){if(ai.isFragment(e))return e;if(typeof e=="string")try{return ai.from(Di(e))}catch{it(!1,"invalid constuctor fragment","obj",e)}else if(e instanceof An){ui(e,We(["constructor"]));const n=oi(e),s=!!ui(e,kx).has("payable"),r=zd(e);return ds(e),new ai(me,"constructor",n,s,r)}return new ai(me,"constructor",e.inputs?e.inputs.map(Pe.from):[],!!e.payable,e.gas!=null?e.gas:null)}static isFragment(e){return e&&e[je]===Qu}}class ei extends fs{constructor(e,n,s){super(e,"fallback",n);F(this,"payable");Object.defineProperty(this,je,{value:th}),Vt(this,{payable:s})}format(e){const n=this.inputs.length===0?"receive":"fallback";if(e==="json"){const s=this.payable?"payable":"nonpayable";return JSON.stringify({type:n,stateMutability:s})}return`${n}()${this.payable?" payable":""}`}static from(e){if(ei.isFragment(e))return e;if(typeof e=="string")try{return ei.from(Di(e))}catch{it(!1,"invalid fallback fragment","obj",e)}else if(e instanceof An){const n=e.toString(),s=e.peekKeyword(We(["fallback","receive"]));if(it(s,"type must be fallback or receive","obj",n),e.popKeyword(We(["fallback","receive"]))==="receive"){const c=oi(e);return it(c.length===0,"receive cannot have arguments","obj.inputs",c),ui(e,We(["payable"])),ds(e),new ei(me,[],!0)}let a=oi(e);a.length?it(a.length===1&&a[0].type==="bytes","invalid fallback inputs","obj.inputs",a.map(c=>c.format("minimal")).join(", ")):a=[Pe.from("bytes")];const o=kd(e);if(it(o==="nonpayable"||o==="payable","fallback cannot be constants","obj.stateMutability",o),ui(e,We(["returns"])).has("returns")){const c=oi(e);it(c.length===1&&c[0].type==="bytes","invalid fallback outputs","obj.outputs",c.map(l=>l.format("minimal")).join(", "))}return ds(e),new ei(me,a,o==="payable")}if(e.type==="receive")return new ei(me,[],!0);if(e.type==="fallback"){const n=[Pe.from("bytes")],s=e.stateMutability==="payable";return new ei(me,n,s)}it(!1,"invalid fallback description","obj",e)}static isFragment(e){return e&&e[je]===th}}class Bn extends Ka{constructor(e,n,s,r,a,o){super(e,"function",n,r);F(this,"constant");F(this,"outputs");F(this,"stateMutability");F(this,"payable");F(this,"gas");Object.defineProperty(this,je,{value:eh}),a=Object.freeze(a.slice()),Vt(this,{constant:s==="view"||s==="pure",gas:o,outputs:a,payable:s==="payable",stateMutability:s})}get selector(){return Nr(this.format("sighash")).substring(0,10)}format(e){if(e==null&&(e="sighash"),e==="json")return JSON.stringify({type:"function",name:this.name,constant:this.constant,stateMutability:this.stateMutability!=="nonpayable"?this.stateMutability:void 0,payable:this.payable,gas:this.gas!=null?this.gas:void 0,inputs:this.inputs.map(s=>JSON.parse(s.format(e))),outputs:this.outputs.map(s=>JSON.parse(s.format(e)))});const n=[];return e!=="sighash"&&n.push("function"),n.push(this.name+Dr(e,this.inputs)),e!=="sighash"&&(this.stateMutability!=="nonpayable"&&n.push(this.stateMutability),this.outputs&&this.outputs.length&&(n.push("returns"),n.push(Dr(e,this.outputs))),this.gas!=null&&n.push(`@${this.gas.toString()}`)),n.join(" ")}static getSelector(e,n){return n=(n||[]).map(r=>Pe.from(r)),new Bn(me,e,"view",n,[],null).selector}static from(e){if(Bn.isFragment(e))return e;if(typeof e=="string")try{return Bn.from(Di(e))}catch{it(!1,"invalid function fragment","obj",e)}else if(e instanceof An){const s=Ya("function",e),r=oi(e),a=kd(e);let o=[];ui(e,We(["returns"])).has("returns")&&(o=oi(e));const c=zd(e);return ds(e),new Bn(me,s,a,r,o,c)}let n=e.stateMutability;return n==null&&(n="payable",typeof e.constant=="boolean"?(n="view",e.constant||(n="payable",typeof e.payable=="boolean"&&!e.payable&&(n="nonpayable"))):typeof e.payable=="boolean"&&!e.payable&&(n="nonpayable")),new Bn(me,e.name,n,e.inputs?e.inputs.map(Pe.from):[],e.outputs?e.outputs.map(Pe.from):[],e.gas!=null?e.gas:null)}static isFragment(e){return e&&e[je]===eh}}class os extends Ka{constructor(t,e,n){super(t,"struct",e,n),Object.defineProperty(this,je,{value:nh})}format(){throw new Error("@TODO")}static from(t){if(typeof t=="string")try{return os.from(Di(t))}catch{it(!1,"invalid struct fragment","obj",t)}else if(t instanceof An){const e=Ya("struct",t),n=oi(t);return ds(t),new os(me,e,n)}return new os(me,t.name,t.inputs?t.inputs.map(Pe.from):[])}static isFragment(t){return t&&t[je]===nh}}const Cn=new Map;Cn.set(0,"GENERIC_PANIC");Cn.set(1,"ASSERT_FALSE");Cn.set(17,"OVERFLOW");Cn.set(18,"DIVIDE_BY_ZERO");Cn.set(33,"ENUM_RANGE_ERROR");Cn.set(34,"BAD_STORAGE_DATA");Cn.set(49,"STACK_UNDERFLOW");Cn.set(50,"ARRAY_RANGE_ERROR");Cn.set(65,"OUT_OF_MEMORY");Cn.set(81,"UNINITIALIZED_FUNCTION_CALL");const Jx=new RegExp(/^bytes([0-9]*)$/),Zx=new RegExp(/^(u?int)([0-9]*)$/);let $o=null,ih=1024;function jx(i,t,e,n){let s="missing revert data",r=null;const a=null;let o=null;if(e){s="execution reverted";const l=Tn(e);if(e=ye(e),l.length===0)s+=" (no data present; likely require(false) occurred",r="require(false)";else if(l.length%32!==4)s+=" (could not decode reason; invalid data length)";else if(ye(l.slice(0,4))==="0x08c379a0")try{r=n.decode(["string"],l.slice(4))[0],o={signature:"Error(string)",name:"Error",args:[r]},s+=`: ${JSON.stringify(r)}`}catch{s+=" (could not decode reason; invalid string data)"}else if(ye(l.slice(0,4))==="0x4e487b71")try{const u=Number(n.decode(["uint256"],l.slice(4))[0]);o={signature:"Panic(uint256)",name:"Panic",args:[u]},r=`Panic due to ${Cn.get(u)||"UNKNOWN"}(${u})`,s+=`: ${r}`}catch{s+=" (could not decode panic code)"}else s+=" (unknown custom error)"}const c={to:t.to?li(t.to):null,data:t.data||"0x"};return t.from&&(c.from=li(t.from)),Lr(s,"CALL_EXCEPTION",{action:i,data:e,reason:r,transaction:c,invocation:a,revert:o})}var bi,Us;const za=class za{constructor(){ee(this,bi)}getDefaultValue(t){const e=t.map(s=>Ot(this,bi,Us).call(this,Pe.from(s)));return new _a(e,"_").defaultValue()}encode(t,e){nd(e.length,t.length,"types/values length mismatch");const n=t.map(a=>Ot(this,bi,Us).call(this,Pe.from(a))),s=new _a(n,"_"),r=new mc;return s.encode(r,e),r.data}decode(t,e,n){const s=t.map(a=>Ot(this,bi,Us).call(this,Pe.from(a)));return new _a(s,"_").decode(new gc(e,n,ih))}static _setDefaultMaxInflation(t){it(typeof t=="number"&&Number.isInteger(t),"invalid defaultMaxInflation factor","value",t),ih=t}static defaultAbiCoder(){return $o==null&&($o=new za),$o}static getBuiltinCallException(t,e,n){return jx(t,e,n,za.defaultAbiCoder())}};bi=new WeakSet,Us=function(t){if(t.isArray())return new Tx(Ot(this,bi,Us).call(this,t.arrayChildren),t.arrayLength,t.name);if(t.isTuple())return new _a(t.components.map(n=>Ot(this,bi,Us).call(this,n)),t.name);switch(t.baseType){case"address":return new Ex(t.name);case"bool":return new Ax(t.name);case"string":return new Ox(t.name);case"bytes":return new Cx(t.name);case"":return new Lx(t.name)}let e=t.type.match(Zx);if(e){let n=parseInt(e[2]||"256");return it(n!==0&&n<=256&&n%8===0,"invalid "+e[1]+" bit length","param",t),new Ux(n/8,e[1]==="int",t.name)}if(e=t.type.match(Jx),e){let n=parseInt(e[1]);return it(n!==0&&n<=32,"invalid bytes length","param",t),new Rx(n,t.name)}it(!1,"invalid type","type",t.type)};let Da=za;class Qx{constructor(t,e,n){F(this,"fragment");F(this,"name");F(this,"signature");F(this,"topic");F(this,"args");const s=t.name,r=t.format();Vt(this,{fragment:t,name:s,signature:r,topic:e,args:n})}}class tw{constructor(t,e,n,s){F(this,"fragment");F(this,"name");F(this,"args");F(this,"signature");F(this,"selector");F(this,"value");const r=t.name,a=t.format();Vt(this,{fragment:t,name:r,args:n,signature:a,selector:e,value:s})}}class ew{constructor(t,e,n){F(this,"fragment");F(this,"name");F(this,"args");F(this,"signature");F(this,"selector");const s=t.name,r=t.format();Vt(this,{fragment:t,name:s,args:n,signature:r,selector:e})}}class sh{constructor(t){F(this,"hash");F(this,"_isIndexed");Vt(this,{hash:t,_isIndexed:!0})}static isIndexed(t){return!!(t&&t._isIndexed)}}const rh={0:"generic panic",1:"assert(false)",17:"arithmetic overflow",18:"division or modulo by zero",33:"enum overflow",34:"invalid encoded storage byte array accessed",49:"out-of-bounds array access; popping on an empty array",50:"out-of-bounds access of an array or bytesN",65:"out of memory",81:"uninitialized function"},ah={"0x08c379a0":{signature:"Error(string)",name:"Error",inputs:["string"],reason:i=>`reverted with reason string ${JSON.stringify(i)}`},"0x4e487b71":{signature:"Panic(uint256)",name:"Panic",inputs:["uint256"],reason:i=>{let t="unknown panic code";return i>=0&&i<=255&&rh[i.toString()]&&(t=rh[i.toString()]),`reverted with panic code 0x${i.toString(16)} (${t})`}}};var Ln,In,Nn,De,Hn,Ma,Ea;const Zi=class Zi{constructor(t){ee(this,Hn);F(this,"fragments");F(this,"deploy");F(this,"fallback");F(this,"receive");ee(this,Ln);ee(this,In);ee(this,Nn);ee(this,De);let e=[];typeof t=="string"?e=JSON.parse(t):e=t,Zt(this,Nn,new Map),Zt(this,Ln,new Map),Zt(this,In,new Map);const n=[];for(const a of e)try{n.push(fs.from(a))}catch(o){console.log(`[Warning] Invalid Fragment ${JSON.stringify(a)}:`,o.message)}Vt(this,{fragments:Object.freeze(n)});let s=null,r=!1;Zt(this,De,this.getAbiCoder()),this.fragments.forEach((a,o)=>{let c;switch(a.type){case"constructor":if(this.deploy){console.log("duplicate definition - constructor");return}Vt(this,{deploy:a});return;case"fallback":a.inputs.length===0?r=!0:(it(!s||a.payable!==s.payable,"conflicting fallback fragments",`fragments[${o}]`,a),s=a,r=s.payable);return;case"function":c=O(this,Nn);break;case"event":c=O(this,In);break;case"error":c=O(this,Ln);break;default:return}const l=a.format();c.has(l)||c.set(l,a)}),this.deploy||Vt(this,{deploy:ai.from("constructor()")}),Vt(this,{fallback:s,receive:r})}format(t){const e=t?"minimal":"full";return this.fragments.map(s=>s.format(e))}formatJson(){const t=this.fragments.map(e=>e.format("json"));return JSON.stringify(t.map(e=>JSON.parse(e)))}getAbiCoder(){return Da.defaultAbiCoder()}getFunctionName(t){const e=Ot(this,Hn,Ma).call(this,t,null,!1);return it(e,"no matching function","key",t),e.name}hasFunction(t){return!!Ot(this,Hn,Ma).call(this,t,null,!1)}getFunction(t,e){return Ot(this,Hn,Ma).call(this,t,e||null,!0)}forEachFunction(t){const e=Array.from(O(this,Nn).keys());e.sort((n,s)=>n.localeCompare(s));for(let n=0;n<e.length;n++){const s=e[n];t(O(this,Nn).get(s),n)}}getEventName(t){const e=Ot(this,Hn,Ea).call(this,t,null,!1);return it(e,"no matching event","key",t),e.name}hasEvent(t){return!!Ot(this,Hn,Ea).call(this,t,null,!1)}getEvent(t,e){return Ot(this,Hn,Ea).call(this,t,e||null,!0)}forEachEvent(t){const e=Array.from(O(this,In).keys());e.sort((n,s)=>n.localeCompare(s));for(let n=0;n<e.length;n++){const s=e[n];t(O(this,In).get(s),n)}}getError(t,e){if(kn(t)){const s=t.toLowerCase();if(ah[s])return Je.from(ah[s].signature);for(const r of O(this,Ln).values())if(s===r.selector)return r;return null}if(t.indexOf("(")===-1){const s=[];for(const[r,a]of O(this,Ln))r.split("(")[0]===t&&s.push(a);if(s.length===0)return t==="Error"?Je.from("error Error(string)"):t==="Panic"?Je.from("error Panic(uint256)"):null;if(s.length>1){const r=s.map(a=>JSON.stringify(a.format())).join(", ");it(!1,`ambiguous error description (i.e. ${r})`,"name",t)}return s[0]}if(t=Je.from(t).format(),t==="Error(string)")return Je.from("error Error(string)");if(t==="Panic(uint256)")return Je.from("error Panic(uint256)");const n=O(this,Ln).get(t);return n||null}forEachError(t){const e=Array.from(O(this,Ln).keys());e.sort((n,s)=>n.localeCompare(s));for(let n=0;n<e.length;n++){const s=e[n];t(O(this,Ln).get(s),n)}}_decodeParams(t,e){return O(this,De).decode(t,e)}_encodeParams(t,e){return O(this,De).encode(t,e)}encodeDeploy(t){return this._encodeParams(this.deploy.inputs,t||[])}decodeErrorResult(t,e){if(typeof t=="string"){const n=this.getError(t);it(n,"unknown error","fragment",t),t=n}return it(Is(e,0,4)===t.selector,`data signature does not match error ${t.name}.`,"data",e),this._decodeParams(t.inputs,Is(e,4))}encodeErrorResult(t,e){if(typeof t=="string"){const n=this.getError(t);it(n,"unknown error","fragment",t),t=n}return qs([t.selector,this._encodeParams(t.inputs,e||[])])}decodeFunctionData(t,e){if(typeof t=="string"){const n=this.getFunction(t);it(n,"unknown function","fragment",t),t=n}return it(Is(e,0,4)===t.selector,`data signature does not match function ${t.name}.`,"data",e),this._decodeParams(t.inputs,Is(e,4))}encodeFunctionData(t,e){if(typeof t=="string"){const n=this.getFunction(t);it(n,"unknown function","fragment",t),t=n}return qs([t.selector,this._encodeParams(t.inputs,e||[])])}decodeFunctionResult(t,e){if(typeof t=="string"){const r=this.getFunction(t);it(r,"unknown function","fragment",t),t=r}let n="invalid length for result data";const s=Gn(e);if(s.length%32===0)try{return O(this,De).decode(t.outputs,s)}catch{n="could not decode result data"}bt(!1,n,"BAD_DATA",{value:ye(s),info:{method:t.name,signature:t.format()}})}makeError(t,e){const n=Tn(t,"data"),s=Da.getBuiltinCallException("call",e,n);if(s.message.startsWith("execution reverted (unknown custom error)")){const o=ye(n.slice(0,4)),c=this.getError(o);if(c)try{const l=O(this,De).decode(c.inputs,n.slice(4));s.revert={name:c.name,signature:c.format(),args:l},s.reason=s.revert.signature,s.message=`execution reverted: ${s.reason}`}catch{s.message="execution reverted (coult not decode custom error)"}}const a=this.parseTransaction(e);return a&&(s.invocation={method:a.name,signature:a.signature,args:a.args}),s}encodeFunctionResult(t,e){if(typeof t=="string"){const n=this.getFunction(t);it(n,"unknown function","fragment",t),t=n}return ye(O(this,De).encode(t.outputs,e||[]))}encodeFilterTopics(t,e){if(typeof t=="string"){const r=this.getEvent(t);it(r,"unknown event","eventFragment",t),t=r}bt(e.length<=t.inputs.length,`too many arguments for ${t.format()}`,"UNEXPECTED_ARGUMENT",{count:e.length,expectedCount:t.inputs.length});const n=[];t.anonymous||n.push(t.topicHash);const s=(r,a)=>r.type==="string"?Nr(a):r.type==="bytes"?Ii(ye(a)):(r.type==="bool"&&typeof a=="boolean"?a=a?"0x01":"0x00":r.type.match(/^u?int/)?a=ad(a):r.type.match(/^bytes/)?a=by(a,32):r.type==="address"&&O(this,De).encode(["address"],[a]),Ey(ye(a),32));for(e.forEach((r,a)=>{const o=t.inputs[a];if(!o.indexed){it(r==null,"cannot filter non-indexed parameters; must be null","contract."+o.name,r);return}r==null?n.push(null):o.baseType==="array"||o.baseType==="tuple"?it(!1,"filtering with tuples or arrays not supported","contract."+o.name,r):Array.isArray(r)?n.push(r.map(c=>s(o,c))):n.push(s(o,r))});n.length&&n[n.length-1]===null;)n.pop();return n}encodeEventLog(t,e){if(typeof t=="string"){const a=this.getEvent(t);it(a,"unknown event","eventFragment",t),t=a}const n=[],s=[],r=[];return t.anonymous||n.push(t.topicHash),it(e.length===t.inputs.length,"event arguments/values mismatch","values",e),t.inputs.forEach((a,o)=>{const c=e[o];if(a.indexed)if(a.type==="string")n.push(Nr(c));else if(a.type==="bytes")n.push(Ii(c));else{if(a.baseType==="tuple"||a.baseType==="array")throw new Error("not implemented");n.push(O(this,De).encode([a.type],[c]))}else s.push(a),r.push(c)}),{data:O(this,De).encode(s,r),topics:n}}decodeEventLog(t,e,n){if(typeof t=="string"){const m=this.getEvent(t);it(m,"unknown event","eventFragment",t),t=m}if(n!=null&&!t.anonymous){const m=t.topicHash;it(kn(n[0],32)&&n[0].toLowerCase()===m,"fragment/topic mismatch","topics[0]",n[0]),n=n.slice(1)}const s=[],r=[],a=[];t.inputs.forEach((m,g)=>{m.indexed?m.type==="string"||m.type==="bytes"||m.baseType==="tuple"||m.baseType==="array"?(s.push(Pe.from({type:"bytes32",name:m.name})),a.push(!0)):(s.push(m),a.push(!1)):(r.push(m),a.push(!1))});const o=n!=null?O(this,De).decode(s,qs(n)):null,c=O(this,De).decode(r,e,!0),l=[],u=[];let h=0,d=0;return t.inputs.forEach((m,g)=>{let v=null;if(m.indexed)if(o==null)v=new sh(null);else if(a[g])v=new sh(o[d++]);else try{v=o[d++]}catch(f){v=f}else try{v=c[h++]}catch(f){v=f}l.push(v),u.push(m.name||null)}),rr.fromItems(l,u)}parseTransaction(t){const e=Tn(t.data,"tx.data"),n=hi(t.value!=null?t.value:0,"tx.value"),s=this.getFunction(ye(e.slice(0,4)));if(!s)return null;const r=O(this,De).decode(s.inputs,e.slice(4));return new tw(s,s.selector,r,n)}parseCallResult(t){throw new Error("@TODO")}parseLog(t){const e=this.getEvent(t.topics[0]);return!e||e.anonymous?null:new Qx(e,e.topicHash,this.decodeEventLog(e,t.data,t.topics))}parseError(t){const e=ye(t),n=this.getError(Is(e,0,4));if(!n)return null;const s=O(this,De).decode(n.inputs,Is(e,4));return new ew(n,n.selector,s)}static from(t){return t instanceof Zi?t:typeof t=="string"?new Zi(JSON.parse(t)):typeof t.formatJson=="function"?new Zi(t.formatJson()):typeof t.format=="function"?new Zi(t.format("json")):new Zi(t)}};Ln=new WeakMap,In=new WeakMap,Nn=new WeakMap,De=new WeakMap,Hn=new WeakSet,Ma=function(t,e,n){if(kn(t)){const r=t.toLowerCase();for(const a of O(this,Nn).values())if(r===a.selector)return a;return null}if(t.indexOf("(")===-1){const r=[];for(const[a,o]of O(this,Nn))a.split("(")[0]===t&&r.push(o);if(e){const a=e.length>0?e[e.length-1]:null;let o=e.length,c=!0;Be.isTyped(a)&&a.type==="overrides"&&(c=!1,o--);for(let l=r.length-1;l>=0;l--){const u=r[l].inputs.length;u!==o&&(!c||u!==o-1)&&r.splice(l,1)}for(let l=r.length-1;l>=0;l--){const u=r[l].inputs;for(let h=0;h<e.length;h++)if(Be.isTyped(e[h])){if(h>=u.length){if(e[h].type==="overrides")continue;r.splice(l,1);break}if(e[h].type!==u[h].baseType){r.splice(l,1);break}}}}if(r.length===1&&e&&e.length!==r[0].inputs.length){const a=e[e.length-1];(a==null||Array.isArray(a)||typeof a!="object")&&r.splice(0,1)}if(r.length===0)return null;if(r.length>1&&n){const a=r.map(o=>JSON.stringify(o.format())).join(", ");it(!1,`ambiguous function description (i.e. matches ${a})`,"key",t)}return r[0]}const s=O(this,Nn).get(Bn.from(t).format());return s||null},Ea=function(t,e,n){if(kn(t)){const r=t.toLowerCase();for(const a of O(this,In).values())if(r===a.topicHash)return a;return null}if(t.indexOf("(")===-1){const r=[];for(const[a,o]of O(this,In))a.split("(")[0]===t&&r.push(o);if(e){for(let a=r.length-1;a>=0;a--)r[a].inputs.length<e.length&&r.splice(a,1);for(let a=r.length-1;a>=0;a--){const o=r[a].inputs;for(let c=0;c<e.length;c++)if(Be.isTyped(e[c])&&e[c].type!==o[c].baseType){r.splice(a,1);break}}}if(r.length===0)return null;if(r.length>1&&n){const a=r.map(o=>JSON.stringify(o.format())).join(", ");it(!1,`ambiguous event description (i.e. matches ${a})`,"key",t)}return r[0]}const s=O(this,In).get(Fn.from(t).format());return s||null};let xc=Zi;const Gd=BigInt(0);function Ys(i){return i??null}function xe(i){return i==null?null:i.toString()}class oS{constructor(t,e,n){F(this,"gasPrice");F(this,"maxFeePerGas");F(this,"maxPriorityFeePerGas");Vt(this,{gasPrice:Ys(t),maxFeePerGas:Ys(e),maxPriorityFeePerGas:Ys(n)})}toJSON(){const{gasPrice:t,maxFeePerGas:e,maxPriorityFeePerGas:n}=this;return{_type:"FeeData",gasPrice:xe(t),maxFeePerGas:xe(e),maxPriorityFeePerGas:xe(n)}}}function nw(i){const t={};i.to&&(t.to=i.to),i.from&&(t.from=i.from),i.data&&(t.data=ye(i.data));const e="chainId,gasLimit,gasPrice,maxFeePerBlobGas,maxFeePerGas,maxPriorityFeePerGas,value".split(/,/);for(const s of e)!(s in i)||i[s]==null||(t[s]=hi(i[s],`request.${s}`));const n="type,nonce".split(/,/);for(const s of n)!(s in i)||i[s]==null||(t[s]=Ze(i[s],`request.${s}`));return i.accessList&&(t.accessList=Fx(i.accessList)),i.authorizationList&&(t.authorizationList=i.authorizationList.slice()),"blockTag"in i&&(t.blockTag=i.blockTag),"enableCcipRead"in i&&(t.enableCcipRead=!!i.enableCcipRead),"customData"in i&&(t.customData=i.customData),"blobVersionedHashes"in i&&i.blobVersionedHashes&&(t.blobVersionedHashes=i.blobVersionedHashes.slice()),"kzg"in i&&(t.kzg=i.kzg),"blobWrapperVersion"in i&&(t.blobWrapperVersion=i.blobWrapperVersion),"blobs"in i&&i.blobs&&(t.blobs=i.blobs.map(s=>sd(s)?ye(s):Object.assign({},s))),t}var ii;class cS{constructor(t,e){F(this,"provider");F(this,"number");F(this,"hash");F(this,"timestamp");F(this,"parentHash");F(this,"parentBeaconBlockRoot");F(this,"nonce");F(this,"difficulty");F(this,"gasLimit");F(this,"gasUsed");F(this,"stateRoot");F(this,"receiptsRoot");F(this,"blobGasUsed");F(this,"excessBlobGas");F(this,"miner");F(this,"prevRandao");F(this,"extraData");F(this,"baseFeePerGas");ee(this,ii);Zt(this,ii,t.transactions.map(n=>typeof n!="string"?new Ua(n,e):n)),Vt(this,{provider:e,hash:Ys(t.hash),number:t.number,timestamp:t.timestamp,parentHash:t.parentHash,parentBeaconBlockRoot:t.parentBeaconBlockRoot,nonce:t.nonce,difficulty:t.difficulty,gasLimit:t.gasLimit,gasUsed:t.gasUsed,blobGasUsed:t.blobGasUsed,excessBlobGas:t.excessBlobGas,miner:t.miner,prevRandao:Ys(t.prevRandao),extraData:t.extraData,baseFeePerGas:Ys(t.baseFeePerGas),stateRoot:t.stateRoot,receiptsRoot:t.receiptsRoot})}get transactions(){return O(this,ii).map(t=>typeof t=="string"?t:t.hash)}get prefetchedTransactions(){const t=O(this,ii).slice();return t.length===0?[]:(bt(typeof t[0]=="object","transactions were not prefetched with block request","UNSUPPORTED_OPERATION",{operation:"transactionResponses()"}),t)}toJSON(){const{baseFeePerGas:t,difficulty:e,extraData:n,gasLimit:s,gasUsed:r,hash:a,miner:o,prevRandao:c,nonce:l,number:u,parentHash:h,parentBeaconBlockRoot:d,stateRoot:m,receiptsRoot:g,timestamp:v,transactions:f}=this;return{_type:"Block",baseFeePerGas:xe(t),difficulty:xe(e),extraData:n,gasLimit:xe(s),gasUsed:xe(r),blobGasUsed:xe(this.blobGasUsed),excessBlobGas:xe(this.excessBlobGas),hash:a,miner:o,prevRandao:c,nonce:l,number:u,parentHash:h,timestamp:v,parentBeaconBlockRoot:d,stateRoot:m,receiptsRoot:g,transactions:f}}[Symbol.iterator](){let t=0;const e=this.transactions;return{next:()=>t<this.length?{value:e[t++],done:!1}:{value:void 0,done:!0}}}get length(){return O(this,ii).length}get date(){return this.timestamp==null?null:new Date(this.timestamp*1e3)}async getTransaction(t){let e;if(typeof t=="number")e=O(this,ii)[t];else{const n=t.toLowerCase();for(const s of O(this,ii))if(typeof s=="string"){if(s!==n)continue;e=s;break}else{if(s.hash!==n)continue;e=s;break}}if(e==null)throw new Error("no such tx");return typeof e=="string"?await this.provider.getTransaction(e):e}getPrefetchedTransaction(t){const e=this.prefetchedTransactions;if(typeof t=="number")return e[t];t=t.toLowerCase();for(const n of e)if(n.hash===t)return n;it(!1,"no matching transaction","indexOrHash",t)}isMined(){return!!this.hash}isLondon(){return!!this.baseFeePerGas}orphanedEvent(){if(!this.isMined())throw new Error("");return sw(this)}}ii=new WeakMap;class Ja{constructor(t,e){F(this,"provider");F(this,"transactionHash");F(this,"blockHash");F(this,"blockNumber");F(this,"removed");F(this,"address");F(this,"data");F(this,"topics");F(this,"index");F(this,"transactionIndex");this.provider=e;const n=Object.freeze(t.topics.slice());Vt(this,{transactionHash:t.transactionHash,blockHash:t.blockHash,blockNumber:t.blockNumber,removed:t.removed,address:t.address,data:t.data,topics:n,index:t.index,transactionIndex:t.transactionIndex})}toJSON(){const{address:t,blockHash:e,blockNumber:n,data:s,index:r,removed:a,topics:o,transactionHash:c,transactionIndex:l}=this;return{_type:"log",address:t,blockHash:e,blockNumber:n,data:s,index:r,removed:a,topics:o,transactionHash:c,transactionIndex:l}}async getBlock(){const t=await this.provider.getBlock(this.blockHash);return bt(!!t,"failed to find transaction","UNKNOWN_ERROR",{}),t}async getTransaction(){const t=await this.provider.getTransaction(this.transactionHash);return bt(!!t,"failed to find transaction","UNKNOWN_ERROR",{}),t}async getTransactionReceipt(){const t=await this.provider.getTransactionReceipt(this.transactionHash);return bt(!!t,"failed to find transaction receipt","UNKNOWN_ERROR",{}),t}removedEvent(){return rw(this)}}var Or;class iw{constructor(t,e){F(this,"provider");F(this,"to");F(this,"from");F(this,"contractAddress");F(this,"hash");F(this,"index");F(this,"blockHash");F(this,"blockNumber");F(this,"logsBloom");F(this,"gasUsed");F(this,"blobGasUsed");F(this,"cumulativeGasUsed");F(this,"gasPrice");F(this,"blobGasPrice");F(this,"type");F(this,"status");F(this,"root");ee(this,Or);Zt(this,Or,Object.freeze(t.logs.map(s=>new Ja(s,e))));let n=Gd;t.effectiveGasPrice!=null?n=t.effectiveGasPrice:t.gasPrice!=null&&(n=t.gasPrice),Vt(this,{provider:e,to:t.to,from:t.from,contractAddress:t.contractAddress,hash:t.hash,index:t.index,blockHash:t.blockHash,blockNumber:t.blockNumber,logsBloom:t.logsBloom,gasUsed:t.gasUsed,cumulativeGasUsed:t.cumulativeGasUsed,blobGasUsed:t.blobGasUsed,gasPrice:n,blobGasPrice:t.blobGasPrice,type:t.type,status:t.status,root:t.root})}get logs(){return O(this,Or)}toJSON(){const{to:t,from:e,contractAddress:n,hash:s,index:r,blockHash:a,blockNumber:o,logsBloom:c,logs:l,status:u,root:h}=this;return{_type:"TransactionReceipt",blockHash:a,blockNumber:o,contractAddress:n,cumulativeGasUsed:xe(this.cumulativeGasUsed),from:e,gasPrice:xe(this.gasPrice),blobGasUsed:xe(this.blobGasUsed),blobGasPrice:xe(this.blobGasPrice),gasUsed:xe(this.gasUsed),hash:s,index:r,logs:l,logsBloom:c,root:h,status:u,to:t}}get length(){return this.logs.length}[Symbol.iterator](){let t=0;return{next:()=>t<this.length?{value:this.logs[t++],done:!1}:{value:void 0,done:!0}}}get fee(){return this.gasUsed*this.gasPrice}async getBlock(){const t=await this.provider.getBlock(this.blockHash);if(t==null)throw new Error("TODO");return t}async getTransaction(){const t=await this.provider.getTransaction(this.hash);if(t==null)throw new Error("TODO");return t}async getResult(){return await this.provider.getTransactionResult(this.hash)}async confirmations(){return await this.provider.getBlockNumber()-this.blockNumber+1}removedEvent(){return Vd(this)}reorderedEvent(t){return bt(!t||t.isMined(),"unmined 'other' transction cannot be orphaned","UNSUPPORTED_OPERATION",{operation:"reorderedEvent(other)"}),Hd(this,t)}}Or=new WeakMap;var Ti;const jc=class jc{constructor(t,e){F(this,"provider");F(this,"blockNumber");F(this,"blockHash");F(this,"index");F(this,"hash");F(this,"type");F(this,"to");F(this,"from");F(this,"nonce");F(this,"gasLimit");F(this,"gasPrice");F(this,"maxPriorityFeePerGas");F(this,"maxFeePerGas");F(this,"maxFeePerBlobGas");F(this,"data");F(this,"value");F(this,"chainId");F(this,"signature");F(this,"accessList");F(this,"blobVersionedHashes");F(this,"authorizationList");ee(this,Ti);this.provider=e,this.blockNumber=t.blockNumber!=null?t.blockNumber:null,this.blockHash=t.blockHash!=null?t.blockHash:null,this.hash=t.hash,this.index=t.index,this.type=t.type,this.from=t.from,this.to=t.to||null,this.gasLimit=t.gasLimit,this.nonce=t.nonce,this.data=t.data,this.value=t.value,this.gasPrice=t.gasPrice,this.maxPriorityFeePerGas=t.maxPriorityFeePerGas!=null?t.maxPriorityFeePerGas:null,this.maxFeePerGas=t.maxFeePerGas!=null?t.maxFeePerGas:null,this.maxFeePerBlobGas=t.maxFeePerBlobGas!=null?t.maxFeePerBlobGas:null,this.chainId=t.chainId,this.signature=t.signature,this.accessList=t.accessList!=null?t.accessList:null,this.blobVersionedHashes=t.blobVersionedHashes!=null?t.blobVersionedHashes:null,this.authorizationList=t.authorizationList!=null?t.authorizationList:null,Zt(this,Ti,-1)}toJSON(){const{blockNumber:t,blockHash:e,index:n,hash:s,type:r,to:a,from:o,nonce:c,data:l,signature:u,accessList:h,blobVersionedHashes:d}=this;return{_type:"TransactionResponse",accessList:h,blockNumber:t,blockHash:e,blobVersionedHashes:d,chainId:xe(this.chainId),data:l,from:o,gasLimit:xe(this.gasLimit),gasPrice:xe(this.gasPrice),hash:s,maxFeePerGas:xe(this.maxFeePerGas),maxPriorityFeePerGas:xe(this.maxPriorityFeePerGas),maxFeePerBlobGas:xe(this.maxFeePerBlobGas),nonce:c,signature:u,to:a,index:n,type:r,value:xe(this.value)}}async getBlock(){let t=this.blockNumber;if(t==null){const n=await this.getTransaction();n&&(t=n.blockNumber)}if(t==null)return null;const e=this.provider.getBlock(t);if(e==null)throw new Error("TODO");return e}async getTransaction(){return this.provider.getTransaction(this.hash)}async confirmations(){if(this.blockNumber==null){const{tx:e,blockNumber:n}=await cc({tx:this.getTransaction(),blockNumber:this.provider.getBlockNumber()});return e==null||e.blockNumber==null?0:n-e.blockNumber+1}return await this.provider.getBlockNumber()-this.blockNumber+1}async wait(t,e){const n=t??1,s=e??0;let r=O(this,Ti),a=-1,o=r===-1;const c=async()=>{if(o)return null;const{blockNumber:d,nonce:m}=await cc({blockNumber:this.provider.getBlockNumber(),nonce:this.provider.getTransactionCount(this.from)});if(m<this.nonce){r=d;return}if(o)return null;const g=await this.getTransaction();if(!(g&&g.blockNumber!=null))for(a===-1&&(a=r-3,a<O(this,Ti)&&(a=O(this,Ti)));a<=d;){if(o)return null;const v=await this.provider.getBlock(a,!0);if(v==null)return;for(const f of v)if(f===this.hash)return;for(let f=0;f<v.length;f++){const p=await v.getTransaction(f);if(p.from===this.from&&p.nonce===this.nonce){if(o)return null;const w=await this.provider.getTransactionReceipt(p.hash);if(w==null||d-w.blockNumber+1<n)return;let _="replaced";p.data===this.data&&p.to===this.to&&p.value===this.value?_="repriced":p.data==="0x"&&p.from===p.to&&p.value===Gd&&(_="cancelled"),bt(!1,"transaction was replaced","TRANSACTION_REPLACED",{cancelled:_==="replaced"||_==="cancelled",reason:_,replacement:p.replaceableTransaction(r),hash:p.hash,receipt:w})}}a++}},l=d=>{if(d==null||d.status!==0)return d;bt(!1,"transaction execution reverted","CALL_EXCEPTION",{action:"sendTransaction",data:null,reason:null,invocation:null,revert:null,transaction:{to:d.to,from:d.from,data:""},receipt:d})},u=await this.provider.getTransactionReceipt(this.hash);if(n===0)return l(u);if(u){if(n===1||await u.confirmations()>=n)return l(u)}else if(await c(),n===0)return null;return await new Promise((d,m)=>{const g=[],v=()=>{g.forEach(p=>p())};if(g.push(()=>{o=!0}),s>0){const p=setTimeout(()=>{v(),m(Lr("wait for transaction timeout","TIMEOUT"))},s);g.push(()=>{clearTimeout(p)})}const f=async p=>{if(await p.confirmations()>=n){v();try{d(l(p))}catch(w){m(w)}}};if(g.push(()=>{this.provider.off(this.hash,f)}),this.provider.on(this.hash,f),r>=0){const p=async()=>{try{await c()}catch(w){if(sr(w,"TRANSACTION_REPLACED")){v(),m(w);return}}o||this.provider.once("block",p)};g.push(()=>{this.provider.off("block",p)}),this.provider.once("block",p)}})}isMined(){return this.blockHash!=null}isLegacy(){return this.type===0}isBerlin(){return this.type===1}isLondon(){return this.type===2}isCancun(){return this.type===3}removedEvent(){return bt(this.isMined(),"unmined transaction canot be orphaned","UNSUPPORTED_OPERATION",{operation:"removeEvent()"}),Vd(this)}reorderedEvent(t){return bt(this.isMined(),"unmined transaction canot be orphaned","UNSUPPORTED_OPERATION",{operation:"removeEvent()"}),bt(!t||t.isMined(),"unmined 'other' transaction canot be orphaned","UNSUPPORTED_OPERATION",{operation:"removeEvent()"}),Hd(this,t)}replaceableTransaction(t){it(Number.isInteger(t)&&t>=0,"invalid startBlock","startBlock",t);const e=new jc(this,this.provider);return Zt(e,Ti,t),e}};Ti=new WeakMap;let Ua=jc;function sw(i){return{orphan:"drop-block",hash:i.hash,number:i.number}}function Hd(i,t){return{orphan:"reorder-transaction",tx:i,other:t}}function Vd(i){return{orphan:"drop-transaction",tx:i}}function rw(i){return{orphan:"drop-log",log:{transactionHash:i.transactionHash,blockHash:i.blockHash,blockNumber:i.blockNumber,address:i.address,data:i.data,topics:Object.freeze(i.topics.slice()),index:i.index}}}class $c extends Ja{constructor(e,n,s){super(e,e.provider);F(this,"interface");F(this,"fragment");F(this,"args");const r=n.decodeEventLog(s,e.data,e.topics);Vt(this,{args:r,fragment:s,interface:n})}get eventName(){return this.fragment.name}get eventSignature(){return this.fragment.format()}}class Wd extends Ja{constructor(e,n){super(e,e.provider);F(this,"error");Vt(this,{error:n})}}var Qs;class aw extends iw{constructor(e,n,s){super(s,n);ee(this,Qs);Zt(this,Qs,e)}get logs(){return super.logs.map(e=>{const n=e.topics.length?O(this,Qs).getEvent(e.topics[0]):null;if(n)try{return new $c(e,O(this,Qs),n)}catch(s){return new Wd(e,s)}return e})}}Qs=new WeakMap;var Fr;class Yc extends Ua{constructor(e,n,s){super(s,n);ee(this,Fr);Zt(this,Fr,e)}async wait(e,n){const s=await super.wait(e,n);return s==null?null:new aw(O(this,Fr),this.provider,s)}}Fr=new WeakMap;class Xd extends Cy{constructor(e,n,s,r){super(e,n,s);F(this,"log");Vt(this,{log:r})}async getBlock(){return await this.log.getBlock()}async getTransaction(){return await this.log.getTransaction()}async getTransactionReceipt(){return await this.log.getTransactionReceipt()}}class ow extends Xd{constructor(t,e,n,s,r){super(t,e,n,new $c(r,t.interface,s));const a=t.interface.decodeEventLog(s,this.log.data,this.log.topics);Vt(this,{args:a,fragment:s})}get eventName(){return this.fragment.name}get eventSignature(){return this.fragment.format()}}const oh=BigInt(0);function qd(i){return i&&typeof i.call=="function"}function $d(i){return i&&typeof i.estimateGas=="function"}function Za(i){return i&&typeof i.resolveName=="function"}function Yd(i){return i&&typeof i.sendTransaction=="function"}function Kd(i){if(i!=null){if(Za(i))return i;if(i.provider)return i.provider}}var Br;class cw{constructor(t,e,n){ee(this,Br);F(this,"fragment");if(Vt(this,{fragment:e}),e.inputs.length<n.length)throw new Error("too many arguments");const s=ps(t.runner,"resolveName"),r=Za(s)?s:null;Zt(this,Br,async function(){const a=await Promise.all(e.inputs.map((o,c)=>n[c]==null?null:o.walkAsync(n[c],(u,h)=>u==="address"?Array.isArray(h)?Promise.all(h.map(d=>Ir(d,r))):Ir(h,r):h)));return t.interface.encodeFilterTopics(e,a)}())}getTopicFilter(){return O(this,Br)}}Br=new WeakMap;function ps(i,t){return i==null?null:typeof i[t]=="function"?i:i.provider&&typeof i.provider[t]=="function"?i.provider:null}function Qi(i){return i==null?null:i.provider||null}async function Jd(i,t){const e=Be.dereference(i,"overrides");it(typeof e=="object","invalid overrides parameter","overrides",i);const n=nw(e);return it(n.to==null||(t||[]).indexOf("to")>=0,"cannot override to","overrides.to",n.to),it(n.data==null||(t||[]).indexOf("data")>=0,"cannot override data","overrides.data",n.data),n.from&&(n.from=n.from),n}async function lw(i,t,e){const n=ps(i,"resolveName"),s=Za(n)?n:null;return await Promise.all(t.map((r,a)=>r.walkAsync(e[a],(o,c)=>(c=Be.dereference(c,o),o==="address"?Ir(c,s):c))))}function uw(i){const t=async function(a){const o=await Jd(a,["data"]);o.to=await i.getAddress(),o.from&&(o.from=await Ir(o.from,Kd(i.runner)));const c=i.interface,l=hi(o.value||oh,"overrides.value")===oh,u=(o.data||"0x")==="0x";c.fallback&&!c.fallback.payable&&c.receive&&!u&&!l&&it(!1,"cannot send data to receive or send value to non-payable fallback","overrides",a),it(c.fallback||u,"cannot send data to receive-only contract","overrides.data",o.data);const h=c.receive||c.fallback&&c.fallback.payable;return it(h||l,"cannot send value to non-payable fallback","overrides.value",o.value),it(c.fallback||u,"cannot send data to receive-only contract","overrides.data",o.data),o},e=async function(a){const o=ps(i.runner,"call");bt(qd(o),"contract runner does not support calling","UNSUPPORTED_OPERATION",{operation:"call"});const c=await t(a);try{return await o.call(c)}catch(l){throw ed(l)&&l.data?i.interface.makeError(l.data,c):l}},n=async function(a){const o=i.runner;bt(Yd(o),"contract runner does not support sending transactions","UNSUPPORTED_OPERATION",{operation:"sendTransaction"});const c=await o.sendTransaction(await t(a)),l=Qi(i.runner);return new Yc(i.interface,l,c)},s=async function(a){const o=ps(i.runner,"estimateGas");return bt($d(o),"contract runner does not support gas estimation","UNSUPPORTED_OPERATION",{operation:"estimateGas"}),await o.estimateGas(await t(a))},r=async a=>await n(a);return Vt(r,{_contract:i,estimateGas:s,populateTransaction:t,send:n,staticCall:e}),r}function hw(i,t){const e=function(...l){const u=i.interface.getFunction(t,l);return bt(u,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t,args:l}}),u},n=async function(...l){const u=e(...l);let h={};if(u.inputs.length+1===l.length&&(h=await Jd(l.pop()),h.from&&(h.from=await Ir(h.from,Kd(i.runner)))),u.inputs.length!==l.length)throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");const d=await lw(i.runner,u.inputs,l);return Object.assign({},h,await cc({to:i.getAddress(),data:i.interface.encodeFunctionData(u,d)}))},s=async function(...l){const u=await o(...l);return u.length===1?u[0]:u},r=async function(...l){const u=i.runner;bt(Yd(u),"contract runner does not support sending transactions","UNSUPPORTED_OPERATION",{operation:"sendTransaction"});const h=await u.sendTransaction(await n(...l)),d=Qi(i.runner);return new Yc(i.interface,d,h)},a=async function(...l){const u=ps(i.runner,"estimateGas");return bt($d(u),"contract runner does not support gas estimation","UNSUPPORTED_OPERATION",{operation:"estimateGas"}),await u.estimateGas(await n(...l))},o=async function(...l){const u=ps(i.runner,"call");bt(qd(u),"contract runner does not support calling","UNSUPPORTED_OPERATION",{operation:"call"});const h=await n(...l);let d="0x";try{d=await u.call(h)}catch(g){throw ed(g)&&g.data?i.interface.makeError(g.data,h):g}const m=e(...l);return i.interface.decodeFunctionResult(m,d)},c=async(...l)=>e(...l).constant?await s(...l):await r(...l);return Vt(c,{name:i.interface.getFunctionName(t),_contract:i,_key:t,getFragment:e,estimateGas:a,populateTransaction:n,send:r,staticCall:s,staticCallResult:o}),Object.defineProperty(c,"fragment",{configurable:!1,enumerable:!0,get:()=>{const l=i.interface.getFunction(t);return bt(l,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t}}),l}}),c}function dw(i,t){const e=function(...s){const r=i.interface.getEvent(t,s);return bt(r,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t,args:s}}),r},n=function(...s){return new cw(i,e(...s),s)};return Vt(n,{name:i.interface.getEventName(t),_contract:i,_key:t,getFragment:e}),Object.defineProperty(n,"fragment",{configurable:!1,enumerable:!0,get:()=>{const s=i.interface.getEvent(t);return bt(s,"no matching fragment","UNSUPPORTED_OPERATION",{operation:"fragment",info:{key:t}}),s}}),n}const Oa=Symbol.for("_ethersInternal_contract"),Zd=new WeakMap;function fw(i,t){Zd.set(i[Oa],t)}function sn(i){return Zd.get(i[Oa])}function pw(i){return i&&typeof i=="object"&&"getTopicFilter"in i&&typeof i.getTopicFilter=="function"&&i.fragment}async function Kc(i,t){let e,n=null;if(Array.isArray(t)){const r=function(a){if(kn(a,32))return a;const o=i.interface.getEvent(a);return it(o,"unknown fragment","name",a),o.topicHash};e=t.map(a=>a==null?null:Array.isArray(a)?a.map(r):r(a))}else t==="*"?e=[null]:typeof t=="string"?kn(t,32)?e=[t]:(n=i.interface.getEvent(t),it(n,"unknown fragment","event",t),e=[n.topicHash]):pw(t)?e=await t.getTopicFilter():"fragment"in t?(n=t.fragment,e=[n.topicHash]):it(!1,"unknown event name","event",t);e=e.map(r=>{if(r==null)return null;if(Array.isArray(r)){const a=Array.from(new Set(r.map(o=>o.toLowerCase())).values());return a.length===1?a[0]:(a.sort(),a)}return r.toLowerCase()});const s=e.map(r=>r==null?"null":Array.isArray(r)?r.join("|"):r).join("&");return{fragment:n,tag:s,topics:e}}async function wr(i,t){const{subs:e}=sn(i);return e.get((await Kc(i,t)).tag)||null}async function ch(i,t,e){const n=Qi(i.runner);bt(n,"contract runner does not support subscribing","UNSUPPORTED_OPERATION",{operation:t});const{fragment:s,tag:r,topics:a}=await Kc(i,e),{addr:o,subs:c}=sn(i);let l=c.get(r);if(!l){const h={address:o||i,topics:a},d=f=>{let p=s;if(p==null)try{p=i.interface.getEvent(f.topics[0])}catch{}if(p){const w=p,_=s?i.interface.decodeEventLog(s,f.data,f.topics):[];Sc(i,e,_,S=>new ow(i,S,e,w,f))}else Sc(i,e,[],w=>new Xd(i,w,e,f))};let m=[];l={tag:r,listeners:[],start:()=>{m.length||m.push(n.on(h,d))},stop:async()=>{if(m.length==0)return;let f=m;m=[],await Promise.all(f),n.off(h,d)}},c.set(r,l)}return l}let wc=Promise.resolve();async function mw(i,t,e,n){await wc;const s=await wr(i,t);if(!s)return!1;const r=s.listeners.length;return s.listeners=s.listeners.filter(({listener:a,once:o})=>{const c=Array.from(e);n&&c.push(n(o?null:a));try{a.call(i,...c)}catch{}return!o}),s.listeners.length===0&&(s.stop(),sn(i).subs.delete(s.tag)),r>0}async function Sc(i,t,e,n){try{await wc}catch{}const s=mw(i,t,e,n);return wc=s,await s}const va=["then"];var uh;uh=Oa;const Tr=class Tr{constructor(t,e,n,s){F(this,"target");F(this,"interface");F(this,"runner");F(this,"filters");F(this,uh);F(this,"fallback");it(typeof t=="string"||Rd(t),"invalid value for Contract target","target",t),n==null&&(n=null);const r=xc.from(e);Vt(this,{target:t,runner:n,interface:r}),Object.defineProperty(this,Oa,{value:{}});let a,o=null,c=null;if(s){const h=Qi(n);c=new Yc(this.interface,h,s)}let l=new Map;if(typeof t=="string")if(kn(t))o=t,a=Promise.resolve(t);else{const h=ps(n,"resolveName");if(!Za(h))throw Lr("contract runner does not support name resolution","UNSUPPORTED_OPERATION",{operation:"resolveName"});a=h.resolveName(t).then(d=>{if(d==null)throw Lr("an ENS name used for a contract target must be correctly configured","UNCONFIGURED_NAME",{value:t});return sn(this).addr=d,d})}else a=t.getAddress().then(h=>{if(h==null)throw new Error("TODO");return sn(this).addr=h,h});fw(this,{addrPromise:a,addr:o,deployTx:c,subs:l});const u=new Proxy({},{get:(h,d,m)=>{if(typeof d=="symbol"||va.indexOf(d)>=0)return Reflect.get(h,d,m);try{return this.getEvent(d)}catch(g){if(!sr(g,"INVALID_ARGUMENT")||g.argument!=="key")throw g}},has:(h,d)=>va.indexOf(d)>=0?Reflect.has(h,d):Reflect.has(h,d)||this.interface.hasEvent(String(d))});return Vt(this,{filters:u}),Vt(this,{fallback:r.receive||r.fallback?uw(this):null}),new Proxy(this,{get:(h,d,m)=>{if(typeof d=="symbol"||d in h||va.indexOf(d)>=0)return Reflect.get(h,d,m);try{return h.getFunction(d)}catch(g){if(!sr(g,"INVALID_ARGUMENT")||g.argument!=="key")throw g}},has:(h,d)=>typeof d=="symbol"||d in h||va.indexOf(d)>=0?Reflect.has(h,d):h.interface.hasFunction(d)})}connect(t){return new Tr(this.target,this.interface,t)}attach(t){return new Tr(t,this.interface,this.runner)}async getAddress(){return await sn(this).addrPromise}async getDeployedCode(){const t=Qi(this.runner);bt(t,"runner does not support .provider","UNSUPPORTED_OPERATION",{operation:"getDeployedCode"});const e=await t.getCode(await this.getAddress());return e==="0x"?null:e}async waitForDeployment(){const t=this.deploymentTransaction();if(t)return await t.wait(),this;if(await this.getDeployedCode()!=null)return this;const n=Qi(this.runner);return bt(n!=null,"contract runner does not support .provider","UNSUPPORTED_OPERATION",{operation:"waitForDeployment"}),new Promise((s,r)=>{const a=async()=>{try{if(await this.getDeployedCode()!=null)return s(this);n.once("block",a)}catch(o){r(o)}};a()})}deploymentTransaction(){return sn(this).deployTx}getFunction(t){return typeof t!="string"&&(t=t.format()),hw(this,t)}getEvent(t){return typeof t!="string"&&(t=t.format()),dw(this,t)}async queryTransaction(t){throw new Error("@TODO")}async queryFilter(t,e,n){e==null&&(e=0),n==null&&(n="latest");const{addr:s,addrPromise:r}=sn(this),a=s||await r,{fragment:o,topics:c}=await Kc(this,t),l={address:a,topics:c,fromBlock:e,toBlock:n},u=Qi(this.runner);return bt(u,"contract runner does not have a provider","UNSUPPORTED_OPERATION",{operation:"queryFilter"}),(await u.getLogs(l)).map(h=>{let d=o;if(d==null)try{d=this.interface.getEvent(h.topics[0])}catch{}if(d)try{return new $c(h,this.interface,d)}catch(m){return new Wd(h,m)}return new Ja(h,u)})}async on(t,e){const n=await ch(this,"on",t);return n.listeners.push({listener:e,once:!1}),n.start(),this}async once(t,e){const n=await ch(this,"once",t);return n.listeners.push({listener:e,once:!0}),n.start(),this}async emit(t,...e){return await Sc(this,t,e,null)}async listenerCount(t){if(t){const s=await wr(this,t);return s?s.listeners.length:0}const{subs:e}=sn(this);let n=0;for(const{listeners:s}of e.values())n+=s.length;return n}async listeners(t){if(t){const s=await wr(this,t);return s?s.listeners.map(({listener:r})=>r):[]}const{subs:e}=sn(this);let n=[];for(const{listeners:s}of e.values())n=n.concat(s.map(({listener:r})=>r));return n}async off(t,e){const n=await wr(this,t);if(!n)return this;if(e){const s=n.listeners.map(({listener:r})=>r).indexOf(e);s>=0&&n.listeners.splice(s,1)}return(e==null||n.listeners.length===0)&&(n.stop(),sn(this).subs.delete(n.tag)),this}async removeAllListeners(t){if(t){const e=await wr(this,t);if(!e)return this;e.stop(),sn(this).subs.delete(e.tag)}else{const{subs:e}=sn(this);for(const{tag:n,stop:s}of e.values())s(),e.delete(n)}return this}async addListener(t,e){return await this.on(t,e)}async removeListener(t,e){return await this.off(t,e)}static buildClass(t){class e extends Tr{constructor(s,r=null){super(s,t,r)}}return e}static from(t,e,n){return n==null&&(n=null),new this(t,e,n)}};let Mc=Tr;function gw(){return Mc}class Sr extends gw(){}class _w{constructor(t){this.wallet=t,this.contractAddress="0xc6F3842FcCd9d22FFAB3d609d28430E900cFb82a",this.contractABI=["function mintNFT(address to, string memory tokenURI) public returns (uint256)","function totalSupply() public view returns (uint256)","function ownerOf(uint256 tokenId) public view returns (address)","function tokenURI(uint256 tokenId) public view returns (string)"],this.pinataApiKey="fb513b01ab21e3d34114",this.pinataSecretKey="0b57e7ec0d620cd29733c3ba5a3e5275128324c74039618816ea049a0f17b823",this.pinataEndpoint="https://api.pinata.cloud/pinning/pinJSONToIPFS"}configurePinata(t,e){this.pinataApiKey=t,this.pinataSecretKey=e}setContractAddress(t){this.contractAddress=t}generateMetadata(t,e){const n=t.attributes?[...t.attributes]:[{trait_type:"Rarity",value:t.rarity},{trait_type:"Type",value:t.type}];return n.push({trait_type:"Minted By",value:e}),n.push({trait_type:"Minted At",value:new Date().toISOString()}),{name:t.name,description:t.description,image:this._getGearImage(t.type),attributes:n,external_url:"https://boss-hunter-rpg.game"}}_getGearImage(t){return{armor:"ipfs://placeholder-armor-image",boots:"ipfs://placeholder-boots-image","legendary-sword":"ipfs://placeholder-sword-image"}[t]||"ipfs://placeholder-default"}async uploadToIPFS(t){if(!this.pinataApiKey||!this.pinataSecretKey)return console.warn("Pinata not configured — using mock IPFS URI"),`ipfs://${"Qm"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}`;try{const e=await fetch(this.pinataEndpoint,{method:"POST",headers:{"Content-Type":"application/json",pinata_api_key:this.pinataApiKey,pinata_secret_api_key:this.pinataSecretKey},body:JSON.stringify({pinataContent:t,pinataMetadata:{name:t.name}})});if(!e.ok)throw new Error(`Pinata upload failed: ${e.statusText}`);return`ipfs://${(await e.json()).IpfsHash}`}catch(e){throw console.error("IPFS upload error:",e),e}}async mint(t){var r,a,o;if(!this.wallet.isConnected)throw new Error("Wallet not connected");const e=this.wallet.getAccount(),n=this.generateMetadata(t,e);console.log("NFT Metadata:",n);const s=await this.uploadToIPFS(n);if(console.log("Token URI:",s),!this.contractAddress)return console.warn("Contract not deployed — simulating mint"),await new Promise(c=>setTimeout(c,2e3)),{success:!0,tokenURI:s,txHash:"0x"+Math.random().toString(16).substring(2,66),tokenId:Math.floor(Math.random()*1e3),simulated:!0};try{const u=await(await new Sr(this.contractAddress,this.contractABI,this.wallet.getSigner()).mintNFT(e,s)).wait();return{success:!0,tokenURI:s,txHash:u.hash,tokenId:(o=(a=(r=u.logs)==null?void 0:r[0])==null?void 0:a.topics)!=null&&o[3]?parseInt(u.logs[0].topics[3],16):null,simulated:!1}}catch(c){throw console.error("Mint error:",c),c}}}class vw{constructor(t){this.wallet=t,this.marketplaceAddress="0x71442ECaf669abA904ecEed979cb3f03694bA49b",this.marketplaceABI=["function listItem(address nftContract, uint256 tokenId, uint256 price) external","function listItemPersonal(address nftContract, uint256 tokenId, uint256 price) external","function listItemForCharity(address nftContract, uint256 tokenId, uint256 price, address charityBeneficiary) external","function cancelListing(address nftContract, uint256 tokenId) external","function buyItem(address nftContract, uint256 tokenId) external payable","function listings(address nftContract, uint256 tokenId) view returns (uint256 price, address seller, bool isPersonalSale, address charityBeneficiary)","event ItemListed(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller)","event ItemListedForCharity(address indexed nftContract, uint256 indexed tokenId, uint256 price, address indexed seller, address charityBeneficiary)"],this.erc721ABI=["function setApprovalForAll(address operator, bool approved) external","function isApprovedForAll(address owner, address operator) view returns (bool)","function approve(address to, uint256 tokenId) external","function getApproved(uint256 tokenId) view returns (address)"]}async approveMarketplace(t){if(!this.wallet.isConnected)throw new Error("Wallet not connected");const e=this.wallet.getSigner(),n=new Sr(t,this.erc721ABI,e);return await n.isApprovedForAll(this.wallet.getAccount(),this.marketplaceAddress)?!1:(console.log("Approving Marketplace..."),await(await n.setApprovalForAll(this.marketplaceAddress,!0)).wait(),console.log("Marketplace approved"),!0)}async listItemPersonal(t,e,n){if(!this.wallet.isConnected)throw new Error("Wallet not connected");if(e!==0&&!e)throw new Error("Invalid Token ID");if(e>9e4)return await new Promise(c=>setTimeout(c,1500)),{simulated:!0};await this.approveMarketplace(t);const s=Vo(n.toString()),r=this.wallet.getSigner();return(await new Sr(this.marketplaceAddress,this.marketplaceABI,r).listItemPersonal(t,e,s)).wait()}async listItemForCharity(t,e,n,s){if(!this.wallet.isConnected)throw new Error("Wallet not connected");if(e!==0&&!e)throw new Error("Invalid Token ID");if(!s)throw new Error("Charity wallet address required");if(e>9e4)return await new Promise(l=>setTimeout(l,1500)),{simulated:!0};await this.approveMarketplace(t);const r=Vo(n.toString()),a=this.wallet.getSigner();return(await new Sr(this.marketplaceAddress,this.marketplaceABI,a).listItemForCharity(t,e,r,s)).wait()}async listForCharity(t,e,n){if(!this.wallet.isConnected)throw new Error("Wallet not connected");if(e!==0&&!e)throw new Error("Invalid Token ID. Has this been minted?");if(e>9e4)return await new Promise(l=>setTimeout(l,1500)),{simulated:!0,txHash:"0xSIMULATED_LISTING_HASH"};const s=Vo(n.toString()),r=this.wallet.getSigner();return await(await new Sr(this.marketplaceAddress,this.marketplaceABI,r).listItem(t,e,s)).wait()}}const yw="https://api.pinata.cloud/pinning/pinJSONToIPFS",xw="https://gateway.pinata.cloud/ipfs/";let Fa="fb513b01ab21e3d34114",Ba="0b57e7ec0d620cd29733c3ba5a3e5275128324c74039618816ea049a0f17b823";function jd(i,t){i&&(Fa=i),t&&(Ba=t)}function un(){return!!(Fa&&Ba)}async function Ae(i){if(!Fa||!Ba)throw new Error("Pinata API keys not set. Configure in app or leave guild/charity storage disabled.");const t=await fetch(yw,{method:"POST",headers:{"Content-Type":"application/json",pinata_api_key:Fa,pinata_secret_api_key:Ba},body:JSON.stringify(i)});if(!t.ok){const n=await t.text();throw new Error(`Pinata pin failed: ${n}`)}return(await t.json()).IpfsHash}async function lr(i){const t=i.startsWith("http")?i:`${xw}${i}`,e=await fetch(t);if(!e.ok)throw new Error(`IPFS fetch failed: ${e.status}`);return e.json()}const Qd=Object.freeze(Object.defineProperty({__proto__:null,fetchFromIPFS:lr,hasApiKeys:un,pinJSON:Ae,setApiKeys:jd},Symbol.toStringTag,{value:"Module"})),Ec="boss-rpg-charities-cid";function Jc(){try{return localStorage.getItem(Ec)||null}catch{return null}}function tf(i){try{i?localStorage.setItem(Ec,i):localStorage.removeItem(Ec)}catch{}}const ts=[{charityName:"Save The Dragons",description:"Helping displaced dragons find new caves and rebuild their hoards.",mission:"Provide safe habitats and gold hoards",website:"https://savethedragons.example",walletAddress:"0x70997970C51812dc3A010C7d01b50e0d17dc79C8",contactInfo:"contact@savethedragons.example",registeredAt:Date.now()},{charityName:"Forest Restorers",description:"Replanting magical forests destroyed by adventurers and bosses alike.",mission:"A tree for every potion",website:"https://forestrestorers.example",walletAddress:"0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",contactInfo:"contact@forests.example",registeredAt:Date.now()}];async function bc(){if(!un())return ts;const i=Jc();if(!i)return ts;try{const t=await lr(i);return Array.isArray(t.list)&&t.list.length>0?t.list:ts}catch{return ts}}async function ww(i){if(!un())throw new Error("Pinata keys not set");const{charityName:t,description:e,mission:n,website:s,walletAddress:r,contactInfo:a,registeredByWallet:o}=i;if(!t||!r)throw new Error("Charity name and wallet address required");let c=[];const l=Jc();if(l)try{const d=await lr(l);c=Array.isArray(d.list)?d.list:[...ts]}catch{c=[...ts]}else c=[...ts];if(c.find(d=>(d.walletAddress||"").toLowerCase()===r.toLowerCase()))throw new Error("This wallet is already registered as a charity");c.push({charityName:String(t).trim().slice(0,200),description:String(e||"").trim().slice(0,1e3),mission:String(n||"").trim().slice(0,500),website:String(s||"").trim().slice(0,200),walletAddress:r.toLowerCase(),contactInfo:String(a||"").trim().slice(0,300),registeredAt:Date.now(),registeredByWallet:(o||r).toLowerCase()});const h=await Ae({list:c});return tf(h),c[c.length-1]}function Sw(i,t){if(!t||!t.trim())return i;const e=t.trim().toLowerCase();return i.filter(n=>(n.charityName||"").toLowerCase().includes(e)||(n.mission||"").toLowerCase().includes(e)||(n.description||"").toLowerCase().includes(e))}async function Mw(i,t){if(!un())throw new Error("Pinata keys not set");const e=(t||"").toLowerCase();let n=[];const s=Jc();if(!s)throw new Error("No charities found");const r=await lr(s);n=Array.isArray(r.list)?r.list:[];const a=n.find(l=>(l.walletAddress||"").toLowerCase()===(i||"").toLowerCase());if(!a)throw new Error("Charity not found");if((a.registeredByWallet||a.walletAddress||"").toLowerCase()!==e)throw new Error("Only the charity creator can delete this charity");n=n.filter(l=>(l.walletAddress||"").toLowerCase()!==(i||"").toLowerCase());const c=n.length>0?await Ae({list:n}):null;tf(c)}class Ew{constructor(t,e){this.market=t,this.wallet=e,this.panel=document.getElementById("market-panel"),this.closeBtn=document.getElementById("close-market-btn"),this.itemsList=document.getElementById("market-items-list"),this.statusEl=document.getElementById("market-status");const n=document.querySelectorAll(".market-tab");n.forEach(s=>{s.addEventListener("click",()=>{n.forEach(o=>o.classList.remove("active")),s.classList.add("active");const r=s.getAttribute("data-tab");document.querySelectorAll(".tab-pane").forEach(o=>o.classList.add("hidden"));const a=document.getElementById("tab-"+r);a&&a.classList.remove("hidden")})}),this.closeBtn&&this.closeBtn.addEventListener("click",()=>this.hide()),document.querySelectorAll('input[name="sale-type"]').forEach(s=>{s.addEventListener("change",()=>{var a;const r=document.getElementById("market-charity-wrap");r&&r.classList.toggle("hidden",((a=document.querySelector('input[name="sale-type"]:checked'))==null?void 0:a.value)!=="charity")})}),this.nftContractAddress="0xc6F3842FcCd9d22FFAB3d609d28430E900cFb82a",this.inventory=null}setInventory(t){this.inventory=t}async show(){(!this.inventory||Object.keys(this.inventory.gear||{}).length===0)&&this._tryLoadFromStorage(),this.renderItems(),this.setStatus(""),this._populateCharitySelect(),this.panel&&this.panel.classList.remove("hidden")}async _populateCharitySelect(){var n;const t=document.getElementById("market-charity-list");if(!t)return;try{const s=await bc();if(this.selectedCharityAddress=null,s.length===0)t.innerHTML='<p style="color:#888;font-size:0.9rem;">No charities registered yet.</p>';else{t.innerHTML=s.map(a=>`
            <div class="market-charity-card" data-wallet="${ya(a.walletAddress)}">
              <h4>${ya(a.charityName)}</h4>
              <p class="charity-mission">${ya(a.mission||a.description||"Supporting a good cause.")}</p>
              <p class="charity-wallet">${ya(a.walletAddress.substring(0,6)+"..."+a.walletAddress.substring(38))}</p>
            </div>
          `).join("");const r=t.querySelectorAll(".market-charity-card");r.forEach(a=>{a.addEventListener("click",()=>{r.forEach(o=>o.classList.remove("selected")),a.classList.add("selected"),this.selectedCharityAddress=a.getAttribute("data-wallet")})})}}catch(s){console.warn("Failed to load charities in MarketplacePanel:",s)}const e=document.getElementById("market-charity-wrap");e&&e.classList.toggle("hidden",((n=document.querySelector('input[name="sale-type"]:checked'))==null?void 0:n.value)!=="charity")}_tryLoadFromStorage(){for(let t=0;t<localStorage.length;t++){const e=localStorage.key(t);if(e&&e.startsWith("bossRPG_equipment_"))try{const n=JSON.parse(localStorage.getItem(e));if(n&&Object.keys(n).length>0){this.inventory?this.inventory.gear={...this.inventory.gear,...n}:this.inventory={gear:n,getGearData:s=>n[s]||null};break}}catch{}}}hide(){this.panel&&this.panel.classList.add("hidden")}setStatus(t,e=!1){if(this.statusEl){if(!t){this.statusEl.classList.add("hidden");return}this.statusEl.textContent=t,this.statusEl.style.color=e?"#e63946":"#2ecc71",this.statusEl.style.borderColor=e?"#e63946":"#2ecc71",this.statusEl.classList.remove("hidden")}}renderItems(){if(!this.itemsList)return;this.itemsList.innerHTML="";const t=this.inventory?this.inventory.gear:null;if(!t||Object.keys(t).length===0){this.itemsList.innerHTML='<p style="color:#888;text-align:center;padding:20px">No items yet. Defeat a boss and mint your gear to list it here!</p>';return}const e={Chestplate:"🛡️",Boots:"👢",Sword:"⚔️"};for(const n of Object.keys(t)){const s=this.inventory.getGearData?this.inventory.getGearData(n):t[n];if(!s)continue;const r=document.createElement("div");r.className="market-item";const a=e[n]||"🎁",o=s.name||n,c=s.tokenId,l=c!=null;r.innerHTML='<div class="item-info"><div class="item-icon">'+a+'</div><div class="item-details"><h4>'+o+"</h4><p>"+(l?"Token ID: #"+c:"Not yet minted — defeat the boss again to re-mint")+'</p></div></div><div class="market-actions"><button class="approve-btn"'+(l?"":' disabled style="opacity:0.4"')+'>Approve</button><button class="list-btn"'+(l?"":' disabled style="opacity:0.4"')+">"+(l?"List (0.05 ETH)":"Mint first")+"</button></div>",l&&(r.querySelector(".approve-btn").addEventListener("click",u=>this.handleApprove(u.currentTarget)),r.querySelector(".list-btn").addEventListener("click",u=>this.handleList(c,u.currentTarget))),this.itemsList.appendChild(r)}}async handleApprove(t){try{t.textContent="Approving...",t.disabled=!0,this.setStatus("Confirm approval in MetaMask..."),await this.market.approveMarketplace(this.nftContractAddress),t.textContent="Approved ✅",this.setStatus("Marketplace approved!",!1)}catch(e){console.error(e),t.textContent="Approve",t.disabled=!1,this.setStatus("Approval failed: "+(e.reason||e.message),!0)}}async handleList(t,e){var r;const n=((r=document.querySelector('input[name="sale-type"]:checked'))==null?void 0:r.value)||"personal",s=this.selectedCharityAddress;if(n==="charity"&&!s){this.setStatus("Select a charity for charity sale.",!0);return}try{if(e.textContent="Listing...",e.disabled=!0,this.setStatus("Confirm listing in MetaMask..."),n==="personal")await this.market.listItemPersonal(this.nftContractAddress,t,.05),this.setStatus(`Token #${t} listed (100% to you)!`,!1);else{await this.market.listItemForCharity(this.nftContractAddress,t,.05,s);const a=document.querySelector(".market-charity-card.selected h4"),o=a?a.textContent:"Charity";this.setStatus(`Token #${t} listed for charity (90% → ${o})!`,!1)}e.textContent="Listed ✅"}catch(a){console.error(a),e.textContent="List (0.05 ETH)",e.disabled=!1,this.setStatus("Listing failed: "+(a.reason||a.message),!0)}}}function ya(i){if(i==null)return"";const t=document.createElement("div");return t.textContent=i,t.innerHTML.replace(/"/g,"&quot;")}const Tc="boss-rpg-guilds-index-cid";function bw(i){return i.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}function Tw(){try{return localStorage.getItem(Tc)||null}catch{return null}}function Ui(i){try{i?localStorage.setItem(Tc,i):localStorage.removeItem(Tc)}catch{}}async function gn(){if(!un())return[];const i=Tw();if(!i)return[];try{const e=(await lr(i)).cids||{};return Object.entries(e).map(([n,s])=>({guildId:n,cid:s}))}catch{return[]}}async function fi(i){const e=(await gn()).find(n=>n.guildId===i);if(!e)return null;try{return await lr(e.cid)}catch{return null}}async function Aw(i,t,e){if(!un())throw new Error("Pinata keys not set");const n=bw(i),s=await gn();if(s.some(l=>l.guildId===n))throw new Error("A guild with this name already exists");const r={guildName:i.trim(),description:(t||"").trim(),creatorWalletAddress:(e||"").toLowerCase(),members:[e.toLowerCase()],chatMessages:[],polls:[]},a=await Ae(r),o={};s.forEach(l=>{o[l.guildId]=l.cid}),o[n]=a;const c=await Ae({cids:o});return Ui(c),n}async function Cw(i,t){if(!un())throw new Error("Pinata keys not set");const e=await fi(i);if(!e)throw new Error("Guild not found");const n=t.toLowerCase();if(e.members.includes(n))return;e.members=[...e.members,n];const s=await Ae(e),r=await gn(),a={};r.forEach(c=>{a[c.guildId]=c.cid}),a[i]=s;const o=await Ae({cids:a});Ui(o)}async function Rw(i,t,e){if(!un())throw new Error("Pinata keys not set");const n=await fi(i);if(!n)throw new Error("Guild not found");n.chatMessages=n.chatMessages||[],n.chatMessages.push({walletAddress:t.toLowerCase(),text:String(e).trim().slice(0,500),timestamp:Date.now()});const s=await Ae(n),r=await gn(),a={};r.forEach(c=>{a[c.guildId]=c.cid}),a[i]=s;const o=await Ae({cids:a});Ui(o)}async function Pw(i,t,e,n){if(!un())throw new Error("Pinata keys not set");const s=await fi(i);if(!s)throw new Error("Guild not found");s.polls=s.polls||[];const r=`poll-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,a={id:r,question:String(t).trim().slice(0,200),options:(e||[]).slice(0,10).map(h=>({text:String(h).trim().slice(0,100),votes:0})),votesByAddress:{},createdBy:n.toLowerCase(),createdAt:Date.now()};if(a.options.length<2)throw new Error("Poll needs at least 2 options");s.polls.push(a);const o=await Ae(s),c=await gn(),l={};c.forEach(h=>{l[h.guildId]=h.cid}),l[i]=o;const u=await Ae({cids:l});return Ui(u),{id:r,poll:a}}async function Lw(i,t,e,n){if(!un())throw new Error("Pinata keys not set");const s=await fi(i);if(!s)throw new Error("Guild not found");const r=(s.polls||[]).find(h=>h.id===t);if(!r)throw new Error("Poll not found");const a=n.toLowerCase();if(r.votesByAddress&&r.votesByAddress[a]!==void 0)throw new Error("Already voted");if(e<0||e>=(r.options||[]).length)throw new Error("Invalid option");r.votesByAddress=r.votesByAddress||{},r.votesByAddress[a]=e,r.options[e].votes=(r.options[e].votes||0)+1;const o=await Ae(s),c=await gn(),l={};c.forEach(h=>{l[h.guildId]=h.cid}),l[i]=o;const u=await Ae({cids:l});Ui(u)}function Iw(i,t){const e=(t||"").toLowerCase();return(i.members||[]).includes(e)}function Nw(i,t){const e=(t||"").toLowerCase();return(i.creatorWalletAddress||"").toLowerCase()===e}async function Dw(i,t){if(!un())throw new Error("Pinata keys not set");const e=await fi(i);if(!e)throw new Error("Guild not found");const n=(t||"").toLowerCase();if((e.creatorWalletAddress||"").toLowerCase()!==n)throw new Error("Only the guild creator can delete this guild");const s=await gn(),r={};s.forEach(o=>{o.guildId!==i&&(r[o.guildId]=o.cid)});const a=Object.keys(r).length>0?await Ae({cids:r}):null;Ui(a)}async function Uw(i,t){if(!un())throw new Error("Pinata keys not set");const e=await fi(i);if(!e)throw new Error("Guild not found");const n=t.toLowerCase(),s=(e.creatorWalletAddress||"").toLowerCase();if(n===s)throw new Error("Guild creator cannot leave; delete the guild instead");if(!e.members.includes(n))return;e.members=e.members.filter(l=>l!==n);const r=await Ae(e),a=await gn(),o={};a.forEach(l=>{o[l.guildId]=l.cid}),o[i]=r;const c=await Ae({cids:o});Ui(c)}async function Ow(i,t,e){if(!un())throw new Error("Pinata keys not set");const n=await fi(i);if(!n)throw new Error("Guild not found");const s=e.toLowerCase(),r=(n.polls||[]).findIndex(m=>m.id===t);if(r<0)throw new Error("Poll not found");const o=(n.polls[r].createdBy||"").toLowerCase()===s,c=(n.creatorWalletAddress||"").toLowerCase()===s;if(!o&&!c)throw new Error("Only the poll creator or guild creator can delete this poll");n.polls.splice(r,1);const l=await Ae(n),u=await gn(),h={};u.forEach(m=>{h[m.guildId]=m.cid}),h[i]=l;const d=await Ae({cids:h});Ui(d)}async function Fw(i){if(!i||!i.trim())return gn();const t=await gn(),e=i.trim().toLowerCase(),n=[];for(const s of t){const r=await fi(s.guildId);if(!r)continue;const a=(r.guildName||"").toLowerCase().includes(e),o=(r.description||"").toLowerCase().includes(e);(a||o)&&n.push(s)}return n}const Ds=(i,t=10)=>i?i.length<=t?i:i.slice(0,t)+"...":"";class Bw{constructor(t,e){this.container=t,this.wallet=e,this.currentGuildId=null,this.refreshInterval=null}async init(){this.container&&(this.container.innerHTML="",this.render(),this.bind())}show(){this.container&&this.container.classList.remove("hidden"),this.refresh(),this.refreshInterval=setInterval(()=>this._refreshIfNotEditing(),15e3)}_refreshIfNotEditing(){const t=this.container,e=t==null?void 0:t.querySelector("#guild-create-form"),n=t==null?void 0:t.querySelector("#guild-poll-form"),s=t==null?void 0:t.querySelector("#guild-chat-input"),r=e&&!e.classList.contains("hidden"),a=n&&!n.classList.contains("hidden"),o=s&&(s.value||"").trim().length>0;r||a||o||this.refresh()}hide(){this.container&&this.container.classList.add("hidden"),this.refreshInterval&&clearInterval(this.refreshInterval),this.refreshInterval=null}async refresh(){await this.render(),this.bind()}_captureFormState(){var c,l,u,h;const t=this.container,e=t==null?void 0:t.querySelector("#guild-create-form"),n={};if(e){const d=t.querySelector("#guild-name"),m=t.querySelector("#guild-desc");n.createFormOpen=!e.classList.contains("hidden"),n.guildName=(d==null?void 0:d.value)??"",n.guildDesc=(m==null?void 0:m.value)??""}const s=t==null?void 0:t.querySelector("#guild-poll-form");s&&(n.pollFormOpen=!s.classList.contains("hidden"),n.pollQuestion=((c=t.querySelector("#guild-poll-question"))==null?void 0:c.value)??"",n.pollOpt1=((l=t.querySelector("#guild-poll-opt1"))==null?void 0:l.value)??"",n.pollOpt2=((u=t.querySelector("#guild-poll-opt2"))==null?void 0:u.value)??"",n.pollOpt3=((h=t.querySelector("#guild-poll-opt3"))==null?void 0:h.value)??"");const r=t==null?void 0:t.querySelector("#guild-chat-input");r&&(n.chatInput=r.value??"");const a=t==null?void 0:t.querySelector(".guild-tab.active");a&&(n.activeTab=a.getAttribute("data-tab"));const o=t==null?void 0:t.querySelector("#guild-search-input");return o&&(n.searchVal=o.value,n.searchFocused=document.activeElement===o),n}_restoreFormState(t){if(!t||!this.container)return;const e=this.container;if(t.createFormOpen){const n=e.querySelector("#guild-create-form");n&&n.classList.remove("hidden");const s=e.querySelector("#guild-name"),r=e.querySelector("#guild-desc");s&&(s.value=t.guildName||""),r&&(r.value=t.guildDesc||"")}if(t.pollFormOpen){const n=e.querySelector("#guild-poll-form");n&&n.classList.remove("hidden");const s=e.querySelector("#guild-poll-question"),r=e.querySelector("#guild-poll-opt1"),a=e.querySelector("#guild-poll-opt2"),o=e.querySelector("#guild-poll-opt3");s&&(s.value=t.pollQuestion||""),r&&(r.value=t.pollOpt1||""),a&&(a.value=t.pollOpt2||""),o&&(o.value=t.pollOpt3||"")}if(t.chatInput!==void 0){const n=e.querySelector("#guild-chat-input");n&&(n.value=t.chatInput)}if(t.activeTab==="polls"){e.querySelectorAll(".guild-tab").forEach(r=>r.classList.remove("active"));const n=e.querySelector('.guild-tab[data-tab="polls"]');n&&n.classList.add("active"),e.querySelectorAll(".guild-tab-pane").forEach(r=>r.classList.add("hidden"));const s=e.querySelector("#guild-polls-pane");s&&s.classList.remove("hidden")}if(t.searchVal!==void 0){const n=e.querySelector("#guild-search-input");if(n&&(n.value=t.searchVal,t.searchFocused)){n.focus();const s=n.value.length;n.setSelectionRange(s,s)}}}async render(){const t=await gn(),e=(await Hc(async()=>{const{hasApiKeys:u}=await Promise.resolve().then(()=>Qd);return{hasApiKeys:u}},void 0)).hasApiKeys(),n=this.wallet.getAccount?this.wallet.getAccount():null,s=this.wallet.isConnected;if(this.currentGuildId){const u=await fi(this.currentGuildId);if(u){const h=this._captureFormState();this.renderGuildView(u,e,n,s),this._restoreFormState(h);return}this.currentGuildId=null}const r=this._captureFormState();let a=`
      <div class="guild-panel-inner">
        <div class="guild-header">
          <h2>🏰 Guilds</h2>
          <button type="button" class="guild-btn guild-btn-close" aria-label="Close">✕</button>
        </div>
        <p class="guild-desc">Create or join guilds, chat, and run polls. Access is tied to your connected MetaMask wallet.</p>
        ${s?`<p class="guild-wallet-line">Connected with MetaMask: <span class="guild-wallet-addr">${Ds(n,14)}</span></p>`:""}
        ${e?"":'<p class="guild-warn">Pinata API keys not set — guild data will not persist. Set keys in app config to enable.</p>'}
        ${s?'<button type="button" class="guild-btn guild-btn-primary" id="guild-create-open">Create Guild</button>':'<p class="guild-warn">Connect MetaMask to create or join guilds.</p>'}
        <input type="text" id="guild-search-input" class="guild-search-input" placeholder="Search by name or description...">
        <div id="guild-create-form" class="guild-form hidden">
          <h3>Create Guild</h3>
          <input type="text" id="guild-name" placeholder="Guild name" maxlength="80">
          <textarea id="guild-desc" placeholder="Description" rows="2" maxlength="300"></textarea>
          <div class="guild-form-actions">
            <button type="button" class="guild-btn" id="guild-create-cancel">Cancel</button>
            <button type="button" class="guild-btn guild-btn-primary" id="guild-create-submit">Create</button>
          </div>
        </div>
        <div id="guild-list" class="guild-list"></div>
      </div>`;this.container.innerHTML=a;const o=(r&&r.searchVal?r.searchVal:"").trim(),c=o?await Fw(o):t,l=this.container.querySelector("#guild-list");c.length===0?l.innerHTML=o?'<p class="guild-empty">No guilds match your search.</p>':'<p class="guild-empty">No guilds yet. Create one!</p>':l.innerHTML=c.map(u=>`
        <div class="guild-card" data-guild-id="${u.guildId}">
          <span class="guild-card-name">${xi(u.guildId)}</span>
          <button type="button" class="guild-btn guild-btn-small guild-view-btn">View</button>
        </div>`).join(""),this._restoreFormState(r)}renderGuildView(t,e,n,s){const r=Iw(t,n),a=Nw(t,n),o=(t.chatMessages||[]).slice(-80),c=t.polls||[];let l=`
      <div class="guild-panel-inner">
        <div class="guild-header">
          <button type="button" class="guild-back-btn" id="guild-back">← Back</button>
          <h2>${xi(t.guildName)}</h2>
          <button type="button" class="guild-btn guild-btn-close" aria-label="Close">✕</button>
        </div>
        <p class="guild-meta">Creator: ${Ds(t.creatorWalletAddress,12)} · Members: ${(t.members||[]).length}</p>
        ${s?`<p class="guild-wallet-line">You're viewing as: <span class="guild-wallet-addr">${Ds(n,14)}</span></p>`:""}
        ${!r&&s?'<button type="button" class="guild-btn guild-btn-primary" id="guild-join-btn">Join Guild</button>':""}
        ${r&&!a?'<button type="button" class="guild-btn guild-btn-outline" id="guild-leave-btn">Leave guild</button>':""}
        ${a?'<p class="guild-creator-note">You created this guild. Only you can delete it.</p><button type="button" class="guild-btn guild-btn-danger" id="guild-delete-btn">Delete guild</button>':""}
        ${r?`
          <div class="guild-tabs">
            <button type="button" class="guild-tab active" data-tab="chat">Chat</button>
            <button type="button" class="guild-tab" data-tab="polls">Polls</button>
          </div>
          <div id="guild-chat-pane" class="guild-tab-pane">
            <div class="guild-chat-messages" id="guild-chat-messages"></div>
            <div class="guild-chat-send">
              <input type="text" id="guild-chat-input" placeholder="Type a message..." maxlength="500">
              <button type="button" class="guild-btn guild-btn-primary" id="guild-chat-send">Send</button>
            </div>
          </div>
          <div id="guild-polls-pane" class="guild-tab-pane hidden">
            <button type="button" class="guild-btn guild-btn-primary" id="guild-poll-create-open">Create Poll</button>
            <div id="guild-poll-form" class="guild-form hidden">
              <input type="text" id="guild-poll-question" placeholder="Question" maxlength="200">
              <input type="text" id="guild-poll-opt1" placeholder="Option 1" maxlength="100">
              <input type="text" id="guild-poll-opt2" placeholder="Option 2" maxlength="100">
              <input type="text" id="guild-poll-opt3" placeholder="Option 3 (optional)" maxlength="100">
              <div class="guild-form-actions">
                <button type="button" class="guild-btn" id="guild-poll-cancel">Cancel</button>
                <button type="button" class="guild-btn guild-btn-primary" id="guild-poll-submit">Create Poll</button>
              </div>
            </div>
            <div id="guild-polls-list" class="guild-polls-list"></div>
          </div>
        `:""}
      </div>`;this.container.innerHTML=l;const u=this.container.querySelector("#guild-chat-messages");u&&(u.innerHTML=o.map(d=>{const m=n&&(d.walletAddress||"").toLowerCase()===n.toLowerCase(),g=d.timestamp?lh(d.timestamp):"";return`
        <div class="guild-msg ${m?"guild-msg-own":""}">
          <span class="guild-msg-addr">${Ds(d.walletAddress,10)}</span>
          <span class="guild-msg-text">${xi(d.text)}</span>
          ${g?`<span class="guild-msg-time">${g}</span>`:""}
        </div>`}).join(""),u.scrollTop=u.scrollHeight);const h=this.container.querySelector("#guild-polls-list");h&&(h.innerHTML=c.map(d=>{const m=(d.votesByAddress||{})[n==null?void 0:n.toLowerCase()],g=(d.options||[]).reduce((p,w)=>p+(Number(w.votes)||0),0),v=Object.keys(d.votesByAddress||{}).length,f=a||n&&(d.createdBy||"").toLowerCase()===n.toLowerCase();return`
          <div class="guild-poll" data-poll-id="${d.id}">
            <div class="guild-poll-q">${xi(d.question)}</div>
            ${(d.options||[]).map((p,w)=>`
              <div class="guild-poll-opt">
                <button type="button" class="guild-poll-vote-btn ${m!==void 0?"voted":""}" data-poll-id="${d.id}" data-opt="${w}" ${m!==void 0?"disabled":""}>
                  ${xi(p.text)} — ${Number(p.votes)||0} vote(s)
                </button>
              </div>`).join("")}
            <div class="guild-poll-meta">Total votes: ${g} · ${v} participant(s) · Created by ${Ds(d.createdBy,8)}</div>
            ${f?`<button type="button" class="guild-btn guild-btn-danger guild-poll-delete-btn small" data-poll-id="${d.id}">Delete poll</button>`:""}
          </div>`}).join("")),this.bind()}bind(){var e,n,s,r,a,o,c,l,u,h,d,m,g,v;const t=this.container;t.querySelectorAll(".guild-btn-close").forEach(f=>{f.onclick=()=>this.hide()}),(e=t.querySelector("#guild-back"))==null||e.addEventListener("click",()=>{this.currentGuildId=null,this.refresh()}),(n=t.querySelector("#guild-create-open"))==null||n.addEventListener("click",()=>{var f;(f=t.querySelector("#guild-create-form"))==null||f.classList.remove("hidden")}),(s=t.querySelector("#guild-create-cancel"))==null||s.addEventListener("click",()=>{var f;(f=t.querySelector("#guild-create-form"))==null||f.classList.add("hidden")}),(r=t.querySelector("#guild-create-submit"))==null||r.addEventListener("click",async()=>{var _,S,P,A,T,N,V;const f=(S=(_=t.querySelector("#guild-name"))==null?void 0:_.value)==null?void 0:S.trim(),p=(A=(P=t.querySelector("#guild-desc"))==null?void 0:P.value)==null?void 0:A.trim(),w=(N=(T=this.wallet).getAccount)==null?void 0:N.call(T);if(!f){alert("Enter a guild name");return}if(!w){alert("Connect wallet");return}try{await Aw(f,p,w),(V=t.querySelector("#guild-create-form"))==null||V.classList.add("hidden"),t.querySelector("#guild-name").value="",t.querySelector("#guild-desc").value="",await this.refresh()}catch(y){alert(y.message||"Create failed")}}),t.querySelectorAll(".guild-view-btn").forEach(f=>{f.onclick=()=>{var p;this.currentGuildId=(p=f.closest(".guild-card"))==null?void 0:p.getAttribute("data-guild-id"),this.refresh()}}),(a=t.querySelector("#guild-join-btn"))==null||a.addEventListener("click",async()=>{var p,w;const f=(w=(p=this.wallet).getAccount)==null?void 0:w.call(p);if(!f){alert("Connect MetaMask to join");return}try{await Cw(this.currentGuildId,f),await this.refresh()}catch(_){alert(_.message||"Join failed")}}),(o=t.querySelector("#guild-delete-btn"))==null||o.addEventListener("click",async()=>{var p,w;const f=(w=(p=this.wallet).getAccount)==null?void 0:w.call(p);if(f&&confirm("Permanently delete this guild? This cannot be undone."))try{await Dw(this.currentGuildId,f),this.currentGuildId=null,await this.refresh()}catch(_){alert(_.message||"Delete failed")}}),t.querySelectorAll(".guild-tab").forEach(f=>{f.onclick=()=>{t.querySelectorAll(".guild-tab").forEach(_=>_.classList.remove("active")),f.classList.add("active");const p=f.getAttribute("data-tab");t.querySelectorAll(".guild-tab-pane").forEach(_=>_.classList.add("hidden"));const w=p==="chat"?t.querySelector("#guild-chat-pane"):t.querySelector("#guild-polls-pane");w&&w.classList.remove("hidden")}}),(c=t.querySelector("#guild-chat-send"))==null||c.addEventListener("click",async()=>{var A,T,N;const f=t.querySelector("#guild-chat-input"),p=(A=f==null?void 0:f.value)==null?void 0:A.trim(),w=(N=(T=this.wallet).getAccount)==null?void 0:N.call(T);if(!p||!w)return;const _=t.querySelector("#guild-chat-messages"),S=lh(Date.now()),P=`<div class="guild-msg guild-msg-own"><span class="guild-msg-addr">${Ds(w,10)}</span><span class="guild-msg-text">${xi(p)}</span><span class="guild-msg-time">${S}</span></div>`;_&&(_.insertAdjacentHTML("beforeend",P),_.scrollTop=_.scrollHeight),f.value="";try{await Rw(this.currentGuildId,w,p),await this.refresh()}catch(V){alert(V.message||"Send failed"),await this.refresh()}}),(l=t.querySelector("#guild-chat-input"))==null||l.addEventListener("keydown",async f=>{var p;f.key==="Enter"&&((p=t.querySelector("#guild-chat-send"))==null||p.click())}),(u=t.querySelector("#guild-poll-create-open"))==null||u.addEventListener("click",()=>{var f;(f=t.querySelector("#guild-poll-form"))==null||f.classList.remove("hidden")}),(h=t.querySelector("#guild-poll-cancel"))==null||h.addEventListener("click",()=>{var f;(f=t.querySelector("#guild-poll-form"))==null||f.classList.add("hidden")}),(d=t.querySelector("#guild-poll-submit"))==null||d.addEventListener("click",async()=>{var A,T,N,V,y,b,Z,j,L,X,z,K,Y;const f=(T=(A=t.querySelector("#guild-poll-question"))==null?void 0:A.value)==null?void 0:T.trim(),p=(V=(N=t.querySelector("#guild-poll-opt1"))==null?void 0:N.value)==null?void 0:V.trim(),w=(b=(y=t.querySelector("#guild-poll-opt2"))==null?void 0:y.value)==null?void 0:b.trim(),_=(j=(Z=t.querySelector("#guild-poll-opt3"))==null?void 0:Z.value)==null?void 0:j.trim(),S=(X=(L=this.wallet).getAccount)==null?void 0:X.call(L);if(!f||!p||!w||!S){alert("Question and at least 2 options required");return}const P=[p,w].filter(Boolean);_&&P.push(_);try{const q=await Pw(this.currentGuildId,f,P,S);if((z=t.querySelector("#guild-poll-form"))==null||z.classList.add("hidden"),q&&q.poll){const rt=t.querySelector("#guild-polls-list"),nt=q.poll,vt=0,Ft=0;if(rt){const G=`<div class="guild-poll" data-poll-id="${nt.id}"><div class="guild-poll-q">${xi(nt.question)}</div>${(nt.options||[]).map((et,gt)=>`<div class="guild-poll-opt"><button type="button" class="guild-poll-vote-btn" data-poll-id="${nt.id}" data-opt="${gt}">${xi(et.text)} — 0 vote(s)</button></div>`).join("")}<div class="guild-poll-meta">Total votes: 0 · 0 participant(s) · Created by you</div><button type="button" class="guild-btn guild-btn-danger guild-poll-delete-btn small" data-poll-id="${nt.id}">Delete poll</button></div>`;rt.insertAdjacentHTML("beforeend",G)}t.querySelectorAll(".guild-tab").forEach(G=>G.classList.remove("active")),(K=t.querySelector('.guild-tab[data-tab="polls"]'))==null||K.classList.add("active"),t.querySelectorAll(".guild-tab-pane").forEach(G=>G.classList.add("hidden")),(Y=t.querySelector("#guild-polls-pane"))==null||Y.classList.remove("hidden"),this.bind()}else await this.refresh()}catch(q){alert(q.message||"Create poll failed")}}),(m=t.querySelector("#guild-search-input"))==null||m.addEventListener("input",()=>this.refresh()),(g=t.querySelector("#guild-search-input"))==null||g.addEventListener("keyup",()=>this.refresh()),(v=t.querySelector("#guild-leave-btn"))==null||v.addEventListener("click",async()=>{var p,w;const f=(w=(p=this.wallet).getAccount)==null?void 0:w.call(p);if(f&&confirm("Leave this guild? You can rejoin later."))try{await Uw(this.currentGuildId,f),this.currentGuildId=null,await this.refresh()}catch(_){alert(_.message||"Leave failed")}}),t.querySelectorAll(".guild-poll-delete-btn").forEach(f=>{f.onclick=async()=>{var _,S;const p=f.getAttribute("data-poll-id"),w=(S=(_=this.wallet).getAccount)==null?void 0:S.call(_);if(w&&confirm("Delete this poll? This cannot be undone."))try{await Ow(this.currentGuildId,p,w),await this.refresh()}catch(P){alert(P.message||"Delete failed")}}}),t.querySelectorAll(".guild-poll-vote-btn").forEach(f=>{f.disabled||(f.onclick=async()=>{var S,P;const p=f.getAttribute("data-poll-id"),w=parseInt(f.getAttribute("data-opt"),10),_=(P=(S=this.wallet).getAccount)==null?void 0:P.call(S);if(_)try{await Lw(this.currentGuildId,p,w,_),await this.refresh()}catch(A){alert(A.message||"Vote failed")}})})}}function xi(i){if(i==null)return"";const t=document.createElement("div");return t.textContent=i,t.innerHTML}function lh(i){const t=new Date(i),e=new Date;return t.toDateString()===e.toDateString()?t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):t.toLocaleDateString()+" "+t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}const kw=(i,t=10)=>i?i.length<=t?i:i.slice(0,t)+"...":"";class zw{constructor(t,e){this.container=t,this.wallet=e}async init(){this.container&&(this.render(),this.bind())}show(){this.container&&this.container.classList.remove("hidden"),this.refresh()}hide(){this.container&&this.container.classList.add("hidden")}async refresh(){await this.render(),this.bind()}async render(){var d,m;const t=this.container.querySelector("#charity-search"),e=t?t.value:"",n=document.activeElement===t,s=await bc(),r=(await Hc(async()=>{const{hasApiKeys:g}=await Promise.resolve().then(()=>Qd);return{hasApiKeys:g}},void 0)).hasApiKeys(),a=(m=(d=this.wallet).getAccount)==null?void 0:m.call(d),o=this.wallet.isConnected;let c=`
      <div class="charity-panel-inner">
        <div class="charity-header">
          <h2>❤️ Charities</h2>
          <button type="button" class="charity-btn charity-btn-close" aria-label="Close">✕</button>
        </div>
        <p class="charity-desc">Verified charities can register. When selling with charity support, you can choose one below.</p>
        ${r?"":'<p class="charity-warn">Pinata API keys not set — charity list will not persist.</p>'}
        ${o?'<button type="button" class="charity-btn charity-btn-primary" id="charity-register-open">Register a Charity</button>':'<p class="charity-warn">Connect wallet to register a charity.</p>'}
        <div id="charity-register-form" class="charity-form hidden">
          <h3>Register Charity</h3>
          <p class="charity-meta">Connect the charity’s MetaMask wallet before registering.</p>
          <input type="text" id="charity-name" placeholder="Charity name *" maxlength="200">
          <textarea id="charity-desc" placeholder="Description" rows="2" maxlength="1000"></textarea>
          <input type="text" id="charity-mission" placeholder="Mission / purpose" maxlength="500">
          <input type="text" id="charity-website" placeholder="Website (optional)" maxlength="200">
          <input type="text" id="charity-contact" placeholder="Contact information" maxlength="300">
          <div class="charity-form-actions">
            <button type="button" class="charity-btn" id="charity-register-cancel">Cancel</button>
            <button type="button" class="charity-btn charity-btn-primary" id="charity-register-submit">Register</button>
          </div>
        </div>
        <h3>Browse charities</h3>
        <input type="text" id="charity-search" class="charity-search" placeholder="Search by name, mission...">
        <div id="charity-list" class="charity-list"></div>
      </div>`;this.container.innerHTML=c;const l=Sw(s,e.trim()),u=this.container.querySelector("#charity-list");l.length===0?u.innerHTML='<p class="charity-empty">No charities found. Register one or try a different search.</p>':u.innerHTML=l.map(g=>{const v=a&&(g.registeredByWallet||g.walletAddress||"").toLowerCase()===a.toLowerCase();return`
        <div class="charity-card" data-charity-wallet="${Gw(g.walletAddress)}">
          <div class="charity-card-name">${Yo(g.charityName)}</div>
          ${g.mission?`<div class="charity-card-mission">${Yo(g.mission)}</div>`:""}
          <div class="charity-card-wallet">${kw(g.walletAddress,14)}</div>
          ${g.website?`<a href="${Yo(g.website)}" target="_blank" rel="noopener" class="charity-card-link">Website</a>`:""}
          ${v?'<button type="button" class="charity-btn charity-btn-danger charity-delete-btn small">Delete charity</button>':""}
        </div>`}).join("");const h=this.container.querySelector("#charity-search");if(h&&e&&(h.value=e),h&&n){h.focus();const g=h.value.length;h.setSelectionRange(g,g)}this.bind()}bind(){var e,n,s,r,a;const t=this.container;t.querySelectorAll(".charity-btn-close").forEach(o=>{o.onclick=()=>this.hide()}),(e=t.querySelector("#charity-register-open"))==null||e.addEventListener("click",()=>{var o;(o=t.querySelector("#charity-register-form"))==null||o.classList.remove("hidden")}),(n=t.querySelector("#charity-register-cancel"))==null||n.addEventListener("click",()=>{var o;(o=t.querySelector("#charity-register-form"))==null||o.classList.add("hidden")}),(s=t.querySelector("#charity-register-submit"))==null||s.addEventListener("click",async()=>{var l,u,h,d,m,g,v,f,p,w,_,S,P;const o=(u=(l=t.querySelector("#charity-name"))==null?void 0:l.value)==null?void 0:u.trim(),c=(d=(h=this.wallet).getAccount)==null?void 0:d.call(h);if(!o){alert("Charity name required");return}if(!c){alert("Connect MetaMask (charity wallet) first");return}try{await ww({charityName:o,description:(g=(m=t.querySelector("#charity-desc"))==null?void 0:m.value)==null?void 0:g.trim(),mission:(f=(v=t.querySelector("#charity-mission"))==null?void 0:v.value)==null?void 0:f.trim(),website:(w=(p=t.querySelector("#charity-website"))==null?void 0:p.value)==null?void 0:w.trim(),walletAddress:c,contactInfo:(S=(_=t.querySelector("#charity-contact"))==null?void 0:_.value)==null?void 0:S.trim(),registeredByWallet:c}),(P=t.querySelector("#charity-register-form"))==null||P.classList.add("hidden"),t.querySelector("#charity-name").value="",t.querySelector("#charity-desc").value="",t.querySelector("#charity-mission").value="",t.querySelector("#charity-website").value="",t.querySelector("#charity-contact").value="",await this.refresh()}catch(A){alert(A.message||"Registration failed")}}),(r=t.querySelector("#charity-search"))==null||r.addEventListener("input",()=>this.refresh()),(a=t.querySelector("#charity-search"))==null||a.addEventListener("keyup",()=>this.refresh()),t.querySelectorAll(".charity-delete-btn").forEach(o=>{o.onclick=async()=>{var h,d;const c=o.closest(".charity-card"),l=c==null?void 0:c.getAttribute("data-charity-wallet"),u=(d=(h=this.wallet).getAccount)==null?void 0:d.call(h);if(!(!l||!u)&&confirm("Delete this charity registration? This cannot be undone."))try{await Mw(l,u),await this.refresh()}catch(m){alert(m.message||"Delete failed")}}})}async getCharityList(){return bc()}}function Yo(i){if(i==null)return"";const t=document.createElement("div");return t.textContent=i,t.innerHTML}function Gw(i){if(i==null)return"";const t=document.createElement("div");return t.textContent=i,t.innerHTML.replace(/"/g,"&quot;")}class Hw{constructor(){this.canvas=document.getElementById("game-canvas"),this.renderer=new Wh({canvas:this.canvas,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=dh,this.renderer.toneMapping=ph,this.renderer.toneMappingExposure=1.2,this.scene=new wv,this.input=new ry(this.canvas),this.world=new ay(this.scene),this.player=new cy(this.scene,this.input),this.monsterSpawner=new uy(this.scene),this.bosses={},this._setupBosses(),this.fugaArrows=[];const t=this.world.getCaves();for(const e of t)this.monsterSpawner.spawnForCave(e);this.combatSystem=new py,this.hud=new my,this.lootPanel=new gy(e=>this._onMintNFT(e),()=>this._onContinuePlaying()),this.wallet=new yy,this.nftMinter=new _w(this.wallet),this.charityMarket=new vw(this.wallet),this.marketplacePanel=new Ew(this.charityMarket,this.wallet),this.guildUI=new Bw(document.getElementById("guilds-panel"),this.wallet),this.charityUI=new zw(document.getElementById("charities-panel"),this.wallet),this.state="menu",this.activeBoss=null,this.isPaused=!1,this.lastTime=0,this.deathScreen=document.getElementById("death-screen"),this.respawnBtn=document.getElementById("respawn-btn"),this.startScreen=document.getElementById("start-screen"),this.startBtn=document.getElementById("start-btn"),this.connectWalletBtn=document.getElementById("connect-wallet-btn"),this.startMarketBtn=document.getElementById("start-market-btn"),this.guildsBtn=document.getElementById("guilds-btn"),this.charitiesBtn=document.getElementById("charities-btn"),this.init(),this.canvas.addEventListener("click",()=>{(this.state==="playing"||this.state==="boss_fight")&&!this.input.isLocked&&this.input.requestPointerLock()}),this._loop(0)}async init(){this.startBtn.addEventListener("click",()=>this._startGame()),this.connectWalletBtn.addEventListener("click",()=>this._connectWallet()),this.startMarketBtn.addEventListener("click",()=>window.open("./CharityBlockchainProject/frontend/index.html","_blank")),this.guildsBtn&&this.guildsBtn.addEventListener("click",()=>{this.guildUI.init(),this.guildUI.show()}),this.charitiesBtn&&this.charitiesBtn.addEventListener("click",()=>{this.charityUI.init(),this.charityUI.show()}),this.respawnBtn.addEventListener("click",()=>this._onRespawn()),window.addEventListener("resize",()=>this._onResize()),this.nftMinter&&this.nftMinter.pinataApiKey&&this.nftMinter.pinataSecretKey&&jd(this.nftMinter.pinataApiKey,this.nftMinter.pinataSecretKey),this.connectWalletBtn.textContent="⏳ Checking Wallet...";try{const t=await this.wallet.checkConnection();t?(this.connectWalletBtn.textContent=`🦊 ${this.wallet.getShortAddress()}`,this.player.inventory.load(t),this.hud.updateGearSlots(this.player.inventory),this.marketplacePanel.setInventory(this.player.inventory),this.startMarketBtn.classList.remove("hidden")):this.connectWalletBtn.textContent="🦊 Connect Wallet"}catch{this.connectWalletBtn.textContent="🦊 Connect Wallet"}}_setupBosses(){const t=this.world.getCaves();for(const e of t){let n;e.id===1?n=new hy(this.scene,e.bossPosition):e.id===2?n=new dy(this.scene,e.bossPosition):n=new fy(this.scene,e.bossPosition),this.bosses[e.id]=n}}_startGame(){this.state="playing",this.marketplacePanel.hide(),this.startScreen.classList.add("hidden"),this.hud.show(),this.input.requestPointerLock(),this.hud.updateGearSlots(this.player.inventory)}async _connectWallet(){try{this.connectWalletBtn.textContent="⏳ Connecting...";const t=await this.wallet.connect();this.connectWalletBtn.textContent=`🦊 ${this.wallet.getShortAddress()}`,this.player.inventory.load(t),this.hud.updateGearSlots(this.player.inventory),this.marketplacePanel.setInventory(this.player.inventory),this.state!=="menu"&&this.hud.notify(`Wallet connected: ${this.wallet.getShortAddress()}`,"success")}catch(t){this.connectWalletBtn.textContent="🦊 Connect Wallet",this.state==="menu"?alert(t.message||"Failed to connect wallet"):this.hud.notify(t.message||"Failed to connect wallet","danger")}}_loop(t){requestAnimationFrame(n=>this._loop(n));const e=Math.min((t-this.lastTime)/1e3,.1);this.lastTime=t,(this.state==="playing"||this.state==="boss_fight")&&this._update(e),this.renderer.render(this.scene,this.player.getCamera())}_update(t){if(this.player.update(t),this.monsterSpawner.update(t,this.player.position),this.activeBoss&&this.activeBoss.isActive&&this.activeBoss.update(t,this.player.position),this.player.fugaFired){this.player.fugaFired=!1;const a=this.player.fugaRay,o=new cn(.05,.05,1,8);o.rotateX(Math.PI/2);const c=new ls({color:65535}),l=new Mt(o,c);l.position.copy(a.origin);const u=a.origin.clone().add(a.dir);l.lookAt(u),this.scene.add(l),this.fugaArrows.push({mesh:l,origin:a.origin.clone(),position:a.origin.clone(),dir:a.dir.clone(),speed:30,distanceTraveled:0,maxDistance:10})}const e=this.monsterSpawner.getAllMonsters();for(let a=this.fugaArrows.length-1;a>=0;a--){const o=this.fugaArrows[a],c=o.speed*t;o.position.addScaledVector(o.dir,c),o.mesh.position.copy(o.position),o.distanceTraveled+=c;let l=!1;const u=this.combatSystem.resolveFugaHit(o.position,e,this.activeBoss);if(u){l=!0;const h=this._worldToScreen(u.position);h&&this.hud.showDamageNumber(h.x,h.y,u.damage,"normal"),u.target.isDead&&(u.isBoss?this._onBossDefeated(u.target):(this.player.health=Math.min(this.player.health+5,this.player.maxHealth),this.hud.showDamageNumber(h?h.x:window.innerWidth/2,h?h.y-30:window.innerHeight/2,"+5 HP","heal"),this.monsterSpawner.handleMonsterDeath(u.target)&&this.hud.notify("⚔ A special sword dropped!","info")))}(l||o.distanceTraveled>=o.maxDistance)&&(this.scene.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),this.fugaArrows.splice(a,1))}const n=this.combatSystem.resolvePlayerAttack(this.player,e,this.activeBoss);for(const a of n){const o=this._worldToScreen(a.position);if(o){const c=a.isWeakHit?"weak":"normal";this.hud.showDamageNumber(o.x,o.y,a.damage,c)}!a.isBoss&&a.target.isDead&&(this.player.health=Math.min(this.player.health+5,this.player.maxHealth),this.hud.showDamageNumber(o?o.x:window.innerWidth/2,o?o.y-30:window.innerHeight/2,"+5 HP","heal"),this.monsterSpawner.handleMonsterDeath(a.target)&&this.hud.notify("⚔ A special sword dropped!","info")),a.isBoss&&a.target.isDead&&this._onBossDefeated(a.target)}const s=this.combatSystem.resolveEnemyAttacks(this.player,e,this.activeBoss);for(const a of s){const o=this._worldToScreen(a.position);o&&this.hud.showDamageNumber(o.x,o.y,Math.round(a.damage),"player")}const r=this.monsterSpawner.checkSwordPickup(this.player.position);if(r){this.player.inventory.addSword(r.caveId,r.type);const o={"defense-breaker":"Defense Breaker Sword","speed-counter":"Speed Counter Sword","power-counter":"Power Counter Sword"}[r.type]||r.type;this.hud.notify(`⚔ Picked up: ${o}`,"success"),this.hud.showSwordIndicator(o)}this._checkCaveProximity(),this.player.isDead&&this.state!=="dead"&&(this.state="dead",this.deathScreen.classList.remove("hidden"),this.activeBoss&&this.activeBoss.deactivate()),this.hud.updatePlayerHealth(this.player.health,this.player.maxHealth),this.activeBoss&&this.activeBoss.isActive?this.hud.showBossHealth(this.activeBoss.name,this.activeBoss.getHealthPercent()):this.hud.hideBossHealth(),this.hud.updateMinimap(this.player.position,this.world.getCaves(),e)}_checkCaveProximity(){const t=this.world.getCaves();for(const e of t){const n=this.bosses[e.id];if(!n)continue;if(n.isDead){n._deathTimestamp&&Date.now()-n._deathTimestamp>6e4&&(n.isDead=!1,n.health=n.maxHealth,n.isActive=!1,n.model.visible=!1,e._notifiedDefeated=!1,this.monsterSpawner.spawnForCave(e),this.hud.notify(n.name+" has risen again!","danger"));continue}const s=this.player.position.distanceTo(e.bossPosition);if(s<15&&!n.isActive){if(!this.wallet.isConnected){e._notifiedWallet||(this.hud.notify("Connect MetaMask to fight "+n.name+"!","danger"),e._notifiedWallet=!0);continue}this.player.setRespawnPoint(e.monsterZoneCenter,e.id),n.activate(),this.activeBoss=n,this.state="boss_fight",this.player.inventory.hasSword(e.id)?(this.player.inventory.setActiveSword(this.player.inventory.getSwordType(e.id)),this.hud.notify(n.name+" awakens! Your sword glows with power!","danger")):(this.player.inventory.setActiveSword(null),this.hud.notify(n.name+" awakens! You need the right sword...","danger"))}n.isActive&&s>40&&(n.deactivate(),n.health=n.maxHealth,this.activeBoss=null,this.state="playing",this.hud.hideBossHealth())}}_onBossDefeated(t){this.state="loot",this.activeBoss=null,this.hud.hideBossHealth(),t._deathTimestamp=Date.now();const e=t.gearDrop;this.lootPanel.show({...e,boss:t.name}),this.player.health=this.player.maxHealth,this.hud.notify("🏆 "+t.name+" defeated! It will return in 60s...","success")}async _onMintNFT(t){if(this.lootPanel.setMintingState("minting"),!this.wallet.isConnected)try{await this.wallet.connect()}catch{this.hud.notify("Connect wallet to mint NFT","danger"),this.lootPanel.setMintingState("error");return}try{const e=await this.nftMinter.mint(t);this.lootPanel.setMintingState("success"),this.player.inventory.addGear(t.type,{equipped:!0,tokenId:e.tokenId,name:t.name,boss:t.boss}),this.hud.updateGearSlots(this.player.inventory),this.marketplacePanel.setInventory(this.player.inventory);const n=this.wallet.getAccount();this.player.inventory.save(n),this.hud.notify(`[Equipped] ${t.name}! Stats increased.`,"success"),e.simulated?this.hud.notify(`✨ NFT minted (simulated)! Token URI: ${e.tokenURI.slice(0,30)}...`,"success"):this.hud.notify(`✨ NFT minted! TX: ${e.txHash.slice(0,20)}...`,"success")}catch(e){console.error("Mint failed:",e),this.hud.notify("Minting failed: "+(e.message||"Unknown error"),"danger"),this.lootPanel.setMintingState("error")}}_onContinuePlaying(){this.state="playing",this.input.requestPointerLock()}_onRespawn(){this.deathScreen.classList.add("hidden"),this.player.respawn(),this.state="playing",this.activeBoss&&(this.activeBoss.deactivate(),this.activeBoss.health=this.activeBoss.maxHealth,this.activeBoss=null),this.input.requestPointerLock(),this.hud.notify("You have been revived. Try again!","info")}_worldToScreen(t){const e=this.player.getCamera(),n=t.clone();if(n.y+=1.5,n.project(e),n.z>1)return null;const s=(n.x*.5+.5)*window.innerWidth,r=(-n.y*.5+.5)*window.innerWidth;return{x:s+(Math.random()-.5)*40,y:r+(Math.random()-.5)*20}}_onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.player.onResize()}}const Vw=new Hw;window.__game=Vw;console.log("%c⚔ Boss Hunter RPG loaded ⚔","color: #f7c948; font-size: 16px; font-weight: bold;");console.log("Click START GAME to begin. WASD to move, Mouse to look, Click to attack, Space to dodge.");export{iw as $,qs as A,qa as B,hi as C,kn as D,Ey as E,od as F,Gn as G,Xy as H,ad as I,Ii as J,li as K,Is as L,Fx as M,sd as N,Ty as O,by as P,Nr as Q,Gs as R,$w as S,xc as T,Mc as U,Jd as V,lw as W,Sr as X,sr as Y,cS as Z,Ja as _,it as a,Ua as a0,Ir as a1,nw as a2,oS as a3,ed as a4,cc as a5,Cy as a6,Da as a7,My as a8,xy as a9,Fy as aA,La as aB,rS as aC,$a as aD,aS as aE,Rd as aF,Vo as aG,By as aH,qw as aI,Ay as aJ,Yw as aK,ai as aa,ow as ab,aw as ac,Yc as ad,Xd as ae,ew as af,Je as ag,Fn as ah,$c as ai,ei as aj,Ia as ak,fs as al,Bn as am,sh as an,Qx as ao,Ka as ap,Pe as aq,rr as ar,os as as,tw as at,Be as au,Wd as av,Ly as aw,nd as ax,Jw as ay,Kw as az,bt as b,Wc as c,Ny as d,Vt as e,Zw as f,Tn as g,ye as h,md as i,Hu as j,fd as k,jw as l,Lr as m,nS as n,Na as o,zy as p,tS as q,Qw as r,Gy as s,Vc as t,sS as u,iS as v,$y as w,eS as x,Xw as y,Ze as z};
//# sourceMappingURL=index-xnR_E_NL.js.map
