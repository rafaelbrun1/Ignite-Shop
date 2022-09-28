import {
  BagContainerGreen,
  HomeContainer,
  Product,
} from "../styles/pages/home";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Link from "next/link";

import Image from "next/future/image";
import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    sku: string;
    currency: string;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  const { addItem } = useShoppingCart();

  function handlePropagation(e, p) {
    e.stopPropagation();
    addItem(p);
  }

  return (
    <>
      <Head>
        <title> Home | Ignite Shop </title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(product.price / 100)}
                    </span>
                  </div>
                  <BagContainerGreen
                    onClick={(e) => handlePropagation(e, product)}
                  >
                    <Handbag size={24} color="white" />
                  </BagContainerGreen>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    console.log(response);
    return {
      id: product.id,
      sku: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      currency: "BRL",
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  };
};
