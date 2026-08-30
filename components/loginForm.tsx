"use client";
import AuthInput from "./authInput";
import { Mail, Lock } from "lucide-react";
import { FieldGroup } from "./ui/field";
import { useLoginMutation } from "@/services/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LoginInputs } from "@/types/formInput.types";
import FormButton from "./formButton";
import { redirect } from "next/navigation";

export default function LoginFrom() {
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmitForm = async (data: LoginInputs) => {
    console.log(data);
    try {
      await login(data).unwrap();
      toast.success("Login successful");
      reset();
      redirect("/");
    } catch (error: any) {
      toast.error(error.data.message || "someting went wrong");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FieldGroup>
        <AuthInput
          icon={<Mail size={18} />}
          label="Email"
          id="email"
          type="email"
          placeholder="your@gmail.com"
          registration={{
            ...register("email", { required: "Email is required" }),
          }}
          error={errors.email?.message}
        />
        <AuthInput
          icon={<Lock size={18} />}
          label="Password"
          id="password"
          type="password"
          placeholder="*******"
          registration={{
            ...register("password", { required: "Password is required" }),
          }}
          error={errors.password?.message}
        />
      </FieldGroup>
      <FormButton isLoading={isLoading}>Login</FormButton>
    </form>
  );
}
