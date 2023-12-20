import { Book, Error, Landing, HomeLayout } from "./pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { loader as singleBookLoader } from "./pages/Book";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: ":id",
        loader: singleBookLoader,
        element: <Book />,
      },
      {
        path: "error",
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
