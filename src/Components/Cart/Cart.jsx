import React from 'react'
import Header from '../Header/Header'
import '../Home/Home.css'

export default function Cart({ cart }) {
    return (
        <div className='main-div'>
            <Header />
            {cart.map((item,index) => (
                <div className='main' key={index}>
                    <img src={item.image} className='image' alt='product' />
                    <h6>{item.title}</h6>
                    <p >Category : {item.category}</p>
                    <p>Price: RS {item.price}/-</p>
                </div>
            ))}
        </div>
    )
}
