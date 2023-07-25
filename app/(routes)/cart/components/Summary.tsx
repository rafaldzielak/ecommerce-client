"use client";

import Button from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/useCart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const products = useCart((state) => state.products);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed");
      removeAll();
    }
    if (searchParams.get("cancelled")) {
      toast.error("Something went wrong");
      removeAll();
    }
  }, [removeAll, searchParams]);

  const totalPrice = products.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, { productIds: products.map((product) => product.id) });
    window.location = res.data.url;
  };

  return (
    <div className='mt-16 rounded-lg bg-gray-50 px-4 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
      <h2 className='text-lg font-medium text-gray-900'>Order Summary</h2>
      <div className='mt-6 space-y-4'>
        <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
          <div className='text-base font-medium text-gray-900'>Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button disabled={products.length === 0} className='w-full mt-6' onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
