import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Home.css';

const Home = () => {
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <section id="hero" className="hero">
      <animated.div style={heroAnimation} className="hero-content">
        <h1>Hồ Quốc Thắng</h1>
        <p>Food Technology Engineer</p>
      </animated.div>
    </section>
  );
};

export default Home;