import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Components/Home/Home'
import SignUp from '../Components/SignUp/SignUp'
import Login from '../Components/Login/Login'
import ShopNow from '../Components/ShopNow/ShopNow'
import Cart from '../Components/Cart/Cart'
import About from '../Components/About/About'

function Routing() {
    
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/SignUp' element={<SignUp />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/ShopNow' element={<ShopNow />}></Route>
                    <Route path='/Cart' element={<Cart />}></Route>
                    <Route path='/About' element={<About />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing