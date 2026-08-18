import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
  error?: FieldError;
  hint?: string;
}

/**
 * Reusable input for auth forms: label + icon + input + validation message.
 * Styling matches the dark "coffee/clay" theme used across Login & SignUp.
 */
const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, icon, error, hint, id, ...rest }, ref) => {
    return (
      <div className="w-full">
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-semibold text-white sm:text-base"
        >
          {label}
        </label>

        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
            {icon}
          </span>

          <input
            id={id}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${id}-error` : hint ? `${id}-hint` : undefined
            }
            className={`w-full rounded-xl border bg-transparent py-3 pl-11 pr-4 text-white placeholder-white/40
              outline-none transition-colors duration-150
              focus:border-[#e2a373] focus:ring-1 focus:ring-[#e2a373]/40
              ${error ? "border-red-400/70" : "border-white/15"}`}
            {...rest}
          />
        </div>

        {hint && !error && (
          <p
            id={`${id}-hint`}
            className="mt-1.5 text-xs text-white/40 sm:text-sm"
          >
            {hint}
          </p>
        )}

        {error && (
          <p
            id={`${id}-error`}
            className="mt-1.5 text-xs text-red-400 sm:text-sm"
            role="alert"
          >
            {error.message}
          </p>
        )}
      </div>
    );
  },
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
