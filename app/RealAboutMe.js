import Image from "next/image";

export default function RealAboutMe(){
    return(<>
    <div className="flex items-center justify-center">
        <div className="w-1/2 font-bold text-xl flex items-center justify-center">I'm 19 years old student. I'm studying public policy in Yaroslavl State University. I wanna increase my skills and study new things.</div>
        <div className="w-1/2 grid grid-cols-4 place-items-center">
            <div className="hover:opacity-60 opacity-100"><Image src={`/js-svgrepo-com.svg`} width={50} height={50}/></div>

        </div>
    </div>
    
    
    </>)
}