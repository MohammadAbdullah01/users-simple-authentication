import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import UserInfo from './components/UserInfo.js/UserInfo';
import Users from './components/Users.js/Users';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='user/:userId' element={<RequireAuth><UserInfo /></RequireAuth>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
