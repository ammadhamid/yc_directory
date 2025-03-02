"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

function NavBar() {
  const { data: session } = useSession();

  return (
    <header className="text-2xl bg-white px-5 py-3 text-black shadow-sm font-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-5">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <button
                type="button"
                onClick={() => signOut()}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>

              <Link href={`/user/${session.user.id || ""}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => signIn("github")}
                className="shadow-2xl bg-zinc-600 text-white px-4 py-2 rounded-md"
              >
                Github
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
