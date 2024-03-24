import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// react toast: 
const notify = () => toast("Wow Successfully Added !");
const exist = () => toast("Allready this job Added !");
const remove = () => toast("Remove this job !");

// get gob key
export const jobGet = () => {
    let jobs = [];
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
        jobs = JSON.parse(storedJobs);
    }
    return jobs;
};


// set or update job;  aikhane localStore a full job er object k set na kore sudho job er id ta set kore dila better hoi. Kinto tokhon stored kora job UI te show korer jonno abar oi id dia fetch kore nia aste hobe.
export const setJob = (jobId) => {
    let jobs = jobGet();
    const isExist = jobs.find(id => id === jobId);
    if (isExist) {
        return exist()
    }
    jobs.push(jobId);
    const stringJob = JSON.stringify(jobs);
    localStorage.setItem('jobs', stringJob);
    notify();
}


// remove job in localStorage
export const removeJob = (jobId) => {
    const jobs = jobGet();
    const currentJob = jobs.filter(id => id !== jobId);
    const stringJob = JSON.stringify(currentJob);
    localStorage.setItem('jobs', stringJob);
    remove();
}