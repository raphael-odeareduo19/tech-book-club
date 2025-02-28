import dayjs from 'dayjs'
import { HiArrowNarrowUp } from "react-icons/hi"
import imgAvatars from "../assets/image-avatars.webp"
import Star from "./Star"

const Footer = () => {
    return (
        <footer className="footer bg-[#062630] text-white text-center px-5 py-10 rounded-t-xl">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-10 max-w-[600px] md:mx-auto md:items-center">
                <p className="text-4xl font-semibold font-[Martian_Mono] leading-[1.3]">Ready to debug your reading list?</p>
                <a className="uppercase font-[Martian_Mono] text-lg font-semibold tracking-tighter bg-transparent border-3 rounded-md p-4 flex items-center justify-center gap-8 shadow-lg hover:-translate-y-[2px] hover:shadow-xl transition-all duration-250 active:translate-y-[2px] active:opacity-70 active:shadow-none whitespace-nowrap" href="#pricing">
                    <span>Review Membership Options</span>
                    <HiArrowNarrowUp />
                </a>
                <div className="flex items-center gap-6 ">
                    <img className="w-32" src={imgAvatars} alt="customer-avatars" />
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>   
                        <p className="text-left font-lg font-[Inter]">
                            <span className="font-bold">200</span> 
                            <span>+ developers joined already</span>
                        </p>
                    </div>
                </div>
                <hr />
            </div>
            <p className="font-[Martian_Mono]">© {dayjs().year()} - Tech Book Club</p>
        </footer>
    )
}

export default Footer