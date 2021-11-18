import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { asyncGetUser } from './actions/userAction';
import { asyncGetBuilding } from './actions/buildingAction';
import { asyncGetRoom } from './actions/roomAction';
import { asyncGetTenant } from './actions/tenantAction';

const store = configureStore()

// console.log(store.getState())

store.dispatch(asyncGetUser())
store.dispatch(asyncGetBuilding())
store.dispatch(asyncGetRoom())
store.dispatch(asyncGetTenant())

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
