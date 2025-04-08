import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-800">
      <div className="container px-5 py-24 mx-auto flex flex-wrap md:flex-nowrap">
        {/* Footer Logo and Description */}
        <div className="w-full md:w-1/4 flex-shrink-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            fill="currentColor"
          >
            <path d="M3.5 0c-1.657 0-3 1.567-3 3.5c0 1.655.985 3.042 2.308 3.406l-.497 8.096A.93.93 0 0 0 3.25 16h.5c.55 0 .972-.449.939-.998l-.497-8.096C5.515 6.541 6.5 5.155 6.5 3.5c0-1.933-1.343-3.5-3-3.5m10.083 0l-.833 5h-.625l-.417-5h-.417l-.417 5h-.625l-.833-5h-.417v6.5a.5.5 0 0 0 .5.5h1.302l-.491 8.002a.93.93 0 0 0 .939.998h.5c.55 0 .972-.449.939-.998L12.197 7h1.302a.5.5 0 0 0 .5-.5V0h-.417z" />
          </svg>
            <span className="ml-3 text-xl font-semibold">FoodBlocks</span>
          </a>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati debitis, natus corporis consequuntur soluta tempore voluptatibus. Doloremque, culpa ipsum.
          </p>
          <span className="inline-flex mt-4 justify-center sm:justify-start space-x-4">
            {/* Social Media Icons */}
            <a className="text-gray-400 hover:text-gray-500 transition duration-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-gray-500 transition duration-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-gray-500 transition duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400 hover:text-gray-500 transition duration-300">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>

        {/* Footer Links Sections */}
        <div className="w-full md:w-3/4 flex flex-wrap md:pl-20 md:text-left text-center mt-10 md:mt-0">
          {/* First Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-500">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Second Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-500">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Fourth Link</a>
              </li>
            </nav>
          </div>

          {/* Third Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-gray-500">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-gray-500">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
