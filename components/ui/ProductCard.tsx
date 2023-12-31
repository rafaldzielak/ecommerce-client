"use client";

import { Product } from "@/types";
import Image from "next/image";
import React, { FC, MouseEventHandler } from "react";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/usePreviewModal";
import useCart from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/product/${product.id}`);

  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(product);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(product);
  };

  return (
    <div onClick={handleClick} className='bg-white group cursor-pointer rounded-xl border p-3 space-y-4'>
      <div className='aspect-square rounded-xl bg-gray-100 relative'>
        <Image alt={product.name} src={product.images?.[0].url} fill className='aspect-square object-cover rounded-md' />
        <div className='opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5'>
          <div className='flex gap-x-6 justify-center'>
            <IconButton icon={<Expand size={20} className='text-gray-600' />} onClick={onPreview} />
            <IconButton onClick={onAddToCart} icon={<ShoppingCart size={20} className='text-gray-600' />} />
          </div>
        </div>
      </div>
      <div>
        <p className='font-semibold text-lg'>{product.name}</p>
        <p className='text-sm text-gray-500'>{product.category.name}</p>
      </div>
      <div className='flex items-center justify-between'>
        <Currency value={product.price} />
      </div>
    </div>
  );
};

export default ProductCard;
