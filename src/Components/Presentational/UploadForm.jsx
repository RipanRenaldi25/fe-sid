import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineCheck, AiOutlineFilePdf } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
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
    value: 'SURAT_KEMATIAN',
  },
  {
    title: 'SKU',
    value: 'SKU',
  },
  {
    title: 'Domisili',
    value: 'DOMISILI',
  },
  {
    title: 'Keterangan Lahir',
    value: 'KETERANGAN_LAHIR',
  },
  {
    title: 'Surat Pindah',
    value: 'SURAT_PINDAH',
  },
  {
    title: 'Surat Serba Guna',
    value: 'SURAT_SERBA_GUNA',
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
      formData.append('type', documentKind);
      if (!files.length) {
        alert('Harap upload file terlebih dahulu');
        return;
      }
      documents.forEach((document) => {
        formData.append('image', document);
      });
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/requests`, formData, {
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
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    let interval;
    if (percent === 100) {
      interval = setTimeout(() => {
        alert('document berhasil di upload');
        setFiles([]);
        setPercent(0);
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

  const onDeleteFileHandler = (file) => {
    setFiles((prevState) => prevState.filter((value) => value.name !== file));
  };

  return (
    <div className="w-[calc(100%-280px)] overflow-hidden pt-8 absolute left-[280px] flex justify-center items-center bg-bg-color min-h-screen">
      <section className="w-2/3">
        <form encType="multipart/form-data" className="mobile:mt-10 md:mt-0 mx-auto relative" onSubmit={onSubmit}>
          <div>
            <div>
              <header className="mobile:justify-center flex flex-col items-center mb-4">
                <h1 className="text-2xl">Upload Dokumen</h1>
                <p className="text-slate-500 text-xl">Isi form di bawah untuk mengirim dokumen</p>
              </header>
              <div className="type mb-5">
                <h1 className="mb-3 text-xl">Jenis Dokumen</h1>
                <SelectInput options={selectOptions} onChangeHandler={(e) => setDocumentType(e.target.value)} value={documentType} />
              </div>
              <div className="w-full">
                <UploadFileInput percent={percent} fileSize={5} fileType="pdf" uploading={uploading} setFiles={setFiles} files={files} />
              </div>
              <button type="submit" className="right-0 mt-3 bg-gradient-to-r from-secondary-blue to-secondary-blue-dark text-white w-full rounded-full py-1 hover:from-secondary-blue-dark hover:to-blue-950 transition-colors">Upload</button>

            </div>

          </div>
          <section className="bg-sidebar-color rounded-xl p-6 mt-4" hidden={!files.length}>
            <h1 className="font-semibold">Uploaded File</h1>
            {files.map((file) => (
              <div className="flex justify-between mt-4 bg-[#FBFBFB] shadow-lg rounded-xl px-6 py-4" key={file.name}>
                <div className="flex gap-5 w-2/5">
                  <span className="text-4xl flex justify-center items-center h-[40px]"><AiOutlineFilePdf /></span>
                  <div className="mr-2 flex flex-col gap-2">
                    <h2 className="text-[12px]">{splitFileName(file.name)[0]}</h2>
                    <div className="flex gap-2 text-sm items-center text-gray-500 w-full">
                      <h3>{getFileType(file.type)}</h3>
                      <div className="w-2 h-2 bg-gray-500 rounded-full" />
                      <h3>
                        {getFileSize(file.size)}
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
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-xl text-red-600"
                    onClick={() => onDeleteFileHandler(file.name)}
                  >
                    <span><CgClose /></span>

                  </button>
                </div>

              </div>

            ))}
          </section>
        </form>
      </section>
    </div>
  );
}

export default UploadForm;
