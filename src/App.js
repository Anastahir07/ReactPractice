import './App.css';
import {Header} from './Components/HeaderComp/Header';
import Header2 from './Components/HeaderComp/Header';

import Left from './Components/MainContent/Left';
import Content from './Components/MainContent/Content';
import Footer from './Components/HeaderComp/Footer/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  
  [
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "/about",
      element: <About/>,
    },

    {
      path: "/contact",
      element: <Contact/>,
    },

  ]
  
  );




function App() {
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
