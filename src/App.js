import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={About} />
      </main>
    );
  }
}

export default App;
