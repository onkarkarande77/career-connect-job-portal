import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../services/profileService";

const RecruiterProfile = () => {

    const userId = localStorage.getItem("userId");

    const [user, setUser] = useState({});

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {

        try {

            const response = await getProfile(userId);

            setUser(response.data);

        } catch (err) {

            console.log(err);

        }
    };

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await updateProfile(userId, user);

            alert("Profile Updated");

        } catch (err) {

            console.log(err);

            alert("Unable to Update");

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="mb-4">
                        Recruiter Profile
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="firstName"
                            value={user.firstName || ""}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="lastName"
                            value={user.lastName || ""}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="phone"
                            value={user.phone || ""}
                            onChange={handleChange}
                        />

                        <button className="btn btn-primary">
                            Update
                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default RecruiterProfile;