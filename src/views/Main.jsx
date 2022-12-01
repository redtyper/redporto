import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "Skills" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Kontakt" },
];

const Main = () => {

  return (
    <div className="yellow">
     
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>

        <div className="tab-panel_list">

          <TabPanel className="home">
              <Home />
          </TabPanel>

          <TabPanel className="about">
              <About />
          </TabPanel>
      
          <TabPanel className="portfolio professional">
              <Portfolio />
          </TabPanel>
  
          <TabPanel className="contact">
              <Contact />
          </TabPanel>
        
        </div>
      </Tabs>
    </div>
  );
};

export default Main;