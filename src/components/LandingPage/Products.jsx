"use client"

import { ChevronLeft, ChevronRight, CircleArrowRight} from "lucide-react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {useRef, useState} from "react";
import {tinaField} from "tinacms/dist/react";

export const Products = ({productsData = [], ...props}) => {

    const [products] = useState(productsData)


    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
       <div className={'w-full  justify-center gap-20 flex flex-col items-center py-20'}>
           <div className={'max-w-[1260px] flex flex-col md:flex-row justify-between items-end gap-5 px-5 xl:px-0 w-full'}>
            <div>
                <h1 data-tina-field={tinaField(props, 'title')} className={' font-bold font-josefin-sans text-4xl tracking-tighter'}>{props.title}</h1>
                <p data-tina-field={tinaField(props, 'description')} className={'text-balance text-lg opacity-75 w-full max-w-[800px]'}>{props.description}</p>
            </div>
               <div className={'gap-3 w-full flex flex-row flex-nowrap items-center justify-end'}>
                   <button ref={prevRef} className={'bg-primary  cursor-pointer text-white px-4 py-4 hover:bg-primary/80 transition-all duration-300 rounded-xl'}><ChevronLeft/></button>
                   <button ref={nextRef} className={'bg-primary  cursor-pointer text-white px-4 py-4 hover:bg-primary/80 transition-all duration-300 rounded-xl'}><ChevronRight/></button>
               </div>
           </div>
           <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={15}
               className={'w-full'}
               autoplay={{delay: 2000}}
               onBeforeInit={(swiper) => {
                   // Connect custom buttons
                   swiper.params.navigation.prevEl = prevRef.current;
                   swiper.params.navigation.nextEl = nextRef.current;
               }}
               navigation={{
                   prevEl: prevRef.current,
                   nextEl: nextRef.current,
               }}
               breakpoints={{
                   320: {
                       slidesPerView: 1,
                   },
                   640: {
                       slidesPerView: 2,
                   },
                   768: {
                       slidesPerView: 3,
                   },
                   850: {
                       slidesPerView: 3,
                   },
                   1000: {
                       slidesPerView: 4
                   },
                   1260: {
                       slidesPerView: 5
                   }
               }}
               loop={true}
           >
               {products?.map((product, index) => (
                   <SwiperSlide key={index} className={'w-full'}>
                       <div style={{
                           backgroundImage: `url('${product.image}')`,
                       }}  className={'relative hover:cursor-pointer p-5 w-full h-[600px] rounded-xl overflow-hidden'}>
                           <div className={'absolute top-0 left-0 bg-black/50 w-full h-full'} />
                         <div className={'absolute group space-y-3 top-0 left-0 w-full h-full p-5'}>
                             <p className={'text-xl font-josefin-sans font-bold text-white'}>{product.name}</p>
                             <div className={'flex opacity-0 group-hover:opacity-100 transition-all duration-300   flex-row items-end gap-1 text-white'}>
                                 <CircleArrowRight/> <p>View Details</p>
                             </div>
                         </div>
                       </div>
                   </SwiperSlide>
               ))}





           </Swiper>
       </div>
    )
}