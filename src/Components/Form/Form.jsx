import styled from "styled-components";
import Button from "../Button/Button";
import { MyCard } from "../Card/Card";

export const FormSectionCard = styled(MyCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.25rem;
`;

export const FormHeader = styled.div`
  padding-bottom: 1.75rem;
`;

export const FormTitle = styled.h1`
  padding: 0 0 0.5rem;
  margin: 0;
`;

export const FormSubtitle = styled.p`
  padding: 0;
  margin: 0;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 0.5rem;

  & ~ & {
    padding-top: 0.75rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  width: 100%;

  ${Field} {
    &:last-of-type {
      margin-bottom: 1.5rem;
    }
  }

  ${Button}[type="submit"] {
    width: 100%;
  }
`;

export const Label = styled.div`
  font-weight: var(--font-weight-medium);
  font-size: 0.75rem;
`;

export const Input = styled.input`
  background-color: transparent;
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 0.625rem;
  border: 0.0625rem solid #b1b5c3;

  &::placeholder {
    color: #777e9099;
  }
`;
