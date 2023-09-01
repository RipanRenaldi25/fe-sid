import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SocialMedia({ icon, url }) {
  return (
    <div className="twitter transition-transform hover:scale-125">
      <Link to={url}>{icon}</Link>
    </div>
  );
}

SocialMedia.propTypes = {
  icon: propTypes.func.isRequired,
  url: propTypes.string.isRequired,
};

export default SocialMedia;
