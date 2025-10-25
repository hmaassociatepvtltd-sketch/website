import Link from "next/link";
import { ChevronRight, Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/Button";

export const Navbar = () => {
    return (
        <div className={'fixed top-0 left-0 pt-5 w-full px-5 xl:px-0 z-50 flex justify-center items-center'}>
          <div className={'w-full  max-w-[1260px] flex justify-between items-center'}>
              <img alt={'Hma Solar Logo'} className={'w-[100px]'}  src={'/assets/logo.png'} />
              <div className={'text-white hidden border-b-[10px] border-r-[10px] border-primary py-5 px-10 rounded-xl bg-secondary-background font-semibold lg:flex flex-row items-center gap-8'}>
                    <Link className={'hover:opacity-85'} href={'/'}>Home</Link>
                    <Link className={'hover:opacity-85'} href={'/about'}>About</Link>
                    <Link className={'hover:opacity-85'} href={'/'}>Services</Link>
                    <Link className={'hover:opacity-85'} href={'/'}>Product</Link>
                    <Link className={'hover:opacity-85'} href={'/work'}>Work</Link>
                  <Button link={'/'} >Get Qoute</Button>
              </div>
              <div className={'lg:hidden flex flex-col items-center justify-center'}>
                 <Sheet >
                     <SheetTrigger asChild>
                         <button className={'bg-primary cursor-pointer text-white px-4 py-4 hover:bg-primary/80 transition-all duration-300 rounded-xl'}>
                             <Menu/>
                         </button>
                     </SheetTrigger>
                     <SheetContent side={'left'}>
                        <SheetTitle className={'flex flex-row gap-2 items-center'}>
                            <img alt={'Hma Solar Logo'} className={'w-[100px]'}  src={'/assets/logo.png'} />
                            <p className={' font-josefin-sans tracking-tighter font-bold text-lg'}>HMA ASSOCIATES & CO</p>
                        </SheetTitle>
                         <div className={'flex flex-col gap-5 px-5 py-10'}>
                             <Link className={'hover:opacity-85 flex flex-row gap-1 items-center'} href={'/'}> <ChevronRight/> Home</Link>
                             <Link className={'hover:opacity-85 flex flex-row gap-1 items-center'} href={'/about'}> <ChevronRight/> About</Link>
                             <Link className={'hover:opacity-85 flex flex-row gap-1 items-center'} href={'/'}> <ChevronRight/> Services</Link>
                             <Link className={'hover:opacity-85 flex flex-row gap-1 items-center'} href={'/'}> <ChevronRight/> Product</Link>
                             <Link className={'hover:opacity-85 flex flex-row gap-1 items-center'} href={'/work'}> <ChevronRight/> Work</Link>
                             <Button className={'w-full'} link={'/'} >Get Qoute</Button>
                         </div>
                     </SheetContent>
                 </Sheet>

              </div>
          </div>
        </div>
    )
}