import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import RouterExample from "./RouterExample";
import { MyProvider } from "./context/context";
import { GlobalStyle } from './components/styles/global';



ReactDOM.render(
  <React.StrictMode>
    <MyProvider>
        <RouterExample />
        <GlobalStyle />
    </MyProvider> 
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
