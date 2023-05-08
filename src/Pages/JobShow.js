import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const JobShow = () => {


  const [dataLowongan, setDataLowongan] = useState([])
  const [fetchStatus, setFetchStatus] = useState(true)
  const [search, setSearch] = useState("")

  useEffect(() => {
    let fetchData = async () => {
      let { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      
      let result = data.data

      setDataLowongan(result)
    }

    fetchData()
  }, [])

  console.log(dataLowongan);

  const handleChangeSearch = (event) => {
    // console.log()
    setSearch(event.target.value)
}
const handleSearch = (event) => {
  event.preventDefault()
  // console.log(search);

  axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
  .then(({data}) => {
      let fetchResult = data.data
      // console.log(fetchResult)

      let result = fetchResult.filter((res) => {
          return Object.values(res).join('').toLowerCase().includes(search.toLowerCase());
      })
      // console.log(result);

      setDataLowongan([...result])
      setSearch("")
})
}

  return (
    <>
    
<div class="w-full bg-white p-12">
    <div class="header flex items-end justify-between mb-12">
        <div class="title">
            <p class="text-2xl font-light text-gray-800">
                Lowongan Yang Tersedia : 
            </p>
        </div>
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center mt-6">
                    <input value={search} onChange={handleChangeSearch} type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search Job"/>
                    <input value={'Search'} type="submit" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" >
                    </input>
            </form>
            <button onClick={() => {
                setFetchStatus(true)
            }}value={'Search'} type="submit" className="flex-shrink-0 mt-10 px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" >
            Reset Filter
            </button>
            </div>
        </div>  

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      {dataLowongan !== null && (
  <>
    {dataLowongan.map((res, index) => {
      return (
        <>
          <Link to={`/job-vacancy/${res.id}`}>
          <div class="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">

    <img alt="blog photo" src={res.company_image_url} class="max-h-40 w-full object-cover"/>
    <div class="bg-white dark:bg-gray-800 w-full p-4">
        <p class="text-indigo-500 text-md font-medium">
            {res.company_name}
        </p>
        <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
            {res.title}
        </p>
        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
            {res.company_city}
        </p>
        <p class="text-gray-400 dark:text-gray-300 font-light text-md">
            Rp{res.salary_min} - Rp{res.salary_max}
        </p>
        <div class="flex flex-wrap justify-starts items-center mt-4">
            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                {res.job_tenure}
            </div>
            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                {res.job_type}
            </div>
        </div>
        <button type="button" class="mt-5 py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        See Details
        </button>
    </div>
        </div>
          </Link>
        </>
      )
    })}
            
  </>
              )}
      </div>
     
      </>
      
      
  )
}

export default JobShow