"use client";
import { Navbar, Button, Text, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
export default function NavBarFor() {
  const [feg, setFeg] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFeg(true);
    }, 1200);
  }, []);
  return (
    <>
      {feg && (
        <Navbar className=" " isBordered variant="floating">
          <Navbar.Brand>
            <Text b className="text-xl" color="inherit" hideIn="xs">
              Denis Shakhov
            </Text>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#about">About me</Navbar.Link>
            <Navbar.Link href="#works">My expirience</Navbar.Link>
            <Navbar.Link href="#contactme">Contact me</Navbar.Link>
            <Navbar.Link href="https://github.com/nanaska?tab=repositories">
              <Image src={`/icons8-github.svg`} width={30} height={30} />
            </Navbar.Link>
            <Navbar.Link href="https://github.com/nanaska?tab=repositories">
              <Image src={`/icons8-telegram-app.svg`} width={30} height={30} />
              <i class="las la-language"></i>
            </Navbar.Link>
          </Navbar.Content>
        </Navbar>
      )}
    </>
  );
}
