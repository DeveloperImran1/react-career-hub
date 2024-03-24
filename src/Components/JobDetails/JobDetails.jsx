import { Link, useLoaderData, useParams } from "react-router-dom";
import {  removeJob, setJob } from "../utility/localStorage";
import { ToastContainer } from "react-toastify";




const JobDetails = () => {
    const jobs = useLoaderData();
    const route = useParams();
    const job = jobs.find(job => job.id == route.id);
    const { job_title, company_name, job_type, job_description, contact_information, id } = job;
    // console.log(job);

  




    return (
        <div className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-600">{company_name}</span>
                    <span className="text-sm dark:text-gray-600">{job_type}</span>

                </div>
                <div className="m-3">
                    <a rel="noopener noreferrer" className="text-2xl font-bold hover:underline">{job_title}</a>
                    <p className="mt-2">{job_description}</p>
                </div>
                <div>
                    <ul>
                        <li>{contact_information.phone}</li>
                        <li>{contact_information.email}</li>
                        <li>{contact_information.address}</li>
                    </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <Link className="flex items-center">
                        <button onClick={()=> setJob(id)} type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50 bg-orange-500">Job add now
                            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
                        </button>
                        
                    </Link>
                    <div>
                        <Link  className="flex items-center">
                            <button onClick={()=> removeJob(id)} type="button" className="relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50 bg-orange-500">JOb remove now
                                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
                            </button>
                            <ToastContainer />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;