import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Navbar from './components/navbar/navbar'

import PostsList from './components/posts/PostsList'
import AddPostForm from './components/posts/AddPostForm'

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <Switch>
        <Route exact path="/addpost" component={AddPostForm}/>
        <Route exact path="/" component={PostsList}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
