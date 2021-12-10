import { NavLink } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import CanvasContainer from './CanvasContainer';
import DrawingContainer from './DrawingContainer';

import { useState } from "react";

import UserSettings from './UserSettings';


function ArtistPage({setUser, user, onLogin}) {

  const [disappearOfArtistPage, setDisappearOfArtistPage] = useState(true)

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
  <div className="ArtistPageContainer">
        <Switch>
        <Route exact path="/dashboard/canvas">
          <CanvasContainer />
        </Route>
        <Route exact path="/settings">
          <UserSettings user={user} onLogin={onLogin} />
        </Route>
        </Switch>
        <div className = {disappearOfArtistPage? "TitleArtistPage":"candy"}>
          <h1 className="title">ArtistPage</h1>
        </div>
          <div className = "DrawingContainer">
          <DrawingContainer setDisappearOfArtistPage ={setDisappearOfArtistPage} user={user}/>
        </div>
      <div className = "ArtistPageContainerBottom">
        <div className = "ArtistPageMenu">
      <div className="artist-div"><NavLink to="/dashboard/canvas">create new drawing</NavLink></div>
      <div className="artist-div"><button onClick={handleLogout}>Log Out</button></div>
      <div className="artist-div"><NavLink to="/settings">Edit Profile</NavLink></div>
      </div>
      </div>
  </div>
  );
}

export default ArtistPage;
