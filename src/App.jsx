import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import {
  Link, Outlet, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose, AiOutlineCloudUpload } from 'react-icons/ai';
import { FaFolder } from 'react-icons/fa6';
import NavigationBar from './Components/Presentational/NavigationBar';
import logo from './assets/images/logo.png';
import LandingPage from './Components/Page/Landing';
import RegisterPage from './Components/Page/Register';
import Login from './Components/Page/Login';
import HomePage from './Components/Page/Home';
import FAQ from './Components/Page/FAQ';
import Profile from './Components/Page/Profile';
import DocumentPage from './Components/Page/DocumentPage';
import AdminPage from './Components/Page/AdminPage';
import { getAccessToken, removeAccessToken, removeRefreshToken } from './utils/utilities';
import {
  ToggleOpenModal,
  asyncRegister,
  changeInputActionCreator,
  clearInputRegisterActionCreator,
  logoutUser, setIsLogin, setUserActionCreator,
} from './states';
import AccountPage from './Components/Page/AccountPage';
import Sidebar from './Components/Presentational/Sidebar';
import SidebarContext from './Context/sidebarContext';
import Overlay from './Components/Reusable/Overlay';
import ModalBody from './Components/Presentational/Modal';
import RegisterForm from './Components/Presentational/RegisterForm';
import useFormInput from './hooks/useInput';
import UploadForm from './Components/Presentational/UploadForm';
import UserAvatar from './Components/Presentational/UserAvatar';
import UserSidebar from './Components/Presentational/UserSidebar';
import avatar from './assets/images/john-doe.jpg';
import UserDocuments from './Components/Presentational/UserDocuments';

const menuLists = [{
  icon: <AiOutlineCloudUpload />,
  title: 'Upload',
  isActive: true,
  url: '/user/upload',
}, {
  icon: <FaFolder />,
  title: 'Document',
  isActive: false,
  url: '/user/document',
}];

function App() {
  const [menuList, setMenuList] = useState(menuLists);
  const { auth: { user, isLogin }, form: { modal: { isOpen } } } = useSelector((states) => states);
  const [registerInput, { onChangeInputHandler, asyncEventHandler }] = useFormInput('registerInput', { onChangeInput: changeInputActionCreator, onAsyncAction: asyncRegister, onClearAction: clearInputRegisterActionCreator });
  const onRegisterHandler = (e) => {
    e.preventDefault();
    const name = `${registerInput.firstName} ${registerInput.lastName}`;
    const {
      username, password, nik, phoneNumber,
    } = registerInput;
    asyncEventHandler({
      name, username, password, nik, role: 'admin', phoneNumber,
    });
  };

  const onChangeMenuList = (url) => {
    setMenuList((prevMenu) => prevMenu.map((menu) => ({
      ...menu,
      isActive: menu.url === url,
    })));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  useEffect(() => {
    const userLogedIn = getAccessToken({ key: 'USER' });
    if (userLogedIn) {
      dispatch(setIsLogin(true));
      dispatch(setUserActionCreator({ ...getAccessToken({ key: 'USER' }) }));
    }
    if (user.role === 'user') {
      navigate('/user/upload');
    }
    if (user.role === 'admin') {
      navigate('/admin/dashboard');
    }
  }, [user.role]);
  return (
    <SidebarContext.Provider value={useMemo(() => (
      {
        sidebarOpen,
        setSidebarOpen,
        isHamburgerClicked,
        setIsHamburgerClicked,
      }
    ), [sidebarOpen, isHamburgerClicked])}
    >
      <div>
        {isLogin && user.role === 'user' && (
        <article className="relative bg-bg-color min-h-screen flex">
          <section className="sidebar bg-[#f8f8f8] min-h-screen w-[280px] relative">
            <UserAvatar imageUrl={avatar} />
            <UserSidebar menuList={menuList} onChangeMenuList={onChangeMenuList} />
          </section>
          <section className="flex justify-center items-start min-w-[80%] pt-8">
            <Routes>
              <Route path="/user/upload" Component={UploadForm} />
              <Route path="/user/document" Component={UserDocuments} />
            </Routes>
          </section>
        </article>
        )}
        {isLogin && user.role === 'admin' && (
          <article className="Admin Page relative bg-bg-color min-h-screen">
            <section>
              <Overlay
                isOpen={isOpen}
                onClose={() => {
                  dispatch(ToggleOpenModal(false));
                  dispatch(clearInputRegisterActionCreator());
                }}
              />
              <ModalBody
                title="Tambah Akun"
                isOpen={isOpen}
                onClose={() => {
                  dispatch(ToggleOpenModal(false));
                  dispatch(clearInputRegisterActionCreator());
                }}
              >
                <RegisterForm onChangeInputHandler={onChangeInputHandler} onRegisterHandler={onRegisterHandler} registerInput={registerInput} isShow={false} />
              </ModalBody>
            </section>
            <Sidebar />
            <Routes>
              <Route path="/dashboard" Component={AdminPage} />
              <Route path="/dashboard/account" Component={AccountPage} />
              <Route path="/*" Component={AdminPage} />
            </Routes>
          </article>
        )}
        {
          !isLogin && (
            <div className="base relative app min-h-screen flex justify-center items-center">
              <article className="relative mobile:max-w-full mobile:min-h-screen mobile:overflow-x-hidden bg-primary-white bg-opacity-95 backdrop-blur-sm min-w-full rounded-xl md:overflow-auto">
                <header className=" mobile:bg-sidebar-color mobile:top-0 mobile:z-10 md:bg-primary-white relative flex md:justify-between mobile:items-center md:border-[3px] md:border-dotted md:border-spacing-10 md:rounded-xl">
                  <section className="flex items-center p-8 gap-5">
                    <section className="logo w-14">
                      <Link to="/">
                        <img src={logo} alt="logo desa" />
                      </Link>
                    </section>
                    <div className="mobile:hidden md:flex md:relative md:top-0">
                      <NavigationBar />
                    </div>
                  </section>

                  <section className="md:flex p-8">
                    <div className="mobile:hidden bg-gray-200 md:flex rounded-xl justify-around w-60 items-center overflow-hidden px-2 py-0">
                      <button type="button" className="font-bold text-sm h-[80%] hover:bg-gray-400 hover:text-primary-white rounded-xl transition-colors px-4 py-4 flex justify-center items-center" onClick={() => navigate('/login')}>
                        LOG IN
                      </button>
                      <button type="button" className="text-sm text-white bg-primary-black h-[80%] rounded-xl px-10" onClick={() => navigate('/signup')}>
                        SIGN UP
                      </button>
                    </div>
                  </section>
                  <section className="mobile:flex-1 mobile:flex mobile:justify-end w-full md:hidden text-3xl">
                    <button type="button" className="p-2" onClick={() => setIsHamburgerClicked((prevState) => !prevState)}>
                      {isHamburgerClicked ? (
                        <AiOutlineClose />
                      ) : (
                        <RxHamburgerMenu />

                      )}
                    </button>
                  </section>
                </header>
                <div className={`bg-sidebar-color shadow-lg border-t md:hidden absolute z-10 right-0 left-0 ${!isHamburgerClicked ? 'translate-x-[1000px]' : '-translate-x-0'} transition-transform`}>
                  <nav className="px-5 py-1">
                    <ul className="flex flex-col gap-4">
                      <li
                        className="font-semibold text-lg py-2"
                        onClick={() => {
                          setIsHamburgerClicked(false);
                          navigate('/');
                        }}
                      >
                        <span>Home</span>
                      </li>
                      <li
                        className="font-semibold text-lg py-2"
                        onClick={() => {
                          setIsHamburgerClicked(false);
                          navigate('/profile');
                        }}
                      >
                        <span>Profile</span>
                      </li>
                      <li
                        className="font-semibold text-lg py-2"
                        onClick={() => {
                          setIsHamburgerClicked(false);
                          navigate('/faq');
                        }}
                      >
                        <span>FAQ</span>
                      </li>
                      <li
                        className="font-semibold text-lg py-2"
                        onClick={() => {
                          setIsHamburgerClicked(false);
                          navigate('/login');
                        }}
                      >
                        <span>Login</span>
                      </li>
                      <li
                        className="font-semibold text-lg py-2"
                        onClick={() => {
                          setIsHamburgerClicked(false);
                          navigate('/signup');
                        }}
                      >
                        <span>Register</span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <main className="relative w-full h-full">
                  <Routes>
                    <Route path="/*" Component={LandingPage} />
                    <Route path="/signup" Component={RegisterPage} />
                    <Route path="/login" Component={Login} />
                    <Route path="/home" Component={HomePage} />
                    <Route path="/faq" Component={FAQ} />
                    <Route path="/profile" Component={Profile} />
                    <Route path="/document" Component={DocumentPage} />
                  </Routes>
                </main>
              </article>
            </div>
          )
        }
      </div>
    </SidebarContext.Provider>

  );
}

export default App;
