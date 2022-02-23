import React from "react";
import Navbar from "../components/Navbar";
import Resources from "../components/Resources";
import Footer from "../components/Footer";

const ResourcesPage = () => {
  return (
    <div>
      <Navbar />
      <Resources className="md:mt-4 md:0" />
      <Footer />
    </div>
  );
};

export default ResourcesPage;
