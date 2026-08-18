import { Lock, User, Mail } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";

export default function SingUPForm() {
  return (
    <div>
      <form action="">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <User size={18} />
              </InputGroupAddon>
              <InputGroupInput id="name" type="text" placeholder="john doe" />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Mail size={18} />
              </InputGroupAddon>
              <InputGroupInput
                id="email"
                type="email"
                placeholder="youremail@gmail.com"
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Lock size={18} />
              </InputGroupAddon>
              <InputGroupInput
                id="password"
                type="password"
                placeholder="*******"
              />
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="confirmPassword">confirm password</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <Lock size={18} />
              </InputGroupAddon>
              <InputGroupInput
                id="confirmPassword"
                type="password"
                placeholder="*******"
              />
            </InputGroup>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
