import"@dropins/tools/event-bus.js";import{k as o,M as l,l as u}from"./fixtures.js";import{t as d,g as f,a as g}from"./getCart.graphql.js";const p=e=>[],m=e=>{var n,i,a;const t=e.street.filter(Boolean),r=(n=e.region)==null?void 0:n.region_id,s=r&&r>0;return{id:String(e.id),firstName:e.firstname,lastName:e.lastname,company:e.company||void 0,city:e.city,street:t,postCode:e.postcode||void 0,vatId:e.vat_id||void 0,telephone:e.telephone||void 0,region:{id:s?r:void 0,code:(i=e.region)==null?void 0:i.region_code,name:(a=e.region)==null?void 0:a.region},country:{value:e.country_code,label:e.country_code},customAttributes:p(e.custom_attributesV2)}},y=e=>e?e.filter(Boolean).map(m):[],c=(e,t)=>{if(!t)return;const r=t.find(s=>(s==null?void 0:s[e])===!0);if(r)return m(r)},h=e=>{if(!e)return;const t=e.addresses;return{firstName:e.firstname||"",lastName:e.lastname||"",email:e.email||"",addresses:y(t),defaultBillingAddress:c("default_billing",t),defaultShippingAddress:c("default_shipping",t)}},C=async()=>{const e=o.cartId,t=o.authenticated===!1,r=t?f:g,s=t?{cartId:e}:{};if(t&&!e)throw new l;return await u({type:"query",query:r,options:{method:"POST",cache:"no-cache",variables:s},path:"cart",signalType:"cart",transformer:d})},w=async()=>{const e=o.cartId,t=o.authenticated;if(e)try{await C(),t&&await v()}catch(r){console.error(r)}},_=`
  query getCustomer {
    customer {
      firstname
      lastname
      email
      addresses {
        id
        default_shipping
        default_billing
        city
        country_code
        firstname
        lastname
        company
        postcode
        vat_id
        region {
          region
          region_id
          region_code
        }
        street
        telephone
        custom_attributesV2 {
          ... on AttributeValue {
            code
            value
          }
        }
      }
    }
  }
`,v=async()=>{if(o.authenticated)return await u({type:"query",query:_,options:{method:"POST",cache:"no-cache"},path:"customer",signalType:"customer",transformer:h})};export{w as a,v as b,C as g};
