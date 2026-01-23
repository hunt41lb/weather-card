function t(t,e,i,s){var n,a=arguments.length,r=a<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let a=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new a(i,t,s)},o=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,m=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},$=(t,e)=>!c(t,e),w={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const a=s?.call(this);n?.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const a=n.fromAttribute(e,t.type);this[s]=a??this._$Ej?.get(s)??a,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){const a=this.constructor;if(!1===s&&(n=this[t]),i??=a.getPropertyOptions(t),!((i.hasChanged??$)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),!0!==n||void 0!==a)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,v?.({ReactiveElement:b}),(f.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,A=t=>t,E=x.trustedTypes,C=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+k,T=`<${P}>`,U=document,O=()=>U.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,H="[ \t\n\f\r]",V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,N=/>/g,R=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,F=/"/g,I=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),q=new WeakMap,G=U.createTreeWalker(U,129);function Q(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}const X=(t,e)=>{const i=t.length-1,s=[];let n,a=2===e?"<svg>":3===e?"<math>":"",r=V;for(let e=0;e<i;e++){const i=t[e];let o,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===V?"!--"===c[1]?r=L:void 0!==c[1]?r=N:void 0!==c[2]?(I.test(c[2])&&(n=RegExp("</"+c[2],"g")),r=R):void 0!==c[3]&&(r=R):r===R?">"===c[0]?(r=n??V,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,o=c[1],r=void 0===c[3]?R:'"'===c[3]?F:D):r===F||r===D?r=R:r===L||r===N?r=V:(r=R,n=void 0);const h=r===R&&t[e+1].startsWith("/>")?" ":"";a+=r===V?i+T:l>=0?(s.push(o),i.slice(0,l)+S+i.slice(l)+k+h):i+k+(-2===l?e:h)}return[Q(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const r=t.length-1,o=this.parts,[c,l]=X(t,e);if(this.el=Y.createElement(c,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&o.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[a++],i=s.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);o.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(k)&&(o.push({type:6,index:n}),s.removeAttribute(t));if(I.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),G.nextNode(),o.push({type:2,index:++n});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===P)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)o.push({type:7,index:n}),t+=k.length-1}n++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const a=M(e)?void 0:e._$litDirective$;return n?.constructor!==a&&(n?._$AO?.(!1),void 0===a?n=void 0:(n=new a(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Z(t,n._$AS(t,e.values),n,s)),e}class J{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);G.currentNode=s;let n=G.nextNode(),a=0,r=0,o=i[0];for(;void 0!==o;){if(a===o.index){let e;2===o.type?e=new K(n,n.nextSibling,this,t):1===o.type?e=new o.ctor(n,o.name,o.strings,this,t):6===o.type&&(e=new nt(n,this,t)),this._$AV.push(e),o=i[++r]}a!==o?.index&&(n=G.nextNode(),a++)}return G.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new J(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new K(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(void 0===n)t=Z(this,t,e,0),a=!M(t)||t!==this._$AH&&t!==W,a&&(this._$AH=t);else{const s=t;let r,o;for(t=n[0],r=0;r<n.length-1;r++)o=Z(this,s[i+r],e,r),o===W&&(o=this._$AH[r]),a||=!M(o)||o!==this._$AH[r],o===B?t=B:t!==B&&(t+=(o??"")+n[r+1]),this._$AH[r]=o}a&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class st extends tt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??B)===W)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=x.litHtmlPolyfillSupport;at?.(Y,K),(x.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;let ot=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new K(e.insertBefore(O(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ot._$litElement$=!0,ot.finalized=!0,rt.litElementHydrateSupport?.({LitElement:ot});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:ot}),(rt.litElementVersions??=[]).push("4.2.2");const lt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},dt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:$},ht=(t=dt,e,i)=>{const{kind:s,metadata:n}=i;let a=globalThis.litPropertyMetadata.get(n);if(void 0===a&&globalThis.litPropertyMetadata.set(n,a=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),a.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function ut(t){return pt({...t,state:!0,attribute:!1})}let ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const gt={},_t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ft{constructor(){super(...arguments),this.ot=gt}render(t,e){return e()}update(t,[e,i]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((t,e)=>t===this.ot[e]))return W}else if(this.ot===e)return W;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,i)}}),vt={sunny:"☀️",clear:"☀️","clear-night":"🌙",partlycloudy:"⛅",cloudy:"☁️",rainy:"🌧️",pouring:"🌧️",snowy:"❄️","snowy-rainy":"🌨️",fog:"🌫️",foggy:"🌫️",hail:"🌨️",lightning:"⚡","lightning-rainy":"⛈️",windy:"💨","windy-variant":"💨",exceptional:"⚠️"};let mt=class extends ot{constructor(){super(...arguments),this._lastTap=0,this._handleTap=t=>{const e=Date.now();e-this._lastTap<300?(this._executeAction(this._config.double_tap_action),this._lastTap=0):(this._lastTap=e,setTimeout(()=>{0!==this._lastTap&&(this._executeAction(this._config.tap_action),this._lastTap=0)},300))},this._handleHold=t=>{t.preventDefault(),this._executeAction(this._config.hold_action)},this._handleTouchStart=()=>{this._holdTimer=window.setTimeout(()=>{this._executeAction(this._config.hold_action)},500)},this._handleTouchEnd=()=>{this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=void 0)}}static get styles(){return r`
      :host { display: block; }
      ha-card { 
        padding: 12px; 
        box-sizing: border-box; 
        overflow: hidden;
        position: relative;
        cursor: pointer;
        background: var(--weather-card-background, var(--ha-card-background, var(--card-background-color)));
        color: var(--weather-card-text-color, var(--primary-text-color));
      }
      
      /* ========================================
         WEATHER EFFECTS CONTAINER
         ======================================== */
      .weather-effects {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }

      /* ========================================
         RAIN EFFECT - Enhanced with depth
         ======================================== */
      .effect-rain {
        background: linear-gradient(180deg, transparent 0%, rgba(100, 150, 200, 0.15) 100%);
      }
      .effect-rain::before,
      .effect-rain::after {
        content: '';
        position: absolute;
        top: -100%; left: 0; right: 0; height: 200%;
        pointer-events: none;
      }
      .effect-rain::before {
        background-image: 
          linear-gradient(180deg, transparent 92%, rgba(120, 170, 220, 0.6) 92%, rgba(120, 170, 220, 0.6) 100%),
          linear-gradient(180deg, transparent 94%, rgba(100, 150, 200, 0.5) 94%, rgba(100, 150, 200, 0.5) 100%),
          linear-gradient(180deg, transparent 91%, rgba(80, 130, 180, 0.4) 91%, rgba(80, 130, 180, 0.4) 100%);
        background-size: 11px 20px, 17px 25px, 23px 22px;
        animation: rain-fall 0.4s linear infinite;
      }
      .effect-rain::after {
        background-image: 
          linear-gradient(180deg, transparent 93%, rgba(110, 160, 210, 0.5) 93%, rgba(110, 160, 210, 0.5) 100%),
          linear-gradient(180deg, transparent 95%, rgba(90, 140, 190, 0.4) 95%, rgba(90, 140, 190, 0.4) 100%);
        background-size: 19px 28px, 29px 24px;
        animation: rain-fall 0.35s linear infinite;
        animation-delay: -0.15s;
      }
      @keyframes rain-fall { 
        0% { transform: translateY(-50%) translateX(0); } 
        100% { transform: translateY(0%) translateX(-10px); } 
      }
      
      /* ========================================
         SNOW EFFECT
         Single clean layer with snowbank
         ======================================== */
      .effect-snow {
        background: linear-gradient(180deg, 
          rgba(220, 230, 245, 0.02) 0%, 
          rgba(200, 215, 235, 0.05) 100%
        );
      }
      
      /* Snowbank at bottom - flush with edge */
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
      
      /* Falling snowflakes */
      .snow-layer {
        position: absolute;
        top: 0; left: -10px; right: -10px; bottom: 28px;
        opacity: 0.6;
      }
      .snow-layer .snowflakes {
        position: absolute;
        top: -100%; left: 0; right: 0; height: 200%;
        background-image: 
          radial-gradient(circle, rgba(255,255,255,0.95) 2px, transparent 2px),
          radial-gradient(circle, rgba(255,255,255,0.85) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(255,255,255,0.9) 2.5px, transparent 2.5px),
          radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px);
        background-size: 47px 53px, 73px 79px, 61px 67px, 89px 97px;
        background-position: 0 0, 20px 30px, 45px 15px, 70px 50px;
        animation: snow-fall 8s linear infinite, snow-drift 6s ease-in-out infinite;
      }
      
      @keyframes snow-fall {
        0% { transform: translateY(0); }
        100% { transform: translateY(50%); }
      }
      
      @keyframes snow-drift {
        0%, 100% { margin-left: 0; }
        50% { margin-left: 10px; }
      }
      
      /* ========================================
         FOG EFFECT - Enhanced with layers
         ======================================== */
      .effect-fog {
        background: linear-gradient(180deg,
          rgba(200, 200, 210, 0.1) 0%,
          rgba(180, 180, 195, 0.2) 50%,
          rgba(200, 200, 210, 0.15) 100%
        );
      }
      .effect-fog::before,
      .effect-fog::after {
        content: '';
        position: absolute;
        top: 0; left: -50%; width: 200%; height: 100%;
        pointer-events: none;
      }
      .effect-fog::before {
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(220, 220, 230, 0.4) 20%, 
          rgba(200, 200, 215, 0.3) 40%,
          rgba(220, 220, 230, 0.35) 60%,
          rgba(200, 200, 215, 0.25) 80%,
          transparent 100%
        );
        animation: fog-drift 12s ease-in-out infinite;
      }
      .effect-fog::after {
        background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(210, 210, 220, 0.3) 25%, 
          rgba(190, 190, 205, 0.25) 50%,
          rgba(210, 210, 220, 0.35) 75%,
          transparent 100%
        );
        animation: fog-drift 15s ease-in-out infinite reverse;
        animation-delay: -5s;
      }
      @keyframes fog-drift { 
        0%, 100% { transform: translateX(-25%); } 
        50% { transform: translateX(25%); } 
      }
      
      /* Main grid */
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
      .weather-card-grid.icon-right.no-greeting {
        grid-template-areas:
          "primary primary icon icon"
          "secondary secondary icon icon"
          "description description description description"
          "sun-times sun-times sun-times sun-times"
          "forecast forecast forecast forecast"
          "alerts alerts alerts alerts";
      }
      
      .greeting { grid-area: greeting; font-size: 20px; font-weight: 600; text-align: center; padding-bottom: 4px; color: var(--weather-card-greeting-color, var(--primary-text-color)); }
      .weather-icon { grid-area: icon; display: flex; align-items: center; justify-content: center; }
      .weather-icon svg, .weather-icon img { width: var(--weather-icon-size, 100px); height: var(--weather-icon-size, 100px); }
      .primary-value { grid-area: primary; font-size: var(--weather-card-primary-font-size, 40px); font-weight: 400; line-height: 1; display: flex; align-items: flex-end; justify-content: center; color: var(--weather-card-primary-color, var(--primary-text-color)); }
      .secondary-value { grid-area: secondary; font-size: var(--weather-card-secondary-font-size, 12px); font-weight: 400; opacity: 0.8; display: flex; align-items: flex-start; justify-content: center; padding-top: 4px; color: var(--weather-card-secondary-color, var(--secondary-text-color)); }
      .description { grid-area: description; font-size: 18px; font-weight: 600; text-align: center; padding-top: 4px; color: var(--weather-card-description-color, var(--primary-text-color)); }
      
      /* Sun times */
      .sun-times { 
        grid-area: sun-times; 
        display: flex; 
        justify-content: center; 
        gap: 24px; 
        padding: 8px 0 4px 0;
        font-size: 12px;
        opacity: 0.8;
      }
      .sun-time { display: flex; align-items: center; gap: 4px; }
      .sun-icon { font-size: 14px; }
      
      /* Forecast */
      .forecast { 
        grid-area: forecast; 
        display: flex; 
        justify-content: space-around; 
        padding: 8px 0;
        border-top: 1px solid var(--divider-color, rgba(0,0,0,0.1));
        margin-top: 8px;
      }
      .forecast-day { 
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        font-size: 11px;
        min-width: 40px;
      }
      .forecast-day-name { font-weight: 600; opacity: 0.8; }
      .forecast-icon { font-size: 18px; margin: 4px 0; }
      .forecast-temps { display: flex; gap: 4px; }
      .forecast-high { font-weight: 600; }
      .forecast-low { opacity: 0.6; }
      
      /* Alerts */
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
      .alert-icon { font-size: 16px; }
      .alert-text { flex: 1; }
      .alert-title { font-weight: 600; }
      .alert-description { opacity: 0.8; font-size: 11px; }
      
      .unavailable { opacity: 0.5; font-style: italic; }
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={show_greeting:!0,icon_size:100,card_height:"auto",sun_entity:"sun.sun",icons_path:"/local/community/weather-card/icons",icon_position:"left",show_forecast:!1,forecast_days:5,show_sunrise_sunset:!1,show_alerts:!1,show_background_effects:!1,tap_action:{action:"more-info"},hold_action:{action:"none"},double_tap_action:{action:"none"},...t}}getCardSize(){return 3}getLayoutOptions(){return this._config?.view_layout||{}}static getConfigElement(){return document.createElement("weather-card-editor")}static getStubConfig(){return{type:"custom:weather-card",weather_entity:"weather.forecast_home",sun_entity:"sun.sun",primary_entity:"weather.forecast_home",primary_attribute:"temperature",primary_unit:"°F",secondary_entity:"weather.forecast_home",secondary_attribute:"apparent_temperature",secondary_unit:"°F",secondary_label:"Feels Like:",show_greeting:!0,icon_size:100,show_forecast:!0,forecast_days:5,show_sunrise_sunset:!0}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleTap),this.addEventListener("contextmenu",this._handleHold),this.addEventListener("touchstart",this._handleTouchStart,{passive:!0}),this.addEventListener("touchend",this._handleTouchEnd)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleTap),this.removeEventListener("contextmenu",this._handleHold),this.removeEventListener("touchstart",this._handleTouchStart),this.removeEventListener("touchend",this._handleTouchEnd)}_executeAction(t){if(t&&"none"!==t.action)switch(t.action){case"more-info":const e=t.entity||this._config.weather_entity;if(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}break;case"navigate":if(t.navigation_path){history.pushState(null,"",t.navigation_path);const e=new CustomEvent("location-changed",{bubbles:!0,composed:!0});this.dispatchEvent(e)}break;case"url":t.url_path&&window.open(t.url_path,"_blank");break;case"call-service":if(t.service){const[e,i]=t.service.split(".");this.hass.callService(e,i,t.service_data||{})}}}render(){if(!this._config||!this.hass)return j``;const t=this._getGreeting(),e=this._getPrimaryValue(),i=this._getSecondaryValue(),s=this._getDescription(),n=!1!==this._config.show_greeting,a="right"===this._config.icon_position,r=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0,o=this._config.sun_entity?this.hass.states[this._config.sun_entity]:void 0,c=r?.state||"",l="above_horizon"===o?.state,d=["weather-card-grid",n?"":"no-greeting",a?"icon-right":""].filter(Boolean).join(" ");return j`
      <ha-card style="height: ${this._config.card_height}">
        ${this._config.show_background_effects?this._renderBackgroundEffect(c):B}
        <div class="${d}" style="--weather-icon-size: ${this._config.icon_size}px">
          ${n?j`<div class="greeting">${t}</div>`:B}
          <div class="weather-icon">
            ${_t([c,l],()=>this._renderWeatherIcon(c,l))}
          </div>
          <div class="primary-value">${e}</div>
          <div class="secondary-value">${i}</div>
          <div class="description">${s}</div>
          ${this._config.show_sunrise_sunset?this._renderSunTimes():B}
          ${this._config.show_forecast?this._renderForecast():B}
          ${this._config.show_alerts?this._renderAlerts():B}
        </div>
      </ha-card>
    `}_renderBackgroundEffect(t){const e=this._getEffectClass(t);return e?"effect-snow"===e?j`
        <div class="weather-effects ${e}">
          <!-- Falling snowflakes -->
          <div class="snow-layer">
            <div class="snowflakes"></div>
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
      `:j`<div class="weather-effects ${e}"></div>`:j``}_getEffectClass(t){const e=t?.toLowerCase()||"";return e.includes("rain")||e.includes("pouring")?"effect-rain":e.includes("snow")?"effect-snow":e.includes("fog")?"effect-fog":""}_getIconFilename(t,e){const i=t?.toLowerCase().replace(/-/g,"")||"cloudy",s={sunny:"sunny",clear:"sunny",clearnight:"clear-night",partlycloudy:"partlycloudy",cloudy:"cloudy",rainy:"rainy",pouring:"pouring",snowy:"snowy",snowyrainy:"snowy-rainy",fog:"fog",foggy:"fog",hail:"hail",lightning:"lightning",lightningrainy:"lightning-rainy",windy:"windy",windyvariant:"windy-variant",exceptional:"exceptional"}[i]||i;return"clear-night"===s?"clear-night_night.svg":`${s}_${e?"day":"night"}.svg`}_renderWeatherIcon(t,e){if(!t)return j`<span class="unavailable">No weather entity</span>`;const i=this._config.icons_path||"/local/community/weather-card/icons",s=this._getIconFilename(t,e);return j`<img src="${`${i}/${s}`}" alt="${s}" />`}_renderSunTimes(){const t=this._config.sun_entity?this.hass.states[this._config.sun_entity]:void 0;if(!t)return j``;const e=t.attributes.next_rising,i=t.attributes.next_setting,s=t=>{if(!t)return"--:--";return new Date(t).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};return j`
      <div class="sun-times">
        <div class="sun-time">
          <span class="sun-icon">🌅</span>
          <span>${s(e)}</span>
        </div>
        <div class="sun-time">
          <span class="sun-icon">🌇</span>
          <span>${s(i)}</span>
        </div>
      </div>
    `}_renderForecast(){const t=this._config.weather_entity?this.hass.states[this._config.weather_entity]:void 0;if(!t)return j``;const e=t.attributes.forecast;if(!e||0===e.length)return j``;const i=e.slice(0,this._config.forecast_days||5),s=this._config.primary_unit||"°";return j`
      <div class="forecast">
        ${i.map(t=>j`
          <div class="forecast-day">
            <div class="forecast-day-name">${(t=>{const e=new Date(t),i=new Date,s=new Date(i);return s.setDate(s.getDate()+1),e.toDateString()===i.toDateString()?"Today":e.toDateString()===s.toDateString()?"Tmrw":e.toLocaleDateString([],{weekday:"short"})})(t.datetime)}</div>
            <div class="forecast-icon">${vt[t.condition]||"❓"}</div>
            <div class="forecast-temps">
              <span class="forecast-high">${Math.round(t.temperature||0)}${s}</span>
              ${void 0!==t.templow?j`<span class="forecast-low">${Math.round(t.templow)}${s}</span>`:B}
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
            ${i.description?j`<div class="alert-description">${i.description}</div>`:B}
          </div>
        </div>
      </div>
    `}_getGreeting(){if(this._config.greeting_name)return`Hello, ${this._config.greeting_name}`;const t=this.hass?.user?.name;return t?`Hello, ${t.split(" ")[0]}`:"Hello"}_getPrimaryValue(){const t=this._config;if(!t.primary_entity)return"--";const e=this.hass.states[t.primary_entity];if(!e)return"--";let i;if(i=t.primary_attribute?e.attributes[t.primary_attribute]:e.state,null==i||"unknown"===i||"unavailable"===i)return"--";return`${i}${t.primary_unit||""}`}_getSecondaryValue(){const t=this._config;if(!t.secondary_entity)return"";const e=this.hass.states[t.secondary_entity];if(!e)return"";let i;if(i=t.secondary_attribute?e.attributes[t.secondary_attribute]:e.state,null==i||"unknown"===i||"unavailable"===i)return"";return`${t.secondary_label||""} ${i}${t.secondary_unit||""}`.trim()}_getDescription(){const t=this._config;if(!t.description_entity){if(t.weather_entity){const e=this.hass.states[t.weather_entity];if(e)return this._formatCondition(e.state)}return""}const e=this.hass.states[t.description_entity];if(!e)return"";if(t.description_attribute){const i=e.attributes[t.description_attribute];return null!=i?String(i):""}return this._formatCondition(e.state)}_formatCondition(t){return{partlycloudy:"Partly Cloudy",mostlycloudy:"Mostly Cloudy",clear:"Clear","clear-night":"Clear",cloudy:"Cloudy",rainy:"Rain",pouring:"Heavy Rain",snowy:"Snow","snowy-rainy":"Sleet",sunny:"Sunny",windy:"Windy","windy-variant":"Windy",foggy:"Foggy",fog:"Fog",hail:"Hail",lightning:"Lightning","lightning-rainy":"Thunderstorm",exceptional:"Exceptional"}[t.toLowerCase()]||t.charAt(0).toUpperCase()+t.slice(1).replace(/-/g," ")}};t([pt({attribute:!1})],mt.prototype,"hass",void 0),t([ut()],mt.prototype,"_config",void 0),mt=t([lt("weather-card")],mt);let yt=class extends ot{static get styles(){return r`
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
    `}setConfig(t){this._config=t}_getEntityAttributes(t){if(!t||!this.hass?.states[t])return[];const e=this.hass.states[t],i=Object.keys(e.attributes||{}),s=["friendly_name","icon","entity_picture","supported_features","attribution","device_class","state_class","unit_of_measurement"];return i.filter(t=>!s.includes(t)).sort()}_getAttributeUnit(t,e){if(!t||!e||!this.hass?.states[t])return"";const i=this.hass.states[t],s=String(i.attributes.unit_of_measurement||""),n={temperature:s||"°F",apparent_temperature:s||"°F",dew_point:s||"°F",humidity:"%",pressure:"hPa",wind_speed:"mph",wind_gust_speed:"mph",visibility:"mi",precipitation:"in",precipitation_probability:"%",cloud_coverage:"%",uv_index:""};return void 0!==n[e]?n[e]:""}_getAttributeLabel(t){if(!t)return"";const e={temperature:"Temperature:",apparent_temperature:"Feels Like:",dew_point:"Dew Point:",humidity:"Humidity:",pressure:"Pressure:",wind_speed:"Wind:",wind_gust_speed:"Gusts:",wind_bearing:"Wind Direction:",visibility:"Visibility:",precipitation:"Precipitation:",precipitation_probability:"Precip Chance:",cloud_coverage:"Cloud Cover:",uv_index:"UV Index:",ozone:"Ozone:"};return void 0!==e[t]?e[t]:t.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")+":"}_renderAttributeSelect(t,e,i,s,n,a){const r=this._getEntityAttributes(t);return t&&0!==r.length?j`
      <ha-select .value=${i||""} .configValue=${e} .unitConfigValue=${n||""} .labelConfigValue=${a||""} .entityId=${t} @selected=${this._attributeChanged} @closed=${t=>t.stopPropagation()} fixedMenuPosition naturalMenuWidth>
        <mwc-list-item value="">Use State (no attribute)</mwc-list-item>
        ${r.map(t=>j`<mwc-list-item .value=${t}>${t}</mwc-list-item>`)}
      </ha-select>
    `:j`<ha-textfield .value=${i||""} .configValue=${e} @input=${this._valueChanged} placeholder=${s}></ha-textfield>`}render(){return this.hass&&this._config?j`
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
          `:B}
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
          `:B}
          ${"url"===this._config.tap_action?.action?j`
            <div class="field">
              <span class="field-label">URL</span>
              <ha-textfield .value=${this._config.tap_action?.url_path||""} .configValue=${"tap_action.url_path"} @input=${this._actionPathChanged} placeholder="https://weather.com"></ha-textfield>
            </div>
          `:B}
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
    `:j``}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target,i=e.configValue;if(!i)return;let s;if(s="checkbox"===e.type||"HA-SWITCH"===e.tagName?e.checked:"number"===e.type?e.value?Number(e.value):void 0:t.detail?.value??e.value,""===s||void 0===s){const t={...this._config};delete t[i],this._config=t}else this._config={...this._config,[i]:s};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_attributeChanged(t){if(!this._config||!this.hass)return;const e=t.target,{configValue:i,unitConfigValue:s,labelConfigValue:n,entityId:a,value:r}=e;if(!i)return;const o={...this._config};""===r||void 0===r?(delete o[i],s&&delete o[s],n&&delete o[n]):(o[i]=r,s&&(o[s]=this._getAttributeUnit(a,r)),n&&(o[n]=this._getAttributeLabel(r))),this._config=o,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_actionChanged(t){if(!this._config)return;const e=t.target,[i,s]=e.configValue.split("."),n={...this._config[i]||{},[s]:e.value};this._config={...this._config,[i]:n},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_actionPathChanged(t){if(!this._config)return;const e=t.target,[i,s]=e.configValue.split("."),n={...this._config[i]||{},[s]:e.value};this._config={...this._config,[i]:n},this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_viewLayoutChanged(t){if(!this._config)return;const e=t.target.value,i={...this._config.view_layout};""===e||void 0===e?delete i["grid-area"]:i["grid-area"]=e;if(Object.keys(i).length>0)this._config={...this._config,view_layout:i};else{const t={...this._config};delete t.view_layout,this._config=t}this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}};t([pt({attribute:!1})],yt.prototype,"hass",void 0),t([ut()],yt.prototype,"_config",void 0),yt=t([lt("weather-card-editor")],yt),window.customCards=window.customCards||[],window.customCards.push({type:"weather-card",name:"Weather Card",description:"A customizable weather card with animated icons, forecast, and tap actions",preview:!0}),console.info("%c WEATHER-CARD %c v2.0.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");export{mt as WeatherCard,yt as WeatherCardEditor};
//# sourceMappingURL=weather-card.js.map
