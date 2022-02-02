import React from "react";
import Navbar from "containers/Navbar";
import Footer from "containers/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
