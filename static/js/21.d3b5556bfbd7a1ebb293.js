webpackJsonp([21],{UJBe:function(t,e){},yvNg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("KiN3"),a=i("Q/W4"),s=i("oast"),r=i("wSez"),o=(n.a,a.a,s.a,{components:{XInput:n.a,Group:a.a,XButton:s.a},computed:{},data:function(){return{name:"卫庄",phone:"13572420570",call:"0278-12345689",is_edit:!0,is_btn:!0,valid_family:function(t){return{valid:/0\d{2,3}-\d{7,8}/.test(t),msg:"请输入正确座机号"}},verify_name:!1,verify_phone:!1,verify_call:!1}},beforeMount:function(){},mounted:function(){this.$refs.content_box.style.height=document.documentElement.clientHeight-116+"px"},methods:{goBack:function(){this.$router.go(-1)},edit:function(){this.is_edit=!1,this.is_btn=!1},submit:function(){this.verify_phone=this.$refs.phone.valid,this.verify_name=this.$refs.name.valid,this.verify_call=this.$refs.name.valid,this.verify_phone&&this.verify_name&&this.verify_call?this.$router.go(-1):Object(r.MessageBox)("提示","请完整填写信息")}},watch:{}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mt-header",{attrs:{title:"家庭信息"}},[i("span",{attrs:{slot:"left"},on:{click:t.goBack},slot:"left"},[i("mt-button",{attrs:{icon:"back"}})],1),t._v(" "),t.is_btn?i("span",{attrs:{slot:"right"},on:{click:t.edit},slot:"right"},[i("mt-button",{attrs:{slot:"right"},slot:"right"},[t._v("编辑")])],1):t._e()]),t._v(" "),i("div",{ref:"content_box"},[i("group",{attrs:{"label-width":"6.5em"}},[i("x-input",{ref:"name",attrs:{title:"监护人姓名",disabled:t.is_edit,"show-clear":!1,"text-align":"right",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),i("x-input",{ref:"phone",attrs:{title:"监护人手机","is-type":"china-mobile",keyboard:"number",disabled:t.is_edit,"show-clear":!1,"text-align":"right",required:""},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),i("x-input",{ref:"call",attrs:{title:"家庭号码","is-type":t.valid_family,disabled:t.is_edit,"show-clear":!1,"text-align":"right"},model:{value:t.call,callback:function(e){t.call=e},expression:"call"}})],1)],1),t._v(" "),t.is_edit?t._e():i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("提交")])],1)},staticRenderFns:[]};var c=i("C7Lr")(o,l,!1,function(t){i("UJBe")},"data-v-a83ff230",null);e.default=c.exports}});
//# sourceMappingURL=21.d3b5556bfbd7a1ebb293.js.map