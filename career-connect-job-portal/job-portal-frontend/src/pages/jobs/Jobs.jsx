import { useEffect, useState } from "react";
import { getAllJobs } from "../../services/jobService";
import JobCard from "./JobCard";

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
        try {
            const response = await getAllJobs();
            setJobs(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">

            <h2>Available Jobs</h2>

            <div className="row">

                {jobs.map(job => (

                    <div className="col-md-4 mb-3" key={job.id}>
                        <JobCard job={job}/>
                    </div>

                ))}

            </div>

        </div>
    );
};

export default Jobs;