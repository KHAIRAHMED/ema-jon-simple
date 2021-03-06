import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItems/ReviewItem';




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
    return (
        <div>
            <h1>{cart.length}This is reviw Page </h1>
            {
                cart.map(pd=><ReviewItem product={pd} key={pd.key}></ReviewItem>)
            }
        </div>
    );
};

export default Review;