import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Box} from '@chakra-ui/react'
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
     <Box  mx={[0, "10%"]} mt="10vh">{children}</Box> 
      <Footer />
    </>
  );
};

export default Layout;
