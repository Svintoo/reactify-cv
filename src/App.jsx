import React from "react";
import NavBar from "../components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ommig from "./pages/om-mig";
import Kontakt from "./pages/kontakt";
import Projekt from "./pages/projekt";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="om-mig" element={<Ommig />} />
            <Route path="projekt" element={<Projekt />} />
            <Route path="kontakt" element={<Kontakt />} />
          </Routes>
        </Provider>
      </Router>
    </>
  );
}
