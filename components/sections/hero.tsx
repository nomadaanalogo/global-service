import React from 'react';

const Hero = () => {
  return (
    <div className="hero">
      <img 
        src="/images/hero-santa-marta.webp" 
        alt="Hero Background" 
        loading="lazy" 
        style={{ width: '100%', height: 'auto' }} 
      />
      <h1>Welcome to Our Service</h1>
      <p>Your satisfaction is our priority.</p>
    </div>
  );
};

export default Hero;
