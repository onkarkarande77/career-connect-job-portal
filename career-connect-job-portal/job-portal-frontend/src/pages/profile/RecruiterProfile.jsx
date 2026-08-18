import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function RecruiterProfile() {

    const { user } = useAuth();

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-9">

                    <div className="card shadow border-0">

                        <div className="card-header bg-dark text-white">

                            <h2 className="mb-0">
                                🏢 Recruiter Profile
                            </h2>

                        </div>

                        <div className="card-body">

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <h6 className="text-muted">
                                        First Name
                                    </h6>

                                    <h5>{user?.firstName}</h5>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <h6 className="text-muted">
                                        Last Name
                                    </h6>

                                    <h5>{user?.lastName}</h5>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <h6 className="text-muted">
                                        Email
                                    </h6>

                                    <h5>{user?.email}</h5>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <h6 className="text-muted">
                                        Phone
                                    </h6>

                                    <h5>{user?.phone}</h5>

                                </div>

                            </div>

                            <hr />

                            <h4 className="mb-4">
                                Recruiter Actions
                            </h4>

                            <div className="row g-3">

                                <div className="col-md-4">

                                    <Link
                                        to="/manage-jobs"
                                        className="btn btn-primary w-100"
                                    >
                                        Manage Jobs
                                    </Link>

                                </div>

                                <div className="col-md-4">

                                    <Link
                                        to="/applicants"
                                        className="btn btn-success w-100"
                                    >
                                        View Applicants
                                    </Link>

                                </div>

                                <div className="col-md-4">

                                    <Link
                                        to="/recruiter"
                                        className="btn btn-warning w-100"
                                    >
                                        Dashboard
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default RecruiterProfile;