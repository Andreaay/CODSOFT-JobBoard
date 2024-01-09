import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm'; 
import axios from 'axios';

const JobDetailPage = () => {
  const { id } = useParams();
  const [selectedJob, setSelectedJob] = useState(null);


  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/jobs/${id}`);
        setSelectedJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setSelectedJob(null);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!selectedJob) {
    return <div>Job not found</div>;
  }


  const handleApplicationSubmit = (applicationData) => {
    console.log('Application submitted:', applicationData);
  };

  return (
    <div>
      {selectedJob ? (
        <>
          <h1>{selectedJob.title}</h1>
          <p>{selectedJob.company} - {selectedJob.location}</p>
  
          <section>
            <h2>Description</h2>
            <p>{selectedJob.description}</p>
          </section>
  
          <section>
            <h2>Requirements</h2>
            <ul>
              {selectedJob.requirements && selectedJob.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </section>
  
          <section>
            <h2>Apply for this Job</h2>
            <JobApplicationForm jobId={selectedJob.id} onSubmit={handleApplicationSubmit} />
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
      }
export default JobDetailPage;
