import React from 'react';
import propTypes from 'prop-types';

function Card({ children }) {
  return (
    <section className="">
      { children }

    </section>
  );
}

Card.propTypes = {
  children: propTypes.node.isRequired,
};

export default Card;
