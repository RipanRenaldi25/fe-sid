import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  bool, func, node, string,
} from 'prop-types';

function Modal({
  children, title, onClose, isOpen,
}) {
  return (
    <section className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-10 rounded-xl w-1/3 bg-primary-white" style={{ zIndex: '60' }} hidden={!isOpen}>
      <header className="flex justify-between items-center py-2">
        <h1 className="text-xl">{title}</h1>
        <button type="button" className="" onClick={onClose}>
          <span className="text-2xl"><AiOutlineCloseCircle /></span>
        </button>
      </header>
      <div className="mt-4">
        {children}
      </div>
    </section>
  );
}

Modal.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  onClose: func.isRequired,
  isOpen: bool.isRequired,
};

export default Modal;
