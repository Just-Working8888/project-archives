import React from "react";

const Header = ({ open, setOpen }) => {
  const handleClick = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <>
      <header className="py-4 h-100%  bg-white shadow-md dark:bg-gray-800 z-20">
        <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <a
            href="/"
            className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          >
            ProLab
          </a>
          <div></div>
          <button
            onClick={handleClick}
            className="p-1 mr-5 -ml-1 rounded-md focus:outline-none focus:shadow-outline-purple bg-black"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
