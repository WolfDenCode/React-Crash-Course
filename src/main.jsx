import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Applayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
// Loader function to load tasks from localStorage
const taskLoader = async () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const archivedTasks = JSON.parse(localStorage.getItem("archivedTasks")) || [];
  return { tasks: storedTasks, archivedTasks };
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: taskLoader,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
