"use client";
import { Navbar, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";

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

        <Navbar className={` ${feg ? "bg-opacity-100 opacity-100" : "bg-opacity-0 opacity-0"} text-white transition duration-100`} isBordered variant="floating">
          <Navbar.Brand >
            <Text b className="text-xl" color="inherit" hideIn="xs">
              Denis Shakhov
            </Text>
          </Navbar.Brand>
          <Navbar.Content >
            <Navbar.Link href="#"><span className="text-white">Home</span></Navbar.Link>
            <Navbar.Link href="#about"><span className="text-white">About me</span></Navbar.Link>
            <Navbar.Link href="#works"><span className="text-white">My expirience</span></Navbar.Link>
            <Navbar.Link href="#contactme"><span className="text-white">Contact me</span></Navbar.Link>
            <Navbar.Link href="https://github.com/nanaska?tab=repositories">
              <Image src={`/icons8-github.svg`} width={30} height={30} />
            </Navbar.Link>
            <Navbar.Link href="https://github.com/nanaska?tab=repositories">
              <Image src={`/icons8-telegram-app.svg`} width={30} height={30} />
              <i class="las la-language"></i>
            </Navbar.Link>
          </Navbar.Content>
        </Navbar>

    </>
  );
}
