import './App.css';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';


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
import { AuthProvider, RequireAuth, useIsAuthenticated } from 'react-auth-kit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import AdminPage from './pages/adminpage/AdminPage';
import PublishedPosts  from './pages/adminpage/PublishedPosts';
import SavedDraft from './pages/adminpage/SavedDraft';
import PostByCategory from './pages/adminpage/PostByCategory';
import ReactGA from 'react-ga4';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

ReactGA.initialize('G-DBCCFMVZ04');

function AppWrapper() {
  //const location = useLocation();
 // const hideNavbar = location.pathname === '/createpost';
 const PrivateRoute = ({ Component }) => {
  const isAuthenticated = useIsAuthenticated();
  const auth = isAuthenticated();
  return auth ? <Component /> : <Navigate to="/login" />;
};
  return (
    <>
      {/*<Navbar />*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/:slug' element={<Posts />} />
        <Route path='/admin'
          element={<PrivateRoute Component={AdminPage} />}
        />
        <Route
          path='/admin/createpost'
          element={<PrivateRoute Component={CreatePost} />}
        />
        <Route
          path='/admin/published-posts'
          element={<PrivateRoute Component={PublishedPosts} />}
        />
         <Route
          path='/admin/saved-draft'
          element={<PrivateRoute Component={SavedDraft} />}
        />
        <Route
          path='/admin/category'
          element={<PrivateRoute Component={PostByCategory} />}
        />
        <Route path='/all' element={<All />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/food' element={<Food />} />
        <Route path='/health' element={<Health />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preview' element={<Preview />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        
      </Routes>
    </>
  );
}

function App() {
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
      <div className='App'>
        <ToastContainer />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <AppWrapper />
          </BrowserRouter>
        </QueryClientProvider>
      </div>
    </AuthProvider>
  );
}

export default App;
