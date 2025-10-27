import {HeroSection} from "@/components/LandingPage/HeroSection";
import Link from "next/link";
import Image from "next/image";

export const AllProducts = ({groupedProducts, title}) => {
    return (
        <div>
            <HeroSection title={title} />
           <div className={'w-full h-full justify-center items-center flex'}>
               <div className={'w-full max-w-[1260px] px-5 xl:px-0 py-20 pb-52 h-full relative flex flex-col gap-40'}>
                   {groupedProducts?.map((group, index) => (
                       <Category key={index} group={group} />
                   ))}
               </div>
           </div>
        </div>
    )
}


const Category = ({group}) => {
    return (
        <div className={'flex flex-col gap-5'} >
            <h1 className={'text-4xl font-josefin-sans text-primary tracking-tighter font-bold'}>{group.name}</h1>
            <div className={'flex flex-row flex-wrap  gap-10'}>
                {group.items?.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </div>
        </div>
    )
}

const Product = ({product}) => {


    return (
        <Link href={`/products/detail/${product._sys.basename}`} className={'flex max-w-[420px] col-span-1 w-fit hover:scale-[1.010] hover:cursor-pointer group hover:bg-primary/10 p-5 rounded-xl transition-all duration-300 flex-col gap-10'} >
            <Image width={250} height={250} className={'w-[400px] object-cover rounded-xl'} src={product.image} alt={product.name} />
            <h1 className={'text-xl font-semibold group-hover:text-primary transition-all duration-300 text-center tracking-tighter'}>{product.name}</h1>
        </Link>
    )
}