import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { MdDevices } from "react-icons/md";
import Image from "next/image";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky" height={54} className="bg-white shadow-sm dark:bg-black">
      <NavbarContent className="basis-1/5 sm:basis-full relative g-1" justify="start">
        <NavbarBrand as="li" className=" max-w-fit">
          <Logo />
        </NavbarBrand>
        <ul className="hidden lg:flex gap-3 justify-start">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal target="_blanc" aria-label="Linkedin" href={siteConfig.links.mail}>
            <IoMdMail className="text-default-500 text-2xl" />
          </Link>
          <Link isExternal target="_blanc" aria-label="Telegram" href={siteConfig.links.telegram}>
            <FaTelegramPlane className="text-default-500 text-2xl" />
          </Link>
          <Link isExternal target="_blanc" aria-label="Github" href={siteConfig.links.github}>
            <FaGithub className="text-default-500 text-2xl" />
          </Link>
          <Link isExternal target="_blanc" aria-label="Linkedin" href={siteConfig.links.linkedin}>
            <BsLinkedin className="text-default-500 text-2xl" />
          </Link>

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Telegram" href={siteConfig.links.telegram}>
          <FaTelegramPlane className="text-default-500 text-2xl" />
        </Link>
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <FaGithub className="text-default-500 text-2xl" />
        </Link>
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <BsLinkedin className="text-default-500 text-2xl" />
        </Link>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
