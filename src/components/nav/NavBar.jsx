



import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()

    return <ul className="navbar">
        
    
    <li className="navbar-item">

            <Link to='/dashboard' className="navbar-link">
                DashBoard
            </Link>
    </li>

    <li className="navbar-item">

            <Link to='/modules' className="navbar-link">
                Modules
            </Link>
    </li>



    <li className="navbar-item">

        <Link to='/books' className="navbar-link">
            Books
        </Link>
        
        </li>

        <li className="navbar-item">

            <Link to='/assignments' className="navbar-link">
                Assignments
            </Link>
            
        </li>

        <li className="navbar-item">
            <Link
            to='/resources' className="navbar-link">
                 Resources
            </Link>
           
            
        </li>

        {localStorage.getItem("honey_user") ? (
<li className="navbar-item navbar-logout">
<Link
  className="navbar-link"
  to=""
  onClick={() => {
    localStorage.removeItem("honey_user")
    navigate("/", { replace: true })
  }}
>
  Logout
</Link>
</li>
) : (
""
)}

    </ul>
}
