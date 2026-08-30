import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { FieldError } from "@/components/ui/field";
import type { AuthInputProps } from "@/types/auth.types";

export default function AuthInput({
  icon,
  label,
  id,
  type,
  placeholder,
  registration,
  error,
}: AuthInputProps) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupAddon>{icon}</InputGroupAddon>
        <InputGroupInput
          id={id}
          type={type}
          placeholder={placeholder}
          {...registration}
        />
        {error && <FieldError>{error}</FieldError>}
      </InputGroup>
    </Field>
  );
}
