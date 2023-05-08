import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
    let history = useHistory()

    const [input, setInput] = useState({
        email: "",
        password: "",
        image_url: ""
    })

const handleChange = (event) => {
    let {name, value} = event.target
    setInput({...input, [name]: value})
}

const handleRegister = (event) => {

    
    event.preventDefault()
    // console.log(input)

    let {name, image_url, email, password} = input
    axios.post('https://dev-example.sanbercloud.com/api/register', {name, image_url, email, password})
    .then((res) => {
        console.log(res);

        // Cookies.set('token', data.token, {expires: 1})
        history.push('/login')
        console.log(input);
    })
    .catch ((error) => {    
        let {data} = error.response
        let {status} = error.response
        console.log(status);

        if(status === 400){
            alert(data.error)
        }
})
    setInput({
        name: "",
        image_url: "",
        email: "",
        password: ""
    })
}

    return (
        <>

        <div className='h-screen w-full flex justify-center items-center'>
        <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                Create a new account
            </div>
            <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                Already have an account ?
                <Link to="/login" class="text-sm text-blue-500 underline hover:text-blue-700">
                    Sign in
                </Link>
            </span>
            <div class="p-6 mt-8">
                <form action="/login" onSubmit={handleRegister}>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="name" name ="name" onChange={handleChange} required value={input.name} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="image_url" name ="image_url" onChange={handleChange} required value={input.image_url} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Image Url"/>
                                </div>
                            </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="text" id="email" name ="email" onChange={handleChange} required value={input.email} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                                </div>
                            </div>
                        <div class="flex flex-col mb-2">
                            <div class=" relative ">
                                <input type="password" id="password" name ="password" onChange={handleChange} required value={input.password} class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password"/>
                                </div>
                        </div>
                            <div class="flex w-full my-4">
                                <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

        </div>
        </>
    )
}

export default Register;
