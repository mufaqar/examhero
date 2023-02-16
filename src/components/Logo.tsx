import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiteLogo } from '../../public/images/imports'

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={SiteLogo}
        alt="logo"
        className="rounded-lg cursor-pointer"
        width={63}
        height={63}
      />
    </Link>
  );
};

export default Logo;
