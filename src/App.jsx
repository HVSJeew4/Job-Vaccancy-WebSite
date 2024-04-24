import {Route,
  createBrowserRouter,
createRoutesFromElements,
RouterProvider} from 'react-router-dom'
import HomePage from './page/HomePage';
import MainLayout from './layouts/MainLayout';
import JobPages from './page/JobPages';
import NotFoundPage from './page/NotFoundPage';


const router =createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
  <Route index element={<HomePage/>}/>
  <Route path='/jobs' element={<JobPages/>}/>
  <Route path='*' element={<NotFoundPage/>}/>
  </Route>)
);

const App = () => {
  return <RouterProvider router={router}/>;
}

export default App;