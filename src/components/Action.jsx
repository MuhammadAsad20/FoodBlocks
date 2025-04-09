import React from 'react';

function Action() {
  return (
    <section
      className="text-gray-600 body-font bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/collection-spoons-filled-with-various-dry-pasta-white-backdrop_23-2148195052.jpg")',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-transparent opacity-75"></div>

      {/* Content */}
      <div className="container px-5 py-24 mx-auto relative z-10">
        <div className="flex flex-col text-center w-full mb-12">
          <h1
            className="sm:text-6xl text-5xl font-bold title-font mb-4 text-gray-900"
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            Subscribe
          </h1>
          <p className="lg:w-2/4 mx-auto leading-relaxed text-lg font-medium">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
            Franzen you probably haven't heard of them man bun deep.
          </p>
        </div>
        <div className="flex lg:w-2/5 w-full sm:flex-row flex-col mx-auto px-8 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-black bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg font-bold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Action;
