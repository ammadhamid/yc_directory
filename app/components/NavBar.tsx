import Link from "next/link";
import React from "react";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";

async function NavBar() {
  const session = await auth();

  return (
    <header className="text-6xl  bg-white px-5 py-3 text-black text-center shadow-sm font-sans ">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-5 ">
          {session &&
            session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>

                <button type="button" onClick={signOut}>
                  <span>Logout</span>
                </button>

                <Link href={`/user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
                <button type="button" onClick={async ()=> {
                  await signIn(provider : 'github')
                }}>
                    <span>Login</span>
                </button>
            )}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
