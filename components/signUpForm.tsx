import { Lock, User, Mail } from "lucide-react";
import AuthInput from "./authInput";
import { FieldGroup } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function SingUPForm() {
  return (
    <div>
      <form action="">
        <FieldGroup>
          <AuthInput
            icon={<User size={18} />}
            label="Full Name"
            id="name"
            type="text"
            placeholder="john Doe"
          />
          <AuthInput
            icon={<Mail size={18} />}
            label="Email"
            id="email"
            type="email"
            placeholder="your@gmail.com"
          />
          <AuthInput
            icon={<Lock size={18} />}
            label="Password"
            id="password"
            type="password"
            placeholder="*******"
          />
          <AuthInput
            icon={<Lock size={18} />}
            label="Confirm Password"
            id="password"
            type="password"
            placeholder="*******"
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
