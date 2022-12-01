import React from 'react';
import Form from "./Form";
import Social from "./Social";

const Contact = () => {
  return (
    <section className="contact-container" id="contact">
      <div
        className="title-section text-left text-sm-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>
          get in <span>touch</span>
        </h1>
        <span className="title-bg">contact</span>
      </div>
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="row">
          {/*  Left Side Starts */}
          <div className="col-12 col-lg-4">
            <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
              Don't be shy !
            </h3>
            <p className="open-sans-font mb-4">
              Feel free to get in touch with me. I am always open to
              discussing new projects, creative ideas or opportunities to
              be part of your visions.
            </p>
            <p className="open-sans-font custom-span-contact position-relative">
              <i className="fa fa-envelope-open position-absolute"></i>
              <span className="d-block">mail me</span>{" "}
              <a href="mailto:steve@mail.com">itbartosz@gmail.com</a>
            </p>
            {/* End .custom-span-contact */}

            <p className="open-sans-font custom-span-contact position-relative">
              <i className="fa fa-phone-square position-absolute"></i>
              <span className="d-block">call me</span>{" "}
              <a href="Tel: +216 21 184 010">+48 889 140 097</a>
            </p>

            <Social />
            {/* End Social */}
          </div>
          {/* Left Side Ends */}

          {/*  Contact Form Starts  */}
          <div className="col-12 col-lg-8">
            <Form />
          </div>
          {/*  Contact Form Ends */}
        </div>
      </div></section>
  );
}

export default Contact;