import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './components/Navigation/NavigationBar'
//import About from './components/About/About';
import { WORK } from './Constants/routes';

const routing = (
    <Router>
        <NavigationBar/>
        <Switch>
        
          <Route path={WORK} exact component={WORK} />

         
        </Switch>
       
    </Router>
  
  
  
  )
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
