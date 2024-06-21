import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import '../Home/Home.css'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { baseUrl } from '../../url'

export default function SignUp() {

    const navigate = useNavigate()

    const [fname, setfname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phnno,setPhnno] = useState("")

    function handlename(event) {
        const fullName = event.target.value
        setfname(fullName)
    }

    function handleemail(event) {
        const newemail = event.target.value
        setEmail(newemail)
    }

    function handlePhn(event){
        const newphn = event.target.value
        setPhnno(newphn)
    }

    function handlepassword(event) {
        const newpassword = event.target.value
        setPassword(newpassword)

    }
    async function handleSubmit(event) {
        event.preventDefault()
        const data = {
            name: fname,
            email: email,
            password: password,
            phnno:phnno
        }

        try {
            await axios.post(`${baseUrl}/SignUp`, data)
                .then(res => {
                    console.log(res)
                    if (res.data.status === "error") {
                        alert(res.data.message)
                        setEmail("");
                        setfname("")
                        setPassword("")
                    }
                    else{
                        alert(res.data.message)
                        navigate('/Login', { replace: true })
                    }

                    
                })
        }
        catch(error) {
            console.log(error);
        }


    }

    return (
        <div className='main-div'>
            <Header />
            <div className='form-card form gap-3'>
                <h1>Sign Up</h1>
                <form className='d-flex flex-column gap-3 col-4'>

                    <input onChange={handlename} className='input-box' type='text' value={fname} name='fname' placeholder='Enter your Name' />
                    <input onChange={handleemail} className='input-box' type='email' value={email} name='email' placeholder='Enter your Email' />
                    <input onChange={handlepassword} className='input-box' type='password' value={password} name='password' placeholder='Enter your password' />
                    <input onChange={handlePhn} className='input-box' type='text' value={phnno} name='phnno' placeholder='Enter your phn no'/>
                    <button onClick={handleSubmit} className='btn btn-success'>Submit</button>
                </form>
                <Link to={"/Login"}><button className='btn btn-danger mt-2'>Already have an account</button></Link>
            </div>
        </div>
    )
}
