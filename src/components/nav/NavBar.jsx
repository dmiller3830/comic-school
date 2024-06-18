



import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"


export const NavBar = () => {
    const navigate = useNavigate()

    return <ul className="navbar">
        

    <li className="navbar-item">

            <Link to='/dashboard'>
                DashBoard
            </Link>
    </li>

    <li className="navbar-item">

            <Link to='/modules'>
                Modules
            </Link>
    </li>



    <li className="navbar-item">

        <Link to='/books'>
            Books
        </Link>
        
        </li>

        <li className="navbar-item">

            <Link to='/assignments'>
                Assignments
            </Link>
            
        </li>

        <li className="navbar-item">

            <Link to='/posts'>
                Posts
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
