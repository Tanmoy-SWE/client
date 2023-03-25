import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeleteBook.css';

function DeleteBook() {
const [selectedBook, setSelectedBook] = useState('');
const [books, setBooks] = useState([]);

useEffect(() => {
    axios.get('/books')
    .then((response) => {
        setBooks(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
}, []);

useEffect(() => {
    console.log('books:', books);
}, [books]);


const handleDelete = (event) => {
    event.preventDefault();
    console.log('delete button clicked');
    axios.delete(`/deleteBook/${selectedBook}`)
    .then((response) => {
        console.log('book deleted');
        setBooks(response.data);
        setSelectedBook('');
    })
    .catch((error) => {
        console.error(error);
    });
};


return (
    <div className="delete-book-container">
    <h2>Delete a Book</h2>
    <form onSubmit={handleDelete}>
    <div className="form-field">
    <label>Select a Book:</label>
    <select value={selectedBook} onChange={(event) => setSelectedBook(event.target.value)}>
    <option value="">Select a Book</option>
    {books.map((book) => (
    <option key={book.id} value={book.id}>
    {book.title} by {book.author}
    </option>
    ))}
    </select>
    </div>
    <button type="submit" disabled={!selectedBook}>Delete Book</button>
    </form>
    </div>
    );
}

export default DeleteBook;