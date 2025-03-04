"use client";

import { SessionProvider } from "next-auth/react";
import NavBar from "../../components/NavBar";

export default function layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <main className="font-sans">
            <NavBar />
            {children}
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
