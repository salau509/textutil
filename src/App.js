import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import About from "./components/About";
import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, SetMode] = useState("light");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  setTimeout(() => {
    setAlert(null);
  }, 2000);
  const toggleMode = () => {
    if (mode === "dark") {
      SetMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("white mode is enabled", "success");
      document.title = "Textutils-light mode";
    } else {
      SetMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("dark mode is enabled", "success");
      document.title = "Textutils-dark mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}></Route>

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            ></Route>
          </Routes>

          {/* <About></About> */}
        </div>
      </Router>
    </>
  );
}

export default App;
