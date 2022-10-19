import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./assets/css/index.scss";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
