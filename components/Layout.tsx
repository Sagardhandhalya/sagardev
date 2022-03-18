import Head from "next/head";
import React from "react";
import CoolCanvas from "./CoolCanvas";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <CoolCanvas />
      {children}
    </>
  );
};

export default Layout;
