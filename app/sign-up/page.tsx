import { auth } from "@/lib/auth";
import { AuthForm } from "@/components/auth-form";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Artisan Pâtisserie",
  description: "Create a new Artisan Pâtisserie account",
};

export default async function SignUpPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Join Us
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Create an account to save your preferences and orders
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <AuthForm mode="sign-up" />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">
                  Already have an account?
                </span>
              </div>
            </div>

            {/* Sign In Link */}
            <Link
              href="/sign-in"
              className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign In
            </Link>
          </div>

          {/* Benefits */}
          <div className="bg-secondary/30 border border-secondary/50 rounded-lg p-4 space-y-2">
            <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
              Benefits of creating an account:
            </p>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                Save your favorite cakes
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                Track your orders
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                Faster checkout
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                Exclusive offers
              </li>
            </ul>
          </div>

          {/* Guest Checkout Info */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            Prefer to browse first? Continue{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
              shopping
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
