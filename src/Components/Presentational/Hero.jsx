import React from 'react';
import bgForest from '../../assets/images/forest-2.png';

function Hero() {
  return (
    <section className="min-h-[20rem] bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgForest})` }}>
      <div className="w-40 h-24 bg-yellow-dark">
        About
      </div>
    </section>
  );
}

export default Hero;
