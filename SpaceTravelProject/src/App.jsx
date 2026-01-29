// import styles from "./App.css";
import {createBrowserRouter,  createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

//pages
import HomePage from "./pages/HomePage";
import Spacecrafts from "./pages/Spacecrafts";
import Planets from "./pages/Planets";
import Spacecraft from "./pages/Spacecraft";


//layouts
import RootLayout from "./layouts/RootLayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<HomePage />}/>
      <Route path="spacecrafts" element={<Spacecrafts/>} />
      <Route path="spacecraft/:id" element={<Spacecraft/>}/>
      <Route path="planets" element={<Planets/>}/>
    </Route>
  )
)

function App ()
{
  return (
    <RouterProvider router={router} />
  );
}

export default App;
