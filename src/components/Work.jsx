import React from "react";
import shetrades from "./assets/shetrades.png";
import goat from "./assets/goat.png";

import getfit from "./assets/getfit.png";

const Work = () => {


  return (
    <div name="work" className="w-full md:h-screen text-pink-500 ">
      <div className="max-w-[1200px] mx-auto p-12 flex flex-col justify-center w-full h-full mt-60px">
        <div className="">
          <p className="text-4xl  font-bold inline border-b-4 text-white border-pink-600">
            Work
          </p>
          <p className="py-6 font-bold">Check out some of my recent work</p>
        </div>

        {/* Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}

          <div
            style={{ backgroundImage: `url(${goat})` }}
            className="shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-pink tracking-wider">
                Goat Shop
              </span>
              <div className="pt-8 text-center">
                <a href="https://fierce-depths-17640.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/diiiiana99/e-commerce">
                  <button className="text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${getfit})` }}
            className="shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-pink tracking-wider">
                GetFit Fitness App
              </span>
              <div className="pt-8 text-center">
                <a href="getFit">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/diiiiana99/fitness-app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${shetrades})` }}
            className="shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-1xl font-bold text-pink tracking-wider">
SheTrades              </span>
              <div className="pt-8 text-center">
              <a href="fenty">
                  <button className="text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/diiiiana99/fenty-beauty-project-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

        

        </div>
      </div>
    </div>


    
 
      
  );
}

export default Work;

