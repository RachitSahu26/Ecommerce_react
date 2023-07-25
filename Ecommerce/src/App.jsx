import { useState } from 'react'
import './App.css';
import Navigation from './Component/Navigation';
import HeroSection from './Component/HeroSection';
import Footer from './Component/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navigation/>
        <HeroSection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
