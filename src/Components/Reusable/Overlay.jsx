import { bool, func, string } from 'prop-types';
import React from 'react';

function Overlay({ isOpen, style, onClose }) {
  return (
    <div className={`cursor-pointer bg-[rgba(0,0,0,.35)] fixed top-0 bottom-0 left-0 right-0 z-50 ${style}`} onClick={onClose} hidden={!isOpen} />
  );
}

Overlay.propTypes = {
  isOpen: bool.isRequired,
  style: string,
  onClose: func.isRequired,
};

export default Overlay;
