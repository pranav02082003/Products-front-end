import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import '../SignUp/SignUp.css'
import './ShopNow.css'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export default function ShopNow(props) {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    function handleClick(event){
        event.preventDefault()
        const token = Cookies.get("jwt_token")
        if(token){
            console.log("object");
        }
        else{
            alert("You need to Log In")
            navigate("/Login")
        }
    }

    useEffect(() => {
        try {
            axios.get("https://api.escuelajs.co/api/v1/products")
                .then(res => {
                    console.log(res)
                    setData(res.data)
                })
        }
        catch{
            console.log("error occured while api call");
        }

    }, [])

    



    return (
        <div className='maindiv'>
            <Header />
            <div className='home'>
                {data.map((item) => (
                    <div className='main' key={item.id}>
                        <img src={item.images} className='image' alt='product' />
                        <h6>{item.title}</h6>
                        <p >Category : {item.category.name}</p>
                        <p>Price: RS {item.price}/-</p>
                        <button onClick={handleClick} className='btn btn-success'>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
