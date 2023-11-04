"use client";

import Link from "next/link";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Info } from "lucide-react";

const Header = () => {
  const { data: user } = useSession();

  return (
    <header className="flex gap-4 justify-between items-center p-4 md:px-20 border-b">
      <Link href="/" className="flex gap-2 items-center">
        <Info />
        <h2 className="text-2xl font-semibold">GithInfo</h2>
      </Link>

      <nav>
        <ul>
          <li>
            {user ? (
              <span className="flex gap-2">
                <Avatar>
                  <AvatarImage
                    src={user?.user?.image!}
                    alt={user?.user?.name!}
                  />
                  <AvatarFallback>
                    {user?.user?.name?.toLocaleUpperCase()?.at(0)}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </span>
            ) : (
              <Button variant="secondary" onClick={() => signIn("github")}>
                <Github className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
