import { Link } from "react-router-dom";

const JobCard = ({ job }) => {

    return (

        <div className="card shadow-sm border-0 mb-4">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-start">

                    <div>

                        <h4 className="fw-bold text-primary mb-1">
                            {job.title}
                        </h4>

                        <h6 className="text-secondary mb-3">
                            {job.company?.companyName}
                        </h6>

                    </div>

                    <span className="badge bg-success fs-6">
                        {job.jobType}
                    </span>

                </div>

                <div className="row mb-3">

                    <div className="col-md-4 mb-2">
                        📍 <strong>Location</strong><br />
                        {job.location}
                    </div>

                    <div className="col-md-4 mb-2">
                        💰 <strong>Salary</strong><br />
                        ₹ {job.salary}
                    </div>

                    <div className="col-md-4 mb-2">
                        ⭐ <strong>Experience</strong><br />
                        {job.experience}
                    </div>

                </div>

                <hr />

                <p className="text-muted">

                    {job.description?.length > 150
                        ? job.description.substring(0, 150) + "..."
                        : job.description}

                </p>

                <div className="d-flex justify-content-between align-items-center">

                    <span className="badge bg-info text-dark">

                        Skills : {job.skills}

                    </span>

                    <Link
                        to={`/jobs/${job.id}`}
                        className="btn btn-primary"
                    >
                        View Details →
                    </Link>

                </div>

            </div>

        </div>

    );

};

export default JobCard;