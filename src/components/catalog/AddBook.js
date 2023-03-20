import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css';

function AddBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [isbn, setIsbn] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const book = {
      title,
      author,
      publication_date: publicationDate,
      isbn,
      status
    };

    axios.post('/books', book)
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
          <label>Title:</label>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="form-field">
          <label>Author:</label>
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </div>
        <div className="form-field">
          <label>Publication Date:</label>
          <input type="date" value={publicationDate} onChange={(event) => setPublicationDate(event.target.value)} />
        </div>
        <div className="form-field">
          <label>ISBN:</label>
          <input type="text" value={isbn} onChange={(event) => setIsbn(event.target.value)} />
        </div>
        <div className="form-field">
          <label>Status:</label>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="">Select Status</option>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
            <option value="lost">Lost</option>
          </select>
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBooks;
