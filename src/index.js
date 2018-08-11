/*
*********************************index.js file****************************************************** 
This is the Entry level file that will be wrap our Home Component with initial Route
configuration along with provider and store.
****************************************************************************************************
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link , Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from "./js/store"
import Home from './js/Components/Home/home';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
	
  <Provider store={store}>
    
    <Router>
    <Switch>
         <Route exact path="/" component={Home} /> 
      </Switch>
    </Router>
   
  </Provider>,
 document.getElementById('root')

	);
