import { NavLink, Outlet } from "react-router-dom";


export default function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Space Travel</h1>
                    <NavLink to="/">Home</NavLink>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}