import { NavLink } from 'react-router-dom'

function ArtistPage({onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((resp) => {
          if (resp.ok) {
            onLogout(null);
          }
        });
      }

  return (
    <div id="artist-page-container">
      <h1 className="title">ArtistPage</h1>
      <div className="artist-div"><NavLink to="/settings">Edit Settings</NavLink></div>
      <div className="artist-div">//how to render icons here</div>
      <div className="artist-div"><NavLink to="/drawing">view/edit existing drawing</NavLink></div>
      <div className="artist-div"><NavLink to="/canvas">create new drawing</NavLink></div>
      <div className="artist-div"><button onClick={handleLogout}>Log Out</button></div>
    </div>
  );
}

export default ArtistPage;
