import React from 'react';
import propTypes from 'prop-types';

function Card({ title, description }) {
  return (
    <section className="border p-4 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <p>{description}</p>
    </section>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Card;
