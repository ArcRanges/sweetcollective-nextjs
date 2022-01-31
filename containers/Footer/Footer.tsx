import React from "react";

export default function Footer() {
  return (
    <footer className="p-10 text-white gucci-bg-green">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="footer-col">
            <h4 className="text-xs uppercase mb-2">Categories</h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
          <div className="footer-col mb-2 md:mb-0">
            <h4 className="text-xs uppercase mb-2">Services</h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="text-xs uppercase mb-2">Apply for Credit</h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
          <div className="footer-col mb-2 md:mb-0">
            <h4 className="text-xs uppercase mb-2">Contact Us</h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-xs text-gray-200 text-center my-5">
            Copyright (C) 2021 by Arc Ranges. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
