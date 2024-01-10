import { useSession } from 'next-auth/react';
import React from 'react';

type Props = {
  seed?: string;
  large?: boolean;
  small?: boolean;
};

function Avatar({ seed, large, small }: Props) {
  const { data: session } = useSession();
  return (
    <div
      className={`relative overflow-hidden rounded-full
     border-gray-300 bg-white ${large && 'h-18 w-18'} ${small && 'h-10 w-10'}`}
    >
      <img
        width={100}
        height={100}
        alt="Avatar"
        src={`https://robohash.org/${seed || session?.user?.name}?set=set4`}
      />
    </div>
  );
}

export default Avatar;
