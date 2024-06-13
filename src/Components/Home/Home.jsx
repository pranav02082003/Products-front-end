import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()
    async function handleClick(event) {
        event.preventDefault()
        await axios.get("https://fakestoreapi.com/products/")
            .then(res => console.log(res))
            navigate("/ShopNow",{replace:true})
    }
    return (
        <div className='main-div'>
            <Header />
            <div className='main-conatiner '>
                <div className='main-heading'>
                    <h1 className='heading'> Raining Offers For</h1>
                    <h1 className='heading'> Hot Summer!</h1>
                </div>
                <div className='sub-heading'>
                    <span className='sub-para'>25% Off On All Products</span>
                </div>
                <div className='sub-heading '>
                    <Link to={'/ShopNow'}><button onClick={handleClick} className='btn btn-dark'>SHOP NOW</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Home
