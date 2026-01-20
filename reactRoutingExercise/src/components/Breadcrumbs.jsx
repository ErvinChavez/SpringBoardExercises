// import { useLocation } from "react-router-dom";

//  export default function Breadcrumbs() {
//     const location = useLocation()

//     let currentLink = ''

//     const crumbs = location.pathname.split('/')
//         .filter(crumb => crumb !== '')
//         .map(crumb => {
//             currentLink

//             return (
//                 <button className="crumb" key={crumb}>
//                     <Link to={currentLink}>{crumb}</Link>
//                 </button>
//             )
//         })

//     return (
//         <div className="breadcrumbs">
//             {crumbs}
//         </div>
//     )
//  }