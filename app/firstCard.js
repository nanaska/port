import User from "./User";
import { Card, Grid, Text } from "@nextui-org/react";

export default function FirstCard() {
  return (
    <div className="">
      <Card variant="bordered">
        <Card.Body>
          <div className="">
            <User
              src="https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669828242/photo_2022-09-17_00-36-08_cut-photo.ru_mq2pgq.png"
              name="Denis Shakhov"
              size="md"
            />
          </div>
          <div className="w-full my-2 border-b border-spacing-4 border-gray-300"></div>
          <Text className="text-justify">
            Меня зовут Денис. Учусь по специальности: Публичная политика и
            социальные науки в ЯрГУ им. П.Г. Демидова. Интересуюсь
            програмированием более 1 года. Из наиболее интересных для меня
            языков програмирования это python и javascript. Имею опыт фриланса.
            Считаю, что имею хороший уровень английского языка. В основном
            работал с javascript, react, next js, tailwind, git, python,
            postgresql
          </Text>
        </Card.Body>
      </Card>
    </div>
  );
}
