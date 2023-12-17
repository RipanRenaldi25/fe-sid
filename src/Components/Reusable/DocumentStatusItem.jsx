import React from 'react';
import { FaFolder } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { FcProcess } from 'react-icons/fc';
import { FaRegCircleCheck } from 'react-icons/fa6';
import propTypes from 'prop-types';
import StatusBadge from './StatusBadge';

function DocumentStatusItem({
  status, children, isNew, title, date,
}) {
  function fixTitle(uppercaseTitle) {
    const fixedTitle = uppercaseTitle.toLowerCase().split('_').join(' ');
    return fixedTitle;
  }
  function changeDateToLocalFormat(dateIso) {
    const newDate = new Date(dateIso);
    return `${newDate.toLocaleString()}`;
  }
  fixTitle('ASD_ASD');
  fixTitle.propTypes = {
    title: propTypes.string,
  };
  return (
    <>
      <section className="flex justify-between px-6 py-3 items-center rounded-lg border border-slate-200 shadow-sm">
        <div className="flex gap-4 items-center text-xl">
          <div className="flex items-center gap-4 min-w-[350px]">
            <span>
              <FaFolder />
            </span>
            <h1>{fixTitle(title)}</h1>
          </div>
          <p className="text-sm">{changeDateToLocalFormat(date)}</p>
          {isNew && (
            <StatusBadge title="Terbaru" />
          )}
        </div>
        <div className="flex gap-3 items-center">
          <span className={`text-xl ${status === 'UNPROCESS' && 'text-pink-500'} ${status === 'PROCESS' && 'text-[#9D2AB1]'} ${status === 'PROCESSED' && 'text-green-400'}`}>
            {status === 'UNPROCESS' && (<MdOutlineWatchLater />)}
            {status === 'PROCESS' && (<FcProcess />)}
            {status === 'PROCESSED' && (<FaRegCircleCheck />)}
          </span>
          <h1 className={`${status === 'UNPROCESS' && 'text-pink-500'} ${status === 'PROCESS' && 'text-[#9D2AB1]'} ${status === 'PROCESSED' && 'text-green-400'} font-semibold`}>
            {status === 'UNPROCESS' && 'Belum Diproses'}
            {status === 'PROCESS' && 'Sedang Diproses'}
            {status === 'PROCESSED' && 'Telah Diproses'}
          </h1>
        </div>
      </section>
      {children}
    </>
  );
}

export default DocumentStatusItem;
