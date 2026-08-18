import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import {
    uploadResume,
    downloadResume
} from "../../services/resumeService";

function JobSeekerProfile() {

    const { user } = useAuth();

    const [file, setFile] = useState(null);

    const handleUpload = async () => {

        if (!file) {
            toast.warning("Please select a resume");
            return;
        }

        try {

            const response = await uploadResume(
                user.id,
                file
            );

            toast.success(response.data.message);

        } catch (err) {

            toast.error(
                err.response?.data?.message ||
                "Resume Upload Failed"
            );

        }

    };

    const handleDownload = async () => {

        try {

            const response = await downloadResume(user.id);

            const url = window.URL.createObjectURL(
                new Blob([response.data])
            );

            const link = document.createElement("a");

            link.href = url;

            link.download = "Resume.pdf";

            document.body.appendChild(link);

            link.click();

            link.remove();

        } catch (err) {

            toast.error("Resume not found");

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white text-center">

                            <h2 className="mb-0">
                                👤 My Profile
                            </h2>

                        </div>

                        <div className="card-body p-4">

                            <div className="row mb-3">

                                <div className="col-md-6">

                                    <h6 className="text-muted">
                                        First Name
                                    </h6>

                                    <h5>{user?.firstName}</h5>

                                </div>

                                <div className="col-md-6">

                                    <h6 className="text-muted">
                                        Last Name
                                    </h6>

                                    <h5>{user?.lastName}</h5>

                                </div>

                            </div>

                            <div className="row mb-3">

                                <div className="col-md-6">

                                    <h6 className="text-muted">
                                        Email
                                    </h6>

                                    <h5>{user?.email}</h5>

                                </div>

                                <div className="col-md-6">

                                    <h6 className="text-muted">
                                        Phone
                                    </h6>

                                    <h5>{user?.phone}</h5>

                                </div>

                            </div>

                            <div className="mb-4">

                                <h6 className="text-muted">
                                    Role
                                </h6>

                                <span className="badge bg-success fs-6">

                                    {user?.role}

                                </span>

                            </div>

                            <hr />

                            <h4 className="mb-3">

                                📄 Resume

                            </h4>

                            <input
                                type="file"
                                className="form-control mb-3"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) =>
                                    setFile(e.target.files[0])
                                }
                            />

                            <div className="d-flex gap-3">

                                <button
                                    className="btn btn-success"
                                    onClick={handleUpload}
                                >
                                    Upload Resume
                                </button>

                                <button
                                    className="btn btn-outline-primary"
                                    onClick={handleDownload}
                                >
                                    Download Resume
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default JobSeekerProfile;