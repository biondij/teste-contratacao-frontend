import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to={"/admin"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/admin/sales"}>Venda</NavLink>
        </li>
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-primary);

  @media (min-width: 45.5em) {
    position: relative;
  }

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;

    @media (min-width: 45.5em) {
      flex-direction: column;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
