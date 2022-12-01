import React from 'react';
import Skills from './Skills';

const About = () => {

  return (
    <section className="about-container" id="about">
      <div className="title-section text-left text-sm-center">
        <h1>
          ABOUT <span>ME</span>
        </h1>
        <span className="title-bg">Resume</span>
      </div>

      <main className="main-content ">
        <div className="container">

          {/* End .row */}

          <hr className="separator" />

          {/* Skills Starts */}
          <div className="row">
            <div className="col-12">
              <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
                My Skills
              </h3>
            </div>
            <Skills />
          </div>
          {/* Skills Ends */}
          <hr className="separator mt-1" />
        </div>
      </main>
    </section>

  );
}

export default About;