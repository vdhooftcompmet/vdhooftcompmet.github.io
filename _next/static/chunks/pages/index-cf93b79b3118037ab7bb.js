(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[818],{8278:function(e){"use strict";e.exports=JSON.parse('[{"id":"20220207_The_Computational_Metabolomics_website_is_online","title":"The Computational Metabolomics website is online","date":"2022-02-07"},{"id":"20220201_Mitja_Zdouc_has_started_as_postdoc","title":"Mitja Zdouc has started as postdoc","date":"2022-02-01"}]')},3646:function(e,t,n){var i=n(7228);e.exports=function(e){if(Array.isArray(e))return i(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var i=n(3646),r=n(6860),a=n(379),o=n(8206);e.exports=function(e){return i(e)||r(e)||a(e)||o()}},1706:function(e,t,n){"use strict";n.d(t,{$:function(){return o}});var i=n(5893),r=(n(7294),n(1664)),a="/_next/static/image/config/logo/wur_logo_small.d8950f348b1906c131ed6f1342d0a11b.png",o=function(){return(0,i.jsxs)("div",{className:"footer",children:[(0,i.jsx)("div",{className:"content-border-footer"}),(0,i.jsx)("div",{className:"container text-muted text-center pt-2 px-5",children:(0,i.jsxs)("small",{children:["\xa9 2022 \xa0",(0,i.jsx)(r.default,{href:"https://github.com/vdhooftcompmet/",children:(0,i.jsx)("a",{children:"Van der Hooft Computational Metabolomics Group"})})]})}),(0,i.jsxs)("div",{className:"container text-muted text-center px-5",children:[(0,i.jsxs)("small",{children:["Embedded in the \xa0",(0,i.jsx)(r.default,{href:"https://www.wur.nl/en/Research-Results/Chair-groups/Plant-Sciences/Bioinformatics.htm",children:"Bioinformatics Group"}),"\xa0 of the Plant Sciences Group at WUR"]}),"\xa0",(0,i.jsx)(r.default,{href:"https://www.wur.nl/",children:(0,i.jsx)("img",{className:"wur_footer_logo",src:a,alt:"wur_logo_small"})})]})]})}},3398:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n(7294))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))};var i,r=(i=n(7294))&&i.__esModule?i:{default:i},a=n(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,a=e.hasQuery,o=void 0!==a&&a;return n||r&&o}},2775:function(e,t,n){"use strict";var i=n(9713);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(a=n(3244))&&a.__esModule?a:{default:a},l=n(3398),c=n(1165),d=n(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var a=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var d=m[l];if(r.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?a=!1:n.add(d);else{var u=r.props[d],p=i[d]||new Set;"name"===d&&o||!p.has(u)?(p.add(u),i[d]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:a})}))}var v=function(e){var t=e.children,n=(0,o.useContext)(l.AmpStateContext),i=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:i,inAmpMode:(0,d.isInAmpMode)(n)},t)};t.default=v},3244:function(e,t,n){"use strict";var i=n(319),r=n(4575),a=n(3913),o=(n(1506),n(2205)),s=n(8585),l=n(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var r=l(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(7294),u=function(e){o(n,e);var t=c(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=u},5435:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var i=n(5893),r=n(7294),a=n(9008),o=function(e){var t=e.seo;return(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:t.title}),(0,i.jsx)("meta",{name:"description",content:t.description}),(0,i.jsx)("meta",{property:"og:title",content:t.title}),(0,i.jsx)("meta",{property:"og:description",content:t.description}),(0,i.jsx)("meta",{property:"og:image",content:t.image}),(0,i.jsx)("meta",{property:"og:type",content:"website"})]})},s=n(1664),l=n(7625),c=n(1436),d="/_next/static/image/config/logo/logo_long.064117715ba8cf1c032949491708d041.png",u=[{title:"About",link:"#about"},{title:"News",link:"#news"},{title:"People",link:"#people"},{title:"Alumni",link:"#alumni"}],p=function(){var e=(0,r.useState)(!0),t=e[0],n=e[1];return(0,i.jsxs)("div",{children:[(0,i.jsxs)("nav",{className:"navbar navbar-light",children:[(0,i.jsx)("img",{className:"img-fluid my-3 card-image",width:"70%",src:d,alt:"Van der Hooft Computational Metabolomics logo"}),(0,i.jsx)("button",{className:"menu-button",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":!t,"aria-label":"Toggle navigation",onClick:function(){return n(!t)},children:(0,i.jsx)(l.G,{icon:c.xiG,size:"2x"})}),(0,i.jsx)("div",{className:"".concat(t?"collapse":""," navbar-collapse"),id:"navbarsExample09",children:u.map((function(e,t){return(0,i.jsx)(s.default,{href:e.link,children:(0,i.jsx)("a",{className:"nav-link",children:e.title})},t)}))})]}),(0,i.jsx)("div",{className:"content-border-header"})]})},f=function(){return(0,i.jsx)("div",{className:"twitter-container",children:(0,i.jsxs)("div",{className:"col twitter-window",children:[(0,i.jsx)("a",{className:"twitter-timeline",href:"https://twitter.com/vdHooft_CompMet?ref_src=twsrc%5Etfw",children:"Tweets by vdHooft_CompMet"}),(0,i.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})]})})},m=n(8278),h=function(e){var t=e.id,n=e.date,r=e.title;return(0,i.jsx)(s.default,{href:"/news/"+t,children:(0,i.jsx)("div",{className:"card mx-sm-1 my-1 news-card",children:(0,i.jsx)("div",{className:"news-card-content",children:(0,i.jsxs)("div",{className:"row px-4",children:[(0,i.jsx)("div",{className:"col-sm-1 py-2 px-1 text-center",children:(0,i.jsx)(l.G,{icon:c.Xgz,size:"2x"})}),(0,i.jsxs)("div",{className:"col-sm-10",children:[(0,i.jsx)("div",{className:"news-item-row-date",children:n}),(0,i.jsx)("div",{className:"news-item-row-text",children:r})]})]})})})})},v=function(){var e="No news yet!";return 0!==m.length&&(m=m.slice(0,5),e=(0,i.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:m.map((function(e,t){return(0,i.jsx)(h,{id:e.id,date:e.date,title:e.title})}))})),(0,i.jsx)("div",{id:"news",className:"content-container",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"News"}),e,(0,i.jsx)("div",{className:"text-muted mt-2 mx-2",children:(0,i.jsx)(s.default,{href:"/archive",children:(0,i.jsx)("a",{children:"Older news..."})})})]})})};function x(e){for(var t,n=e.length;0!=n;){t=Math.floor(Math.random()*n),n--;var i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}var g=function(e){var t=e.profile,n=e.name,r=e.role,a=e.links,o="./people/"+function(e,t,n){for(var i=0,r=e.length;i<r;i++)e=e.replace(t,n);return e}(n," ","_");return a=[{icon:c.sph,link:o}].concat(a),(0,i.jsx)("div",{className:"card mx-sm-1 my-1 person-card",children:(0,i.jsxs)("div",{className:"row person",children:[(0,i.jsx)("div",{className:"col text-center profile",children:t?(0,i.jsx)("img",{className:"img-fluid",src:t,alt:n}):(0,i.jsx)(l.G,{icon:c.m08,size:"3x"})}),(0,i.jsxs)("div",{className:"col info",children:[(0,i.jsx)("div",{className:"name",children:n}),(0,i.jsx)("div",{className:"role",children:r}),(0,i.jsx)("div",{className:"contact",children:a.map((function(e,t){return(0,i.jsx)(s.default,{href:e.link,children:(0,i.jsxs)("a",{children:[(0,i.jsx)(l.G,{icon:e.icon,size:"1x"}),"\xa0"]})},t)}))})]})]})})},j=function(e){var t=e.people;t=(t=t.filter((function(e){return 1==e.active}))).slice(0,1).concat(x(t.slice(1)));var n=(0,i.jsx)("div",{className:"mx-2",children:"No people yet!"});return 0!==t.length&&(n=(0,i.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:t.map((function(e,t){return(0,i.jsx)(g,{profile:e.profile,name:e.name,role:e.role,links:e.links})}))})),(0,i.jsxs)("div",{id:"people",className:"content-container",children:[(0,i.jsx)("h3",{children:"People"}),n]})},b=function(e){var t=e.people;t=(t=t.filter((function(e){return 0==e.active}))).slice(0,1).concat(x(t.slice(1)));var n=(0,i.jsx)("div",{className:"mx-2",children:"No alumni yet!"});return 0!==t.length&&(n=(0,i.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:t.map((function(e,t){return(0,i.jsx)(g,{profile:e.profile,name:e.name,role:e.role,links:e.links})}))})),(0,i.jsxs)("div",{id:"alumni",className:"content-container",children:[(0,i.jsx)("h3",{children:"Alumni"}),n]})},w=function(e){var t=e.img,n=e.title,r=e.description,a=e.path;return(0,i.jsx)(s.default,{href:"/"+a,children:(0,i.jsx)("div",{className:"card mx-sm-1 my-1 research-card",children:(0,i.jsx)("div",{className:"research-card-content",children:(0,i.jsxs)("div",{className:"container research-info",children:[(0,i.jsx)("div",{className:"research-title",children:n}),(0,i.jsx)("div",{className:"research-description",children:r}),(0,i.jsx)("div",{className:"research-pillar",children:(0,i.jsx)("img",{className:"img-fluid",src:t,alt:n})})]})})})})},y=function(e){var t=e.group_photo,n=e.description,r=e.research_pillars;return(0,i.jsx)("div",{id:"about",className:"content-container",children:(0,i.jsxs)("div",{className:"research-container",children:[(0,i.jsx)("h3",{children:"About us"}),(0,i.jsxs)("div",{className:"group-photo",children:[(0,i.jsx)("img",{className:"img-fluid",src:t,alt:"Van der Hooft Computational Metabolomics Group group photo 2021"}),(0,i.jsxs)("small",{children:["From left to right: \xa0",(0,i.jsx)(s.default,{href:"./people/David_Meijer",children:"David Meijer"}),", \xa0",(0,i.jsx)(s.default,{href:"./people/Niek_de_Jonge",children:"Niek de Jonge"}),", \xa0",(0,i.jsx)(s.default,{href:"./people/Justin_van_der_Hooft",children:"Justin van der Hooft"}),", \xa0",(0,i.jsx)(s.default,{href:"./people/Kevin_Mildau",children:"Kevin Mildau"}),", and \xa0",(0,i.jsx)(s.default,{href:"../people/Joris_Louwen",children:"Joris Louwen."})]})]}),(0,i.jsx)("div",{className:"group-description",children:(0,i.jsx)("a",{children:n.map((function(e,t){return(0,i.jsx)("p",{children:e},t)}))})}),(0,i.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:r.map((function(e,t){return(0,i.jsx)(w,{img:e.img,title:e.title,description:e.description,path:e.path})}))})]})})},_=n(1706),A=n(1417),k=n(4296),N=n(5775),M={title:"Van der Hooft Computational Metabolomics Group",description:"The Van der Hooft Computational Metabolomics Group",image:d},P={group_photo:"/_next/static/image/config/group_photo/group_photo_2021.c24c1d0ec9b9ee9b5a76047290ae58f5.jpeg",description:["Justin's research vision is to close the gap between what we can see in metabolomics and what we can actually learn from it. This will enable biochemical interpretation of spectral data obtained from complex metabolite mixtures through structural and functional annotations.","This will depend on finding out: i) which structural information is encoded in metabolomics data; ii) how novel chemistry can be recognised in spectral data, and iii) how to effectively identify relevant metabolite groups in metabolomics profiles of complex metabolite mixtures?","The Van der Hooft Group develops computational metabolomics approaches inspired by two other fields - that of natural language processing (NLP) and genomics. For example, Justin has pioneered the use of topic modeling and word embedding NLP algorithms to discover substructures and structural relationships in metabolomics profiles.","The Van der Hooft Group uses the plant root microbiome and human food metabolome as prime applications since they represent complex metabolite mixtures full of yet unknown metabolic matter that once elucidated will boost our insights in molecular mechanisms underpinning the regulation of growth, development, and health."],research_pillars:[{img:"/_next/static/image/config/photos/research_pillar_1.533ff5cb4eedbec5e92afd40d1025570.png",title:"Research pillar I",description:"Machine learning to read metabolite structure from spectra",path:"research_pillar_1"},{img:"/_next/static/image/config/photos/research_pillar_2.b2cb14097851875f71b2d675e527d489.png",title:"Research pillar II",description:"Chemically-informed comparative metabolomics to prioritize chemistry",path:"research_pillar_2"},{img:"/_next/static/image/config/photos/research_pillar_3.96937ef63f54659d71b1d75918e993ca.png",title:"Research pillar III",description:"Linked omics and activity profiles to gain functional insights",path:"research_pillar_3"}]},S={title:"People",people:[{name:"Justin van der Hooft",role:"Assistant professor",active:!0,profile:N.Z.src,links:[{icon:c.ILF,link:"https://www.wur.nl/nl/Personen/Justin-dr.-JJJ-Justin-van-der-Hooft.htm"},{icon:A.zhw,link:"https://github.com/justinjjvanderhooft"},{icon:A.mdU,link:"https://twitter.com/jjjvanderhooft"}]},{name:"Mitja Zdouc",role:"Post-doctoral researcher",active:!0,profile:null,links:[]},{name:"David Meijer",role:"PhD student",active:!0,profile:k.Z.src,links:[{icon:c.ILF,link:"https://davidmeijer.com"},{icon:A.zhw,link:"https://github.com/davidmeijer"},{icon:A.mdU,link:"https://twitter.com/techmeijer"}]},{name:"Kevin Mildau",role:"PhD student",active:!0,profile:null,links:[]},{name:"Niek de Jonge",role:"PhD student",active:!0,profile:null,links:[]},{name:"Joris Louwen",role:"Research assistant",active:!0,profile:null,links:[]},{name:"Artur van Bemmelen",role:"Research assistant",active:!0,profile:null,links:[]},{name:"Nienke van Unen",role:"MSc student",active:!0,profile:null,links:[]},{name:"Osman Altun",role:"MSc student",active:!0,profile:null,links:[]},{name:"Selina Ilchmann",role:"MSc student",active:!0,profile:null,links:[]},{name:"Morena Tinte",role:"Visiting PhD student",active:!0,profile:null,links:[]},{name:"Lapo Renai",role:"Visiting PhD student",active:!1,profile:null,links:[]},{name:"Huali Xie",role:"Visiting PhD student",active:!1,profile:null,links:[]},{name:"Junda Huang",role:"MSc student",active:!1,profile:null,links:[]},{name:"Yiyuan Ding",role:"MSc student",active:!1,profile:null,links:[]},{name:"Antonio Rebac",role:"BSc student",active:!1,profile:null,links:[]},{name:"Jeanine Boot",role:"MSc student",active:!1,profile:null,links:[]},{name:"Sofia Kalaidopoulou",role:"MSc student",active:!1,profile:null,links:[]},{name:"Isis Meij",role:"MSc student",active:!1,profile:null,links:[]},{name:"Leron Kok",role:"MSc student",active:!1,profile:null,links:[]},{name:"Daniel Papenberg",role:"MSc student",active:!1,profile:null,links:[]}]};function O(){return(0,i.jsxs)("div",{className:"page-container",children:[(0,i.jsxs)("div",{className:"content-wrap",children:[(0,i.jsx)(o,{seo:M}),(0,i.jsx)(p,{}),(0,i.jsx)(f,{}),(0,i.jsx)(y,{group_photo:P.group_photo,description:P.description,research_pillars:P.research_pillars}),(0,i.jsx)(v,{}),(0,i.jsx)(j,{people:S.people}),(0,i.jsx)(b,{people:S.people})]}),(0,i.jsx)(_.$,{})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5435)}])},4296:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/David_Meijer_profile.74c1fcbc3cf1584e6415dcedd0f688ff.png",height:1746,width:1741,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7klEQVR42mM4N6+eiQEIds+ocz80ufjU6rrEW70FEa1AIaA4FJxb2Wtwc1XX/yfr+v9fn13zf11jyv/23PBeuIKTy3oqHm6Z8f/tgZXfHyzv/H1oYtH/RfVp1+AKdvaWr59dk/l/R1fJnyWVyX+6s0L/TyhPPgiW/JZux/501cT7lxd2/j/eU/x3Tn7Uv8U1qf8X5kX93hznqw9W9Gjr3Prbi9r+H+sq/bUsP/LP7s68/1tq01YiHLlphurddRN+3pzb+m9TQ8r/JY3pd+GSZQwMjCD68vppF3ZPqPg/MS/k//Tq9LfVNRVSDAwMDACuBXbksevVlAAAAABJRU5ErkJggg=="}},5775:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Justin_van_der_Hooft_profile.e0ae5e291b132a14115340fec52a8bb5.png",height:231,width:227,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA5klEQVR42mOAgWUTi3sWdGb/762K/9FRGtXFgAzmd+c1zmxO/1+d4vkny0Pvf4GX3v88f6NauIIQJ82r0yvz/p9fNuvPqvLUP5tqU/+3RFo/AUoxg+SZquL8r1xeN///tkkdfw9PqP+9qTn3f0eCyzy4CcfnTdh/af3C/9tnTPp9bfXcXxubMv9vbEstgit4enSz25mV0//vm9Lxb1lNya/VZdH/V9ZGRMEVzJvQFbxtTs//fbM7f62pK/4/vyTsa0+JkyRYsnDSOjff2I7rmYnZ/zvLc37Nrsr635MTkA6Sm1UWywwA30xudmu5vHUAAAAASUVORK5CYII="}},9008:function(e,t,n){e.exports=n(2775)}},function(e){e.O(0,[774,523,112,543,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);