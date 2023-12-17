import React from 'react';
import propTypes from 'prop-types';
import { CiLogout } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import MenuItem from '../Reusable/MenuItem';
import { logoutUser, setIsLogin } from '../../states';
import { removeAccessToken, removeRefreshToken } from '../../utils/utilities';

function UserSidebar({ menuList = [], onChangeMenuList }) {
  const dispatch = useDispatch();
  return (
    <section>
      {menuList.map((menu, i) => (
        <MenuItem icon={menu.icon} isActive={menu.isActive} title={menu.title} key={i} url={menu.url} onChangeMenuList={onChangeMenuList} />
      ))}
      <button
        type="button"
        className="flex items-center absolute bottom-10 gap-4 text-xl w-full px-4 py-4 transition-colors hover:bg-[rgba(0,0,0,.04)]"
        onClick={() => {
          dispatch(setIsLogin(false));
          dispatch(logoutUser());
          removeAccessToken({ key: 'ACCESS_TOKEN' });
          removeAccessToken({ key: 'USER' });
          removeRefreshToken({ key: 'REFRESH_TOKEN' });
        }}
      >
        <span className="text-2xl"><CiLogout /></span>
        <h1 className="text-lg">Log out</h1>
      </button>
    </section>
  );
}

UserSidebar.propTypes = {
  menuList: propTypes.arrayOf(propTypes.object).isRequired,
  onChangeMenuList: propTypes.func,
};

export default UserSidebar;
