import styled from "styled-components";
import Button from "../../Components/Button/Button";
import { EmailField } from "../../Components/EmailField/EmailField";
import {
  Form,
  FormSection,
  FormHeader,
  FormSubtitle,
  FormTitle,
} from "../../Components/Form/Form";
import { InlineLink } from "../../Components/InlineLink/InlineLink";
import { NameField } from "../../Components/NameField/NameField";
import { PasswordField } from "../../Components/PasswordField/PasswordField";
import { UsernameField } from "../../Components/UsernameField/UsernameField";

export default function SignUp() {
  return (
    <Main>
      <FormSection>
        <FormHeader>
          <FormTitle>Bem vindo!</FormTitle>
          <FormSubtitle>
            Já tem uma conta? <InlineLink to="/">Login</InlineLink>
          </FormSubtitle>
        </FormHeader>

        <Form>
          <NameField />
          <UsernameField />
          <EmailField />

          <PasswordField />

          <Button type="submit">Cadastre-se</Button>
        </Form>
      </FormSection>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  ${FormSection} {
    margin: auto;
    max-width: 30rem;
    width: 100%;
  }
`;