import React, { useState } from 'react';

const JobApplicationForm = ({ jobId, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica de envío de la solicitud, por ejemplo, llamando a una API.

    // Limpia el formulario después de enviar
    setName('');
    setEmail('');
    setResume('');

    // Llama a la función de retorno de llamada proporcionada por el componente padre (onSubmit)
    onSubmit({
      jobId,
      name,
      email,
      resume,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Resume/CV:
        <textarea value={resume} onChange={(e) => setResume(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
