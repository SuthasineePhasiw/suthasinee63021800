(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{210:function(t){t.exports=JSON.parse('[{"id":1,"name":"SHEIN Frill Trim Rib-knit Solid Tee","detail":"Lorem ipsum dolor sit amet","price":"120","hero":"OMG This just came out today!","image":"https://img.ltwebstatic.com/images3_pi/2021/03/10/16153508900d9fe444ad7709b3ef06fe8a59cf1029_thumbnail_600x.webp"},{"id":2,"name":"SHEIN Contrast Stitch Lettuce Hem Leopard Heart Tee","detail":"Lorem ipsum dolor sit amet","price":"140","info":"This is the latest and greatest product from Derp corp.","image":"https://img.ltwebstatic.com/images3_pi/2021/03/02/1614656913815c13a4b8743778e989c25864116eeb_thumbnail_600x.webp"},{"id":3,"name":"SHEIN Solid Wide Leg Belted Pants","detail":"Lorem ipsum dolor sit amet","price":"570","offer":"BOGOF","image":"https://img.ltwebstatic.com/images3_pi/2021/01/28/161181716195b11d6acb73e9de116a6ebb21e0a570_thumbnail_600x.webp"},{"id":4,"name":"Corduroy Dual Pocket Shorts","detail":"Lorem ipsum dolor sit amet","price":"270","image":"https://img.ltwebstatic.com/images3_pi/2020/12/08/1607396517999e571f9dab1297bd637a254f16af3c_thumbnail_600x.webp"}]')},214:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(35),r(34),r(210)),c=r(109),l=r(211),d=r.n(l),m={components:{shop:c.default},data:function(){return{products:n,wantToBuy:[],cartstate:!1}},methods:{addProduct:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.checkProduct(t)?e.wantToBuy.push(t):alert("เลือกสินค้านี้แล้ว");case 1:case"end":return r.stop()}}),r)})))()},checkProduct:function(t){return!(d.a.filter(this.wantToBuy,{id:t.id}).length>0)}}},f=r(11),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("shop",{staticClass:"fixed right-12 bottom-20",attrs:{count:t.wantToBuy.length}}),t._v(" "),r("div",{staticClass:"w-full container mx-auto flex items-center flex-wrap pt-4 pb-12"},[r("nav",{staticClass:"w-full mx-auto px-14 py-3 flex flex-wrap justify-between items-center"},[r("button",{staticClass:"ml-4 text-2xl",on:{click:function(e){return t.$router.push("/")}}},[t._v("SHOP")]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("button",{staticClass:"mr-4 w-20 h-10 bg-blue-400 round-xl",attrs:{href:"#"},on:{click:function(e){t.cartstate=!t.cartstate}}},[t._v("\n          ชำระเงิน\n        ")])])]),t._v(" "),t.cartstate?r("div",{staticClass:"w-full"},[r("Price",{attrs:{products:t.wantToBuy}})],1):r("div",{staticClass:"flex flex-wrap flex-row justify-center mt-4"},t._l(t.products,(function(e,o){return r("div",{key:o,staticClass:"shadow-xl m-2 mt-5 rounded-xl w-full md:w-1/3 xl:w-1/4 flex flex-col"},[r("img",{staticClass:"hover:grow hover:shadow-lg h-50",attrs:{src:e.image,alt:""}}),t._v(" "),r("div",{staticClass:"p-2"},[r("h2",{staticClass:"text-base"},[t._v(t._s(e.name))]),t._v(" "),r("h2",{staticClass:"mt-2 text-lg text-blue-500"},[t._v("\n            ราคา "+t._s(e.price)+" .-\n          ")]),t._v(" "),r("form",{ref:"product_"+e.id,refInFor:!0,staticClass:"flex mt-2",on:{submit:function(r){return r.preventDefault(),t.addProduct(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.count,expression:"product.count"}],staticClass:"w-2/3 border-2 border-blue-200",attrs:{required:"",value:"1",type:"text",placeholder:"จำนวน"},domProps:{value:e.count},on:{input:function(r){r.target.composing||t.$set(e,"count",r.target.value)}}}),t._v(" "),r("button",{staticClass:"w-1/3 rounded-xl bg-pink-500 text-white",attrs:{type:"submit"}},[t._v("\n              Add\n            ")])])])])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Shop:r(109).default,Price:r(110).default})}}]);