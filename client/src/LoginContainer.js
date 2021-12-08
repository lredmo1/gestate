import Login from "./Login";
import ArtistPage from "./ArtistPage";


function LoginContainer({onLogin, onLogout, user}) {
    return (
        <>
        {user ? <ArtistPage user={user} onLogout={onLogout}/> : <Login onLogin={onLogin} />}
        </>
    )
}

export default LoginContainer