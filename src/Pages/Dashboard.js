import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { JobContext } from "../Context/JobContext"
import Cookies from "js-cookie"

const Dashboard = () => {

    const [dataLowongan, setDataLowongan] = useState([])
    const [fetchStatus, setFetchStatus] = useState(true)

    let history = useHistory()
    const {functions, job, setJob} = useContext(JobContext)
    const {functionEdit} = functions

    useEffect(() => {
        let fetchData = async () => {
            let { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            
            let result = data.data
            
            console.log("useEffect",data);
        setJob(result)
      }
  
      if(fetchStatus){
        // setTimeout(() => fetchData(), 2000); //ms
        fetchData()
        setFetchStatus(false)
    }
    }, [fetchStatus, setFetchStatus])
  
    console.log(dataLowongan);

    const handleEdit = (event) => {
        let editedId = parseInt(event.target.value);
        console.log(editedId);
        functionEdit(editedId, dataLowongan);
      };
    
     const handleDelete = (event) => {
        let deletedId = parseInt(event.target.value) 
        axios
        .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${deletedId}`, 
        {headers: {Authorization: "Bearer " + Cookies.get("token")}}
        )
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })
    .catch ((err) => {
        console.log(err.message);
    });
};

    const data = dataLowongan

    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState({
        job_type:"",
        company_name:"",
        company_city:"",
    })

    
    const handleChangeSearch = (event) => {
        setSearch(event.target.value)
    }
    
    const handleChangeFilter = (event) => {
        let{name, value} = event.target
        setFilter({...filter, [name]: value
        })
    }

    const handleSearch = (event) => {
        event.preventDefault()

        axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
        .then(({data}) => {
            let fetchResult = data.data

            let result = fetchResult.filter((res) => {
                return Object.values(res).join('').toLowerCase().includes(search.toLowerCase());
            })

            setDataLowongan([...result])
            setSearch("")
    })
}

const handleFilter = (event) => {
    event.preventDefault()
    console.log(filter);
    axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
    .then(({data}) => {
        let fetchResult = data.data

        let result = fetchResult.filter((res) => {
            return res.job_type.toLowerCase() === filter.job_type.toLowerCase() &&
            res.company_name.toLowerCase() === filter.company_name.toLowerCase() &&
            res.company_city.toLowerCase() === filter.company_city.toLowerCase() 
        })

        setDataLowongan([...result])
        setFilter("")
})
}

            return (
              <>
            <form onSubmit={handleFilter} className="flex flex-col md:flex-row w-3/4 md:w-full max-w-md md:space-x-3 space-y-3 md:space-y-0 justify-center">
                    <input name="job_type" value={filter.job_type} onChange={handleChangeFilter} type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="type.."/>
                    <input name="company_city" value={filter.company_city} onChange={handleChangeFilter} type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="city.. "/>
                    <input name="company_name" value={filter.company_name} onChange={handleChangeFilter} type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="company.."/>
                    <input value={'Filter'} type="submit" className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" >
                    </input>
            </form>
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

            <div className="container mx-auto px-4 sm:px-8 w-full">
                <div className="py-8">
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Title                 
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Company
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            City
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Description
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Qualification
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Tenure
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Type
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Salary
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Status
                            </th>
                            <th scope="col" className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                            Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    {job !== null && (
                    <>
                {job.map((res,index) => {
                    return(
                        <>
                        <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.title}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.company_name}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.company_city}
                                </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.job_description}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.job_qualification}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.job_tenure}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {res.job_type}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                Rp{res.salary_min} - Rp{res.salary_max}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {res.job_status}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <Link to={`/list-job-vacancy/edit/${res.id}`}>
                            <button onClick={handleEdit} value={res.id} className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                                Edit
                            </button>
                            </Link>
                            <button onClick={handleDelete} value={res.id} type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg mt-5 ">delete</button>
                            </td>
                        </tr>
                        </>
                    )})}
                    </>
                    )}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
              </>
            )
          }
                  

export default Dashboard


