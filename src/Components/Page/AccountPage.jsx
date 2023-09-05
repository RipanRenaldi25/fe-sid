import React, { useContext, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sidebarContext from '../../Context/sidebarContext';
import AccountTable from '../Presentational/AccountTable';
import { asyncGetUsers } from '../../states';

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
      accessor: 'phones[0].phone_number',
    },

  ]), []);
  const data = useMemo(() => users, [users]);

  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);
  return (
    <section className={`relative ${sidebarOpen ? 'left-[250px] w-[calc(100%-250px)]' : 'left-[88px] w-[calc(100%-88px)]'} transition-all h-screen p-5`}>
      <AccountTable columns={columns} data={data} />
    </section>
  );
}

export default AccountPage;
