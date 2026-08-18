import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [loginType, setLoginType] = useState("JOB_SEEKER");

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/auth/login",
                user
            );

            const loggedInUser = response.data.user;

            // Validate selected login type

            if (
                loginType === "JOB_SEEKER" &&
                loggedInUser.role !== "JOB_SEEKER"
            ) {

                toast.error(
                    "Please login using Recruiter Login."
                );

                return;

            }

            if (
                loginType === "RECRUITER" &&
                loggedInUser.role !== "RECRUITER"
            ) {

                toast.error(
                    "Please login using Job Seeker Login."
                );

                return;

            }

            login(
                loggedInUser,
                response.data.token
            );

            toast.success(response.data.message);

            switch (loggedInUser.role) {

                case "ADMIN":
                    navigate("/admin");
                    break;

                case "RECRUITER":
                    navigate("/recruiter");
                    break;

                default:
                    navigate("/dashboard");
                    break;

            }

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Login Failed"
            );

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-5">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white text-center">

                            <h3>

                                Welcome Back

                            </h3>

                            <small>

                                Login to CareerConnect

                            </small>

                        </div>

                        <div className="card-body p-4">

                            <div className="d-flex mb-4">

                                <button
                                    type="button"
                                    className={`btn w-50 me-2 ${
                                        loginType === "JOB_SEEKER"
                                            ? "btn-primary"
                                            : "btn-outline-primary"
                                    }`}
                                    onClick={() =>
                                        setLoginType("JOB_SEEKER")
                                    }
                                >

                                    👨‍💼 Job Seeker

                                </button>

                                <button
                                    type="button"
                                    className={`btn w-50 ${
                                        loginType === "RECRUITER"
                                            ? "btn-success"
                                            : "btn-outline-success"
                                    }`}
                                    onClick={() =>
                                        setLoginType("RECRUITER")
                                    }
                                >

                                    🏢 Recruiter

                                </button>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                        name="email"
                                        value={user.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-4">

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        value={user.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className={`btn w-100 ${
                                        loginType === "JOB_SEEKER"
                                            ? "btn-primary"
                                            : "btn-success"
                                    }`}
                                >

                                    {
                                        loginType === "JOB_SEEKER"
                                            ? "Login as Job Seeker"
                                            : "Login as Recruiter"
                                    }

                                </button>

                            </form>

                            <hr />

                            <div className="text-center">

                                <small className="text-muted">

                                    Don't have an account?

                                </small>

                            </div>

                            <div className="d-grid gap-2 mt-3">

                                <Link
                                    to="/register"
                                    className="btn btn-outline-primary"
                                >

                                    👨‍💼 Register as Job Seeker

                                </Link>

                                <Link
                                    to="/recruiter-register"
                                    className="btn btn-outline-success"
                                >

                                    🏢 Register as Recruiter

                                </Link>

                            </div>

                            <hr />

                            <div className="text-center">

                                <small className="text-muted">

                                    System Administrator

                                </small>

                            </div>

                            <div className="d-grid mt-3">

                                <Link
                                    to="/admin-login"
                                    className="btn btn-dark"
                                >

                                    🔐 Admin Login

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;