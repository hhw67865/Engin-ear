import SearchedCard from "./SearchedCard";
import {useState, useEffect} from 'react';

const Search = ({user, setUpdate, update}) => {

  const [allUsers, setAllUsers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
      fetch('/users')
      .then(r=>r.json())
      .then(setAllUsers)
  },[user])

  const filteredUsers = allUsers.filter((user)=> {
    if (search==="") {
      return false
    }
      return user.name.toLowerCase().includes(search.toLowerCase())
  })

  const usersArray = filteredUsers.map((u)=><SearchedCard key={u.id} setUpdate={setUpdate} update={update} u={u}/>)

  return (
    <div className="profile" id="profile-card-div" style={{minHeight: "300px"}}>
      <input style={{width: "80%"}} type="text" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}></input>
      <div className="searchedProfileContainer">
        {usersArray}
      </div>
    </div>
  );
}

export default Search;