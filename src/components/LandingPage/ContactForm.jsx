import { Copy, LocationEdit, Mail, Pencil, Phone, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { useState } from "react";
import { sendMail } from "@/lib/send-mail";

export const ContactForm = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const [msg, setMsg] = useState("")

    const handleForm = async () => {
        try {
            const mailText = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nCity: ${city}\nMessage: ${msg}`;
            await sendMail({
                email: email,
                subject: 'New Contact Us Form',
                text: mailText,
                sendTo: "hmaassociates269@gmail.com"
            });
            await sendMail({
                email: email,
                subject: 'New Contact Us Form',
                text: mailText,
                sendTo: "info@hmago.com"
            });
        } catch (error) {
            alert('Failed To send application.');
        }
    }

    return (
        <div id="contact" className={'w-full bg-secondary-background justify-center items-center flex flex-col py-24'}>
            <div className={'max-w-[1260px] w-full items-center grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 px-5 xl:px-0'}>
                <div className={'space-y-5'}>
                    <p data-tina-field={tinaField(props, "subheading")} className={'text-primary font-bold font-josefin-sans text-xl tracking-tighter flex flex-row gap-1'}><Copy /> {props.subheading}</p>
                    <p data-tina-field={tinaField(props, "heading")} className={'text-white font-bold font-josefin-sans text-4xl tracking-tighter '}>{props.heading}</p>
                    <p data-tina-field={tinaField(props, "description")} className={'text-white text-md opacity-75'}>{props.description}</p>
                    <div className={'flex flex-row gap-4 items-center'}>
                        <button
                            className="p-4 rounded-full backdrop-blur-lg border border-white/10 bg-gradient-to-tr from-primary/60 to-primary/40 shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:scale-110 hover:rotate-3 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-white/30 hover:bg-gradient-to-tr hover:from-white/10 hover:to-primary/40 group relative overflow-hidden"
                        >
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                            ></div>
                            <div className="relative text-white z-10">
                                <Phone fill={'#ffffff'} size={25} />
                            </div>
                        </button>
                        <div>
                            <p className={'text-white'}>Call Us Anytime:</p>
                            <p data-tina-field={tinaField(props, "phone")} className={'text-2xl font-bold text-white'}>{props.phone}</p>
                        </div>
                    </div>

                </div>
                <div className={'bg-white rounded-xl w-full h-full px-7 py-10 space-y-5'}>
                    <h1 className={'text-4xl text-center font-bold font-josefin-sans '}>Request A Quote</h1>
                    <div className={'flex w-full flex-col gap-7 items-center'}>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input value={name} onChange={(e) => setName(e.target.value)} className={'w-full outline-none focus:outline-none ring-0'} type="text" placeholder={'Your Name*'} required />
                            <UserRound className={'opacity-25'} />
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className={'w-full outline-none focus:outline-none ring-0'} type="email" placeholder={'Email Address*'} required />
                            <Mail className={'opacity-25'} />
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className={'w-full outline-none focus:outline-none ring-0'} type="number" placeholder={'Phone Number*'} required />
                            <Phone className={'opacity-25'} />
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <input value={city} onChange={(e) => setCity(e.target.value)} className={'w-full outline-none focus:outline-none ring-0'} type="text" placeholder={'City*'} required />
                            <LocationEdit className={'opacity-25'} />
                        </div>
                        <div className={'w-full rounded-xl flex flex-row gap-4 items-center bg-black/5 py-4 px-5'}>
                            <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={6} className={'w-full outline-none focus:outline-none ring-0'} placeholder={'Write Your Message*'} required />
                            <Pencil className={'opacity-25'} />
                        </div>
                        <Button onClick={() => handleForm()} className={'w-full '} >Send Message</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}