import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import Product from "../pages/Product";
import PlaceOrder from "../pages/PlaceOrder";


const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/collection", element: <Collection /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product/:productId", element: <Product /> },
  { path: "/cart", element: <Cart /> },
  { path: "/login", element: <Login /> },
  { path: "/orders", element: <Orders /> },
  { path: "/placeOrder", element: <PlaceOrder /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
]);

export default router;
