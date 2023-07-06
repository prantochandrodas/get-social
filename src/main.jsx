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
      }
    ]
  },
  {
    path: '/signUp',
    element: <Signup></Signup>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className='bgcolor'>
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
