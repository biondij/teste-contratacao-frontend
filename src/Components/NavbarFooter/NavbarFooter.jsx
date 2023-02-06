import { BsGearFill } from "react-icons/bs";
import styled from "styled-components";

export default function NavbarFooter() {
  return (
    <NavFooter>
      <LogOutIcon>
        <BsGearFill />
        <a href="https://www.google.com/">Sair</a>
      </LogOutIcon>
    </NavFooter>
  );
}

const NavFooter = styled.div`
  max-height: 5rem;
  display: flex;
`;

const LogOutIcon = styled.div`
  font-size: 1rem;
  padding: 1rem;
  margin: auto 0;

  a {
    text-decoration: none;
    color: white;
    padding: 1em;
    font-size: 1em;
    font-weight: medium;
  }
`;
