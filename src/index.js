import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configStore from './store/configStore'
import {Provider} from 'react-redux'



const store=configStore()
// console.log(store.getState())

const val=(<Provider store={store}>
          <App />
          </Provider>
          )


ReactDOM.render(val,document.getElementById('root'));
