import React from 'react'
import { Header } from '../Components/HeaderComp/Header'
import Footer from '../Components/HeaderComp/Footer/Footer'

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header/>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        <Footer/>
    </div>
  )
}
