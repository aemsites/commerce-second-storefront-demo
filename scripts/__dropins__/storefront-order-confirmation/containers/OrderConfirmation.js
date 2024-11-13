import{jsx as n,jsxs as l,Fragment as L}from"@dropins/tools/preact-jsx-runtime.js";import{a as Y,f as I,d as rr,h as er,e as nr}from"../chunks/customerOrder.js";import{events as $}from"@dropins/tools/event-bus.js";import{useState as ar,useEffect as ir}from"@dropins/tools/preact-hooks.js";import{classes as O,getFormValues as tr}from"@dropins/tools/lib.js";import{Icon as J,Button as B,Skeleton as T,SkeletonRow as d,Card as F,InLineAlert as or,Field as M,Input as D,Price as S,Divider as V,CartItem as cr,Image as lr,CartItemSkeleton as R}from"@dropins/tools/components.js";import*as v from"@dropins/tools/preact-compat.js";import{useReducer as sr,useState as U,useCallback as G,useEffect as x}from"@dropins/tools/preact-compat.js";import{Text as u,useText as P}from"@dropins/tools/i18n.js";import"@dropins/tools/fetch-graphql.js";const mr=`
  query isEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`,ur=e=>{if(!(!e||e.length===0))throw Error(e.map(r=>r.message).join(" "))},dr=e=>{throw e instanceof DOMException&&e.name==="AbortError"||$.emit("error",{source:"checkout",type:"network",error:e}),e},fr=async e=>{var t;if(!e)throw new Y;const{data:r,errors:i}=await I(mr,{method:"GET",cache:"no-cache",variables:{email:e}}).catch(dr);return i&&ur(i),!!((t=r.isEmailAvailable)!=null&&t.is_email_available)},hr=()=>{const e=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[r,i]=ar(e());return ir(()=>{let t;const o=()=>{t&&clearTimeout(t),t=setTimeout(()=>i(e()),50)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o),t&&clearTimeout(t)}},[]),r};var C=(e=>(e.ADD_ORDER_REFERENCE="ADD_ORDER_REFERENCE",e.LOADING="LOADING",e.SET_DETAILS="SET_DETAILS",e.ALERT="ALERT",e.DISMISS_ALERT="DISMISS_ALERT",e.DATA_FETCHED="DATA_FETCHED",e.UNKNOWN_ERROR="UNKNOWN_ERROR",e))(C||{}),q=(e=>(e.ERROR="error",e.WARNING="warning",e.SUCCESS="success",e))(q||{}),A=(e=>(e.INVALID_ORDER="invalid_order",e.INVALID_SEARCH="invalid_search",e.UNKNOWN="unknown_error",e))(A||{});function pr(e,r){switch(r.type){case"LOADING":return{...e,isLoading:!0};case"SET_DETAILS":return{...e,details:r.details,alert:r.alert,isOrderFromSearchForm:r.fromSearchForm||!1};case"ALERT":return{...e,isLoading:!1,alert:r.alert};case"DISMISS_ALERT":return{...e,alert:void 0};case"DATA_FETCHED":return{...e,isLoading:!1};case"UNKNOWN_ERROR":return{...e,isLoading:!1};default:return e}}const X=({children:e,className:r})=>hr()!=="small"?n("div",{className:r,children:e}):n(L,{children:e});function _r(e){if(!e)return;const r=e.grandTotal,i=e.isVirtual,t=e.subtotal,o=e.shipping,a=e.totalTax;return{total:{inclTax:{amount:r.value,currency:r.currency}},subtotal:{amount:(t==null?void 0:t.value)||0,currency:(t==null?void 0:t.currency)||"",isTaxIncl:!1},shipping:{amount:(o==null?void 0:o.amount)||0,currency:(o==null?void 0:o.currency)||"",isVirtual:i},tax:{amount:(a==null?void 0:a.value)||0,currency:(a==null?void 0:a.currency)||""}}}const yr=({state:e})=>{const{isLoading:r,details:i}=e,t=_r(i);return l(L,{children:[n(xr,{isLoading:r,summary:t}),n(zr,{isLoading:r,details:i})]})},vr=({state:e})=>n(X,{className:"order-confirmation__aside",children:n(yr,{state:e})}),gr=({state:e,routeHome:r,routeSupport:i,onSignUpClick:t})=>{const{details:o,isLoading:a}=e,m=o==null?void 0:o.billingAddress,c=(m==null?void 0:m.firstName)||"",s=(o==null?void 0:o.number)||"",f=(o==null?void 0:o.status)||"";return l(L,{children:[(a||!a&&(!!c&&!!s))&&n(Sr,{isLoading:a,customerName:c,orderNumber:s,orderStatus:f,onSignUpClick:t}),n(br,{isLoading:a,orderDetails:o}),n(Tr,{isLoading:a,routeHome:r,routeSupport:i})]})},Nr=({state:e,routeHome:r,routeSupport:i,dismissAlert:t,onOrderSearch:o,onSignUpClick:a})=>n(X,{className:"order-confirmation__main",children:n(gr,{state:e,routeHome:r,routeSupport:i,dismissAlert:t,onOrderSearch:o,onSignUpClick:a})}),Or=({className:e,state:r,dismissAlert:i,routeHome:t,routeSupport:o,onOrderSearch:a,onSignUpClick:m})=>{const{details:c,alert:s,isLoading:f}=r,g=!!(c!=null&&c.number),E=s&&s.code===A.INVALID_ORDER,N=s&&s.code===A.INVALID_SEARCH;return!f&&!g?n("div",{className:O(["order-confirmation",e]),children:n(kr,{alert:E||N?{heading:s.message,description:"",type:s.type,onDismiss:i}:void 0,onOrderSearch:a})}):l("div",{className:O(["order-confirmation",e]),children:[n(Nr,{state:r,dismissAlert:i,routeHome:t,routeSupport:o,onOrderSearch:a,onSignUpClick:m}),n(vr,{state:r})]})},Er=e=>v.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("g",{clipPath:"url(#clip0_4797_15077)"},v.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M10.15 20.85L1.5 17.53V6.63L10.15 10V20.85Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),v.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M1.5 6.63001L10.15 3.20001L18.8 6.63001L10.15 10L1.5 6.63001Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),v.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.17969 4.77002L14.8297 8.15002V11.47",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),v.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.7896 12.64V6.63L10.1396 10V20.85L14.8296 19.05",stroke:"currentColor",strokeLinejoin:"round"}),v.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M15.71 17.26C15.71 15.38 17.23 13.86 19.11 13.86C20.99 13.86 22.51 15.38 22.51 17.26C22.51 19.14 20.99 20.66 19.11 20.66C17.23 20.66 15.71 19.14 15.71 17.26Z",stroke:"currentColor"}),v.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M17.4805 17.49L18.5605 18.41L20.7205 16.33",stroke:"currentColor",strokeLinecap:"square",strokeLinejoin:"round"})),v.createElement("defs",null,v.createElement("clipPath",{id:"clip0_4797_15077"},v.createElement("rect",{width:22,height:18.65,fill:"white",transform:"translate(1 2.70001)"})))),Cr=e=>v.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},v.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),Sr=({isLoading:e,customerName:r,orderNumber:i,orderStatus:t,onSignUpClick:o})=>e?n(wr,{}):l("div",{className:"order-confirmation-header order-confirmation__card",children:[n(J,{source:Er,size:"64",className:"order-confirmation-header__icon"}),n("h1",{className:"order-confirmation-header__title",children:r?n(u,{id:"OrderConfirmation.Header.title",fields:{name:r}}):n(u,{id:"OrderConfirmation.Header.defaultTitle"})}),i&&l("p",{className:"order-confirmation-header__order",children:[n(u,{id:"OrderConfirmation.Header.order",fields:{order:i}}),t!==void 0&&t!==""&&l("span",{className:"order-confirmation-header__status",children:[" ","(",t,")"]})]}),o&&l("div",{className:"order-confirmation-create-account",children:[n("p",{className:"order-confirmation-create-account__message",children:n(u,{id:"OrderConfirmation.Header.CreateAccount.message"})}),n(B,{"data-testid":"create-account-button",className:"order-confirmation-create-account__button",size:"medium",variant:"secondary",type:"submit",onClick:o,children:n(u,{id:"OrderConfirmation.Header.CreateAccount.button"})})]})]}),wr=()=>l(T,{"data-testid":"order-confirmation-header-skeleton",className:"order-confirmation-header",children:[n(d,{variant:"empty",size:"xlarge",fullWidth:!0}),n(d,{variant:"empty",size:"medium"}),n(d,{variant:"empty",size:"medium"}),n(d,{variant:"empty",size:"medium"}),n(d,{variant:"empty",size:"medium"}),n(d,{variant:"empty",size:"medium"}),n(d,{size:"small",fullWidth:!0}),n(d,{variant:"heading",size:"xsmall",fullWidth:!0})]}),kr=({alert:e,onOrderSearch:r})=>{const i=P({email:"OrderConfirmation.OrderSearchForm.email",postcode:"OrderConfirmation.OrderSearchForm.postcode",number:"OrderConfirmation.OrderSearchForm.orderNumber"}),t=o=>{o.preventDefault();const a=tr(o.target);r==null||r(a)};return l(F,{variant:"secondary",className:"order-confirmation-order-search-form order-confirmation__card",children:[n("h2",{className:"order-confirmation-order-search-form__title",children:n(u,{id:"OrderConfirmation.OrderSearchForm.title"})}),n("p",{children:n(u,{id:"OrderConfirmation.OrderSearchForm.description"})}),e&&n(or,{className:"order-confirmation-order-search-form__alert","data-testid":"order-confirmation-alert",icon:n(J,{source:Cr}),...e}),l("form",{className:"order-confirmation-order-search-form__fields",onSubmit:t,children:[l("div",{className:"order-confirmation-order-search-form__fields-columns",children:[n(M,{children:n(D,{id:"order-email",name:"email",type:"email",autocomplete:"email",placeholder:i.email,floatingLabel:i.email,required:!0,"aria-label":i.email,"aria-required":!0})}),n(M,{children:n(D,{id:"postcode",name:"postcode",type:"text",autocomplete:"postal-code",placeholder:i.postcode,floatingLabel:i.postcode,required:!1,"aria-label":i.postcode,"aria-required":!0})})]}),n(M,{children:n(D,{id:"order-number",name:"number",type:"text",placeholder:i.number,floatingLabel:i.number,required:!0,"aria-label":i.number,"aria-required":!0})}),n(B,{className:"order-confirmation-order-search-form__button",size:"medium",variant:"primary",type:"submit",children:n(u,{id:"OrderConfirmation.OrderSearchForm.button"})},"logIn")]})]})},br=({isLoading:e,orderDetails:r})=>{var w,z,j,Q;if(e)return n(Lr,{});const i=r&&(r==null?void 0:r.number),t=(r==null?void 0:r.email)||"",o=r&&t!=="",a=r==null?void 0:r.shippingAddress,m=r&&a,c=r==null?void 0:r.billingAddress,s=r&&c,f=(w=r==null?void 0:r.shipping)==null?void 0:w.code,g=(z=r==null?void 0:r.shipping)==null?void 0:z.amount,E=(j=r==null?void 0:r.shipping)==null?void 0:j.currency,N=r&&f&&E&&g!==void 0,p=r==null?void 0:r.payments,h=p&&p.length>0,_=h?(Q=p[0])==null?void 0:Q.name:"",y=r&&h&&_!=="";return l(F,{"data-testid":"order-confirmation-details",variant:"secondary",className:"order-confirmation-details order-confirmation__card",children:[n("div",{className:"order-confirmation-details__header",children:n("h2",{className:"order-confirmation-details__title",children:n(u,{id:"OrderConfirmation.Details.title"})})}),l("div",{className:"order-confirmation-details__contact",children:[!r||o?n("h3",{children:n(u,{id:"OrderConfirmation.Details.contact"})}):null,o?n("p",{children:t}):null,i?null:n(b,{rows:1,"data-testid":"order-confirmation-details-contact-skeleton"})]}),l("div",{className:"order-confirmation-details__information",children:[l("div",{className:"order-confirmation-details__shipping_address",children:[!i||m?n("h3",{children:n(u,{id:"OrderConfirmation.Details.shippingAddress"})}):null,m?l(L,{children:[l("p",{children:[a==null?void 0:a.firstName," ",a==null?void 0:a.lastName]}),a==null?void 0:a.street.map((k,W)=>n("p",{children:k},W)),l("p",{children:[a==null?void 0:a.city," ",a==null?void 0:a.region," ",a==null?void 0:a.postCode,", ",a==null?void 0:a.country]}),a==null?void 0:a.customAttributes.map(k=>n("p",{children:k.value},k.code))]}):null,i?null:n(b,{rows:3,"data-testid":"order-confirmation-shipping-address-skeleton"})]}),l("div",{className:"order-confirmation-details__billing_address",children:[!i||s?n("h3",{children:n(u,{id:"OrderConfirmation.Details.billingAddress"})}):null,s?l(L,{children:[l("p",{children:[c==null?void 0:c.firstName," ",c==null?void 0:c.lastName]}),c==null?void 0:c.street.map((k,W)=>n("p",{children:k},W)),l("p",{children:[c==null?void 0:c.city," ",c==null?void 0:c.region," ",c==null?void 0:c.postCode,", ",c==null?void 0:c.country]}),c==null?void 0:c.customAttributes.map(k=>n("p",{children:k.value},k.code))]}):null,i?null:n(b,{rows:3,"data-testid":"order-confirmation-billing-address-skeleton"})]}),l("div",{className:"order-confirmation-details__shipping-method",children:[!i||N?n("h3",{children:n(u,{id:"OrderConfirmation.Details.shippingMethod"})}):null,N?n(L,{children:g===0?n("p",{className:"order-confirmation-order-summary__price",children:n(u,{id:"OrderConfirmation.Details.freeShipping"})}):l("p",{children:[n(S,{amount:g,currency:E})," ",f]})}):null,i?null:n(b,{rows:1,"data-testid":"order-confirmation-details-shipping-method-skeleton"})]}),l("div",{className:"order-confirmation-details__payment-method",children:[!i||y?n("h3",{children:n(u,{id:"OrderConfirmation.Details.paymentMethod"})}):null,y&&n("p",{children:_}),i?null:n(b,{rows:1,"data-testid":"order-confirmation-details-payment-method-skeleton"})]})]})]})},Lr=()=>n(F,{variant:"secondary",className:"order-confirmation-details",children:l(T,{"data-testid":"order-confirmation-details-skeleton",children:[n(d,{variant:"heading",size:"medium",fullWidth:!0}),n(d,{size:"medium"}),n(d,{variant:"empty",size:"medium"}),n(d,{size:"xlarge"}),n(d,{size:"xlarge"}),n(d,{size:"xlarge"}),n(d,{size:"xlarge"})]})}),Tr=({isLoading:e,className:r,routeHome:i,routeSupport:t,...o})=>e?n(Rr,{}):l("div",{className:O(["order-confirmation-footer",r]),...o,children:[(i==null?void 0:i())&&n(B,{"data-testid":"order-confirmation-footer__continue-button",className:"order-confirmation-footer__continue-button",size:"medium",variant:"primary",type:"submit",href:i==null?void 0:i(),children:n(u,{id:"OrderConfirmation.Footer.continueShopping"})},"continueShopping"),l("p",{className:"order-confirmation-footer__contact-support",children:[n(u,{id:"OrderConfirmation.Footer.help"})," ",(t==null?void 0:t())&&n("a",{href:t==null?void 0:t(),rel:"noreferrer",className:"order-confirmation-footer__contact-support-link","data-testid":"order-confirmation-footer__contact-support-link",children:n(u,{id:"OrderConfirmation.Footer.contactSupport"})})]})]}),Rr=()=>l(T,{className:"order-confirmation-footer",children:[n(d,{size:"small",fullWidth:!0}),n(d,{variant:"heading",size:"xsmall",fullWidth:!0})]}),b=({rows:e,size:r="xsmall",...i})=>n(T,{className:"static-skeleton",...i,children:Array.from(Array(e).keys()).map(t=>n(d,{variant:"heading",size:r,fullWidth:!0},t))}),xr=({className:e,isLoading:r,summary:i,variant:t="secondary"})=>{if(r)return n(Ar,{});const{total:o,subtotal:a,shipping:m,tax:c}=i??{};return l(F,{className:O(["order-confirmation-order-summary",e]),variant:t,children:[n("h2",{className:"order-confirmation-order-summary__title",children:n(u,{id:"OrderConfirmation.OrderSummary.title"})}),n(V,{variant:"primary"}),a!=null?l("div",{"data-testid":"order-summary-subtotal",className:"order-confirmation-order-summary__row",children:[n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.subtotal"})}),n(S,{amount:a==null?void 0:a.amount,currency:a==null?void 0:a.currency,className:O(["order-confirmation-order-summary__price",e])})]}):n(b,{rows:1,"data-testid":"order-confirmation-order-summary-subtotal-skeleton"}),(a==null?void 0:a.isTaxIncl)&&n("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.includingTaxes"})})}),m!=null?m.isVirtual?null:l("div",{"data-testid":"order-summary-shipping",className:"order-confirmation-order-summary__row",children:[n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.shipping"})}),m.amount===0?n("p",{className:"order-confirmation-order-summary__price",children:n(u,{id:"OrderConfirmation.OrderSummary.freeShipping"})}):n(S,{amount:m.amount,currency:m.currency,className:O(["order-confirmation-order-summary__price",e])})]}):n(b,{rows:1,"data-testid":"order-confirmation-order-summary-shipping-skeleton"}),c!=null&&!c.breakdown&&l("div",{"data-testid":"order-summary-tax",className:"order-confirmation-order-summary__row",children:[n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.tax"})}),n(S,{amount:c.amount,currency:c.currency,className:O(["order-confirmation-order-summary__price",e])})]}),c!=null&&c.breakdown&&l(L,{children:[n(V,{variant:"secondary"}),n("div",{className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--margin-bottom",children:n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.taxBreakdown"})})}),c.breakdown.map(s=>l("div",{"data-testid":"order-summary-tax-breakdown",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:[n("p",{children:s.label}),n(S,{amount:s.amount.value,currency:s.amount.currency,className:O(["order-confirmation-order-summary__price",e])})]},s.label)),l("div",{"data-testid":"order-summary-tax-breakdown-total",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--strong order-confirmation-order-summary__row--margin-top",children:[n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.taxTotal"})}),n(S,{amount:c.amount,currency:c.currency,className:O(["order-confirmation-order-summary__price",e])})]}),n(V,{variant:"secondary"})]}),o!=null?l("div",{"data-testid":"order-summary-total-incl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--emphasized",children:[n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.total"})}),n(S,{amount:o==null?void 0:o.inclTax.amount,currency:o==null?void 0:o.inclTax.currency,className:O(["order-confirmation-order-summary__price",e])})]}):n(b,{rows:1,"data-testid":"order-confirmation-order-summary-total-skeleton"}),(o==null?void 0:o.exclTax)!=null&&l("div",{"data-testid":"order-summary-total-excl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:[n("p",{children:n(u,{id:"OrderConfirmation.OrderSummary.totalExclTax"})}),n(S,{amount:o.exclTax.amount,currency:o.exclTax.currency,className:O(["order-confirmation-order-summary__price",e])})]})]})},Ar=()=>l(T,{"data-testid":"order-confirmation-order-summary-skeleton",className:"order-confirmation-order-summary",children:[n(d,{variant:"heading",size:"small"}),n(d,{variant:"empty",size:"small"}),n(d,{variant:"empty",size:"small"}),n(d,{variant:"empty",size:"small"}),n(d,{variant:"heading",size:"small",fullWidth:!0,lines:3})]}),Fr=({className:e,item:r,taxIncluded:i=!1})=>{const t=P({Sender:"OrderConfirmation.CartSummary.GiftCard.sender",Recipient:"OrderConfirmation.CartSummary.GiftCard.recipient"});let o=r.regularPrice,a=r.total;i&&(o=r.priceInclTax,a=r.totalInclTax);const m={..."configurableOptions"in r?r.configurableOptions:{},..."senderName"in r&&r.senderName?{[t.Sender]:r.senderName}:{},..."senderEmail"in r&&r.senderEmail?{[t.Sender]:r.senderEmail}:{},..."recipientName"in r&&r.recipientName?{[t.Recipient]:r.recipientName}:{},..."recipientEmail"in r&&r.recipientEmail?{[t.Recipient]:r.recipientEmail}:{}};return n("div",{className:O(["order-confirmation-cart-summary-item",e]),children:n(cr,{"data-testid":"cart-summary-item",taxIncluded:i,title:n("div",{"data-testid":"product-name",children:r.product.name}),sku:n("div",{children:r.product.sku}),quantity:r.totalQuantity,image:n(lr,{src:r.thumbnail.url,alt:r.thumbnail.label,loading:"lazy",width:"80",height:"80",params:{width:80}}),configurations:m,price:n(S,{amount:r.regularPrice.value,currency:o.currency,weight:"normal"}),total:l(L,{children:[n(S,{amount:r.regularPrice.value*r.totalQuantity,currency:o.currency,variant:r.discounted?"strikethrough":"default"}),r.discounted&&n(S,{amount:a.value,currency:a.currency,sale:!0})]})},r.id)})},zr=({isLoading:e,details:r})=>{if(e)return n(Vr,{});const i=!1,t=r.items,o=t.length;return n("div",{className:"order-confirmation-cart-summary",children:l(F,{variant:"secondary",children:[n("div",{className:"order-confirmation-cart-summary__heading",children:l("h2",{className:"order-confirmation-cart-summary__title",children:[n(u,{id:"OrderConfirmation.CartSummary.title"})," (",o,")"]})}),n(V,{className:"order-confirmation-cart-summary__divider-top",variant:"primary"}),n("div",{className:"order-confirmation-cart-summary__items",children:t==null?void 0:t.map(a=>n(Fr,{item:a,taxIncluded:i},a.id))})]})})},Vr=()=>l(T,{"data-testid":"cart-summary-skeleton",className:"order-confirmation-cart-summary",style:{gridTemplateColumns:"1fr"},children:[n(d,{variant:"heading",fullWidth:!0,size:"medium"}),n(R,{}),n(R,{}),n(R,{}),n(R,{}),n(R,{})]});function H(e){return{region:{region_id:e!=null&&e.regionId?Number(e==null?void 0:e.regionId):null,region:e==null?void 0:e.region},city:e==null?void 0:e.city,company:e==null?void 0:e.company,country_code:e==null?void 0:e.country,firstname:e==null?void 0:e.firstName,lastname:e==null?void 0:e.lastName,middlename:e==null?void 0:e.middleName,postcode:e==null?void 0:e.postCode,street:e==null?void 0:e.street,telephone:e==null?void 0:e.telephone,custom_attributesV2:e==null?void 0:e.customAttributes.map(r=>({attribute_code:r.code,value:r.value}))}}const Wr=e=>e||0,Mr=e=>({name:(e==null?void 0:e.name)||"",sku:(e==null?void 0:e.sku)||"",productType:(e==null?void 0:e.__typename)||""});function Dr(e){if(!e||!("selected_options"in e))return;const r={};for(const i of e.selected_options)r[i.label]=i.value;return r}const Gr=e=>e?e.map(r=>{var i,t,o,a,m,c,s,f;return{type:r==null?void 0:r.__typename,id:r==null?void 0:r.id,discounted:!1,total:{value:(r==null?void 0:r.product_sale_price.value)*(r==null?void 0:r.quantity_ordered),currency:r==null?void 0:r.product_sale_price.currency},totalInclTax:{value:(r==null?void 0:r.product_sale_price.value)*(r==null?void 0:r.quantity_ordered),currency:r==null?void 0:r.product_sale_price.currency},price:{value:r==null?void 0:r.product_sale_price.value,currency:r==null?void 0:r.product_sale_price.currency},priceInclTax:{value:r==null?void 0:r.product_sale_price.value,currency:r==null?void 0:r.product_sale_price.currency},totalQuantity:Wr(r==null?void 0:r.quantity_ordered),regularPrice:{value:r==null?void 0:r.product_sale_price.value,currency:r==null?void 0:r.product_sale_price.currency},product:Mr(r==null?void 0:r.product),thumbnail:{label:((t=(i=r==null?void 0:r.product)==null?void 0:i.thumbnail)==null?void 0:t.label)||"",url:((a=(o=r==null?void 0:r.product)==null?void 0:o.thumbnail)==null?void 0:a.url)||""},giftCard:(r==null?void 0:r.__typename)==="GiftCardOrderItem"?{senderName:((m=r.gift_card)==null?void 0:m.sender_name)||"",senderEmail:((c=r.gift_card)==null?void 0:c.sender_email)||"",recipientEmail:((s=r.gift_card)==null?void 0:s.recipient_email)||"",recipientName:((f=r.gift_card)==null?void 0:f.recipient_name)||""}:void 0,configurableOptions:Dr(r)}}):[];function Hr(e){return e!==null&&e.value!==void 0}const Z=e=>e?{city:e.city,company:e.company||"",country:e.country_code||"",firstName:e.firstname,middleName:e.middlename||"",lastName:e.lastname,postCode:e.postcode||"",regionId:e.region_id||"",region:e.region||"",street:e.street.filter(r=>r!==null),telephone:e.telephone||"",customAttributes:e.custom_attributesV2.filter(Hr).map(r=>({code:r.code,value:r.value}))}:null,K=e=>{var m,c,s,f,g,E,N,p,h;const r=(m=e.payment_methods)==null?void 0:m[0],i=(r==null?void 0:r.type)??"",t=(r==null?void 0:r.name)??"",o=Gr(e.items),a=o.reduce((_,y)=>_+y.totalQuantity,0);return{status:e.status,isVirtual:e.is_virtual,email:e.email??"",items:o,number:e.number,grandTotal:{value:((c=e.total)==null?void 0:c.grand_total.value)??0,currency:((s=e.total)==null?void 0:s.grand_total.currency)||""},totalQuantity:a,totalTax:{value:((f=e.total)==null?void 0:f.total_tax.value)??0,currency:((g=e.total)==null?void 0:g.total_tax.currency)||""},subtotal:{value:((E=e.total)==null?void 0:E.subtotal.value)??0,currency:((N=e.total)==null?void 0:N.subtotal.currency)||""},shipping:{amount:((p=e.total)==null?void 0:p.total_shipping.value)??0,currency:((h=e.total)==null?void 0:h.total_shipping.currency)||"",code:e.shipping_method??""},payments:[{code:i,name:t}],shippingAddress:Z(e.shipping_address),billingAddress:Z(e.billing_address)}};function qr({orderRef:e,orderData:r}){const[i,t]=sr(pr,{isLoading:!1,orderData:r,orderRef:e,details:null,isOrderFromSearchForm:!1}),[o,a]=U(),[m,c]=U(),s=P({invalidOrder:"OrderConfirmation.Errors.invalidOrder",invalidSearch:"OrderConfirmation.Errors.invalidSearch",pageNotFound:"OrderConfirmation.Errors.pageNotFound",unknown:"OrderConfirmation.Errors.unknown"}),f=G(h=>{switch(h){case"Invalid order":case"Order not found":case"We couldn't locate an order with the information provided.":return{type:q.WARNING,code:A.INVALID_ORDER,message:s.invalidOrder};case"Invalid search":return{type:q.WARNING,code:A.INVALID_SEARCH,message:s.invalidSearch}}},[s.invalidOrder,s.invalidSearch]),g=()=>{t({type:C.DISMISS_ALERT})},E=function(h){N(h)};x(()=>{const h=$.on("authenticated",_=>{a(_)},{eager:!0});return()=>{h==null||h.off()}},[]);const N=G(h=>{rr(h).then(_=>{const w=!!(_!=null&&_.number)?void 0:f("Invalid search");t({type:C.SET_DETAILS,fromSearchForm:!0,alert:w,details:K(_)})}).catch(()=>{const _=f("Invalid search");t({type:C.SET_DETAILS,details:null,alert:_})})},[f]),p=G(h=>{(o?er:nr)(h).then(y=>{const z=!!(y!=null&&y.number)?void 0:f("Invalid order");t({type:C.SET_DETAILS,details:K(y),alert:z})}).catch(y=>{const w=f(y.message);if(!w){console.error(y),t({type:C.UNKNOWN_ERROR});return}t({type:C.ALERT,alert:w})})},[o,f]);return x(()=>{r&&(t({type:C.LOADING}),t({type:C.SET_DETAILS,details:r}))},[r]),x(()=>{r||!i.orderRef||o===void 0||(t({type:C.LOADING}),p(i.orderRef))},[o,p,r,i.orderRef]),x(()=>{i.details&&fr(i.details.email).then(h=>c(!h)).catch(()=>c(!0))},[i.details]),x(()=>{!i.details||m===void 0||t({type:C.DATA_FETCHED})},[m,i.details]),{state:i,authenticated:o,isEmailAssociatedWithAccount:m,handleOrderSearch:E,dismissAlert:g}}const Xr=({onSignUpClick:e,orderData:r,orderRef:i,routeHome:t,routeSupport:o})=>{const{state:a,authenticated:m,isEmailAssociatedWithAccount:c,handleOrderSearch:s,dismissAlert:f}=qr({orderRef:i,orderData:r});if(m===void 0)return null;const E=e&&!m&&!a.isOrderFromSearchForm&&c===!1?()=>{if(!a.details)return;const N=a.details.shippingAddress,p=a.details.billingAddress,h=[{code:"firstname",defaultValue:(p==null?void 0:p.firstName)||""},{code:"lastname",defaultValue:(p==null?void 0:p.lastName)||""},{code:"email",defaultValue:a.details.email||""}];let _;if(N){const y={...H(N),default_shipping:!0};_=[{...H(p),default_billing:!0},y]}else _=[{...H(p),default_billing:!0,default_shipping:!0}];e({inputsDefaultValueSet:h,addressesData:_})}:void 0;return n(Or,{state:a,dismissAlert:f,onOrderSearch:s,routeHome:t,routeSupport:o,onSignUpClick:E})};export{Xr as OrderConfirmation,Xr as default};