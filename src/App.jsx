import { About, Book, Error, Landing, NewsLetter, HomeLayout } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

import { loader as landingLoader } from './pages/Landing';
import { loader as singleBookLoader } from './pages/Book';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout/>,
    children: [
      {
        path: "about", 
        element: <About/>,
      },
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader,
      },
      {
        path: "newsletter",
        element: <NewsLetter/>,
      },
      {
        path: ":id",
        loader: singleBookLoader,
        element: <Book/>,
      },
      {
        path: "error",
        element: <Error/>,
      },
    ]
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
