import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import { Switch, Route } from 'react-router-dom';
import SingleProject from './pages/SingleProject';



function App() {
  return (
    <div className="App">
      <div className="overlay"></div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/:slug' component={SingleProject} />
        <Route />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
