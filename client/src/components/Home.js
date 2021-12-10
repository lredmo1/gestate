import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function Home() {
  return (
    <>
    <div className = "HomePage">
      <div className = "HomeBox">
      <h1>App Title Here</h1>
      </div>
      <div className = "loginlogout">
      <ul className="home-links">
        <li className="home-links">
          <NavLink to="/dashboard">Log In</NavLink>
        </li>
        <li className="home-links">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
      </div>
    </div>
    </>
  );
}

export default Home;

const HomePage = styled.div`
display:flex; 
border:10px solid pink;
`
