import React, { useContext} from "react"
import { JobContext } from "../Context/JobContext"

const DataForm = () => {
    const { inputJob, setInputJob, functions, currentId, setCurrentId } = useContext(JobContext);
    const { functionUpdate, functionSubmit } = functions;
    
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let status = ["job_status_0", "job_status_1"];

    if (name === status[1]) {
      setInputJob({ ...inputJob, job_status_1: value, job_status_0: "", job_status: value });
    } else if (name === status[0]) {
      setInputJob({ ...inputJob, job_status_0: value, job_status_1: "", job_status: value });
    } else {
      setInputJob({
        ...inputJob,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentId === null) {
      functionSubmit();
    } else {
      functionUpdate(currentId);
    }
    setInputJob({
      title: "",
      job_description: "",
      job_qualification: "",
      job_type: "",
      job_tenure: "",
      job_status: 0,
      company_name: "",
      company_image_url: "",
      company_city: "",
      salary_min: 0,
      salary_max: 0,
    });
    setCurrentId(null);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="form w-3/4">
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="title" className="text-gray">
            Title
          </label>
          <input type="text" id="title" name="title" value={inputJob.title} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="job_description" className="text-gray">
            Job Description
          </label>
          <textarea id="job_description" name="job_description" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={inputJob.job_description} 
          onChange={handleChange} required />
        </div>
        <div className="mb-6">
          <label htmlFor="job_qualification" className="text-gray">
            Job Qualification
          </label>
          <textarea id="job_qualification" name="job_qualification" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={inputJob.job_qualification} 
          onChange={handleChange} required />
        </div>
        <div className="mb-6">
          <label htmlFor="job_type" className="text-gray">
            Job Type
          </label>
          <input type="text" id="job_type" name="job_type" value={inputJob.job_type} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="job_tenure" className="text-gray">
            Job Tenure
          </label>
          <input type="text" id="job_tenure" name="job_tenure" value={inputJob.job_tenure} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <fieldset className="mb-2">
          <label className="text-gray">Job Status</label>
          <div className="flex items-center mb-4">
            <input id="closed" type="radio" name="job_status_0" 
            onChange={handleChange} value="0" checked={inputJob.job_status_0} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="closed" aria-describedby="closed" />
            <label htmlFor="closed" className="block ml-2 text-sm font-medium text-gray">
              Closed
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input id="opened" type="radio" name="job_status_1" 
            onChange={handleChange} value="1" checked={inputJob.job_status_1} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" aria-labelledby="opened" aria-describedby="opened" />
            <label htmlFor="opened" className="block ml-2 text-sm font-medium text-gray">
              Opened
            </label>
          </div>
        </fieldset>
        <div className="mb-6">
          <label htmlFor="company_name" className="text-gray">
            Company Name
          </label>
          <input type="text" id="company_name" name="company_name" value={inputJob.company_name} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="company_image_url" className="text-gray">
            Company Image (URL)
          </label>
          <input type="text" id="company_image_url" name="company_image_url" value={inputJob.company_image_url} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="company_city" className="text-gray">
            Company City
          </label>
          <input type="text" id="company_city" name="company_city" value={inputJob.company_city} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="salary_min" className="text-gray">
            Minimun Salary
          </label>
          <input type="number" id="salary_min" name="salary_min" value={inputJob.salary_min} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
        </div>
        <div className="mb-6">
          <label htmlFor="salary_max" className="text-gray">
            Maximum Salary
          </label>
          <input type="number" id="salary_max" name="salary_max" value={inputJob.salary_max} 
          onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default DataForm