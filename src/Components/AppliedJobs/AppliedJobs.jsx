import { Link, useLoaderData } from "react-router-dom";
import { jobGet } from "../utility/localStorage";
import AppliedJobsCard from "../AppliedJobsCard/AppliedJobsCard";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const appliedJobId = jobGet();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        let jobApplied = [];
        for (let id of appliedJobId) {
            const selected = jobs.find(job => job.id === id);
            jobApplied.push(selected);
        }
        setAppliedJobs(jobApplied);

        //ititialy all apply job displayJob hisabe thakbe
        setDisplayJobs(appliedJobs);
    }, []);


    // set displayJobs state 


    const handleDisplayJob = (type) => {
        if (type === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (type === "onsite") {
            const onsite = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsite);
        }
        else if (type === "remote") {
            const remote = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remote);
        }
    }

    console.log(displayJobs);
    return (
        <div>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><Link onClick={() => handleDisplayJob('all')}>All</Link></li>
                    <li><Link onClick={() => handleDisplayJob('remote')}>Remote</Link></li>
                    <li><Link onClick={() => handleDisplayJob('onsite')}>Onsite</Link></li>
                </ul>
            </details>


            <div className="grid grid-cols-2 gap-7">
                {
                    displayJobs.map(job => <AppliedJobsCard key={job.id} job={job}></AppliedJobsCard>)
                }
            </div>
        </div>

    );
};

export default AppliedJobs;