"use client";

import Container from "@/components/ui/Container";
import useCart from "@/hooks/useCart";
import useIsMounted from "@/hooks/useIsMounted";
import React from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";

const CartPage = () => {
  const isMounted = useIsMounted();
  const cart = useCart();

  if (!isMounted) return null;
  return (
    <div className='bg-white'>
      <Container>
        <div className='px-4 py-16 sm:px-6 lg:px-8 '>
          <h1 className='font-bold text-3xl text-black'>Shopping cart</h1>
          <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12'>
            <div className='lg:col-span-7'>
              {cart.products.length === 0 && <p className='text-neutral-500'>No items added to cart</p>}
              <ul>
                {cart.products.map((product) => (
                  <CartItem key={product.id} product={product}></CartItem>
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;