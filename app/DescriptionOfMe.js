"use client";
import Spacer from "./Spacer";
import Card from "./Card";
import FirstCard from "./firstCard";
import SecondCard from "./secondCard";
export default function DescriptionOfMe() {
  return (
    <Card>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="w-full">
          <div className="grid grid-cols-1 place-content-stretch gap-4 md:grid-cols-3 w-full rounded-2xl backdrop-blur-3xl ">
            <FirstCard />

            <SecondCard />
          </div>
        </div>
      </div>
    </Card>
  );
}
