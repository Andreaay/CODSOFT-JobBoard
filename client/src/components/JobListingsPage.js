import React from 'react';
import { Link } from 'react-router-dom';

const JobListingsPage = () => {
  const jobListings = [
    { id: 1, title: 'Software Engineer', company: 'Tech Co.', location: 'Toronto, Canada' },
    { id: 2, title: 'Marketing Specialist', company: 'Marketing Inc.', location: 'Mexico City, Mexico' },
  ];

  return (
    <div>
      <h1>Job Listings</h1>

      <section>
        <h2>Filter and Search</h2>
      </section>

      <section>
        <h2>Featured Jobs</h2>
        {jobListings.map(job => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <Link to={`/job/${job.id}`} className="cta-button">
              View Details
            </Link>
          </div>
        ))}
      </section>

      <section>
        <h2>Recent Listings</h2>
        {jobListings.map(job => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <Link to={`/job/${job.id}`} className="cta-button">
              View Details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobListingsPage;
