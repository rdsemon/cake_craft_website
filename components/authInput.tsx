import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldError } from "@/components/ui/field";

interface AuthInputProps {
  icon: ReactNode;
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

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
