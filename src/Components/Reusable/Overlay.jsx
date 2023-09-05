import { bool, func, string } from 'prop-types';
import React from 'react';

function Overlay({ isOpen, style, onClose }) {
  return (
    <div className={`bg-[rgba(0,0,0,.35)] fixed top-0 bottom-0 left-0 right-0 pointer-events-none z-50 ${style}`} hidden={!isOpen} onClick={onClose} />
  );
}

Overlay.propTypes = {
  isOpen: bool.isRequired,
  style: string,
  onClose: func.isRequired,
};

export default Overlay;
