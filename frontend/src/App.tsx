import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './pages/Home';
import MainWrapper from './components/MainWrapper';
import ServicesPage from './pages/Services';
import WorkPage from './pages/Work';
import BlogPage from './pages/Blog';
export default function App() {

  const router = createBrowserRouter([
    {path: '/', element: <MainWrapper/>, children: [
      {index: true, element: <HomePage/>},
      {path:'/services', element:<ServicesPage/> },
      {path: '/work', element: <WorkPage/>},
      {path: '/blog', element: <BlogPage/>}
    ]}
  ])

  return (
    <RouterProvider router={router}/>
  );
}
