import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png"

const SideBar = () => {
    return(
        <>
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
            <div className="bg-white h-full">
            <Link to="/" className="flex-shrink-0">
                        <img className="w-40" src={Logo} alt="Workflow"/>
                    </Link>
                <div className="flex items-center justify-start pt-6 ml-8">
                    <button className="font-bold text-xl text-gray-800">
                        Dashboard
                    </button>
                </div>
                <nav className="mt-6">
                    <div>
                        <Link to= "/dashboard/list-job-vacancy" className="w-full text-gray-800 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-400 border-l-4 border-transparent">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-2 text-sm font-normal">
                                List Job Vacancy
                            </span>
                        </Link>
                        
                        <Link to= "/dashboard/list-job-vacancy/form" className="w-full text-gray-800 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-400 border-l-4 border-transparent">
                            <span className="text-left">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Form Job Vacancy
                            </span>
                        </Link>

                        <Link to="/change-password" className="w-full text-gray-800 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-400 border-l-4 border-transparent">
                            <span className="text-left">
                            <svg width="20" fill="currentColor" height="20" className="h-5 w-5" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z">
                                    </path>
                                </svg>

                            </span>
                            <span className="mx-4 text-sm font-normal">
                                Change Password
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
        </>
    )
}

export default SideBar;