import { arrayOf, object } from 'prop-types';
import { TiArrowSortedDown } from 'react-icons/ti';
import { FiSearch } from 'react-icons/fi';
import React, { useEffect } from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { AiOutlineClear } from 'react-icons/ai';
import SearchBar from '../Reusable/SearchBar';
import DateInput from '../Reusable/DateInput';
import useFormInput from '../../hooks/useInput';
import {
  asyncSearchRequest, changeInputSearchFormActionCreator, clearInputLoginActionCreator, clearSearchbarInput,
} from '../../states';
import useDebounce from '../../hooks/useDebounce';
import ProcessedInput from '../Reusable/ProcessedInput';
import Table from '../Reusable/Table';

function AdminTable({ columns, requestSearch = [], data = [] }) {
  const [searchbarInput, { onChangeInputHandler }] = useFormInput('searchForm', {
    onChangeInput: changeInputSearchFormActionCreator, onClearAction: clearInputLoginActionCreator,
  });
  const dispatch = useDispatch();
  // const debounceValue = useDebounce(searchbarInput.name, 400);

  // Menyebabkan infinite loop
  // useEffect(() => {
  //   dispatch(asyncSearchRequest({
  //     keyword: debounceValue,
  //     date: debounceDate,
  //     status: debounceProcess,
  //   }));
  // }, []);
  return (
    <section className="bg-sidebar-color py-10  rounded-xl">
      <header className="px-6 mb-4 relative">
        <h1 className="font-bold text-xl ml-6 mb-8">Uploaded Form</h1>
        <div className="flex items-center gap-10">
          <SearchBar icon={<FiSearch />} placeholder="Cari berdasarkan nama" onChangeHandler={onChangeInputHandler} value={searchbarInput.name} name="name" />
          <DateInput icon={<CiCalendarDate />} value={searchbarInput.date} onChangeHandler={onChangeInputHandler} />
          <ProcessedInput icon={<TiArrowSortedDown />} value={searchbarInput.process} onChangeHandler={onChangeInputHandler} />
          <div className=" hover:bg-purple-color hover:text-white flex items-center rounded-xl overflow-hidden shadow-lg border cursor-pointer relative transition-colors" onClick={() => dispatch(clearSearchbarInput())}>
            <div>
              <button type="button" className="py-3 px-5 font-thin">Clear</button>
            </div>
            <div className="flex items-center p-3 font-bold text-2xl border-l">
              <span><AiOutlineClear /></span>
            </div>
          </div>
        </div>
      </header>
      <Table data={requestSearch || data} columns={columns} />
    </section>
  );
}

AdminTable.propTypes = {
  columns: arrayOf(object).isRequired,
  requestSearch: arrayOf(object),
};

export default AdminTable;
