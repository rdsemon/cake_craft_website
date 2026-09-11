"use client";
import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Eye, Lock, EyeOff } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface PassFieldProps {
  label: string;
  id: string;
  registration: UseFormRegisterReturn;
  error?: string;
}

export default function PasswordField({
  label,
  id,
  registration,
  error,
}: PassFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <Lock size={18} />
        </InputGroupAddon>
        <InputGroupInput
          id={id}
          {...registration}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
        />
        <InputGroupAddon align="inline-end">
          <button
            type="button"
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
          {error && <FieldError>{error}</FieldError>}
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
