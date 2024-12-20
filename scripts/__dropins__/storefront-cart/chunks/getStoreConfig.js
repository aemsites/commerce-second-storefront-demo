/*! Copyright 2024 Adobe
All Rights Reserved. */
import{events as p}from"@dropins/tools/event-bus.js";import{s,d as M,f,h as d}from"./resetCart.js";import{Initializer as N,merge as U}from"@dropins/tools/lib.js";import{CART_FRAGMENT as h}from"../fragments.js";import{a as D}from"./persisted-data.js";const w=new N({init:async r=>{const t={disableGuestCart:!1,...r};w.config.setConfig(t),m().catch(console.error)},listeners:()=>[p.on("authenticated",r=>{s.authenticated&&!r?p.emit("cart/reset",void 0):r&&!s.authenticated&&(s.authenticated=r,m().catch(console.error))},{eager:!0}),p.on("locale",async r=>{r!==s.locale&&(s.locale=r,m().catch(console.error))}),p.on("cart/reset",()=>{M().catch(console.error),p.emit("cart/data",null)}),p.on("cart/data",r=>{D(r)})]}),G=w.config;function E(r){var n,e,c,u,i,l,o,a,_,g;if(!r)return null;const t={id:r.id,totalQuantity:$(r),errors:k(r==null?void 0:r.itemsV2),items:A(r==null?void 0:r.itemsV2),miniCartMaxItems:A(r==null?void 0:r.itemsV2).slice(0,((n=s.config)==null?void 0:n.miniCartMaxItemsDisplay)??10),total:{includingTax:{value:r.prices.grand_total.value,currency:r.prices.grand_total.currency},excludingTax:{value:r.prices.grand_total_excluding_tax.value,currency:r.prices.grand_total_excluding_tax.currency}},discount:O(r.prices.discounts,r.prices.grand_total.currency),subtotal:{excludingTax:{value:(e=r.prices.subtotal_excluding_tax)==null?void 0:e.value,currency:(c=r.prices.subtotal_excluding_tax)==null?void 0:c.currency},includingTax:{value:(u=r.prices.subtotal_including_tax)==null?void 0:u.value,currency:(i=r.prices.subtotal_including_tax)==null?void 0:i.currency},includingDiscountOnly:{value:(l=r.prices.subtotal_with_discount_excluding_tax)==null?void 0:l.value,currency:(o=r.prices.subtotal_with_discount_excluding_tax)==null?void 0:o.currency}},appliedTaxes:R(r.prices.applied_taxes),totalTax:O(r.prices.applied_taxes,r.prices.grand_total.currency),appliedDiscounts:R(r.prices.discounts),isVirtual:r.is_virtual,addresses:{shipping:r.shipping_addresses&&q(r)},isGuestCart:!s.authenticated,hasOutOfStockItems:L(r),hasFullyOutOfStockItems:X(r),appliedCoupons:r.applied_coupons};return U(t,(g=(_=(a=G.getConfig().models)==null?void 0:a.CartModel)==null?void 0:_.transformer)==null?void 0:g.call(_,r))}function O(r,t){return r!=null&&r.length?r.reduce((n,e)=>({value:n.value+e.amount.value,currency:e.amount.currency}),{value:0,currency:t}):{value:0,currency:t}}function A(r){var n;if(!((n=r==null?void 0:r.items)!=null&&n.length))return[];const t=s.config;return r.items.map(e=>{var c,u,i,l,o,a,_,g,x,v,T,I,S;return{itemType:e.__typename,uid:e.uid,url:{urlKey:e.product.url_key,categories:(u=(c=e.product)==null?void 0:c.categories)==null?void 0:u.map(y=>y.url_key)},quantity:e.quantity,sku:e.product.sku,name:e.product.name,image:{src:t!=null&&t.useConfigurableParentThumbnail?e.product.thumbnail.url:((l=(i=e.configured_variant)==null?void 0:i.thumbnail)==null?void 0:l.url)||e.product.thumbnail.url,alt:t!=null&&t.useConfigurableParentThumbnail?e.product.thumbnail.label:((a=(o=e.configured_variant)==null?void 0:o.thumbnail)==null?void 0:a.label)||e.product.thumbnail.label},price:{value:e.prices.price.value,currency:e.prices.price.currency},taxedPrice:{value:e.prices.price_including_tax.value,currency:e.prices.price_including_tax.currency},fixedProductTaxes:e.prices.fixed_product_taxes,rowTotal:{value:e.prices.row_total.value,currency:e.prices.row_total.currency},rowTotalIncludingTax:{value:e.prices.row_total_including_tax.value,currency:e.prices.row_total_including_tax.currency},links:Q(e.links),total:e.__typename==="SimpleCartItem"&&e.customizable_options.length!==0||e.__typename==="BundleCartItem"?{value:e.prices.row_total.value,currency:e.prices.row_total.currency}:{value:(_=e.prices.original_row_total)==null?void 0:_.value,currency:(g=e.prices.original_row_total)==null?void 0:g.currency},discount:{value:e.prices.total_item_discount.value,currency:e.prices.total_item_discount.currency,label:(x=e.prices.discounts)==null?void 0:x.map(y=>y.label)},regularPrice:Y(e),discounted:e.__typename==="BundleCartItem"||e.__typename==="SimpleCartItem"&&e.customizable_options.length!==0?!1:e.__typename==="ConfigurableCartItem"?((T=(v=e.configured_variant)==null?void 0:v.price_range)==null?void 0:T.maximum_price.discount.amount_off)>0:((I=e.product.price_range)==null?void 0:I.maximum_price.discount.amount_off)>0,bundleOptions:e.__typename==="BundleCartItem"?P(e.bundle_options):null,selectedOptions:z(e.configurable_options),customizableOptions:F(e.customizable_options),sender:e.__typename==="GiftCardCartItem"?e.sender_name:null,senderEmail:e.__typename==="GiftCardCartItem"?e.sender_email:null,recipient:e.__typename==="GiftCardCartItem"?e.recipient_name:null,recipientEmail:e.__typename==="GiftCardCartItem"?e.recipient_email:null,message:e.__typename==="GiftCardCartItem"?e.message:null,discountedTotal:{value:e.prices.row_total.value,currency:e.prices.row_total.currency},onlyXLeftInStock:e.__typename==="ConfigurableCartItem"?(S=e.configured_variant)==null?void 0:S.only_x_left_in_stock:e.product.only_x_left_in_stock,lowInventory:e.is_available&&e.product.only_x_left_in_stock!==null,insufficientQuantity:(e.__typename==="ConfigurableCartItem"?e.configured_variant:e.product).stock_status==="IN_STOCK"&&!e.is_available,outOfStock:e.product.stock_status==="OUT_OF_STOCK",stockLevel:V(e),discountPercentage:B(e),savingsAmount:K(e),productAttributes:j(e)}})}function k(r){var n;const t=(n=r==null?void 0:r.items)==null?void 0:n.reduce((e,c)=>{var u;return(u=c.errors)==null||u.forEach(i=>{e.push({uid:c.uid,text:i.message})}),e},[]);return t!=null&&t.length?t:null}function R(r){return r!=null&&r.length?r.map(t=>({amount:{value:t.amount.value,currency:t.amount.currency},label:t.label,coupon:t.coupon})):[]}function P(r){const t=r==null?void 0:r.map(e=>({uid:e.uid,label:e.label,value:e.values.map(c=>c.label).join(", ")})),n={};return t==null||t.forEach(e=>{n[e.label]=e.value}),Object.keys(n).length>0?n:null}function z(r){const t=r==null?void 0:r.map(e=>({uid:e.configurable_product_option_uid,label:e.option_label,value:e.value_label})),n={};return t==null||t.forEach(e=>{n[e.label]=e.value}),Object.keys(n).length>0?n:null}function F(r){const t=r==null?void 0:r.map(e=>({uid:e.customizable_option_uid,label:e.label,type:e.type,values:e.values.map(c=>({uid:c.customizable_option_value_uid,label:c.label,value:c.value}))})),n={};return t==null||t.forEach(e=>{var c;switch(e.type){case"field":case"area":case"date_time":n[e.label]=e.values[0].value;break;case"radio":case"drop_down":n[e.label]=e.values[0].label;break;case"multiple":case"checkbox":n[e.label]=e.values.reduce((a,_)=>a?`${a}, ${_.label}`:_.label,"");break;case"file":const u=new DOMParser,i=e.values[0].value,o=((c=u.parseFromString(i,"text/html").querySelector("a"))==null?void 0:c.textContent)||"";n[e.label]=o;break}}),n}function $(r){var t,n;return((t=s.config)==null?void 0:t.cartSummaryDisplayTotal)===0?r.itemsV2.items.length:((n=s.config)==null?void 0:n.cartSummaryDisplayTotal)===1?r.total_quantity:r.itemsV2.items.length}function Q(r){return(r==null?void 0:r.length)>0?{count:r.length,result:r.map(t=>t.title).join(", ")}:null}function q(r){var t,n,e,c;return(t=r.shipping_addresses)!=null&&t.length?(n=r.shipping_addresses)==null?void 0:n.map(u=>({countryCode:u.country.code,zipCode:u.postcode,regionCode:u.region.code})):(e=r.addresses)!=null&&e.length?(c=r.addresses)==null?void 0:c.filter(u=>u.default_shipping).map(u=>{var i;return u.default_shipping&&{countryCode:u.country_code,zipCode:u.postcode,regionCode:(i=u.region)==null?void 0:i.region_code}}):null}function L(r){var t,n;return(n=(t=r==null?void 0:r.itemsV2)==null?void 0:t.items)==null?void 0:n.some(e=>{var c;return((c=e==null?void 0:e.product)==null?void 0:c.stock_status)==="OUT_OF_STOCK"||e.product.stock_status==="IN_STOCK"&&!e.is_available})}function V(r){if(!r.not_available_message)return null;const t=r.not_available_message.match(/-?\d+/);return t?parseInt(t[0]):"noNumber"}function X(r){var t,n;return(n=(t=r==null?void 0:r.itemsV2)==null?void 0:t.items)==null?void 0:n.some(e=>{var c;return((c=e==null?void 0:e.product)==null?void 0:c.stock_status)==="OUT_OF_STOCK"})}function B(r){var n,e,c,u,i,l,o,a;let t;if(r.__typename==="ConfigurableCartItem")t=(u=(c=(e=(n=r==null?void 0:r.configured_variant)==null?void 0:n.price_range)==null?void 0:e.maximum_price)==null?void 0:c.discount)==null?void 0:u.percent_off;else{if(r.__typename==="BundleCartItem")return;t=(a=(o=(l=(i=r==null?void 0:r.product)==null?void 0:i.price_range)==null?void 0:l.maximum_price)==null?void 0:o.discount)==null?void 0:a.percent_off}if(t!==0)return Math.round(t)}function K(r){var e,c,u,i,l,o;let t,n;if(t=((c=(e=r==null?void 0:r.prices)==null?void 0:e.original_row_total)==null?void 0:c.value)-((i=(u=r==null?void 0:r.prices)==null?void 0:u.row_total)==null?void 0:i.value),n=(o=(l=r==null?void 0:r.prices)==null?void 0:l.row_total)==null?void 0:o.currency,t!==0)return{value:t,currency:n}}function Y(r){var t,n,e,c,u,i;switch(r.__typename){case"ConfigurableCartItem":return{value:(n=(t=r.configured_variant)==null?void 0:t.price_range)==null?void 0:n.maximum_price.regular_price.value,currency:(c=(e=r.configured_variant)==null?void 0:e.price_range)==null?void 0:c.maximum_price.regular_price.currency};case"GiftCardCartItem":case"BundleCartItem":return{value:r.prices.price.value,currency:r.prices.price.currency};case"SimpleCartItem":if(r.customizable_options.length!==0)return{value:r.prices.price.value,currency:r.prices.price.currency};default:return{value:(u=r.product.price_range)==null?void 0:u.maximum_price.regular_price.value,currency:(i=r.product.price_range)==null?void 0:i.maximum_price.regular_price.currency}}}function j(r){var t,n,e;return(e=(n=(t=r==null?void 0:r.product)==null?void 0:t.custom_attributesV2)==null?void 0:n.items)==null?void 0:e.map(c=>{const u=c.code.split("_").map(i=>i.charAt(0).toUpperCase()+i.slice(1)).join(" ");return{...c,code:u}})}function H(r){if(!r)return null;const t=n=>{switch(n){case 1:return"EXCLUDING_TAX";case 2:return"INCLUDING_TAX";case 3:return"INCLUDING_EXCLUDING_TAX";default:return"EXCLUDING_TAX"}};return{displayMiniCart:r.minicart_display,miniCartMaxItemsDisplay:r.minicart_max_items,cartExpiresInDays:r.cart_expires_in_days,cartSummaryDisplayTotal:r.cart_summary_display_quantity,cartSummaryMaxItems:r.max_items_in_order_summary,defaultCountry:r.default_country,categoryFixedProductTaxDisplaySetting:r.category_fixed_product_tax_display_setting,productFixedProductTaxDisplaySetting:r.product_fixed_product_tax_display_setting,salesFixedProductTaxDisplaySetting:r.sales_fixed_product_tax_display_setting,shoppingCartDisplaySetting:{zeroTax:r.shopping_cart_display_zero_tax,subtotal:t(r.shopping_cart_display_subtotal),price:t(r.shopping_cart_display_price),shipping:t(r.shopping_cart_display_shipping),fullSummary:r.shopping_cart_display_full_summary,grandTotal:r.shopping_cart_display_grand_total,taxGiftWrapping:r.shopping_cart_display_tax_gift_wrapping},useConfigurableParentThumbnail:r.configurable_thumbnail_source==="parent"}}const b=`
  $pageSize: Int! = 100,
  $currentPage: Int! = 1,
  $itemsSortInput: QuoteItemsSortInput! = {field: CREATED_AT, order: DESC}
`,W=`
fragment CUSTOMER_FRAGMENT on Customer {
  addresses {
    default_shipping
    country_code
    postcode
    region {
      region
      region_code
      region_id
    }
  }
}`,J=`
  query GUEST_CART_QUERY(
      $cartId: String!,
      ${b}
    ) {

    cart(cart_id: $cartId){
      ...CART_FRAGMENT
    }
  }

  ${h}
`,Z=`
  query CUSTOMER_CART_QUERY(
      ${b}
    ) {
     
    customer {
      ...CUSTOMER_FRAGMENT
    }

    cart: customerCart {
      ...CART_FRAGMENT
    }
  }

  ${W}
  ${h}
`,C=async()=>{const r=s.authenticated,t=s.cartId;if(r)return f(Z,{method:"POST"}).then(({errors:n,data:e})=>{if(n)return d(n);const c={...e.cart,...e.customer};return E(c)});if(!t)throw new Error("No cart ID found");return f(J,{method:"POST",cache:"no-cache",variables:{cartId:t}}).then(({errors:n,data:e})=>n?d(n):E(e.cart))},rr=`
  mutation MERGE_CARTS_MUTATION(
      $guestCartId: String!, 
      $customerCartId: String!,
      ${b}
    ) {
    mergeCarts(
      source_cart_id: $guestCartId,
      destination_cart_id: $customerCartId
    ) {
      ...CART_FRAGMENT 
    }
  }

  ${h}
`,m=async()=>{if(s.initializing)return null;s.initializing=!0,s.config||(s.config=await cr());const r=s.authenticated?await er():await tr();return p.emit("cart/initialized",r),p.emit("cart/data",r),s.initializing=!1,r};async function er(){const r=s.cartId,t=await C();return t?(s.cartId=t.id,!r||t.id===r?t:await f(rr,{variables:{guestCartId:r,customerCartId:t.id}}).then(()=>C()).then(n=>{const e={oldCartItems:t.items,newCart:n};return p.emit("cart/merged",e),n}).catch(()=>(console.error("Could not merge carts"),t))):null}async function tr(){if(G.getConfig().disableGuestCart===!0||!s.cartId)return null;try{return await C()}catch(r){return console.error(r),null}}const nr=`
query STORE_CONFIG_QUERY {
  storeConfig {
    minicart_display 
    minicart_max_items
    cart_expires_in_days 
    cart_summary_display_quantity
    max_items_in_order_summary
    default_country
    category_fixed_product_tax_display_setting
    product_fixed_product_tax_display_setting
    sales_fixed_product_tax_display_setting
    shopping_cart_display_full_summary
    shopping_cart_display_grand_total
    shopping_cart_display_price
    shopping_cart_display_shipping
    shopping_cart_display_subtotal
    shopping_cart_display_tax_gift_wrapping
    shopping_cart_display_zero_tax
    configurable_thumbnail_source
  }
}
`,cr=async()=>f(nr,{method:"GET",cache:"force-cache"}).then(({errors:r,data:t})=>r?d(r):H(t.storeConfig));export{b as C,tr as a,C as b,G as c,m as d,cr as e,er as g,w as i,E as t};
