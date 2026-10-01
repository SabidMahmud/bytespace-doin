import React from "react";
import Link from "next/link";
import Image from "next/image";

export const RegisterHeader: React.FC = () => {
  return (
    <header className="flex items-center h-20 lg:h-[120px] shrink-0 z-50">
      <Link
        href="/"
        className="inline-flex items-center overflow-hidden h-[30px] lg:h-[37px] w-6 lg:w-[29px]"
      >
        <Image
          src="/logo.svg"
          alt="ByteSpace Logo"
          width={171}
          height={37}
          className="h-[30px] lg:h-[37px] w-auto max-w-none object-left object-contain"
          priority
          unoptimized
        />
      </Link>
    </header>
  );
};
