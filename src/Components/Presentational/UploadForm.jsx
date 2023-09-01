import React from 'react';
import SelectInput from '../Reusable/SelectInput';
import UploadFileInput from '../Reusable/UploadFileInput';

const selectOptions = [
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
];

function UploadForm() {
  return (
    <section>
      <form encType="multipart/form-data" className="w-1/3 mx-auto relative">
        <header className="flex flex-col items-center mb-4">
          <h1 className="text-xl">Upload Dokumen</h1>
          <p className="text-slate-500">Isi form di bawah untuk mengirim dokumen</p>
        </header>
        <div className="type mb-5">
          <h1 className="mb-3">Jenis Dokumen</h1>
          <SelectInput options={selectOptions} />
        </div>
        <div onDrop={(e) => {
          e.preventDefault();
          console.log(e.dataTransfer);
        }}
        >
          <UploadFileInput />
        </div>
        <button type="submit" className="right-0 mt-3 bg-gradient-to-r from-secondary-blue to-secondary-blue-dark text-white w-full rounded-full py-1 hover:from-secondary-blue-dark hover:to-blue-950 transition-colors">Submit</button>
      </form>
    </section>
  );
}

export default UploadForm;
