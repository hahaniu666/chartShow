(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1719:function(e,t,s){var n=s(1720);"string"==typeof n&&(n=[[e.i,n,""]]);s(134)(n,{hmr:!0,transform:void 0}),n.locals&&(e.exports=n.locals)},1720:function(e,t,s){(e.exports=s(133)()).push([e.i,".carouselWrap {\n  background-color: white;\n  border-top: 1px solid #e5e5e5; }\n  .carouselWrap a {\n    height: 300px;\n    display: flex;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box; }\n    .carouselWrap a .carouselTable {\n      position: relative;\n      top: 0;\n      color: #bebebe;\n      font-size: 13px;\n      line-height: 32px;\n      flex-grow: 1;\n      height: 100%;\n      overflow: auto;\n      width: 100%;\n      padding: 10px; }\n      .carouselWrap a .carouselTable ul {\n        width: 100%; }\n        .carouselWrap a .carouselTable ul .carouselItem {\n          width: 100%;\n          line-height: 32px;\n          height: 32px;\n          border: 1px solid #666;\n          border-bottom: none; }\n          .carouselWrap a .carouselTable ul .carouselItem:last-child {\n            border-bottom: 1px solid #666; }\n      .carouselWrap a .carouselTable .anim {\n        transition: all 0.5s;\n        margin-top: -128px; }\n",""])},348:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,s):{};n.get||n.set?Object.defineProperty(t,s,n):t[s]=e[s]}return t.default=e,t}(s(2));function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}s(141),s(617),s(1719);var u=function(){function e(t){var s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(s=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?i(e):t}(this,a(e).call(this,t))).add=function(e){var t=s.state.numbers;t.push({id:e,message:"定位成功后调整地图视野"+e,robot:!0}),s.setState({numbers:t})},s.Dt=function(){i(s);var e=s.state.numbers;s.setState({animate:!0}),setTimeout(function(){s.setState({numbers:s.handleDataSource(e,4)},function(){s.handleMarginTop(4)}),s.setState({animate:!1}),s.forceUpdate()},1e3)},s.handleMarginTop=function(e){var t=document.querySelector(".carouselItem").offsetHeight;console.log("itemHeight",t);var n="-".concat(t*e,"px");console.log("marginTop",n),s.setState({marginTop:n})},s.handleDataSource=function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],s=1<arguments.length?arguments[1]:void 0;return t[0]?(e=t.splice(0,s),t.concat(e)):[]},s.mouseEnter=function(){clearInterval(s.timeId)},s.mouseLeave=function(){s.timeId=setInterval(s.Dt,5e3)},s.id=4,s.timeId="",s.state={numbers:[{id:"1",message:"定位成功后调整地图视野1",robot:!0},{id:"2",message:"定位成功后调整地图视野2",robot:!1},{id:"3",message:"定位成功后调整地图视野3",robot:!0},{id:"4",message:"定位成功后调整地图视野4",robot:!0},{id:"5",message:"定位成功后调整地图视野5",robot:!0},{id:"6",message:"定位成功后调整地图视野6",robot:!0},{id:"7",message:"定位成功后调整地图视野7",robot:!0}],itemHeight:t.height||"32px",len:t.len||4,marginTop:"-".concat((t.len||4)*(t.height||"32px"),"px"),animate:!1},s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(e,n.Component),function(e,t,s){t&&o(e.prototype,t)}(e,[{key:"componentDidMount",value:function(){for(var e=0;e<10;e++)this.add(e+8);this.timeId=setInterval(this.Dt,5e3)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.numbers,s=e.animate,r=e.itemHeight;return console.log("this.state",this.state),n.default.createElement("div",{className:"carouselWrap"},n.default.createElement("a",{onMouseEnter:this.mouseEnter,onMouseLeave:this.mouseLeave},n.default.createElement("div",{className:"carouselTable"},n.default.createElement("ul",{className:s?"anim":""},t.map(function(e,t){return n.default.createElement("li",{className:"carouselItem",key:e.id,style:{height:r,lineHeight:r}},e.message)})))))}}]),e}();t.default=u},588:function(e,t,s){var n={"./af":403,"./af.js":403,"./ar":404,"./ar-dz":405,"./ar-dz.js":405,"./ar-kw":406,"./ar-kw.js":406,"./ar-ly":407,"./ar-ly.js":407,"./ar-ma":408,"./ar-ma.js":408,"./ar-sa":409,"./ar-sa.js":409,"./ar-tn":410,"./ar-tn.js":410,"./ar.js":404,"./az":411,"./az.js":411,"./be":412,"./be.js":412,"./bg":413,"./bg.js":413,"./bm":414,"./bm.js":414,"./bn":415,"./bn.js":415,"./bo":416,"./bo.js":416,"./br":417,"./br.js":417,"./bs":418,"./bs.js":418,"./ca":419,"./ca.js":419,"./cs":420,"./cs.js":420,"./cv":421,"./cv.js":421,"./cy":422,"./cy.js":422,"./da":423,"./da.js":423,"./de":424,"./de-at":425,"./de-at.js":425,"./de-ch":426,"./de-ch.js":426,"./de.js":424,"./dv":427,"./dv.js":427,"./el":428,"./el.js":428,"./en-SG":429,"./en-SG.js":429,"./en-au":430,"./en-au.js":430,"./en-ca":431,"./en-ca.js":431,"./en-gb":432,"./en-gb.js":432,"./en-ie":433,"./en-ie.js":433,"./en-il":434,"./en-il.js":434,"./en-nz":435,"./en-nz.js":435,"./eo":436,"./eo.js":436,"./es":437,"./es-do":438,"./es-do.js":438,"./es-us":439,"./es-us.js":439,"./es.js":437,"./et":440,"./et.js":440,"./eu":441,"./eu.js":441,"./fa":442,"./fa.js":442,"./fi":443,"./fi.js":443,"./fo":444,"./fo.js":444,"./fr":445,"./fr-ca":446,"./fr-ca.js":446,"./fr-ch":447,"./fr-ch.js":447,"./fr.js":445,"./fy":448,"./fy.js":448,"./ga":449,"./ga.js":449,"./gd":450,"./gd.js":450,"./gl":451,"./gl.js":451,"./gom-latn":452,"./gom-latn.js":452,"./gu":453,"./gu.js":453,"./he":454,"./he.js":454,"./hi":455,"./hi.js":455,"./hr":456,"./hr.js":456,"./hu":457,"./hu.js":457,"./hy-am":458,"./hy-am.js":458,"./id":459,"./id.js":459,"./is":460,"./is.js":460,"./it":461,"./it-ch":462,"./it-ch.js":462,"./it.js":461,"./ja":463,"./ja.js":463,"./jv":464,"./jv.js":464,"./ka":465,"./ka.js":465,"./kk":466,"./kk.js":466,"./km":467,"./km.js":467,"./kn":468,"./kn.js":468,"./ko":469,"./ko.js":469,"./ku":470,"./ku.js":470,"./ky":471,"./ky.js":471,"./lb":472,"./lb.js":472,"./lo":473,"./lo.js":473,"./lt":474,"./lt.js":474,"./lv":475,"./lv.js":475,"./me":476,"./me.js":476,"./mi":477,"./mi.js":477,"./mk":478,"./mk.js":478,"./ml":479,"./ml.js":479,"./mn":480,"./mn.js":480,"./mr":481,"./mr.js":481,"./ms":482,"./ms-my":483,"./ms-my.js":483,"./ms.js":482,"./mt":484,"./mt.js":484,"./my":485,"./my.js":485,"./nb":486,"./nb.js":486,"./ne":487,"./ne.js":487,"./nl":488,"./nl-be":489,"./nl-be.js":489,"./nl.js":488,"./nn":490,"./nn.js":490,"./pa-in":491,"./pa-in.js":491,"./pl":492,"./pl.js":492,"./pt":493,"./pt-br":494,"./pt-br.js":494,"./pt.js":493,"./ro":495,"./ro.js":495,"./ru":496,"./ru.js":496,"./sd":497,"./sd.js":497,"./se":498,"./se.js":498,"./si":499,"./si.js":499,"./sk":500,"./sk.js":500,"./sl":501,"./sl.js":501,"./sq":502,"./sq.js":502,"./sr":503,"./sr-cyrl":504,"./sr-cyrl.js":504,"./sr.js":503,"./ss":505,"./ss.js":505,"./sv":506,"./sv.js":506,"./sw":507,"./sw.js":507,"./ta":508,"./ta.js":508,"./te":509,"./te.js":509,"./tet":510,"./tet.js":510,"./tg":511,"./tg.js":511,"./th":512,"./th.js":512,"./tl-ph":513,"./tl-ph.js":513,"./tlh":514,"./tlh.js":514,"./tr":515,"./tr.js":515,"./tzl":516,"./tzl.js":516,"./tzm":517,"./tzm-latn":518,"./tzm-latn.js":518,"./tzm.js":517,"./ug-cn":519,"./ug-cn.js":519,"./uk":520,"./uk.js":520,"./ur":521,"./ur.js":521,"./uz":522,"./uz-latn":523,"./uz-latn.js":523,"./uz.js":522,"./vi":524,"./vi.js":524,"./x-pseudo":525,"./x-pseudo.js":525,"./yo":526,"./yo.js":526,"./zh-cn":527,"./zh-cn.js":527,"./zh-hk":528,"./zh-hk.js":528,"./zh-tw":529,"./zh-tw.js":529};function r(e){var t=o(e);return s(t)}function o(e){var t=n[e];if(t+1)return t;var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}r.keys=function(){return Object.keys(n)},r.resolve=o,(e.exports=r).id=588}}]);