import '@elastic/eui/dist/eui_theme_light.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import createCache from '@emotion/cache';
import { EuiProvider } from '@elastic/eui';
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "../src/Partials/Redux/store";
import { ChakraProvider } from "@chakra-ui/react";

const cache = createCache({
  key: 'breach-analysis',
  container: document.querySelector('meta[name="emotion-styles"]'),
  prepend:true
});
cache.compat = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
  <EuiProvider cache={cache} >
    <App />
   </EuiProvider>
   </ChakraProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
