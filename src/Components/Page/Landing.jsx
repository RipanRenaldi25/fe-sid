import React from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import bgDark from '../../assets/images/dark-2.jpg';
import bgForest from '../../assets/images/forest-2.png';
import NavigationItem from '../Reusable/NavigationItem';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <article className="px-10 py-5 h-full">
      <section className="grid grid-cols-4 grid-rows-6 gap-4 h-[500px]">
        <div className="group relative col-span-2 row-span-6 p-10 rounded-2xl bg-cover bg-left text-white" style={{ backgroundImage: `url(${bgDark})` }}>
          <p className="text-lg font-thin mb-3">Information</p>
          <h1 className="text-5xl max-w-md">Babakan Peuteuy Village</h1>
          <div className="text-2xl absolute top-1/2 right-0">
            <button type="button" className="border rounded-full px-1 py-0.5 scale-0 group-hover:scale-100 transition-all duration-100  hover:bg-gray-200 hover:duration-200 hover:text-black">
              <NavigationItem path="/home" title={<MdKeyboardDoubleArrowRight className="hover:text-black" />} />
            </button>
          </div>
          <div className="absolute bottom-16">
            <button type="button" className="border px-10 py-3 bg-white text-black rounded-2xl font-bold text-xl hover:bg-gray-300 transition-colors">
              <Link to="/home">
                Visit Now
              </Link>
            </button>
          </div>
        </div>
        <div className="relative col-span-2 bg-yellow-200 row-span-3 rounded-tl-[50px] rounded-br-[50px] p-6 bg-cover bg-center text-white hover:cursor-pointer" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bgForest})` }} onClick={() => navigate('/profile')}>
          <p className="text-lg font-thin">Profile</p>
          <h1 className="absolute bottom-10 text-2xl">See Our Profile</h1>
          <div className="text-3xl absolute top-2 right-2">
            <Link to="/profile">
              <HiMiniArrowUpRight />
            </Link>
          </div>
        </div>
        <div className="relative bg-yellow-dark row-span-2 h-[240px] rounded-xl px-5 py-3" onClick={() => navigate('/faq')}>
          <p className="max-w-[100px] font-semibold">Have Some Questions?</p>
          <Link to="document" className="absolute top-3 right-3 text-3xl">
            <HiMiniArrowUpRight />
          </Link>
          <h1 className="absolute bottom-5 text-4xl font-semibold">FAQ</h1>
        </div>
        <div className="relative bg-gradient-to-tr from-yellow-gray to-[#D7D8DC] row-span-2 h-[240px] rounded-2xl px-5 py-3 hover:cursor-pointer" onClick={() => navigate('/document')}>
          <p>Upload document</p>
          <Link to="document" className="absolute top-3 right-3 text-3xl rotate-45">
            <IoCloudUploadOutline />
          </Link>
          <h1 className="absolute bottom-5 text-4xl font-semibold">Upload</h1>
        </div>
      </section>
    </article>
  );
}

export default LandingPage;
