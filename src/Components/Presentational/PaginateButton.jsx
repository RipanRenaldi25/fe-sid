import { bool, func, number } from 'prop-types';
import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function PaginateButton({
  canPreviousPage, canNextPage, previousPage, nextPage, pageIndex,
}) {
  return (
    <section className="absolute right-8 bottom-3">
      <div className="flex w-full gap-4 items-center p-4">
        <button type="button" className={`flex items-center  rounded-xl text-white ${canPreviousPage ? 'bg-purple-color' : 'bg-gray-400'}`} disabled={!canPreviousPage} onClick={previousPage}>
          <span className="text-2xl"><MdKeyboardArrowLeft /></span>
        </button>
        <div className="flex gap-2 items-center">
          <span>Page</span>
          <span className="bg-primary-white w-8 flex items-center justify-center rounded-lg">{pageIndex + 1}</span>
          <span>of 56</span>
        </div>
        <button type="button" className={`flex items-center ${canNextPage ? 'bg-purple-color' : 'bg-gray-400'}  rounded-xl text-white `} disabled={!canNextPage} onClick={nextPage}>
          <span className="text-2xl"><MdKeyboardArrowRight /></span>
        </button>
      </div>
    </section>
  );
}

PaginateButton.propTypes = {
  canPreviousPage: bool.isRequired,
  canNextPage: bool.isRequired,
  previousPage: func.isRequired,
  nextPage: func.isRequired,
  pageIndex: number.isRequired,
};

export default PaginateButton;
