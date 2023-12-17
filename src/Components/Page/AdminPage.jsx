/* eslint-disable jsx-a11y/control-has-associated-label */
import React, {
  useContext, useEffect, useMemo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncGetRequests, asyncDownloadDocuments, asyncChangeStatusDocument, changeInputSearchFormActionCreator, clearInputLoginActionCreator, asyncSearchRequest,
} from '../../states';
import AdminTable from '../Presentational/AdminTable';
import CreatedColumn from '../Presentational/CreatedColumnTable';
import ProcessedColumn from '../Presentational/ProcessedColumnTable';
import ActionTable from '../Presentational/ActionTable';
import sidebarContext from '../../Context/sidebarContext';
import useFormInput from '../../hooks/useInput';
import useDebounce from '../../hooks/useDebounce';

function AdminPage() {
  const { requests: { requests, requestSearched: req } } = useSelector((states) => states);
  const [searchbarInput, { onChangeInputHandler }] = useFormInput('searchForm', {
    onChangeInput: changeInputSearchFormActionCreator, onClearAction: clearInputLoginActionCreator,
  });
  const data = useMemo(() => requests, [requests, req]);
  const requestSearch = useMemo(() => req, [req, requests]);
  const columns = [
    {
      accessor: 'users.name',
      Header: 'Name',
    },
    {
      accessor: 'createdAt',
      Header: 'Created',
      Cell: ({ row }) => CreatedColumn({ date: row.original.createdAt }),
    },
    {
      accessor: 'process',
      Header: 'Process',
      Cell: ({ row }) => ProcessedColumn({ process: row.original.process }),
    },
    {
      accessor: 'id',
      Header: 'Action',
      Cell: ({ row }) => ActionTable({ id: row.original.id, downloadAction: asyncDownloadDocuments, completedStatusAction: asyncChangeStatusDocument }),
    },
  ];
  const memoizeColumns = useMemo(() => columns, []);
  const { sidebarOpen } = useContext(sidebarContext);

  const dispatch = useDispatch();
  const debounceNameValue = useDebounce(searchbarInput.name, 400);
  const debounceDateValue = useDebounce(searchbarInput.date, 200);
  const debounceProcessValue = useDebounce(searchbarInput.process, 200);

  useEffect(() => {
    dispatch(asyncGetRequests());
    dispatch(asyncSearchRequest({
      keyword: debounceNameValue,
      date: debounceDateValue,
      status: debounceProcessValue,
    }));
  }, [debounceNameValue, debounceDateValue, debounceProcessValue]);

  return (
    <section className={`relative ${sidebarOpen ? 'left-[250px] w-[calc(100%-250px)]' : 'left-[88px] w-[calc(100%-88px)]'} transition-all h-screen p-5`}>
      <AdminTable columns={memoizeColumns} requestSearch={requestSearch} data={data} />
    </section>
  );
}

export default AdminPage;
