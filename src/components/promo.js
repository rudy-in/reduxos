// PoweredBySection.js

import React from 'react';
import linuxLogo from '../../src/linux-logo.png';
import gnuLogo from '../../src/gnu-logo.png';
import endeavourOSLogo from '../../src/endeavouros-logo.png';
import tailwindLogo from '../../src/tailwind-logo.png';
import './promo.css';


const PoweredBySection = () => {
  return (
    <section className="powered-by-section text-center py-16 text-white" data-aos="zoom-in">
      <h2 className="text-3xl font-bold mb-8">Powered by</h2>
      <div className="flex justify-center items-center space-x-12">
      <div className="logo-container levitate" id="linuxLogoContainer">
          <img src={linuxLogo} alt="Linux Logo" className="logo" id="linuxLogo" />
        </div>

        <div className="logo-container levitate" id="gnuLogoContainer">
          <img src={gnuLogo} alt="GNU Logo" className="logo" id="gnuLogo" />
        </div>

        <div className="logo-container levitate" id="endeavourOSLogoContainer">
          <img src={endeavourOSLogo} alt="Endeavour OS Logo" className="logo" id="endeavourOSLogo" />
        </div>

        <div className="logo-container levitate" id="tailwindLogoContainer">
          <img src={tailwindLogo} alt="Tailwind CSS Logo" className="logo" id="tailwindLogo" />
        </div>
      </div>
    </section>
  );
};

export default PoweredBySection;