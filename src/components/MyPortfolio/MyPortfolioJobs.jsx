import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const MyPortfolioJobs = (props) => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch("/api/jobs")
            .then(res => res.json())
            .then(data => setJobs(data.jobs))
    }, [])

    const ProjectElements = jobs.map(x => (
        <div key={x.id} className={`Project--title ${props.DarkMode && 'Project--title--Dark'}`}>
            <div className="Project--info">
                <h3>{x.name}</h3>
                <p>{x.details}</p>
                <Link to={`/MyPortfolio/${x.id}`}>
                    <span className={`Link ${props.DarkMode && 'Link--Dark'} LinkToProjects `}>
                        Show me the project
                    </span>
                </Link>
            </div>
        </div>
    ))

    return (
        <div className="ProjectsList--container">
            <h1>Explore my projects</h1>
            {jobs.length == 0 ?
                <h1>Loading...</h1> :
                <div className="ProjectsList">
                    {ProjectElements}
                </div>
            }
        </div>
    )
}

export default MyPortfolioJobs;