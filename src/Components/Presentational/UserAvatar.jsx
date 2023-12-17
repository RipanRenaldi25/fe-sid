import React from 'react';
import propTypes from 'prop-types';
import Avatar from '../Reusable/Avatar';

function UserAvatar({ name = 'John Doe', nik = '3273282104021234', imageUrl }) {
  return (
    <section className="flex items-center bg-[#40535A] p-6">
      <div>
        <Avatar imageUrl={imageUrl} />
      </div>
      <div className="ml-4 text-white flex flex-col gap-1.5">
        <h1>{name}</h1>
        <h1>{nik}</h1>
      </div>
    </section>
  );
}

UserAvatar.propTypes = {
  name: propTypes.string.isRequired,
  nik: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
};

export default UserAvatar;
