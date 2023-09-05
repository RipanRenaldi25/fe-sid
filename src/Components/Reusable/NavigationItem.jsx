import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function NavigationItem({ path, title, onClick }) {
  return (
    <Link to={path} onClick={onClick}>
      <p className="font-semibold hover:text-gray-300 transition-colors">
        {title}
      </p>
    </Link>
  );
}

NavigationItem.propTypes = {
  path: propTypes.any.isRequired,
  title: propTypes.any.isRequired,
  onClick: propTypes.func,
};

export default NavigationItem;
