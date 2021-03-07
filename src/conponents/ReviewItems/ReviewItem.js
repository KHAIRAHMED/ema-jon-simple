import React from 'react';
import CardDetails from '../CardDetails/CardDetails';

const ReviewItem = (props) => {
    const{name,selectItem,key,price} = props.product
    console.log(props.product)
    const reviewItemStyle ={
        borderBottom:"1px solid lightgray",
        marginLeft:"200px",
        padding:"10px"
    }
    return (
            <div style={reviewItemStyle}>
                <h5>{name}</h5>
                <h6>Select Item :{selectItem}</h6>
                <h6>Pricec : {price}</h6>
                <h6>Product Pricec : {price*selectItem}</h6>
                <button onClick={()=>props.removeHandeler(key)} className="main-button">Remove</button>
            </div>
            
      
    );
};

export default ReviewItem;