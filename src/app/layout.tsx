import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo app for endpoint code test",
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
      </body>
    </html>
  );
}
