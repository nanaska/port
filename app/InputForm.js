'use client'
import {Input, Textarea, Button} from "@nextui-org/react";
import {useState} from "react";
import TestNot from "./testNot";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InputForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [additionalInfo, setAdditionalInfo] = useState("")
    const [infoVal, setInfoVal] = useState(0)
    const [nameVal, setNameVal] = useState(0)
    const [emailVal, setEmailVal] = useState(0)
    const notifyErr = () => toast.error('Something went wrong 🤒', {
        position: "top-right",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    const notifySuc = () => toast.success("Message sent. I'm very appreciate this 👽", {
        position: "top-right",
        autoClose: 4500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
    async function onSubmit() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                additionalInfo,
                name
            })
        }
        if (email.length > 0 && additionalInfo.length > 0 && name.length > 0) {
            fetch('api/message', requestOptions)
                .then(response => response.json())
                .then(data => {
                    notifySuc()
                    setInfoVal(1)
                    setNameVal(1)
                    setEmailVal(1)
                })
        } else {
            notifyErr()
            if (name.length == 0){
                setNameVal(2)
            }else {setNameVal(0)}
            if (email.length == 0){
                setEmailVal(2)
            }else{setEmailVal(0)}
            if (additionalInfo.length == 0){
                setInfoVal(2)
            }else{
                setInfoVal(0)
            }

        }

    }

// ДОДЕЛАТЬ ФУНКЦИОНАЛ В СЛУЧАЕ ЕСЛИ НЕ ВСЕ ПОЛЯ ЗАПОЛНЕНЫ ПОДСВЕЧИВАТЬ КРАСНЫМ
return (<div className="flex flex-col items-center justify-center">
    <div className="w-full grid grid-cols-1  md:grid-cols-2 place-items-stretch gap-x-0 gap-y-8 md:gap-y-0 md:gap-x-4 my-4">
        <Input
            helperText={`${nameVal === 0 ? "" : ""}${nameVal === 1 ? "" : ""}${nameVal === 2 ? "error" : ""}`}
            bordered
            labelPlaceholder="Name"
            className="w-full"
            value={name}
            onChange={(e) => {
            setName(e.target.value)
        }}
            initialValue=""/>
        <Input
            helperText={`${emailVal === 0 ? "" : ""}${emailVal == 1 ? "" : ""}${emailVal === 2 ? "error" : ""}`}
            bordered
            labelPlaceholder="Type hear your contacts"
            className="w-full"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value)
        }} initialValue=""/>
    </div>
    <div className="w-full grid grid-cols-1 place-items-stretch gap-x-4 my-2 mt-8">
        <Textarea
            helperText={`${infoVal === 0 ? "" : ""}${infoVal === 1 ? "" : ""}${infoVal === 2 ? "error" : ""}`}
            bordered
            value={additionalInfo} onChange={(e) => {
            setAdditionalInfo(e.target.value)
        }}
            labelPlaceholder="Your suggestion"
        />
        <Button ghost onClick={onSubmit} className="mt-4 hover:bg-[#fff] hover:text-black border-[#fff]" color="#fff"
                auto>Submit</Button>
    </div>
    <div className="w-full ">
        <ToastContainer />
    </div>
</div>)
}
