# Edge Delivery Services + Adobe Commerce Boilerplate
This project boilerplate is for Edge Delivery Services projects that integrate with Adobe Commerce.

## Documentation
https://experienceleague.adobe.com/developer/commerce/storefront/

## Environments

- Preview: https://main--my-first-storefront-demo--OscarMerino.hlx.page/
- Live: https://main--my-first-storefront-demo--OscarMerino.hlx.live/

## Pre-requisites

The `configs.xlsx` file is set up to connect to the following API Mesh for the Core SaaS Stage environment. Please ensure you are connected to **one of the following Adobe VPNs (Bangalore, Lehi, San Jose, or Virginia)** to access the API Mesh APIs for the Core SaaS Stage environments.

1. Core GraphQL: https://edge-stage-graph.adobe.io/api/d303dcc6-91da-44b7-8636-319760aa83c1/graphql
1. Catalog GraphQL: https://edge-stage-graph.adobe.io/api/2ac5578e-5ad1-44af-bfe2-2dc06453df61/graphql
1. Commerce Admin: https://na1-ccsaas-service-stg.commerce-core-saas.com/BBZzsyUF4zCHzZezSMkpjH/admin/

Additionally, you need to have the following modules and customizations installed on your environment:

1. magento/magento-extra-graphql: Commerce module required for Cart and Checkout Drop-Ins.
1. magento/module-data-services-graphql: Commerce module with functionality necessary for adding context to events.
1. magento/module-page-builder-product-recommendations: Commerce module required for PRex Widget
1. magento/module-visual-product-recommendations: Commerce module required for PRex Widget
<!-- 1. TODO: Add further prereqs.  -->

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Add your Adobe Commerce SaaS configuration in the `configs.xlsx` sheet in your content repository.
1. Install all dependencies using `npm i`.
1. Start AEM Proxy: `npm run up` (opens your browser at `http://localhost:3000`)
1. Open the `boilerplate-commerce-dropins` directory in your favorite IDE and start coding :)

## Changelog

Major changes are described and documented as part of pull requests and tracked via the `changelog` tag. To keep your project up to date, please follow this list:

https://github.com/hlxsites/aem-boilerplate-commerce/issues?q=label%3Achangelog+is%3Aclosed
