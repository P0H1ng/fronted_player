(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63562458"],{"166a":function(t,e,i){},1681:function(t,e,i){},1800:function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:i=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const s=i.filter(t=>!1===t.isComment&&" "!==t.text);return s.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,i)}})},"1dde":function(t,e,i){var s=i("d039"),a=i("b622"),n=i("2d00"),o=a("species");t.exports=function(t){return n>=51||!s((function(){var e=[],i=e.constructor={};return i[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f4f":function(t,e,i){"use strict";i("8b37");var s=i("80d2"),a=i("7560"),n=i("58df");e["a"]=Object(n["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},3408:function(t,e,i){},"5d23":function(t,e,i){"use strict";var s=i("80d2"),a=i("8860"),n=(i("db42"),i("9d26")),o=i("da13"),r=i("2b0e"),l=r["a"].extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:i}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,i)}}),c=i("7e2b"),u=i("9d65"),h=i("a9ad"),d=i("f2e7"),p=i("3206"),m=i("5607"),v=i("0789"),f=i("58df");const g=Object(f["a"])(c["a"],u["a"],h["a"],Object(p["a"])("list"),d["a"]);var b=g.extend().extend({name:"v-list-group",directives:{ripple:m["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick(()=>this.isActive=!this.isActive))},genIcon(t){return this.$createElement(n["a"],t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(l,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},this.showLazyContent([this.$createElement("div",this.$slots.default)]))},genPrependIcon(){const t=this.prependIcon?this.prependIcon:!!this.subGroup&&"$subgroup";return t||this.$slots.prependIcon?this.$createElement(l,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick(()=>this.isActive=e)},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(v["a"],[this.genItems()])])}}),_=(i("899c"),i("166a"),i("a452")),x=i("7560"),y=i("d9bd");const C=Object(f["a"])(_["a"],x["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter((t,e)=>this.toggleMethod(this.getValue(t,e)))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.internalValue===t;const t=this.internalValue;return Array.isArray(t)?e=>t.includes(e):()=>!1}},watch:{internalValue(){this.$nextTick(this.updateItemsState)}},created(){this.multiple&&!Array.isArray(this.internalValue)&&Object(y["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return null==t.value||""===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",()=>this.onClick(t)),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter(t=>t!==i):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find(t=>!t.disabled);if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex(e=>e===t);this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t("div",this.genData(),this.$slots.default)}});C.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var $=Object(f["a"])(C,h["a"]).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...C.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...C.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),V=i("1800"),I=(i("3408"),i("24b2")),B=Object(f["a"])(h["a"],I["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles(){return{height:Object(s["f"])(this.size),minWidth:Object(s["f"])(this.size),width:Object(s["f"])(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),k=B,S=k.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...k.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=k.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});i.d(e,"a",(function(){return T})),i.d(e,"c",(function(){return O})),i.d(e,"b",(function(){return A}));const w=Object(s["g"])("v-list-item__action-text","span"),T=Object(s["g"])("v-list-item__content","div"),O=Object(s["g"])("v-list-item__title","div"),A=Object(s["g"])("v-list-item__subtitle","div");a["a"],o["a"],V["a"]},"65f0":function(t,e,i){var s=i("861d"),a=i("e8b5"),n=i("b622"),o=n("species");t.exports=function(t,e){var i;return a(t)&&(i=t.constructor,"function"!=typeof i||i!==Array&&!a(i.prototype)?s(i)&&(i=i[o],null===i&&(i=void 0)):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},"7c41":function(t,e,i){},8418:function(t,e,i){"use strict";var s=i("c04e"),a=i("9bf2"),n=i("5c6c");t.exports=function(t,e,i){var o=s(e);o in t?a.f(t,o,n(0,i)):t[o]=i}},"899c":function(t,e,i){},"8adc":function(t,e,i){},"8b37":function(t,e,i){},"8ce9":function(t,e,i){},"99af":function(t,e,i){"use strict";var s=i("23e7"),a=i("d039"),n=i("e8b5"),o=i("861d"),r=i("7b0b"),l=i("50c4"),c=i("8418"),u=i("65f0"),h=i("1dde"),d=i("b622"),p=i("2d00"),m=d("isConcatSpreadable"),v=9007199254740991,f="Maximum allowed index exceeded",g=p>=51||!a((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=h("concat"),_=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:n(t)},x=!g||!b;s({target:"Array",proto:!0,forced:x},{concat:function(t){var e,i,s,a,n,o=r(this),h=u(o,0),d=0;for(e=-1,s=arguments.length;e<s;e++)if(n=-1===e?o:arguments[e],_(n)){if(a=l(n.length),d+a>v)throw TypeError(f);for(i=0;i<a;i++,d++)i in n&&c(h,d,n[i])}else{if(d>=v)throw TypeError(f);c(h,d++,n)}return h.length=d,h}})},a523:function(t,e,i){"use strict";i("20f6"),i("4b85");var s=i("2b0e");function a(t){return s["a"].extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:i,data:s,children:a}){s.staticClass=`${t} ${s.staticClass||""}`.trim();const{attrs:n}=s;if(n){s.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(s.staticClass+=` ${t.join(" ")}`)}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,s,a)}})}var n=i("d9f7");e["a"]=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:i,children:s}){let a;const{attrs:o}=i;return o&&(i.attrs={},a=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(i.domProps=i.domProps||{},i.domProps.id=e.id),t(e.tag,Object(n["a"])(i,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),s)}})},ae40:function(t,e,i){var s=i("83ab"),a=i("d039"),n=i("5135"),o=Object.defineProperty,r={},l=function(t){throw t};t.exports=function(t,e){if(n(r,t))return r[t];e||(e={});var i=[][t],c=!!n(e,"ACCESSORS")&&e.ACCESSORS,u=n(e,0)?e[0]:l,h=n(e,1)?e[1]:void 0;return r[t]=!!i&&!a((function(){if(c&&!s)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,i.call(t,u,h)}))}},b5b6:function(t,e,i){},cd56:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600",color:"transparent",flat:""}},[i("Timer")],1),i("v-row",[i("v-col",{attrs:{cols:"6",md:"4"}},[i("Info"),i("copyrights")],1),i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-card",{staticClass:"mx-auto"},[i("v-card-title",[t._v(t._s(t.$t("log.live_log")))]),i("v-card-text",[i("LiveLog")],1)],1),i("br"),i("SubmitFlag")],1)],1)],1)},a=[],n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!==t.time?i("v-card-text",{staticClass:"text-center"},["on"===t.time.Status?i("div",[i("p",{staticClass:"display-1 text--primary"},[t._v(" 系統時間 ")]),i("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.year)+" 年 "+t._s(t.month)+" 月 "+t._s(t.day)+" 日 ")]),i("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.hour)+" 時 "+t._s(t.minute)+" 分 "+t._s(t.second)+" 秒 ")])]):"wait"===t.time.Status?i("div",[i("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.$t("timer.not_begin"))+" ")])]):"pause"===t.time.Status?i("div",[i("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.$t("timer.pause"))+" ")])]):"end"===t.time.Status?i("div",[i("p",{staticClass:"display-1 text--primary"},[t._v(" "+t._s(t.$t("timer.end"))+" ")])]):t._e()]):t._e()},o=[],r={name:"Timer",data:function(){return{timer:null,requestTimer:null,time:null,year:0,month:0,day:0,hour:0,minute:0,second:0}},mounted:function(){this.getTime(),this.updateTime(),this.requestTimer=setInterval(this.getTime,1e4),this.timer=setInterval(this.updateTime,1e3)},beforeDestroy:function(){clearInterval(this.requestTimer),clearInterval(this.timer)},methods:{getTime:function(){var t=this;this.utils.GET("/time").then((function(e){t.time=e}))},updateTime:function(){var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth()+1,this.day=t.getDate(),this.hour=t.getHours(),this.minute=t.getMinutes(),this.second=t.getSeconds()}}},l=r,c=i("2877"),u=i("6544"),h=i.n(u),d=i("99d9"),p=Object(c["a"])(l,n,o,!1,null,"3046e77e",null),m=p.exports;h()(p,{VCardText:d["b"]});var v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-dialog",{attrs:{width:"700"},model:{value:t.showGameBoxesVisible,callback:function(e){t.showGameBoxesVisible=e},expression:"showGameBoxesVisible"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.$t("gamebox.list"))+" ")]),i("v-card-text",[i("v-simple-table",{attrs:{dense:!0},scopedSlots:t._u([{key:"default",fn:function(){return[i("thead",[i("tr",[i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("gamebox.team")))]),i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("gamebox.challenge")))]),i("th",{staticClass:"text-left"},[t._v(t._s(t.$t("gamebox.address")))])])]),i("tbody",t._l(t.allGameBoxes,(function(e,s){return i("tr",{key:s},[i("td",[t._v(t._s(e.TeamName))]),i("td",[t._v(t._s(e.ChallengeName))]),i("td",[t._v(t._s(e.IP)+":"+t._s(e.Port))])])})),0)]},proxy:!0}])})],1),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.showGameBoxesVisible=!1}}},[t._v(" "+t._s(t.$t("general.close"))+" ")])],1)],1)],1),null!==t.info?i("v-card",[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("div",[""!==t.info.Logo?i("v-img",{staticClass:"logo",attrs:{src:t.utils.baseURL+"/uploads/"+t.info.Logo}}):t._e(),i("v-list-item-title",{staticClass:"headline"},[t._v(t._s(t.info.Name))]),i("v-list-item-subtitle",[t._v(" Token "+t._s(t.info.Token)+" ")])],1)])],1),i("v-card-text",[i("GameBox")],1),i("v-divider"),i("v-card-actions",[i("v-list-item",[t._v(" #"+t._s(t.info.Rank)+" / "+t._s(t.utils.FormatFloat(t.info.Score))+" "+t._s(t.$t("general.score"))+" ")]),null!==t.allGameBoxes?i("v-btn",{attrs:{text:""},on:{click:function(e){t.showGameBoxesVisible=!0}}},[t._v("靶機列表")]):t._e()],1)],1):t._e()],1)},f=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[null!==t.gameBoxes?i("div",t._l(t.gameBoxes,(function(e){return i("v-list-item",{key:e.ID,on:{click:function(i){return t.showDialog(e)}}},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.Title)}}),i("v-list-item-subtitle",[t._v(t._s(e.IP)+":"+t._s(e.Port))]),i("v-list-item-subtitle",[t._v(t._s(t.utils.FormatFloat(e.Score))+" "+t._s(t.$t("general.score")))])],1),i("v-list-item-action",[e.IsAttacked||e.IsDown?t._e():i("div",[i("v-chip",{staticClass:"ma-2",attrs:{color:"green","text-color":"green",outlined:""}},[t._v("Online")])],1),e.IsDown?i("div",[i("v-chip",{staticClass:"ma-2",attrs:{color:"orange","text-color":"orange",outlined:""}},[t._v("Down")])],1):t._e(),e.IsAttacked?i("div",[i("v-chip",{staticClass:"ma-2",attrs:{color:"red","text-color":"red",outlined:""}},[t._v("Attacked")])],1):t._e()])],1)})),1):t._e(),null===t.gameBoxes||0===t.gameBoxes.length?i("v-list-item",[i("p",[t._v(t._s(t.$t("gamebox.empty")))])]):t._e(),i("v-dialog",{attrs:{persistent:"",width:"500"},model:{value:t.dialogVisible,callback:function(e){t.dialogVisible=e},expression:"dialogVisible"}},[i("v-card",[i("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v(" "+t._s(t.gameBoxDetail.Title)+" ")]),t.$activeDialogId===t.gameBoxDetail.ChallengeID?i("v-card-text",[i("p",[i("b",[t._v(t._s(t.gameBoxDetail.IP)+":"+t._s(t.gameBoxDetail.Port))])]),i("v-textarea",{attrs:{filled:"","auto-grow":"",rows:"4",shaped:"",disabled:!0},model:{value:t.gameBoxDetail.Description,callback:function(e){t.$set(t.gameBoxDetail,"Description",e)},expression:"gameBoxDetail.Description"}})],1):t._e(),i("v-divider"),i("v-card-actions",[i("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.activateBox(t.gameBoxDetail.ChallengeID)}}},[t._v(t._s(t.$t("general.start")))]),i("v-spacer"),i("v-btn",{attrs:{color:"primary",text:""},on:{click:t.closeDialog}},[t._v(t._s(t.$t("general.close")))])],1)],1)],1)],1)},b=[],_={name:"GameBox",$activeDialogId:null,data:function(){return{showDetail:!1,gameBoxes:null,gameBoxDetail:{Title:"",IP:"",Port:"",Description:""},dialogVisible:!1,timer:null,info:null,startForm:{From:null,To:null}}},methods:{showDialog:function(t){this.gameBoxDetail=t,this.dialogVisible=!0},closeDialog:function(){this.dialogVisible=!1},getGameboxes:function(){var t=this;this.utils.GET("/team/gameboxes").then((function(e){t.gameBoxes=e}))},getInfo:function(){var t=this;this.utils.GET("/team/info").then((function(e){t.info=e}))},start:function(){var t=this;this.utils.POST("/team/start",this.startForm).then((function(e){t.$message.success(e)})).catch((function(e){t.$message.error(e)}))},activateBox:function(t){this.$activeDialogId=t,this.startForm.From=this.info.Id,this.startForm.To=t,this.start()}},mounted:function(){this.getGameboxes(),this.timer=setInterval(this.getGameboxes,5e3),this.getInfo()},beforeDestroy:function(){clearInterval(this.timer)}},x=_,y=i("8336"),C=i("b0af"),$=(i("8adc"),i("58df")),V=i("0789"),I=i("9d26"),B=i("a9ad"),k=i("4e82"),S=i("7560"),w=i("f2e7"),T=i("1c87"),O=i("af2b"),A=i("d9bd"),D=Object($["a"])(B["a"],O["a"],T["a"],S["a"],Object(k["a"])("chipGroup"),Object(w["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...T["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(T["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(A["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(I["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(V["b"],t)},genClose(){return this.$createElement(I["a"],{staticClass:"v-chip__close",props:{right:!0},on:{click:t=>{t.stopPropagation(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:i,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const a=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(a,s),e)}}),j=i("169a"),G=(i("8ce9"),S["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})),E=i("da13"),F=i("1800"),P=i("5d23"),L=i("2fa4"),N=(i("1681"),i("8654"));const z=Object($["a"])(N["a"]);var H=z.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...N["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"},genInput(){const t=N["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){N["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),M=Object(c["a"])(x,g,b,!1,null,"b12c4fd6",null),R=M.exports;h()(M,{VBtn:y["a"],VCard:C["a"],VCardActions:d["a"],VCardText:d["b"],VCardTitle:d["c"],VChip:D,VDialog:j["a"],VDivider:G,VListItem:E["a"],VListItemAction:F["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VSpacer:L["a"],VTextarea:H});var W={name:"Info",data:function(){return{info:null,timer:null,allGameBoxes:null,showGameBoxesVisible:!1}},mounted:function(){this.timer=setInterval(this.getInfo,5e3),this.getInfo(),this.getAllGameBoxes()},beforeDestroy:function(){clearInterval(this.timer)},methods:{getInfo:function(){var t=this;this.utils.GET("/team/info").then((function(e){t.info=e}))},getAllGameBoxes:function(){var t=this;this.utils.GET("/team/gameboxes/all").then((function(e){t.allGameBoxes=e})).catch((function(){t.allGameBoxes=null}))}},components:{GameBox:R}},q=W,J=(i("fd2b"),i("adda")),U=i("1f4f"),X=Object(c["a"])(q,v,f,!1,null,"562dca67",null),Y=X.exports;h()(X,{VBtn:y["a"],VCard:C["a"],VCardActions:d["a"],VCardText:d["b"],VCardTitle:d["c"],VDialog:j["a"],VDivider:G,VImg:J["a"],VListItem:E["a"],VListItemContent:P["a"],VListItemSubtitle:P["b"],VListItemTitle:P["c"],VSimpleTable:U["a"],VSpacer:L["a"]});var K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return null!==t.info?i("v-card",{staticClass:"mx-auto"},[i("v-snackbar",{attrs:{color:t.snackBarColor,timeout:3e3,top:!0},model:{value:t.snackBarVisible,callback:function(e){t.snackBarVisible=e},expression:"snackBarVisible"}},[t._v(t._s(t.message)+" ")]),i("v-card-title",[i("span",{staticStyle:{"margin-right":"20px"}},[t._v(t._s(t.$t("flag.submit_flag")))]),i("v-text-field",{attrs:{label:t.$t("flag.input_your_flag"),clearable:""},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitFlag(e)}},model:{value:t.inputFlag,callback:function(e){t.inputFlag=e},expression:"inputFlag"}}),i("v-btn",{staticStyle:{"margin-left":"20px"},on:{click:t.submitFlag}},[t._v(" "+t._s(t.$t("flag.submit"))+" ")])],1),i("v-card-text",[i("h2",[t._v("POST "),i("code",{staticStyle:{"background-color":"#1c1c1c"}},[t._v("/flag")])]),i("br"),i("span",[i("b",[t._v("Header")])]),i("br"),i("span",[t._v("Content-Type: application/json")]),i("br"),i("span",[t._v("Authorization: "+t._s(t.info.Token))]),i("br"),i("p",[i("b",[t._v("Body")])]),i("code",{staticClass:"pa-3",staticStyle:{width:"100%","background-color":"#1c1c1c",color:"rgba(255, 255, 255, 0.7)"}},[t._v('{"flag": "your_flag_here"}')]),i("br"),i("br"),i("v-divider"),i("br"),i("p",[i("code",{staticClass:"pa-3",staticStyle:{width:"100%","background-color":"#1c1c1c",color:"rgba(255, 255, 255, 0.7)"}},[t._v(t._s(t.getCurlCommand()))])])],1)],1):t._e()},Q=[],Z=(i("99af"),i("bc3a")),tt=i.n(Z),et={name:"SubmitFlag",data:function(){return{info:null,inputFlag:"",message:"",snackBarVisible:!1,snackBarColor:"success"}},mounted:function(){this.getInfo()},methods:{getInfo:function(){var t=this;this.utils.GET("/team/info").then((function(e){t.info=e}))},submitFlag:function(){var t=this;tt.a.post(this.utils.baseURL+"/flag",{flag:this.inputFlag},{headers:{Authorization:this.info.Token}}).then((function(e){t.inputFlag="",t.message=e.data.data,t.snackBarColor="success",t.snackBarVisible=!0})).catch((function(e){t.message=e.response.data.msg,t.snackBarColor="error",t.snackBarVisible=!0}))},getCurlCommand:function(){return"Win32"===navigator.platform||"Windows"===navigator.platform?"curl -X POST ".concat(window.location.origin,'/api/flag -H "Authorization: ').concat(this.info.Token,'" -d "{ \\"flag\\": \\"your_flag_here\\" }"'):"curl -X POST ".concat(window.location.origin,"/api/flag -H 'Authorization: ").concat(this.info.Token,'\' -d \'{ "flag": "your_flag_here" }\'')}}},it=et,st=i("2db4"),at=Object(c["a"])(it,K,Q,!1,null,"7bdfe5e7",null),nt=at.exports;h()(at,{VBtn:y["a"],VCard:C["a"],VCardText:d["b"],VCardTitle:d["c"],VDivider:G,VSnackbar:st["a"],VTextField:N["a"]});var ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[0!==t.logs.length?i("v-simple-table",{attrs:{height:200},scopedSlots:t._u([{key:"default",fn:function(){return[i("tbody",t._l(t.logs,(function(e,s){return i("tr",{key:s},[i("td",[t._v(t._s(e.message))]),i("td",{staticStyle:{"text-align":"right"},attrs:{width:"220px"}},[t._v(t._s(new Date(1e3*e.time).toLocaleString()))])])})),0)]},proxy:!0}],null,!1,3851776812)}):i("div",{staticStyle:{height:"200px"}},[t._v(" "+t._s(t.$t("log.no_data"))+" ")])],1)},rt=[],lt=(i("fb6a"),{name:"LiveLog",data:function(){return{logs:[],stream:null}},mounted:function(){this.getStream()},beforeDestroy:function(){console.log(1111),this.stream.close()},methods:{getStream:function(){var t=this;this.stream=new EventSource(this.utils.baseURL+"/livelog"),this.stream.onmessage=function(e){var i=JSON.parse(e.data);switch(i["Type"]){case"submit_flag":t.push({time:i["Time"],message:t.$t("log.submit_flag",{from:i["Message"]["From"],to:i["Message"]["To"],challenge:i["Message"]["Challenge"]})});break;case"check_down":t.push({time:i["Time"],message:t.$t("log.check_down",{team:i["Message"]["Team"],challenge:i["Message"]["Challenge"]})});break}},this.stream.onerror=function(t){console.log(t)}},push:function(t){this.logs.length>30&&(this.logs=this.logs.slice(0,30)),this.logs.unshift(t)}}}),ct=lt,ut=Object(c["a"])(ct,ot,rt,!1,null,"742d3306",null),ht=ut.exports;h()(ut,{VSimpleTable:U["a"]});var dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{padless:""}},[i("v-row",{attrs:{justify:"center","no-gutters":""}},[i("v-col",{staticClass:"py-4 text-center white--text",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("Powered by HowN")])])],1)],1)},pt=[],mt={name:"Copyrights"},vt=mt,ft=(i("4b85"),i("2b0e")),gt=i("d9f7"),bt=i("80d2");const _t=["sm","md","lg","xl"],xt=(()=>_t.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),yt=(()=>_t.reduce((t,e)=>(t["offset"+Object(bt["t"])(e)]={type:[String,Number],default:null},t),{}))(),Ct=(()=>_t.reduce((t,e)=>(t["order"+Object(bt["t"])(e)]={type:[String,Number],default:null},t),{}))(),$t={col:Object.keys(xt),offset:Object.keys(yt),order:Object.keys(Ct)};function Vt(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const It=new Map;var Bt=ft["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...xt,offset:{type:[String,Number],default:null},...yt,order:{type:[String,Number],default:null},...Ct,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:a}){let n="";for(const r in e)n+=String(e[r]);let o=It.get(n);if(!o){let t;for(t in o=[],$t)$t[t].forEach(i=>{const s=e[i],a=Vt(t,i,s);a&&o.push(a)});const i=o.some(t=>t.startsWith("col-"));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),It.set(n,o)}return t(e.tag,Object(gt["a"])(i,{class:o}),s)}}),kt=(i("b5b6"),i("3a66")),St=i("8dd9"),wt=i("d10f"),Tt=Object($["a"])(St["a"],Object(kt["a"])("footer",["height","inset"]),wt["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...St["a"].options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...St["a"].options.computed.styles.call(this),height:isNaN(t)?t:Object(bt["f"])(t),left:Object(bt["f"])(this.computedLeft),right:Object(bt["f"])(this.computedRight),bottom:Object(bt["f"])(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),Ot=i("0fd9"),At=Object(c["a"])(vt,dt,pt,!1,null,"3b19e6d4",null),Dt=At.exports;h()(At,{VCol:Bt,VFooter:Tt,VRow:Ot["a"]});var jt={name:"Main",components:{Copyrights:Dt,LiveLog:ht,SubmitFlag:nt,Info:Y,Timer:m}},Gt=jt,Et=i("a523"),Ft=Object(c["a"])(Gt,s,a,!1,null,"410f3004",null);e["default"]=Ft.exports;h()(Ft,{VCard:C["a"],VCardText:d["b"],VCardTitle:d["c"],VCol:Bt,VContainer:Et["a"],VRow:Ot["a"]})},db42:function(t,e,i){},e8b5:function(t,e,i){var s=i("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},fb6a:function(t,e,i){"use strict";var s=i("23e7"),a=i("861d"),n=i("e8b5"),o=i("23cb"),r=i("50c4"),l=i("fc6a"),c=i("8418"),u=i("b622"),h=i("1dde"),d=i("ae40"),p=h("slice"),m=d("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),f=[].slice,g=Math.max;s({target:"Array",proto:!0,forced:!p||!m},{slice:function(t,e){var i,s,u,h=l(this),d=r(h.length),p=o(t,d),m=o(void 0===e?d:e,d);if(n(h)&&(i=h.constructor,"function"!=typeof i||i!==Array&&!n(i.prototype)?a(i)&&(i=i[v],null===i&&(i=void 0)):i=void 0,i===Array||void 0===i))return f.call(h,p,m);for(s=new(void 0===i?Array:i)(g(m-p,0)),u=0;p<m;p++,u++)p in h&&c(s,u,h[p]);return s.length=u,s}})},fd2b:function(t,e,i){"use strict";var s=i("7c41"),a=i.n(s);a.a}}]);