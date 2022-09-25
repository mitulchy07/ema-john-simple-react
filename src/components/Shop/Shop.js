import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'



const Shop = () => {
    const [items, setItems] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setItems(data))
    },[])

    const handleAddToCart = (product) =>{
        console.log(product.name);
    }
    return (
    <div className='shop'>
            <div className='shop-items'>
            {
                items.map(item => <Product key ={item.id} item ={item} handleAddToCart ={handleAddToCart} ></Product> )
            }
            </div>
            <div className='cart-summery'><h1>Order Summery</h1></div>
        </div>
    );
};

export default Shop;