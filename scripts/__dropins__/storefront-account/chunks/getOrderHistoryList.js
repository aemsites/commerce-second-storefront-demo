import{t as u,k as i,f as _,l as f,m as p}from"./removeCustomerAddress.js";const g=(t,a="en-US",s={})=>{const r={...{day:"2-digit",month:"2-digit",year:"numeric"},...s},e=new Date(t);return isNaN(e.getTime())?"Invalid Date":new Intl.DateTimeFormat(a,r).format(e)},y=t=>{var d,c;if(!((c=(d=t.data)==null?void 0:d.customer)!=null&&c.orders))return null;const{items:a,page_info:s,total_count:o,date_of_first_order:r}=t.data.customer.orders,{returns:e}=t.data.customer;return{items:a.map(n=>{const l={...n,returns:e==null?void 0:e.items.filter(m=>m.order.id===n.id),order_date:g(n.order_date),shipping_address:u(n.shipping_address),billing_address:u(n.billing_address)};return i(l,"camelCase",{})}),pageInfo:i(s,"camelCase",{}),totalCount:i(o,"camelCase",{}),dateOfFirstOrder:i(r,"camelCase",{})}},h=`
fragment AddressesList on OrderAddress {
  city
  company
  country_code
  fax
  firstname
  lastname
  middlename
  postcode
  prefix
  region
  region_id
  street
  suffix
  telephone
  vat_id
}`,O=`
fragment OrderSummary on OrderTotal {
  __typename
  grand_total {
    value
    currency
  }
  subtotal {
    currency
    value
  }
  taxes {
    amount {
      currency
      value
    }
    rate
    title
  }
  total_tax {
    currency
    value
  }
  total_shipping {
    currency
    value
  }
  discounts {
    amount {
      currency
      value
    }
    label
  }
}`,S=`
  query GET_CUSTOMER_ORDERS_LIST($currentPage: Int, $pageSize: Int, $filter: CustomerOrdersFilterInput, $sort: CustomerOrderSortInput) {
  customer {
    returns {
      items {
        uid
        number
        order {
          id
        }
      }
    }
    orders(currentPage: $currentPage, pageSize: $pageSize, filter: $filter, sort: $sort) {
      page_info {
        page_size
        total_pages
        current_page
      }
      date_of_first_order
      total_count
      items {
        token
        email
        shipping_method
        payment_methods {
          name
          type
        }
        shipping_address {
        ...AddressesList
        }
        billing_address {
        ...AddressesList
        }
        shipments {
        id
        number
        tracking {
          title
          number
          carrier
          }
        }
        number
        id
        order_date
        carrier
        status
        items {
          status
          product_name
          id
          quantity_ordered
          quantity_shipped
          quantity_invoiced
          product {
            sku
            small_image {
              url
            }
          }
        }
        total {
        ...OrderSummary
        }
      }
    }
  }
}
${h}
${O}
`,E={sort_direction:"DESC",sort_field:"CREATED_AT"},C=async(t,a,s)=>{const o=a.includes("viewAll")?{}:{order_date:JSON.parse(a)};return await _(S,{method:"GET",cache:"no-cache",variables:{pageSize:t,currentPage:s,filter:o,sort:E}}).then(r=>{var e;return(e=r.errors)!=null&&e.length?f(r.errors):y(r)}).catch(p)};export{C as g};
