import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted,
} from 'react-icons/ti';
import PaginateButton from '../Presentational/PaginateButton';

function Table({ columns = [], data = [] }) {
  const {
    getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, pageCount, state, canNextPage, canPreviousPage,
  } = useTable({
    columns,
    data,
    initialState: {
      pageIndex: 0,
    },
  }, useSortBy, usePagination);
  const { pageIndex } = state;
  return (
    <>
      <table className="w-full table-auto">
        <thead>
          {headerGroups.map((headers) => (
            <tr {...headers.getHeaderGroupProps()} className="border-b-2 border-slate-400">
              {headers.headers.map((header) => (
                <th {...header.getHeaderProps(header.getSortByToggleProps())} className="relative text-left px-4 py-2 font-semibold text-slate-600 w-[40px]">
                  {header.render('Header')}
                  {header.Header === 'Action' ? null : header.isSorted ? (header.isSortedDesc ? (
                    <span className="absolute top-1/2 -translate-y-1/2 text-xl mx-2"><TiArrowSortedUp /></span>
                  ) : (
                    <span className="absolute top-1/2 -translate-y-1/2 text-xl mx-2"><TiArrowSortedDown /></span>
                  )) : (
                    <span className="absolute top-1/2 -translate-y-1/2 mx-2"><TiArrowUnsorted /></span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps} className="odd:bg-primary-white" key={i}>
                {row.cells.map((cell, i) => (
                  <td className="px-8 py-2 border-b-2 border-slate-200" key={i}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}

        </tbody>
      </table>
      <PaginateButton canNextPage={canNextPage} canPreviousPage={canPreviousPage} nextPage={nextPage} pageIndex={pageIndex} previousPage={previousPage} pageCount={pageCount} />
    </>
  );
}

export default Table;
