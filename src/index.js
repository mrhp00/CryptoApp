import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import Register from "./assets/components/user/Register";
import Login from "./assets/components/user/Login";
import ResetPassword from "./assets/components/user/ResetPassword";
import Activate from "./assets/components/user/Activate";
import NewPass from "./assets/components/user/NewPassword";
// import "./assets/css/ilia.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/fonts/shabnam.ttf";
import "./assets/css/light.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";
window.store = store;

const LightTheme = React.lazy(() => import("./lightTheme"));
const DarkTheme = React.lazy(() => import("./darkTheme"));

const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME = localStorage.getItem("dark");
  return (
    <>
      <React.Suspense fallback={<></>}>
        {CHOSEN_THEME === "true" && <DarkTheme />}
        {CHOSEN_THEME === "false" && <LightTheme />}
      </React.Suspense>
      {children}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeSelector>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/activate/:id" element={<Activate />} />
          <Route path="/new_password/:id/:token" element={<NewPass />} />
        </Routes>
      </BrowserRouter>
    </ThemeSelector>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
