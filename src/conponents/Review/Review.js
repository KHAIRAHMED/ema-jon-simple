import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import CardDetails from '../CardDetails/CardDetails';
import ReviewItem from '../ReviewItems/ReviewItem';
import happyImg from "../../images/giphy.gif"




const Review = () => {
    const [cart,setCart] = useState([])
useEffect(()=>{
    const setData = getDatabaseCart();
    const productKeys = Object.keys(setData);
    const product = productKeys.map(key=>{
        const keyData = fakeData.find((pd)=> pd.key === key)
        keyData.selectItem = setData[key]
        return keyData;
    })
    setCart(product)
},[])
const [thankImg,setthankImg]= useState(false)
const handleOrder=(()=>{
    setCart([])
    setthankImg(true)
    processOrder()
})
let thank;
if (thankImg){
    thank = <img src={happyImg} alt=""/>
}

    const removeHandeler=(productKey)=>{
        const removedata =  cart.filter(pd=>pd.key!=productKey)
        setCart(removedata)
        removeFromDatabaseCart(productKey)
    }
    return (
            <div className="shop-container">
                <div className="product-container">
                        {
                            cart.map(pd=><ReviewItem product={pd} removeHandeler={removeHandeler} key={pd.key}></ReviewItem>)
                        }
                </div>
                    <div className="card-Container">
                        <CardDetails card={cart}></CardDetails>
                        <button onClick={handleOrder} className="main-button">Order</button>
                    </div>
                {thank}
            </div>
    );
};

export default Review;