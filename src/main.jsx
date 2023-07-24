import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import Main from './Layouts/Main/Main';
import About from './pages/About';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import CommentModal from './pages/CommentModal/CommentModal';
import Signup from './pages/Signup/Signup';
import AuthProvider from './pages/Contexts/AuthProvider';
import Login from './pages/Login/Login';
import MobileNav from './pages/MobileNav/MobileNav';
import SearchLayout from './Layouts/SearchLayout/SearchLayout';
import Search from './pages/Search/Search';
import MobileSearch from './pages/MobileSearch/MobileSearch';
import MobileCreatePost from './pages/MobileCreatePost/MobileCreatePost';
import NewCreatePost from './pages/NewCreatePost/NewCreatePost';
import MyProfile from './pages/MyProfile/MyProfile';
import SingelPost from './pages/SingelPost/SingelPost';
import PrivetRoute from './pages/PrivetRoute/PrivetRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Create a client
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/getComment/:id',
        element: <CommentModal></CommentModal>,
        loader: ({ params }) => fetch(`http://localhost:5000/getComment/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/explore',
        element: <Home></Home>
      },
      {
        path:'/mobileSearch',
        element:<MobileSearch></MobileSearch>
      },
      {
        path:'/create',
        element:<MobileCreatePost></MobileCreatePost>
      },
      {
        path:'/createPost',
        element:<PrivetRoute><NewCreatePost></NewCreatePost></PrivetRoute> 
      },
      {
        path:'myProfile/:email',
        element:<MyProfile></MyProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/myProfile/${params.email}`)
      }
    ]
  },
  {
    path:'/search',
    element:<SearchLayout></SearchLayout>,
    children:[
      
      ] 
  },
  {
    path:'/search/:text',
    element:<SearchLayout></SearchLayout>,
    loader: ({ params }) => fetch(`http://localhost:5000/search/${params.text}`)
  },
  {
    path:'/myProfile/post/:id',
    element:<SingelPost></SingelPost>,
    loader:({params})=>fetch(`http://localhost:5000/myProfile/post/${params.id}`)
  },
  {
    path: '/signUp',
    element: <Signup></Signup>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path:'nav',
    element:<MobileNav></MobileNav>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='bgcolor'>
          <RouterProvider router={router} />
        </div>
        <ToastContainer></ToastContainer>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
