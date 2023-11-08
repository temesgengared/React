import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import userProfilecard from'./profilecard';
import UserProfilecard from './Profilecard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <React.StrictMode>
    
    <UserProfilecard name = "elnathan" age= "7month" email ="N/A"/>
    
   
    
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();