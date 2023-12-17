import React from 'react';
import propTypes from 'prop-types';

function Avatar({ imageUrl }) {
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden flex justify-center items-center">
      <img src={imageUrl} alt="user-avatar" />
    </div>
  );
}

Avatar.propTypes = {
  imageUrl: propTypes.string.isRequired,
};

export default Avatar;
