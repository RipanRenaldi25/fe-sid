import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import SocialMedia from '../Reusable/SocialMedia';

function SocialMediaList({ sosmedList, parentClass }) {
  return (
    <div className={parentClass}>
      {sosmedList.map((sosmed) => (
        <SocialMedia icon={sosmed.icon} url={sosmed.url} key={sosmed.url} />
      ))}
    </div>
  );
}
SocialMediaList.propTypes = {
  sosmedList: arrayOf(object).isRequired,
  parentClass: string,
};

export default SocialMediaList;
