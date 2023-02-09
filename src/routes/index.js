import { Navigate } from 'react-router-dom';
import ErrorPage from 'pages/Error/Error.page';
import Form1 from 'pages/Forms/Form1.page';

const LoginRoutes = [
  {
    path: '',
    element: <Navigate to="/" />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
    errorElement: <ErrorPage />,
  },
  {
    name: 'Form 1',
    path: '/form1',
    element: <Form1 />,
  },
];

export default LoginRoutes;