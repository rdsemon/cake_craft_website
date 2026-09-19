"use client";

import { useCart } from "@/lib/cart-context";
import { authApi, useGetMeQuery, useLogoutMutation } from "@/services/authApi";
import { LogOut, Menu, ShoppingCart, User, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const router = useRouter();
  const { data, isLoading: isUserLoading } = useGetMeQuery();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const user = data?.data;
  const handleLogout = async () => {
    try {
      await logout().unwrap();
      toast.success("Logout Successful");
      setIsUserMenuOpen(false);
      setIsOpen(false);
      router.push("/sign-in");
      dispatch(authApi.util.resetApiState());
    } catch (error) {
      toast.error("Logout Fail");
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto max-w-7xl px- sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-serif font-bold text-primary">
              Cake
            </div>

            <span className="hidden text-sm text-muted-foreground  sm:inline">
              Craft Website
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/collections"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Collections
            </Link>

            <Link
              href="/custome-orders"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Custom Orders
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>

            <Link
              href="/newsletter"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* CART */}
            <Link
              href="/cart"
              className="relative p-2 hover:text-primary transition-colors"
            >
              <ShoppingCart size={20} />

              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 bg-accent rounded-full text-xs text-accent-foreground flex items-center justify-center font-semibold">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* USER */}
            {!isUserLoading && (
              <>
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsUserMenuOpen((prev) => !prev)}
                      className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {user.image ? (
                        <img
                          src={user.image}
                          alt={user.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <User size={18} />
                      )}

                      <span className="truncate max-w-25 uppercase">
                        {user.name}
                      </span>
                    </button>

                    {/* USER MENU */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                        <Link
                          href="/"
                          className="block px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Dashboard
                        </Link>

                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
                        >
                          <LogOut size={16} />
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="/sign-in"
                    className="hidden sm:block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Sign In
                  </Link>
                )}
              </>
            )}

            {/* MOBILE MENU */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 flex flex-col gap-4">
            <Link
              href="/collections"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Collections
            </Link>

            <Link
              href="/custome-orders"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Custom Orders
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>

            <Link
              href="/newsletter"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>

            {!isUserLoading &&
              (user ? (
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors text-left flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sign Out
                </button>
              ) : (
                <Link
                  href="/sign-in"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  Sign In
                </Link>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
}
