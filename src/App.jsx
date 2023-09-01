import React from 'react';
import './App.css';
import {
  Link, Route, Routes, useNavigate,
} from 'react-router-dom';
import NavigationBar from './Components/Presentational/NavigationBar';
import logo from './assets/images/logo.png';
import LandingPage from './Components/Page/Landing';
import RegisterPage from './Components/Page/Register';
import Login from './Components/Page/Login';
import HomePage from './Components/Page/Home';
import FAQ from './Components/Page/FAQ';

function App() {
  const navigate = useNavigate();
  return (
    <div className="relative app min-h-screen flex justify-center items-center">
      <article className="relative bg-primary-white min-h-[calc(100vh-100px)] max-h-[calc(100vh-100px)] min-w-[calc(100%-150px)] rounded-xl overflow-auto">
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
            <div className="bg-gray-200 flex rounded-xl justify-around w-60 items-center overflow-hidden px-2 py-0">
              <button type="button" className="font-bold text-sm h-[80%] hover:bg-gray-400 hover:text-primary-white rounded-xl transition-colors px-5 py-0" onClick={() => navigate('/login')}>
                LOG IN
              </button>
              <button type="button" className="text-sm text-white bg-primary-black h-[80%] rounded-xl px-10" onClick={() => navigate('/signup')}>
                SIGN UP
              </button>
            </div>
          </section>
        </header>
        <main className="relative w-full h-full">
          <Routes>
            <Route path="/" Component={LandingPage} />
            <Route path="/signup" Component={RegisterPage} />
            <Route path="/login" Component={Login} />
            <Route path="/home" Component={HomePage} />
            <Route path="/faq" Component={FAQ} />
          </Routes>
        </main>
      </article>
    </div>
  );
}

export default App;
