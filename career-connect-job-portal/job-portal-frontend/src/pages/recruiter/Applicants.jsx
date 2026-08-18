import { useEffect, useState } from "react";
import {
  getApplicationsByRecruiter,
  updateApplicationStatus,
} from "../../services/applicationService";

 

import { downloadResume } from "../../services/resumeService";

function Applicants() {
  const [applications, setApplications] = useState([]);

  const recruiterId = localStorage.getItem("userId");

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      const response = await getApplicationsByRecruiter(recruiterId);

      setApplications(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id, status) => {
    try {
      await updateApplicationStatus(id, status);

      loadApplications();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDownloadResume = async (userId) => {
    try {
      const response = await downloadResume(userId);

      const url = window.URL.createObjectURL(new Blob([response.data]));

      const link = document.createElement("a");

      link.href = url;
      link.download = "Resume.pdf";

      document.body.appendChild(link);

      link.click();

      link.remove();
    } catch (err) {
      alert("Resume not found");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Job Applications</h2>

      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Applicant</th>

            <th>Email</th>

            <th>Job</th>

            <th>Status</th>

            <th>Update Status</th>

            <th>Resume</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>
                {app.applicant.firstName} {app.applicant.lastName}
              </td>

              <td>{app.applicant.email}</td>

              <td>{app.job.title}</td>

              <td>{app.status}</td>

              <td>
                <select
                  className="form-select"
                  value={app.status}
                  onChange={(e) => changeStatus(app.id, e.target.value)}
                >
                  <option>APPLIED</option>

                  <option>SHORTLISTED</option>

                  <option>REJECTED</option>

                  <option>HIRED</option>
                </select>
              </td>

              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDownloadResume(app.applicant.id)}
                >
                  Download Resume
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Applicants;
