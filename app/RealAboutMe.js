"use client";
import Image from "next/image";
import SkillsProgress from "./SkillsProgress";
import { Collapse } from "@nextui-org/react";

export default function RealAboutMe() {
  return (
    <div className="flex  w-full flex-col items-center justify-center ">
      <h2 className="mr-auto text-4xl mb-5">My skills</h2>
      <div className="flex flex-col  mr-auto items-center justify-center">
        <Collapse.Group>
          <Collapse title="Option A">
            <div className="my-3 border border-gray-500 p-4 rounded-xl flex  w-full min-w-[250px] md:min-w-[450px] items-center justify-center">
              <div>
                <Image
                  src={`/js-svgrepo-com.svg`}
                  alt="JavaScript logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex ml-2 w-full flex-col items-cener justify-between">
                <span className="mb-1 p-2 text-xl font-semibold">
                  <p>
                    I started write code in javascript 1.5 years ago.
                    <br /> There was a long pause period.{" "}
                  </p>
                </span>
                <SkillsProgress value={40} color={"warning"} />
              </div>
            </div>
          </Collapse>
          <Collapse title="Option B">
            <div className="my-3 flex border border-gray-500 p-4 rounded-xl w-full min-w-[250px] md:min-w-[450px] items-center justify-center">
              <div>
                <Image
                  src={`/react-svgrepo-com.svg`}
                  alt="React logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex ml-2 w-full flex-col items-cener justify-between">
                <span className="mb-1 p-2 text-xl font-semibold">
                  <p>
                    I could write e-commerce website on react without help from
                    google and youtube. I supose i good enough to work in TENZOR{" "}
                  </p>
                </span>
                <SkillsProgress value={70} />
              </div>
            </div>
          </Collapse>
        </Collapse.Group>
      </div>
    </div>
  );
}
