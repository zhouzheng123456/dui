webpackJsonp([4],{"3cXf":function(t,e,i){t.exports={default:i("q1bu"),__esModule:!0}},Cvau:function(t,e,i){"use strict";t.exports=function(t){if(!Array.isArray(t))throw new TypeError("Expected Array, got "+typeof t);for(var e,i,n=t.length,r=t.slice();n;)e=Math.floor(Math.random()*n--),i=r[n],r[n]=r[e],r[e]=i;return r}},DOts:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});String;var n={name:"flow",props:{orientation:{type:String,default:"horizontal"}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"weui-wepay-flow",class:{"weui-wepay-flow_vertical":"vertical"===this.orientation}},[e("div",{staticClass:"weui-wepay-flow__bd"},[this._t("default")],2)])},staticRenderFns:[]};var s=i("C7Lr")(n,r,!1,function(t){i("G+vk")},null,null).exports,a=(String,Number,String,Boolean,{name:"flow-state",props:{state:[String,Number],title:String,isDone:Boolean},computed:{titlePosition:function(){return"vertical"===this.$parent.orientation?"right":"bottom"}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-wepay-flow__li",class:{"weui-wepay-flow__li_done":t.isDone}},[i("div",{staticClass:"weui-wepay-flow__state"},[t._v(t._s(t.state))]),t._v(" "),i("p",{class:"weui-wepay-flow__title-"+t.titlePosition},[t._t("title",[t._v(t._s(t.title))])],2)])},staticRenderFns:[]},o=i("C7Lr")(a,l,!1,null,null,null).exports,u=(String,String,Boolean,Number,String,Number,String,{name:"flow-line",props:{tip:String,tipDirection:String,isDone:Boolean,lineSpan:[Number,String],processSpan:[Number,String]},methods:{getWidth:function(t){return"number"==typeof t?t+"%":t}},computed:{finalTipDirection:function(){return void 0===this.tipDirection?"vertical"===this.$parent.orientation?"left":"top":this.tipDirection},styles:function(){if(this.lineSpan){var t=this.$parent.orientation,e={flex:"none","-webkit-box-flex":"0"};return"vertical"===t&&(e.width="3px"),this.lineSpan&&("vertical"===t?e.height=this.getWidth(this.lineSpan):e.width=this.getWidth(this.lineSpan)),e}},classes:function(){return this.isDone?"weui-wepay-flow__line_done":!this.isDone&&this.tip?"weui-wepay-flow__line_ing":void 0}}}),c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-wepay-flow__line",class:t.classes,style:t.styles},[i("div",{staticClass:"weui-wepay-flow__process",style:{width:t.getWidth(this.processSpan)}}),t._v(" "),t.tip?i("div",{class:"weui-wepay-flow__info-"+t.finalTipDirection,style:{left:t.getWidth(this.processSpan)}},[t._v(t._s(t.tip))]):t._e()])},staticRenderFns:[]},h=i("C7Lr")(u,c,!1,null,null,null).exports,d=i("ZLEe"),f=i.n(d),v=i("3cXf"),p=i.n(v),_=i("p7Ev"),m=(String,{name:"tip",props:{align:{type:String,default:"left"}}}),g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vux-group-tip",style:{"text-align":this.align}},[this._t("default")],2)},staticRenderFns:[]};var w=i("C7Lr")(m,g,!1,function(t){i("OKWU")},null,null).exports,y=i("GRuq"),b=i("4a+h"),k=i("hRKE"),x=i.n(k),V=function(t){return"object"===(void 0===t?"undefined":x()(t))?t.value:t},S=function(t){return"object"===(void 0===t?"undefined":x()(t))?t.key:t},C=function(t){return"object"===(void 0===t?"undefined":x()(t))?t.inlineDesc:""},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments[1];if(!t.length)return e;if("string"==typeof t[0])return e;var i=t.filter(function(t){return t.key===e});return i.length?i[0].value||i[0].label:e}(t,e)})},B=i("Cvau"),O=i.n(B);y.a,b.a,_.a,String,Boolean,String,Boolean,Array,Array,Number,Number,Boolean,Boolean,Boolean,String,Boolean;var $={name:"checklist",components:{Tip:w,Icon:y.a,InlineDesc:b.a},filters:{getValue:V,getKey:S},mixins:[_.a],props:{name:String,showError:Boolean,title:String,required:{type:Boolean,default:!1},options:{type:Array,required:!0},value:{type:Array,default:function(){return[]}},max:Number,min:Number,fillMode:Boolean,randomOrder:Boolean,checkDisabled:{type:Boolean,default:!0},labelPosition:{type:String,default:"right"},disabled:Boolean},data:function(){return{currentValue:[],currentOptions:this.options,tempValue:""}},beforeUpdate:function(){if(this.isRadio){var t=this.currentValue.length;t>1&&(this.currentValue=[this.currentValue[t-1]]);var e=N(this.currentValue);this.tempValue=e.length?e[0]:""}},created:function(){this.handleChangeEvent=!0,this.value&&(this.currentValue=this.value,this.isRadio&&(this.tempValue=this.isRadio?this.value[0]:this.value)),this.randomOrder?this.currentOptions=O()(this.options):this.currentOptions=this.options},methods:{getValue:V,getKey:S,getInlineDesc:C,getFullValue:function(){var t=D(this.options,this.value);return this.currentValue.map(function(e,i){return{value:e,label:t[i]}})},isDisabled:function(t){return!!this.checkDisabled&&(this._max>1&&(-1===this.currentValue.indexOf(t)&&this.currentValue.length===this._max))}},computed:{isRadio:function(){return void 0!==this.max&&1===this.max},_total:function(){return this.fillMode?this.options.length+1:this.options.length},_min:function(){if(!this.required&&!this.min)return 0;if(!this.required&&this.min)return Math.min(this._total,this.min);if(this.required){if(this.min){var t=Math.max(1,this.min);return Math.min(this._total,t)}return 1}},_max:function(){return(this.required||this.max)&&this.max?this.max>this._total?this._total:this.max:this._total},valid:function(){return this.currentValue.length>=this._min&&this.currentValue.length<=this._max}},watch:{tempValue:function(t){var e=t?[t]:[];this.$emit("input",e),this.$emit("on-change",e,D(this.options,e))},value:function(t){p()(t)!==p()(this.currentValue)&&(this.currentValue=t)},options:function(t){this.currentOptions=t},currentValue:function(t){var e=N(t);if(!this.isRadio){this.$emit("input",e),this.$emit("on-change",e,D(this.options,e));var i={};this._min&&(this.required?this.currentValue.length<this._min&&(i={min:this._min}):this.currentValue.length&&this.currentValue.length<this._min&&(i={min:this._min})),!this.valid&&this.dirty&&f()(i).length?this.$emit("on-error",i):this.$emit("on-clear-error")}}}};function N(t){return JSON.parse(p()(t))}var R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.disabled?"vux-checklist-disabled":""},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"weui-cells__title"},[t._v(t._s(t.title))]),t._v(" "),t._t("after-title"),t._v(" "),i("div",{staticClass:"weui-cells weui-cells_checkbox"},t._l(t.currentOptions,function(e,n){return i("label",{staticClass:"weui-cell weui-check_label",class:{"vux-checklist-label-left":"left"===t.labelPosition},attrs:{for:"checkbox_"+t.uuid+"_"+n}},[i("div",{staticClass:"weui-cell__hd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-check",attrs:{type:"checkbox",name:"vux-checkbox-"+t.uuid,id:t.disabled?"":"checkbox_"+t.uuid+"_"+n,disabled:t.isDisabled(t.getKey(e))},domProps:{value:t.getKey(e),checked:Array.isArray(t.currentValue)?t._i(t.currentValue,t.getKey(e))>-1:t.currentValue},on:{change:function(i){var n=t.currentValue,r=i.target,s=!!r.checked;if(Array.isArray(n)){var a=t.getKey(e),l=t._i(n,a);r.checked?l<0&&(t.currentValue=n.concat([a])):l>-1&&(t.currentValue=n.slice(0,l).concat(n.slice(l+1)))}else t.currentValue=s}}}),t._v(" "),i("i",{staticClass:"weui-icon-checked vux-checklist-icon-checked"})]),t._v(" "),i("div",{staticClass:"weui-cell__bd"},[i("p",{domProps:{innerHTML:t._s(t.getValue(e))}}),t._v(" "),t.getInlineDesc(e)?i("inline-desc",[t._v(t._s(t.getInlineDesc(e)))]):t._e()],1)])}),0),t._v(" "),t._t("footer")],2)},staticRenderFns:[]};var E=i("C7Lr")($,R,!1,function(t){i("lz4v")},null,null).exports,A=i("oast"),F=(A.a,{components:{Flow:s,FlowState:o,FlowLine:h,Checklist:E,XButton:A.a},data:function(){return{step_num:2,radioValue:["1"],radio_list:[{key:"1",value:"是"},{key:"2",value:"否"}],checkValue:["1","2","3"],check_list:[{key:"1",value:"手术"},{key:"2",value:"药物"},{key:"3",value:"功能康复"},{key:"4",value:"辅助器械"},{key:"5",value:"护理"},{key:"6",value:"未得到"}]}},computed:{},beforeMount:function(){},mounted:function(){this.$refs.content_box.style.height=document.documentElement.clientHeight-96+"px"},methods:{goBack:function(){this.$router.go(-1)},change:function(t){console.log(t)},submit:function(){}},watch:{}}),M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{title:"进度查询"}},[i("span",{attrs:{slot:"left"},on:{click:t.goBack},slot:"left"},[i("mt-button",{attrs:{icon:"back"}})],1)]),t._v(" "),i("div",{ref:"content_box"},[i("flow",[i("flow-state",{attrs:{state:"1",title:"已填报","is-done":""}}),t._v(" "),i("flow-line",{attrs:{"is-done":""}}),t._v(" "),i("flow-state",{attrs:{state:"2",title:"评估中","is-done":""}}),t._v(" "),i("flow-line",{attrs:{"is-done":""}}),t._v(" "),i("flow-state",{attrs:{state:"3",title:"实施中","is-done":""}}),t._v(" "),i("flow-line",{attrs:{tip:"进行中"}}),t._v(" "),i("flow-state",{attrs:{state:"4",title:"已完成"}}),t._v(" "),i("flow-line"),t._v(" "),i("flow-state",{attrs:{state:"5",title:"待评价"}})],1),t._v(" "),i("checklist",{attrs:{title:"1、未就诊或治疗原因?",options:t.radio_list,max:1},on:{"on-change":t.change},model:{value:t.radioValue,callback:function(e){t.radioValue=e},expression:"radioValue"}}),t._v(" "),i("checklist",{attrs:{title:"1、针对自身残疾,是否得到或使用过以下服务?",options:t.check_list},on:{"on-change":t.change},model:{value:t.checkValue,callback:function(e){t.checkValue=e},expression:"checkValue"}})],1),t._v(" "),i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("重新提交")])],1)},staticRenderFns:[]};var q=i("C7Lr")(F,M,!1,function(t){i("RlvZ")},"data-v-5682870f",null);e.default=q.exports},"G+vk":function(t,e){},OKWU:function(t,e){},RlvZ:function(t,e){},lz4v:function(t,e){},q1bu:function(t,e,i){var n=i("Rv9F"),r=n.JSON||(n.JSON={stringify:JSON.stringify});t.exports=function(t){return r.stringify.apply(r,arguments)}}});
//# sourceMappingURL=4.ed7936e02f009bd90105.js.map