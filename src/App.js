import { Route, Routes } from 'react-router-dom';

import './App.css';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';






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
