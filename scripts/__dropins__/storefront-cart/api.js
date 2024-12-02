/*! Copyright 2024 Adobe
All Rights Reserved. */
import{s,f as C,h as T}from"./chunks/resetCart.js";import{g as $,r as v,d as Q,a as H,b as k,c as z}from"./chunks/resetCart.js";import{C as l,t as f,c as g,g as h,a as A}from"./chunks/getStoreConfig.js";import{b as q,e as B,i as J,d as K}from"./chunks/getStoreConfig.js";import{events as d}from"@dropins/tools/event-bus.js";import{CART_FRAGMENT as I}from"./fragments.js";import{c as _,p as E}from"./chunks/acdl.js";import{u as V}from"./chunks/updateProductsFromCart.js";import{g as X,b as Y,a as Z}from"./chunks/getEstimateShipping.js";import{g as rt}from"./chunks/getEstimatedTotals.js";import{g as et}from"./chunks/persisted-data.js";import{A as ot,a as nt}from"./chunks/applyCouponsToCart.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const G=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${l}
    ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        ...CART_FRAGMENT
      }
      user_errors {
        code
        message
      }
    }
  }
    
  ${I}
`,x=async r=>{let o=!1;const n=s.cartId||await S().then(e=>(o=!0,e));return C(G,{variables:{cartId:n,cartItems:r.map(({sku:e,parentSku:a,quantity:c,optionsUIDs:t,enteredOptions:i})=>({sku:e,parent_sku:a,quantity:c,selected_options:t,entered_options:i}))}}).then(({errors:e,data:a})=>{var i;const c=[...((i=a==null?void 0:a.addProductsToCart)==null?void 0:i.user_errors)??[],...e??[]];if(c.length>0)return T(c);const t=f(a.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const p=t.items.filter(m=>r.some(({sku:u})=>u===m.sku));o?_(t,p,s.locale??"en-US"):E(t,p,s.locale??"en-US")}return t})},R=`
    mutation CREATE_GUEST_CART_MUTATION {
        createGuestCart {
          cart {
            id
          }
        }
    }
`,S=async()=>{const{disableGuestCart:r}=g.getConfig();if(r)throw new Error("Guest cart is disabled");return await C(R).then(({data:o})=>{const n=o.createGuestCart.cart.id;return s.cartId=n,n})},F=async()=>{const r=s.authenticated?await h():await A();return d.emit("cart/data",r),r};export{ot as ApplyCouponsStrategy,x as addProductsToCart,nt as applyCouponsToCart,g as config,S as createGuestCart,C as fetchGraphQl,q as getCartData,et as getCartDataFromCache,$ as getConfig,X as getCountries,h as getCustomerCartPayload,Y as getEstimateShipping,rt as getEstimatedTotals,A as getGuestCartPayload,Z as getRegions,B as getStoreConfig,J as initialize,K as initializeCart,F as refreshCart,v as removeFetchGraphQlHeader,Q as resetCart,H as setEndpoint,k as setFetchGraphQlHeader,z as setFetchGraphQlHeaders,V as updateProductsFromCart};
