import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import Authors from "../Pages/Authors";
import SingleBook from "../Pages/SingleBook";
import DashboardLayout from "../Pages/admin/DashboardLayout";
import DashBoard from "../Pages/admin/DashBoard";
import UploadBook from "../Pages/admin/UploadBook";
import ManageBooks from "../Pages/admin/ManageBooks";
import EditBooks from "../Pages/admin/EditBooks";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import Cart from "../Pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <UserProfile />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/authors",
        element: <Authors />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        // loader: ({ params }) => fetch(`${process.env.SERVER_URL}${params.id}`),
        // loader: ({ params }) => fetch(`${process.env.SERVER_URL}/books/${params.id}`),
        // loader: async ({params}) => {
        //   return fetch(`${process.env.REACT_APP_SERVER_URL}/book/${params.id}`).then(res => res.json).then( book => {return book})
        // }

        loader: async ({ params }) => {
          const { id } = params;

          try {
            const response = await fetch(
              `${process.env.REACT_APP_SERVER_URL}/book/${id}`
            );
            if (!response.ok) {
              throw new Error(`Failed to fetch book (${response.status})`);
            }

            const book = await response.json();

            return book;
          } catch (error) {
            console.error("Error fetching book:", error);
            return null;
          }
        },
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-book/:id",
        element: <EditBooks />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
]);

export default router;
