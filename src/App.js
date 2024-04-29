
import './App.css';
 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes';

import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Categories from './pages/categories/Categories';
import CreatePost from './pages/createpost/CreatePost';
import All from './pages/all/All';
import Travel from './pages/travel/Travel';
import Food from './pages/food/Food';
import Health from './pages/health/Health';


// window.addEventListener('scroll', function() {
//   var navbar = document.querySelector('.navbar');
//   if (window.scrollY > 0) {
//       navbar.style.boxShadow = 'rgba(33, 35, 38, 0.2) 0px 10px 10px -10px';
//   } else {
//       navbar.style.boxShadow = 'none';
//   }
// });

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts/>} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path='/all' element={<All/>} />
            <Route path='/travel' element={<Travel/>} />
            <Route path='/food' element={<Food />} />
            <Route path='/health' element={<Health />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
