import Image from "next/future/image";
import {
  ImageContainer,
  ProductInfoContainer,
  TshirtContainer,
} from "../styles/pages/sidebar";
import camiseta1 from "../../src/assets/camisetas/1.png";
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

export function Tshirt() {
  const { cartDetails, removeItem } = useShoppingCart();

  const cartEntries: Product[] = Object.values(cartDetails ?? {})

  return (
    <>      
    {cartEntries.map(entry => { 
      return ( 
        
       
        <TshirtContainer key={entry.id}>
        <ImageContainer>
          <Image src={camiseta1} width={90} height={95} alt='' />
        </ImageContainer>
        <ProductInfoContainer>
          <span>{entry.name}</span>
          <strong>{ new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(entry.price / 100) }</strong>
          <button onClick={() => removeItem(entry.id)}> Remover</button>
        </ProductInfoContainer>
      </TshirtContainer>
      
      )
      })}
      </>
  );
}
