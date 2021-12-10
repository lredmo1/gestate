import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function Home() {
  return (
    <>
    <div className = "HomePage">
      <div className = "HomeBox">
        <img src="https://i.imgur.com/OwAsg0n.jpg" alt ="sketchy"/>
      <h1>Etch A Sketch</h1>
      </div>
      <div className = "loginlogout">
      <ul className="home-links">
        <div className="homelinkZZ">
        <li className="home-links">
          <NavLink to="/dashboard">Log In</NavLink>
        </li>
        <li className="home-links">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        </div>
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
