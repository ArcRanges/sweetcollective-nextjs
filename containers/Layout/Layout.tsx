import React from "react";
import Navbar from "containers/Navbar";
import Footer from "containers/Footer";
import Cart from "containers/Cart/Cart";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cart />
      {children}
      <Footer />
    </>
  );
}
