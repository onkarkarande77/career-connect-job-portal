import { useEffect, useState } from "react";
import { getMyApplications } from "../../services/applicationService";

const MyApplications = () => {

    const [applications, setApplications] = useState([]);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {
        try {

            const response = await getMyApplications(userId);

            setApplications(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    return (

        <div className="container mt-4">

            <h2>My Applications</h2>

            <table className="table table-bordered mt-3">

                <thead>

                    <tr>

                        <th>Job</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Applied On</th>

                    </tr>

                </thead>

                <tbody>

                    {applications.map(application => (

                        <tr key={application.id}>

                            <td>{application.job?.title}</td>

                            <td>{application.job?.company?.companyName}</td>

                            <td>{application.job?.location}</td>

                            <td>

                                <span
                                    className={`badge ${
                                        application.status === "APPROVED"
                                            ? "bg-success"
                                            : application.status === "REJECTED"
                                            ? "bg-danger"
                                            : "bg-warning text-dark"
                                    }`}
                                >
                                    {application.status}
                                </span>

                            </td>

                            <td>
                                {application.appliedAt}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
};

export default MyApplications;