import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductsDetail from "./components/ProductsDetail";
import Home from "./components/Home";

export default function Routes() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={ProductList} />
      <Route exact path="/products/:id" component={ProductsDetail} />
    </Router>
  );
}
