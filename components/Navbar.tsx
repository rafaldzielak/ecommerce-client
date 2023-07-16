import getCategories from "@/actions/getCategories";
import Link from "next/link";
import React, { FC } from "react";
import MainNav from "./MainNav";
import Container from "./ui/Container";
import NavbarActions from "./NavbarActions";

const Navbar: FC = async () => {
  const categories = await getCategories();

  return (
    <Container>
      <div className='border-b'>
        <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-xl'>STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
