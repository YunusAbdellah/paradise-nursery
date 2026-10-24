import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <p className="about-us-description">
        Welcome to Paradise Nursery, your ultimate destination for bringing nature closer to your home. 
        We are passionate about creating greener living spaces by offering a wide variety of high-quality houseplants, 
        ranging from air-purifying greens to aromatic and low-maintenance plants. Our mission is to promote sustainable 
        living, enhance your indoor environment, and inspire plant lovers of all experience levels to cultivate their own indoor oasis.
      </p>
      <div className="about-us-content">
        <p>
          Whether you are looking to purify your air, add a touch of fragrance, or find a resilient companion for your desk, 
          Paradise Nursery carefully curates every plant to ensure health, beauty, and vitality. Join us in our journey to make the world greener, 
          one plant at a time.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
