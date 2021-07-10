import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*import './style/App.css';*/

import CustomNavbar from './components/CustomNavbar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <CustomNavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
