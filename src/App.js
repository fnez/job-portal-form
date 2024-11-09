import logo from "./logo.svg";
import "./App.css";
import { LoginForm } from "./Components/LoginForm/LoginForm";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([]);

function App() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}

export default App;
