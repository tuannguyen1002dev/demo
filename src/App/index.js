import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Products from './pages/Products';
import News from './pages/News';
import PageNotFound from './PageNotFound';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

function HomePage() {
  return (
    <Router className="home">
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/introduce" component={Introduce} />
      <Route path="/products" component={Products} />
      <Route path="/news" component={News} />
      <Route path="/page-not-found" component={PageNotFound} />
      <Route path="/contact" component={Contact} />
      <Route path="/cart" component={Cart} />
      <Route path="/product-details" component={ProductDetails} />
      <Footer />
    </Router>
  );
}

export default HomePage;
