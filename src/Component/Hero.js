import react from "react";
import hero from "../assets/img/hero.png";

const Hero = () => {
    return (
        <>
        <div className="relative bg-white overflow-hidden">
        <div className="max-w-full mx-20">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                
              </div>
              <div className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img className="h-8 w-auto" src="https://icons8.com/illustrations/illustration/business-3d-colleagues-standing" alt="" />
                    </div>
                    <div className="-mr-2">
                      <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">JobCorner</span><br/>
                  <span className="text-5xl block text-indigo-400 xl:inline">You deserve a job that loves you back ♡ </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Millions of people are searching for jobs, salary information, company reviews, and interview questions. See what others are looking for on JobCorner today.</p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={hero} alt="" />
        </div>
      </div>
        </>
    );
}

export default Hero;