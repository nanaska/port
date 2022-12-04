import InputForm from "./InputForm"
export default function ContactForm(){
    return(<>

    <div id="contactme" className="flex flex-col border border-gray-400 md:w-1/2 w-full mx-4 md:mx-0 p-4 rounded-2xl">
        <div className="mx-auto text-2xl font-semibold">Contact me</div>
        <div className="w-full  border-gray-300 my-3"></div>
        <InputForm/>
    </div>


    </>)
}