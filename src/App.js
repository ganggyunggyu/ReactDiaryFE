/** @format */
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import Join from './pages/Join';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <div className='fixed flex gap-5 p-3'>
        <div>
          <Link to={'/'}>홈</Link>
        </div>
        <div>
          <Link to={'/join'}>회원가입</Link>
        </div>

        <div>
          <Link to={'/login'}>로그인</Link>
        </div>
      </div>
      <Routes>
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
