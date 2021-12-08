function UserSettings() {
    const [userFullName, setUserFullName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [profPicUrl, setUPofPicUrl] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/signup", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((resp) => {
          setIsLoading(false);
          if (resp.ok) {
            resp.json().then((user) => onLogin(user));
          } else {
            resp.json().then((data) => setErrors(data.errors));
          }
        });
      }

    return (
<form>
        <label>
          Full Name:
          <input
            type="text"
            className="user-full-name"
            autoComplete="off"
            value={userFullName}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="text"
            className="user-email"
            autoComplete="off"
            value={userEmail}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          Profile Picture:{" "}
          <input
            type="text"
            className="prof-pic-url"
            autoComplete="off"
            value={profPicUrl}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          Username:
          <input
            type="text"
            className="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            className="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label>
          Password Confirmation:
          <input
            type="password"
            className="password-confirmation"
            autoComplete="current-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
        </label>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </form>
    )
}

export default UserSettings