import { BrowserRouter, Route } from 'react-router-dom'
import "./App.css";
import { useState } from "react"
import CanvasMain from "./CanvasMain";
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import CanvasContainer from "./CanvasContainer"

function App() {
const [user, setUser] = useState(null)

  return (
    <>
    <BrowserRouter>
      <Route exact path="/">
        <Home /> 
      </Route>
      <Route exact path="/login">
        <Login onLogin={setUser}/> 
      </Route>
      <Route exact path="/signup">
        <Signup /> 
      </Route>
      <Route exact path="/canvas">
        <CanvasContainer /> 
      </Route>
    </BrowserRouter>
    </>
  );
}

export default App;
