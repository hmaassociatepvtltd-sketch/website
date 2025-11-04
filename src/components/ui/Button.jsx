import Link from 'next/link'
import {ArrowRight} from "lucide-react";
import {cn} from "@/lib/utils";

export const Button = ({children, link, className}) => {
    return (
        <Link
            href={link}
aria-label={children}
            className={cn('relative bg-primary text-white font-medium text-[17px] px-4 py-4 pl-5 h-[3.3em] rounded-[0.7em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group w-fit', className)}
        >
            <span className="mr-20 text-lg font-medium w-fit">{children}</span>
            <div
                className="absolute right-[0.3em] bg-white h-[2.7em] w-[2.7em] rounded-[0.5em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#2348D0FF] active:scale-95"
            >
                <ArrowRight className="w-[1.1em] transition-transform duration-300 text-primary group-hover:translate-x-[0.1em]" />
            </div>
        </Link>

    )
}