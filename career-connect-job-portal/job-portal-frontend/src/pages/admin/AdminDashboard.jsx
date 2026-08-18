import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardStats } from "../../services/adminService.js";

function AdminDashboard() {

    const [stats, setStats] = useState({
        totalUsers: 0,
        totalCompanies: 0,
        totalJobs: 0,
        totalApplications: 0
    });

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const response = await getDashboardStats();

            setStats(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Admin Dashboard

            </h2>

            <div className="row">

                <div className="col-md-3">

                    <div className="card bg-primary text-white mb-3">

                        <div className="card-body">

                            <h5>Total Users</h5>

                            <h2>{stats.totalUsers}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card bg-success text-white mb-3">

                        <div className="card-body">

                            <h5>Total Companies</h5>

                            <h2>{stats.totalCompanies}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card bg-warning text-dark mb-3">

                        <div className="card-body">

                            <h5>Total Jobs</h5>

                            <h2>{stats.totalJobs}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card bg-danger text-white mb-3">

                        <div className="card-body">

                            <h5>Total Applications</h5>

                            <h2>{stats.totalApplications}</h2>

                        </div>

                    </div>

                </div>

            </div>

            <hr />

            <div className="row mt-4">

                <div className="col-md-4">

                    <Link
                        to="/admin/users"
                        className="btn btn-primary w-100"
                    >
                        Manage Users
                    </Link>

                </div>

                <div className="col-md-4">

                    <Link
                        to="/admin/companies"
                        className="btn btn-success w-100"
                    >
                        Manage Companies
                    </Link>

                </div>

                <div className="col-md-4">

                    <Link
                        to="/admin/jobs"
                        className="btn btn-warning w-100"
                    >
                        Manage Jobs
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;