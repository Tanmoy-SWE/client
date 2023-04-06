import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/catalog/Catalog';
import AddBook from './components/catalog/AddBook';
import DeleteBook from './components/catalog/DeleteBook';
import SearchBooks from './components/catalog/SearchBooks';
import Login from './components/authentication/login';
import AdminHome from './components/adminPanel/adminHome';
import Addusers from './components/authentication/addUser';
import AddUsers from './components/authentication/addUser';
import Users from './components/adminPanel/allUsers';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <h1>Welcome to the Book Catalog!</h1>
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/addBook">
            <AddBook />
          </Route>
          <Route path="/deleteBook">
            <DeleteBook />
          </Route>
          <Route path="/SearchBooks">
            <SearchBooks/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/adminHome">
            <AdminHome/>
          </Route>
          <Route path="/addUser">
            <AddUsers/>
          </Route>
          <Route path="/allUsers">
          <Users/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
