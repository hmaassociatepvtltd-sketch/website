"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {tinaField} from "tinacms/dist/react";
import Image from 'next/image';

export const OurPartners = ({partnersData = [], ...props}) => {
    return (
        <div className={'flex flex-col w-full bg-secondary-background justify-center items-center'}>
            <div className={'w-full px-5 lg:px-0 space-y-1 max-w-[1260px] py-36 text-white'}>
                <h1 data-tina-field={tinaField(props, "title")} className={'text-center font-bold font-josefin-sans text-4xl tracking-tighter'}>{props.title}</h1>
                <p data-tina-field={tinaField(props, "description")} className={'text-center mb-16 text-balance'}>{props.description}</p>

                <div className={'flex  justify-center items-center '}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        className="w-full"
                        slidesPerView={3}
                        spaceBetween={10}
                        breakpoints={{
                            320: {
                                slidesPerView: 3,
                            },
                            640: {
                                slidesPerView: 4,
                            },
                            768: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                            1280: {
                                slidesPerView: 7
                            },
                        }}
                        autoplay={{delay: 1000}}
                        loop={true}
                    >
                        {partnersData?.map((image, index) => (
                            <SwiperSlide className='min-h-[150px] !flex !justify-center !items-center' key={index}>
                                <Image width={200} height={200} className={'w-fit h-fit object-center object-cover'} src={image.image} alt={image+index} />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

        </div>
    )
}