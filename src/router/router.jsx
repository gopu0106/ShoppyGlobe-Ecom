import { createBrowserRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import App from '../App';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

// Lazy load components
const ProductList = lazy(() => import('../components/ProductList'));
const ProductDetail = lazy(() => import('../components/ProductDetail'));
const Cart = lazy(() => import('../components/Cart'));
const Checkout = lazy(() => import('../components/Checkout'));
const NotFound = lazy(() => import('../components/NotFound'));

// Layout component to include Header
const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <ProductList />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
