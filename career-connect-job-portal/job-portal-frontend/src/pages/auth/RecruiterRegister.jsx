import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { recruiterRegister } from "../../services/authService";

function RecruiterRegister() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: "",

        companyName: "",
        description: "",
        website: "",
        location: "",
        logo: ""

    });


    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();


        console.log("Recruiter Data:", formData);


        try {

            const response = await recruiterRegister(formData);


            toast.success(response.data.message);


            setFormData({

                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phone: "",

                companyName: "",
                description: "",
                website: "",
                location: "",
                logo: ""

            });


            navigate("/login");


        } catch (error) {


            console.log(error);


            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

    };


    return (

        <div className="container py-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">


                    <div className="card shadow">


                        <div className="card-header bg-primary text-white text-center">

                            <h3>
                                Recruiter Registration
                            </h3>

                        </div>



                        <div className="card-body">


                            <form onSubmit={handleSubmit}>


                                <h5 className="mb-3">
                                    Personal Details
                                </h5>



                                <div className="row">


                                    <div className="col-md-6 mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            name="firstName"
                                            value={formData.firstName}
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
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                </div>




                                <div className="mb-3">

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
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
                                        value={formData.password}
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
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />


                                </div>




                                <hr />



                                <h5 className="mb-3">
                                    Company Details
                                </h5>




                                <div className="mb-3">


                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Company Name"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        required
                                    />


                                </div>




                                <div className="mb-3">


                                    <textarea
                                        className="form-control"
                                        placeholder="Company Description"
                                        name="description"
                                        rows="3"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    />


                                </div>




                                <div className="mb-3">


                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Website"
                                        name="website"
                                        value={formData.website}
                                        onChange={handleChange}
                                    />


                                </div>




                                <div className="mb-3">


                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />


                                </div>




                                <div className="mb-4">


                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Logo URL (Optional)"
                                        name="logo"
                                        value={formData.logo}
                                        onChange={handleChange}
                                    />


                                </div>




                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                >

                                    Register as Recruiter

                                </button>



                            </form>




                            <div className="text-center mt-3">

                                Already have an account?

                                <Link to="/login" className="ms-1">

                                    Login

                                </Link>


                            </div>


                        </div>


                    </div>


                </div>


            </div>


        </div>

    );

}


export default RecruiterRegister;