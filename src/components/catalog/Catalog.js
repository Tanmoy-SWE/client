import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import SearchBooks from './SearchBooks';

function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('/books').then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
          integrity="sha512-87JWFTQ2lLsFr/VKTRa7T8YQuTzZ7bKjX9A8Lz6ufyj6x1xwO/LB6OmmUkrKZU6+X9eb26eOJ8WZWTKl2P6Oxw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <style>
          {`
            .center-text {
              text-align: center;
            }
            th, td {
              padding: 10px;
            }
            table {
              border: 1px solid #ddd;
              border-collapse: collapse;
              width: 100%;
            }
            th {
              background-color: #f2f2f2;
            }
          `}
        </style>
        <title>Catalog of Books</title>
      </head>
      <body>
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
      </body>
    </html>
  );
}

export default Catalog;
