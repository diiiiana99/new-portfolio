import React from "react";
import shecodes from "../assets/shecodes.png";
import shetrades from "../assets/shetrades.png";
import tesla from "../assets/tesla.png";
import goat from "../assets/goat.png";
import fenty from "../assets/fenty.png";
import getfit from "../assets/getfit.png";

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
                <a href="https://safe-wave-75851.herokuapp.com/">
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
                <a href="https://youtu.be/3pkQJhyUnEA">
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
                SheTrades Crypto App
              </span>
              <div className="pt-8 text-center">
                <a href="https://shielded-wave-83109.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/diiiiana99/SheTrades">
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
};

export default Work;

//additional project that I may add in the future

/* <div
style={{ backgroundImage: `url(${tesla})` }}             
 className='shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div'
>
{/* Hover Effects */
/* <div className='opacity-0 group-hover:opacity-100'>
  <span className='text-1xl font-bold text-pink tracking-wider'>
    Tesla Clone React App
  </span>
  <div className='pt-8 text-center'>
    <a href='https://aqueous-oasis-77613.herokuapp.com/'>
      <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg'>
        Demo
      </button>
    </a>
    <a href='https://github.com/diiiiana99/Tesla-Clone'>
      <button className='text-center rounded-lg px-4 py-3 m-2  hover:bg-pink-400 hover:border-pink-100 text-white font-bold text-lg'>
        Code
      </button>
    </a>
  </div>
</div>

</div> */
/* <div
style={{ backgroundImage: `url(${shecodes})` }}
className="shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div"
>
{/* Hover Effects */
/* <div className="opacity-0 group-hover:opacity-100">
  <span className="text-1xl font-bold text-pink tracking-wider">
    SheCodes Coding App
  </span>
  <div className="pt-8 text-center">
    <a href="https://youtu.be/wmqvXji233s">
      <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
        Demo
      </button>
    </a>
    <a href="https://github.com/diiiiana99/SheCodes">
      <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
        Code
      </button>
    </a>
  </div>
</div>
</div>*/

/* <div
style={{ backgroundImage: `url(${fenty})` }}
className="shadow-lg shadow-[#f774c5] group container rounded-md flex justify-center items-center mx-auto content-div"
>

<div className="opacity-0 group-hover:opacity-100">
  <span className="text-1xl font-bold text-pink tracking-wider">
    Fenty Beauty E-Commerce
  </span>
  <div className="pt-8 text-center">
    <a href="https://vimeo.com/707940460">
      <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-pink-100 text-white  font-bold text-lg">
        Demo
      </button>
    </a>
    <a href="https://github.com/diiiiana99/fenty-beauty-project-react">
      <button className="text-center rounded-lg px-4 py-3 m-2 hover:bg-pink-400 hover:border-white text-white  font-bold text-lg">
        Code
      </button>
    </a>
  </div>
</div>
</div> */
