(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return h}));var s=i("wEJo"),r=i("W6o/");const l=(t,e)=>{const i=n(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},n=(t,e)=>{switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},o=(t,e,i,s,r,l,n,o,h,a,c,d)=>{const g=[],u=d+c;for(let p=c;p<u;p++){const c=t[p];if(r){const e=r(c,p,t);null!=e&&g.push({i:a++,type:"header",value:e,index:p,height:i?i(e,p):n,reads:i?0:2,visible:!!i})}if(g.push({i:a++,type:"item",value:c,index:p,height:e?e(c,p):h,reads:e?0:2,visible:!!e}),l){const e=l(c,p,t);null!=e&&g.push({i:a++,type:"footer",value:e,index:p,height:s?s(e,p):o,reads:s?0:2,visible:!!s})}}return g},h=class{constructor(t){Object(s.o)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}componentWillLoad(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}async connectedCallback(){const t=this.el.closest("ion-content");t?(this.scrollEl=await t.getScrollElement(),this.contentEl=t,this.calcCells(),this.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,e,i)=>{const s=e.find(e=>"item"===e.type&&e.index===t);return s?i[s.i]:-1})(t,this.cells,this.getHeightIndex()))}async checkRange(t,e=-1){if(!this.items)return;const i=-1===e?this.items.length-t:e,s=((t,e)=>0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===e))(this.cells,t),r=o(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,t,i);this.cells=((t,e,i)=>{if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t})(this.cells,r,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(s.h)(this.readVS.bind(this)),Object(s.f)(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,r=i;for(;r&&r!==t;)s+=r.offsetTop,r=r.offsetParent;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=(n=this.currentScrollTop-this.viewportOffset,o=this.viewportHeight,{top:Math.max(n-100,0),bottom:n+o+100}),i=this.getHeightIndex(),r=((t,e,i)=>{const s=e.top,r=e.bottom;let l=0;for(;l<t.length&&!(t[l]>s);l++);const n=Math.max(l-2-1,0);for(;l<t.length&&!(t[l]>=r);l++);return{offset:n,length:Math.min(l+2,t.length)-n}})(i,e);var n,o;((t,e,i)=>t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length)(t,this.range,r)&&(this.range=r,((t,e,i,s)=>{for(const o of t)o.change=0,o.d=!0;const r=[],l=s.offset+s.length;for(let o=s.offset;o<l;o++){const s=i[o],l=t.find(t=>t.d&&t.cell===s);if(l){const t=e[o];t!==l.top&&(l.top=t,l.change=1),l.d=!1}else r.push(s)}const n=t.filter(t=>t.d);for(const o of r){const i=n.find(t=>t.d&&t.cell.type===o.type),s=o.i;i?(i.d=!1,i.change=2,i.cell=o,i.top=e[s]):t.push({d:!1,cell:o,visible:!0,change:2,top:e[s]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})})(this.virtualDom,i,this.cells,r),this.nodeRender?((t,e,i,s)=>{const r=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),n=r.length;let o;for(let h=0;h<i.length;h++){const a=i[h],c=a.cell;if(2===a.change){if(h<n)o=r[h],e(o,c,h);else{const i=l(t,c.type);o=e(i,c,h)||i,o.classList.add("virtual-item"),t.appendChild(o)}o.$ionCell=c}else o=r[h];0!==a.change&&(o.style.transform=`translate3d(0,${a.top}px,0)`);const d=c.visible;a.visible!==d&&(d?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),a.visible=d),c.reads>0&&(s(c,o),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(s.l)(this))}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e?Object(r.c)(e,i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=o(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,e)=>{if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)})(this.heightIndex,this.cells.length),this.totalHeight=((t,e,i)=>{let s=t[i];for(let r=i;r<t.length;r++)t[r]=s,s+=e[r].height;return s})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const e=this.scrollEl;e&&(this.isEnabled=t,e.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{e.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case"item":return this.renderItem(i,s);case"header":return this.renderHeader(i,s);case"footer":return this.renderFooter(i,s)}}render(){return Object(s.j)(s.c,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(s.j)(a,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t))))}get el(){return Object(s.k)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},a=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],r=e.vattrs||{};let l=r.class||"";return l+="virtual-item ",s.visible||(l+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},r),{class:l,style:Object.assign(Object.assign({},r.style),{transform:`translate3d(0,${s.top}px,0)`})})})});h.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);