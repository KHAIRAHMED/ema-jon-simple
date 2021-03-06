import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';
const Product = (props) => {
    const {img,name,price,seller,stock,key}=props.products
    return (
      <div className='product'>
            <div>
            <img src={img} alt=""/>
        </div>
        <div>
            <h4 className='productName'><Link to={"/product/" +key}>{name}</Link></h4>
            <p>by:{seller}</p>
            <br/>
            <h5>Price:{price}$</h5>
            <br/>
            <p>only {stock} left in the stock</p>
          {props.showAddtoCart && <button className='main-button'onClick={()=>props.handleAddProduct(props.products)} >
              <FontAwesomeIcon icon={faShoppingCart} /> Buy Now </button>}

        </div>
      </div>
    );
};

export default Product;