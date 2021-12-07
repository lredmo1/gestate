import React, { useState } from "react";

function Login({onLogin}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }).then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => onLogin(user));
          } else {
            resp.json().then((data) => setErrors(data.errors));
          }
        });
    }


    return (
    <>
    <h1>Log In</h1>
    <form onSubmit={handleSubmit}>
        <label>Username: <input type="text" id="username" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)}></input></label>
        <label>Password: <input type="password" id="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)}></input></label>
        <button type="submit">{isLoading ? "Loading..." : "Log In"}</button>
    </form>
    </>
    )
}

export default Login