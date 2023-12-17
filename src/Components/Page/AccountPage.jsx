import React, { useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sidebarContext from '../../Context/sidebarContext';
import AccountTable from '../Presentational/AccountTable';
import {
  asyncGetUser, asyncGetUsers, changeInputNikBarActionCreator, clearSearchbarInput, clearSearchedUserActionCreator,
} from '../../states';
import useDebounce from '../../hooks/useDebounce';
import useFormInput from '../../hooks/useInput';

function AccountPage() {
  const { sidebarOpen } = useContext(sidebarContext);
  const { users: { users } } = useSelector((states) => states);
  const dispatch = useDispatch();
  const columns = useMemo(() => ([
    {
      Header: 'No',
      accessor: 'username',
      Cell: ({ row }) => (
        <h1>{row.index + 1}</h1>
      ),
    },
    {
      Header: 'Nama',
      accessor: 'name',
    },
    {
      Header: 'NIK',
      accessor: 'nik',
    },
    {
      Header: 'Nomor Telepon',
      accessor: 'contacts[0].phoneNumber',
    },

  ]), []);
  const data = useMemo(() => users, [users]);
  const [nikBarInput] = useFormInput('searchFormAccount', {
    onChangeInput: changeInputNikBarActionCreator, onClearAction: clearSearchbarInput,
  });
  const debounceValue = useDebounce(nikBarInput.nik, 400);

  useEffect(() => {
    if (debounceValue === '') {
      dispatch(clearSearchedUserActionCreator());
      dispatch(asyncGetUsers());
    } else {
      dispatch(asyncGetUser(debounceValue));
    }
  }, [debounceValue]);
  return (
    <section className={`relative ${sidebarOpen ? 'left-[250px] w-[calc(100%-250px)]' : 'left-[88px] w-[calc(100%-88px)]'} transition-all h-screen p-5`}>
      <AccountTable columns={columns} data={data} />
    </section>
  );
}

export default AccountPage;
