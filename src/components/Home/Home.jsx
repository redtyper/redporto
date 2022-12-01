import React from "react";
import Hero from "./Hero";
const Home = () => {


  return (
    <section className='home-container' id='home'>
      <div
        className="container-fluid main-container container-home p-0 "
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="color-block d-none d-lg-block"></div>
        <Hero />
      </div>
    </section>

  );
}

export default Home;