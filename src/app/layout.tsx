import type { Metadata } from "next";
import "./globals.css";
import { fontRoboto } from "@/lib/font";

export const metadata: Metadata = {
  title: "CALIZER",
  description: "Multipurpose calory management made simple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontRoboto.className} antialiased`}>{children}</body>
    </html>
  );
}
