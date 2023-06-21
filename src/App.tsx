import React from 'react';
// react router dom
import { useRoutes , Navigate } from 'react-router-dom';
// Context Components
import ThemeContextProvider from './contexts/theme-context-provider';
import ProductsContextProvider from './contexts/products-context-provider';
import CartContextProvider from './contexts/cart-context-provider';
// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Details from './pages/Details';
// components
import Nav from './components/Nav';

const App: React.FC = () => {

    const AppRoutes = () => {
        const Routes = useRoutes([
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/details/:params',
                element: <Details />
            },
            {
                path: '*',
                element: <Navigate to='/' replace/>
            }
        ])
        return Routes;
    }
    
    return (
        <ThemeContextProvider>
            <ProductsContextProvider>
                <CartContextProvider>
                    <Nav />
                    <AppRoutes />
                </CartContextProvider>
            </ProductsContextProvider>
        </ThemeContextProvider>
    )
}

export default App;