"use client";
import { Card, Link, Col, Row, Button, Text } from "@nextui-org/react";

export default function CardOfItem({
  linkToWebsite,
  descOfWebsite,
  realLink,
  image,
  descAboutTheDoneWork,
}) {
  return (
    <Card css={{ w: "100%", h: "400px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {linkToWebsite}
          </Text>
          <Text h3 color="white">
            {descOfWebsite}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={image}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>{descAboutTheDoneWork}</Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#94f9f0", bg: "#94f9f026" }}
              >
                <span className="text-inherit font-bold uppercase text-[12px]">
                  <a href={realLink}>Посмотреть работу</a>
                </span>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
