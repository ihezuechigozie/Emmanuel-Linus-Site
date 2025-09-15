import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import VentureSection from "./VentureSection";

import mainImage1 from "../assets/billb1.jpg";
import mainImage2 from "../assets/billb3.jpg";
import mainImage3 from "../assets/billb2.jpg";
import tmIcon1 from "../assets/tmIcon1.JPG";
import tmIcon2 from "../assets/tmIcon2.PNG";
import tmImage6 from "../assets/tmImage1.PNG";
import tmWorkers1 from "../assets/tmWorkers1.jpeg";
import tmWorkers2 from "../assets/tmWorkers2.PNG";
import tmSeminar1 from "../assets/tmSeminar1.jpeg";
import tmSeminar2 from "../assets/tmSeminar2.JPG";

const ventures = [
  {
    id: 1,
    name: "Talkmuch Global LTD",
    founded: "Jan 21, 2022",
    registered: "Feb 13, 2025",
    description:
      "Emmanuel Linus established Talkmuch Global LTD as a multi-industry company focused on innovation, entrepreneurship, and sustainable growth. Operating across smart technology, cryptocurrency & fintech, food & hospitality, and e-commerce, it lays the foundation for a diversified business ecosystem.",
    mainImg: mainImage1,
    gallery: [
      { img: tmIcon1, caption: "TalkMuch Global LTD First Official Brand-Launched  Talkmuch Accessories & More" },
      { img: tmImage6, caption: "The Founder and CEO of TalkMuch Global LTD    Emmanuel Linus" },
      { img: tmIcon2, caption: "TalkMuch Global LTD Second Official Brand-Launched  TalkMuch Exchange" },
    ],
  },
  {
    id: 2,
    name: "Talkmuch Accessories & More",
    website: {
      label: "www.Talkmuchaccess.ng",
      url: "http://www.talkmuchaccess.ng/",
    },
    description:
      "Born from Emmanuel Linus’ passion for technology and innovation, Talkmuch Accessories & More provides smart tech products, electronics, and phone accessories. From a small retail store, it has grown into a leading platform serving students, workers, and tech enthusiasts.",
    milestones: [
      "2024: Launched official website",
      "2025: Released mobile app for wider accessibility",
    ],
    futureGoals: [
      "Expand physical and digital presence across Africa",
      "Launch branded Talkmuch-labeled products",
      "Continue delivering high-quality, affordable tech solutions",
    ],
    mainImg: mainImage2,
    gallery: [
      { img: tmWorkers2, caption: "Brand Introduction & Launching of Talkmuch Accessories & More" },
      { img: tmIcon1, caption: "Official Brand 'Talkmuch Accessories & More'" },
      { img: tmWorkers1, caption: "Grand Opening Of Talkmuch Accessories & More, First & Second Office Branches" },
    ],
  },
  {
    id: 3,
    name: "TalkMuch Xchange",
    founded: "Sep 5, 2023",
    description:
      "TalkMuch Xchange is Emmanuel Linus’ foray into digital finance and cryptocurrency. It offers cryptocurrency trading, gift card exchange, social media verification, virtual top-ups, and other digital services designed for security, reliability, and accessibility.",
    mission:
      "Simplify digital finance and cryptocurrency trading for beginners and experienced users alike, with fast, verified, and trustworthy services.",
    mainImg: mainImage3,
    gallery: [
      { img: tmSeminar1, caption: "Brand Introduction, Launching & Celebration of TalkMuch Xchange" },
      { img: tmIcon2, caption: "Official Brand 'TalkMuch Xchange'" },
      { img: tmSeminar2, caption: "KAHMOH Unboxed showcased TalkMuch Global LTD’s TalkMuch Xchange innovation and growth." },
    ],
  },
];

function Ventures() {
  return (
    <div className="w-full text-white bg-gray-900 overflow-x-hidden">
      <div className="w-full z-20 relative">
        <Navbar />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">
          Ventures & Achievements of Emmanuel Linus
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto px-2 sm:px-0 text-sm sm:text-base">
          Emmanuel Linus is a visionary entrepreneur whose passion for innovation and business
          has led to the creation of multiple successful ventures under the Talkmuch Global LTD umbrella.
        </p>
        
        {ventures.map((venture) => (
         <VentureSection key={venture.id} venture={venture} />
        ))}
      </motion.div>
    </div>
  );
}

export default Ventures;
