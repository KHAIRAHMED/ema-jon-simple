import React from 'react';

const ReviewItem = (props) => {
    const{name,selectItem} = props.product
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
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;