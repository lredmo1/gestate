import { NavLink } from "react-router-dom";
import ArtistPage from "./ArtistPage";
import CanvasContainer from "./CanvasContainer";

function ArtistDashboard({onLogin, user}) {
  return (
    <>
    {user ? <ArtistPage onLogin={onLogin} user={user} /> : <CanvasContainer />}
    </>
  );
}

export default ArtistDashboard;