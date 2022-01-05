import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { initializeApp } from "firebase/app";

firebase.initializeApp({
  apiKey: "AIzaSyCrWY8y7gxKeh5d94eJXbFrvKhifmbAcUI",
  authDomain: "realtime-chat-88bdb.firebaseapp.com",
  projectId: "realtime-chat-88bdb",
  storageBucket: "realtime-chat-88bdb.appspot.com",
  messagingSenderId: "10488171956",
  appId: "1:10488171956:web:9334e4e368300b126576e1",
  measurementId: "G-X37Q4S41MZ"
})

// const firebaseConfig = {
//   apiKey: "AIzaSyCrWY8y7gxKeh5d94eJXbFrvKhifmbAcUI",
//   authDomain: "realtime-chat-88bdb.firebaseapp.com",
//   projectId: "realtime-chat-88bdb",
//   storageBucket: "realtime-chat-88bdb.appspot.com",
//   messagingSenderId: "10488171956",
//   appId: "1:10488171956:web:9334e4e368300b126576e1",
//   measurementId: "G-X37Q4S41MZ"
// };

// const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore,
  }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>,
  document.getElementById('root')
);
