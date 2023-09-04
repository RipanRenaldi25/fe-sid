import React, { useEffect } from 'react';
import './App.css';
import {
  Link, Route, Routes, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
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
  logoutUser, setIsLogin, setUserActionCreator,
} from './states';

function App() {
  const { auth: { user, isLogin } } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userLogedIn = getAccessToken({ key: 'USER' });
    if (userLogedIn) {
      dispatch(setIsLogin(true));
      dispatch(setUserActionCreator({ ...getAccessToken({ key: 'USER' }) }));
    }
  }, []);
  return (
    <div>
      {isLogin && user.role === 'admin' ? (
        <Routes>
          <Route path="/*" Component={AdminPage} />
        </Routes>
      ) : (
        <div className="base relative app min-h-screen flex justify-center items-center">
          <article className=" relative bg-primary-white min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] min-w-[calc(100%-150px)] rounded-xl overflow-auto">
            <header className="flex justify-between border-[3px] border-dotted border-spacing-10 rounded-xl">
              <section className="flex items-center p-8 gap-5">
                <section className="logo">
                  <Link to="/">
                    <img src={logo} alt="logo desa" className="w-20" />
                  </Link>
                </section>
                <NavigationBar />
              </section>
              <section className="flex p-8">
                {isLogin ? (
                  <div className="flex items-center gap-4">
                    <span className="text-2xl flex items-center"><CgProfile /></span>
                    <h1 className="text-xl">{user.username}</h1>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(setIsLogin(false));
                        dispatch(logoutUser());
                        removeAccessToken({ key: 'ACCESS_TOKEN' });
                        removeAccessToken({ key: 'USER' });
                        removeRefreshToken({ key: 'REFRESH_TOKEN' });
                      }}
                    >
                      Logout

                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-200 flex rounded-xl justify-around w-60 items-center overflow-hidden px-2 py-0">
                    <button type="button" className="font-bold text-sm h-[80%] hover:bg-gray-400 hover:text-primary-white rounded-xl transition-colors px-5 py-0" onClick={() => navigate('/login')}>
                      LOG IN
                    </button>
                    <button type="button" className="text-sm text-white bg-primary-black h-[80%] rounded-xl px-10" onClick={() => navigate('/signup')}>
                      SIGN UP
                    </button>
                  </div>

                )}
              </section>
            </header>
            <main className="relative w-full h-full">
              <Routes>
                <Route path="/" Component={LandingPage} />
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

  );
}

export default App;
