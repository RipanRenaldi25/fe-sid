import React from 'react';
import { string } from 'prop-types';

function ProcessedColumn({ process }) {
  return (
    <>
      {process === 'UNPROCESS' && (
        <h1 className="text-pink-500 font-semibold">Belum Diproses</h1>
      )}
      {process === 'PROCESS' && (
        <h1 className="text-blue-400 font-semibold">
          Diproses
        </h1>
      )}
      {process === 'PROCESSED' && (
      <h1 className="text-green-400 font-semibold">Selesai Diproses</h1>
      )}
    </>
  );
}
ProcessedColumn.propTypes = {
  process: string.isRequired,
};
export default ProcessedColumn;
