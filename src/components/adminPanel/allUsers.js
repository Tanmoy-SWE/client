import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Users() {

    function deleteUser(userId) {
        axios
          .delete(`/users/deleteUser/${userId}`)
          .then((response) => {
            // If the user was successfully deleted, remove them from the state
            setUsers(allUsers.filter((user) => user.id !== userId));
          })
          .catch((error) => {
            console.log(error);
          });
      }
  const [allUsers, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/allUsers').then((response) => {
      setUsers(response.data);
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
            }          <Route path="/users/deleteBook">
            <DeleteUser />
          </Route>
          `}
        </style>
        <title>All Users</title>
      </head>
      <body>
        <div className="container">
          <h1 className="center-text">All Registered Users</h1>
          {allUsers.length >= 0 ? (
            <table className="table center-text">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>User Type</th>
                  <th>Delete User</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user) => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.type}</td>
                    <td>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                    </td>
                    </tr>
                ))}
                </tbody>

            </table>
          ) : (
            <p>Loading users...</p>
          )}
        </div>
      </body>
    </html>
  );
}

export default Users;
