import { JobContext } from "../Context/JobContext"
import { useContext, useState } from 'react'

const ChangePass = () => {

    let { inputChangePassword, setInputChangePassword, functions, changePass } = useContext(JobContext);
    let { functionChangePassword } = functions;
    const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setInputChangePassword({
        ...inputChangePassword,
        [name]: value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      functionChangePassword();
    };

    return (
        <>
        <div className='h-screen w-full flex justify-center items-center'>
            <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow bg-gray sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl ">
                Reset Password
                </div>
                <div className="mt-8">

<form method="POST" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="current_password" className="block mb-2 text-sm font-medium text-gray-900">
            Current Password
          </label>
          <input
            type="text"
            id="current_password"
            name="current_password"
            value={inputChangePassword.current_password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900">
            New Password
          </label>
          <input
            type="text"
            id="new_password"
            name="new_password"
            value={inputChangePassword.new_password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            minLength="8"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-medium text-gray-900">
            New Confirm Password
          </label>
          <input
            type="text"
            id="new_confirm_password"
            name="new_confirm_password"
            value={inputChangePassword.new_confirm_password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            minLength="8"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
      
                        </div>
                    </div>
        </div>
        </>
    )
}

export default ChangePass