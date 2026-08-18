import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function AdminProfile() {

    const { user } = useAuth();

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-9">

                    <div className="card shadow border-0">

                        <div className="card-header bg-danger text-white">

                            <h2 className="mb-0">
                                🛡️ Admin Profile
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
                                Admin Controls
                            </h4>

                            <div className="row g-3">

                                <div className="col-md-3">

                                    <Link
                                        to="/admin/users"
                                        className="btn btn-primary w-100"
                                    >
                                        Users
                                    </Link>

                                </div>

                                <div className="col-md-3">

                                    <Link
                                        to="/admin/companies"
                                        className="btn btn-success w-100"
                                    >
                                        Companies
                                    </Link>

                                </div>

                                <div className="col-md-3">

                                    <Link
                                        to="/admin/jobs"
                                        className="btn btn-warning w-100"
                                    >
                                        Jobs
                                    </Link>

                                </div>

                                <div className="col-md-3">

                                    <Link
                                        to="/admin"
                                        className="btn btn-danger w-100"
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

export default AdminProfile;