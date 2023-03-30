import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Start from "../pages/Start";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/posts", element: <Posts />, exact: true },
  { path: "/posts/:id", element: <PostIdPage />, exact: true },
  { path: "/", element: <Start />, exact: true },
  { path: "/login", element: <Posts />, exact: true },
  { path: "*", element: <Error />, exact: true },
];

export const publicRoutes = [
  { path: "/about", element: <About />, exact: true },
  { path: "/login", element: <Login />, exact: true },
  { path: "*", element: <Login />, exact: true },
];
