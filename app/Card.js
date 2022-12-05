'use client'
import { Card as Jopa, Text} from "@nextui-org/react";

export default function Card({children}){
    return(<div className="flex w-full items-center justify-center border border-gray-500 p-4 rounded-2xl">
    
    
            {children}
            
        
    </div>)
}