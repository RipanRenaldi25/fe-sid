import React, { useContext, useEffect, useMemo } from 'react'
import sidebarContext from '../../Context/sidebarContext'
import Table from '../Reusable/Table';
import AdminTable from '../Presentational/AdminTable';
import AccountTable from '../Presentational/AccountTable';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetUsers } from '../../states';

function AccountPage() {
  const {sidebarOpen} = useContext(sidebarContext);
  const {requests: { isFetching }, users: { users, user }} = useSelector(states => states);
  const dispatch = useDispatch();
  const columns = useMemo(() => ([
    {
      Header: 'No',
      accessor: 'username'
    },
    {
      Header: 'Nama',
      accessor: 'name'
    },
    {
      Header: 'NIK',
      accessor: 'nik'
    },
    {
      Header: 'Nomor Telepon',
      accessor: 'phones[0].phoneNumber',
    },
    
  ]), []);
  const data = useMemo(() => ([]), [])
  console.log({users});
  

  useEffect(() => {
    dispatch(asyncGetUsers);
  }, [])
  return (
    <section className={`relative ${sidebarOpen ? 'left-[250px] w-[calc(100%-250px)]' : 'left-[88px] w-[calc(100%-88px)]'} transition-all h-screen p-5`}>
      <AccountTable columns={columns} data={data}/>
    </section>
  )
}

export default AccountPage