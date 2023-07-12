import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// --Importing Context----------------------------------
import NoteState from './context/notes/NoteState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NoteState>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NoteState>
  </>
);


