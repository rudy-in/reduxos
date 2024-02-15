// Teams.js
import React from 'react';
import joekamprad from '../../src/joekamprad.jpeg';
import EmptyPic from '../../src/empty.png';
import Rudy from '../../src/rudy.jpg';
import Brian from '../../src/brian.png'

const Teams = () => {
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Meet the incredible minds behind ReduxOS!
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {/* Team member with rudy.jpg */}
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="fade-right">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="Rudy-in"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={Rudy}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-bold">Rudy-in</h2>
                <p className="text-white">Project leader, founder</p>
              </div>
            </div>
          </div>

          {/* Other team members */}
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="fade-down">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="Brian Anderson"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={Brian}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-bold">Brian Anderson</h2>
                <p className="text-white">Co-founder, redfetch maintainer</p>
              </div>
            </div>
          </div>

          {/* Team member with joekamprad.jpeg */}
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="fade-right">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="Joe Kamprad"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={joekamprad}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-bold">Joe Kamprad</h2>
                <p className="text-white">Marketing :)</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="fade-left">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="Myfer"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={EmptyPic}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-bold">Myfer</h2>
                <p className="text-white">Package manager maintainer , cli developer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="fade-up">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="Unkown"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={EmptyPic}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-bold">Null</h2>
                <p className="text-white">Empty</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full" data-aos="fade-right">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="Unkown"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={EmptyPic}
              />
              <div className="flex-grow">
                <h2 className="text-white title-font font-bold">Null</h2>
                <p className="text-white">Empty</p>
              </div>
            </div>
          </div>
          
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default Teams;
