import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecruiterDashboard } from "../../services/recruiterService";
import RecruiterChart from "../../components/charts/RecruiterChart";

function RecruiterDashboard() {

    const [stats, setStats] = useState({
        totalJobs: 0,
        totalApplications: 0,
        pendingApplications: 0
    });

    const recruiterId = localStorage.getItem("userId");

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getRecruiterDashboard(recruiterId);

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container py-4">

            <h2 className="mb-4">
                Recruiter Dashboard
            </h2>

            <div className="row">

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Jobs Posted</h5>

                            <h2 className="text-primary">
                                {stats.totalJobs}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Total Applications</h5>

                            <h2 className="text-success">
                                {stats.totalApplications}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card shadow border-0">

                        <div className="card-body text-center">

                            <h5>Pending Review</h5>

                            <h2 className="text-warning">
                                {stats.pendingApplications}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

            <div className="mt-4">

                <Link
                    to="/manage-jobs"
                    className="btn btn-primary me-3"
                >
                    Manage Jobs
                </Link>

                <Link
                    to="/applicants"
                    className="btn btn-success me-3"
                >
                    View Applicants
                </Link>

                <Link
                    to="/profile"
                    className="btn btn-secondary"
                >
                    My Profile
                </Link>

            </div>
              <RecruiterChart stats={stats} />
        </div>

        

    );

}

export default RecruiterDashboard;