import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

function NavigationItem({ path, title }) {
  return (
    <Link to={path}>
      <p className="font-semibold hover:text-gray-300 transition-colors">
        {title}
      </p>
    </Link>
  );
}

NavigationItem.propTypes = {
  path: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default NavigationItem;
