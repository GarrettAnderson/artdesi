import React, { Component } from 'react';
import ShirtImage from '../images/Shirt.png'

class Products extends Component {
  render() {
    return (
      <section className="products-section">
        <div className="products-container">
          <div className="products-container-row">
            <article className="single-product-container">
              <div className="product-content">
                <a href="/" className="product-img-link">
                  <img src={ShirtImage} />
                </a>
                <header className="product-heading"></header>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
