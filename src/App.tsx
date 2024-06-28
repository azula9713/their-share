import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "./utils/themeProvider";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./pages/Home";
import Split from "./pages/Split";
import { persistor, store } from "./redux/store";

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
