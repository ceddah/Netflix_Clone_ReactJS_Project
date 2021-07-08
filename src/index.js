import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './GlobalStyles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

ReactDOM.render(
    <>  
        <FirebaseContext.Provider value={{ firebase }}>
            <App />
            <GlobalStyles />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
)