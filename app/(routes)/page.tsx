import getBillboards from "@/actions/getBillboards";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import React from "react";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboards("9e874d74-62c1-4cc3-9aa7-ced96c62e525");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard billboard={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
