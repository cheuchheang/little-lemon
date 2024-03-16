import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "10%",
        marginRight: "10%",
        zIndex: 0,
        
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "#495E57",
          width: "100%",
          height: 260,
          top: "10%",
        }}
      />
      <Nav />
      <Hero />
      <Highlights />
      {/* <Testimonials />
      <About />
      <Footer /> */}
    </main>
  );
};

export default HomePage;
