import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Home from "./components/Home"
import UsersList from "./components/UsersList"
import Posts from './components/Posts';
import UserPosts from "./components/UserPosts"
import PostComments from './components/PostComments';


function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home-</Link>
        <Link to="/users">Users-</Link>
        <Link to="/posts">Posts</Link>

        

        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={UsersList}/>
        <Route exact path="/posts" component={Posts}/>
        <Route path="/users/:uid" component={UserPosts}/>
        <Route path="/posts/:pid" component={PostComments}/>




      </Router>
      
    </div>
  );
}

export default App;
