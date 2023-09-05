import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineClear } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { object, arrayOf } from 'prop-types';
import { BsPersonAdd } from 'react-icons/bs';
import Table from '../Reusable/Table';
import SearchBar from '../Reusable/SearchBar';
import useFormInput from '../../hooks/useInput';
import {
  changeInputNikBarActionCreator, clearSearchbarInput,
} from '../../states';
import useDebounce from '../../hooks/useDebounce';
import RegisterForm from './RegisterForm';

function AccountTable({ data, columns }) {
  const [nikBarInput, { onChangeInputHandler }] = useFormInput('searchFormAccount', {
    onChangeInput: changeInputNikBarActionCreator, onClearAction: clearSearchbarInput,
  });
  const debounceValue = useDebounce(nikBarInput);
  const dispatch = useDispatch();
  return (
    <section className="bg-sidebar-color py-10  rounded-xl">
      <header className="px-6 mb-4 relative">
        <h1 className="font-bold text-xl ml-6 mb-8">Accounts</h1>
        <div className="flex items-center gap-10 justify-between">
          <SearchBar icon={<FiSearch />} placeholder="Cari berdasarkan NIK" value={nikBarInput.nik} onChangeHandler={onChangeInputHandler} style="flex-1" />
          <div className=" hover:bg-purple-color hover:text-white flex items-center rounded-xl overflow-hidden shadow-lg border cursor-pointer relative transition-colors" onClick={() => {}}>
            <div>
              <button type="button" className="py-3 px-5 font-thin">Tambah Akun</button>
            </div>
            <div className="flex items-center p-3 font-bold text-2xl border-l">
              <span><BsPersonAdd /></span>
            </div>
          </div>
        </div>
      </header>
      <Table data={data} columns={columns} />
    </section>
  );
}

AccountTable.propTypes = {
  data: arrayOf(object).isRequired,
  columns: arrayOf(object).isRequired,
};

export default AccountTable;
