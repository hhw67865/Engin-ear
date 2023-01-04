import {NavLink} from "react-router-dom"

function NavBar({user, setUser}) {

  return (
    <nav>
      <div>
        <h1>Engin-ear</h1>
        {/* LOGO */}
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        {user ? <NavLink to="/profile">Profile</NavLink> : 
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>}
        
      </div>
    </nav>
  )
}

export default NavBar