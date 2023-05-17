// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import fruits from './foods';
import {choice, remove} from './helpers';

let chosenFruit = choice(fruits);
console.log(`I'd like one ${chosenFruit}, please`)
console.log(`Here you go: ${chosenFruit}`)
console.log('Delicious! May I have another?')
remove(fruits, chosenFruit)
console.log(`I am sorry, we are all out. We have ${fruits} left.`)