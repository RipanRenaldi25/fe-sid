import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import {
  Link, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
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

function App() {
  const { auth: { user, isLogin }, form: { modal: { isOpen } } } = useSelector((states) => states);
  const [registerInput, { onChangeInputHandler, asyncEventHandler }] = useFormInput('registerInput', { onChangeInput: changeInputActionCreator, onAsyncAction: asyncRegister, onClearAction: clearInputRegisterActionCreator });

  const onRegisterHandler = (e) => {
    e.preventDefault();
    const name = `${registerInput.firstName} ${registerInput.lastName}`;
    const { username, password, nik } = registerInput;
    asyncEventHandler({
      name, username, password, nik, role: 'admin', phoneNumber: registerInput.phoneNumber,
    });
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
      navigate('/');
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
        {isLogin && user.role === 'admin' ? (
          <article className="Admin Page relative bg-bg-color min-h-screen">
            <section>
              <Overlay isOpen={isOpen} onClose={() => dispatch(ToggleOpenModal(false))} />
              <ModalBody title="Tambah Akun" isOpen={isOpen} onClose={() => dispatch(ToggleOpenModal(false))}>
                <RegisterForm onChangeInputHandler={onChangeInputHandler} onRegisterHandler={onRegisterHandler} registerInput={registerInput} />
              </ModalBody>
            </section>
            <Sidebar />
            <Routes>
              <Route path="/dashboard" Component={AdminPage} />
              <Route path="/dashboard/account" Component={AccountPage} />
              <Route path="/*" Component={AdminPage} />
            </Routes>
          </article>
        ) : (
          <div className="base relative app min-h-screen flex justify-center items-center">
            <article className="relative mobile:max-w-full mobile:min-h-screen mobile:overflow-x-hidden bg-primary-white bg-opacity-95 backdrop-blur-sm md:min-h-[calc(100vh-100px)] md:max-h-[calc(100vh-100px)] md:max-w-[calc(100%-150px)] md:min-w-[calc(100%-100px)] rounded-xl md:overflow-auto">
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
                  {isLogin ? (
                    <div className="flex items-center gap-4 justify-between ">
                      <div className="mobile:hidden md:flex md:gap-4">
                        <span className="md:text-2xl mobile:text-lg flex items-center justify-center"><CgProfile /></span>
                        <h1 className="md:text-xl mobile:text-md">{user.username}</h1>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(setIsLogin(false));
                          dispatch(logoutUser());
                          removeAccessToken({ key: 'ACCESS_TOKEN' });
                          removeAccessToken({ key: 'USER' });
                          removeRefreshToken({ key: 'REFRESH_TOKEN' });
                        }}
                        className="border px-7 py-2 rounded-xl bg-primary-black text-white hover:bg-gray-400 transition-colors duration-200 mobile:relative mobile:left-10 md:left-0"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="mobile:hidden bg-gray-200 md:flex rounded-xl justify-around w-60 items-center overflow-hidden px-2 py-0">
                      <button type="button" className="font-bold text-sm h-[80%] hover:bg-gray-400 hover:text-primary-white rounded-xl transition-colors px-4 py-4 flex justify-center items-center" onClick={() => navigate('/login')}>
                        LOG IN
                      </button>
                      <button type="button" className="text-sm text-white bg-primary-black h-[80%] rounded-xl px-10" onClick={() => navigate('/signup')}>
                        SIGN UP
                      </button>
                    </div>

                  )}
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
        )}
      </div>
    </SidebarContext.Provider>

  );
}

export default App;
