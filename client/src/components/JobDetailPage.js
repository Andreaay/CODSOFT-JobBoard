import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();

  const jobListings = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Co.',
      location: 'Toronto, Canada',
      description: 'The Intern Engineer position involves design, analysis and detailing of structural systems for large, complex structures in many market sectors, primarily Type I construction. Interns will work directly with a Project Manager and a team of structural engineers in a dynamic office environment. Interns will be exposed to a wide variety of exciting and challenging projects. We are seeking a talented and enthusiastic Entry-Level Software Engineer to join our growing team in Los Angeles. The ideal candidate will have a strong foundation in computer science principles and experience in programming languages such as C++, C#, and Java. They will be passionate about technology and have a demonstrated ability to learn new concepts quickly.',
      requirements: ['Degree in Computer Science or a related field', 'Experience with React and Node.js','Design, develop, and test software applications',
      'Collaborate with other engineers to solve complex technical problems',
      'Write clean, maintainable code that follows industry best practices',
      'Stay up-to-date on the latest technologies and trends',
      'Contribute to a positive and collaborative team environment'],
    },
    {
      id: 2,
      title: 'Marketing Specialist',
      company: 'Tech Co.',
      location: 'Mexico City, Mexico',
      description: 'The Digital Marketing Specialist is responsible for contributing to email and online marketing communications and campaigns that are distributed to member travel agencies and their consumer clients. The Digital Marketing Specialist also collaborates with travel supplier partners to ensure their products and promotional content are presented accurately and compellingly across marketing channels.',
      requirements: ['Bachelor\'s degree in Marketing','1+ years experience in marketing, advertising, or a related field',
    'Strong writing, proofreading, and verbal/interpersonal skills',
    'Excellent organizational skills and attention to detail', 
    'Ability multitask and prioritize in a deadlinedriven environment',
  'Innovation – Forward thinking, curious, & creative',
],
    },
  ];

  const selectedJob = jobListings.find(job => job.id === parseInt(id));

  if (!selectedJob) {
    return <div>Job not found</div>;
  }

  return (
    <div>
      <h1>{selectedJob.title}</h1>
      <p>{selectedJob.company} - {selectedJob.location}</p>

      <section>
        <h2>Description</h2>
        <p>{selectedJob.description}</p>
      </section>

      <section>
        <h2>Requirements</h2>
        <ul>
          {selectedJob.requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default JobDetailPage;
