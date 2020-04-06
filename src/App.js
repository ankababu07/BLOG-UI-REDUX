import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Home from "./components/Home"
import UsersList from "./components/UsersList"
import UserDetails from "./components/UserDetails"
import Posts from './components/Posts';
import UserPosts from "./components/UserPosts"


function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home-</Link>
        <Link to="/users">Users-</Link>
        <Link to="/posts">Posts</Link>

        

        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UsersList}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/users/:id" component={UserPosts}/>




      </Router>
      
    </div>
  );
}

export default App;
