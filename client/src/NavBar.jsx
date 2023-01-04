import {NavLink} from "react-router-dom"

function NavBar() {

  return (
    <nav>
      <div>
        <h1>Engin-ear</h1>
        {/* LOGO */}
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        {/* TERNARY here */}
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  )
}

export default NavBar