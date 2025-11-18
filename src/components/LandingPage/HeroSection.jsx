"use client";

import { Button } from "@/components/ui/Button";
import {tinaField} from "tinacms/dist/react";


export const HeroSection = (props) => {


    return (
        <div
            style={{
                backgroundImage: `url('${props?.backgroundImage || 'https://aptinverex.com/assets/img/update1/hero/hero_bg_8_2.png'}')`,
            }}
            className={'w-full bg-cover bg-no-repeat py-10 h-full relative justify-center items-center flex flex-col'}
        >
            <div className={'w-full h-full absolute top-0 left-0 bg-black opacity-25'} />
            <div className={`w-full px-5 xl:px-0 z-10 h-full items-end xl:items-center py-10 grid grid-cols-1 xl:grid-cols-2 inset-0 max-w-[1260px] ${ props?.description ? 'min-h-[80vh]' : 'min-h-[50vh]' } `}>
                <div className={'flex flex-col gap-5 max-w-[700px]'}>
                    <h1
                        data-tina-field={tinaField(props, 'title')}
                        className={'text-white uppercase col-span-1 font-josefin-sans font-bold text-5xl xl:text-7xl tracking-tighter'}
                    >
                        {props?.title}
                    </h1>
                    <p
                        data-tina-field={tinaField(props, 'description')}
                        className={'text-white col-span-1 font-poppins text-sm  xl:text-lg opacity-75 tracking-normal'}
                    >
                        {props?.description}
                    </p>
                    {props?.buttonText && (
                        <div data-tina-field={tinaField(props, 'buttonText')} className={'w-fit'}>
                            <Button data-tina-field={tinaField(props, 'buttonText')} link={props?.buttonLink || '#'}>{props.buttonText}</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

