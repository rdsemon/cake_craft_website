"use client";
import React, { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import { Eye, Lock, EyeOff } from "lucide-react";

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Field>
      <FieldLabel htmlFor="password">Password</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <Lock size={18} />
        </InputGroupAddon>
        <InputGroupInput
          id="password"
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
        </InputGroupAddon>
      </InputGroup>
    </Field>
  );
}
