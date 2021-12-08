import Login from "./Login";
import ArtistPage from "./ArtistPage";


function LoginContainer({onLogin, onLogout, user}) {
    return (
        <>
        {user ? "" : <Login onLogin={onLogin} />}
        </>
    )
}

export default LoginContainer