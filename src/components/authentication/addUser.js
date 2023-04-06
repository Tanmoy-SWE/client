import React, { useState } from 'react';
import axios from 'axios';
import './addUser.css';

function AddUsers() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();

    const book = {
        name,
        id,
        type
    };

    axios.post('/addUser', book)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="add-book-container">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-field">
          <label>ID:</label>
          <input type="text" value={id} onChange={(event) => setId(event.target.value)} />
        </div>
        <div className="form-field">
          <label>Status:</label>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="">Select User Type</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUsers;
