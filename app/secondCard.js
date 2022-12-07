import Image from "next/image";

export default function SecondCard() {
    return (
        <div className="col-span-2 gap-4 grid grid-rows-2 ">
            <div className="grid grid-cols-3  border-gray-700 rounded-xl ">

                <div className="flex mx-2 border h-full rounded-xl p-4 flex-col items-center justify-between">
                    <div className="">
                        <span className="py-auto text-xl font-bold">Завершенных проектов</span>
                    </div>
                    <div className="w-full border-b border-gray-700"></div>
                    <div className="flex items-center justify-center">
                        <span className="py-auto mr-0.5 font-bold text-2xl">4</span>
                        <Image className="ml-0.5" src={`/icons8-github.svg`} width={30} height={30} />
                    </div>
                </div>

                <div className="flex mx-2 border h-full col-span-2 rounded-xl p-4 flex-col items-center justify-between">
                    <div className="">
                        <span className="py-auto text-xl font-bold">Завершенных проектов</span>
                    </div>
                    <div className="w-full border-b border-gray-700"></div>
                    <div className="flex items-center justify-center">
                        <span className="py-auto">4</span>
                    </div>
                </div>

            </div>
            <div>123</div>
        </div>
    );
}
