import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineCheck, AiOutlineFilePdf } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SelectInput from '../Reusable/SelectInput';
import UploadFileInput from '../Reusable/UploadFileInput';
import {
  getAccessToken,
  getFileSize, getFileType, logout, splitFileName, updateAccessToken,
} from '../../utils/utilities';

const selectOptions = [
  {
    title: 'Pilih Jenis Dokumen',
    value: 'default',
  },
  {
    title: 'Surat Kematian',
    value: 'surat_kematian',
  },
  {
    title: 'SKU',
    value: 'sku',
  },
  {
    title: 'Domisili',
    value: 'domisili',
  },
  {
    title: 'Keterangan Lahir',
    value: 'keterangan_lahir',
  },
  {
    title: 'Surat Pindah',
    value: 'surat_pindah',
  },
  {
    title: 'Surat Serba Guna',
    value: 'surat_serba_guna',
  },
];

function UploadForm() {
  const [percent, setPercent] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const [documentType, setDocumentType] = useState('default');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const uploadFiles = async ({ documentKind, documents }) => {
    if (documentType === 'default') {
      alert('Pilih jenis dokumen terlebih dahulu');
      return;
    }
    let formData;
    try {
      formData = new FormData();
      formData.append('documentKind', documentKind);
      documents.forEach((document) => {
        formData.append('document', document);
      });
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/documents`, formData, {
        headers: {
          Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
        },
        onUploadProgress: (progressEvent) => {
          setUploading(true);
          const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setPercent(percentage);
          setUploading(false);
        },
      });
    } catch ({ response }) {
      try {
        await updateAccessToken();
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/documents`, formData, {
          headers: {
            Authorization: `BEARER ${getAccessToken({ key: 'ACCESS_TOKEN' })}`,
          },
          onUploadProgress: (progressEvent) => {
            setUploading(true);
            const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setPercent(percentage);
            setUploading(false);
          },
        });
        alert('document berhasil di upload');
      } catch ({ response: { status } }) {
        if (status === 403) {
          await logout(dispatch);
          alert('Silahkan login kembali');
          navigate('/login');
        }
      }
    }
  };

  useEffect(() => {
    let interval;
    if (percent === 100) {
      interval = setTimeout(() => {
        alert('document berhasil di upload');
        setFiles([]);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  const onSubmit = async (e) => {
    e.preventDefault();
    await uploadFiles({ documentKind: documentType, documents: files });
  };

  return (
    <section>
      <form encType="multipart/form-data" className="w-1/3 mx-auto relative" onSubmit={onSubmit}>
        <div>
          <div>
            <header className="flex flex-col items-center mb-4">
              <h1 className="text-xl">Upload Dokumen</h1>
              <p className="text-slate-500">Isi form di bawah untuk mengirim dokumen</p>
            </header>
            <div className="type mb-5">
              <h1 className="mb-3">Jenis Dokumen</h1>
              <SelectInput options={selectOptions} onChangeHandler={(e) => setDocumentType(e.target.value)} value={documentType} />
            </div>
            <div>
              <UploadFileInput percent={percent} fileSize={5} fileType="pdf" uploading={uploading} setFiles={setFiles} files={files} />
            </div>
            <button type="submit" className="right-0 mt-3 bg-gradient-to-r from-secondary-blue to-secondary-blue-dark text-white w-full rounded-full py-1 hover:from-secondary-blue-dark hover:to-blue-950 transition-colors">Upload</button>

          </div>

        </div>
        <section className="">
          <h1 className="font-semibold">Uploaded File</h1>
          {files.map((file) => (
            <div className="flex justify-between mt-4" key={file.name}>
              <div className="flex gap-5">
                <span className="text-4xl flex justify-center items-center w-[40px] h-[40px]"><AiOutlineFilePdf /></span>
                <div className="mr-2 w-32">
                  <h2 className="text-[12px]">{splitFileName(file.name)[0]}</h2>
                  <div className="flex gap-2 text-sm items-center text-gray-500 w-full">
                    <h3>{getFileType(file.type)}</h3>
                    <div className="w-2 h-2 bg-gray-500 rounded-full" />
                    <h3>
                      {getFileSize(5)}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="progress flex gap-4 w-3/4 items-center">
                <div className="relative w-[80%] h-2 rounded-md progress-container bg-indigo-100">
                  <span
                    className="h-full rounded-md block bg-gradient-to-r from-blue-600 to-indigo-800 transition-all"
                    style={{
                      width: `${percent}%`,
                    }}
                  />
                </div>
                {percent === 100 ? (
                  <span><AiOutlineCheck /></span>
                ) : (
                  <span className="text-sm text-blue-600">
                    {percent}
                    %
                  </span>

                )}
              </div>

            </div>

          ))}
        </section>
      </form>
    </section>
  );
}

export default UploadForm;
