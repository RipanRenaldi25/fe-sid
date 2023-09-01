import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

function Hero({ content, img, directTo }) {
  function scrollToSection(sectionId) {
    const section = document.getElementById(directTo);
    console.log({ section, sectionId });
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="flex justify-between flex-1">
      <div className="flex-1" data-aos="fade-right">
        <h1 className="text-4xl font-semibold mb-8">Desa Babakan Peuteuy</h1>
        <p className="max-w-2xl">{content}</p>
        <button type="button" className="flex border mt-10 px-12 py-3 rounded-lg items-center gap-4  transition-colors bg-yellow-gray hover:bg-gray-400" onClick={() => scrollToSection(directTo)}>
          <span className="font-bold">Lihat Sejarah</span>
          <GoArrowRight className="text-xl" />
        </button>
      </div>
      <div className="flex-1">
        <img src={img} alt="forest background" className="rounded-lg" data-aos="zoom-in" />
      </div>
    </section>
  );
}

Hero.propTypes = {
  content: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  directTo: propTypes.string.isRequired,
};

export default Hero;
