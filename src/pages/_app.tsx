import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import logoImg from "../assets/Logo.svg";
import { BagContainer, Container, Header } from "../styles/pages/app";
import Image from "next/future/image";
import { Handbag, X } from "phosphor-react";
import { CartProvider } from "use-shopping-cart";
import { useState } from "react";
import {
  ButtonX,
  BuyButton,
  CartInfo,
  Quantity,
  Sidebar,
  Total,
  TshirtC,
} from "../styles/pages/sidebar";
import { Tshirt } from "../components/Tshirt";
import Link from "next/link";
import { QntityandTotal } from "../components/QntityandTotal";
import axios from "axios";
import { Buy } from "../components/Buy";
import { Bag } from "../components/Bag";

globalStyles();

const stripeKey = process.env.STRIPE_PUBLIC_KEY;

export interface HandleProps { 
  handleCartBoolean: () => void;
}

export default function App({ Component, pageProps }: AppProps) {
  const [showCartShopping, setShowCartShopping] = useState(false);
  function handleCart() {
    setShowCartShopping(!showCartShopping);
  }

  return (
    <CartProvider cartMode="checkout-session" stripe={stripeKey} currency="BRL">
      <Container>
        <Header>
          <Link href="/">
            <Image src={logoImg} alt="" />
          </Link>
         <Bag handleCartBoolean={handleCart}/>
        </Header>
        {showCartShopping ? (
          <Sidebar>
            <ButtonX onClick={handleCart}>
              <X color="#8D8D99" />{" "}
            </ButtonX>
            <h1> Sacola de compras</h1>
            <TshirtC>
            <Tshirt />
            </TshirtC>
            <CartInfo>
              <QntityandTotal />
              <Buy />
            </CartInfo>

           
          </Sidebar>
        ) : null}
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  );
}
