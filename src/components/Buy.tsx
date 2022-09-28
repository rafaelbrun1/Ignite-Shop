import axios from "axios";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import { BuyButton } from "../styles/pages/sidebar";

export function Buy() {
  const { cartDetails } = useShoppingCart();
  const cartEntries: Product[] = Object.values(cartDetails ?? {});

  const checkout = async () => {
    const lineItems = cartEntries.map((item) => {
      return {
        price: item.defaultPriceId,
        quantity: 1,
      };
    });
    const res = await axios.post("/api/checkout", {
      lineItems,
    });

    const { checkoutUrl } = res.data;

    window.location.href = checkoutUrl;
  };

  return <BuyButton onClick={() => checkout()}>Finalizar compra</BuyButton>;
}
