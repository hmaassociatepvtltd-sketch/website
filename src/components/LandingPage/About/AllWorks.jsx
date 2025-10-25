"use client"

import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export const AllWorks = () => {

    const projects = [
        {
            name: "Project Name",
            description: "Project Description",
            image: "https://www.hmago.com/wp-content/uploads/2023/08/53310b4a-2cf9-445a-9f4d-4b4de6f7f2f8_11zon.jpg"
        },
        {
            name: "Project Name",
            description: "Project Description",
            image: "https://www.hmago.com/wp-content/uploads/2023/08/53310b4a-2cf9-445a-9f4d-4b4de6f7f2f8_11zon.jpg"
        },
        {
            name: "Project Name",
            description: "Project Description",
            image: "https://www.hmago.com/wp-content/uploads/2023/08/53310b4a-2cf9-445a-9f4d-4b4de6f7f2f8_11zon.jpg"
        },
        {
            name: "Project Name",
            description: "Project Description",
            image: "https://www.hmago.com/wp-content/uploads/2023/08/53310b4a-2cf9-445a-9f4d-4b4de6f7f2f8_11zon.jpg"
        },
        {
            name: "Project Name",
            description: "Project Description",
            image: "https://www.hmago.com/wp-content/uploads/2023/08/53310b4a-2cf9-445a-9f4d-4b4de6f7f2f8_11zon.jpg"
        },
    ]

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                className={'w-full'}
                autoplay={{delay: 2000}}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1260: {
                        slidesPerView: 4
                    }
                }}
                loop={true}
            >

                {projects.map((project, index)=>(
                    <SwiperSlide>
                        <div style={{
                            backgroundImage: `url('https://www.hmago.com/wp-content/uploads/2023/08/53310b4a-2cf9-445a-9f4d-4b4de6f7f2f8_11zon.jpg')`
                        }} className={'p-5 h-[600px] bg-cover bg-bottom border-[1px] border-t-0 border-primary relative'}>
                            <div className={' z-0 inset-0 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/25 to-black'} />
                            <div className={'z-10 relative justify-end gap-3 flex flex-col text-white h-full'}>
                                <h1 className={'font-bold text-4xl font-josefin-sans tracking-tighter'} >{project.name}</h1>
                                <p className={'font-poppins text-lg opacity-75 tracking-normal'} >{project.description}</p>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


