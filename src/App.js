import React from 'react';
import './App.css';
import Header from './conponents/Header/Header';
import Shop from './conponents/Shop/Shop';
import Review from './conponents/Review/Review'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inventory from './conponents/ManageInventory/Inventory';
import NotFound from './conponents/NotFoundPage/NotFound';
import ProductDetails from './conponents/productDetails/ProductDetails';

function App() {
  return (
    <div>
    <Header></Header>
    <Router>
      <Switch>
      <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        
        <Route path="/OrderReview">
            <Review></Review>
        </Route>
        <Route path="/ManageInventory">
          <Inventory></Inventory>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
      
    
    </div>
  );
}

export default App;
