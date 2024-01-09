import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployerDashboard = () => {
  const [jobListings, setJobListings] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobListingsResponse = await axios.get('http://localhost:3001/jobs');
        setJobListings(jobListingsResponse.data);

        const applicationsResponse = await axios.get('http://localhost:3001/job-applications');
        setApplications(applicationsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employer Dashboard</h1>

      <section>
        <h2>Job Listings</h2>
        <ul>
          {jobListings.map((job) => (
            <li key={job.id}>{job.title} - {job.location}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Applications</h2>
        <ul>
          {applications.map((application) => (
            <li key={application.id}>{application.applicantName} - {application.jobTitle}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default EmployerDashboard;
