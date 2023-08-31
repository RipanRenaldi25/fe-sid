import React from 'react';
import propTypes from 'prop-types';

function AsideInfo({ title, description }) {
  return (
    <div className="section">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

AsideInfo.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default AsideInfo;
