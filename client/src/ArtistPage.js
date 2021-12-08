import { NavLink } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import CanvasContainer from './CanvasContainer';
import DrawingContainer from './DrawingContainer';

function ArtistPage({setUser, user}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((resp) => {
          if (resp.ok) {
            setUser(null);
          }
        });
      }

  return (
    <div id="artist-page-container">
        <Route exact path="/dashboard/canvas">
          <CanvasContainer />
        </Route>
      <h1 className="title">ArtistPage</h1>
      <DrawingContainer user={user}/>
      <div className="artist-div"><NavLink to="/dashboard/canvas">create new drawing</NavLink></div>
      <div className="artist-div"><button onClick={handleLogout}>Log Out</button></div>
    </div>
  );
}

export default ArtistPage;
