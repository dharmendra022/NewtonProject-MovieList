import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import App from './App';
// import images from './images/avtar.jpg'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <>
    <h1 className="heading_style">Movie List</h1>

    <Card 
      imgsrc="./images/av.jpg"
      title="#1 - Avatar (2009)"
      sname="Distributors: 20th Century Fox"
      amount="Amount $2,787,965,087"
    />
    <Card 
      imgsrc="./images/Titanic.png"
      title="#2 - Titanic  (1997)"
      sname="Distributors: 20th Century Fox"
      amount="Amount $2,187,463,944"
      
    />
    <Card 
      imgsrc="./images/stars.jfif"
      title="#3 - Star Wars: The force Awakens(2015)"
      sname="Distributors: Walt Disney Studios Motion Pictures"
      amount="Amount $2,068,223,624"
    />
    <Card 
      imgsrc="./images/avanger.jfif"
      title="#4 - Avengers: Infinity War (2018)"
      sname="Distributors: Wait Disney Studios motion pictures"
      amount="Amount $2,048,359,754"
    />
    <Card 
      imgsrc="./images/jurissaic world.jpg"
      title="#5 - Jurassic World (2015)"
      sname="Distributors: universal Pictures"
      amount="Amount $1,671,713,208"
    />
    <Card 
      imgsrc="./images/joker.jfif"
      title="#6 - joker (2019)"
      sname="Distributors: Warner Bros Home Entertainment"
      amount="Amount $1.0506 billion"
    />
  </>,



  document.getElementById('root')
);

reportWebVitals();
