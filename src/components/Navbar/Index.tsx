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
import { SiSimplelogin } from "react-icons/si";
import { AcmeLogo } from "@/src/components/Navbar/Logo";
import { FaHome, FaUsers, FaBlog } from "react-icons/fa";
import { FaBookTanakh } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";

export default function App() {
  const menuItems = [
    <Link>
      <ul className="text-sky-700 font-bold flex flex-col p-4">
        <li className="hover:underline underline-offset-8 text-lg py-4 flex ">
          <FaHome size={25} className="mr-2" />
          <a href="/">HOME</a>
        </li>
        <li className="hover:underline underline-offset-8 text-lg py-4 flex ">
          <FaUsers size={25} className="mr-2" />
          <a href="/AboutUs">ABOUT US</a>
        </li>
        <li className="hover:underline underline-offset-8 text-lg py-4 flex ">
          <FaBookTanakh size={25} className="mr-2" />
          <a href="/Course">COURSE</a>
        </li>
        <li className="hover:underline underline-offset-8 text-lg py-4 flex ">
          <MdContacts size={25} className="mr-2" />
          <a href="/Contact">CONTACT US</a>
        </li>
        <li className="hover:underline underline-offset-8 text-lg py-4 flex ">
          <FaBlog size={25} className="mr-2" />
          <a href="/Blog">BLOG</a>
        </li>
        <li className="hover:underline underline-offset-2 text-lg py-4 flex ">
          <SiSimplelogin className="mr-2" size={25} />
          <a href="/Signup">SIGN UP</a>
        </li>
      </ul>
    </Link>,
  ];
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-2xl text-sky-700">KCA</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-5 animate-fadeIn"
        justify="center"
      >
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit text-3xl text-sky-700">KCA</p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            href="/"
            className="hover:underline underline-offset-2 font-bold text-sky-700"
          >
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/AboutUs"
            className="hover:underline underline-offset-2 font-bold text-sky-700 "
          >
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/Course"
            className="hover:underline underline-offset-2 font-bold text-sky-700 "
          >
            COURSE
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/Contact"
            className="hover:underline underline-offset-2 font-bold text-sky-700 "
          >
            CONTACT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/Blog"
            className="hover:underline underline-offset-2 font-bold text-sky-700 "
          >
            BLOG
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex animate-fadeIn">
          <Link
            className="text-sky-700 hover:underline underline-offset-2 font-bold"
            href="/Signup"
          >
            SIGN UP
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="text-sky-700 font-bold hover:bg-green-500 animate-fadeIn"
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
