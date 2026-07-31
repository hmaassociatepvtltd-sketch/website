"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
    FileText, 
    Send, 
    CheckCircle2, 
    User, 
    Mail, 
    Phone, 
    Building, 
    MapPin, 
    Zap, 
    ShieldCheck, 
    ArrowLeft 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { sendMail } from "@/lib/send-mail";

export default function QuotationPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [projectType, setProjectType] = useState("Solar Commercial");
    const [capacity, setCapacity] = useState("10kW - 50kW");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const mailText = `=== NEW QUOTATION REQUEST ===\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity/Location: ${city}\nProject Scope: ${projectType}\nEstimated Capacity: ${capacity}\nAdditional Requirements: ${message}`;
            
            await sendMail({
                email,
                subject: `New Quotation Request - ${name} (${projectType})`,
                text: mailText,
                sendTo: "hmaassociates269@gmail.com",
            });

            await sendMail({
                email,
                subject: `New Quotation Request - ${name} (${projectType})`,
                text: mailText,
                sendTo: "info@hmago.com",
            });

            setSubmitted(true);
        } catch (error) {
            console.error("Quotation Submission Error:", error);
            alert("There was an issue sending your quotation request. Please call our direct helpline.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full bg-slate-50 dark:bg-zinc-950 min-h-screen pt-28 pb-24 flex justify-center items-center">
            <div className="max-w-[1260px] w-full px-5 xl:px-0 space-y-12">
                {/* Back to Home Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-poppins text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Heading & Value Props */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-poppins bg-primary/10 text-primary border border-primary/20">
                                <FileText className="w-3.5 h-3.5" />
                                Official Engineering Proposal
                            </span>
                            <h1 className="text-4xl sm:text-5xl font-bold font-josefin-sans tracking-tight text-gray-900 dark:text-white leading-tight">
                                Request a Detailed Project Quotation
                            </h1>
                            <p className="text-base md:text-lg font-poppins text-gray-600 dark:text-gray-300 leading-relaxed">
                                Get a custom turnkey cost estimate, equipment specification sheet, and ROI analysis tailored for your commercial, industrial, or residential site.
                            </p>
                        </div>

                        {/* Value Bullet Cards */}
                        <div className="space-y-4 pt-2">
                            {[
                                { title: "Turnkey Cost Breakdown", desc: "Complete equipment, racking, wiring, & net-metering pricing." },
                                { title: "Tier-1 Equipment Specs", desc: "Official datasheets for JA Solar, Longi, Canadian Solar, & GoodWe inverters." },
                                { title: "Free On-Site Feasibility", desc: "Complimentary engineering assessment by certified solar experts." },
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-sm flex items-start gap-4">
                                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold font-josefin-sans text-gray-900 dark:text-white">{item.title}</h4>
                                        <p className="text-xs font-poppins text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Quotation Form Container */}
                    <div className="lg:col-span-7 bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl">
                        {submitted ? (
                            <div className="py-12 text-center space-y-6">
                                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold font-josefin-sans text-gray-900 dark:text-white">
                                        Quotation Request Received!
                                    </h3>
                                    <p className="text-base font-poppins text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                                        Thank you, <span className="font-semibold text-primary">{name}</span>. Our senior technical engineer will review your requirements and reach out shortly with an official quotation.
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <Link href="/">
                                        <Button variant="primary-arrow">Return to Homepage</Button>
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h3 className="text-2xl font-bold font-josefin-sans text-gray-900 dark:text-white border-b border-gray-100 dark:border-zinc-800 pb-4">
                                    Project Information
                                </h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                                            <User className="w-3.5 h-3.5 text-primary" /> Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Engr. Ali Raza"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                                            <Mail className="w-3.5 h-3.5 text-primary" /> Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="ali@company.com"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Phone Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                                            <Phone className="w-3.5 h-3.5 text-primary" /> Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="+92 300 1234567"
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>

                                    {/* City / Location Input */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-primary" /> City / Location *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder="Lahore, Karachi, Islamabad..."
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Project Type Select */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                                            <Building className="w-3.5 h-3.5 text-primary" /> Project Category
                                        </label>
                                        <select
                                            value={projectType}
                                            onChange={(e) => setProjectType(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors"
                                        >
                                            <option value="Solar Commercial & Industrial">Solar Commercial & Industrial</option>
                                            <option value="Solar Residential">Solar Residential System</option>
                                            <option value="MEP Electrical Engineering">MEP Electrical Engineering</option>
                                            <option value="Solar Tube Well / Agriculture">Solar Agriculture & Tube Well</option>
                                        </select>
                                    </div>

                                    {/* Capacity Select */}
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                                            <Zap className="w-3.5 h-3.5 text-primary" /> System Capacity
                                        </label>
                                        <select
                                            value={capacity}
                                            onChange={(e) => setCapacity(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors"
                                        >
                                            <option value="5kW - 15kW">5kW - 15kW System</option>
                                            <option value="15kW - 50kW">15kW - 50kW System</option>
                                            <option value="50kW - 150kW">50kW - 150kW Commercial</option>
                                            <option value="150kW+ Industrial">150kW+ Industrial Grid</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Additional Requirements */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold font-poppins uppercase tracking-wider text-gray-700 dark:text-gray-300">
                                        Project Scope & Custom Requirements (Optional)
                                    </label>
                                    <textarea
                                        rows={4}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Specify any preferences (e.g. Hybrid System, On-grid Net-metering, specific brand preferences)..."
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-gray-900 dark:text-white text-sm font-poppins focus:outline-none focus:border-primary transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 rounded-xl font-poppins font-semibold text-white bg-primary hover:bg-primary/90 shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                >
                                    {loading ? (
                                        <span>Submitting Proposal Request...</span>
                                    ) : (
                                        <>
                                            <span>Submit Quotation Request</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
