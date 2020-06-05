import React, { Component } from 'react'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import styles from '../styles/NavBar.scss'

class HelloWorld extends Component {
  render() {
    return <div>
        <nav class="mobile-navbar">
          <button class="header-mobile-nav-toggle">
            <span class="top"></span>
            <span class="middle"></span>
            <span class="bottom"></span>
          </button>
          <img class="logo" alt="Art & Desi Logo" />
          <FaShoppingCart />
        </nav>
    </div>
  }
}

export default HelloWorld
