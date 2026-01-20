import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/app/layouts";
import { HomePage } from "@/pages/home";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
]);
