import*as t from"@dropins/tools/preact-compat.js";import{classes as c}from"@dropins/tools/lib.js";import{IllustratedMessage as i,Icon as s,Button as l}from"@dropins/tools/components.js";import{jsx as r}from"@dropins/tools/preact-jsx-runtime.js";import{useText as m}from"@dropins/tools/i18n.js";const p=e=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("g",{clipPath:"url(#clip0_102_196)"},t.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3601 18.16H6.5601L4.8801 3H2.3501M19.6701 19.59C19.6701 20.3687 19.0388 21 18.2601 21C17.4814 21 16.8501 20.3687 16.8501 19.59C16.8501 18.8113 17.4814 18.18 18.2601 18.18C19.0388 18.18 19.6701 18.8113 19.6701 19.59ZM7.42986 19.59C7.42986 20.3687 6.79858 21 6.01986 21C5.24114 21 4.60986 20.3687 4.60986 19.59C4.60986 18.8113 5.24114 18.18 6.01986 18.18C6.79858 18.18 7.42986 18.8113 7.42986 19.59Z",stroke:"currentColor",strokeLinejoin:"round"}),t.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M5.25 6.37L20.89 8.06L20.14 14.8H6.19",stroke:"currentColor",strokeLinejoin:"round"})),t.createElement("defs",null,t.createElement("clipPath",{id:"clip0_102_196"},t.createElement("rect",{vectorEffect:"non-scaling-stroke",width:19.29,height:19.5,fill:"white",transform:"translate(2.3501 2.25)"})))),E=e=>t.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},t.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),t.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),u=({className:e,children:h,ctaLinkURL:a,...n})=>{const o=m({emptyCart:"Cart.EmptyCart.heading",cta:"Cart.EmptyCart.cta"});return r("div",{...n,className:c(["cart-empty-cart",e]),children:r(i,{className:c(["cart-empty-cart__wrapper",e]),"data-testid":"cart-empty-cart",heading:o.emptyCart,icon:r(s,{className:"cart-empty-cart__icon",source:p}),action:a?r(l,{"data-testid":"cart-empty-cart-button",size:"medium",variant:"primary",type:"submit",href:a,children:o.cta},"routeHome"):void 0})})};export{u as E,E as S};
