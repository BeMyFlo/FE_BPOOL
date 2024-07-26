import React from 'react';

function Footer() {
  return (
    <footer className="hidden md:bg-gray-600 md:text-white md:py-8 md:bottom-0 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-gray-400">
              We are a leading company in providing quality services and products to our customers. Our mission is to ensure customer satisfaction through continuous improvement and innovation.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M22.225 0H1.771A1.771 1.771 0 000 1.771v20.453A1.771 1.771 0 001.771 24h20.453A1.771 1.771 0 0024 22.225V1.771A1.771 1.771 0 0022.225 0zM7.221 20.453H3.547V9.122h3.674v11.331zM5.384 7.718a2.134 2.134 0 110-4.268 2.134 2.134 0 010 4.268zm15.07 12.735h-3.674v-5.531c0-1.317-.026-3.009-1.834-3.009-1.837 0-2.118 1.433-2.118 2.915v5.625h-3.675V9.122h3.526v1.551h.049c.492-.933 1.696-1.916 3.49-1.916 3.73 0 4.418 2.453 4.418 5.642v6.054z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.373 0 12c0 5.991 4.388 10.958 10.125 11.855v-8.385H7.078v-3.47h3.047V9.157c0-3.025 1.835-4.684 4.522-4.684 1.312 0 2.684.235 2.684.235v2.957h-1.512c-1.491 0-1.954.925-1.954 1.877v2.257h3.328l-.531 3.47h-2.797v8.385C19.613 22.958 24 17.991 24 12 24 5.373 18.629 0 12 0z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.793-1.574 2.163-2.724-.949.555-2.002.959-3.127 1.184-.896-.952-2.173-1.549-3.591-1.549-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.086-.205-7.713-2.164-10.14-5.144-.422.725-.664 1.562-.664 2.457 0 1.697.863 3.194 2.173 4.075-.803-.025-1.56-.247-2.223-.616v.061c0 2.37 1.685 4.348 3.918 4.798-.41.112-.841.171-1.287.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.6 3.415-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.022-1.17-.067 2.179 1.397 4.768 2.211 7.557 2.211 9.054 0 14.002-7.498 14.002-13.986 0-.21 0-.422-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg fill="currentColor" className="h-6 w-6" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zm-6.3 12.11v9.13h-3.56v-8.51c0-2.14-.02-4.91-2.99-4.91-2.99 0-3.45 2.34-3.45 4.77v8.65H5.07V7.48h3.42v1.05h.05c.48-.89 1.64-1.82 3.37-1.82 3.6 0 4.26 2.37 4.26 5.46z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
