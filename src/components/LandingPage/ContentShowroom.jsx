"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { tinaField } from "tinacms/dist/react";
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Play, Award, BarChart3, Star, Layers } from "lucide-react";

export const ContentShowroom = (props) => {
    const bgTheme = props?.bgTheme || "dark-glass";
    const layout = props?.layout || "split-media";

    const badgeText = props?.badgeText || "Engineering Innovation & Excellence";
    const subHeading = props?.subHeading || "HMA ASSOCIATES (SMC-PRIVATE) LIMITED";
    const heading = props?.heading || "Powering Commercial & Industrial Growth Across Pakistan";
    const description =
        props?.description ||
        "We engineer high-performance solar energy installations, heavy civil construction frameworks, and complex MEP infrastructure built for maximum reliability, safety, and long-term financial ROI.";
    const mainImage = props?.mainImage || "/AdobeStock_290512663-scaled.webp";
    const backgroundVideo = props?.backgroundVideo;
    const buttonText = props?.buttonText || "Explore Portfolio";
    const buttonLink = props?.buttonLink || "/work";
    const buttonStyle = props?.buttonStyle || "primary-arrow";
    const secondaryButtonText = props?.secondaryButtonText || "Get Quote";
    const secondaryButtonLink = props?.secondaryButtonLink || "/#contact";

    const defaultFeatures = [
        {
            title: "PEC C1 & AEDB V1 Certified",
            description: "Full regulatory license to execute megawatt-scale solar parks and heavy civil construction projects.",
            highlightValue: "Licensed",
        },
        {
            title: "25-Year Tier-1 Warranty",
            description: "Bloomberg Tier-1 solar modules, IP65 smart inverters, and high-efficiency LiFePO4 battery storage.",
            highlightValue: "Tier-1",
        },
        {
            title: "NEPRA Net-Metering Interconnection",
            description: "Complete DISCO grid licensing to export surplus power and slash utility bills by up to 90%.",
            highlightValue: "Net-Metered",
        },
    ];

    const features = props?.features && props.features.length > 0 ? props.features : defaultFeatures;

    const defaultStats = [
        { value: "50+ MW", label: "Solar Installed" },
        { value: "100%", label: "PEC Compliance" },
        { value: "500+", label: "Projects Completed" },
        { value: "24/7", label: "Active O&M Support" },
    ];

    const stats = props?.stats && props.stats.length > 0 ? props.stats : defaultStats;

    // Theme Styles Handler
    const getThemeStyles = () => {
        switch (bgTheme) {
            case "light-modern":
                return {
                    wrapper: "bg-slate-50 text-slate-900 border-y border-slate-200/80",
                    card: "bg-white border-slate-200/80 text-slate-900 shadow-xl",
                    badge: "bg-slate-900 text-white border-slate-800",
                    subhead: "text-primary font-bold uppercase tracking-widest text-xs sm:text-sm",
                    heading: "text-slate-900",
                    desc: "text-slate-600",
                    featureCard: "bg-slate-100/80 border-slate-200 text-slate-900 hover:bg-white hover:border-primary/40 shadow-sm",
                    statCard: "bg-slate-900 text-white border-slate-800 shadow-md",
                    orb1: "bg-primary/5",
                    orb2: "bg-blue-600/5",
                };
            case "gradient-blue":
                return {
                    wrapper: "bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white border-y border-white/10",
                    card: "bg-white/10 backdrop-blur-2xl border-white/20 text-white shadow-2xl",
                    badge: "bg-primary text-white border-primary/30",
                    subhead: "text-cyan-400 font-bold uppercase tracking-widest text-xs sm:text-sm",
                    heading: "text-white",
                    desc: "text-slate-200",
                    featureCard: "bg-white/10 backdrop-blur-xl border-white/15 text-white hover:bg-white/20 shadow-md",
                    statCard: "bg-white/10 backdrop-blur-md border-white/20 text-white shadow-lg",
                    orb1: "bg-cyan-500/20",
                    orb2: "bg-blue-500/20",
                };
            case "dark-zinc":
                return {
                    wrapper: "bg-zinc-950 text-white border-y border-zinc-800",
                    card: "bg-zinc-900 border-zinc-800 text-white shadow-2xl",
                    badge: "bg-zinc-800 text-amber-400 border-zinc-700",
                    subhead: "text-zinc-400 font-bold uppercase tracking-widest text-xs sm:text-sm",
                    heading: "text-white",
                    desc: "text-zinc-300",
                    featureCard: "bg-zinc-900/80 border-zinc-800 text-white hover:bg-zinc-800 shadow-md",
                    statCard: "bg-zinc-900 border-zinc-800 text-white shadow-md",
                    orb1: "bg-amber-500/10",
                    orb2: "bg-zinc-500/10",
                };
            case "dark-glass":
            default:
                return {
                    wrapper: "bg-slate-950 text-white border-y border-white/10",
                    card: "bg-slate-900/60 backdrop-blur-2xl border-white/10 text-white shadow-2xl",
                    badge: "bg-slate-900/90 text-primary border-white/20",
                    subhead: "text-primary font-bold uppercase tracking-widest text-xs sm:text-sm",
                    heading: "text-white",
                    desc: "text-slate-300",
                    featureCard: "bg-slate-900/80 backdrop-blur-xl border-white/10 text-white hover:border-primary/40 shadow-md",
                    statCard: "bg-slate-900/90 backdrop-blur-md border-white/10 text-white shadow-lg",
                    orb1: "bg-primary/20",
                    orb2: "bg-blue-600/15",
                };
        }
    };

    const theme = getThemeStyles();

    return (
        <section
            data-tina-field={tinaField(props)}
            className={`w-full py-16 sm:py-24 relative overflow-hidden select-none font-poppins ${theme.wrapper}`}
        >
            {/* Ambient Lighting Background Orbs */}
            <div className={`absolute top-10 left-10 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${theme.orb1}`} />
            <div className={`absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none ${theme.orb2}`} />

            <div className="max-w-[1260px] mx-auto px-5 xl:px-0 relative z-10 space-y-16">
                {/* LAYOUT 1: Simple Picture & Text Side-by-Side (Image Left) */}
                {layout === "simple-side-by-side" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900">
                                <Image
                                    src={mainImage}
                                    alt={heading || "Picture"}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-6">
                            {badgeText && (
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md">
                                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                    <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                                </div>
                            )}
                            {subHeading && <p className={theme.subhead} data-tina-field={tinaField(props, "subHeading")}>{subHeading}</p>}
                            {heading && (
                                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans leading-[1.15] ${theme.heading}`} data-tina-field={tinaField(props, "heading")}>
                                    {heading}
                                </h2>
                            )}
                            {description && (
                                <p className={`text-base sm:text-lg leading-relaxed ${theme.desc}`} data-tina-field={tinaField(props, "description")}>
                                    {description}
                                </p>
                            )}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                {buttonText && (
                                    <div data-tina-field={tinaField(props, "buttonText")}>
                                        <Button link={buttonLink || "#"} variant={buttonStyle}>
                                            {buttonText}
                                        </Button>
                                    </div>
                                )}
                                {secondaryButtonText && (
                                    <Link
                                        href={secondaryButtonLink || "#"}
                                        data-tina-field={tinaField(props, "secondaryButtonText")}
                                        className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white hover:bg-white/10 font-medium text-sm transition-all flex items-center gap-2"
                                    >
                                        <span>{secondaryButtonText}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* LAYOUT 2: Simple Picture & Text Side-by-Side (Image Right) */}
                {layout === "reversed-side-by-side" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                        <div className="lg:col-span-6 space-y-6 lg:order-1 order-2">
                            {badgeText && (
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border backdrop-blur-md">
                                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                                    <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                                </div>
                            )}
                            {subHeading && <p className={theme.subhead} data-tina-field={tinaField(props, "subHeading")}>{subHeading}</p>}
                            {heading && (
                                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans leading-[1.15] ${theme.heading}`} data-tina-field={tinaField(props, "heading")}>
                                    {heading}
                                </h2>
                            )}
                            {description && (
                                <p className={`text-base sm:text-lg leading-relaxed ${theme.desc}`} data-tina-field={tinaField(props, "description")}>
                                    {description}
                                </p>
                            )}
                            <div className="flex flex-wrap items-center gap-4 pt-2">
                                {buttonText && (
                                    <div data-tina-field={tinaField(props, "buttonText")}>
                                        <Button link={buttonLink || "#"} variant={buttonStyle}>
                                            {buttonText}
                                        </Button>
                                    </div>
                                )}
                                {secondaryButtonText && (
                                    <Link
                                        href={secondaryButtonLink || "#"}
                                        data-tina-field={tinaField(props, "secondaryButtonText")}
                                        className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white hover:bg-white/10 font-medium text-sm transition-all flex items-center gap-2"
                                    >
                                        <span>{secondaryButtonText}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative lg:order-2 order-1">
                            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900">
                                <Image
                                    src={mainImage}
                                    alt={heading || "Picture"}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* LAYOUT 3: Split 2-Column with Floating Media & Badge */}
                {layout === "split-media" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="space-y-3">
                                {badgeText && (
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md border backdrop-blur-md">
                                        <Award className="w-4 h-4 text-amber-400" />
                                        <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                                    </div>
                                )}

                                {subHeading && (
                                    <p data-tina-field={tinaField(props, "subHeading")} className={theme.subhead}>
                                        {subHeading}
                                    </p>
                                )}

                                {heading && (
                                    <h2
                                        data-tina-field={tinaField(props, "heading")}
                                        className={`text-3xl sm:text-4xl lg:text-5xl font-bold font-josefin-sans tracking-tight leading-[1.12] ${theme.heading}`}
                                    >
                                        {heading}
                                    </h2>
                                )}
                            </div>

                            {description && (
                                <p
                                    data-tina-field={tinaField(props, "description")}
                                    className={`text-base sm:text-lg leading-relaxed ${theme.desc}`}
                                >
                                    {description}
                                </p>
                            )}

                            <div data-tina-field={tinaField(props, "features")} className="space-y-4 pt-2">
                                {features.map((feat, idx) => (
                                    <div
                                        key={idx}
                                        className={`p-5 rounded-2xl border transition-all duration-300 flex items-start justify-between gap-4 ${theme.featureCard}`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-primary/30">
                                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-base font-bold">{feat.title}</h4>
                                                {feat.description && (
                                                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
                                                        {feat.description}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        {feat.highlightValue && (
                                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-[11px] font-semibold uppercase shrink-0">
                                                {feat.highlightValue}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-3">
                                {buttonText && (
                                    <div data-tina-field={tinaField(props, "buttonText")}>
                                        <Button link={buttonLink || "#"} variant={buttonStyle}>
                                            {buttonText}
                                        </Button>
                                    </div>
                                )}

                                {secondaryButtonText && (
                                    <Link
                                        href={secondaryButtonLink || "#"}
                                        data-tina-field={tinaField(props, "secondaryButtonText")}
                                        className="px-6 py-3.5 rounded-xl border border-white/20 hover:border-white hover:bg-white/10 font-medium text-sm transition-all flex items-center gap-2 shadow-md"
                                    >
                                        <span>{secondaryButtonText}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <div
                                data-tina-field={tinaField(props, "mainImage")}
                                className="relative w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group"
                            >
                                {backgroundVideo ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                        src={backgroundVideo}
                                    />
                                ) : (
                                    <Image
                                        src={mainImage}
                                        alt={heading || "Showroom photo"}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />

                                <div className="absolute top-6 right-6 z-20">
                                    <span className="px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider shadow-xl flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                                        <span>Engineering Standard</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* LAYOUT 4: Centered Master Banner with Hero Media */}
                {layout === "centered-banner" && (
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        {badgeText && (
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg border backdrop-blur-md">
                                <ShieldCheck className="w-4 h-4 text-amber-400" />
                                <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                            </div>
                        )}

                        {heading && (
                            <h2
                                data-tina-field={tinaField(props, "heading")}
                                className={`text-3xl sm:text-5xl lg:text-6xl font-bold font-josefin-sans tracking-tight leading-[1.1] ${theme.heading}`}
                            >
                                {heading}
                            </h2>
                        )}

                        {description && (
                            <p
                                data-tina-field={tinaField(props, "description")}
                                className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${theme.desc}`}
                            >
                                {description}
                            </p>
                        )}

                        <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 mt-8 group">
                            {backgroundVideo ? (
                                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={backgroundVideo} />
                            ) : (
                                <Image src={mainImage} alt={heading || "Media"} fill className="object-cover w-full h-full" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
                        </div>
                    </div>
                )}

                {/* LAYOUT 5: 3-Card Feature Showcase Grid */}
                {layout === "feature-grid" && (
                    <div className="space-y-12">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            {badgeText && (
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md border backdrop-blur-md">
                                    <ShieldCheck className="w-4 h-4 text-amber-400" />
                                    <span data-tina-field={tinaField(props, "badgeText")}>{badgeText}</span>
                                </div>
                            )}

                            {heading && (
                                <h2
                                    data-tina-field={tinaField(props, "heading")}
                                    className={`text-3xl sm:text-5xl font-bold font-josefin-sans tracking-tight ${theme.heading}`}
                                >
                                    {heading}
                                </h2>
                            )}
                        </div>

                        <div data-tina-field={tinaField(props, "features")} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className={`p-8 rounded-3xl border shadow-xl flex flex-col justify-between gap-6 hover:-translate-y-2 transition-all duration-500 ${theme.featureCard}`}
                                >
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary border border-primary/30 flex items-center justify-center">
                                            <Zap className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <h3 className="text-xl font-bold font-josefin-sans">{feat.title}</h3>
                                        <p className="text-sm opacity-80 leading-relaxed">{feat.description}</p>
                                    </div>

                                    {feat.highlightValue && (
                                        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-primary">
                                            <span>{feat.highlightValue}</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* LAYOUT 6: Stacked Title Top with 4-Card Grid Below */}
                {layout === "stacked-hero-cards" && (
                    <div className="space-y-12">
                        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl text-center max-w-4xl mx-auto space-y-4">
                            {badgeText && (
                                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-semibold uppercase tracking-wider">
                                    {badgeText}
                                </span>
                            )}
                            <h2 className="text-3xl sm:text-5xl font-bold font-josefin-sans">{heading}</h2>
                            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">{description}</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.concat(features.slice(0, 4 - features.length)).slice(0, 4).map((feat, idx) => (
                                <div key={idx} className={`p-6 rounded-2xl border shadow-lg space-y-3 ${theme.featureCard}`}>
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center">
                                        <Layers className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <h4 className="text-lg font-bold font-josefin-sans">{feat.title}</h4>
                                    <p className="text-xs opacity-80 leading-relaxed">{feat.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* LAYOUT 7: Asymmetric Large Picture Left & Text Details Right */}
                {layout === "asymmetric-media-left" && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="lg:col-span-7 relative">
                            <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/15">
                                <Image src={mainImage} alt={heading || "Asymmetric photo"} fill className="object-cover w-full h-full" />
                            </div>
                        </div>
                        <div className="lg:col-span-5 space-y-6">
                            {badgeText && <span className="px-4 py-1 rounded-full bg-slate-900 text-white text-xs font-semibold uppercase">{badgeText}</span>}
                            <h2 className="text-3xl sm:text-4xl font-bold font-josefin-sans">{heading}</h2>
                            <p className="text-sm sm:text-base leading-relaxed opacity-90">{description}</p>
                            <div className="pt-2">
                                <Button link={buttonLink || "#"} variant={buttonStyle}>{buttonText}</Button>
                            </div>
                        </div>
                    </div>
                )}

                {/* LAYOUT 8: Glassmorphic Stats Dashboard & Key Highlights */}
                {layout === "glass-dashboard-stats" && (
                    <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                {badgeText && <span className="text-xs font-bold text-primary uppercase tracking-widest">{badgeText}</span>}
                                <h2 className="text-3xl sm:text-4xl font-bold font-josefin-sans">{heading}</h2>
                            </div>
                            <Button link={buttonLink || "#"} variant={buttonStyle}>{buttonText}</Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-white/10">
                            {stats.map((st, idx) => (
                                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1">
                                    <p className="text-3xl font-bold text-primary">{st.value}</p>
                                    <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">{st.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Optional Bottom Metrics Strip for non-dashboard layouts */}
                {layout !== "glass-dashboard-stats" && stats.length > 0 && (
                    <div
                        data-tina-field={tinaField(props, "stats")}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6"
                    >
                        {stats.map((st, idx) => (
                            <div
                                key={idx}
                                className={`p-6 rounded-2xl border shadow-lg text-center space-y-1 ${theme.statCard}`}
                            >
                                <p className="text-2xl sm:text-4xl font-bold font-josefin-sans text-primary tracking-tight">
                                    {st.value}
                                </p>
                                <p className="text-xs sm:text-sm font-medium opacity-80 uppercase tracking-wider">
                                    {st.label}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
