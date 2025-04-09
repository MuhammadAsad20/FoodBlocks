import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-400 body-font bg-gray-800">
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
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition duration-300">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          </span>
        </div>

        {/* Footer Links Sections */}
        <div className="w-full md:w-3/4 flex flex-wrap md:pl-20 md:text-left text-center mt-10 md:mt-0">
          {/* First Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a href="#" className="hover:text-yellow-400">First Link</a></li>
              <li><a href="#" className="hover:text-yellow-400">Second Link</a></li>
              <li><a href="#" className="hover:text-yellow-400">Third Link</a></li>
              <li><a href="#" className="hover:text-yellow-400">Fourth Link</a></li>
            </nav>
          </div>

          {/* Second Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SERVICES</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a href="#" className="hover:text-yellow-400">Delivery</a></li>
              <li><a href="#" className="hover:text-yellow-400">Pickup</a></li>
              <li><a href="#" className="hover:text-yellow-400">Reservations</a></li>
              <li><a href="#" className="hover:text-yellow-400">Catering</a></li>
            </nav>
          </div>

          {/* Third Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">INFORMATION</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a href="#" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-400">Terms & Conditions</a></li>
            </nav>
          </div>

          {/* Fourth Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">HELP</h2>
            <nav className="list-none mb-10 space-y-2">
              <li><a href="#" className="hover:text-yellow-400">FAQs</a></li>
              <li><a href="#" className="hover:text-yellow-400">Support</a></li>
              <li><a href="#" className="hover:text-yellow-400">Track Order</a></li>
              <li><a href="#" className="hover:text-yellow-400">Feedback</a></li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
