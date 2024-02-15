// ComingSoon.js

import React from 'react';
import './promo.css';
import reduxImage from '../../src/redux.png';

const ComingSoon = () => {
  return (
    <section className="text-white body-font" data-aos="flip-right">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          id="levitatingImage"
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={reduxImage}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Coming Soon
          </h1>
          <p className="mb-8 leading-relaxed">*This is coming soon*</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
