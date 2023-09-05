import React from 'react';
import propTypes, { string } from 'prop-types';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import SocialMedia from '../Reusable/SocialMedia';

function CardImage({
  profileImg, name, position, fbUrl, igUrl, twitterUrl, parrentStyle,
}) {
  return (
    <section className={`relative card-image w-[300px] flex flex-col justify-center items-center h-[300px] border before:absolute before:bg-gradient-to-tr before:from-primary-black before:to-secondary-black before:h-[calc(50%-30px)] before:w-full before:top-0 before:-z-1 rounded-xl overflow-hidden shadow-lg gap-4 ${parrentStyle}}`}>
      <div className="profile image z-10 bg-cover bg-center w-full flex justify-center items-center rounded-full">
        <img src={profileImg} alt={name} className="w-[100px] rounded-full" />
      </div>
      <div className="information flex flex-col justify-center items-center">
        <h1 className="text-xl">{name}</h1>
        <h2 className="text-lg">{position}</h2>
      </div>
      <div className="social media absolute top-3 right-3 flex flex-col gap-4 text-xl text-white z-20   ">
        <SocialMedia icon={<BsFacebook />} url={fbUrl} />
        <SocialMedia icon={<BsInstagram />} url={igUrl} />
        <SocialMedia icon={<BsTwitter />} url={twitterUrl} />
      </div>
    </section>
  );
}

CardImage.propTypes = {
  profileImg: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  position: propTypes.string.isRequired,
  fbUrl: propTypes.string,
  igUrl: propTypes.string,
  twitterUrl: propTypes.string,
  parrentStyle: string,
};

export default CardImage;
