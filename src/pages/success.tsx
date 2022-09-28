import { GetServerSideProps } from "next";
import Link from "next/link";
import { ImageContainer, Images } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import Image from "next/future/image";
import Head from "next/head";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  name: string;
  images: string[];
}

interface SuccessProps {
  customerName: string;
  products: ProductProps[];
}

export default function Success({ customerName, products }: SuccessProps) {

  const {clearCart} = useShoppingCart()

  useEffect(() => { 
    clearCart()
  }, [])
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop </title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada</h1>
        <Images> 
        {products.map((product) => (
         
          
            <ImageContainer>
              <Image src={product.images[0]} width={120} height={110} />
            </ImageContainer>
            
          
        ))}
        </Images>
        <p>
          Ihull! <strong>{customerName} </strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
        </p>
        <Link href="/">
          <a>Voltar ao catálogo</a>
        </Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionsId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionsId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  // const product = session.line_items.data[0].price.product as Stripe.Product;

  const line = session.line_items.data.map((item) => {
    return item.price.product as Stripe.Product;
  });

  console.log(line);
  return {
    props: {
      customerName,
      products: line,
    },
  };
};
