import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import customFetch from './utils/customFetch.js';

// const data = await customFetch.get('/test');
// console.log(data);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App  />
    <ToastContainer position='top-center' />
  </StrictMode>,
)
