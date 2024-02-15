import React from 'react';

const Mainpage = () => {
  return (
    <div data-aos="zoom-in" className="relative isolate">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-30">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white/75 bg-white/10 ring-1 ring-white/30 font-bold hover:bg-white/20 hover:text-white/90">
            ReduxOS is under development.
          </div>
        </div>
        <div className="text-center">
          <h1
            className="text-4xl font-bold tracking-tight sm:text-6xl"
            style={{
              background:
                'linear-gradient(180deg, #f9fafb, #4b5563)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ReduxOS Linux
          </h1>
          <p
            className="mt-6 text-lg font-regular leading-8 text-white/75"
          >
            A powerful Linux distribution for enterprises, developers, cyber sec enthusiasts, and gamers
          </p>
          <br />
          <div className="mt-10 text-center">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-rose-600 to-pink-700 hover:bg-gradient-to-tl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 gradient-shine"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;

