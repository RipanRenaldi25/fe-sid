/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useMemo, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  MdKeyboardArrowLeft, MdManageAccounts, MdDashboardCustomize, MdKeyboardArrowRight,
} from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import SidebarList from './SidebarList';
import {
  asyncGetRequests, logoutUser, setIsLogin, asyncDownloadDocuments, asyncChangeStatusDocument
} from '../../states';
import { removeAccessToken, removeRefreshToken } from '../../utils/utilities';
import AdminTable from '../Presentational/AdminTable';
import CreatedColumn from '../Presentational/CreatedColumnTable';
import ProcessedColumn from '../Presentational/ProcessedColumnTable';
import ActionTable from '../Presentational/ActionTable';

function AdminPage() {
  const [sidebarList, setSidebarList] = useState([
    {
      title: 'Documents',
      path: '/dashboard',
      icon: <FaBook />,
      isActive: true,
    },
    {
      title: 'Account',
      path: '/dashboard/account',
      icon: <MdManageAccounts />,
      isActive: false,
    }]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth: { isLogin }, requests: { requests } } = useSelector((states) => states);
  const data = useMemo(() => requests, [requests]);
  const columns = [
    {
      accessor: 'requestedBy[0].name',
      Header: 'Name',
    },
    {
      accessor: 'created_at',
      Header: 'Created',
      Cell: ({ row }) => CreatedColumn({ date: row.original.created_at }),
    },
    {
      accessor: 'processed',
      Header: 'Process',
      Cell: ({ row }) => ProcessedColumn({ process: row.original.processed }),
    },
    {
      accessor: 'request_id',
      Header: 'Action',
      Cell: ({ row }) => ActionTable({ id: row.original.request_id, downloadAction: asyncDownloadDocuments,  completedStatusAction: asyncChangeStatusDocument}),
    },
  ];
  const memoizeColumns = useMemo(() => columns, []);

  useEffect(() => {
    dispatch(asyncGetRequests());
  }, []);
  if (!isLogin) {
    navigate('/');
  }

  const onClickSidebarHandler = (path) => {
    setSidebarList((prevState) => (
      prevState.map((nav) => ({
        ...nav,
        isActive: nav.path === path,
      }))
    ));
    navigate(path);
  };
  return (
    <article className="Admin Page relative bg-bg-color min-h-screen">
      <aside className={`fixed top-0 left-0 ${sidebarOpen ? 'w-[250px]' : 'w-[88px]'} h-full bg-sidebar-color transition-all flex flex-col justify-between z-40`}>
        <div>
          <header className="relative p-6 after:contents-[''] after:block after:border after:w-full after:bg-gray-300 after:mt-1">
            <div className="flex justiy-center items-center group cursor-pointer">
              <span className="flex justify-center items-center min-w-[40px] text-2xl"><MdDashboardCustomize /></span>
              <h1 className={`text-xl font-semibold ${!sidebarOpen && 'opacity-0 group-hover:opacity-100 pointer-events-none ml-8'}`}>Dashboard</h1>
            </div>
            <button type="button" className="absolute top-1/2 -right-[13px] text-2xl h-[25px] w-[25px] bg-purple-color text-white rounded-full flex justify-center items-center" onClick={() => setSidebarOpen((prevState) => !prevState)}>
              {' '}
              {sidebarOpen ? (<MdKeyboardArrowLeft />) : (<MdKeyboardArrowRight />)}
              {' '}
            </button>
          </header>
          <nav className="relative px-4">
            <ul>
              <SidebarList navList={sidebarList} onClickSidebarHandler={onClickSidebarHandler} sidebarOpen={sidebarOpen} />
            </ul>
          </nav>
        </div>
        <div
          className="group relative bottom-10 flex justif- items-center gap-2px-2 py-2 rounded-lg hover:bg-purple-color hover:text-primary-white cursor-pointer transition-colors"
          onClick={
            () => {
              dispatch(setIsLogin(false));
              dispatch(logoutUser());
              removeAccessToken({ key: 'ACCESS_TOKEN' });
              removeAccessToken({ key: 'USER' });
              removeRefreshToken({ key: 'REFRESH_TOKEN' });
            }
          }
        >
          <span className="min-w-[40px] text-xl ml-8">
            <CiLogout />
          </span>
          <button
            type="button"
            className={`${!sidebarOpen && 'opacity-0 group-hover:opacity-100 group-hover:ml-6 group-hover:text-black'}`}
          >
            Log Out
          </button>
        </div>
      </aside>
      <section className={`relative ${sidebarOpen ? 'left-[250px] w-[calc(100%-250px)]' : 'left-[88px] w-[calc(100%-88px)]'} transition-all h-screen p-5`}>
        <AdminTable columns={memoizeColumns} data={data} />
      </section>
    </article>
  );
}

export default AdminPage;
