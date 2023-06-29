import { Navigate } from 'react-router-dom';
import ErrorPage from 'pages/Error/Error.page';
import Home from 'pages/Home/Home.page';
import Form1 from 'pages/Forms/Form1/Form1.page';
import Form2 from 'pages/Forms/Form2/Form2.page';
import Form2dot1 from 'pages/Forms/Form2.1/Form2.1.page';
import Form2dot2 from 'pages/Forms/Form2.2/Form2.2.page';
import Form3 from 'pages/Forms/Form3/Form3.page';
import Form4 from 'pages/Forms/Form4/Form4.page';
import Form5 from 'pages/Forms/Form5/Form5.page';
import Form6 from 'pages/Forms/Form6/Form6.page';
import Form7 from 'pages/Forms/Form7/Form7.page';
import Form8 from 'pages/Forms/Form8/Form8.page';

const LoginRoutes = [
  {
    path: '',
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    element: <Navigate to="/home" />,
    errorElement: <ErrorPage />,
  },
  {
    name: 'Home',
    path: '/home',
    element: <Home />,
  },
  {
    name: 'Form 1',
    path: '/form1',
    element: <Form1 />,
  },
  {
    name: 'Form 2',
    path: '/form2',
    element: <Form2 />,
  },
  {
    name: 'Form 2.1',
    path: '/form2.1',
    element: <Form2dot1 />,
  },
  {
    name: 'Form 2.2',
    path: '/form2.2',
    element: <Form2dot2 />,
  },
  {
    name: 'Form 3',
    path: '/form3',
    element: <Form3 />,
  },
  {
    name: 'Form 4',
    path: '/form4',
    element: <Form4 />,
  },
  {
    name: 'Form 5',
    path: '/form5',
    element: <Form5 />,
  },
  {
    name: 'Form 6',
    path: '/form6',
    element: <Form6 />,
  },
  {
    name: 'Form 7',
    path: '/form7',
    element: <Form7 />,
  },
  {
    name: 'Form 8',
    path: '/form8',
    element: <Form8 />,
  },
];

export default LoginRoutes;
