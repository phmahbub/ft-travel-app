import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
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
            {path:'/login', element:<Login/>},
        ]
    }
])
    



  

