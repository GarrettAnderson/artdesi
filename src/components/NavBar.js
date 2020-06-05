import React, { Component } from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import styles from '../styles/NavBar.scss'
import Logo from '../images/art_and_desi.jpg'

class HelloWorld extends Component {
  render() {
    return (
      <header>
        <nav className="mobile-navbar">
          <div className="button-container">
            <button className="header-mobile-nav-toggle">
              <span className="top"></span>
              <span className="middle"></ span>
              <span className="bottom"></span>
          </button>
          </div>
          <img src={Logo} className="logo" alt="Art & Desi Logo" />
          <FaShoppingCart className="shopping-cart-icon"/>
        </nav>
      </header>
    )
  }
}

export default HelloWorld
