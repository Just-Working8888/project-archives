import React from "react";

const Aside = ({ open, setOpen }) => {

  return (
    <aside
      className={
        open === true
          ? "z-20 w-64 h-[125vh]    overflow-y-auto ease-in-out duration-300 bg-white dark:bg-gray-800 md:block flex-shrink-0 max-sm:absolute"
          : " translate-x-[-100%] ease-in-out duration-300"
      }
    >
      <div className={open === true ? " items-center px-6 py-3" : "hidden"}>
        <img className="rounded-full w-16" src="" alt="" />
        <div className="text-gray-400 text-xs ">
          <p>\</p>
          <p>\</p>
        </div>
      </div>
      <div
        className={
          open === true ? "py-4 text-gray-500 dark:text-gray-400" : "hidden"
        }
      >
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            {/* <span
            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
            aria-hidden="true"
          ></span> */}
            <a
              className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
              href="/"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="ml-4">Home</span>
            </a>
          </li>
        </ul>

        <ul>
          <li className="relative px-6 py-3">
            <a
              to={"/alluser"}
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              href="forms.html"
            >
              <svg
                className="w-5 h-5"
                ariaHidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
              <span className="ml-4">Список Сотрудников</span>
            </a>
          </li>

          <li className="relative px-6 py-3">
            <a href="/" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <svg
                className="w-5 h-5"
                ariaHidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </svg>
              <span className="ml-4">Отчет</span>
            </a>
          </li>
          <li className="relative px-6 py-3">
            <div className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200">
              <div>---</div>
              <span className="ml-4">logout </span>
            </div>
          </li>
          {/* <li className="relative px-6 py-3">
          <a
            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            to={"/balanse"}
          >
            <svg
              className="w-5 h-5"
              ariaHidden="true"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
            </svg>
            <span className="ml-4">Profile</span>
          </a>
        </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
