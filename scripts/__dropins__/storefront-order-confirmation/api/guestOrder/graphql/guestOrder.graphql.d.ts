export declare const GUEST_ORDER_FRAGMENT = "\n  fragment guestOrderData on CustomerOrder {\n    number\n    status\n    email\n    shipping_method\n    is_virtual\n    payment_methods {\n      name\n      type\n    }\n    total {\n      subtotal {\n        currency\n        value\n      }\n      total_tax {\n        currency\n        value\n      }\n      total_shipping {\n        currency\n        value\n      }\n      grand_total {\n        currency\n        value\n      }\n    }\n    billing_address {\n      firstname\n      middlename\n      lastname\n      street\n      city\n      postcode\n      telephone\n      country_code\n      region\n      region_id\n      company\n      custom_attributesV2 {\n        code\n        ... on AttributeValue {\n          value\n        }\n      }\n    }\n    shipping_address {\n      firstname\n      middlename\n      lastname\n      street\n      city\n      postcode\n      telephone\n      country_code\n      region\n      region_id\n      company\n      custom_attributesV2 {\n        code\n        ... on AttributeValue {\n          value\n        }\n      }\n    }\n    items {\n      __typename\n      id\n      quantity_ordered\n      product_sale_price {\n        value\n        currency\n      }\n      product {\n        name\n        sku\n        thumbnail {\n          label\n          url\n        }\n      }\n      selected_options {\n        label\n        value\n      }\n\n      ... on GiftCardOrderItem {\n        gift_card {\n          recipient_name\n          recipient_email\n          sender_name\n          sender_email\n          message\n        }\n      }\n    }\n  }\n";
export declare const guestOrderQuery: string;
//# sourceMappingURL=guestOrder.graphql.d.ts.map