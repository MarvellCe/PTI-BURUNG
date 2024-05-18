import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import '../index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Routes Routes={route} />
  </React.StrictMode>,
  document.getElementById('root')
);
