import { NavLink, Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
        <div className="root-layout">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/spacecrafts">SpaceCrafts</NavLink>
                <NavLink to="/planets">Planets</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}