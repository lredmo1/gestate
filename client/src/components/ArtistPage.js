import { NavLink } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import CanvasContainer from './CanvasContainer';
import DrawingContainer from './DrawingContainer';
import UserSettings from './UserSettings';

function ArtistPage({setUser, user, onLogin}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((resp) => {
          if (resp.ok) {
            onLogin(null);
          }
        });
      }

  return (
    <div id="artist-page-container">
      <Switch>
        <Route exact path="/dashboard/canvas">
          <CanvasContainer />
        </Route>
        <Route exact path="/settings">
          <UserSettings user={user} onLogin={onLogin} />
        </Route>
        </Switch>
      <h1 className="title">ArtistPage</h1>
      <DrawingContainer user={user}/>
      <div className="artist-div"><NavLink to="/dashboard/canvas">create new drawing</NavLink></div>
      <div className="artist-div"><button onClick={handleLogout}>Log Out</button></div>
      <div className="artist-div"><NavLink to="/settings">Edit Profile</NavLink></div>
    </div>
  );
}

export default ArtistPage;
