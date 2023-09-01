import React from 'react';
import propTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Card({ title, description, children }) {
  return (
    <section className="border p-4 shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default Card;
