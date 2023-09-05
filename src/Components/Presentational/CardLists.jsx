import React from 'react';
import propTypes from 'prop-types';
import Card from '../Reusable/Card';

function CardLists({ misi }) {
  return (
    <section className="mobile:grid-cols-1 mt-7 col-start-1 col-end-4 row-start-2 grid md:grid-cols-3 gap-4">
      {misi.map((description) => (
        <Card title="Misi" description={description.content} />
      ))}
    </section>
  );
}

CardLists.propTypes = {
  misi: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CardLists;
