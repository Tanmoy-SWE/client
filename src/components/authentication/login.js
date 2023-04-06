import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  Axios  from 'axios';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();

  const loginUser = (event) => {
    event.preventDefault();
    console.log(username,password,"dniajn")
    const book = {
      username : username,
      password : password,
    };

    Axios.post('/login', book)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
        setLoginStatus("success");
      })
      .catch((error) => {
        console.error(error);
        setError("Invalid username or password");
        setLoginStatus("error");
      });
  };

  if (loginStatus === "success") {
    history.push("/");
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <button type="submit">Log in</button>
      </form>
      {loginStatus === "success" && <h1>Welcome!</h1>}
      {loginStatus === "error" && <h1>{error}</h1>}
    </div>
  );
}

export default Login;
