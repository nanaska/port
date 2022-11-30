'use client'
import { Button } from "@nextui-org/react";


export default function ButtonFor({children}) {
  return <Button color="gradient" size="sm">{children}</Button>;
}