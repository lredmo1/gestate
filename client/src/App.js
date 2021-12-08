import { Switch, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import CanvasMain from "./CanvasMain";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import CanvasContainer from "./CanvasContainer";
import UserSettings from "./UserSettings";
import ArtistPage from "./ArtistPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  // if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login onLogin={setUser} />
        </Route>
        <Route exact path="/signup">
          <Signup onLogin={setUser} />
        </Route>
        <Route exact path="/canvas">
          <CanvasContainer />
        </Route>
        <Route exact path="/artist_page">
          <ArtistPage onLogout={setUser}/>
        </Route>
        <Route exact path="/settings">
          <UserSettings />
        </Route>
        <Route exact path="/drawing">
          <CanvasContainer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
