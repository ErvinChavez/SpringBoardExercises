import { createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom' 

//pages
import Home from './pages/Home';
import Mars from './pages/Mars';
import Venus from './pages/Venus';
import OrionNebula from './pages/OrionNebula';
import NotFound from './pages/NotFound';

//layouts
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="mars" element={<Mars/>} />
      <Route path='venus' element={<Venus/>}/>
      <Route path='orionnebula' element={<OrionNebula/>}/>
      
      <Route path='*' element={<NotFound />} />
    </Route>

    
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App
