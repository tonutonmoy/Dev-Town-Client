import {
    createBrowserRouter,
   
  } from "react-router-dom";
import App from "../App";
import CategoryPage from "../Component/Home/CategoryPage";
import Home from "../Component/Home/Home";
import SingleProduct from "../Component/Home/SingleProduct";
import ProfilePage from "../Component/Home/ProfilePage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[{
        
        path:'/',
        element:<Home></Home>

      },
      {
        path: "/CategoryPage/:categoryName",
        element: <CategoryPage></CategoryPage>
        
      },
      
      {
        path: "/SingleProduct/:id",
        element: <SingleProduct></SingleProduct>
        
      },
      {
        path: "/profilePage",
        element: <ProfilePage></ProfilePage>
        
      },
      
    ]
      
    }
   
  ]);

  export default router