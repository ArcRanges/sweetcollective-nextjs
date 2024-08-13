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
              <li>Necklaces</li>
              <li>Earrings</li>
              <li>Watches</li>
            </ul>
          </div>
          <div className="mb-2 footer-col md:mb-0">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Services
            </h4>
            <ul className="footer-links-container">
              <li>Custom Design</li>
              <li>Jewelry Repair</li>
              <li>Engraving</li>
              <li>Appraisal</li>
              <li>Cleaning & Maintenance</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Apply for Credit
            </h4>
            <ul className="footer-links-container">
              <li>Financing Options</li>
              <li>Credit Application</li>
              <li>Special Offers</li>
              <li>Loyalty Program</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <div className="mb-2 footer-col md:mb-0">
            <h4 className="mb-2 text-xs font-bold text-white uppercase">
              Contact Us
            </h4>
            <ul className="footer-links-container">
              <li>Customer Service</li>
              <li>Store Locations</li>
              <li>FAQs</li>
              <li>Returns & Exchanges</li>
              <li>Shipping Information</li>
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
