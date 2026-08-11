import { auth } from "@/lib/auth";
import { AuthForm } from "@/components/auth-form";
import { Navigation } from "@/components/navigation";
import Link from "next/link";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In - Artisan Pâtisserie",
  description: "Sign in to your Artisan Pâtisserie account",
};

export default async function SignInPage() {
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
              Welcome Back
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <AuthForm mode="sign-in" />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-muted-foreground">
                  Don&apos;t have an account?
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <Link
              href="/sign-up"
              className="block w-full text-center px-4 py-2 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Create Account
            </Link>
          </div>

          {/* Guest Checkout Info */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            Not ready to sign up? You can still{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
              checkout as a guest
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
