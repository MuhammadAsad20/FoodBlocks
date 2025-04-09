import React from 'react';

function Main() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop")',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-gray-950 via-gray-900  to-transparent opacity-95"></div>


      {/* Content */}
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        {/* Left Side - Spacer for Image */}
        <div className="lg:w-1/2 w-full"></div>

        {/* Right Side - Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1
            className="text-5xl sm:text-8xl font-medium text-yellow-300 mb-10"
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            Title Here
          </h1>
          <p className="text-white text-xl leading-relaxed mb-8">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
            Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="text-black bg-yellow-500 border-0 py-3 px-20 focus:outline-none hover:bg-yellow-600 rounded text-2xl font-bold">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
