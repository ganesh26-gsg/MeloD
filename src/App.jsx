import React from 'react'
import LandingPage from './store/pages/LandingPage'
import   './App.css'
import { Route,Routes } from 'react-router-dom'
import Acpage from './store/pages/Acpage'
import Tvpage from './store/pages/Tvpage'
import Fridgepage from './store/pages/Fridgepage'
import Mobilepage from './store/pages/Mobilepage'
import Watchpage from './store/pages/Watchpage'
import Menpage from './store/pages/Menpage'
import Womenpage from './store/pages/Womenpage'
import Beautypage from './store/pages/Beautypage'
import Computerpage from './store/pages/Computerpage'
import AcSingle from './singles/AcSingle'
import Tvsingle from './singles/Tvsingle'
import FridgeSingle from './singles/FridgeSingle'
import MobileSingle from './singles/MobileSingle'
import WatchSingle from './singles/WatchSingle'
import MenSingle from './singles/MenSingle'
import WomenSingle from './singles/WomenSingle'
import BeautySingle from './singles/BeautySingle'
import ComputerSingle from './singles/ComputerSingle'
import UserCart from './store/UserCart'
import ProductPage from './store/pages/Productpage'
import LoginPage from './store/LoginPage'
import Register from './store/RegisterPage'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<LandingPage/>} />
        <Route path='/ac' element={<Acpage />} />
        <Route path='/tv' element={<Tvpage />} />
        <Route path='/fridge' element={<Fridgepage />} />
        <Route path='/mobile' element={<Mobilepage />} />
        <Route path='/watch' element={<Watchpage />} />
        <Route path='/men' element={<Menpage />} />
        <Route path='/women' element={<Womenpage />} />
        <Route path='/beauty' element={<Beautypage />} />
        <Route path='/computer' element={<Computerpage />}/>
        <Route path='/ac/:id' element={<AcSingle />} />
        <Route path='/tv/:id' element={<Tvsingle />}/>
        <Route path='/fridge/:id' element={<FridgeSingle />}/>
        <Route path='/mobile/:id' element={<MobileSingle />}/>
        <Route path='/watch/:id' element={<WatchSingle />}/>
        <Route path='/men/:id' element={<MenSingle />}/>
        <Route path='/women/:id' element={<WomenSingle />}/>
        <Route path='/beauty/:id' element={<BeautySingle/>}/>
        <Route path='/computer/:id' element={<ComputerSingle />}/>
        <Route path='/cart' element = {<UserCart />} />
        <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />}/>
      <Route path='/register' element={<Register />}/>
      </Routes>
    </div>
  )
}

export default App
