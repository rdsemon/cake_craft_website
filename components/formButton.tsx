import { Button } from "@/components/ui/button";
import type { FormButtonProps } from "@/types/formInput.types";

export default function FormButton({
  isLoading,
  loadingText = "Loading...",
  children,
}: FormButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className="block mt-6 text-md w-full bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors uppercase"
    >
      {isLoading ? loadingText : children}
    </Button>
  );
}
