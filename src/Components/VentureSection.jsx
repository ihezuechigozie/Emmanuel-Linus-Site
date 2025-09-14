import React from "react";
import { motion } from "framer-motion";

function VentureSection({ venture }) {
  return (
    <motion.div
      className="mb-20 px-2 sm:px-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          {venture.name}
        </h2>

        {venture.founded && venture.registered && (
          <p className="text-gray-400 mb-2 text-sm sm:text-base">
            Founded: {venture.founded} | Registered: {venture.registered}
          </p>
        )}

        {venture.website && (
          <p className="text-blue-400 underline mb-2 text-center text-sm sm:text-base">
            <a href={venture.website.url} target="_blank" rel="noopener noreferrer">
              {venture.website.label}
            </a>
          </p>
        )}

        <p className="text-white max-w-3xl mx-auto text-sm sm:text-base">
          {venture.description}
        </p>

        {venture.milestones && (
          <ul className="text-gray-300 list-disc list-inside mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            {venture.milestones.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {venture.futureGoals && (
          <ul className="text-gray-300 list-disc list-inside mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            {venture.futureGoals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        )}

        {venture.mission && (
          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
            {venture.mission}
          </p>
        )}
      </div>

      <div className="mb-6 w-full">
        <img
          src={venture.mainImg}
          alt={`${venture.name} main`}
          loading="lazy"
          className="w-full max-w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {venture.gallery.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-md bg-gray-800 flex flex-col"
          >
            <img
              src={item.img}
              alt={`${venture.name} gallery ${index + 1}`}
              loading="lazy"
              className="w-full h-48 md:h-60 object-cover"
            />
            <p className="text-center text-gray-300 mt-2 p-3 text-sm sm:text-base">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default VentureSection;
