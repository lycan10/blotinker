import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Preview from './pages/preview/Preview';

function App() {
  // const location = useLocation(); // Move this line inside the function

  // const hideNavbar = location.pathname === '/createpost';

  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path='/all' element={<All />} />
          <Route path='/travel' element={<Travel />} />
          <Route path='/food' element={<Food />} />
          <Route path='/health' element={<Health />} />
          <Route path='/preview' element={<Preview />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
