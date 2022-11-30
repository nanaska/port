'use client'
import { Card, Text} from "@mantine/core"

export default function CardFor() {
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      css={{ mw: "400px" }}
    >
      <Card.Body>
        <Text>A pressable card.</Text>
      </Card.Body>
    </Card>
  )
}
