import React from "react";

export default function Footer() {
  return (
    <footer className="p-10 text-white gucci-bg-green">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="footer-col">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Categories
            </h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
          <div className="mb-2 footer-col md:mb-0">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Services
            </h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Apply for Credit
            </h4>
            <ul className="footer-links-container">
              <li>Bridal Jewelry</li>
              <li>Rings</li>
              <li>Women</li>
              <li>Men</li>
              <li>Non-binary</li>
            </ul>
          </div>
          <div className="mb-2 footer-col md:mb-0">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Contact Us
            </h4>
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
          <p className="my-3 text-xs text-center text-gray-200">
            Made with 💙 by Arc Ranges
          </p>
        </div>
      </div>
    </footer>
  );
}
