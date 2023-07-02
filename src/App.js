import Header from './components/Header';
import AnimRoutes from './components/AnimRoutes';
import React from 'react';

import {BrowserRouter as Router} from 'react-router-dom'



const App = () => {
  return  (
  <>
  <Router>
  <Header />
  <AnimRoutes />
  
  
  </Router>
  </>

  )
};

export default App;
