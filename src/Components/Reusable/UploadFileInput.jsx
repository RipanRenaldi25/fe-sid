/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { bool, number, string } from 'prop-types';
import React, { useRef, useState } from 'react';
import { AiOutlineCloudUpload, AiOutlineFilePdf, AiOutlineCheck } from 'react-icons/ai';
import { getFileSize, getFileType } from '../../utils/utilities';

function UploadFileInput({
  percent, fileSize, fileType, uploading, setFiles, files,
}) {
  const fileRef = useRef();
  const [isDrag, setIsDrag] = useState(false);
  console.log({ files });

  return (
    <section
      className="max-w-[500px] bg-white py-1.5 px-6 rounded-lg"

    >
      <header className="w-full bg-white rounded-lg after:contents-[''] after:block after:w-full after:h-0.5 after:bg-slate-200 after:mt-2">
        <h1 className="mx-3 font-semibold text-xl ">Upload File</h1>
      </header>
      <article
        className="px-6 mt-4 w-full min-h-[150px] rounded-lg border-2 border-dashed hover:cursor-pointer mb-5"
        onClick={() => {
          fileRef.current.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDrag(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDrag(false);
        }}
        onDragOverCapture={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
          setFiles((prevState) => [...prevState, e.target.files[0]]);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setFiles((prevState) => [...prevState, ...e.dataTransfer.files]);
        }}
      >
        <section className="flex justify-center items-center flex-col h-[150px]">
          <input
            type="file"
            hidden
            ref={fileRef}
            className="w-full h-full"
            multiple
          />
          <span className="text-4xl"><AiOutlineCloudUpload /></span>
          {
            !isDrag ? (
              <>
                <h1 className="font-semibold">
                  Drop your file here, or
                  {' '}
                  <span className="text-blue">Browse</span>
                </h1>
                <p className="text-gray-400">Maximum file size is 5 mb</p>
              </>
            ) : (
              <h1>drop file</h1>
            )
          }
        </section>
      </article>
      <section hidden={!files}>
        <h1 className="font-semibold">Uploaded File</h1>
        {files.map((file) => (
          <div className="flex justify-between mt-4">
            <div className="flex gap-5">
              <span className="text-4xl flex justify-center items-center w-[40px] h-[40px]"><AiOutlineFilePdf /></span>
              <div className="mr-2">
                <h2>{file.name}</h2>
                <div className="flex gap-2 text-sm items-center text-gray-500">
                  <h3>{getFileType(fileType)}</h3>
                  <div className="w-2 h-2 bg-gray-500 rounded-full" />
                  <h3 className="w-10">
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

          </div>

        ))}
      </section>
    </section>
  );
}

UploadFileInput.propTypes = {
  percent: number.isRequired,
  fileType: string.isRequired,
  fileSize: number.isRequired,
  uploading: bool.isRequired,
};

export default UploadFileInput;
