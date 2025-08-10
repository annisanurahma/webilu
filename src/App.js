import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './css/style.css'
import './css/Card-hover-affect-2.css'
import './css/Features-Large-Icons-icons.css'
import './css/Hero-Carousel-images.css'
import './css/bootstrap.min.css'

import Home from './pages/Home'
import Panduan from './pages/panduan'
import Kadidat from './pages/Kadidat'
import Data from './pages/Data'
import About from './pages/About'
import Pemilu from './pages/pemilu'
import Peran from './pages/peran'
import Role from './pages/role'
import Partisipasi from './pages/partisipasi'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/panduan' element={<Panduan />} />
        <Route path='/data' element={<Data />} />
        <Route path='/kadidat' element={<Kadidat />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/pemilu' element={<Pemilu />} />
        <Route path='/role' element={<Role />} />
        <Route path='/peran' element={<Peran />} />
        <Route path='/partisipasi' element={<Partisipasi />} />

      </Routes>
    </Router>
  );
}

export default App;
