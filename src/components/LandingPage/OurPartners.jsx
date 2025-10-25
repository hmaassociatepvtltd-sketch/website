"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const partnerImages = [
    "https://www.hmago.com/wp-content/uploads/2023/07/1a7dced5-1479-4837-9573-1d162b908268.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/cc81f62d-3cc8-4833-8768-74f10d13a83b.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/6453c610-bfe9-4a0e-bd91-460a6706335f.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/08/6f9ef398-bca9-428f-a6b1-7aa10493d63f.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/6e477159-d10b-4eee-b2fa-de284b8a48b9-1.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/1a7dced5-1479-4837-9573-1d162b908268.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/cc81f62d-3cc8-4833-8768-74f10d13a83b.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/6453c610-bfe9-4a0e-bd91-460a6706335f.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/08/6f9ef398-bca9-428f-a6b1-7aa10493d63f.jpg",
    "https://www.hmago.com/wp-content/uploads/2023/07/6e477159-d10b-4eee-b2fa-de284b8a48b9-1.jpg"
]

export const OurPartners = () => {
    return (
        <div className={'flex flex-col w-full bg-secondary-background justify-center items-center'}>
            <div className={'w-full px-5 lg:px-0 space-y-1 max-w-[1260px] py-36 text-white'}>
                <h1 className={'text-center font-bold font-josefin-sans text-4xl tracking-tighter'}>Our Associate Partners</h1>
                <p className={'text-center mb-16 text-balance'}>We highly value our associate partners across diverse industries and foster our strategic relationships with a foundation of transparency, trust, and mutual growth.</p>

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
                        autoplay={{delay: 2000}}
                        loop={true}
                    >
                        {partnerImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img className={'max-w-[200px] grayscale-100 rounded-full w-full h-full aspect-square max-h-[200px] object-cover'} src={image} alt="" />
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>

        </div>
    )
}