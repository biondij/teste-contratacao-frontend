import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarFooter from "../NavbarFooter/NavbarFooter";
import Profile from "../Profile/Profile";

export default function Navbar() {
  return (
    <Nav>
      <Profile />
      <ul>
        <li>
          <NavLink to={"/admin"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/sales"}>Venda</NavLink>
        </li>
      </ul>
      <NavbarFooter />
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  max-height: 8vh;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.75rem;

  @media (min-width: 45.5em) {
    flex-direction: column;
    min-height: 100vh;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;

    @media (min-width: 45.5em) {
      flex-direction: column;
      margin: 0;
      text-align: center;
      padding: 0;
    }
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: white;

  @media (min-width: 45.5em) {
    /* border-bottom: 1px solid white; */
    padding-bottom: 0.75em;
  }
`;
