import { useState } from 'react'
import './output.css';
import Header from './components/Header';
import Content from './components/Emojis';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Link , Routes } from "react-router-dom";


const Home =()=><div>
<Header/>
<Welcome/>
<Footer/>
</div>

const Emojis =()=><>
  <Header/>
  <Content/>
  <Footer/>
  </>
  


function App() {
  
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/emoji' element={<Emojis/>}/>
          <Route path='/pixilart' element={<></>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
