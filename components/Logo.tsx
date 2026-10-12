"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import NextLink from "next/link";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted ? (resolvedTheme === "dark" ? "/slvv-black.png" : "/slvv-white.png") : "/slvv-white.png";

  return (
    <NextLink className="flex justify-start items-center gap-1" href="/">
      <Image alt="SLVV logo" width={52} height={52} src={logoSrc} />
    </NextLink>
  );
};
