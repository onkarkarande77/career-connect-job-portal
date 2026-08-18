import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function RecruiterChart({ stats }) {

    const data = {

        labels: [
            "Jobs",
            "Applications",
            "Pending"
        ],

        datasets: [

            {

                label: "Recruiter Statistics",

                data: [

                    stats.totalJobs,

                    stats.totalApplications,

                    stats.pendingApplications

                ]

            }

        ]

    };

    const options = {

        responsive: true,

        plugins: {

            legend: {

                display: false

            },

            title: {

                display: true,

                text: "Recruiter Dashboard Analytics"

            }

        }

    };

    return (

        <div className="card shadow border-0 mt-4">

            <div className="card-body">

                <Bar
                    data={data}
                    options={options}
                />

            </div>

        </div>

    );

}

export default RecruiterChart;