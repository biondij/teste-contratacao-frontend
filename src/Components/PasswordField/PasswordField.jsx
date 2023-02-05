import { Field, Input, Label } from "../Form/Form";

export function PasswordField(props) {
  return (
    <Field>
      <Label>Senha</Label>
      <Input type={"password"} placeholder="***********" />
    </Field>
  );
}
