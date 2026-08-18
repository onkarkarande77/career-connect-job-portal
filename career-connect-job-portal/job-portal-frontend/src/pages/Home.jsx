import { Link } from "react-router-dom";

function Home() {

    return (

        <>
            {/* Hero Section */}
            <div className="bg-primary text-white py-5">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-6">

                            <h1 className="display-4 fw-bold">

                                Find Your Dream Job

                            </h1>

                            <p className="lead mt-3">

                                CareerConnect helps job seekers discover
                                opportunities and enables recruiters to
                                hire the best talent quickly and efficiently.

                            </p>

                            <div className="mt-4">

                                <Link
                                    to="/jobs"
                                    className="btn btn-light btn-lg me-3"
                                >
                                    Browse Jobs
                                </Link>

                                <Link
                                    to="/register"
                                    className="btn btn-outline-light btn-lg"
                                >
                                    Get Started
                                </Link>

                            </div>

                        </div>

                        <div className="col-md-6 text-center">

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="Career"
                                width="320"
                                className="img-fluid"
                            />

                        </div>

                    </div>

                </div>

            </div>

            {/* Features */}

            <div className="container py-5">

                <h2 className="text-center mb-5">

                    Why Choose CareerConnect?

                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>💼</h3>

                                <h4>Thousands of Jobs</h4>

                                <p>

                                    Explore jobs from leading companies
                                    across different industries.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>🏢</h3>

                                <h4>Top Companies</h4>

                                <p>

                                    Connect with trusted recruiters and
                                    companies hiring talented professionals.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h3>🚀</h3>

                                <h4>Easy Apply</h4>

                                <p>

                                    Apply for jobs with a single click
                                    and track all your applications.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* Statistics */}

            <div className="bg-light py-5">

                <div className="container">

                    <div className="row text-center">

                        <div className="col-md-3">

                            <h2 className="fw-bold text-primary">

                                500+

                            </h2>

                            <p>Jobs Posted</p>

                        </div>

                        <div className="col-md-3">

                            <h2 className="fw-bold text-primary">

                                200+

                            </h2>

                            <p>Companies</p>

                        </div>

                        <div className="col-md-3">

                            <h2 className="fw-bold text-primary">

                                1500+

                            </h2>

                            <p>Job Seekers</p>

                        </div>

                        <div className="col-md-3">

                            <h2 className="fw-bold text-primary">

                                95%

                            </h2>

                            <p>Success Rate</p>

                        </div>

                    </div>

                </div>

            </div>

            {/* CTA */}

            <div className="container py-5 text-center">

                <h2>

                    Ready to Start Your Career?

                </h2>

                <p className="lead">

                    Join CareerConnect today and take the next step
                    towards your dream job.

                </p>

                <Link
                    to="/register"
                    className="btn btn-primary btn-lg"
                >
                    Join Now
                </Link>

            </div>

        </>
    );

}

export default Home;