import { useEffect, useState } from "react";
import {
    getAllJobs,
    searchJobs,
    getJobsByLocation,
    getJobsByType,
    getJobsByExperience
} from "../../services/jobService";
import JobCard from "./JobCard";
import Loading from "../../components/Loading";

function JobList() {

    const [jobs, setJobs] = useState([]);

    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [experience, setExperience] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {

         try {

        setLoading(true);

        const response = await getAllJobs();

        setJobs(response.data);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }

    };

    const handleSearch = async () => {

        if (!keyword.trim()) {

            loadJobs();
            return;

        }

        try {

            const response = await searchJobs(keyword);

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleLocation = async (value) => {

        setLocation(value);

        if (value === "") {

            loadJobs();
            return;

        }

        try {

            const response = await getJobsByLocation(value);

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleJobType = async (value) => {

        setJobType(value);

        if (value === "") {

            loadJobs();
            return;

        }

        try {

            const response = await getJobsByType(value);

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleExperience = async (value) => {

        setExperience(value);

        if (value === "") {

            loadJobs();
            return;

        }

        try {

            const response = await getJobsByExperience(value);

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const resetFilters = () => {

        setKeyword("");
        setLocation("");
        setJobType("");
        setExperience("");

        loadJobs();

    };

    if (loading) {

    return <Loading />;

} 

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Available Jobs
            </h2>

            <div className="row mb-4">

                <div className="col-md-4">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Job..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                    />

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-primary w-100"
                        onClick={handleSearch}
                    >
                        Search
                    </button>

                </div>

                <div className="col-md-2">

                    <select
                        className="form-select"
                        value={location}
                        onChange={(e) =>
                            handleLocation(e.target.value)
                        }
                    >

                        <option value="">Location</option>
                        <option>Pune</option>
                        <option>Mumbai</option>
                        <option>Bangalore</option>
                        <option>Hyderabad</option>

                    </select>

                </div>

                <div className="col-md-2">

                    <select
                        className="form-select"
                        value={jobType}
                        onChange={(e) =>
                            handleJobType(e.target.value)
                        }
                    >

                        <option value="">Job Type</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Internship</option>
                        <option>Remote</option>

                    </select>

                </div>

                <div className="col-md-2">

                    <select
                        className="form-select"
                        value={experience}
                        onChange={(e) =>
                            handleExperience(e.target.value)
                        }
                    >

                        <option value="">Experience</option>
                        <option>Fresher</option>
                        <option>1 Year</option>
                        <option>2 Years</option>
                        <option>3 Years</option>
                        <option>5+ Years</option>

                    </select>

                </div>

            </div>

            <div className="mb-4">

                <button
                    className="btn btn-secondary"
                    onClick={resetFilters}
                >
                    Reset Filters
                </button>

            </div>

            {
                jobs.length > 0 ? (

                    jobs.map((job) => (

                        <JobCard
                            key={job.id}
                            job={job}
                        />

                    ))

                ) : (

                    <div className="alert alert-info">
                        No jobs found.
                    </div>

                )
            }

        </div>

    );

}

export default JobList;