import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    return (
        <div>
            <h3>Product Detail</h3>
            <Product products={product} showAddtoCart={false}></Product>
            
        </div>
    );
};

export default ProductDetails;