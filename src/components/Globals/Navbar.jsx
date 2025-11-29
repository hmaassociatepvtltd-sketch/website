"use client"

import Link from "next/link";
import {ChevronDown, ChevronRight, Menu} from "lucide-react";
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/Button";
import {motion, AnimatePresence} from 'motion/react'
import {useState} from "react";
import Image from "next/image";

export const Navbar = ({productTypes, serviceTypes, logo}) => {

    const [productsOpen, setProductsOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)

    return (
        <div className={'absolute top-0 left-0 pt-5 w-full px-5 xl:px-0 z-50 flex justify-center items-center'}>
          <div className={'w-full  max-w-[1260px] flex justify-between items-center'}>
              <Image width={50} height={50} alt={'Hma Solar Logo'} className={'w-20 xl:w-[100px]'}  src={logo} />
              <div className={'text-white hidden border-b-10 border-r-10 border-primary py-5 px-10 rounded-xl bg-secondary-background font-semibold lg:flex flex-row items-center gap-8'}>
                    <Link className={'hover:opacity-85'} href={'/'}>Home</Link>
                    <Link className={'hover:opacity-85'} href={'/about'}>About</Link>
                     <motion.div
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      animate={{opacity: 1}}
                      className={'relative group'}>
                      <p className={'hover:opacity-85 flex flex-row justify-center items-center gap-2 '} >Services <ChevronDown size={15} strokeWidth={5}/></p>
                      <AnimatePresence mode={'wait'}>
                          {servicesOpen && (
                              <motion.div
                                  initial={{opacity: 0, transform: 'translateY(-10%)' }}
                                  animate={{opacity: 1, transform: 'translateY(0%)' }}
                                  exit={{opacity: 0, transform: 'translateY(-10%)' }}
                                  transition={{duration: 0.2}}
                                  className={'absolute top-0 left-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 -translate-x-1/2 pt-[3.75rem]'}>
                                  <div className={'text-white border-b-[10px] border-r-[10px] border-primary py-5 px-10 rounded-b-xl bg-secondary-background font-semibold flex flex-col items-center gap-4'}>
                                      {Array.from(serviceTypes)?.map((item, idx) => (
                                          <Link key={idx} href={`/services/${item.replace(' ', '-')}`} className={'hover:opacity-85 whitespace-nowrap'}>{item}</Link>
                                      ))}
                                  </div>
                              </motion.div>
                          )}
                      </AnimatePresence>
                  </motion.div>
                   <motion.div
                       onMouseEnter={() => setProductsOpen(true)}
                       onMouseLeave={() => setProductsOpen(false)}
                       animate={{opacity: 1}}
                       className={'relative group'}>
                       <p className={'hover:opacity-85 flex flex-row justify-center items-center gap-2'} >Product <ChevronDown size={15} strokeWidth={5}/> </p>
                       <AnimatePresence mode={'wait'}>
                           {productsOpen && (
                               <motion.div
                                   initial={{opacity: 0, transform: 'translateY(-10%)' }}
                                   animate={{opacity: 1, transform: 'translateY(0%)' }}
                                   exit={{opacity: 0, transform: 'translateY(-10%)' }}
                                   transition={{duration: 0.2}}
                                   className={'absolute top-0 left-1/2 group-hover:opacity-100 opacity-0 transition-all duration-300 -translate-x-1/2 pt-[3.75rem]'}>
                                   <div className={'text-white border-b-[10px] border-r-[10px] border-primary py-5 px-10 rounded-b-xl bg-secondary-background font-semibold flex flex-col items-center gap-4'}>
                                       {Array.from(productTypes)?.map((item, idx) => (
                                           <Link key={idx} href={`/products/${item}`} className={'hover:opacity-85 whitespace-nowrap'}>{item}</Link>
                                       ))}
                                   </div>
                               </motion.div>
                           )}
                       </AnimatePresence>
                   </motion.div>
                    <Link className={'hover:opacity-85'} href={'/work'}>Projects</Link>
                    {/* <Link className={'hover:opacity-85'} href={'/ourclients'}>Clients</Link>
                    <Link className={'hover:opacity-85'} href={'/certifications'}>Certifications</Link> */}
                 
                  <Button link={'/#contact'} >Get Qoute</Button>
              </div>
              <div className={'lg:hidden flex flex-col items-center justify-center'}>
                  <Sheet >
                      <SheetTrigger asChild>
                          <div className={'bg-primary cursor-pointer text-white px-4 py-3 hover:bg-primary/80 transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'}>
                              <Menu className="h-6 w-6" />
                          </div>
                      </SheetTrigger>
                      <SheetContent side={'left'} className="flex flex-col p-0"> {/* Full height, padding, flex column */}
                          <SheetTitle className={'flex items-center gap-2 p-6 border-b border-gray-200'}>
                              <Image width={50} height={50} alt={'Hma Solar Logo'} className={'w-[70px] h-auto object-contain'} src={'/assets/logo.png'} />
                              <p className={'font-josefin-sans tracking-tight font-bold text-lg text-gray-800'}>HMA ASSOCIATES & CO</p>
                          </SheetTitle>

                          <nav className={'flex flex-col gap-1 py-4 overflow-y-auto flex-grow'}> {/* Scrollable navigation area */}
                              <Link href={'/'} className={'flex items-center gap-2 rounded-r-full pl-5 pr-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full font-medium'}>
                                  <ChevronRight className="h-4 w-4" /> Home
                              </Link>
                              <Link href={'/about'} className={'flex items-center gap-2 rounded-r-full pl-5 pr-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full font-medium'}>
                                  <ChevronRight className="h-4 w-4" /> About
                              </Link>

                              {/* Services Dropdown */}
                              <div>
                                  <button
                                      onClick={() => setServicesOpen(!servicesOpen)}
                                      className={`flex items-center gap-2 rounded-r-full pl-5 pr-4 py-3 w-full font-medium transition-colors duration-200 justify-between ${servicesOpen ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                                  >
                            <span className="flex items-center gap-2">
                                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? 'rotate-90 text-primary' : 'text-gray-500'}`} />
                                Services
                            </span>
                                      {servicesOpen ? <ChevronDown className="h-4 w-4 text-primary" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                                  </button>
                                  {servicesOpen && (
                                      <div className="flex flex-col mt-0.5 bg-gray-50 border-l-2 border-primary/20">
                                          {Array.from(serviceTypes)?.map((item, idx) => (
                                              <Link key={idx} href={`/services/${item.replace(' ', '-')}`} className={'pl-10 pr-4 py-4 text-gray-600 hover:bg-gray-100 transition-colors duration-200 w-full text-sm'}>
                                                  {item}
                                              </Link>
                                          ))}
                                      </div>
                                  )}
                              </div>

                              {/* Products Dropdown */}
                              <div>
                                  <button
                                      onClick={() => setProductsOpen(!productsOpen)}
                                      className={`flex items-center gap-2 rounded-r-full pl-5 pr-4 py-3 w-full font-medium transition-colors duration-200 justify-between ${productsOpen ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700 hover:bg-gray-100'}`}
                                  >
                            <span className="flex items-center gap-2">
                                <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${productsOpen ? 'rotate-90 text-primary' : 'text-gray-500'}`} />
                                Product
                            </span>
                                      {productsOpen ? <ChevronDown className="h-4 w-4 text-primary" /> : <ChevronRight className="h-4 w-4 text-gray-500" />}
                                  </button>
                                  {productsOpen && (
                                      <div className="flex flex-col mt-0.5 bg-gray-50 border-l-2 border-primary/20">
                                          {Array.from(productTypes)?.map((item, idx) => (
                                              <Link key={idx} href={`/products/${item}`} className={'pl-10 pr-4 py-4 text-gray-600 hover:bg-gray-100 transition-colors duration-200 w-full text-sm'}>
                                                  {item}
                                              </Link>
                                          ))}
                                      </div>
                                  )}
                              </div>

                              <Link href={'/work'} className={'flex items-center gap-2 rounded-r-full pl-5 pr-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 w-full font-medium'}>
                                  <ChevronRight className="h-4 w-4" /> Projects
                              </Link>
                          </nav>

                          {/* Get Quote Button (Pushed to bottom) */}
                          <div className="mt-auto p-4 border-t border-gray-200">
                              <Button
                                  className={'w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'}
                                  link={'/#contact'}
                              >
                                  Get Quote
                              </Button>
                          </div>
                      </SheetContent>
                  </Sheet>

              </div>
          </div>
        </div>
    )
}