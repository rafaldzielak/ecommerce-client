import { Product } from "@/types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

interface CartStore {
  products: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addItem: (product) => {
        console.log("ADD TO CART");
        const currentItems = get().products;
        const existingItem = currentItems.find((item) => item.id === product.id);
        if (existingItem) return toast("Item already in cart.");
        set({ products: [...get().products, product] });
        toast.success("Item added to cart");
      },
      removeItem: (id: string) => {
        set({ products: [...get().products.filter((item) => item.id !== id)] });
        toast.success("Item removed from the cart");
      },
      removeAll: () => set({ products: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
