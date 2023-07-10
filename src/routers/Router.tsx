import { Axios } from "@/libs/axios/base.axios";
import DefaultLayout from "@/shared/layouts/default-layout/DefaultLayout";
import { lazy } from "react";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/home/HomePage"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <HomePage /> }],
    loader: async () => {
      const todos = await Axios.getReq("");

      return {
        todos,
      };
    },
  },
];

const router = createBrowserRouter(routes);

const Router = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default Router;
