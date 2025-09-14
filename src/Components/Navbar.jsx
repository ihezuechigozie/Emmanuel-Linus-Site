import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import tmLogo from "../assets/tmLogo.png";

const menuItems = [
  { name: "About Emmanuel", path: "/" },
  { name: "Ventures", path: "/ventures" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className="absolute top-0 left-0 w-full z-50 bg-transparent"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={tmLogo}
            alt="Talkmuch Logo"
            className="h-10 md:h-12 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white text-sm md:text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`relative pb-1 transition-colors duration-300 ${
                  location.pathname === item.path ? "text-white" : "text-white"
                }`}
              >
                {item.name}
                {/* Underline with animation */}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 ease-in-out ${
                    location.pathname === item.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((s) => !s)}
          className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="md:hidden absolute inset-x-0 top-full bg-black/90 z-40"
          >
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-8 py-10 px-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative text-xl font-semibold ${
                    location.pathname === item.path
                      ? "text-white underline underline-offset-4"
                      : "text-white hover:underline"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
