import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../services/jobService";
import { applyJob } from "../../services/applicationService";
import { saveJob } from "../../services/savedJobService";
import { toast } from "react-toastify";

const JobDetails = () => {

    const { id } = useParams();

    const [job, setJob] = useState({});

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        loadJob();
    }, []);

    const loadJob = async () => {
        try {

            const response = await getJobById(id);
            setJob(response.data);

        } catch (err) {
            console.log(err);
        }
    };

    const handleApply = async () => {

        console.log("========== APPLY ==========");
        console.log("User ID :", userId);
        console.log("Job ID :", id);

        const request = {
            applicantId: Number(userId),
            jobId: Number(id)
        };

        console.log("Request Body :", request);

        try {

            const response = await applyJob(request);

            console.log(response.data);

            toast.success("Applied Successfully");

        } catch (err) {

            console.log(err);

            if (err.response) {
                console.log("Backend Response:", err.response.data);
            }

            toast.error(
                     err.response?.data?.message || "Unable to apply"
                 );
        }
    };

    const handleSave = async () => {

        console.log("========== SAVE ==========");
        console.log("User ID :", userId);
        console.log("Job ID :", id);

        try {

            await saveJob(Number(userId), Number(id));

            toast.success("Job Saved Successfully");

        } catch (err) {

            console.log(err);

           toast.error(
                       err.response?.data?.message || "Unable to save"
                   );
        }
    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2>{job.title}</h2>

                    <h5>{job.company?.companyName}</h5>

                    <hr />

                    <p><b>Location :</b> {job.location}</p>

                    <p><b>Salary :</b> ₹ {job.salary}</p>

                    <p><b>Experience :</b> {job.experience}</p>

                    <p><b>Job Type :</b> {job.jobType}</p>

                    <p><b>Skills :</b> {job.skills}</p>

                    <p>{job.description}</p>

                    <button
                        className="btn btn-success me-3"
                        onClick={handleApply}
                    >
                        Apply Now
                    </button>

                    <button
                        className="btn btn-warning"
                        onClick={handleSave}
                    >
                        Save Job
                    </button>

                </div>

            </div>

        </div>

    );
};

export default JobDetails;