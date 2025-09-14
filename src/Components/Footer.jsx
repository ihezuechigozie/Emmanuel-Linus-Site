import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import tmIcon0 from "../assets/tmIcon0.PNG";
import tmIcon1 from "../assets/tmIcon1.JPG";
import tmIcon2 from "../assets/tmIcon2.PNG";

const Footer = () => {
  const brands = [
    { name: "Talkmuch Global", logo: tmIcon0 },
    { name: "Talkmuch Accessories", logo: tmIcon1 },
    { name: "TM Xchange", logo: tmIcon2 },
  ];

  return (
    <footer className="bg-white py-8 mt-12">
      {/* Companies Heading */}
      <h2 className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-center mb-6">
        Companies
      </h2>

      {/* Company Logos */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {brands.map((brand, index) => (
          <motion.img
            key={index}
            src={brand.logo}
            alt={brand.name}
            className="h-30 w-auto object-contain cursor-pointer"
            loading="lazy"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="https://www.instagram.com/officialtalkmuch?igsh=MTN3a2Z1YmdpaHZiYw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-pink-700 text-3xl hover:text-pink-500 transition-all duration-300 ease-in-out" />
        </a>

        <a
          href="https://www.facebook.com/share/1KssiJStoZ/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-blue-800 text-3xl hover:text-blue-600 transition-all duration-300 ease-in-out" />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-center mt-6 text-sm">
        © {new Date().getFullYear()} Emmanuel Linus. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
