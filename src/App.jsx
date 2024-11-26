
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import AppLayout from './components/AppLayout'
import Products from './pages/Products'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [       
          {
            path: "/",
            element: <Home />
          },
      
          {
            path: "/About",
            element: <About />
          },

          {
            path: "/Products",
            element: <Products />
          },
      
          {
            path: "/ContactUs",
            element: <ContactUs />
          },
      ],
    },
  ]);

  return <RouterProvider router={router}/>;
}

export default App;
