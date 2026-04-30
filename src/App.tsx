import React, { useState } from "react";
import "@styles/commonStyles.scss";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
