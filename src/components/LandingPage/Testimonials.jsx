"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const testimonials = [
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
    {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat placerat. Nullam nec metus vel ante feugiat placerat.',
        name: 'John Doe',
        position: 'CEO, Company'
    },
]

export const Testimonials = () => {

    return (
        <div style={{
            backgroundImage: `url('https://aptinverex.com/assets/img/update1/bg/cta_bg_2.jpg')`,
        }} className={'w-full relative justify-center gap-20 flex flex-col items-center py-52'}>
            <div className={'w-full h-full bg-gradient-to-r from-25% from-secondary-background to-transparent absolute top-0 left-0 z-0'} />
            <div className={'max-w-[1260px] z-20 inset-0 flex flex-col gap-20 justify-between items-end  px-5 xl:px-0 w-full'}>
                <div className={'text-white w-full flex flex-col justify-center items-center'}>
                    <h1 className={' text-center font-bold font-josefin-sans text-4xl tracking-tighter'}>Testimonials</h1>
                    <p className={' text-center max-w-[1000px] text-balance'}>We offer a wide range of solar products and solutions to help you harness the power of the sun and reduce your carbon footprint.</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={15}
                    className={'w-full'}
                    autoplay={{delay: 2000}}

                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1260: {
                            slidesPerView: 3
                        }
                    }}
                    loop={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className={'w-full'}>
                            <div className={"w-full space-y-5 h-full p-8 rounded-xl bg-white"}>
                                <p>{testimonial.text}</p>
                               <div>
                                   <p className={'font-bold text-primary '}>{testimonial.name}</p>
                                   <p className={'font-poppins text-sm opacity-75 tracking-normal'}>{testimonial.position}</p>
                               </div>
                            </div>
                        </SwiperSlide>
                    ))}





                </Swiper>

            </div>

        </div>
    )
}