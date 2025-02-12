(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const d of f.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function l(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(c){if(c.ep)return;c.ep=!0;const f=l(c);fetch(c.href,f)}})();function O1(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var uf={exports:{}},Al={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function T1(){if(rg)return Al;rg=1;var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function l(o,c,f){var d=null;if(f!==void 0&&(d=""+f),c.key!==void 0&&(d=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:i,type:o,key:d,ref:c!==void 0?c:null,props:f}}return Al.Fragment=a,Al.jsx=l,Al.jsxs=l,Al}var lg;function x1(){return lg||(lg=1,uf.exports=T1()),uf.exports}var j=x1(),cf={exports:{}},Ol={},ff={exports:{}},df={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function D1(){return og||(og=1,function(i){function a(P,nt){var st=P.length;P.push(nt);t:for(;0<st;){var X=st-1>>>1,_=P[X];if(0<c(_,nt))P[X]=nt,P[st]=_,st=X;else break t}}function l(P){return P.length===0?null:P[0]}function o(P){if(P.length===0)return null;var nt=P[0],st=P.pop();if(st!==nt){P[0]=st;t:for(var X=0,_=P.length,Y=_>>>1;X<Y;){var at=2*(X+1)-1,dt=P[at],I=at+1,_t=P[I];if(0>c(dt,st))I<_&&0>c(_t,dt)?(P[X]=_t,P[I]=st,X=I):(P[X]=dt,P[at]=st,X=at);else if(I<_&&0>c(_t,st))P[X]=_t,P[I]=st,X=I;else break t}}return nt}function c(P,nt){var st=P.sortIndex-nt.sortIndex;return st!==0?st:P.id-nt.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var d=Date,m=d.now();i.unstable_now=function(){return d.now()-m}}var v=[],g=[],b=1,T=null,H=3,k=!1,x=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var nt=l(g);nt!==null;){if(nt.callback===null)o(g);else if(nt.startTime<=P)o(g),nt.sortIndex=nt.expirationTime,a(v,nt);else break;nt=l(g)}}function tt(P){if(S=!1,F(P),!x)if(l(v)!==null)x=!0,Dt();else{var nt=l(g);nt!==null&&At(tt,nt.startTime-P)}}var L=!1,it=-1,mt=5,yt=-1;function K(){return!(i.unstable_now()-yt<mt)}function et(){if(L){var P=i.unstable_now();yt=P;var nt=!0;try{t:{x=!1,S&&(S=!1,Q(it),it=-1),k=!0;var st=H;try{e:{for(F(P),T=l(v);T!==null&&!(T.expirationTime>P&&K());){var X=T.callback;if(typeof X=="function"){T.callback=null,H=T.priorityLevel;var _=X(T.expirationTime<=P);if(P=i.unstable_now(),typeof _=="function"){T.callback=_,F(P),nt=!0;break e}T===l(v)&&o(v),F(P)}else o(v);T=l(v)}if(T!==null)nt=!0;else{var Y=l(g);Y!==null&&At(tt,Y.startTime-P),nt=!1}}break t}finally{T=null,H=st,k=!1}nt=void 0}}finally{nt?Rt():L=!1}}}var Rt;if(typeof B=="function")Rt=function(){B(et)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,ct=ut.port2;ut.port1.onmessage=et,Rt=function(){ct.postMessage(null)}}else Rt=function(){N(et,0)};function Dt(){L||(L=!0,Rt())}function At(P,nt){it=N(function(){P(i.unstable_now())},nt)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(P){P.callback=null},i.unstable_continueExecution=function(){x||k||(x=!0,Dt())},i.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):mt=0<P?Math.floor(1e3/P):5},i.unstable_getCurrentPriorityLevel=function(){return H},i.unstable_getFirstCallbackNode=function(){return l(v)},i.unstable_next=function(P){switch(H){case 1:case 2:case 3:var nt=3;break;default:nt=H}var st=H;H=nt;try{return P()}finally{H=st}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(P,nt){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var st=H;H=P;try{return nt()}finally{H=st}},i.unstable_scheduleCallback=function(P,nt,st){var X=i.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?X+st:X):st=X,P){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=st+_,P={id:b++,callback:nt,priorityLevel:P,startTime:st,expirationTime:_,sortIndex:-1},st>X?(P.sortIndex=st,a(g,P),l(v)===null&&P===l(g)&&(S?(Q(it),it=-1):S=!0,At(tt,st-X))):(P.sortIndex=_,a(v,P),x||k||(x=!0,Dt())),P},i.unstable_shouldYield=K,i.unstable_wrapCallback=function(P){var nt=H;return function(){var st=H;H=nt;try{return P.apply(this,arguments)}finally{H=st}}}}(df)),df}var sg;function w1(){return sg||(sg=1,ff.exports=D1()),ff.exports}var hf={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function N1(){if(ug)return xt;ug=1;var i=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),T=Symbol.iterator;function H(_){return _===null||typeof _!="object"?null:(_=T&&_[T]||_["@@iterator"],typeof _=="function"?_:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,S={};function N(_,Y,at){this.props=_,this.context=Y,this.refs=S,this.updater=at||k}N.prototype.isReactComponent={},N.prototype.setState=function(_,Y){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,Y,"setState")},N.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function Q(){}Q.prototype=N.prototype;function B(_,Y,at){this.props=_,this.context=Y,this.refs=S,this.updater=at||k}var F=B.prototype=new Q;F.constructor=B,x(F,N.prototype),F.isPureReactComponent=!0;var tt=Array.isArray,L={H:null,A:null,T:null,S:null},it=Object.prototype.hasOwnProperty;function mt(_,Y,at,dt,I,_t){return at=_t.ref,{$$typeof:i,type:_,key:Y,ref:at!==void 0?at:null,props:_t}}function yt(_,Y){return mt(_.type,Y,void 0,void 0,void 0,_.props)}function K(_){return typeof _=="object"&&_!==null&&_.$$typeof===i}function et(_){var Y={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(at){return Y[at]})}var Rt=/\/+/g;function ut(_,Y){return typeof _=="object"&&_!==null&&_.key!=null?et(""+_.key):Y.toString(36)}function ct(){}function Dt(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(ct,ct):(_.status="pending",_.then(function(Y){_.status==="pending"&&(_.status="fulfilled",_.value=Y)},function(Y){_.status==="pending"&&(_.status="rejected",_.reason=Y)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function At(_,Y,at,dt,I){var _t=typeof _;(_t==="undefined"||_t==="boolean")&&(_=null);var vt=!1;if(_===null)vt=!0;else switch(_t){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(_.$$typeof){case i:case a:vt=!0;break;case b:return vt=_._init,At(vt(_._payload),Y,at,dt,I)}}if(vt)return I=I(_),vt=dt===""?"."+ut(_,0):dt,tt(I)?(at="",vt!=null&&(at=vt.replace(Rt,"$&/")+"/"),At(I,Y,at,"",function(Vt){return Vt})):I!=null&&(K(I)&&(I=yt(I,at+(I.key==null||_&&_.key===I.key?"":(""+I.key).replace(Rt,"$&/")+"/")+vt)),Y.push(I)),1;vt=0;var Ft=dt===""?".":dt+":";if(tt(_))for(var Ot=0;Ot<_.length;Ot++)dt=_[Ot],_t=Ft+ut(dt,Ot),vt+=At(dt,Y,at,_t,I);else if(Ot=H(_),typeof Ot=="function")for(_=Ot.call(_),Ot=0;!(dt=_.next()).done;)dt=dt.value,_t=Ft+ut(dt,Ot++),vt+=At(dt,Y,at,_t,I);else if(_t==="object"){if(typeof _.then=="function")return At(Dt(_),Y,at,dt,I);throw Y=String(_),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return vt}function P(_,Y,at){if(_==null)return _;var dt=[],I=0;return At(_,dt,"","",function(_t){return Y.call(at,_t,I++)}),dt}function nt(_){if(_._status===-1){var Y=_._result;Y=Y(),Y.then(function(at){(_._status===0||_._status===-1)&&(_._status=1,_._result=at)},function(at){(_._status===0||_._status===-1)&&(_._status=2,_._result=at)}),_._status===-1&&(_._status=0,_._result=Y)}if(_._status===1)return _._result.default;throw _._result}var st=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function X(){}return xt.Children={map:P,forEach:function(_,Y,at){P(_,function(){Y.apply(this,arguments)},at)},count:function(_){var Y=0;return P(_,function(){Y++}),Y},toArray:function(_){return P(_,function(Y){return Y})||[]},only:function(_){if(!K(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},xt.Component=N,xt.Fragment=l,xt.Profiler=c,xt.PureComponent=B,xt.StrictMode=o,xt.Suspense=v,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,xt.act=function(){throw Error("act(...) is not supported in production builds of React.")},xt.cache=function(_){return function(){return _.apply(null,arguments)}},xt.cloneElement=function(_,Y,at){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var dt=x({},_.props),I=_.key,_t=void 0;if(Y!=null)for(vt in Y.ref!==void 0&&(_t=void 0),Y.key!==void 0&&(I=""+Y.key),Y)!it.call(Y,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&Y.ref===void 0||(dt[vt]=Y[vt]);var vt=arguments.length-2;if(vt===1)dt.children=at;else if(1<vt){for(var Ft=Array(vt),Ot=0;Ot<vt;Ot++)Ft[Ot]=arguments[Ot+2];dt.children=Ft}return mt(_.type,I,void 0,void 0,_t,dt)},xt.createContext=function(_){return _={$$typeof:d,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:f,_context:_},_},xt.createElement=function(_,Y,at){var dt,I={},_t=null;if(Y!=null)for(dt in Y.key!==void 0&&(_t=""+Y.key),Y)it.call(Y,dt)&&dt!=="key"&&dt!=="__self"&&dt!=="__source"&&(I[dt]=Y[dt]);var vt=arguments.length-2;if(vt===1)I.children=at;else if(1<vt){for(var Ft=Array(vt),Ot=0;Ot<vt;Ot++)Ft[Ot]=arguments[Ot+2];I.children=Ft}if(_&&_.defaultProps)for(dt in vt=_.defaultProps,vt)I[dt]===void 0&&(I[dt]=vt[dt]);return mt(_,_t,void 0,void 0,null,I)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(_){return{$$typeof:m,render:_}},xt.isValidElement=K,xt.lazy=function(_){return{$$typeof:b,_payload:{_status:-1,_result:_},_init:nt}},xt.memo=function(_,Y){return{$$typeof:g,type:_,compare:Y===void 0?null:Y}},xt.startTransition=function(_){var Y=L.T,at={};L.T=at;try{var dt=_(),I=L.S;I!==null&&I(at,dt),typeof dt=="object"&&dt!==null&&typeof dt.then=="function"&&dt.then(X,st)}catch(_t){st(_t)}finally{L.T=Y}},xt.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},xt.use=function(_){return L.H.use(_)},xt.useActionState=function(_,Y,at){return L.H.useActionState(_,Y,at)},xt.useCallback=function(_,Y){return L.H.useCallback(_,Y)},xt.useContext=function(_){return L.H.useContext(_)},xt.useDebugValue=function(){},xt.useDeferredValue=function(_,Y){return L.H.useDeferredValue(_,Y)},xt.useEffect=function(_,Y){return L.H.useEffect(_,Y)},xt.useId=function(){return L.H.useId()},xt.useImperativeHandle=function(_,Y,at){return L.H.useImperativeHandle(_,Y,at)},xt.useInsertionEffect=function(_,Y){return L.H.useInsertionEffect(_,Y)},xt.useLayoutEffect=function(_,Y){return L.H.useLayoutEffect(_,Y)},xt.useMemo=function(_,Y){return L.H.useMemo(_,Y)},xt.useOptimistic=function(_,Y){return L.H.useOptimistic(_,Y)},xt.useReducer=function(_,Y,at){return L.H.useReducer(_,Y,at)},xt.useRef=function(_){return L.H.useRef(_)},xt.useState=function(_){return L.H.useState(_)},xt.useSyncExternalStore=function(_,Y,at){return L.H.useSyncExternalStore(_,Y,at)},xt.useTransition=function(){return L.H.useTransition()},xt.version="19.0.0",xt}var cg;function td(){return cg||(cg=1,hf.exports=N1()),hf.exports}var pf={exports:{}},Ae={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function C1(){if(fg)return Ae;fg=1;var i=td();function a(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var o={d:{f:l,r:function(){throw Error(a(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(v,g,b){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:T==null?null:""+T,children:v,containerInfo:g,implementation:b}}var d=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ae.createPortal=function(v,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return f(v,g,null,b)},Ae.flushSync=function(v){var g=d.T,b=o.p;try{if(d.T=null,o.p=2,v)return v()}finally{d.T=g,o.p=b,o.d.f()}},Ae.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,o.d.C(v,g))},Ae.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},Ae.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var b=g.as,T=m(b,g.crossOrigin),H=typeof g.integrity=="string"?g.integrity:void 0,k=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?o.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:H,fetchPriority:k}):b==="script"&&o.d.X(v,{crossOrigin:T,integrity:H,fetchPriority:k,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Ae.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=m(g.as,g.crossOrigin);o.d.M(v,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&o.d.M(v)},Ae.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,T=m(b,g.crossOrigin);o.d.L(v,b,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Ae.preloadModule=function(v,g){if(typeof v=="string")if(g){var b=m(g.as,g.crossOrigin);o.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else o.d.m(v)},Ae.requestFormReset=function(v){o.d.r(v)},Ae.unstable_batchedUpdates=function(v,g){return v(g)},Ae.useFormState=function(v,g,b){return d.H.useFormState(v,g,b)},Ae.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ae.version="19.0.0",Ae}var dg;function R1(){if(dg)return pf.exports;dg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),pf.exports=C1(),pf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function M1(){if(hg)return Ol;hg=1;var i=w1(),a=td(),l=R1();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var f=Symbol.for("react.element"),d=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),v=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),H=Symbol.for("react.consumer"),k=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),tt=Symbol.for("react.memo_cache_sentinel"),L=Symbol.iterator;function it(t){return t===null||typeof t!="object"?null:(t=L&&t[L]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Symbol.for("react.client.reference");function yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case v:return"Fragment";case m:return"Portal";case b:return"Profiler";case g:return"StrictMode";case S:return"Suspense";case N:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case k:return(t.displayName||"Context")+".Provider";case H:return(t._context.displayName||"Context")+".Consumer";case x:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q:return e=t.displayName||null,e!==null?e:yt(t.type)||"Memo";case B:e=t._payload,t=t._init;try{return yt(t(e))}catch{}}return null}var K=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=Object.assign,Rt,ut;function ct(t){if(Rt===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rt=e&&e[1]||"",ut=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+t+ut}var Dt=!1;function At(t,e){if(!t||Dt)return"";Dt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var $=function(){throw Error()};if(Object.defineProperty($.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct($,[])}catch(q){var R=q}Reflect.construct(t,[],$)}else{try{$.call()}catch(q){R=q}t.call($.prototype)}}else{try{throw Error()}catch(q){R=q}($=t())&&typeof $.catch=="function"&&$.catch(function(){})}}catch(q){if(q&&R&&typeof q.stack=="string")return[q.stack,R.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),h=u[0],p=u[1];if(h&&p){var y=h.split(`
`),O=p.split(`
`);for(s=r=0;r<y.length&&!y[r].includes("DetermineComponentFrameRoot");)r++;for(;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;if(r===y.length||s===O.length)for(r=y.length-1,s=O.length-1;1<=r&&0<=s&&y[r]!==O[s];)s--;for(;1<=r&&0<=s;r--,s--)if(y[r]!==O[s]){if(r!==1||s!==1)do if(r--,s--,0>s||y[r]!==O[s]){var U=`
`+y[r].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=r&&0<=s);break}}}finally{Dt=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ct(n):""}function P(t){switch(t.tag){case 26:case 27:case 5:return ct(t.type);case 16:return ct("Lazy");case 13:return ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return t=At(t.type,!1),t;case 11:return t=At(t.type.render,!1),t;case 1:return t=At(t.type,!0),t;default:return""}}function nt(t){try{var e="";do e+=P(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function st(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(st(t)!==t)throw Error(o(188))}function Y(t){var e=t.alternate;if(!e){if(e=st(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var u=s.alternate;if(u===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===u.child){for(u=s.child;u;){if(u===n)return _(s),t;if(u===r)return _(s),e;u=u.sibling}throw Error(o(188))}if(n.return!==r.return)n=s,r=u;else{for(var h=!1,p=s.child;p;){if(p===n){h=!0,n=s,r=u;break}if(p===r){h=!0,r=s,n=u;break}p=p.sibling}if(!h){for(p=u.child;p;){if(p===n){h=!0,n=u,r=s;break}if(p===r){h=!0,r=u,n=s;break}p=p.sibling}if(!h)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function at(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=at(t),e!==null)return e;t=t.sibling}return null}var dt=Array.isArray,I=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_t={pending:!1,data:null,method:null,action:null},vt=[],Ft=-1;function Ot(t){return{current:t}}function Vt(t){0>Ft||(t.current=vt[Ft],vt[Ft]=null,Ft--)}function Ht(t,e){Ft++,vt[Ft]=t.current,t.current=e}var ge=Ot(null),qn=Ot(null),Re=Ot(null),Un=Ot(null);function Ya(t,e){switch(Ht(Re,e),Ht(qn,t),Ht(ge,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?km(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=km(t),e=Lm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Vt(ge),Ht(ge,e)}function An(){Vt(ge),Vt(qn),Vt(Re)}function $a(t){t.memoizedState!==null&&Ht(Un,t);var e=ge.current,n=Lm(e,t.type);e!==n&&(Ht(qn,t),Ht(ge,n))}function E(t){qn.current===t&&(Vt(ge),Vt(qn)),Un.current===t&&(Vt(Un),vl._currentValue=_t)}var C=Object.prototype.hasOwnProperty,M=i.unstable_scheduleCallback,W=i.unstable_cancelCallback,J=i.unstable_shouldYield,Z=i.unstable_requestPaint,rt=i.unstable_now,St=i.unstable_getCurrentPriorityLevel,Kt=i.unstable_ImmediatePriority,Qt=i.unstable_UserBlockingPriority,_e=i.unstable_NormalPriority,eu=i.unstable_LowPriority,Ti=i.unstable_IdlePriority,Dr=i.log,nu=i.unstable_setDisableYieldValue,ua=null,Te=null;function Zl(t){if(Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(ua,t,void 0,(t.current.flags&128)===128)}catch{}}function ca(t){if(typeof Dr=="function"&&nu(t),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(ua,t)}catch{}}var He=Math.clz32?Math.clz32:fv,uv=Math.log,cv=Math.LN2;function fv(t){return t>>>=0,t===0?32:31-(uv(t)/cv|0)|0}var Fl=128,Jl=4194304;function Pa(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,u=t.pingedLanes,h=t.warmLanes;t=t.finishedLanes!==0;var p=n&134217727;return p!==0?(n=p&~s,n!==0?r=Pa(n):(u&=p,u!==0?r=Pa(u):t||(h=p&~h,h!==0&&(r=Pa(h))))):(p=n&~s,p!==0?r=Pa(p):u!==0?r=Pa(u):t||(h=n&~h,h!==0&&(r=Pa(h)))),r===0?0:e!==0&&e!==r&&!(e&s)&&(s=r&-r,h=e&-e,s>=h||s===32&&(h&4194176)!==0)?e:r}function wr(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function dv(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xd(){var t=Fl;return Fl<<=1,!(Fl&4194176)&&(Fl=128),t}function Dd(){var t=Jl;return Jl<<=1,!(Jl&62914560)&&(Jl=4194304),t}function au(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Nr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function hv(t,e,n,r,s,u){var h=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var p=t.entanglements,y=t.expirationTimes,O=t.hiddenUpdates;for(n=h&~n;0<n;){var U=31-He(n),$=1<<U;p[U]=0,y[U]=-1;var R=O[U];if(R!==null)for(O[U]=null,U=0;U<R.length;U++){var q=R[U];q!==null&&(q.lane&=-536870913)}n&=~$}r!==0&&wd(t,r,0),u!==0&&s===0&&t.tag!==0&&(t.suspendedLanes|=u&~(h&~e))}function wd(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-He(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&4194218}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-He(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}function Cd(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Rd(){var t=I.p;return t!==0?t:(t=window.event,t===void 0?32:Im(t.type))}function pv(t,e){var n=I.p;try{return I.p=t,e()}finally{I.p=n}}var fa=Math.random().toString(36).slice(2),Ee="__reactFiber$"+fa,Me="__reactProps$"+fa,xi="__reactContainer$"+fa,iu="__reactEvents$"+fa,mv="__reactListeners$"+fa,gv="__reactHandles$"+fa,Md="__reactResources$"+fa,Cr="__reactMarker$"+fa;function ru(t){delete t[Ee],delete t[Me],delete t[iu],delete t[mv],delete t[gv]}function Ga(t){var e=t[Ee];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Ee]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[Ee])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function Di(t){if(t=t[Ee]||t[xi]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Rr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function wi(t){var e=t[Md];return e||(e=t[Md]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function de(t){t[Cr]=!0}var zd=new Set,kd={};function Xa(t,e){Ni(t,e),Ni(t+"Capture",e)}function Ni(t,e){for(kd[t]=e,t=0;t<e.length;t++)zd.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ld={},qd={};function vv(t){return C.call(qd,t)?!0:C.call(Ld,t)?!1:bv.test(t)?qd[t]=!0:(Ld[t]=!0,!1)}function Il(t,e,n){if(vv(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function to(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function jn(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+r)}}function Fe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ud(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yv(t){var e=Ud(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,u=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(h){r=""+h,u.call(this,h)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(h){r=""+h},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function eo(t){t._valueTracker||(t._valueTracker=yv(t))}function Hd(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ud(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function no(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var _v=/[\n"\\]/g;function Je(t){return t.replace(_v,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function lu(t,e,n,r,s,u,h,p){t.name="",h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.type=h:t.removeAttribute("type"),e!=null?h==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Fe(e)):t.value!==""+Fe(e)&&(t.value=""+Fe(e)):h!=="submit"&&h!=="reset"||t.removeAttribute("value"),e!=null?ou(t,h,Fe(e)):n!=null?ou(t,h,Fe(n)):r!=null&&t.removeAttribute("value"),s==null&&u!=null&&(t.defaultChecked=!!u),s!=null&&(t.checked=s&&typeof s!="function"&&typeof s!="symbol"),p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?t.name=""+Fe(p):t.removeAttribute("name")}function jd(t,e,n,r,s,u,h,p){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;n=n!=null?""+Fe(n):"",e=e!=null?""+Fe(e):n,p||e===t.value||(t.value=e),t.defaultValue=e}r=r??s,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=p?t.checked:!!r,t.defaultChecked=!!r,h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.name=h)}function ou(t,e,n){e==="number"&&no(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Ci(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fe(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Bd(t,e,n){if(e!=null&&(e=""+Fe(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Fe(n):""}function Vd(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(o(92));if(dt(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=Fe(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r)}function Ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ev=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yd(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||Ev.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function $d(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var s in e)r=e[s],e.hasOwnProperty(s)&&n[s]!==r&&Yd(t,s,r)}else for(var u in e)e.hasOwnProperty(u)&&Yd(t,u,e[u])}function su(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Av=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ao(t){return Av.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var uu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Mi=null,zi=null;function Pd(t){var e=Di(t);if(e&&(t=e.stateNode)){var n=t[Me]||null;t:switch(t=e.stateNode,e.type){case"input":if(lu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Je(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=r[Me]||null;if(!s)throw Error(o(90));lu(r,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&Hd(r)}break t;case"textarea":Bd(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Ci(t,!!n.multiple,e,!1)}}}var fu=!1;function Gd(t,e,n){if(fu)return t(e,n);fu=!0;try{var r=t(e);return r}finally{if(fu=!1,(Mi!==null||zi!==null)&&(Vo(),Mi&&(e=Mi,t=zi,zi=Mi=null,Pd(e),t)))for(e=0;e<t.length;e++)Pd(t[e])}}function Mr(t,e){var n=t.stateNode;if(n===null)return null;var r=n[Me]||null;if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var du=!1;if(Hn)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){du=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{du=!1}var da=null,hu=null,io=null;function Xd(){if(io)return io;var t,e=hu,n=e.length,r,s="value"in da?da.value:da.textContent,u=s.length;for(t=0;t<n&&e[t]===s[t];t++);var h=n-t;for(r=1;r<=h&&e[n-r]===s[u-r];r++);return io=s.slice(t,1<r?1-r:void 0)}function ro(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Kd(){return!1}function ze(t){function e(n,r,s,u,h){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=u,this.target=h,this.currentTarget=null;for(var p in t)t.hasOwnProperty(p)&&(n=t[p],this[p]=n?n(u):u[p]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?lo:Kd,this.isPropagationStopped=Kd,this}return et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=ze(Ka),kr=et({},Ka,{view:0,detail:0}),Ov=ze(kr),pu,mu,Lr,so=et({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Lr&&(Lr&&t.type==="mousemove"?(pu=t.screenX-Lr.screenX,mu=t.screenY-Lr.screenY):mu=pu=0,Lr=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),Qd=ze(so),Tv=et({},so,{dataTransfer:0}),xv=ze(Tv),Dv=et({},kr,{relatedTarget:0}),gu=ze(Dv),wv=et({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Nv=ze(wv),Cv=et({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rv=ze(Cv),Mv=et({},Ka,{data:0}),Zd=ze(Mv),zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lv[t])?!!e[t]:!1}function bu(){return qv}var Uv=et({},kr,{key:function(t){if(t.key){var e=zv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Hv=ze(Uv),jv=et({},so,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fd=ze(jv),Bv=et({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Vv=ze(Bv),Yv=et({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=ze(Yv),Pv=et({},so,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gv=ze(Pv),Xv=et({},Ka,{newState:0,oldState:0}),Kv=ze(Xv),Qv=[9,13,27,32],vu=Hn&&"CompositionEvent"in window,qr=null;Hn&&"documentMode"in document&&(qr=document.documentMode);var Zv=Hn&&"TextEvent"in window&&!qr,Jd=Hn&&(!vu||qr&&8<qr&&11>=qr),Wd=" ",Id=!1;function th(t,e){switch(t){case"keyup":return Qv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ki=!1;function Fv(t,e){switch(t){case"compositionend":return eh(e);case"keypress":return e.which!==32?null:(Id=!0,Wd);case"textInput":return t=e.data,t===Wd&&Id?null:t;default:return null}}function Jv(t,e){if(ki)return t==="compositionend"||!vu&&th(t,e)?(t=Xd(),io=hu=da=null,ki=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jd&&e.locale!=="ko"?null:e.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Wv[t.type]:e==="textarea"}function ah(t,e,n,r){Mi?zi?zi.push(r):zi=[r]:Mi=r,e=Xo(e,"onChange"),0<e.length&&(n=new oo("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ur=null,Hr=null;function Iv(t){Nm(t,0)}function uo(t){var e=Rr(t);if(Hd(e))return t}function ih(t,e){if(t==="change")return e}var rh=!1;if(Hn){var yu;if(Hn){var _u="oninput"in document;if(!_u){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),_u=typeof lh.oninput=="function"}yu=_u}else yu=!1;rh=yu&&(!document.documentMode||9<document.documentMode)}function oh(){Ur&&(Ur.detachEvent("onpropertychange",sh),Hr=Ur=null)}function sh(t){if(t.propertyName==="value"&&uo(Hr)){var e=[];ah(e,Hr,t,cu(t)),Gd(Iv,e)}}function ty(t,e,n){t==="focusin"?(oh(),Ur=e,Hr=n,Ur.attachEvent("onpropertychange",sh)):t==="focusout"&&oh()}function ey(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uo(Hr)}function ny(t,e){if(t==="click")return uo(e)}function ay(t,e){if(t==="input"||t==="change")return uo(e)}function iy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var je=typeof Object.is=="function"?Object.is:iy;function jr(t,e){if(je(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!C.call(e,s)||!je(t[s],e[s]))return!1}return!0}function uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ch(t,e){var n=uh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=uh(n)}}function fh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=no(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=no(t.document)}return e}function Eu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ry(t,e){var n=dh(e);e=t.focusedElem;var r=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&fh(e.ownerDocument.documentElement,e)){if(r!==null&&Eu(e)){if(t=r.start,n=r.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var s=e.textContent.length,u=Math.min(r.start,s);r=r.end===void 0?u:Math.min(r.end,s),!n.extend&&u>r&&(s=r,r=u,u=s),s=ch(e,u);var h=ch(e,r);s&&h&&(n.rangeCount!==1||n.anchorNode!==s.node||n.anchorOffset!==s.offset||n.focusNode!==h.node||n.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),n.removeAllRanges(),u>r?(n.addRange(t),n.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ly=Hn&&"documentMode"in document&&11>=document.documentMode,Li=null,Su=null,Br=null,Au=!1;function hh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Au||Li==null||Li!==no(r)||(r=Li,"selectionStart"in r&&Eu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Xo(Su,"onSelect"),0<r.length&&(e=new oo("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Li)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qi={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},Ou={},ph={};Hn&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function Za(t){if(Ou[t])return Ou[t];if(!qi[t])return t;var e=qi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ph)return Ou[t]=e[n];return t}var mh=Za("animationend"),gh=Za("animationiteration"),bh=Za("animationstart"),oy=Za("transitionrun"),sy=Za("transitionstart"),uy=Za("transitioncancel"),vh=Za("transitionend"),yh=new Map,_h="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function pn(t,e){yh.set(t,e),Xa(e,[t])}var We=[],Ui=0,Tu=0;function co(){for(var t=Ui,e=Tu=Ui=0;e<t;){var n=We[e];We[e++]=null;var r=We[e];We[e++]=null;var s=We[e];We[e++]=null;var u=We[e];if(We[e++]=null,r!==null&&s!==null){var h=r.pending;h===null?s.next=s:(s.next=h.next,h.next=s),r.pending=s}u!==0&&Eh(n,s,u)}}function fo(t,e,n,r){We[Ui++]=t,We[Ui++]=e,We[Ui++]=n,We[Ui++]=r,Tu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function xu(t,e,n,r){return fo(t,e,n,r),ho(t)}function ha(t,e){return fo(t,null,null,e),ho(t)}function Eh(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var s=!1,u=t.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(s=!0)),t=u,u=u.return;s&&e!==null&&t.tag===3&&(u=t.stateNode,s=31-He(n),u=u.hiddenUpdates,t=u[s],t===null?u[s]=[e]:t.push(e),e.lane=n|536870912)}function ho(t){if(50<fl)throw fl=0,Mc=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Hi={},Sh=new WeakMap;function Ie(t,e){if(typeof t=="object"&&t!==null){var n=Sh.get(t);return n!==void 0?n:(e={value:t,source:e,stack:nt(e)},Sh.set(t,e),e)}return{value:t,source:e,stack:nt(e)}}var ji=[],Bi=0,po=null,mo=0,tn=[],en=0,Fa=null,Bn=1,Vn="";function Ja(t,e){ji[Bi++]=mo,ji[Bi++]=po,po=t,mo=e}function Ah(t,e,n){tn[en++]=Bn,tn[en++]=Vn,tn[en++]=Fa,Fa=t;var r=Bn;t=Vn;var s=32-He(r)-1;r&=~(1<<s),n+=1;var u=32-He(e)+s;if(30<u){var h=s-s%5;u=(r&(1<<h)-1).toString(32),r>>=h,s-=h,Bn=1<<32-He(e)+s|n<<s|r,Vn=u+t}else Bn=1<<u|n<<s|r,Vn=t}function Du(t){t.return!==null&&(Ja(t,1),Ah(t,1,0))}function wu(t){for(;t===po;)po=ji[--Bi],ji[Bi]=null,mo=ji[--Bi],ji[Bi]=null;for(;t===Fa;)Fa=tn[--en],tn[en]=null,Vn=tn[--en],tn[en]=null,Bn=tn[--en],tn[en]=null}var xe=null,be=null,qt=!1,mn=null,On=!1,Nu=Error(o(519));function Wa(t){var e=Error(o(418,""));throw $r(Ie(e,t)),Nu}function Oh(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[Ee]=t,e[Me]=r,n){case"dialog":kt("cancel",e),kt("close",e);break;case"iframe":case"object":case"embed":kt("load",e);break;case"video":case"audio":for(n=0;n<hl.length;n++)kt(hl[n],e);break;case"source":kt("error",e);break;case"img":case"image":case"link":kt("error",e),kt("load",e);break;case"details":kt("toggle",e);break;case"input":kt("invalid",e),jd(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),eo(e);break;case"select":kt("invalid",e);break;case"textarea":kt("invalid",e),Vd(e,r.value,r.defaultValue,r.children),eo(e)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||zm(e.textContent,n)?(r.popover!=null&&(kt("beforetoggle",e),kt("toggle",e)),r.onScroll!=null&&kt("scroll",e),r.onScrollEnd!=null&&kt("scrollend",e),r.onClick!=null&&(e.onclick=Ko),e=!0):e=!1,e||Wa(t)}function Th(t){for(xe=t.return;xe;)switch(xe.tag){case 3:case 27:On=!0;return;case 5:case 13:On=!1;return;default:xe=xe.return}}function Vr(t){if(t!==xe)return!1;if(!qt)return Th(t),qt=!0,!1;var e=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Zc(t.type,t.memoizedProps)),n=!n),n&&(e=!0),e&&be&&Wa(t),Th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){be=bn(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}be=null}}else be=xe?bn(t.stateNode.nextSibling):null;return!0}function Yr(){be=xe=null,qt=!1}function $r(t){mn===null?mn=[t]:mn.push(t)}var Pr=Error(o(460)),xh=Error(o(474)),Cu={then:function(){}};function Dh(t){return t=t.status,t==="fulfilled"||t==="rejected"}function go(){}function wh(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(go,go),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Pr?Error(o(483)):t;default:if(typeof e.status=="string")e.then(go,go);else{if(t=Pt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var s=e;s.status="fulfilled",s.value=r}},function(r){if(e.status==="pending"){var s=e;s.status="rejected",s.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===Pr?Error(o(483)):t}throw Gr=e,Pr}}var Gr=null;function Nh(){if(Gr===null)throw Error(o(459));var t=Gr;return Gr=null,t}var Vi=null,Xr=0;function bo(t){var e=Xr;return Xr+=1,Vi===null&&(Vi=[]),wh(Vi,t,e)}function Kr(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function vo(t,e){throw e.$$typeof===f?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ch(t){var e=t._init;return e(t._payload)}function Rh(t){function e(D,A){if(t){var w=D.deletions;w===null?(D.deletions=[A],D.flags|=16):w.push(A)}}function n(D,A){if(!t)return null;for(;A!==null;)e(D,A),A=A.sibling;return null}function r(D){for(var A=new Map;D!==null;)D.key!==null?A.set(D.key,D):A.set(D.index,D),D=D.sibling;return A}function s(D,A){return D=Ta(D,A),D.index=0,D.sibling=null,D}function u(D,A,w){return D.index=w,t?(w=D.alternate,w!==null?(w=w.index,w<A?(D.flags|=33554434,A):w):(D.flags|=33554434,A)):(D.flags|=1048576,A)}function h(D){return t&&D.alternate===null&&(D.flags|=33554434),D}function p(D,A,w,V){return A===null||A.tag!==6?(A=Oc(w,D.mode,V),A.return=D,A):(A=s(A,w),A.return=D,A)}function y(D,A,w,V){var lt=w.type;return lt===v?U(D,A,w.props.children,V,w.key):A!==null&&(A.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===B&&Ch(lt)===A.type)?(A=s(A,w.props),Kr(A,w),A.return=D,A):(A=qo(w.type,w.key,w.props,null,D.mode,V),Kr(A,w),A.return=D,A)}function O(D,A,w,V){return A===null||A.tag!==4||A.stateNode.containerInfo!==w.containerInfo||A.stateNode.implementation!==w.implementation?(A=Tc(w,D.mode,V),A.return=D,A):(A=s(A,w.children||[]),A.return=D,A)}function U(D,A,w,V,lt){return A===null||A.tag!==7?(A=si(w,D.mode,V,lt),A.return=D,A):(A=s(A,w),A.return=D,A)}function $(D,A,w){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Oc(""+A,D.mode,w),A.return=D,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case d:return w=qo(A.type,A.key,A.props,null,D.mode,w),Kr(w,A),w.return=D,w;case m:return A=Tc(A,D.mode,w),A.return=D,A;case B:var V=A._init;return A=V(A._payload),$(D,A,w)}if(dt(A)||it(A))return A=si(A,D.mode,w,null),A.return=D,A;if(typeof A.then=="function")return $(D,bo(A),w);if(A.$$typeof===k)return $(D,zo(D,A),w);vo(D,A)}return null}function R(D,A,w,V){var lt=A!==null?A.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return lt!==null?null:p(D,A,""+w,V);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case d:return w.key===lt?y(D,A,w,V):null;case m:return w.key===lt?O(D,A,w,V):null;case B:return lt=w._init,w=lt(w._payload),R(D,A,w,V)}if(dt(w)||it(w))return lt!==null?null:U(D,A,w,V,null);if(typeof w.then=="function")return R(D,A,bo(w),V);if(w.$$typeof===k)return R(D,A,zo(D,w),V);vo(D,w)}return null}function q(D,A,w,V,lt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return D=D.get(w)||null,p(A,D,""+V,lt);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case d:return D=D.get(V.key===null?w:V.key)||null,y(A,D,V,lt);case m:return D=D.get(V.key===null?w:V.key)||null,O(A,D,V,lt);case B:var Ct=V._init;return V=Ct(V._payload),q(D,A,w,V,lt)}if(dt(V)||it(V))return D=D.get(w)||null,U(A,D,V,lt,null);if(typeof V.then=="function")return q(D,A,w,bo(V),lt);if(V.$$typeof===k)return q(D,A,w,zo(A,V),lt);vo(A,V)}return null}function ht(D,A,w,V){for(var lt=null,Ct=null,pt=A,bt=A=0,me=null;pt!==null&&bt<w.length;bt++){pt.index>bt?(me=pt,pt=null):me=pt.sibling;var Ut=R(D,pt,w[bt],V);if(Ut===null){pt===null&&(pt=me);break}t&&pt&&Ut.alternate===null&&e(D,pt),A=u(Ut,A,bt),Ct===null?lt=Ut:Ct.sibling=Ut,Ct=Ut,pt=me}if(bt===w.length)return n(D,pt),qt&&Ja(D,bt),lt;if(pt===null){for(;bt<w.length;bt++)pt=$(D,w[bt],V),pt!==null&&(A=u(pt,A,bt),Ct===null?lt=pt:Ct.sibling=pt,Ct=pt);return qt&&Ja(D,bt),lt}for(pt=r(pt);bt<w.length;bt++)me=q(pt,D,bt,w[bt],V),me!==null&&(t&&me.alternate!==null&&pt.delete(me.key===null?bt:me.key),A=u(me,A,bt),Ct===null?lt=me:Ct.sibling=me,Ct=me);return t&&pt.forEach(function(Ma){return e(D,Ma)}),qt&&Ja(D,bt),lt}function Et(D,A,w,V){if(w==null)throw Error(o(151));for(var lt=null,Ct=null,pt=A,bt=A=0,me=null,Ut=w.next();pt!==null&&!Ut.done;bt++,Ut=w.next()){pt.index>bt?(me=pt,pt=null):me=pt.sibling;var Ma=R(D,pt,Ut.value,V);if(Ma===null){pt===null&&(pt=me);break}t&&pt&&Ma.alternate===null&&e(D,pt),A=u(Ma,A,bt),Ct===null?lt=Ma:Ct.sibling=Ma,Ct=Ma,pt=me}if(Ut.done)return n(D,pt),qt&&Ja(D,bt),lt;if(pt===null){for(;!Ut.done;bt++,Ut=w.next())Ut=$(D,Ut.value,V),Ut!==null&&(A=u(Ut,A,bt),Ct===null?lt=Ut:Ct.sibling=Ut,Ct=Ut);return qt&&Ja(D,bt),lt}for(pt=r(pt);!Ut.done;bt++,Ut=w.next())Ut=q(pt,D,bt,Ut.value,V),Ut!==null&&(t&&Ut.alternate!==null&&pt.delete(Ut.key===null?bt:Ut.key),A=u(Ut,A,bt),Ct===null?lt=Ut:Ct.sibling=Ut,Ct=Ut);return t&&pt.forEach(function(A1){return e(D,A1)}),qt&&Ja(D,bt),lt}function ee(D,A,w,V){if(typeof w=="object"&&w!==null&&w.type===v&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case d:t:{for(var lt=w.key;A!==null;){if(A.key===lt){if(lt=w.type,lt===v){if(A.tag===7){n(D,A.sibling),V=s(A,w.props.children),V.return=D,D=V;break t}}else if(A.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===B&&Ch(lt)===A.type){n(D,A.sibling),V=s(A,w.props),Kr(V,w),V.return=D,D=V;break t}n(D,A);break}else e(D,A);A=A.sibling}w.type===v?(V=si(w.props.children,D.mode,V,w.key),V.return=D,D=V):(V=qo(w.type,w.key,w.props,null,D.mode,V),Kr(V,w),V.return=D,D=V)}return h(D);case m:t:{for(lt=w.key;A!==null;){if(A.key===lt)if(A.tag===4&&A.stateNode.containerInfo===w.containerInfo&&A.stateNode.implementation===w.implementation){n(D,A.sibling),V=s(A,w.children||[]),V.return=D,D=V;break t}else{n(D,A);break}else e(D,A);A=A.sibling}V=Tc(w,D.mode,V),V.return=D,D=V}return h(D);case B:return lt=w._init,w=lt(w._payload),ee(D,A,w,V)}if(dt(w))return ht(D,A,w,V);if(it(w)){if(lt=it(w),typeof lt!="function")throw Error(o(150));return w=lt.call(w),Et(D,A,w,V)}if(typeof w.then=="function")return ee(D,A,bo(w),V);if(w.$$typeof===k)return ee(D,A,zo(D,w),V);vo(D,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,A!==null&&A.tag===6?(n(D,A.sibling),V=s(A,w),V.return=D,D=V):(n(D,A),V=Oc(w,D.mode,V),V.return=D,D=V),h(D)):n(D,A)}return function(D,A,w,V){try{Xr=0;var lt=ee(D,A,w,V);return Vi=null,lt}catch(pt){if(pt===Pr)throw pt;var Ct=ln(29,pt,null,D.mode);return Ct.lanes=V,Ct.return=D,Ct}finally{}}}var Ia=Rh(!0),Mh=Rh(!1),Yi=Ot(null),yo=Ot(0);function zh(t,e){t=Wn,Ht(yo,t),Ht(Yi,e),Wn=t|e.baseLanes}function Ru(){Ht(yo,Wn),Ht(Yi,Yi.current)}function Mu(){Wn=yo.current,Vt(Yi),Vt(yo)}var nn=Ot(null),Tn=null;function pa(t){var e=t.alternate;Ht(se,se.current&1),Ht(nn,t),Tn===null&&(e===null||Yi.current!==null||e.memoizedState!==null)&&(Tn=t)}function kh(t){if(t.tag===22){if(Ht(se,se.current),Ht(nn,t),Tn===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Tn=t)}}else ma()}function ma(){Ht(se,se.current),Ht(nn,nn.current)}function Yn(t){Vt(nn),Tn===t&&(Tn=null),Vt(se)}var se=Ot(0);function _o(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cy=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},fy=i.unstable_scheduleCallback,dy=i.unstable_NormalPriority,ue={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new cy,data:new Map,refCount:0}}function Qr(t){t.refCount--,t.refCount===0&&fy(dy,function(){t.controller.abort()})}var Zr=null,ku=0,$i=0,Pi=null;function hy(t,e){if(Zr===null){var n=Zr=[];ku=0,$i=Bc(),Pi={status:"pending",value:void 0,then:function(r){n.push(r)}}}return ku++,e.then(Lh,Lh),e}function Lh(){if(--ku===0&&Zr!==null){Pi!==null&&(Pi.status="fulfilled");var t=Zr;Zr=null,$i=0,Pi=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function py(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var s=0;s<n.length;s++)(0,n[s])(e)},function(s){for(r.status="rejected",r.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),r}var qh=K.S;K.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&hy(t,e),qh!==null&&qh(t,e)};var ti=Ot(null);function Lu(){var t=ti.current;return t!==null?t:Pt.pooledCache}function Eo(t,e){e===null?Ht(ti,ti.current):Ht(ti,e.pool)}function Uh(){var t=Lu();return t===null?null:{parent:ue._currentValue,pool:t}}var ga=0,Nt=null,jt=null,ie=null,So=!1,Gi=!1,ei=!1,Ao=0,Fr=0,Xi=null,my=0;function ne(){throw Error(o(321))}function qu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!je(t[n],e[n]))return!1;return!0}function Uu(t,e,n,r,s,u){return ga=u,Nt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,K.H=t===null||t.memoizedState===null?ni:ba,ei=!1,u=n(r,s),ei=!1,Gi&&(u=jh(e,n,r,s)),Hh(t),u}function Hh(t){K.H=xn;var e=jt!==null&&jt.next!==null;if(ga=0,ie=jt=Nt=null,So=!1,Fr=0,Xi=null,e)throw Error(o(300));t===null||he||(t=t.dependencies,t!==null&&Mo(t)&&(he=!0))}function jh(t,e,n,r){Nt=t;var s=0;do{if(Gi&&(Xi=null),Fr=0,Gi=!1,25<=s)throw Error(o(301));if(s+=1,ie=jt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}K.H=ai,u=e(n,r)}while(Gi);return u}function gy(){var t=K.H,e=t.useState()[0];return e=typeof e.then=="function"?Jr(e):e,t=t.useState()[0],(jt!==null?jt.memoizedState:null)!==t&&(Nt.flags|=1024),e}function Hu(){var t=Ao!==0;return Ao=0,t}function ju(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Bu(t){if(So){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}So=!1}ga=0,ie=jt=Nt=null,Gi=!1,Fr=Ao=0,Xi=null}function ke(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?Nt.memoizedState=ie=t:ie=ie.next=t,ie}function re(){if(jt===null){var t=Nt.alternate;t=t!==null?t.memoizedState:null}else t=jt.next;var e=ie===null?Nt.memoizedState:ie.next;if(e!==null)ie=e,jt=t;else{if(t===null)throw Nt.alternate===null?Error(o(467)):Error(o(310));jt=t,t={memoizedState:jt.memoizedState,baseState:jt.baseState,baseQueue:jt.baseQueue,queue:jt.queue,next:null},ie===null?Nt.memoizedState=ie=t:ie=ie.next=t}return ie}var Oo;Oo=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jr(t){var e=Fr;return Fr+=1,Xi===null&&(Xi=[]),t=wh(Xi,t,e),e=Nt,(ie===null?e.memoizedState:ie.next)===null&&(e=e.alternate,K.H=e===null||e.memoizedState===null?ni:ba),t}function To(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Jr(t);if(t.$$typeof===k)return Se(t)}throw Error(o(438,String(t)))}function Vu(t){var e=null,n=Nt.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=Nt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(s){return s.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Oo(),Nt.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=tt;return e.index++,n}function $n(t,e){return typeof e=="function"?e(t):e}function xo(t){var e=re();return Yu(e,jt,t)}function Yu(t,e,n){var r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var s=t.baseQueue,u=r.pending;if(u!==null){if(s!==null){var h=s.next;s.next=u.next,u.next=h}e.baseQueue=s=u,r.pending=null}if(u=t.baseState,s===null)t.memoizedState=u;else{e=s.next;var p=h=null,y=null,O=e,U=!1;do{var $=O.lane&-536870913;if($!==O.lane?(Lt&$)===$:(ga&$)===$){var R=O.revertLane;if(R===0)y!==null&&(y=y.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),$===$i&&(U=!0);else if((ga&R)===R){O=O.next,R===$i&&(U=!0);continue}else $={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},y===null?(p=y=$,h=u):y=y.next=$,Nt.lanes|=R,xa|=R;$=O.action,ei&&n(u,$),u=O.hasEagerState?O.eagerState:n(u,$)}else R={lane:$,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},y===null?(p=y=R,h=u):y=y.next=R,Nt.lanes|=$,xa|=$;O=O.next}while(O!==null&&O!==e);if(y===null?h=u:y.next=p,!je(u,t.memoizedState)&&(he=!0,U&&(n=Pi,n!==null)))throw n;t.memoizedState=u,t.baseState=h,t.baseQueue=y,r.lastRenderedState=u}return s===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function $u(t){var e=re(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,u=e.memoizedState;if(s!==null){n.pending=null;var h=s=s.next;do u=t(u,h.action),h=h.next;while(h!==s);je(u,e.memoizedState)||(he=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,r]}function Bh(t,e,n){var r=Nt,s=re(),u=qt;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=e();var h=!je((jt||s).memoizedState,n);if(h&&(s.memoizedState=n,he=!0),s=s.queue,Xu($h.bind(null,r,s,t),[t]),s.getSnapshot!==e||h||ie!==null&&ie.memoizedState.tag&1){if(r.flags|=2048,Ki(9,Yh.bind(null,r,s,n,e),{destroy:void 0},null),Pt===null)throw Error(o(349));u||ga&60||Vh(r,e,n)}return n}function Vh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Nt.updateQueue,e===null?(e=Oo(),Nt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yh(t,e,n,r){e.value=n,e.getSnapshot=r,Ph(e)&&Gh(t)}function $h(t,e,n){return n(function(){Ph(e)&&Gh(t)})}function Ph(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!je(t,n)}catch{return!0}}function Gh(t){var e=ha(t,2);e!==null&&De(e,t,2)}function Pu(t){var e=ke();if(typeof t=="function"){var n=t;if(t=n(),ei){ca(!0);try{n()}finally{ca(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:t},e}function Xh(t,e,n,r){return t.baseState=n,Yu(t,jt,typeof r=="function"?r:$n)}function by(t,e,n,r,s){if(No(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:s,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(h){u.listeners.push(h)}};K.T!==null?n(!0):u.isTransition=!1,r(u),n=e.pending,n===null?(u.next=e.pending=u,Kh(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Kh(t,e){var n=e.action,r=e.payload,s=t.state;if(e.isTransition){var u=K.T,h={};K.T=h;try{var p=n(s,r),y=K.S;y!==null&&y(h,p),Qh(t,e,p)}catch(O){Gu(t,e,O)}finally{K.T=u}}else try{u=n(s,r),Qh(t,e,u)}catch(O){Gu(t,e,O)}}function Qh(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Zh(t,e,r)},function(r){return Gu(t,e,r)}):Zh(t,e,n)}function Zh(t,e,n){e.status="fulfilled",e.value=n,Fh(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Kh(t,n)))}function Gu(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,Fh(e),e=e.next;while(e!==r)}t.action=null}function Fh(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Jh(t,e){return e}function Wh(t,e){if(qt){var n=Pt.formState;if(n!==null){t:{var r=Nt;if(qt){if(be){e:{for(var s=be,u=On;s.nodeType!==8;){if(!u){s=null;break e}if(s=bn(s.nextSibling),s===null){s=null;break e}}u=s.data,s=u==="F!"||u==="F"?s:null}if(s){be=bn(s.nextSibling),r=s.data==="F!";break t}}Wa(r)}r=!1}r&&(e=n[0])}}return n=ke(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:e},n.queue=r,n=gp.bind(null,Nt,r),r.dispatch=n,r=Pu(!1),u=Ju.bind(null,Nt,!1,r.queue),r=ke(),s={state:e,dispatch:null,action:t,pending:null},r.queue=s,n=by.bind(null,Nt,s,u,n),s.dispatch=n,r.memoizedState=t,[e,n,!1]}function Ih(t){var e=re();return tp(e,jt,t)}function tp(t,e,n){e=Yu(t,e,Jh)[0],t=xo($n)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Jr(e):e;var r=re(),s=r.queue,u=s.dispatch;return n!==r.memoizedState&&(Nt.flags|=2048,Ki(9,vy.bind(null,s,n),{destroy:void 0},null)),[e,u,t]}function vy(t,e){t.action=e}function ep(t){var e=re(),n=jt;if(n!==null)return tp(e,n,t);re(),e=e.memoizedState,n=re();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function Ki(t,e,n,r){return t={tag:t,create:e,inst:n,deps:r,next:null},e=Nt.updateQueue,e===null&&(e=Oo(),Nt.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function np(){return re().memoizedState}function Do(t,e,n,r){var s=ke();Nt.flags|=t,s.memoizedState=Ki(1|e,n,{destroy:void 0},r===void 0?null:r)}function wo(t,e,n,r){var s=re();r=r===void 0?null:r;var u=s.memoizedState.inst;jt!==null&&r!==null&&qu(r,jt.memoizedState.deps)?s.memoizedState=Ki(e,n,u,r):(Nt.flags|=t,s.memoizedState=Ki(1|e,n,u,r))}function ap(t,e){Do(8390656,8,t,e)}function Xu(t,e){wo(2048,8,t,e)}function ip(t,e){return wo(4,2,t,e)}function rp(t,e){return wo(4,4,t,e)}function lp(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function op(t,e,n){n=n!=null?n.concat([t]):null,wo(4,4,lp.bind(null,e,t),n)}function Ku(){}function sp(t,e){var n=re();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&qu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function up(t,e){var n=re();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&qu(e,r[1]))return r[0];if(r=t(),ei){ca(!0);try{t()}finally{ca(!1)}}return n.memoizedState=[r,e],r}function Qu(t,e,n){return n===void 0||ga&1073741824?t.memoizedState=e:(t.memoizedState=n,t=fm(),Nt.lanes|=t,xa|=t,n)}function cp(t,e,n,r){return je(n,e)?n:Yi.current!==null?(t=Qu(t,n,r),je(t,e)||(he=!0),t):ga&42?(t=fm(),Nt.lanes|=t,xa|=t,e):(he=!0,t.memoizedState=n)}function fp(t,e,n,r,s){var u=I.p;I.p=u!==0&&8>u?u:8;var h=K.T,p={};K.T=p,Ju(t,!1,e,n);try{var y=s(),O=K.S;if(O!==null&&O(p,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var U=py(y,r);Wr(t,e,U,$e(t))}else Wr(t,e,r,$e(t))}catch($){Wr(t,e,{then:function(){},status:"rejected",reason:$},$e())}finally{I.p=u,K.T=h}}function yy(){}function Zu(t,e,n,r){if(t.tag!==5)throw Error(o(476));var s=dp(t).queue;fp(t,s,e,_t,n===null?yy:function(){return hp(t),n(r)})}function dp(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:_t,baseState:_t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:_t},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function hp(t){var e=dp(t).next.queue;Wr(t,e,{},$e())}function Fu(){return Se(vl)}function pp(){return re().memoizedState}function mp(){return re().memoizedState}function _y(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=$e();t=_a(n);var r=Ea(e,t,n);r!==null&&(De(r,e,n),el(r,e,n)),e={cache:zu()},t.payload=e;return}e=e.return}}function Ey(t,e,n){var r=$e();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},No(t)?bp(e,n):(n=xu(t,e,n,r),n!==null&&(De(n,t,r),vp(n,e,r)))}function gp(t,e,n){var r=$e();Wr(t,e,n,r)}function Wr(t,e,n,r){var s={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(No(t))bp(e,s);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var h=e.lastRenderedState,p=u(h,n);if(s.hasEagerState=!0,s.eagerState=p,je(p,h))return fo(t,e,s,0),Pt===null&&co(),!1}catch{}finally{}if(n=xu(t,e,s,r),n!==null)return De(n,t,r),vp(n,e,r),!0}return!1}function Ju(t,e,n,r){if(r={lane:2,revertLane:Bc(),action:r,hasEagerState:!1,eagerState:null,next:null},No(t)){if(e)throw Error(o(479))}else e=xu(t,n,r,2),e!==null&&De(e,t,2)}function No(t){var e=t.alternate;return t===Nt||e!==null&&e===Nt}function bp(t,e){Gi=So=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vp(t,e,n){if(n&4194176){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var xn={readContext:Se,use:To,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useLayoutEffect:ne,useInsertionEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useSyncExternalStore:ne,useId:ne};xn.useCacheRefresh=ne,xn.useMemoCache=ne,xn.useHostTransitionStatus=ne,xn.useFormState=ne,xn.useActionState=ne,xn.useOptimistic=ne;var ni={readContext:Se,use:To,useCallback:function(t,e){return ke().memoizedState=[t,e===void 0?null:e],t},useContext:Se,useEffect:ap,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Do(4194308,4,lp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Do(4194308,4,t,e)},useInsertionEffect:function(t,e){Do(4,2,t,e)},useMemo:function(t,e){var n=ke();e=e===void 0?null:e;var r=t();if(ei){ca(!0);try{t()}finally{ca(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=ke();if(n!==void 0){var s=n(e);if(ei){ca(!0);try{n(e)}finally{ca(!1)}}}else s=e;return r.memoizedState=r.baseState=s,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:s},r.queue=t,t=t.dispatch=Ey.bind(null,Nt,t),[r.memoizedState,t]},useRef:function(t){var e=ke();return t={current:t},e.memoizedState=t},useState:function(t){t=Pu(t);var e=t.queue,n=gp.bind(null,Nt,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Ku,useDeferredValue:function(t,e){var n=ke();return Qu(n,t,e)},useTransition:function(){var t=Pu(!1);return t=fp.bind(null,Nt,t.queue,!0,!1),ke().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=Nt,s=ke();if(qt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),Pt===null)throw Error(o(349));Lt&60||Vh(r,e,n)}s.memoizedState=n;var u={value:n,getSnapshot:e};return s.queue=u,ap($h.bind(null,r,u,t),[t]),r.flags|=2048,Ki(9,Yh.bind(null,r,u,n,e),{destroy:void 0},null),n},useId:function(){var t=ke(),e=Pt.identifierPrefix;if(qt){var n=Vn,r=Bn;n=(r&~(1<<32-He(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=my++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return ke().memoizedState=_y.bind(null,Nt)}};ni.useMemoCache=Vu,ni.useHostTransitionStatus=Fu,ni.useFormState=Wh,ni.useActionState=Wh,ni.useOptimistic=function(t){var e=ke();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Ju.bind(null,Nt,!0,n),n.dispatch=e,[t,e]};var ba={readContext:Se,use:To,useCallback:sp,useContext:Se,useEffect:Xu,useImperativeHandle:op,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:up,useReducer:xo,useRef:np,useState:function(){return xo($n)},useDebugValue:Ku,useDeferredValue:function(t,e){var n=re();return cp(n,jt.memoizedState,t,e)},useTransition:function(){var t=xo($n)[0],e=re().memoizedState;return[typeof t=="boolean"?t:Jr(t),e]},useSyncExternalStore:Bh,useId:pp};ba.useCacheRefresh=mp,ba.useMemoCache=Vu,ba.useHostTransitionStatus=Fu,ba.useFormState=Ih,ba.useActionState=Ih,ba.useOptimistic=function(t,e){var n=re();return Xh(n,jt,t,e)};var ai={readContext:Se,use:To,useCallback:sp,useContext:Se,useEffect:Xu,useImperativeHandle:op,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:up,useReducer:$u,useRef:np,useState:function(){return $u($n)},useDebugValue:Ku,useDeferredValue:function(t,e){var n=re();return jt===null?Qu(n,t,e):cp(n,jt.memoizedState,t,e)},useTransition:function(){var t=$u($n)[0],e=re().memoizedState;return[typeof t=="boolean"?t:Jr(t),e]},useSyncExternalStore:Bh,useId:pp};ai.useCacheRefresh=mp,ai.useMemoCache=Vu,ai.useHostTransitionStatus=Fu,ai.useFormState=ep,ai.useActionState=ep,ai.useOptimistic=function(t,e){var n=re();return jt!==null?Xh(n,jt,t,e):(n.baseState=t,[t,n.queue.dispatch])};function Wu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Iu={isMounted:function(t){return(t=t._reactInternals)?st(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=$e(),s=_a(r);s.payload=e,n!=null&&(s.callback=n),e=Ea(t,s,r),e!==null&&(De(e,t,r),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=$e(),s=_a(r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ea(t,s,r),e!==null&&(De(e,t,r),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$e(),r=_a(n);r.tag=2,e!=null&&(r.callback=e),e=Ea(t,r,n),e!==null&&(De(e,t,n),el(e,t,n))}};function yp(t,e,n,r,s,u,h){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,h):e.prototype&&e.prototype.isPureReactComponent?!jr(n,r)||!jr(s,u):!0}function _p(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Iu.enqueueReplaceState(e,e.state,null)}function ii(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=et({},n));for(var s in t)n[s]===void 0&&(n[s]=t[s])}return n}var Co=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ep(t){Co(t)}function Sp(t){console.error(t)}function Ap(t){Co(t)}function Ro(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Op(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function tc(t,e,n){return n=_a(n),n.tag=3,n.payload={element:null},n.callback=function(){Ro(t,e)},n}function Tp(t){return t=_a(t),t.tag=3,t}function xp(t,e,n,r){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var u=r.value;t.payload=function(){return s(u)},t.callback=function(){Op(e,n,r)}}var h=n.stateNode;h!==null&&typeof h.componentDidCatch=="function"&&(t.callback=function(){Op(e,n,r),typeof s!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var p=r.stack;this.componentDidCatch(r.value,{componentStack:p!==null?p:""})})}function Sy(t,e,n,r,s){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&tl(e,n,s,!0),n=nn.current,n!==null){switch(n.tag){case 13:return Tn===null?Lc():n.alternate===null&&te===0&&(te=3),n.flags&=-257,n.flags|=65536,n.lanes=s,r===Cu?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),Uc(t,r,s)),!1;case 22:return n.flags|=65536,r===Cu?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),Uc(t,r,s)),!1}throw Error(o(435,n.tag))}return Uc(t,r,s),Lc(),!1}if(qt)return e=nn.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=s,r!==Nu&&(t=Error(o(422),{cause:r}),$r(Ie(t,n)))):(r!==Nu&&(e=Error(o(423),{cause:r}),$r(Ie(e,n))),t=t.current.alternate,t.flags|=65536,s&=-s,t.lanes|=s,r=Ie(r,n),s=tc(t.stateNode,r,s),mc(t,s),te!==4&&(te=2)),!1;var u=Error(o(520),{cause:r});if(u=Ie(u,n),ul===null?ul=[u]:ul.push(u),te!==4&&(te=2),e===null)return!0;r=Ie(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=s&-s,n.lanes|=t,t=tc(n.stateNode,r,t),mc(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Da===null||!Da.has(u))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Tp(s),xp(s,t,n,r),mc(n,s),!1}n=n.return}while(n!==null);return!1}var Dp=Error(o(461)),he=!1;function ve(t,e,n,r){e.child=t===null?Mh(e,null,n,r):Ia(e,t.child,n,r)}function wp(t,e,n,r,s){n=n.render;var u=e.ref;if("ref"in r){var h={};for(var p in r)p!=="ref"&&(h[p]=r[p])}else h=r;return li(e),r=Uu(t,e,n,h,u,s),p=Hu(),t!==null&&!he?(ju(t,e,s),Pn(t,e,s)):(qt&&p&&Du(e),e.flags|=1,ve(t,e,r,s),e.child)}function Np(t,e,n,r,s){if(t===null){var u=n.type;return typeof u=="function"&&!Ac(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Cp(t,e,u,r,s)):(t=qo(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!uc(t,s)){var h=u.memoizedProps;if(n=n.compare,n=n!==null?n:jr,n(h,r)&&t.ref===e.ref)return Pn(t,e,s)}return e.flags|=1,t=Ta(u,r),t.ref=e.ref,t.return=e,e.child=t}function Cp(t,e,n,r,s){if(t!==null){var u=t.memoizedProps;if(jr(u,r)&&t.ref===e.ref)if(he=!1,e.pendingProps=r=u,uc(t,s))t.flags&131072&&(he=!0);else return e.lanes=t.lanes,Pn(t,e,s)}return ec(t,e,n,r,s)}function Rp(t,e,n){var r=e.pendingProps,s=r.children,u=(e.stateNode._pendingVisibility&2)!==0,h=t!==null?t.memoizedState:null;if(Ir(t,e),r.mode==="hidden"||u){if(e.flags&128){if(r=h!==null?h.baseLanes|n:n,t!==null){for(s=e.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;e.childLanes=u&~r}else e.childLanes=0,e.child=null;return Mp(t,e,r,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Eo(e,h!==null?h.cachePool:null),h!==null?zh(e,h):Ru(),kh(e);else return e.lanes=e.childLanes=536870912,Mp(t,e,h!==null?h.baseLanes|n:n,n)}else h!==null?(Eo(e,h.cachePool),zh(e,h),ma(),e.memoizedState=null):(t!==null&&Eo(e,null),Ru(),ma());return ve(t,e,s,n),e.child}function Mp(t,e,n,r){var s=Lu();return s=s===null?null:{parent:ue._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&Eo(e,null),Ru(),kh(e),t!==null&&tl(t,e,r,!0),null}function Ir(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=2097664)}}function ec(t,e,n,r,s){return li(e),n=Uu(t,e,n,r,void 0,s),r=Hu(),t!==null&&!he?(ju(t,e,s),Pn(t,e,s)):(qt&&r&&Du(e),e.flags|=1,ve(t,e,n,s),e.child)}function zp(t,e,n,r,s,u){return li(e),e.updateQueue=null,n=jh(e,r,n,s),Hh(t),r=Hu(),t!==null&&!he?(ju(t,e,u),Pn(t,e,u)):(qt&&r&&Du(e),e.flags|=1,ve(t,e,n,u),e.child)}function kp(t,e,n,r,s){if(li(e),e.stateNode===null){var u=Hi,h=n.contextType;typeof h=="object"&&h!==null&&(u=Se(h)),u=new n(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Iu,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},hc(e),h=n.contextType,u.context=typeof h=="object"&&h!==null?Se(h):Hi,u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Wu(e,n,h,r),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(h=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),h!==u.state&&Iu.enqueueReplaceState(u,u.state,null),al(e,r,u,s),nl(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var p=e.memoizedProps,y=ii(n,p);u.props=y;var O=u.context,U=n.contextType;h=Hi,typeof U=="object"&&U!==null&&(h=Se(U));var $=n.getDerivedStateFromProps;U=typeof $=="function"||typeof u.getSnapshotBeforeUpdate=="function",p=e.pendingProps!==p,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(p||O!==h)&&_p(e,u,r,h),ya=!1;var R=e.memoizedState;u.state=R,al(e,r,u,s),nl(),O=e.memoizedState,p||R!==O||ya?(typeof $=="function"&&(Wu(e,n,$,r),O=e.memoizedState),(y=ya||yp(e,n,y,r,R,O,h))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=O),u.props=r,u.state=O,u.context=h,r=y):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,pc(t,e),h=e.memoizedProps,U=ii(n,h),u.props=U,$=e.pendingProps,R=u.context,O=n.contextType,y=Hi,typeof O=="object"&&O!==null&&(y=Se(O)),p=n.getDerivedStateFromProps,(O=typeof p=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==$||R!==y)&&_p(e,u,r,y),ya=!1,R=e.memoizedState,u.state=R,al(e,r,u,s),nl();var q=e.memoizedState;h!==$||R!==q||ya||t!==null&&t.dependencies!==null&&Mo(t.dependencies)?(typeof p=="function"&&(Wu(e,n,p,r),q=e.memoizedState),(U=ya||yp(e,n,U,r,R,q,y)||t!==null&&t.dependencies!==null&&Mo(t.dependencies))?(O||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,q,y),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,q,y)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=q),u.props=r,u.state=q,u.context=y,r=U):(typeof u.componentDidUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===t.memoizedProps&&R===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,Ir(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=Ia(e,t.child,null,s),e.child=Ia(e,null,n,s)):ve(t,e,n,s),e.memoizedState=u.state,t=e.child):t=Pn(t,e,s),t}function Lp(t,e,n,r){return Yr(),e.flags|=256,ve(t,e,n,r),e.child}var nc={dehydrated:null,treeContext:null,retryLane:0};function ac(t){return{baseLanes:t,cachePool:Uh()}}function ic(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=on),t}function qp(t,e,n){var r=e.pendingProps,s=!1,u=(e.flags&128)!==0,h;if((h=u)||(h=t!==null&&t.memoizedState===null?!1:(se.current&2)!==0),h&&(s=!0,e.flags&=-129),h=(e.flags&32)!==0,e.flags&=-33,t===null){if(qt){if(s?pa(e):ma(),qt){var p=be,y;if(y=p){t:{for(y=p,p=On;y.nodeType!==8;){if(!p){p=null;break t}if(y=bn(y.nextSibling),y===null){p=null;break t}}p=y}p!==null?(e.memoizedState={dehydrated:p,treeContext:Fa!==null?{id:Bn,overflow:Vn}:null,retryLane:536870912},y=ln(18,null,null,0),y.stateNode=p,y.return=e,e.child=y,xe=e,be=null,y=!0):y=!1}y||Wa(e)}if(p=e.memoizedState,p!==null&&(p=p.dehydrated,p!==null))return p.data==="$!"?e.lanes=16:e.lanes=536870912,null;Yn(e)}return p=r.children,r=r.fallback,s?(ma(),s=e.mode,p=lc({mode:"hidden",children:p},s),r=si(r,s,n,null),p.return=e,r.return=e,p.sibling=r,e.child=p,s=e.child,s.memoizedState=ac(n),s.childLanes=ic(t,h,n),e.memoizedState=nc,r):(pa(e),rc(e,p))}if(y=t.memoizedState,y!==null&&(p=y.dehydrated,p!==null)){if(u)e.flags&256?(pa(e),e.flags&=-257,e=oc(t,e,n)):e.memoizedState!==null?(ma(),e.child=t.child,e.flags|=128,e=null):(ma(),s=r.fallback,p=e.mode,r=lc({mode:"visible",children:r.children},p),s=si(s,p,n,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,Ia(e,t.child,null,n),r=e.child,r.memoizedState=ac(n),r.childLanes=ic(t,h,n),e.memoizedState=nc,e=s);else if(pa(e),p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var O=h.dgst;h=O,r=Error(o(419)),r.stack="",r.digest=h,$r({value:r,source:null,stack:null}),e=oc(t,e,n)}else if(he||tl(t,e,n,!1),h=(n&t.childLanes)!==0,he||h){if(h=Pt,h!==null){if(r=n&-n,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=r&(h.suspendedLanes|n)?0:r,r!==0&&r!==y.retryLane)throw y.retryLane=r,ha(t,r),De(h,t,r),Dp}p.data==="$?"||Lc(),e=oc(t,e,n)}else p.data==="$?"?(e.flags|=128,e.child=t.child,e=Uy.bind(null,t),p._reactRetry=e,e=null):(t=y.treeContext,be=bn(p.nextSibling),xe=e,qt=!0,mn=null,On=!1,t!==null&&(tn[en++]=Bn,tn[en++]=Vn,tn[en++]=Fa,Bn=t.id,Vn=t.overflow,Fa=e),e=rc(e,r.children),e.flags|=4096);return e}return s?(ma(),s=r.fallback,p=e.mode,y=t.child,O=y.sibling,r=Ta(y,{mode:"hidden",children:r.children}),r.subtreeFlags=y.subtreeFlags&31457280,O!==null?s=Ta(O,s):(s=si(s,p,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,p=t.child.memoizedState,p===null?p=ac(n):(y=p.cachePool,y!==null?(O=ue._currentValue,y=y.parent!==O?{parent:O,pool:O}:y):y=Uh(),p={baseLanes:p.baseLanes|n,cachePool:y}),s.memoizedState=p,s.childLanes=ic(t,h,n),e.memoizedState=nc,r):(pa(e),n=t.child,t=n.sibling,n=Ta(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(h=e.deletions,h===null?(e.deletions=[t],e.flags|=16):h.push(t)),e.child=n,e.memoizedState=null,n)}function rc(t,e){return e=lc({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function lc(t,e){return sm(t,e,0,null)}function oc(t,e,n){return Ia(e,t.child,null,n),t=rc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Up(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fc(t.return,e,n)}function sc(t,e,n,r,s){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=s)}function Hp(t,e,n){var r=e.pendingProps,s=r.revealOrder,u=r.tail;if(ve(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,n,e);else if(t.tag===19)Up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}switch(Ht(se,r),s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&_o(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),sc(e,!1,s,n,u);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&_o(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}sc(e,!0,n,null,u);break;case"together":sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),xa|=e.lanes,!(n&e.childLanes))if(t!==null){if(tl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=Ta(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ta(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uc(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Mo(t)))}function Ay(t,e,n){switch(e.tag){case 3:Ya(e,e.stateNode.containerInfo),va(e,ue,t.memoizedState.cache),Yr();break;case 27:case 5:$a(e);break;case 4:Ya(e,e.stateNode.containerInfo);break;case 10:va(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(pa(e),e.flags|=128,null):n&e.child.childLanes?qp(t,e,n):(pa(e),t=Pn(t,e,n),t!==null?t.sibling:null);pa(e);break;case 19:var s=(t.flags&128)!==0;if(r=(n&e.childLanes)!==0,r||(tl(t,e,n,!1),r=(n&e.childLanes)!==0),s){if(r)return Hp(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ht(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Rp(t,e,n);case 24:va(e,ue,t.memoizedState.cache)}return Pn(t,e,n)}function jp(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)he=!0;else{if(!uc(t,n)&&!(e.flags&128))return he=!1,Ay(t,e,n);he=!!(t.flags&131072)}else he=!1,qt&&e.flags&1048576&&Ah(e,mo,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var r=e.elementType,s=r._init;if(r=s(r._payload),e.type=r,typeof r=="function")Ac(r)?(t=ii(r,t),e.tag=1,e=kp(null,e,r,t,n)):(e.tag=0,e=ec(null,e,r,t,n));else{if(r!=null){if(s=r.$$typeof,s===x){e.tag=11,e=wp(null,e,r,t,n);break t}else if(s===Q){e.tag=14,e=Np(null,e,r,t,n);break t}}throw e=yt(r)||r,Error(o(306,e,""))}}return e;case 0:return ec(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,s=ii(r,e.pendingProps),kp(t,e,r,s,n);case 3:t:{if(Ya(e,e.stateNode.containerInfo),t===null)throw Error(o(387));var u=e.pendingProps;s=e.memoizedState,r=s.element,pc(t,e),al(e,u,null,n);var h=e.memoizedState;if(u=h.cache,va(e,ue,u),u!==s.cache&&dc(e,[ue],n,!0),nl(),u=h.element,s.isDehydrated)if(s={element:u,isDehydrated:!1,cache:h.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=Lp(t,e,u,n);break t}else if(u!==r){r=Ie(Error(o(424)),e),$r(r),e=Lp(t,e,u,n);break t}else for(be=bn(e.stateNode.containerInfo.firstChild),xe=e,qt=!0,mn=null,On=!0,n=Mh(e,null,u,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),u===r){e=Pn(t,e,n);break t}ve(t,e,u,n)}e=e.child}return e;case 26:return Ir(t,e),t===null?(n=Ym(e.type,null,e.pendingProps,null))?e.memoizedState=n:qt||(n=e.type,t=e.pendingProps,r=Qo(Re.current).createElement(n),r[Ee]=e,r[Me]=t,ye(r,n,t),de(r),e.stateNode=r):e.memoizedState=Ym(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return $a(e),t===null&&qt&&(r=e.stateNode=jm(e.type,e.pendingProps,Re.current),xe=e,On=!0,be=bn(r.firstChild)),r=e.pendingProps.children,t!==null||qt?ve(t,e,r,n):e.child=Ia(e,null,r,n),Ir(t,e),e.child;case 5:return t===null&&qt&&((s=r=be)&&(r=Iy(r,e.type,e.pendingProps,On),r!==null?(e.stateNode=r,xe=e,be=bn(r.firstChild),On=!1,s=!0):s=!1),s||Wa(e)),$a(e),s=e.type,u=e.pendingProps,h=t!==null?t.memoizedProps:null,r=u.children,Zc(s,u)?r=null:h!==null&&Zc(s,h)&&(e.flags|=32),e.memoizedState!==null&&(s=Uu(t,e,gy,null,null,n),vl._currentValue=s),Ir(t,e),ve(t,e,r,n),e.child;case 6:return t===null&&qt&&((t=n=be)&&(n=t1(n,e.pendingProps,On),n!==null?(e.stateNode=n,xe=e,be=null,t=!0):t=!1),t||Wa(e)),null;case 13:return qp(t,e,n);case 4:return Ya(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ia(e,null,r,n):ve(t,e,r,n),e.child;case 11:return wp(t,e,e.type,e.pendingProps,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:return r=e.pendingProps,va(e,e.type,r.value),ve(t,e,r.children,n),e.child;case 9:return s=e.type._context,r=e.pendingProps.children,li(e),s=Se(s),r=r(s),e.flags|=1,ve(t,e,r,n),e.child;case 14:return Np(t,e,e.type,e.pendingProps,n);case 15:return Cp(t,e,e.type,e.pendingProps,n);case 19:return Hp(t,e,n);case 22:return Rp(t,e,n);case 24:return li(e),r=Se(ue),t===null?(s=Lu(),s===null&&(s=Pt,u=zu(),s.pooledCache=u,u.refCount++,u!==null&&(s.pooledCacheLanes|=n),s=u),e.memoizedState={parent:r,cache:s},hc(e),va(e,ue,s)):(t.lanes&n&&(pc(t,e),al(e,null,null,n),nl()),s=t.memoizedState,u=e.memoizedState,s.parent!==r?(s={parent:r,cache:r},e.memoizedState=s,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=s),va(e,ue,r)):(r=u.cache,va(e,ue,r),r!==s.cache&&dc(e,[ue],n,!0))),ve(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}var cc=Ot(null),ri=null,Gn=null;function va(t,e,n){Ht(cc,e._currentValue),e._currentValue=n}function Xn(t){t._currentValue=cc.current,Vt(cc)}function fc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function dc(t,e,n,r){var s=t.child;for(s!==null&&(s.return=t);s!==null;){var u=s.dependencies;if(u!==null){var h=s.child;u=u.firstContext;t:for(;u!==null;){var p=u;u=s;for(var y=0;y<e.length;y++)if(p.context===e[y]){u.lanes|=n,p=u.alternate,p!==null&&(p.lanes|=n),fc(u.return,n,t),r||(h=null);break t}u=p.next}}else if(s.tag===18){if(h=s.return,h===null)throw Error(o(341));h.lanes|=n,u=h.alternate,u!==null&&(u.lanes|=n),fc(h,n,t),h=null}else h=s.child;if(h!==null)h.return=s;else for(h=s;h!==null;){if(h===t){h=null;break}if(s=h.sibling,s!==null){s.return=h.return,h=s;break}h=h.return}s=h}}function tl(t,e,n,r){t=null;for(var s=e,u=!1;s!==null;){if(!u){if(s.flags&524288)u=!0;else if(s.flags&262144)break}if(s.tag===10){var h=s.alternate;if(h===null)throw Error(o(387));if(h=h.memoizedProps,h!==null){var p=s.type;je(s.pendingProps.value,h.value)||(t!==null?t.push(p):t=[p])}}else if(s===Un.current){if(h=s.alternate,h===null)throw Error(o(387));h.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(t!==null?t.push(vl):t=[vl])}s=s.return}t!==null&&dc(e,t,n,r),e.flags|=262144}function Mo(t){for(t=t.firstContext;t!==null;){if(!je(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function li(t){ri=t,Gn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Se(t){return Bp(ri,t)}function zo(t,e){return ri===null&&li(t),Bp(t,e)}function Bp(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Gn===null){if(t===null)throw Error(o(308));Gn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Gn=Gn.next=e;return n}var ya=!1;function hc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ea(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Wt&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,e=ho(t),Eh(t,null,n),e}return fo(t,r,e,n),ho(t)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194176)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function mc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var h={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?s=u=h:u=u.next=h,n=n.next}while(n!==null);u===null?s=u=e:u=u.next=e}else s=u=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var gc=!1;function nl(){if(gc){var t=Pi;if(t!==null)throw t}}function al(t,e,n,r){gc=!1;var s=t.updateQueue;ya=!1;var u=s.firstBaseUpdate,h=s.lastBaseUpdate,p=s.shared.pending;if(p!==null){s.shared.pending=null;var y=p,O=y.next;y.next=null,h===null?u=O:h.next=O,h=y;var U=t.alternate;U!==null&&(U=U.updateQueue,p=U.lastBaseUpdate,p!==h&&(p===null?U.firstBaseUpdate=O:p.next=O,U.lastBaseUpdate=y))}if(u!==null){var $=s.baseState;h=0,U=O=y=null,p=u;do{var R=p.lane&-536870913,q=R!==p.lane;if(q?(Lt&R)===R:(r&R)===R){R!==0&&R===$i&&(gc=!0),U!==null&&(U=U.next={lane:0,tag:p.tag,payload:p.payload,callback:null,next:null});t:{var ht=t,Et=p;R=e;var ee=n;switch(Et.tag){case 1:if(ht=Et.payload,typeof ht=="function"){$=ht.call(ee,$,R);break t}$=ht;break t;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=Et.payload,R=typeof ht=="function"?ht.call(ee,$,R):ht,R==null)break t;$=et({},$,R);break t;case 2:ya=!0}}R=p.callback,R!==null&&(t.flags|=64,q&&(t.flags|=8192),q=s.callbacks,q===null?s.callbacks=[R]:q.push(R))}else q={lane:R,tag:p.tag,payload:p.payload,callback:p.callback,next:null},U===null?(O=U=q,y=$):U=U.next=q,h|=R;if(p=p.next,p===null){if(p=s.shared.pending,p===null)break;q=p,p=q.next,q.next=null,s.lastBaseUpdate=q,s.shared.pending=null}}while(!0);U===null&&(y=$),s.baseState=y,s.firstBaseUpdate=O,s.lastBaseUpdate=U,u===null&&(s.shared.lanes=0),xa|=h,t.lanes=h,t.memoizedState=$}}function Vp(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Yp(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Vp(n[t],e)}function il(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var s=r.next;n=s;do{if((n.tag&t)===t){r=void 0;var u=n.create,h=n.inst;r=u(),h.destroy=r}n=n.next}while(n!==s)}}catch(p){Yt(e,e.return,p)}}function Sa(t,e,n){try{var r=e.updateQueue,s=r!==null?r.lastEffect:null;if(s!==null){var u=s.next;r=u;do{if((r.tag&t)===t){var h=r.inst,p=h.destroy;if(p!==void 0){h.destroy=void 0,s=e;var y=n;try{p()}catch(O){Yt(s,y,O)}}}r=r.next}while(r!==u)}}catch(O){Yt(e,e.return,O)}}function $p(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Yp(e,n)}catch(r){Yt(t,t.return,r)}}}function Pp(t,e,n){n.props=ii(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){Yt(t,e,r)}}function oi(t,e){try{var n=t.ref;if(n!==null){var r=t.stateNode;switch(t.tag){case 26:case 27:case 5:var s=r;break;default:s=r}typeof n=="function"?t.refCleanup=n(s):n.current=s}}catch(u){Yt(t,e,u)}}function Be(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(s){Yt(t,e,s)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){Yt(t,e,s)}else n.current=null}function Gp(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break t;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(s){Yt(t,t.return,s)}}function Xp(t,e,n){try{var r=t.stateNode;Qy(r,t.type,n,e),r[Me]=e}catch(s){Yt(t,t.return,s)}}function Kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function bc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ko));else if(r!==4&&r!==27&&(t=t.child,t!==null))for(vc(t,e,n),t=t.sibling;t!==null;)vc(t,e,n),t=t.sibling}function ko(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&r!==27&&(t=t.child,t!==null))for(ko(t,e,n),t=t.sibling;t!==null;)ko(t,e,n),t=t.sibling}var Kn=!1,It=!1,yc=!1,Qp=typeof WeakSet=="function"?WeakSet:Set,pe=null,Zp=!1;function Oy(t,e){if(t=t.containerInfo,Kc=ts,t=dh(t),Eu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var h=0,p=-1,y=-1,O=0,U=0,$=t,R=null;e:for(;;){for(var q;$!==n||s!==0&&$.nodeType!==3||(p=h+s),$!==u||r!==0&&$.nodeType!==3||(y=h+r),$.nodeType===3&&(h+=$.nodeValue.length),(q=$.firstChild)!==null;)R=$,$=q;for(;;){if($===t)break e;if(R===n&&++O===s&&(p=h),R===u&&++U===r&&(y=h),(q=$.nextSibling)!==null)break;$=R,R=$.parentNode}$=q}n=p===-1||y===-1?null:{start:p,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qc={focusedElem:t,selectionRange:n},ts=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){switch(e=pe,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&u!==null){t=void 0,n=e,s=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var ht=ii(n.type,s,n.elementType===n.type);t=r.getSnapshotBeforeUpdate(ht,u),r.__reactInternalSnapshotBeforeUpdate=t}catch(Et){Yt(n,n.return,Et)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Wc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Wc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return ht=Zp,Zp=!1,ht}function Fp(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Zn(t,n),r&4&&il(5,n);break;case 1:if(Zn(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(p){Yt(n,n.return,p)}else{var s=ii(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(s,e,t.__reactInternalSnapshotBeforeUpdate)}catch(p){Yt(n,n.return,p)}}r&64&&$p(n),r&512&&oi(n,n.return);break;case 3:if(Zn(t,n),r&64&&(r=n.updateQueue,r!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Yp(r,t)}catch(p){Yt(n,n.return,p)}}break;case 26:Zn(t,n),r&512&&oi(n,n.return);break;case 27:case 5:Zn(t,n),e===null&&r&4&&Gp(n),r&512&&oi(n,n.return);break;case 12:Zn(t,n);break;case 13:Zn(t,n),r&4&&Ip(t,n);break;case 22:if(s=n.memoizedState!==null||Kn,!s){e=e!==null&&e.memoizedState!==null||It;var u=Kn,h=It;Kn=s,(It=e)&&!h?Aa(t,n,(n.subtreeFlags&8772)!==0):Zn(t,n),Kn=u,It=h}r&512&&(n.memoizedProps.mode==="manual"?oi(n,n.return):Be(n,n.return));break;default:Zn(t,n)}}function Jp(t){var e=t.alternate;e!==null&&(t.alternate=null,Jp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&ru(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var le=null,Ve=!1;function Qn(t,e,n){for(n=n.child;n!==null;)Wp(t,e,n),n=n.sibling}function Wp(t,e,n){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(ua,n)}catch{}switch(n.tag){case 26:It||Be(n,e),Qn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:It||Be(n,e);var r=le,s=Ve;for(le=n.stateNode,Qn(t,e,n),n=n.stateNode,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);ru(n),le=r,Ve=s;break;case 5:It||Be(n,e);case 6:s=le;var u=Ve;if(le=null,Qn(t,e,n),le=s,Ve=u,le!==null)if(Ve)try{t=le,r=n.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)}catch(h){Yt(n,e,h)}else try{le.removeChild(n.stateNode)}catch(h){Yt(n,e,h)}break;case 18:le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?Jc(e.parentNode,n):e.nodeType===1&&Jc(e,n),Sl(e)):Jc(le,n.stateNode));break;case 4:r=le,s=Ve,le=n.stateNode.containerInfo,Ve=!0,Qn(t,e,n),le=r,Ve=s;break;case 0:case 11:case 14:case 15:It||Sa(2,n,e),It||Sa(4,n,e),Qn(t,e,n);break;case 1:It||(Be(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Pp(n,e,r)),Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:It||Be(n,e),It=(r=It)||n.memoizedState!==null,Qn(t,e,n),It=r;break;default:Qn(t,e,n)}}function Ip(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Sl(t)}catch(n){Yt(e,e.return,n)}}function Ty(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Qp),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Qp),e;default:throw Error(o(435,t.tag))}}function _c(t,e){var n=Ty(t);e.forEach(function(r){var s=Hy.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r],u=t,h=e,p=h;t:for(;p!==null;){switch(p.tag){case 27:case 5:le=p.stateNode,Ve=!1;break t;case 3:le=p.stateNode.containerInfo,Ve=!0;break t;case 4:le=p.stateNode.containerInfo,Ve=!0;break t}p=p.return}if(le===null)throw Error(o(160));Wp(u,h,s),le=null,Ve=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)tm(e,t),e=e.sibling}var gn=null;function tm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:an(e,t),rn(t),r&4&&(Sa(3,t,t.return),il(3,t),Sa(5,t,t.return));break;case 1:an(e,t),rn(t),r&512&&(It||n===null||Be(n,n.return)),r&64&&Kn&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var s=gn;if(an(e,t),rn(t),r&512&&(It||n===null||Be(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=t.memoizedState,n===null)if(r===null)if(t.stateNode===null){t:{r=t.type,n=t.memoizedProps,s=s.ownerDocument||s;e:switch(r){case"title":u=s.getElementsByTagName("title")[0],(!u||u[Cr]||u[Ee]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=s.createElement(r),s.head.insertBefore(u,s.querySelector("head > title"))),ye(u,r,n),u[Ee]=t,de(u),r=u;break t;case"link":var h=Gm("link","href",s).get(r+(n.href||""));if(h){for(var p=0;p<h.length;p++)if(u=h[p],u.getAttribute("href")===(n.href==null?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){h.splice(p,1);break e}}u=s.createElement(r),ye(u,r,n),s.head.appendChild(u);break;case"meta":if(h=Gm("meta","content",s).get(r+(n.content||""))){for(p=0;p<h.length;p++)if(u=h[p],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){h.splice(p,1);break e}}u=s.createElement(r),ye(u,r,n),s.head.appendChild(u);break;default:throw Error(o(468,r))}u[Ee]=t,de(u),r=u}t.stateNode=r}else Xm(s,t.type,t.stateNode);else t.stateNode=Pm(s,r,t.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?Xm(s,t.type,t.stateNode):Pm(s,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Xp(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(r&4&&t.alternate===null){s=t.stateNode,u=t.memoizedProps;try{for(var y=s.firstChild;y;){var O=y.nextSibling,U=y.nodeName;y[Cr]||U==="HEAD"||U==="BODY"||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&y.rel.toLowerCase()==="stylesheet"||s.removeChild(y),y=O}for(var $=t.type,R=s.attributes;R.length;)s.removeAttributeNode(R[0]);ye(s,$,u),s[Ee]=t,s[Me]=u}catch(ht){Yt(t,t.return,ht)}}case 5:if(an(e,t),rn(t),r&512&&(It||n===null||Be(n,n.return)),t.flags&32){s=t.stateNode;try{Ri(s,"")}catch(ht){Yt(t,t.return,ht)}}r&4&&t.stateNode!=null&&(s=t.memoizedProps,Xp(t,s,n!==null?n.memoizedProps:s)),r&1024&&(yc=!0);break;case 6:if(an(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(o(162));r=t.memoizedProps,n=t.stateNode;try{n.nodeValue=r}catch(ht){Yt(t,t.return,ht)}}break;case 3:if(Jo=null,s=gn,gn=Zo(e.containerInfo),an(e,t),gn=s,rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Sl(e.containerInfo)}catch(ht){Yt(t,t.return,ht)}yc&&(yc=!1,em(t));break;case 4:r=gn,gn=Zo(t.stateNode.containerInfo),an(e,t),rn(t),gn=r;break;case 12:an(e,t),rn(t);break;case 13:an(e,t),rn(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Nc=rt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,_c(t,r)));break;case 22:if(r&512&&(It||n===null||Be(n,n.return)),y=t.memoizedState!==null,O=n!==null&&n.memoizedState!==null,U=Kn,$=It,Kn=U||y,It=$||O,an(e,t),It=$,Kn=U,rn(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,r&8192&&(e._visibility=y?e._visibility&-2:e._visibility|1,y&&(e=Kn||It,n===null||O||e||Qi(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(n=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(n===null){O=n=e;try{if(s=O.stateNode,y)u=s.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{h=O.stateNode,p=O.memoizedProps.style;var q=p!=null&&p.hasOwnProperty("display")?p.display:null;h.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(ht){Yt(O,O.return,ht)}}}else if(e.tag===6){if(n===null){O=e;try{O.stateNode.nodeValue=y?"":O.memoizedProps}catch(ht){Yt(O,O.return,ht)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=t.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,_c(t,n))));break;case 19:an(e,t),rn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,_c(t,r)));break;case 21:break;default:an(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var n=t.return;n!==null;){if(Kp(n)){var r=n;break t}n=n.return}throw Error(o(160))}switch(r.tag){case 27:var s=r.stateNode,u=bc(t);ko(t,u,s);break;case 5:var h=r.stateNode;r.flags&32&&(Ri(h,""),r.flags&=-33);var p=bc(t);ko(t,p,h);break;case 3:case 4:var y=r.stateNode.containerInfo,O=bc(t);vc(t,O,y);break;default:throw Error(o(161))}}}catch(U){Yt(t,t.return,U)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function em(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;em(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function Zn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Fp(t,e.alternate,e),e=e.sibling}function Qi(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Sa(4,e,e.return),Qi(e);break;case 1:Be(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Pp(e,e.return,n),Qi(e);break;case 26:case 27:case 5:Be(e,e.return),Qi(e);break;case 22:Be(e,e.return),e.memoizedState===null&&Qi(e);break;default:Qi(e)}t=t.sibling}}function Aa(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,s=t,u=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:Aa(s,u,n),il(4,u);break;case 1:if(Aa(s,u,n),r=u,s=r.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(O){Yt(r,r.return,O)}if(r=u,s=r.updateQueue,s!==null){var p=r.stateNode;try{var y=s.shared.hiddenCallbacks;if(y!==null)for(s.shared.hiddenCallbacks=null,s=0;s<y.length;s++)Vp(y[s],p)}catch(O){Yt(r,r.return,O)}}n&&h&64&&$p(u),oi(u,u.return);break;case 26:case 27:case 5:Aa(s,u,n),n&&r===null&&h&4&&Gp(u),oi(u,u.return);break;case 12:Aa(s,u,n);break;case 13:Aa(s,u,n),n&&h&4&&Ip(s,u);break;case 22:u.memoizedState===null&&Aa(s,u,n),oi(u,u.return);break;default:Aa(s,u,n)}e=e.sibling}}function Ec(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Qr(n))}function Sc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qr(t))}function Oa(t,e,n,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(t,e,n,r),e=e.sibling}function nm(t,e,n,r){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Oa(t,e,n,r),s&2048&&il(9,e);break;case 3:Oa(t,e,n,r),s&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qr(t)));break;case 12:if(s&2048){Oa(t,e,n,r),t=e.stateNode;try{var u=e.memoizedProps,h=u.id,p=u.onPostCommit;typeof p=="function"&&p(h,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(y){Yt(e,e.return,y)}}else Oa(t,e,n,r);break;case 23:break;case 22:u=e.stateNode,e.memoizedState!==null?u._visibility&4?Oa(t,e,n,r):rl(t,e):u._visibility&4?Oa(t,e,n,r):(u._visibility|=4,Zi(t,e,n,r,(e.subtreeFlags&10256)!==0)),s&2048&&Ec(e.alternate,e);break;case 24:Oa(t,e,n,r),s&2048&&Sc(e.alternate,e);break;default:Oa(t,e,n,r)}}function Zi(t,e,n,r,s){for(s=s&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,h=e,p=n,y=r,O=h.flags;switch(h.tag){case 0:case 11:case 15:Zi(u,h,p,y,s),il(8,h);break;case 23:break;case 22:var U=h.stateNode;h.memoizedState!==null?U._visibility&4?Zi(u,h,p,y,s):rl(u,h):(U._visibility|=4,Zi(u,h,p,y,s)),s&&O&2048&&Ec(h.alternate,h);break;case 24:Zi(u,h,p,y,s),s&&O&2048&&Sc(h.alternate,h);break;default:Zi(u,h,p,y,s)}e=e.sibling}}function rl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,s=r.flags;switch(r.tag){case 22:rl(n,r),s&2048&&Ec(r.alternate,r);break;case 24:rl(n,r),s&2048&&Sc(r.alternate,r);break;default:rl(n,r)}e=e.sibling}}var ll=8192;function Fi(t){if(t.subtreeFlags&ll)for(t=t.child;t!==null;)am(t),t=t.sibling}function am(t){switch(t.tag){case 26:Fi(t),t.flags&ll&&t.memoizedState!==null&&h1(gn,t.memoizedState,t.memoizedProps);break;case 5:Fi(t);break;case 3:case 4:var e=gn;gn=Zo(t.stateNode.containerInfo),Fi(t),gn=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=ll,ll=16777216,Fi(t),ll=e):Fi(t));break;default:Fi(t)}}function im(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ol(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];pe=r,lm(r,t)}im(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)rm(t),t=t.sibling}function rm(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&Sa(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,Lo(t)):ol(t);break;default:ol(t)}}function Lo(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];pe=r,lm(r,t)}im(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Sa(8,e,e.return),Lo(e);break;case 22:n=e.stateNode,n._visibility&4&&(n._visibility&=-5,Lo(e));break;default:Lo(e)}t=t.sibling}}function lm(t,e){for(;pe!==null;){var n=pe;switch(n.tag){case 0:case 11:case 15:Sa(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Qr(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,pe=r;else t:for(n=t;pe!==null;){r=pe;var s=r.sibling,u=r.return;if(Jp(r),r===n){pe=null;break t}if(s!==null){s.return=u,pe=s;break t}pe=u}}}function xy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(t,e,n,r){return new xy(t,e,n,r)}function Ac(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ta(t,e){var n=t.alternate;return n===null?(n=ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function om(t,e){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function qo(t,e,n,r,s,u){var h=0;if(r=t,typeof t=="function")Ac(t)&&(h=1);else if(typeof t=="string")h=f1(t,n,ge.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case v:return si(n.children,s,u,e);case g:h=8,s|=24;break;case b:return t=ln(12,n,e,s|2),t.elementType=b,t.lanes=u,t;case S:return t=ln(13,n,e,s),t.elementType=S,t.lanes=u,t;case N:return t=ln(19,n,e,s),t.elementType=N,t.lanes=u,t;case F:return sm(n,s,u,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T:case k:h=10;break t;case H:h=9;break t;case x:h=11;break t;case Q:h=14;break t;case B:h=16,r=null;break t}h=29,n=Error(o(130,t===null?"null":typeof t,"")),r=null}return e=ln(h,n,e,s),e.elementType=t,e.type=r,e.lanes=u,e}function si(t,e,n,r){return t=ln(7,t,r,e),t.lanes=n,t}function sm(t,e,n,r){t=ln(22,t,r,e),t.elementType=F,t.lanes=n;var s={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var u=s._current;if(u===null)throw Error(o(456));if(!(s._pendingVisibility&2)){var h=ha(u,2);h!==null&&(s._pendingVisibility|=2,De(h,u,2))}},attach:function(){var u=s._current;if(u===null)throw Error(o(456));if(s._pendingVisibility&2){var h=ha(u,2);h!==null&&(s._pendingVisibility&=-3,De(h,u,2))}}};return t.stateNode=s,t}function Oc(t,e,n){return t=ln(6,t,null,e),t.lanes=n,t}function Tc(t,e,n){return e=ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Fn(t){t.flags|=4}function um(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Km(e)){if(e=nn.current,e!==null&&((Lt&4194176)===Lt?Tn!==null:(Lt&62914560)!==Lt&&!(Lt&536870912)||e!==Tn))throw Gr=Cu,xh;t.flags|=8192}}function Uo(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Dd():536870912,t.lanes|=e,Wi|=e)}function sl(t,e){if(!qt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&31457280,r|=s.flags&31457280,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Dy(t,e,n){var r=e.pendingProps;switch(wu(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return Jt(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Xn(ue),An(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Vr(e)?Fn(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,mn!==null&&(zc(mn),mn=null))),Jt(e),null;case 26:return n=e.memoizedState,t===null?(Fn(e),n!==null?(Jt(e),um(e,n)):(Jt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(Fn(e),Jt(e),um(e,n)):(Jt(e),e.flags&=-16777217):(t.memoizedProps!==r&&Fn(e),Jt(e),e.flags&=-16777217),null;case 27:E(e),n=Re.current;var s=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Jt(e),null}t=ge.current,Vr(e)?Oh(e):(t=jm(s,r,n),e.stateNode=t,Fn(e))}return Jt(e),null;case 5:if(E(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Jt(e),null}if(t=ge.current,Vr(e))Oh(e);else{switch(s=Qo(Re.current),t){case 1:t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof r.is=="string"?s.createElement("select",{is:r.is}):s.createElement("select"),r.multiple?t.multiple=!0:r.size&&(t.size=r.size);break;default:t=typeof r.is=="string"?s.createElement(n,{is:r.is}):s.createElement(n)}}t[Ee]=e,t[Me]=r;t:for(s=e.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break t;for(;s.sibling===null;){if(s.return===null||s.return===e)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}e.stateNode=t;t:switch(ye(t,n,r),n){case"button":case"input":case"select":case"textarea":t=!!r.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Fn(e)}}return Jt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Fn(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(t=Re.current,Vr(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,s=xe,s!==null)switch(s.tag){case 27:case 5:r=s.memoizedProps}t[Ee]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||zm(t.nodeValue,n)),t||Wa(e)}else t=Qo(t).createTextNode(r),t[Ee]=e,e.stateNode=t}return Jt(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(s=Vr(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(o(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(o(317));s[Ee]=e}else Yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else mn!==null&&(zc(mn),mn=null),s=!0;if(!s)return e.flags&256?(Yn(e),e):(Yn(e),null)}if(Yn(e),e.flags&128)return e.lanes=n,e;if(n=r!==null,t=t!==null&&t.memoizedState!==null,n){r=e.child,s=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(s=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==s&&(r.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Uo(e,e.updateQueue),Jt(e),null;case 4:return An(),t===null&&Pc(e.stateNode.containerInfo),Jt(e),null;case 10:return Xn(e.type),Jt(e),null;case 19:if(Vt(se),s=e.memoizedState,s===null)return Jt(e),null;if(r=(e.flags&128)!==0,u=s.rendering,u===null)if(r)sl(s,!1);else{if(te!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(u=_o(t),u!==null){for(e.flags|=128,sl(s,!1),t=u.updateQueue,e.updateQueue=t,Uo(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)om(n,t),n=n.sibling;return Ht(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&rt()>Ho&&(e.flags|=128,r=!0,sl(s,!1),e.lanes=4194304)}else{if(!r)if(t=_o(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Uo(e,t),sl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!u.alternate&&!qt)return Jt(e),null}else 2*rt()-s.renderingStartTime>Ho&&n!==536870912&&(e.flags|=128,r=!0,sl(s,!1),e.lanes=4194304);s.isBackwards?(u.sibling=e.child,e.child=u):(t=s.last,t!==null?t.sibling=u:e.child=u,s.last=u)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=rt(),e.sibling=null,t=se.current,Ht(se,r?t&1|2:t&1),e):(Jt(e),null);case 22:case 23:return Yn(e),Mu(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?n&536870912&&!(e.flags&128)&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),n=e.updateQueue,n!==null&&Uo(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&Vt(ti),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Xn(ue),Jt(e),null;case 25:return null}throw Error(o(156,e.tag))}function wy(t,e){switch(wu(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xn(ue),An(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return E(e),null;case 13:if(Yn(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Vt(se),null;case 4:return An(),null;case 10:return Xn(e.type),null;case 22:case 23:return Yn(e),Mu(),t!==null&&Vt(ti),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Xn(ue),null;case 25:return null;default:return null}}function cm(t,e){switch(wu(e),e.tag){case 3:Xn(ue),An();break;case 26:case 27:case 5:E(e);break;case 4:An();break;case 13:Yn(e);break;case 19:Vt(se);break;case 10:Xn(e.type);break;case 22:case 23:Yn(e),Mu(),t!==null&&Vt(ti);break;case 24:Xn(ue)}}var Ny={getCacheForType:function(t){var e=Se(ue),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Cy=typeof WeakMap=="function"?WeakMap:Map,Wt=0,Pt=null,Mt=null,Lt=0,Gt=0,Ye=null,Jn=!1,Ji=!1,xc=!1,Wn=0,te=0,xa=0,ui=0,Dc=0,on=0,Wi=0,ul=null,Dn=null,wc=!1,Nc=0,Ho=1/0,jo=null,Da=null,Bo=!1,ci=null,cl=0,Cc=0,Rc=null,fl=0,Mc=null;function $e(){if(Wt&2&&Lt!==0)return Lt&-Lt;if(K.T!==null){var t=$i;return t!==0?t:Bc()}return Rd()}function fm(){on===0&&(on=!(Lt&536870912)||qt?xd():536870912);var t=nn.current;return t!==null&&(t.flags|=32),on}function De(t,e,n){(t===Pt&&Gt===2||t.cancelPendingCommit!==null)&&(Ii(t,0),In(t,Lt,on,!1)),Nr(t,n),(!(Wt&2)||t!==Pt)&&(t===Pt&&(!(Wt&2)&&(ui|=n),te===4&&In(t,Lt,on,!1)),wn(t))}function dm(t,e,n){if(Wt&6)throw Error(o(327));var r=!n&&(e&60)===0&&(e&t.expiredLanes)===0||wr(t,e),s=r?zy(t,e):qc(t,e,!0),u=r;do{if(s===0){Ji&&!r&&In(t,e,0,!1);break}else if(s===6)In(t,e,0,!Jn);else{if(n=t.current.alternate,u&&!Ry(n)){s=qc(t,e,!1),u=!1;continue}if(s===2){if(u=e,t.errorRecoveryDisabledLanes&u)var h=0;else h=t.pendingLanes&-536870913,h=h!==0?h:h&536870912?536870912:0;if(h!==0){e=h;t:{var p=t;s=ul;var y=p.current.memoizedState.isDehydrated;if(y&&(Ii(p,h).flags|=256),h=qc(p,h,!1),h!==2){if(xc&&!y){p.errorRecoveryDisabledLanes|=u,ui|=u,s=4;break t}u=Dn,Dn=s,u!==null&&zc(u)}s=h}if(u=!1,s!==2)continue}}if(s===1){Ii(t,0),In(t,e,0,!0);break}t:{switch(r=t,s){case 0:case 1:throw Error(o(345));case 4:if((e&4194176)===e){In(r,e,on,!Jn);break t}break;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(o(329))}if(r.finishedWork=n,r.finishedLanes=e,(e&62914560)===e&&(u=Nc+300-rt(),10<u)){if(In(r,e,on,!Jn),Wl(r,0)!==0)break t;r.timeoutHandle=qm(hm.bind(null,r,n,Dn,jo,wc,e,on,ui,Wi,Jn,2,-0,0),u);break t}hm(r,n,Dn,jo,wc,e,on,ui,Wi,Jn,0,-0,0)}}break}while(!0);wn(t)}function zc(t){Dn===null?Dn=t:Dn.push.apply(Dn,t)}function hm(t,e,n,r,s,u,h,p,y,O,U,$,R){var q=e.subtreeFlags;if((q&8192||(q&16785408)===16785408)&&(bl={stylesheets:null,count:0,unsuspend:d1},am(e),e=p1(),e!==null)){t.cancelPendingCommit=e(_m.bind(null,t,n,r,s,h,p,y,1,$,R)),In(t,u,h,!O);return}_m(t,n,r,s,h,p,y,U,$,R)}function Ry(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var s=n[r],u=s.getSnapshot;s=s.value;try{if(!je(u(),s))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function In(t,e,n,r){e&=~Dc,e&=~ui,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var s=e;0<s;){var u=31-He(s),h=1<<u;r[u]=-1,s&=~h}n!==0&&wd(t,n,e)}function Vo(){return Wt&6?!0:(dl(0),!1)}function kc(){if(Mt!==null){if(Gt===0)var t=Mt.return;else t=Mt,Gn=ri=null,Bu(t),Vi=null,Xr=0,t=Mt;for(;t!==null;)cm(t.alternate,t),t=t.return;Mt=null}}function Ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Fy(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),kc(),Pt=t,Mt=n=Ta(t.current,null),Lt=e,Gt=0,Ye=null,Jn=!1,Ji=wr(t,e),xc=!1,Wi=on=Dc=ui=xa=te=0,Dn=ul=null,wc=!1,e&8&&(e|=e&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=e;0<r;){var s=31-He(r),u=1<<s;e|=t[s],r&=~u}return Wn=e,co(),n}function pm(t,e){Nt=null,K.H=xn,e===Pr?(e=Nh(),Gt=3):e===xh?(e=Nh(),Gt=4):Gt=e===Dp?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ye=e,Mt===null&&(te=1,Ro(t,Ie(e,t.current)))}function mm(){var t=K.H;return K.H=xn,t===null?xn:t}function gm(){var t=K.A;return K.A=Ny,t}function Lc(){te=4,Jn||(Lt&4194176)!==Lt&&nn.current!==null||(Ji=!0),!(xa&134217727)&&!(ui&134217727)||Pt===null||In(Pt,Lt,on,!1)}function qc(t,e,n){var r=Wt;Wt|=2;var s=mm(),u=gm();(Pt!==t||Lt!==e)&&(jo=null,Ii(t,e)),e=!1;var h=te;t:do try{if(Gt!==0&&Mt!==null){var p=Mt,y=Ye;switch(Gt){case 8:kc(),h=6;break t;case 3:case 2:case 6:nn.current===null&&(e=!0);var O=Gt;if(Gt=0,Ye=null,tr(t,p,y,O),n&&Ji){h=0;break t}break;default:O=Gt,Gt=0,Ye=null,tr(t,p,y,O)}}My(),h=te;break}catch(U){pm(t,U)}while(!0);return e&&t.shellSuspendCounter++,Gn=ri=null,Wt=r,K.H=s,K.A=u,Mt===null&&(Pt=null,Lt=0,co()),h}function My(){for(;Mt!==null;)bm(Mt)}function zy(t,e){var n=Wt;Wt|=2;var r=mm(),s=gm();Pt!==t||Lt!==e?(jo=null,Ho=rt()+500,Ii(t,e)):Ji=wr(t,e);t:do try{if(Gt!==0&&Mt!==null){e=Mt;var u=Ye;e:switch(Gt){case 1:Gt=0,Ye=null,tr(t,e,u,1);break;case 2:if(Dh(u)){Gt=0,Ye=null,vm(e);break}e=function(){Gt===2&&Pt===t&&(Gt=7),wn(t)},u.then(e,e);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Dh(u)?(Gt=0,Ye=null,vm(e)):(Gt=0,Ye=null,tr(t,e,u,7));break;case 5:var h=null;switch(Mt.tag){case 26:h=Mt.memoizedState;case 5:case 27:var p=Mt;if(!h||Km(h)){Gt=0,Ye=null;var y=p.sibling;if(y!==null)Mt=y;else{var O=p.return;O!==null?(Mt=O,Yo(O)):Mt=null}break e}}Gt=0,Ye=null,tr(t,e,u,5);break;case 6:Gt=0,Ye=null,tr(t,e,u,6);break;case 8:kc(),te=6;break t;default:throw Error(o(462))}}ky();break}catch(U){pm(t,U)}while(!0);return Gn=ri=null,K.H=r,K.A=s,Wt=n,Mt!==null?0:(Pt=null,Lt=0,co(),te)}function ky(){for(;Mt!==null&&!J();)bm(Mt)}function bm(t){var e=jp(t.alternate,t,Wn);t.memoizedProps=t.pendingProps,e===null?Yo(t):Mt=e}function vm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=zp(n,e,e.pendingProps,e.type,void 0,Lt);break;case 11:e=zp(n,e,e.pendingProps,e.type.render,e.ref,Lt);break;case 5:Bu(e);default:cm(n,e),e=Mt=om(e,Wn),e=jp(n,e,Wn)}t.memoizedProps=t.pendingProps,e===null?Yo(t):Mt=e}function tr(t,e,n,r){Gn=ri=null,Bu(e),Vi=null,Xr=0;var s=e.return;try{if(Sy(t,s,e,n,Lt)){te=1,Ro(t,Ie(n,t.current)),Mt=null;return}}catch(u){if(s!==null)throw Mt=s,u;te=1,Ro(t,Ie(n,t.current)),Mt=null;return}e.flags&32768?(qt||r===1?t=!0:Ji||Lt&536870912?t=!1:(Jn=t=!0,(r===2||r===3||r===6)&&(r=nn.current,r!==null&&r.tag===13&&(r.flags|=16384))),ym(e,t)):Yo(e)}function Yo(t){var e=t;do{if(e.flags&32768){ym(e,Jn);return}t=e.return;var n=Dy(e.alternate,e,Wn);if(n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);te===0&&(te=5)}function ym(t,e){do{var n=wy(t.alternate,t);if(n!==null){n.flags&=32767,Mt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=n}while(t!==null);te=6,Mt=null}function _m(t,e,n,r,s,u,h,p,y,O){var U=K.T,$=I.p;try{I.p=2,K.T=null,Ly(t,e,n,r,$,s,u,h,p,y,O)}finally{K.T=U,I.p=$}}function Ly(t,e,n,r,s,u,h,p){do er();while(ci!==null);if(Wt&6)throw Error(o(327));var y=t.finishedWork;if(r=t.finishedLanes,y===null)return null;if(t.finishedWork=null,t.finishedLanes=0,y===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var O=y.lanes|y.childLanes;if(O|=Tu,hv(t,r,O,u,h,p),t===Pt&&(Mt=Pt=null,Lt=0),!(y.subtreeFlags&10256)&&!(y.flags&10256)||Bo||(Bo=!0,Cc=O,Rc=n,jy(_e,function(){return er(),null})),n=(y.flags&15990)!==0,y.subtreeFlags&15990||n?(n=K.T,K.T=null,u=I.p,I.p=2,h=Wt,Wt|=4,Oy(t,y),tm(y,t),ry(Qc,t.containerInfo),ts=!!Kc,Qc=Kc=null,t.current=y,Fp(t,y.alternate,y),Z(),Wt=h,I.p=u,K.T=n):t.current=y,Bo?(Bo=!1,ci=t,cl=r):Em(t,O),O=t.pendingLanes,O===0&&(Da=null),Zl(y.stateNode),wn(t),e!==null)for(s=t.onRecoverableError,y=0;y<e.length;y++)O=e[y],s(O.value,{componentStack:O.stack});return cl&3&&er(),O=t.pendingLanes,r&4194218&&O&42?t===Mc?fl++:(fl=0,Mc=t):fl=0,dl(0),null}function Em(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Qr(e)))}function er(){if(ci!==null){var t=ci,e=Cc;Cc=0;var n=Cd(cl),r=K.T,s=I.p;try{if(I.p=32>n?32:n,K.T=null,ci===null)var u=!1;else{n=Rc,Rc=null;var h=ci,p=cl;if(ci=null,cl=0,Wt&6)throw Error(o(331));var y=Wt;if(Wt|=4,rm(h.current),nm(h,h.current,p,n),Wt=y,dl(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(ua,h)}catch{}u=!0}return u}finally{I.p=s,K.T=r,Em(t,e)}}return!1}function Sm(t,e,n){e=Ie(n,e),e=tc(t.stateNode,e,2),t=Ea(t,e,2),t!==null&&(Nr(t,2),wn(t))}function Yt(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Da===null||!Da.has(r))){t=Ie(n,t),n=Tp(2),r=Ea(e,n,2),r!==null&&(xp(n,r,e,t),Nr(r,2),wn(r));break}}e=e.return}}function Uc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Cy;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(xc=!0,s.add(n),t=qy.bind(null,t,e,n),e.then(t,t))}function qy(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Pt===t&&(Lt&n)===n&&(te===4||te===3&&(Lt&62914560)===Lt&&300>rt()-Nc?!(Wt&2)&&Ii(t,0):Dc|=n,Wi===Lt&&(Wi=0)),wn(t)}function Am(t,e){e===0&&(e=Dd()),t=ha(t,e),t!==null&&(Nr(t,e),wn(t))}function Uy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Am(t,n)}function Hy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),Am(t,n)}function jy(t,e){return M(t,e)}var $o=null,nr=null,Hc=!1,Po=!1,jc=!1,fi=0;function wn(t){t!==nr&&t.next===null&&(nr===null?$o=nr=t:nr=nr.next=t),Po=!0,Hc||(Hc=!0,Vy(By))}function dl(t,e){if(!jc&&Po){jc=!0;do for(var n=!1,r=$o;r!==null;){if(t!==0){var s=r.pendingLanes;if(s===0)var u=0;else{var h=r.suspendedLanes,p=r.pingedLanes;u=(1<<31-He(42|t)+1)-1,u&=s&~(h&~p),u=u&201326677?u&201326677|1:u?u|2:0}u!==0&&(n=!0,xm(r,u))}else u=Lt,u=Wl(r,r===Pt?u:0),!(u&3)||wr(r,u)||(n=!0,xm(r,u));r=r.next}while(n);jc=!1}}function By(){Po=Hc=!1;var t=0;fi!==0&&(Zy()&&(t=fi),fi=0);for(var e=rt(),n=null,r=$o;r!==null;){var s=r.next,u=Om(r,e);u===0?(r.next=null,n===null?$o=s:n.next=s,s===null&&(nr=n)):(n=r,(t!==0||u&3)&&(Po=!0)),r=s}dl(t)}function Om(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var h=31-He(u),p=1<<h,y=s[h];y===-1?(!(p&n)||p&r)&&(s[h]=dv(p,e)):y<=e&&(t.expiredLanes|=p),u&=~p}if(e=Pt,n=Lt,n=Wl(t,t===e?n:0),r=t.callbackNode,n===0||t===e&&Gt===2||t.cancelPendingCommit!==null)return r!==null&&r!==null&&W(r),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||wr(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&W(r),Cd(n)){case 2:case 8:n=Qt;break;case 32:n=_e;break;case 268435456:n=Ti;break;default:n=_e}return r=Tm.bind(null,t),n=M(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&W(r),t.callbackPriority=2,t.callbackNode=null,2}function Tm(t,e){var n=t.callbackNode;if(er()&&t.callbackNode!==n)return null;var r=Lt;return r=Wl(t,t===Pt?r:0),r===0?null:(dm(t,r,e),Om(t,rt()),t.callbackNode!=null&&t.callbackNode===n?Tm.bind(null,t):null)}function xm(t,e){if(er())return null;dm(t,e,!0)}function Vy(t){Jy(function(){Wt&6?M(Kt,t):t()})}function Bc(){return fi===0&&(fi=xd()),fi}function Dm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ao(""+t)}function wm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Yy(t,e,n,r,s){if(e==="submit"&&n&&n.stateNode===s){var u=Dm((s[Me]||null).action),h=r.submitter;h&&(e=(e=h[Me]||null)?Dm(e.formAction):h.getAttribute("formAction"),e!==null&&(u=e,h=null));var p=new oo("action","action",null,r,s);t.push({event:p,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(fi!==0){var y=h?wm(s,h):new FormData(s);Zu(n,{pending:!0,data:y,method:s.method,action:u},null,y)}}else typeof u=="function"&&(p.preventDefault(),y=h?wm(s,h):new FormData(s),Zu(n,{pending:!0,data:y,method:s.method,action:u},u,y))},currentTarget:s}]})}}for(var Vc=0;Vc<_h.length;Vc++){var Yc=_h[Vc],$y=Yc.toLowerCase(),Py=Yc[0].toUpperCase()+Yc.slice(1);pn($y,"on"+Py)}pn(mh,"onAnimationEnd"),pn(gh,"onAnimationIteration"),pn(bh,"onAnimationStart"),pn("dblclick","onDoubleClick"),pn("focusin","onFocus"),pn("focusout","onBlur"),pn(oy,"onTransitionRun"),pn(sy,"onTransitionStart"),pn(uy,"onTransitionCancel"),pn(vh,"onTransitionEnd"),Ni("onMouseEnter",["mouseout","mouseover"]),Ni("onMouseLeave",["mouseout","mouseover"]),Ni("onPointerEnter",["pointerout","pointerover"]),Ni("onPointerLeave",["pointerout","pointerover"]),Xa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Xa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Xa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Xa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Xa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function Nm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var h=r.length-1;0<=h;h--){var p=r[h],y=p.instance,O=p.currentTarget;if(p=p.listener,y!==u&&s.isPropagationStopped())break t;u=p,s.currentTarget=O;try{u(s)}catch(U){Co(U)}s.currentTarget=null,u=y}else for(h=0;h<r.length;h++){if(p=r[h],y=p.instance,O=p.currentTarget,p=p.listener,y!==u&&s.isPropagationStopped())break t;u=p,s.currentTarget=O;try{u(s)}catch(U){Co(U)}s.currentTarget=null,u=y}}}}function kt(t,e){var n=e[iu];n===void 0&&(n=e[iu]=new Set);var r=t+"__bubble";n.has(r)||(Cm(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),Cm(n,t,r,e)}var Go="_reactListening"+Math.random().toString(36).slice(2);function Pc(t){if(!t[Go]){t[Go]=!0,zd.forEach(function(n){n!=="selectionchange"&&(Gy.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Go]||(e[Go]=!0,$c("selectionchange",!1,e))}}function Cm(t,e,n,r){switch(Im(e)){case 2:var s=b1;break;case 8:s=v1;break;default:s=af}n=s.bind(null,e,n,t),s=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Gc(t,e,n,r,s){var u=r;if(!(e&1)&&!(e&2)&&r!==null)t:for(;;){if(r===null)return;var h=r.tag;if(h===3||h===4){var p=r.stateNode.containerInfo;if(p===s||p.nodeType===8&&p.parentNode===s)break;if(h===4)for(h=r.return;h!==null;){var y=h.tag;if((y===3||y===4)&&(y=h.stateNode.containerInfo,y===s||y.nodeType===8&&y.parentNode===s))return;h=h.return}for(;p!==null;){if(h=Ga(p),h===null)return;if(y=h.tag,y===5||y===6||y===26||y===27){r=u=h;continue t}p=p.parentNode}}r=r.return}Gd(function(){var O=u,U=cu(n),$=[];t:{var R=yh.get(t);if(R!==void 0){var q=oo,ht=t;switch(t){case"keypress":if(ro(n)===0)break t;case"keydown":case"keyup":q=Hv;break;case"focusin":ht="focus",q=gu;break;case"focusout":ht="blur",q=gu;break;case"beforeblur":case"afterblur":q=gu;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Vv;break;case mh:case gh:case bh:q=Nv;break;case vh:q=$v;break;case"scroll":case"scrollend":q=Ov;break;case"wheel":q=Gv;break;case"copy":case"cut":case"paste":q=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Fd;break;case"toggle":case"beforetoggle":q=Kv}var Et=(e&4)!==0,ee=!Et&&(t==="scroll"||t==="scrollend"),D=Et?R!==null?R+"Capture":null:R;Et=[];for(var A=O,w;A!==null;){var V=A;if(w=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||w===null||D===null||(V=Mr(A,D),V!=null&&Et.push(pl(A,V,w))),ee)break;A=A.return}0<Et.length&&(R=new q(R,ht,null,n,U),$.push({event:R,listeners:Et}))}}if(!(e&7)){t:{if(R=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",R&&n!==uu&&(ht=n.relatedTarget||n.fromElement)&&(Ga(ht)||ht[xi]))break t;if((q||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,q?(ht=n.relatedTarget||n.toElement,q=O,ht=ht?Ga(ht):null,ht!==null&&(ee=st(ht),Et=ht.tag,ht!==ee||Et!==5&&Et!==27&&Et!==6)&&(ht=null)):(q=null,ht=O),q!==ht)){if(Et=Qd,V="onMouseLeave",D="onMouseEnter",A="mouse",(t==="pointerout"||t==="pointerover")&&(Et=Fd,V="onPointerLeave",D="onPointerEnter",A="pointer"),ee=q==null?R:Rr(q),w=ht==null?R:Rr(ht),R=new Et(V,A+"leave",q,n,U),R.target=ee,R.relatedTarget=w,V=null,Ga(U)===O&&(Et=new Et(D,A+"enter",ht,n,U),Et.target=w,Et.relatedTarget=ee,V=Et),ee=V,q&&ht)e:{for(Et=q,D=ht,A=0,w=Et;w;w=ar(w))A++;for(w=0,V=D;V;V=ar(V))w++;for(;0<A-w;)Et=ar(Et),A--;for(;0<w-A;)D=ar(D),w--;for(;A--;){if(Et===D||D!==null&&Et===D.alternate)break e;Et=ar(Et),D=ar(D)}Et=null}else Et=null;q!==null&&Rm($,R,q,Et,!1),ht!==null&&ee!==null&&Rm($,ee,ht,Et,!0)}}t:{if(R=O?Rr(O):window,q=R.nodeName&&R.nodeName.toLowerCase(),q==="select"||q==="input"&&R.type==="file")var lt=ih;else if(nh(R))if(rh)lt=ay;else{lt=ey;var Ct=ty}else q=R.nodeName,!q||q.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?O&&su(O.elementType)&&(lt=ih):lt=ny;if(lt&&(lt=lt(t,O))){ah($,lt,n,U);break t}Ct&&Ct(t,R,O),t==="focusout"&&O&&R.type==="number"&&O.memoizedProps.value!=null&&ou(R,"number",R.value)}switch(Ct=O?Rr(O):window,t){case"focusin":(nh(Ct)||Ct.contentEditable==="true")&&(Li=Ct,Su=O,Br=null);break;case"focusout":Br=Su=Li=null;break;case"mousedown":Au=!0;break;case"contextmenu":case"mouseup":case"dragend":Au=!1,hh($,n,U);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":hh($,n,U)}var pt;if(vu)t:{switch(t){case"compositionstart":var bt="onCompositionStart";break t;case"compositionend":bt="onCompositionEnd";break t;case"compositionupdate":bt="onCompositionUpdate";break t}bt=void 0}else ki?th(t,n)&&(bt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(bt="onCompositionStart");bt&&(Jd&&n.locale!=="ko"&&(ki||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&ki&&(pt=Xd()):(da=U,hu="value"in da?da.value:da.textContent,ki=!0)),Ct=Xo(O,bt),0<Ct.length&&(bt=new Zd(bt,t,null,n,U),$.push({event:bt,listeners:Ct}),pt?bt.data=pt:(pt=eh(n),pt!==null&&(bt.data=pt)))),(pt=Zv?Fv(t,n):Jv(t,n))&&(bt=Xo(O,"onBeforeInput"),0<bt.length&&(Ct=new Zd("onBeforeInput","beforeinput",null,n,U),$.push({event:Ct,listeners:bt}),Ct.data=pt)),Yy($,t,O,n,U)}Nm($,e)})}function pl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xo(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,u=s.stateNode;s=s.tag,s!==5&&s!==26&&s!==27||u===null||(s=Mr(t,n),s!=null&&r.unshift(pl(t,s,u)),s=Mr(t,e),s!=null&&r.push(pl(t,s,u))),t=t.return}return r}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Rm(t,e,n,r,s){for(var u=e._reactName,h=[];n!==null&&n!==r;){var p=n,y=p.alternate,O=p.stateNode;if(p=p.tag,y!==null&&y===r)break;p!==5&&p!==26&&p!==27||O===null||(y=O,s?(O=Mr(n,u),O!=null&&h.unshift(pl(n,O,y))):s||(O=Mr(n,u),O!=null&&h.push(pl(n,O,y)))),n=n.return}h.length!==0&&t.push({event:e,listeners:h})}var Xy=/\r\n?/g,Ky=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(Xy,`
`).replace(Ky,"")}function zm(t,e){return e=Mm(e),Mm(t)===e}function Ko(){}function Bt(t,e,n,r,s,u){switch(n){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||Ri(t,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&Ri(t,""+r);break;case"className":to(t,"class",r);break;case"tabIndex":to(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":to(t,n,r);break;case"style":$d(t,r,u);break;case"data":if(e!=="object"){to(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=ao(""+r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Bt(t,e,"name",s.name,s,null),Bt(t,e,"formEncType",s.formEncType,s,null),Bt(t,e,"formMethod",s.formMethod,s,null),Bt(t,e,"formTarget",s.formTarget,s,null)):(Bt(t,e,"encType",s.encType,s,null),Bt(t,e,"method",s.method,s,null),Bt(t,e,"target",s.target,s,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=ao(""+r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=Ko);break;case"onScroll":r!=null&&kt("scroll",t);break;case"onScrollEnd":r!=null&&kt("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=ao(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""+r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":kt("beforetoggle",t),kt("toggle",t),Il(t,"popover",r);break;case"xlinkActuate":jn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":jn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":jn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":jn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":jn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":jn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":jn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":jn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":jn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Il(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Sv.get(n)||n,Il(t,n,r))}}function Xc(t,e,n,r,s,u){switch(n){case"style":$d(t,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(s.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof r=="string"?Ri(t,r):(typeof r=="number"||typeof r=="bigint")&&Ri(t,""+r);break;case"onScroll":r!=null&&kt("scroll",t);break;case"onScrollEnd":r!=null&&kt("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Ko);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kd.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),e=n.slice(2,s?n.length-7:void 0),u=t[Me]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,s),typeof r=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,r,s);break t}n in t?t[n]=r:r===!0?t.setAttribute(n,""):Il(t,n,r)}}}function ye(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",t),kt("load",t);var r=!1,s=!1,u;for(u in n)if(n.hasOwnProperty(u)){var h=n[u];if(h!=null)switch(u){case"src":r=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Bt(t,e,u,h,n,null)}}s&&Bt(t,e,"srcSet",n.srcSet,n,null),r&&Bt(t,e,"src",n.src,n,null);return;case"input":kt("invalid",t);var p=u=h=s=null,y=null,O=null;for(r in n)if(n.hasOwnProperty(r)){var U=n[r];if(U!=null)switch(r){case"name":s=U;break;case"type":h=U;break;case"checked":y=U;break;case"defaultChecked":O=U;break;case"value":u=U;break;case"defaultValue":p=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(o(137,e));break;default:Bt(t,e,r,U,n,null)}}jd(t,u,p,y,O,h,s,!1),eo(t);return;case"select":kt("invalid",t),r=h=u=null;for(s in n)if(n.hasOwnProperty(s)&&(p=n[s],p!=null))switch(s){case"value":u=p;break;case"defaultValue":h=p;break;case"multiple":r=p;default:Bt(t,e,s,p,n,null)}e=u,n=h,t.multiple=!!r,e!=null?Ci(t,!!r,e,!1):n!=null&&Ci(t,!!r,n,!0);return;case"textarea":kt("invalid",t),u=s=r=null;for(h in n)if(n.hasOwnProperty(h)&&(p=n[h],p!=null))switch(h){case"value":r=p;break;case"defaultValue":s=p;break;case"children":u=p;break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(o(91));break;default:Bt(t,e,h,p,n,null)}Vd(t,r,s,u),eo(t);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(r=n[y],r!=null))switch(y){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Bt(t,e,y,r,n,null)}return;case"dialog":kt("cancel",t),kt("close",t);break;case"iframe":case"object":kt("load",t);break;case"video":case"audio":for(r=0;r<hl.length;r++)kt(hl[r],t);break;case"image":kt("error",t),kt("load",t);break;case"details":kt("toggle",t);break;case"embed":case"source":case"link":kt("error",t),kt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in n)if(n.hasOwnProperty(O)&&(r=n[O],r!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Bt(t,e,O,r,n,null)}return;default:if(su(e)){for(U in n)n.hasOwnProperty(U)&&(r=n[U],r!==void 0&&Xc(t,e,U,r,n,void 0));return}}for(p in n)n.hasOwnProperty(p)&&(r=n[p],r!=null&&Bt(t,e,p,r,n,null))}function Qy(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,u=null,h=null,p=null,y=null,O=null,U=null;for(q in n){var $=n[q];if(n.hasOwnProperty(q)&&$!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":y=$;default:r.hasOwnProperty(q)||Bt(t,e,q,null,r,$)}}for(var R in r){var q=r[R];if($=n[R],r.hasOwnProperty(R)&&(q!=null||$!=null))switch(R){case"type":u=q;break;case"name":s=q;break;case"checked":O=q;break;case"defaultChecked":U=q;break;case"value":h=q;break;case"defaultValue":p=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(o(137,e));break;default:q!==$&&Bt(t,e,R,q,r,$)}}lu(t,h,p,y,O,U,u,s);return;case"select":q=h=p=R=null;for(u in n)if(y=n[u],n.hasOwnProperty(u)&&y!=null)switch(u){case"value":break;case"multiple":q=y;default:r.hasOwnProperty(u)||Bt(t,e,u,null,r,y)}for(s in r)if(u=r[s],y=n[s],r.hasOwnProperty(s)&&(u!=null||y!=null))switch(s){case"value":R=u;break;case"defaultValue":p=u;break;case"multiple":h=u;default:u!==y&&Bt(t,e,s,u,r,y)}e=p,n=h,r=q,R!=null?Ci(t,!!n,R,!1):!!r!=!!n&&(e!=null?Ci(t,!!n,e,!0):Ci(t,!!n,n?[]:"",!1));return;case"textarea":q=R=null;for(p in n)if(s=n[p],n.hasOwnProperty(p)&&s!=null&&!r.hasOwnProperty(p))switch(p){case"value":break;case"children":break;default:Bt(t,e,p,null,r,s)}for(h in r)if(s=r[h],u=n[h],r.hasOwnProperty(h)&&(s!=null||u!=null))switch(h){case"value":R=s;break;case"defaultValue":q=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:s!==u&&Bt(t,e,h,s,r,u)}Bd(t,R,q);return;case"option":for(var ht in n)if(R=n[ht],n.hasOwnProperty(ht)&&R!=null&&!r.hasOwnProperty(ht))switch(ht){case"selected":t.selected=!1;break;default:Bt(t,e,ht,null,r,R)}for(y in r)if(R=r[y],q=n[y],r.hasOwnProperty(y)&&R!==q&&(R!=null||q!=null))switch(y){case"selected":t.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Bt(t,e,y,R,r,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Et in n)R=n[Et],n.hasOwnProperty(Et)&&R!=null&&!r.hasOwnProperty(Et)&&Bt(t,e,Et,null,r,R);for(O in r)if(R=r[O],q=n[O],r.hasOwnProperty(O)&&R!==q&&(R!=null||q!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,e));break;default:Bt(t,e,O,R,r,q)}return;default:if(su(e)){for(var ee in n)R=n[ee],n.hasOwnProperty(ee)&&R!==void 0&&!r.hasOwnProperty(ee)&&Xc(t,e,ee,void 0,r,R);for(U in r)R=r[U],q=n[U],!r.hasOwnProperty(U)||R===q||R===void 0&&q===void 0||Xc(t,e,U,R,r,q);return}}for(var D in n)R=n[D],n.hasOwnProperty(D)&&R!=null&&!r.hasOwnProperty(D)&&Bt(t,e,D,null,r,R);for($ in r)R=r[$],q=n[$],!r.hasOwnProperty($)||R===q||R==null&&q==null||Bt(t,e,$,R,r,q)}var Kc=null,Qc=null;function Qo(t){return t.nodeType===9?t:t.ownerDocument}function km(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fc=null;function Zy(){var t=window.event;return t&&t.type==="popstate"?t===Fc?!1:(Fc=t,!0):(Fc=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,Fy=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,Jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(Wy)}:qm;function Wy(t){setTimeout(function(){throw t})}function Jc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Sl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Sl(e)}function Wc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Wc(n),ru(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Iy(t,e,n,r){for(;t.nodeType===1;){var s=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Cr])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==s.rel||t.getAttribute("href")!==(s.href==null?null:s.href)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||t.getAttribute("title")!==(s.title==null?null:s.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(s.src==null?null:s.src)||t.getAttribute("type")!==(s.type==null?null:s.type)||t.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=s.name==null?null:""+s.name;if(s.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=bn(t.nextSibling),t===null)break}return null}function t1(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bn(t.nextSibling),t===null))return null;return t}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function jm(t,e,n){switch(e=Qo(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}var sn=new Map,Bm=new Set;function Zo(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ta=I.d;I.d={f:e1,r:n1,D:a1,C:i1,L:r1,m:l1,X:s1,S:o1,M:u1};function e1(){var t=ta.f(),e=Vo();return t||e}function n1(t){var e=Di(t);e!==null&&e.tag===5&&e.type==="form"?hp(e):ta.r(t)}var ir=typeof document>"u"?null:document;function Vm(t,e,n){var r=ir;if(r&&typeof e=="string"&&e){var s=Je(e);s='link[rel="'+t+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Bm.has(s)||(Bm.add(s),t={rel:t,crossOrigin:n,href:e},r.querySelector(s)===null&&(e=r.createElement("link"),ye(e,"link",t),de(e),r.head.appendChild(e)))}}function a1(t){ta.D(t),Vm("dns-prefetch",t,null)}function i1(t,e){ta.C(t,e),Vm("preconnect",t,e)}function r1(t,e,n){ta.L(t,e,n);var r=ir;if(r&&t&&e){var s='link[rel="preload"][as="'+Je(e)+'"]';e==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Je(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Je(n.imageSizes)+'"]')):s+='[href="'+Je(t)+'"]';var u=s;switch(e){case"style":u=rr(t);break;case"script":u=lr(t)}sn.has(u)||(t=et({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),sn.set(u,t),r.querySelector(s)!==null||e==="style"&&r.querySelector(ml(u))||e==="script"&&r.querySelector(gl(u))||(e=r.createElement("link"),ye(e,"link",t),de(e),r.head.appendChild(e)))}}function l1(t,e){ta.m(t,e);var n=ir;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",s='link[rel="modulepreload"][as="'+Je(r)+'"][href="'+Je(t)+'"]',u=s;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=lr(t)}if(!sn.has(u)&&(t=et({rel:"modulepreload",href:t},e),sn.set(u,t),n.querySelector(s)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gl(u)))return}r=n.createElement("link"),ye(r,"link",t),de(r),n.head.appendChild(r)}}}function o1(t,e,n){ta.S(t,e,n);var r=ir;if(r&&t){var s=wi(r).hoistableStyles,u=rr(t);e=e||"default";var h=s.get(u);if(!h){var p={loading:0,preload:null};if(h=r.querySelector(ml(u)))p.loading=5;else{t=et({rel:"stylesheet",href:t,"data-precedence":e},n),(n=sn.get(u))&&Ic(t,n);var y=h=r.createElement("link");de(y),ye(y,"link",t),y._p=new Promise(function(O,U){y.onload=O,y.onerror=U}),y.addEventListener("load",function(){p.loading|=1}),y.addEventListener("error",function(){p.loading|=2}),p.loading|=4,Fo(h,e,r)}h={type:"stylesheet",instance:h,count:1,state:p},s.set(u,h)}}}function s1(t,e){ta.X(t,e);var n=ir;if(n&&t){var r=wi(n).hoistableScripts,s=lr(t),u=r.get(s);u||(u=n.querySelector(gl(s)),u||(t=et({src:t,async:!0},e),(e=sn.get(s))&&tf(t,e),u=n.createElement("script"),de(u),ye(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function u1(t,e){ta.M(t,e);var n=ir;if(n&&t){var r=wi(n).hoistableScripts,s=lr(t),u=r.get(s);u||(u=n.querySelector(gl(s)),u||(t=et({src:t,async:!0,type:"module"},e),(e=sn.get(s))&&tf(t,e),u=n.createElement("script"),de(u),ye(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(s,u))}}function Ym(t,e,n,r){var s=(s=Re.current)?Zo(s):null;if(!s)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=rr(n.href),n=wi(s).hoistableStyles,r=n.get(e),r||(r={type:"style",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=rr(n.href);var u=wi(s).hoistableStyles,h=u.get(t);if(h||(s=s.ownerDocument||s,h={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,h),(u=s.querySelector(ml(t)))&&!u._p&&(h.instance=u,h.state.loading=5),sn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},sn.set(t,n),u||c1(s,t,n,h.state))),e&&r===null)throw Error(o(528,""));return h}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=lr(n),n=wi(s).hoistableScripts,r=n.get(e),r||(r={type:"script",instance:null,count:0,state:null},n.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function rr(t){return'href="'+Je(t)+'"'}function ml(t){return'link[rel="stylesheet"]['+t+"]"}function $m(t){return et({},t,{"data-precedence":t.precedence,precedence:null})}function c1(t,e,n,r){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=t.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),ye(e,"link",n),de(e),t.head.appendChild(e))}function lr(t){return'[src="'+Je(t)+'"]'}function gl(t){return"script[async]"+t}function Pm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Je(n.href)+'"]');if(r)return e.instance=r,de(r),r;var s=et({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),de(r),ye(r,"style",s),Fo(r,n.precedence,t),e.instance=r;case"stylesheet":s=rr(n.href);var u=t.querySelector(ml(s));if(u)return e.state.loading|=4,e.instance=u,de(u),u;r=$m(n),(s=sn.get(s))&&Ic(r,s),u=(t.ownerDocument||t).createElement("link"),de(u);var h=u;return h._p=new Promise(function(p,y){h.onload=p,h.onerror=y}),ye(u,"link",r),e.state.loading|=4,Fo(u,n.precedence,t),e.instance=u;case"script":return u=lr(n.src),(s=t.querySelector(gl(u)))?(e.instance=s,de(s),s):(r=n,(s=sn.get(u))&&(r=et({},n),tf(r,s)),t=t.ownerDocument||t,s=t.createElement("script"),de(s),ye(s,"link",r),t.head.appendChild(s),e.instance=s);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(r=e.instance,e.state.loading|=4,Fo(r,n.precedence,t));return e.instance}function Fo(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=r.length?r[r.length-1]:null,u=s,h=0;h<r.length;h++){var p=r[h];if(p.dataset.precedence===e)u=p;else if(u!==s)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Ic(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function tf(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Jo=null;function Gm(t,e,n){if(Jo===null){var r=new Map,s=Jo=new Map;s.set(n,r)}else s=Jo,r=s.get(n),r||(r=new Map,s.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),s=0;s<n.length;s++){var u=n[s];if(!(u[Cr]||u[Ee]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var h=u.getAttribute(e)||"";h=t+h;var p=r.get(h);p?p.push(u):r.set(h,[u])}}return r}function Xm(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function f1(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Km(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var bl=null;function d1(){}function h1(t,e,n){if(bl===null)throw Error(o(475));var r=bl;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var s=rr(n.href),u=t.querySelector(ml(s));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(r.count++,r=Wo.bind(r),t.then(r,r)),e.state.loading|=4,e.instance=u,de(u);return}u=t.ownerDocument||t,n=$m(n),(s=sn.get(s))&&Ic(n,s),u=u.createElement("link"),de(u);var h=u;h._p=new Promise(function(p,y){h.onload=p,h.onerror=y}),ye(u,"link",n),e.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(r.count++,e=Wo.bind(r),t.addEventListener("load",e),t.addEventListener("error",e))}}function p1(){if(bl===null)throw Error(o(475));var t=bl;return t.stylesheets&&t.count===0&&ef(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&ef(t,t.stylesheets),t.unsuspend){var r=t.unsuspend;t.unsuspend=null,r()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function Wo(){if(this.count--,this.count===0){if(this.stylesheets)ef(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Io=null;function ef(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Io=new Map,e.forEach(m1,t),Io=null,Wo.call(t))}function m1(t,e){if(!(e.state.loading&4)){var n=Io.get(t);if(n)var r=n.get(null);else{n=new Map,Io.set(t,n);for(var s=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<s.length;u++){var h=s[u];(h.nodeName==="LINK"||h.getAttribute("media")!=="not all")&&(n.set(h.dataset.precedence,h),r=h)}r&&n.set(null,r)}s=e.instance,h=s.getAttribute("data-precedence"),u=n.get(h)||r,u===r&&n.set(null,s),n.set(h,s),this.count++,r=Wo.bind(this),s.addEventListener("load",r),s.addEventListener("error",r),u?u.parentNode.insertBefore(s,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(s,t.firstChild)),e.state.loading|=4}}var vl={$$typeof:k,Provider:null,Consumer:null,_currentValue:_t,_currentValue2:_t,_threadCount:0};function g1(t,e,n,r,s,u,h,p){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=au(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=au(0),this.hiddenUpdates=au(null),this.identifierPrefix=r,this.onUncaughtError=s,this.onCaughtError=u,this.onRecoverableError=h,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Qm(t,e,n,r,s,u,h,p,y,O,U,$){return t=new g1(t,e,n,h,p,y,O,$),e=1,u===!0&&(e|=24),u=ln(3,null,null,e),t.current=u,u.stateNode=t,e=zu(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:e},hc(u),t}function Zm(t){return t?(t=Hi,t):Hi}function Fm(t,e,n,r,s,u){s=Zm(s),r.context===null?r.context=s:r.pendingContext=s,r=_a(e),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Ea(t,r,e),n!==null&&(De(n,t,e),el(n,t,e))}function Jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nf(t,e){Jm(t,e),(t=t.alternate)&&Jm(t,e)}function Wm(t){if(t.tag===13){var e=ha(t,67108864);e!==null&&De(e,t,67108864),nf(t,67108864)}}var ts=!0;function b1(t,e,n,r){var s=K.T;K.T=null;var u=I.p;try{I.p=2,af(t,e,n,r)}finally{I.p=u,K.T=s}}function v1(t,e,n,r){var s=K.T;K.T=null;var u=I.p;try{I.p=8,af(t,e,n,r)}finally{I.p=u,K.T=s}}function af(t,e,n,r){if(ts){var s=rf(r);if(s===null)Gc(t,e,r,es,n),tg(t,r);else if(_1(s,t,e,n,r))r.stopPropagation();else if(tg(t,r),e&4&&-1<y1.indexOf(t)){for(;s!==null;){var u=Di(s);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var h=Pa(u.pendingLanes);if(h!==0){var p=u;for(p.pendingLanes|=2,p.entangledLanes|=2;h;){var y=1<<31-He(h);p.entanglements[1]|=y,h&=~y}wn(u),!(Wt&6)&&(Ho=rt()+500,dl(0))}}break;case 13:p=ha(u,2),p!==null&&De(p,u,2),Vo(),nf(u,2)}if(u=rf(r),u===null&&Gc(t,e,r,es,n),u===s)break;s=u}s!==null&&r.stopPropagation()}else Gc(t,e,r,null,n)}}function rf(t){return t=cu(t),lf(t)}var es=null;function lf(t){if(es=null,t=Ga(t),t!==null){var e=st(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=X(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return es=t,null}function Im(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case Kt:return 2;case Qt:return 8;case _e:case eu:return 32;case Ti:return 268435456;default:return 32}default:return 32}}var of=!1,wa=null,Na=null,Ca=null,yl=new Map,_l=new Map,Ra=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tg(t,e){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":yl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(e.pointerId)}}function El(t,e,n,r,s,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[s]},e!==null&&(e=Di(e),e!==null&&Wm(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function _1(t,e,n,r,s){switch(e){case"focusin":return wa=El(wa,t,e,n,r,s),!0;case"dragenter":return Na=El(Na,t,e,n,r,s),!0;case"mouseover":return Ca=El(Ca,t,e,n,r,s),!0;case"pointerover":var u=s.pointerId;return yl.set(u,El(yl.get(u)||null,t,e,n,r,s)),!0;case"gotpointercapture":return u=s.pointerId,_l.set(u,El(_l.get(u)||null,t,e,n,r,s)),!0}return!1}function eg(t){var e=Ga(t.target);if(e!==null){var n=st(e);if(n!==null){if(e=n.tag,e===13){if(e=X(n),e!==null){t.blockedOn=e,pv(t.priority,function(){if(n.tag===13){var r=$e(),s=ha(n,r);s!==null&&De(s,n,r),nf(n,r)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ns(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uu=r,n.target.dispatchEvent(r),uu=null}else return e=Di(n),e!==null&&Wm(e),t.blockedOn=n,!1;e.shift()}return!0}function ng(t,e,n){ns(t)&&n.delete(e)}function E1(){of=!1,wa!==null&&ns(wa)&&(wa=null),Na!==null&&ns(Na)&&(Na=null),Ca!==null&&ns(Ca)&&(Ca=null),yl.forEach(ng),_l.forEach(ng)}function as(t,e){t.blockedOn===e&&(t.blockedOn=null,of||(of=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,E1)))}var is=null;function ag(t){is!==t&&(is=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){is===t&&(is=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],s=t[e+2];if(typeof r!="function"){if(lf(r||n)===null)continue;break}var u=Di(n);u!==null&&(t.splice(e,3),e-=3,Zu(u,{pending:!0,data:s,method:n.method,action:r},r,s))}}))}function Sl(t){function e(y){return as(y,t)}wa!==null&&as(wa,t),Na!==null&&as(Na,t),Ca!==null&&as(Ca,t),yl.forEach(e),_l.forEach(e);for(var n=0;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ra.length&&(n=Ra[0],n.blockedOn===null);)eg(n),n.blockedOn===null&&Ra.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var s=n[r],u=n[r+1],h=s[Me]||null;if(typeof u=="function")h||ag(n);else if(h){var p=null;if(u&&u.hasAttribute("formAction")){if(s=u,h=u[Me]||null)p=h.formAction;else if(lf(s)!==null)continue}else p=h.action;typeof p=="function"?n[r+1]=p:(n.splice(r,3),r-=3),ag(n)}}}function sf(t){this._internalRoot=t}rs.prototype.render=sf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,r=$e();Fm(n,r,t,e,null,null)},rs.prototype.unmount=sf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&er(),Fm(t.current,2,null,t,null,null),Vo(),e[xi]=null}};function rs(t){this._internalRoot=t}rs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rd();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ra.length&&e!==0&&e<Ra[n].priority;n++);Ra.splice(n,0,t),n===0&&eg(t)}};var ig=a.version;if(ig!=="19.0.0")throw Error(o(527,ig,"19.0.0"));I.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=Y(e),t=t!==null?at(t):null,t=t===null?null:t.stateNode,t};var S1={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:K,findFiberByHostInstance:Ga,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ua=ls.inject(S1),Te=ls}catch{}}return Ol.createRoot=function(t,e){if(!c(t))throw Error(o(299));var n=!1,r="",s=Ep,u=Sp,h=Ap,p=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(s=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(h=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(p=e.unstable_transitionCallbacks)),e=Qm(t,1,!1,null,null,n,r,s,u,h,p,null),t[xi]=e.current,Pc(t.nodeType===8?t.parentNode:t),new sf(e)},Ol.hydrateRoot=function(t,e,n){if(!c(t))throw Error(o(299));var r=!1,s="",u=Ep,h=Sp,p=Ap,y=null,O=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(y=n.unstable_transitionCallbacks),n.formState!==void 0&&(O=n.formState)),e=Qm(t,1,!0,e,n??null,r,s,u,h,p,y,O),e.context=Zm(null),n=e.current,r=$e(),s=_a(r),s.callback=null,Ea(n,s,r),e.current.lanes=r,Nr(e,r),wn(e),t[xi]=e.current,Pc(t),new rs(e)},Ol.version="19.0.0",Ol}var pg;function z1(){if(pg)return cf.exports;pg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(a){console.error(a)}}return i(),cf.exports=M1(),cf.exports}var k1=z1(),Pe=td();const wt=O1(Pe);function Db(i,a){return function(){return i.apply(a,arguments)}}const{toString:L1}=Object.prototype,{getPrototypeOf:ed}=Object,js=(i=>a=>{const l=L1.call(a);return i[l]||(i[l]=l.slice(8,-1).toLowerCase())})(Object.create(null)),En=i=>(i=i.toLowerCase(),a=>js(a)===i),Bs=i=>a=>typeof a===i,{isArray:Er}=Array,Ll=Bs("undefined");function q1(i){return i!==null&&!Ll(i)&&i.constructor!==null&&!Ll(i.constructor)&&Xe(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const wb=En("ArrayBuffer");function U1(i){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(i):a=i&&i.buffer&&wb(i.buffer),a}const H1=Bs("string"),Xe=Bs("function"),Nb=Bs("number"),Vs=i=>i!==null&&typeof i=="object",j1=i=>i===!0||i===!1,Es=i=>{if(js(i)!=="object")return!1;const a=ed(i);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in i)&&!(Symbol.iterator in i)},B1=En("Date"),V1=En("File"),Y1=En("Blob"),$1=En("FileList"),P1=i=>Vs(i)&&Xe(i.pipe),G1=i=>{let a;return i&&(typeof FormData=="function"&&i instanceof FormData||Xe(i.append)&&((a=js(i))==="formdata"||a==="object"&&Xe(i.toString)&&i.toString()==="[object FormData]"))},X1=En("URLSearchParams"),[K1,Q1,Z1,F1]=["ReadableStream","Request","Response","Headers"].map(En),J1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ul(i,a,{allOwnKeys:l=!1}={}){if(i===null||typeof i>"u")return;let o,c;if(typeof i!="object"&&(i=[i]),Er(i))for(o=0,c=i.length;o<c;o++)a.call(null,i[o],o,i);else{const f=l?Object.getOwnPropertyNames(i):Object.keys(i),d=f.length;let m;for(o=0;o<d;o++)m=f[o],a.call(null,i[m],m,i)}}function Cb(i,a){a=a.toLowerCase();const l=Object.keys(i);let o=l.length,c;for(;o-- >0;)if(c=l[o],a===c.toLowerCase())return c;return null}const pi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rb=i=>!Ll(i)&&i!==pi;function jf(){const{caseless:i}=Rb(this)&&this||{},a={},l=(o,c)=>{const f=i&&Cb(a,c)||c;Es(a[f])&&Es(o)?a[f]=jf(a[f],o):Es(o)?a[f]=jf({},o):Er(o)?a[f]=o.slice():a[f]=o};for(let o=0,c=arguments.length;o<c;o++)arguments[o]&&Ul(arguments[o],l);return a}const W1=(i,a,l,{allOwnKeys:o}={})=>(Ul(a,(c,f)=>{l&&Xe(c)?i[f]=Db(c,l):i[f]=c},{allOwnKeys:o}),i),I1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),t_=(i,a,l,o)=>{i.prototype=Object.create(a.prototype,o),i.prototype.constructor=i,Object.defineProperty(i,"super",{value:a.prototype}),l&&Object.assign(i.prototype,l)},e_=(i,a,l,o)=>{let c,f,d;const m={};if(a=a||{},i==null)return a;do{for(c=Object.getOwnPropertyNames(i),f=c.length;f-- >0;)d=c[f],(!o||o(d,i,a))&&!m[d]&&(a[d]=i[d],m[d]=!0);i=l!==!1&&ed(i)}while(i&&(!l||l(i,a))&&i!==Object.prototype);return a},n_=(i,a,l)=>{i=String(i),(l===void 0||l>i.length)&&(l=i.length),l-=a.length;const o=i.indexOf(a,l);return o!==-1&&o===l},a_=i=>{if(!i)return null;if(Er(i))return i;let a=i.length;if(!Nb(a))return null;const l=new Array(a);for(;a-- >0;)l[a]=i[a];return l},i_=(i=>a=>i&&a instanceof i)(typeof Uint8Array<"u"&&ed(Uint8Array)),r_=(i,a)=>{const o=(i&&i[Symbol.iterator]).call(i);let c;for(;(c=o.next())&&!c.done;){const f=c.value;a.call(i,f[0],f[1])}},l_=(i,a)=>{let l;const o=[];for(;(l=i.exec(a))!==null;)o.push(l);return o},o_=En("HTMLFormElement"),s_=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(l,o,c){return o.toUpperCase()+c}),mg=(({hasOwnProperty:i})=>(a,l)=>i.call(a,l))(Object.prototype),u_=En("RegExp"),Mb=(i,a)=>{const l=Object.getOwnPropertyDescriptors(i),o={};Ul(l,(c,f)=>{let d;(d=a(c,f,i))!==!1&&(o[f]=d||c)}),Object.defineProperties(i,o)},c_=i=>{Mb(i,(a,l)=>{if(Xe(i)&&["arguments","caller","callee"].indexOf(l)!==-1)return!1;const o=i[l];if(Xe(o)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+l+"'")})}})},f_=(i,a)=>{const l={},o=c=>{c.forEach(f=>{l[f]=!0})};return Er(i)?o(i):o(String(i).split(a)),l},d_=()=>{},h_=(i,a)=>i!=null&&Number.isFinite(i=+i)?i:a,mf="abcdefghijklmnopqrstuvwxyz",gg="0123456789",zb={DIGIT:gg,ALPHA:mf,ALPHA_DIGIT:mf+mf.toUpperCase()+gg},p_=(i=16,a=zb.ALPHA_DIGIT)=>{let l="";const{length:o}=a;for(;i--;)l+=a[Math.random()*o|0];return l};function m_(i){return!!(i&&Xe(i.append)&&i[Symbol.toStringTag]==="FormData"&&i[Symbol.iterator])}const g_=i=>{const a=new Array(10),l=(o,c)=>{if(Vs(o)){if(a.indexOf(o)>=0)return;if(!("toJSON"in o)){a[c]=o;const f=Er(o)?[]:{};return Ul(o,(d,m)=>{const v=l(d,c+1);!Ll(v)&&(f[m]=v)}),a[c]=void 0,f}}return o};return l(i,0)},b_=En("AsyncFunction"),v_=i=>i&&(Vs(i)||Xe(i))&&Xe(i.then)&&Xe(i.catch),kb=((i,a)=>i?setImmediate:a?((l,o)=>(pi.addEventListener("message",({source:c,data:f})=>{c===pi&&f===l&&o.length&&o.shift()()},!1),c=>{o.push(c),pi.postMessage(l,"*")}))(`axios@${Math.random()}`,[]):l=>setTimeout(l))(typeof setImmediate=="function",Xe(pi.postMessage)),y_=typeof queueMicrotask<"u"?queueMicrotask.bind(pi):typeof process<"u"&&process.nextTick||kb,z={isArray:Er,isArrayBuffer:wb,isBuffer:q1,isFormData:G1,isArrayBufferView:U1,isString:H1,isNumber:Nb,isBoolean:j1,isObject:Vs,isPlainObject:Es,isReadableStream:K1,isRequest:Q1,isResponse:Z1,isHeaders:F1,isUndefined:Ll,isDate:B1,isFile:V1,isBlob:Y1,isRegExp:u_,isFunction:Xe,isStream:P1,isURLSearchParams:X1,isTypedArray:i_,isFileList:$1,forEach:Ul,merge:jf,extend:W1,trim:J1,stripBOM:I1,inherits:t_,toFlatObject:e_,kindOf:js,kindOfTest:En,endsWith:n_,toArray:a_,forEachEntry:r_,matchAll:l_,isHTMLForm:o_,hasOwnProperty:mg,hasOwnProp:mg,reduceDescriptors:Mb,freezeMethods:c_,toObjectSet:f_,toCamelCase:s_,noop:d_,toFiniteNumber:h_,findKey:Cb,global:pi,isContextDefined:Rb,ALPHABET:zb,generateString:p_,isSpecCompliantForm:m_,toJSONObject:g_,isAsyncFn:b_,isThenable:v_,setImmediate:kb,asap:y_};function Tt(i,a,l,o,c){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=i,this.name="AxiosError",a&&(this.code=a),l&&(this.config=l),o&&(this.request=o),c&&(this.response=c,this.status=c.status?c.status:null)}z.inherits(Tt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:z.toJSONObject(this.config),code:this.code,status:this.status}}});const Lb=Tt.prototype,qb={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(i=>{qb[i]={value:i}});Object.defineProperties(Tt,qb);Object.defineProperty(Lb,"isAxiosError",{value:!0});Tt.from=(i,a,l,o,c,f)=>{const d=Object.create(Lb);return z.toFlatObject(i,d,function(v){return v!==Error.prototype},m=>m!=="isAxiosError"),Tt.call(d,i.message,a,l,o,c),d.cause=i,d.name=i.name,f&&Object.assign(d,f),d};const __=null;function Bf(i){return z.isPlainObject(i)||z.isArray(i)}function Ub(i){return z.endsWith(i,"[]")?i.slice(0,-2):i}function bg(i,a,l){return i?i.concat(a).map(function(c,f){return c=Ub(c),!l&&f?"["+c+"]":c}).join(l?".":""):a}function E_(i){return z.isArray(i)&&!i.some(Bf)}const S_=z.toFlatObject(z,{},null,function(a){return/^is[A-Z]/.test(a)});function Ys(i,a,l){if(!z.isObject(i))throw new TypeError("target must be an object");a=a||new FormData,l=z.toFlatObject(l,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,N){return!z.isUndefined(N[S])});const o=l.metaTokens,c=l.visitor||b,f=l.dots,d=l.indexes,v=(l.Blob||typeof Blob<"u"&&Blob)&&z.isSpecCompliantForm(a);if(!z.isFunction(c))throw new TypeError("visitor must be a function");function g(x){if(x===null)return"";if(z.isDate(x))return x.toISOString();if(!v&&z.isBlob(x))throw new Tt("Blob is not supported. Use a Buffer instead.");return z.isArrayBuffer(x)||z.isTypedArray(x)?v&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function b(x,S,N){let Q=x;if(x&&!N&&typeof x=="object"){if(z.endsWith(S,"{}"))S=o?S:S.slice(0,-2),x=JSON.stringify(x);else if(z.isArray(x)&&E_(x)||(z.isFileList(x)||z.endsWith(S,"[]"))&&(Q=z.toArray(x)))return S=Ub(S),Q.forEach(function(F,tt){!(z.isUndefined(F)||F===null)&&a.append(d===!0?bg([S],tt,f):d===null?S:S+"[]",g(F))}),!1}return Bf(x)?!0:(a.append(bg(N,S,f),g(x)),!1)}const T=[],H=Object.assign(S_,{defaultVisitor:b,convertValue:g,isVisitable:Bf});function k(x,S){if(!z.isUndefined(x)){if(T.indexOf(x)!==-1)throw Error("Circular reference detected in "+S.join("."));T.push(x),z.forEach(x,function(Q,B){(!(z.isUndefined(Q)||Q===null)&&c.call(a,Q,z.isString(B)?B.trim():B,S,H))===!0&&k(Q,S?S.concat(B):[B])}),T.pop()}}if(!z.isObject(i))throw new TypeError("data must be an object");return k(i),a}function vg(i){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g,function(o){return a[o]})}function nd(i,a){this._pairs=[],i&&Ys(i,this,a)}const Hb=nd.prototype;Hb.append=function(a,l){this._pairs.push([a,l])};Hb.toString=function(a){const l=a?function(o){return a.call(this,o,vg)}:vg;return this._pairs.map(function(c){return l(c[0])+"="+l(c[1])},"").join("&")};function A_(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jb(i,a,l){if(!a)return i;const o=l&&l.encode||A_;z.isFunction(l)&&(l={serialize:l});const c=l&&l.serialize;let f;if(c?f=c(a,l):f=z.isURLSearchParams(a)?a.toString():new nd(a,l).toString(o),f){const d=i.indexOf("#");d!==-1&&(i=i.slice(0,d)),i+=(i.indexOf("?")===-1?"?":"&")+f}return i}class yg{constructor(){this.handlers=[]}use(a,l,o){return this.handlers.push({fulfilled:a,rejected:l,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){z.forEach(this.handlers,function(o){o!==null&&a(o)})}}const Bb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},O_=typeof URLSearchParams<"u"?URLSearchParams:nd,T_=typeof FormData<"u"?FormData:null,x_=typeof Blob<"u"?Blob:null,D_={isBrowser:!0,classes:{URLSearchParams:O_,FormData:T_,Blob:x_},protocols:["http","https","file","blob","url","data"]},ad=typeof window<"u"&&typeof document<"u",Vf=typeof navigator=="object"&&navigator||void 0,w_=ad&&(!Vf||["ReactNative","NativeScript","NS"].indexOf(Vf.product)<0),N_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",C_=ad&&window.location.href||"http://localhost",R_=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ad,hasStandardBrowserEnv:w_,hasStandardBrowserWebWorkerEnv:N_,navigator:Vf,origin:C_},Symbol.toStringTag,{value:"Module"})),Oe={...R_,...D_};function M_(i,a){return Ys(i,new Oe.classes.URLSearchParams,Object.assign({visitor:function(l,o,c,f){return Oe.isNode&&z.isBuffer(l)?(this.append(o,l.toString("base64")),!1):f.defaultVisitor.apply(this,arguments)}},a))}function z_(i){return z.matchAll(/\w+|\[(\w*)]/g,i).map(a=>a[0]==="[]"?"":a[1]||a[0])}function k_(i){const a={},l=Object.keys(i);let o;const c=l.length;let f;for(o=0;o<c;o++)f=l[o],a[f]=i[f];return a}function Vb(i){function a(l,o,c,f){let d=l[f++];if(d==="__proto__")return!0;const m=Number.isFinite(+d),v=f>=l.length;return d=!d&&z.isArray(c)?c.length:d,v?(z.hasOwnProp(c,d)?c[d]=[c[d],o]:c[d]=o,!m):((!c[d]||!z.isObject(c[d]))&&(c[d]=[]),a(l,o,c[d],f)&&z.isArray(c[d])&&(c[d]=k_(c[d])),!m)}if(z.isFormData(i)&&z.isFunction(i.entries)){const l={};return z.forEachEntry(i,(o,c)=>{a(z_(o),c,l,0)}),l}return null}function L_(i,a,l){if(z.isString(i))try{return(a||JSON.parse)(i),z.trim(i)}catch(o){if(o.name!=="SyntaxError")throw o}return(l||JSON.stringify)(i)}const Hl={transitional:Bb,adapter:["xhr","http","fetch"],transformRequest:[function(a,l){const o=l.getContentType()||"",c=o.indexOf("application/json")>-1,f=z.isObject(a);if(f&&z.isHTMLForm(a)&&(a=new FormData(a)),z.isFormData(a))return c?JSON.stringify(Vb(a)):a;if(z.isArrayBuffer(a)||z.isBuffer(a)||z.isStream(a)||z.isFile(a)||z.isBlob(a)||z.isReadableStream(a))return a;if(z.isArrayBufferView(a))return a.buffer;if(z.isURLSearchParams(a))return l.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let m;if(f){if(o.indexOf("application/x-www-form-urlencoded")>-1)return M_(a,this.formSerializer).toString();if((m=z.isFileList(a))||o.indexOf("multipart/form-data")>-1){const v=this.env&&this.env.FormData;return Ys(m?{"files[]":a}:a,v&&new v,this.formSerializer)}}return f||c?(l.setContentType("application/json",!1),L_(a)):a}],transformResponse:[function(a){const l=this.transitional||Hl.transitional,o=l&&l.forcedJSONParsing,c=this.responseType==="json";if(z.isResponse(a)||z.isReadableStream(a))return a;if(a&&z.isString(a)&&(o&&!this.responseType||c)){const d=!(l&&l.silentJSONParsing)&&c;try{return JSON.parse(a)}catch(m){if(d)throw m.name==="SyntaxError"?Tt.from(m,Tt.ERR_BAD_RESPONSE,this,null,this.response):m}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Oe.classes.FormData,Blob:Oe.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};z.forEach(["delete","get","head","post","put","patch"],i=>{Hl.headers[i]={}});const q_=z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),U_=i=>{const a={};let l,o,c;return i&&i.split(`
`).forEach(function(d){c=d.indexOf(":"),l=d.substring(0,c).trim().toLowerCase(),o=d.substring(c+1).trim(),!(!l||a[l]&&q_[l])&&(l==="set-cookie"?a[l]?a[l].push(o):a[l]=[o]:a[l]=a[l]?a[l]+", "+o:o)}),a},_g=Symbol("internals");function Tl(i){return i&&String(i).trim().toLowerCase()}function Ss(i){return i===!1||i==null?i:z.isArray(i)?i.map(Ss):String(i)}function H_(i){const a=Object.create(null),l=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=l.exec(i);)a[o[1]]=o[2];return a}const j_=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function gf(i,a,l,o,c){if(z.isFunction(o))return o.call(this,a,l);if(c&&(a=l),!!z.isString(a)){if(z.isString(o))return a.indexOf(o)!==-1;if(z.isRegExp(o))return o.test(a)}}function B_(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,l,o)=>l.toUpperCase()+o)}function V_(i,a){const l=z.toCamelCase(" "+a);["get","set","has"].forEach(o=>{Object.defineProperty(i,o+l,{value:function(c,f,d){return this[o].call(this,a,c,f,d)},configurable:!0})})}let Ue=class{constructor(a){a&&this.set(a)}set(a,l,o){const c=this;function f(m,v,g){const b=Tl(v);if(!b)throw new Error("header name must be a non-empty string");const T=z.findKey(c,b);(!T||c[T]===void 0||g===!0||g===void 0&&c[T]!==!1)&&(c[T||v]=Ss(m))}const d=(m,v)=>z.forEach(m,(g,b)=>f(g,b,v));if(z.isPlainObject(a)||a instanceof this.constructor)d(a,l);else if(z.isString(a)&&(a=a.trim())&&!j_(a))d(U_(a),l);else if(z.isHeaders(a))for(const[m,v]of a.entries())f(v,m,o);else a!=null&&f(l,a,o);return this}get(a,l){if(a=Tl(a),a){const o=z.findKey(this,a);if(o){const c=this[o];if(!l)return c;if(l===!0)return H_(c);if(z.isFunction(l))return l.call(this,c,o);if(z.isRegExp(l))return l.exec(c);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,l){if(a=Tl(a),a){const o=z.findKey(this,a);return!!(o&&this[o]!==void 0&&(!l||gf(this,this[o],o,l)))}return!1}delete(a,l){const o=this;let c=!1;function f(d){if(d=Tl(d),d){const m=z.findKey(o,d);m&&(!l||gf(o,o[m],m,l))&&(delete o[m],c=!0)}}return z.isArray(a)?a.forEach(f):f(a),c}clear(a){const l=Object.keys(this);let o=l.length,c=!1;for(;o--;){const f=l[o];(!a||gf(this,this[f],f,a,!0))&&(delete this[f],c=!0)}return c}normalize(a){const l=this,o={};return z.forEach(this,(c,f)=>{const d=z.findKey(o,f);if(d){l[d]=Ss(c),delete l[f];return}const m=a?B_(f):String(f).trim();m!==f&&delete l[f],l[m]=Ss(c),o[m]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const l=Object.create(null);return z.forEach(this,(o,c)=>{o!=null&&o!==!1&&(l[c]=a&&z.isArray(o)?o.join(", "):o)}),l}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,l])=>a+": "+l).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...l){const o=new this(a);return l.forEach(c=>o.set(c)),o}static accessor(a){const o=(this[_g]=this[_g]={accessors:{}}).accessors,c=this.prototype;function f(d){const m=Tl(d);o[m]||(V_(c,d),o[m]=!0)}return z.isArray(a)?a.forEach(f):f(a),this}};Ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);z.reduceDescriptors(Ue.prototype,({value:i},a)=>{let l=a[0].toUpperCase()+a.slice(1);return{get:()=>i,set(o){this[l]=o}}});z.freezeMethods(Ue);function bf(i,a){const l=this||Hl,o=a||l,c=Ue.from(o.headers);let f=o.data;return z.forEach(i,function(m){f=m.call(l,f,c.normalize(),a?a.status:void 0)}),c.normalize(),f}function Yb(i){return!!(i&&i.__CANCEL__)}function Sr(i,a,l){Tt.call(this,i??"canceled",Tt.ERR_CANCELED,a,l),this.name="CanceledError"}z.inherits(Sr,Tt,{__CANCEL__:!0});function $b(i,a,l){const o=l.config.validateStatus;!l.status||!o||o(l.status)?i(l):a(new Tt("Request failed with status code "+l.status,[Tt.ERR_BAD_REQUEST,Tt.ERR_BAD_RESPONSE][Math.floor(l.status/100)-4],l.config,l.request,l))}function Y_(i){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(i);return a&&a[1]||""}function $_(i,a){i=i||10;const l=new Array(i),o=new Array(i);let c=0,f=0,d;return a=a!==void 0?a:1e3,function(v){const g=Date.now(),b=o[f];d||(d=g),l[c]=v,o[c]=g;let T=f,H=0;for(;T!==c;)H+=l[T++],T=T%i;if(c=(c+1)%i,c===f&&(f=(f+1)%i),g-d<a)return;const k=b&&g-b;return k?Math.round(H*1e3/k):void 0}}function P_(i,a){let l=0,o=1e3/a,c,f;const d=(g,b=Date.now())=>{l=b,c=null,f&&(clearTimeout(f),f=null),i.apply(null,g)};return[(...g)=>{const b=Date.now(),T=b-l;T>=o?d(g,b):(c=g,f||(f=setTimeout(()=>{f=null,d(c)},o-T)))},()=>c&&d(c)]}const Ns=(i,a,l=3)=>{let o=0;const c=$_(50,250);return P_(f=>{const d=f.loaded,m=f.lengthComputable?f.total:void 0,v=d-o,g=c(v),b=d<=m;o=d;const T={loaded:d,total:m,progress:m?d/m:void 0,bytes:v,rate:g||void 0,estimated:g&&m&&b?(m-d)/g:void 0,event:f,lengthComputable:m!=null,[a?"download":"upload"]:!0};i(T)},l)},Eg=(i,a)=>{const l=i!=null;return[o=>a[0]({lengthComputable:l,total:i,loaded:o}),a[1]]},Sg=i=>(...a)=>z.asap(()=>i(...a)),G_=Oe.hasStandardBrowserEnv?((i,a)=>l=>(l=new URL(l,Oe.origin),i.protocol===l.protocol&&i.host===l.host&&(a||i.port===l.port)))(new URL(Oe.origin),Oe.navigator&&/(msie|trident)/i.test(Oe.navigator.userAgent)):()=>!0,X_=Oe.hasStandardBrowserEnv?{write(i,a,l,o,c,f){const d=[i+"="+encodeURIComponent(a)];z.isNumber(l)&&d.push("expires="+new Date(l).toGMTString()),z.isString(o)&&d.push("path="+o),z.isString(c)&&d.push("domain="+c),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read(i){const a=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove(i){this.write(i,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function K_(i){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function Q_(i,a){return a?i.replace(/\/?\/$/,"")+"/"+a.replace(/^\/+/,""):i}function Pb(i,a){return i&&!K_(a)?Q_(i,a):a}const Ag=i=>i instanceof Ue?{...i}:i;function _i(i,a){a=a||{};const l={};function o(g,b,T,H){return z.isPlainObject(g)&&z.isPlainObject(b)?z.merge.call({caseless:H},g,b):z.isPlainObject(b)?z.merge({},b):z.isArray(b)?b.slice():b}function c(g,b,T,H){if(z.isUndefined(b)){if(!z.isUndefined(g))return o(void 0,g,T,H)}else return o(g,b,T,H)}function f(g,b){if(!z.isUndefined(b))return o(void 0,b)}function d(g,b){if(z.isUndefined(b)){if(!z.isUndefined(g))return o(void 0,g)}else return o(void 0,b)}function m(g,b,T){if(T in a)return o(g,b);if(T in i)return o(void 0,g)}const v={url:f,method:f,data:f,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:m,headers:(g,b,T)=>c(Ag(g),Ag(b),T,!0)};return z.forEach(Object.keys(Object.assign({},i,a)),function(b){const T=v[b]||c,H=T(i[b],a[b],b);z.isUndefined(H)&&T!==m||(l[b]=H)}),l}const Gb=i=>{const a=_i({},i);let{data:l,withXSRFToken:o,xsrfHeaderName:c,xsrfCookieName:f,headers:d,auth:m}=a;a.headers=d=Ue.from(d),a.url=jb(Pb(a.baseURL,a.url),i.params,i.paramsSerializer),m&&d.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let v;if(z.isFormData(l)){if(Oe.hasStandardBrowserEnv||Oe.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((v=d.getContentType())!==!1){const[g,...b]=v?v.split(";").map(T=>T.trim()).filter(Boolean):[];d.setContentType([g||"multipart/form-data",...b].join("; "))}}if(Oe.hasStandardBrowserEnv&&(o&&z.isFunction(o)&&(o=o(a)),o||o!==!1&&G_(a.url))){const g=c&&f&&X_.read(f);g&&d.set(c,g)}return a},Z_=typeof XMLHttpRequest<"u",F_=Z_&&function(i){return new Promise(function(l,o){const c=Gb(i);let f=c.data;const d=Ue.from(c.headers).normalize();let{responseType:m,onUploadProgress:v,onDownloadProgress:g}=c,b,T,H,k,x;function S(){k&&k(),x&&x(),c.cancelToken&&c.cancelToken.unsubscribe(b),c.signal&&c.signal.removeEventListener("abort",b)}let N=new XMLHttpRequest;N.open(c.method.toUpperCase(),c.url,!0),N.timeout=c.timeout;function Q(){if(!N)return;const F=Ue.from("getAllResponseHeaders"in N&&N.getAllResponseHeaders()),L={data:!m||m==="text"||m==="json"?N.responseText:N.response,status:N.status,statusText:N.statusText,headers:F,config:i,request:N};$b(function(mt){l(mt),S()},function(mt){o(mt),S()},L),N=null}"onloadend"in N?N.onloadend=Q:N.onreadystatechange=function(){!N||N.readyState!==4||N.status===0&&!(N.responseURL&&N.responseURL.indexOf("file:")===0)||setTimeout(Q)},N.onabort=function(){N&&(o(new Tt("Request aborted",Tt.ECONNABORTED,i,N)),N=null)},N.onerror=function(){o(new Tt("Network Error",Tt.ERR_NETWORK,i,N)),N=null},N.ontimeout=function(){let tt=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const L=c.transitional||Bb;c.timeoutErrorMessage&&(tt=c.timeoutErrorMessage),o(new Tt(tt,L.clarifyTimeoutError?Tt.ETIMEDOUT:Tt.ECONNABORTED,i,N)),N=null},f===void 0&&d.setContentType(null),"setRequestHeader"in N&&z.forEach(d.toJSON(),function(tt,L){N.setRequestHeader(L,tt)}),z.isUndefined(c.withCredentials)||(N.withCredentials=!!c.withCredentials),m&&m!=="json"&&(N.responseType=c.responseType),g&&([H,x]=Ns(g,!0),N.addEventListener("progress",H)),v&&N.upload&&([T,k]=Ns(v),N.upload.addEventListener("progress",T),N.upload.addEventListener("loadend",k)),(c.cancelToken||c.signal)&&(b=F=>{N&&(o(!F||F.type?new Sr(null,i,N):F),N.abort(),N=null)},c.cancelToken&&c.cancelToken.subscribe(b),c.signal&&(c.signal.aborted?b():c.signal.addEventListener("abort",b)));const B=Y_(c.url);if(B&&Oe.protocols.indexOf(B)===-1){o(new Tt("Unsupported protocol "+B+":",Tt.ERR_BAD_REQUEST,i));return}N.send(f||null)})},J_=(i,a)=>{const{length:l}=i=i?i.filter(Boolean):[];if(a||l){let o=new AbortController,c;const f=function(g){if(!c){c=!0,m();const b=g instanceof Error?g:this.reason;o.abort(b instanceof Tt?b:new Sr(b instanceof Error?b.message:b))}};let d=a&&setTimeout(()=>{d=null,f(new Tt(`timeout ${a} of ms exceeded`,Tt.ETIMEDOUT))},a);const m=()=>{i&&(d&&clearTimeout(d),d=null,i.forEach(g=>{g.unsubscribe?g.unsubscribe(f):g.removeEventListener("abort",f)}),i=null)};i.forEach(g=>g.addEventListener("abort",f));const{signal:v}=o;return v.unsubscribe=()=>z.asap(m),v}},W_=function*(i,a){let l=i.byteLength;if(l<a){yield i;return}let o=0,c;for(;o<l;)c=o+a,yield i.slice(o,c),o=c},I_=async function*(i,a){for await(const l of tE(i))yield*W_(l,a)},tE=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const a=i.getReader();try{for(;;){const{done:l,value:o}=await a.read();if(l)break;yield o}}finally{await a.cancel()}},Og=(i,a,l,o)=>{const c=I_(i,a);let f=0,d,m=v=>{d||(d=!0,o&&o(v))};return new ReadableStream({async pull(v){try{const{done:g,value:b}=await c.next();if(g){m(),v.close();return}let T=b.byteLength;if(l){let H=f+=T;l(H)}v.enqueue(new Uint8Array(b))}catch(g){throw m(g),g}},cancel(v){return m(v),c.return()}},{highWaterMark:2})},$s=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Xb=$s&&typeof ReadableStream=="function",eE=$s&&(typeof TextEncoder=="function"?(i=>a=>i.encode(a))(new TextEncoder):async i=>new Uint8Array(await new Response(i).arrayBuffer())),Kb=(i,...a)=>{try{return!!i(...a)}catch{return!1}},nE=Xb&&Kb(()=>{let i=!1;const a=new Request(Oe.origin,{body:new ReadableStream,method:"POST",get duplex(){return i=!0,"half"}}).headers.has("Content-Type");return i&&!a}),Tg=64*1024,Yf=Xb&&Kb(()=>z.isReadableStream(new Response("").body)),Cs={stream:Yf&&(i=>i.body)};$s&&(i=>{["text","arrayBuffer","blob","formData","stream"].forEach(a=>{!Cs[a]&&(Cs[a]=z.isFunction(i[a])?l=>l[a]():(l,o)=>{throw new Tt(`Response type '${a}' is not supported`,Tt.ERR_NOT_SUPPORT,o)})})})(new Response);const aE=async i=>{if(i==null)return 0;if(z.isBlob(i))return i.size;if(z.isSpecCompliantForm(i))return(await new Request(Oe.origin,{method:"POST",body:i}).arrayBuffer()).byteLength;if(z.isArrayBufferView(i)||z.isArrayBuffer(i))return i.byteLength;if(z.isURLSearchParams(i)&&(i=i+""),z.isString(i))return(await eE(i)).byteLength},iE=async(i,a)=>{const l=z.toFiniteNumber(i.getContentLength());return l??aE(a)},rE=$s&&(async i=>{let{url:a,method:l,data:o,signal:c,cancelToken:f,timeout:d,onDownloadProgress:m,onUploadProgress:v,responseType:g,headers:b,withCredentials:T="same-origin",fetchOptions:H}=Gb(i);g=g?(g+"").toLowerCase():"text";let k=J_([c,f&&f.toAbortSignal()],d),x;const S=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let N;try{if(v&&nE&&l!=="get"&&l!=="head"&&(N=await iE(b,o))!==0){let L=new Request(a,{method:"POST",body:o,duplex:"half"}),it;if(z.isFormData(o)&&(it=L.headers.get("content-type"))&&b.setContentType(it),L.body){const[mt,yt]=Eg(N,Ns(Sg(v)));o=Og(L.body,Tg,mt,yt)}}z.isString(T)||(T=T?"include":"omit");const Q="credentials"in Request.prototype;x=new Request(a,{...H,signal:k,method:l.toUpperCase(),headers:b.normalize().toJSON(),body:o,duplex:"half",credentials:Q?T:void 0});let B=await fetch(x);const F=Yf&&(g==="stream"||g==="response");if(Yf&&(m||F&&S)){const L={};["status","statusText","headers"].forEach(K=>{L[K]=B[K]});const it=z.toFiniteNumber(B.headers.get("content-length")),[mt,yt]=m&&Eg(it,Ns(Sg(m),!0))||[];B=new Response(Og(B.body,Tg,mt,()=>{yt&&yt(),S&&S()}),L)}g=g||"text";let tt=await Cs[z.findKey(Cs,g)||"text"](B,i);return!F&&S&&S(),await new Promise((L,it)=>{$b(L,it,{data:tt,headers:Ue.from(B.headers),status:B.status,statusText:B.statusText,config:i,request:x})})}catch(Q){throw S&&S(),Q&&Q.name==="TypeError"&&/fetch/i.test(Q.message)?Object.assign(new Tt("Network Error",Tt.ERR_NETWORK,i,x),{cause:Q.cause||Q}):Tt.from(Q,Q&&Q.code,i,x)}}),$f={http:__,xhr:F_,fetch:rE};z.forEach($f,(i,a)=>{if(i){try{Object.defineProperty(i,"name",{value:a})}catch{}Object.defineProperty(i,"adapterName",{value:a})}});const xg=i=>`- ${i}`,lE=i=>z.isFunction(i)||i===null||i===!1,Qb={getAdapter:i=>{i=z.isArray(i)?i:[i];const{length:a}=i;let l,o;const c={};for(let f=0;f<a;f++){l=i[f];let d;if(o=l,!lE(l)&&(o=$f[(d=String(l)).toLowerCase()],o===void 0))throw new Tt(`Unknown adapter '${d}'`);if(o)break;c[d||"#"+f]=o}if(!o){const f=Object.entries(c).map(([m,v])=>`adapter ${m} `+(v===!1?"is not supported by the environment":"is not available in the build"));let d=a?f.length>1?`since :
`+f.map(xg).join(`
`):" "+xg(f[0]):"as no adapter specified";throw new Tt("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return o},adapters:$f};function vf(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Sr(null,i)}function Dg(i){return vf(i),i.headers=Ue.from(i.headers),i.data=bf.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Qb.getAdapter(i.adapter||Hl.adapter)(i).then(function(o){return vf(i),o.data=bf.call(i,i.transformResponse,o),o.headers=Ue.from(o.headers),o},function(o){return Yb(o)||(vf(i),o&&o.response&&(o.response.data=bf.call(i,i.transformResponse,o.response),o.response.headers=Ue.from(o.response.headers))),Promise.reject(o)})}const Zb="1.7.9",Ps={};["object","boolean","number","function","string","symbol"].forEach((i,a)=>{Ps[i]=function(o){return typeof o===i||"a"+(a<1?"n ":" ")+i}});const wg={};Ps.transitional=function(a,l,o){function c(f,d){return"[Axios v"+Zb+"] Transitional option '"+f+"'"+d+(o?". "+o:"")}return(f,d,m)=>{if(a===!1)throw new Tt(c(d," has been removed"+(l?" in "+l:"")),Tt.ERR_DEPRECATED);return l&&!wg[d]&&(wg[d]=!0,console.warn(c(d," has been deprecated since v"+l+" and will be removed in the near future"))),a?a(f,d,m):!0}};Ps.spelling=function(a){return(l,o)=>(console.warn(`${o} is likely a misspelling of ${a}`),!0)};function oE(i,a,l){if(typeof i!="object")throw new Tt("options must be an object",Tt.ERR_BAD_OPTION_VALUE);const o=Object.keys(i);let c=o.length;for(;c-- >0;){const f=o[c],d=a[f];if(d){const m=i[f],v=m===void 0||d(m,f,i);if(v!==!0)throw new Tt("option "+f+" must be "+v,Tt.ERR_BAD_OPTION_VALUE);continue}if(l!==!0)throw new Tt("Unknown option "+f,Tt.ERR_BAD_OPTION)}}const As={assertOptions:oE,validators:Ps},Nn=As.validators;let vi=class{constructor(a){this.defaults=a,this.interceptors={request:new yg,response:new yg}}async request(a,l){try{return await this._request(a,l)}catch(o){if(o instanceof Error){let c={};Error.captureStackTrace?Error.captureStackTrace(c):c=new Error;const f=c.stack?c.stack.replace(/^.+\n/,""):"";try{o.stack?f&&!String(o.stack).endsWith(f.replace(/^.+\n.+\n/,""))&&(o.stack+=`
`+f):o.stack=f}catch{}}throw o}}_request(a,l){typeof a=="string"?(l=l||{},l.url=a):l=a||{},l=_i(this.defaults,l);const{transitional:o,paramsSerializer:c,headers:f}=l;o!==void 0&&As.assertOptions(o,{silentJSONParsing:Nn.transitional(Nn.boolean),forcedJSONParsing:Nn.transitional(Nn.boolean),clarifyTimeoutError:Nn.transitional(Nn.boolean)},!1),c!=null&&(z.isFunction(c)?l.paramsSerializer={serialize:c}:As.assertOptions(c,{encode:Nn.function,serialize:Nn.function},!0)),As.assertOptions(l,{baseUrl:Nn.spelling("baseURL"),withXsrfToken:Nn.spelling("withXSRFToken")},!0),l.method=(l.method||this.defaults.method||"get").toLowerCase();let d=f&&z.merge(f.common,f[l.method]);f&&z.forEach(["delete","get","head","post","put","patch","common"],x=>{delete f[x]}),l.headers=Ue.concat(d,f);const m=[];let v=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(l)===!1||(v=v&&S.synchronous,m.unshift(S.fulfilled,S.rejected))});const g=[];this.interceptors.response.forEach(function(S){g.push(S.fulfilled,S.rejected)});let b,T=0,H;if(!v){const x=[Dg.bind(this),void 0];for(x.unshift.apply(x,m),x.push.apply(x,g),H=x.length,b=Promise.resolve(l);T<H;)b=b.then(x[T++],x[T++]);return b}H=m.length;let k=l;for(T=0;T<H;){const x=m[T++],S=m[T++];try{k=x(k)}catch(N){S.call(this,N);break}}try{b=Dg.call(this,k)}catch(x){return Promise.reject(x)}for(T=0,H=g.length;T<H;)b=b.then(g[T++],g[T++]);return b}getUri(a){a=_i(this.defaults,a);const l=Pb(a.baseURL,a.url);return jb(l,a.params,a.paramsSerializer)}};z.forEach(["delete","get","head","options"],function(a){vi.prototype[a]=function(l,o){return this.request(_i(o||{},{method:a,url:l,data:(o||{}).data}))}});z.forEach(["post","put","patch"],function(a){function l(o){return function(f,d,m){return this.request(_i(m||{},{method:a,headers:o?{"Content-Type":"multipart/form-data"}:{},url:f,data:d}))}}vi.prototype[a]=l(),vi.prototype[a+"Form"]=l(!0)});let sE=class Fb{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let l;this.promise=new Promise(function(f){l=f});const o=this;this.promise.then(c=>{if(!o._listeners)return;let f=o._listeners.length;for(;f-- >0;)o._listeners[f](c);o._listeners=null}),this.promise.then=c=>{let f;const d=new Promise(m=>{o.subscribe(m),f=m}).then(c);return d.cancel=function(){o.unsubscribe(f)},d},a(function(f,d,m){o.reason||(o.reason=new Sr(f,d,m),l(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const l=this._listeners.indexOf(a);l!==-1&&this._listeners.splice(l,1)}toAbortSignal(){const a=new AbortController,l=o=>{a.abort(o)};return this.subscribe(l),a.signal.unsubscribe=()=>this.unsubscribe(l),a.signal}static source(){let a;return{token:new Fb(function(c){a=c}),cancel:a}}};function uE(i){return function(l){return i.apply(null,l)}}function cE(i){return z.isObject(i)&&i.isAxiosError===!0}const Pf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pf).forEach(([i,a])=>{Pf[a]=i});function Jb(i){const a=new vi(i),l=Db(vi.prototype.request,a);return z.extend(l,vi.prototype,a,{allOwnKeys:!0}),z.extend(l,a,null,{allOwnKeys:!0}),l.create=function(c){return Jb(_i(i,c))},l}const $t=Jb(Hl);$t.Axios=vi;$t.CanceledError=Sr;$t.CancelToken=sE;$t.isCancel=Yb;$t.VERSION=Zb;$t.toFormData=Ys;$t.AxiosError=Tt;$t.Cancel=$t.CanceledError;$t.all=function(a){return Promise.all(a)};$t.spread=uE;$t.isAxiosError=cE;$t.mergeConfig=_i;$t.AxiosHeaders=Ue;$t.formToJSON=i=>Vb(z.isHTMLForm(i)?new FormData(i):i);$t.getAdapter=Qb.getAdapter;$t.HttpStatusCode=Pf;$t.default=$t;const{Axios:nx,AxiosError:ax,CanceledError:ix,isCancel:rx,CancelToken:lx,VERSION:ox,all:sx,Cancel:ux,isAxiosError:cx,spread:fx,toFormData:dx,AxiosHeaders:hx,HttpStatusCode:px,formToJSON:mx,getAdapter:gx,mergeConfig:bx}=$t;var Ne="top",Ke="bottom",Qe="right",Ce="left",Gs="auto",Ar=[Ne,Ke,Qe,Ce],Ei="start",mr="end",Wb="clippingParents",id="viewport",fr="popper",Ib="reference",Gf=Ar.reduce(function(i,a){return i.concat([a+"-"+Ei,a+"-"+mr])},[]),rd=[].concat(Ar,[Gs]).reduce(function(i,a){return i.concat([a,a+"-"+Ei,a+"-"+mr])},[]),t0="beforeRead",e0="read",n0="afterRead",a0="beforeMain",i0="main",r0="afterMain",l0="beforeWrite",o0="write",s0="afterWrite",u0=[t0,e0,n0,a0,i0,r0,l0,o0,s0];function Ln(i){return i?(i.nodeName||"").toLowerCase():null}function Ze(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var a=i.ownerDocument;return a&&a.defaultView||window}return i}function Si(i){var a=Ze(i).Element;return i instanceof a||i instanceof Element}function cn(i){var a=Ze(i).HTMLElement;return i instanceof a||i instanceof HTMLElement}function ld(i){if(typeof ShadowRoot>"u")return!1;var a=Ze(i).ShadowRoot;return i instanceof a||i instanceof ShadowRoot}function fE(i){var a=i.state;Object.keys(a.elements).forEach(function(l){var o=a.styles[l]||{},c=a.attributes[l]||{},f=a.elements[l];!cn(f)||!Ln(f)||(Object.assign(f.style,o),Object.keys(c).forEach(function(d){var m=c[d];m===!1?f.removeAttribute(d):f.setAttribute(d,m===!0?"":m)}))})}function dE(i){var a=i.state,l={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,l.popper),a.styles=l,a.elements.arrow&&Object.assign(a.elements.arrow.style,l.arrow),function(){Object.keys(a.elements).forEach(function(o){var c=a.elements[o],f=a.attributes[o]||{},d=Object.keys(a.styles.hasOwnProperty(o)?a.styles[o]:l[o]),m=d.reduce(function(v,g){return v[g]="",v},{});!cn(c)||!Ln(c)||(Object.assign(c.style,m),Object.keys(f).forEach(function(v){c.removeAttribute(v)}))})}}const od={name:"applyStyles",enabled:!0,phase:"write",fn:fE,effect:dE,requires:["computeStyles"]};function zn(i){return i.split("-")[0]}var yi=Math.max,Rs=Math.min,gr=Math.round;function Xf(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function c0(){return!/^((?!chrome|android).)*safari/i.test(Xf())}function br(i,a,l){a===void 0&&(a=!1),l===void 0&&(l=!1);var o=i.getBoundingClientRect(),c=1,f=1;a&&cn(i)&&(c=i.offsetWidth>0&&gr(o.width)/i.offsetWidth||1,f=i.offsetHeight>0&&gr(o.height)/i.offsetHeight||1);var d=Si(i)?Ze(i):window,m=d.visualViewport,v=!c0()&&l,g=(o.left+(v&&m?m.offsetLeft:0))/c,b=(o.top+(v&&m?m.offsetTop:0))/f,T=o.width/c,H=o.height/f;return{width:T,height:H,top:b,right:g+T,bottom:b+H,left:g,x:g,y:b}}function sd(i){var a=br(i),l=i.offsetWidth,o=i.offsetHeight;return Math.abs(a.width-l)<=1&&(l=a.width),Math.abs(a.height-o)<=1&&(o=a.height),{x:i.offsetLeft,y:i.offsetTop,width:l,height:o}}function f0(i,a){var l=a.getRootNode&&a.getRootNode();if(i.contains(a))return!0;if(l&&ld(l)){var o=a;do{if(o&&i.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function oa(i){return Ze(i).getComputedStyle(i)}function hE(i){return["table","td","th"].indexOf(Ln(i))>=0}function ja(i){return((Si(i)?i.ownerDocument:i.document)||window.document).documentElement}function Xs(i){return Ln(i)==="html"?i:i.assignedSlot||i.parentNode||(ld(i)?i.host:null)||ja(i)}function Ng(i){return!cn(i)||oa(i).position==="fixed"?null:i.offsetParent}function pE(i){var a=/firefox/i.test(Xf()),l=/Trident/i.test(Xf());if(l&&cn(i)){var o=oa(i);if(o.position==="fixed")return null}var c=Xs(i);for(ld(c)&&(c=c.host);cn(c)&&["html","body"].indexOf(Ln(c))<0;){var f=oa(c);if(f.transform!=="none"||f.perspective!=="none"||f.contain==="paint"||["transform","perspective"].indexOf(f.willChange)!==-1||a&&f.willChange==="filter"||a&&f.filter&&f.filter!=="none")return c;c=c.parentNode}return null}function jl(i){for(var a=Ze(i),l=Ng(i);l&&hE(l)&&oa(l).position==="static";)l=Ng(l);return l&&(Ln(l)==="html"||Ln(l)==="body"&&oa(l).position==="static")?a:l||pE(i)||a}function ud(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function Ml(i,a,l){return yi(i,Rs(a,l))}function mE(i,a,l){var o=Ml(i,a,l);return o>l?l:o}function d0(){return{top:0,right:0,bottom:0,left:0}}function h0(i){return Object.assign({},d0(),i)}function p0(i,a){return a.reduce(function(l,o){return l[o]=i,l},{})}var gE=function(a,l){return a=typeof a=="function"?a(Object.assign({},l.rects,{placement:l.placement})):a,h0(typeof a!="number"?a:p0(a,Ar))};function bE(i){var a,l=i.state,o=i.name,c=i.options,f=l.elements.arrow,d=l.modifiersData.popperOffsets,m=zn(l.placement),v=ud(m),g=[Ce,Qe].indexOf(m)>=0,b=g?"height":"width";if(!(!f||!d)){var T=gE(c.padding,l),H=sd(f),k=v==="y"?Ne:Ce,x=v==="y"?Ke:Qe,S=l.rects.reference[b]+l.rects.reference[v]-d[v]-l.rects.popper[b],N=d[v]-l.rects.reference[v],Q=jl(f),B=Q?v==="y"?Q.clientHeight||0:Q.clientWidth||0:0,F=S/2-N/2,tt=T[k],L=B-H[b]-T[x],it=B/2-H[b]/2+F,mt=Ml(tt,it,L),yt=v;l.modifiersData[o]=(a={},a[yt]=mt,a.centerOffset=mt-it,a)}}function vE(i){var a=i.state,l=i.options,o=l.element,c=o===void 0?"[data-popper-arrow]":o;c!=null&&(typeof c=="string"&&(c=a.elements.popper.querySelector(c),!c)||f0(a.elements.popper,c)&&(a.elements.arrow=c))}const m0={name:"arrow",enabled:!0,phase:"main",fn:bE,effect:vE,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function vr(i){return i.split("-")[1]}var yE={top:"auto",right:"auto",bottom:"auto",left:"auto"};function _E(i,a){var l=i.x,o=i.y,c=a.devicePixelRatio||1;return{x:gr(l*c)/c||0,y:gr(o*c)/c||0}}function Cg(i){var a,l=i.popper,o=i.popperRect,c=i.placement,f=i.variation,d=i.offsets,m=i.position,v=i.gpuAcceleration,g=i.adaptive,b=i.roundOffsets,T=i.isFixed,H=d.x,k=H===void 0?0:H,x=d.y,S=x===void 0?0:x,N=typeof b=="function"?b({x:k,y:S}):{x:k,y:S};k=N.x,S=N.y;var Q=d.hasOwnProperty("x"),B=d.hasOwnProperty("y"),F=Ce,tt=Ne,L=window;if(g){var it=jl(l),mt="clientHeight",yt="clientWidth";if(it===Ze(l)&&(it=ja(l),oa(it).position!=="static"&&m==="absolute"&&(mt="scrollHeight",yt="scrollWidth")),it=it,c===Ne||(c===Ce||c===Qe)&&f===mr){tt=Ke;var K=T&&it===L&&L.visualViewport?L.visualViewport.height:it[mt];S-=K-o.height,S*=v?1:-1}if(c===Ce||(c===Ne||c===Ke)&&f===mr){F=Qe;var et=T&&it===L&&L.visualViewport?L.visualViewport.width:it[yt];k-=et-o.width,k*=v?1:-1}}var Rt=Object.assign({position:m},g&&yE),ut=b===!0?_E({x:k,y:S},Ze(l)):{x:k,y:S};if(k=ut.x,S=ut.y,v){var ct;return Object.assign({},Rt,(ct={},ct[tt]=B?"0":"",ct[F]=Q?"0":"",ct.transform=(L.devicePixelRatio||1)<=1?"translate("+k+"px, "+S+"px)":"translate3d("+k+"px, "+S+"px, 0)",ct))}return Object.assign({},Rt,(a={},a[tt]=B?S+"px":"",a[F]=Q?k+"px":"",a.transform="",a))}function EE(i){var a=i.state,l=i.options,o=l.gpuAcceleration,c=o===void 0?!0:o,f=l.adaptive,d=f===void 0?!0:f,m=l.roundOffsets,v=m===void 0?!0:m,g={placement:zn(a.placement),variation:vr(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:c,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,Cg(Object.assign({},g,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:d,roundOffsets:v})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,Cg(Object.assign({},g,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:v})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const cd={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:EE,data:{}};var os={passive:!0};function SE(i){var a=i.state,l=i.instance,o=i.options,c=o.scroll,f=c===void 0?!0:c,d=o.resize,m=d===void 0?!0:d,v=Ze(a.elements.popper),g=[].concat(a.scrollParents.reference,a.scrollParents.popper);return f&&g.forEach(function(b){b.addEventListener("scroll",l.update,os)}),m&&v.addEventListener("resize",l.update,os),function(){f&&g.forEach(function(b){b.removeEventListener("scroll",l.update,os)}),m&&v.removeEventListener("resize",l.update,os)}}const fd={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:SE,data:{}};var AE={left:"right",right:"left",bottom:"top",top:"bottom"};function Os(i){return i.replace(/left|right|bottom|top/g,function(a){return AE[a]})}var OE={start:"end",end:"start"};function Rg(i){return i.replace(/start|end/g,function(a){return OE[a]})}function dd(i){var a=Ze(i),l=a.pageXOffset,o=a.pageYOffset;return{scrollLeft:l,scrollTop:o}}function hd(i){return br(ja(i)).left+dd(i).scrollLeft}function TE(i,a){var l=Ze(i),o=ja(i),c=l.visualViewport,f=o.clientWidth,d=o.clientHeight,m=0,v=0;if(c){f=c.width,d=c.height;var g=c0();(g||!g&&a==="fixed")&&(m=c.offsetLeft,v=c.offsetTop)}return{width:f,height:d,x:m+hd(i),y:v}}function xE(i){var a,l=ja(i),o=dd(i),c=(a=i.ownerDocument)==null?void 0:a.body,f=yi(l.scrollWidth,l.clientWidth,c?c.scrollWidth:0,c?c.clientWidth:0),d=yi(l.scrollHeight,l.clientHeight,c?c.scrollHeight:0,c?c.clientHeight:0),m=-o.scrollLeft+hd(i),v=-o.scrollTop;return oa(c||l).direction==="rtl"&&(m+=yi(l.clientWidth,c?c.clientWidth:0)-f),{width:f,height:d,x:m,y:v}}function pd(i){var a=oa(i),l=a.overflow,o=a.overflowX,c=a.overflowY;return/auto|scroll|overlay|hidden/.test(l+c+o)}function g0(i){return["html","body","#document"].indexOf(Ln(i))>=0?i.ownerDocument.body:cn(i)&&pd(i)?i:g0(Xs(i))}function zl(i,a){var l;a===void 0&&(a=[]);var o=g0(i),c=o===((l=i.ownerDocument)==null?void 0:l.body),f=Ze(o),d=c?[f].concat(f.visualViewport||[],pd(o)?o:[]):o,m=a.concat(d);return c?m:m.concat(zl(Xs(d)))}function Kf(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function DE(i,a){var l=br(i,!1,a==="fixed");return l.top=l.top+i.clientTop,l.left=l.left+i.clientLeft,l.bottom=l.top+i.clientHeight,l.right=l.left+i.clientWidth,l.width=i.clientWidth,l.height=i.clientHeight,l.x=l.left,l.y=l.top,l}function Mg(i,a,l){return a===id?Kf(TE(i,l)):Si(a)?DE(a,l):Kf(xE(ja(i)))}function wE(i){var a=zl(Xs(i)),l=["absolute","fixed"].indexOf(oa(i).position)>=0,o=l&&cn(i)?jl(i):i;return Si(o)?a.filter(function(c){return Si(c)&&f0(c,o)&&Ln(c)!=="body"}):[]}function NE(i,a,l,o){var c=a==="clippingParents"?wE(i):[].concat(a),f=[].concat(c,[l]),d=f[0],m=f.reduce(function(v,g){var b=Mg(i,g,o);return v.top=yi(b.top,v.top),v.right=Rs(b.right,v.right),v.bottom=Rs(b.bottom,v.bottom),v.left=yi(b.left,v.left),v},Mg(i,d,o));return m.width=m.right-m.left,m.height=m.bottom-m.top,m.x=m.left,m.y=m.top,m}function b0(i){var a=i.reference,l=i.element,o=i.placement,c=o?zn(o):null,f=o?vr(o):null,d=a.x+a.width/2-l.width/2,m=a.y+a.height/2-l.height/2,v;switch(c){case Ne:v={x:d,y:a.y-l.height};break;case Ke:v={x:d,y:a.y+a.height};break;case Qe:v={x:a.x+a.width,y:m};break;case Ce:v={x:a.x-l.width,y:m};break;default:v={x:a.x,y:a.y}}var g=c?ud(c):null;if(g!=null){var b=g==="y"?"height":"width";switch(f){case Ei:v[g]=v[g]-(a[b]/2-l[b]/2);break;case mr:v[g]=v[g]+(a[b]/2-l[b]/2);break}}return v}function yr(i,a){a===void 0&&(a={});var l=a,o=l.placement,c=o===void 0?i.placement:o,f=l.strategy,d=f===void 0?i.strategy:f,m=l.boundary,v=m===void 0?Wb:m,g=l.rootBoundary,b=g===void 0?id:g,T=l.elementContext,H=T===void 0?fr:T,k=l.altBoundary,x=k===void 0?!1:k,S=l.padding,N=S===void 0?0:S,Q=h0(typeof N!="number"?N:p0(N,Ar)),B=H===fr?Ib:fr,F=i.rects.popper,tt=i.elements[x?B:H],L=NE(Si(tt)?tt:tt.contextElement||ja(i.elements.popper),v,b,d),it=br(i.elements.reference),mt=b0({reference:it,element:F,placement:c}),yt=Kf(Object.assign({},F,mt)),K=H===fr?yt:it,et={top:L.top-K.top+Q.top,bottom:K.bottom-L.bottom+Q.bottom,left:L.left-K.left+Q.left,right:K.right-L.right+Q.right},Rt=i.modifiersData.offset;if(H===fr&&Rt){var ut=Rt[c];Object.keys(et).forEach(function(ct){var Dt=[Qe,Ke].indexOf(ct)>=0?1:-1,At=[Ne,Ke].indexOf(ct)>=0?"y":"x";et[ct]+=ut[At]*Dt})}return et}function CE(i,a){a===void 0&&(a={});var l=a,o=l.placement,c=l.boundary,f=l.rootBoundary,d=l.padding,m=l.flipVariations,v=l.allowedAutoPlacements,g=v===void 0?rd:v,b=vr(o),T=b?m?Gf:Gf.filter(function(x){return vr(x)===b}):Ar,H=T.filter(function(x){return g.indexOf(x)>=0});H.length===0&&(H=T);var k=H.reduce(function(x,S){return x[S]=yr(i,{placement:S,boundary:c,rootBoundary:f,padding:d})[zn(S)],x},{});return Object.keys(k).sort(function(x,S){return k[x]-k[S]})}function RE(i){if(zn(i)===Gs)return[];var a=Os(i);return[Rg(i),a,Rg(a)]}function ME(i){var a=i.state,l=i.options,o=i.name;if(!a.modifiersData[o]._skip){for(var c=l.mainAxis,f=c===void 0?!0:c,d=l.altAxis,m=d===void 0?!0:d,v=l.fallbackPlacements,g=l.padding,b=l.boundary,T=l.rootBoundary,H=l.altBoundary,k=l.flipVariations,x=k===void 0?!0:k,S=l.allowedAutoPlacements,N=a.options.placement,Q=zn(N),B=Q===N,F=v||(B||!x?[Os(N)]:RE(N)),tt=[N].concat(F).reduce(function(I,_t){return I.concat(zn(_t)===Gs?CE(a,{placement:_t,boundary:b,rootBoundary:T,padding:g,flipVariations:x,allowedAutoPlacements:S}):_t)},[]),L=a.rects.reference,it=a.rects.popper,mt=new Map,yt=!0,K=tt[0],et=0;et<tt.length;et++){var Rt=tt[et],ut=zn(Rt),ct=vr(Rt)===Ei,Dt=[Ne,Ke].indexOf(ut)>=0,At=Dt?"width":"height",P=yr(a,{placement:Rt,boundary:b,rootBoundary:T,altBoundary:H,padding:g}),nt=Dt?ct?Qe:Ce:ct?Ke:Ne;L[At]>it[At]&&(nt=Os(nt));var st=Os(nt),X=[];if(f&&X.push(P[ut]<=0),m&&X.push(P[nt]<=0,P[st]<=0),X.every(function(I){return I})){K=Rt,yt=!1;break}mt.set(Rt,X)}if(yt)for(var _=x?3:1,Y=function(_t){var vt=tt.find(function(Ft){var Ot=mt.get(Ft);if(Ot)return Ot.slice(0,_t).every(function(Vt){return Vt})});if(vt)return K=vt,"break"},at=_;at>0;at--){var dt=Y(at);if(dt==="break")break}a.placement!==K&&(a.modifiersData[o]._skip=!0,a.placement=K,a.reset=!0)}}const v0={name:"flip",enabled:!0,phase:"main",fn:ME,requiresIfExists:["offset"],data:{_skip:!1}};function zg(i,a,l){return l===void 0&&(l={x:0,y:0}),{top:i.top-a.height-l.y,right:i.right-a.width+l.x,bottom:i.bottom-a.height+l.y,left:i.left-a.width-l.x}}function kg(i){return[Ne,Qe,Ke,Ce].some(function(a){return i[a]>=0})}function zE(i){var a=i.state,l=i.name,o=a.rects.reference,c=a.rects.popper,f=a.modifiersData.preventOverflow,d=yr(a,{elementContext:"reference"}),m=yr(a,{altBoundary:!0}),v=zg(d,o),g=zg(m,c,f),b=kg(v),T=kg(g);a.modifiersData[l]={referenceClippingOffsets:v,popperEscapeOffsets:g,isReferenceHidden:b,hasPopperEscaped:T},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":b,"data-popper-escaped":T})}const y0={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:zE};function kE(i,a,l){var o=zn(i),c=[Ce,Ne].indexOf(o)>=0?-1:1,f=typeof l=="function"?l(Object.assign({},a,{placement:i})):l,d=f[0],m=f[1];return d=d||0,m=(m||0)*c,[Ce,Qe].indexOf(o)>=0?{x:m,y:d}:{x:d,y:m}}function LE(i){var a=i.state,l=i.options,o=i.name,c=l.offset,f=c===void 0?[0,0]:c,d=rd.reduce(function(b,T){return b[T]=kE(T,a.rects,f),b},{}),m=d[a.placement],v=m.x,g=m.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=v,a.modifiersData.popperOffsets.y+=g),a.modifiersData[o]=d}const _0={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:LE};function qE(i){var a=i.state,l=i.name;a.modifiersData[l]=b0({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})}const md={name:"popperOffsets",enabled:!0,phase:"read",fn:qE,data:{}};function UE(i){return i==="x"?"y":"x"}function HE(i){var a=i.state,l=i.options,o=i.name,c=l.mainAxis,f=c===void 0?!0:c,d=l.altAxis,m=d===void 0?!1:d,v=l.boundary,g=l.rootBoundary,b=l.altBoundary,T=l.padding,H=l.tether,k=H===void 0?!0:H,x=l.tetherOffset,S=x===void 0?0:x,N=yr(a,{boundary:v,rootBoundary:g,padding:T,altBoundary:b}),Q=zn(a.placement),B=vr(a.placement),F=!B,tt=ud(Q),L=UE(tt),it=a.modifiersData.popperOffsets,mt=a.rects.reference,yt=a.rects.popper,K=typeof S=="function"?S(Object.assign({},a.rects,{placement:a.placement})):S,et=typeof K=="number"?{mainAxis:K,altAxis:K}:Object.assign({mainAxis:0,altAxis:0},K),Rt=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,ut={x:0,y:0};if(it){if(f){var ct,Dt=tt==="y"?Ne:Ce,At=tt==="y"?Ke:Qe,P=tt==="y"?"height":"width",nt=it[tt],st=nt+N[Dt],X=nt-N[At],_=k?-yt[P]/2:0,Y=B===Ei?mt[P]:yt[P],at=B===Ei?-yt[P]:-mt[P],dt=a.elements.arrow,I=k&&dt?sd(dt):{width:0,height:0},_t=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:d0(),vt=_t[Dt],Ft=_t[At],Ot=Ml(0,mt[P],I[P]),Vt=F?mt[P]/2-_-Ot-vt-et.mainAxis:Y-Ot-vt-et.mainAxis,Ht=F?-mt[P]/2+_+Ot+Ft+et.mainAxis:at+Ot+Ft+et.mainAxis,ge=a.elements.arrow&&jl(a.elements.arrow),qn=ge?tt==="y"?ge.clientTop||0:ge.clientLeft||0:0,Re=(ct=Rt==null?void 0:Rt[tt])!=null?ct:0,Un=nt+Vt-Re-qn,Ya=nt+Ht-Re,An=Ml(k?Rs(st,Un):st,nt,k?yi(X,Ya):X);it[tt]=An,ut[tt]=An-nt}if(m){var $a,E=tt==="x"?Ne:Ce,C=tt==="x"?Ke:Qe,M=it[L],W=L==="y"?"height":"width",J=M+N[E],Z=M-N[C],rt=[Ne,Ce].indexOf(Q)!==-1,St=($a=Rt==null?void 0:Rt[L])!=null?$a:0,Kt=rt?J:M-mt[W]-yt[W]-St+et.altAxis,Qt=rt?M+mt[W]+yt[W]-St-et.altAxis:Z,_e=k&&rt?mE(Kt,M,Qt):Ml(k?Kt:J,M,k?Qt:Z);it[L]=_e,ut[L]=_e-M}a.modifiersData[o]=ut}}const E0={name:"preventOverflow",enabled:!0,phase:"main",fn:HE,requiresIfExists:["offset"]};function jE(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function BE(i){return i===Ze(i)||!cn(i)?dd(i):jE(i)}function VE(i){var a=i.getBoundingClientRect(),l=gr(a.width)/i.offsetWidth||1,o=gr(a.height)/i.offsetHeight||1;return l!==1||o!==1}function YE(i,a,l){l===void 0&&(l=!1);var o=cn(a),c=cn(a)&&VE(a),f=ja(a),d=br(i,c,l),m={scrollLeft:0,scrollTop:0},v={x:0,y:0};return(o||!o&&!l)&&((Ln(a)!=="body"||pd(f))&&(m=BE(a)),cn(a)?(v=br(a,!0),v.x+=a.clientLeft,v.y+=a.clientTop):f&&(v.x=hd(f))),{x:d.left+m.scrollLeft-v.x,y:d.top+m.scrollTop-v.y,width:d.width,height:d.height}}function $E(i){var a=new Map,l=new Set,o=[];i.forEach(function(f){a.set(f.name,f)});function c(f){l.add(f.name);var d=[].concat(f.requires||[],f.requiresIfExists||[]);d.forEach(function(m){if(!l.has(m)){var v=a.get(m);v&&c(v)}}),o.push(f)}return i.forEach(function(f){l.has(f.name)||c(f)}),o}function PE(i){var a=$E(i);return u0.reduce(function(l,o){return l.concat(a.filter(function(c){return c.phase===o}))},[])}function GE(i){var a;return function(){return a||(a=new Promise(function(l){Promise.resolve().then(function(){a=void 0,l(i())})})),a}}function XE(i){var a=i.reduce(function(l,o){var c=l[o.name];return l[o.name]=c?Object.assign({},c,o,{options:Object.assign({},c.options,o.options),data:Object.assign({},c.data,o.data)}):o,l},{});return Object.keys(a).map(function(l){return a[l]})}var Lg={placement:"bottom",modifiers:[],strategy:"absolute"};function qg(){for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return!a.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Ks(i){i===void 0&&(i={});var a=i,l=a.defaultModifiers,o=l===void 0?[]:l,c=a.defaultOptions,f=c===void 0?Lg:c;return function(m,v,g){g===void 0&&(g=f);var b={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lg,f),modifiersData:{},elements:{reference:m,popper:v},attributes:{},styles:{}},T=[],H=!1,k={state:b,setOptions:function(Q){var B=typeof Q=="function"?Q(b.options):Q;S(),b.options=Object.assign({},f,b.options,B),b.scrollParents={reference:Si(m)?zl(m):m.contextElement?zl(m.contextElement):[],popper:zl(v)};var F=PE(XE([].concat(o,b.options.modifiers)));return b.orderedModifiers=F.filter(function(tt){return tt.enabled}),x(),k.update()},forceUpdate:function(){if(!H){var Q=b.elements,B=Q.reference,F=Q.popper;if(qg(B,F)){b.rects={reference:YE(B,jl(F),b.options.strategy==="fixed"),popper:sd(F)},b.reset=!1,b.placement=b.options.placement,b.orderedModifiers.forEach(function(et){return b.modifiersData[et.name]=Object.assign({},et.data)});for(var tt=0;tt<b.orderedModifiers.length;tt++){if(b.reset===!0){b.reset=!1,tt=-1;continue}var L=b.orderedModifiers[tt],it=L.fn,mt=L.options,yt=mt===void 0?{}:mt,K=L.name;typeof it=="function"&&(b=it({state:b,options:yt,name:K,instance:k})||b)}}}},update:GE(function(){return new Promise(function(N){k.forceUpdate(),N(b)})}),destroy:function(){S(),H=!0}};if(!qg(m,v))return k;k.setOptions(g).then(function(N){!H&&g.onFirstUpdate&&g.onFirstUpdate(N)});function x(){b.orderedModifiers.forEach(function(N){var Q=N.name,B=N.options,F=B===void 0?{}:B,tt=N.effect;if(typeof tt=="function"){var L=tt({state:b,name:Q,instance:k,options:F}),it=function(){};T.push(L||it)}})}function S(){T.forEach(function(N){return N()}),T=[]}return k}}var KE=Ks(),QE=[fd,md,cd,od],ZE=Ks({defaultModifiers:QE}),FE=[fd,md,cd,od,_0,v0,E0,m0,y0],gd=Ks({defaultModifiers:FE});const S0=Object.freeze(Object.defineProperty({__proto__:null,afterMain:r0,afterRead:n0,afterWrite:s0,applyStyles:od,arrow:m0,auto:Gs,basePlacements:Ar,beforeMain:a0,beforeRead:t0,beforeWrite:l0,bottom:Ke,clippingParents:Wb,computeStyles:cd,createPopper:gd,createPopperBase:KE,createPopperLite:ZE,detectOverflow:yr,end:mr,eventListeners:fd,flip:v0,hide:y0,left:Ce,main:i0,modifierPhases:u0,offset:_0,placements:rd,popper:fr,popperGenerator:Ks,popperOffsets:md,preventOverflow:E0,read:e0,reference:Ib,right:Qe,start:Ei,top:Ne,variationPlacements:Gf,viewport:id,write:o0},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const za=new Map,yf={set(i,a,l){za.has(i)||za.set(i,new Map);const o=za.get(i);if(!o.has(a)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(a,l)},get(i,a){return za.has(i)&&za.get(i).get(a)||null},remove(i,a){if(!za.has(i))return;const l=za.get(i);l.delete(a),l.size===0&&za.delete(i)}},JE=1e6,WE=1e3,Qf="transitionend",A0=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(a,l)=>`#${CSS.escape(l)}`)),i),IE=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),tS=i=>{do i+=Math.floor(Math.random()*JE);while(document.getElementById(i));return i},eS=i=>{if(!i)return 0;let{transitionDuration:a,transitionDelay:l}=window.getComputedStyle(i);const o=Number.parseFloat(a),c=Number.parseFloat(l);return!o&&!c?0:(a=a.split(",")[0],l=l.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(l))*WE)},O0=i=>{i.dispatchEvent(new Event(Qf))},ia=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),qa=i=>ia(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(A0(i)):null,Or=i=>{if(!ia(i)||i.getClientRects().length===0)return!1;const a=getComputedStyle(i).getPropertyValue("visibility")==="visible",l=i.closest("details:not([open])");if(!l)return a;if(l!==i){const o=i.closest("summary");if(o&&o.parentNode!==l||o===null)return!1}return a},Ua=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",T0=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const a=i.getRootNode();return a instanceof ShadowRoot?a:null}return i instanceof ShadowRoot?i:i.parentNode?T0(i.parentNode):null},Ms=()=>{},Bl=i=>{i.offsetHeight},x0=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,_f=[],nS=i=>{document.readyState==="loading"?(_f.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of _f)a()}),_f.push(i)):i()},fn=()=>document.documentElement.dir==="rtl",hn=i=>{nS(()=>{const a=x0();if(a){const l=i.NAME,o=a.fn[l];a.fn[l]=i.jQueryInterface,a.fn[l].Constructor=i,a.fn[l].noConflict=()=>(a.fn[l]=o,i.jQueryInterface)}})},qe=(i,a=[],l=i)=>typeof i=="function"?i(...a):l,D0=(i,a,l=!0)=>{if(!l){qe(i);return}const c=eS(a)+5;let f=!1;const d=({target:m})=>{m===a&&(f=!0,a.removeEventListener(Qf,d),qe(i))};a.addEventListener(Qf,d),setTimeout(()=>{f||O0(a)},c)},bd=(i,a,l,o)=>{const c=i.length;let f=i.indexOf(a);return f===-1?!l&&o?i[c-1]:i[0]:(f+=l?1:-1,o&&(f=(f+c)%c),i[Math.max(0,Math.min(f,c-1))])},aS=/[^.]*(?=\..*)\.|.*/,iS=/\..*/,rS=/::\d+$/,Ef={};let Ug=1;const w0={mouseenter:"mouseover",mouseleave:"mouseout"},lS=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function N0(i,a){return a&&`${a}::${Ug++}`||i.uidEvent||Ug++}function C0(i){const a=N0(i);return i.uidEvent=a,Ef[a]=Ef[a]||{},Ef[a]}function oS(i,a){return function l(o){return vd(o,{delegateTarget:i}),l.oneOff&&G.off(i,o.type,a),a.apply(i,[o])}}function sS(i,a,l){return function o(c){const f=i.querySelectorAll(a);for(let{target:d}=c;d&&d!==this;d=d.parentNode)for(const m of f)if(m===d)return vd(c,{delegateTarget:d}),o.oneOff&&G.off(i,c.type,a,l),l.apply(d,[c])}}function R0(i,a,l=null){return Object.values(i).find(o=>o.callable===a&&o.delegationSelector===l)}function M0(i,a,l){const o=typeof a=="string",c=o?l:a||l;let f=z0(i);return lS.has(f)||(f=i),[o,c,f]}function Hg(i,a,l,o,c){if(typeof a!="string"||!i)return;let[f,d,m]=M0(a,l,o);a in w0&&(d=(x=>function(S){if(!S.relatedTarget||S.relatedTarget!==S.delegateTarget&&!S.delegateTarget.contains(S.relatedTarget))return x.call(this,S)})(d));const v=C0(i),g=v[m]||(v[m]={}),b=R0(g,d,f?l:null);if(b){b.oneOff=b.oneOff&&c;return}const T=N0(d,a.replace(aS,"")),H=f?sS(i,l,d):oS(i,d);H.delegationSelector=f?l:null,H.callable=d,H.oneOff=c,H.uidEvent=T,g[T]=H,i.addEventListener(m,H,f)}function Zf(i,a,l,o,c){const f=R0(a[l],o,c);f&&(i.removeEventListener(l,f,!!c),delete a[l][f.uidEvent])}function uS(i,a,l,o){const c=a[l]||{};for(const[f,d]of Object.entries(c))f.includes(o)&&Zf(i,a,l,d.callable,d.delegationSelector)}function z0(i){return i=i.replace(iS,""),w0[i]||i}const G={on(i,a,l,o){Hg(i,a,l,o,!1)},one(i,a,l,o){Hg(i,a,l,o,!0)},off(i,a,l,o){if(typeof a!="string"||!i)return;const[c,f,d]=M0(a,l,o),m=d!==a,v=C0(i),g=v[d]||{},b=a.startsWith(".");if(typeof f<"u"){if(!Object.keys(g).length)return;Zf(i,v,d,f,c?l:null);return}if(b)for(const T of Object.keys(v))uS(i,v,T,a.slice(1));for(const[T,H]of Object.entries(g)){const k=T.replace(rS,"");(!m||a.includes(k))&&Zf(i,v,d,H.callable,H.delegationSelector)}},trigger(i,a,l){if(typeof a!="string"||!i)return null;const o=x0(),c=z0(a),f=a!==c;let d=null,m=!0,v=!0,g=!1;f&&o&&(d=o.Event(a,l),o(i).trigger(d),m=!d.isPropagationStopped(),v=!d.isImmediatePropagationStopped(),g=d.isDefaultPrevented());const b=vd(new Event(a,{bubbles:m,cancelable:!0}),l);return g&&b.preventDefault(),v&&i.dispatchEvent(b),b.defaultPrevented&&d&&d.preventDefault(),b}};function vd(i,a={}){for(const[l,o]of Object.entries(a))try{i[l]=o}catch{Object.defineProperty(i,l,{configurable:!0,get(){return o}})}return i}function jg(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function Sf(i){return i.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const ra={setDataAttribute(i,a,l){i.setAttribute(`data-bs-${Sf(a)}`,l)},removeDataAttribute(i,a){i.removeAttribute(`data-bs-${Sf(a)}`)},getDataAttributes(i){if(!i)return{};const a={},l=Object.keys(i.dataset).filter(o=>o.startsWith("bs")&&!o.startsWith("bsConfig"));for(const o of l){let c=o.replace(/^bs/,"");c=c.charAt(0).toLowerCase()+c.slice(1,c.length),a[c]=jg(i.dataset[o])}return a},getDataAttribute(i,a){return jg(i.getAttribute(`data-bs-${Sf(a)}`))}};class Vl{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,l){const o=ia(l)?ra.getDataAttribute(l,"config"):{};return{...this.constructor.Default,...typeof o=="object"?o:{},...ia(l)?ra.getDataAttributes(l):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,l=this.constructor.DefaultType){for(const[o,c]of Object.entries(l)){const f=a[o],d=ia(f)?"element":IE(f);if(!new RegExp(c).test(d))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${d}" but expected type "${c}".`)}}}const cS="5.3.3";class Sn extends Vl{constructor(a,l){super(),a=qa(a),a&&(this._element=a,this._config=this._getConfig(l),yf.set(this._element,this.constructor.DATA_KEY,this))}dispose(){yf.remove(this._element,this.constructor.DATA_KEY),G.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,l,o=!0){D0(a,l,o)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return yf.get(qa(a),this.DATA_KEY)}static getOrCreateInstance(a,l={}){return this.getInstance(a)||new this(a,typeof l=="object"?l:null)}static get VERSION(){return cS}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const Af=i=>{let a=i.getAttribute("data-bs-target");if(!a||a==="#"){let l=i.getAttribute("href");if(!l||!l.includes("#")&&!l.startsWith("."))return null;l.includes("#")&&!l.startsWith("#")&&(l=`#${l.split("#")[1]}`),a=l&&l!=="#"?l.trim():null}return a?a.split(",").map(l=>A0(l)).join(","):null},gt={find(i,a=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(a,i))},findOne(i,a=document.documentElement){return Element.prototype.querySelector.call(a,i)},children(i,a){return[].concat(...i.children).filter(l=>l.matches(a))},parents(i,a){const l=[];let o=i.parentNode.closest(a);for(;o;)l.push(o),o=o.parentNode.closest(a);return l},prev(i,a){let l=i.previousElementSibling;for(;l;){if(l.matches(a))return[l];l=l.previousElementSibling}return[]},next(i,a){let l=i.nextElementSibling;for(;l;){if(l.matches(a))return[l];l=l.nextElementSibling}return[]},focusableChildren(i){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(l=>`${l}:not([tabindex^="-"])`).join(",");return this.find(a,i).filter(l=>!Ua(l)&&Or(l))},getSelectorFromElement(i){const a=Af(i);return a&&gt.findOne(a)?a:null},getElementFromSelector(i){const a=Af(i);return a?gt.findOne(a):null},getMultipleElementsFromSelector(i){const a=Af(i);return a?gt.find(a):[]}},Qs=(i,a="hide")=>{const l=`click.dismiss${i.EVENT_KEY}`,o=i.NAME;G.on(document,l,`[data-bs-dismiss="${o}"]`,function(c){if(["A","AREA"].includes(this.tagName)&&c.preventDefault(),Ua(this))return;const f=gt.getElementFromSelector(this)||this.closest(`.${o}`);i.getOrCreateInstance(f)[a]()})},fS="alert",dS="bs.alert",k0=`.${dS}`,hS=`close${k0}`,pS=`closed${k0}`,mS="fade",gS="show";class Zs extends Sn{static get NAME(){return fS}close(){if(G.trigger(this._element,hS).defaultPrevented)return;this._element.classList.remove(gS);const l=this._element.classList.contains(mS);this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),G.trigger(this._element,pS),this.dispose()}static jQueryInterface(a){return this.each(function(){const l=Zs.getOrCreateInstance(this);if(typeof a=="string"){if(l[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);l[a](this)}})}}Qs(Zs,"close");hn(Zs);const bS="button",vS="bs.button",yS=`.${vS}`,_S=".data-api",ES="active",Bg='[data-bs-toggle="button"]',SS=`click${yS}${_S}`;class Fs extends Sn{static get NAME(){return bS}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(ES))}static jQueryInterface(a){return this.each(function(){const l=Fs.getOrCreateInstance(this);a==="toggle"&&l[a]()})}}G.on(document,SS,Bg,i=>{i.preventDefault();const a=i.target.closest(Bg);Fs.getOrCreateInstance(a).toggle()});hn(Fs);const AS="swipe",Tr=".bs.swipe",OS=`touchstart${Tr}`,TS=`touchmove${Tr}`,xS=`touchend${Tr}`,DS=`pointerdown${Tr}`,wS=`pointerup${Tr}`,NS="touch",CS="pen",RS="pointer-event",MS=40,zS={endCallback:null,leftCallback:null,rightCallback:null},kS={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class zs extends Vl{constructor(a,l){super(),this._element=a,!(!a||!zs.isSupported())&&(this._config=this._getConfig(l),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return zS}static get DefaultType(){return kS}static get NAME(){return AS}dispose(){G.off(this._element,Tr)}_start(a){if(!this._supportPointerEvents){this._deltaX=a.touches[0].clientX;return}this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX)}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),qe(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=MS)return;const l=a/this._deltaX;this._deltaX=0,l&&qe(l>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(G.on(this._element,DS,a=>this._start(a)),G.on(this._element,wS,a=>this._end(a)),this._element.classList.add(RS)):(G.on(this._element,OS,a=>this._start(a)),G.on(this._element,TS,a=>this._move(a)),G.on(this._element,xS,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType===CS||a.pointerType===NS)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const LS="carousel",qS="bs.carousel",Ba=`.${qS}`,L0=".data-api",US="ArrowLeft",HS="ArrowRight",jS=500,xl="next",or="prev",dr="left",Ts="right",BS=`slide${Ba}`,Of=`slid${Ba}`,VS=`keydown${Ba}`,YS=`mouseenter${Ba}`,$S=`mouseleave${Ba}`,PS=`dragstart${Ba}`,GS=`load${Ba}${L0}`,XS=`click${Ba}${L0}`,q0="carousel",ss="active",KS="slide",QS="carousel-item-end",ZS="carousel-item-start",FS="carousel-item-next",JS="carousel-item-prev",U0=".active",H0=".carousel-item",WS=U0+H0,IS=".carousel-item img",tA=".carousel-indicators",eA="[data-bs-slide], [data-bs-slide-to]",nA='[data-bs-ride="carousel"]',aA={[US]:Ts,[HS]:dr},iA={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},rA={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Yl extends Sn{constructor(a,l){super(a,l),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=gt.findOne(tA,this._element),this._addEventListeners(),this._config.ride===q0&&this.cycle()}static get Default(){return iA}static get DefaultType(){return rA}static get NAME(){return LS}next(){this._slide(xl)}nextWhenVisible(){!document.hidden&&Or(this._element)&&this.next()}prev(){this._slide(or)}pause(){this._isSliding&&O0(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){G.one(this._element,Of,()=>this.cycle());return}this.cycle()}}to(a){const l=this._getItems();if(a>l.length-1||a<0)return;if(this._isSliding){G.one(this._element,Of,()=>this.to(a));return}const o=this._getItemIndex(this._getActive());if(o===a)return;const c=a>o?xl:or;this._slide(c,l[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&G.on(this._element,VS,a=>this._keydown(a)),this._config.pause==="hover"&&(G.on(this._element,YS,()=>this.pause()),G.on(this._element,$S,()=>this._maybeEnableCycle())),this._config.touch&&zs.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const o of gt.find(IS,this._element))G.on(o,PS,c=>c.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(dr)),rightCallback:()=>this._slide(this._directionToOrder(Ts)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),jS+this._config.interval))}};this._swipeHelper=new zs(this._element,l)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const l=aA[a.key];l&&(a.preventDefault(),this._slide(this._directionToOrder(l)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const l=gt.findOne(U0,this._indicatorsElement);l.classList.remove(ss),l.removeAttribute("aria-current");const o=gt.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);o&&(o.classList.add(ss),o.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const l=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=l||this._config.defaultInterval}_slide(a,l=null){if(this._isSliding)return;const o=this._getActive(),c=a===xl,f=l||bd(this._getItems(),o,c,this._config.wrap);if(f===o)return;const d=this._getItemIndex(f),m=k=>G.trigger(this._element,k,{relatedTarget:f,direction:this._orderToDirection(a),from:this._getItemIndex(o),to:d});if(m(BS).defaultPrevented||!o||!f)return;const g=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(d),this._activeElement=f;const b=c?ZS:QS,T=c?FS:JS;f.classList.add(T),Bl(f),o.classList.add(b),f.classList.add(b);const H=()=>{f.classList.remove(b,T),f.classList.add(ss),o.classList.remove(ss,T,b),this._isSliding=!1,m(Of)};this._queueCallback(H,o,this._isAnimated()),g&&this.cycle()}_isAnimated(){return this._element.classList.contains(KS)}_getActive(){return gt.findOne(WS,this._element)}_getItems(){return gt.find(H0,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return fn()?a===dr?or:xl:a===dr?xl:or}_orderToDirection(a){return fn()?a===or?dr:Ts:a===or?Ts:dr}static jQueryInterface(a){return this.each(function(){const l=Yl.getOrCreateInstance(this,a);if(typeof a=="number"){l.to(a);return}if(typeof a=="string"){if(l[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);l[a]()}})}}G.on(document,XS,eA,function(i){const a=gt.getElementFromSelector(this);if(!a||!a.classList.contains(q0))return;i.preventDefault();const l=Yl.getOrCreateInstance(a),o=this.getAttribute("data-bs-slide-to");if(o){l.to(o),l._maybeEnableCycle();return}if(ra.getDataAttribute(this,"slide")==="next"){l.next(),l._maybeEnableCycle();return}l.prev(),l._maybeEnableCycle()});G.on(window,GS,()=>{const i=gt.find(nA);for(const a of i)Yl.getOrCreateInstance(a)});hn(Yl);const lA="collapse",oA="bs.collapse",$l=`.${oA}`,sA=".data-api",uA=`show${$l}`,cA=`shown${$l}`,fA=`hide${$l}`,dA=`hidden${$l}`,hA=`click${$l}${sA}`,Tf="show",pr="collapse",us="collapsing",pA="collapsed",mA=`:scope .${pr} .${pr}`,gA="collapse-horizontal",bA="width",vA="height",yA=".collapse.show, .collapse.collapsing",Ff='[data-bs-toggle="collapse"]',_A={parent:null,toggle:!0},EA={parent:"(null|element)",toggle:"boolean"};class ql extends Sn{constructor(a,l){super(a,l),this._isTransitioning=!1,this._triggerArray=[];const o=gt.find(Ff);for(const c of o){const f=gt.getSelectorFromElement(c),d=gt.find(f).filter(m=>m===this._element);f!==null&&d.length&&this._triggerArray.push(c)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return _A}static get DefaultType(){return EA}static get NAME(){return lA}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(yA).filter(m=>m!==this._element).map(m=>ql.getOrCreateInstance(m,{toggle:!1}))),a.length&&a[0]._isTransitioning||G.trigger(this._element,uA).defaultPrevented)return;for(const m of a)m.hide();const o=this._getDimension();this._element.classList.remove(pr),this._element.classList.add(us),this._element.style[o]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const c=()=>{this._isTransitioning=!1,this._element.classList.remove(us),this._element.classList.add(pr,Tf),this._element.style[o]="",G.trigger(this._element,cA)},d=`scroll${o[0].toUpperCase()+o.slice(1)}`;this._queueCallback(c,this._element,!0),this._element.style[o]=`${this._element[d]}px`}hide(){if(this._isTransitioning||!this._isShown()||G.trigger(this._element,fA).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,Bl(this._element),this._element.classList.add(us),this._element.classList.remove(pr,Tf);for(const c of this._triggerArray){const f=gt.getElementFromSelector(c);f&&!this._isShown(f)&&this._addAriaAndCollapsedClass([c],!1)}this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(us),this._element.classList.add(pr),G.trigger(this._element,dA)};this._element.style[l]="",this._queueCallback(o,this._element,!0)}_isShown(a=this._element){return a.classList.contains(Tf)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=qa(a.parent),a}_getDimension(){return this._element.classList.contains(gA)?bA:vA}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(Ff);for(const l of a){const o=gt.getElementFromSelector(l);o&&this._addAriaAndCollapsedClass([l],this._isShown(o))}}_getFirstLevelChildren(a){const l=gt.find(mA,this._config.parent);return gt.find(a,this._config.parent).filter(o=>!l.includes(o))}_addAriaAndCollapsedClass(a,l){if(a.length)for(const o of a)o.classList.toggle(pA,!l),o.setAttribute("aria-expanded",l)}static jQueryInterface(a){const l={};return typeof a=="string"&&/show|hide/.test(a)&&(l.toggle=!1),this.each(function(){const o=ql.getOrCreateInstance(this,l);if(typeof a=="string"){if(typeof o[a]>"u")throw new TypeError(`No method named "${a}"`);o[a]()}})}}G.on(document,hA,Ff,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const a of gt.getMultipleElementsFromSelector(this))ql.getOrCreateInstance(a,{toggle:!1}).toggle()});hn(ql);const Vg="dropdown",SA="bs.dropdown",Ai=`.${SA}`,yd=".data-api",AA="Escape",Yg="Tab",OA="ArrowUp",$g="ArrowDown",TA=2,xA=`hide${Ai}`,DA=`hidden${Ai}`,wA=`show${Ai}`,NA=`shown${Ai}`,j0=`click${Ai}${yd}`,B0=`keydown${Ai}${yd}`,CA=`keyup${Ai}${yd}`,hr="show",RA="dropup",MA="dropend",zA="dropstart",kA="dropup-center",LA="dropdown-center",mi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',qA=`${mi}.${hr}`,xs=".dropdown-menu",UA=".navbar",HA=".navbar-nav",jA=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",BA=fn()?"top-end":"top-start",VA=fn()?"top-start":"top-end",YA=fn()?"bottom-end":"bottom-start",$A=fn()?"bottom-start":"bottom-end",PA=fn()?"left-start":"right-start",GA=fn()?"right-start":"left-start",XA="top",KA="bottom",QA={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ZA={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class kn extends Sn{constructor(a,l){super(a,l),this._popper=null,this._parent=this._element.parentNode,this._menu=gt.next(this._element,xs)[0]||gt.prev(this._element,xs)[0]||gt.findOne(xs,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return QA}static get DefaultType(){return ZA}static get NAME(){return Vg}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Ua(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!G.trigger(this._element,wA,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(HA))for(const o of[].concat(...document.body.children))G.on(o,"mouseover",Ms);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(hr),this._element.classList.add(hr),G.trigger(this._element,NA,a)}}hide(){if(Ua(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!G.trigger(this._element,xA,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))G.off(o,"mouseover",Ms);this._popper&&this._popper.destroy(),this._menu.classList.remove(hr),this._element.classList.remove(hr),this._element.setAttribute("aria-expanded","false"),ra.removeDataAttribute(this._menu,"popper"),G.trigger(this._element,DA,a)}}_getConfig(a){if(a=super._getConfig(a),typeof a.reference=="object"&&!ia(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${Vg.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(typeof S0>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let a=this._element;this._config.reference==="parent"?a=this._parent:ia(this._config.reference)?a=qa(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const l=this._getPopperConfig();this._popper=gd(a,this._menu,l)}_isShown(){return this._menu.classList.contains(hr)}_getPlacement(){const a=this._parent;if(a.classList.contains(MA))return PA;if(a.classList.contains(zA))return GA;if(a.classList.contains(kA))return XA;if(a.classList.contains(LA))return KA;const l=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains(RA)?l?VA:BA:l?$A:YA}_detectNavbar(){return this._element.closest(UA)!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(l=>Number.parseInt(l,10)):typeof a=="function"?l=>a(l,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(ra.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...qe(this._config.popperConfig,[a])}}_selectMenuItem({key:a,target:l}){const o=gt.find(jA,this._menu).filter(c=>Or(c));o.length&&bd(o,l,a===$g,!o.includes(l)).focus()}static jQueryInterface(a){return this.each(function(){const l=kn.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof l[a]>"u")throw new TypeError(`No method named "${a}"`);l[a]()}})}static clearMenus(a){if(a.button===TA||a.type==="keyup"&&a.key!==Yg)return;const l=gt.find(qA);for(const o of l){const c=kn.getInstance(o);if(!c||c._config.autoClose===!1)continue;const f=a.composedPath(),d=f.includes(c._menu);if(f.includes(c._element)||c._config.autoClose==="inside"&&!d||c._config.autoClose==="outside"&&d||c._menu.contains(a.target)&&(a.type==="keyup"&&a.key===Yg||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const m={relatedTarget:c._element};a.type==="click"&&(m.clickEvent=a),c._completeHide(m)}}static dataApiKeydownHandler(a){const l=/input|textarea/i.test(a.target.tagName),o=a.key===AA,c=[OA,$g].includes(a.key);if(!c&&!o||l&&!o)return;a.preventDefault();const f=this.matches(mi)?this:gt.prev(this,mi)[0]||gt.next(this,mi)[0]||gt.findOne(mi,a.delegateTarget.parentNode),d=kn.getOrCreateInstance(f);if(c){a.stopPropagation(),d.show(),d._selectMenuItem(a);return}d._isShown()&&(a.stopPropagation(),d.hide(),f.focus())}}G.on(document,B0,mi,kn.dataApiKeydownHandler);G.on(document,B0,xs,kn.dataApiKeydownHandler);G.on(document,j0,kn.clearMenus);G.on(document,CA,kn.clearMenus);G.on(document,j0,mi,function(i){i.preventDefault(),kn.getOrCreateInstance(this).toggle()});hn(kn);const V0="backdrop",FA="fade",Pg="show",Gg=`mousedown.bs.${V0}`,JA={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},WA={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Y0 extends Vl{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return JA}static get DefaultType(){return WA}static get NAME(){return V0}show(a){if(!this._config.isVisible){qe(a);return}this._append();const l=this._getElement();this._config.isAnimated&&Bl(l),l.classList.add(Pg),this._emulateAnimation(()=>{qe(a)})}hide(a){if(!this._config.isVisible){qe(a);return}this._getElement().classList.remove(Pg),this._emulateAnimation(()=>{this.dispose(),qe(a)})}dispose(){this._isAppended&&(G.off(this._element,Gg),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add(FA),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=qa(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),G.on(a,Gg,()=>{qe(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){D0(a,this._getElement(),this._config.isAnimated)}}const IA="focustrap",tO="bs.focustrap",ks=`.${tO}`,eO=`focusin${ks}`,nO=`keydown.tab${ks}`,aO="Tab",iO="forward",Xg="backward",rO={autofocus:!0,trapElement:null},lO={autofocus:"boolean",trapElement:"element"};class $0 extends Vl{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return rO}static get DefaultType(){return lO}static get NAME(){return IA}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),G.off(document,ks),G.on(document,eO,a=>this._handleFocusin(a)),G.on(document,nO,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,G.off(document,ks))}_handleFocusin(a){const{trapElement:l}=this._config;if(a.target===document||a.target===l||l.contains(a.target))return;const o=gt.focusableChildren(l);o.length===0?l.focus():this._lastTabNavDirection===Xg?o[o.length-1].focus():o[0].focus()}_handleKeydown(a){a.key===aO&&(this._lastTabNavDirection=a.shiftKey?Xg:iO)}}const Kg=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Qg=".sticky-top",cs="padding-right",Zg="margin-right";class Jf{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cs,l=>l+a),this._setElementAttributes(Kg,cs,l=>l+a),this._setElementAttributes(Qg,Zg,l=>l-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,cs),this._resetElementAttributes(Kg,cs),this._resetElementAttributes(Qg,Zg)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,l,o){const c=this.getWidth(),f=d=>{if(d!==this._element&&window.innerWidth>d.clientWidth+c)return;this._saveInitialAttribute(d,l);const m=window.getComputedStyle(d).getPropertyValue(l);d.style.setProperty(l,`${o(Number.parseFloat(m))}px`)};this._applyManipulationCallback(a,f)}_saveInitialAttribute(a,l){const o=a.style.getPropertyValue(l);o&&ra.setDataAttribute(a,l,o)}_resetElementAttributes(a,l){const o=c=>{const f=ra.getDataAttribute(c,l);if(f===null){c.style.removeProperty(l);return}ra.removeDataAttribute(c,l),c.style.setProperty(l,f)};this._applyManipulationCallback(a,o)}_applyManipulationCallback(a,l){if(ia(a)){l(a);return}for(const o of gt.find(a,this._element))l(o)}}const oO="modal",sO="bs.modal",dn=`.${sO}`,uO=".data-api",cO="Escape",fO=`hide${dn}`,dO=`hidePrevented${dn}`,P0=`hidden${dn}`,G0=`show${dn}`,hO=`shown${dn}`,pO=`resize${dn}`,mO=`click.dismiss${dn}`,gO=`mousedown.dismiss${dn}`,bO=`keydown.dismiss${dn}`,vO=`click${dn}${uO}`,Fg="modal-open",yO="fade",Jg="show",xf="modal-static",_O=".modal.show",EO=".modal-dialog",SO=".modal-body",AO='[data-bs-toggle="modal"]',OO={backdrop:!0,focus:!0,keyboard:!0},TO={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class la extends Sn{constructor(a,l){super(a,l),this._dialog=gt.findOne(EO,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Jf,this._addEventListeners()}static get Default(){return OO}static get DefaultType(){return TO}static get NAME(){return oO}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||G.trigger(this._element,G0,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Fg),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){!this._isShown||this._isTransitioning||G.trigger(this._element,fO).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Jg),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){G.off(window,dn),G.off(this._dialog,dn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Y0({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new $0({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const l=gt.findOne(SO,this._dialog);l&&(l.scrollTop=0),Bl(this._element),this._element.classList.add(Jg);const o=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,G.trigger(this._element,hO,{relatedTarget:a})};this._queueCallback(o,this._dialog,this._isAnimated())}_addEventListeners(){G.on(this._element,bO,a=>{if(a.key===cO){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),G.on(window,pO,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),G.on(this._element,gO,a=>{G.one(this._element,mO,l=>{if(!(this._element!==a.target||this._element!==l.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Fg),this._resetAdjustments(),this._scrollBar.reset(),G.trigger(this._element,P0)})}_isAnimated(){return this._element.classList.contains(yO)}_triggerBackdropTransition(){if(G.trigger(this._element,dO).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;o==="hidden"||this._element.classList.contains(xf)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(xf),this._queueCallback(()=>{this._element.classList.remove(xf),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,l=this._scrollBar.getWidth(),o=l>0;if(o&&!a){const c=fn()?"paddingLeft":"paddingRight";this._element.style[c]=`${l}px`}if(!o&&a){const c=fn()?"paddingRight":"paddingLeft";this._element.style[c]=`${l}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,l){return this.each(function(){const o=la.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof o[a]>"u")throw new TypeError(`No method named "${a}"`);o[a](l)}})}}G.on(document,vO,AO,function(i){const a=gt.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),G.one(a,G0,c=>{c.defaultPrevented||G.one(a,P0,()=>{Or(this)&&this.focus()})});const l=gt.findOne(_O);l&&la.getInstance(l).hide(),la.getOrCreateInstance(a).toggle(this)});Qs(la);hn(la);const xO="offcanvas",DO="bs.offcanvas",sa=`.${DO}`,X0=".data-api",wO=`load${sa}${X0}`,NO="Escape",Wg="show",Ig="showing",tb="hiding",CO="offcanvas-backdrop",K0=".offcanvas.show",RO=`show${sa}`,MO=`shown${sa}`,zO=`hide${sa}`,eb=`hidePrevented${sa}`,Q0=`hidden${sa}`,kO=`resize${sa}`,LO=`click${sa}${X0}`,qO=`keydown.dismiss${sa}`,UO='[data-bs-toggle="offcanvas"]',HO={backdrop:!0,keyboard:!0,scroll:!1},jO={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ha extends Sn{constructor(a,l){super(a,l),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return HO}static get DefaultType(){return jO}static get NAME(){return xO}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){if(this._isShown||G.trigger(this._element,RO,{relatedTarget:a}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Jf().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Ig);const o=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Wg),this._element.classList.remove(Ig),G.trigger(this._element,MO,{relatedTarget:a})};this._queueCallback(o,this._element,!0)}hide(){if(!this._isShown||G.trigger(this._element,zO).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(tb),this._backdrop.hide();const l=()=>{this._element.classList.remove(Wg,tb),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Jf().reset(),G.trigger(this._element,Q0)};this._queueCallback(l,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=()=>{if(this._config.backdrop==="static"){G.trigger(this._element,eb);return}this.hide()},l=!!this._config.backdrop;return new Y0({className:CO,isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?a:null})}_initializeFocusTrap(){return new $0({trapElement:this._element})}_addEventListeners(){G.on(this._element,qO,a=>{if(a.key===NO){if(this._config.keyboard){this.hide();return}G.trigger(this._element,eb)}})}static jQueryInterface(a){return this.each(function(){const l=Ha.getOrCreateInstance(this,a);if(typeof a=="string"){if(l[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);l[a](this)}})}}G.on(document,LO,UO,function(i){const a=gt.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Ua(this))return;G.one(a,Q0,()=>{Or(this)&&this.focus()});const l=gt.findOne(K0);l&&l!==a&&Ha.getInstance(l).hide(),Ha.getOrCreateInstance(a).toggle(this)});G.on(window,wO,()=>{for(const i of gt.find(K0))Ha.getOrCreateInstance(i).show()});G.on(window,kO,()=>{for(const i of gt.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&Ha.getOrCreateInstance(i).hide()});Qs(Ha);hn(Ha);const BO=/^aria-[\w-]*$/i,Z0={"*":["class","dir","id","lang","role",BO],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},VO=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),YO=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,$O=(i,a)=>{const l=i.nodeName.toLowerCase();return a.includes(l)?VO.has(l)?!!YO.test(i.nodeValue):!0:a.filter(o=>o instanceof RegExp).some(o=>o.test(l))};function PO(i,a,l){if(!i.length)return i;if(l&&typeof l=="function")return l(i);const c=new window.DOMParser().parseFromString(i,"text/html"),f=[].concat(...c.body.querySelectorAll("*"));for(const d of f){const m=d.nodeName.toLowerCase();if(!Object.keys(a).includes(m)){d.remove();continue}const v=[].concat(...d.attributes),g=[].concat(a["*"]||[],a[m]||[]);for(const b of v)$O(b,g)||d.removeAttribute(b.nodeName)}return c.body.innerHTML}const GO="TemplateFactory",XO={allowList:Z0,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},KO={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},QO={entry:"(string|element|function|null)",selector:"(string|element)"};class ZO extends Vl{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return XO}static get DefaultType(){return KO}static get NAME(){return GO}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[c,f]of Object.entries(this._config.content))this._setContent(a,f,c);const l=a.children[0],o=this._resolvePossibleFunction(this._config.extraClass);return o&&l.classList.add(...o.split(" ")),l}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[l,o]of Object.entries(a))super._typeCheckConfig({selector:l,entry:o},QO)}_setContent(a,l,o){const c=gt.findOne(o,a);if(c){if(l=this._resolvePossibleFunction(l),!l){c.remove();return}if(ia(l)){this._putElementInTemplate(qa(l),c);return}if(this._config.html){c.innerHTML=this._maybeSanitize(l);return}c.textContent=l}}_maybeSanitize(a){return this._config.sanitize?PO(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return qe(a,[this])}_putElementInTemplate(a,l){if(this._config.html){l.innerHTML="",l.append(a);return}l.textContent=a.textContent}}const FO="tooltip",JO=new Set(["sanitize","allowList","sanitizeFn"]),Df="fade",WO="modal",fs="show",IO=".tooltip-inner",nb=`.${WO}`,ab="hide.bs.modal",Dl="hover",wf="focus",t5="click",e5="manual",n5="hide",a5="hidden",i5="show",r5="shown",l5="inserted",o5="click",s5="focusin",u5="focusout",c5="mouseenter",f5="mouseleave",d5={AUTO:"auto",TOP:"top",RIGHT:fn()?"left":"right",BOTTOM:"bottom",LEFT:fn()?"right":"left"},h5={allowList:Z0,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},p5={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class xr extends Sn{constructor(a,l){if(typeof S0>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(a,l),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return h5}static get DefaultType(){return p5}static get NAME(){return FO}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),G.off(this._element.closest(nb),ab,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const a=G.trigger(this._element,this.constructor.eventName(i5)),o=(T0(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!o)return;this._disposePopper();const c=this._getTipElement();this._element.setAttribute("aria-describedby",c.getAttribute("id"));const{container:f}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(f.append(c),G.trigger(this._element,this.constructor.eventName(l5))),this._popper=this._createPopper(c),c.classList.add(fs),"ontouchstart"in document.documentElement)for(const m of[].concat(...document.body.children))G.on(m,"mouseover",Ms);const d=()=>{G.trigger(this._element,this.constructor.eventName(r5)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(d,this.tip,this._isAnimated())}hide(){if(!this._isShown()||G.trigger(this._element,this.constructor.eventName(n5)).defaultPrevented)return;if(this._getTipElement().classList.remove(fs),"ontouchstart"in document.documentElement)for(const c of[].concat(...document.body.children))G.off(c,"mouseover",Ms);this._activeTrigger[t5]=!1,this._activeTrigger[wf]=!1,this._activeTrigger[Dl]=!1,this._isHovered=null;const o=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),G.trigger(this._element,this.constructor.eventName(a5)))};this._queueCallback(o,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const l=this._getTemplateFactory(a).toHtml();if(!l)return null;l.classList.remove(Df,fs),l.classList.add(`bs-${this.constructor.NAME}-auto`);const o=tS(this.constructor.NAME).toString();return l.setAttribute("id",o),this._isAnimated()&&l.classList.add(Df),l}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new ZO({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[IO]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Df)}_isShown(){return this.tip&&this.tip.classList.contains(fs)}_createPopper(a){const l=qe(this._config.placement,[this,a,this._element]),o=d5[l.toUpperCase()];return gd(this._element,a,this._getPopperConfig(o))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(l=>Number.parseInt(l,10)):typeof a=="function"?l=>a(l,this._element):a}_resolvePossibleFunction(a){return qe(a,[this._element])}_getPopperConfig(a){const l={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:o=>{this._getTipElement().setAttribute("data-popper-placement",o.state.placement)}}]};return{...l,...qe(this._config.popperConfig,[l])}}_setListeners(){const a=this._config.trigger.split(" ");for(const l of a)if(l==="click")G.on(this._element,this.constructor.eventName(o5),this._config.selector,o=>{this._initializeOnDelegatedTarget(o).toggle()});else if(l!==e5){const o=l===Dl?this.constructor.eventName(c5):this.constructor.eventName(s5),c=l===Dl?this.constructor.eventName(f5):this.constructor.eventName(u5);G.on(this._element,o,this._config.selector,f=>{const d=this._initializeOnDelegatedTarget(f);d._activeTrigger[f.type==="focusin"?wf:Dl]=!0,d._enter()}),G.on(this._element,c,this._config.selector,f=>{const d=this._initializeOnDelegatedTarget(f);d._activeTrigger[f.type==="focusout"?wf:Dl]=d._element.contains(f.relatedTarget),d._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},G.on(this._element.closest(nb),ab,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,l){clearTimeout(this._timeout),this._timeout=setTimeout(a,l)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const l=ra.getDataAttributes(this._element);for(const o of Object.keys(l))JO.has(o)&&delete l[o];return a={...l,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:qa(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[l,o]of Object.entries(this._config))this.constructor.Default[l]!==o&&(a[l]=o);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const l=xr.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof l[a]>"u")throw new TypeError(`No method named "${a}"`);l[a]()}})}}hn(xr);const m5="popover",g5=".popover-header",b5=".popover-body",v5={...xr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},y5={...xr.DefaultType,content:"(null|string|element|function)"};class _d extends xr{static get Default(){return v5}static get DefaultType(){return y5}static get NAME(){return m5}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[g5]:this._getTitle(),[b5]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const l=_d.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof l[a]>"u")throw new TypeError(`No method named "${a}"`);l[a]()}})}}hn(_d);const _5="scrollspy",E5="bs.scrollspy",Ed=`.${E5}`,S5=".data-api",A5=`activate${Ed}`,ib=`click${Ed}`,O5=`load${Ed}${S5}`,T5="dropdown-item",sr="active",x5='[data-bs-spy="scroll"]',Nf="[href]",D5=".nav, .list-group",rb=".nav-link",w5=".nav-item",N5=".list-group-item",C5=`${rb}, ${w5} > ${rb}, ${N5}`,R5=".dropdown",M5=".dropdown-toggle",z5={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},k5={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Js extends Sn{constructor(a,l){super(a,l),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return z5}static get DefaultType(){return k5}static get NAME(){return _5}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=qa(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(l=>Number.parseFloat(l))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(G.off(this._config.target,ib),G.on(this._config.target,ib,Nf,a=>{const l=this._observableSections.get(a.target.hash);if(l){a.preventDefault();const o=this._rootElement||window,c=l.offsetTop-this._element.offsetTop;if(o.scrollTo){o.scrollTo({top:c,behavior:"smooth"});return}o.scrollTop=c}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(l=>this._observerCallback(l),a)}_observerCallback(a){const l=d=>this._targetLinks.get(`#${d.target.id}`),o=d=>{this._previousScrollData.visibleEntryTop=d.target.offsetTop,this._process(l(d))},c=(this._rootElement||document.documentElement).scrollTop,f=c>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=c;for(const d of a){if(!d.isIntersecting){this._activeTarget=null,this._clearActiveClass(l(d));continue}const m=d.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(f&&m){if(o(d),!c)return;continue}!f&&!m&&o(d)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=gt.find(Nf,this._config.target);for(const l of a){if(!l.hash||Ua(l))continue;const o=gt.findOne(decodeURI(l.hash),this._element);Or(o)&&(this._targetLinks.set(decodeURI(l.hash),l),this._observableSections.set(l.hash,o))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(sr),this._activateParents(a),G.trigger(this._element,A5,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains(T5)){gt.findOne(M5,a.closest(R5)).classList.add(sr);return}for(const l of gt.parents(a,D5))for(const o of gt.prev(l,C5))o.classList.add(sr)}_clearActiveClass(a){a.classList.remove(sr);const l=gt.find(`${Nf}.${sr}`,a);for(const o of l)o.classList.remove(sr)}static jQueryInterface(a){return this.each(function(){const l=Js.getOrCreateInstance(this,a);if(typeof a=="string"){if(l[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);l[a]()}})}}G.on(window,O5,()=>{for(const i of gt.find(x5))Js.getOrCreateInstance(i)});hn(Js);const L5="tab",q5="bs.tab",Oi=`.${q5}`,U5=`hide${Oi}`,H5=`hidden${Oi}`,j5=`show${Oi}`,B5=`shown${Oi}`,V5=`click${Oi}`,Y5=`keydown${Oi}`,$5=`load${Oi}`,P5="ArrowLeft",lb="ArrowRight",G5="ArrowUp",ob="ArrowDown",Cf="Home",sb="End",gi="active",ub="fade",Rf="show",X5="dropdown",F0=".dropdown-toggle",K5=".dropdown-menu",Mf=`:not(${F0})`,Q5='.list-group, .nav, [role="tablist"]',Z5=".nav-item, .list-group-item",F5=`.nav-link${Mf}, .list-group-item${Mf}, [role="tab"]${Mf}`,J0='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',zf=`${F5}, ${J0}`,J5=`.${gi}[data-bs-toggle="tab"], .${gi}[data-bs-toggle="pill"], .${gi}[data-bs-toggle="list"]`;class _r extends Sn{constructor(a){super(a),this._parent=this._element.closest(Q5),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),G.on(this._element,Y5,l=>this._keydown(l)))}static get NAME(){return L5}show(){const a=this._element;if(this._elemIsActive(a))return;const l=this._getActiveElem(),o=l?G.trigger(l,U5,{relatedTarget:a}):null;G.trigger(a,j5,{relatedTarget:l}).defaultPrevented||o&&o.defaultPrevented||(this._deactivate(l,a),this._activate(a,l))}_activate(a,l){if(!a)return;a.classList.add(gi),this._activate(gt.getElementFromSelector(a));const o=()=>{if(a.getAttribute("role")!=="tab"){a.classList.add(Rf);return}a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),G.trigger(a,B5,{relatedTarget:l})};this._queueCallback(o,a,a.classList.contains(ub))}_deactivate(a,l){if(!a)return;a.classList.remove(gi),a.blur(),this._deactivate(gt.getElementFromSelector(a));const o=()=>{if(a.getAttribute("role")!=="tab"){a.classList.remove(Rf);return}a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),G.trigger(a,H5,{relatedTarget:l})};this._queueCallback(o,a,a.classList.contains(ub))}_keydown(a){if(![P5,lb,G5,ob,Cf,sb].includes(a.key))return;a.stopPropagation(),a.preventDefault();const l=this._getChildren().filter(c=>!Ua(c));let o;if([Cf,sb].includes(a.key))o=l[a.key===Cf?0:l.length-1];else{const c=[lb,ob].includes(a.key);o=bd(l,a.target,c,!0)}o&&(o.focus({preventScroll:!0}),_r.getOrCreateInstance(o).show())}_getChildren(){return gt.find(zf,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,l){this._setAttributeIfNotExists(a,"role","tablist");for(const o of l)this._setInitialAttributesOnChild(o)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const l=this._elemIsActive(a),o=this._getOuterElement(a);a.setAttribute("aria-selected",l),o!==a&&this._setAttributeIfNotExists(o,"role","presentation"),l||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const l=gt.getElementFromSelector(a);l&&(this._setAttributeIfNotExists(l,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(l,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,l){const o=this._getOuterElement(a);if(!o.classList.contains(X5))return;const c=(f,d)=>{const m=gt.findOne(f,o);m&&m.classList.toggle(d,l)};c(F0,gi),c(K5,Rf),o.setAttribute("aria-expanded",l)}_setAttributeIfNotExists(a,l,o){a.hasAttribute(l)||a.setAttribute(l,o)}_elemIsActive(a){return a.classList.contains(gi)}_getInnerElement(a){return a.matches(zf)?a:gt.findOne(zf,a)}_getOuterElement(a){return a.closest(Z5)||a}static jQueryInterface(a){return this.each(function(){const l=_r.getOrCreateInstance(this);if(typeof a=="string"){if(l[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);l[a]()}})}}G.on(document,V5,J0,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!Ua(this)&&_r.getOrCreateInstance(this).show()});G.on(window,$5,()=>{for(const i of gt.find(J5))_r.getOrCreateInstance(i)});hn(_r);const W5="toast",I5="bs.toast",Va=`.${I5}`,tT=`mouseover${Va}`,eT=`mouseout${Va}`,nT=`focusin${Va}`,aT=`focusout${Va}`,iT=`hide${Va}`,rT=`hidden${Va}`,lT=`show${Va}`,oT=`shown${Va}`,sT="fade",cb="hide",ds="show",hs="showing",uT={animation:"boolean",autohide:"boolean",delay:"number"},cT={animation:!0,autohide:!0,delay:5e3};class Ws extends Sn{constructor(a,l){super(a,l),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return cT}static get DefaultType(){return uT}static get NAME(){return W5}show(){if(G.trigger(this._element,lT).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(sT);const l=()=>{this._element.classList.remove(hs),G.trigger(this._element,oT),this._maybeScheduleHide()};this._element.classList.remove(cb),Bl(this._element),this._element.classList.add(ds,hs),this._queueCallback(l,this._element,this._config.animation)}hide(){if(!this.isShown()||G.trigger(this._element,iT).defaultPrevented)return;const l=()=>{this._element.classList.add(cb),this._element.classList.remove(hs,ds),G.trigger(this._element,rT)};this._element.classList.add(hs),this._queueCallback(l,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ds),super.dispose()}isShown(){return this._element.classList.contains(ds)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,l){switch(a.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=l;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=l;break}}if(l){this._clearTimeout();return}const o=a.relatedTarget;this._element===o||this._element.contains(o)||this._maybeScheduleHide()}_setListeners(){G.on(this._element,tT,a=>this._onInteraction(a,!0)),G.on(this._element,eT,a=>this._onInteraction(a,!1)),G.on(this._element,nT,a=>this._onInteraction(a,!0)),G.on(this._element,aT,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const l=Ws.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof l[a]>"u")throw new TypeError(`No method named "${a}"`);l[a](this)}})}}Qs(Ws);hn(Ws);var Pl=i=>i.type==="checkbox",bi=i=>i instanceof Date,we=i=>i==null;const W0=i=>typeof i=="object";var ae=i=>!we(i)&&!Array.isArray(i)&&W0(i)&&!bi(i),fT=i=>ae(i)&&i.target?Pl(i.target)?i.target.checked:i.target.value:i,dT=i=>i.substring(0,i.search(/\.\d+(\.|$)/))||i,hT=(i,a)=>i.has(dT(a)),pT=i=>{const a=i.constructor&&i.constructor.prototype;return ae(a)&&a.hasOwnProperty("isPrototypeOf")},Sd=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function un(i){let a;const l=Array.isArray(i),o=typeof FileList<"u"?i instanceof FileList:!1;if(i instanceof Date)a=new Date(i);else if(i instanceof Set)a=new Set(i);else if(!(Sd&&(i instanceof Blob||o))&&(l||ae(i)))if(a=l?[]:{},!l&&!pT(i))a=i;else for(const c in i)i.hasOwnProperty(c)&&(a[c]=un(i[c]));else return i;return a}var Is=i=>Array.isArray(i)?i.filter(Boolean):[],oe=i=>i===void 0,ot=(i,a,l)=>{if(!a||!ae(i))return l;const o=Is(a.split(/[,[\].]+?/)).reduce((c,f)=>we(c)?c:c[f],i);return oe(o)||o===i?oe(i[a])?l:i[a]:o},Cn=i=>typeof i=="boolean",Ad=i=>/^\w*$/.test(i),I0=i=>Is(i.replace(/["|']|\]/g,"").split(/\.|\[/)),Xt=(i,a,l)=>{let o=-1;const c=Ad(a)?[a]:I0(a),f=c.length,d=f-1;for(;++o<f;){const m=c[o];let v=l;if(o!==d){const g=i[m];v=ae(g)||Array.isArray(g)?g:isNaN(+c[o+1])?{}:[]}if(m==="__proto__"||m==="constructor"||m==="prototype")return;i[m]=v,i=i[m]}return i};const fb={BLUR:"blur",FOCUS_OUT:"focusout"},yn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ea={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};wt.createContext(null);var mT=(i,a,l,o=!0)=>{const c={defaultValues:a._defaultValues};for(const f in i)Object.defineProperty(c,f,{get:()=>{const d=f;return a._proxyFormState[d]!==yn.all&&(a._proxyFormState[d]=!o||yn.all),i[d]}});return c},Le=i=>ae(i)&&!Object.keys(i).length,gT=(i,a,l,o)=>{l(i);const{name:c,...f}=i;return Le(f)||Object.keys(f).length>=Object.keys(a).length||Object.keys(f).find(d=>a[d]===yn.all)},Ds=i=>Array.isArray(i)?i:[i];function bT(i){const a=wt.useRef(i);a.current=i,wt.useEffect(()=>{const l=!i.disabled&&a.current.subject&&a.current.subject.subscribe({next:a.current.next});return()=>{l&&l.unsubscribe()}},[i.disabled])}var Mn=i=>typeof i=="string",vT=(i,a,l,o,c)=>Mn(i)?(o&&a.watch.add(i),ot(l,i,c)):Array.isArray(i)?i.map(f=>(o&&a.watch.add(f),ot(l,f))):(o&&(a.watchAll=!0),l),yT=(i,a,l,o,c)=>a?{...l[i],types:{...l[i]&&l[i].types?l[i].types:{},[o]:c||!0}}:{},db=i=>({isOnSubmit:!i||i===yn.onSubmit,isOnBlur:i===yn.onBlur,isOnChange:i===yn.onChange,isOnAll:i===yn.all,isOnTouch:i===yn.onTouched}),hb=(i,a,l)=>!l&&(a.watchAll||a.watch.has(i)||[...a.watch].some(o=>i.startsWith(o)&&/^\.\w+/.test(i.slice(o.length))));const kl=(i,a,l,o)=>{for(const c of l||Object.keys(i)){const f=ot(i,c);if(f){const{_f:d,...m}=f;if(d){if(d.refs&&d.refs[0]&&a(d.refs[0],c)&&!o)return!0;if(d.ref&&a(d.ref,d.name)&&!o)return!0;if(kl(m,a))break}else if(ae(m)&&kl(m,a))break}}};var _T=(i,a,l)=>{const o=Ds(ot(i,l));return Xt(o,"root",a[l]),Xt(i,l,o),i},Od=i=>i.type==="file",Rn=i=>typeof i=="function",Ls=i=>{if(!Sd)return!1;const a=i?i.ownerDocument:0;return i instanceof(a&&a.defaultView?a.defaultView.HTMLElement:HTMLElement)},ws=i=>Mn(i),Td=i=>i.type==="radio",qs=i=>i instanceof RegExp;const pb={value:!1,isValid:!1},mb={value:!0,isValid:!0};var tv=i=>{if(Array.isArray(i)){if(i.length>1){const a=i.filter(l=>l&&l.checked&&!l.disabled).map(l=>l.value);return{value:a,isValid:!!a.length}}return i[0].checked&&!i[0].disabled?i[0].attributes&&!oe(i[0].attributes.value)?oe(i[0].value)||i[0].value===""?mb:{value:i[0].value,isValid:!0}:mb:pb}return pb};const gb={isValid:!1,value:null};var ev=i=>Array.isArray(i)?i.reduce((a,l)=>l&&l.checked&&!l.disabled?{isValid:!0,value:l.value}:a,gb):gb;function bb(i,a,l="validate"){if(ws(i)||Array.isArray(i)&&i.every(ws)||Cn(i)&&!i)return{type:l,message:ws(i)?i:"",ref:a}}var ur=i=>ae(i)&&!qs(i)?i:{value:i,message:""},vb=async(i,a,l,o,c,f)=>{const{ref:d,refs:m,required:v,maxLength:g,minLength:b,min:T,max:H,pattern:k,validate:x,name:S,valueAsNumber:N,mount:Q}=i._f,B=ot(l,S);if(!Q||a.has(S))return{};const F=m?m[0]:d,tt=ut=>{c&&F.reportValidity&&(F.setCustomValidity(Cn(ut)?"":ut||""),F.reportValidity())},L={},it=Td(d),mt=Pl(d),yt=it||mt,K=(N||Od(d))&&oe(d.value)&&oe(B)||Ls(d)&&d.value===""||B===""||Array.isArray(B)&&!B.length,et=yT.bind(null,S,o,L),Rt=(ut,ct,Dt,At=ea.maxLength,P=ea.minLength)=>{const nt=ut?ct:Dt;L[S]={type:ut?At:P,message:nt,ref:d,...et(ut?At:P,nt)}};if(f?!Array.isArray(B)||!B.length:v&&(!yt&&(K||we(B))||Cn(B)&&!B||mt&&!tv(m).isValid||it&&!ev(m).isValid)){const{value:ut,message:ct}=ws(v)?{value:!!v,message:v}:ur(v);if(ut&&(L[S]={type:ea.required,message:ct,ref:F,...et(ea.required,ct)},!o))return tt(ct),L}if(!K&&(!we(T)||!we(H))){let ut,ct;const Dt=ur(H),At=ur(T);if(!we(B)&&!isNaN(B)){const P=d.valueAsNumber||B&&+B;we(Dt.value)||(ut=P>Dt.value),we(At.value)||(ct=P<At.value)}else{const P=d.valueAsDate||new Date(B),nt=_=>new Date(new Date().toDateString()+" "+_),st=d.type=="time",X=d.type=="week";Mn(Dt.value)&&B&&(ut=st?nt(B)>nt(Dt.value):X?B>Dt.value:P>new Date(Dt.value)),Mn(At.value)&&B&&(ct=st?nt(B)<nt(At.value):X?B<At.value:P<new Date(At.value))}if((ut||ct)&&(Rt(!!ut,Dt.message,At.message,ea.max,ea.min),!o))return tt(L[S].message),L}if((g||b)&&!K&&(Mn(B)||f&&Array.isArray(B))){const ut=ur(g),ct=ur(b),Dt=!we(ut.value)&&B.length>+ut.value,At=!we(ct.value)&&B.length<+ct.value;if((Dt||At)&&(Rt(Dt,ut.message,ct.message),!o))return tt(L[S].message),L}if(k&&!K&&Mn(B)){const{value:ut,message:ct}=ur(k);if(qs(ut)&&!B.match(ut)&&(L[S]={type:ea.pattern,message:ct,ref:d,...et(ea.pattern,ct)},!o))return tt(ct),L}if(x){if(Rn(x)){const ut=await x(B,l),ct=bb(ut,F);if(ct&&(L[S]={...ct,...et(ea.validate,ct.message)},!o))return tt(ct.message),L}else if(ae(x)){let ut={};for(const ct in x){if(!Le(ut)&&!o)break;const Dt=bb(await x[ct](B,l),F,ct);Dt&&(ut={...Dt,...et(ct,Dt.message)},tt(Dt.message),o&&(L[S]=ut))}if(!Le(ut)&&(L[S]={ref:F,...ut},!o))return L}}return tt(!0),L};function ET(i,a){const l=a.slice(0,-1).length;let o=0;for(;o<l;)i=oe(i)?o++:i[a[o++]];return i}function ST(i){for(const a in i)if(i.hasOwnProperty(a)&&!oe(i[a]))return!1;return!0}function ce(i,a){const l=Array.isArray(a)?a:Ad(a)?[a]:I0(a),o=l.length===1?i:ET(i,l),c=l.length-1,f=l[c];return o&&delete o[f],c!==0&&(ae(o)&&Le(o)||Array.isArray(o)&&ST(o))&&ce(i,l.slice(0,-1)),i}var kf=()=>{let i=[];return{get observers(){return i},next:c=>{for(const f of i)f.next&&f.next(c)},subscribe:c=>(i.push(c),{unsubscribe:()=>{i=i.filter(f=>f!==c)}}),unsubscribe:()=>{i=[]}}},Wf=i=>we(i)||!W0(i);function La(i,a){if(Wf(i)||Wf(a))return i===a;if(bi(i)&&bi(a))return i.getTime()===a.getTime();const l=Object.keys(i),o=Object.keys(a);if(l.length!==o.length)return!1;for(const c of l){const f=i[c];if(!o.includes(c))return!1;if(c!=="ref"){const d=a[c];if(bi(f)&&bi(d)||ae(f)&&ae(d)||Array.isArray(f)&&Array.isArray(d)?!La(f,d):f!==d)return!1}}return!0}var nv=i=>i.type==="select-multiple",AT=i=>Td(i)||Pl(i),Lf=i=>Ls(i)&&i.isConnected,av=i=>{for(const a in i)if(Rn(i[a]))return!0;return!1};function Us(i,a={}){const l=Array.isArray(i);if(ae(i)||l)for(const o in i)Array.isArray(i[o])||ae(i[o])&&!av(i[o])?(a[o]=Array.isArray(i[o])?[]:{},Us(i[o],a[o])):we(i[o])||(a[o]=!0);return a}function iv(i,a,l){const o=Array.isArray(i);if(ae(i)||o)for(const c in i)Array.isArray(i[c])||ae(i[c])&&!av(i[c])?oe(a)||Wf(l[c])?l[c]=Array.isArray(i[c])?Us(i[c],[]):{...Us(i[c])}:iv(i[c],we(a)?{}:a[c],l[c]):l[c]=!La(i[c],a[c]);return l}var wl=(i,a)=>iv(i,a,Us(a)),rv=(i,{valueAsNumber:a,valueAsDate:l,setValueAs:o})=>oe(i)?i:a?i===""?NaN:i&&+i:l&&Mn(i)?new Date(i):o?o(i):i;function qf(i){const a=i.ref;return Od(a)?a.files:Td(a)?ev(i.refs).value:nv(a)?[...a.selectedOptions].map(({value:l})=>l):Pl(a)?tv(i.refs).value:rv(oe(a.value)?i.ref.value:a.value,i)}var OT=(i,a,l,o)=>{const c={};for(const f of i){const d=ot(a,f);d&&Xt(c,f,d._f)}return{criteriaMode:l,names:[...i],fields:c,shouldUseNativeValidation:o}},Nl=i=>oe(i)?i:qs(i)?i.source:ae(i)?qs(i.value)?i.value.source:i.value:i;const yb="AsyncFunction";var TT=i=>!!i&&!!i.validate&&!!(Rn(i.validate)&&i.validate.constructor.name===yb||ae(i.validate)&&Object.values(i.validate).find(a=>a.constructor.name===yb)),xT=i=>i.mount&&(i.required||i.min||i.max||i.maxLength||i.minLength||i.pattern||i.validate);function _b(i,a,l){const o=ot(i,l);if(o||Ad(l))return{error:o,name:l};const c=l.split(".");for(;c.length;){const f=c.join("."),d=ot(a,f),m=ot(i,f);if(d&&!Array.isArray(d)&&l!==f)return{name:l};if(m&&m.type)return{name:f,error:m};c.pop()}return{name:l}}var DT=(i,a,l,o,c)=>c.isOnAll?!1:!l&&c.isOnTouch?!(a||i):(l?o.isOnBlur:c.isOnBlur)?!i:(l?o.isOnChange:c.isOnChange)?i:!0,wT=(i,a)=>!Is(ot(i,a)).length&&ce(i,a);const NT={mode:yn.onSubmit,reValidateMode:yn.onChange,shouldFocusError:!0};function CT(i={}){let a={...NT,...i},l={submitCount:0,isDirty:!1,isLoading:Rn(a.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:a.errors||{},disabled:a.disabled||!1},o={},c=ae(a.defaultValues)||ae(a.values)?un(a.defaultValues||a.values)||{}:{},f=a.shouldUnregister?{}:un(c),d={action:!1,mount:!1,watch:!1},m={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},v,g=0;const b={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},T={values:kf(),array:kf(),state:kf()},H=db(a.mode),k=db(a.reValidateMode),x=a.criteriaMode===yn.all,S=E=>C=>{clearTimeout(g),g=setTimeout(E,C)},N=async E=>{if(!a.disabled&&(b.isValid||E)){const C=a.resolver?Le((await yt()).errors):await et(o,!0);C!==l.isValid&&T.state.next({isValid:C})}},Q=(E,C)=>{!a.disabled&&(b.isValidating||b.validatingFields)&&((E||Array.from(m.mount)).forEach(M=>{M&&(C?Xt(l.validatingFields,M,C):ce(l.validatingFields,M))}),T.state.next({validatingFields:l.validatingFields,isValidating:!Le(l.validatingFields)}))},B=(E,C=[],M,W,J=!0,Z=!0)=>{if(W&&M&&!a.disabled){if(d.action=!0,Z&&Array.isArray(ot(o,E))){const rt=M(ot(o,E),W.argA,W.argB);J&&Xt(o,E,rt)}if(Z&&Array.isArray(ot(l.errors,E))){const rt=M(ot(l.errors,E),W.argA,W.argB);J&&Xt(l.errors,E,rt),wT(l.errors,E)}if(b.touchedFields&&Z&&Array.isArray(ot(l.touchedFields,E))){const rt=M(ot(l.touchedFields,E),W.argA,W.argB);J&&Xt(l.touchedFields,E,rt)}b.dirtyFields&&(l.dirtyFields=wl(c,f)),T.state.next({name:E,isDirty:ut(E,C),dirtyFields:l.dirtyFields,errors:l.errors,isValid:l.isValid})}else Xt(f,E,C)},F=(E,C)=>{Xt(l.errors,E,C),T.state.next({errors:l.errors})},tt=E=>{l.errors=E,T.state.next({errors:l.errors,isValid:!1})},L=(E,C,M,W)=>{const J=ot(o,E);if(J){const Z=ot(f,E,oe(M)?ot(c,E):M);oe(Z)||W&&W.defaultChecked||C?Xt(f,E,C?Z:qf(J._f)):At(E,Z),d.mount&&N()}},it=(E,C,M,W,J)=>{let Z=!1,rt=!1;const St={name:E};if(!a.disabled){const Kt=!!(ot(o,E)&&ot(o,E)._f&&ot(o,E)._f.disabled);if(!M||W){b.isDirty&&(rt=l.isDirty,l.isDirty=St.isDirty=ut(),Z=rt!==St.isDirty);const Qt=Kt||La(ot(c,E),C);rt=!!(!Kt&&ot(l.dirtyFields,E)),Qt||Kt?ce(l.dirtyFields,E):Xt(l.dirtyFields,E,!0),St.dirtyFields=l.dirtyFields,Z=Z||b.dirtyFields&&rt!==!Qt}if(M){const Qt=ot(l.touchedFields,E);Qt||(Xt(l.touchedFields,E,M),St.touchedFields=l.touchedFields,Z=Z||b.touchedFields&&Qt!==M)}Z&&J&&T.state.next(St)}return Z?St:{}},mt=(E,C,M,W)=>{const J=ot(l.errors,E),Z=b.isValid&&Cn(C)&&l.isValid!==C;if(a.delayError&&M?(v=S(()=>F(E,M)),v(a.delayError)):(clearTimeout(g),v=null,M?Xt(l.errors,E,M):ce(l.errors,E)),(M?!La(J,M):J)||!Le(W)||Z){const rt={...W,...Z&&Cn(C)?{isValid:C}:{},errors:l.errors,name:E};l={...l,...rt},T.state.next(rt)}},yt=async E=>{Q(E,!0);const C=await a.resolver(f,a.context,OT(E||m.mount,o,a.criteriaMode,a.shouldUseNativeValidation));return Q(E),C},K=async E=>{const{errors:C}=await yt(E);if(E)for(const M of E){const W=ot(C,M);W?Xt(l.errors,M,W):ce(l.errors,M)}else l.errors=C;return C},et=async(E,C,M={valid:!0})=>{for(const W in E){const J=E[W];if(J){const{_f:Z,...rt}=J;if(Z){const St=m.array.has(Z.name),Kt=J._f&&TT(J._f);Kt&&b.validatingFields&&Q([W],!0);const Qt=await vb(J,m.disabled,f,x,a.shouldUseNativeValidation&&!C,St);if(Kt&&b.validatingFields&&Q([W]),Qt[Z.name]&&(M.valid=!1,C))break;!C&&(ot(Qt,Z.name)?St?_T(l.errors,Qt,Z.name):Xt(l.errors,Z.name,Qt[Z.name]):ce(l.errors,Z.name))}!Le(rt)&&await et(rt,C,M)}}return M.valid},Rt=()=>{for(const E of m.unMount){const C=ot(o,E);C&&(C._f.refs?C._f.refs.every(M=>!Lf(M)):!Lf(C._f.ref))&&vt(E)}m.unMount=new Set},ut=(E,C)=>!a.disabled&&(E&&C&&Xt(f,E,C),!La(Y(),c)),ct=(E,C,M)=>vT(E,m,{...d.mount?f:oe(C)?c:Mn(E)?{[E]:C}:C},M,C),Dt=E=>Is(ot(d.mount?f:c,E,a.shouldUnregister?ot(c,E,[]):[])),At=(E,C,M={})=>{const W=ot(o,E);let J=C;if(W){const Z=W._f;Z&&(!Z.disabled&&Xt(f,E,rv(C,Z)),J=Ls(Z.ref)&&we(C)?"":C,nv(Z.ref)?[...Z.ref.options].forEach(rt=>rt.selected=J.includes(rt.value)):Z.refs?Pl(Z.ref)?Z.refs.length>1?Z.refs.forEach(rt=>(!rt.defaultChecked||!rt.disabled)&&(rt.checked=Array.isArray(J)?!!J.find(St=>St===rt.value):J===rt.value)):Z.refs[0]&&(Z.refs[0].checked=!!J):Z.refs.forEach(rt=>rt.checked=rt.value===J):Od(Z.ref)?Z.ref.value="":(Z.ref.value=J,Z.ref.type||T.values.next({name:E,values:{...f}})))}(M.shouldDirty||M.shouldTouch)&&it(E,J,M.shouldTouch,M.shouldDirty,!0),M.shouldValidate&&_(E)},P=(E,C,M)=>{for(const W in C){const J=C[W],Z=`${E}.${W}`,rt=ot(o,Z);(m.array.has(E)||ae(J)||rt&&!rt._f)&&!bi(J)?P(Z,J,M):At(Z,J,M)}},nt=(E,C,M={})=>{const W=ot(o,E),J=m.array.has(E),Z=un(C);Xt(f,E,Z),J?(T.array.next({name:E,values:{...f}}),(b.isDirty||b.dirtyFields)&&M.shouldDirty&&T.state.next({name:E,dirtyFields:wl(c,f),isDirty:ut(E,Z)})):W&&!W._f&&!we(Z)?P(E,Z,M):At(E,Z,M),hb(E,m)&&T.state.next({...l}),T.values.next({name:d.mount?E:void 0,values:{...f}})},st=async E=>{d.mount=!0;const C=E.target;let M=C.name,W=!0;const J=ot(o,M),Z=()=>C.type?qf(J._f):fT(E),rt=St=>{W=Number.isNaN(St)||bi(St)&&isNaN(St.getTime())||La(St,ot(f,M,St))};if(J){let St,Kt;const Qt=Z(),_e=E.type===fb.BLUR||E.type===fb.FOCUS_OUT,eu=!xT(J._f)&&!a.resolver&&!ot(l.errors,M)&&!J._f.deps||DT(_e,ot(l.touchedFields,M),l.isSubmitted,k,H),Ti=hb(M,m,_e);Xt(f,M,Qt),_e?(J._f.onBlur&&J._f.onBlur(E),v&&v(0)):J._f.onChange&&J._f.onChange(E);const Dr=it(M,Qt,_e,!1),nu=!Le(Dr)||Ti;if(!_e&&T.values.next({name:M,type:E.type,values:{...f}}),eu)return b.isValid&&(a.mode==="onBlur"&&_e?N():_e||N()),nu&&T.state.next({name:M,...Ti?{}:Dr});if(!_e&&Ti&&T.state.next({...l}),a.resolver){const{errors:ua}=await yt([M]);if(rt(Qt),W){const Te=_b(l.errors,o,M),Zl=_b(ua,o,Te.name||M);St=Zl.error,M=Zl.name,Kt=Le(ua)}}else Q([M],!0),St=(await vb(J,m.disabled,f,x,a.shouldUseNativeValidation))[M],Q([M]),rt(Qt),W&&(St?Kt=!1:b.isValid&&(Kt=await et(o,!0)));W&&(J._f.deps&&_(J._f.deps),mt(M,Kt,St,Dr))}},X=(E,C)=>{if(ot(l.errors,C)&&E.focus)return E.focus(),1},_=async(E,C={})=>{let M,W;const J=Ds(E);if(a.resolver){const Z=await K(oe(E)?E:J);M=Le(Z),W=E?!J.some(rt=>ot(Z,rt)):M}else E?(W=(await Promise.all(J.map(async Z=>{const rt=ot(o,Z);return await et(rt&&rt._f?{[Z]:rt}:rt)}))).every(Boolean),!(!W&&!l.isValid)&&N()):W=M=await et(o);return T.state.next({...!Mn(E)||b.isValid&&M!==l.isValid?{}:{name:E},...a.resolver||!E?{isValid:M}:{},errors:l.errors}),C.shouldFocus&&!W&&kl(o,X,E?J:m.mount),W},Y=E=>{const C={...d.mount?f:c};return oe(E)?C:Mn(E)?ot(C,E):E.map(M=>ot(C,M))},at=(E,C)=>({invalid:!!ot((C||l).errors,E),isDirty:!!ot((C||l).dirtyFields,E),error:ot((C||l).errors,E),isValidating:!!ot(l.validatingFields,E),isTouched:!!ot((C||l).touchedFields,E)}),dt=E=>{E&&Ds(E).forEach(C=>ce(l.errors,C)),T.state.next({errors:E?l.errors:{}})},I=(E,C,M)=>{const W=(ot(o,E,{_f:{}})._f||{}).ref,J=ot(l.errors,E)||{},{ref:Z,message:rt,type:St,...Kt}=J;Xt(l.errors,E,{...Kt,...C,ref:W}),T.state.next({name:E,errors:l.errors,isValid:!1}),M&&M.shouldFocus&&W&&W.focus&&W.focus()},_t=(E,C)=>Rn(E)?T.values.subscribe({next:M=>E(ct(void 0,C),M)}):ct(E,C,!0),vt=(E,C={})=>{for(const M of E?Ds(E):m.mount)m.mount.delete(M),m.array.delete(M),C.keepValue||(ce(o,M),ce(f,M)),!C.keepError&&ce(l.errors,M),!C.keepDirty&&ce(l.dirtyFields,M),!C.keepTouched&&ce(l.touchedFields,M),!C.keepIsValidating&&ce(l.validatingFields,M),!a.shouldUnregister&&!C.keepDefaultValue&&ce(c,M);T.values.next({values:{...f}}),T.state.next({...l,...C.keepDirty?{isDirty:ut()}:{}}),!C.keepIsValid&&N()},Ft=({disabled:E,name:C,field:M,fields:W})=>{(Cn(E)&&d.mount||E||m.disabled.has(C))&&(E?m.disabled.add(C):m.disabled.delete(C),it(C,qf(M?M._f:ot(W,C)._f),!1,!1,!0))},Ot=(E,C={})=>{let M=ot(o,E);const W=Cn(C.disabled)||Cn(a.disabled);return Xt(o,E,{...M||{},_f:{...M&&M._f?M._f:{ref:{name:E}},name:E,mount:!0,...C}}),m.mount.add(E),M?Ft({field:M,disabled:Cn(C.disabled)?C.disabled:a.disabled,name:E}):L(E,!0,C.value),{...W?{disabled:C.disabled||a.disabled}:{},...a.progressive?{required:!!C.required,min:Nl(C.min),max:Nl(C.max),minLength:Nl(C.minLength),maxLength:Nl(C.maxLength),pattern:Nl(C.pattern)}:{},name:E,onChange:st,onBlur:st,ref:J=>{if(J){Ot(E,C),M=ot(o,E);const Z=oe(J.value)&&J.querySelectorAll&&J.querySelectorAll("input,select,textarea")[0]||J,rt=AT(Z),St=M._f.refs||[];if(rt?St.find(Kt=>Kt===Z):Z===M._f.ref)return;Xt(o,E,{_f:{...M._f,...rt?{refs:[...St.filter(Lf),Z,...Array.isArray(ot(c,E))?[{}]:[]],ref:{type:Z.type,name:E}}:{ref:Z}}}),L(E,!1,void 0,Z)}else M=ot(o,E,{}),M._f&&(M._f.mount=!1),(a.shouldUnregister||C.shouldUnregister)&&!(hT(m.array,E)&&d.action)&&m.unMount.add(E)}}},Vt=()=>a.shouldFocusError&&kl(o,X,m.mount),Ht=E=>{Cn(E)&&(T.state.next({disabled:E}),kl(o,(C,M)=>{const W=ot(o,M);W&&(C.disabled=W._f.disabled||E,Array.isArray(W._f.refs)&&W._f.refs.forEach(J=>{J.disabled=W._f.disabled||E}))},0,!1))},ge=(E,C)=>async M=>{let W;M&&(M.preventDefault&&M.preventDefault(),M.persist&&M.persist());let J=un(f);if(m.disabled.size)for(const Z of m.disabled)Xt(J,Z,void 0);if(T.state.next({isSubmitting:!0}),a.resolver){const{errors:Z,values:rt}=await yt();l.errors=Z,J=rt}else await et(o);if(ce(l.errors,"root"),Le(l.errors)){T.state.next({errors:{}});try{await E(J,M)}catch(Z){W=Z}}else C&&await C({...l.errors},M),Vt(),setTimeout(Vt);if(T.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Le(l.errors)&&!W,submitCount:l.submitCount+1,errors:l.errors}),W)throw W},qn=(E,C={})=>{ot(o,E)&&(oe(C.defaultValue)?nt(E,un(ot(c,E))):(nt(E,C.defaultValue),Xt(c,E,un(C.defaultValue))),C.keepTouched||ce(l.touchedFields,E),C.keepDirty||(ce(l.dirtyFields,E),l.isDirty=C.defaultValue?ut(E,un(ot(c,E))):ut()),C.keepError||(ce(l.errors,E),b.isValid&&N()),T.state.next({...l}))},Re=(E,C={})=>{const M=E?un(E):c,W=un(M),J=Le(E),Z=J?c:W;if(C.keepDefaultValues||(c=M),!C.keepValues){if(C.keepDirtyValues){const rt=new Set([...m.mount,...Object.keys(wl(c,f))]);for(const St of Array.from(rt))ot(l.dirtyFields,St)?Xt(Z,St,ot(f,St)):nt(St,ot(Z,St))}else{if(Sd&&oe(E))for(const rt of m.mount){const St=ot(o,rt);if(St&&St._f){const Kt=Array.isArray(St._f.refs)?St._f.refs[0]:St._f.ref;if(Ls(Kt)){const Qt=Kt.closest("form");if(Qt){Qt.reset();break}}}}o={}}f=a.shouldUnregister?C.keepDefaultValues?un(c):{}:un(Z),T.array.next({values:{...Z}}),T.values.next({values:{...Z}})}m={mount:C.keepDirtyValues?m.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!b.isValid||!!C.keepIsValid||!!C.keepDirtyValues,d.watch=!!a.shouldUnregister,T.state.next({submitCount:C.keepSubmitCount?l.submitCount:0,isDirty:J?!1:C.keepDirty?l.isDirty:!!(C.keepDefaultValues&&!La(E,c)),isSubmitted:C.keepIsSubmitted?l.isSubmitted:!1,dirtyFields:J?{}:C.keepDirtyValues?C.keepDefaultValues&&f?wl(c,f):l.dirtyFields:C.keepDefaultValues&&E?wl(c,E):C.keepDirty?l.dirtyFields:{},touchedFields:C.keepTouched?l.touchedFields:{},errors:C.keepErrors?l.errors:{},isSubmitSuccessful:C.keepIsSubmitSuccessful?l.isSubmitSuccessful:!1,isSubmitting:!1})},Un=(E,C)=>Re(Rn(E)?E(f):E,C);return{control:{register:Ot,unregister:vt,getFieldState:at,handleSubmit:ge,setError:I,_executeSchema:yt,_getWatch:ct,_getDirty:ut,_updateValid:N,_removeUnmounted:Rt,_updateFieldArray:B,_updateDisabledField:Ft,_getFieldArray:Dt,_reset:Re,_resetDefaultValues:()=>Rn(a.defaultValues)&&a.defaultValues().then(E=>{Un(E,a.resetOptions),T.state.next({isLoading:!1})}),_updateFormState:E=>{l={...l,...E}},_disableForm:Ht,_subjects:T,_proxyFormState:b,_setErrors:tt,get _fields(){return o},get _formValues(){return f},get _state(){return d},set _state(E){d=E},get _defaultValues(){return c},get _names(){return m},set _names(E){m=E},get _formState(){return l},set _formState(E){l=E},get _options(){return a},set _options(E){a={...a,...E}}},trigger:_,register:Ot,handleSubmit:ge,watch:_t,setValue:nt,getValues:Y,reset:Un,resetField:qn,clearErrors:dt,unregister:vt,setError:I,setFocus:(E,C={})=>{const M=ot(o,E),W=M&&M._f;if(W){const J=W.refs?W.refs[0]:W.ref;J.focus&&(J.focus(),C.shouldSelect&&Rn(J.select)&&J.select())}},getFieldState:at}}function RT(i={}){const a=wt.useRef(void 0),l=wt.useRef(void 0),[o,c]=wt.useState({isDirty:!1,isValidating:!1,isLoading:Rn(i.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:i.errors||{},disabled:i.disabled||!1,defaultValues:Rn(i.defaultValues)?void 0:i.defaultValues});a.current||(a.current={...CT(i),formState:o});const f=a.current.control;return f._options=i,bT({subject:f._subjects.state,next:d=>{gT(d,f._proxyFormState,f._updateFormState)&&c({...f._formState})}}),wt.useEffect(()=>f._disableForm(i.disabled),[f,i.disabled]),wt.useEffect(()=>{if(f._proxyFormState.isDirty){const d=f._getDirty();d!==o.isDirty&&f._subjects.state.next({isDirty:d})}},[f,o.isDirty]),wt.useEffect(()=>{i.values&&!La(i.values,l.current)?(f._reset(i.values,f._options.resetOptions),l.current=i.values,c(d=>({...d}))):f._resetDefaultValues()},[i.values,f]),wt.useEffect(()=>{i.errors&&f._setErrors(i.errors)},[i.errors,f]),wt.useEffect(()=>{f._state.mount||(f._updateValid(),f._state.mount=!0),f._state.watch&&(f._state.watch=!1,f._subjects.state.next({...f._formState})),f._removeUnmounted()}),wt.useEffect(()=>{i.shouldUnregister&&f._subjects.values.next({values:f._getWatch()})},[i.shouldUnregister,f]),a.current.formState=mT(o,f),a.current}function fe(i,a){a===void 0&&(a={});var l=a.insertAt;if(i&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.type="text/css",l==="top"&&o.firstChild?o.insertBefore(c,o.firstChild):o.appendChild(c),c.styleSheet?c.styleSheet.cssText=i:c.appendChild(document.createTextNode(i))}}fe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var zt=function(){return zt=Object.assign||function(i){for(var a,l=1,o=arguments.length;l<o;l++)for(var c in a=arguments[l])Object.prototype.hasOwnProperty.call(a,c)&&(i[c]=a[c]);return i},zt.apply(this,arguments)};function Hs(i){return Hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Hs(i)}var MT=/^\s+/,zT=/\s+$/;function ft(i,a){if(a=a||{},(i=i||"")instanceof ft)return i;if(!(this instanceof ft))return new ft(i,a);var l=function(o){var c={r:0,g:0,b:0},f=1,d=null,m=null,v=null,g=!1,b=!1;typeof o=="string"&&(o=function(x){x=x.replace(MT,"").replace(zT,"").toLowerCase();var S,N=!1;if(If[x])x=If[x],N=!0;else if(x=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(S=vn.rgb.exec(x))?{r:S[1],g:S[2],b:S[3]}:(S=vn.rgba.exec(x))?{r:S[1],g:S[2],b:S[3],a:S[4]}:(S=vn.hsl.exec(x))?{h:S[1],s:S[2],l:S[3]}:(S=vn.hsla.exec(x))?{h:S[1],s:S[2],l:S[3],a:S[4]}:(S=vn.hsv.exec(x))?{h:S[1],s:S[2],v:S[3]}:(S=vn.hsva.exec(x))?{h:S[1],s:S[2],v:S[3],a:S[4]}:(S=vn.hex8.exec(x))?{r:Ge(S[1]),g:Ge(S[2]),b:Ge(S[3]),a:xb(S[4]),format:N?"name":"hex8"}:(S=vn.hex6.exec(x))?{r:Ge(S[1]),g:Ge(S[2]),b:Ge(S[3]),format:N?"name":"hex"}:(S=vn.hex4.exec(x))?{r:Ge(S[1]+""+S[1]),g:Ge(S[2]+""+S[2]),b:Ge(S[3]+""+S[3]),a:xb(S[4]+""+S[4]),format:N?"name":"hex8"}:(S=vn.hex3.exec(x))?{r:Ge(S[1]+""+S[1]),g:Ge(S[2]+""+S[2]),b:Ge(S[3]+""+S[3]),format:N?"name":"hex"}:!1}(o)),Hs(o)=="object"&&(na(o.r)&&na(o.g)&&na(o.b)?(T=o.r,H=o.g,k=o.b,c={r:255*Zt(T,255),g:255*Zt(H,255),b:255*Zt(k,255)},g=!0,b=String(o.r).substr(-1)==="%"?"prgb":"rgb"):na(o.h)&&na(o.s)&&na(o.v)?(d=Rl(o.s),m=Rl(o.v),c=function(x,S,N){x=6*Zt(x,360),S=Zt(S,100),N=Zt(N,100);var Q=Math.floor(x),B=x-Q,F=N*(1-S),tt=N*(1-B*S),L=N*(1-(1-B)*S),it=Q%6,mt=[N,tt,F,F,L,N][it],yt=[L,N,N,tt,F,F][it],K=[F,F,L,N,N,tt][it];return{r:255*mt,g:255*yt,b:255*K}}(o.h,d,m),g=!0,b="hsv"):na(o.h)&&na(o.s)&&na(o.l)&&(d=Rl(o.s),v=Rl(o.l),c=function(x,S,N){var Q,B,F;function tt(mt,yt,K){return K<0&&(K+=1),K>1&&(K-=1),K<1/6?mt+6*(yt-mt)*K:K<.5?yt:K<2/3?mt+(yt-mt)*(2/3-K)*6:mt}if(x=Zt(x,360),S=Zt(S,100),N=Zt(N,100),S===0)Q=B=F=N;else{var L=N<.5?N*(1+S):N+S-N*S,it=2*N-L;Q=tt(it,L,x+1/3),B=tt(it,L,x),F=tt(it,L,x-1/3)}return{r:255*Q,g:255*B,b:255*F}}(o.h,d,v),g=!0,b="hsl"),o.hasOwnProperty("a")&&(f=o.a));var T,H,k;return f=lv(f),{ok:g,format:o.format||b,r:Math.min(255,Math.max(c.r,0)),g:Math.min(255,Math.max(c.g,0)),b:Math.min(255,Math.max(c.b,0)),a:f}}(i);this._originalInput=i,this._r=l.r,this._g=l.g,this._b=l.b,this._a=l.a,this._roundA=Math.round(100*this._a)/100,this._format=a.format||l.format,this._gradientType=a.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=l.ok}function Eb(i,a,l){i=Zt(i,255),a=Zt(a,255),l=Zt(l,255);var o,c,f=Math.max(i,a,l),d=Math.min(i,a,l),m=(f+d)/2;if(f==d)o=c=0;else{var v=f-d;switch(c=m>.5?v/(2-f-d):v/(f+d),f){case i:o=(a-l)/v+(a<l?6:0);break;case a:o=(l-i)/v+2;break;case l:o=(i-a)/v+4}o/=6}return{h:o,s:c,l:m}}function Sb(i,a,l){i=Zt(i,255),a=Zt(a,255),l=Zt(l,255);var o,c,f=Math.max(i,a,l),d=Math.min(i,a,l),m=f,v=f-d;if(c=f===0?0:v/f,f==d)o=0;else{switch(f){case i:o=(a-l)/v+(a<l?6:0);break;case a:o=(l-i)/v+2;break;case l:o=(i-a)/v+4}o/=6}return{h:o,s:c,v:m}}function Ab(i,a,l,o){var c=[_n(Math.round(i).toString(16)),_n(Math.round(a).toString(16)),_n(Math.round(l).toString(16))];return o&&c[0].charAt(0)==c[0].charAt(1)&&c[1].charAt(0)==c[1].charAt(1)&&c[2].charAt(0)==c[2].charAt(1)?c[0].charAt(0)+c[1].charAt(0)+c[2].charAt(0):c.join("")}function Ob(i,a,l,o){return[_n(ov(o)),_n(Math.round(i).toString(16)),_n(Math.round(a).toString(16)),_n(Math.round(l).toString(16))].join("")}function kT(i,a){a=a===0?0:a||10;var l=ft(i).toHsl();return l.s-=a/100,l.s=tu(l.s),ft(l)}function LT(i,a){a=a===0?0:a||10;var l=ft(i).toHsl();return l.s+=a/100,l.s=tu(l.s),ft(l)}function qT(i){return ft(i).desaturate(100)}function UT(i,a){a=a===0?0:a||10;var l=ft(i).toHsl();return l.l+=a/100,l.l=tu(l.l),ft(l)}function HT(i,a){a=a===0?0:a||10;var l=ft(i).toRgb();return l.r=Math.max(0,Math.min(255,l.r-Math.round(-a/100*255))),l.g=Math.max(0,Math.min(255,l.g-Math.round(-a/100*255))),l.b=Math.max(0,Math.min(255,l.b-Math.round(-a/100*255))),ft(l)}function jT(i,a){a=a===0?0:a||10;var l=ft(i).toHsl();return l.l-=a/100,l.l=tu(l.l),ft(l)}function BT(i,a){var l=ft(i).toHsl(),o=(l.h+a)%360;return l.h=o<0?360+o:o,ft(l)}function VT(i){var a=ft(i).toHsl();return a.h=(a.h+180)%360,ft(a)}function Tb(i,a){if(isNaN(a)||a<=0)throw new Error("Argument to polyad must be a positive number");for(var l=ft(i).toHsl(),o=[ft(i)],c=360/a,f=1;f<a;f++)o.push(ft({h:(l.h+f*c)%360,s:l.s,l:l.l}));return o}function YT(i){var a=ft(i).toHsl(),l=a.h;return[ft(i),ft({h:(l+72)%360,s:a.s,l:a.l}),ft({h:(l+216)%360,s:a.s,l:a.l})]}function $T(i,a,l){a=a||6,l=l||30;var o=ft(i).toHsl(),c=360/l,f=[ft(i)];for(o.h=(o.h-(c*a>>1)+720)%360;--a;)o.h=(o.h+c)%360,f.push(ft(o));return f}function PT(i,a){a=a||6;for(var l=ft(i).toHsv(),o=l.h,c=l.s,f=l.v,d=[],m=1/a;a--;)d.push(ft({h:o,s:c,v:f})),f=(f+m)%1;return d}ft.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(299*i.r+587*i.g+114*i.b)/1e3},getLuminance:function(){var i,a,l,o=this.toRgb();return i=o.r/255,a=o.g/255,l=o.b/255,.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.0722*(l<=.03928?l/12.92:Math.pow((l+.055)/1.055,2.4))},setAlpha:function(i){return this._a=lv(i),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var i=Sb(this._r,this._g,this._b);return{h:360*i.h,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=Sb(this._r,this._g,this._b),a=Math.round(360*i.h),l=Math.round(100*i.s),o=Math.round(100*i.v);return this._a==1?"hsv("+a+", "+l+"%, "+o+"%)":"hsva("+a+", "+l+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var i=Eb(this._r,this._g,this._b);return{h:360*i.h,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=Eb(this._r,this._g,this._b),a=Math.round(360*i.h),l=Math.round(100*i.s),o=Math.round(100*i.l);return this._a==1?"hsl("+a+", "+l+"%, "+o+"%)":"hsla("+a+", "+l+"%, "+o+"%, "+this._roundA+")"},toHex:function(i){return Ab(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return function(a,l,o,c,f){var d=[_n(Math.round(a).toString(16)),_n(Math.round(l).toString(16)),_n(Math.round(o).toString(16)),_n(ov(c))];return f&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)&&d[3].charAt(0)==d[3].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0)+d[3].charAt(0):d.join("")}(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Zt(this._r,255))+"%",g:Math.round(100*Zt(this._g,255))+"%",b:Math.round(100*Zt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Zt(this._r,255))+"%, "+Math.round(100*Zt(this._g,255))+"%, "+Math.round(100*Zt(this._b,255))+"%)":"rgba("+Math.round(100*Zt(this._r,255))+"%, "+Math.round(100*Zt(this._g,255))+"%, "+Math.round(100*Zt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(GT[Ab(this._r,this._g,this._b,!0)]||!1)},toFilter:function(i){var a="#"+Ob(this._r,this._g,this._b,this._a),l=a,o=this._gradientType?"GradientType = 1, ":"";if(i){var c=ft(i);l="#"+Ob(c._r,c._g,c._b,c._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+a+",endColorstr="+l+")"},toString:function(i){var a=!!i;i=i||this._format;var l=!1,o=this._a<1&&this._a>=0;return a||!o||i!=="hex"&&i!=="hex6"&&i!=="hex3"&&i!=="hex4"&&i!=="hex8"&&i!=="name"?(i==="rgb"&&(l=this.toRgbString()),i==="prgb"&&(l=this.toPercentageRgbString()),i!=="hex"&&i!=="hex6"||(l=this.toHexString()),i==="hex3"&&(l=this.toHexString(!0)),i==="hex4"&&(l=this.toHex8String(!0)),i==="hex8"&&(l=this.toHex8String()),i==="name"&&(l=this.toName()),i==="hsl"&&(l=this.toHslString()),i==="hsv"&&(l=this.toHsvString()),l||this.toHexString()):i==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ft(this.toString())},_applyModification:function(i,a){var l=i.apply(null,[this].concat([].slice.call(a)));return this._r=l._r,this._g=l._g,this._b=l._b,this.setAlpha(l._a),this},lighten:function(){return this._applyModification(UT,arguments)},brighten:function(){return this._applyModification(HT,arguments)},darken:function(){return this._applyModification(jT,arguments)},desaturate:function(){return this._applyModification(kT,arguments)},saturate:function(){return this._applyModification(LT,arguments)},greyscale:function(){return this._applyModification(qT,arguments)},spin:function(){return this._applyModification(BT,arguments)},_applyCombination:function(i,a){return i.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination($T,arguments)},complement:function(){return this._applyCombination(VT,arguments)},monochromatic:function(){return this._applyCombination(PT,arguments)},splitcomplement:function(){return this._applyCombination(YT,arguments)},triad:function(){return this._applyCombination(Tb,[3])},tetrad:function(){return this._applyCombination(Tb,[4])}},ft.fromRatio=function(i,a){if(Hs(i)=="object"){var l={};for(var o in i)i.hasOwnProperty(o)&&(l[o]=o==="a"?i[o]:Rl(i[o]));i=l}return ft(i,a)},ft.equals=function(i,a){return!(!i||!a)&&ft(i).toRgbString()==ft(a).toRgbString()},ft.random=function(){return ft.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ft.mix=function(i,a,l){l=l===0?0:l||50;var o=ft(i).toRgb(),c=ft(a).toRgb(),f=l/100;return ft({r:(c.r-o.r)*f+o.r,g:(c.g-o.g)*f+o.g,b:(c.b-o.b)*f+o.b,a:(c.a-o.a)*f+o.a})},ft.readability=function(i,a){var l=ft(i),o=ft(a);return(Math.max(l.getLuminance(),o.getLuminance())+.05)/(Math.min(l.getLuminance(),o.getLuminance())+.05)},ft.isReadable=function(i,a,l){var o,c,f=ft.readability(i,a);switch(c=!1,(o=function(d){var m,v;return m=((d=d||{level:"AA",size:"small"}).level||"AA").toUpperCase(),v=(d.size||"small").toLowerCase(),m!=="AA"&&m!=="AAA"&&(m="AA"),v!=="small"&&v!=="large"&&(v="small"),{level:m,size:v}}(l)).level+o.size){case"AAsmall":case"AAAlarge":c=f>=4.5;break;case"AAlarge":c=f>=3;break;case"AAAsmall":c=f>=7}return c},ft.mostReadable=function(i,a,l){var o,c,f,d,m=null,v=0;c=(l=l||{}).includeFallbackColors,f=l.level,d=l.size;for(var g=0;g<a.length;g++)(o=ft.readability(i,a[g]))>v&&(v=o,m=ft(a[g]));return ft.isReadable(i,m,{level:f,size:d})||!c?m:(l.includeFallbackColors=!1,ft.mostReadable(i,["#fff","#000"],l))};var If=ft.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},GT=ft.hexNames=function(i){var a={};for(var l in i)i.hasOwnProperty(l)&&(a[i[l]]=l);return a}(If);function lv(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function Zt(i,a){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(i)&&(i="100%");var l=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(i);return i=Math.min(a,Math.max(0,parseFloat(i))),l&&(i=parseInt(i*a,10)/100),Math.abs(i-a)<1e-6?1:i%a/parseFloat(a)}function tu(i){return Math.min(1,Math.max(0,i))}function Ge(i){return parseInt(i,16)}function _n(i){return i.length==1?"0"+i:""+i}function Rl(i){return i<=1&&(i=100*i+"%"),i}function ov(i){return Math.round(255*parseFloat(i)).toString(16)}function xb(i){return Ge(i)/255}var ka,ps,ms,vn=(ps="[\\s|\\(]+("+(ka="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+ka+")[,|\\s]+("+ka+")\\s*\\)?",ms="[\\s|\\(]+("+ka+")[,|\\s]+("+ka+")[,|\\s]+("+ka+")[,|\\s]+("+ka+")\\s*\\)?",{CSS_UNIT:new RegExp(ka),rgb:new RegExp("rgb"+ps),rgba:new RegExp("rgba"+ms),hsl:new RegExp("hsl"+ps),hsla:new RegExp("hsla"+ms),hsv:new RegExp("hsv"+ps),hsva:new RegExp("hsva"+ms),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function na(i){return!!vn.CSS_UNIT.exec(i)}var Gl=function(i,a){var l=(typeof i=="string"?parseInt(i):i)||0;if(l>=-5&&l<=5){var o=l,c=parseFloat(a),f=c+o*(c/5)*-1;return(f==0||f<=Number.EPSILON)&&(f=.1),{animationPeriod:f+"s"}}return{animationPeriod:a}},Xl=function(i,a){var l=i||{},o="";switch(a){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var c={};if(l.fontSize){var f=l.fontSize;c=function(d,m){var v={};for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&m.indexOf(g)<0&&(v[g]=d[g]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(g=Object.getOwnPropertySymbols(d);b<g.length;b++)m.indexOf(g[b])<0&&Object.prototype.propertyIsEnumerable.call(d,g[b])&&(v[g[b]]=d[g[b]])}return v}(l,["fontSize"]),o=f}return{fontSize:o,styles:c}},XT={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Kl=function(i){var a=i.className,l=i.text,o=i.textColor,c=i.staticText,f=i.style;return l?wt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(a||"").trim(),style:zt(zt(zt({},c&&XT),o&&{color:o,mixBlendMode:"unset"}),f&&f)},typeof l=="string"&&l.length?l:"loading"):null},aa="rgb(50, 205, 50)";function Ql(i,a){a===void 0&&(a=0);var l=[];return function o(c,f){return f===void 0&&(f=0),l.push.apply(l,c),l.length<f&&o(l,f),l.slice(0,f)}(i,a)}fe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ft(aa).toRgb();Array.from({length:4},function(i,a){return"--atom-phase".concat(a+1,"-rgb")});fe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--commet-phase".concat(a+1,"-color")});fe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var gs=Array.from({length:4},function(i,a){return"--OP-annulus-phase".concat(a+1,"-color")}),KT=function(i){var a,l=Xl(i==null?void 0:i.style,i==null?void 0:i.size),o=l.styles,c=l.fontSize,f=i==null?void 0:i.easing,d=Gl(i==null?void 0:i.speedPlus,"1.5s").animationPeriod,m=function(g){var b={},T=gs.length;if(g instanceof Array){for(var H=Ql(g,T),k=0;k<H.length&&!(k>=4);k++)b[gs[k]]=H[k];return b}try{if(typeof g!="string")throw new Error("Color String expected");for(var x=0;x<T;x++)b[gs[x]]=g}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),x=0;x<T;x++)b[gs[x]]=aa}return b}((a=i==null?void 0:i.color)!==null&&a!==void 0?a:""),v=i!=null&&i.dense?4.3:2.9;return wt.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:zt(zt(zt(zt(zt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),o),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},wt.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},wt.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:v,strokeMiterlimit:"10"})),wt.createElement(Kl,{className:"OP-annulus-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))};function Uf(i){return i&&i.Math===Math&&i}fe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var cr=Uf(typeof window=="object"&&window)||Uf(typeof self=="object"&&self)||Uf(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function sv(){var i,a;return!((i=cr==null?void 0:cr.crypto)===null||i===void 0)&&i.randomUUID?cr.crypto.randomUUID():!((a=cr==null?void 0:cr.btoa)===null||a===void 0)&&a.name?cr.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var bs=Array.from({length:4},function(i,a){return"--OP-dotted-phase".concat(a+1,"-color")}),QT=function(i){var a,l=Xl(i==null?void 0:i.style,i==null?void 0:i.size),o=l.styles,c=l.fontSize,f=i==null?void 0:i.easing,d=Gl(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,m=function(g){var b={},T=bs.length;if(g instanceof Array){for(var H=Ql(g,T),k=0;k<H.length&&!(k>=4);k++)b[bs[k]]=H[k];return b}try{if(typeof g!="string")throw new Error("Color String expected");for(var x=0;x<T;x++)b[bs[x]]=g}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),x=0;x<T;x++)b[bs[x]]=aa}return b}((a=i==null?void 0:i.color)!==null&&a!==void 0?a:""),v=i!=null&&i.dense?16:12;return wt.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:zt(zt(zt(zt(zt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),o),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:v}).map(function(g,b){var T=function(x,S,N){if(S===16){var Q=360*x/S,B=S-x,F=Number.parseFloat(N)/S*B*-1;return{transform:"rotate(".concat(Q,"deg)"),animationDelay:"".concat(F,"s")}}return{transform:"",animationDelay:""}}(b,v,d),H=T.animationDelay,k=T.transform;return wt.createElement("span",{key:sv(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},wt.createElement("span",{className:"dot",style:H?{animationDelay:H}:void 0}))}),wt.createElement(Kl,{className:"OP-dotted-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))};fe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var vs=Array.from({length:4},function(i,a){return"--OP-spokes-phase".concat(a+1,"-color")}),ZT=function(i){var a,l=Xl(i==null?void 0:i.style,i==null?void 0:i.size),o=l.styles,c=l.fontSize,f=i==null?void 0:i.easing,d=Gl(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,m=function(g){var b={},T=vs.length;if(g instanceof Array){for(var H=Ql(g,T),k=0;k<H.length&&!(k>=4);k++)b[vs[k]]=H[k];return b}try{if(typeof g!="string")throw new Error("Color String expected");for(var x=0;x<T;x++)b[vs[x]]=g}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof g,'" instead with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),x=0;x<T;x++)b[vs[x]]=aa}return b}((a=i==null?void 0:i.color)!==null&&a!==void 0?a:""),v=i!=null&&i.dense?16:12;return wt.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:zt(zt(zt(zt(zt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),o),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:v},function(g,b){return wt.createElement("span",{key:sv(),className:"rli-d-i-b spoke",style:FT(b,v,d)})})),wt.createElement(Kl,{text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor}))};function FT(i,a,l){if(a===16){var o=a-i,c=Number.parseFloat(l)/a;return{transform:"rotate(".concat(360*i/a,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((o-1)*c*-1,"s")}}}fe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var ys=Array.from({length:4},function(i,a){return"--OP-annulus-dual-sectors-phase".concat(a+1,"-color")}),JT=function(i){var a,l=Xl(i==null?void 0:i.style,i==null?void 0:i.size),o=l.styles,c=l.fontSize,f=i==null?void 0:i.easing,d=Gl(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,m=function(g){var b={},T=ys.length;if(g instanceof Array){for(var H=Ql(g,T),k=0;k<H.length&&!(k>=4);k++)b[ys[k]]=H[k];return b}try{if(typeof g!="string")throw new Error("Color String expected");for(var x=0;x<T;x++)b[ys[x]]=g}catch(S){for(S instanceof Error?console.warn("[".concat(S.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),x=0;x<T;x++)b[ys[x]]=aa}return b}((a=i==null?void 0:i.color)!==null&&a!==void 0?a:""),v=i.dense?"0.45em":"";return wt.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:zt(zt(zt(zt(zt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),o),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},wt.createElement("span",{className:"rli-d-i-b annulus-sectors",style:zt({},v&&{borderWidth:v})}),wt.createElement(Kl,{className:"OP-annulus-dual-sectors-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))};fe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Cl=Array.from({length:4},function(i,a){return["--OP-annulus-track-phase".concat(a+1,"-color"),"--OP-annulus-sector-phase".concat(a+1,"-color")]}),_s=function(i){return i===void 0&&(i=1),.25*i},WT=function(i){var a,l=Xl(i==null?void 0:i.style,i==null?void 0:i.size),o=l.styles,c=l.fontSize,f=i==null?void 0:i.easing,d=Gl(i==null?void 0:i.speedPlus,"1s").animationPeriod,m=function(g){var b={},T=Cl.length;if(g instanceof Array){for(var H=Ql(g,T),k=0;k<H.length&&!(k>=4);k++){var x=Cl[k];try{if(!(Q=ft(H[k])).isValid())throw new Error("Invalid Color: ".concat(Q.getOriginalInput()));var S=Q.setAlpha(_s(Q.getAlpha())).toRgbString(),N=H[k];b[x[0]]=S,b[x[1]]=N}catch{N=aa,S=(Q=ft(aa)).setAlpha(_s(Q.getAlpha())).toRgbString(),b[x[0]]=S,b[x[1]]=N}}return b}try{var Q=ft(g);if(typeof g!="string")throw new Error("Color String expected");if(!Q.isValid())throw new Error("Invalid Color: ".concat(Q.getOriginalInput()));N=g,S=Q.setAlpha(_s(Q.getAlpha())).toRgbString();for(var B=0;B<T;B++)b[(x=Cl[B])[0]]=S,b[x[1]]=N}catch(F){for(F instanceof Error?console.warn("[".concat(F.message,']: Received "').concat(typeof g,'" with value, ').concat(JSON.stringify(g))):console.warn("".concat(JSON.stringify(g),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),N=aa,S=(Q=ft(aa)).setAlpha(_s(Q.getAlpha())).toRgbString(),B=0;B<Cl.length;B++)b[(x=Cl[B])[0]]=S,b[x[1]]=N}return b}((a=i==null?void 0:i.color)!==null&&a!==void 0?a:""),v=i.dense?"0.45em":"";return wt.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:zt(zt(zt(zt(zt({},c&&{fontSize:c}),d&&{"--rli-animation-duration":d}),f&&{"--rli-animation-function":f}),m),o),role:"status","aria-live":"polite","aria-label":"Loading"},wt.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},wt.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:zt({},v&&{borderWidth:v})}),wt.createElement(Kl,{className:"OP-annulus-sector-text",text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor})))},Hf=function(i){var a=Object(i).variant,l=a===void 0?"disc":a;return l==="dotted"?wt.createElement(QT,zt({},i)):l==="spokes"?wt.createElement(ZT,zt({},i)):l==="disc"?wt.createElement(KT,zt({},i)):l==="split-disc"?wt.createElement(JT,zt({},i)):l==="track-disc"?wt.createElement(WT,zt({},i)):null};fe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--four-square-phase".concat(a+1,"-color")});fe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--mosaic-phase".concat(a+1,"-color")});fe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--riple-phase".concat(a+1,"-color")});fe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--TD-pulsate-phase".concat(a+1,"-color")});fe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--TD-brick-stack-phase".concat(a+1,"-color")});fe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--TD-bob-phase".concat(a+1,"-color")});fe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--TD-bounce-phase".concat(a+1,"-color")});fe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--shape-phase".concat(a+1,"-color")});fe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--trophySpin-phase".concat(a+1,"-color")});fe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--slab-phase".concat(a+1,"-color")});fe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(i,a){return"--life-line-phase".concat(a+1,"-color")});const di="https://ec-course-api.hexschool.io/v2",hi="companions-choice-product",IT=()=>{var At,P,nt,st;const i=Pe.useRef(null),[a,l]=Pe.useState(!1);Pe.useEffect(()=>{new la(i.current,{backdrop:!1})},[]);const[o,c]=Pe.useState({}),f=X=>{c({...X}),l(!0)},d=()=>{la.getInstance(i.current).hide(),T(1),l(!1)};Pe.useEffect(()=>{a&&(la.getInstance(i.current).show(),l(!0))},[a]);const[m,v]=Pe.useState([]),g=async()=>{et(!0);try{const X=await $t.get(`${di}/api/${hi}/products/all`);v([...X.data.products])}catch(X){console.log(`Error Message: ${X}`)}finally{et(!1)}},[b,T]=Pe.useState(1),H=async(X,_,Y=1)=>{_?ut(!0):Dt(at=>({...at,[X]:!0}));try{const at=await $t.post(`${di}/api/${hi}/cart`,{data:{product_id:X,qty:Number(Y)}});console.log(at.data),_&&d(),B()}catch(at){alert(`加入失敗: ${at.response.data.message}`)}finally{_?ut(!1):Dt(at=>({...at,[X]:!1}))}},k=async()=>{et(!0);try{await $t.delete(`${di}/api/${hi}/carts`),B()}catch(X){alert(`清空購物車失敗: ${X.response.data.message}`)}finally{et(!1)}},x=async X=>{et(!0);try{await $t.delete(`${di}/api/${hi}/cart/${X}`),B()}catch(_){alert(`刪除失敗: ${_.response.data.message}`)}finally{et(!1)}},S=async(X,_,Y)=>{et(!0);try{await $t.put(`${di}/api/${hi}/cart/${X}`,{data:{product_id:_,qty:Number(Y)}}),B()}catch(at){alert(`更新失敗: ${at.response.data.message}`)}finally{et(!1)}},[N,Q]=Pe.useState({}),B=async()=>{try{const X=await $t.get(`${di}/api/${hi}/cart`);Q(X.data.data)}catch(X){alert(`購物車取得失敗: ${X.response.data.message}`)}};Pe.useEffect(()=>{g(),B()},[]);const{register:F,handleSubmit:tt,formState:{errors:L},reset:it}=RT(),mt=tt(async X=>{const{message:_,...Y}=X,at={data:{user:{...Y,tel:`${Y.telCode}-${Y.telNum}`},message:_}};try{await yt(at),await B(),it(),alert("訂單已送出")}catch(dt){console.log("CheckOut Failed: ",dt.response.data.message)}}),yt=async X=>(await $t.post(`${di}/api/${hi}/order`,X)).data,[K,et]=Pe.useState(!1),[Rt,ut]=Pe.useState(!1),[ct,Dt]=Pe.useState({});return j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"container",children:[j.jsx("div",{className:"my-5",children:j.jsx("div",{className:"container text-center",children:m.length>0?j.jsx("div",{className:"row row-cols-2 row-cols-md-3 row-cols-xl-5 g-3 g-lg-4",children:m.map(X=>j.jsx("div",{className:"col",children:j.jsxs("div",{className:"card h-100","data-cat":X.category,children:[j.jsx("img",{src:X.imageUrl,className:"card-img-top",alt:X.title}),j.jsxs("div",{className:"card-body",children:[j.jsx("p",{className:"card-title fw-bold",children:X.title}),j.jsxs("p",{className:"card-text small",children:["$",X.price," ",j.jsx("sup",{children:j.jsxs("span",{className:"text-decoration-line-through",children:["$",X.origin_price]})})]}),j.jsxs("div",{className:"btn-group btn-group-sm",children:[j.jsx("button",{disabled:ct[X.id],onClick:()=>f(X),type:"button",className:"btn btn-outline-secondary",children:"查看更多"}),j.jsxs("button",{disabled:ct[X.id],type:"button",className:"btn btn-outline-danger d-flex",onClick:()=>H(X.id,!1),children:["加到購物車",ct[X.id]&&j.jsx("span",{className:"d-inline-flex ms-1 align-items-center",children:j.jsx(Hf,{variant:"spokes",color:"#1a1819",style:{fontSize:"3px"}})})]})]})]})]})},X.id))}):j.jsx("h2",{className:"text-center my-3",children:"沒有產品"})})}),j.jsx("hr",{}),((At=N.carts)==null?void 0:At.length)>0&&j.jsx("div",{className:"my-3",children:j.jsxs("div",{className:"container",children:[j.jsx("h2",{className:"text-center text-uppercase text-secondary my-2",children:"cart list"}),j.jsx("div",{className:"row",children:j.jsx("div",{className:"col-lg-8 mx-auto",children:j.jsxs("div",{children:[j.jsx("div",{className:"my-3 text-end",children:j.jsx("button",{className:"btn btn-outline-danger",onClick:()=>k(),children:"清空購物車"})}),j.jsxs("table",{className:"table align-middle",children:[j.jsx("thead",{children:j.jsxs("tr",{children:[j.jsx("th",{}),j.jsx("th",{children:"品名"}),j.jsx("th",{style:{width:"150px"},children:"數量/單位"}),j.jsx("th",{children:"單價"})]})}),j.jsx("tbody",{children:(P=N.carts)==null?void 0:P.map(X=>j.jsxs("tr",{children:[j.jsx("td",{children:j.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>x(X.id),children:"x"})}),j.jsx("td",{children:X.product.title}),j.jsx("td",{children:j.jsxs("div",{className:"input-group d-flex flex-nowrap",children:[j.jsx("button",{onClick:()=>S(X.id,X.product_id,X.qty-1),disabled:X.qty<=1,className:"btn btn-outline-secondary btn-sm",type:"button",id:"button-addon1",children:j.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-dash",viewBox:"0 0 16 16",children:j.jsx("path",{d:"M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"})})}),j.jsx("input",{disabled:!0,type:"text",className:"form-control text-center","aria-label":"","aria-describedby":"button-addon1",value:X.qty,style:{width:"1rem",padding:"0"}}),j.jsx("button",{onClick:()=>S(X.id,X.product_id,X.qty+1),disabled:X.qty>=99,className:"btn btn-outline-secondary btn-sm",type:"button",id:"button-addon1",children:j.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-plus",viewBox:"0 0 16 16",children:j.jsx("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"})})})]})}),j.jsx("td",{className:"text-end",children:Math.round(X.total*100)/100})]},X.id))}),j.jsxs("tfoot",{children:[j.jsxs("tr",{children:[j.jsx("td",{colSpan:"3",className:"text-end",children:"總計"}),j.jsx("td",{className:"text-end",style:{width:"130px"},children:Number(N.total).toFixed(2)})]}),j.jsxs("tr",{children:[j.jsx("td",{colSpan:"3",className:"text-end text-success",children:"折扣價"}),j.jsx("td",{className:"text-end text-success"})]})]})]})]})})})]})}),j.jsx("hr",{}),j.jsx("div",{className:"my-5 row justify-content-center",children:j.jsxs("form",{onSubmit:mt,className:"col-md-6",children:[j.jsxs("div",{className:"mb-3",children:[j.jsx("label",{htmlFor:"email",className:"form-label",children:"Email"}),j.jsx("input",{...F("email",{required:"欄位必填",pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:"Email 格式錯誤"}}),id:"email",name:"email",type:"email",className:`form-control ${L.email&&"is-invalid"}`,placeholder:"請輸入 Email"}),L.email&&j.jsx("div",{className:"text-danger my-2",children:L.email.message})]}),j.jsxs("div",{className:"mb-3",children:[j.jsx("label",{htmlFor:"name",className:"form-label",children:"收件人姓名"}),j.jsx("input",{...F("name",{required:"欄位必填"}),id:"name",name:"name",type:"text",className:`form-control ${L.name&&"is-invalid"}`,placeholder:"請輸入姓名"}),L.name&&j.jsx("div",{className:"text-danger my-2",children:L.name.message})]}),j.jsxs("div",{className:"mb-3",children:[j.jsx("label",{htmlFor:"telCode",className:"form-label",children:"收件人電話"}),j.jsxs("div",{className:"row g-1",children:[j.jsxs("div",{className:"col-md-3 mb-2 mb-md-0",children:[j.jsx("input",{...F("telCode",{required:"欄位必填",maxLength:{value:3,message:"國際區號最多只有3位"},pattern:{value:/^\d{2,3}$/,message:"最少有2位"}}),id:"telCode",name:"telCode",type:"text",className:`form-control ${(L==null?void 0:L.telCode)&&"is-invalid"}`,placeholder:"國際區號"}),(L==null?void 0:L.telCode)&&j.jsx("div",{className:"text-danger my-2",children:(nt=L.telCode)==null?void 0:nt.message})]}),j.jsx("div",{className:"col d-none d-md-flex justify-content-center align-items-start",children:j.jsx("span",{children:"-"})}),j.jsxs("div",{className:"col-md-8",children:[j.jsx("input",{...F("telNum",{required:"欄位必填",pattern:{value:/^\d{6,20}$/,message:"輸入最少6個數字的有效電話"}}),id:"telNum",name:"telNum",type:"text",className:`form-control ${L.telNum&&"is-invalid"}`,placeholder:"請輸入電話"}),L.telNum&&j.jsx("div",{className:"text-danger my-2",children:(st=L==null?void 0:L.telNum)==null?void 0:st.message})]})]})]}),j.jsxs("div",{className:"mb-3",children:[j.jsx("label",{htmlFor:"address",className:"form-label",children:"收件人地址"}),j.jsx("input",{...F("address",{required:"欄位必填"}),id:"address",name:"address",type:"text",className:`form-control ${L.address&&"is-invalid"}`,placeholder:"請輸入地址"}),L.name&&j.jsx("div",{className:"text-danger my-2",children:L.name.message})]}),j.jsxs("div",{className:"mb-3",children:[j.jsx("label",{htmlFor:"message",className:"form-label",children:"留言"}),j.jsx("textarea",{...F("message"),id:"message",className:"form-control",cols:"30",rows:"10"})]}),j.jsx("div",{className:"text-end",children:j.jsx("button",{type:"submit",className:"btn btn-danger",onClick:()=>yt,children:"送出訂單"})})]})}),K&&j.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{position:"fixed",inset:0,backgroundColor:"rgba(255,255,255,0.3)",zIndex:999},children:j.jsx(Hf,{variant:"spokes",speedPlus:"-3",easing:"linear",color:["#33CCCC","#33CC36","#B8CC33","#FCCA00"],size:"large",text:"Loading",textColor:"#000000"})})]}),j.jsx("div",{ref:i,className:"modal fade",id:"displayModal",tabIndex:"-1","aria-labelledby":"","aria-hidden":"true",children:j.jsx("div",{className:"modal-dialog",children:j.jsxs("div",{className:"modal-content",children:[j.jsxs("div",{className:"modal-header",children:[j.jsx("h1",{className:"modal-title fs-5",id:"",children:"Modal title"}),j.jsx("button",{type:"button",className:"btn-close",onClick:()=>d()})]}),o?j.jsxs("div",{className:"modal-body",children:[j.jsx("p",{children:o.id}),j.jsx("p",{children:o.category}),j.jsx("p",{children:o.title}),j.jsx("hr",{}),j.jsx("img",{src:o.imageUrl,alt:o.title,style:{width:"100%",objectFit:"cover",maxWidth:"12.75em"}}),j.jsx("hr",{}),j.jsxs("div",{className:"input-group align-items-center",children:[j.jsx("label",{htmlFor:"qtySelect",children:"數量: "}),j.jsx("select",{name:"",id:"qtySelect",value:b,onChange:X=>T(X.target.value),className:"form-select ms-2 rounded",children:Array.from({length:10}).map((X,_)=>j.jsx("option",{value:_+1,children:_+1},_))})]})]}):"",j.jsxs("div",{className:"modal-footer",children:[j.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>d(),children:"取消"}),j.jsxs("button",{disabled:Rt,className:"btn btn-warning d-flex",onClick:()=>H(o.id,!0,b),children:[j.jsx("span",{role:"status",children:"加入購物車"}),Rt&&j.jsx("span",{className:"d-inline-flex ms-1 align-items-center",children:j.jsx(Hf,{variant:"spokes",color:"#1a1819",style:{fontSize:"3px"}})})]})]})]})})})]})};k1.createRoot(document.getElementById("root")).render(j.jsx(IT,{}));
