import React from 'react';
import './Socials.css';

const Socials = () => {
  return (
    <section id="socials" className="socials">
      <h2>My Socials</h2>
      <ul className="social-list">
        <li><a href="https://zalo.me/placeholder" target="_blank" rel="noopener noreferrer">Zalo</a></li>
        <li><a href="https://www.facebook.com/placeholder" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com/placeholder" target="_blank" rel="noopener noreferrer">X</a></li>
        <li><a href="https://www.instagram.com/placeholder" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.tiktok.com/placeholder" target="_blank" rel="noopener noreferrer">TikTok</a></li>
      </ul>
    </section>
  );
};

export default Socials;