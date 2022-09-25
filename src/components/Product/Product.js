import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, img, price, seller, ratings} = props.item;
    const {handleAddToCart} = props;
    return (
        <div className='item'>
            <img src={img} alt=""/>
            <div className='details'>
            <h3>{name} </h3>
            <h4>Price: {price} $ </h4>
            <h6>Manufacture: {seller}</h6>
            <h6>Ratings: {ratings}Stars </h6>
            </div>
            <button onClick={()=>handleAddToCart(props.item)} className='add-to-cart'>Add to cart</button>
        </div>
    );
};

export default Product;