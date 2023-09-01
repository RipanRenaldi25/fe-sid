import React from 'react';
import propTypes from 'prop-types';
import CardImage from './CardImage';

function CardImageList({ kadusList }) {
  return (
    <section>
      {
        kadusList.map((kadus) => (
          <CardImage key={kadus.name} />
        ))
    }
    </section>
  );
}

CardImageList.propTypes = {
  kadusList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default CardImageList;
