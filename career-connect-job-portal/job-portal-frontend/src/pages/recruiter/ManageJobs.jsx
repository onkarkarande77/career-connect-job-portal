import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getAllJobs,
    deleteJob
} from "../../services/jobService";

function ManageJobs() {

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

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this job?")) return;

        try {

            await deleteJob(id);

            alert("Job Deleted Successfully");

            loadJobs();

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message);

        }
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Manage Jobs
            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>Title</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Salary</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        jobs.map((job) => (

                            <tr key={job.id}>

                                <td>{job.title}</td>

                                <td>{job.company?.companyName}</td>

                                <td>{job.location}</td>

                                <td>{job.salary}</td>

                                <td>

                                    <Link
                                        to={`/edit-job/${job.id}`}
                                        className="btn btn-warning btn-sm me-2"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(job.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ManageJobs;