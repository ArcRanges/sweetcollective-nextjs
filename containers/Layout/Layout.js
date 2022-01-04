import React from "react";
import Navbar from "containers/Navbar/Navbar";
import Footer from "containers/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
