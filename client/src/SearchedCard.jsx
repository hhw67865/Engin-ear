import {useNavigate} from 'react-router-dom'

const SearchedCard = ({u}) => {
    let navigate = useNavigate();

    function getProfile () {
        navigate(`/profile/${u.id}`)
    }
  return (
    <div className="searchedCard" style={{cursor:"pointer"}} onClick={getProfile}>
        <img className="commentProfilePicture" src={u.profile_picture?u.profile_picture:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt={u.name} />
        <p>{u.name}</p>

    </div>
  );
}
export default SearchedCard;