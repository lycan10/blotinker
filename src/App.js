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
import Login from './auth/login';
import Preview from './pages/preview/Preview';
import { AuthProvider } from "react-auth-kit";
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  // const location = useLocation(); // Move this line inside the function

  // const hideNavbar = location.pathname === '/createpost';
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <AuthProvider authName='' authType='localstorage'>
      <div className="App">
        <ToastContainer />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
          {/* <Navbar /> */}
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/posts/:slug' element={<Posts />} />
                <Route
                  path="/createpost"
                  element={
                    <RequireAuth loginPath='/login'>
                      <CreatePost />
                    </RequireAuth>
                  }
                />
                <Route path='/all' element={<All />} />
                <Route path='/travel' element={<Travel />} />
                <Route path='/food' element={<Food />} />
                <Route path='/health' element={<Health />} />
                <Route path='/login' element={<Login />} />
                <Route path='/preview' element={<Preview />} />
              </Routes>
            <Footer />
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
