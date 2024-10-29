import React from "react";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import bgImage from "../../assets/hero/bgImage.png";

function Home() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      >
        <Header />
        <Hero />
        <Products />
      </div>
    </div>
  );
}

export default Home;
