import React from 'react';

function Grill() {
  return (
    <div>
      <section
        className="relative text-white bg-gray-800 bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
        // }}
      >
        {/* ✅ Optional dark overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div> */}

        {/* ✅ Content above overlay */}
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-yellow-300 " style={{ fontFamily: 'Great Vibes, cursive' }}>
Chicken Grill            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote
              bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
            <button className="inline-flex text-black bg-yellow-500 border-0 py-3 px-20 focus:outline-none hover:bg-yellow-600 rounded text-2xl font-bold">
                  Button
                </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded-full w-128 h-128" alt="hero" src="https://images.unsplash.com/photo-1610515304527-cb9932040f4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpY2tlbiUyMGdyaWxsfGVufDB8fDB8fHww" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Grill;
