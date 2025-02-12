import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Component/Footer";

export const metadata: Metadata = {
  title: "Le dressing de Nadia",
  description: "Site e-commerce de vêtements et accessoires pour femmes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
