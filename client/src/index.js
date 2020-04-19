import React from "react";
import ReactDOM from "react-dom";
import "typeface-poppins";
// import "typeface-work-sans";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "antd-mobile/dist/antd-mobile.css";
import "antd/dist/antd.css";

import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import history from "./utils/history";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
