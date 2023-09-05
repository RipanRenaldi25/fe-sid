import React from 'react'
import Table from '../Reusable/Table'
import { FiSearch } from 'react-icons/fi'
import SearchBar from '../Reusable/SearchBar'
import { AiOutlineClear } from 'react-icons/ai'
import useFormInput from '../../hooks/useInput'
import { asyncGetUser, asyncGetUsers, changeInputNikBarActionCreator, clearSearchbarInput } from '../../states'
import useDebounce from '../../hooks/useDebounce'
import { useDispatch } from 'react-redux'

function AccountTable({data, columns}) {
  const [nikBarInput, { onChangeInputHandler }] = useFormInput('searchFormAccount', {
    onChangeInput: changeInputNikBarActionCreator, onClearAction: clearSearchbarInput,
  });
  const debounceValue = useDebounce(nikBarInput);
  const dispatch = useDispatch();
  return (
    <section className="bg-sidebar-color py-10  rounded-xl">
    <header className="px-6 mb-4 relative">
      <h1 className="font-bold text-xl ml-6 mb-8">Accounts</h1>
      <div className="flex items-center gap-10">
        <SearchBar icon={<FiSearch />} placeholder="Cari berdasarkan NIK" value={nikBarInput.nik} onChangeHandler={onChangeInputHandler}/>
        <div className=" hover:bg-purple-color hover:text-white flex items-center rounded-xl overflow-hidden shadow-lg border cursor-pointer relative transition-colors" onClick={() => {}}>
          <div>
            <button type='button' className='py-3 px-5 font-thin'>Clear</button>
          </div>
          <div className="flex items-center p-3 font-bold text-2xl border-l">
            <span><AiOutlineClear /></span>
          </div>
        </div>
      </div>
    </header>
    <Table data={data} columns={columns}/>
  </section>
  )
}

export default AccountTable