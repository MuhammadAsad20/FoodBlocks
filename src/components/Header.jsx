import React from 'react';

function Header() {
  return (
    <header className="text-white body-font bg-none bg-gray-800 opacity-99">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center gap-x-10">
        <a className="flex items-center space-x-3 text-white mb-4 md:mb-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="1em"
            height="1em"
            fill="currentColor"
          >
            <path d="M3.5 0c-1.657 0-3 1.567-3 3.5c0 1.655.985 3.042 2.308 3.406l-.497 8.096A.93.93 0 0 0 3.25 16h.5c.55 0 .972-.449.939-.998l-.497-8.096C5.515 6.541 6.5 5.155 6.5 3.5c0-1.933-1.343-3.5-3-3.5m10.083 0l-.833 5h-.625l-.417-5h-.417l-.417 5h-.625l-.833-5h-.417v6.5a.5.5 0 0 0 .5.5h1.302l-.491 8.002a.93.93 0 0 0 .939.998h.5c.55 0 .972-.449.939-.998L12.197 7h1.302a.5.5 0 0 0 .5-.5V0h-.417z" />
          </svg>
          <span className="text-2xl font-bold text-white">FoodBlocks</span>
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-x-10">
          <a className="mr-5 hover:text-yellow-500 text-lg cursor-pointer">Home</a>
          <a className="mr-5 hover:text-yellow-500 text-lg cursor-pointer">Product</a>
          <a className="mr-5 hover:text-yellow-500 text-lg cursor-pointer">Promo</a>
          <a className="mr-5 hover:text-yellow-500 text-lg cursor-pointer">About</a>
          <a className="mr-5 hover:text-yellow-500 text-lg cursor-pointer">Contact</a>
        </nav>

        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-yellow-500 rounded text-base mt-4 md:mt-0 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6 ml-1"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="16.5" y1="16.5" x2="35" y2="35" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
