import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Main from './components/Main'
import BarAuth from './components/BarAuth'
import Admin from './components/Admin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/vjwHRglLqt" component={BarAuth}/>
                <Route path="/vjwHRglLqtiNaRwQgJ0IvjwHRglLqt" component={Admin} />
                <Route path="/:id" component={Main}/>

              </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
