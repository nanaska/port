'use client'
import Image from "next/image";
import { useState } from "react";

export default function RealAboutMe(){
    const [opac, setOpacity] = useState(false)
    return(<>
    <div className="flex items-center justify-center">
        <div className="w-1/2 font-bold text-xl flex items-center justify-center">I'm 19 years old student. I'm studying public policy in Yaroslavl State University. I wanna increase my skills and study new things.</div>
        <div className="w-1/2 grid grid-cols-4 place-items-center">
            <div onMouseLeave={()=>{setOpacity(false)}} onMouseEnter={()=> {setOpacity(true)}} className = {`${opac ? "opacity-50" : "opacity-100" } transition duration-100 p-1 rounded-[180px] `}><Image src={`/js-svgrepo-com.svg`} width={50} height={50}/></div>

        </div>
    </div>
    
    
    </>)
}