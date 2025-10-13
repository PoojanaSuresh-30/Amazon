// import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import {store} from './app/store.ts'
// import Signup from './features/Signup/signupSlice.ts'
import React from 'react';



import './index.css'
import App from './App.tsx'


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
       <Provider store={store}>
      <App />
    </Provider>
   
  </React.StrictMode>
);

