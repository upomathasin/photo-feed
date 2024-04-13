import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px]"
        src="/lws_logo.png"
        width={100}
        height={165}
        alt="Lws"
      />
    </Link>
  );
}
