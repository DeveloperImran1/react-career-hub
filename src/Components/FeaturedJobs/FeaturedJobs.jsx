import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this system is not good practice
    const [jobsLength, setJobLength] = useState(2);

    useEffect(() => {
        fetch("jobs.json")
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl text-center">Featured Jobs: {jobs.length} </h1>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>

            <div className="grid grid-cols-2 gap-6 justify-between w-[1400px] items-center ">
                {
                    jobs.slice(0, jobsLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div className={ ` ${jobs.length === jobsLength ? 'hidden' : ''} flex justify-center items-center mb-7` } >
            <button onClick={()=> setJobLength(jobsLength + 2)} className="px-6 py-2  bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-950">View Details</button>

            </div>
        </div>

    );
};

export default FeaturedJobs;