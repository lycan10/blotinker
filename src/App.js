
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
