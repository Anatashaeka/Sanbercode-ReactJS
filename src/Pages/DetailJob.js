import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom"

const DetailJob = () => {

    const [dataLowongan, setDataLowongan] = useState([])
    let { slug } = useParams()
    console.log(slug);

    useEffect(() => {
        if (slug !== undefined) {
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${slug}`)
            .then((res) => {
                let result = res.data
                console.log(result);
                setDataLowongan(result)
        })
    }
},[])
    
    return(
        <>
            
<div class="bg-white  mx-auto p-2 sm:p-4 sm:h-full rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
    <div class="h-52 sm:h-full sm:w-72 rounded-xl">
    <img alt="blog photo" src={dataLowongan.company_image_url} class=" mt-10 rounded-2xl h-full w-full object-cover"/>
    </div>
    <div class="flex flex-col flex-1 gap-5 sm:p-2">
        <div class="flex flex-1 flex-col gap-3">
            <div class=" w-full h-19 rounded-2xl">
                <b>{dataLowongan.company_name}</b>
            </div>
            <h1 className="font-bold">Deskripsi Pekerjaan</h1>
            <div class=" w-full h-full rounded-2xl">
                {dataLowongan.job_description}
            </div>
            <h1 className="font-bold">Kualifikasi</h1>
            <div class=" w-full h-full rounded-2xl">
                {dataLowongan.job_qualification}
            </div>
            <h1 className="font-bold">Salary</h1>
            <div class=" w-full h-3 rounded-2xl">
            Rp{dataLowongan.salary_min} - Rp{dataLowongan.salary_max}
            </div>
            <div class=" w-full h-3 rounded-2xl">
            </div>
        </div>
        
    </div>
</div>

        </>
    )
}

export default DetailJob;