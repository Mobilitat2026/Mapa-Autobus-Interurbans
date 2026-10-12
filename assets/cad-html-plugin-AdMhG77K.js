import{b as cn,_ as dn,D as Ae,m as un,F as ke,P as fn,l as mn,L as hn,a as gn,t as pn}from"./three-renderer-C1rm17jf.js";import{e as fe,y as yn,d as vn,M as wn,Z as bn,s as xn,V as W}from"./three-CeSvKR11.js";import{F as An,u as Dt,d as A,w as xt,g as N,e as kn,X as Mn,l as Cn,q as zn,v as Sn}from"./cad-simple-viewer-Cw8nUF4z.js";import{l as _o,o as Vo}from"./cad-viewer-BcLvjNmr.js";import{s as K,t as gt,T as At,u as Ve,b as Ne,v as Ye,w as Ln,x as Un,y as Pn,z as Tn,B as In,C as me,D as Fn,E as Bn,F as Hn,G as jn,H as Dn,I as En,J as $n,K as On,L as Rn,M as _n,N as Vn,O as Nn,P as Yn,Q as Zn,R as Xn,S as Gn,U as Kn,V as Tt,W as Ze,X as Wn,Y as Jn}from"./data-model-BGo5WIX7.js";import"./main-CEgveIkN.js";const it=2;var M=Uint8Array,R=Uint16Array,he=Int32Array,It=new M([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ft=new M([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zt=new M([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xe=function(t,e){for(var n=new R(31),a=0;a<31;++a)n[a]=e+=1<<t[a-1];for(var r=new he(n[30]),a=1;a<30;++a)for(var o=n[a];o<n[a+1];++o)r[o]=o-n[a]<<5|a;return{b:n,r}},Ge=Xe(It,2),Ke=Ge.b,Xt=Ge.r;Ke[28]=258,Xt[258]=28;var We=Xe(Ft,0),qn=We.b,Me=We.r,Gt=new R(32768);for(var b=0;b<32768;++b){var at=(b&43690)>>1|(b&21845)<<1;at=(at&52428)>>2|(at&13107)<<2,at=(at&61680)>>4|(at&3855)<<4,Gt[b]=((at&65280)>>8|(at&255)<<8)>>1}var q=(function(t,e,n){for(var a=t.length,r=0,o=new R(e);r<a;++r)t[r]&&++o[t[r]-1];var i=new R(e);for(r=1;r<e;++r)i[r]=i[r-1]+o[r-1]<<1;var l;if(n){l=new R(1<<e);var s=15-e;for(r=0;r<a;++r)if(t[r])for(var c=r<<4|t[r],d=e-t[r],u=i[t[r]-1]++<<d,f=u|(1<<d)-1;u<=f;++u)l[Gt[u]>>s]=c}else for(l=new R(a),r=0;r<a;++r)t[r]&&(l[r]=Gt[i[t[r]-1]++]>>15-t[r]);return l}),rt=new M(288);for(var b=0;b<144;++b)rt[b]=8;for(var b=144;b<256;++b)rt[b]=9;for(var b=256;b<280;++b)rt[b]=7;for(var b=280;b<288;++b)rt[b]=8;var kt=new M(32);for(var b=0;b<32;++b)kt[b]=5;var Qn=q(rt,9,0),ta=q(rt,9,1),ea=q(kt,5,0),na=q(kt,5,1),Et=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},G=function(t,e,n){var a=e/8|0;return(t[a]|t[a+1]<<8)>>(e&7)&n},$t=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},ge=function(t){return(t+7)/8|0},Bt=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new M(t.subarray(e,n))},aa=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Y=function(t,e,n){var a=new Error(e||aa[t]);if(a.code=t,Error.captureStackTrace&&Error.captureStackTrace(a,Y),!n)throw a;return a},ra=function(t,e,n,a){var r=t.length,o=0;if(!r||e.f&&!e.l)return n||new M(0);var i=!n,l=i||e.i!=2,s=e.i;i&&(n=new M(r*3));var c=function(yt){var vt=n.length;if(yt>vt){var ct=new M(Math.max(vt*2,yt));ct.set(n),n=ct}},d=e.f||0,u=e.p||0,f=e.b||0,m=e.l,y=e.d,h=e.m,v=e.n,H=r*8;do{if(!m){d=G(t,u,1);var D=G(t,u+1,3);if(u+=3,D)if(D==1)m=ta,y=na,h=9,v=5;else if(D==2){var X=G(t,u,31)+257,j=G(t,u+10,15)+4,I=X+G(t,u+5,31)+1;u+=14;for(var S=new M(I),C=new M(19),g=0;g<j;++g)C[Zt[g]]=G(t,u+g*3,7);u+=j*3;for(var p=Et(C),F=(1<<p)-1,nt=q(C,p,1),g=0;g<I;){var U=nt[G(t,u,F)];u+=U&15;var L=U>>4;if(L<16)S[g++]=L;else{var z=0,P=0;for(L==16?(P=3+G(t,u,3),u+=2,z=S[g-1]):L==17?(P=3+G(t,u,7),u+=3):L==18&&(P=11+G(t,u,127),u+=7);P--;)S[g++]=z}}var E=S.subarray(0,X),w=S.subarray(X);h=Et(E),v=Et(w),m=q(E,h,1),y=q(w,v,1)}else Y(1);else{var L=ge(u)+4,B=t[L-4]|t[L-3]<<8,_=L+B;if(_>r){s&&Y(0);break}l&&c(f+B),n.set(t.subarray(L,_),f),e.b=f+=B,e.p=u=_*8,e.f=d;continue}if(u>H){s&&Y(0);break}}l&&c(f+131072);for(var pt=(1<<h)-1,V=(1<<v)-1,Q=u;;Q=u){var z=m[$t(t,u)&pt],$=z>>4;if(u+=z&15,u>H){s&&Y(0);break}if(z||Y(2),$<256)n[f++]=$;else if($==256){Q=u,m=null;break}else{var O=$-254;if($>264){var g=$-257,x=It[g];O=G(t,u,(1<<x)-1)+Ke[g],u+=x}var J=y[$t(t,u)&V],lt=J>>4;J||Y(3),u+=J&15;var w=qn[lt];if(lt>3){var x=Ft[lt];w+=$t(t,u)&(1<<x)-1,u+=x}if(u>H){s&&Y(0);break}l&&c(f+131072);var st=f+O;if(f<w){var Ct=o-w,zt=Math.min(w,st);for(Ct+f<0&&Y(3);f<zt;++f)n[f]=a[Ct+f]}for(;f<st;++f)n[f]=n[f-w]}}e.l=m,e.p=Q,e.b=f,e.f=d,m&&(d=1,e.m=h,e.d=y,e.n=v)}while(!d);return f!=n.length&&i?Bt(n,0,f):n.subarray(0,f)},tt=function(t,e,n){n<<=e&7;var a=e/8|0;t[a]|=n,t[a+1]|=n>>8},wt=function(t,e,n){n<<=e&7;var a=e/8|0;t[a]|=n,t[a+1]|=n>>8,t[a+2]|=n>>16},Ot=function(t,e){for(var n=[],a=0;a<t.length;++a)t[a]&&n.push({s:a,f:t[a]});var r=n.length,o=n.slice();if(!r)return{t:qe,l:0};if(r==1){var i=new M(n[0].s+1);return i[n[0].s]=1,{t:i,l:1}}n.sort(function(I,S){return I.f-S.f}),n.push({s:-1,f:25001});var l=n[0],s=n[1],c=0,d=1,u=2;for(n[0]={s:-1,f:l.f+s.f,l,r:s};d!=r-1;)l=n[n[c].f<n[u].f?c++:u++],s=n[c!=d&&n[c].f<n[u].f?c++:u++],n[d++]={s:-1,f:l.f+s.f,l,r:s};for(var f=o[0].s,a=1;a<r;++a)o[a].s>f&&(f=o[a].s);var m=new R(f+1),y=Kt(n[d-1],m,0);if(y>e){var a=0,h=0,v=y-e,H=1<<v;for(o.sort(function(S,C){return m[C.s]-m[S.s]||S.f-C.f});a<r;++a){var D=o[a].s;if(m[D]>e)h+=H-(1<<y-m[D]),m[D]=e;else break}for(h>>=v;h>0;){var X=o[a].s;m[X]<e?h-=1<<e-m[X]++-1:++a}for(;a>=0&&h;--a){var j=o[a].s;m[j]==e&&(--m[j],++h)}y=e}return{t:new M(m),l:y}},Kt=function(t,e,n){return t.s==-1?Math.max(Kt(t.l,e,n+1),Kt(t.r,e,n+1)):e[t.s]=n},Ce=function(t){for(var e=t.length;e&&!t[--e];);for(var n=new R(++e),a=0,r=t[0],o=1,i=function(s){n[a++]=s},l=1;l<=e;++l)if(t[l]==r&&l!=e)++o;else{if(!r&&o>2){for(;o>138;o-=138)i(32754);o>2&&(i(o>10?o-11<<5|28690:o-3<<5|12305),o=0)}else if(o>3){for(i(r),--o;o>6;o-=6)i(8304);o>2&&(i(o-3<<5|8208),o=0)}for(;o--;)i(r);o=1,r=t[l]}return{c:n.subarray(0,a),n:e}},bt=function(t,e){for(var n=0,a=0;a<e.length;++a)n+=t[a]*e[a];return n},Je=function(t,e,n){var a=n.length,r=ge(e+2);t[r]=a&255,t[r+1]=a>>8,t[r+2]=t[r]^255,t[r+3]=t[r+1]^255;for(var o=0;o<a;++o)t[r+o+4]=n[o];return(r+4+a)*8},ze=function(t,e,n,a,r,o,i,l,s,c,d){tt(e,d++,n),++r[256];for(var u=Ot(r,15),f=u.t,m=u.l,y=Ot(o,15),h=y.t,v=y.l,H=Ce(f),D=H.c,X=H.n,j=Ce(h),I=j.c,S=j.n,C=new R(19),g=0;g<D.length;++g)++C[D[g]&31];for(var g=0;g<I.length;++g)++C[I[g]&31];for(var p=Ot(C,7),F=p.t,nt=p.l,U=19;U>4&&!F[Zt[U-1]];--U);var L=c+5<<3,z=bt(r,rt)+bt(o,kt)+i,P=bt(r,f)+bt(o,h)+i+14+3*U+bt(C,F)+2*C[16]+3*C[17]+7*C[18];if(s>=0&&L<=z&&L<=P)return Je(e,d,t.subarray(s,s+c));var E,w,B,_;if(tt(e,d,1+(P<z)),d+=2,P<z){E=q(f,m,0),w=f,B=q(h,v,0),_=h;var pt=q(F,nt,0);tt(e,d,X-257),tt(e,d+5,S-1),tt(e,d+10,U-4),d+=14;for(var g=0;g<U;++g)tt(e,d+3*g,F[Zt[g]]);d+=3*U;for(var V=[D,I],Q=0;Q<2;++Q)for(var $=V[Q],g=0;g<$.length;++g){var O=$[g]&31;tt(e,d,pt[O]),d+=F[O],O>15&&(tt(e,d,$[g]>>5&127),d+=$[g]>>12)}}else E=Qn,w=rt,B=ea,_=kt;for(var g=0;g<l;++g){var x=a[g];if(x>255){var O=x>>18&31;wt(e,d,E[O+257]),d+=w[O+257],O>7&&(tt(e,d,x>>23&31),d+=It[O]);var J=x&31;wt(e,d,B[J]),d+=_[J],J>3&&(wt(e,d,x>>5&8191),d+=Ft[J])}else wt(e,d,E[x]),d+=w[x]}return wt(e,d,E[256]),d+w[256]},oa=new he([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),qe=new M(0),ia=function(t,e,n,a,r,o){var i=o.z||t.length,l=new M(a+i+5*(1+Math.ceil(i/7e3))+r),s=l.subarray(a,l.length-r),c=o.l,d=(o.r||0)&7;if(e){d&&(s[0]=o.r>>3);for(var u=oa[e-1],f=u>>13,m=u&8191,y=(1<<n)-1,h=o.p||new R(32768),v=o.h||new R(y+1),H=Math.ceil(n/3),D=2*H,X=function(jt){return(t[jt]^t[jt+1]<<H^t[jt+2]<<D)&y},j=new he(25e3),I=new R(288),S=new R(32),C=0,g=0,p=o.i||0,F=0,nt=o.w||0,U=0;p+2<i;++p){var L=X(p),z=p&32767,P=v[L];if(h[z]=P,v[L]=z,nt<=p){var E=i-p;if((C>7e3||F>24576)&&(E>423||!c)){d=ze(t,s,0,j,I,S,g,F,U,p-U,d),F=C=g=0,U=p;for(var w=0;w<286;++w)I[w]=0;for(var w=0;w<30;++w)S[w]=0}var B=2,_=0,pt=m,V=z-P&32767;if(E>2&&L==X(p-V))for(var Q=Math.min(f,E)-1,$=Math.min(32767,p),O=Math.min(258,E);V<=$&&--pt&&z!=P;){if(t[p+B]==t[p+B-V]){for(var x=0;x<O&&t[p+x]==t[p+x-V];++x);if(x>B){if(B=x,_=V,x>Q)break;for(var J=Math.min(V,x-2),lt=0,w=0;w<J;++w){var st=p-V+w&32767,Ct=h[st],zt=st-Ct&32767;zt>lt&&(lt=zt,P=st)}}}z=P,P=h[z],V+=z-P&32767}if(_){j[F++]=268435456|Xt[B]<<18|Me[_];var yt=Xt[B]&31,vt=Me[_]&31;g+=It[yt]+Ft[vt],++I[257+yt],++S[vt],nt=p+B,++C}else j[F++]=t[p],++I[t[p]]}}for(p=Math.max(p,nt);p<i;++p)j[F++]=t[p],++I[t[p]];d=ze(t,s,c,j,I,S,g,F,U,p-U,d),c||(o.r=d&7|s[d/8|0]<<3,d-=7,o.h=v,o.p=h,o.i=p,o.w=nt)}else{for(var p=o.w||0;p<i+c;p+=65535){var ct=p+65535;ct>=i&&(s[d/8|0]=c,ct=i),d=Je(s,d+1,t.subarray(p,ct))}o.i=i}return Bt(l,0,a+ge(d)+r)},la=(function(){for(var t=new Int32Array(256),e=0;e<256;++e){for(var n=e,a=9;--a;)n=(n&1&&-306674912)^n>>>1;t[e]=n}return t})(),sa=function(){var t=-1;return{p:function(e){for(var n=t,a=0;a<e.length;++a)n=la[n&255^e[a]]^n>>>8;t=n},d:function(){return~t}}},ca=function(t,e,n,a,r){if(!r&&(r={l:1},e.dictionary)){var o=e.dictionary.subarray(-32768),i=new M(o.length+t.length);i.set(o),i.set(t,o.length),t=i,r.w=o.length}return ia(t,e.level==null?6:e.level,e.mem==null?r.l?Math.ceil(Math.max(8,Math.min(13,Math.log(t.length)))*1.5):20:12+e.mem,n,a,r)},Wt=function(t,e,n){for(;n;++e)t[e]=n,n>>>=8},da=function(t,e){var n=e.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=e.level<2?4:e.level==9?2:0,t[9]=3,e.mtime!=0&&Wt(t,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),n){t[3]=8;for(var a=0;a<=n.length;++a)t[a+10]=n.charCodeAt(a)}},ua=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&Y(6,"invalid gzip data");var e=t[3],n=10;e&4&&(n+=(t[10]|t[11]<<8)+2);for(var a=(e>>3&1)+(e>>4&1);a>0;a-=!t[n++]);return n+(e&2)},fa=function(t){var e=t.length;return(t[e-4]|t[e-3]<<8|t[e-2]<<16|t[e-1]<<24)>>>0},ma=function(t){return 10+(t.filename?t.filename.length+1:0)};function ha(t,e){e||(e={});var n=sa(),a=t.length;n.p(t);var r=ca(t,e,ma(e),8),o=r.length;return da(r,e),Wt(r,o-8,n.d()),Wt(r,o-4,a),r}function ga(t,e){var n=ua(t);return n+8>t.length&&Y(6,"invalid gzip data"),ra(t.subarray(n,-8),{i:2},new M(fa(t)),e)}var Se=typeof TextEncoder<"u"&&new TextEncoder,Jt=typeof TextDecoder<"u"&&new TextDecoder,pa=0;try{Jt.decode(qe,{stream:!0}),pa=1}catch{}var ya=function(t){for(var e="",n=0;;){var a=t[n++],r=(a>127)+(a>223)+(a>239);if(n+r>t.length)return{s:e,r:Bt(t,n-1)};r?r==3?(a=((a&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|a>>10,56320|a&1023)):r&1?e+=String.fromCharCode((a&31)<<6|t[n++]&63):e+=String.fromCharCode((a&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(a)}};function va(t,e){var n;if(Se)return Se.encode(t);for(var a=t.length,r=new M(t.length+(t.length>>1)),o=0,i=function(d){r[o++]=d},n=0;n<a;++n){if(o+5>r.length){var l=new M(o+8+(a-n<<1));l.set(r),r=l}var s=t.charCodeAt(n);s<128||e?i(s):s<2048?(i(192|s>>6),i(128|s&63)):s>55295&&s<57344?(s=65536+(s&1047552)|t.charCodeAt(++n)&1023,i(240|s>>18),i(128|s>>12&63),i(128|s>>6&63),i(128|s&63)):(i(224|s>>12),i(128|s>>6&63),i(128|s&63))}return Bt(r,0,o)}function wa(t,e){var r;if(Jt)return Jt.decode(t);var n=ya(t),a=n.s,r=n.r;return r.length&&Y(8),a}const ba="gzip";function xa(t){return{bytes:ha(t),compression:ba}}function Aa(t){return ga(t)}const Qe=1480934209,qt=1,Qt=2,te=4,ee=8,ne=1,ae=2,re=4,oe=8,ie=16,tn=32;function ka(t){if(t.version!==it)throw new Error(`Unsupported snapshot version: ${t.version}`);const e=new Ta;e.writeU32(Qe),e.writeU8(it),e.writeU8(0),e.writeU8(0),e.writeU8(0),e.writeJson(t.meta),e.writeJson(t.layers),e.writeString(t.activeLayoutBtrId),e.writeU32(t.layouts.length);for(const n of t.layouts)Ca(e,n);return e.toUint8Array()}function Ma(t){const e=new Ia(t);if(e.readU32()!==Qe)throw new Error("Invalid snapshot magic");const n=e.readU8();if(e.readU8(),e.readU8(),e.readU8(),n!==it)throw new Error(`Unsupported snapshot version: ${n}`);const a=e.readJson(),r=e.readJson(),o=e.readString(),i=e.readU32(),l=[];for(let s=0;s<i;s++)l.push(za(e));return{version:it,meta:a,layers:r,layouts:l,activeLayoutBtrId:o}}function Ca(t,e){t.writeString(e.btrId),t.writeString(e.name),t.writeU8(e.isModelSpace?1:0),t.writeJson(e.osnap??null),t.writeU32(e.lineBatches.length);for(const n of e.lineBatches)Sa(t,n);t.writeU32(e.meshBatches.length);for(const n of e.meshBatches)Ua(t,n)}function za(t){const e=t.readString(),n=t.readString(),a=t.readU8()!==0,r=t.readJson()??void 0,o=t.readU32(),i=[];for(let c=0;c<o;c++)i.push(La(t));const l=t.readU32(),s=[];for(let c=0;c<l;c++)s.push(Pa(t));return{btrId:e,name:n,isModelSpace:a,lineBatches:i,meshBatches:s,osnap:r}}function Sa(t,e){t.writeString(e.layer),t.writeU32(e.color>>>0),t.writeF64(e.offset[0]),t.writeF64(e.offset[1]),t.writeF64(e.offset[2]),t.writeFloat32Array(e.positions);let n=0;e.indices&&e.indices.length>0&&(n|=qt),e.linePattern&&(n|=Qt),e.lineDistances&&e.lineDistances.length>0&&(n|=te),e.lineWidth!=null&&e.lineWidth>0&&(n|=ee),t.writeU8(n),n&qt&&t.writeUint32Array(e.indices),n&Qt&&t.writeJson(e.linePattern),n&te&&t.writeFloat32Array(e.lineDistances),n&ee&&t.writeF32(e.lineWidth)}function La(t){const e=t.readString(),n=t.readU32(),a=[t.readF64(),t.readF64(),t.readF64()],r=t.readFloat32Array(),o=t.readU8(),i={layer:e,color:n,offset:a,positions:r};return o&qt&&(i.indices=t.readUint32Array()),o&Qt&&(i.linePattern=t.readJson()),o&te&&(i.lineDistances=t.readFloat32Array()),o&ee&&(i.lineWidth=t.readF32()),i}function Ua(t,e){t.writeString(e.layer),t.writeU32(e.color>>>0),t.writeF64(e.offset[0]),t.writeF64(e.offset[1]),t.writeF64(e.offset[2]),t.writeFloat32Array(e.positions);let n=0;e.indices&&e.indices.length>0&&(n|=ne),e.hatchPattern&&(n|=ae),e.gradientFill&&(n|=re),e.gradientPositions&&e.gradientPositions.length>0&&(n|=oe),e.side!=null&&(n|=ie),e.points&&(n|=tn),t.writeU8(n),n&ne&&t.writeUint32Array(e.indices),n&ae&&t.writeJson(e.hatchPattern),n&re&&t.writeJson(e.gradientFill),n&oe&&t.writeFloat32Array(e.gradientPositions),n&ie&&t.writeU8(e.side)}function Pa(t){const e=t.readString(),n=t.readU32(),a=[t.readF64(),t.readF64(),t.readF64()],r=t.readFloat32Array(),o=t.readU8(),i={layer:e,color:n,offset:a,positions:r};return o&ne&&(i.indices=t.readUint32Array()),o&ae&&(i.hatchPattern=t.readJson()),o&re&&(i.gradientFill=t.readJson()),o&oe&&(i.gradientPositions=t.readFloat32Array()),o&ie&&(i.side=t.readU8()),o&tn&&(i.points=!0),i}class Ta{constructor(){this.chunks=[],this.length=0}writeU8(e){const n=new Uint8Array(1);n[0]=e&255,this.chunks.push(n),this.length+=1}writeU32(e){const n=new Uint8Array(4);new DataView(n.buffer).setUint32(0,e>>>0,!0),this.chunks.push(n),this.length+=4}writeF32(e){const n=new Uint8Array(4);new DataView(n.buffer).setFloat32(0,e,!0),this.chunks.push(n),this.length+=4}writeF64(e){const n=new Uint8Array(8);new DataView(n.buffer).setFloat64(0,e,!0),this.chunks.push(n),this.length+=8}writeBytes(e){this.chunks.push(e),this.length+=e.length}writeString(e){const n=va(e);this.writeU32(n.length),this.writeBytes(n)}writeJson(e){this.writeString(JSON.stringify(e))}writeFloat32Array(e){this.alignTo(4);const n=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);this.writeU32(n.length),this.writeBytes(n)}writeUint32Array(e){this.alignTo(4);const n=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);this.writeU32(n.length),this.writeBytes(n)}alignTo(e){const n=this.length%e;if(n===0)return;const a=e-n;for(let r=0;r<a;r++)this.writeU8(0)}toUint8Array(){const e=new Uint8Array(this.length);let n=0;for(const a of this.chunks)e.set(a,n),n+=a.length;return e}}class Ia{constructor(e){this.bytes=e,this.offset=0}readU8(){return this.bytes[this.offset++]}readU32(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getUint32(0,!0);return this.offset+=4,e}readF32(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,4).getFloat32(0,!0);return this.offset+=4,e}readF64(){const e=new DataView(this.bytes.buffer,this.bytes.byteOffset+this.offset,8).getFloat64(0,!0);return this.offset+=8,e}readBytes(e){const n=this.bytes.subarray(this.offset,this.offset+e);return this.offset+=e,n}readString(){const e=this.readU32();return e===0?"":wa(this.readBytes(e))}readJson(){const e=this.readString();if(e.length===0)throw new Error("Expected JSON payload");return JSON.parse(e)}alignTo(e){const n=this.offset%e;n!==0&&(this.offset+=e-n)}readFloat32Array(){this.alignTo(4);const e=this.readU32();if(e===0)return new Float32Array(0);if(e%4!==0)throw new Error("Invalid float32 buffer length");const n=this.readBytes(e);if(n.byteOffset%4===0)return new Float32Array(n.buffer,n.byteOffset,e/4);const a=new ArrayBuffer(e);return new Uint8Array(a).set(n),new Float32Array(a)}readUint32Array(){this.alignTo(4);const e=this.readU32();if(e===0)return new Uint32Array(0);if(e%4!==0)throw new Error("Invalid uint32 buffer length");const n=this.readBytes(e);if(n.byteOffset%4===0)return new Uint32Array(n.buffer,n.byteOffset,e/4);const a=new ArrayBuffer(e);return new Uint8Array(a).set(n),new Uint32Array(a)}}const Fa="application/vnd.mlightcad.acex-snapshot+binary";function Ba(t){if(t.version!==it)throw new Error(`Unsupported snapshot version: ${t.version}`);const e=ka(t),n=xa(e);return{payload:ja(n.bytes),compression:n.compression}}function Bo(t){const e=Da(t.trim()),n=Aa(e);return Ma(n)}function Ha(){return Fa}function ja(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return btoa(e)}function Da(t){const e=atob(t),n=new Uint8Array(e.length);for(let a=0;a<e.length;a++)n[a]=e.charCodeAt(a);return n}function ht(t,e,n){if(n<=0)return new Float32Array(0);const a=new Float32Array(n);for(let r=0;r<n;r++)a[r]=t[e+r];return a}function Ea(t,e,n){if(n<=0)return new Uint32Array(0);const a=new Uint32Array(n);for(let r=0;r<n;r++)a[r]=t[e+r];return a}function en(t,e){if(e.length===0)return{positions:t,indices:e};let n=0;for(let r=0;r<e.length;r++){const o=e[r];o>n&&(n=o)}const a=(n+1)*3;return a>=t.length?{positions:t,indices:e}:{positions:ht(t,0,a),indices:e}}function Le(t,e){return t+e}const dt={x:0,y:0,z:0};function $a(t){t.updateMatrixWorld(!0);const e=t.matrixWorld.elements;return dt.x=e[12],dt.y=e[13],dt.z=e[14],[dt.x,dt.y,dt.z]}function Oa(t,e){const n=e.elements,a=t.positions;if(a.length===0)return{positions:new Float32Array(0),indices:t.indices};const r=new Float32Array(a.length);for(let o=0;o<a.length;o+=3){const i=a[o],l=a[o+1],s=a[o+2];r[o]=n[0]*i+n[4]*l+n[8]*s+n[12],r[o+1]=n[1]*i+n[5]*l+n[9]*s+n[13],r[o+2]=n[2]*i+n[6]*l+n[10]*s+n[14]}return{positions:r,indices:t.indices?new Uint32Array(t.indices):void 0}}function Ra(t){const e=t.positions;if(e.length<3)return{slice:t,offset:[0,0,0]};let n=1/0,a=1/0,r=1/0,o=-1/0,i=-1/0,l=-1/0;for(let d=0;d<e.length;d+=3){const u=e[d],f=e[d+1],m=e[d+2];n=Math.min(n,u),a=Math.min(a,f),r=Math.min(r,m),o=Math.max(o,u),i=Math.max(i,f),l=Math.max(l,m)}const s=[(n+o)/2,(a+i)/2,(r+l)/2],c=new Float32Array(e.length);for(let d=0;d<e.length;d+=3)c[d]=e[d]-s[0],c[d+1]=e[d+1]-s[1],c[d+2]=e[d+2]-s[2];return{slice:{positions:c,indices:t.indices?new Uint32Array(t.indices):void 0},offset:s}}function _a(t,e,n={}){t.updateMatrixWorld(!0);const a=Oa(e,t.matrixWorld);return n.preserveWorldSpaceForPatternFill?{slice:a,offset:[0,0,0]}:Ra(a)}function pe(t){const e=t;if(e.isShaderMaterial===!0||t.type==="ShaderMaterial")return e}function Va(t){var e;const n=pe(t);if(!n)return;const a=n.uniforms.pattern,r=n.uniforms.patternLength;if(!a||!r)return;const o=a.value;if(!(!Array.isArray(o)||o.length===0))return{pattern:[...o],patternLength:Number(r.value),viewportScale:Number(((e=n.uniforms.u_viewportScale)==null?void 0:e.value)??1)}}function Na(t){var e;const n=pe(t);if(!n)return;const a=n.uniforms.u_patternLines;if(!a)return;const r=a.value;if(!(!Array.isArray(r)||r.length===0))return{patternAngle:Number(((e=n.uniforms.u_patternAngle)==null?void 0:e.value)??0),patternLines:r.map(Za)}}function Ya(t){var e,n,a,r,o;const i=pe(t);if(!i||i.uniforms.u_patternLines)return;const l=(e=i.uniforms.u_startColor)==null?void 0:e.value,s=(n=i.uniforms.u_endColor)==null?void 0:n.value,c=i.uniforms.u_gradientType;if(!(!(l!=null&&l.getHex)||c==null))return{startColor:l.getHex(),endColor:((a=s==null?void 0:s.getHex)==null?void 0:a.call(s))??l.getHex(),angle:Number(((r=i.uniforms.u_angle)==null?void 0:r.value)??0),shift:Number(((o=i.uniforms.u_shift)==null?void 0:o.value)??0),gradientType:Number(c.value)}}function Za(t){return{angle:t.angle,base:[t.base.x,t.base.y],offset:[t.offset.x,t.offset.y],dashLengths:[...t.dashLengths],patternLength:t.patternLength}}function nn(t){const e=t.length/3;if(e<2)return new Float32Array(0);const n=new Float32Array(e);for(let a=0;a<e;a+=2){a===0?n[a]=0:n[a]=n[a-1];const r=t[a*3],o=t[a*3+1],i=t[a*3+2]??0,l=t[(a+1)*3],s=t[(a+1)*3+1],c=t[(a+1)*3+2]??0,d=l-r,u=s-o,f=c-i;n[a+1]=n[a]+Math.sqrt(d*d+u*u+f*f)}return n}function Xa(t,e){const n=t.getAttribute(e);if(!n||n.count===0)return;const a=n.itemSize;if(t.getIndex()){const d=n.array;return ht(d,0,n.count*a)}const r=t.drawRange,o=n.count,i=Math.max(0,Math.min(Math.floor(r.start),o)),l=Math.max(0,o-i),s=!Number.isFinite(r.count)||r.count<=0?l:Math.min(Math.floor(r.count),l);if(s<=0)return;const c=n.array;return ht(c,i*a,s*a)}function Ga(t,e){const n=Math.atan2(e[1],e[0]),a=(o,i)=>[e[0]*o+e[4]*i+e[12],e[1]*o+e[5]*i+e[13]],r=(o,i)=>[e[0]*o+e[4]*i,e[1]*o+e[5]*i];return{patternAngle:t.patternAngle+n,patternLines:t.patternLines.map(o=>({angle:o.angle+n,base:a(o.base[0],o.base[1]),offset:r(o.offset[0],o.offset[1]),dashLengths:[...o.dashLengths],patternLength:o.patternLength}))}}function le(t,e){return!Number.isFinite(t)||t<0?0:Math.min(Math.floor(t),e)}function se(t,e,n){const a=Math.max(0,e-n);return!Number.isFinite(t)||t<=0?a:Math.min(Math.floor(t),a)}function Ue(t){const e=t.getAttribute("position");if(!e)return{positions:new Float32Array(0)};const n=t.drawRange,a=e.array,r=e.itemSize,o=t.getIndex();if(o){const s=ht(a,0,e.count*r),c=o.array,d=le(n.start,o.count),u=se(n.count,o.count,d),f=Ea(c,d,u);return en(s,f)}const i=le(n.start,e.count),l=se(n.count,e.count,i);return{positions:ht(a,i*r,l*r)}}function ce(t){return gn(t.flags)&&pn(t.flags)}function ye(t,e){const n=e.getAttribute("position");if(!n)return{positions:new Float32Array(0)};const a=n.itemSize,r=n.array,o=e.getIndex(),{count:i}=t.mappingStats;if(o){const s=ht(r,0,n.count*a),c=o.array,d=[];for(let u=0;u<i;u++){let f;try{f=t.getGeometryRangeAt(u)}catch{continue}const m=f.indexStart??0,y=f.indexCount??0;if(!(!ce(f)||y<=0))for(let h=0;h<y;h++)d.push(c[m+h])}return d.length===0?{positions:new Float32Array(0)}:en(s,new Uint32Array(d))}const l=[];for(let s=0;s<i;s++){let c;try{c=t.getGeometryRangeAt(s)}catch{continue}if(!ce(c)||c.vertexCount<=0)continue;const d=c.vertexStart*a,u=c.vertexCount*a;for(let f=0;f<u;f++)l.push(r[d+f])}return{positions:new Float32Array(l)}}function Lt(t,e,n){t.push(e.getX(n),e.getY(n),e.getZ(n))}function Ka(t,e){const n=e.getAttribute("instanceStart"),a=e.getAttribute("instanceEnd");if(!n||!a)return{positions:new Float32Array(0)};const{count:r}=t.mappingStats,o=[];for(let i=0;i<r;i++){let l;try{l=t.getGeometryRangeAt(i)}catch{continue}if(!ce(l)||l.vertexCount<=0)continue;const s=l.vertexStart,c=s+l.vertexCount;for(let d=s;d<c;d++)Lt(o,n,d),Lt(o,a,d)}return{positions:new Float32Array(o)}}function Wa(t,e){const n=t.instanceCount;if(Number.isFinite(n)&&n>=0)return Math.min(Math.floor(n),e);const a=t.drawRange,r=le(a.start,e);return se(a.count,e,r)}function Ja(t){const e=t.getAttribute("instanceStart"),n=t.getAttribute("instanceEnd");if(!e||!n||e.count===0)return{positions:new Float32Array(0)};const a=Wa(t,e.count);if(a<=0)return{positions:new Float32Array(0)};const r=[];for(let o=0;o<a;o++)Lt(r,e,o),Lt(r,n,o);return{positions:new Float32Array(r)}}function Rt(t){return mn(t)}function an(t){if(t instanceof xn)return t.linewidth}function _t(t){if("material"in t){const e=t.userData.originalMaterial??t.material;return Array.isArray(e)?e[0]:e}return t.material}function mt(t){var e;const n=hn(t),a=n.layer??"0",r=t;let o=r.color!=null?r.color.getHex():n.color??16777215;const i=Va(t),l=Na(t),s=Ya(t);if(t instanceof bn||t.type==="ShaderMaterial"){const c=(e=t.uniforms.u_color)==null?void 0:e.value;c!=null&&c.getHex?o=c.getHex():s&&(o=s.startColor)}return{color:o,layer:a,linePattern:i,hatchPattern:l,gradientFill:s,side:l||s?t.side:void 0}}function qa(t,e){if(!e)return;const n=t.userData.bakedWorldMatrix;return!n||n.length<16?e:Ga(e,n)}function Ht(t){return $a(t)}function Vt(t,e,n={}){const a=_a(t,e,n);return{...a.slice,offset:a.offset}}function ve(t,e,n,a,r){const o=mt(e),i=qa(n,o.hatchPattern),l=o.gradientFill?Xa(t,"gradientPosition"):void 0;return{layer:o.layer,color:o.color,offset:r,hatchPattern:i,gradientFill:o.gradientFill,gradientPositions:l,side:o.side,...a}}function Qa(t){const e=Ka(t,t.geometry);if(e.positions.length===0)return;const{color:n,layer:a}=mt(t.material),r=an(t.material);return{layer:a,color:n,offset:Ht(t),lineWidth:r,...e}}function tr(t){const e=ye(t,t.geometry);if(e.positions.length===0)return;const{color:n,layer:a,linePattern:r}=mt(t.material),o=r?nn(e.positions):void 0;return{layer:a,color:n,offset:Ht(t),linePattern:r,lineDistances:o,...e}}function er(t){const e=ye(t,t.geometry);if(e.positions.length!==0)return ve(t.geometry,t.material,t,e,Ht(t))}function nr(t){const e=ye(t,t.geometry);if(e.positions.length!==0)return{points:!0,...ve(t.geometry,t.material,t,e,Ht(t))}}function Pe(t){const e=[],n=[];return t.traverse(a=>{if(!(cn(a)||dn(a))){if(a instanceof Ae){const r=tr(a);r&&e.push(r);return}if(a instanceof un){const r=Qa(a);r&&e.push(r);return}if(a instanceof ke){const r=er(a);r&&n.push(r);return}if(a instanceof fn){const r=nr(a);r&&n.push(r);return}if(a instanceof yn){if(!Rt(a))return;const r=Ja(a.geometry);if(r.positions.length===0)return;const o=_t(a),{color:i,layer:l}=mt(o),{offset:s,...c}=Vt(a,r);e.push({layer:l,color:i,offset:s,lineWidth:an(o),...c})}else if(a instanceof vn&&!(a instanceof Ae)){if(!Rt(a))return;const r=Ue(a.geometry);if(r.positions.length===0)return;const o=_t(a),{color:i,layer:l,linePattern:s}=mt(o),{offset:c,...d}=Vt(a,r),u=s?nn(d.positions):void 0;e.push({layer:l,color:i,offset:c,linePattern:s,lineDistances:u,...d})}else if(a instanceof wn&&!(a instanceof ke)){if(!Rt(a))return;const r=Ue(a.geometry);if(r.positions.length===0)return;const o=_t(a),i=mt(o),{offset:l,...s}=Vt(a,r,{preserveWorldSpaceForPatternFill:!!i.hatchPattern});n.push(ve(a.geometry,o,a,s,l))}}}),{lineBatches:e,meshBatches:n}}function Te(t,e){const n=t.extmin,a=t.extmax;return{title:e==null?void 0:e.title,extents:{minX:n.x,minY:n.y,maxX:a.x,maxY:a.y},units:{insunits:t.insunits,lunits:t.lunits,luprec:t.luprec,aunits:t.aunits,auprec:t.auprec,measurement:t.measurement,ltscale:t.ltscale,angbase:t.angbase,angdir:t.angdir},background:(e==null?void 0:e.background)??0}}const Ho=["endpoint","midpoint","center","quadrant","intersection","nearest"];function we(t){return t.z>=0?1:-1}const ar=1e6;function k(t,e){const n=new W(e.x,e.y,e.z??0).applyMatrix4(t);return{x:n.x,y:n.y}}function rr(t){const e=t.elements;return new fe(e[0],e[4],e[8],e[12],e[1],e[5],e[9],e[13],e[2],e[6],e[10],e[14],e[3],e[7],e[11],e[15])}function Ut(t,e){return new fe().multiplyMatrices(t,rr(e))}function be(t,e){const n=new W(e.x,e.y,e.z??0).transformDirection(t).normalize();return{x:n.x,y:n.y}}function de(t){const e=new W(t.elements[0],t.elements[1],t.elements[2]).length(),n=new W(t.elements[4],t.elements[5],t.elements[6]).length();return Tt.equal(e,n,Ze*Math.max(e,n,1))}function or(t,e){const n=t.tables.blockTable.getIdAt(e);if(n)return n;for(const r of t.tables.blockTable.newIterator())if(r.objectId===e)return r;const a=t.tables.blockTable.modelSpace;if(a.objectId===e)return a}function ir(t){if(t instanceof Kn)return!0;const e=t;return(e.type==="LINE"||e.type==="Line")&&e.startPoint!=null&&e.endPoint!=null}function lr(t,e,n,a){et(t,e,n,a.startPoint,a.endPoint)}function rn(t,e){return t.blockTableRecord??(t.blockName?e.tables.blockTable.getAt(t.blockName):void 0)}function sr(t,e){const n=t.dimBlockId;return n?e.tables.blockTable.getAt(n):void 0}function cr(t,e){const n=rn(t,e);if(n)return n;const a=t.owningBlockRecordId;return a?e.tables.blockTable.getAt(a):void 0}function on(t){return t.getFullInsertionTransform()}function dr(t){for(const e of t.newIterator())return!0;return!1}function ur(t){return typeof t.getFullInsertionTransform=="function"&&"blockTableRecord"in t}function et(t,e,n,a,r){const o=k(n,a),i=k(n,r),l={kind:"line",layer:e,x0:o.x,y0:o.y,x1:i.x,y1:i.y};t.push(l)}function Ie(t,e,n,a,r,o){const i=k(n,a),l=be(n,r),s=Math.hypot(l.x,l.y)||1,c=l.x/s,d=l.y/s,u=ar,f=o?i.x-c*u:i.x,m=o?i.y-d*u:i.y,y=i.x+c*u,h=i.y+d*u;t.push({kind:"line",layer:e,x0:f,y0:m,x1:y,y1:h})}function ot(t,e,n,a,r){if(a.length<2)return;const o=r?a.length:a.length-1;for(let i=0;i<o;i++)et(t,e,n,a[i],a[(i+1)%a.length])}function fr(t,e,n,a){const r=[a.startPosition];for(const o of a.segments)r.push(o.position);ot(t,e,n,r,a.closed)}function mr(t,e,n){if(n.vertices.length>=2)return n.vertices;if(n.vertices.length===0)return[];const a=n.vertices[0],r=e.lastLeaderLinePoint??e.landingPoint??t.landingPoint??t.contentBasePosition;if(!r)return n.vertices;const o=a.x-r.x,i=a.y-r.y,l=(a.z??0)-(r.z??0);return Math.hypot(o,i,l)<=Ze?n.vertices:[a,r]}function hr(t,e,n,a){var r,o;for(const l of a.leaders)for(const s of l.leaderLines){const c=mr(a,l,s);ot(t,e,n,c,!1)}const i=l=>{if(!l)return;const s=k(n,l);t.push({kind:"point",layer:e,x:s.x,y:s.y})};i(a.contentBasePosition),i((r=a.mtextContent)==null?void 0:r.anchorPoint),i((o=a.blockContent)==null?void 0:o.position)}function gr(t,e,n,a){const r=a.numberOfVertices;if(r<2)return;const o=a.elevation,i=a.closed?r:r-1;for(let l=0;l<i;l++){const s=a.getPointAt(l),c=a.getPointAt((l+1)%r),d=a.getBulgeAt(l),u={x:s.x,y:s.y,z:o},f={x:c.x,y:c.y,z:o};if(Tt.isPositive(Math.abs(d))){const m=k(n,u),y=k(n,f),h=new gt(m,y,d),v=h.center;t.push({kind:"arc",layer:e,cx:v.x,cy:v.y,r:h.radius,startAngle:h.startAngle,endAngle:h.endAngle,normalSign:h.clockwise?-1:1})}else et(t,e,n,u,f)}}function pr(t,e,n,a,r,o){const i=k(n,a),l=new W(n.elements[0],n.elements[1],n.elements[2]).length(),s={kind:"circle",layer:e,cx:i.x,cy:i.y,r:r*l,normalSign:we(o)};t.push(s)}function yr(t,e,n,a){const r=k(n,a.center),o=new W(n.elements[0],n.elements[1],n.elements[2]).length(),i={kind:"arc",layer:e,cx:r.x,cy:r.y,r:a.radius*o,startAngle:a.startAngle,endAngle:a.endAngle,normalSign:we(a.normal)};t.push(i)}function Nt(t,e,n,a){const r=k(n,a.center),o=a._geo,i=(o==null?void 0:o.majorAxis)??{x:1,y:0,z:0},l=be(n,i),s=Math.hypot(l.x,l.y)||1,c=new W(n.elements[0],n.elements[1],n.elements[2]).length(),d=new W(n.elements[4],n.elements[5],n.elements[6]).length(),u={kind:"ellipse",layer:e,cx:r.x,cy:r.y,majorX:l.x/s,majorY:l.y/s,majorR:a.majorAxisRadius*c,minorR:a.minorAxisRadius*d,startAngle:a.startAngle,endAngle:a.endAngle,closed:a.closed,normalSign:we(a.normal)};t.push(u)}function vr(t,e,n,a){var r,o;const i=a._geo;if(!((r=i==null?void 0:i.controlPoints)!=null&&r.length))return;const l=[];for(const c of i.controlPoints){const d=k(n,c);l.push(d.x,d.y)}const s={kind:"spline",layer:e,controlPoints:l,degree:i.degree??3,knots:[...i.knots??[]],weights:[...i.weights??[]],closed:i.closed??!1};if((o=i.fitPoints)!=null&&o.length){s.fitPoints=[];for(const c of i.fitPoints){const d=k(n,c);s.fitPoints.push(d.x,d.y)}}t.push(s)}function wr(t,e,n,a){var r;const o=(r=a._geo)==null?void 0:r.vertices,i=o&&o.length>1?o.map(c=>({x:c.x,y:c.y,bulge:c.bulge})):Array.from({length:a.numberOfVertices},(c,d)=>{const u=a.getPoint2dAt(d);return{x:u.x,y:u.y,bulge:0}}),l=i.length;if(l<2)return;const s=a.closed?l:l-1;for(let c=0;c<s;c++){const d=i[c],u=i[(c+1)%l],f=d.bulge??0;if(Tt.isPositive(Math.abs(f))){const m=k(n,{x:d.x,y:d.y,z:0}),y=k(n,{x:u.x,y:u.y,z:0}),h=new gt(m,y,f),v=h.center;t.push({kind:"arc",layer:e,cx:v.x,cy:v.y,r:h.radius,startAngle:h.startAngle,endAngle:h.endAngle,normalSign:h.clockwise?-1:1})}else et(t,e,n,{x:d.x,y:d.y,z:0},{x:u.x,y:u.y,z:0})}}function br(t,e,n,a,r){if(de(n)){const o=k(n,{x:a.center.x,y:a.center.y,z:r}),i=new W(n.elements[0],n.elements[1],n.elements[2]).length();t.push({kind:"arc",layer:e,cx:o.x,cy:o.y,r:a.radius*i,startAngle:a.startAngle,endAngle:a.endAngle,normalSign:a.clockwise?-1:1});return}et(t,e,n,{x:a.startPoint.x,y:a.startPoint.y,z:r},{x:a.endPoint.x,y:a.endPoint.y,z:r})}function xr(t,e,n,a,r){const o=k(n,{x:a.center.x,y:a.center.y,z:r}),i=be(n,{x:Math.cos(a.rotation),y:Math.sin(a.rotation),z:0}),l=Math.hypot(i.x,i.y)||1,s=new W(n.elements[0],n.elements[1],n.elements[2]).length(),c=new W(n.elements[4],n.elements[5],n.elements[6]).length();t.push({kind:"ellipse",layer:e,cx:o.x,cy:o.y,majorX:i.x/l,majorY:i.y/l,majorR:a.majorAxisRadius*s,minorR:a.minorAxisRadius*c,startAngle:a.startAngle,endAngle:a.endAngle,closed:!1,normalSign:a.clockwise?-1:1})}function Ar(t,e,n,a,r){var o;const i=a.numberOfVertices;if(i<2)return;const l=a.closed?i:i-1;for(let s=0;s<l;s++){const c=a.getPointAt(s),d=a.getPointAt((s+1)%i),u=((o=a.vertices[s])==null?void 0:o.bulge)??0,f={x:c.x,y:c.y,z:r},m={x:d.x,y:d.y,z:r};if(Tt.isPositive(Math.abs(u))){const y=k(n,f),h=k(n,m),v=new gt(y,h,u),H=v.center;t.push({kind:"arc",layer:e,cx:H.x,cy:H.y,r:v.radius,startAngle:v.startAngle,endAngle:v.endAngle,normalSign:v.clockwise?-1:1})}else et(t,e,n,f,m)}}function kr(t,e,n,a,r){if(a instanceof Wn){Ar(t,e,n,a,r);return}if(a instanceof Jn)for(const o of a.curves)o instanceof Ye?et(t,e,n,{x:o.startPoint.x,y:o.startPoint.y,z:r},{x:o.endPoint.x,y:o.endPoint.y,z:r}):o instanceof gt?br(t,e,n,o,r):o instanceof Ve&&xr(t,e,n,o,r)}function Mr(t,e,n,a){var r;const o=(r=a._geo)==null?void 0:r.loops;if(!(o!=null&&o.length))return;const i=a.elevation;for(const l of o)kr(t,e,n,l,i)}function Cr(t,e,n,a){const r=Ut(n,on(a)),o=[0];for(let c=0;c<a.numColumns;c++)o.push(o[c]+a.columnWidth(c));const i=[0];for(let c=0;c<a.numRows;c++)i.push(i[c]-a.rowHeight(c));const l=o[o.length-1],s=i[i.length-1];for(const c of i)et(t,e,r,{x:0,y:c,z:0},{x:l,y:c,z:0});for(const c of o)et(t,e,r,{x:c,y:0,z:0},{x:c,y:s,z:0})}function zr(t,e,n,a,r,o,i){const l=ue(t.layer,n);if(i&&!i(l))return;const s=cr(t,o);if(s&&!r.has(s.objectId)&&dr(s)){r.add(s.objectId);const d=Ut(e,on(t));Pt(s,d,l,a,r,o,i),r.delete(s.objectId);return}Cr(a,l,e,t);const c=k(e,t.position);a.push({kind:"point",layer:l,x:c.x,y:c.y})}function Sr(t,e,n,a){let r=a.boundaryPath();if(r.length>1){const i=r[0],l=r[r.length-1];i.x===l.x&&i.y===l.y&&(i.z??0)===(l.z??0)&&(r=r.slice(0,-1))}r.length>=2&&ot(t,e,n,r,!0);const o=k(n,a.position);t.push({kind:"point",layer:e,x:o.x,y:o.y})}function ue(t,e){return t==="0"?e:t}function Lr(t,e,n,a,r,o,i){if(!t.visibility)return;const l=ue(t.layer,n);if(!(i&&!i(l))){if(t instanceof Un){zr(t,e,n,a,r,o,i);return}if(ur(t)){const s=rn(t,o);if(!s||r.has(s.objectId))return;r.add(s.objectId);const c=Ut(e,t.getFullInsertionTransform()),d=ue(t.layer,n);Pt(s,c,d,a,r,o,i),r.delete(s.objectId);return}if(t instanceof Pn){const s=t,c=sr(s,o);if(!c||r.has(c.objectId))return;r.add(c.objectId);const d=Ut(e,s.getFullDimBlockTransform());Pt(c,d,l,a,r,o,i),r.delete(c.objectId);return}if(ir(t)){lr(a,l,e,t);return}if(t instanceof Tn){de(e)?pr(a,l,e,t.center,t.radius,t.normal):Nt(a,l,e,Ur(t));return}if(t instanceof In){de(e)?yr(a,l,e,t):Nt(a,l,e,Pr(t));return}if(t instanceof me){Nt(a,l,e,t);return}if(t instanceof Fn){vr(a,l,e,t);return}if(t instanceof Bn){wr(a,l,e,t);return}if(t instanceof Hn){gr(a,l,e,t);return}if(t instanceof jn){const s=[];for(let c=0;c<t.numberOfVertices;c++)s.push(t.getPointAt(c));ot(a,l,e,s,t.closed);return}if(t instanceof Dn){Mr(a,l,e,t);return}if(t instanceof En){Ie(a,l,e,t.basePoint,t.unitDir,!1);return}if(t instanceof $n){Ie(a,l,e,t.basePoint,t.unitDir,!0);return}if(t instanceof On){const s=[t.getPointAt(0),t.getPointAt(1),t.getPointAt(2),t.getPointAt(3)];ot(a,l,e,s,!0);return}if(t instanceof Rn){const s=t.subGetGripPoints();s.length>=2&&ot(a,l,e,s,s.length>=3);return}if(t instanceof _n){const s=t.vertices;s.length>=2&&ot(a,l,e,s,!1);return}if(t instanceof Vn){fr(a,l,e,t);return}if(t instanceof Nn){hr(a,l,e,t);return}if(t instanceof Yn){const s=k(e,t.position);a.push({kind:"point",layer:l,x:s.x,y:s.y});return}if(t instanceof Zn){const s=k(e,t.location);a.push({kind:"point",layer:l,x:s.x,y:s.y});return}if(t instanceof Xn){Sr(a,l,e,t);return}if(t instanceof Gn){const s=k(e,t.position);a.push({kind:"point",layer:l,x:s.x,y:s.y})}}}function Pt(t,e,n,a,r,o,i){for(const l of t.newIterator())Lr(l,e,n,a,r,o,i)}function Ur(t){return new me(t.center,t.normal,{x:1,y:0,z:0},t.radius,t.radius,0,At)}function Pr(t){return new me(t.center,t.normal,{x:1,y:0,z:0},t.radius,t.radius,t.startAngle,t.endAngle)}function Fe(t,e,n={}){const a=or(t,e);if(!a)return{primitives:[]};const r=[],o=new fe;return Pt(a,o,"0",r,new Set,t,n.includeLayer),{primitives:r}}function Tr(t,e){let n=e-t;for(;n<=0;)n+=At;for(;n>At;)n-=At;return n}function Be(t,e,n,a,r){const o=r===-1?-1:1;return new Ne(t+o*n*Math.cos(a),e+n*Math.sin(a))}function Ir(t){const e=Be(t.cx,t.cy,t.r,t.startAngle,t.normalSign),n=Be(t.cx,t.cy,t.r,t.endAngle,t.normalSign),a=Tr(t.startAngle,t.endAngle),r=t.normalSign*Math.tan(a/4);return new gt(e,n,r)}function Fr(t){return t.kind==="circle"?new gt({x:t.cx,y:t.cy},t.r,0,At,t.normalSign===-1):Ir(t)}function Br(t){const e=Math.atan2(t.majorY,t.majorX);return new Ve({x:t.cx,y:t.cy,z:0},t.majorR,t.minorR,t.startAngle,t.endAngle,t.closed,e)}function Hr(t){const e=[];for(let n=0;n+1<t.controlPoints.length;n+=2)e.push({x:t.controlPoints[n],y:t.controlPoints[n+1],z:0});return new Ln(t.degree,t.knots,e,t.weights.length>0?t.weights:void 0)}function jo(t){switch(t.kind){case"line":return{kind:"line",curve:new Ye({x:t.x0,y:t.y0},{x:t.x1,y:t.y1})};case"circle":case"arc":return{kind:"circArc",curve:Fr(t)};case"ellipse":return{kind:"ellipse",curve:Br(t)};case"spline":return{kind:"spline",curve:Hr(t)};case"point":return{kind:"point",point:new Ne(t.x,t.y)}}}const St=["en","zh","cs","tr"],jr={en:"EN",zh:"中",cs:"CS",tr:"TR"},ln="mlcad-html-locale",He={en:{toolbar:{viewerTools:"Viewer tools",zoomExtents:"Zoom extents",measureDistance:"Measure distance",measureAngle:"Measure angle",measureArc:"Measure arc length",measureArea:"Measure area",measureCoordinate:"Measure coordinates",clearMeasurements:"Clear measurements",settings:"Measure settings",layers:"Layers",language:"Language",languageSwitch:"Switch language",collapse:"Collapse toolbar",expand:"Expand toolbar"},settings:{toolbar:"Measure settings",measureColor:"Measure color",ortho:"Toggle orthogonal mode",polar:"Polar tracking angles",polarAngles:"Polar tracking angles"},layers:{title:"Layers",close:"Close layers",showAll:"Show all",hideAll:"Hide all",zoomTo:"Zoom to {name}"},status:{ready:"Ready",measureDistanceHint:"Click two points to measure distance (object snap enabled).",measureAngleHint:"Click vertex, then two points on each arm (object snap enabled).",measureArcHint:"Click arc start, a point on the arc, then arc end (object snap enabled).",measureAreaHint:"Click polygon vertices; click near the first point or press Enter to finish.",measureCoordinateHint:"Click a point to read its X/Y coordinates (object snap enabled).",distance:"Distance: {value}",coordinates:"X: {x}  Y: {y}",angle:"Angle: {value}",arcLength:"Arc length: {value}",area:"Area: {value}",lengthTotal:"Length total: {value}",areaTotal:"Area total: {value}",zoomLayer:"Zoom: {name}",loadFailed:"Failed to load drawing: {error}",noLayout:"No layout data in snapshot."}},zh:{toolbar:{viewerTools:"查看器工具",zoomExtents:"范围缩放",measureDistance:"测量距离",measureAngle:"测量角度",measureArc:"测量弧长",measureArea:"测量面积",measureCoordinate:"测量坐标",clearMeasurements:"清除测量",settings:"测量设置",layers:"图层",language:"语言",languageSwitch:"切换语言",collapse:"收起工具栏",expand:"展开工具栏"},settings:{toolbar:"测量设置",measureColor:"测量颜色",ortho:"切换正交模式",polar:"极轴追踪角度",polarAngles:"极轴追踪角度"},layers:{title:"图层",close:"关闭图层",showAll:"全部显示",hideAll:"全部隐藏",zoomTo:"缩放到 {name}"},status:{ready:"就绪",measureDistanceHint:"点击两点以测量距离（已启用对象捕捉）。",measureAngleHint:"依次点击顶点与两条边上的点（已启用对象捕捉）。",measureArcHint:"依次点击弧起点、弧上一点与弧端点（已启用对象捕捉）。",measureAreaHint:"依次点击多边形顶点；靠近首点或按 Enter 完成。",measureCoordinateHint:"点击一点以读取其 X/Y 坐标（已启用对象捕捉）。",distance:"距离：{value}",coordinates:"X：{x}  Y：{y}",angle:"角度：{value}",arcLength:"弧长：{value}",area:"面积：{value}",lengthTotal:"长度合计：{value}",areaTotal:"面积合计：{value}",zoomLayer:"缩放：{name}",loadFailed:"无法加载图纸：{error}",noLayout:"快照中没有布局数据。"}},cs:{toolbar:{viewerTools:"Nástroje prohlížeče",zoomExtents:"Zoom na rozsah",measureDistance:"Změřit vzdálenost",measureAngle:"Změřit úhel",measureArc:"Změřit délku oblouku",measureArea:"Změřit plochu",measureCoordinate:"Změřit souřadnice",clearMeasurements:"Vymazat měření",settings:"Nastavení měření",layers:"Hladiny",language:"Jazyk",languageSwitch:"Přepnout jazyk",collapse:"Sbalit panel nástrojů",expand:"Rozbalit panel nástrojů"},settings:{toolbar:"Nastavení měření",measureColor:"Barva měření",ortho:"Přepnout ortogonální režim",polar:"Úhly polárního trasování",polarAngles:"Úhly polárního trasování"},layers:{title:"Hladiny",close:"Zavřít hladiny",showAll:"Zobrazit vše",hideAll:"Skrýt vše",zoomTo:"Přiblížit na {name}"},status:{ready:"Připraveno",measureDistanceHint:"Klikněte na dva body pro změření vzdálenosti (uchopení objektů zapnuto).",measureAngleHint:"Klikněte na vrchol, poté na dva body na každém rameni (uchopení objektů zapnuto).",measureArcHint:"Klikněte na začátek oblouku, bod na oblouku a poté na konec oblouku (uchopení objektů zapnuto).",measureAreaHint:"Klikejte na vrcholy mnohoúhelníku; dokončete kliknutím poblíž prvního bodu nebo stiskem Enter.",measureCoordinateHint:"Klikněte na bod pro zobrazení jeho souřadnic X/Y (uchopení objektů zapnuto).",distance:"Vzdálenost: {value}",coordinates:"X: {x}  Y: {y}",angle:"Úhel: {value}",arcLength:"Délka oblouku: {value}",area:"Plocha: {value}",lengthTotal:"Celková délka: {value}",areaTotal:"Celková plocha: {value}",zoomLayer:"Zoom: {name}",loadFailed:"Nepodařilo se načíst výkres: {error}",noLayout:"Snímek neobsahuje data rozvržení."}},tr:{toolbar:{viewerTools:"Görüntüleyici araçları",zoomExtents:"Sınırlara yakınlaştır",measureDistance:"Mesafe ölç",measureAngle:"Açı ölç",measureArc:"Yay uzunluğu ölç",measureArea:"Alan ölç",measureCoordinate:"Koordinat ölç",clearMeasurements:"Ölçümleri temizle",settings:"Ölçüm ayarları",layers:"Katmanlar",language:"Dil",languageSwitch:"Dili değiştir",collapse:"Araç çubuğunu daralt",expand:"Araç çubuğunu genişlet"},settings:{toolbar:"Ölçüm ayarları",measureColor:"Ölçüm rengi",ortho:"Dik modu aç/kapat",polar:"Kutupsal izleme açıları",polarAngles:"Kutupsal izleme açıları"},layers:{title:"Katmanlar",close:"Katmanları kapat",showAll:"Tümünü göster",hideAll:"Tümünü gizle",zoomTo:"{name} katmanına yakınlaştır"},status:{ready:"Hazır",measureDistanceHint:"Mesafe ölçmek için iki nokta tıklayın (nesne yakalama etkin).",measureAngleHint:"Önce köşe noktasını, sonra her koldan birer nokta tıklayın (nesne yakalama etkin).",measureArcHint:"Yay başlangıcını, yay üzerinde bir noktayı ve yay sonunu tıklayın (nesne yakalama etkin).",measureAreaHint:"Çokgen köşelerini tıklayın; bitirmek için ilk noktanın yakınına tıklayın veya Enter’a basın.",measureCoordinateHint:"X/Y koordinatlarını okumak için bir nokta tıklayın (nesne yakalama etkin).",distance:"Mesafe: {value}",coordinates:"X: {x}  Y: {y}",angle:"Açı: {value}",arcLength:"Yay uzunluğu: {value}",area:"Alan: {value}",lengthTotal:"Toplam uzunluk: {value}",areaTotal:"Toplam alan: {value}",zoomLayer:"Yakınlaştır: {name}",loadFailed:"Çizim yüklenemedi: {error}",noLayout:"Anlık görüntüde yerleşim verisi yok."}}};function xe(t){if(t==null||t==="")return null;const e=t.toLowerCase().replace("_","-");for(const n of St)if(e===n||e.startsWith(`${n}-`))return n;return null}function Dr(){if(typeof navigator>"u")return"en";const t=[...navigator.languages??[],navigator.language].filter(Boolean);for(const e of t){const n=xe(e);if(n)return n}return"en"}function Er(){if(typeof localStorage<"u")try{const t=localStorage.getItem(ln),e=xe(t);if(e)return e}catch{}return Dr()}function je(t,e){const n=e.split(".");let a=t;for(const r of n){if(a==null||typeof a=="string")return;a=a[r]}return typeof a=="string"?a:void 0}function $r(t,e){return e?t.replace(/\{(\w+)\}/g,(n,a)=>{const r=e[a];return r!=null?String(r):`{${a}}`}):t}class Do{constructor(e){this._onChange=null,this._locale=e??Er()}get locale(){return this._locale}get localeBadge(){return jr[this._locale]}setOnChange(e){this._onChange=e}t(e,n){const a=je(He[this._locale],e)??je(He.en,e)??e;return $r(a,n)}toggleLocale(){const e=St.indexOf(this._locale),n=St[(e+1)%St.length];return this.setLocale(n),n}setLocale(e){var n;if(this._locale!==e){this._locale=e,typeof document<"u"&&(document.documentElement.lang=e);try{typeof localStorage<"u"&&localStorage.setItem(ln,e)}catch{}this.applyToDocument(),(n=this._onChange)==null||n.call(this)}}applyToDocument(e){if(typeof document>"u")return;const n=e??document;document.documentElement.lang=this._locale,n.querySelectorAll("[data-i18n-text]").forEach(o=>{const i=o.dataset.i18nKey;i&&(o.textContent=this.t(i))}),n.querySelectorAll("[data-i18n-attr]").forEach(o=>{var i;const l=o.dataset.i18nKey,s=((i=o.dataset.i18nAttr)==null?void 0:i.split(/\s+/))??[];if(!l||s.length===0)return;const c=this.t(l);for(const d of s)o.setAttribute(d,c)});const a=document.getElementById("mlcad-lang-badge");a&&(a.textContent=this.localeBadge);const r=document.getElementById("mlcad-lang-btn");r&&(r.setAttribute("title",this.t("toolbar.languageSwitch")),r.setAttribute("aria-label",this.t("toolbar.languageSwitch")))}}const Or='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M9.3333 14.125 5.875 10.6667V14.125H9.3333Zm4.7917-3.4583-3.4583 3.4583H14.125V10.6667ZM10.6667 5.875 14.125 9.3333V5.875H10.6667ZM5.875 9.3333 9.3333 5.875H5.875V9.3333Zm9.2083 5.475c1.2333-1.3 1.9083-3.0333 1.9083-4.825-.0083-3.325-2.35-6.1833-5.6083-6.8417C8.125 2.4833 4.85 4.2 3.55 7.2583c-1.3 3.0583-.275 6.6083 2.4583 8.5 2.725 1.8917 6.4167 1.6 8.8167-.6917.0917-.0833.175-.175.2583-.2583Zm1.2583.5917 2.575 2.575c-.3167.3167-.625.625-.9417.9417-.8583-.8583-1.7167-1.7167-2.575-2.575-3.4083 2.9-8.4917 2.5917-11.525-.6917S.9417 7.275 4.1083 4.1083C7.2667.9417 12.3667.8417 15.65 3.875s3.5917 8.1167.6917 11.525Z"/></svg>',Rr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M3.75 9.25h12.5v1.5H3.75v-1.5ZM2.25 6.5h1.5v7h-1.5v-7ZM16.25 6.5h1.5v7h-1.5v-7Z"/></svg>',_r='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><polygon fill="currentColor" points="5.74 7.13 7 9.5 4.15 7.72 3.2 7.12 3 7 7 4.5 6.17 6.05 5.67 7 5.74 7.13"/><polygon fill="currentColor" points="16 12.5 13.5 16.5 12.66 15.15 11.92 13.97 11 12.5 12 13.03 12.98 13.55 13.5 13.83 16 12.5"/><rect fill="currentColor" x="2" y="2.5" width="1" height="15"/><rect fill="currentColor" x="3" y="16.5" width="15" height="1"/><path fill="currentColor" d="M14,13c0,.18,0,.37,0,.55v0a6.82,6.82,0,0,1-.32,1.57l-.74-1.18L13,13.5c0-.14,0-.31,0-.47v0a6,6,0,0,0-6-6,6.74,6.74,0,0,0-1.26.13l-.29.07a5.61,5.61,0,0,0-1.3.52l-1-.6a7.07,7.07,0,0,1,2-.88,6.78,6.78,0,0,1,1-.19A7.7,7.7,0,0,1,7,6a7,7,0,0,1,7,7Z"/></svg>',Vr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><rect fill="currentColor" x="2" y="16" width="2" height="2"/><rect fill="currentColor" x="16" y="2" width="2" height="2"/><rect fill="currentColor" x="6.1" y="6.11" width="2" height="2"/><path fill="currentColor" d="M4.99,9.11c-1.15,1.74-1.94,3.74-2.24,5.89h.81c.32-2.18,1.16-4.18,2.39-5.89h-.96Z"/><path fill="currentColor" d="M9.1,5v.96c1.71-1.23,3.72-2.07,5.9-2.4v-.81c-2.16,.3-4.16,1.09-5.9,2.24Z"/></svg>',Nr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M4 4h12v12H4V4Zm1.5 1.5v9h9v-9h-9Z"/><circle fill="currentColor" cx="4" cy="4" r="1.5"/><circle fill="currentColor" cx="16" cy="4" r="1.5"/><circle fill="currentColor" cx="4" cy="16" r="1.5"/><circle fill="currentColor" cx="16" cy="16" r="1.5"/></svg>',Yr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M9.25 2h1.5v5.25H16v1.5h-5.25V16h-1.5v-7.25H4v-1.5h5.25V2Z"/><circle fill="currentColor" cx="10" cy="10" r="1.75"/></svg>',Zr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>',Xr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m434.8 137.65-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m160 204.48-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48"/></svg>',Gr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10.09 3.53 16.09 6.97 10.09 10.29 4.18 7 10.09 3.56M10.09 2.4 2.17 7 3.31 7.65 10.09 11.45 17 7.62 18.17 7 10.08 2.37 10.09 2.4Z"/><path fill="currentColor" d="M10.25 14.83 18.17 10.22 17 9.57 10.22 13.57 3.32 9.59 2.17 10.22 10.25 14.83Z"/><path fill="currentColor" d="M10.25 17.63 18.17 13 17 12.37 10.22 16.37 3.32 12.38 2.17 13 10.25 17.63Z"/></svg>',Kr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10.09 5.15 16.09 8.59 10.09 11.91 4.18 8.59 10.09 5.15ZM10.09 4 2.17 8.61 3.31 9.25 10.09 13.06 17 9.24 18.16 8.61 10.08 4 10.09 4Z"/><path fill="currentColor" d="M10.25 16.46 18.17 11.85 17 11.2 10.22 15.2 3.32 11.21 2.17 11.85 10.25 16.46Z"/><path fill="currentColor" d="M3.5 3.5 16.5 16.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/></svg>',Wr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="m18.5 10 4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301 14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725 16.676 16.676 0 0 1 3.524 17.273l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877 16.165 16.165 0 0 0 11.91 6.001L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"/></svg>',Jr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" aria-hidden="true"><path fill="currentColor" d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256"/></svg>',qr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M3 2H2v16h16v-1H8v-5H3V2zm0 11v4h4v-4H3z"/></svg>',Qr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M16.98 11L18.5 11L18.5 10L16.98 10C16.86 8.13 16.05 6.44 14.8 5.2L16.88 2.83L16.12 2.17L14.05 4.54C12.79 3.57 11.21 3 9.5 3C5.36 3 2 6.36 2 10.5C2 14.64 5.36 18 9.5 18C13.47 18 16.73 14.91 16.98 11ZM15.98 10C15.86 8.43 15.18 7.01 14.14 5.95L10.6 10L15.98 10ZM13.39 5.29L8.4 11L15.98 11C15.73 14.36 12.92 17 9.5 17C5.91 17 3 14.09 3 10.5C3 6.91 5.91 4 9.5 4C10.96 4 12.31 4.48 13.39 5.29Z"/></svg>',to='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="#e75958" d="M22 12H12l5 8.66A10 10 0 0 0 22 12Z"/><path fill="#814dff" d="M17 20.66 12 12 7 20.66A10 10 0 0 0 17 20.66Z"/><path fill="#13b0ce" d="M7 20.66 12 12H2A10 10 0 0 0 7 20.66Z"/><path fill="#4ecd83" d="M2 12H12L7 3.34A10 10 0 0 0 2 12Z"/><path fill="#ffc33f" d="M7 3.34 12 12l5-8.66A10 10 0 0 0 7 3.34Z"/><path fill="#ff9543" d="M17 3.34 12 12H22A10 10 0 0 0 17 3.34Z"/></svg>',eo='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 6.5 5.5 11h9L10 6.5Z"/></svg>',T={zoomExtent:Or,measureDistance:Rr,measureAngle:_r,measureArc:Vr,measureArea:Nr,measureCoordinate:Yr,clearMeasurements:Zr,layer:Xr,layerOn:Gr,layerOff:Kr,language:Wr,setting:Jr,orthoMode:qr,polarTracking:Qr,color:to,chevronUp:eo};function Z(t,e,n){const a=Object.entries(n).map(([r,o])=>`${r}="${Yt(o)}"`).join(" ");return`<button type="button" class="mlcad-tool-btn" title="${Yt(e)}" aria-label="${Yt(e)}" ${a}>${t}</button>`}function Yt(t){return t.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}const no=583902,ao=[90,45,30,23,18,10,5];function ro(t){return`#${t.toString(16).padStart(6,"0")}`}function sn(){return`<button type="button" class="mlcad-tool-btn mlcad-lang-btn" id="mlcad-lang-btn" data-i18n-key="toolbar.languageSwitch" data-i18n-attr="title aria-label" title="Switch language" aria-label="Switch language">
            ${T.language}
            <span class="mlcad-lang-badge" id="mlcad-lang-badge">EN</span>
          </button>`}function oo(){const t=ao.map(e=>`<button type="button" class="mlcad-tool-btn mlcad-settings-option-btn mlcad-polar-angle-btn" data-polar-ang="${e}" title="${e}°" aria-label="${e}°"><span class="mlcad-settings-option-indicator" aria-hidden="true"></span><span class="mlcad-settings-option-text">${e}°</span></button>`).join("");return`
      <div id="mlcad-settings-wrap" hidden>
        <div id="mlcad-settings-strip" role="toolbar" data-i18n-attr="aria-label" data-i18n-key="settings.toolbar" aria-label="Measure settings">
          <button type="button" class="mlcad-tool-btn mlcad-color-btn" id="mlcad-measure-color-btn" data-i18n-key="settings.measureColor" data-i18n-attr="title aria-label" title="Measure color" aria-label="Measure color">
            ${T.color}
          </button>
          <input type="color" id="mlcad-measure-color-input" class="mlcad-color-input" value="${ro(no)}" tabindex="-1" aria-hidden="true" />
          ${Z(T.orthoMode,"Orthogonal mode",{id:"mlcad-ortho-btn","data-toggle":"ortho","data-i18n-key":"settings.ortho","data-i18n-attr":"title aria-label"})}
          ${Z(T.polarTracking,"Polar tracking",{id:"mlcad-polar-btn","data-toggle":"polar","data-i18n-key":"settings.polar","data-i18n-attr":"title aria-label"})}
          ${sn()}
        </div>
        <div id="mlcad-polar-angles" role="group" data-i18n-attr="aria-label" data-i18n-key="settings.polarAngles" aria-label="Polar tracking angles" hidden>
          ${t}
        </div>
      </div>`}const io=`
  :root {
    --mlcad-ui-bg: rgba(24, 26, 30, 0.94);
    --mlcad-ui-bg-elevated: rgba(32, 35, 40, 0.98);
    --mlcad-ui-border: rgba(255, 255, 255, 0.1);
    --mlcad-ui-text: #e8eaed;
    --mlcad-ui-muted: #9aa0a6;
    --mlcad-accent: #08e8de;
    --mlcad-accent-active: #1a8cff;
    --mlcad-measure-accent: #08e8de;
    --mlcad-measure-accent-border: rgba(8, 232, 222, 0.45);
    --mlcad-measure-accent-fill: rgba(8, 232, 222, 0.2);
    --mlcad-shadow: 0 8px 28px rgba(0, 0, 0, 0.45);
    --mlcad-toolbar-width: 44px;
    --mlcad-drawer-width: 220px;
    --mlcad-drawer-gap: 8px;
    --mlcad-ui-inset: 12px;
    --mlcad-z-chrome: 7;
    --mlcad-z-measure: 5;
  }
  html, body {
    margin: 0; height: 100%; overflow: hidden;
    background: #121418;
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    color: var(--mlcad-ui-text);
  }
  #mlcad-root { position: relative; width: 100%; height: 100%; }
  #mlcad-root canvas {
    display: block;
    width: 100%;
    height: 100%;
    touch-action: none;
  }

  #mlcad-sidebar {
    position: absolute;
    left: var(--mlcad-ui-inset);
    top: 50%;
    z-index: var(--mlcad-z-chrome);
    transform: translateY(-50%);
    display: flex;
    align-items: flex-start;
    gap: var(--mlcad-drawer-gap);
    max-width: calc(100% - 2 * var(--mlcad-ui-inset));
    box-sizing: border-box;
    pointer-events: none;
  }
  #mlcad-sidebar > * { pointer-events: auto; }

  #mlcad-toolbar {
    flex-shrink: 0;
    display: flex; flex-direction: column; gap: 4px;
    padding: 6px;
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  .mlcad-tool-btn {
    display: flex; align-items: center; justify-content: center;
    width: var(--mlcad-toolbar-width); height: var(--mlcad-toolbar-width);
    margin: 0; padding: 0;
    border: 1px solid transparent;
    border-radius: 6px;
    background: transparent;
    color: var(--mlcad-ui-text);
    cursor: pointer;
    transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  }
  .mlcad-tool-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--mlcad-ui-border);
  }
  .mlcad-tool-btn.active {
    background: rgba(26, 140, 255, 0.22);
    border-color: rgba(26, 140, 255, 0.55);
    color: #fff;
  }
  .mlcad-tool-btn svg {
    width: 20px; height: 20px; display: block; flex-shrink: 0;
  }
  #mlcad-toolbar-toggle {
    height: calc(var(--mlcad-toolbar-width) / 2);
    margin-top: -4px;
    margin-bottom: -4px;
    border-radius: 4px;
  }
  #mlcad-toolbar-toggle svg {
    width: calc(var(--mlcad-toolbar-width) / 2);
    height: calc(var(--mlcad-toolbar-width) / 2);
  }
  .mlcad-tool-separator {
    height: 1px;
    margin: 4px 8px;
    background: var(--mlcad-ui-border);
  }
  .mlcad-lang-btn { position: relative; }
  .mlcad-lang-badge {
    position: absolute; right: 3px; bottom: 3px;
    min-width: 14px; height: 14px; padding: 0 3px;
    border-radius: 3px;
    background: rgba(8, 232, 222, 0.2);
    border: 1px solid rgba(8, 232, 222, 0.45);
    color: var(--mlcad-accent);
    font-size: 9px; font-weight: 700; line-height: 12px;
    letter-spacing: -0.02em;
    pointer-events: none;
  }

  #mlcad-layer-drawer {
    flex-shrink: 1;
    min-width: 0;
    width: var(--mlcad-drawer-width);
    max-height: min(420px, calc(100vh - 48px));
    display: flex; flex-direction: column;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
    overflow: hidden;
  }
  #mlcad-layer-drawer[hidden] { display: none; }

  .mlcad-drawer-header {
    display: flex; align-items: center; justify-content: space-between;
    gap: 6px; padding: 8px 10px;
    border-bottom: 1px solid var(--mlcad-ui-border);
    font-size: 13px; font-weight: 600;
  }
  .mlcad-drawer-close {
    width: 28px; height: 28px; padding: 0;
    border: none; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer; font-size: 18px; line-height: 1;
  }
  .mlcad-drawer-close:hover {
    background: rgba(255, 255, 255, 0.08); color: var(--mlcad-ui-text);
  }

  .mlcad-layer-actions {
    display: flex; gap: 4px; padding: 6px 8px;
    border-bottom: 1px solid var(--mlcad-ui-border);
  }
  .mlcad-layer-action-btn {
    flex: 1; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
    min-height: 30px; padding: 4px 8px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.04);
    color: var(--mlcad-ui-text);
    font-size: 12px; cursor: pointer;
  }
  .mlcad-layer-action-btn:hover { background: rgba(255, 255, 255, 0.1); }
  .mlcad-layer-action-btn svg { width: 14px; height: 14px; flex-shrink: 0; }

  #mlcad-layer-list {
    flex: 1; overflow: auto; padding: 4px 0;
  }
  .mlcad-layer-item {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center; gap: 6px;
    padding: 5px 8px;
    font-size: 12px; cursor: pointer;
  }
  .mlcad-layer-item:hover { background: rgba(255, 255, 255, 0.05); }
  .mlcad-layer-item input { margin: 0; cursor: pointer; }
  .mlcad-layer-swatch {
    width: 12px; height: 12px; border-radius: 2px;
    border: 1px solid rgba(255, 255, 255, 0.28);
  }
  .mlcad-layer-name {
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .mlcad-layer-zoom {
    display: flex; align-items: center; justify-content: center;
    width: 22px; height: 22px; padding: 0;
    border: 1px solid transparent; border-radius: 4px;
    background: transparent; color: var(--mlcad-ui-muted);
    cursor: pointer;
  }
  .mlcad-layer-zoom svg {
    width: 14px; height: 14px; display: block;
  }
  .mlcad-layer-zoom:hover:not(:disabled) {
    color: var(--mlcad-accent);
    border-color: var(--mlcad-ui-border);
    background: rgba(255, 255, 255, 0.06);
  }
  .mlcad-layer-zoom:disabled { opacity: 0.35; cursor: not-allowed; }

  #mlcad-status-bar {
    position: absolute; left: 12px; right: 12px; bottom: 10px; z-index: var(--mlcad-z-chrome);
    display: flex; align-items: center; min-height: 28px; padding: 0 12px;
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 6px;
    background: var(--mlcad-ui-bg);
    color: var(--mlcad-ui-muted);
    font-size: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(10px);
    pointer-events: none;
  }

  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-settings-wrap,
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-layer-drawer {
    display: none !important;
  }
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-toolbar .mlcad-tool-btn:not(#mlcad-toolbar-toggle) {
    display: none;
  }
  #mlcad-sidebar.mlcad-sidebar--collapsed #mlcad-toolbar .mlcad-tool-separator {
    display: none;
  }

  #mlcad-settings-wrap {
    flex-shrink: 0;
    min-width: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: var(--mlcad-drawer-gap);
  }
  #mlcad-settings-wrap[hidden] { display: none; }

  #mlcad-settings-strip {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 6px;
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }

  #mlcad-polar-angles {
    flex-shrink: 0;
    display: inline-flex;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 6px;
    max-width: min(280px, calc(100vw - 2 * var(--mlcad-ui-inset) - 3 * var(--mlcad-toolbar-width) - 3 * var(--mlcad-drawer-gap)));
    background: var(--mlcad-ui-bg);
    border: 1px solid var(--mlcad-ui-border);
    border-radius: 8px;
    box-shadow: var(--mlcad-shadow);
    backdrop-filter: blur(12px);
  }
  #mlcad-polar-angles[hidden] { display: none; }

  .mlcad-color-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    pointer-events: none;
  }
  .mlcad-settings-option-btn {
    width: 100%;
    box-sizing: border-box;
    height: var(--mlcad-toolbar-width);
    justify-content: flex-start;
    gap: 8px;
    padding: 0 10px;
    font-size: 11px;
    font-weight: 500;
  }
  .mlcad-settings-option-indicator {
    flex-shrink: 0;
    width: 10px;
    height: 10px;
    border: 1px solid var(--mlcad-ui-muted);
    border-radius: 2px;
    box-sizing: border-box;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .mlcad-settings-option-btn.active .mlcad-settings-option-indicator {
    background: var(--mlcad-accent);
    border-color: var(--mlcad-accent);
  }
  .mlcad-settings-option-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    line-height: 1.2;
  }

  #mlcad-measure-overlays {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: var(--mlcad-z-measure);
    overflow: hidden;
  }
  .mlcad-measure-canvas {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
  }
  .mlcad-measure-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--mlcad-measure-accent);
    border: 2px solid rgba(255, 255, 255, 0.9);
    box-sizing: border-box;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }
  .mlcad-measure-badge {
    position: absolute;
    padding: 3px 10px;
    border-radius: 14px;
    background: var(--mlcad-ui-bg-elevated);
    border: 1px solid var(--mlcad-measure-accent-border);
    color: var(--mlcad-measure-accent);
    font-size: 12px;
    font-weight: 600;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
    pointer-events: none;
  }
  .mlcad-measure-badge--coordinate {
    transform: translate(-50%, calc(-50% - 16px));
  }
  .mlcad-measure-dot.mlcad-measure-selected {
    border-color: #ffd54f;
    box-shadow: 0 0 0 2px rgba(255, 213, 79, 0.55);
  }
  .mlcad-measure-badge.mlcad-measure-selected {
    border-color: rgba(255, 213, 79, 0.75);
    color: #ffd54f;
  }
  .mlcad-measure-canvas.mlcad-measure-selected {
    filter: drop-shadow(0 0 3px #ffd54f);
  }
  .mlcad-measure-live-label {
    position: absolute;
    pointer-events: none;
    color: var(--mlcad-measure-accent);
    font-size: 12px;
    font-weight: 600;
    text-shadow: 0 0 4px #000, 0 1px 3px #000;
    transform: translate(-50%, -120%);
    display: none;
  }
  #mlcad-loading {
    position: fixed; inset: 0; z-index: 100;
    display: flex; align-items: center; justify-content: center;
    background: #121418;
    transition: opacity 0.35s ease, visibility 0.35s ease;
  }
  #mlcad-loading.mlcad-loading--done {
    opacity: 0; visibility: hidden; pointer-events: none;
  }
  .mlcad-loading-spinner {
    width: 48px; height: 48px; box-sizing: border-box;
    border: 3px solid rgba(255, 255, 255, 0.12);
    border-top-color: var(--mlcad-accent);
    border-radius: 50%;
    animation: mlcad-spin 0.85s linear infinite;
  }
  @keyframes mlcad-spin { to { transform: rotate(360deg); } }

  @media (max-width: ${zn}px) {
    :root {
      --mlcad-drawer-width: min(200px, calc(100vw - 2 * var(--mlcad-ui-inset) - var(--mlcad-toolbar-width) - var(--mlcad-drawer-gap)));
      --mlcad-ui-inset: 8px;
    }
    #mlcad-sidebar {
      left: var(--mlcad-ui-inset);
      right: var(--mlcad-ui-inset);
      width: auto;
    }
    #mlcad-layer-drawer {
      margin-left: auto;
      max-width: calc(100vw - 2 * var(--mlcad-ui-inset) - var(--mlcad-toolbar-width) - var(--mlcad-drawer-gap));
    }
    .mlcad-layer-action-btn {
      min-height: 28px;
      padding: 3px 6px;
      font-size: 11px;
      gap: 4px;
    }
    .mlcad-layer-action-btn svg { width: 12px; height: 12px; }
    .mlcad-layer-zoom {
      width: 20px;
      height: 20px;
    }
    .mlcad-layer-zoom svg {
      width: 12px;
      height: 12px;
    }
  }
`;function lo(t,e="measure"){const n=e==="measure"?so():"",a=e==="measure"?co():"",r=e==="view"?sn():"";return`
  <div id="mlcad-loading" aria-hidden="true" style="background:${t}">
    <div class="mlcad-loading-spinner"></div>
  </div>
  <div id="mlcad-root">
    <aside id="mlcad-sidebar">
      <nav id="mlcad-toolbar" data-i18n-attr="aria-label" data-i18n-key="toolbar.viewerTools" aria-label="Viewer tools">
        ${Z(T.zoomExtent,"Zoom extents",{"data-action":"fit","data-i18n-key":"toolbar.zoomExtents","data-i18n-attr":"title aria-label"})}
        ${e==="measure"?De():""}
        ${n}
        ${e==="measure"?De():""}
        ${Z(T.layer,"Layers",{id:"mlcad-layers-btn","aria-haspopup":"dialog","aria-expanded":"false","data-i18n-key":"toolbar.layers","data-i18n-attr":"title aria-label"})}
        ${a}
        ${r}
        ${Z(T.chevronUp,"Collapse toolbar",{id:"mlcad-toolbar-toggle","aria-expanded":"true","data-i18n-key":"toolbar.collapse","data-i18n-attr":"title aria-label"})}
      </nav>
      ${e==="measure"?oo():""}
      <div id="mlcad-layer-drawer" role="dialog" data-i18n-attr="aria-label" data-i18n-key="layers.title" aria-label="Layers" hidden>
        <div class="mlcad-drawer-header">
          <span data-i18n-key="layers.title" data-i18n-text>Layers</span>
          <button type="button" class="mlcad-drawer-close" id="mlcad-layer-close" data-i18n-key="layers.close" data-i18n-attr="aria-label" aria-label="Close layers">×</button>
        </div>
        <div class="mlcad-layer-actions">
          <button type="button" class="mlcad-layer-action-btn" id="mlcad-layer-show-all">
            ${T.layerOn}<span data-i18n-key="layers.showAll" data-i18n-text>Show all</span>
          </button>
          <button type="button" class="mlcad-layer-action-btn" id="mlcad-layer-hide-all">
            ${T.layerOff}<span data-i18n-key="layers.hideAll" data-i18n-text>Hide all</span>
          </button>
        </div>
        <div id="mlcad-layer-list"></div>
      </div>
    </aside>
    ${e==="measure"?'<footer id="mlcad-status-bar" aria-live="polite"></footer>':""}
  </div>`}function De(){return'<div class="mlcad-tool-separator" aria-hidden="true"></div>'}function so(){return`
        ${Z(T.measureDistance,"Measure distance",{"data-action":"measure","data-measure-mode":"distance","data-i18n-key":"toolbar.measureDistance","data-i18n-attr":"title aria-label"})}
        ${Z(T.measureAngle,"Measure angle",{"data-action":"measure","data-measure-mode":"angle","data-i18n-key":"toolbar.measureAngle","data-i18n-attr":"title aria-label"})}
        ${Z(T.measureArc,"Measure arc length",{"data-action":"measure","data-measure-mode":"arc","data-i18n-key":"toolbar.measureArc","data-i18n-attr":"title aria-label"})}
        ${Z(T.measureArea,"Measure area",{"data-action":"measure","data-measure-mode":"area","data-i18n-key":"toolbar.measureArea","data-i18n-attr":"title aria-label"})}
        ${Z(T.measureCoordinate,"Measure coordinates",{"data-action":"measure","data-measure-mode":"coordinate","data-i18n-key":"toolbar.measureCoordinate","data-i18n-attr":"title aria-label"})}
        ${Z(T.clearMeasurements,"Clear measurements",{"data-action":"clear-measurements","data-i18n-key":"toolbar.clearMeasurements","data-i18n-attr":"title aria-label"})}`}function co(){return Z(T.setting,"Measure settings",{id:"mlcad-settings-btn","aria-haspopup":"true","aria-expanded":"false","data-i18n-key":"toolbar.settings","data-i18n-attr":"title aria-label"})}function Ee(t,e){const n=e.title??t.meta.title??"CAD Drawing",a=Ba(t),r=e.viewerRuntime,o=Ha(),i=a.compression,l=`#${t.meta.background.toString(16).padStart(6,"0")}`,s=xe(t.meta.locale)??"en",c=t.meta.viewerMode??"measure";return`<!DOCTYPE html>
<html lang="${s}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="generator" content="mlightcad-cad-html-plugin" />
  <title>${uo(n)}</title>
  <style>${io}</style>
</head>
<body>
${lo(l,c)}
  <script id="mlcad-snapshot" type="${o}+${i};base64">${a.payload}<\/script>
  <script>${fo(r)}<\/script>
</body>
</html>`}function uo(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fo(t){return t.replace(/<\/script/gi,"<\\/script")}const mo=400;function ft(t={}){return{exportInvisibleLayers:t.exportInvisibleLayers!==!1,initialView:t.initialView??"fit",viewerMode:t.viewerMode??"measure"}}function ho(t){const e=t.activeLayoutView,n=e.center,a=e.trCamera.zoom,r=Math.max(e.height,1),o=a*(2*mo)/r;return{centerX:n.x,centerY:n.y,zoom:o}}const go="./viewer-runtime.iife.js";let Mt={};function po(t){Mt={...Mt,...t}}function yo(){return{...Mt}}function vo(t){return t!=null?String(t):Mt.viewerRuntimeUrl!=null?String(Mt.viewerRuntimeUrl):go}function wo(){return{minX:0,minY:0,maxX:0,maxY:0,valid:!1}}function bo(t,e,n){if(e.length<3)return;const a=n[0],r=n[1];for(let o=0;o+2<e.length;o+=3){const i=Le(e[o],a),l=Le(e[o+1],r);t.valid?(i<t.minX&&(t.minX=i),i>t.maxX&&(t.maxX=i),l<t.minY&&(t.minY=l),l>t.maxY&&(t.maxY=l)):(t.minX=t.maxX=i,t.minY=t.maxY=l,t.valid=!0)}}function $e(t,e){bo(t,e.positions,e.offset)}function xo(t){return t.valid?{minX:t.minX,minY:t.minY,maxX:t.maxX,maxY:t.maxY}:null}function Ao(t,e){const n=wo();for(const a of t)$e(n,a);for(const a of e)$e(n,a);return xo(n)}class ko{build(e,n,a={}){return this.buildSync(e,n,a)}async buildAsync(e,n,a={}){await K();const r=a.exportInvisibleLayers!==!1,o=r?void 0:c=>ut(e,c,r),i=Te(n,{title:a.title,background:a.background}),l=[];e.layers.forEach(c=>{ut(e,c.name,r)&&l.push({name:c.name,color:c.color.RGB??16777215,visible:!c.isOff&&!c.isFrozen})});const s=[];for(const[c,d]of e.layouts){const u=[],f=[];for(const[,m]of d.layers){if(!ut(e,m.name,r))continue;const y=Pe(m.internalObject);u.push(...y.lineBatches),f.push(...y.meshBatches),await K()}s.push({btrId:c,name:_e(n,c),isModelSpace:c===e.modelSpaceBtrId,lineBatches:u,meshBatches:f,osnap:Re(a)?Fe(n,c,{includeLayer:o}):void 0}),await K()}return{version:it,meta:Oe(i,a,s,e.activeLayoutBtrId||e.modelSpaceBtrId),layers:l,layouts:s,activeLayoutBtrId:e.activeLayoutBtrId||e.modelSpaceBtrId}}buildSync(e,n,a){const r=a.exportInvisibleLayers!==!1,o=r?void 0:c=>ut(e,c,r),i=Te(n,{title:a.title,background:a.background}),l=[];e.layers.forEach(c=>{ut(e,c.name,r)&&l.push({name:c.name,color:c.color.RGB??16777215,visible:!c.isOff&&!c.isFrozen})});const s=[];return e.layouts.forEach((c,d)=>{const u=[],f=[];for(const[,m]of c.layers){if(!ut(e,m.name,r))continue;const y=Pe(m.internalObject);u.push(...y.lineBatches),f.push(...y.meshBatches)}s.push({btrId:d,name:_e(n,d),isModelSpace:d===e.modelSpaceBtrId,lineBatches:u,meshBatches:f,osnap:Re(a)?Fe(n,d,{includeLayer:o}):void 0})}),{version:it,meta:Oe(i,a,s,e.activeLayoutBtrId||e.modelSpaceBtrId),layers:l,layouts:s,activeLayoutBtrId:e.activeLayoutBtrId||e.modelSpaceBtrId}}}function Oe(t,e,n,a){const r=n.find(l=>l.btrId===a)??n[0],o=r?Ao(r.lineBatches,r.meshBatches):null,i=e.initialView??"fit";return{title:t.title,createdAt:new Date().toISOString(),extents:t.extents,viewExtents:o??void 0,units:t.units,background:t.background,locale:e.locale??A.currentLocale,initialView:i,viewState:i==="current"?e.viewState:void 0,viewerMode:e.viewerMode??"measure"}}function Re(t){return(t.viewerMode??"measure")==="measure"}function ut(t,e,n){if(n)return!0;const a=t.layers.get(e);return a?!a.isOff&&!a.isFrozen:!0}function _e(t,e){for(const n of t.tables.blockTable.newIterator())if(n.objectId===e)return n.name;return e}class Mo{constructor(e={}){this.options=e,this._snapshotBuilder=new ko}async prepareAcTrView2dForHtmlExport(e,n={}){if(!e||!("cadScene"in e)||!e.cadScene)throw new Error("CAD scene is not available. Open a drawing before exporting to HTML.");if(!(e instanceof kn))throw new Error("HTML export requires a 2D CAD view. Open a drawing before exporting.");const a=ft(n);return await e.ensureEntitiesConvertedForExport({includeInvisibleLayers:a.exportInvisibleLayers}),await K(),e}async convert(e,n={},a){const r=xt.instance,o=ft(n);await r.withBusyIndicator(async()=>{await K();const i=r.curDocument,l=await this.prepareAcTrView2dForHtmlExport(a??r.curView,o),s=e||i.fileName||i.docTitle,c=await this._snapshotBuilder.buildAsync(l.cadScene,i.database,{title:Mn(s),background:l.backgroundColor,exportInvisibleLayers:o.exportInvisibleLayers,initialView:o.initialView,viewerMode:o.viewerMode,viewState:o.initialView==="current"?ho(l):void 0});await K();const d=await this.loadViewerRuntime();await K();const u=Ee(c,{title:c.meta.title,viewerRuntime:d});await K(),this.downloadHtml(u,Cn(s,"html"))})}async packSnapshot(e,n){await xt.instance.withBusyIndicator(async()=>{await K();const a=await this.loadViewerRuntime();await K();const r=Ee(e,{title:e.meta.title,viewerRuntime:a});await K(),this.downloadHtml(r,n)})}async loadViewerRuntime(){const e=vo(this.options.viewerRuntimeUrl),n=await fetch(e);if(!n.ok)throw new Error(`Failed to load HTML viewer runtime from "${e}" (${n.status}). Install @mlightcad/cad-html-plugin, copy viewer-runtime.iife.js to your app assets, and set viewerRuntimeUrl on registerLazyHtmlPlugin / createHtmlPlugin / AcApHtmlConvertor.`);return n.text()}downloadHtml(e,n){const a=new Blob([e],{type:"text/html;charset=utf-8"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.setTimeout(()=>URL.revokeObjectURL(r),6e4)}}class Co extends An{constructor(e={}){super(),this.pluginOptions=e}async execute(e){const n=await this.promptOptions();n&&await new Mo(this.pluginOptions).convert(e.doc.fileName||e.doc.docTitle,n,e.view)}async promptOptions(){const e=await this.promptExportInvisibleLayers();if(e===void 0)return;const n=await this.promptInitialView();if(n===void 0)return;const a=await this.promptViewerMode();if(a!==void 0)return ft({exportInvisibleLayers:e,initialView:n,viewerMode:a})}async promptExportInvisibleLayers(){const e=ft(),n=new Dt(A.t("jig.chtml.exportInvisibleLayers"));n.allowNone=!0;const a=n.keywords.add(A.t("jig.chtml.keywords.yes.display"),A.t("jig.chtml.keywords.yes.global"),A.t("jig.chtml.keywords.yes.local")),r=n.keywords.add(A.t("jig.chtml.keywords.no.display"),A.t("jig.chtml.keywords.no.global"),A.t("jig.chtml.keywords.no.local"));n.keywords.default=e.exportInvisibleLayers?a:r;const o=await xt.instance.editor.getKeywords(n);if(o.status!==N.Cancel){if(o.status===N.None)return e.exportInvisibleLayers;if(o.status===N.OK||o.status===N.Keyword)return o.stringResult?o.stringResult==="Yes":e.exportInvisibleLayers}}async promptInitialView(){const e=ft(),n=new Dt(A.t("jig.chtml.initialView"));n.allowNone=!0;const a=n.keywords.add(A.t("jig.chtml.keywords.extents.display"),A.t("jig.chtml.keywords.extents.global"),A.t("jig.chtml.keywords.extents.local")),r=n.keywords.add(A.t("jig.chtml.keywords.current.display"),A.t("jig.chtml.keywords.current.global"),A.t("jig.chtml.keywords.current.local"));n.keywords.default=e.initialView==="current"?r:a;const o=await xt.instance.editor.getKeywords(n);if(o.status!==N.Cancel){if(o.status===N.None)return e.initialView;if(o.status===N.OK||o.status===N.Keyword)return o.stringResult?o.stringResult==="Current"?"current":"fit":e.initialView}}async promptViewerMode(){const e=ft(),n=new Dt(A.t("jig.chtml.viewerMode"));n.allowNone=!0;const a=n.keywords.add(A.t("jig.chtml.keywords.view.display"),A.t("jig.chtml.keywords.view.global"),A.t("jig.chtml.keywords.view.local")),r=n.keywords.add(A.t("jig.chtml.keywords.measure.display"),A.t("jig.chtml.keywords.measure.global"),A.t("jig.chtml.keywords.measure.local"));n.keywords.default=e.viewerMode==="view"?a:r;const o=await xt.instance.editor.getKeywords(n);if(o.status!==N.Cancel){if(o.status===N.None)return e.viewerMode;if(o.status===N.OK||o.status===N.Keyword)return o.stringResult?o.stringResult==="View"?"view":"measure":e.viewerMode}}}const zo="1.6.0",So={version:zo};class Lo{constructor(e={}){this.options=e,this.name="HtmlPlugin",this.version=So.version,this.description="HTML export (-chtml) command",this.registeredCommands=[]}onLoad(e,n){const a=Sn.SYSTEMT_COMMAND_GROUP_NAME,r=new Co(this.options);n.addCommand(a,"-chtml","-chtml",r),this.registeredCommands.push({group:a,name:"-chtml"}),n.lookupGlobalCmd("chtml")||(n.addCommand(a,"chtml","chtml",r),this.registeredCommands.push({group:a,name:"chtml"}))}onUnload(e,n){for(const a of this.registeredCommands)n.removeCmd(a.group,a.name);this.registeredCommands=[]}}async function Eo(t={}){return t.viewerRuntimeUrl!=null&&po(t),new Lo(yo())}const $o="viewer-runtime.iife.js";export{Ho as ACEX_DEFAULT_OSNAP_MODES,ba as ACEX_SNAPSHOT_COMPRESSION,it as ACEX_SNAPSHOT_VERSION,Co as AcApExportHtmlCmd,Mo as AcApHtmlConvertor,ko as AcApHtmlSnapshotBuilder,Do as AcExHtmlI18n,go as DEFAULT_HTML_VIEWER_RUNTIME_URL,_o as HTML_PLUGIN_NAME,Vo as HTML_PLUGIN_TRIGGERS,$o as HTML_VIEWER_RUNTIME_FILE,Fe as buildOsnapCatalog,Te as buildViewerMetadata,ho as captureAcApHtmlViewState,Fr as circleOrArcToAcGe,Pe as collectBatchesFromObject3D,xa as compressSnapshotBinary,po as configureHtmlPlugin,Eo as createHtmlPlugin,Bo as decodeSnapshot,Ma as decodeSnapshotBinary,Aa as decompressSnapshotBinary,Er as detectAcExHtmlLocale,Dr as detectBrowserAcExHtmlLocale,Br as ellipseToAcGe,Ba as encodeSnapshot,ka as encodeSnapshotBinary,Ka as exportActiveBatchedLine2Slice,ye as exportActiveBatchedSlice,Ue as exportBufferGeometrySlice,yo as getHtmlPluginOptions,Ee as packHtml,jo as primitiveToAcGeCurve,ft as resolveAcApHtmlExportOptions,xe as resolveAcExHtmlLocale,vo as resolveViewerRuntimeUrl,Ha as snapshotMimeType,Hr as splineToAcGe};
