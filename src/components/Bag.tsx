import { Handbag } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import {  HandleProps } from "../pages/_app";
import { BagContainer } from "../styles/pages/app";

export function Bag({handleCartBoolean}: HandleProps) { 
  const {cartCount} = useShoppingCart()
  return ( 
    <BagContainer onClick={handleCartBoolean}>
        <span>{cartCount}</span>
    <Handbag size={24} color="#8D8D99" />
  </BagContainer>
  )
}