import { Progress } from "@nextui-org/react";

export default function SkillsProgress({ value, color }) {
  return (
    <>
      <Progress value={value} color={color} />
      <span className="px-4 pt-2">{value} %</span>
    </>
  );
}
