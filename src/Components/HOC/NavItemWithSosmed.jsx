import React from 'react';
import propTypes from 'prop-types';
import NavigationItem from '../Reusable/NavigationItem';

function NavItemWithSosmed(Component) {
  function wrappedComponent({ Icon, url }) {
    return (
      <section>
        <Component path={url} title={<Icon />} />
      </section>
    );
  }
  wrappedComponent.propTypes = {
    Icon: propTypes.func.isRequired,
    url: propTypes.string.isRequired,
  };
  return wrappedComponent;
}

export default NavItemWithSosmed(NavigationItem);
