import React, { Component } from 'react'
import NavBar from './components/NavBar'
import HeroImage from './components/HeroImage'


class App extends Component {
  render() {
    return (
    <div className="container">
      <NavBar />
      <HeroImage />
    </div> 
    )
  }
}

export default App
