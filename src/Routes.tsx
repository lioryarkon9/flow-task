import { createBrowserRouter } from "react-router-dom";

import { PostsPage } from "./pages/Posts/Posts.page";
import { StatsPage } from "./pages/Stats.page";

export const router = createBrowserRouter([
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/stats",
    element: <StatsPage />,
  },
]);
