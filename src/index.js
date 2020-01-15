import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Edit from './components/screens/Edit'
import util from './components/util'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/report">Reports</Link>
            </li>
            <li>
                <Link to="/edit">Edit</Link>
            </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/report" component={util} />
        <Route path="/edit" component={Edit} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
