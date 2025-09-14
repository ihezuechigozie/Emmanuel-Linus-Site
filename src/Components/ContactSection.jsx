import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

function ContactSection() {
  return (
    <div className="flex flex-col justify-center bg-gray-800 p-6 rounded-xl shadow-lg space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </h3>
        <a
          href="mailto:admin@talkmuchglobal.com"
          className="text-gray-300 hover:text-blue-700 transition-all duration-300 ease-in-out"
        >
          admin@talkmuchglobal.com
        </a>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Address
        </h3>
        <p className="text-gray-300">
          123 Talkmuch Plaza, Lagos, Nigeria (Placeholder)
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/officialtalkmuch?igsh=MTN3a2Z1YmdpaHZiYw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-pink-500 transition-all duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl" />
              <i> Instagram</i>
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/share/1KssiJStoZ/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-700 transition-all duration-300 ease-in-out"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-blue-700 text-xl" />
              <i> Facebook</i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactSection;
