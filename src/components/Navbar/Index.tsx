import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

import { AcmeLogo } from "@/src/components/Navbar/Logo";
export default function App() {
  const menuItems = [
    <Link>
      <ul className="text-gray-900 font-bold">
        <li className="hover:underline underline-offset-8">
          <a href="/">HOME</a>
        </li>
        <li className="hover:underline underline-offset-8">
          <a href="/AboutUs">ABOUT US</a>
        </li>
        <li className="hover:underline underline-offset-8">
          <a href="/Course">COURSE</a>
        </li>
        <li className="hover:underline underline-offset-8">
          <a href="/Contact">CONTACT US</a>
        </li>
        <li className="hover:underline underline-offset-8">
          <a href="/Blog">BLOG</a>
        </li>
        <li className="hover:underline underline-offset-2">
          <a href="/Sigin">LOGIN</a>
        </li>
      </ul>
    </Link>,
  ];
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-2xl">KCA</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-3xl">KCA</p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            href="/"
            className="hover:underline underline-offset-2 font-bold text-gray-900"
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="/AboutUs"
            className="hover:underline underline-offset-2 font-bold text-gray-900 "
          >
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/Course"
            className="hover:underline underline-offset-2 font-bold text-gray-900 "
          >
            COURSE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/Contact"
            className="hover:underline underline-offset-2 font-bold text-gray-900 "
          >
            CONTACT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/Blog"
            className="hover:underline underline-offset-2 font-bold text-gray-900 "
          >
            BLOG
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link
            className="text-gray-900 hover:underline underline-offset-2 font-bold"
            href="/Signup"
          >
            SIGN UP
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-gray-900 font-bold hover:bg-green-500"
            href="/Signin"
            variant="flat"
          >
            LOG IN
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
