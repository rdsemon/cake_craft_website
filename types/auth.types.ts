import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignUp extends UserLogin {
  name: string;
  confirmPassword: string;
}

export interface AuthInputProps {
  icon: ReactNode;
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: string;
}
