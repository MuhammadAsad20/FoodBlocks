import React from 'react'

function Main() {
  return (
    <>
      <section className="body-font h-screen bg-gray-800 relative">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">

          {/* Left side - Image */}
          <div className="lg:w-1/2 w-full h-full relative">
            <img className="object-cover object-center w-full h-full" alt="hero" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-gray-800 opacity-40"></div> {/* Optional overlay */}
          </div>

          {/* Right side - Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-8xl text-3xl mb-10 font-medium text-yellow-300"   style={{ fontFamily: 'Great Vibes, cursive' }}>Title Here</h1>
            <p className="mb-8 text-white text-xl leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-yellow-500 border-0 py-3 px-20 focus:outline-none hover:bg-yellow-600 rounded text-2xl font-bold">
                Order Now
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Main
