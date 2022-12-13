
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';



function App() {
  
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div className='body'>
      
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>

    </div>
  );
}

export default App;
