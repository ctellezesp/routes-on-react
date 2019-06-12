import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import {Details} from './details';
//import {About} from './about';
//import {Home} from './home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component{
  render(){
    return <h3>Welcome!</h3>;
  }
}

class About extends Component{
  render(){
    return <h3>About Component</h3>;
  }
}

class Details extends Component{
  render(){
    return <h3>Details Component</h3>;
  }
}

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/details" component={Details} />
      </div>
    </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
