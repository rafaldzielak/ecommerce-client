"use client";

import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import { ShoppingBag } from "lucide-react";
import useIsMounted from "@/hooks/useIsMounted";
import useCart from "@/hooks/useCart";

const NavbarActions = () => {
  const isMounted = useIsMounted();
  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className='ml-auto flex items-center gap-x-4'>
      <Button className='flex items-center rounded-full bg-black px-4 py-2'>
        <ShoppingBag size={20} color='white' />
        <span className='ml-2 text-sm font-medium text-white'>{cart.products.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
