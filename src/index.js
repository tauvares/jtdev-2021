import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en-ca';
window.$secondaryLanguage = 'pt-br';
window.$thirdLanguage = 'fr-ca';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';
window.$thirdLanguageIconId = 'third-lang-icon';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
