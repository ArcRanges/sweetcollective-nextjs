import React from "react";
import Navbar from "containers/Navbar";
import Footer from "containers/Footer";
import Cart from "containers/Cart/Cart";
import SideFilters from "containers/SideFilters";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cart />
      <SideFilters />
      {children}
      <Footer />
    </>
  );
}
