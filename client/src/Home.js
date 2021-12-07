import { BrowserRouter, NavLink } from 'react-router-dom'

function Home() {
    return (
        <>
    <h1>Home</h1>
    <NavLink to="/login">Log In</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
    <NavLink to="/canvas">Draw</NavLink>
    </>
    )
}

export default Home