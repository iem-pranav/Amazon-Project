import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage() {
  try {
    await loadProductsFetch();

    await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  } catch (error) {
    console.log('Unexcepted error. Please try again later');
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
