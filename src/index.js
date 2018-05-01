import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchBars } from './redux/actions/bars-actions'
import { fetchPatrons } from './redux/actions/patrons-actions'
import { fetchComments } from './redux/actions/comments-actions'
import { fetchOwners } from './redux/actions/owners-actions'

const storeInstance = store();

storeInstance.dispatch(fetchBars())
storeInstance.dispatch(fetchPatrons())
storeInstance.dispatch(fetchComments())
storeInstance.dispatch(fetchOwners())

ReactDOM.render(
  <Provider store = {storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));
