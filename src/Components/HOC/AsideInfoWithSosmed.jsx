import React from 'react';
import AsideBarInformation from '../Presentational/AsideBarInformation';

function AsideInfoWithSosmed(component) {
  return function ({ ...component }) {
    return <h1>test</h1>;
  };
}

export default AsideInfoWithSosmed(AsideBarInformation);
