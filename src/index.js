import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList.js';
import reportWebVitals from './reportWebVitals';
let toDos = [
  "buy ice cream",
  "eat",
  "sleep",
  "rave",
  "repeat"
]

ReactDOM.render(
  <React.StrictMode>
    <MyList 
      theList={toDos}    
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
