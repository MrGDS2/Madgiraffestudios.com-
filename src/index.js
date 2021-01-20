import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import './App.scss';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './components/Navigation/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/footer';
import Gallery from './components/Gallery/Gallery';
import BhmPage from './components/BHMPage/BhmPage';
import Paint1 from './components/BHMPage/LiberteNoire/Paintings/Paint1/Paint1';
import Paint2 from './components/BHMPage/LiberteNoire/Paintings/Paint2/Paint2';
import Paint3 from './components/BHMPage/LiberteNoire/Paintings/Paint3/Paint3';
import Paint4 from './components/BHMPage/LiberteNoire/Paintings/Paint4/Paint4';
import Paint5 from './components/BHMPage/LiberteNoire/Paintings/Paint5/Paint5';
import Paint6 from './components/BHMPage/LiberteNoire/Paintings/Paint6/Paint6';
import Paint7 from './components/BHMPage/LiberteNoire/Paintings/Paint7/Paint7';
import Paint8 from './components/BHMPage/LiberteNoire/Paintings/Paint8/Paint8';
import Paint9 from './components/BHMPage/LiberteNoire/Paintings/Paint9/Paint9';
import Paint10 from './components/BHMPage/LiberteNoire/Paintings/Paint10/Paint10';
const routing = (
    <Router>
        <NavigationBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery"  exact component={Gallery}/>
          <Route path="/BHM"  exact component={BhmPage}/>
          <Route path="/BHM/img1" exact component={Paint1}/>
          <Route path="/BHM/img2" exact component={Paint2}/>
          <Route path="/BHM/img3" exact component={Paint3}/>
          <Route path="/BHM/img4" exact component={Paint4}/>
          <Route path="/BHM/img5" exact component={Paint5}/>
          <Route path="/BHM/img6" exact component={Paint6}/>
          <Route path="/BHM/img7" exact component={Paint7}/>
          <Route path="/BHM/img8" exact component={Paint8}/>
          <Route path="/BHM/img9" exact component={Paint9}/>
          <Route path="/BHM/img10" exact component={Paint10}/>
        </Switch>
        <Footer/>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
