"use client";
import { Card, Text } from "@nextui-org/react";

export default function SecondCard() {
  return (
    <div className="col-span-2 gap-4 grid grid-rows-2 ">
      <Card>
        <Card.Body>
          <div>javascript</div>
        </Card.Body>
      </Card>
      <div>123</div>
    </div>
  );
}
