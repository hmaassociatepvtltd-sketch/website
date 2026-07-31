"use client";

import { useState } from "react";
import { UserRound, Mail, Phone, MapPin, Pencil, CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { sendMail } from "@/lib/send-mail";

export const ContactForm = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [msg, setMsg] = useState("");
    const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

    const handleForm = async (e) => {
        if (e) e.preventDefault();
        if (!name || !email || !msg) return;

        setStatus("loading");
        try {
            const mailText = `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nCity: ${city}\nMessage: ${msg}`;
            await sendMail({
                email: email,
                subject: 'New Contact Us Form Request',
                text: mailText,
                sendTo: "hmaassociates269@gmail.com"
            });
            await sendMail({
                email: email,
                subject: 'New Contact Us Form Request',
                text: mailText,
                sendTo: "info@hmago.com"
            });
            setStatus("success");
            setName("");
            setEmail("");
            setPhone("");
            setCity("");
            setMsg("");
        } catch (error) {
            console.error("Form error:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative w-full bg-gradient-to-b from-slate-950 via-[#000322] to-slate-950 py-20 md:py-28 overflow-hidden text-white font-poppins">
            {/* Background Ambient Decorative Lights */}
            <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Heading & Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Subheading Badge */}
                        {props.subheading && (
                            <div className="w-fit">
                                <span
                                    data-tina-field={tinaField(props, "subheading")}
                                    className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30 shadow-sm"
                                >
                                    {props.subheading}
                                </span>
                            </div>
                        )}

                        {/* Main Heading */}
                        <h2
                            data-tina-field={tinaField(props, "heading")}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight leading-[1.15] text-white"
                        >
                            {props.heading || "You Get Free Consultation For Any Help"}
                        </h2>

                        {/* Description */}
                        {props.description && (
                            <p
                                data-tina-field={tinaField(props, "description")}
                                className="text-slate-300 text-base md:text-lg leading-relaxed"
                            >
                                {props.description}
                            </p>
                        )}

                        {/* Phone Call Widget */}
                        {props.phone && (
                            <div className="pt-4 flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md w-fit">
                                <a
                                    href={`tel:${props.phone}`}
                                    className="w-13 h-13 rounded-xl bg-gradient-to-tr from-primary to-indigo-600 flex items-center justify-center text-white shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 shrink-0"
                                >
                                    <Phone className="w-6 h-6" />
                                </a>
                                <div>
                                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block">
                                        Call Us Anytime:
                                    </span>
                                    <p
                                        data-tina-field={tinaField(props, "phone")}
                                        className="text-xl sm:text-2xl font-bold font-josefin-sans text-white tracking-wide"
                                    >
                                        {props.phone}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Modernized Contact Form Card */}
                    <div className="lg:col-span-7">
                        <div className="bg-slate-900/90 border border-slate-800 shadow-2xl rounded-3xl p-7 sm:p-10 backdrop-blur-xl relative overflow-hidden">
                            {/* Card Accent Top Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-indigo-500 to-purple-600" />

                            <div className="space-y-6">
                                <div className="space-y-2 text-center sm:text-left">
                                    <h3 className="text-2xl sm:text-3xl font-bold font-josefin-sans tracking-tight text-white">
                                        Request A Quote
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-400">
                                        Fill out the form below and our engineering team will get back to you shortly.
                                    </p>
                                </div>

                                {status === "success" ? (
                                    <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 my-6">
                                        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                                        <h4 className="text-xl font-bold text-white font-josefin-sans">
                                            Thank You!
                                        </h4>
                                        <p className="text-sm text-slate-300">
                                            Your request has been submitted successfully. Our team will contact you soon.
                                        </p>
                                        <button
                                            onClick={() => setStatus("idle")}
                                            className="px-6 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/90 transition-colors"
                                        >
                                            Send Another Request
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleForm} className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* Name Input */}
                                            <div className="relative rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all p-3.5 flex items-center gap-3">
                                                <UserRound className="w-5 h-5 text-slate-400 shrink-0" />
                                                <input
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none font-poppins"
                                                    type="text"
                                                    placeholder="Your Name *"
                                                    required
                                                />
                                            </div>

                                            {/* Email Input */}
                                            <div className="relative rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all p-3.5 flex items-center gap-3">
                                                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none font-poppins"
                                                    type="email"
                                                    placeholder="Email Address *"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* Phone Input */}
                                            <div className="relative rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all p-3.5 flex items-center gap-3">
                                                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                                                <input
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none font-poppins"
                                                    type="tel"
                                                    placeholder="Phone Number *"
                                                    required
                                                />
                                            </div>

                                            {/* City Input */}
                                            <div className="relative rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all p-3.5 flex items-center gap-3">
                                                <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
                                                <input
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none font-poppins"
                                                    type="text"
                                                    placeholder="City *"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Message Input */}
                                        <div className="relative rounded-2xl bg-slate-950/70 border border-slate-800 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/50 transition-all p-3.5 flex items-start gap-3">
                                            <Pencil className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                                            <textarea
                                                value={msg}
                                                onChange={(e) => setMsg(e.target.value)}
                                                rows={4}
                                                className="w-full bg-transparent text-white placeholder:text-slate-500 text-sm outline-none font-poppins resize-none"
                                                placeholder="Write Your Message *"
                                                required
                                            />
                                        </div>

                                        {status === "error" && (
                                            <p className="text-xs text-rose-400">
                                                Failed to send application. Please try again.
                                            </p>
                                        )}

                                        {/* Submit Button */}
                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-indigo-600 text-white font-semibold font-poppins text-base shadow-xl hover:shadow-primary/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                                            >
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        <span>Sending Message...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Send Message</span>
                                                        <ArrowRight className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};