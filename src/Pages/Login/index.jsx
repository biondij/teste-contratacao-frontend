import React from "react";
import styled from "styled-components";
import FormLoginSection from "../../Components/FormLogin";

const Main = styled.main`
  display: grid;
  width: 100%;
  max-width: 50rem;
  gap: 2rem;
  min-height: 100vh;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr;
    min-height: 50vh;
  }
`;

const ImageSection = styled.div`
  display: none;

  @media (min-width: 48em) {
    display: flex;
    align-items: center;
  }
`;

const Image = styled.img`
  aspect-ratio: 1;
  max-width: 100%;
`;

export default function Login() {
  return (
    <Layout>
      <Main>
        <FormLoginSection />
        <ImageSection>
          <Image src="Images/imginicial.png" alt="img login" width={410} />{" "}
        </ImageSection>
      </Main>
    </Layout>
  );
}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
