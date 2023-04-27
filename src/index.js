 // import react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";

 // get a reference to the div with the ID root
 const el = document.getElementById('root');

 // tell reacft to take controle of that element
 const root = ReactDOM.createRoot(el);
 
 // create a componenet
 function Hi() {
    return (
      <input placeholder="hi there" />
    );
  }

 // show the componenet on the screen
root.render(<App/>);
