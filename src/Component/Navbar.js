import React, { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import { JobContext } from "../Context/JobContext"
import Cookies from "js-cookie"

const Navbar = () => {
    let history = useHistory()
    const {searchStatus, setSearchStatus} = useContext(JobContext)

    let [display, setDisplay] = useState('hidden')
    
    return (
        <>
        
<div>
    <nav className="bg-white  shadow ">
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex items-center justify-between h-16">
                <div className=" flex items-center">
                    <Link to="/" className="flex-shrink-0">
                        <img className="w-40" src={Logo} alt="Workflow"/>
                    </Link>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to='/' className="text-gray-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium" >Home</Link>
                            <Link to='/dashboard' className="text-gray-500 hover:text-gray-800 dark:hover:text-black block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                            {!Cookies.get('token') && <Link to={"/register"} class="text-gray-500  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium" >
                                Register
                                        </Link>} 
                            {!Cookies.get('token') && <Link to='/login'>
                                Login
                                </Link>}
                                {Cookies.get('token') && <Link onClick={() => {
                                    Cookies.remove('token')
                                    Cookies.remove('user')
                                    // window.location.reload()
                                    history.push('/login')  
                                }}>
                                Logout
                            </Link>
                            }
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <div className="ml-3 relative">
                            <div className="relative inline-block text-left">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                    <button onClick={ () => {
                        setDisplay(display === 'hidden' ? 'block' : 'hidden')
                    }
                    } className="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                        <svg width="20" height="20" fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className={`${display} md:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to='/' className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" >Home</Link>
                <Link to='/dashboard' className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                
                {!Cookies.get('token') && <Link to={"/login"} class="text-gray-300  hover:text-gray-800  px-3 py-2 rounded-md text-sm font-medium" >
                    Register
                            </Link>} 
                {!Cookies.get('token') && <Link to='/login'>
                    Login
                    </Link>}
                    {Cookies.get('token') && <Link onClick={() => {
                        Cookies.remove('token')
                        Cookies.remove('user')
                        // window.location.reload()
                        history.push('/login')  
                    }}>
                    Logout
                </Link>
                }

            </div>
        </div>
    </nav>
</div>
        </>
    )
}

export default Navbar