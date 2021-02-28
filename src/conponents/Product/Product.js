import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const {img,name,price,seller,stock}=props.products
    return (
      <div className='product'>
            <div>
            <img src={img} alt=""/>
        </div>
        <div>
            <h4 className='productName'>{name}</h4>
            <p>by:{seller}</p>
            <br/>
            <h5>Price:{price}$</h5>
            <br/>
            <p>only {stock} left in the stock</p>
            <button className='main-button'onClick={()=>props.handleAddProduct(props.products)} >
              <FontAwesomeIcon icon={faShoppingCart} /> Buy Now </button>

        </div>
      </div>
    );
};

export default Product;