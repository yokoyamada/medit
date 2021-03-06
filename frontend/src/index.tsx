import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import AppBar from "./AppBar";
import Profile from "./Profile";
import Recorder from "./Recorder";
import Timer from "./Timer";

ReactDOM.render(
  <React.StrictMode>
    <AppBar />
    {/* <Profile /> */}
    {/* <Recorder /> */}
    <Timer hour={0} minute={0} second={10} prepSecond={5} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
