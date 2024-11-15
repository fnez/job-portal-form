import { LoginForm } from "./components/LoginForm/LoginForm.tsx";
import { CreateProfilePage } from "./pages/CreateProfilePage/CreateProfilePage.tsx";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";
import { DataProvider } from "./context/DataContext.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-profile",
    element: <CreateProfilePage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    // element: (
    //   <ProtectedRoute>
    //     <HomePage />
    //   </ProtectedRoute>
    // ),
    element: <HomePage />,
  },
]);

function App() {
  return (
    <main style={{ display: "flex", flexDirection: "column" }}>
      <AuthProvider>
        <DataProvider>
          <RouterProvider router={router}></RouterProvider>
        </DataProvider>
      </AuthProvider>
    </main>
  );
}

export default App;
