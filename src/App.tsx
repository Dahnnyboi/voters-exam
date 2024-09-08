import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './views/landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
