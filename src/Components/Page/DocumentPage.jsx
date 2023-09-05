import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UploadForm from '../Presentational/UploadForm';

function DocumentPage() {
  const { auth: { isLogin } } = useSelector((states) => states);
  const navigate = useNavigate();
  return (
    <article className="px-16 py-3">
      {
        isLogin ? (
          <UploadForm />
        ) : (
          <section className="flex justify-center items-center w-full h-[calc(70vh-100px)] flex-col gap-4">
            <h1 className="text-2xl font-semibold">Anda belum login, silahkan klik tombol di bawah untuk login</h1>
            <button type="button" className="px-20 py-2 bg-yellow-dark hover:bg-[rgb(225,166,65)] transition-colors rounded-full font-bold" onClick={() => navigate('/login')}>Login</button>
          </section>
        )
      }
    </article>
  );
}

export default DocumentPage;
