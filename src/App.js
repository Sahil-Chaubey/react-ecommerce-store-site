import React from "react";
import { Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Details from "./Components/Details";
import Cart from "./Components/cart";
import Default from "./Components/Default";
import ProductList from "./Components/ProductList";
import Modal from "./Components/Modal";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" Component={ProductList}></Route>

        <Route exact path="/details" Component={Details}></Route>

        <Route exact path="/cart" Component={Cart}></Route>

        <Route path="*" Component={Default}></Route>
      </Routes>

      <Modal />
    </React.Fragment>
  );
}

export default App;
