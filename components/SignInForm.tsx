"use client";
import { useLoginMutation } from "@/services/authApi";
import { LoginInputs } from "@/types/formInput.types";
import { Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AuthInput from "./AuthInput";
import FormButton from "./formButton";
import PasswordField from "./PasswordField";
import { FieldGroup } from "./ui/field";

export default function LoginFrom() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>();

  const [login, { isLoading }] = useLoginMutation();

  const router = useRouter();

  const onSubmitForm = async (data: LoginInputs) => {
    try {
      await login(data).unwrap();
      toast.success("Login successful");
      reset();
      router.push("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message || "someting went wrong");
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

        <PasswordField
          label="Password"
          id="password"
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
