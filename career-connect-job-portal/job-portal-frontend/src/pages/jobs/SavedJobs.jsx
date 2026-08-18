import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getSavedJobs,
    removeSavedJob
} from "../../services/savedJobService";
import { toast } from "react-toastify";

const SavedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        loadSavedJobs();
    }, []);

    const loadSavedJobs = async () => {

        try {

            const response = await getSavedJobs(userId);

            setJobs(response.data);

        } catch (error) {

            console.log(error);

        }
    };

    const handleRemove = async (savedJobId) => {

        try {

            await removeSavedJob(savedJobId);

            toast   .success("Removed Successfully");

            loadSavedJobs();

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">Saved Jobs</h2>

            {jobs.length === 0 ? (

                <h5>No Saved Jobs</h5>

            ) : (

                jobs.map((saved) => (

                    <div
                        key={saved.id}
                        className="card shadow mb-3"
                    >

                        <div className="card-body">

                            <h4>{saved.job.title}</h4>

                            <h6>{saved.job.company.companyName}</h6>

                            <p>
                                <strong>Location :</strong>{" "}
                                {saved.job.location}
                            </p>

                            <Link
                                to={`/jobs/${saved.job.id}`}
                                className="btn btn-primary me-2"
                            >
                                View
                            </Link>

                            <button
                                className="btn btn-danger"
                                onClick={() => handleRemove(saved.id)}
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                ))

            )}

        </div>

    );
};

export default SavedJobs;