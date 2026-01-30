function t(t,e,i,r){var a,n=arguments.length,s=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(n<3?a(s):n>3?a(e,i,s):a(e,i))||s);return n>3&&s&&Object.defineProperty(e,i,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),a=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const s=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]);return new n(i,t,r)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:f,getOwnPropertyNames:p,getOwnPropertySymbols:c,getPrototypeOf:u}=Object,h=globalThis,m=h.trustedTypes,g=m?m.emptyScript:"",y=h.reactiveElementPolyfillSupport,b=(t,e)=>t,x={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},k=(t,e)=>!l(t,e),v={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:a}=f(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);a?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),...c(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of r){const r=document.createElement("style"),a=e.litNonce;void 0!==a&&r.setAttribute("nonce",a),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:x;this._$Em=r;const n=a.fromAttribute(e,t.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(t,e,i,r=!1,a){if(void 0!==t){const n=this.constructor;if(!1===r&&(a=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??k)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:a},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==a||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,y?.({ReactiveElement:w}),(h.reactiveElementVersions??=[]).push("2.1.2");const _=globalThis,C=t=>t,$=_.trustedTypes,N=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,A="?"+G,M=`<${A}>`,T=document,U=()=>T.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,z="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,L=/>/g,V=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,D=/"/g,R=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),W=new WeakMap,Y=T.createTreeWalker(T,129);function q(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==N?N.createHTML(e):e}const Q=(t,e)=>{const i=t.length-1,r=[];let a,n=2===e?"<svg>":3===e?"<math>":"",s=P;for(let e=0;e<i;e++){const i=t[e];let o,l,d=-1,f=0;for(;f<i.length&&(s.lastIndex=f,l=s.exec(i),null!==l);)f=s.lastIndex,s===P?"!--"===l[1]?s=B:void 0!==l[1]?s=L:void 0!==l[2]?(R.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=V):void 0!==l[3]&&(s=V):s===V?">"===l[0]?(s=a??P,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?V:'"'===l[3]?D:H):s===D||s===H?s=V:s===B||s===L?s=P:(s=V,a=void 0);const p=s===V&&t[e+1].startsWith("/>")?" ":"";n+=s===P?i+M:d>=0?(r.push(o),i.slice(0,d)+S+i.slice(d)+G+p):i+G+(-2===d?e:p)}return[q(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class X{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let a=0,n=0;const s=t.length-1,o=this.parts,[l,d]=Q(t,e);if(this.el=X.createElement(l,i),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=Y.nextNode())&&o.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=d[n++],i=r.getAttribute(t).split(G),s=/([.?@])?(.*)/.exec(e);o.push({type:1,index:a,name:s[2],strings:i,ctor:"."===s[1]?et:"?"===s[1]?it:"@"===s[1]?rt:tt}),r.removeAttribute(t)}else t.startsWith(G)&&(o.push({type:6,index:a}),r.removeAttribute(t));if(R.test(r.tagName)){const t=r.textContent.split(G),e=t.length-1;if(e>0){r.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],U()),Y.nextNode(),o.push({type:2,index:++a});r.append(t[e],U())}}}else if(8===r.nodeType)if(r.data===A)o.push({type:2,index:a});else{let t=-1;for(;-1!==(t=r.data.indexOf(G,t+1));)o.push({type:7,index:a}),t+=G.length-1}a++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,r){if(e===I)return e;let a=void 0!==r?i._$Co?.[r]:i._$Cl;const n=E(e)?void 0:e._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(t),a._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=a:i._$Cl=a),void 0!==a&&(e=K(t,a._$AS(t,e.values),a,r)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);Y.currentNode=r;let a=Y.nextNode(),n=0,s=0,o=i[0];for(;void 0!==o;){if(n===o.index){let e;2===o.type?e=new J(a,a.nextSibling,this,t):1===o.type?e=new o.ctor(a,o.name,o.strings,this,t):6===o.type&&(e=new at(a,this,t)),this._$AV.push(e),o=i[++s]}n!==o?.index&&(a=Y.nextNode(),n++)}return Y.currentNode=T,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),E(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==I&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Z(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new X(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const a of t)r===e.length?e.push(i=new J(this.O(U()),this.O(U()),this,this.options)):i=e[r],i._$AI(a),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=C(t).nextSibling;C(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,a){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,r){const a=this.strings;let n=!1;if(void 0===a)t=K(this,t,e,0),n=!E(t)||t!==this._$AH&&t!==I,n&&(this._$AH=t);else{const r=t;let s,o;for(t=a[0],s=0;s<a.length-1;s++)o=K(this,r[i+s],e,s),o===I&&(o=this._$AH[s]),n||=!E(o)||o!==this._$AH[s],o===F?t=F:t!==F&&(t+=(o??"")+a[s+1]),this._$AH[s]=o}n&&!r&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class rt extends tt{constructor(t,e,i,r,a){super(t,e,i,r,a),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??F)===I)return;const i=this._$AH,r=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==F&&(i===F||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const nt=_.litHtmlPolyfillSupport;nt?.(X,J),(_.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;let ot=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let a=r._$litPart$;if(void 0===a){const t=i?.renderBefore??null;r._$litPart$=a=new J(e.insertBefore(U(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}};ot._$litElement$=!0,ot.finalized=!0,st.litElementHydrateSupport?.({LitElement:ot});const lt=st.litElementPolyfillSupport;lt?.({LitElement:ot}),(st.litElementVersions??=[]).push("4.2.2");const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ft={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:k},pt=(t=ft,e,i)=>{const{kind:r,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const a=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,a,t,!0,i)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const a=this[r];e.call(this,i),this.requestUpdate(r,a,t,!0,i)}}throw Error("Unsupported decorator location: "+r)};function ct(t){return(e,i)=>"object"==typeof i?pt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return ct({...t,state:!0,attribute:!1})}const ht=2,mt=t=>(...e)=>({_$litDirective$:t,values:e});let gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}},yt=class extends gt{constructor(t){if(super(t),this.it=F,t.type!==ht)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===F||null==t)return this._t=void 0,this.it=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};yt.directiveName="unsafeHTML",yt.resultType=1;const bt=mt(yt),xt={},kt=mt(class extends gt{constructor(){super(...arguments),this.ot=xt}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((t,e)=>t===this.ot[e]))return I}else if(this.ot===e)return I;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),vt=[s`
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
`,s`
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
`,s`
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

`,s`
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

`,s`
  /* ==========================================================================
     Cloudy Effect Container
     ========================================================================== */

  .effect-cloudy {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
  }

  /* ==========================================================================
     Cloud Cluster - Group of puffs that form one cloud
     ========================================================================== */

  .effect-cloudy .cloud {
    position: absolute;
    display: flex;
    align-items: center;
  }

  /* Base cloud puff - gray tones for readability */
  .effect-cloudy .cloud span {
    position: absolute;
    background: rgba(165, 167, 168, 0.85);
    border-radius: 50%;
    opacity: 0;
    animation: cloud-drift 20s linear infinite;
  }

  /* ==========================================================================
     Cloud 1 - Large foreground cloud (top)
     ========================================================================== */

  .effect-cloudy .cloud-1 {
    top: 10%;
    left: -100px;
  }

  .effect-cloudy .cloud-1 span {
    filter: blur(8px);
    background: rgba(165, 167, 168, 0.9);
  }

  /* Core puffs - main body */
  .effect-cloudy .cloud-1 span:nth-child(1) { width: 60px; height: 40px; top: 10px; left: 0; animation-delay: 0s; }
  .effect-cloudy .cloud-1 span:nth-child(2) { width: 80px; height: 50px; top: 0; left: 30px; animation-delay: 0.2s; }
  .effect-cloudy .cloud-1 span:nth-child(3) { width: 70px; height: 45px; top: 5px; left: 70px; animation-delay: 0.4s; }
  .effect-cloudy .cloud-1 span:nth-child(4) { width: 55px; height: 35px; top: 15px; left: 110px; animation-delay: 0.6s; }
  
  /* Texture puffs - add depth with darker gray */
  .effect-cloudy .cloud-1 span:nth-child(5) { width: 40px; height: 30px; top: -5px; left: 50px; filter: blur(10px); animation-delay: 0.3s; background: rgba(146, 149, 150, 0.7); }
  .effect-cloudy .cloud-1 span:nth-child(6) { width: 35px; height: 25px; top: 20px; left: 40px; filter: blur(12px); animation-delay: 0.5s; background: rgba(146, 149, 150, 0.6); }
  .effect-cloudy .cloud-1 span:nth-child(7) { width: 50px; height: 35px; top: -8px; left: 85px; filter: blur(9px); animation-delay: 0.7s; background: rgba(156, 158, 159, 0.75); }
  .effect-cloudy .cloud-1 span:nth-child(8) { width: 30px; height: 22px; top: 25px; left: 95px; filter: blur(14px); animation-delay: 0.8s; background: rgba(146, 149, 150, 0.5); }

  /* ==========================================================================
     Cloud 2 - Medium mid-level cloud
     ========================================================================== */

  .effect-cloudy .cloud-2 {
    top: 45%;
    left: -120px;
  }

  .effect-cloudy .cloud-2 span {
    filter: blur(7px);
    animation-duration: 25s;
    background: rgba(160, 162, 163, 0.85);
  }

  /* Core puffs */
  .effect-cloudy .cloud-2 span:nth-child(1) { width: 50px; height: 35px; top: 8px; left: 0; animation-delay: 6s; }
  .effect-cloudy .cloud-2 span:nth-child(2) { width: 65px; height: 42px; top: 0; left: 25px; animation-delay: 6.2s; }
  .effect-cloudy .cloud-2 span:nth-child(3) { width: 55px; height: 38px; top: 5px; left: 60px; animation-delay: 6.4s; }
  .effect-cloudy .cloud-2 span:nth-child(4) { width: 45px; height: 30px; top: 12px; left: 90px; animation-delay: 6.6s; }
  
  /* Texture puffs */
  .effect-cloudy .cloud-2 span:nth-child(5) { width: 35px; height: 25px; top: -3px; left: 40px; filter: blur(10px); animation-delay: 6.3s; background: rgba(146, 149, 150, 0.65); }
  .effect-cloudy .cloud-2 span:nth-child(6) { width: 28px; height: 20px; top: 18px; left: 55px; filter: blur(11px); animation-delay: 6.5s; background: rgba(146, 149, 150, 0.55); }
  .effect-cloudy .cloud-2 span:nth-child(7) { width: 40px; height: 28px; top: -5px; left: 70px; filter: blur(9px); animation-delay: 6.7s; background: rgba(156, 158, 159, 0.7); }
  .effect-cloudy .cloud-2 span:nth-child(8) { width: 32px; height: 22px; top: 20px; left: 30px; filter: blur(13px); animation-delay: 6.8s; background: rgba(146, 149, 150, 0.5); }

  /* ==========================================================================
     Cloud 3 - Small background cloud (lower)
     ========================================================================== */

  .effect-cloudy .cloud-3 {
    top: 70%;
    left: -80px;
  }

  .effect-cloudy .cloud-3 span {
    filter: blur(6px);
    animation-duration: 30s;
    background: rgba(155, 157, 158, 0.8);
  }

  /* Core puffs */
  .effect-cloudy .cloud-3 span:nth-child(1) { width: 40px; height: 28px; top: 5px; left: 0; animation-delay: 12s; }
  .effect-cloudy .cloud-3 span:nth-child(2) { width: 55px; height: 35px; top: 0; left: 20px; animation-delay: 12.2s; }
  .effect-cloudy .cloud-3 span:nth-child(3) { width: 45px; height: 30px; top: 3px; left: 50px; animation-delay: 12.4s; }
  .effect-cloudy .cloud-3 span:nth-child(4) { width: 35px; height: 24px; top: 8px; left: 75px; animation-delay: 12.6s; }
  
  /* Texture puffs */
  .effect-cloudy .cloud-3 span:nth-child(5) { width: 25px; height: 18px; top: -2px; left: 35px; filter: blur(8px); animation-delay: 12.3s; background: rgba(146, 149, 150, 0.6); }
  .effect-cloudy .cloud-3 span:nth-child(6) { width: 30px; height: 20px; top: 12px; left: 45px; filter: blur(10px); animation-delay: 12.5s; background: rgba(146, 149, 150, 0.5); }

  /* ==========================================================================
     Cloud 4 - Wispy accent cloud
     ========================================================================== */

  .effect-cloudy .cloud-4 {
    top: 28%;
    left: -90px;
  }

  .effect-cloudy .cloud-4 span {
    filter: blur(9px);
    animation-duration: 22s;
    background: rgba(162, 164, 165, 0.85);
  }

  /* Core puffs - more spread out for wispy look */
  .effect-cloudy .cloud-4 span:nth-child(1) { width: 45px; height: 30px; top: 5px; left: 0; animation-delay: 3s; }
  .effect-cloudy .cloud-4 span:nth-child(2) { width: 60px; height: 38px; top: -2px; left: 35px; animation-delay: 3.3s; }
  .effect-cloudy .cloud-4 span:nth-child(3) { width: 50px; height: 32px; top: 8px; left: 75px; animation-delay: 3.6s; }
  .effect-cloudy .cloud-4 span:nth-child(4) { width: 40px; height: 26px; top: 3px; left: 110px; animation-delay: 3.9s; }
  
  /* Texture puffs - extra wispy */
  .effect-cloudy .cloud-4 span:nth-child(5) { width: 30px; height: 20px; top: -8px; left: 55px; filter: blur(12px); animation-delay: 3.4s; background: rgba(146, 149, 150, 0.55); }
  .effect-cloudy .cloud-4 span:nth-child(6) { width: 25px; height: 18px; top: 15px; left: 90px; filter: blur(14px); animation-delay: 3.7s; background: rgba(146, 149, 150, 0.45); }
  .effect-cloudy .cloud-4 span:nth-child(7) { width: 35px; height: 24px; top: -5px; left: 95px; filter: blur(11px); animation-delay: 4.0s; background: rgba(156, 158, 159, 0.65); }

  /* ==========================================================================
     Cloud Drift Animation - Horizontal movement with scale/fade
     ========================================================================== */

  @keyframes cloud-drift {
    0% {
      transform: translateX(0) scale(1);
      opacity: 0;
    }
    5% {
      opacity: 0.7;
    }
    15% {
      opacity: 0.85;
    }
    50% {
      transform: translateX(220px) scale(1.15);
      opacity: 0.9;
    }
    85% {
      opacity: 0.7;
    }
    95% {
      opacity: 0.3;
    }
    100% {
      transform: translateX(480px) scale(1.3);
      opacity: 0;
    }
  }

  /* ==========================================================================
     Night Variants - Darker gray-blue tones
     ========================================================================== */

  .effect-cloudy.is-night .cloud span {
    background: rgba(70, 75, 85, 0.8);
  }

  /* Slightly different shades per cloud for depth */
  .effect-cloudy.is-night .cloud-1 span {
    background: rgba(75, 80, 90, 0.85);
  }

  .effect-cloudy.is-night .cloud-1 span:nth-child(5),
  .effect-cloudy.is-night .cloud-1 span:nth-child(6),
  .effect-cloudy.is-night .cloud-1 span:nth-child(7),
  .effect-cloudy.is-night .cloud-1 span:nth-child(8) {
    background: rgba(60, 65, 75, 0.65);
  }

  .effect-cloudy.is-night .cloud-2 span {
    background: rgba(65, 70, 80, 0.75);
  }

  .effect-cloudy.is-night .cloud-2 span:nth-child(5),
  .effect-cloudy.is-night .cloud-2 span:nth-child(6),
  .effect-cloudy.is-night .cloud-2 span:nth-child(7),
  .effect-cloudy.is-night .cloud-2 span:nth-child(8) {
    background: rgba(55, 60, 70, 0.6);
  }

  .effect-cloudy.is-night .cloud-3 span {
    background: rgba(55, 60, 70, 0.7);
  }

  .effect-cloudy.is-night .cloud-3 span:nth-child(5),
  .effect-cloudy.is-night .cloud-3 span:nth-child(6) {
    background: rgba(50, 55, 65, 0.55);
  }

  .effect-cloudy.is-night .cloud-4 span {
    background: rgba(60, 65, 75, 0.75);
  }

  .effect-cloudy.is-night .cloud-4 span:nth-child(5),
  .effect-cloudy.is-night .cloud-4 span:nth-child(6),
  .effect-cloudy.is-night .cloud-4 span:nth-child(7) {
    background: rgba(50, 55, 65, 0.55);
  }
`,s`
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

`,s`
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
`,s`
  /* ==========================================================================
     Clear Night Effect Container
     ========================================================================== */
  .effect-clear-night {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }

  /* ==========================================================================
     Static Star Field - These don't animate
     ========================================================================== */
  .effect-clear-night .stars-static {
    position: absolute;
    inset: 0;
    background-image:
      /* Larger brighter stars */
      radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 85px 65px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 150px 25px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 215px 80px, rgba(255,255,255,0.8), transparent),
      radial-gradient(2px 2px at 280px 35px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 345px 70px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 55px 120px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 120px 145px, rgba(255,255,255,0.8), transparent),
      radial-gradient(2px 2px at 185px 110px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 250px 155px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 315px 125px, rgba(255,255,255,0.8), transparent),
      /* Smaller dimmer stars */
      radial-gradient(1px 1px at 40px 55px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 100px 40px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 170px 95px, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 235px 50px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 300px 100px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 65px 170px, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 140px 180px, rgba(255,255,255,0.6), transparent),
      radial-gradient(1px 1px at 210px 165px, rgba(255,255,255,0.5), transparent),
      radial-gradient(1px 1px at 275px 185px, rgba(255,255,255,0.55), transparent),
      radial-gradient(1px 1px at 340px 160px, rgba(255,255,255,0.6), transparent);
  }

  /* ==========================================================================
     Individual Twinkle Stars - Each animates independently
     ========================================================================== */
  .effect-clear-night .twinkle-star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 50%;
    opacity: 0.7;
  }

  /* Star positions spread across the card */
  .effect-clear-night .twinkle-star-1 {
    top: 18%;
    left: 12%;
    animation: twinkle-burst 13s ease-in-out infinite;
  }

  .effect-clear-night .twinkle-star-2 {
    top: 22%;
    left: 45%;
    animation: twinkle-burst 11s ease-in-out infinite;
    animation-delay: -4s;
  }

  .effect-clear-night .twinkle-star-3 {
    top: 15%;
    left: 78%;
    animation: twinkle-burst 14s ease-in-out infinite;
    animation-delay: -8s;
  }

  .effect-clear-night .twinkle-star-4 {
    top: 45%;
    left: 22%;
    animation: twinkle-burst 12s ease-in-out infinite;
    animation-delay: -2s;
  }

  .effect-clear-night .twinkle-star-5 {
    top: 52%;
    left: 85%;
    animation: twinkle-burst 15s ease-in-out infinite;
    animation-delay: -6s;
  }

  .effect-clear-night .twinkle-star-6 {
    top: 70%;
    left: 55%;
    animation: twinkle-burst 10s ease-in-out infinite;
    animation-delay: -3s;
  }

  /* ==========================================================================
     Twinkle Animation - Quick bright burst then back to dim

     The animation spends most of its time (85%) at base opacity,
     then quickly bursts bright (5%) and fades back (10%).
     This creates a natural "twinkle" effect.
     ========================================================================== */
  @keyframes twinkle-burst {
    0%, 85%, 100% {
      opacity: 0.7;
      transform: scale(1);
      box-shadow: none;
    }
    90% {
      opacity: 1;
      transform: scale(1.4);
      box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.6);
    }
    95% {
      opacity: 1;
      transform: scale(1.2);
      box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.4);
    }
  }
`],wt={sunny_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>',clear_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><circle cx="32" cy="32" r="10.5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></svg>',"clear-night_night":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/></path></svg>',clear_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32; 15 32 32; -5 32 32"/></path></svg>',partlycloudy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/></svg>',partlycloudy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>',cloudy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>',cloudy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"><animateTransform attributeName="transform" dur="7s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path></svg>',rainy_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#c"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',rainy_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/></defs><path fill="url(#b)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',pouring_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#c"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',pouring_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="22.53" x2="25.47" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="29.53" x2="32.47" y1="42.95" y2="48.05" xlink:href="#a"/><linearGradient id="e" x1="36.53" x2="39.47" y1="42.95" y2="48.05" xlink:href="#a"/></defs><path fill="url(#b)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.39 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.39 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.2s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.2s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',snowy_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="b" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="30.12" x2="31.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="d" x1="29.67" x2="32.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="e" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="f" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="g" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="h" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/></defs><circle cx="19" cy="24" r="5" fill="url(#b)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="31" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#e)" stroke-miterlimit="10"/><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#g)" stroke-miterlimit="10"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g></svg>',snowy_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="30.12" x2="31.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="d" x1="29.67" x2="32.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="e" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="f" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="g" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="h" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="31" cy="45" r="1.25" fill="none" stroke="url(#c)" stroke-miterlimit="10"/><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" dur="4s" repeatCount="indefinite" type="translate" values="-1 -6; 1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 31 45; 360 31 45"/><animate attributeName="opacity" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#e)" stroke-miterlimit="10"/><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#g)" stroke-miterlimit="10"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g></svg>',"snowy-rainy_day":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><circle cx="19" cy="24" r="5" fill="url(#c)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',"snowy-rainy_night":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#c"/><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#c"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#c"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#c"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><path fill="url(#c)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',fog_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',fog_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',foggy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',foggy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animate attributeName="stroke-dasharray" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path><path fill="none" stroke="#e6effc" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animate attributeName="stroke-dasharray" begin="-1.5s" dur="3s" repeatCount="indefinite" values="0 52; 52 52"/></path></svg>',hail_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="24.74" x2="26.46" y1="43.39" y2="46.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="d" x1="31.74" x2="33.46" y1="49.39" y2="52.61" xlink:href="#c"/><linearGradient id="e" x1="38.74" x2="40.46" y1="43.39" y2="46.61" xlink:href="#c"/></defs><circle cx="19" cy="24" r="5" fill="url(#a)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><circle cx="25.6" cy="45" r="1.5" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="32.6" cy="51" r="1.5" fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="39.6" cy="45" r="1.5" fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle></svg>',hail_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="b" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="c" x1="24.74" x2="26.46" y1="43.39" y2="46.61" xlink:href="#a"/><linearGradient id="d" x1="31.74" x2="33.46" y1="49.39" y2="52.61" xlink:href="#a"/><linearGradient id="e" x1="38.74" x2="40.46" y1="43.39" y2="46.61" xlink:href="#a"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#b)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><circle cx="25.6" cy="45" r="1.5" fill="url(#c)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="32.6" cy="51" r="1.5" fill="url(#d)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.2s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle><circle cx="39.6" cy="45" r="1.5" fill="url(#e)" stroke="#86c3db" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-0.4s" dur="0.6s" repeatCount="indefinite" type="translate" values="0 -6; 0 8"/><animate attributeName="opacity" begin="-0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"/></circle></svg>',lightning_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path></svg>',lightning_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path></svg>',"lightning-rainy_day":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',"lightning-rainy_night":'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',windy_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',windy_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',"windy-variant_day":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',"windy-variant_night":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="none" stroke="#e6effc" stroke-dasharray="35 22" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 52h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-8 0; 8 0"/></path><path fill="none" stroke="#e6effc" stroke-dasharray="24 18" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 58h30"><animateTransform attributeName="transform" begin="-1s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0"/></path></svg>',sleet_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="16.5" x2="21.5" y1="19.67" y2="28.33" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="d" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="a" x1="23.12" x2="24.88" y1="43.48" y2="46.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/></linearGradient><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><circle cx="19" cy="24" r="5" fill="url(#c)" stroke="#f8af18" stroke-miterlimit="10" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 19 24; 360 19 24"/></path><path fill="url(#d)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#a)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',sleet_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="13.58" x2="24.15" y1="15.57" y2="33.87" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="10 19.22 24.293; -10 19.22 24.293; 10 19.22 24.293"/></linearGradient><linearGradient id="c" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="d" x1="23.12" x2="24.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="e" x1="22.67" x2="25.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="f" x1="37.12" x2="38.88" y1="43.48" y2="46.52" xlink:href="#a"/><linearGradient id="g" x1="36.67" x2="39.33" y1="42.69" y2="47.31" xlink:href="#a"/><linearGradient id="b" x1="23.31" x2="24.69" y1="44.3" y2="46.7" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="h" x1="30.31" x2="31.69" y1="44.3" y2="46.7" xlink:href="#b"/><linearGradient id="i" x1="37.31" x2="38.69" y1="44.3" y2="46.7" xlink:href="#b"/></defs><path fill="url(#a)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-10 19.22 24.293; 10 19.22 24.293; -10 19.22 24.293"/></path><path fill="url(#c)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><g><circle cx="24" cy="45" r="1.25" fill="none" stroke="url(#d)" stroke-miterlimit="10"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-2s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 24 45; 360 24 45"/><animate attributeName="opacity" begin="-2s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><g><circle cx="38" cy="45" r="1.25" fill="none" stroke="url(#f)" stroke-miterlimit="10"/><path fill="none" stroke="url(#g)" stroke-linecap="round" stroke-miterlimit="10" d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"/><animateTransform additive="sum" attributeName="transform" begin="-1s" dur="4s" repeatCount="indefinite" type="translate" values="1 -6; -1 12"/><animateTransform additive="sum" attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 38 45; 360 38 45"/><animate attributeName="opacity" begin="-1s" dur="4s" repeatCount="indefinite" values="0;1;1;1;0"/></g><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M24.08 45.01l-.16.98"><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M31.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-0.5s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.5s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#i)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M38.08 45.01l-.16.98"><animateTransform attributeName="transform" begin="-1s" dur="1.5s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-1s" dur="1.5s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',thunderstorm_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',thunderstorm_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="22.56" x2="39.2" y1="21.96" y2="50.8" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f3f7fe"/><stop offset=".45" stop-color="#f3f7fe"/><stop offset="1" stop-color="#deeafb"/></linearGradient><linearGradient id="b" x1="26.74" x2="35.76" y1="37.88" y2="53.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f7b23b"/><stop offset=".45" stop-color="#f7b23b"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="c" x1="17.03" x2="19.97" y1="42.95" y2="48.05" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4286ee"/><stop offset=".45" stop-color="#4286ee"/><stop offset="1" stop-color="#0950bc"/></linearGradient><linearGradient id="d" x1="42.03" x2="44.97" y1="42.95" y2="48.05" xlink:href="#c"/></defs><path fill="url(#a)" stroke="#e6effc" stroke-miterlimit="10" stroke-width=".5" d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"/><path fill="url(#b)" stroke="#f6a823" stroke-miterlimit="10" stroke-width=".5" d="M30.7 39.2l2.28-6.2h-3.47a.8.8 0 01-.74-1.11l2.78-6.89h6.72L35.81 32h3.59a.8.8 0 01.66 1.26l-9.26 12.88z"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M18.89 43.03l-.78 4.94"><animateTransform attributeName="transform" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M43.89 43.03l-.78 4.94"><animateTransform attributeName="transform" begin="-0.4s" dur="0.7s" repeatCount="indefinite" type="translate" values="1 -5; -2 10"/><animate attributeName="opacity" begin="-0.4s" dur="0.7s" repeatCount="indefinite" values="0;1;1;0"/></path></svg>',hurricane_day:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.97" x2="42.03" y1="14.63" y2="49.37" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d4d7dd"/><stop offset=".45" stop-color="#d4d7dd"/><stop offset="1" stop-color="#bec1c6"/><animateTransform attributeName="gradientTransform" dur="1s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></linearGradient></defs><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43 32a11 11 0 11-11-11 11 11 0 0111 11zM25 14.61l-.48 1a33.68 33.68 0 00-3.42 17.82h0M39 49.39l.48-1a33.68 33.68 0 003.42-17.82h0"><animateTransform attributeName="transform" dur="1s" repeatCount="indefinite" type="rotate" values="360 32 32; 0 32 32"/></path></svg>',hurricane_night:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="21.97" x2="42.03" y1="14.63" y2="49.37" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d4d7dd"/><stop offset=".45" stop-color="#d4d7dd"/><stop offset="1" stop-color="#bec1c6"/><animateTransform attributeName="gradientTransform" dur="1s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></linearGradient></defs><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43 32a11 11 0 11-11-11 11 11 0 0111 11zM25 14.61l-.48 1a33.68 33.68 0 00-3.42 17.82h0M39 49.39l.48-1a33.68 33.68 0 003.42-17.82h0"><animateTransform attributeName="transform" dur="1s" repeatCount="indefinite" type="rotate" values="360 32 32; 0 32 32"/></path></svg>',tornado_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="27.5" x2="36.5" y1="12.21" y2="27.79" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d4d7dd"/><stop offset=".45" stop-color="#d4d7dd"/><stop offset="1" stop-color="#bec1c6"/></linearGradient><linearGradient id="b" x1="28" x2="36" y1="19.07" y2="32.93" xlink:href="#a"/><linearGradient id="c" x1="28.63" x2="35.38" y1="26.15" y2="37.85" xlink:href="#a"/><linearGradient id="d" x1="29.25" x2="34.75" y1="33.24" y2="42.76" xlink:href="#a"/><linearGradient id="e" x1="30.25" x2="33.75" y1="40.97" y2="47.03" xlink:href="#a"/></defs><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 20h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M19 26h26"><animateTransform attributeName="transform" begin="-0.2s" dur="2s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M21.5 32h21"><animateTransform attributeName="transform" begin="-0.4s" dur="2s" repeatCount="indefinite" type="translate" values="-5 0; 5 0; -5 0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M24 38h16"><animateTransform attributeName="transform" begin="-0.6s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0; -6 0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M28 44h8"><animateTransform attributeName="transform" begin="-0.8s" dur="2s" repeatCount="indefinite" type="translate" values="-7 0; 7 0; -7 0"/></path></svg>',tornado_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="27.5" x2="36.5" y1="12.21" y2="27.79" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d4d7dd"/><stop offset=".45" stop-color="#d4d7dd"/><stop offset="1" stop-color="#bec1c6"/></linearGradient><linearGradient id="b" x1="28" x2="36" y1="19.07" y2="32.93" xlink:href="#a"/><linearGradient id="c" x1="28.63" x2="35.38" y1="26.15" y2="37.85" xlink:href="#a"/><linearGradient id="d" x1="29.25" x2="34.75" y1="33.24" y2="42.76" xlink:href="#a"/><linearGradient id="e" x1="30.25" x2="33.75" y1="40.97" y2="47.03" xlink:href="#a"/></defs><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M17 20h30"><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="translate" values="-3 0; 3 0; -3 0"/></path><path fill="none" stroke="url(#b)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M19 26h26"><animateTransform attributeName="transform" begin="-0.2s" dur="2s" repeatCount="indefinite" type="translate" values="-4 0; 4 0; -4 0"/></path><path fill="none" stroke="url(#c)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M21.5 32h21"><animateTransform attributeName="transform" begin="-0.4s" dur="2s" repeatCount="indefinite" type="translate" values="-5 0; 5 0; -5 0"/></path><path fill="none" stroke="url(#d)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M24 38h16"><animateTransform attributeName="transform" begin="-0.6s" dur="2s" repeatCount="indefinite" type="translate" values="-6 0; 6 0; -6 0"/></path><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M28 44h8"><animateTransform attributeName="transform" begin="-0.8s" dur="2s" repeatCount="indefinite" type="translate" values="-7 0; 7 0; -7 0"/></path></svg>',smoke_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="30.25" x2="33.25" y1="39.4" y2="44.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b8bdc6"/><stop offset=".45" stop-color="#b8bdc6"/><stop offset="1" stop-color="#a5aab2"/></linearGradient><linearGradient id="b" x1="23.5" x2="28" y1="29.1" y2="36.9" xlink:href="#a"/><linearGradient id="c" x1="33.75" x2="39.75" y1="19.8" y2="30.2" xlink:href="#a"/></defs><circle cx="31.75" cy="42" r="3" fill="url(#a)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 0 -17;"/><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0; 1; 1; 1; 0"/><animate attributeName="r" dur="3s" repeatCount="indefinite" values="3; 4.5; 6"/></circle><circle cx="25.75" cy="42" r="4.5" fill="url(#b)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-1s" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 0 -17;"/><animate attributeName="opacity" begin="-1s" dur="3s" repeatCount="indefinite" values="0; 1; 1; 1; 0"/><animate attributeName="r" begin="-1s" dur="3s" repeatCount="indefinite" values="3; 4.5; 6"/><animate attributeName="cx" begin="-1s" dur="3s" repeatCount="indefinite" values="31.75; 25.75"/></circle><circle cx="36.75" cy="42" r="6" fill="url(#c)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-2s" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 0 -17;"/><animate attributeName="opacity" begin="-2s" dur="3s" repeatCount="indefinite" values="0; 1; 1; 1; 0"/><animate attributeName="r" begin="-2s" dur="3s" repeatCount="indefinite" values="3; 4.5; 6"/><animate attributeName="cx" begin="-2s" dur="3s" repeatCount="indefinite" values="31.75; 36.75"/></circle></svg>',smoke_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="30.25" x2="33.25" y1="39.4" y2="44.6" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b8bdc6"/><stop offset=".45" stop-color="#b8bdc6"/><stop offset="1" stop-color="#a5aab2"/></linearGradient><linearGradient id="b" x1="23.5" x2="28" y1="29.1" y2="36.9" xlink:href="#a"/><linearGradient id="c" x1="33.75" x2="39.75" y1="19.8" y2="30.2" xlink:href="#a"/></defs><circle cx="31.75" cy="42" r="3" fill="url(#a)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 0 -17;"/><animate attributeName="opacity" dur="3s" repeatCount="indefinite" values="0; 1; 1; 1; 0"/><animate attributeName="r" dur="3s" repeatCount="indefinite" values="3; 4.5; 6"/></circle><circle cx="25.75" cy="42" r="4.5" fill="url(#b)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-1s" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 0 -17;"/><animate attributeName="opacity" begin="-1s" dur="3s" repeatCount="indefinite" values="0; 1; 1; 1; 0"/><animate attributeName="r" begin="-1s" dur="3s" repeatCount="indefinite" values="3; 4.5; 6"/><animate attributeName="cx" begin="-1s" dur="3s" repeatCount="indefinite" values="31.75; 25.75"/></circle><circle cx="36.75" cy="42" r="6" fill="url(#c)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width=".5"><animateTransform attributeName="transform" begin="-2s" dur="3s" repeatCount="indefinite" type="translate" values="0 0; 0 -17;"/><animate attributeName="opacity" begin="-2s" dur="3s" repeatCount="indefinite" values="0; 1; 1; 1; 0"/><animate attributeName="r" begin="-2s" dur="3s" repeatCount="indefinite" values="3; 4.5; 6"/><animate attributeName="cx" begin="-2s" dur="3s" repeatCount="indefinite" values="31.75; 36.75"/></circle></svg>',dust_day:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="26.75" x2="37.25" y1="22.91" y2="41.09" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fbbf24"/><stop offset=".45" stop-color="#fbbf24"/><stop offset="1" stop-color="#f59e0b"/></linearGradient><linearGradient id="a" x1="22.14" x2="27.53" y1="36" y2="45.32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fde68a"/><stop offset=".45" stop-color="#fde68a"/><stop offset="1" stop-color="#fde171"/></linearGradient><linearGradient id="d" x1="34.27" x2="39.66" y1="28.99" y2="38.32" xlink:href="#a"/><linearGradient id="e" x1="43.47" x2="48.86" y1="23.68" y2="33" xlink:href="#a"/><linearGradient id="f" x1="32.14" x2="37.53" y1="36" y2="45.32" xlink:href="#a"/><linearGradient id="g" x1="44.27" x2="49.66" y1="28.99" y2="38.32" xlink:href="#a"/><linearGradient id="h" x1="53.47" x2="58.86" y1="23.68" y2="33" xlink:href="#a"/><clipPath id="b"><path fill="none" d="M7.5 7.5h47l-47 47v-47z"/></clipPath></defs><g stroke-miterlimit="10" clip-path="url(#b)"><circle cx="32" cy="32" r="10.5" fill="url(#c)" stroke="#f8af18" stroke-width=".5"/><path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-width="3" d="M32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"><animateTransform attributeName="transform" dur="45s" repeatCount="indefinite" type="rotate" values="0 32 32; 360 32 32"/></path></g><g><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M24.89 45.11l3.19-3.19"/><path fill="none" stroke="url(#d)" stroke-dasharray="7 7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M33.03 36.97l7.42-7.42"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.92 27.08l3.19-3.19"/><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="-2 2; 0 0; -2 2"/></g><g><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M34.89 45.11l3.19-3.19"/><path fill="none" stroke="url(#g)" stroke-dasharray="7 7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.03 36.97l7.42-7.42"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M52.92 27.08l3.19-3.19"/><animateTransform attributeName="transform" begin="-2.5s" dur="3s" repeatCount="indefinite" type="translate" values="-2 2; 0 0; -2 2"/></g></svg>',dust_night:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64"><defs><linearGradient id="c" x1="21.92" x2="38.52" y1="18.75" y2="47.52" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#86c3db"/><stop offset=".45" stop-color="#86c3db"/><stop offset="1" stop-color="#5eafcf"/><animateTransform attributeName="gradientTransform" dur="10s" repeatCount="indefinite" type="rotate" values="5 32 32; -15 32 32; 5 32 32"/></linearGradient><linearGradient id="a" x1="22.14" x2="27.53" y1="36" y2="45.32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fde68a"/><stop offset=".45" stop-color="#fde68a"/><stop offset="1" stop-color="#fde171"/></linearGradient><linearGradient id="d" x1="34.27" x2="39.66" y1="28.99" y2="38.32" xlink:href="#a"/><linearGradient id="e" x1="43.47" x2="48.86" y1="23.68" y2="33" xlink:href="#a"/><linearGradient id="f" x1="32.14" x2="37.53" y1="36" y2="45.32" xlink:href="#a"/><linearGradient id="g" x1="44.27" x2="49.66" y1="28.99" y2="38.32" xlink:href="#a"/><linearGradient id="h" x1="53.47" x2="58.86" y1="23.68" y2="33" xlink:href="#a"/><clipPath id="b"><path fill="none" d="M7.5 7.5h47l-47 47v-47z"/></clipPath></defs><g clip-path="url(#b)"><g><path fill="url(#c)" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width=".5" d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"/><animateTransform attributeName="transform" dur="10s" repeatCount="indefinite" type="rotate" values="-5 32 32;15 32 32;-5 32 32"/></g></g><g><path fill="none" stroke="url(#a)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M24.89 45.11l3.19-3.19"/><path fill="none" stroke="url(#d)" stroke-dasharray="7 7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M33.03 36.97l7.42-7.42"/><path fill="none" stroke="url(#e)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M42.92 27.08l3.19-3.19"/><animateTransform attributeName="transform" dur="3s" repeatCount="indefinite" type="translate" values="-2 2; 0 0; -2 2"/></g><g><path fill="none" stroke="url(#f)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M34.89 45.11l3.19-3.19"/><path fill="none" stroke="url(#g)" stroke-dasharray="7 7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M43.03 36.97l7.42-7.42"/><path fill="none" stroke="url(#h)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M52.92 27.08l3.19-3.19"/><animateTransform attributeName="transform" begin="-2.5s" dur="3s" repeatCount="indefinite" type="translate" values="-2 2; 0 0; -2 2"/></g></svg>'},_t={exceptional:"cloudy",drizzle:"rainy","freezing-rain":"rainy",freezingrain:"rainy"},Ct={sunny:"☀️",clear:"☀️","clear-night":"🌙",partlycloudy:"⛅",cloudy:"☁️",rainy:"🌧️",pouring:"🌧️",snowy:"❄️","snowy-rainy":"🌨️",sleet:"🌨️",fog:"🌫️",foggy:"🌫️",hail:"🌨️",lightning:"⚡","lightning-rainy":"⛈️",thunderstorm:"⛈️",windy:"💨","windy-variant":"💨",exceptional:"⚠️",hurricane:"🌀",tornado:"🌪️",smoke:"💨",dust:"💨",drizzle:"🌧️","freezing-rain":"🌧️"};let $t=class extends ot{constructor(){super(...arguments),this.title=""}render(){return j`
      <div class="section">
        ${this.title?j`<div class="section-title">${this.title}</div>`:""}
        <div class="section-content">
          <slot></slot>
        </div>
      </div>
    `}};$t.styles=s`
    :host {
      display: block;
    }

    .section {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 16px;
    }

    .section-title {
      font-weight: 600;
      margin-bottom: 12px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--primary-color);
    }

    .section-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Remove margin from last field since we use gap */
    ::slotted(*:last-child) {
      margin-bottom: 0 !important;
    }
  `,t([ct({type:String})],$t.prototype,"title",void 0),$t=t([dt("editor-section")],$t);let Nt=class extends ot{constructor(){super(...arguments),this.label=""}render(){return j`
      <div class="field">
        ${this.label?j`<span class="field-label">${this.label}</span>`:""}
        <slot></slot>
      </div>
    `}};Nt.styles=s`
    :host {
      display: block;
    }

    .field {
      display: flex;
      flex-direction: column;
    }

    .field-label {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    /* Ensure slotted elements take full width */
    ::slotted(*) {
      width: 100%;
    }
  `,t([ct({type:String})],Nt.prototype,"label",void 0),Nt=t([dt("editor-field")],Nt);let St=class extends ot{constructor(){super(...arguments),this.label="Action"}render(){const t=this.action?.action||"none";return j`
      <div class="action-container">
        <div class="field">
          <span class="field-label">${this.label}</span>
          <ha-select
            .value=${t}
            @selected=${this._actionTypeChanged}
            @closed=${t=>t.stopPropagation()}
            fixedMenuPosition
          >
            <mwc-list-item value="none">None</mwc-list-item>
            <mwc-list-item value="more-info">More Info</mwc-list-item>
            <mwc-list-item value="navigate">Navigate</mwc-list-item>
            <mwc-list-item value="url">Open URL</mwc-list-item>
          </ha-select>
        </div>

        ${"navigate"===t?j`
          <div class="field">
            <span class="field-label">Navigation Path</span>
            <ha-textfield
              .value=${this.action?.navigation_path||""}
              @input=${this._navigationPathChanged}
              placeholder="/lovelace/weather"
            ></ha-textfield>
          </div>
        `:F}

        ${"url"===t?j`
          <div class="field">
            <span class="field-label">URL</span>
            <ha-textfield
              .value=${this.action?.url_path||""}
              @input=${this._urlPathChanged}
              placeholder="https://weather.com"
            ></ha-textfield>
          </div>
        `:F}
      </div>
    `}_actionTypeChanged(t){const e=t.target,i={...this.action,action:e.value};"navigate"!==i.action&&delete i.navigation_path,"url"!==i.action&&delete i.url_path,"call-service"!==i.action&&(delete i.service,delete i.service_data),this._dispatchChange(i)}_navigationPathChanged(t){const e=t.target,i={...this.action,action:"navigate",navigation_path:e.value};this._dispatchChange(i)}_urlPathChanged(t){const e=t.target,i={...this.action,action:"url",url_path:e.value};this._dispatchChange(i)}_dispatchChange(t){this.dispatchEvent(new CustomEvent("action-changed",{detail:{action:t},bubbles:!0,composed:!0}))}};St.styles=s`
    :host {
      display: block;
    }

    .action-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .field {
      display: flex;
      flex-direction: column;
    }

    .field-label {
      display: block;
      margin-bottom: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
    }

    ha-select,
    ha-textfield {
      width: 100%;
    }
  `,t([ct({type:String})],St.prototype,"label",void 0),t([ct({attribute:!1})],St.prototype,"action",void 0),St=t([dt("action-selector")],St);let Gt=class extends ot{setConfig(t){this._config=t}_getEntityAttributes(t){if(!t||!this.hass?.states[t])return[];const e=this.hass.states[t],i=Object.keys(e.attributes||{}),r=["friendly_name","icon","entity_picture","supported_features","attribution","device_class","state_class","unit_of_measurement"];return i.filter(t=>!r.includes(t)).sort()}_getAttributeUnit(t,e){if(!t||!e||!this.hass?.states[t])return"";const i=this.hass.states[t],r=String(i.attributes.unit_of_measurement||""),a={temperature:r||"°F",apparent_temperature:r||"°F",dew_point:r||"°F",humidity:"%",pressure:"hPa",wind_speed:"mph",wind_gust_speed:"mph",visibility:"mi",precipitation:"in",precipitation_probability:"%",cloud_coverage:"%",uv_index:""};return void 0!==a[e]?a[e]:""}_getAttributeLabel(t){if(!t)return"";const e={temperature:"Temperature:",apparent_temperature:"Feels Like:",dew_point:"Dew Point:",humidity:"Humidity:",pressure:"Pressure:",wind_speed:"Wind:",wind_gust_speed:"Gusts:",wind_bearing:"Wind Direction:",visibility:"Visibility:",precipitation:"Precipitation:",precipitation_probability:"Precip Chance:",cloud_coverage:"Cloud Cover:",uv_index:"UV Index:",ozone:"Ozone:"};return void 0!==e[t]?e[t]:t.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")+":"}_renderAttributeSelect(t,e,i,r,a,n){const s=this._getEntityAttributes(t);return t&&0!==s.length?j`
      <ha-select
        .value=${i||""}
        .configValue=${e}
        .unitConfigValue=${a||""}
        .labelConfigValue=${n||""}
        .entityId=${t}
        @selected=${this._attributeChanged}
        @closed=${t=>t.stopPropagation()}
        fixedMenuPosition
        naturalMenuWidth
      >
        <mwc-list-item value="">Use State (no attribute)</mwc-list-item>
        ${s.map(t=>j`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
      </ha-select>
    `:j`
        <ha-textfield
          .value=${i||""}
          .configValue=${e}
          @input=${this._valueChanged}
          placeholder=${r}
        ></ha-textfield>
      `}render(){return this.hass&&this._config?j`
      <div class="editor-container">
        ${this._renderWeatherSourceSection()}
        ${this._renderIconSettingsSection()}
        ${this._renderPrimaryValueSection()}
        ${this._renderSecondaryValueSection()}
        ${this._renderDescriptionSection()}
        ${this._renderFeaturesSection()}
        ${this._renderTapActionsSection()}
        ${this._renderAppearanceSection()}
        ${this._renderLayoutSection()}
      </div>
    `:j``}_renderWeatherSourceSection(){return j`
      <editor-section title="Weather Source">
        <editor-field label="Weather Entity (required)">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.weather_entity||""}
            .configValue=${"weather_entity"}
            @value-changed=${this._valueChanged}
            .entityFilter=${t=>t.entity_id.startsWith("weather.")}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <editor-field label="Sun Entity (for day/night icons)">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.sun_entity||"sun.sun"}
            .configValue=${"sun_entity"}
            @value-changed=${this._valueChanged}
            .entityFilter=${t=>t.entity_id.startsWith("sun.")}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
      </editor-section>
    `}_renderIconSettingsSection(){return j`
      <editor-section title="Icon Settings">
        <div class="field-row">
          <editor-field label="Icon Size (px)">
            <ha-textfield
              type="number"
              .value=${String(this._config.icon_size||100)}
              .configValue=${"icon_size"}
              @input=${this._valueChanged}
            ></ha-textfield>
          </editor-field>
          <editor-field label="Icon Position">
            <ha-select
              .value=${this._config.icon_position||"left"}
              .configValue=${"icon_position"}
              @selected=${this._valueChanged}
              @closed=${t=>t.stopPropagation()}
              fixedMenuPosition
            >
              <mwc-list-item value="left">Left</mwc-list-item>
              <mwc-list-item value="right">Right</mwc-list-item>
            </ha-select>
          </editor-field>
        </div>
      </editor-section>
    `}_renderPrimaryValueSection(){return j`
      <editor-section title="Primary Value">
        <editor-field label="Entity">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.primary_entity||""}
            .configValue=${"primary_entity"}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <div class="field-row">
          <editor-field label="Attribute">
            ${this._renderAttributeSelect(this._config.primary_entity,"primary_attribute",this._config.primary_attribute,"temperature","primary_unit")}
          </editor-field>
          <editor-field label="Unit">
            <ha-textfield
              .value=${this._config.primary_unit??""}
              .configValue=${"primary_unit"}
              @input=${this._valueChanged}
              placeholder="°F"
            ></ha-textfield>
          </editor-field>
        </div>
      </editor-section>
    `}_renderSecondaryValueSection(){return j`
      <editor-section title="Secondary Value">
        <editor-field label="Entity">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.secondary_entity||""}
            .configValue=${"secondary_entity"}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <div class="field-row">
          <editor-field label="Attribute">
            ${this._renderAttributeSelect(this._config.secondary_entity,"secondary_attribute",this._config.secondary_attribute,"apparent_temperature","secondary_unit","secondary_label")}
          </editor-field>
          <editor-field label="Unit">
            <ha-textfield
              .value=${this._config.secondary_unit??""}
              .configValue=${"secondary_unit"}
              @input=${this._valueChanged}
              placeholder="°F"
            ></ha-textfield>
          </editor-field>
        </div>
        <editor-field label="Label">
          <ha-textfield
            .value=${this._config.secondary_label??""}
            .configValue=${"secondary_label"}
            @input=${this._valueChanged}
            placeholder="Feels Like:"
          ></ha-textfield>
        </editor-field>
      </editor-section>
    `}_renderDescriptionSection(){return j`
      <editor-section title="Description">
        <editor-field label="Entity (leave empty for weather condition)">
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.description_entity||""}
            .configValue=${"description_entity"}
            @value-changed=${this._valueChanged}
            allow-custom-entity
          ></ha-entity-picker>
        </editor-field>
        <editor-field label="Attribute">
          ${this._renderAttributeSelect(this._config.description_entity,"description_attribute",this._config.description_attribute,"desc")}
        </editor-field>
      </editor-section>
    `}_renderFeaturesSection(){return j`
      <editor-section title="Features">
        <ha-formfield label="Show Greeting">
          <ha-switch
            .checked=${!1!==this._config.show_greeting}
            .configValue=${"show_greeting"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <editor-field label="Custom Greeting Name">
          <ha-textfield
            .value=${this._config.greeting_name||""}
            .configValue=${"greeting_name"}
            @input=${this._valueChanged}
            placeholder="Leave empty for logged-in user"
          ></ha-textfield>
        </editor-field>
        <ha-formfield label="Show Sunrise/Sunset">
          <ha-switch
            .checked=${!0===this._config.show_sunrise_sunset}
            .configValue=${"show_sunrise_sunset"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Show Forecast">
          <ha-switch
            .checked=${!0===this._config.show_forecast}
            .configValue=${"show_forecast"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        ${this._config.show_forecast?j`
          <editor-field label="Forecast Days (1-7)">
            <ha-textfield
              type="number"
              min="1"
              max="7"
              .value=${String(this._config.forecast_days||5)}
              .configValue=${"forecast_days"}
              @input=${this._valueChanged}
            ></ha-textfield>
          </editor-field>
        `:F}
        <ha-formfield label="Show Weather Alerts">
          <ha-switch
            .checked=${!0===this._config.show_alerts}
            .configValue=${"show_alerts"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Show Background Effects">
          <ha-switch
            .checked=${!0===this._config.show_background_effects}
            .configValue=${"show_background_effects"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        <ha-formfield label="Dynamic Background (Day/Night)">
          <ha-switch
            .checked=${!0===this._config.use_dynamic_background}
            .configValue=${"use_dynamic_background"}
            @change=${this._valueChanged}
          ></ha-switch>
        </ha-formfield>
        ${this._config.use_dynamic_background?j`
          <editor-field label="Day Background (color or gradient)">
            <ha-textfield
              .value=${this._config.day_background||"linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"}
              .configValue=${"day_background"}
              @input=${this._valueChanged}
              placeholder="linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)"
            ></ha-textfield>
          </editor-field>
          <editor-field label="Night Background (color or gradient)">
            <ha-textfield
              .value=${this._config.night_background||"linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"}
              .configValue=${"night_background"}
              @input=${this._valueChanged}
              placeholder="linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)"
            ></ha-textfield>
          </editor-field>
        `:F}
      </editor-section>
    `}_renderTapActionsSection(){return j`
      <editor-section title="Tap Actions">
        <action-selector
          label="Tap Action"
          .action=${this._config.tap_action}
          @action-changed=${t=>this._onActionChanged("tap_action",t)}
        ></action-selector>
        <action-selector
          label="Hold Action"
          .action=${this._config.hold_action}
          @action-changed=${t=>this._onActionChanged("hold_action",t)}
        ></action-selector>
        <action-selector
          label="Double Tap Action"
          .action=${this._config.double_tap_action}
          @action-changed=${t=>this._onActionChanged("double_tap_action",t)}
        ></action-selector>
      </editor-section>
    `}_renderAppearanceSection(){return j`
      <editor-section title="Appearance">
        <editor-field label="Card Height">
          <ha-textfield
            .value=${this._config.card_height||"auto"}
            .configValue=${"card_height"}
            @input=${this._valueChanged}
            placeholder="auto or 180px"
          ></ha-textfield>
        </editor-field>
      </editor-section>
    `}_renderLayoutSection(){return j`
      <editor-section title="Layout">
        <editor-field label="Grid Area">
          <ha-textfield
            .value=${this._config.view_layout?.["grid-area"]||""}
            .configValue=${"view_layout.grid-area"}
            @input=${this._viewLayoutChanged}
            placeholder="weather"
          ></ha-textfield>
        </editor-field>
      </editor-section>
    `}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue;if(!i)return;let r;if(r="checkbox"===e.type||"HA-SWITCH"===e.tagName?e.checked:"number"===e.type?e.value?Number(e.value):void 0:t.detail?.value??e.value,""===r||void 0===r){const t={...this._config};delete t[i],this._config=t}else this._config={...this._config,[i]:r};this._dispatchConfigChanged()}_attributeChanged(t){if(!this._config||!this.hass)return;const e=t.target,{configValue:i,unitConfigValue:r,labelConfigValue:a,entityId:n,value:s}=e;if(!i)return;const o={...this._config};""===s||void 0===s?(delete o[i],r&&delete o[r],a&&delete o[a]):(o[i]=s,r&&(o[r]=this._getAttributeUnit(n,s)),a&&(o[a]=this._getAttributeLabel(s))),this._config=o,this._dispatchConfigChanged()}_onActionChanged(t,e){if(!this._config)return;const i=e.detail.action;this._config={...this._config,[t]:i},this._dispatchConfigChanged()}_viewLayoutChanged(t){if(!this._config)return;const e=t.target.value,i={...this._config.view_layout};""===e||void 0===e?delete i["grid-area"]:i["grid-area"]=e;if(Object.keys(i).length>0)this._config={...this._config,view_layout:i};else{const t={...this._config};delete t.view_layout,this._config=t}this._dispatchConfigChanged()}_dispatchConfigChanged(){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};Gt.styles=s`
    :host {
      display: block;
    }

    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .field-row {
      display: flex;
      gap: 8px;
    }

    .field-row > * {
      flex: 1;
    }

    ha-entity-picker,
    ha-textfield,
    ha-select {
      width: 100%;
    }

    ha-formfield {
      display: block;
      margin-top: 8px;
    }
  `,t([ct({attribute:!1})],Gt.prototype,"hass",void 0),t([ut()],Gt.prototype,"_config",void 0),Gt=t([dt("weather-card-editor")],Gt);const At={partlycloudy:"Partly Cloudy",mostlycloudy:"Mostly Cloudy",clear:"Clear","clear-night":"Clear",cloudy:"Cloudy",rainy:"Rain",pouring:"Heavy Rain",snowy:"Snow","snowy-rainy":"Sleet",sunny:"Sunny",windy:"Windy","windy-variant":"Windy",foggy:"Foggy",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Thunderstorm",exceptional:"Exceptional"};function Mt(t){if(!t)return"";const e=At[t.toLowerCase()];return e||t.charAt(0).toUpperCase()+t.slice(1).replace(/-/g," ")}function Tt(t){if(!t)return"--:--";try{return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return"--:--"}}function Ut(t,e,i){if(!e)return;const r=t.states[e];if(!r)return;let a;return a=i?r.attributes[i]:r.state,null!=a&&"unknown"!==a&&"unavailable"!==a?a:void 0}let Et=class extends ot{constructor(){super(...arguments),this._lastTap=0,this._handleTap=t=>{const e=Date.now();e-this._lastTap<300?(this._executeAction(this._config.double_tap_action),this._lastTap=0):(this._lastTap=e,setTimeout(()=>{0!==this._lastTap&&(this._executeAction(this._config.tap_action),this._lastTap=0)},300))},this._handleHold=t=>{t.preventDefault(),this._executeAction(this._config.hold_action)},this._handleTouchStart=()=>{this._holdTimer=window.setTimeout(()=>{this._executeAction(this._config.hold_action)},500)},this._handleTouchEnd=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_greeting:!0,icon_size:100,card_height:"auto",sun_entity:"sun.sun",icon_position:"left",show_forecast:!1,forecast_days:5,show_sunrise_sunset:!1,show_alerts:!1,show_background_effects:!1,use_dynamic_background:!1,day_background:"linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)",night_background:"linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)",tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},...t}}getCardSize(){return 3}getLayoutOptions(){return this._config?.view_layout||{}}static getConfigElement(){return document.createElement("weather-card-editor")}static getStubConfig(){return{type:"custom:weather-card",weather_entity:"weather.forecast_home",sun_entity:"sun.sun",primary_entity:"weather.forecast_home",primary_attribute:"temperature",primary_unit:"Â°F",secondary_entity:"weather.forecast_home",secondary_attribute:"apparent_temperature",secondary_unit:"Â°F",secondary_label:"Feels Like:",show_greeting:!0,icon_size:100,show_forecast:!0,forecast_days:5,show_sunrise_sunset:!0}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleTap),this.addEventListener("contextmenu",this._handleHold),this.addEventListener("touchstart",this._handleTouchStart,{passive:!0}),this.addEventListener("touchend",this._handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleTap),this.removeEventListener("contextmenu",this._handleHold),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchend",this._handleTouchEnd)}_executeAction(t){if(t&&"none"!==t.action)switch(t.action){case"more-info":const e=t.entity||this._config.weather_entity;if(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new CustomEvent("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}}render(){if(!this._config||!this.hass)return j``;const t=function(t,e){if(t.greeting_name)return`Hello, ${t.greeting_name}`;const i=e?.user?.name;return i?`Hello, ${i.split(" ")[0]}`:"Hello"}(this._config,this.hass),e=function(t,e){const i=Ut(e,t.primary_entity,t.primary_attribute);return void 0===i?"--":`${i}${t.primary_unit||""}`}(this._config,this.hass),i=function(t,e){const i=Ut(e,t.secondary_entity,t.secondary_attribute);return void 0===i?"":`${t.secondary_label||""} ${i}${t.secondary_unit||""}`.trim()}(this._config,this.hass),r=function(t,e){if(!t.description_entity){if(t.weather_entity){const i=e.states[t.weather_entity];if(i)return Mt(i.state)}return""}const i=e.states[t.description_entity];if(!i)return"";if(t.description_attribute){const e=i.attributes[t.description_attribute];return null!=e?String(e):""}return Mt(i.state)}(this._config,this.hass),a=!1!==this._config.show_greeting,n="right"===this._config.icon_position,s=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0,o=this._config.sun_entity?this.hass.states[this._config.sun_entity]:void 0,l=s?.state||"",d="above_horizon"===o?.state,f=["weather-card-grid",a?"":"no-greeting",n?"icon-right":""].filter(Boolean).join(" "),p=this._config.day_background||"linear-gradient(180deg, #87CEEB 0%, #4A90C2 100%)",c=this._config.night_background||"linear-gradient(180deg, #1a1a2e 0%, #0d1421 100%)",u=this._config.use_dynamic_background?`background: ${d?p:c};`:"";return j`
      <ha-card style="height: ${this._config.card_height}; ${u}">
        ${this._config.show_background_effects?this._renderBackgroundEffect(l,d):F}
        <div class="${f}" style="--weather-icon-size: ${this._config.icon_size}px">
          ${a?j`<div class="greeting">${t}</div>`:F}
          <div class="weather-icon">
            ${kt([l,d],()=>this._renderWeatherIcon(l,d))}
          </div>
          <div class="primary-value">${e}</div>
          <div class="secondary-value">${i}</div>
          <div class="description">${r}</div>
          ${this._config.show_sunrise_sunset?this._renderSunTimes():F}
          ${this._config.show_forecast?this._renderForecast():F}
          ${this._config.show_alerts?this._renderAlerts():F}
        </div>
      </ha-card>
    `}_renderBackgroundEffect(t,e){const i=this._getEffectClass(t,e);if(!i)return j``;if("effect-snow"===i){const t=this._getSnowIntensity();return j`
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
          <div class="cloud cloud-1">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="cloud cloud-2">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
          <div class="cloud cloud-3">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span>
          </div>
          <div class="cloud cloud-4">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </div>
      `}return"effect-clear-night"===i?j`
        <div class="weather-effects ${i}">
          <div class="stars-static"></div>
          <div class="twinkle-star twinkle-star-1"></div>
          <div class="twinkle-star twinkle-star-2"></div>
          <div class="twinkle-star twinkle-star-3"></div>
          <div class="twinkle-star twinkle-star-4"></div>
          <div class="twinkle-star twinkle-star-5"></div>
          <div class="twinkle-star twinkle-star-6"></div>
        </div>
      `:j`<div class="weather-effects ${i}"></div>`}_getEffectClass(t,e){const i=t?.toLowerCase()||"";return i.includes("rain")||i.includes("pouring")?"effect-rain":i.includes("snow")?"effect-snow":i.includes("fog")?"effect-fog":"sunny"===i||"clear"===i&&e?"effect-sunny":"clear"!==i&&"clear-night"!==i||e?i.includes("cloudy")?"effect-cloudy":"":"effect-clear-night"}_getSnowIntensity(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return"";const e=Number(t.attributes?.precipitation)||0;return e>=4?"intensity-heavy":e<1?"intensity-light":""}_renderWeatherIcon(t,e){if(!t)return j`<span class="unavailable">No weather entity</span>`;const i=function(t,e){const i=t?.toLowerCase().replace(/-/g,"")||"cloudy",r=e?"day":"night",a=`${i}_${r}`;if(wt[a])return wt[a];const n=`${t}_${r}`;if(wt[n])return wt[n];const s=_t[i];if(s){const t=`${s}_${r}`;if(wt[t])return wt[t]}const o=`cloudy_${r}`;return wt[o]?wt[o]:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="40" text-anchor="middle" font-size="24">?</text></svg>'}(t,e);return j`${bt(i)}`}_renderSunTimes(){const t=this._config.sun_entity?this.hass.states[this._config.sun_entity]:void 0;if(!t)return j``;const e=t.attributes.next_rising,i=t.attributes.next_setting;return j`
      <div class="sun-times">
        <div class="sun-time">
          <span class="sun-icon">ðŸŒ…</span>
          <span>${Tt(e)}</span>
        </div>
        <div class="sun-time">
          <span class="sun-icon">ðŸŒ‡</span>
          <span>${Tt(i)}</span>
        </div>
      </div>
    `}_renderForecast(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return j``;const e=t.attributes.forecast;if(!e||0===e.length)return j``;const i=e.slice(0,this._config.forecast_days||5),r=this._config.primary_unit||"Â°";return j`
      <div class="forecast">
        ${i.map(t=>j`
          <div class="forecast-day">
            <div class="forecast-day-name">${function(t){const e=new Date(t),i=new Date,r=new Date(i);return r.setDate(r.getDate()+1),e.toDateString()===i.toDateString()?"Today":e.toDateString()===r.toDateString()?"Tmrw":e.toLocaleDateString([],{weekday:"short"})}(t.datetime)}</div>
            <div class="forecast-icon">${Ct[t.condition]||"â“"}</div>
            <div class="forecast-temps">
              <span class="forecast-high">${Math.round(t.temperature||0)}${r}</span>
              ${void 0!==t.templow?j`<span class="forecast-low">${Math.round(t.templow)}${r}</span>`:F}
            </div>
          </div>
        `)}
      </div>
    `}_renderAlerts(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return j``;const e=t.attributes.alerts;if(!e||0===e.length)return j``;const i=e[0];return j`
      <div class="alerts">
        <div class="alert">
          <span class="alert-icon">âš ï¸</span>
          <div class="alert-text">
            <div class="alert-title">${i.title||"Weather Alert"}</div>
            ${i.description?j`<div class="alert-description">${i.description}</div>`:F}
          </div>
        </div>
      </div>
    `}};Et.styles=vt,t([ct({attribute:!1})],Et.prototype,"hass",void 0),t([ut()],Et.prototype,"_config",void 0),Et=t([dt("weather-card")],Et),window.customCards=window.customCards||[],window.customCards.push({type:"weather-card",name:"Weather Card",description:"A customizable weather card with animated icons, forecast, and tap actions",preview:!0}),console.info("%c WEATHER-CARD %c v1.0.1-u5 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");export{Et as WeatherCard};
//# sourceMappingURL=weather-card.js.map
