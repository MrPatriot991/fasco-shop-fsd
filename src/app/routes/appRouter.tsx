import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, MainLayout } from "@/app/layouts";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <AuthPage /> },
      { path: "/sign-up", element: <AuthPage /> },
      { path: "/forgot-password", element: <AuthPage /> },
    ],
  },
]);
