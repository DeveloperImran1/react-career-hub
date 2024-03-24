import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { TbCoin } from "react-icons/tb";


const AppliedJobsCard = ({job}) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id } = job;
    return (
        <div className="w-full space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
            <img alt="card navigate ui" className="w-full object-cover  rounded-lg " src={logo} />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">{job_title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{company_name}</p>

            </div>
            <div className="flex gap-4">
                <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">{remote_or_onsite}</button>
                <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">{job_type}</button>
            </div>
            <div className="flex justify-between">
                <div className="text-lg font-semibold flex items-center "><FaLocationDot></FaLocationDot> {location}</div>
                <div className="text-lg font-semibold flex items-center "><TbCoin></TbCoin> {salary}</div>
            </div>
          
        </div>
    );
};

export default AppliedJobsCard;