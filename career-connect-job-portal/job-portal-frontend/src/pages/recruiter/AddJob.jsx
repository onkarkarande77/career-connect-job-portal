import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addJob } from "../../services/jobService";

const AddJob = () => {

    const navigate = useNavigate();

    const companyId = localStorage.getItem("userId");

    const [job, setJob] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
        experience: "",
        skills: "",
        jobType: ""
    });

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addJob({
                ...job,
                companyId: Number(companyId)
            });

            alert("Job Posted Successfully");

            navigate("/manage-jobs");

        } catch (err) {

            console.log(err);

            alert(err.response?.data?.message || "Unable to Post Job");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="mb-4">
                        Post New Job
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="title"
                            placeholder="Job Title"
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            className="form-control mb-3"
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            name="location"
                            placeholder="Location"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            name="salary"
                            placeholder="Salary"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            name="experience"
                            placeholder="Experience"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            name="skills"
                            placeholder="Skills"
                            onChange={handleChange}
                            required
                        />

                        <select
                            className="form-select mb-3"
                            name="jobType"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Job Type</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Internship</option>
                            <option>Remote</option>
                        </select>

                        <button className="btn btn-success">
                            Post Job
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default AddJob;