import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/styles.scss';

import { ProjectProvider } from './context';


ReactDOM.render(
  <ProjectProvider>
    <Router>
      <App />
    </Router>
  </ProjectProvider>,
  document.getElementById('root')
);