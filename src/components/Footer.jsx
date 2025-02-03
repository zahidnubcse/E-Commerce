import React from "react";
import { assets } from "../assets/assets";
import { FaFacebookF, FaGoogle, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-700">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <img src={assets.logo} className="mb-4 w-28 mx-auto md:mx-0" alt="Logo" />
          <p className="max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit incidunt quasi blanditiis ipsa nisi tempora.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-3">COMPANY</p>
          <ul className="space-y-2 cursor-pointer">
            <li className="hover:text-blue-600 transition">Home</li>
            <li className="hover:text-blue-600 transition">About Us</li>
            <li className="hover:text-blue-600 transition">Delivery</li>
            <li className="hover:text-blue-600 transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold mb-3">GET IN TOUCH</p>
          <ul className="space-y-2">
            <li>📞 +8801817844031</li>
            <li>✉️ zahidnubcse@gmail.com</li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-600 transition" />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-xl hover:text-red-600 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-xl hover:text-black transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center">
        <hr className="border-gray-300" />
        <p className="py-5 text-sm">© 2024 Forever.com - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
