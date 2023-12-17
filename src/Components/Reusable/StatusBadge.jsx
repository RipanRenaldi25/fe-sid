import React from 'react';
import propTypes from 'prop-types';

function StatusBadge({ title }) {
  return (
    <div className="bg-[#D7E4FF] text-sm font-semibold px-4 py-[2px] rounded-lg">
      <h1>{title}</h1>
    </div>
  );
}

StatusBadge.propTypes = {
  title: propTypes.string.isRequired,
};

export default StatusBadge;
