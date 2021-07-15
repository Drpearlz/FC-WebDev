import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Foot';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //this stuff is injecte into my template by the ids
  <React.StrictMode>
    <Navbar />,
    <Header />,
    <App />,
    <Footer />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
