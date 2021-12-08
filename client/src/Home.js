import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div id="home-container">
      <h1>App Title Here</h1>
      <ul className="home-links">
        <li className="home-links">
          <NavLink to="/dashboard">Log In</NavLink>
        </li>
        <li className="home-links">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li className="home-links">
          <NavLink to="/canvas">Draw</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Home;
