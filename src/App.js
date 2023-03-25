import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './components/catalog/Catalog';
import AddBook from './components/catalog/AddBook';
import DeleteBook from './components/catalog/DeleteBook';
import SearchBooks from './components/catalog/SearchBooks';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
