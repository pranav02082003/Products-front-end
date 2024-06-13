import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import Cookies from 'js-cookie'

export default function Header() {
    // const [isLoggedIn, setLogIn] = useState()
    const [token, setToken] = useState('')

    useEffect(()=>{
        const jwttoken = Cookies.get("jwt_token")
        setToken(jwttoken)
    },[])
    function handleLogOut(){
        Cookies.remove("jwt_token")
        setToken("")
    }

    return (
        <div className='main-container'>
            <div className='main-card'>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={'/'}><p className='paragraph'>HOME</p></Link>
                <div className='list'>
                    <ul className='list'>
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/ShopNow"}><li>EVERYTHING</li></Link>
                        <li>WOMEN</li>
                        <li>MEN</li>
                        <li>ACCESSORIES</li>
                    </ul>
                    <div className='right-container'>
                        <ul className='list-right'>
                            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/About"}><li>ABOUT</li></Link>
                            <li>CONTACT US</li>
                            <Link to={"/Cart"}><li className='icon-cart'>
                                <svg className='list' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                                </svg>
                            </li></Link>
                            <li className='icon-cart profile'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                    <div className='button'>
                        {token ? <button onClick={handleLogOut} className='btn btn-light mr-1'> LOG OUT</button> : <Link to={'/Login'}><button className='btn btn-light mr-1'> LOGIN</button></Link>}
                        {token ? "" : <Link to={'/SignUp'}><button className='button-right btn btn-dark ml-1'>SIGN UP</button></Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}
