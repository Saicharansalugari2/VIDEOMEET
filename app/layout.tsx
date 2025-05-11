import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Videomeet",
  description: "Video calling App",
  icons: {
    icon: "/icons/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
  signUpUrl="/sign-up" // Ensures Sign-Up appears first
  appearance={{
    layout: {
      socialButtonsVariant: "iconButton",
      logoImageUrl: "/icons/logo.jpg",
    },
    variables: {
      colorText: "#fff",
      colorPrimary: "#0E78F9",
      colorBackground: "#1C1F2E",
      colorInputBackground: "#252A41",
      colorInputText: "#fff",
    },
  }}
>
        <body className={`${inter.className} bg-black`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
