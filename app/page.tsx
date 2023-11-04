"use client";

import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center p-24">
      {session ? (
        <div className="p-4 max-w-md mx-auto">
          <pre>
            <code>{JSON.stringify(session?.user, null, 2)}</code>
          </pre>
        </div>
      ) : (
        <p className="text-3xl font-bold text-gray-400">
          Please sing in to get your Github information
        </p>
      )}
    </div>
  );
};

export default Home;
