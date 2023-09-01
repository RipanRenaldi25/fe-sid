const saranaKesehatan = [
  {
    nama: 'Pustu',
    jumlah: 1,
  },
  {
    nama: 'Posyandu / Pokja',
    jumlah: '15 / 4',
  },
  {
    nama: 'Pos KB Desa',
    jumlah: 1,
  },
  {
    nama: 'Sanitasi / MCK',
    jumlah: 4,
  },
  {
    nama: 'Bidan',
    jumlah: 2,
  },
  {
    nama: 'Petugas gizi keliling',
    jumlah: 1,
  },
];
const saranaPendidikan = [
  {
    instansi: '(PAUD) TK',
    tenaga: 8,
    jumlah: 3,
  },
  {
    instansi: '(PAUD) RA',
    tenaga: 8,
    jumlah: 3,
  },
  {
    instansi: 'SD',
    tenaga: 45,
    jumlah: 4,
  },
  {
    instansi: 'SMP / MTS',
    tenaga: 14,
    jumlah: 3,
  },
  {
    instansi: 'SMA / SMK / MA',
    tenaga: 255,
    jumlah: 3,
  },
  {
    instansi: 'Pondok Pesantren',
    jumlah: 2,
    tenaga: 389,
  },
];
const saranaUmum = [
  {
    jenis: 'Jalan Lingkungan Tanah',
    satuan: 'Meter',
    volume: '1500 M',
    kondisi: 'Perlu Perkerasan',
  },
  {
    jenis: 'Jalan Desa Diaspal',
    satuan: 'Meter',
    volume: '5000 M',
    kondisi: 'Kurang Baik',
  },
  {
    jenis: 'Jalan Desa Diaspal',
    satuan: 'Meter',
    volume: '2.720 M',
    kondisi: 'Baik',
  },
  {
    jenis: 'Jalan Lingkungan Diploor',
    satuan: 'Meter',
    volume: '13.000 M',
    kondisi: '3.000 M Rusak Ringan ',
  },
  {
    jenis: 'Saluran Air',
    satuan: 'Meter',
    volume: '8.500 M',
    kondisi: 'Baik',
  },
  {
    jenis: 'Gor Desa',
    satuan: 'Unit',
    volume: '1',
    kondisi: 'Baik',
  },
  {
    jenis: 'Kantor Desa',
    satuan: 'Unit',
    volume: '1',
    kondisi: 'Baik',
  },
];
const penyelenggaraPemerintahDesa = [
  {
    uraian: 'Kepala Desa',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Sekretaris Desa',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kaur Keuangan',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kaur Perencanaan',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kaur Umum',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kasi Kesejahteraan',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kasi Pemerintahan',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kasi Pelayanan',
    jumlah: 1,
    keterangan: 'ada',
  },
  {
    uraian: 'Kepala Dusun',
    jumlah: 5,
    keterangan: 'ada',
  },
  {
    uraian: 'Staff',
    jumlah: 3,
    keterangan: 'ada',
  },
  {
    uraian: 'RW',
    jumlah: 15,
    keterangan: 'ada',
  },
  {
    uraian: 'RT',
    jumlah: 61,
    keterangan: 'ada',
  },
];

export const initialState = {
  kesehatan: saranaKesehatan,
  pendidikan: saranaPendidikan,
  umum: saranaUmum,
  penyelenggara: penyelenggaraPemerintahDesa,
};
