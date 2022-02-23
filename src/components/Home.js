import React from "react";
import Navbar from "./Navbar";
import Featured from "./Featured";
import Meet from "./Meet";
import Recent from "./Recent";
import UpcomingE from "./UpcomingE";
import PastE from "./PastE";
import RecentNews from "./RecentNews";
import OurTeam from "./OurTeam";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Resources from "./Resources";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Featured />
      <Meet />
      <Recent />
      <UpcomingE />
      <PastE />
      <RecentNews />
      <OurTeam />
      <Gallery />
      <Testimonials />
      <Partners />
      <Resources />
      <Footer />\
    </div>
  );
};

export default Home;
