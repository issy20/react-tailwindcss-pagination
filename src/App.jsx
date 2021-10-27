// tailwindcss.config.css
// variants: {
//   backgroundColor: ['active'],
// },

// Dependencies
import React from "react";

// Styles
import "./tailwind.output.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const App = () => {
  const displayPages = [];
  const items = [];
  const currentPage = 4;
  const totalPage = 50;
  for (let i = 1; i <= totalPage; i++) {
    if (
      i === 1 ||
      i === totalPage ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      displayPages.push(i);
    }
  }

  let previousPage;

  for (const page of displayPages) {
    if (previousPage) {
      if (page - previousPage === 2) {
        items.push(
          <div
            key={previousPage + 1}
            className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            {previousPage + 1}
          </div>
        );
      } else if (page - previousPage > 2) {
        items.push(
          <div
            key={previousPage + 1}
            className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
          >
            ...
          </div>
        );
      }
    }
    items.push(
      <div
        key={page}
        className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  "
      >
        {page}
      </div>
    );
    previousPage = page;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center my-12">
        <div className="flex text-gray-700">
          <div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <ChevronLeftIcon />
          </div>
          <div className="flex h-12 font-medium rounded-full bg-gray-200">
            {items}
            {/* <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              1
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              ...
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              2
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-teal-600 text-white ">
              3
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              4
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              ...
            </div>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              15
            </div>
            <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-teal-600 text-white">
              3
            </div> */}
          </div>
          <div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
