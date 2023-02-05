import React from "react";
import Button from "../Button/Button";
import { EmailField } from "../EmailField/EmailField";
import {
  Form,
  FormSection,
  FormHeader,
  FormSubtitle,
  FormTitle,
} from "../Form/Form";
import { InlineLink } from "../InlineLink/InlineLink";
import { PasswordField } from "../PasswordField/PasswordField";

export default function FormLoginSection(props) {
  return (
    <FormSection>
      <FormHeader>
        <FormTitle>Bem vindo!</FormTitle>
        <FormSubtitle>
          Ainda não tem uma conta?{" "}
          <InlineLink to="/signup">Cadastre-se</InlineLink>
        </FormSubtitle>
      </FormHeader>

      <Form>
        <EmailField />
        <PasswordField />
        <Button type="submit">Login</Button>
      </Form>
    </FormSection>
  );
}
