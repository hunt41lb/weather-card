function t(t,e,i,a){var r,s=arguments.length,n=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,a);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(n=(s<3?r(n):s>3?r(e,i,n):r(e,i))||n);return s>3&&n&&Object.defineProperty(e,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),r=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1],t[0]);return new s(i,t,a)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:f,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,h=globalThis,m=h.trustedTypes,g=m?m.emptyScript:"",y=h.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(t,i,e);void 0!==a&&d(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){const{get:a,set:r}=f(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const s=a?.call(this);r?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...c(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{if(i)t.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of a){const a=document.createElement("style"),r=e.litNonce;void 0!==r&&a.setAttribute("nonce",r),a.textContent=i.cssText,t.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,i);if(void 0!==a&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(t,e){const i=this.constructor,a=i._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=i.getPropertyOptions(a),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=a;const s=r.fromAttribute(e,t.type);this[a]=s??this._$Ej?.get(a)??s,this._$Em=null}}requestUpdate(t,e,i,a=!1,r){if(void 0!==t){const s=this.constructor;if(!1===a&&(r=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??w)(r,e)||i.useDefault&&i.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:a,wrapped:r},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==r||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,i,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[v("elementProperties")]=new Map,k[v("finalized")]=new Map,y?.({ReactiveElement:k}),(h.reactiveElementVersions??=[]).push("2.1.2");const _=globalThis,$=t=>t,C=_.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+N,U=`<${M}>`,T=document,G=()=>T.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,V=/>/g,B=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,D=/"/g,R=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,Y=T.createTreeWalker(T,129);function q(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,a=[];let r,s=2===e?"<svg>":3===e?"<math>":"",n=P;for(let e=0;e<i;e++){const i=t[e];let o,l,d=-1,f=0;for(;f<i.length&&(n.lastIndex=f,l=n.exec(i),null!==l);)f=n.lastIndex,n===P?"!--"===l[1]?n=L:void 0!==l[1]?n=V:void 0!==l[2]?(R.test(l[2])&&(r=RegExp("</"+l[2],"g")),n=B):void 0!==l[3]&&(n=B):n===B?">"===l[0]?(n=r??P,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,o=l[1],n=void 0===l[3]?B:'"'===l[3]?D:H):n===D||n===H?n=B:n===L||n===V?n=P:(n=B,r=void 0);const c=n===B&&t[e+1].startsWith("/>")?" ":"";s+=n===P?i+U:d>=0?(a.push(o),i.slice(0,d)+S+i.slice(d)+N+c):i+N+(-2===d?e:c)}return[q(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class Q{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let r=0,s=0;const n=t.length-1,o=this.parts,[l,d]=X(t,e);if(this.el=Q.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=Y.nextNode())&&o.length<n;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(S)){const e=d[s++],i=a.getAttribute(t).split(N),n=/([.?@])?(.*)/.exec(e);o.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?et:"?"===n[1]?it:"@"===n[1]?at:tt}),a.removeAttribute(t)}else t.startsWith(N)&&(o.push({type:6,index:r}),a.removeAttribute(t));if(R.test(a.tagName)){const t=a.textContent.split(N),e=t.length-1;if(e>0){a.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],G()),Y.nextNode(),o.push({type:2,index:++r});a.append(t[e],G())}}}else if(8===a.nodeType)if(a.data===M)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=a.data.indexOf(N,t+1));)o.push({type:7,index:r}),t+=N.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,a){if(e===I)return e;let r=void 0!==a?i._$Co?.[a]:i._$Cl;const s=E(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t),r._$AT(t,i,a)),void 0!==a?(i._$Co??=[])[a]=r:i._$Cl=r),void 0!==r&&(e=K(t,r._$AS(t,e.values),r,a)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,a=(t?.creationScope??T).importNode(e,!0);Y.currentNode=a;let r=Y.nextNode(),s=0,n=0,o=i[0];for(;void 0!==o;){if(s===o.index){let e;2===o.type?e=new J(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new rt(r,this,t)),this._$AV.push(e),o=i[++n]}s!==o?.index&&(r=Y.nextNode(),s++)}return Y.currentNode=T,a}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,a){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),E(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Q.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new Z(a,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new Q(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const r of t)a===e.length?e.push(i=new J(this.O(G()),this.O(G()),this,this.options)):i=e[a],i._$AI(r),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,a,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,a){const r=this.strings;let s=!1;if(void 0===r)t=K(this,t,e,0),s=!E(t)||t!==this._$AH&&t!==I,s&&(this._$AH=t);else{const a=t;let n,o;for(t=r[0],n=0;n<r.length-1;n++)o=K(this,a[i+n],e,n),o===I&&(o=this._$AH[n]),s||=!E(o)||o!==this._$AH[n],o===F?t=F:t!==F&&(t+=(o??"")+r[n+1]),this._$AH[n]=o}s&&!a&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class at extends tt{constructor(t,e,i,a,r){super(t,e,i,a,r),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??F)===I)return;const i=this._$AH,a=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==F&&(i===F||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const st=_.litHtmlPolyfillSupport;st?.(Q,J),(_.litHtmlVersions??=[]).push("3.3.2");const nt=globalThis;let ot=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const a=i?.renderBefore??e;let r=a._$litPart$;if(void 0===r){const t=i?.renderBefore??null;a._$litPart$=r=new J(e.insertBefore(G(),t),t,void 0,i??{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};ot._$litElement$=!0,ot.finalized=!0,nt.litElementHydrateSupport?.({LitElement:ot});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:ot}),(nt.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ft={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w},ct=(t=ft,e,i)=>{const{kind:a,metadata:r}=i;let s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===a){const{name:a}=i;return{set(i){const r=e.get.call(this);e.set.call(this,i),this.requestUpdate(a,r,t,!0,i)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=i;return function(i){const r=this[a];e.call(this,i),this.requestUpdate(a,r,t,!0,i)}}throw Error("Unsupported decorator location: "+a)};function pt(t){return(e,i)=>"object"==typeof i?ct(t,e,i):((t,e,i)=>{const a=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),a?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}const ht=2,mt=t=>(...e)=>({_$litDirective$:t,values:e});let gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},yt=class extends gt{constructor(t){if(super(t),this.it=F,t.type!==ht)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||null==t)return this._t=void 0,this.it=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};yt.directiveName="unsafeHTML",yt.resultType=1;const vt=mt(yt),bt={},wt=mt(class extends gt{constructor(){super(...arguments),this.ot=bt}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((t,e)=>t===this.ot[e]))return I}else if(this.ot===e)return I;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),xt=[n`
  /* Host element */
  :host {
    display: block;
  }

  /* Main card container */
  ha-card {
    padding: 12px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: var(--weather-card-background, var(--ha-card-background, var(--card-background-color)));
    color: var(--weather-card-text-color, var(--primary-text-color));
  }

  /* ==========================================================================
     Grid Layout
     ========================================================================== */

  .weather-card-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 1fr 1fr auto auto auto auto;
    gap: 0px 0px;
    grid-template-areas:
      "greeting greeting greeting greeting"
      "icon icon primary primary"
      "icon icon secondary secondary"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
    height: 100%;
    min-height: 140px;
    position: relative;
    z-index: 1;
  }

  /* Grid variant: No greeting */
  .weather-card-grid.no-greeting {
    grid-template-rows: 1fr 1fr auto auto auto auto;
    grid-template-areas:
      "icon icon primary primary"
      "icon icon secondary secondary"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
  }

  /* Grid variant: Icon on right */
  .weather-card-grid.icon-right {
    grid-template-areas:
      "greeting greeting greeting greeting"
      "primary primary icon icon"
      "secondary secondary icon icon"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
  }

  /* Grid variant: Icon on right + no greeting */
  .weather-card-grid.icon-right.no-greeting {
    grid-template-areas:
      "primary primary icon icon"
      "secondary secondary icon icon"
      "description description description description"
      "sun-times sun-times sun-times sun-times"
      "forecast forecast forecast forecast"
      "alerts alerts alerts alerts";
  }

  /* ==========================================================================
     Primary Content Elements
     ========================================================================== */

  .greeting {
    grid-area: greeting;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    padding-bottom: 4px;
    color: var(--weather-card-greeting-color, var(--primary-text-color));
  }

  .weather-icon {
    grid-area: icon;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather-icon svg {
    width: var(--weather-icon-size, 100px);
    height: var(--weather-icon-size, 100px);
  }

  .primary-value {
    grid-area: primary;
    font-size: var(--weather-card-primary-font-size, 40px);
    font-weight: 400;
    line-height: 1;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    color: var(--weather-card-primary-color, var(--primary-text-color));
  }

  .secondary-value {
    grid-area: secondary;
    font-size: var(--weather-card-secondary-font-size, 12px);
    font-weight: 400;
    opacity: 0.8;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 4px;
    color: var(--weather-card-secondary-color, var(--secondary-text-color));
  }

  .description {
    grid-area: description;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    padding-top: 4px;
    color: var(--weather-card-description-color, var(--primary-text-color));
  }

  /* ==========================================================================
     Sun Times
     ========================================================================== */

  .sun-times {
    grid-area: sun-times;
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 8px 0 4px 0;
    font-size: 12px;
    opacity: 0.8;
  }

  .sun-time {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .sun-icon {
    font-size: 14px;
  }

  /* ==========================================================================
     Forecast
     ========================================================================== */

  .forecast {
    grid-area: forecast;
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.1));
    margin-top: 8px;
  }

  .forecast-day {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 11px;
    min-width: 40px;
  }

  .forecast-day-name {
    font-weight: 600;
    opacity: 0.8;
  }

  .forecast-icon {
    font-size: 18px;
    margin: 4px 0;
  }

  .forecast-temps {
    display: flex;
    gap: 4px;
  }

  .forecast-high {
    font-weight: 600;
  }

  .forecast-low {
    opacity: 0.6;
  }

  /* ==========================================================================
     Alerts
     ========================================================================== */

  .alerts {
    grid-area: alerts;
    padding: 8px;
    margin-top: 8px;
    background: var(--weather-card-alert-background, rgba(255, 152, 0, 0.2));
    border-radius: 4px;
    border-left: 3px solid var(--weather-card-alert-color, #ff9800);
  }

  .alert {
    font-size: 12px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .alert-icon {
    font-size: 16px;
  }

  .alert-text {
    flex: 1;
  }

  .alert-title {
    font-weight: 600;
  }

  .alert-description {
    opacity: 0.8;
    font-size: 11px;
  }

  /* ==========================================================================
     Utility Classes
     ========================================================================== */

  .unavailable {
    opacity: 0.5;
    font-style: italic;
  }
`,n`
  /* Background effects container - shared by all weather effects */
  .weather-effects {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
  }
`,n`
  /* ==========================================================================
     Snow Effect Base
     ========================================================================== */

  .effect-snow {
    background: linear-gradient(
      180deg,
      rgba(220, 230, 245, 0.02) 0%,
      rgba(200, 215, 235, 0.05) 100%
    );
  }

  /* ==========================================================================
     Snowbank (bottom accumulation)
     ========================================================================== */

  .snow-bank {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 32px;
    z-index: 10;
    pointer-events: none;
  }

  .snow-bank svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  /* ==========================================================================
     Falling Snowflakes Container
     ========================================================================== */

  .snow-container {
    position: absolute;
    top: 0;
    left: -20px;
    right: -20px;
    bottom: 28px;
    overflow: hidden;
  }

  /* ==========================================================================
     Snowflake Layers
     Each layer has different:
     - Size (larger = further back, smaller = closer)
     - Speed (slower = further back, faster = closer)
     - Opacity (lower = further back)
     - Grid spacing
     Uses prime-number durations to prevent synchronized resets
     ========================================================================== */

  /* Layer 1: Large slow flakes (background) */
  .snow-container .layer-1 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 2.5px, transparent 2.5px);
    background-size: 90px 90px;
    background-position: 0 0;
    animation: snowfall-1 23s linear infinite;
    animation-delay: -7s;
    opacity: 0.4;
  }

  /* Layer 2 */
  .snow-container .layer-2 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.85) 2px, transparent 2px);
    background-size: 70px 70px;
    background-position: 35px 20px;
    animation: snowfall-2 17s linear infinite, drift-a 13s ease-in-out infinite;
    animation-delay: -3s, -5s;
    opacity: 0.5;
  }

  /* Layer 3 */
  .snow-container .layer-3 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.9) 1.8px, transparent 1.8px);
    background-size: 55px 55px;
    background-position: 15px 40px;
    animation: snowfall-3 13s linear infinite, drift-b 17s ease-in-out infinite;
    animation-delay: -11s, -2s;
    opacity: 0.55;
  }

  /* Layer 4 */
  .snow-container .layer-4 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.95) 1.5px, transparent 1.5px);
    background-size: 45px 45px;
    background-position: 25px 10px;
    animation: snowfall-4 11s linear infinite, drift-c 19s ease-in-out infinite;
    animation-delay: -6s, -8s;
    opacity: 0.6;
  }

  /* Layer 5: Small fast flakes */
  .snow-container .layer-5 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.85) 1.2px, transparent 1.2px);
    background-size: 35px 35px;
    background-position: 10px 25px;
    animation: snowfall-5 7s linear infinite, drift-d 23s ease-in-out infinite;
    animation-delay: -2s, -13s;
    opacity: 0.65;
  }

  /* Layer 6: Tiny fastest flakes (foreground) */
  .snow-container .layer-6 {
    position: absolute;
    left: 0;
    right: 0;
    top: -100%;
    height: 300%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.8) 1px, transparent 1px);
    background-size: 25px 25px;
    background-position: 5px 15px;
    animation: snowfall-6 5s linear infinite, drift-e 11s ease-in-out infinite;
    animation-delay: -1s, -4s;
    opacity: 0.7;
  }

  /* ==========================================================================
     Fall Keyframes
     33.333% of 300% container = 100% viewport for seamless loop
     ========================================================================== */

  @keyframes snowfall-1 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-2 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-3 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-4 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-5 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  @keyframes snowfall-6 {
    from { transform: translateY(0); }
    to { transform: translateY(33.3333%); }
  }

  /* ==========================================================================
     Drift Keyframes
     Different directions for natural variety
     ========================================================================== */

  @keyframes drift-a {
    0%, 100% { margin-left: 0; }
    50% { margin-left: 20px; }
  }

  @keyframes drift-b {
    0%, 100% { margin-left: 10px; }
    50% { margin-left: -15px; }
  }

  @keyframes drift-c {
    0%, 100% { margin-left: -5px; }
    50% { margin-left: 25px; }
  }

  @keyframes drift-d {
    0%, 100% { margin-left: 15px; }
    50% { margin-left: -10px; }
  }

  @keyframes drift-e {
    0%, 100% { margin-left: -10px; }
    50% { margin-left: 15px; }
  }

  /* ==========================================================================
     Intensity Variants
     ========================================================================== */

  /* Light snow: slower, fewer visible layers */
  .effect-snow.intensity-light .layer-1 {
    animation-duration: 34s;
    opacity: 0.25;
  }
  .effect-snow.intensity-light .layer-2 {
    animation-duration: 26s;
    opacity: 0.3;
  }
  .effect-snow.intensity-light .layer-3 {
    animation-duration: 20s;
    opacity: 0.35;
  }
  .effect-snow.intensity-light .layer-4 {
    animation-duration: 16s;
    opacity: 0.4;
  }
  .effect-snow.intensity-light .layer-5 {
    display: none;
  }
  .effect-snow.intensity-light .layer-6 {
    display: none;
  }

  /* Heavy snow: faster, more opaque */
  .effect-snow.intensity-heavy .layer-1 {
    animation-duration: 16s;
    opacity: 0.5;
  }
  .effect-snow.intensity-heavy .layer-2 {
    animation-duration: 12s;
    opacity: 0.55;
  }
  .effect-snow.intensity-heavy .layer-3 {
    animation-duration: 9s;
    opacity: 0.6;
  }
  .effect-snow.intensity-heavy .layer-4 {
    animation-duration: 7s;
    opacity: 0.7;
  }
  .effect-snow.intensity-heavy .layer-5 {
    animation-duration: 5s;
    opacity: 0.75;
  }
  .effect-snow.intensity-heavy .layer-6 {
    animation-duration: 3.5s;
    opacity: 0.8;
  }

`,n`
  /* ==========================================================================
     Sunny Effect Base
     ========================================================================== */

  .effect-sunny {
    background: linear-gradient(
      135deg,
      rgba(255, 250, 230, 0.35) 0%,
      rgba(255, 245, 200, 0.15) 25%,
      transparent 50%
    );
  }

  /* ==========================================================================
     Primary Sun Glow
     ========================================================================== */

  .effect-sunny::before {
    content: '';
    position: absolute;
    top: 3%;
    left: 3%;
    width: 70px;
    height: 70px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 245, 0.7) 0%,
      rgba(255, 250, 200, 0.4) 35%,
      rgba(255, 240, 180, 0.1) 60%,
      transparent 75%
    );
    border-radius: 50%;
    animation: sunny-glow-pulse 5s ease-in-out infinite;
  }

  /* ==========================================================================
     Light Streak
     ========================================================================== */

  .effect-sunny .streak-main {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 250, 220, 0.4) 40%,
      rgba(255, 245, 200, 0.1) 80%,
      transparent 100%
    );
    transform: rotate(50deg);
    transform-origin: 0% 0%;
    animation: sunny-streak-glow 7s ease-in-out infinite;
  }

  /* ==========================================================================
     Bokeh Orbs
     ========================================================================== */

  .effect-sunny .orb {
    position: absolute;
    border-radius: 50%;
    animation: sunny-orb-float 6s ease-in-out infinite;
  }

  /* Orb 1: Largest, closest to sun */
  .effect-sunny .orb-1 {
    top: 18%;
    left: 22%;
    width: 18px;
    height: 18px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 245, 200, 0.2) 50%,
      transparent 70%
    );
    animation-delay: -1s;
  }

  /* Orb 2 */
  .effect-sunny .orb-2 {
    top: 28%;
    left: 35%;
    width: 12px;
    height: 12px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 240, 180, 0.15) 50%,
      transparent 70%
    );
    animation-delay: -2.5s;
  }

  /* Orb 3 */
  .effect-sunny .orb-3 {
    top: 38%;
    left: 48%;
    width: 8px;
    height: 8px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.35) 0%,
      rgba(255, 235, 170, 0.1) 50%,
      transparent 70%
    );
    animation-delay: -4s;
  }

  /* Orb 4: Smallest, furthest from sun */
  .effect-sunny .orb-4 {
    top: 48%;
    left: 60%;
    width: 6px;
    height: 6px;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    animation-delay: -3s;
  }

  /* ==========================================================================
     Animations
     ========================================================================== */

  @keyframes sunny-glow-pulse {
    0%, 100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.08);
    }
  }

  @keyframes sunny-streak-glow {
    0%, 100% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.9;
    }
  }

  @keyframes sunny-orb-float {
    0%, 100% {
      opacity: 0.7;
      transform: scale(1) translate(0, 0);
    }
    50% {
      opacity: 1;
      transform: scale(1.15) translate(2px, 2px);
    }
  }
`,n`
  /* ==========================================================================
     Cloudy Effect Base
     ========================================================================== */

  .effect-cloudy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  /* ==========================================================================
     Cloud Layers
     ========================================================================== */

  .effect-cloudy .cloud-layer {
    position: absolute;
    width: 200%;
    height: 100%;
    background-repeat: repeat-x;
    background-size: 400px 100%;
  }

  /* Layer 1: Foreground clouds - fastest */
  .effect-cloudy .cloud-layer-1 {
    background-image:
      radial-gradient(ellipse 120px 40px at 100px 60%, rgba(255, 255, 255, 0.7) 0%, transparent 70%),
      radial-gradient(ellipse 80px 30px at 280px 80%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 100px 35px at 180px 50%, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
    animation: cloud-drift-1 45s linear infinite;
    opacity: 0.9;
  }

  /* Layer 2: Mid-ground clouds */
  .effect-cloudy .cloud-layer-2 {
    background-image:
      radial-gradient(ellipse 90px 35px at 50px 70%, rgba(255, 255, 255, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 70px 25px at 200px 40%, rgba(255, 255, 255, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 110px 40px at 320px 65%, rgba(255, 255, 255, 0.55) 0%, transparent 70%);
    animation: cloud-drift-2 60s linear infinite;
    opacity: 0.7;
  }

  /* Layer 3: Background clouds - slowest */
  .effect-cloudy .cloud-layer-3 {
    background-image:
      radial-gradient(ellipse 150px 50px at 150px 55%, rgba(255, 255, 255, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 100px 40px at 350px 75%, rgba(255, 255, 255, 0.35) 0%, transparent 70%);
    animation: cloud-drift-3 80s linear infinite;
    opacity: 0.5;
  }

  /* ==========================================================================
     Night Variants
     Darker, more muted cloud colors
     ========================================================================== */

  .effect-cloudy.is-night .cloud-layer-1 {
    background-image:
      radial-gradient(ellipse 120px 40px at 100px 60%, rgba(60, 60, 90, 0.6) 0%, transparent 70%),
      radial-gradient(ellipse 80px 30px at 280px 80%, rgba(50, 50, 80, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 100px 35px at 180px 50%, rgba(55, 55, 85, 0.55) 0%, transparent 70%);
  }

  .effect-cloudy.is-night .cloud-layer-2 {
    background-image:
      radial-gradient(ellipse 90px 35px at 50px 70%, rgba(50, 50, 80, 0.5) 0%, transparent 70%),
      radial-gradient(ellipse 70px 25px at 200px 40%, rgba(45, 45, 75, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 110px 40px at 320px 65%, rgba(55, 55, 85, 0.45) 0%, transparent 70%);
  }

  .effect-cloudy.is-night .cloud-layer-3 {
    background-image:
      radial-gradient(ellipse 150px 50px at 150px 55%, rgba(40, 40, 70, 0.4) 0%, transparent 70%),
      radial-gradient(ellipse 100px 40px at 350px 75%, rgba(45, 45, 75, 0.35) 0%, transparent 70%);
  }

  /* ==========================================================================
     Drift Animations
     Each layer starts at different position for variety
     ========================================================================== */

  @keyframes cloud-drift-1 {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @keyframes cloud-drift-2 {
    from { transform: translateX(-25%); }
    to { transform: translateX(-75%); }
  }

  @keyframes cloud-drift-3 {
    from { transform: translateX(-10%); }
    to { transform: translateX(-60%); }
  }

`,n`
  /* ==========================================================================
     Rain Effect
     ========================================================================== */

  .effect-rain {
    background: linear-gradient(transparent 0%, rgba(100, 150, 200, 0.3) 100%);
    opacity: 0.4;
  }

  .effect-rain::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 0;
    right: 0;
    height: 200%;
    background-image: repeating-linear-gradient(
      transparent 0px,
      transparent 4px,
      rgba(100, 150, 200, 0.4) 4px,
      rgba(100, 150, 200, 0.4) 6px
    );
    animation: rain-fall 0.3s linear infinite;
  }

  /* ==========================================================================
     Rain Animation
     ========================================================================== */

  @keyframes rain-fall {
    0% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(10%);
    }
  }

`,n`
  /* ==========================================================================
     Fog Effect
     ========================================================================== */

  .effect-fog {
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(200, 200, 200, 0.3) 25%,
      rgba(200, 200, 200, 0.2) 50%,
      rgba(200, 200, 200, 0.3) 75%,
      transparent 100%
    );
    animation: fog-move 8s ease-in-out infinite;
    opacity: 0.4;
  }

  /* ==========================================================================
     Fog Animation
     ========================================================================== */

  @keyframes fog-move {
    0%, 100% {
      transform: translateX(-20%);
    }
    50% {
      transform: translateX(20%);
    }
  }
`],kt={sunny_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>',clear_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>',"clear-night_night":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/></path></svg>',clear_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/></path></svg>',partlycloudy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>',partlycloudy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>',cloudy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>',cloudy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>',rainy_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#c"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',rainy_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/></defs><path fill="url(#b)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',pouring_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#c"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',pouring_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/></defs><path fill="url(#b)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',snowy_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="30.12" x2="31.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="d" x1="29.67" x2="32.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="e" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="f" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="g" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="h" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/></defs><circle cx="19" cy="24" r="5" fill="url(#b)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="31" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#e)" stroke-miterlimit="10"/><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#g)" stroke-miterlimit="10"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g></svg>',snowy_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="30.12" x2="31.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="d" x1="29.67" x2="32.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="e" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="f" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="g" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="h" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="31" cy="45" r="1.25" fill="none" stroke="url(#c)" stroke-miterlimit="10"/><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#e)" stroke-miterlimit="10"/><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#g)" stroke-miterlimit="10"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g></svg>',"snowy-rainy_day":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><circle cx="19" cy="24" r="5" fill="url(#c)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',"snowy-rainy_night":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#c"/><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#c"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#c"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#c"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><path fill="url(#c)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',fog_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',fog_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',foggy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',foggy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',hail_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="24.74" x2="26.46" y1="43.39" y2="46.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="d" x1="31.74" x2="33.46" y1="49.39" y2="52.61" xlink:href="#c"/><linearGradient id="e" x1="38.74" x2="40.46" y1="43.39" y2="46.61" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><circle cx="25.6" cy="45" r="1.5" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="32.6" cy="51" r="1.5" fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="39.6" cy="45" r="1.5" fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle></svg>',hail_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="24.74" x2="26.46" y1="43.39" y2="46.61" xlink:href="#a"/><linearGradient id="d" x1="31.74" x2="33.46" y1="49.39" y2="52.61" xlink:href="#a"/><linearGradient id="e" x1="38.74" x2="40.46" y1="43.39" y2="46.61" xlink:href="#a"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><circle cx="25.6" cy="45" r="1.5" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="32.6" cy="51" r="1.5" fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="39.6" cy="45" r="1.5" fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle></svg>',lightning_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path></svg>',lightning_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path></svg>',"lightning-rainy_day":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',"lightning-rainy_night":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',windy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',windy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',"windy-variant_day":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',"windy-variant_night":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>'},_t={sunny:"☀️",clear:"☀️","clear-night":"🌙",partlycloudy:"⛅",cloudy:"☁️",rainy:"🌧️",pouring:"🌧️",snowy:"❄️","snowy-rainy":"🌨️",fog:"🌫️",foggy:"🌫️",hail:"🌨️",lightning:"⚡","lightning-rainy":"⛈️",windy:"💨","windy-variant":"💨",exceptional:"⚠️"};let $t=class extends ot{constructor(){super(...arguments),this._lastTap=0,this._handleTap=t=>{const e=Date.now();e-this._lastTap<300?(this._executeAction(this._config.double_tap_action),this._lastTap=0):(this._lastTap=e,setTimeout(()=>{0!==this._lastTap&&(this._executeAction(this._config.tap_action),this._lastTap=0)},300))},this._handleHold=t=>{t.preventDefault(),this._executeAction(this._config.hold_action)},this._handleTouchStart=()=>{this._holdTimer=window.setTimeout(()=>{this._executeAction(this._config.hold_action)},500)},this._handleTouchEnd=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_greeting:!0,icon_size:100,card_height:"auto",sun_entity:"sun.sun",icon_position:"left",show_forecast:!1,forecast_days:5,show_sunrise_sunset:!1,show_alerts:!1,show_background_effects:!1,use_dynamic_background:!1,day_background:"linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)",night_background:"linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)",tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},...t}}getCardSize(){return 3}getLayoutOptions(){return this._config?.view_layout||{}}static getConfigElement(){return document.createElement("weather-card-editor")}static getStubConfig(){return{type:"custom:weather-card",weather_entity:"weather.forecast_home",sun_entity:"sun.sun",primary_entity:"weather.forecast_home",primary_attribute:"temperature",primary_unit:"°F",secondary_entity:"weather.forecast_home",secondary_attribute:"apparent_temperature",secondary_unit:"°F",secondary_label:"Feels Like:",show_greeting:!0,icon_size:100,show_forecast:!0,forecast_days:5,show_sunrise_sunset:!0}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleTap),this.addEventListener("contextmenu",this._handleHold),this.addEventListener("touchstart",this._handleTouchStart,{passive:!0}),this.addEventListener("touchend",this._handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleTap),this.removeEventListener("contextmenu",this._handleHold),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchend",this._handleTouchEnd)}_executeAction(t){if(t&&"none"!==t.action)switch(t.action){case"more-info":const e=t.entity||this._config.weather_entity;if(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new CustomEvent("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}}render(){if(!this._config||!this.hass)return j``;const t=this._getGreeting(),e=this._getPrimaryValue(),i=this._getSecondaryValue(),a=this._getDescription(),r=!1!==this._config.show_greeting,s="right"===this._config.icon_position,n=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0,o=this._config.sun_entity?this.hass.states[this._config.sun_entity]:void 0,l=n?.state||"",d="above_horizon"===o?.state,f=["weather-card-grid",r?"":"no-greeting",s?"icon-right":""].filter(Boolean).join(" "),c=this._config.day_background||"linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)",p=this._config.night_background||"linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)",u=this._config.use_dynamic_background?`background: ${d?c:p};`:"";return j`
      <ha-card style="height: ${this._config.card_height}; ${u}">
        ${this._config.show_background_effects?this._renderBackgroundEffect(l,d):F}
        <div class="${f}" style="--weather-icon-size: ${this._config.icon_size}px">
          ${r?j`<div class="greeting">${t}</div>`:F}
          <div class="weather-icon">
            ${wt([l,d],()=>this._renderWeatherIcon(l,d))}
          </div>
          <div class="primary-value">${e}</div>
          <div class="secondary-value">${i}</div>
          <div class="description">${a}</div>
          ${this._config.show_sunrise_sunset?this._renderSunTimes():F}
          ${this._config.show_forecast?this._renderForecast():F}
          ${this._config.show_alerts?this._renderAlerts():F}
        </div>
      </ha-card>
    `}_renderBackgroundEffect(t,e){const i=this._getEffectClass(t);if(!i)return j``;if("effect-snow"===i){const t=this._getSnowIntensity();return j`
        <div class="weather-effects ${i} ${t}">
          <!-- Falling snowflakes - 6 independent layers -->
          <div class="snow-container">
            <div class="layer-1"></div>
            <div class="layer-2"></div>
            <div class="layer-3"></div>
            <div class="layer-4"></div>
            <div class="layer-5"></div>
            <div class="layer-6"></div>
          </div>

          <!-- Snowbank at bottom -->
          <div class="snow-bank">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="snowFill" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.95)"/>
                  <stop offset="100%" stop-color="rgba(240,245,255,1)"/>
                </linearGradient>
              </defs>
              <path d="M0,100 L0,65
                Q10,55 20,60
                Q30,65 40,55
                Q50,45 60,55
                Q70,65 80,58
                Q90,50 100,60
                L100,100 Z"
                fill="url(#snowFill)"/>
            </svg>
          </div>
        </div>
      `}if("effect-sunny"===i)return j`
        <div class="weather-effects ${i}">
          <div class="streak-main"></div>
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
          <div class="orb orb-4"></div>
        </div>
      `;if("effect-cloudy"===i){return j`
        <div class="weather-effects ${i} ${e?"is-day":"is-night"}">
          <div class="cloud-layer cloud-layer-1"></div>
          <div class="cloud-layer cloud-layer-2"></div>
          <div class="cloud-layer cloud-layer-3"></div>
        </div>
      `}return j`<div class="weather-effects ${i}"></div>`}_getEffectClass(t){const e=t?.toLowerCase()||"";return e.includes("rain")||e.includes("pouring")?"effect-rain":e.includes("snow")?"effect-snow":e.includes("fog")?"effect-fog":"sunny"===e||"clear"===e?"effect-sunny":e.includes("cloudy")?"effect-cloudy":""}_getSnowIntensity(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return"";const e=Number(t.attributes?.precipitation)||0;return e>=4?"intensity-heavy":e<1?"intensity-light":""}_renderWeatherIcon(t,e){if(!t)return j`<span class="unavailable">No weather entity</span>`;const i=function(t,e){const i=t?.toLowerCase().replace(/-/g,"")||"cloudy",a=e?"day":"night",r=`${i}_${a}`;if(kt[r])return kt[r];const s=`${t}_${a}`;if(kt[s])return kt[s];const n={exceptional:"cloudy"}[i];if(n){const t=`${n}_${a}`;if(kt[t])return kt[t]}return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="40" text-anchor="middle" font-size="24">?</text></svg>'}(t,e);return j`${vt(i)}`}_renderSunTimes(){const t=this._config.sun_entity?this.hass.states[this._config.sun_entity]:void 0;if(!t)return j``;const e=t.attributes.next_rising,i=t.attributes.next_setting,a=t=>{if(!t)return"--:--";return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return j`
      <div class="sun-times">
        <div class="sun-time">
          <span class="sun-icon">🌅</span>
          <span>${a(e)}</span>
        </div>
        <div class="sun-time">
          <span class="sun-icon">🌇</span>
          <span>${a(i)}</span>
        </div>
      </div>
    `}_renderForecast(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return j``;const e=t.attributes.forecast;if(!e||0===e.length)return j``;const i=e.slice(0,this._config.forecast_days||5),a=this._config.primary_unit||"°";return j`
      <div class="forecast">
        ${i.map(t=>j`
          <div class="forecast-day">
            <div class="forecast-day-name">${(t=>{const e=new Date(t),i=new Date,a=new Date(i);return a.setDate(a.getDate()+1),e.toDateString()===i.toDateString()?"Today":e.toDateString()===a.toDateString()?"Tmrw":e.toLocaleDateString([],{weekday:"short"})})(t.datetime)}</div>
            <div class="forecast-icon">${_t[t.condition]||"❓"}</div>
            <div class="forecast-temps">
              <span class="forecast-high">${Math.round(t.temperature||0)}${a}</span>
              ${void 0!==t.templow?j`<span class="forecast-low">${Math.round(t.templow)}${a}</span>`:F}
            </div>
          </div>
        `)}
      </div>
    `}_renderAlerts(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return j``;const e=t.attributes.alerts;if(!e||0===e.length)return j``;const i=e[0];return j`
      <div class="alerts">
        <div class="alert">
          <span class="alert-icon">⚠️</span>
          <div class="alert-text">
            <div class="alert-title">${i.title||"Weather Alert"}</div>
            ${i.description?j`<div class="alert-description">${i.description}</div>`:F}
          </div>
        </div>
      </div>
    `}_getGreeting(){if(this._config.greeting_name)return`Hello, ${this._config.greeting_name}`;const t=this.hass?.user?.name;return t?`Hello, ${t.split(" ")[0]}`:"Hello"}_getPrimaryValue(){const t=this._config;if(!t.primary_entity)return"--";const e=this.hass.states[t.primary_entity];if(!e)return"--";let i;if(i=t.primary_attribute?e.attributes[t.primary_attribute]:e.state,null==i||"unknown"===i||"unavailable"===i)return"--";return`${i}${t.primary_unit||""}`}_getSecondaryValue(){const t=this._config;if(!t.secondary_entity)return"";const e=this.hass.states[t.secondary_entity];if(!e)return"";let i;if(i=t.secondary_attribute?e.attributes[t.secondary_attribute]:e.state,null==i||"unknown"===i||"unavailable"===i)return"";return`${t.secondary_label||""} ${i}${t.secondary_unit||""}`.trim()}_getDescription(){const t=this._config;if(!t.description_entity){if(t.weather_entity){const e=this.hass.states[t.weather_entity];if(e)return this._formatCondition(e.state)}return""}const e=this.hass.states[t.description_entity];if(!e)return"";if(t.description_attribute){const i=e.attributes[t.description_attribute];return null!=i?String(i):""}return this._formatCondition(e.state)}_formatCondition(t){return{partlycloudy:"Partly Cloudy",mostlycloudy:"Mostly Cloudy",clear:"Clear","clear-night":"Clear",cloudy:"Cloudy",rainy:"Rain",pouring:"Heavy Rain",snowy:"Snow","snowy-rainy":"Sleet",sunny:"Sunny",windy:"Windy","windy-variant":"Windy",foggy:"Foggy",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Thunderstorm",exceptional:"Exceptional"}[t.toLowerCase()]||t.charAt(0).toUpperCase()+t.slice(1).replace(/-/g," ")}};$t.styles=xt,t([pt({attribute:!1})],$t.prototype,"hass",void 0),t([ut()],$t.prototype,"_config",void 0),$t=t([dt("weather-card")],$t);let Ct=class extends ot{static get styles(){return n`
      :host { display: block; }
      .editor-container { display: flex; flex-direction: column; gap: 16px; padding: 16px; }
      .section { border: 1px solid var(--divider-color); border-radius: 8px; padding: 16px; }
      .section-title { font-weight: 600; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-color); }
      .field { margin-bottom: 12px; }
      .field:last-child { margin-bottom: 0; }
      .field-label { display: block; margin-bottom: 4px; font-size: 12px; color: var(--secondary-text-color); }
      .field-row { display: flex; gap: 8px; }
      .field-row > * { flex: 1; }
      ha-entity-picker, ha-textfield, ha-select { width: 100%; }
      ha-formfield { display: block; margin-top: 8px; }
    `}setConfig(t){this._config=t}_getEntityAttributes(t){if(!t||!this.hass?.states[t])return[];const e=this.hass.states[t],i=Object.keys(e.attributes||{}),a=["friendly_name","icon","entity_picture","supported_features","attribution","device_class","state_class","unit_of_measurement"];return i.filter(t=>!a.includes(t)).sort()}_getAttributeUnit(t,e){if(!t||!e||!this.hass?.states[t])return"";const i=this.hass.states[t],a=String(i.attributes.unit_of_measurement||""),r={temperature:a||"°F",apparent_temperature:a||"°F",dew_point:a||"°F",humidity:"%",pressure:"hPa",wind_speed:"mph",wind_gust_speed:"mph",visibility:"mi",precipitation:"in",precipitation_probability:"%",cloud_coverage:"%",uv_index:""};return void 0!==r[e]?r[e]:""}_getAttributeLabel(t){if(!t)return"";const e={temperature:"Temperature:",apparent_temperature:"Feels Like:",dew_point:"Dew Point:",humidity:"Humidity:",pressure:"Pressure:",wind_speed:"Wind:",wind_gust_speed:"Gusts:",wind_bearing:"Wind Direction:",visibility:"Visibility:",precipitation:"Precipitation:",precipitation_probability:"Precip Chance:",cloud_coverage:"Cloud Cover:",uv_index:"UV Index:",ozone:"Ozone:"};return void 0!==e[t]?e[t]:t.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")+":"}_renderAttributeSelect(t,e,i,a,r,s){const n=this._getEntityAttributes(t);return t&&0!==n.length?j`
      <ha-select .value=${i||""} .configValue=${e} .unitConfigValue=${r||""} .labelConfigValue=${s||""} .entityId=${t} @selected=${this._attributeChanged} @closed=${t=>t.stopPropagation()} fixedMenuPosition naturalMenuWidth>
        <mwc-list-item value="">Use State (no attribute)</mwc-list-item>
        ${n.map(t=>j`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
      </ha-select>
    `:j`<ha-textfield .value=${i||""} .configValue=${e} @input=${this._valueChanged} placeholder=${a}></ha-textfield>`}render(){return this.hass&&this._config?j`
      <div class="editor-container">
        <div class="section">
          <div class="section-title">Weather Source</div>
          <div class="field">
            <span class="field-label">Weather Entity (required)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.weather_entity||""} .configValue=${"weather_entity"} @value-changed=${this._valueChanged} .entityFilter=${t=>t.entity_id.startsWith("weather.")} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field">
            <span class="field-label">Sun Entity (for day/night icons)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.sun_entity||"sun.sun"} .configValue=${"sun_entity"} @value-changed=${this._valueChanged} .entityFilter=${t=>t.entity_id.startsWith("sun.")} allow-custom-entity></ha-entity-picker>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Icon Settings</div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Icon Size (px)</span>
              <ha-textfield type="number" .value=${String(this._config.icon_size||100)} .configValue=${"icon_size"} @input=${this._valueChanged}></ha-textfield>
            </div>
            <div class="field">
              <span class="field-label">Icon Position</span>
              <ha-select .value=${this._config.icon_position||"left"} .configValue=${"icon_position"} @selected=${this._valueChanged} @closed=${t=>t.stopPropagation()} fixedMenuPosition>
                <mwc-list-item value="left">Left</mwc-list-item>
                <mwc-list-item value="right">Right</mwc-list-item>
              </ha-select>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Primary Value</div>
          <div class="field">
            <span class="field-label">Entity</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.primary_entity||""} .configValue=${"primary_entity"} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Attribute</span>
              ${this._renderAttributeSelect(this._config.primary_entity,"primary_attribute",this._config.primary_attribute,"temperature","primary_unit")}
            </div>
            <div class="field">
              <span class="field-label">Unit</span>
              <ha-textfield .value=${this._config.primary_unit??""} .configValue=${"primary_unit"} @input=${this._valueChanged} placeholder="°F"></ha-textfield>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Secondary Value</div>
          <div class="field">
            <span class="field-label">Entity</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.secondary_entity||""} .configValue=${"secondary_entity"} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field-row">
            <div class="field">
              <span class="field-label">Attribute</span>
              ${this._renderAttributeSelect(this._config.secondary_entity,"secondary_attribute",this._config.secondary_attribute,"apparent_temperature","secondary_unit","secondary_label")}
            </div>
            <div class="field">
              <span class="field-label">Unit</span>
              <ha-textfield .value=${this._config.secondary_unit??""} .configValue=${"secondary_unit"} @input=${this._valueChanged} placeholder="°F"></ha-textfield>
            </div>
          </div>
          <div class="field">
            <span class="field-label">Label</span>
            <ha-textfield .value=${this._config.secondary_label??""} .configValue=${"secondary_label"} @input=${this._valueChanged} placeholder="Feels Like:"></ha-textfield>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Description</div>
          <div class="field">
            <span class="field-label">Entity (leave empty for weather condition)</span>
            <ha-entity-picker .hass=${this.hass} .value=${this._config.description_entity||""} .configValue=${"description_entity"} @value-changed=${this._valueChanged} allow-custom-entity></ha-entity-picker>
          </div>
          <div class="field">
            <span class="field-label">Attribute</span>
            ${this._renderAttributeSelect(this._config.description_entity,"description_attribute",this._config.description_attribute,"desc")}
          </div>
        </div>

        <div class="section">
          <div class="section-title">Features</div>
          <div class="field">
            <ha-formfield label="Show Greeting">
              <ha-switch .checked=${!1!==this._config.show_greeting} .configValue=${"show_greeting"} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <span class="field-label">Custom Greeting Name</span>
            <ha-textfield .value=${this._config.greeting_name||""} .configValue=${"greeting_name"} @input=${this._valueChanged} placeholder="Leave empty for logged-in user"></ha-textfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Sunrise/Sunset">
              <ha-switch .checked=${!0===this._config.show_sunrise_sunset} .configValue=${"show_sunrise_sunset"} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Forecast">
              <ha-switch .checked=${!0===this._config.show_forecast} .configValue=${"show_forecast"} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          ${this._config.show_forecast?j`
            <div class="field">
              <span class="field-label">Forecast Days (1-7)</span>
              <ha-textfield type="number" min="1" max="7" .value=${String(this._config.forecast_days||5)} .configValue=${"forecast_days"} @input=${this._valueChanged}></ha-textfield>
            </div>
          `:F}
          <div class="field">
            <ha-formfield label="Show Weather Alerts">
              <ha-switch .checked=${!0===this._config.show_alerts} .configValue=${"show_alerts"} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Show Background Effects">
              <ha-switch .checked=${!0===this._config.show_background_effects} .configValue=${"show_background_effects"} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          <div class="field">
            <ha-formfield label="Dynamic Background (Day/Night)">
              <ha-switch .checked=${!0===this._config.use_dynamic_background} .configValue=${"use_dynamic_background"} @change=${this._valueChanged}></ha-switch>
            </ha-formfield>
          </div>
          ${this._config.use_dynamic_background?j`
            <div class="field">
              <span class="field-label">Day Background (color or gradient)</span>
              <ha-textfield
                .value=${this._config.day_background||"linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"}
                .configValue=${"day_background"}
                @input=${this._valueChanged}
                placeholder="linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"
              ></ha-textfield>
            </div>
            <div class="field">
              <span class="field-label">Night Background (color or gradient)</span>
              <ha-textfield
                .value=${this._config.night_background||"linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"}
                .configValue=${"night_background"}
                @input=${this._valueChanged}
                placeholder="linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"
              ></ha-textfield>
            </div>
          `:F}
        </div>

        <div class="section">
          <div class="section-title">Tap Actions</div>
          <div class="field">
            <span class="field-label">Tap Action</span>
            <ha-select .value=${this._config.tap_action?.action||"more-info"} .configValue=${"tap_action.action"} @selected=${this._actionChanged} @closed=${t=>t.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
          ${"navigate"===this._config.tap_action?.action?j`
            <div class="field">
              <span class="field-label">Navigation Path</span>
              <ha-textfield .value=${this._config.tap_action?.navigation_path||""} .configValue=${"tap_action.navigation_path"} @input=${this._actionPathChanged} placeholder="/lovelace/weather"></ha-textfield>
            </div>
          `:F}
          ${"url"===this._config.tap_action?.action?j`
            <div class="field">
              <span class="field-label">URL</span>
              <ha-textfield .value=${this._config.tap_action?.url_path||""} .configValue=${"tap_action.url_path"} @input=${this._actionPathChanged} placeholder="https://weather.com"></ha-textfield>
            </div>
          `:F}
          <div class="field">
            <span class="field-label">Hold Action</span>
            <ha-select .value=${this._config.hold_action?.action||"none"} .configValue=${"hold_action.action"} @selected=${this._actionChanged} @closed=${t=>t.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
          <div class="field">
            <span class="field-label">Double Tap Action</span>
            <ha-select .value=${this._config.double_tap_action?.action||"none"} .configValue=${"double_tap_action.action"} @selected=${this._actionChanged} @closed=${t=>t.stopPropagation()} fixedMenuPosition>
              <mwc-list-item value="none">None</mwc-list-item>
              <mwc-list-item value="more-info">More Info</mwc-list-item>
              <mwc-list-item value="navigate">Navigate</mwc-list-item>
              <mwc-list-item value="url">Open URL</mwc-list-item>
            </ha-select>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Appearance</div>
          <div class="field">
            <span class="field-label">Card Height</span>
            <ha-textfield .value=${this._config.card_height||"auto"} .configValue=${"card_height"} @input=${this._valueChanged} placeholder="auto or 180px"></ha-textfield>
          </div>
        </div>

        <div class="section">
          <div class="section-title">Layout</div>
          <div class="field">
            <span class="field-label">Grid Area</span>
            <ha-textfield .value=${this._config.view_layout?.["grid-area"]||""} .configValue=${"view_layout.grid-area"} @input=${this._viewLayoutChanged} placeholder="weather"></ha-textfield>
          </div>
        </div>
      </div>
    `:j``}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue;if(!i)return;let a;if(a="checkbox"===e.type||"HA-SWITCH"===e.tagName?e.checked:"number"===e.type?e.value?Number(e.value):void 0:t.detail?.value??e.value,""===a||void 0===a){const t={...this._config};delete t[i],this._config=t}else this._config={...this._config,[i]:a};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_attributeChanged(t){if(!this._config||!this.hass)return;const e=t.target,{configValue:i,unitConfigValue:a,labelConfigValue:r,entityId:s,value:n}=e;if(!i)return;const o={...this._config};""===n||void 0===n?(delete o[i],a&&delete o[a],r&&delete o[r]):(o[i]=n,a&&(o[a]=this._getAttributeUnit(s,n)),r&&(o[r]=this._getAttributeLabel(n))),this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_actionChanged(t){if(!this._config)return;const e=t.target,[i,a]=e.configValue.split("."),r={...this._config[i]||{},[a]:e.value};this._config={...this._config,[i]:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_actionPathChanged(t){if(!this._config)return;const e=t.target,[i,a]=e.configValue.split("."),r={...this._config[i]||{},[a]:e.value};this._config={...this._config,[i]:r},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_viewLayoutChanged(t){if(!this._config)return;const e=t.target.value,i={...this._config.view_layout};""===e||void 0===e?delete i["grid-area"]:i["grid-area"]=e;if(Object.keys(i).length>0)this._config={...this._config,view_layout:i};else{const t={...this._config};delete t.view_layout,this._config=t}this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};t([pt({attribute:!1})],Ct.prototype,"hass",void 0),t([ut()],Ct.prototype,"_config",void 0),Ct=t([dt("weather-card-editor")],Ct),window.customCards=window.customCards||[],window.customCards.push({type:"weather-card",name:"Weather Card",description:"A customizable weather card with animated icons, forecast, and tap actions",preview:!0}),console.info("%c WEATHER-CARD %c v2.0.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");export{$t as WeatherCard,Ct as WeatherCardEditor};
//# sourceMappingURL=weather-card.js.map
