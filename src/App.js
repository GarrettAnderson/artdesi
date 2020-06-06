import React, { Component } from 'react'
import NavBar from './components/NavBar'
import HeroImage from './components/HeroImage'
import Products from './components/Products'



class App extends Component {
  render() {
    return (
    <div className="container">
      <NavBar />
      <HeroImage />
      <Products />
    </div> 
    )
  }
}

export default App
