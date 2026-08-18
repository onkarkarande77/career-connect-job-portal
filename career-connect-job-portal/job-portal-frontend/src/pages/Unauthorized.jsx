import { Link } from "react-router-dom";

function Unauthorized() {

    return (

        <div className="container text-center mt-5">

            <h1 className="display-4 text-danger">
                403
            </h1>

            <h3>Access Denied</h3>

            <p>
                You don't have permission to access this page.
            </p>

            <Link
                to="/"
                className="btn btn-primary"
            >
                Go Home
            </Link>

        </div>

    );

}

export default Unauthorized;