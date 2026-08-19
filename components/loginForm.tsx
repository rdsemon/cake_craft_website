import AuthInput from "./authInput";
import { Mail, Lock } from "lucide-react";
import { FieldGroup } from "./ui/field";
export default function LoginFrom() {
  return (
    <form action="">
      <FieldGroup>
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
      </FieldGroup>
    </form>
  );
}
