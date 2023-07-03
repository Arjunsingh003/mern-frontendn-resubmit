import React from 'react';


const Introscreen = () => {
  return (
    <div className="pizza-delivery-app">
      <header>
        <h1>PIZZA DELIVERY APP</h1>
      </header>
      <section className="welcome-section">
        <h2>Welcome to Pizza Delivery App!</h2>
        
      </section>
      <section className="offers-section">
        <h3>Special Offers Today:</h3>
        <ul>
          <li>Buy One Large Pizza, Get One Free</li>
          <li>20% Off on Family Combo</li>
          <li>Free Delivery on Orders Above $30</li>
        </ul>
      </section>
      <section className="menu-section">
       
      </section>
      <section className="contact-section">
        <h4>Contact Us:</h4>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@pizzadeliveryapp.com</p>
      </section>
    </div>
  );
};

export default Introscreen;