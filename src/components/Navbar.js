import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h1 style={{ margin: '0', padding: '1rem' }}>My Library</h1>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li style={{ margin: '0 1rem' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </li>
          <li style={{ margin: '0 1rem' }}>
            <Link to="/catalog" style={{ color: '#fff', textDecoration: 'none' }}>Catalog</Link>
          </li>
          <li style={{ margin: '0 1rem' }}>
            <Link to="/addBook" style={{ color: '#fff', textDecoration: 'none' }}>Add Book</Link>
          </li>
          <li style={{ margin: '0 1rem' }}>
            <Link to="/deleteBook" style={{ color: '#fff', textDecoration: 'none' }}>Delete Book</Link>
          </li>
          <li style={{ margin: '0 1rem' }}>
            <Link to="/searchBooks" style={{ color: '#fff', textDecoration: 'none' }}>Search Books</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
