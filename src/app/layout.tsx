import type { Metadata } from "next";
import "@/assets/css/globals.css";
import { TChildren } from "@/interfaces";

export const metadata: Metadata = {
  title: "My Blog App",
  description: "My First Blog App by DonPablitos",
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
