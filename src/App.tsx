import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./utils/themeProvider";

import Home from "./pages/Home";
import Split from "./pages/Split";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/split/:id",
      element: <Split />,
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
