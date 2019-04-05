import React, {
    Component
} from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./style.scss";
import JavascriptTimeAgo from 'javascript-time-ago'

// The desired locales.
import en from 'javascript-time-ago/locale/en'

// Initialize the desired locales.
JavascriptTimeAgo.locale(en)
ReactDOM.render( <App />,document.getElementById("app"));
