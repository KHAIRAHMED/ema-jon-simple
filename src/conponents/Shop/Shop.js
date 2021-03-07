import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import CardDetails from '../CardDetails/CardDetails';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [product,setProduct] = useState(first10)
    const [card,setcard]=useState([])
    useEffect(()=>{
        const setData = getDatabaseCart();
        const productKeys = Object.keys(setData);
        console.log(productKeys)
        const product = productKeys.map(key=>{
            const keyData = fakeData.find((pd)=> pd.key === key)
            keyData.selectItem = setData[key]
            return keyData;
        })
        setcard(product)
    },[])

    const handleAddClick=(product)=>{
        console.log(product.selectItem)
        const tobeAddedkey = product.key;
        const sameProduct = card.find(pd=>pd.key===tobeAddedkey)
        let count = 1;
        let newCard ;
        if(sameProduct){
            count = sameProduct.selectItem + 1;
            console.log(count)
            sameProduct.selectItem =count;
            const others = card.filter(pd=>pd.key != tobeAddedkey)
            newCard=[...others,sameProduct]
        }
        else{
            product.selectItem=1;
            newCard=[...card,product]
        }
        setcard(newCard)
        addToDatabaseCart(product.key,count);
        console.log(card)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        product.map(products => <Product showAddtoCart={true} products={products} key={products.key} handleAddProduct={handleAddClick}></Product>)
                    }
                    
                </ul>
            </div>
            <div className="cart-container">
                <CardDetails card={card}>
                    <Link to="/OrderReview">
                        <button className="main-button">Review</button>
                    </Link>
                </CardDetails>
            </div>
            
        </div>
    );
};

export default Shop;