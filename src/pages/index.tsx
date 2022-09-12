import { HomeContainer, Product } from "../styles/pages/home";
import camiseta1 from "../assets/camisetas/1.png";
import camiseta2 from "../assets/camisetas/2.png";
import camiseta3 from "../assets/camisetas/3.png";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Image from "next/future/image";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { GetServerSideProps } from "next";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      { products.map(product => { 
        return <Product className="keen-slider__slide" key={product.id}>
        <Image src={product.imageUrl} width={520} height={480} />
        <footer>
          <strong>{product.name}</strong>
          <span>8</span>
        </footer>
      </Product>
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
  
    console.log(price);
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price,
    };
  });

  return {
    props: {
      products,
    },
  };
};
