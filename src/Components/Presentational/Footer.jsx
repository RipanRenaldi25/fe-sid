import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../assets/images/logo.png';
import NavigationBar from './NavigationBar';
import SocialMediaList from './SocialMediaList';

const sosmed = [
  {
    icon: <BsFacebook />,
    url: 'http://www.facebook.com',
  },
  {
    icon: <BsInstagram />,
    url: 'http://www.instagram.com',
  },
  {
    icon: <BsTwitter />,
    url: 'http://www.twitter.com',
  },
];

function Footer() {
  return (
    <footer className="bg-primary-gray py-14 px-20 rounded-xl shadow-lg">
      <header className="grid-cols-3 grid h-[200px] gap-4 p-4">
        <section className="">
          <h1 className="text-xl font-semibold text-gray-500 mb-2">WHO WE ARE</h1>
          <div className="flex flex-col items-start">
            <button type="button" className="info">
              Information
            </button>
            <button type="button" className="profile">
              Profile
            </button>
          </div>
        </section>
        <section>
          <h1 className="text-xl font-semibold text-gray-500 mb-2">Support</h1>
          <div className="flex flex-col items-start">
            <button type="button" className="info">
              Email
            </button>
            <button type="button" className="profile">
              Call Us (+62)   81239839281
            </button>
          </div>
        </section>

        <section>
          <h1 className="text-xl font-semibold text-gray-500 mb-2">Services</h1>
          <div className="flex flex-col items-start">
            <button type="button" className="info">
              Upload Document
            </button>
          </div>
        </section>

      </header>
      <section className="mb-16 after:contents[''] after:block after:w-full after:h-0.5 after:bg-[rgba(0,0,0,.2)] after:relative after:top-4">
        <p>Cicalengka Kabupaten Bandung</p>
      </section>
      <section className="flex justify-between items-center ">
        <div className="w-40">
          <img src={logo} alt={logo} />
        </div>
        <div>
          <NavigationBar />
        </div>
        <div>
          <SocialMediaList sosmedList={sosmed} parentClass="flex text-3xl gap-5" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
