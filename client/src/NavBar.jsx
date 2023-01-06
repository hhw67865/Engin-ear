import {NavLink} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import logo_image from './Engine-Ear-Final-2.png';

function NavBar({user, setUser}) {

  let navigate = useNavigate();

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    }).then(r=>{if (r.ok) {
      setUser(null)
      navigate("/login")
    }})
  }

  return (
    <nav>
      <div>
        <img id='logo' src={logo_image} alt="Engine-Ear. Logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        {user ? 
        <>
        <NavLink to={`/profile/${user.id}`}>Profile</NavLink>
        <button id="logout-button" onClick={handleLogout}>Logout</button>
        {/* <NavLink to="/logout">Logout</NavLink> */}
        </> : 
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
        </>}
        
      </div>
    </nav>
  )
}

export default NavBar