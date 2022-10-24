import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Components/Body/About';
import Blog from '../Components/Body/Blog';
import Products from '../Components/Body/Products';
import Home from '../Components/Home/Home';
import Login from '../Components/Registration/Login';
import ErrorPage from '../Error/ErrorPage';
import Root from '../Root/Root';

export const router = createBrowserRouter([
    {
        path: '/', element: <Root/>,
        errorElement:<ErrorPage/>,
        children: [
            {path:'/home', element:<Home/>},
            {path:'/products', element:<Products/>},
            {path:'/about', element:<About/>},
            {path:'/blog', element:<Blog/>},
            {path:'/login', element:<Login/>},
        ]
    }
])
    



  

