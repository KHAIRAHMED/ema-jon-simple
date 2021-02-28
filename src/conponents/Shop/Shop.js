import React, { useState } from 'react';
import fakeData from '../../fakeData'
import CardDetails from '../CardDetails/CardDetails';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [product,setProduct] = useState(first10)
    const [card,setcard]=useState([])
    const handleAddClick=(product)=>{
        console.log('hello',product)
        const newCard=[...card,product]
        setcard(newCard)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        product.map(products => <Product products={products} handleAddProduct={handleAddClick}></Product>)
                    }
                    
                </ul>
            </div>
            <div className="cart-container">
                <CardDetails card={card}></CardDetails>
            </div>
            
        </div>
    );
};

export default Shop;