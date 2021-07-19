import './App.css';
import React from 'react';
import Routes from './routes';

function App(props) { //<> são fragments - TAGS VAZIAS
  /*
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
  .then(() => console.log('DEU CERTO'))
  .catch(() => console.log('DEU ERRO'))
  */
    return (
      <Routes></Routes>
    );
  }
  
  export default App;