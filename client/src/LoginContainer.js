import Login from "./Login";
import ArtistPage from "./ArtistPage";


function LoginContainer({onLogin, user}) {
    return (
        <>
        {user ? "" : <Login onLogin={onLogin} />}
        </>
    )
}

export default LoginContainer