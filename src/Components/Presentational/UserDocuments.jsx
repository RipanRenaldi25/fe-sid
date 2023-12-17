import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentStatusItem from '../Reusable/DocumentStatusItem';
import { asyncGetUserRequests } from '../../states';
import DocumentStatusList from './DocumentStatusList';

function UserDocuments() {
  const dispatch = useDispatch();
  const { requests: { userRequests }, auth: { user } } = useSelector((states) => states);
  useEffect(() => {
    dispatch(asyncGetUserRequests(user.id));
  }, []);
  return (
    <div className="w-[calc(100%-280px)] absolute left-[280px] bg-bg-color min-h-screen px-12 py-10">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold">Dokumen</h1>
      </header>
      <div className="mt-8 bg-white rounded-xl py-4 px-10">
        <DocumentStatusList documentList={userRequests} />
      </div>
    </div>
  );
}

export default UserDocuments;
