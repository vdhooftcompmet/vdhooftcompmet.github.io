(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{8278:function(e){"use strict";e.exports=JSON.parse('[{"id":"20220225_Preprint_out_on_linking_BGCs_to_their_metabolic_products","title":"Preprint out on linking BGCs to their metabolic products","date":"2022-02-25"},{"id":"20220221_Nienke_van_Unen_succesfully_defended_her_MSc_thesis","title":"Nienke van Unen succesfully defended her MSc thesis","date":"2022-02-21"},{"id":"20220215_The_Computational_Metabolomics_website_is_online","title":"The Computational Metabolomics website is online","date":"2022-02-15"},{"id":"20220214_Remco_van_Tuel_started_as_BSc_thesis_student","title":"Remco van Tuel started as BSc thesis student","date":"2022-02-14"},{"id":"20220201_Mitja_Zdouc_has_started_as_postdoc","title":"Mitja Zdouc has started as postdoc","date":"2022-02-01"},{"id":"20220110_Amisha_Singh_has_started_as_MSc_thesis_student","title":"Amisha Singh has started as MSc thesis student","date":"2022-01-10"}]')},3646:function(e,t,i){var n=i(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},9713:function(e){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,i){var n=i(3646),a=i(6860),r=i(379),o=i(8206);e.exports=function(e){return n(e)||a(e)||r(e)||o()}},1706:function(e,t,i){"use strict";i.d(t,{$:function(){return o}});var n=i(5893),a=(i(7294),i(1664)),r="/_next/static/image/config/logo/wur_logo_small.d8950f348b1906c131ed6f1342d0a11b.png",o=function(){return(0,n.jsxs)("div",{className:"footer",children:[(0,n.jsx)("div",{className:"content-border-footer"}),(0,n.jsx)("div",{className:"container text-muted text-center pt-2 px-5",children:(0,n.jsxs)("small",{children:["\xa9 2022 \xa0",(0,n.jsx)(a.default,{href:"https://github.com/vdhooftcompmet/",children:(0,n.jsx)("a",{children:"Van der Hooft Computational Metabolomics Group"})})]})}),(0,n.jsxs)("div",{className:"container text-muted text-center px-5",children:[(0,n.jsxs)("small",{children:["Embedded in the \xa0",(0,n.jsx)(a.default,{href:"https://www.wur.nl/en/Research-Results/Chair-groups/Plant-Sciences/Bioinformatics.htm",children:"Bioinformatics Group"}),"\xa0 of the Plant Sciences Group at WUR"]}),"\xa0",(0,n.jsx)(a.default,{href:"https://www.wur.nl/",children:(0,n.jsx)("img",{className:"wur_footer_logo",src:r,alt:"wur_logo_small"})})]})]})}},3398:function(e,t,i){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=i(7294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,i){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(a.default.useContext(r.AmpStateContext))};var n,a=(n=i(7294))&&n.__esModule?n:{default:n},r=i(3398);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,i=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,r=e.hasQuery,o=void 0!==r&&r;return i||a&&o}},2775:function(e,t,i){"use strict";var n=i(9713);function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=n?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(i,a,r):i[a]=e[a]}i.default=e,t&&t.set(e,i);return i}(i(7294)),s=(r=i(3244))&&r.__esModule?r:{default:r},l=i(3398),c=i(1165),d=i(6393);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var i=o.default.Children.toArray(t.props.children);return e.concat(i)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,i=new Set,n={};return function(a){var r=!0,o=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){o=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?r=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var l=0,c=m.length;l<c;l++){var d=m[l];if(a.props.hasOwnProperty(d))if("charSet"===d)i.has(d)?r=!1:i.add(d);else{var u=a.props[d],f=n[d]||new Set;"name"===d&&o||!f.has(u)?(f.add(u),n[d]=f):r=!1}}}return r}}()).reverse().map((function(e,i){var r=e.key||i;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,o.default.cloneElement(e,s)}return o.default.cloneElement(e,{key:r})}))}var A=function(e){var t=e.children,i=(0,o.useContext)(l.AmpStateContext),n=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(s.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,d.isInAmpMode)(i)},t)};t.default=A},3244:function(e,t,i){"use strict";var n=i(319),a=i(4575),r=i(3913),o=(i(1506),i(2205)),s=i(8585),l=i(9754);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=l(e);if(t){var a=l(this).constructor;i=Reflect.construct(n,arguments,a)}else i=n.apply(this,arguments);return s(this,i)}}t.__esModule=!0,t.default=void 0;var d=i(7294),u=function(e){o(i,e);var t=c(i);function i(e){var r;return a(this,i),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(n(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(i,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),i}(d.Component);t.default=u},9704:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return V}});var n=i(5893),a=i(7294),r=i(9008),o=function(e){var t=e.seo;return(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:t.title}),(0,n.jsx)("meta",{name:"description",content:t.description}),(0,n.jsx)("meta",{property:"og:title",content:t.title}),(0,n.jsx)("meta",{property:"og:description",content:t.description}),(0,n.jsx)("meta",{property:"og:image",content:t.image}),(0,n.jsx)("meta",{property:"og:type",content:"website"})]})},s=i(1664),l=i(7625),c=i(1436),d="/_next/static/image/config/logo/logo_long.064117715ba8cf1c032949491708d041.png",u=[{title:"About",link:"#about"},{title:"News",link:"#news"},{title:"People",link:"#people"},{title:"Alumni",link:"#alumni"},{title:"Collaborators",link:"#collaborators"},{title:"Funding",link:"#funding"}],f=function(){var e=(0,a.useState)(!0),t=e[0],i=e[1];return(0,n.jsxs)("div",{children:[(0,n.jsxs)("nav",{className:"navbar navbar-light",children:[(0,n.jsx)("img",{className:"img-fluid my-3 card-image",width:"70%",src:d,alt:"Van der Hooft Computational Metabolomics logo"}),(0,n.jsx)("button",{className:"menu-button",type:"button","data-toggle":"collapse","data-target":"#navbarsExample09","aria-controls":"navbarsExample09","aria-expanded":!t,"aria-label":"Toggle navigation",onClick:function(){return i(!t)},children:(0,n.jsx)(l.G,{icon:c.xiG,size:"2x"})}),(0,n.jsx)("div",{className:"".concat(t?"collapse":""," navbar-collapse"),id:"navbarsExample09",children:u.map((function(e,t){return(0,n.jsx)(s.default,{href:e.link,children:(0,n.jsx)("a",{className:"nav-link",children:e.title})},t)}))})]}),(0,n.jsx)("div",{className:"content-border-header"})]})},p=function(){return(0,n.jsx)("div",{className:"twitter-container",children:(0,n.jsxs)("div",{className:"col twitter-window",children:[(0,n.jsx)(r.default,{children:(0,n.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"})}),(0,n.jsx)("a",{className:"twitter-timeline",href:"https://twitter.com/vdHooft_CompMet?ref_src=twsrc%5Etfw",children:"Tweets by vdHooft_CompMet"})]})})},m=i(8278),h=function(e){var t=e.id,i=e.date,a=e.title;return(0,n.jsx)(s.default,{href:"/news/"+t,children:(0,n.jsx)("div",{className:"card mx-sm-1 my-1 news-card",children:(0,n.jsx)("div",{className:"news-card-content",children:(0,n.jsxs)("div",{className:"row px-4",children:[(0,n.jsx)("div",{className:"col-sm-1 py-2 px-1 text-center",children:(0,n.jsx)(l.G,{icon:c.Xgz,size:"2x"})}),(0,n.jsxs)("div",{className:"col-sm-10",children:[(0,n.jsx)("div",{className:"news-item-row-date",children:i}),(0,n.jsx)("div",{className:"news-item-row-text",children:a})]})]})})})})},A=function(){var e="No news yet!";return 0!==m.length&&(m=m.slice(0,5),e=(0,n.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:m.map((function(e,t){return(0,n.jsx)(h,{id:e.id,date:e.date,title:e.title},t)}))})),(0,n.jsx)("div",{id:"news",className:"content-container",children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{children:"News"}),e,(0,n.jsx)("div",{className:"text-muted mt-2 mx-2",children:(0,n.jsx)(s.default,{href:"/archive",children:(0,n.jsx)("a",{children:"Older news..."})})})]})})};function g(e,t,i){for(var n=0,a=e.length;n<a;n++)e=e.replace(t,i);return e}var v=function(e){var t=e.profile,i=e.name,a=e.role,r=e.links,o="./people/"+g(i," ","_");return r=[{icon:c.sph,link:o}].concat(r),(0,n.jsx)("div",{className:"card mx-sm-1 my-1 person-card",children:(0,n.jsx)("a",{href:o,className:"fill-div",children:(0,n.jsxs)("div",{className:"row person",children:[(0,n.jsx)("div",{className:"col text-center profile",children:t?(0,n.jsx)("img",{className:"img-fluid",src:t,alt:i}):(0,n.jsx)(l.G,{icon:c.m08,size:"3x"})}),(0,n.jsxs)("div",{className:"col info",children:[(0,n.jsx)("div",{className:"name",children:i}),(0,n.jsx)("div",{className:"role",children:a}),(0,n.jsx)("div",{className:"row contact",children:r.map((function(e,t){return(0,n.jsx)(s.default,{href:e.link,children:(0,n.jsxs)("div",{className:"col contact-icon",children:[(0,n.jsx)(l.G,{icon:e.icon,size:"1x"}),"\xa0"]})},t)}))})]})]})})})},x=function(e){var t=e.profile,i=e.affiliation,a=e.name,r=e.role,o=e.links,d="./collabs/"+g(a," ","_");return o=[{icon:c.sph,link:d}].concat(o),(0,n.jsx)("div",{className:"card mx-sm-1 my-1 collab-card",children:(0,n.jsx)("a",{href:d,className:"fill-div",children:(0,n.jsxs)("div",{className:"row collab",children:[(0,n.jsx)("div",{className:"col text-center profile",children:t?(0,n.jsx)("img",{className:"img-fluid",src:t,alt:a}):(0,n.jsx)(l.G,{icon:c.m08,size:"3x"})}),(0,n.jsxs)("div",{className:"col info",children:[(0,n.jsx)("div",{className:"name",children:a}),(0,n.jsx)("div",{className:"role",children:r}),(0,n.jsx)("div",{className:"affiliation",children:i}),(0,n.jsx)("div",{className:"row contact",children:o.map((function(e,t){return(0,n.jsx)(s.default,{href:e.link,children:(0,n.jsxs)("div",{className:"col contact-icon",children:[(0,n.jsx)(l.G,{icon:e.icon,size:"1x"}),"\xa0"]})},t)}))})]})]})})})},b=function(e){var t=e.people;t=t.filter((function(e){return 1==e.active}));var i=(0,n.jsx)("div",{className:"mx-2",children:"No people yet!"});return 0!==t.length&&(i=(0,n.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:t.map((function(e,t){return(0,n.jsx)(v,{profile:e.profile,name:e.name,role:e.role,links:e.links},t)}))})),(0,n.jsxs)("div",{id:"people",className:"content-container",children:[(0,n.jsx)("h3",{children:"People"}),i]})},j=function(e){var t=e.people;t=t.filter((function(e){return 0==e.active}));var i=(0,n.jsx)("div",{className:"mx-2",children:"No alumni yet!"});return 0!==t.length&&(i=(0,n.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:t.map((function(e,t){return(0,n.jsx)(v,{profile:e.profile,name:e.name,role:e.role,links:e.links},t)}))})),(0,n.jsxs)("div",{id:"alumni",className:"content-container",children:[(0,n.jsx)("h3",{children:"Alumni"}),i]})},w=function(e){var t=e.collabs,i=(0,n.jsx)("div",{className:"mx-2",children:"Coming soon!"});return 0!==t.length&&(i=(0,n.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-left",children:t.map((function(e,t){return(0,n.jsx)(x,{profile:e.profile,affiliation:e.affiliation,name:e.name,role:e.role,links:e.links},t)}))})),(0,n.jsxs)("div",{id:"collaborators",className:"content-container",children:[(0,n.jsx)("h3",{children:"Collaborators"}),i]})},C=function(e){var t=e.img,i=e.title,a=e.description,r=e.path;return(0,n.jsx)(s.default,{href:"/"+r,children:(0,n.jsx)("div",{className:"card mx-sm-1 my-1 research-card",children:(0,n.jsx)("div",{className:"research-card-content",children:(0,n.jsxs)("div",{className:"container research-info",children:[(0,n.jsx)("div",{className:"research-title",children:i}),(0,n.jsx)("div",{className:"research-description",children:a}),(0,n.jsx)("div",{className:"research-pillar",children:(0,n.jsx)("img",{className:"img-fluid",src:t,alt:i})})]})})})})},k=function(e){var t=e.group_photo,i=e.description,a=e.research_pillars;return(0,n.jsx)("div",{id:"about",className:"content-container",children:(0,n.jsxs)("div",{className:"research-container",children:[(0,n.jsx)("h3",{children:"About us"}),(0,n.jsxs)("div",{className:"group-photo",children:[(0,n.jsx)("img",{className:"img-fluid",src:t,alt:"Van der Hooft Computational Metabolomics Group group photo 2021"}),(0,n.jsxs)("small",{children:["From left to right: \xa0",(0,n.jsx)(s.default,{href:"/people/David_Meijer",children:"David Meijer"}),", \xa0",(0,n.jsx)(s.default,{href:"/people/Niek_de_Jonge",children:"Niek de Jonge"}),", \xa0",(0,n.jsx)(s.default,{href:"/people/Justin_van_der_Hooft",children:"Justin van der Hooft"}),", \xa0",(0,n.jsx)(s.default,{href:"/people/Kevin_Mildau",children:"Kevin Mildau"}),", and \xa0",(0,n.jsx)(s.default,{href:"/people/Joris_Louwen",children:"Joris Louwen."})]})]}),(0,n.jsx)("div",{className:"group-description",children:i}),(0,n.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-center",children:a.map((function(e,t){return(0,n.jsx)(C,{img:e.img,title:e.title,description:e.description,path:e.path},t)}))})]})})};var y=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),(0,n.jsx)("div",{id:"funding",className:"content-container",children:(0,n.jsxs)("div",{className:"funding-container",children:[(0,n.jsx)("h3",{children:"Funding"}),(0,n.jsx)("div",{className:"funding-description",children:(0,n.jsxs)("small",{children:[(0,n.jsx)("strong",{children:"Netherlands eScience Center"}),(0,n.jsx)("br",{}),"iOMEGA project - Accelerating Scientific Discoveries 2018 grant; NPLinker 2.0 project - eScience Open Call 2021 grant"]})})]})})},_=i(1706),N=i(1417),M=i(4296),I=i(5775),S=i(1441),U=i(3860),D=i(8021),L=i(7810),R=i(6632),F=i(1331),B=i(6490),G={title:"Van der Hooft Computational Metabolomics Group",description:"The Van der Hooft Computational Metabolomics Group",image:d},E={group_photo:"/_next/static/image/config/group_photo/group_photo_2021.c24c1d0ec9b9ee9b5a76047290ae58f5.jpeg",description:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsxs)("h5",{children:["Our research vision is to close the gap between what we can ",(0,n.jsx)("i",{children:"see"})," in metabolomics and what we can actually ",(0,n.jsx)("i",{children:"learn"})," from it."]})}),(0,n.jsx)("div",{className:"mb-4",children:"This will enable biochemical interpretation of spectral data obtained from complex metabolite mixtures through structural and functional annotations. This will depend on finding out: i) which structural information is encoded in metabolomics data; ii) how novel chemistry can be recognised in spectral data, and iii) how to effectively identify relevant metabolite groups in metabolomics profiles of complex metabolite mixtures?"}),(0,n.jsx)("div",{className:"mb-4",children:"The Van der Hooft Group develops computational metabolomics approaches inspired by two other fields - that of natural language processing (NLP) and genomics. For example, Justin has pioneered the use of topic modeling and word embedding NLP algorithms to discover substructures and structural relationships in metabolomics profiles."}),(0,n.jsx)("div",{children:"The Van der Hooft Group uses the plant root microbiome and human food metabolome as prime applications since they represent complex metabolite mixtures full of yet unknown metabolic matter that once elucidated will boost our insights in molecular mechanisms underpinning the regulation of growth, development, and health."})]}),research_pillars:[{img:"/_next/static/image/config/imgs/research_pillar_1.533ff5cb4eedbec5e92afd40d1025570.png",title:"Research pillar I",description:"Machine learning to read metabolite structure from spectra",path:"research_pillar_1"},{img:"/_next/static/image/config/imgs/research_pillar_2.b2cb14097851875f71b2d675e527d489.png",title:"Research pillar II",description:"Chemically-informed comparative metabolomics to prioritize chemistry",path:"research_pillar_2"},{img:"/_next/static/image/config/imgs/research_pillar_3.96937ef63f54659d71b1d75918e993ca.png",title:"Research pillar III",description:"Linked omics and activity profiles to gain functional insights",path:"research_pillar_3"}]},O={title:"People",people:[{name:"Justin van der Hooft",role:"Assistant professor",active:!0,profile:I.Z.src,links:[{icon:c.ILF,link:"https://www.wur.nl/nl/Personen/Justin-dr.-JJJ-Justin-van-der-Hooft.htm"},{icon:N.zhw,link:"https://github.com/justinjjvanderhooft"},{icon:N.mdU,link:"https://twitter.com/jjjvanderhooft"}]},{name:"Mitja Zdouc",role:"Post-doctoral researcher",active:!0,profile:S.Z.src,links:[{icon:c.ILF,link:"https://www.wur.nl/en/Persons/Mitja-dr.-MM-Mitja-Zdouc.htm"},{icon:N.mdU,link:"https://twitter.com/mitjamz"}]},{name:"David Meijer",role:"PhD student",active:!0,profile:M.Z.src,links:[{icon:c.ILF,link:"https://davidmeijer.com"},{icon:N.D9H,link:"https://www.linkedin.com/in/davidmeijerbif"},{icon:N.zhw,link:"https://github.com/davidmeijer"},{icon:N.mdU,link:"https://twitter.com/techmeijer"}]},{name:"Kevin Mildau",role:"PhD student",active:!0,profile:F.Z.src,links:[{icon:c.ILF,link:"https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fchemnet.univie.ac.at%2Fteam%2Fkevin-mildau%2F&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=vo1VLbRAW%2BeU2bCnOW9ejTmr0koelgdMlojyalGfkJA%3D&amp;reserved=0"},{icon:N.D9H,link:"https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fkevin-mildau%2F&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=BWDJ0TiVu4LQ3gE0M16E4P3GwB3ArRJFPoZskVlZTLQ%3D&amp;reserved=0"},{icon:N.zhw,link:"https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fkevinmildau&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=iG8WLWDwsm%2F6INArOFgQY5HhcHUH9Uv%2FygNXmHOpfDY%3D&amp;reserved=0"},{icon:N.mdU,link:"https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftwitter.com%2FKMildau&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cf29b94ad5fec4ab0b6f108d9f5dddb36%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811156245511823%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C2000&amp;sdata=E%2FlI5jS97LcJA8VGvVnmGu3avc3ZIvUQ5QVNV22H7mk%3D&amp;reserved=0"}]},{name:"Niek de Jonge",role:"PhD student",active:!0,profile:U.Z.src,links:[{icon:N.zhw,link:"https://github.com/niekdejonge"}]},{name:"Joris Louwen",role:"Research assistant",active:!0,profile:D.Z.src,links:[]},{name:"Artur van Bemmelen",role:"Research assistant",active:!0,profile:null,links:[]},{name:"Nienke van Unen",role:"MSc student",active:!1,profile:null,links:[]},{name:"Osman Altun",role:"MSc student",active:!0,profile:null,links:[]},{name:"Selina Ilchmann",role:"MSc student",active:!0,profile:null,links:[]},{name:"Morena Tinte",role:"Visiting PhD student",active:!0,profile:null,links:[]},{name:"Remco van Tuel",role:"BSc student",active:!0,profile:L.Z.src,links:[]},{name:"Amisha Singh",role:"MSc student",active:!0,profile:R.Z.src,links:[]},{name:"Lapo Renai",role:"Visiting PhD student",active:!1,profile:null,links:[]},{name:"Huali Xie",role:"Visiting PhD student",active:!1,profile:null,links:[]},{name:"Junda Huang",role:"MSc student",active:!1,profile:null,links:[]},{name:"Yiyuan Ding",role:"MSc student",active:!1,profile:null,links:[]},{name:"Antonio Rebac",role:"BSc student",active:!1,profile:null,links:[]},{name:"Jeanine Boot",role:"MSc student",active:!1,profile:null,links:[]},{name:"Sofia Kalaidopoulou",role:"MSc student",active:!1,profile:null,links:[]},{name:"Isis Meij",role:"MSc student",active:!1,profile:null,links:[]},{name:"Leron Kok",role:"MSc student",active:!1,profile:null,links:[]},{name:"Daniel Papenberg",role:"MSc student",active:!1,profile:null,links:[]}]},J={title:"Collaborators",collabs:[{name:"Marnix Medema",role:"Associate professor",affiliation:"Wageningen University, The Netherlands",profile:null,links:[{icon:c.ILF,link:"https://www.wur.nl/en/Persons/Marnix-dr.-MH-Marnix-Medema.htm"}]},{name:"Ricardo da Silva",role:"Professor",affiliation:"University of S\xe3o Paulo, Brazil",profile:B.Z.src,links:[{icon:c.ILF,link:"http://ccbl.fcfrp.usp.br/ccbl/"},{icon:N.zhw,link:"https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fgithub.com%2Fcomputational-chemical-biology&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cb8725efd53c74b6dd8cf08d9f61992a7%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811411974848888%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=QbHMj9oZldTTdeW4ue8RJfPqybYJkr5Fn2CWUxM1YUI%3D&amp;reserved=0"},{icon:N.mdU,link:"https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Ftwitter.com%2Fccbl19&amp;data=04%7C01%7Cjustin.vanderhooft%40wur.nl%7Cb8725efd53c74b6dd8cf08d9f61992a7%7C27d137e5761f4dc1af88d26430abb18f%7C0%7C0%7C637811411974848888%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=%2BxL%2BcNS9AdXKhAnYYBOLeZQO8KSP1%2BX5hfUtdkFm314%3D&amp;reserved=0"}]},{name:"Madeleine Ernst",role:"Group leader",affiliation:"Center for Neonatal Screening, Denmark",profile:null,links:[{icon:c.ILF,link:"https://en.ssi.dk/about-us/contact/employees/m/madeleine-ernst-maet"}]},{name:"eScience Center",role:"Institution",affiliation:"The Netherlands",profile:null,links:[{icon:c.ILF,link:"https://www.esciencecenter.nl/"}]},{name:"Florian Huber",role:"Professor",affiliation:"D\xfcsseldorf University of Applied Sciences, Germany",profile:null,links:[{icon:c.ILF,link:"https://medien.hs-duesseldorf.de/huber"}]},{name:"Roger Linington",role:"Professor",affiliation:"Simon Fraser University, Canada",profile:null,links:[{icon:c.ILF,link:"https://www.sfu.ca/chemistry/department/faculty-staff/profiles/research-faculty/rliningt.html"}]},{name:"The Dorrestein Laboratory",role:"Institution",affiliation:"University of California in San Diego, USA",profile:null,links:[{icon:c.ILF,link:"https://dorresteinlab.ucsd.edu/"}]},{name:"Glasgow Polyomics",role:"Institution",affiliation:"University of Glasgow, Scotland, UK",profile:null,links:[{icon:c.ILF,link:"https://www.polyomics.gla.ac.uk/"}]}]};function V(){return(0,n.jsxs)("div",{className:"page-container",children:[(0,n.jsxs)("div",{className:"content-wrap",children:[(0,n.jsx)(o,{seo:G}),(0,n.jsx)(f,{}),(0,n.jsx)(k,{group_photo:E.group_photo,description:E.description,research_pillars:E.research_pillars}),(0,n.jsx)("div",{className:"content-border-twitter mt-4"}),(0,n.jsx)(p,{}),(0,n.jsx)("div",{className:"content-border-middle"}),(0,n.jsx)(A,{}),(0,n.jsx)("div",{className:"content-border-middle"}),(0,n.jsx)(b,{people:O.people}),(0,n.jsx)("div",{className:"content-border-middle"}),(0,n.jsx)(j,{people:O.people}),(0,n.jsx)("div",{className:"content-border-middle"}),(0,n.jsx)(w,{collabs:J.collabs}),(0,n.jsx)("div",{className:"content-border-middle"}),(0,n.jsx)(y,{})]}),(0,n.jsx)(_.$,{})]})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9704)}])},6490:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/collabs/Ricardo_da_Silva_profile.88cac893ead0395fd35bd730bb7b800a.png",height:460,width:460,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR4nA3KvUrDUBgG4PdL28TYpKRNixQ0oDgIDlUoJIjo5NLFzeroFXgDzl6FYzcFBwcVQUUc6wUIoqBCa0IK6pH8n0/3h4bDByalxHlRkO8HsO0GdH2KoygmKSXo7v5GFpJxeXZCH4+3PLfcxcZ2H/VmE0WegU4vrvnt9Rnjq2MsLK0iCEYQ1Tbs9jySSID2d/Y4FxM2FUG6VuWKrkECGAzOyV3zmHa9FanXTCzOGJTkxOWKAlZVvH9llMcp09HhgUyzFOLliaYrGpfUMmA1oBoWoBCov+Wx1ZrlcvRLHIUw6xZMp/MPDAjxDeqtu7LjbiIWP1RLRjwJQ7S6PTiOQ59jn/8AZ9tvOpXV14IAAAAASUVORK5CYII="}},6632:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Amisha_Singh_profile.8a0838b1ddba0f927e901c8b8daecb41.png",height:1231,width:1227,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA/ElEQVR42hXMP0vDQBgH4N97d0G7tImDiIs4ZXEQwcHJRaGDrn4qV0EHBxexKHQQQQRnEYLgIKht/rUitWJwqb1cLvdKnw/w0Gj8zc45CEGYTjWIAE9JGFNhRtW1hRQC459fdG9uIZ3FXnsXgd+CtRYCDJ5M/nB2fskbvsernuHDo1PWZcnsmIUgote3Hjrde2IGapaURU+U5gNIJUnMml4/RjtcxjxJWlkIcLCziX6SkXMMVWqDNBtCeY4blUGlLb3EMVqqyaayJIqi4DwZ4PjiEc9pgvRrhJOrO/4cfkBrzSrLcoqid6yvLVGw6KPZmMP+9hZ1rh8QhiH+AbtVfpaY1CVXAAAAAElFTkSuQmCC"}},4296:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/David_Meijer_profile.98b068950b855b89c36e769d4da547ad.png",height:2428,width:2383,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA2ElEQVR42jWOv0tCYRSGvz+wwf+gIRoCQSKCGiIIosAhCjMIIoSi4Ra01HKDsuHeyclBuSKCOgjib7y63Of1ft/FZ3mG857zHiOJJAGsJWdZg7MB7EDL2Uxt3yN8KdGJGtuQjFuX6AffGn4UiR6O8c73iOM4u6CUZL1S9amov7szPi/yPJ7uaz6doBTjfljHdL17wqsCr0e7vOVzjPs9JGErZBnVAzVKJ7wXcurUAlmSdGYgCywGXVVvDlU+2FH4/ysHZBXNqKWvSlm1yiXPt9cYY/Tj+wDaAIpY3irSeCNQAAAAAElFTkSuQmCC"}},8021:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Joris_Louwen_profile.fa0e51562fca102fb2906cf3a0d9655a.png",height:765,width:765,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABCklEQVR4nA3PzS4DURgG4PeddNqEtolp+hMaqiRVF9KNhIiFlcQNYGMlqYQgVm7AljtgY2OFpCmLsRAWojHVkrQxZGLMOT0fl/Cw7bWMHgx4vF6W0al5XDRcTOZ+sH/yjJurS3Brc83YMYvu9Zl4HcUg/MV4QWN141Cat3fk0d62iZThm9uQqmqgF+Zw3okh3+nitd8Hd3fqZq5W4+lBXZzgnppj4r6TSRix03ESgFlZXmLKb0vV8uiHGfmIkvCHfcQTKbAyUTS9lsfyTEkWyoZRUJInramsR7GtJOlkHJN30nzofstiRUGiaTRfPuF9eZgtZcFiIfvPNNQiMmRbVDoQX1kciSckiMA/6Ap/tJStfEEAAAAASUVORK5CYII="}},5775:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Justin_van_der_Hooft_profile.fe70cf545f14a03cb5c65598f9bb102e.png",height:4669,width:4467,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBklEQVR42g3Ku0rDYBgG4PdL0hxqEmvBaD2gFgsKdRGF3IEoDt6ECM6u4sU4Oqmro5uHoR1qoUpMSGJaGiFpkwaS/u3wbA9dXdeZY3MIhzFbUzdIlEWMRyGySYrQTyDoao1VDJtOjs+gl0TWH/zD9XlYQQBNySGcH10gSsdot3o4aOxBCTtYNQw4f32URR58tczuPMeFuW9iZ7uBFV3DlBX4jW1UVBncy/snvbV6VN/aRJ7nlJFIRAUt1hQqSQW45lKIIvpGx/MgsBSR72GQBHMJ8gmRIB9esmWpSfevDOb6F6vyKaxpCk0cIsMC6PSpzX7cGN2H+ehaBPcR5u0NdqUR5I9nzAAPdG5NiP0IxAAAAABJRU5ErkJggg=="}},1331:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Kevin_Mildau_profile.333ee565bbc32a6c33d2c94badd80a59.png",height:550,width:550,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABBElEQVR42hXKS07CUBQG4P+01xoeAkqjNRqNBhMlDNSJE3fgFowbcgsuwLkLIDEBowYfCWB84EBFKIKA7aUP23uM3/ij85Mj7oRLbMysUkowZLfK0nMpmS9hYXkT2qtc57umjdtGm98nJrfCbZzd/LL9HbJOGovj03tqfDl8sCWpfFnHtNdjMgxyHR8qiqGV5jUc7hWRGL9gV2/CGFTouVaGoSIEjoRQmssqkuD/nciiYG1wcZYop3QkopiF735SO1QsRz+weA5jfwhrlEH2rQs9nyORTjLWVnTsZPZx/fSAymOfTPSx6EnYV3WIQDcRDSb4qFXBwRCF1BSnhUYXsYdOr4U/iwZ/UpUvguUAAAAASUVORK5CYII="}},1441:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Mitja_Zdouc_profile.fc702704768b45986b080b99a5017681.png",height:2051,width:2052,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42h2KvUrDcBwA75d/0/QrtlVsKa2NKVVB6Oji5OTs4uLmq4hv4OAb+AJSh66i4CI4GkoRVBKkplpbgolNjHLcdCd2qxFXKmUcZ8Q8DAHIZ00O9rYwi3m0leUyttX8j5dnJ1ydn9Jr59B1nWyqBoI7+ZLj/R0MpagWC9LbtEFTaH+DQvC8cbLd3SAOZky818SqN8goQYmkU8GQWqcu/dsHPmZTRu5Yroc+1SUTQ9dIMRKCpyTqHtL3OjzWjpKfxi6uNyRapNmfxnJ340qrbcm8ZLO6ZklORVwMHAb3L2jBdwiAaZaSfEaxCAPe3GfWmzXe/U9+AVBnUxOFor5bAAAAAElFTkSuQmCC"}},3860:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Niek_de_Jonge_profile.e3e5b498dc455fdf51fb3b2c93c301c7.png",height:395,width:414,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABB0lEQVR42gVAz0rCABj/fXOhS41WBK2TGEFgRmxDDLpEB+kxeoxuHYJuvUEvEEHQoUt/qJuHLo4iHZq5crNUXCayzc1PiJmnPx0bHesD1UoZXr8NeWkZvz2b5IzKYhh6aNYMnB0dQt0rYTxykZQEZLPriEcjkNVq8PnpMSvw6UDVEDHh5uEJfctAYb8Eofx8h6uLS8wl0mha3+BwwoXtPNe7HurVBovtlom1FJAWCdHYh/Nl08AP8I8Uet0BCSuZTSj5HIKhi6H7ByGaQk4mUPt04EcEMl4e2bFMrtxekxJbhLQg8f2rCSuapx1dQyy3sXqiazq8WJyc9zeEcRHiVpF2ixomfoAZ6PF3vONw4GcAAAAASUVORK5CYII="}},7810:function(e,t){"use strict";t.Z={src:"/_next/static/image/config/people/Remco_van_Tuel_profile.183d083a94a9398504d012155be251bf.png",height:168,width:154,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR4nAHoABf/AbOrk/7u6+wB5uPkAOnq7AD/+/kA5uPnAKu/0f8BzLiW/tja4gGam6cADf3+APP16QBJVFoAGBwe/wHJsI7+qbG/AEseHwApEAwApqaaABNbbQBIRUIAAaOOd/7e0tIBVjU1APni5QCztZ0AI2mGAFldWf8BrqSQ/tHGyAFLFxMA7ePqAM2qqwA2naAARVFO/wG0r5/+r6erAA3r6QAeCwwArLTBAKnd1wAcIiAAAX1/d/7PvLsBakhAAMPLzgDa4+UAGjtG/0ZDPwABAAAA/gAAAAF+V00ADgL/AK7AvADG5/gAAAAA/+BgadyT2JiWAAAAAElFTkSuQmCC"}},9008:function(e,t,i){e.exports=i(2775)}},function(e){e.O(0,[9774,8523,7112,3543,2888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);