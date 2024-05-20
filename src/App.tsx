import AppLayout from "./layout.tsx";
import {
  createBrowserRouter as createRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import { getToken } from "./utils/token.ts";
import routes from "./router/index.ts";

const LoginPage = lazy(() => import("@/pages/login.tsx"));

const AuthRoute = (props: { children: React.ReactNode }) => {
  const token = getToken();
  if (!token) {
    return <Navigate to={"/login"} />;
  }
  return props.children;
};

function App() {
  const router = createRouter([
    {
      path: "/",
      element: (
        <AuthRoute>
          <AppLayout />
        </AuthRoute>
      ),
      children: [...routes],
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
