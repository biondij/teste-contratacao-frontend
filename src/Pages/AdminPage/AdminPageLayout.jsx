import styled from "styled-components";
import Navbar from "../../Components/Navbar/Navbar";

export default function AdminPageLayout(props) {
  return (
    <LayoutAdminPage>
      <Navbar />

      <Main>{props.children}</Main>
    </LayoutAdminPage>
  );
}

const LayoutAdminPage = styled.div`
  font-size: 0.75rem;
  min-height: 100vh;
  display: grid;

  @media (min-width: 45.5em) {
    grid-template-columns: 12.5rem auto;
    font-size: 1rem;
  }
`;

const Main = styled.main`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;
