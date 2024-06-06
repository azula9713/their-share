import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./utils/themeProvider";

import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
