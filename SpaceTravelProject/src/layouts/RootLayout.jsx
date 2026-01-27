import { NavLink, Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="SpaceCrafts">Space Crafts</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}