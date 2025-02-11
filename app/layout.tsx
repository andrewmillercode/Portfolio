import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/app/appContext";

export const metadata: Metadata = {
  title: "Andrew Miller",
  description: "My portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppProvider>
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
    </AppProvider>
  );
}
