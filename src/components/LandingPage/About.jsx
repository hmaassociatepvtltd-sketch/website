import {ArrowRight, Copy} from "lucide-react";

export const About = () => {
    return (
        <div>
            <div className={'flex flex-col justify-center  py-20 items-center'}>
                <div className={'max-w-[1260px] grid grid-cols-1  px-5 xl:px-0 lg:grid-cols-2 gap-20 xl:gap-10 w-full'}>

                    <img alt={'about'} src={'https://aptinverex.com/assets/img/update1/normal/why_7.png'} className={'rounded-xl w-full h-full'} />
                    <div className={'space-y-5'}>
                        <h1 className={'text-xl font-bold font-josefin-sans gap-2 text-primary flex flex-row '}> <Copy/> HMA Associates & Co.</h1>
                        <h1 className={'text-4xl font-bold font-josefin-sans tracking-tighter'} >Complete Solar Systems for Offices & Industries</h1>
                        <p className={'text-md opacity-75'}>Welcome to HMA Associates & Co., a trusted leader in providing quality solutions for Construction Sector, Solar Energy, Real Estate Business, Accounting and Tax Consultancy. We take great pride in our attention to detail and the quality of our services, ensuring that each customer receives highest satisfaction from our services. We look forward to working together to reach your business goals.</p>
                        <button className={'bg-primary cursor-pointer text-white px-10 py-4 hover:bg-primary/80 transition-all duration-300 rounded-xl flex flex-row gap-2 items-center'}>Learn More <ArrowRight/> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}