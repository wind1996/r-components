(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{179:function(t,e,n){"use strict";var s=n(0),r=n.n(s),a=n(180),l=n.n(a);e.a=t=>{let{content:e}=t;return r.a.createElement("div",{style:{padding:10},className:l.a.mdcontainer},r.a.createElement("code",{dangerouslySetInnerHTML:{__html:e},className:l.a.code}))}},180:function(t,e,n){t.exports={mdcontainer:"mdcontainer__3ycSEfvL"}},315:function(t,e,n){"use strict";n(324);var s=n(328),r=n(0),a=n.n(r),l=n(316),o=n.n(l);e.a=t=>{let{html:e,title:n,showCopy:r=!0}=t;return a.a.createElement("div",{style:{padding:10}},a.a.createElement("div",{style:{textAlign:"left",fontWeight:"bolder"}},n?a.a.createElement("span",{style:{marginRight:10}},n):null,r?a.a.createElement(s.a.Paragraph,{copyable:{text:e},style:{display:"inline"}},"复制内容"):null),a.a.createElement("pre",null,a.a.createElement("code",{dangerouslySetInnerHTML:{__html:e},className:o.a.code})))}},316:function(t,e,n){t.exports={code:"code__FaLAiD27"}},317:function(t,e,n){"use strict";var s=n(0),r=n.n(s);e.a=t=>{let{componentName:e}=t;return r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement("h3",null,"使用方式"),r.a.createElement("p",null,"方式一：通过npm install （暂未实现这个）"),r.a.createElement("p",null,"方式二：直接复制下面的JS文件和样式文件"))}},325:function(t,e,n){var s={"./af":181,"./af.js":181,"./ar":182,"./ar-dz":183,"./ar-dz.js":183,"./ar-kw":184,"./ar-kw.js":184,"./ar-ly":185,"./ar-ly.js":185,"./ar-ma":186,"./ar-ma.js":186,"./ar-sa":187,"./ar-sa.js":187,"./ar-tn":188,"./ar-tn.js":188,"./ar.js":182,"./az":189,"./az.js":189,"./be":190,"./be.js":190,"./bg":191,"./bg.js":191,"./bm":192,"./bm.js":192,"./bn":193,"./bn.js":193,"./bo":194,"./bo.js":194,"./br":195,"./br.js":195,"./bs":196,"./bs.js":196,"./ca":197,"./ca.js":197,"./cs":198,"./cs.js":198,"./cv":199,"./cv.js":199,"./cy":200,"./cy.js":200,"./da":201,"./da.js":201,"./de":202,"./de-at":203,"./de-at.js":203,"./de-ch":204,"./de-ch.js":204,"./de.js":202,"./dv":205,"./dv.js":205,"./el":206,"./el.js":206,"./en-au":207,"./en-au.js":207,"./en-ca":208,"./en-ca.js":208,"./en-gb":209,"./en-gb.js":209,"./en-ie":210,"./en-ie.js":210,"./en-il":211,"./en-il.js":211,"./en-in":212,"./en-in.js":212,"./en-nz":213,"./en-nz.js":213,"./en-sg":214,"./en-sg.js":214,"./eo":215,"./eo.js":215,"./es":216,"./es-do":217,"./es-do.js":217,"./es-us":218,"./es-us.js":218,"./es.js":216,"./et":219,"./et.js":219,"./eu":220,"./eu.js":220,"./fa":221,"./fa.js":221,"./fi":222,"./fi.js":222,"./fil":223,"./fil.js":223,"./fo":224,"./fo.js":224,"./fr":225,"./fr-ca":226,"./fr-ca.js":226,"./fr-ch":227,"./fr-ch.js":227,"./fr.js":225,"./fy":228,"./fy.js":228,"./ga":229,"./ga.js":229,"./gd":230,"./gd.js":230,"./gl":231,"./gl.js":231,"./gom-deva":232,"./gom-deva.js":232,"./gom-latn":233,"./gom-latn.js":233,"./gu":234,"./gu.js":234,"./he":235,"./he.js":235,"./hi":236,"./hi.js":236,"./hr":237,"./hr.js":237,"./hu":238,"./hu.js":238,"./hy-am":239,"./hy-am.js":239,"./id":240,"./id.js":240,"./is":241,"./is.js":241,"./it":242,"./it-ch":243,"./it-ch.js":243,"./it.js":242,"./ja":244,"./ja.js":244,"./jv":245,"./jv.js":245,"./ka":246,"./ka.js":246,"./kk":247,"./kk.js":247,"./km":248,"./km.js":248,"./kn":249,"./kn.js":249,"./ko":250,"./ko.js":250,"./ku":251,"./ku.js":251,"./ky":252,"./ky.js":252,"./lb":253,"./lb.js":253,"./lo":254,"./lo.js":254,"./lt":255,"./lt.js":255,"./lv":256,"./lv.js":256,"./me":257,"./me.js":257,"./mi":258,"./mi.js":258,"./mk":259,"./mk.js":259,"./ml":260,"./ml.js":260,"./mn":261,"./mn.js":261,"./mr":262,"./mr.js":262,"./ms":263,"./ms-my":264,"./ms-my.js":264,"./ms.js":263,"./mt":265,"./mt.js":265,"./my":266,"./my.js":266,"./nb":267,"./nb.js":267,"./ne":268,"./ne.js":268,"./nl":269,"./nl-be":270,"./nl-be.js":270,"./nl.js":269,"./nn":271,"./nn.js":271,"./oc-lnc":272,"./oc-lnc.js":272,"./pa-in":273,"./pa-in.js":273,"./pl":274,"./pl.js":274,"./pt":275,"./pt-br":276,"./pt-br.js":276,"./pt.js":275,"./ro":277,"./ro.js":277,"./ru":278,"./ru.js":278,"./sd":279,"./sd.js":279,"./se":280,"./se.js":280,"./si":281,"./si.js":281,"./sk":282,"./sk.js":282,"./sl":283,"./sl.js":283,"./sq":284,"./sq.js":284,"./sr":285,"./sr-cyrl":286,"./sr-cyrl.js":286,"./sr.js":285,"./ss":287,"./ss.js":287,"./sv":288,"./sv.js":288,"./sw":289,"./sw.js":289,"./ta":290,"./ta.js":290,"./te":291,"./te.js":291,"./tet":292,"./tet.js":292,"./tg":293,"./tg.js":293,"./th":294,"./th.js":294,"./tk":295,"./tk.js":295,"./tl-ph":296,"./tl-ph.js":296,"./tlh":297,"./tlh.js":297,"./tr":298,"./tr.js":298,"./tzl":299,"./tzl.js":299,"./tzm":300,"./tzm-latn":301,"./tzm-latn.js":301,"./tzm.js":300,"./ug-cn":302,"./ug-cn.js":302,"./uk":303,"./uk.js":303,"./ur":304,"./ur.js":304,"./uz":305,"./uz-latn":306,"./uz-latn.js":306,"./uz.js":305,"./vi":307,"./vi.js":307,"./x-pseudo":308,"./x-pseudo.js":308,"./yo":309,"./yo.js":309,"./zh-cn":310,"./zh-cn.js":310,"./zh-hk":311,"./zh-hk.js":311,"./zh-mo":312,"./zh-mo.js":312,"./zh-tw":313,"./zh-tw.js":313};function r(t){var e=a(t);return n(e)}function a(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=a,t.exports=r,r.id=325},343:function(t,e,n){"use strict";n(0)},447:function(t,e){t.exports="<h2 id=组件的props>组件的props</h2> <table> <thead> <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody><tr> <td>title</td> <td>索引</td> <td>ReactNode | &quot;&quot;</td> <td></td> </tr> <tr> <td>extra</td> <td>额外显示在右上角的ReactDom或者字符串</td> <td>ReactNode |null</td> <td></td> </tr> <tr> <td>showGoBackBtn</td> <td>显示返回按钮</td> <td>boolean</td> <td>true</td> </tr> </tbody></table> "},448:function(t,e){t.exports="<h2 id=page-介绍>Page 介绍</h2> <h3 id=作用>作用</h3> <ul> <li>组合了antd 的 Card 组件和 antd 的PageHeader组件</li> </ul> <h3 id=目的>目的</h3> <ul> <li>抽象出Page组件</li> <li>方便使用和之后扩展</li> </ul> <h2 id=组件预览>组件预览</h2> "},611:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n.n(s),a=n(315),l=n(447),o=n.n(l),c=n(448),i=n.n(c),j=(n(318),n(314)),d=(n(605),n(603)),m=(n(606),n(604)),u=n(1),p=n.n(u);function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class f extends r.a.Component{render(){const{showGoBackBtn:t,title:e,extra:n}=this.props;return r.a.createElement(d.a,{title:r.a.createElement("div",{style:{margin:"-16px -24px"}},r.a.createElement(m.a,{ghost:!1,title:e,onBack:!!t&&(()=>window.history.back()),extra:n}))},this.props.children)}}h(f,"propTypes",{title:p.a.oneOfType([r.a.ReactNode,p.a.string]),extra:p.a.oneOfType([r.a.ReactNode,null]),showGoBackBtn:p.a.bool}),h(f,"defaultProps",{title:"",showGoBackBtn:!0,extra:null});var g=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{title:"这是title"},"content"),r.a.createElement("br",null),r.a.createElement(f,{title:"这是title",extra:r.a.createElement(j.a,{type:"primary"},"按钮")},"content"),r.a.createElement("br",null),r.a.createElement(f,{title:"这是title",showGoBackBtn:!1},"content")),y=(n(343),n(317)),b=n(179);e.default=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{content:i.a}),r.a.createElement(g,null),r.a.createElement(a.a,{html:'import React, { useCallback, useRef } from \'react\';\r\nimport { Button } from \'antd\';\r\nimport Page from \'../index\';\r\n\r\nexport default () => (\r\n  &lt;>\r\n    &lt;Page title="这是title">\r\n      content\r\n    &lt;/Page>\r\n    &lt;br />\r\n    &lt;Page title="这是title" extra={&lt;Button type="primary">按钮&lt;/Button>}>\r\n      content\r\n    &lt;/Page>\r\n    &lt;br />\r\n    &lt;Page title="这是title" showGoBackBtn={false}>\r\n      content\r\n    &lt;/Page>\r\n  &lt;/>\r\n);\r\n',title:"示例源码"}),r.a.createElement(b.a,{content:o.a}),r.a.createElement(y.a,null),r.a.createElement(a.a,{html:"import React from 'react';\r\nimport { Card, PageHeader } from 'antd';\r\nimport PropTypes from 'prop-types';\r\n\r\n// eslint-disable-next-line react/prefer-stateless-function\r\nexport default class Page extends React.Component {\r\n  static propTypes = {\r\n    title: PropTypes.oneOfType([React.ReactNode, PropTypes.string]),\r\n    extra: PropTypes.oneOfType([React.ReactNode, null]),\r\n    showGoBackBtn: PropTypes.bool,\r\n  };\r\n\r\n  static defaultProps = {\r\n    title: '',\r\n    showGoBackBtn: true,\r\n    extra: null,\r\n  };\r\n\r\n  render() {\r\n    const { showGoBackBtn, title, extra } = this.props;\r\n    return (\r\n      &lt;Card\r\n        title={\r\n          &lt;div style={{ margin: '-16px -24px' }}>\r\n            &lt;PageHeader\r\n              ghost={false}\r\n              title={title}\r\n              onBack={showGoBackBtn ? () => window.history.back() : false}\r\n              extra={extra}\r\n            />\r\n          &lt;/div>\r\n        }\r\n\r\n      >\r\n        {this.props.children}\r\n      &lt;/Card>\r\n    );\r\n  }\r\n}\r\n",title:"js文件"}))}}]);