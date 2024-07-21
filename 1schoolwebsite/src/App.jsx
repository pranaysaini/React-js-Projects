import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
        <Navbar />
        <Footer />

        </div>
        
              
      
    </>
  )
}

export default App
