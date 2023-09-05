import { arrayOf, object } from 'prop-types';
import { useTable, usePagination, useSortBy } from 'react-table';
import {
  TiArrowSortedDown, TiArrowSortedUp, TiArrowUnsorted,
} from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import React, { useEffect, useMemo, useState } from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import SearchBar from '../Reusable/SearchBar';
import PaginateButton from './PaginateButton';
import DateInput from '../Reusable/DateInput';
import useFormInput from '../../hooks/useInput';
import { asyncSearchRequest, changeInputSearchFormActionCreator, clearInputLoginActionCreator } from '../../states';
import useDebounce from '../../hooks/useDebounce';
import ProcessedInput from '../Reusable/ProcessedInput';
import { useDispatch } from 'react-redux';
import { clearSearchbarInput } from '../../states';
import {AiOutlineClear} from 'react-icons/ai'
import Table from '../Reusable/Table';


function AdminTable({ columns, data = [], requestSearch = [] }) {
  const [searchbarInput, { onChangeInputHandler }] = useFormInput('searchForm', {
    onChangeInput: changeInputSearchFormActionCreator, onClearAction: clearInputLoginActionCreator,
  });
  const dispatch = useDispatch();
  const debounceValue = useDebounce(searchbarInput.name, 400);
  useEffect(() => {
    dispatch(asyncSearchRequest({
      keyword: debounceValue,
      date: searchbarInput.date,
      status: searchbarInput.process
    }))
  }, [debounceValue, searchbarInput.date, searchbarInput.process])
  return (
    <section className="bg-sidebar-color py-10  rounded-xl">
      <header className="px-6 mb-4 relative">
        <h1 className="font-bold text-xl ml-6 mb-8">Uploaded Form</h1>
        <div className="flex items-center gap-10">
          <SearchBar icon={<FiSearch />} placeholder="Cari berdasarkan nama" onChangeHandler={onChangeInputHandler} value={searchbarInput.name} />
          <DateInput icon={<CiCalendarDate />} value={searchbarInput.date} onChangeHandler={onChangeInputHandler} />
          <ProcessedInput icon={<TiArrowSortedDown />} value={searchbarInput.process} onChangeHandler={onChangeInputHandler} />
          <div className=" hover:bg-purple-color hover:text-white flex items-center rounded-xl overflow-hidden shadow-lg border cursor-pointer relative transition-colors" onClick={() => dispatch(clearSearchbarInput())}>
            <div>
              <button type='button' className='py-3 px-5 font-thin'>Clear</button>
            </div>
            <div className="flex items-center p-3 font-bold text-2xl border-l">
              <span><AiOutlineClear /></span>
            </div>
          </div>
        </div>
      </header>
      <Table data={requestSearch ? requestSearch : data} columns={columns}/>
    </section>
  );
}

AdminTable.propTypes = {
  columns: arrayOf(object).isRequired,
  data: arrayOf(object).isRequired,
};

export default AdminTable;
