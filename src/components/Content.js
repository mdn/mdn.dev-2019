import React from "react";

import Hero from "./Hero";
import SectionContent from "./SectionContent";
import SectionData from "./SectionData";
import SectionPlatform from "./SectionPlatform";
import SectionContribute from "./SectionContribute";
import SectionContact from "./SectionContact";

const Content = () => {
  return (
    <main role="main">
      <Hero />
      <div className="general-content-wrapper">
        <div className="col-6">
          <SectionContent />
          <SectionData />
        </div>
        <div className="col-6">
          <SectionContribute />
          <SectionPlatform />
        </div>
      </div>
      <SectionContact />
    </main>
  );
};

export default Content;
