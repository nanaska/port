"use client";
import { User as Babe } from "@nextui-org/react";
export default function User({ src, name, size }) {
  return (
    <>
      <Babe src={src} name={name} size={size} />
    </>
  );
}
