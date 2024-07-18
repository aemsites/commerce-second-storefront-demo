import { addProductsToCart } from '@dropins/storefront-cart/api.js';
import htm from '../../scripts/htm.js';
import { createOptimizedPicture } from '../../scripts/aem.js';
import { h, render } from '../../scripts/preact.js';

const html = htm.bind(h);

/**
 * loads and decorates best-sellers
 * @param {Element} block The best-sellers block element
 */
export default function decorate(block) {
  const link = block.querySelector('a');
  const divElements = block.querySelectorAll('div');
  let product = '';
  let data = [];

  divElements.forEach((divElement, index) => {
    console.log(divElement);
    if (divElement.textContent.trim().toLowerCase() === 'product') {
      if (divElements[index + 1]) {
        product = divElements[index + 1].textContent.trim();
      } else {
        console.log('No product value found.');
      }
    }
  });

  function modifyHTML() {
    block.innerHTML = '';

    data.forEach((item) => {
      const picture = createOptimizedPicture(item.image, '', false, [{ width: 1000 }]);
      picture.lastElementChild.width = '1000';
      picture.lastElementChild.height = '1000';

      const createdCard = document.createElement('div');
      createdCard.classList.add('wide-card');
      createdCard.innerHTML = `
        <div class="card-image">${picture.outerHTML}</div>
        <div class="card-info">
          <h2>${item.name}</h2>
          <p>${item.sku}</p>
          <p>${item.description}</p>
          
          <p class="button-container">
            <a
              class="button add-to-cart"
              href="#"
              data-sku="${item.sku}"
            >
                Add to cart
            </a>
          </p>
        </div>
      `;
      block.append(createdCard);
    });

    // create a script to call the addProductsToCart function from Cart dropin
    const script = document.createElement('script');
    script.innerHTML = `
      document.querySelectorAll('.add-to-cart').forEach((button) => {
          console.log('Add to cart clicked');
        button.addEventListener('click', (event) => {
          console.log(event.target.dataset.sku);
          event.preventDefault();
          
          const { addProductsToCart } = import('@dropins/storefront-cart/api.js');
          console.debug('onAddToCart', addProductsToCart);
          
          addProductsToCart([{ sku: event.target.dataset.sku, quantity: 1 }]);
        });
      });
    `;
    block.append(script);
  }
  async function initialize() {
    const response = await fetch(link?.href);

    if (response.ok) {
      const jsonData = await response.json();
      data = jsonData?.data;

      if (product) {
        const products = jsonData?.raw.data;
        const foundProduct = products.find((obj) => obj.name === product);
        data = [foundProduct];
        modifyHTML();
      } else {
        data = jsonData?.data;
        modifyHTML();
      }
    }
  }

  initialize();
}
