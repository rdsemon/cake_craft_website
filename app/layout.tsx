import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/navigation";
import { CartProvider } from "@/lib/cart-context";
import StoreProvider from "@/providers/storeProvider";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artisan Pâtisserie - Premium Handcrafted Cakes",
  description:
    "Discover exquisite handcrafted cakes and pastries made with premium ingredients. Custom orders welcome for your special celebrations.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#2d1f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        <StoreProvider>
          <CartProvider>
            <Toaster />
            <Navigation />
            {children}
            <Footer />
          </CartProvider>
        </StoreProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
