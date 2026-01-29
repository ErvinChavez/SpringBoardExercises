// import styles from "./App.css";
import {createBrowserRouter,  createRoutesFromElements, Route, Link, RouterProvider} from "react-router-dom"

//pages
import HomePage from "./pages/HomePage";
import Spacecrafts from "./pages/Spacecrafts";
import Planets from "./pages/Planets";


//layouts
import RootLayout from "./layouts/RootLayout";
import SpaceCraftCard from "./components/SpacecraftCard";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<HomePage />}/>
      <Route path="spacecrafts" element={<Spacecrafts/>} />
      <Route path="spacecraftCard" element={<SpaceCraftCard/>}/>
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
