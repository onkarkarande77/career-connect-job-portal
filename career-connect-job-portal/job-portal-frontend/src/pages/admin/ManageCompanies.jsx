import { useEffect, useState } from "react";
import {
    getCompanies,
    deleteCompany
} from "../../services/adminService";

function ManageCompanies() {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        loadCompanies();
    }, []);

    const loadCompanies = async () => {

        try {

            const response = await getCompanies();

            setCompanies(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this company?"))
            return;

        try {

            await deleteCompany(id);

           toast.success("Company Deleted Successfully");

            loadCompanies();

        } catch (error) {

            console.log(error);

            alert("Unable to delete company");
        }
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Manage Companies

            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Company Name</th>

                        <th>Email</th>

                        <th>Website</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        companies.map(company => (

                            <tr key={company.id}>

                                <td>{company.id}</td>

                                <td>{company.companyName}</td>

                                <td>{company.email}</td>

                                <td>{company.website}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            handleDelete(company.id)
                                        }
                                    >
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

export default ManageCompanies;