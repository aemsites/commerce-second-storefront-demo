(function(i,r){try{if(typeof document<"u"){const a=document.createElement("style"),n=r.styleId;for(const t in r.attributes)a.setAttribute(t,r.attributes[t]);a.setAttribute("data-dropin",n),a.appendChild(document.createTextNode(i));const e=document.querySelector('style[data-dropin="sdk"]');if(e)e.after(a);else{const t=document.querySelector('link[rel="stylesheet"], style');t?t.before(a):document.head.append(a)}}}catch(a){console.error("dropin-styles (injectCodeFunction)",a)}})(".cart-empty-cart{container-type:inline-size;container-name:cart}.cart-empty-cart__wrapper .dropin-card--secondary{display:grid;grid-auto-rows:min-content;justify-content:center;text-align:center}@container cart (width < 737px){.cart-empty-cart__wrapper .dropin-card{border:unset;border-style:hidden}}.cart-cart{container-type:inline-size;container-name:cart}.cart-cart__wrapper{display:grid;grid-template-rows:auto 1fr;grid-gap:var(--spacing-medium)}.cart-cart__heading{display:grid;row-gap:var(--spacing-xsmall);padding:var(--spacing-medium);padding-bottom:0;font:var(--type-headline-1-font);letter-spacing:var(--type-headline-1-letter-spacing);color:var(--color-neutral-800)}.cart-cart__heading-divider{width:100%;margin:var(--spacing-xxsmall) 0 0 0}.cart-cart__content{display:grid;grid-template-columns:1fr;padding:0 var(--spacing-medium)}.cart-cart__empty-cart{justify-self:center;align-self:center;width:100%;max-width:800px}.cart-cart__price-summary{padding:var(--spacing-small) var(--spacing-medium);background-color:var(--color-neutral-200)}.dropin-price-summary__shipping--zip,.dropin-price-summary__shipping--state{background-color:var(--color-neutral-50)}@container cart (width >= 1024px){.cart-cart__wrapper{grid-template-columns:repeat(var(--grid-3-columns),1fr);grid-column-gap:var(--grid-3-gutters);margin:0 var(--grid-3-margins)}.cart-cart__heading{padding:var(--spacing-medium) 0 0 0}.cart-cart__content{padding:0}.cart-cart__heading,.cart-cart__content{grid-column:1 / span 8}.cart-cart__price-summary{grid-row:1 / span 3;grid-column:9 / span 4;padding:var(--spacing-medium);height:min-content}.cart-cart__heading--full-width,.cart-cart__content--empty,.cart-cart__content--full-width{grid-column:1 / span 12}}.cart-mini-cart{display:flex;flex-direction:column;height:100%;padding:var(--spacing-small) var(--spacing-small) var(--spacing-medium);box-sizing:border-box}.cart-mini-cart__empty-cart{width:100%;max-width:800px;height:100%;display:flex;flex-direction:column;justify-content:center;align-self:center}.cart-mini-cart__heading{display:grid;row-gap:var(--spacing-xsmall);font:var(--type-headline-2-default-font);letter-spacing:var(--type-headline-2-default-letter-spacing)}.cart-mini-cart__heading-divider{width:100%;margin:var(--spacing-xxsmall) 0 0 0}.cart-mini-cart__products{flex:1;overflow-y:auto;max-height:100%;padding-top:var(--spacing-medium);padding-bottom:var(--spacing-medium)}.cart-mini-cart__products .dropin-cart-item__configurations li{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.cart-mini-cart__footer{display:grid;grid-auto-flow:row;gap:var(--spacing-small);padding-top:var(--spacing-small);row-gap:var(--spacing-xsmall)}.cart-mini-cart__footer__estimated-total{font:var(--type-body-1-emphasized-font);letter-spacing:var(--type-body-1-emphasized-letter-spacing);display:grid;grid-template:max-content / 1fr auto;gap:var(--spacing-xsmall)}.cart-mini-cart__footer__estimated-total-excluding-taxes{font:var(--type-body-2-default-font);letter-spacing:var(--type-body-2-default-letter-spacing);display:grid;grid-template:max-content / 1fr auto;gap:var(--spacing-xsmall);color:var(--color-neutral-700)}.cart-mini-cart__footer__ctas{display:grid;grid-auto-flow:row;gap:var(--spacing-xsmall);padding-top:var(--spacing-small)}",{styleId:"Cart"});
import{deepmerge as u,Render as l}from"@dropins/tools/lib.js";import{useState as f,useEffect as p}from"@dropins/tools/preact-hooks.js";import{UIProvider as m}from"@dropins/tools/components.js";import{events as d}from"@dropins/tools/event-bus.js";import"./chunks/resetCart.js";import{jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{c as g}from"./chunks/getStoreConfig.js";import"@dropins/tools/fetch-graphql.js";const h={Cart:{heading:"Shopping Cart"},MiniCart:{heading:"Shopping Cart ({count})",subtotal:"Subtotal",subtotalExcludingTaxes:"Subtotal excluding taxes",cartLink:"View Cart",checkoutLink:"Checkout"},EmptyCart:{heading:"Your cart is empty",cta:"Start shopping"},PriceSummary:{taxToBeDetermined:"TBD",checkout:"Checkout",orderSummary:"Order Summary",estimatedShippingForm:{country:{placeholder:"Country"},state:{placeholder:"State"},zip:{placeholder:"Zip Code"},apply:{label:"Apply"}},freeShipping:"Free"},CartItem:{discountedPrice:"Discounted Price",download:"file",message:"Note",recipient:"To",regularPrice:"Regular Price",sender:"From",file:"{count} file",files:"{count} files",lowInventory:"Only {count} left!",insufficientQuantity:"Only {inventory} of {count} in stock",insufficientQuantityGeneral:"Not enough items for sale"}},y={Cart:h},C={default:y},S=({children:r})=>{var o;const[e,a]=f(),c=(o=g.getConfig())==null?void 0:o.langDefinitions;p(()=>{const t=d.on("locale",i=>{i!==e&&a(i)},{eager:!0});return()=>{t==null||t.off()}},[e]);const s=u(C,c??{});return n(m,{lang:e,langDefinitions:s,children:r})},T=new l(n(S,{}));export{T as render};
