import React, { useState } from 'react';
import axios from 'axios';

function SearchBooks() {
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState('');
  const [books, setBooks] = useState([]);
  let title = '';

  const handleSearch = (event) => {
    event.preventDefault();
    axios.get(`/searchBooks?keywords=${keywords}&author=${author}&status=${status}`)
      .then((response) => {
        setBooks(response.data);
        console.log(response);
        title = response.data
        // Update the state with the matching books
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="search-books-container">
      <h2>Search Books</h2>
      <form onSubmit={handleSearch}>
        <div className="form-field">
          <label>Keywords:</label>
          <input type="text" value={keywords} onChange={(event) => setKeywords(event.target.value)} />
        </div>
        <div className="form-field">
          <label>Author:</label>
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </div>
        <div className="form-field">
          <label>Status:</label>
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option value="">All</option>
            <option value="available">Available</option>
            <option value="borrowed">Borrowed</option>
            <option value="lost">Lost</option>
          </select>
        </div>
        <button type="submit">Search</button>
      </form>
      <div className="container">
          <h1 className="center-text">Catalog of Books</h1>
          <table className="table center-text">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publication Date</th>
                <th>ISBN</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publication_date}</td>
                  <td>{book.isbn}</td>
                  <td>{book.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default SearchBooks;
