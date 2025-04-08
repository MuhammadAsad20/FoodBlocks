import React from 'react'

function Oriental() {
  return (
    <div>
        <section className="text-white bg-gray-800 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              {/* Even larger circular image */}
              <img className="object-cover object-center rounded-full w-128 h-128" alt="hero" src="https://images.unsplash.com/photo-1673874302519-46c05e420384?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-7xl text-3xl mb-4 font-medium text-yellow-300 " style={{ fontFamily: 'Great Vibes, cursive' }}>
                Oriental Taste
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
                Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-black bg-yellow-500 border-0 py-3 px-20 focus:outline-none hover:bg-yellow-600 rounded text-2xl font-bold">
                  Button
                </button>
               
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Oriental
