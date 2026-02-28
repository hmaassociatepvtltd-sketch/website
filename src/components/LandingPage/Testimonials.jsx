
"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {tinaField} from "tinacms/dist/react";
import {useState} from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export const Testimonials = (props) => {

    const [testimonials] = useState(props?.items)

    return (
        <div style={{
            backgroundImage: `url('https://aptinverex.com/assets/img/update1/bg/cta_bg_2.jpg')`,
        }} className={'w-full relative justify-center gap-20 flex flex-col items-center py-24'}>
            <div className={'w-full h-full bg-gradient-to-r from-25% from-secondary-background to-transparent absolute top-0 left-0 z-0'} />
            <div className={'max-w-[1260px] z-20 inset-0 flex flex-col gap-20 justify-between items-end  px-5 xl:px-0 w-full'}>
                <div className={'text-white w-full flex flex-col justify-center items-center'}>
                    <h1 data-tina-field={tinaField(props, "title")} className={' text-center font-bold font-josefin-sans text-4xl tracking-tighter'}>{props.title}</h1>
                    <p data-tina-field={tinaField(props, "description")} className={' text-center max-w-[1000px] text-balance'}>{props.description}</p>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={3}
                    className={'w-full '}
                    autoplay={{delay: 2000}}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        1260: {
                            slidesPerView: 3
                        }
                    }}
                    loop={true}
                >
                    {testimonials?.map((testimonial, index) => (
                               <SwiperSlide>
                                   <div  className={" space-y-5 h-[400px] flex flex-col justify-between p-8 rounded-xl bg-white"}>
                                    {/* <p className="font-bold text-primary" data-tina-field={tinaField(testimonial, "heading")}>{testimonial.heading || 'Cantt Project'}</p> */}
                                       <p data-tina-field={tinaField(testimonial, "message")}>{testimonial.message}</p>
                                       <div>
                                           <p data-tina-field={tinaField(testimonial, "name")} className={'font-bold text-primary '}>{testimonial.name}</p>
                                           <p data-tina-field={tinaField(testimonial, "text")} className={'font-poppins text-sm opacity-75 tracking-normal'}>{testimonial.position}</p>
                                       </div>
                                   </div>
                               </SwiperSlide>
                        )
                    )}





                </Swiper>

            </div>

        </div>
    )
}