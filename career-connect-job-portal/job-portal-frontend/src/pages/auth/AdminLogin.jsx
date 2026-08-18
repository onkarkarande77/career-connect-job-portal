import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";

function AdminLogin() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [admin, setAdmin] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setAdmin({

            ...admin,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(

                "/auth/login",

                admin

            );

            const user = response.data.user;

            if (user.role !== "ADMIN") {

                toast.error(
                    "Only Admin can login here."
                );

                return;

            }

            login(

                user,

                response.data.token

            );

            toast.success("Admin Login Successful");

            navigate("/admin");

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

                        <div className="card-header bg-dark text-white text-center">

                            <h3>

                                🔐 Admin Login

                            </h3>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Admin Email"
                                        name="email"
                                        value={admin.email}
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
                                        value={admin.password}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <button
                                    className="btn btn-dark w-100">

                                    Login as Admin

                                </button>

                            </form>

                            <hr />

                            <div className="text-center">

                                <Link to="/login">

                                    ← Back to User Login

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminLogin;