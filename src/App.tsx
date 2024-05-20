import AppLayout from "./layout.tsx";
import {
  createBrowserRouter as createRouter,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("@/pages/login.tsx"));

function App() {
  const router = createRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
