import { NavLink } from 'react-router-dom'

function ArtistPage() {

    function handleLogoutClick() {
        fetch("/logout", {
          method: "DELETE",
        }).then((resp) => {
          if (resp.ok) {
            onLogout(null);
          }
        });
      }

  return (
    <>
      <h1>ArtistPage</h1>
      <NavLink to="/settings">Edit Settings</NavLink>
      //how to render icons here
      <NavLink to="/drawing">view/edit existing drawing</NavLink>
      <NavLink to="/canvas">create new drawing</NavLink>
      <button onClick={handleLogoutClick}>Log Out</button>
    </>
  );
}

export default ArtistPage;
