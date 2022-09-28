import { useShoppingCart } from "use-shopping-cart";
import { Quantity, Total } from "../styles/pages/sidebar";

export function QntityandTotal() {
  const { cartCount, totalPrice } = useShoppingCart();

  
  return (
    <>
      <Quantity>
        <span> Quantidade </span>
        <span> {cartCount} itens </span>
      </Quantity>
      <Total>
        <strong>Valor total</strong>
        <strong>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPrice / 100)}{" "}
        </strong>
      </Total>
    </>
  );
}
