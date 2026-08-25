import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { ReactNode } from "react";

interface AuthInputProps {
  icon: ReactNode;
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
}

export default function AuthInput({
  icon,
  label,
  id,
  type,
  placeholder,
}: AuthInputProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupAddon>{icon}</InputGroupAddon>
        <InputGroupInput id={id} type={type} placeholder={placeholder} />
      </InputGroup>
    </Field>
  );
}
