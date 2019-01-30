import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//import { createStore } from 'redux'
// import reducer from './store/reducer'
import { Provider } from 'react-redux'
// import history from './history'
import App from './App'
import Dashboard from './components/Dashboard'

//let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(




<BrowserRouter >
 <Switch>
   <Route exact path="/" component={Dashboard} />


 </Switch>

</BrowserRouter>


   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();