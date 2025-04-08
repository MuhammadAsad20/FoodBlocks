import React from 'react'

function Features() {
  return (
    <>
      <section
        className="relative text-black bg-gray-800 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-yellow-300 opacity-90"></div> 
        <div className="container px-5 py-50 mx-auto relative z-10">
          <div className="flex flex-col text-center w-full">
            <p className="lg:w-2/4 mx-auto mb-10 text-lg font-medium leading-relaxed text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem vel magnam voluptatem doloremque repellendus dolor ipsum illo non! Libero doloremque aperiam, nulla quia pariatur cumque odio exercitationem sunt iste? Nisi.</p>
            <h1 className="sm:text-6xl text-5xl font-bold title-font text-gray-900" style={{ fontFamily: 'Great Vibes, cursive' }}>
              Lenora Fields
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
