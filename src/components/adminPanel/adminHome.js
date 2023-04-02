import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    <div>
      <h1>Welcome, Admin!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/loans">Loans</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminHome;
