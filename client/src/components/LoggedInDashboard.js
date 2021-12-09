import Login from "./Login";
import ArtistPage from "./ArtistPage";


function LoggedInDashboard({onLogin, onLogout, user}) {
    return (
        <>
        {user ? "" : <Login onLogin={onLogin} />}
        </>
    )
}

export default LoggedInDashboard