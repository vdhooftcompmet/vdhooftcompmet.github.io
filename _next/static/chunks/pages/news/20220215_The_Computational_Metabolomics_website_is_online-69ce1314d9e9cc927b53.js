(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{1706:function(e,t,n){"use strict";n.d(t,{$:function(){return s}});var r=n(5893),a=(n(7294),n(1664)),o="/_next/static/image/config/logo/wur_logo_small.d8950f348b1906c131ed6f1342d0a11b.png",s=function(){return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("div",{className:"content-border-footer"}),(0,r.jsx)("div",{className:"container text-muted text-center pt-2 px-5",children:(0,r.jsxs)("small",{children:["\xa9 2022 \xa0",(0,r.jsx)(a.default,{href:"https://github.com/vdhooftcompmet/",children:(0,r.jsx)("a",{children:"Van der Hooft Computational Metabolomics Group"})})]})}),(0,r.jsxs)("div",{className:"container text-muted text-center px-5",children:[(0,r.jsxs)("small",{children:["Embedded in the \xa0",(0,r.jsx)(a.default,{href:"https://www.wur.nl/en/Research-Results/Chair-groups/Plant-Sciences/Bioinformatics.htm",children:"Bioinformatics Group"}),"\xa0 of the Plant Sciences Group at WUR"]}),"\xa0",(0,r.jsx)(a.default,{href:"https://www.wur.nl/",children:(0,r.jsx)("img",{className:"wur_footer_logo",src:o,alt:"wur_logo_small"})})]})]})}},2167:function(e,t,n){"use strict";var r=n(3038),a=n(862);t.default=void 0;var o=a(n(7294)),s=n(9414),c=n(4651),i=n(7426),l={};function u(e,t,n,r){if(e&&(0,s.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=(0,c.useRouter)(),f=o.default.useMemo((function(){var t=(0,s.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,s.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,v=e.shallow,x=e.scroll,w=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var b=(t=o.Children.only(p))&&"object"===typeof t&&t.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),g=r(j,2),_=g[0],y=g[1],N=o.default.useCallback((function(e){_(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,_]);(0,o.useEffect)((function(){var e=y&&n&&(0,s.isLocalURL)(d),t="undefined"!==typeof w?w:a&&a.locale,r=l[d+"%"+h+(t?"%"+t:"")];e&&!r&&u(a,d,h,{locale:t})}),[h,d,y,w,n,a]);var E={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:o,locale:i,scroll:c}))}(e,a,d,h,m,v,x,w)},onMouseEnter:function(e){(0,s.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof w?w:a&&a.locale,C=a&&a.isLocaleDomain&&(0,s.getDomainLocale)(h,M,a&&a.locales,a&&a.domainLocales);E.href=C||(0,s.addBasePath)((0,s.addLocale)(h,M,a&&a.defaultLocale))}return o.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!s,i=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],h=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!s&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[h,f]};var a=n(7294),o=n(3447),s="undefined"!==typeof IntersectionObserver;var c=new Map},5396:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(5893),a=(n(7294),n(1664)),o=n(1706);function s(){return(0,r.jsxs)("div",{className:"page-container",children:[(0,r.jsx)("div",{className:"content-wrap",children:(0,r.jsxs)("div",{className:"news-item",children:[(0,r.jsxs)("div",{className:"my-4",children:[(0,r.jsx)("div",{className:"text-muted",children:(0,r.jsx)(a.default,{href:"../#news",children:(0,r.jsx)("a",{children:"Main..."})})}),(0,r.jsx)("div",{className:"text-mutedz",children:(0,r.jsx)(a.default,{href:"../archive",children:(0,r.jsx)("a",{children:"Archive..."})})})]}),(0,r.jsx)("div",{className:"message-card",children:(0,r.jsxs)("div",{className:"message",children:[(0,r.jsx)("a",{className:"title",children:"The Computational Metabolomics website is online"}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{className:"date",children:"2022-02-15"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{className:"description",children:"Today we launch our new Computational Metabolomics website! Here you can find everything you want to know about the Van der Hooft Group. Do check out the About section to get acquainted with our research. Happy to connect!"}),(0,r.jsx)("br",{})]})})]})}),(0,r.jsx)(o.$,{})]})}},1944:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/20220215_The_Computational_Metabolomics_website_is_online",function(){return n(5396)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=1944,e(e.s=t);var t}));var t=e.O();_N_E=t}]);