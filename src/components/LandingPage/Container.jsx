"use client"

import {Copy} from "lucide-react";
import {Button} from "@/components/ui/Button";
import {tinaField} from "tinacms/dist/react";
import {TinaMarkdown} from "tinacms/dist/rich-text";
import {components} from "@/components/ui/MarkdownComponents";
import Image from "next/image";

export const Container = (props) => {

    return (
        <div className={'flex  flex-col justify-center  py-20 items-center'}>
            <div className={'max-w-[1260px] grid grid-cols-1 items-center  px-5 xl:px-0 lg:grid-cols-2 gap-20 xl:gap-10 w-full'}>
                {props.direction === "right" && props.image && <Image width={300} height={300} data-tina-field={tinaField(props, 'image')} alt={props.image} src={props.image} className={'rounded-xl w-full max-h-[500px] object-cover h-full'} />}
                <div className={'space-y-5'}>
                    {props.subHeading !== "" && <div className={'flex flex-row gap-2 items-center'}>
                        <h1 data-tina-field={tinaField(props, 'subHeading')} className={'text-xl font-bold font-josefin-sans gap-2 text-primary flex flex-row '}> <Copy/> {props.subHeading}</h1>
                    </div>}
                    <h1 data-tina-field={tinaField(props, 'heading')} className={'text-4xl font-bold font-josefin-sans tracking-tighter'} >{props.heading}</h1>

                   <div data-tina-field={tinaField(props, 'text')}>
                       <TinaMarkdown components={components}  content={props.text}/>
                   </div>
                    {props.buttonText && (
                      <div data-tina-field={tinaField(props, 'buttonText')} className={'w-fit'}>
                          <Button link={props.buttonLink} >{props.buttonText}</Button>
                          </div>
                    )}
                </div>
                {props.direction === "left" && props.image && <Image width={300} height={300}  data-tina-field={tinaField(props, 'image')} alt={props.image} src={props.image} className={'rounded-xl w-full max-h-[500px] object-cover h-full'} />}
            </div>
        </div>
    )
}