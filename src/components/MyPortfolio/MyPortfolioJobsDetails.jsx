import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyPortfolioJobsDetails = (props) => {
    const params = useParams()
    const [job, setJob] = useState(null)

    useEffect(() => {
        fetch(`/api/jobs/${params.id}`)
            .then(res => res.json())
            .then(data => setJob(data.jobs))
    }, [params.id])

    return (
        <div className="Project">
            <div className={`Project--Detail--Container ${props.DarkMode && 'Project--Detail--Container--Dark'}`}>
                <Link to='/MyPortfolio'>
                    <img src="../src/assets/images/arrow-left.svg" className="StepBack" />
                </Link>
                {job ? (
                    <div className="Project--Detail">
                        <h2>{job.name}</h2>
                        <p className="Project--details">{job.details}</p>
                        <a href="https://tiny-sherbet-6609a3.netlify.app/">Mutasd a projektet</a>
                        <p>{job.description}</p>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </div>
    )
}

export default MyPortfolioJobsDetails;