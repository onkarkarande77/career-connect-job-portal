import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById, updateJob } from "../../services/jobService";

function EditJob() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [job, setJob] = useState({
        title: "",
        description: "",
        location: "",
        salary: "",
        experience: "",
        jobType: "",
        skills: "",
        companyId: ""
    });

    useEffect(() => {
        loadJob();
    }, []);

    const loadJob = async () => {

        try {

            const response = await getJobById(id);

            const data = response.data;

            setJob({
                title: data.title,
                description: data.description,
                location: data.location,
                salary: data.salary,
                experience: data.experience,
                jobType: data.jobType,
                skills: data.skills,
                companyId: data.company?.id
            });

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setJob({
            ...job,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateJob(id, job);

            alert("Job Updated Successfully");

            navigate("/manage-jobs");

        } catch (error) {

            console.log(error);

            alert(error.response?.data?.message || "Update Failed");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="mb-4">
                        Edit Job
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="title"
                            placeholder="Job Title"
                            value={job.title}
                            onChange={handleChange}
                        />

                        <textarea
                            className="form-control mb-3"
                            rows="4"
                            name="description"
                            placeholder="Description"
                            value={job.description}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="location"
                            placeholder="Location"
                            value={job.location}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="salary"
                            placeholder="Salary"
                            value={job.salary}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="experience"
                            placeholder="Experience"
                            value={job.experience}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="jobType"
                            placeholder="Job Type"
                            value={job.jobType}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="skills"
                            placeholder="Skills"
                            value={job.skills}
                            onChange={handleChange}
                        />

                        <button className="btn btn-success">
                            Update Job
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default EditJob;