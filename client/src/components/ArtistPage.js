import { NavLink } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import CanvasContainer from './CanvasContainer';
import DrawingContainer from './DrawingContainer';
import CreateDrawing from './CreateDrawing';

import { useState } from "react";

import UserSettings from './UserSettings';



function ArtistPage({setUser, user, onLogin}) {

  const [disappear,setDispear] = useState(false)

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

      const setDisppearlol = () => {
        setDispear(true)
      }

  return (
  <div className="ArtistPageContainer">
    <div className = {disappear? "":"candy"}>
    <CreateDrawing user = {user} setDispear = {setDispear} />
    </div>
        <div className = {disappear? "candy":""}>
        <Switch>
        <Route exact path="/dashboard/canvas">
          <CanvasContainer />
        </Route>
        <Route exact path="/settings">
          <UserSettings user={user} onLogin={onLogin} />
        </Route>
        </Switch>
        <div className = {disappearOfArtistPage? "TitleArtistPage":"candy"}>
          <h1 className="titleZZZ">{user.username}</h1>
        </div>
          <div className = "DrawingContainer">
          <DrawingContainer setDisappearOfArtistPage ={setDisappearOfArtistPage} user={user}/>
        </div>
      <div className = "ArtistPageContainerBottom">
        <div className = "ArtistPageMenu">
      <div className="artist-div"><button onClick = {setDisppearlol}>create new drawing</button></div>
      <div className="artist-div"><button onClick={handleLogout}>Log Out</button></div>
      <div className="artist-div"><NavLink to="/settings">Edit Profile</NavLink></div>
      </div>
      </div>
      </div>

  </div>
  );
}

export default ArtistPage;
