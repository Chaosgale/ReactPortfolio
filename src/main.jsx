import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ErrorPage';
import About from './components/About';
import Profile from './components/Profile';
import Portfolio from './components/Portfolio';


import { CardsCarousel } from './components/Mantine/CardsCarousel';

import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <About />,
      // },
      {
        index: true,
        element: <Profile />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      // {
      //   path: 'portfolio',
      //   element: <CardsCarousel />,
      // },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
