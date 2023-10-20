import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import MainWrapper from './components/MainWrapper';
export default function App() {

  const router = createBrowserRouter([
    {path: '/', element: <MainWrapper/>, children: [
      {index: true, element: <HomePage/>}
    ]}
  ])

  return (
    <RouterProvider router={router}/>
  );
}
