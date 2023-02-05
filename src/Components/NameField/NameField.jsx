import { Field, Input, Label } from "../Form/Form";

export function NameField(props) {
  return (
    <Field>
      <Label>Nome Completo</Label>
      <Input type={"text"} placeholder="Maria José" />
    </Field>
  );
}
