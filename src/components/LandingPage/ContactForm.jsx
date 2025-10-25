import { Copy, LocationEdit, Mail, Pencil, Phone, UserRound} from "lucide-react";
import {Button} from "@/components/ui/Button";

export const ContactForm = () => {
    return (
        <div className={'w-full bg-secondary-background justify-center items-center flex flex-col py-52'}>
            <div className={'max-w-[1260px] w-full items-center grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 px-5 xl:px-0'}>
                <div className={'space-y-5'}>
                    <p className={'text-primary font-bold font-josefin-sans text-xl tracking-tighter flex flex-row gap-1'}><Copy/> Let's Talk</p>
                    <p className={'text-white font-bold font-josefin-sans text-4xl tracking-tighter '}>You Get Free Consultation For Any Help</p>
                    <p className={'text-white text-md opacity-75'}>Unlock the potential of our cutting-edge solar solutions designed to energize your home or business sustainably. Connect with us today and take the first step toward a cleaner, smarter, and more eco-friendly future.</p>
                    <div className={'flex flex-row gap-4 items-center'}>

                        <button
                            className="p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                            ></div>
                            <div className="relative text-white z-10">
                                <Phone fill={'#ffffff'} size={25}/>
                            </div>
                        </button>
                        <div>
                            <p className={'text-white'}>Call Us Anytime:</p>
                            <p className={'text-2xl font-bold text-white'}>+92 300 1234567</p>
                        </div>
                    </div>
                    <Button link={'#'} >Contact</Button>
                </div>
                <div className={'bg-white rounded-xl w-full h-full px-7 py-10 space-y-5'}>
                    <h1 className={'text-4xl text-center font-bold font-josefin-sans '}>Request A Quote</h1>
                    <form className={'flex w-full flex-col gap-7 items-center'}>
                       <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                           <input className={'w-full outline-none focus:outline-none ring-0'} type="text" placeholder={'Your Name*'} />
                           <UserRound className={'opacity-25'}/>
                       </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input className={'w-full outline-none focus:outline-none ring-0'} type="email" placeholder={'Email Address*'} />
                            <Mail className={'opacity-25'}/>
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input className={'w-full outline-none focus:outline-none ring-0'} type="number" placeholder={'Phone Number*'} />
                            <Phone className={'opacity-25'}/>
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input className={'w-full outline-none focus:outline-none ring-0'} type="text" placeholder={'City*'} />
                            <LocationEdit className={'opacity-25'}/>
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <textarea rows={6} className={'w-full outline-none focus:outline-none ring-0'}  placeholder={'Write Your Message*'} />
                            <Pencil className={'opacity-25'}/>
                        </div>
                       <Button className={'w-full '} link={'/'} >Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}