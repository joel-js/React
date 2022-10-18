import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './app/store'
// import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
// import "primereact/resources/primereact.min.css";                  //core css
// import "primeicons/primeicons.css";                                //icons
// import {components} from "@cred/neopop-web/lib/components"
// import {primitives} from "@cred/neopop-web/lib/primitives"
// import {hooks} from "@cred/neopop-web/lib/hooks"
// import {utils} from "@cred/neopop-web/lib/utils"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store ={store}> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

