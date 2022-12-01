import React  from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";

const Portfolio = () => {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };



  return (
    <>
      <section className="portfolio-container" id="portfolio">
        <div
          className="title-section text-left text-sm-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1>
            my <span>portfolio</span>
          </h1>
          <span className="title-bg">works</span>
        </div>

        <div className="portfolio-main">
          <Tabs>
            <TabList className="portfolio-tab-list" data-aos="fade-up">
              <Tab>ALL</Tab>
              <Tab>WEBSITES</Tab>
              <Tab>WORDPRESS</Tab>
              <Tab>PRESTASHOP</Tab>
              <Tab>PLUGINS</Tab>
            </TabList>

            <div className="container">
              <TabPanel>
                <div className="tab-container">
                  {PortfolioData.map((item) => {
                    const { id, type, image, delayAnimation, link } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => openInNewTab(link)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {PortfolioData.filter((item) => item.tag.includes("websites")).map(
                    (item) => {
                      const { id, type, image, delayAnimation, link } = item;                      return (
                        <div
                          key={id}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => openInNewTab(link)}
                          >
                            <img src={image} alt="portfolio project demo" />
                            <h3>
                              <span className="conent-title">{type}</span>
                            </h3>
                          </div>
                          
                        </div>
                      );
                    }
                  )}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {PortfolioData.filter((item) => item.tag.includes("wordpress")).map(
                    (item) => {
                      const { id, type, image, delayAnimation, link } = item;                      return (
                        <div
                          key={id}
                          data-aos="fade-right"
                          data-aos-delay={delayAnimation}
                        >
                          <div
                            className="tab-content"
                            onClick={() => openInNewTab(link)}
                          >
                            <img src={image} alt="portfolio project demo" />
                            <h3>
                              <span className="conent-title">{type}</span>
                            </h3>
                          </div>
                          
                        </div>
                      );
                    }
                  )}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {PortfolioData.filter((item) =>
                    item.tag.includes("prestashop")
                  ).map((item) => {
                    const { id, type, image, delayAnimation, link } = item;                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => openInNewTab(link)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <div className="tab-container">
                  {PortfolioData.filter((item) =>
                    item.tag.includes("plugins")
                  ).map((item) => {
                    const { id, type, image, delayAnimation, link } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => openInNewTab(link)}
                        >
                          <img src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        
                      </div>
                    );
                  })}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
