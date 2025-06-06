import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container" style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or support needs, feel free to reach out to us!</p>

      <h2>Contact Information</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><strong>Email:</strong> Shamanthachar166@gmail.com</li>
        <li><strong>Phone:</strong> +91 6364626082</li>
        <li><strong>Location:</strong> Bengaluru, Karnataka, India</li>
      </ul>

      <h2>Follow Us</h2>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><strong>GitHub:</strong> <a href="https://github.com/Sham1057u" target="_blank" rel="noopener noreferrer">github.com/Sham1057u</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/shamanthachar/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shamanthachar/</a></li>
      </ul>

      <p>We’ll get back to you as soon as possible. Thank you for choosing SalesSavvy!</p>
    </div>
  );
}
