import Link from 'next/link';
import { ArrowRight, ChevronRight, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const Button = ({ children, link, className, onClick, variant = 'primary-arrow' }) => {
    
    const renderContent = () => {
        switch (variant) {
            case 'secondary-glass':
                return (
                    <span className={cn('relative inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-white font-poppins font-medium text-base bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group', className)}>
                        <span>{children}</span>
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                );
            case 'gradient-glow':
                return (
                    <span className={cn('relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-poppins font-semibold text-base text-white bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:from-purple-600 hover:to-primary shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:shadow-[0_0_35px_rgba(99,102,241,0.8)] transition-all duration-500 hover:scale-105 active:scale-95 group', className)}>
                        <span>{children}</span>
                    </span>
                );
            case 'outline-pill':
                return (
                    <span className={cn('relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-poppins font-medium text-base text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group', className)}>
                        <span>{children}</span>
                    </span>
                );
            case 'dark-sleek':
                return (
                    <span className={cn('relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-poppins font-medium text-base text-white bg-zinc-900 hover:bg-black border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group', className)}>
                        <span>{children}</span>
                        <Send className="w-4 h-4 ml-2.5 text-primary group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </span>
                );
            case 'minimal-link':
                return (
                    <span className={cn('relative inline-flex items-center font-poppins font-semibold text-base text-primary hover:text-primary/80 transition-colors duration-200 group py-2', className)}>
                        <span className="border-b-2 border-primary/30 group-hover:border-primary pb-0.5 transition-colors">{children}</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                );
            case 'primary-arrow':
            default:
                return (
                    <div className={cn('relative bg-primary text-white font-medium text-[17px] px-4 py-4 pl-5 h-[3.3em] rounded-[0.7em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group w-fit', className)}>
                        <span className="mr-20 text-lg font-medium w-fit">{children}</span>
                        <div className="absolute right-[0.3em] bg-white h-[2.7em] w-[2.7em] rounded-[0.5em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#2348D0FF] active:scale-95">
                            <ArrowRight className="w-[1.1em] transition-transform duration-300 text-primary group-hover:translate-x-[0.1em]" />
                        </div>
                    </div>
                );
        }
    };

    if (!link) {
        return (
            <button onClick={onClick} aria-label={typeof children === 'string' ? children : 'Button'} className="focus:outline-none">
                {renderContent()}
            </button>
        );
    }

    return (
        <Link href={link} aria-label={typeof children === 'string' ? children : 'Button'} className="focus:outline-none">
            {renderContent()}
        </Link>
    );
};