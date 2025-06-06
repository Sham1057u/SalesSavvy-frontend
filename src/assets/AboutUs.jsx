import React from 'react';
//import "./assets/styles.css";

export default function AboutUs() {
  return (
    <div className="about-us-container" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>About SalesSavvy</h1>
      <p>
        <strong>SalesSavvy</strong> is a modern, user-friendly e-commerce platform designed to make online shopping simple, secure, and seamless.
        Whether you're browsing casually or shopping with purpose, SalesSavvy connects you with quality products at affordable prices.
      </p>
      <h2>What We Offer</h2>
      <p>
        Customers can explore a wide variety of categories including:
      </p>
      <ul>
        <li><strong>Shirts</strong> – Find formal, casual, and trendy styles.</li>
        <li><strong>Pants</strong> – From office-ready trousers to comfortable joggers.</li>
        <li><strong>Accessories</strong> – Belts, wallets, watches, and more.</li>
        <li><strong>Footwear</strong> – Sneakers, loafers, sandals, and formal shoes.</li>
      </ul>
      <h2>Why Choose SalesSavvy?</h2>
      <ul>
        <li>Easy-to-use interface</li>
        <li>Secure payment and login system</li>
        <li>Real-time cart updates</li>
        <li>Fast and reliable delivery</li>
        <li>Customer-first return and support policy</li>
      </ul>
      <p>
        Start your shopping journey with SalesSavvy today and experience a smarter way to shop!
      </p>
    </div>
  );
}
