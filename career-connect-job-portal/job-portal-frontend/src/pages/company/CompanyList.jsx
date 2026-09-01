import { useEffect, useState } from "react";
import API from "../../api/axios";
import { Link } from "react-router-dom";

function CompanyList() {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {

        try {

            const response = await API.get("/company");

            setCompanies(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <div className="d-flex justify-content-between mb-3">

                <h2>Companies</h2>

                <Link
                    className="btn btn-success"
                    to="/company/add">

                    Add Company

                </Link>

            </div>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Website</th>
                        <th>Location</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        companies.map(company => (

                            <tr key={company.id}>

                                <td>{company.name}</td>

                                <td>{company.website}</td>

                                <td>{company.location}</td>

                                <td>

                                    <Link
                                        className="btn btn-warning btn-sm me-2"
                                        to={`/company/edit/${company.id}`}>

                                        Edit

                                    </Link>

                                    <button
                                        className="btn btn-danger btn-sm">

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default CompanyList;
