import { func, string } from 'prop-types';
import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { HiOutlineDownload } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

function ActionTable({ id, downloadAction, completedStatusAction }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-7">
      <button type="button" className="text-white w-7 h-7 hover:bg-gray-700 transition-colors bg-purple-color flex justify-center items-center rounded-full" onClick={() => dispatch(downloadAction(id))}>
        <span className="text-xl"><HiOutlineDownload /></span>
      </button>
      <button type="button" className="text-white w-7 h-7 hover:bg-gray-700 transition-colors bg-purple-color flex justify-center items-center rounded-full" onClick={() => dispatch(completedStatusAction(id, 'completed'))}>
        <span className="text-xl"><AiOutlineCheck /></span>
      </button>
    </div>
  );
}

ActionTable.propTypes = {
  id: string.isRequired,
  downloadAction: func.isRequired,
  completedStatusAction: func.isRequired,
};

export default ActionTable;
