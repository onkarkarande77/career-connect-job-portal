import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/login");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    CareerConnect
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbar"
                >

                    <ul className="navbar-nav ms-auto align-items-lg-center">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/jobs">
                                Jobs
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/companies">
                                Companies
                            </Link>
                        </li>

                        {!user ? (

                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>

                                <li className="nav-item dropdown">

    <a
        className="nav-link dropdown-toggle"
        href="/"
        role="button"
        data-bs-toggle="dropdown"
        onClick={(e) => e.preventDefault()}
    >
        Register
    </a>

    <ul className="dropdown-menu">

        <li>

            <Link
                className="dropdown-item"
                to="/register">

                👨‍💼 Job Seeker

            </Link>

        </li>

        <li>

            <Link
                className="dropdown-item"
                to="/recruiter-register">

                🏢 Recruiter

            </Link>

        </li>

    </ul>

</li>
                            </>

                        ) : (

                            <>

                                <li className="nav-item">
                                    <span className="nav-link fw-semibold">
                                        Welcome, {user.firstName}
                                    </span>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">
                                        Profile
                                    </Link>
                                </li>

                                {user.role === "JOB_SEEKER" && (
                                    <>
                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to="/dashboard"
                                            >
                                                Dashboard
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to="/saved-jobs"
                                            >
                                                Saved Jobs
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link
                                                className="nav-link"
                                                to="/my-applications"
                                            >
                                                My Applications
                                            </Link>
                                        </li>
                                    </>
                                )}

                                {user.role === "RECRUITER" && (
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/recruiter"
                                        >
                                            Recruiter Dashboard
                                        </Link>
                                    </li>
                                )}

                                {user.role === "ADMIN" && (
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link"
                                            to="/admin"
                                        >
                                            Admin Dashboard
                                        </Link>
                                    </li>
                                )}

                                <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
                                    <button
                                        className="btn btn-danger"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>

                            </>

                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;