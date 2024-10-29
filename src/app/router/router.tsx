import { createBrowserRouter } from 'react-router-dom';
import App from '../ui/App';
import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import ErrorPage from '../../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/register',
                element: <RegisterPage />,
            },
        ],
    },
]);

export default router;