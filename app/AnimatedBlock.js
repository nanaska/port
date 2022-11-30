"use client"

import {motion} from "framer-motion"
import ButtonFor from "./ButtonFor"
import { useState } from "react"

export default function AnimatedBlock() {
    const [bg, setBg] = useState(false)
        return (
            <>
            <motion.div
            initial={{
            height: "100%"
                }}
            animate={{
        height: "0%"
            }}
        transition={{
            duration: 1.2
            }}
        onAnimationComplete={()=> {setBg(true)}}
        className="bg-white top-0 h-screen z-10 w-full absolute"></motion.div>
    {bg && <motion.div
        
        initial={{ opacity: 0, scale: 1, x: -300 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        className="mr-auto block px-4 md:px-0">
            <h1 id="home" className="text-4xl font-bold md:text-5xl">  Hi, my name is <span className="gradient-text ">Denis Shakhov.</span><br/> This is my portfolio
            </h1>
            <h2 className="font-normal text-base text-gray-400">Build fully functional accessible web applications with ease – Mantine includes more than 100 customizable components and hooks to cover you in any situation</h2>
            
            <ButtonFor className="m-2">More about me</ButtonFor>
    </motion.div>}
    </>)
}
