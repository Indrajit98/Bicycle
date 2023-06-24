import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import ProductBook from "../Components/Home/ProductBook";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Login/SignUp";
import Products from "../Components/Products/Products";
import ErrorPage from "../Components/Shared/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import Main from "../Layout/Main";
import Account from "../Layout/Account";
import Dashboard from "../Layout/Dashboard";
import SellProducts from "../Components/Dashboard/SellProducts";
import MyOrder from "../Components/Dashboard/MyOrder";
import AllUser from "../Components/Dashboard/AllUser";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";
import AllSeller from "../Components/Dashboard/AllSeller";
import PostProduct from "../Components/Dashboard/PostProduct";
import Blog from "../Components/Home/Blog";
import Payment from "../Components/Dashboard/Payment";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://bicyle-server-side-indrajit98.vercel.app/products')

            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://bicyle-server-side-indrajit98.vercel.app/products/${params.id}`)
            },
            {
                path: '/productBook/:id',
                element: <ProductBook></ProductBook>,
                loader: ({ params }) => fetch(`https://bicyle-server-side-indrajit98.vercel.app/productBook/${params.id}`)
            },

        ],


    },
    {
        path: "/",
        element: <Account></Account>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/seller',
                element: <SellerRoutes><SellProducts></SellProducts></SellerRoutes>
            },
            {
                path: '/dashboard/postProduct',
                element: <SellerRoutes><PostProduct></PostProduct></SellerRoutes>
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/alluser',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://bicyle-server-side-indrajit98.vercel.app/payment/${params.id}`)
            },

        ]


    }

])