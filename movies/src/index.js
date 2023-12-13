import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './store';
// import { LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.baseURL="/"

root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  
    <App />
    
  </Provider>
  </BrowserRouter>
  </React.StrictMode>
  
);