import { Field, Input, Label } from "../Form/Form";

export function EmailField(props) {
  return (
    <Field>
      <Label>E-mail</Label>
      <Input type={"email"} placeholder="seuemail@gmail.com" />
    </Field>
  );
}
