import React, { useState } from "react";
import Modal from "react-modal";
import heroImg from "../../assets/img/hero/dark.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "bartosz czekaj",
  heroDesignation: "Freelancer",
  heroDescriptions: `I have 5+ years experience in web development.
  I offer a wide variety of services ranging from web services, website solutions, shopping systems, website customization and custom plugins.`,
  heroBtn: "Więcej o mnie",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        
        <div className="col-12 home-details  text-center text-lg-start">
          <div>
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            {/* <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button> */}
          </div>
        </div>
      </div>
      {/* End home-details-container */}

     
    </>
  );
};

export default Hero;
