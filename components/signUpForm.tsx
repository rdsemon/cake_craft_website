"use client";
import { Lock, User, Mail } from "lucide-react";
import AuthInput from "./authInput";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SingUPForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("i got the click");
    console.log(data);
    console.log(errors);
    reset();
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
            registration={register("name", { required: true })}
          />
          <AuthInput
            icon={<Mail size={18} />}
            label="Email"
            id="email"
            type="email"
            placeholder="your@gmail.com"
            registration={register("email", { required: true })}
          />
          <AuthInput
            icon={<Lock size={18} />}
            label="Password"
            id="password"
            type="password"
            placeholder="*******"
            registration={register("password", { required: true })}
          />
          <AuthInput
            icon={<Lock size={18} />}
            label="Confirm Password"
            id="password"
            type="password"
            placeholder="*******"
            registration={register("confirmPassword", { required: true })}
          />
        </FieldGroup>
        <Button
          type="submit"
          className="block mt-6 text-md w-full bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors uppercase"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
