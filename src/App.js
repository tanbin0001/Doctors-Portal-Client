import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/> 
        <Route path='/login' element={<Login/>}/> 

      </Routes>
    </div>
  );
}

export default App;
