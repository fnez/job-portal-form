import "./App.css";
import { LoginPage } from "./pages/LoginPage.tsx";
import { CreateProfilePage } from "./pages/CreateProfilePage/CreateProfilePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-profile",
    element: <CreateProfilePage />,
  },
]);

function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
