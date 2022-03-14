import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <footer class="bg-secondary text-center text-white">
        <p>Aashish Garg</p>
      </footer>
    </>
  );
};

export default Main;
