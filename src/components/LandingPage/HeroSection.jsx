import {Button} from "@/components/ui/Button";

export const HeroSection = ({image="", heading="", text="", button="", link=""}) => {
    return (
        <div style={{
            backgroundImage: "url('https://aptinverex.com/assets/img/update1/hero/hero_bg_8_2.png')",
        }} className={'w-full bg-cover bg-no-repeat h-full relative justify-center items-center flex flex-col'}>
            <div className={'w-full h-full absolute top-0 left-0 bg-black opacity-75'} />
            {image.length > 0 && (
                <img alt={image} className={'absolute hidden xl:block max-w-[800px] top-0 right-0 '} src={image} />
            )}
            <div className={`w-full px-5 xl:px-0 z-10 h-full items-end xl:items-center py-10 grid grid-cols-1 xl:grid-cols-2 inset-0 max-w-[1260px] ${image.length > 0 ? 'min-h-[80vh]' : 'min-h-[60vh]'}`}>
              <div className={'flex flex-col gap-5 max-w-[700px]'}>
                  {heading.length > 0 && (
                      <h1 className={'text-white col-span-1 font-josefin-sans font-bold text-6xl xl:text-7xl tracking-tighter'}>
                        {heading}
                      </h1>
                  )}
                  {text.length > 0 && (
                      <p className={'text-white col-span-1 font-poppins text-lg opacity-75 tracking-normal'}>
                        {text}
                      </p>
                  )}
                  {button.length > 0 && (
                     <Button link={link}>{button}</Button>
                  )}
              </div>
            </div>
        </div>
    )
}