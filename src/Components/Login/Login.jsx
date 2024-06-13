import React, { useState } from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
import '../SignUp/SignUp.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import { baseUrl } from '../../url'



export default function Login() {
    const navigate = useNavigate()


    const[email,setemail]=useState("")
    const [password,setpassword] = useState("")
    function handleemail(event){
        const newemail = event.target.value
        setemail(newemail)
    }
    function handlepassword(event){
        const newpassword = event.target.value
        setpassword(newpassword)
    }

    async function handleClick(event){
        event.preventDefault()

        try{
            const data = {
                email:email,
                password:password
            }
            await axios.post(`${baseUrl}/Login`,data).then((res)=>{
                console.log(res);
                if(res.data.token){
                    const{token}=res.data
                    Cookies.set("jwt_token",token,1)
                    navigate("/",{replace:true})
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <div className='main-div'>
            <Header />
            <div className='form-card form gap-3'>
                <h1>Login</h1>
                <form className='d-flex flex-column gap-3 col-4'>
                    <input onChange={handleemail} className='input-box' type='email' id='email' placeholder='Enter your Email' />

                    <input onChange={handlepassword} className='input-box' type='password' id='password' placeholder='Enter your password' />
                    <button onClick={handleClick} className='btn btn-success'>Submit</button>
                </form>
                <Link to={"/SignUp"}><button className='btn btn-danger mt-2'>Create account</button></Link>
            </div>
        </div>
    )
}
