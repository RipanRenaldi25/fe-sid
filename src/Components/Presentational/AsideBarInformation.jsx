import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import AsideInfo from '../Reusable/AsideInfo';
import SocialMedia from '../Reusable/SocialMedia';
import NavItemWithSosmed from '../HOC/NavItemWithSosmed';

function AsideBarInformation() {
  return (
    <section>
      <div className="visit mb-4 mt-4">
        <AsideInfo title="Visit Us" description="Come to our office in asdjkjdksajdksaskdjksd" />
      </div>
      <div className="chat mb-4">
        <AsideInfo title="Chat Us" description="Chat us if you have any question" />
      </div>
      <div className="call mb-4">
        <AsideInfo title="Call Us" description="Call us at (+62) 8123983921" />
      </div>
      <div>
        <h1 className="mb-3">Social Media</h1>
        <div className="flex gap-4 text-xl">
          <NavItemWithSosmed Icon={BsFacebook} url="www.google.com" />
          <NavItemWithSosmed Icon={BsInstagram} url="www.google.com" />
          <NavItemWithSosmed Icon={BsTwitter} url="www.google.com" />
        </div>
      </div>
    </section>
  );
}

export default AsideBarInformation;
