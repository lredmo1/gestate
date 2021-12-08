import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import CanvasMain from "./CanvasMain";
import Home from "./Home";
import LoginContainer from "./LoginContainer";
import Signup from "./Signup";
import CanvasContainer from "./CanvasContainer";
import UserSettings from "./UserSettings";
import ArtistPage from "./ArtistPage";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  if(user){
    return (<ArtistPage setUser={setUser} user={user}/>)
  }

  return (
    <>
      {/* {user ? <ArtistPage /> : <Login onLogin={setUser} />} */}
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/dashboard">
          <LoginContainer onLogin={setUser} user={user}/>
        </Route>
        <Route exact path="/signup">
          <Signup onLogin={setUser} />
        </Route>
        {/* <Route exact path="/canvas">
          <CanvasContainer />
        </Route>
      
        <Route exact path="/settings">
          <UserSettings />
        </Route>
        <Route exact path="/drawing">
          <CanvasContainer />
        </Route> */}
      </Switch>
    </>
  );
}

export default App;
