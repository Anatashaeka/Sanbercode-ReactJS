import axios from "axios";
import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export const JobContext = createContext();

export const JobProvider = (props) => {
  const [job, setJob] = useState([]);
  const [inputChangePassword, setInputChangePassword] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const [changePass, setChangePass] = useState(false);

  const [inputJob, setInputJob] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "0",
    job_status_0: "",
    job_status_1: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
  });
  const [fetchStatus, setFetchStatus] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  let history = useHistory();

  const fetchData = async () => {
    let fetch = await axios.get("https://dev-example.sanbercloud.com/api/job-vacancy");
    let getData = fetch.data.data;
    setJob(
      getData.map((data) => {
        return {
          id: data.id,
          title: data.title,
          job_description: data.job_description,
          job_qualification: data.job_qualification,
          job_type: data.job_type,
          job_tenure: data.job_tenure,
          job_status: data.job_status,
          company_name: data.company_name,
          company_image_url: data.company_image_url,
          company_city: data.company_city,
          salary_min: data.salary_min,
          salary_max: data.salary_max,
        };
      })
    );
  };

  const functionSubmit = () => {
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/job-vacancy",
        {
          title: inputJob.title,
          job_description: inputJob.job_description,
          job_qualification: inputJob.job_qualification,
          job_type: inputJob.job_type,
          job_tenure: inputJob.job_tenure,
          job_status: inputJob.job_status,
          company_name: inputJob.company_name,
          company_image_url: inputJob.company_image_url,
          company_city: inputJob.company_city,
          salary_min: inputJob.salary_min,
          salary_max: inputJob.salary_max,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((e) => {
        let getData = e.data;
        setJob([
          ...job,
          {
            id: getData.id,
            title: getData.title,
            job_description: getData.job_description,
            job_qualification: getData.job_qualification,
            job_type: getData.job_type,
            job_tenure: getData.job_tenure,
            job_status: getData.job_status,
            company_name: getData.company_name,
            company_image_url: getData.company_image_url,
            company_city: getData.company_city,
            salary_min: getData.salary_min,
            salary_max: getData.salary_max,
          },
        ]);
        // history.push("/dashboard/list-job-vacancy");
        history.goBack()
      });
      setJob("")
  };

  const functionEdit = (editedId, dataLowongan) => {
    axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${editedId}`,
    { headers: { Authorization: "Bearer " + Cookies.get("token") } })
    .then((e) => {
      let res = e.data;
      setInputJob({
        title: res.title,
        job_description: res.job_description,
        job_qualification: res.job_qualification,
        job_type: res.job_type,
        job_tenure: res.job_tenure,
        job_status: res.job_status,
        company_name: res.company_name,
        company_image_url: res.company_image_url,
        company_city: res.company_city,
        salary_min: res.salary_min,
        salary_max: res.salary_max,
      });
      setCurrentId(editedId);
    });
    // history.push("/dashboard/list-job-vacancy");
    history.goBack()
    setJob(dataLowongan)
  };

  const functionUpdate = (currentId) => {
    axios
      .put(
        `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
        {
          title: inputJob.title,
          job_description: inputJob.job_description,
          job_qualification: inputJob.job_qualification,
          job_type: inputJob.job_type,
          job_tenure: inputJob.job_tenure,
          job_status: inputJob.job_status,
          company_name: inputJob.company_name,
          company_image_url: inputJob.company_image_url,
          company_city: inputJob.company_city,
          salary_min: inputJob.salary_min,
          salary_max: inputJob.salary_max,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then(() => {
        // let singleJob = job.find((x) => x.id === currentId);
        console.log("job", job);
        let singleJob = job.find((x) => {
          console.log("x", x);
          return x.id === currentId
          })
        // console.log("singleJob", singleJob);
        singleJob.title = inputJob.title;
        singleJob.job_description = inputJob.job_description;
        singleJob.job_qualification = inputJob.job_qualification;
        singleJob.job_type = inputJob.job_type;
        singleJob.job_tenure = inputJob.job_tenure;
        singleJob.job_status = inputJob.job_status;
        singleJob.company_name = inputJob.company_name;
        singleJob.company_image_url = inputJob.company_image_url;
        singleJob.company_city = inputJob.company_city;
        singleJob.salary_min = inputJob.salary_min;
        singleJob.salary_max = inputJob.salary_max;
        setJob(job);
      });
      history.push("/dashboard/list-job-vacancy");
  };

  const functionDelete = (deletedId) => {
    axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${deletedId}`,
    { headers: { Authorization: "Bearer " + Cookies.get("token") } }).then(() => {
      let newJob = job.filter((x) => {
        return x.id !== deletedId;
      });
      setJob(newJob);
    });
  };

  const functionChangePassword = () => {
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        {
          current_password: inputChangePassword.current_password,
          new_password: inputChangePassword.new_password,
          new_confirm_password: inputChangePassword.new_confirm_password,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then(() => {
        setInputChangePassword({
          current_password: "",
          new_password: "",
          new_confirm_password: "",
        });
        setChangePass(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const functions = {
    fetchData,
    functionEdit,
    functionUpdate,
    functionSubmit,
    functionDelete,
    functionChangePassword,
  };

  return (
    <JobContext.Provider
      value={{
        history,
        job,
        setJob,
        inputJob,
        setInputJob,
        fetchStatus,
        setFetchStatus,
        functions,
        currentId,
        setCurrentId,
        inputChangePassword,
        setInputChangePassword,
        changePass,
        setChangePass }}
    >
      {props.children}
    </JobContext.Provider>
  );
};