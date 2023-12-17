/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { func } from 'prop-types';
import React, { useRef, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

function UploadFileInput({ setFiles }) {
  const fileRef = useRef();
  const [isDrag, setIsDrag] = useState(false);

  return (
    <section
      className="bg-white py-1.5 px-6 rounded-lg"
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
          setIsDrag(false);
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

    </section>
  );
}

UploadFileInput.propTypes = {
  setFiles: func,
};

export default UploadFileInput;
