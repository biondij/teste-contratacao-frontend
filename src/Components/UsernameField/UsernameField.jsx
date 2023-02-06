import { Field, Input, Label } from "../Form/Form";

export function UsernameField(props) {
  return (
    <Field>
      <Label>Username</Label>
      <Input id="username" type={"text"} placeholder="UserDaMaria" />
    </Field>
  );
}
