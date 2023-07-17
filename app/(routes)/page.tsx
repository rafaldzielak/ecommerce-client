import getBillboards from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("9e874d74-62c1-4cc3-9aa7-ced96c62e525");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard billboard={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title='Featured Products' products={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
