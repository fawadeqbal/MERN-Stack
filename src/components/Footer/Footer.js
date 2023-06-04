import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ title, description }) => {
  return (
    <footer className="text-gray-600 body-font bg-gray-200">
      <hr/>
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span className="text-xl">{title}</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
            CUSTOMER SERVICE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/contact'} className="text-gray-600 hover:text-gray-800">Contact Us</Link>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Second Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              ABOUT
            </h2>
            <nav className="list-none mb-10">
            
              <li>
                <Link to={'/about'} className="text-gray-600 hover:text-gray-800">About us</Link>
              </li>
              <li>
                <Link to={'/location'} className="text-gray-600 hover:text-gray-800">Store Locator</Link>
              </li>
              <li>
                <Link to={'/faqs'} className="text-gray-600 hover:text-gray-800">FAQs</Link>
              </li>
              <li>
                <Link to={'/team'} className="text-gray-600 hover:text-gray-800">Our team</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2023 SpotTroop —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @fawadeqbal
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            
            <a className="ml-3 text-gray-500">
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
            <a className="ml-3 text-gray-500">
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
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;