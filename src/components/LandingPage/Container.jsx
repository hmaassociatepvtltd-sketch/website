import {Copy} from "lucide-react";
import {Button} from "@/components/ui/Button";

export const Container = ({image="", subHeading="", heading="", text="", button="", link="", directtion="left"}) => {
    return (
        <div className={'flex  flex-col justify-center  py-20 items-center'}>
            <div className={'max-w-[1260px] grid grid-cols-1 items-center  px-5 xl:px-0 lg:grid-cols-2 gap-20 xl:gap-10 w-full'}>
                {directtion === "right" && image.length > 0 && <img alt={image} src={image} className={'rounded-xl w-full max-h-[500px] object-cover h-full'} />}
                <div className={'space-y-5'}>
                    {subHeading && <div className={'flex flex-row gap-2 items-center'}>
                        <h1 className={'text-xl font-bold font-josefin-sans gap-2 text-primary flex flex-row '}> <Copy/> {subHeading}</h1>
                    </div>}
                    <h1 className={'text-4xl font-bold font-josefin-sans tracking-tighter'} >{heading}</h1>
                    <p className={'text-md opacity-75'}>{text}</p>
                    {button.length > 0 && (
                        <Button link={link} >{button}</Button>
                    )}
                </div>
                {directtion === "left" && image.length > 0 && <img alt={image} src={image} className={'rounded-xl w-full max-h-[500px] object-cover h-full'} />}
            </div>
        </div>
    )
}