/********************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2024 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 *******************************************************************/
export declare const placeOrderMutation = "\n  mutation placeOrder($cartId: String!) {\n    placeOrder(input: { cart_id: $cartId }) {\n      errors {\n        code\n        message\n      }\n      orderV2 {\n        number\n        status\n        token\n        is_virtual\n        applied_coupons {\n          code\n        }\n        email\n        id\n        total {\n          grand_total {\n            currency\n            value\n          }\n          subtotal {\n            currency\n            value\n          }\n          total_shipping {\n            currency\n            value\n          }\n          total_tax {\n            currency\n            value\n          }\n        }\n        shipping_method\n        payment_methods {\n          name\n          type\n        }\n        billing_address {\n          firstname\n          middlename\n          lastname\n          street\n          city\n          postcode\n          telephone\n          country_code\n          region\n          region_id\n          company\n          custom_attributesV2 {\n            code\n            ... on AttributeValue {\n              value\n            }\n          }\n        }\n        shipping_address {\n          firstname\n          middlename\n          lastname\n          street\n          city\n          postcode\n          telephone\n          country_code\n          region\n          region_id\n          company\n          custom_attributesV2 {\n            code\n            ... on AttributeValue {\n              value\n            }\n          }\n        }\n        items {\n          __typename\n          id\n          discounts {\n            amount {\n              value\n            }\n          }\n          product {\n            __typename\n            canonical_url\n            image {\n              url\n            }\n            thumbnail {\n              label\n              url\n            }\n            name\n            sku\n            uid\n          }\n          selected_options {\n            label\n            value\n          }\n          product_sale_price {\n            value\n            currency\n          }\n          quantity_ordered\n          ... on GiftCardOrderItem {\n            gift_card {\n              recipient_name\n              recipient_email\n              sender_name\n              sender_email\n              message\n            }\n          }\n        }\n      }\n    }\n  }\n";
//# sourceMappingURL=placeOrder.graphql.d.ts.map