import { Route, Routes } from 'react-router-dom';

import './App.css';
import About from './About/About';

import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';







function App() {
  return (
    <div>
      <Header> </Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
         
        </Route>
        <Route path="/home" element={<Home></Home>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
