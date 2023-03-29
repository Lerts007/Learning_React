import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Start from "../pages/Start";
import Error from "../pages/Error";

export const routes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
  // { path: "/", element: Start, exact: true },
  // { path: "*", element: Error, exact: true },
];
