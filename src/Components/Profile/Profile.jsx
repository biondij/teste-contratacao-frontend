import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function Profile() {
  return (
    <ContainerProfile>
      <ProfileIcon>
        <BsPersonCircle />
      </ProfileIcon>
      <ProfileText>
        <h3>UserDaMaria</h3>
        <h3>Rank: 1</h3>
      </ProfileText>
    </ContainerProfile>
  );
}

const ContainerProfile = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 45.5em) {
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
    max-height: 12.5rem;
  }
`;

const ProfileIcon = styled.div`
  font-size: 1rem;
  padding: 1rem;
  margin: auto 0;

  @media (min-width: 45.5em) {
    font-size: 2.75rem;
  }
`;

const ProfileText = styled.section`
  display: flex;
  flex-direction: row;

  @media (min-width: 45.5em) {
    flex-direction: column;
    font-size: 1rem;
  }

  h3 {
    font-size: 0.75rem;
    margin: auto 0;

    @media (min-width: 45.5em) {
      font-size: 1rem;
      margin-bottom: 2em;
    }

    &:nth-of-type(2) {
      background-color: #ff764c;
      display: none;

      @media (min-width: 45.5em) {
        padding: 0.75rem 1rem;
        display: block;
      }
    }
  }
`;
