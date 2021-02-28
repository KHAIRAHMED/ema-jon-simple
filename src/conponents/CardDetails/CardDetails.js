import React from 'react';
import './CardDetails.css'

const CardDetails = (props) => {
    const card = props.card
    console.log(card)

    let total =0;
    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        total=total+element.price;        
    }
    const tax = total/10;

    let shipping = 0;
    if (total>35) {
        shipping=0
    }
    else if (total >0){
        shipping= 12.99;
    }
    else if(total >15){
        shipping=4.99;
    }
   
    function toFixes(num){
        return Math.round(num)

    }
    return (
        <div>
            <h1>Price Summary</h1>
            <h5>Items Ordered-{card.length}</h5>
            <p>Product Price : {total}</p>
            <p>shipping : {shipping} </p>
            <p>Tax + vat : {toFixes(tax)}</p>
            <h6>Totall:{toFixes(total+tax+shipping)}</h6>

        </div>
    );
};

export default CardDetails;