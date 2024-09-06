import{C as u,a as l,s as i,f as p,h as I,t as f}from"./chunks/resetCart.js";import{g as F,r as y,e as $,b as v,c as w,d as x}from"./chunks/resetCart.js";import{events as d}from"@dropins/tools/event-bus.js";import{p as g,a as _}from"./chunks/updateProductsFromCart.js";import{u as H}from"./chunks/updateProductsFromCart.js";import{c as h}from"./chunks/getStoreConfig.js";import{g as z,b as Y,i as j,a as q}from"./chunks/getStoreConfig.js";import{a as J,g as K,c as L,b as V}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const E=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${u}
    ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        ...CartFragment
      }
      user_errors {
        code
        message
      }
    }
  }
  ${l}
`,N=async a=>{let s=!1;const o=i.cartId||await R().then(e=>(s=!0,e));return p(E,{variables:{cartId:o,cartItems:a.map(({sku:e,parentSku:r,quantity:n,optionsUIDs:t,enteredOptions:c})=>({sku:e,parent_sku:r,quantity:n,selected_options:t,entered_options:c}))}}).then(({errors:e,data:r})=>{var c;const n=[...((c=r==null?void 0:r.addProductsToCart)==null?void 0:c.user_errors)??[],...e??[]];if(n.length>0)return I(n);const t=f(r.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const m=t.items.filter(C=>a.some(({sku:T})=>T===C.sku));s?g(t,m,i.locale??"en-US"):_(t,m,i.locale??"en-US")}return t})},A=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,R=async()=>{const{disableGuestCart:a}=h.getConfig();if(a)throw new Error("Guest cart is disabled");return await p(A).then(({data:s})=>{const o=s.createEmptyCart;return i.cartId=o,o})};export{N as addProductsToCart,h as config,R as createEmptyCart,p as fetchGraphQl,z as getCartData,F as getConfig,J as getCountries,K as getEstimateShipping,L as getEstimatedTotals,V as getRegions,Y as getStoreConfig,j as initialize,q as initializeCart,y as removeFetchGraphQlHeader,$ as resetCart,v as setEndpoint,w as setFetchGraphQlHeader,x as setFetchGraphQlHeaders,H as updateProductsFromCart};
