import {Routes,Route } from 'react-router-dom'
import Home from "./page/Home/Home"
import AboutMe from './page/AboutMe/AboutMe'
import Connect from './page/Connect/Connect'
import Portfolio from './page/Portfolio/Portfolio'
import Product from './page/Product/Product'

import './app.scss'
function App() {
  return (
  <div className='app'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AboutMe' element={<AboutMe/>}/>
      <Route path='/Connect' element={<Connect/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/Product/:cat/:id' element={<Product/>}/>
    </Routes>
  </div>
  );
}

export default App;
