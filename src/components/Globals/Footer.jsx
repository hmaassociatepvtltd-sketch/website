import {ArrowRight, Mail, Phone} from "lucide-react";
import Link from "next/link";
import {PiFacebookLogo, PiInstagramLogoFill} from "react-icons/pi";
import {SiFacebook, SiLinkedin} from "react-icons/si";
import {IoIosMail} from "react-icons/io";

export const Footer = () => {
    return (
       <div className={"w-full relative h-full flex flex-col items-center justify-center"}>
           <div style={{
               backgroundImage: "url('https://aptinverex.com/assets/img/update1/bg/subscribe-bg.jpg')",
           }} className={'rounded-xl absolute -top-0 hidden xl:flex -translate-y-1/2 w-full bg-cover bg-no-repeat p-20 max-w-[1260px] '}>
                   <h1 className={'text-4xl text-white font-bold tracking-tighter text-center font-josefin-sans'} >Ready to convert your home to solar?</h1>
           </div>
           <div className={'bg-secondary-background w-full flex justify-center flex-col items-center'}>

               <div className={'max-w-[1260px] px-5 xl:px-0 w-full pt-20 lg:pt-40 pb-28'}>
                   <div className={'grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid w-full gap-10'}>
                       <div className={'col-span-1 w-full flex flex-col gap-5'}>
                           <img className={'w-full sm:w-[200px] filter invert grayscale-100'} src={'/assets/logo.png'}/>
                           <p className={'text-white font-medium'}>Head Office: Gujranwala, Rahwali, Near Cennab
                               Gate</p>
                           <div className={'flex flex-row gap-3 items-center'}>
                               <button
                                   className="p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                               >
                                   <div
                                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                   ></div>
                                   <div className="relative text-white z-10">
                                       <IoIosMail  size={25}/>
                                   </div>
                               </button>
                               <p className={'text-white text-lg '}>info@hma.com</p>
                           </div>
                           <div className={'flex flex-row gap-3 items-center'}>
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
                               <p className={'text-white text-lg '}>+92-21-111-209-988</p>
                           </div>
                           <div className={'flex flex-row gap-3 items-center'}>


                               <button
                                   className="p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                               >
                                   <div
                                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                   ></div>
                                   <div className="relative text-white z-10">
                                       <PiInstagramLogoFill size={25}/>
                                   </div>
                               </button>
                               <button
                                   className="p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                               >
                                   <div
                                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                   ></div>
                                   <div className="relative text-white z-10">
                                       <SiLinkedin size={25}/>
                                   </div>
                               </button>
                               <button
                                   className="p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                               >
                                   <div
                                       className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                                   ></div>
                                   <div className="relative text-white z-10">
                                       <SiFacebook size={25}/>
                                   </div>
                               </button>



                           </div>
                       </div>
                       <div className={'col-span-1 w-full flex flex-col gap-5'}>
                           <h1 className={'text-white font-josefin-sans font-bold text-3xl'}>INFORMATIONS</h1>
                           <div className={'w-[150px] h-0.5 bg-white'}/>
                           <div className={'flex text-white flex-col gap-4'}>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> About Us</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> Contacts</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> Services</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> Work</Link>
                           </div>
                       </div>
                       <div className={'col-span-1 w-full flex flex-col gap-5'}>
                           <h1 className={'text-white font-josefin-sans font-bold text-3xl'}>PRODUCTS</h1>
                           <div className={'w-[150px] h-0.5 bg-white'}/>
                           <div className={'flex text-white flex-col gap-4'}>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> Solar Inverters</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> Solar Panels</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> Batteries</Link>
                           </div>
                       </div>
                       <div className={'col-span-1 w-full flex flex-col gap-5'}>
                           <h1 className={'text-white font-josefin-sans font-bold text-3xl'}>SERVICES</h1>
                           <div className={'w-[150px] h-0.5 bg-white'}/>
                           <div className={'flex text-white flex-col gap-4'}>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> SOLAR INSTALLATION</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> SOLAR PANELS</Link>
                               <Link className={'flex flex-row gap-1 items-center hover:opacity-85 font-semibold'}
                                     href={'/'}> <ArrowRight/> SOLAR INVERTERS</Link>
                           </div>
                       </div>
                   </div>
               </div>
               <div className={'w-full h-0.5 bg-secondary '}/>
               <div
                   className={'max-w-[1260px] px-5 xl:px-0 text-white flex flex-row justify-between items-center w-full py-10'}>
                   <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
                   <p>HMA Associates & Co</p>
               </div>
           </div>
       </div>
    )
}