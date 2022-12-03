'use client'
import { Input, Textarea, Button} from "@nextui-org/react";
import {useState} from "react";

export default function InputForm(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [additionalInfo, setAdditionalInfo] = useState("")
    return(<div className="flex flex-col items-center justify-center">
        <div className="w-full grid grid-cols-2 place-items-stretch gap-x-4 my-2">
            <Input  bordered  labelPlaceholder="Name" className="w-full"  value={name} onChange={(e)=>{setName(e.target.value)}} initialValue="" />
            <Input bordered  labelPlaceholder="Email"  className="w-full" value={email} onChange={(e)=>{setEmail(e.target.value)}} initialValue="" />
        </div>
        <div className="w-full grid grid-cols-1 place-items-stretch gap-x-4 my-2 mt-8">
            <Textarea
                bordered
                value={additionalInfo} onChange={(e)=>{setAdditionalInfo(e.target.value)}}
                labelPlaceholder="Your suggestion"
            />
            <Button ghost  className="mt-4 hover:bg-[#fff] hover:text-black border-[#fff]" color="#fff" auto>Submit</Button>
        </div>
        <div className="w-full ">

        </div>
    </div>)
}