import type { Metadata } from "next";
import "../assets/styles/reset.scss";
import "../assets/styles/global.scss";
import "../assets/styles/variables.scss";

export const metadata: Metadata = {
  title: "MA tool",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
