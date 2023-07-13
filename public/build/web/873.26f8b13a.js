/*! For license information please see 873.26f8b13a.js.LICENSE.txt */
(self.webpackChunkfieldays=self.webpackChunkfieldays||[]).push([[873],{873:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var i=s(863),n=s.n(i);class l{constructor(){let e={toggle:!1};[...document.querySelectorAll(".collapse")].map((t=>new(n())(t,e)))}}},863:function(e,t,s){e.exports=function(e,t,s,i){"use strict";const n=e=>e&&"object"==typeof e&&"default"in e?e:{default:e},l=n(t),r=n(s),o=n(i),a="collapse",h=".bs.collapse",g=`show${h}`,c=`shown${h}`,d=`hide${h}`,f=`hidden${h}`,_=`click${h}.data-api`,u="show",m="collapse",p="collapsing",C="collapsed",w=`:scope .${m} .${m}`,A="collapse-horizontal",y="width",L="height",v=".collapse.show, .collapse.collapsing",S='[data-bs-toggle="collapse"]',T={parent:null,toggle:!0},$={parent:"(null|element)",toggle:"boolean"};class b extends o.default{constructor(t,s){super(t,s),this._isTransitioning=!1,this._triggerArray=[];const i=r.default.find(S);for(const t of i){const s=e.getSelectorFromElement(t),i=r.default.find(s).filter((e=>e===this._element));null!==s&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return T}static get DefaultType(){return $}static get NAME(){return a}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(v).filter((e=>e!==this._element)).map((e=>b.getOrCreateInstance(e,{toggle:!1})))),e.length&&e[0]._isTransitioning)return;if(l.default.trigger(this._element,g).defaultPrevented)return;for(const t of e)t.hide();const t=this._getDimension();this._element.classList.remove(m),this._element.classList.add(p),this._element.style[t]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(p),this._element.classList.add(m,u),this._element.style[t]="",l.default.trigger(this._element,c)},i=`scroll${t[0].toUpperCase()+t.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[t]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(l.default.trigger(this._element,d).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,e.reflow(this._element),this._element.classList.add(p),this._element.classList.remove(m,u);for(const t of this._triggerArray){const s=e.getElementFromSelector(t);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(p),this._element.classList.add(m),l.default.trigger(this._element,f)};this._element.style[t]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(u)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=e.getElement(t.parent),t}_getDimension(){return this._element.classList.contains(A)?y:L}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(S);for(const s of t){const t=e.getElementFromSelector(s);t&&this._addAriaAndCollapsedClass([s],this._isShown(t))}}_getFirstLevelChildren(e){const t=r.default.find(w,this._config.parent);return r.default.find(e,this._config.parent).filter((e=>!t.includes(e)))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const s of e)s.classList.toggle(C,!t),s.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return"string"==typeof e&&/show|hide/.test(e)&&(t.toggle=!1),this.each((function(){const s=b.getOrCreateInstance(this,t);if("string"==typeof e){if(void 0===s[e])throw new TypeError(`No method named "${e}"`);s[e]()}}))}}return l.default.on(document,_,S,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const s=e.getSelectorFromElement(this),i=r.default.find(s);for(const e of i)b.getOrCreateInstance(e,{toggle:!1}).toggle()})),e.defineJQueryPlugin(b),b}(s(72),s(286),s(737),s(695))}}]);