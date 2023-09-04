import { arrayOf, object } from 'prop-types';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted,
} from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import SearchBar from '../Reusable/SearchBar';
import PaginateButton from './PaginateButton';
import DateInput from '../Reusable/DateInput';
import useFormInput from '../../hooks/useInput';
import { changeInputSearchFormActionCreator, clearInputLoginActionCreator } from '../../states';
import useDebounce from '../../hooks/useDebounce';
import ProcessedInput from '../Reusable/ProcessedInput';

function AdminTable({ columns, data = [] }) {
  const [searchbarInput, { onChangeInputHandler }] = useFormInput('searchForm', {
    onChangeInput: changeInputSearchFormActionCreator, onClearAction: clearInputLoginActionCreator,
  });
  const debounceValue = useDebounce(searchbarInput.name, 400);
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
    <section className="bg-sidebar-color py-10  rounded-xl">
      <header className="px-6 mb-4 relative">
        <h1 className="font-bold text-xl ml-6 mb-8">Uploaded Form</h1>
        <div className="flex items-center gap-10">
          <SearchBar icon={<FiSearch />} placeholder="Cari berdasarkan nama" onChangeHandler={onChangeInputHandler} value={searchbarInput.name} />
          <DateInput icon={<CiCalendarDate />} value={searchbarInput.date} onChangeHandler={onChangeInputHandler} />
          <ProcessedInput icon={<TiArrowSortedDown />} value={searchbarInput.process} onChangeHandler={onChangeInputHandler} />
        </div>
      </header>
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps} className="odd:bg-primary-white">
                {row.cells.map((cell) => (
                  <td className="px-8 py-2 border-b-2 border-slate-200">{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}

        </tbody>
      </table>

      <PaginateButton canNextPage={canNextPage} canPreviousPage={canPreviousPage} nextPage={nextPage} pageIndex={pageIndex} previousPage={previousPage} />
    </section>
  );
}

AdminTable.propTypes = {
  columns: arrayOf(object).isRequired,
  data: arrayOf(object).isRequired,
};

export default AdminTable;
