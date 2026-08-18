import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../../services/adminService";
import { toast } from "react-toastify";

function ManageUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

        try {

            const response = await getUsers();

            setUsers(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Delete this user?"
        );

        if (!confirmDelete) return;

        try {

            await deleteUser(id);

           toast.success("User Deleted Successfully");

            loadUsers();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">

                Manage Users

            </h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Phone</th>

                        <th>Role</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        users.map(user => (

                            <tr key={user.id}>

                                <td>{user.id}</td>

                                <td>

                                    {user.firstName} {user.lastName}

                                </td>

                                <td>{user.email}</td>

                                <td>{user.phone}</td>

                                <td>{user.role}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            handleDelete(user.id)
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

export default ManageUsers;