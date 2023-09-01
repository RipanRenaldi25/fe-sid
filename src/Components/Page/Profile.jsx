import React, { useState } from 'react';
import Card from '../Reusable/Card';
import baganDesa from '../../assets/images/struktur-organisasi.png';
import geografis from '../../assets/images/geografis.png';
import { initialState } from '../../states';
import Footer from '../Presentational/Footer';

function Profile() {
  const [dataStatis] = useState(initialState);
  return (
    <article className="py-10 px-16">
      <h1 className="text-2xl font-bold mb-10 after:block after:bg-black after:h-0.5 after:w-full after:mt-1">Profile</h1>
      <section className="sejarah mb-16">
        <Card title="Sejarah Desa" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos id distinctio nihil dolore laboriosam unde rem. Dicta, eveniet? Quia necessitatibus ut mollitia aperiam odit enim nam molestias illo sint?. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam numquam ea ducimus dolor reprehenderit, ipsum eum. Necessitatibus aut quibusdam, sit explicabo eveniet libero quae, inventore ad neque incidunt unde recusandae." />
      </section>
      <section className="Visi Misi mb-16">
        <div className="visi mb-10">
          <h1 className="text-xl font-semibold mb-4">Visi & Misi Desa</h1>
          <Card title="Visi" description="Terbangunya tata kelola Pemerintahan Desa Babakan Peuteuy yang baikdan bersih,berdaya saing melalui digital yang berestetika guna mewujudkan kehidupan Desa Babakan Peuteuy yang adil, makmur, dan sejahtera serta menjunjunjg tinggi Nilai – nilai Agama dan Berakhlak Mulia " />
        </div>
        <div className="misi border p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Misi</h2>
          <p>
            8 Misi kami atau yang di sebut sebagai
            {' '}
            <q>NAWACITA</q>
            {' '}
          </p>
          <ol className="list-decimal ml-8">
            <li>
              Mewujudkan keamanan dan ketertiban  di  lingkungan desa babakan peuteuy
            </li>
            <li>
              Meningkatkan kesehatan, kebersihan desa serta mengusahakan jaminan kesehatan masyarakat melalui program pemerintah
            </li>
            <li>
              Membangun Babakan peuteuy secara merata dan berkeadilan dalam kerangka kesatuan desa
            </li>
            <li>
              Meningkatkan kehidupan yang harmonis ,toleran dan salingh menghormati dalam kehidupan berbudaya dan beragama di desa babakan peuteuy
            </li>
            <li>
              Mengedepankan kejujuran ,keadilan, transparansi dalam kehidupan sehari hari baik dalam pemerintahan maupun di masyarakat desa
            </li>
            <li>
              Meningkatkan kesejahteraan masyarakat desa dengan mewujudkan Badan Usaha Milik Desa( BUMDES ) dan program lain untuk membuka lapangan kerja bagimasyarakat desa, serta meningkatkan produksi rumah tangga kecil
            </li>
            <li>
              Meningkatkan sarana dan prasarana dari segi fisik, ekonomi, pendidikan, kesehatan dan kebudayaan di desa
            </li>
            <li>
              Meningkatkan pelayanan  yang maximal kepada masyarakat desa dan berdayasaing desa
            </li>
          </ol>
        </div>
      </section>
      <section className="mb-16">
        <h1 className="text-xl font-semibold mb-4">Bagan Desa</h1>
        <div className="p-2 shadow-md w-[80%] mx-auto">
          <img src={baganDesa} alt="bagandesa" />
        </div>
      </section>
      <section className="mb-16">
        <h1 className="text-xl font-semibold mb-4">Letak Geografis</h1>
        <div className="p-2 shadow-md w-[80%] mx-auto mb-4">
          <img src={geografis} alt="bagandesa" />
        </div>
        <Card title="Deskripsi" description="Desa Babakan Peuteuy merupakan salah satu desa yang terletak di Kabupaten Bandung Provinsi Jawa Barat,dengan luas wilayah ± 419,47 h. Desa Babakan Peuteuy terdiri 5 kadus 15 Rw dan 57 Rt. Adapun batas batas wilayah Desa Babakan Peuteuy dengan Desa lain adalah sebagai berikut: ">
          <div className="flex mt-7 gap-10">
            <div className="flex-1">
              <ul className="list-disc ml-8 mb-5">
                <li>
                  Jarak dari kantor desa ke pusat pemerintahan Kecamatan  berjarak ±2,4 km
                </li>
                <li>
                  Jarak dari kantor desa ke pusat pemerintahan Kota berjarak ±34 km
                </li>
                <li>
                  Jarak dari kantor desa ke ibu kota kabupaten Berjarak ±48 km
                </li>
                <li>
                  Jarak dari kantor desa ke Ibu Kota Provinsi berjarak ±32 km
                </li>
              </ul>
              <p>
                Secara umum kontur tanah Desa Babakan Peuteuy berupa areal pertanian seperti sawah,kebun dan tegalan.Ketinggian dari atas permukaan laut wilayah terendah berupa lembah adalah ±700 -750m di atas permukaan laut dedngan suhu rata rata adalah 28⁰C - 32⁰c.Secara umum sepanjang tahun mengalami 2 musim yaitu musim hujan di bulan September – April dan musim kemarau di bulan April- Agustus.
              </p>
            </div>
            <table className="table-fixed text-center border border-black mt-4 flex-1">
              <thead>
                <tr>
                  <th>Wilayah</th>
                  <th>Desa</th>
                  <th>Kecamatan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sebelah Utara</td>
                  <td>Dampit</td>
                  <td>Cicalengka</td>
                </tr>
                <tr>
                  <td>Sebelah Selatan</td>
                  <td>Tenjolaya</td>
                  <td>Cicalengka</td>
                </tr>
                <tr>
                  <td>Sebelah Timur</td>
                  <td>Nagrog</td>
                  <td>Cicalengka</td>
                </tr>
                <tr>
                  <td>Sebelah Barat</td>
                  <td>Cicalengka Wetan</td>
                  <td>Cicalengka</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

      </section>
      <section className="mb-20">
        <Card
          title="Kondisi Umum"
          description="Berdasarkan data profil desa per tahun 2019, data kependudukan Desa Babakan Peuteuy dapat diuraikan sebagai berikut :"
        >
          <div className="flex gap-10 my-10">
            <div>
              <h2 className="text-xl mb-2 font-semibold">Sarana Umum</h2>
              <table className="table-fixed w-full text-center border border-black">
                <thead>
                  <tr>
                    <th>Jenis</th>
                    <th>Satuan</th>
                    <th>Volume</th>
                    <th>Kondisi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataStatis.umum.map((saranaUmum) => (
                    <tr>
                      <td>{saranaUmum.jenis}</td>
                      <td>{saranaUmum.satuan}</td>
                      <td>{saranaUmum.volume}</td>
                      <td>{saranaUmum.kondisi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mb-8 ">
              <h2 className="text-xl mb-2 font-semibold">Jumlah penduduk secara Umum</h2>
              <table className="table-fixed w-full text-center border border-black">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Kependudukan</th>
                    <th>Jumlah</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jumlah Penduduk</td>
                    <td>14.984</td>
                    <td>Orang</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      Jumlah Kepala Keluarga
                    </td>
                    <td>4.962</td>
                    <td>KK</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="mb-8 flex-1">
              <h2 className="text-xl mb-2 font-semibold">Sarana Pendidikan</h2>
              <table className="table-fixed  w-full text-center border border-black">
                <thead>
                  <tr>
                    <th>Instansi Pendidikan</th>
                    <th>Jumlah Instansi</th>
                    <th>Tenaga Pendidik</th>
                  </tr>
                </thead>
                <tbody>
                  {dataStatis.pendidikan.map((dataPendidikan) => (
                    <tr>
                      <td>{dataPendidikan.instansi}</td>
                      <td>{dataPendidikan.jumlah}</td>
                      <td>{dataPendidikan.tenaga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mb-8 flex-1">
              <h2 className="text-xl mb-2 font-semibold">Sarana Kesehatan</h2>
              <table className="table-fixed w-full text-center border border-black">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Sarana</th>
                    <th>Jumlah Sarana</th>
                  </tr>
                </thead>
                <tbody>
                  {dataStatis.kesehatan.map((dataKesehatan, i) => (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{dataKesehatan.nama}</td>
                      <td>{dataKesehatan.jumlah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </Card>
      </section>
      <Footer />
    </article>
  );
}

export default Profile;
