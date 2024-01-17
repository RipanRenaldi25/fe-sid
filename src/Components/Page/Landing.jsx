import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import bgDark from '../../assets/images/gambar-desa.jpg';
import bgForest from '../../assets/images/forest-2.png';
import NavigationItem from '../Reusable/NavigationItem';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <article className="px-10 py-5 h-full">
      <section className="grid mobile:grid-cols-2 mobile:h-[670px] md:grid-cols-4 md:grid-rows-6 gap-4 md:h-[500px]">
        <div className=" hover:cursor-pointer mobile:row-span-6 group relative col-span-2 row-span-6 p-10 rounded-2xl bg-cover bg-left text-white" style={{ backgroundImage: `url(${bgDark})` }} onClick={() => navigate('/home')} id="#info">
          <p className="mobile:text-md text-lg font-thin mb-3">Informasi</p>
          <h1 className="mobile:text-4xl md:text-5xl max-w-md">Title</h1>
          <div className="text-2xl absolute top-1/2 right-0">
            <button type="button" className="border rounded-full px-1 py-0.5 scale-0 group-hover:scale-100 transition-all duration-100  hover:duration-200 hover:text-black">
              <NavigationItem path="/home" title={<MdKeyboardDoubleArrowRight className="hover:text-black" />} />
            </button>
          </div>
          <div className="absolute mobile:bottom-3 md:bottom-16">
            <button type="button" className="mobile:text-sm border px-10 py-3 bg-white text-black rounded-2xl font-bold text-xl hover:bg-gray-300 transition-colors">
              <Link to="/home">
                Visit Now
              </Link>
            </button>
          </div>
        </div>
        <div className="mobile:row-span-6 relative col-span-2 bg-yellow-200 md:row-span-3 rounded-tl-[50px] rounded-br-[50px] p-6 bg-cover bg-center text-white hover:cursor-pointer" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgForest})` }} onClick={() => navigate('/profile')}>
          <p className="text-lg font-thin">Profile</p>
          <h1 className="absolute mobile:bottom-4 md:bottom-10 text-2xl">See Our Profile</h1>
          <div className="text-3xl absolute top-2 right-2">
            <Link to="/profile">
              <HiMiniArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="relative bg-yellow-dark row-span-2 mobile:h-[150px] md:h-[240px] rounded-xl px-5 py-3 hover:cursor-pointer" onClick={() => navigate('/faq')}>
          <p className="mobile:max-w-[70px] md:max-w-[180px] font-semibold mobile:relative mobile:text-md md:text-2xl">Have Some Questions?</p>
          <Link to="document" className="absolute top-3 right-3 md:text-3xl mobile:text-2xl">
            <HiMiniArrowUpRight />
          </Link>
          <h1 className="absolute bottom-5 mobile:text-3xl md:text-4xl font-semibold">FAQ</h1>
        </div>
        <div className="relative bg-gradient-to-tr mobile:h-[150px] from-yellow-gray to-[#D7D8DC] row-span-2 md:h-[240px] rounded-2xl px-5 py-3 hover:cursor-pointer mobile:bg-red-500 mobile:text-sm md:text-2xl font-semibold" onClick={() => navigate('/document')}>
          <p className="mobile:max-w-[70px] md:max-w-[180px] mobile:text-md">Upload document</p>
          <Link to="/" className="absolute top-3 right-3 mobile:text-2xl md:text-3xl rotate-45">
            <IoCloudUploadOutline />
          </Link>
          <h1 className="absolute bottom-5 md:text-4xl mobile:text-3xl font-semibold">Upload</h1>
        </div>
      </section>
    </article>
  );
}

export default LandingPage;
