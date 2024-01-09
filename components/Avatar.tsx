import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();
  return (
    <div
      className={`relative overflow-hidden rounded-full
     border-gray-300 bg-white ${large && 'h-10 w-10'}`}
    >
      <img
        width="50"
        height="50"
        alt="Avatar"
        src={`https://api.dicebear.com/7.x/micah/svg?${
          seed || session?.user?.name
        }`}
      />
    </div>
  );
}

export default Avatar;
