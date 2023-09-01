import React from 'react';
import Hero from '../Presentational/Hero';
import bgForest from '../../assets/images/forest-2.png';
import Card from '../Reusable/Card';
import CardLists from '../Presentational/CardLists';
import pedestrian from '../../assets/images/pedestrian.svg';
import CardImage from '../Presentational/CardImage';
import JohnDoe from '../../assets/images/john-doe.jpg';
import Footer from '../Presentational/Footer';

const content = 'Desa Babakan Peuteuy merupakan salah satu desa yang terletak di Kabupaten Bandung Provinsi Jawa Barat,dengan luas wilayah ± 419,47 hektar Desa Babakan Peuteuy terdiri 5 kadus meliputi 15 Rw dan 57 Rt';
const visi = 'Terbangunya tata kelola Pemerintahan Desa Babakan Peuteuy yang baikdan bersih,berdaya saing melalui digital yang berestetika guna mewujudkan kehidupan Desa Babakan Peuteuy yang adil, makmur, dan sejahtera serta menjunjunjg tinggi Nilai – nilai Agama dan Berakhlak Mulia';
const misi = [
  {
    content: 'Mewujudkan keamanan dan ketertiban  di  lingkungan desa babakan peuteuy',
  },
  {
    content: 'Meningkatkan kesehatan, kebersihan desa serta mengusahakan jaminan kesehatan masyarakat melalui program pemerintah',
  },
  {
    content: 'Mengedepankan kejujuran ,keadilan, transparansi dalam kehidupan sehari hari baik dalam pemerintahan maupun di masyarakat desa',
  },
];
const sejarah = `
  Desa Babakan Peuteuy merupakan salah satu desa yang terletak di Kabupaten Bandung Provinsi Jawa Barat, tepatnya di Kecamatan Cicalengka. Desa Ini adalah Desa Pemekaran dari Desa Nagrog pada tahun 1983. Sejak berdirinya desa ini, Desa Babakan Peuteuy memiliki kepala desa yang berganti tiap periode jabatannya. Tidak hanya itu, tiap kepala desa memiliki suatu pencapaiannya masing-masing.

  Dari letak geografisnya, Desa Babakan Peuteuy memiliki luas wilayah ± 419,47 hektar yang terdiri dari 5 kadus, 15 Rw, dan 57 Rt. Desa tersebar dan memiliki batas wilayahnya sendiri, mulai dari wilayah bagian utara (Desa Dampit), wilayah selatan (Desa Tenjolaya), wilayah timur (Desa Nagrog), dan wilayah barat (Desa Cicalengka Wetan).
`;

function HomePage() {
  return (
    <article className="px-16 py-10">
      <Hero content={content} img={bgForest} directTo="sejarah" />
      <section>
        <article>
          <section>
            <h1 className="text-2xl font-semibold mt-7 after:contens-[''] after:h-0.5 after:bg-[rgba(0,0,0,.2)] after:w-10 after:block" data-aos="fade-down">Visi & Misi</h1>
            <div className="grid grid-cols-3">
              <section className="mt-4 col-start-2" data-aos="fade-up">
                <Card title="Visi" description={visi} />
              </section>
              <CardLists misi={misi} />
            </div>
          </section>
        </article>
      </section>
      <section className="w-full mt-14 rounded-xl overflow-hidden" id="sejarah">
        <h1 className="text-center text-xl mb-5 after:my-1 after:contents-[''] after:block after:h-0.5 after:w-auto after:m-auto after:bg-[rgba(0,0,0,.05)] font-semibold">Sejarah</h1>
        <div className="grid grid-cols-2 bg-yellow-dark">
          <div className="flex justify-center items-center">
            <img src={pedestrian} alt="pedestrian" className="max-h-[500px]" />
          </div>
          <div className="bg-gradient-to-tr from-[#F7F1EA] to-yellow-gray py-20 px-10">
            <h1 className="mb-5">Desa Babakan Peuteuy</h1>
            <p>{sejarah}</p>
          </div>
        </div>
      </section>
      <section className="mt-14 mb-20">
        <h1 className="text-center text-2xl mb-10 font-semibold after:contents-[''] after:block after:h-0.5 after:mt-1 after:bg-gray-400 after:mx-auto after:w-[80px]">Kepala Desa</h1>
        <section className="Card grid grid-cols-3 gap-14 place-items-center">
          <CardImage name="John Doe" position="web dev" profileImg={JohnDoe} fbUrl="www.google.com" igUrl="www.google.com" twitterUrl="www.google.com" aos="fade-up" />
          <CardImage name="John Doe" position="web dev" profileImg={JohnDoe} fbUrl="www.google.com" igUrl="www.google.com" twitterUrl="www.google.com" />
          <CardImage name="John Doe" position="web dev" profileImg={JohnDoe} fbUrl="www.google.com" igUrl="www.google.com" twitterUrl="www.google.com" />
        </section>
      </section>
      <Footer />
    </article>
  );
}

export default HomePage;
