"use client";
import { FieldGroup } from "@/components/ui/field";
import { useSignUpMutation } from "@/services/authApi";
import type { SignUpFormInputs } from "@/types/formInput.types";
import { Mail, User } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import AuthInput from "./AuthInput";
import FormButton from "./formButton";
import PasswordField from "./PasswordField";

export default function SingUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<SignUpFormInputs>();

  const password = watch("password");
  const [signUp, { isLoading }] = useSignUpMutation();
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    try {
      await signUp(data).unwrap();
      toast.success("Login successful");
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message || "something went wrong");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <AuthInput
            icon={<User size={18} />}
            label="Full Name"
            id="name"
            type="text"
            placeholder="john Doe"
            registration={register("name", {
              required: "This field is required",
            })}
            error={errors.name?.message}
          />
          <AuthInput
            icon={<Mail size={18} />}
            label="Email"
            id="email"
            type="email"
            placeholder="your@gmail.com"
            registration={register("email", { required: "Email is required" })}
            error={errors.email?.message}
          />

          <PasswordField
            label="Password"
            id="password"
            registration={register("password", {
              required: "Passwrod is required",
            })}
            error={errors?.password?.message}
          />

          <PasswordField
            label="Confirm Password"
            id="password"
            registration={register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === password || "Password dose not match",
            })}
            error={errors?.confirmPassword?.message}
          />
        </FieldGroup>
        <FormButton isLoading={isLoading}>Sign Up</FormButton>
      </form>
    </div>
  );
}
