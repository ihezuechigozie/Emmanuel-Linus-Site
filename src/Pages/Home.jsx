import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import Footer from "../Components/Footer";


const Home = () => {
  return (
    <div className="font-sans">
     <Navbar />
     <Hero />
     <Biography />
     <Footer />
    </div>
  );
};

export default Home;