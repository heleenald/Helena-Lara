import { createBrowserRouter } from "react-router-dom";
import { Radix } from "../Radix";

import { Home } from "../paginae/home/Home";
import { AboutMe, Contact, Primus } from "../paginae";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <Radix /> ,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'aboutme',
        element: <AboutMe />
        
      },

      {
        path: 'work',
        element: <Primus />
        
      },

      {
        path: 'contact',
        element: <Contact />
        
      },
    ]
  }

]);