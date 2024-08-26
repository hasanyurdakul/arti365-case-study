import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UpdatePage from "./pages/UpdatePage";
import CreatePage from "./pages/CreatePage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/update/:id",
        element: <UpdatePage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
