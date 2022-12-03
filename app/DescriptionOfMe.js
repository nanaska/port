import User from "./User";
import Spacer from "./Spacer";
export default function DescriptionOfMe() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="flex flex-col  rounded-2xl backdrop-blur-3xl ">
            <div className="">
              <User
                src="https://res.cloudinary.com/dd7z5d3qu/image/upload/v1669828242/photo_2022-09-17_00-36-08_cut-photo.ru_mq2pgq.png"
                name="Denis Shakhov"
                size="md"
              />
            </div>
            <div className="w-full border-b mt-2 border-gray-500 "></div>
            <Spacer x={3} y={1} />
            <div>
              goprtosgopeg sdrgsdrgs rdfgs ykrgyksrdgysdrg syg yugsr us yuyu a
              va faef gyuasefu asyuefva se fasef aseyf asv ise favse aseyusef
              yuasef yuiasf tyuasef ugyasut yieft ua
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
