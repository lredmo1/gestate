function Signup() {
    return (
    <>
    <h1>Sign Up</h1>
    <form>
        <label>Full Name: <input type="text"></input></label>
        <label>Email: <input type="text"></input></label>
        <label>Profile Picture: <input type="text"></input></label>
        <label>Username: <input type="text"></input></label>
        <label>Password: <input type="text"></input></label>
        <label>Password Confirmation: <input type="text"></input></label>
        <button type="submit">Sign Up</button>
    </form>
    </>
    )
}

export default Signup