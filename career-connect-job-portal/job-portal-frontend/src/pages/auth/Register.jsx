import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../../api/axios";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""

    });

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

                "/auth/register",

                {

                    ...user,

                    role: "JOB_SEEKER"

                }

            );

            toast.success(response.data.message);

            navigate("/login");

        } catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

    };

    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-6">

                    <div className="card shadow border-0">

                        <div className="card-header bg-primary text-white text-center">

                            <h3 className="mb-0">

                                👨‍💼 Job Seeker Registration

                            </h3>

                        </div>

                        <div className="card-body p-4">

                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={user.firstName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            name="lastName"
                                            value={user.lastName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

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

                                <div className="mb-3">

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

                                <div className="mb-4">

                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        name="phone"
                                        value={user.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100">

                                    Create Job Seeker Account

                                </button>

                            </form>

                            <div className="text-center mt-4">

                                <small>

                                    Looking to hire?

                                    <Link
                                        to="/recruiter-register"
                                        className="ms-2">

                                        Register as Recruiter

                                    </Link>

                                </small>

                            </div>

                            <div className="text-center mt-2">

                                <small>

                                    Already have an account?

                                    <Link
                                        to="/login"
                                        className="ms-2">

                                        Login

                                    </Link>

                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;